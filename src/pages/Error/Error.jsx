import './Error.scss'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <main>
            <div className="error">
                <p className="error__404">404</p>
                <h2 className="error__title">
                    Oups! La page que vous demandez n'existe pas.
                </h2>
            </div>
            <Link className="error__home" to="/home">
                Retourner sur la page d’accueil
            </Link>
        </main>
    )
}
