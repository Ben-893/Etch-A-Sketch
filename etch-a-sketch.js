// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');

const shakeButton = document.querySelector('.shake');
// Setup the canvas for drawing
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
// Write a draw function
function draw({ key }) {
  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);

  x -= 10;
  y -= 10;

  ctx.lineTo(x, y);
  ctx.stroke();
}
// Write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}
// Clear and Shake function

// Listen for Arrow keys
window.addEventListener('keydown', handleKey);
