import { Link, useLocation } from 'react-router-dom'
import './Navbar.scss'
import kasaLogo from '../../assets/kasa-logo.png'

export default function Navbar() {
    const location = useLocation()

    return (
        <nav className="nav">
            <img className="nav__logo" src={kasaLogo} alt="kasa logo" />
            <ul className="nav__list">
                <li className="nav__list--link">
                    <Link
                        className={
                            location.pathname === '/' ||
                            location.pathname === '/home'
                                ? 'nav__list--link_active'
                                : 'nav__list--link_inactive'
                        }
                        to="/"
                    >
                        Accueil
                    </Link>
                </li>
                <li className="nav__list--link">
                    <Link
                        className={
                            location.pathname === '/about'
                                ? 'nav__list--link_active'
                                : 'nav__list--link_inactive'
                        }
                        to="/about"
                    >
                        A Propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
