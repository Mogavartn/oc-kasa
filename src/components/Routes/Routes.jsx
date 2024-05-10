import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Hosting from '../../pages/Hosting/Hosting'
import Error from '../../pages/Error/Error'

// Composant indexRoutes
export default function indexRoutes() {
    return (
        <Router>
            {/* Barre de navigation */}
            <Header />
            {/* Routes avec effet de fondu */}
            <Routes>
                {/* Redirection de la route '/' vers '/home' */}
                <Route path="/" element={<Navigate to="/home" />} />
                {/* Page d'accueil */}
                <Route exact path="/home" element={<Home />} />
                {/* Page À Propos */}
                <Route exact path="/about" element={<About />} />
                {/* Page de détail de l'hébergement */}
                <Route exact path="/hosting/:id" element={<Hosting />} />
                {/* Page d'erreur */}
                <Route path="*" element={<Error />} />
            </Routes>
            {/* Pied de page */}
            <Footer />
        </Router>
    )
}
