import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

import '../styles/Home.css'

const Home = () => {
  const [role, setRole] = useState('frontend')
  const [location, setLocation] = useState('remote')
  const navigate = useNavigate()

  const handleApply = () => {
    navigate(`/apply?role=${role}&location=${location}`)
  }

  return (
    <>
    <div className="home-wrapper">
      <div className="heading">
        <h1 className="home-heading">
          Remote, Hybrid, On-Site – Find the Perfect Fit for You!
        </h1>
      </div>

      <div className="paragraph">
        <p className="home-paragraph">
          Filter by role, location, and apply instantly.
        </p>

        <div className="form-group">
          <label htmlFor="job-role">Select Job Role:</label>
          <select id="job-role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="designer">UI/UX Designer</option>
            <option value="marketing">Digital Marketing Specialist</option>
            <option value="analyst">Data Analyst</option>
            <option value="manager">Project Manager</option>
            <option value="support">Customer Support</option>
            <option value="network">Network Administrator</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="location">Select Location:</label>
          <select id="location" value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="remote">Remote</option>
            <option value="bangalore">Bangalore</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="chennai">Chennai</option>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="pune">Pune</option>
          </select>
        </div>

        <button className="apply-btn" onClick={handleApply}>Search</button>
      </div>
    </div>
     <Footer />
    </>
  )
}

export default Home
