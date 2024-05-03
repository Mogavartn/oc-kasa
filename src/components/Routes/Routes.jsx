import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Hosting from '../../pages/Hosting/Hosting'
import Error from '../../pages/Error/Error'

export default function indexRoutes() {
    return (    
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/hosting/:id" element={<Hosting />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    )
}