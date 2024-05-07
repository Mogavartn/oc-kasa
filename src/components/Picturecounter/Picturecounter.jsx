import React from 'react'

export default function PictureCounter({ pictures, pictureIndex }) {
    return (
        <div className="picture_counter">
            {pictureIndex + 1}/{pictures.length}
        </div>
    )
}
