import { Link } from 'react-router-dom'
import kasaLogo from '../../assets/kasa-logo.png'

export default function Navbar() {
    return (
        <div>
			< img
                className="kasa-logo"
                src={kasaLogo}
                alt="kasa logo"
            />
            <nav className="navbar">
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </div>
    )
}