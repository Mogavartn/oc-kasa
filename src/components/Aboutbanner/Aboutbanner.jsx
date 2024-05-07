import './Aboutbanner.scss'
import aboutBannerPhoto from '../../assets/aboutBannerPhoto.webp'

export default function AboutBanner() {
    return (
        <div className="aboutbanner">
            < img
                className="aboutbanner__img"
                src={aboutBannerPhoto}
                alt="Travel photography of an ocean landscape"
            />
        </div>
    )
}