import hostings from '../../datas/Logements.json'
import Card from '../Card/Card.jsx'
import './Gallery.scss'

export default function Gallery() {
    return (
        <main className="home__gallery">
                {hostings.map(({ id, title, cover }) => {
                    return (
                        <Card
                            key={id}
                            id={id}
                            title={title}
                            cover={cover}
                        />
                    )
                })}
        </main>
    )
}
