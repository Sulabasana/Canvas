document.addEventListener("DOMContentLoaded", function() {

//canvas
var canvas = document.getElementById("drawingCanvas")
var context = canvas.getContext('2d');

//colors and fill
context.fillStyle = "rgb (100,150,185)";
context.lineWidth = 10;
context.strokeStyle = "red"
//draws circle
context.arc(110,120,100, 0, 2*Math.PI);
context.fill();
context.stroke();
//new line before drawing of new shape
context.beginPath();
//fill shape
context.fillStyle = "rgba(100,150,185,0.5)"
//or
// context.globalAlpha = 0.5;
// context.fillStyle = "rgb(100,150,185)";
//draws triangle
context.moveTo(215,50);
context.lineTo(15,250);
context.lineTo(315,250);
context.closePath();
context.fill();
context.stroke();
});