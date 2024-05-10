import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import PictureCounter from '../Picturecounter/Picturecounter'
import './Carousel.scss'

// Icônes d'angle gauche et droit
const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />
const angleRight = <FontAwesomeIcon icon={faAngleRight} />

// Composant Carousel
export default function Carousel({ images }) {
    // État pour gérer l'index de l'image actuellement affichée
    const [currentIndex, setCurrentIndex] = useState(0)

    // Fonction pour passer à la diapositive suivante
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }

    // Fonction pour passer à la diapositive précédente
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }

    // Vérifie s'il n'y a qu'une seule image à afficher
    const isSingleImage = images.length === 1

    return (
        <div className="carousel">
            {/* Affiche le contenu du carousel s'il y a au moins une image */}
            {images.length > 0 && (
                <div className="carousel__container">
                    {/* Image actuellement affichée */}
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className={`carousel__img ${
                                index === currentIndex ? 'active' : ''
                            }`}
                            src={image}
                            alt={`Slide ${index + 1}`}
                        />
                    ))}
                    {/* Affiche le PictureCounter seulement s'il y a plus d'une image */}
                    {!isSingleImage && (
                        <PictureCounter
                            className="picture_counter"
                            pictures={images}
                            pictureIndex={currentIndex}
                        />
                    )}
                    {/* Affiche les icônes de défilement seulement s'il y a plus d'une image */}
                    {!isSingleImage && (
                        <div className="carousel__icons">
                            {/* Icône de défilement vers la gauche */}
                            <i
                                onClick={() => prevSlide()}
                                className="carousel__icon carousel__icon--left"
                            >
                                {angleLeft}
                            </i>
                            {/* Icône de défilement vers la droite */}
                            <i
                                onClick={() => nextSlide()}
                                className="carousel__icon carousel__icon--right"
                            >
                                {angleRight}
                            </i>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}