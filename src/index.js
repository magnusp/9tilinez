import './style.scss';

import buffer from './resources/logo.png';
const canvas = document.getElementById("raster");
const ctx = canvas.getContext("2d");

const image = new Image(520, 256);
image.src = buffer;
image.onload = function() {
    ctx.drawImage(image, 0, 0);
};