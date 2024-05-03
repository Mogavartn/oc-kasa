import React, { useState } from 'react'
import './Carousel.scss'

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
            <button onClick={prevSlide}>Prev</button>
            {images.length > 0 && (
                <img
                    key={currentIndex}
                    className="carousel__img"
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                />
            )}
            <button 
                className='carousel__button'
                onClick={nextSlide}>Next
            </button>
        </div>
    )
}
