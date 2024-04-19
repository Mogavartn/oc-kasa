import { Link } from 'react-router-dom'
import '../../styles/Card.css'

export default function Card({id, title, cover}) {

	return (
		<Link to={`/pages/hosting/${id}`} className="gallery_card">
			<img src={cover} alt={"Kasa -" + title} />
			<h3>{title}</h3>	
		</Link>
	)
}