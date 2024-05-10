import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import hostings from '../../datas/Logements.json';
import Carousel from '../../components/Carousel/Carousel';
import Collapse from '../../components/Collapse/Collapse';
import Rating from '../../components/Rating/Rating';
import './Hosting.scss';

// Composant Hosting
export default function Hosting() {
    // Récupère l'identifiant de l'hébergement depuis l'URL
    const { id } = useParams()
    // Recherche l'hébergement correspondant dans les données
    const selectedHosting = hostings.find((data) => data.id === id)

    // Redirection vers la page d'erreur si l'hébergement n'est pas trouvé
    if (!selectedHosting) {
        return <Navigate to={'/error'} />
    }

    // Récupération des données de l'hébergement
    const images = selectedHosting.pictures
    const title = selectedHosting.title
    const location = selectedHosting.location
    const equipments = selectedHosting.equipments
    const description = selectedHosting.description
    const hostName = selectedHosting.host.name
    const hostPhoto = selectedHosting.host.picture
    const rating = selectedHosting.rating

    // Génération des tags
    const tags = selectedHosting.tags.map((item, index) => (
        <p key={index} className="selectedHosting__tag">
            {item}
        </p>
    ))

    return (
        <main key={selectedHosting.id} className="selectedHosting">
            {/* Carousel d'images */}
            <Carousel images={images} />
            {/* Contenu de l'hébergement */}
            <div className="selectedHosting__articles">
                {/* Informations sur l'hébergement */}
                <article className="selectedHosting__infos">
                    <h2 className="selectedHosting__title">{title}</h2>
                    <p className="selectedHosting__location">{location}</p>
                    <div className="selectedHosting__tags">{tags}</div>
                </article>
                {/* Informations sur l'hôte */}
                <article className="selectedHosting__host">
                    <div className="selectedHosting__host--infos">
                        <p className="selectedHosting__host--name">
                            {hostName}
                        </p>
                        <img
                            className="selectedHosting__host--photo"
                            src={hostPhoto}
                            alt="photographie de l'hôte du logement"
                        />
                    </div>
                    {/* Note de l'hébergement */}
                    <div className="selectedHosting__host--rating">
                        <Rating rating={rating} />
                    </div>
                </article>
            </div>
            {/* Sections collapsibles */}
            <div className="selectedHosting__collapses">
                {/* Section Equipements */}
                <div className="selectedHosting__collapses--item">
                    <Collapse title={'Equipements'} content={equipments} />
                </div>
                {/* Section Description */}
                <div className="selectedHosting__collapses--item">
                    <Collapse title={'Description'} content={description} />
                </div>
            </div>
        </main>
    )
}
