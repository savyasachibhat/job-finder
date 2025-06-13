import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>JobFinder</h3>
          <p>Your trusted portal for jobs across domains — remote, hybrid, and on-site.</p>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Job Seekers</h4>
          <ul>
            <li>Browse Jobs</li>
            <li>Upload Resume</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Employers</h4>
          <ul>
            <li>Post a Job</li>
            <li>Search Resumes</li>
            <li>Employer Support</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} JobFinder. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
