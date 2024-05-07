import Gallery from '../../components/Gallery/Gallery.jsx'
import HomeBanner from '../../components/Homebanner/Homebanner.jsx'

function Home() {
    return (
        <main className='home__body'>
            <div>
            <HomeBanner />
            <Gallery />
            </div>
        </main>
    )
}

export default Home
