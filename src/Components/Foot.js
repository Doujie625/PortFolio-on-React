import CSS from './../CSS/Foot.css'
import { connectlinks } from "./Foot_data"

const Foot = function () {
    return (
        <div className="Foot">
            <nav className="Foot_bar">
                <div className='Foot_div'>
                    {connectlinks.map((link) => {
                        return (
                            <a href={link.url} key={link.id} className={link.class}>
                            {link.text}
                        </a>
                        )
                    })}
                </div>
            </nav>
        </div>
    )
}

export default Foot