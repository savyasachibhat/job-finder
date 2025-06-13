import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/thankyou.css'

const ThankYou = () => {
  const navigate = useNavigate()

  return (
    <div className="thankyou-container">
      <h1>🎉 Application Submitted Successfully!</h1>
      <p>Thank you for applying. Our team will review your application and get back to you soon.</p>
      <button className="home-btn" onClick={() => navigate('/home')}>
        Back to Home
      </button>
    </div>
  )
}

export default ThankYou
