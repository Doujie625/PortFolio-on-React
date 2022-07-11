import CSS from './../CSS/Foot.css'
import { connectlinks } from "./Foot_data"


const Foot = function () {

    return (
        <div className="Footbar">
            <nav className="Foot_bar">
                <div className='Foot_div'>
                    {connectlinks.map((link) => {
                        if (link.icon == "") {
                            return (
                                <a href={link.url} key={link.id} className={link.class} id='font'>
                                    {link.text}
                                </a>
                            )
                        } else 
                            return (
                                <a href={link.url} key={link.id} className={link.class} id='svg'>
                                    {link.icon}
                                </a>
                            )
                    })}
                </div>
            </nav>
        </div>
    )
}

export default Foot
