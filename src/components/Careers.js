import React from "react";
import { FaCheckCircle, FaMapMarkerAlt, FaClock, FaBriefcase, FaMoneyBillWave } from "react-icons/fa";
import JobApplicationForm from "./JobApplicationForm";
import "../css/Careers.css";

function Careers() {
  const openings = [
    {
      id: 1,
      title: "Marketing Executive",
      location: "Hyderabad, IN",
      type: "Full-time",
      experience: "1-2 years",
      salary: "Based on Skills & Experience + Full Allowance + Sales Incentives",
      summary:
        " Based on Skills & Experience + Full Allowance + Sales Incentives",
    },
    {
      id: 2,
      title: "Marketing Executive",
      location: "Telanagana, IN",
      type: "Full-time",
      experience: "1-2 years",
      salary: "Based on Skills & Experience + Full Allowance + Sales Incentives",
      summary:
        " Based on Skills & Experience + Full Allowance + Sales Incentives",
    },
    {
      id: 3,
      title: "Marketing Executive",
      location: "Andhra Pradesh, IN",
      type: "Full-time",
      experience: "0-2 years",
      salary: "Based on Skills & Experience + Full Allowance + Sales Incentives",
      summary:
        "Support customers with shipment queries and ensure delightful post‑purchase experience.",
    },
    {
      id: 4,
      title: "Marketing Executive",
      location: "Bangalore , IN",
      type: "Full-time",
      experience: "0-2 years",
      salary: "Based on Skills & Experience + Full Allowance + Sales Incentives",
      summary:
        "Support customers with shipment queries and ensure delightful post‑purchase experience.",
    },
    {
      id: 5,
      title: "Marketing Executive",
      location: "Noida , IN",
      type: "Full-time",
      experience: "0-2 years",
      salary: "Based on Skills & Experience + Full Allowance + Sales Incentives",
      summary:
        "Support customers with shipment queries and ensure delightful post‑purchase experience.",
    },
  ];

  const benefits = [
    "Fast-growing logistics brand with national footprint",
    "Ownership-first culture and transparent communication",
    "Learning budget and mentorship from industry experts",
    "Competitive compensation and performance bonuses",
  ];

  return (
    <div className="careers-page">
      <section className="careers-hero" data-aos="fade-up">
        <div className="container">
          <h1>Join UrbanDot</h1>
          <p>
            Help us build reliable, fast, and delightful logistics for India. If you love
            solving real-world problems at scale, you’ll feel at home here.
          </p>
          {/* <a className="apply-btn" href="mailto:hr@urbandot.in?subject=Job Application - UrbanDot">
            Apply via Email
          </a> */}
        </div>
      </section>

      <section className="benefits" data-aos="fade-up" data-aos-delay="100">
        <div className="container">
          <h2>Why work with us</h2>
          <ul className="benefits-list">
            {benefits.map((b) => (
              <li key={b}>
                <FaCheckCircle className="check" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="openings" data-aos="fade-up" data-aos-delay="150">
        <div className="container">
          <h2>Open Roles</h2>
          <div className="cards">
            {openings.map((job) => (
              <div key={job.id} className="job-card" data-aos="zoom-in">
                <h3>{job.title}</h3>
                <p className="meta">
                  <span className="meta-item"><FaMapMarkerAlt /> {job.location}</span>
                </p>
                <p className="meta">
                  <span className="meta-item"><FaClock /> {job.type}</span>
                </p>
                {job.experience && (
                  <p className="meta">
                    <span className="meta-item"><FaBriefcase /> {job.experience}</span>
                  </p>
                )}
                {job.salary && (
                  <p className="meta">
                    <span className="meta-item"><FaMoneyBillWave /> {job.salary}</span>
                  </p>
                )}
                <a
                  className="job-apply"
                  href={"https://forms.gle/nqQpsYxLrAtSxXfw6"}
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" data-aos="fade-up" data-aos-delay="200">
        <div className="container">
          <h2>Didn't find a fit?</h2>
          <p>
            We're always looking for passionate team players. Send your resume to
            <a href="mailto:hr@urbandot.in"> hr@urbandot.in</a> with the subject
            "Open Application".
          </p>
          <a className="apply-btn secondary" href="mailto:hr@urbandot.in?subject=Open Application - UrbanDot">
            Share your profile
          </a>
        </div>
      </section>

      <JobApplicationForm />
    </div>
  );
}

export default Careers;


