import './Hosting.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import hostings from '../../datas/Logements.json'
import Collapse from '../../components/Collapse/Collapse'
import Carousel from '../../components/Carousel/Carousel'
import Error from '../Error/Error'

export default function Hosting() {
    const { id } = useParams();
    const selectedHosting = hostings.find(data => data.id === id);

    const [imageSlider, setImageSlider] = useState([]);

    useEffect(() => {
        if (selectedHosting) {
            setImageSlider(selectedHosting.pictures);
        }
    }, [selectedHosting]);

    if (!selectedHosting) {
        return <Error />;
    }

    const description = selectedHosting.description;
    const equipments = selectedHosting.equipments;

    return (
        <div>
            <div>
                <Carousel
                    images={imageSlider}
                />
            </div>
            <div key={selectedHosting.id} className="selectedHosting">
                
                <Collapse
                    title={"Equipements"}
                    content={equipments}
                />
                <Collapse
                    title={"Description"}
                    content={description}
                />
            </div>
        </div>
    )
}
