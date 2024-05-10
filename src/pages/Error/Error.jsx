import React from 'react'
import { Link } from 'react-router-dom'
import './Error.scss'

// Composant Error
export default function Error() {
    return (
        <main>
            {/* Contenu de la page d'erreur */}
            <div className="error">
                {/* Message d'erreur 404 */}
                <p className="error__404">404</p>
                {/* Titre de l'erreur */}
                <h2 className="error__title">
                    Oups! La page que vous demandez n'existe pas.
                </h2>
            </div>
            {/* Lien pour retourner à la page d'accueil */}
            <Link className="error__home" to="/home">
                Retourner sur la page d’accueil
            </Link>
        </main>
    )
}
