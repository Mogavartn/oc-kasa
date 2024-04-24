import { logementsList } from '../../datas/Logements.js'
import styled from 'styled-components'
import colors from '../../styles/colors.js'
import Card from '../Card/Card.jsx'

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
`

export default function Gallery() {
    return (
        <main className="home_gallery">
            <CardsContainer>
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
            </CardsContainer>
        </main>
    )
}
