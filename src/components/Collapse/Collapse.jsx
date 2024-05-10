import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import './Collapse.scss'

// Définition des icônes
const angleDown = <FontAwesomeIcon icon={faAngleDown} />
const angleUp = <FontAwesomeIcon icon={faAngleUp} />

// Composant Collapse
const Collapse = ({ title, content }) => {
    // State pour gérer l'état ouvert/fermé du Collapse
    const [isOpen, setIsOpen] = useState(false)

    // Fonction pour basculer l'état ouvert/fermé
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div className="collapse">
            {/* Titre du Collapse */}
            <h3 className="collapse__title" onClick={toggle}>
                {title}
                {/* Icône d'angle vers le bas ou vers le haut en fonction de l'état */}
                {!isOpen ? (
                    <i className="collapse__icon">{angleDown}</i>
                ) : (
                    <i className="collapse__icon">{angleUp}</i>
                )}
            </h3>
            {/* Contenu du Collapse */}
            {isOpen && (
                <div className="collapse__content">
                    {/* Affichage du contenu */}
                    {Array.isArray(content)
                        ? content.map((item, index) => {
                              return <p key={index}>{item}</p>
                          })
                        : content}
                </div>
            )}
        </div>
    )
}

export default Collapse
