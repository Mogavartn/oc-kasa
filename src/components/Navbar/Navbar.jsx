import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import kasaLogo from '../../assets/kasa-logo.png';
import './Navbar.scss';

// Composant Navbar
export default function Navbar() {
    // Récupère l'URL actuelle
    const location = useLocation()

    return (
        <nav className="nav">
            {/* Logo Kasa */}
            <img className="nav__logo" src={kasaLogo} alt="Kasa logo" />
            {/* Liste des liens de navigation */}
            <ul className="nav__list">
                {/* Lien vers la page d'accueil */}
                <li className="nav__list--link">
                    <Link
                        // Applique la classe 'nav__list--link_active' si l'URL correspond à la page d'accueil
                        className={
                            location.pathname === '/' ||
                            location.pathname === '/home'
                                ? 'nav__list--link_active'
                                : 'nav__list--link_inactive'
                        }
                        to="/"
                    >
                        Accueil
                    </Link>
                </li>
                {/* Lien vers la page À Propos */}
                <li className="nav__list--link">
                    <Link
                        // Applique la classe 'nav__list--link_active' si l'URL correspond à la page À Propos
                        className={
                            location.pathname === '/about'
                                ? 'nav__list--link_active'
                                : 'nav__list--link_inactive'
                        }
                        to="/about"
                    >
                        À Propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
