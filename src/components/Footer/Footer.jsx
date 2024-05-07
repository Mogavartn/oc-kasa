import './Footer.scss'
import footerLogo from '../../assets/kasa-logo-footer.png'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <img
                    className="footer__content--logo"
                    src={footerLogo}
                    alt="kasa logo"
                />
                <p className="footer__content--copyright">
                    © 2024 Kasa. All rights reserved
                </p>
            </div>
        </footer>
    )
}
