import './Hosting.scss'
import React from 'react'
import { useParams } from "react-router-dom";
import hostings from '../../datas/Logements.json'
import Collapse from '../../components/Collapse/Collapse'

export default function Hosting() {
    const { id } = useParams();
    const selectedHosting = hostings.find(data => data.id === id);

    return (
        <body>
            {selectedHosting && (
                <div className="about__body--collapses">
                    <div key={selectedHosting.id} className="about__body--collapse">
                        <Collapse
                            style={{ margin: '30px 0' }}
                            title={"Equipements"}
                            content={selectedHosting.equipments}
                        />
                        <Collapse
                            style={{ margin: '30px 0' }}
                            title={"Description"}
                            content={selectedHosting.description}
                        />
                    </div>
                </div>
            )}
        </body>
    )
}
