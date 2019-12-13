import './style.scss';
const imagePath = require('./resources/logo.png');
const buffer = require('arraybuffer-loader!./resources/logo.png');
const PNG = require('pngjs').PNG;

console.dir(buffer);
//const array = new Uint8Array(buffer);
console.dir(imagePath);

var canvas = document.getElementById("raster");
var ctx = canvas.getContext("2d");
const imageData = ctx.createImageData(320, 240);

const img = new Image(320, 240);
img.src = imagePath.default;
img.onload = function() {
    imageData.drawImage(img, 0, 0);
    //ctx.drawImage(img, 0, 0);

};
