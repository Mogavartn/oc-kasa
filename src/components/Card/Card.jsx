import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Card.scss'

// Composant Card
export default function Card({ id, title, cover }) {
    return (
        // Lien vers la page de détail de l'hébergement
        <Link to={`/hosting/${id}`} className="gallery__card">
            {/* Image de couverture de l'hébergement */}
            <img src={cover} alt={'Kasa - ' + title} />
            {/* Titre de l'hébergement */}
            <h2>{title}</h2>
        </Link>
    )
}

// Propriétés attendues par le composant Card
Card.propTypes = {
    id: PropTypes.string.isRequired, // Identifiant de l'hébergement
    title: PropTypes.string.isRequired, // Titre de l'hébergement
    cover: PropTypes.string.isRequired, // URL de l'image de couverture de l'hébergement
}
