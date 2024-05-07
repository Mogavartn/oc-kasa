import React, { useState } from 'react'
import './Carousel.scss'
import PictureCounter from '../Picturecounter/Picturecounter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />
const angleRight = <FontAwesomeIcon icon={faAngleRight} />

export default function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1,
        )
    }

    return (
        <div className="carousel">
            {images.length > 0 && (
                <div className="carousel__container">
                    <img
                        key={currentIndex}
                        className="carousel__img"
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                    />
                    <PictureCounter
                        className="picture_counter"
                        pictures={images}
                        pictureIndex={currentIndex}
                    />
                    <div className="carousel__icons">
                        <i
                            onClick={prevSlide}
                            className="carousel__icon carousel__icon--left"
                        >
                            {angleLeft}
                        </i>
                        <i
                            onClick={nextSlide}
                            className="carousel__icon carousel__icon--right"
                        >
                            {angleRight}
                        </i>
                    </div>
                </div>
            )}
        </div>
    )
}
