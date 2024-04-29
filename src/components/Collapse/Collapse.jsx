import React, { useState } from 'react'
import './Collapse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const angleDown = <FontAwesomeIcon icon={faAngleDown} />
const angleUp = <FontAwesomeIcon icon={faAngleUp} />

const Collapse = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <div className="collapse">
            <h3 className="collapse__title" onClick={toggle}>
                {title}
                {!isOpen ? <i className="collapse__icon">{angleDown}</i> : <i className="collapse__icon">{angleUp}</i>}
            </h3>
            {isOpen && (
                <div className="collapse__content">
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div>
            )}
        </div>
    )
}

export default Collapse
