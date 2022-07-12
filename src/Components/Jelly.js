import './../CSS/style.css'
import { useState, useRef, useEffect } from "react"
import React from 'react';

const Jelly = function() {
    // Declare our variables
    const [jellyColor, setJellyColor] = useState("green")
    // Set the dimensions of the "canvas"
    const [height, setHeight] = useState(0)
    useEffect(() => {
        setHeight(window.innerHeight * 3)
        if (y < height / 3 * .8) {
            setJellyColor("green")
        } else if ( y < height / 3 * 1.8) {
            setJellyColor("pink")
        } else {
            setJellyColor("blue")
        }
    })
    // Initialize random starting postion
    var x = Math.random() * (window.innerWidth - 300)
    var y = Math.random() * height - 200
    // Set the velocity
    var dx = Math.random() - 0.1;
    var dy = Math.random() - 0.1;
    // Set color according to location
    // var dx = Math.random() - 0.1;
    // var dy = Math.random() - 0.1;
    // console.log(y)
    const myRef = useRef();

    // const [x, setX] = useState(Math.random() * window.innerWidth);
        
    // const [y, setY] = useState(Math.random() * window.innerHeight);


    function animate() {
        const { offsetTop } = myRef.current
        let ref = myRef.current
        let data = ref.getBoundingClientRect()
        console.log(data)
    }

    function move() {
        
    }



    return (
        <div id="sprite-container" onClick={animate} style={{ left: `${x}px`, top: `${y}px` }}>
            <div className={jellyColor} id="sprite-image" ref={myRef} >
            </div>
        </div>
    )
}

export default Jelly