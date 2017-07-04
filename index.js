let canvas
let canvasContext

function drawEverything () {
  canvasContext.fillStyle = 'white'
  canvasContext.fillRect(0, 0, canvas.width, canvas.height)
  canvasContext.fillStyle = 'red'
  canvasContext.fillRect(500, 550, 100, 10)
}

$(() => {
  console.log('test')
  canvas = document.getElementById('game-canvas')
  canvasContext = canvas.getContext('2d')
  drawEverything()
})
