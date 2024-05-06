import './About.scss'
import { aboutDatas } from '../../datas/AboutDatas'
import Collapse from '../../components/Collapse/Collapse'
import AboutBanner from '../../components/Aboutbanner/Aboutbanner.jsx'

export default function About() {
    return (
        <main className="about__body">
            <AboutBanner />
            <div className="about__body--collapses">
                {aboutDatas.map(({ id, title, content }) => {
                    return (
                        <div key={id} className="about__body--collapse">
                            <Collapse
                                title={title}
                                content={content}
                            />
                        </div>
                    )
                })}
            </div>
        </main>
    )
}
