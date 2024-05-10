import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.scss'

// Composant Header
export default function Header() {
    return (
        <header className="header">
            {/* Barre de navigation */}
            <Navbar />
        </header>
    )
}
