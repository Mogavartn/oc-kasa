import './Homebanner.scss'
import homeBannerPhoto from '../../assets/homeBannerPhoto.webp'

export default function HomeBanner() {
    return (
        <div className="homebanner">
            < img
                className="homebanner__img"
                src={homeBannerPhoto}
                alt="Travel photography of an ocean landscape"
            />
            <h1 className="homebanner__title">Chez vous, partout et ailleurs</h1>
        </div>
    )
}