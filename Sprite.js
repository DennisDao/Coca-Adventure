class Sprite {
    constructor(x, y, image, maxFrameX = 1, maxFrameY = 1, frameX = 0, frameY = 0, scale = 1, staggerFrame = 0) {
        this.x = x
        this.y = y 
        this.maxFrameX = maxFrameX
        this.maxFrameY = maxFrameY
        this.frameX = frameX
        this.frameY = frameY
        this.scale = scale
        this.elapsedFrame = 0
        this.staggerFrame = staggerFrame
        this.animationCount = 0

        this.image = new Image()
        this.image.onload = () => {
            this.width = (this.image.width / maxFrameX) * scale
            this.height = (this.image.height / maxFrameY) * scale
        }
        this.image.src = image
    }

    draw() {
        c.save()

        /*c.translate (
            this.x + this.width / 2,
            this.y + this.height / 2
        )

        c.translate (
            -this.x - this.width / 2,
            -this.y - this.height / 2
        )*/

        const crop = {
            x: this.frameX * (this.width / this.scale),
            y: this.frameY * (this.height / this.scale),
            width: this.image.width / this.maxFrameX,
            height: this.image.height / this.maxFrameY
        }

        c.drawImage(
            this.image,
            crop.x,
            crop.y,
            crop.width,
            crop.height,
            this.x,
            this.y,
            this.width * this.scale,
            this.height * this.scale
        )

        if(GAMESTATE.DISPLAY_TRACING){
            c.beginPath();
            c.rect(this.x, this.y, this.width * this.scale, this.height * this.scale);
            c.stroke();
        }
       
        c.restore()

        if(this.maxFrameX == 0 || this.maxFrameY == 0){
           return
        }
      
        this.elapsedFrame++
        if(this.elapsedFrame % this.staggerFrame == 0) {
            if(this.frameX < this.animationCount) player.frameX++
            else this.frameX = 0
        }
    }

    SetAnimationCount(count){
        this.animationCount = count
    }

    SetImage(newImage){
        this.image = newImage;
        this.width = (this.image.width / maxFrameX) * scale
        this.height = (this.image.height / maxFrameY) * scale
    }
}