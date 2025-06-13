import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Apply.css";
import "../styles/Modal.css";
import { useNavigate } from "react-router-dom";

const jobData = [
  { role: "frontend", company: "TechNova", location: "remote" },
  { role: "backend", company: "CodeWorks", location: "bangalore" },
  { role: "designer", company: "CreativeBox", location: "mumbai" },
  { role: "frontend", company: "PixelSoft", location: "bangalore" },
  { role: "analyst", company: "DataSpark", location: "delhi" },
  { role: "manager", company: "LeadHive", location: "remote" },
  { role: "network", company: "NetSecure", location: "pune" },
  { role: "support", company: "HelpNow", location: "chennai" },
  { role: "marketing", company: "AdBricks", location: "mumbai" },
];

const jobDescriptions = {
  frontend:
    "We are looking for a skilled Frontend Developer to build intuitive user interfaces using React and modern web tools.",
  backend:
    "Seeking a Backend Developer proficient in Node.js and databases to power scalable server-side systems.",
  designer:
    "Join our creative team as a UI/UX Designer to craft beautiful and user-friendly designs.",
  analyst:
    "Analyze complex datasets and deliver actionable insights as our new Data Analyst.",
  manager:
    "Lead and coordinate cross-functional teams with agile practices as a Project Manager.",
  network: "Maintain and secure our infrastructure as a Network Administrator.",
  support:
    "Provide excellent customer service and resolve issues efficiently as a Support Executive.",
  marketing:
    "Drive campaigns and brand strategy as a Digital Marketing Specialist.",
};

const Apply = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const role = params.get("role");
  const location = params.get("location");
  const navigate = useNavigate();

  const filteredJobs = jobData.filter(
    (job) => job.role === role && job.location === location
  );

  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
    navigate("/thankyou");
  };

  return (
    <div className="apply-page">
      <h2 className="apply-heading">Available Jobs</h2>
      {filteredJobs.length > 0 ? (
        <div className="job-list">
          {filteredJobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.role.replace(/^\w/, (c) => c.toUpperCase())}</h3>
              <p>
                <strong>Company:</strong> {job.company}
              </p>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p className="job-description">
                {jobDescriptions[job.role] ||
                  "No description available for this role."}
              </p>

              <button className="card-apply-btn" onClick={() => openModal(job)}>
                Apply
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-jobs">No jobs found for selected role and location.</p>
      )}

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>
              &times;
            </span>
            <h2>
              Apply for {selectedJob.role} at {selectedJob.company}
            </h2>
            <form className="application-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="file" required />
              <textarea
                placeholder="Why should we hire you?"
                rows="4"
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apply;
