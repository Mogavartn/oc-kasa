import './Hosting.scss'
import hostings from '../../datas/Logements.json'
import Collapse from '../../components/Collapse/Collapse'


export default function Hosting() {
    return (
        <body>
            <h1>Logement</h1>
            <div className="about__body--collapses">
                {hostings.map(({ id, equipments }) => {
                    return (
                        <div key={id} className="about__body--collapse">
                            <Collapse
                                style={{ margin: '30px 0' }}
                                title={"Equipements"}
                                content={equipments}
                            />
                        </div>
                    )
                })}
            </div>
        </body>
    )
}