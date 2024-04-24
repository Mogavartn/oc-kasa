import { logementsList } from '../../datas/Logements.js'
import Gallery from '../../components/Gallery/Gallery.jsx'

function Home() {
    return (
        <div>
            {/*            <ul>
                {logementsList.map((logement) => (
                    <li key={logement.id}>{logement.title}</li>
                ))}
            </ul>
*/}
            <Gallery />
        </div>
    )
}

export default Home
