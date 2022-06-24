import React, { useRef, useEffect, useState } from 'react'
import Css from './../CSS/Canvas.css'



const Canvas = function() {
    // const canvas = document.querySelector("canvas");
    // const ctx = canvas.getContext("2d");

    // const [width, setWidth]   = useState(window.innerWidth);
    // const [height, setHeight] = useState(window.innerHeight);

    const canvasRef = useRef()





    return(
        <div id='canvas'>
            <canvas ref={canvasRef} id="ref">

            </canvas>

        </div>
    )
}


export default Canvas