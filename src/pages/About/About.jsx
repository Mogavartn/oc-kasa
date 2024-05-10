import React from 'react';
import './About.scss';
import AboutBanner from '../../components/Aboutbanner/Aboutbanner.jsx';
import Collapse from '../../components/Collapse/Collapse';
import { aboutDatas } from '../../datas/AboutDatas';

// Composant About
export default function About() {
    return (
        <main className="about__body">
            {/* Bannière About */}
            <AboutBanner />
            {/* Sections collapsibles */}
            <div className="about__body--collapses">
                {/* Affichage des sections */}
                {aboutDatas.map(({ id, title, content }) => {
                    return (
                        <div key={id} className="about__body--collapse">
                            {/* Section collapsible */}
                            <Collapse title={title} content={content} />
                        </div>
                    )
                })}
            </div>
        </main>
    )
}
