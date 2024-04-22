import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Error from './components/Error'

import Home from './pages/Home'
import About from './pages/About'
import Hosting from './pages/Hosting'




ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/hosting" element={<Hosting />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
)
