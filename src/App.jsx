import React from 'react'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Submit from './pages/Submit';
import ProtectedRoutes from './Components/ProtectedRoutes';
import LandingPage from './pages/LandingPage';
import Instructions from './Components/Instructions';
// import { useState , useEffect } from 'react';

const App = () => {

  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/instruction" element={<Instructions  />} />
        <Route path="/home" element={
          <Home />
        } />
        <Route path="/submit" element={
          <ProtectedRoutes>
          <Submit />
        </ProtectedRoutes>
        } />
        {/* Other routes */}
      </Routes>
    </Router>
    </>
  )
}

export default App