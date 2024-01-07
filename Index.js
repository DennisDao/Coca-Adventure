const image = new Image()
image.src = './img/Pellet Town.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1024 * 1.5
canvas.height = 576 * 1.5

const offset = {
  x: -735,
  y: -650
}

const background = new Sprite(
  offset.x,
  offset.y,
  './Img/Pellet Town.png'
)

/*const player = new Player(
  435,
  285,
  './Img/player.png',
  maxFrameX = 6,
  maxFrameY = 10,
  frameX = 0,
  frameY = 0,
  scale = 1.8,
  staggerFrame = 20
)*/

const player = new Player(
  435,
  285,
  './Img/character_idle.png',
  maxFrameX = 6,
  maxFrameY = 1,
  frameX = 0,
  frameY = 0,
  scale = 1.8,
  staggerFrame = 20
)

/*const player = new Player(
  435,
  150,
  './Img/happysheep_bouncing.png',
  maxFrameX = 6,
  maxFrameY = 1,
  frameX = 0,
  frameY = 0,
  scale = 1.2,
  staggerFrame = 20
)*/

let movables = [background, player];
const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  },
  space: {
    pressed: false
  }
}

function animate() {
  const animationId = window.requestAnimationFrame(animate)

  if (keys.w.pressed && lastKey === 'w') 
  {
      background.y += 3
      player.GoToState("RUN-UP");
  }
  else if (keys.s.pressed && lastKey === 's') 
  {
    background.y -= 3
    player.GoToState("RUN-DOWN");
  }
  else if (keys.d.pressed && lastKey === 'd') 
  {
    background.x -= 3
    player.GoToState("RUN-RIGHT");
  }
  else if (keys.a.pressed && lastKey === 'a') 
  {
    background.x += 3
    player.GoToState("RUN-LEFT");
  }
  else if (keys.space.pressed && lastKey === ' ') 
  {
    player.GoToState("ATTACK");
  }
  else if (keys.space.pressed && lastKey === 'd') 
  {
    player.GoToState("ATTACK-RIGHT");
  }
  else {
    player.GoToState('IDLE');
  }

  background.draw();
  player.draw();
}

animate()

window.addEventListener('keyup', (e) => {
  switch (e.key.toLowerCase()) {
    case 'w':
      keys.w.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 's':
      keys.s.pressed = false
      break
    case 'd':
      keys.d.pressed = false
      break
    case ' ':
      keys.space.pressed = false
      break
  }
})


let lastKey = ''
window.addEventListener('keydown', (e) => {
  switch (e.key.toLowerCase()) {
    case 'w':
      keys.w.pressed = true
      lastKey = 'w'
      break
    case 'a':
      keys.a.pressed = true
      lastKey = 'a'
      break
    case 's':
      keys.s.pressed = true
      lastKey = 's'
      break
    case 'd':
      keys.d.pressed = true
      lastKey = 'd'
      break
    case ' ':
      keys.space.pressed = true
      lastKey = ' '
      break
  }
})


