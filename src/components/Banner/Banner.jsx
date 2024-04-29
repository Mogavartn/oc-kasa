import './Banner.scss'
import bannerPhoto from '../../assets/bannerPhoto.webp'

export default function Banner() {
    return (
        <div className="banner">
            < img
                className="banner__img"
                src={bannerPhoto}
                alt="Travel photography of an ocean landscape"
            />
            <p className="banner__title">Chez vous, partout et ailleurs</p>
        </div>
    )
}