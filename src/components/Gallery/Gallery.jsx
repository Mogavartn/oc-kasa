import { logementsList } from '../../datas/Logements.js'
import Card from '../Card/Card.jsx'
import './Gallery.scss'

export default function Gallery() {
    return (
        <main className="home__gallery">
                {logementsList.map((logement) => {
                    return (
                        <Card
                            key={logement.id}
                            id={logement.id}
                            title={logement.title}
                            cover={logement.cover}
                        />
                    )
                })}
        </main>
    )
}
