class Jelly {
    constructor(ctx, image, srcX, srcY, srcWidth, scrHeight, destX, destY, destWidth, destHeight ) {
        this.ctx = ctx;
        this.sprite = image
        // this.srcx = srcx;
        // this.srcy = srcy;
        this.spriteWidth = srcWidth;
        this.spriteHeight = scrHeight;
        // this.x = destx;
        // this.y = desty;
        this.spritewidth = destWidth;
        this.spriteHeight = destHeight
    }

    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height); //content of previous frame cleared
        // this.ctx.drawImage(this.sprite, this.srcx, this.srcy, this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteHeight, this.spriteHeight )
        this.ctx.drawImage(this.jelly, 0, 0, 300, 200, this.x, this.y, 300, 200)
    }

    move() {
        this.framesDrawn++
        // if (framesDrawn >= 7) {
        //     currentFrame++;
        //     framesDrawn = 0;
        // }
        // this.x += dx;
        // this.y -= dy;
    }
  
    random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}


export default Jelly