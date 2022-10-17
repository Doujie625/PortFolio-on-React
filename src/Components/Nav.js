import { Routes, Route, Link } from "react-router-dom";
import CSS from './../CSS/Nav.css'
import Neon from './../CSS/Neon.css'
import { links } from "./Nav_data";
import { useState } from "react";

const Nav = function (props) {
    const [navColor, setNavColor] = useState("")

    function setNavBarColor(e) {
        setNavColor(e.target.className)
    }

    return (
        <div className="Navbar">
            <nav className="Nav_bar">
                <div className="Nav_div">
                    {links.map((link) => {
                        return (
                            <a href={link.url} key={link.id} className={link.class} onClick={setNavBarColor}>
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