import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../styles/colors'
import './Card.scss'

const CardTitle = styled.span`
    color: black;
    font-size: 18px;
    font-weight: normal;
    align-self: center;
`

const CardImage = styled.img`
	object-fit: cover;
    height: 150px;
    width: 100%;
    align-self: center;
`

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 300px;
    height: 300px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

export default function Card({id, title, cover}) {

	return (
			<Link to={`/pages/hosting/${id}`} className="gallery__card">
				<img src={cover} alt={"Kasa -" + title} />
				<h3>{title}</h3>
			</Link>
	)
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}