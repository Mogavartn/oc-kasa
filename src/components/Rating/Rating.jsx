import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Rating.scss'

// Composant Rating
export default function Rating({ rating }) {
    // Tableau des étoiles
    const stars = [1, 2, 3, 4, 5]

    return (
        <section className="rating_container">
            {/* Affichage des étoiles en fonction de la note */}
            {stars.map((num) => (
                <FontAwesomeIcon
                    icon={faStar}
                    key={num}
                    // Applique la classe 'star-full' pour les étoiles pleines et 'star-empty' pour les étoiles vides
                    className={
                        num > rating ? 'star star-empty' : 'star star-full'
                    }
                />
            ))}
        </section>
    )
}
