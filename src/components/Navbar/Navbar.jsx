import { Link } from 'react-router-dom'
import './Navbar.scss'
import kasaLogo from '../../assets/kasa-logo.png'

export default function Navbar() {
	const activeRoute = window.location.pathname;

    return (
        <nav className="nav">
            <img className="nav__logo" src={kasaLogo} alt="kasa logo" />
            <ul className="nav__list">
                <li
                    className={
                        activeRoute === '/home'
                            ? 'nav__list--link activeLink'
                            : 'nav__list--link inactiveLink'
                    }
                >
                    <Link to="/">Accueil</Link>
                </li>
                <li
                    className={
                        activeRoute === '/about'
                            ? 'nav__list--link activeLink'
                            : 'nav__list--link inactiveLink'
                    }
                >
                    <Link to="/about">A Propos</Link>
                </li>
            </ul>
        </nav>
    )
}
