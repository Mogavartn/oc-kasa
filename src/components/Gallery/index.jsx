import { logementsList } from '../../datas/Logements.js'
import Card from '../../components/Card'

export default function Gallery() {

    return (
        <main className='home_gallery'>
            {logementsList.map(logement => {
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