import React from 'react'
import currentJelly from './../Components/SVG/Jelly_six_1.svg'

class Animation extends React.Component {

    constructor() {
      super();
      this.canvas = null;
      this.ctx = null;

      this.width = null;
      this.height = null;
  
      // this.jellies = [];
    }
    
    loop = () => {
      this.ctx.clearRect(0, 0, this.width, this.height); //content of previous frame cleared
      requestAnimationFrame(this.loop);
      this.spriteWidth = this.jelly.width / this.cols

      this.spriteHeight = this.jelly.height / this.rows
      
      this.currentFrame = this.currentFrame % this.totalFrames

      this.srcY = this.currentFrame * this.spriteHeight

      // image, srcX, srcY, srcWidth, srcHeight, destX, destY, destWdith, destHeight7
      this.ctx.drawImage(
        this.jelly, 
        this.srcX, 
        this.srcY, 
        this.spriteWidth, 
        this.spriteHeight, 
        this.x, 
        this.y, 
        this.spriteWidth, 
        this.spriteHeight
      )
      //Controlls the speed at which the frames roll
      this.framesDrawn++
      if (this.framesDrawn >= 10.5) {
        this.currentFrame++
        this.framesDrawn = 0
      }

      // Add the velocity as the speed out jellies move
      this.x += this.dx
      this.y += this.dy
      
      // Keep the Jellies inside the window
      if (this.x > this.canvas.width || this.x < 0) {
        this.dx = this.dx * -1
      }
      if (this.y > this.canvas.height || this.y < 0) {
        this.dy = this.dy * -1
      }

      // Make the jelly change color depending on his location on the page
      if (this.y < (this.canvas.height * 0.3) - (this.spriteHeight / 2)) {
        this.srcX = 0 * this.spriteWidth
      } else if (this.y > (this.canvas.height * 0.3) - (this.spriteHeight / 2) && this.y < (this.canvas.height * 0.65) - (this.spriteHeight / 2)) {
        this.srcX = 1 * this.spriteWidth
      } else {
        this.srcX = 2 * this.spriteWidth
      }

      // Signal to eventlistener to use Glow effect
      if (this.hoverState === true) {
        this.srcX = this.srcX + 900
      }
    };
  
    random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  
    componentDidMount() {
      //set up the canvas
      this.canvas = this.refs.canvas;
      this.ctx = this.canvas.getContext("2d");
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight * 3;
      this.jelly = new Image()
      this.currentJelly = 'src/Components/SVG/Jelly_six_1.svg'
      this.jelly.src = currentJelly
      
      // Initialize random starting postion
      this.x = Math.random() * window.innerWidth
      this.y = Math.random() * window.innerHeight

      //There are 7 sprites in 1 column
      this.cols = 6
      this.rows = 7

      //To play the animation
      this.totalFrames = 7
      this.currentFrame = 0

      // allow the source position to be updated
      this.srcX = 0
      this.srcY = 0

      // Set the velocity
      this.dx = Math.random() - 0.1
      this.dy = Math.random() - 0.1

      //Record the number of times the "animate" function has been called
      this.framesDrawn = 0

      // //Find size of individiual sprites
      this.spriteWidth = this.jelly.width / this.cols
      this.spriteHeight = this.height / this.rows

      //start the animation
      this.loop();
    }
  
    render() {
      return (
        <div id="canvas_div">
          <canvas ref="canvas" width={640} height={425} />
        </div>
      );
    }
  }
export default Animation