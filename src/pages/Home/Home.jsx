import Gallery from '../../components/Gallery/Gallery.jsx'
import HomeBanner from '../../components/Homebanner/Homebanner.jsx'
import './Home.scss'

function Home() {
    return (
        <main className='home__body'>
            <HomeBanner />
            <Gallery />
        </main>
    )
}

export default Home
