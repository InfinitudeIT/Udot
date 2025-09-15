import os
from datetime import datetime
from io import BytesIO

from fastapi import FastAPI, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from fastapi import BackgroundTasks
from datetime import datetime
from openpyxl import Workbook
import aiosmtplib
from email.message import EmailMessage
from dotenv import load_dotenv

import io
import openpyxl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication


load_dotenv()

# soda pjjf rlvx ojgx
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USERNAME = os.getenv("SMTP_USERNAME", "hr.bhargavi@urbandot.in")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD", "rwlillbppknqeoxw")
SENDER_EMAIL = os.getenv("SENDER_EMAIL", SMTP_USERNAME)
RECIPIENT_EMAIL = os.getenv("RECIPIENT_EMAIL", "hr.bhargavi@urbandot.in")
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000,http://127.0.0.1:3000").split(",")


app = FastAPI(title="Urbandot Backend", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://urbandot.in", "https://www.urbandot.in"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Feedback(BaseModel):
    name: str
    lastname: str
    email: EmailStr
    phone_number: str = Field(..., description="Phone number as string to preserve formatting")
    category: str
    feedback: Optional[str] = ""
    submittedAt: Optional[datetime] = None


class CareerApplication(BaseModel):
    name: str
    email: EmailStr
    phone: str
    jobRole: str
    location: str
    experience: Optional[str] = ""
    coverLetter: Optional[str] = ""
    submittedAt: Optional[datetime] = None


def _workbook_from_dict(title: str, data: dict) -> BytesIO:
    workbook = Workbook()
    sheet = workbook.active
    sheet.title = title[:31] if title else "Sheet1"

    # Headers
    headers = list(data.keys())
    sheet.append(headers)
    # Values (stringify to avoid Excel type surprises)
    sheet.append(["" if v is None else str(v) for v in data.values()])

    stream = BytesIO()
    workbook.save(stream)
    stream.seek(0)
    return stream


def _build_email(subject: str, body: str, attachment_stream: BytesIO, attachment_filename: str) -> EmailMessage:
    msg = EmailMessage()
    msg["From"] = SENDER_EMAIL
    msg["To"] = RECIPIENT_EMAIL
    msg["Subject"] = subject
    msg.set_content(body)

    attachment_bytes = attachment_stream.read()
    msg.add_attachment(
        attachment_bytes,
        maintype="application",
        subtype="vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        filename=attachment_filename,
    )
    return msg

async def _send_message(to_email: str, subject: str, body: str, excel_payload: dict):
    # Create Excel in memory
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Applications"

    # Write headers
    ws.append(list(excel_payload.keys()))

    # Write values
    ws.append(list(excel_payload.values()))

    file_stream = io.BytesIO()
    wb.save(file_stream)
    file_stream.seek(0)

    # Build email with attachment
    msg = MIMEMultipart()
    msg["From"] = SENDER_EMAIL
    msg["To"] = to_email
    msg["Subject"] = subject

    # Email body
    msg.attach(MIMEText(body, "plain"))

    # Excel attachment
    excel_attachment = MIMEApplication(file_stream.read(), _subtype="xlsx")
    excel_attachment.add_header(
        "Content-Disposition",
        "attachment",
        filename="job_application.xlsx"
    )
    msg.attach(excel_attachment)

    # Send email via Gmail SMTP
    await aiosmtplib.send(
        msg,
        hostname=SMTP_HOST,
        port=SMTP_PORT,
        start_tls=True,
        username=SMTP_USERNAME,
        password=SMTP_PASSWORD,
    )


@app.get("/")
def root():
    return {"status": "ok"}


@app.post("/feedback/")
async def submit_feedback(payload: Feedback, background_tasks: BackgroundTasks):
    timestamp = payload.submittedAt or datetime.utcnow()
    excel_payload = {
        "Name": payload.name,
        "Email": payload.email,
        "Feedback": payload.feedback,
        "Submitted At": timestamp.isoformat(),
    }

    subject = "New Feedback Received"
    body = f"Feedback received from {payload.name}."

    # send email with Excel attachment
    background_tasks.add_task(
        _send_message,
        RECIPIENT_EMAIL,   # recipient
        subject,
        body,
        excel_payload
    )

    return {"message": "Feedback submitted and emailed successfully"}



@app.post("/careers/apply")
async def submit_career_application(payload: CareerApplication, background_tasks: BackgroundTasks):
    timestamp = payload.submittedAt or datetime.utcnow()
    excel_payload = {
        "Name": payload.name,
        "Email": payload.email,
        "Phone": payload.phone,
        "Job Role": payload.jobRole,
        "Location": payload.location,
        "Experience": payload.experience or "",
        "Cover Letter": payload.coverLetter or "",
        "Submitted At": timestamp.isoformat(),
    }

    subject = f"New Job Application - {payload.jobRole}"
    body = f"New job application received from {payload.name}."

    # Send email in background with Excel attachment
    background_tasks.add_task(
        _send_message,
        RECIPIENT_EMAIL,  # recipient email
        subject,
        body,
        excel_payload
    )

    return {"message": "Application submitted and emailed successfully"}



