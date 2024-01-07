var playerDownImage = new Image()
playerDownImage.src = './img/character_running_forward.png'

var playerIdleImage = new Image()
playerIdleImage.src = './Img/character_idle.png'

class Player extends Sprite {

    constructor(x, y, image, maxFrameX = 1, maxFrameY = 1, frameX = 0, frameY = 0, scale = 1, staggerFrame = 0) {
        super(x,y, image,maxFrameX,maxFrameY,frameX,frameY,scale, staggerFrame)
        this.GoToState('IDLE');
    }

    GoToState(state) {
        switch(state) {
            case 'IDLE':
              //super.frameY = 0;
              super.SetImage(playerIdleImage);
              super.SetAnimationCount(4);
              break;
            case 'TALK':
              super.frameY = 1;
              super.SetAnimationCount(5);
              break;
            case 'RUN-RIGHT':
              super.frameY = 4;
              super.SetAnimationCount(5);
              break;
            case 'RUN-LEFT':
              super.frameY = 4;
              super.SetAnimationCount(5);
              break;
            case 'RUN-UP':
              super.frameY = 5;
              super.SetAnimationCount(5);
              break;
            case 'RUN-DOWN':
              // super.frameY = 3;
              super.SetImage(playerDownImage);
              super.SetAnimationCount(5);
              break;
            case "ATTACK":
              super.frameY = 6;
              super.SetAnimationCount(3);
              break;
            case "ATTACK-RIGHT":
              super.frameY = 7;
              super.SetAnimationCount(3);
              break;
            default:
              // code block
          }
    }
}