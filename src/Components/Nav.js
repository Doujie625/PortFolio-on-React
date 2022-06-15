import { Routes, Route, Link } from "react-router-dom";
import CSS from './../CSS/Nav.css'
import Neon from './../CSS/Neon.css'
import { links } from "./Nav_data";

const Nav = function () {


    return (
        <div className="Navbar">
            <nav className="Nav_bar">
                <div className="Nav_div">
                    {links.map((link) => {
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

export default Nav