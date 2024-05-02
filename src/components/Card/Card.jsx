import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Card.scss'

export default function Card({ id, title, cover }) {
    return (
        <Link to={`/hosting/${id}`} className="gallery__card">
            <img src={cover} alt={'Kasa -' + title} />
            <h2>{title}</h2>
        </Link>
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}
