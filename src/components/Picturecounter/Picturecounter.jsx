import React from 'react'

// Composant PictureCounter
export default function PictureCounter({ pictures, pictureIndex }) {
    return (
        <div className="picture_counter">
            {/* Affichage du numéro de l'image actuelle */}
            {pictureIndex + 1}/{pictures.length}
        </div>
    )
}
