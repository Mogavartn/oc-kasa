import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Error from './components/Error/Error'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Hosting from './pages/Hosting/Hosting'




ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
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
