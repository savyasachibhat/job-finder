import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Apply from './components/Apply'
import ThankYou from './components/ThankYou'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  )
}

export default App
