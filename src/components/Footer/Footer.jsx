import React from 'react';
import './Footer.scss';
import footerLogo from '../../assets/kasa-logo-footer.png';

// Composant Footer
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                {/* Logo Kasa */}
                <img
                    className="footer__content--logo"
                    src={footerLogo}
                    alt="Kasa logo"
                />
                {/* Copyright */}
                <p className="footer__content--copyright">
                    © 2024 Kasa. All rights reserved
                </p>
            </div>
        </footer>
    );
}