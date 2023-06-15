const qrcode = require('qrcode');

// Define the data you want to encode in the QR code
const data = 'https://www.google.com';

// Create a new QR code instance
const qr = new qrcode.QRCode();

// Encode the data into the QR code
qr.make(data);

// Create a canvas element
const canvas = document.createElement('canvas');

// Set the canvas width and height to the size of the QR code
canvas.width = qr.width;
canvas.height = qr.height;

// Create a 2D context for the canvas
const ctx = canvas.getContext('2d');

// Draw the QR code onto the canvas
ctx.drawImage(qr.canvas, 0, 0);

// Append the canvas to the document
document.body.appendChild(canvas);