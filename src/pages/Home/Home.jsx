import React from 'react'
import Gallery from '../../components/Gallery/Gallery.jsx'
import HomeBanner from '../../components/Homebanner/Homebanner.jsx'
import './Home.scss'

// Page Home
export default function Home() {
    return (
        <main className="home__body">
            {/* Bannière d'accueil */}
            <HomeBanner />
            {/* Galerie d'hébergements */}
            <Gallery />
        </main>
    )
}