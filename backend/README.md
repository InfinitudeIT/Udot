# FastAPI Backend for Contact and Careers

## Setup

1. Create and activate a virtual environment.
2. Install dependencies:

```
pip install -r requirements.txt
```

3. Create a `.env` file in this folder with your SMTP details:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SENDER_EMAIL=your_email@gmail.com
RECIPIENT_EMAIL=info@urbandot.in
ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

## Run

```
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## Endpoints
- POST `/feedback/`: contact form submission
- POST `/careers/apply`: careers application submission

Both endpoints generate an Excel file from the submission and email it to `RECIPIENT_EMAIL`.

