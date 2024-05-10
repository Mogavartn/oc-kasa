import React from 'react'
import './Homebanner.scss'
import homeBannerPhoto from '../../assets/homeBannerPhoto.webp'

// Composant HomeBanner
export default function HomeBanner() {
    return (
        <div className="homebanner">
            {/* Image de la bannière */}
            <img
                className="homebanner__img"
                src={homeBannerPhoto}
                alt="Travel photography of an ocean landscape"
            />
            {/* Titre de la bannière */}
            <h1 className="homebanner__title">
                Chez vous, partout et ailleurs
            </h1>
        </div>
    )
}
