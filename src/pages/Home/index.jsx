import { logementsList } from '../../datas/Logements.js'
import Gallery from '../../components/Gallery';


function Home() {
    return (
        <div>
            <h1> KASA 🏠</h1>
            <ul>
                {logementsList.map((logement) => (
                    <li key={logement.id}>{logement.title}</li>
                ))}
            </ul>
            <Gallery />
        </div>
    )
}

export default Home
