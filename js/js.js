"use strict";

//function
// draw button
function drawFigure() {
    ctx.beginPath();
    ctx.arc(100,300,100,0,2*Math.PI);
    ctx.clearRect(0, 0, WIDTH, HEIGHT); 
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(300,100,100,0,2*Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(300,500,100,0,2*Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(500,300,100,0,2*Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.fillRect(200,200,200,200);
    ctx.closePath();

    ctx.moveTo(100,300);
    ctx.lineTo(500,300);
    ctx.stroke();

    ctx.moveTo(300,100);
    ctx.lineTo(300,500);
    ctx.stroke();  
    canvas.removeEventListener("click", doSomething);  
}
//pattern button
function drawPattern(repeat) {
    ctx.clearRect(0, 0, WIDTH, HEIGHT); 
    image.onload = drawPattern.repeat;
  	var pat=ctx.createPattern(image,repeat);
  	ctx.rect(0,0,600,600);
  	ctx.fillStyle=pat;
  	ctx.fill();
    canvas.removeEventListener("click", doSomething);
}
//shape button
function getMousePosition(event) {
    var rect = canvas.getBoundingClientRect();
    var offsetX = rect.left;
    var offsetY = rect.top;
    var w = (rect.width-canvas.width)/2;
    var h = (rect.height-canvas.height)/2;
    offsetX += w;
    offsetY += h;
    var mouseX = Math.round(event.clientX-offsetX);
    var mouseY = Math.round(event.clientY-offsetY);
    return {x: mouseX, y: mouseY};
  }
  
function drawShape(x,y) {
    ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    ctx.beginPath();
    ctx.rect(x,y,Math.random() * '100',Math.random() * '100');
    ctx.fill();
    
  }
  
function doSomething(evt) {
    var positon = getMousePosition(evt);
    drawShape(positon.x, positon.y);
    
  }
// clear button
function clearCanvas() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    canvas.removeEventListener("click", doSomething);
}


// main program body

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const BTNSHAPE = document.getElementById("shape");

var image = new Image();
image.src = "./image/tiles.jpg";

BTNSHAPE.addEventListener("click", () => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    canvas.addEventListener("click", doSomething);
});