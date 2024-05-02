import './Aboutbanner.scss'
import aboutBannerPhoto from '../../assets/aboutBannerPhoto.webp'

export default function AboutBanner() {
    return (
        <div className="banner">
            < img
                className="banner__img"
                src={aboutBannerPhoto}
                alt="Travel photography of an ocean landscape"
            />
        </div>
    )
}