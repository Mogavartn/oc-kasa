import { logementsList } from '../../datas/Logements.js'

function Home() {
    return (
        <div>
            <h1> KASA 🏠</h1>
            <ul>
                {logementsList.map((logement) => (
                    <li key={logement.id}>{logement.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Home
