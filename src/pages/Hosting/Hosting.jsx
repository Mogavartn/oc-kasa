import './Hosting.scss'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import hostings from '../../datas/Logements.json'

import Collapse from '../../components/Collapse/Collapse'
import Carousel from '../../components/Carousel/Carousel'
import Rating from '../../components/Rating/Rating'
import Error from '../Error/Error'

export default function Hosting() {
    const { id } = useParams()
    const selectedHosting = hostings.find((data) => data.id === id)

    const [imageSlider, setImageSlider] = useState([])

    useEffect(() => {
        if (selectedHosting) {
            setImageSlider(selectedHosting.pictures)
        }
    }, [selectedHosting])

    if (!selectedHosting) {
        return <Error />
    }

    const title = selectedHosting.title
    const location = selectedHosting.location
    const equipments = selectedHosting.equipments
    const description = selectedHosting.description
    const hostName = selectedHosting.host.name
    const hostPhoto = selectedHosting.host.picture
    const rating = selectedHosting.rating

    const tags = selectedHosting.tags.map((item, index) => (
        <p key={index}>{item}</p>
    ))

    return (
        <main key={selectedHosting.id} className="selectedHosting">
            <Carousel images={imageSlider} />
            <div className="selectedHosting__articles">
                <article className="selectedHosting__infos">
                    <h2 className="selectedHosting__title">{title}</h2>
                    <p className="selectedHosting__location">{location}</p>
                    <div className="selectedHosting__tags">{tags}</div>
                </article>
                <article className="selectedHosting__host">
                        <p className="selectedHosting__host--name">
                            {hostName}
                        </p>
                        <img
                            className="selectedHosting__host--photo"
                            src={hostPhoto}
                            alt="photographie de l'hôte du logement"
                        />
                        <Rating
                            rating={rating}
                        />
                </article>
            </div>
            <div className="selectedHosting__collapses">
                <div className="selectedHosting__collapses--item">
                    <Collapse title={'Equipements'} content={equipments} />
                </div>
                <div className="selectedHosting__collapses--item">
                    <Collapse title={'Description'} content={description} />
                </div>
            </div>
        </main>
    )
}
