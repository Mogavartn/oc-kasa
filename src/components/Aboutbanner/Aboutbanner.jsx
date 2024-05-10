import React from 'react'
import './Aboutbanner.scss'
import aboutBannerPhoto from '../../assets/aboutBannerPhoto.webp'

// Composant AboutBanner
export default function AboutBanner() {
    return (
        <div className="aboutbanner">
            {/* Image de la bannière */}
            <img
                className="aboutbanner__img"
                src={aboutBannerPhoto}
                alt="Travel photography of an ocean landscape"
            />
        </div>
    )
}
