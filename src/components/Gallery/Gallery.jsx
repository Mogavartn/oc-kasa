import React from 'react'
import hostings from '../../datas/Logements.json'
import Card from '../Card/Card.jsx'
import './Gallery.scss'

// Composant Gallery
export default function Gallery() {
    return (
        <main className="home__gallery">
            {/* Affichage des cartes pour chaque hébergement */}
            {hostings.map(({ id, title, cover }) => {
                return <Card key={id} id={id} title={title} cover={cover} />
            })}
        </main>
    )
}
