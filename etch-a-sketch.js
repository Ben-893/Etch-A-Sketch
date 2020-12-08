// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');

const shakeButton = document.querySelector('.shake');
// Setup the canvas for drawing
const { width, height } = canvas;

let x = Math.floor(Math.random() * width)
let y = Math.floor(Math.random() * height)

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // Start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
// Write a draw function

// Write a handler for the keys

// Clear and Shake function

// Listen for Arrow keys
