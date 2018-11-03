document.addEventListener("DOMContentLoaded", function() {
//canvas
var canvas = document.getElementById("drawingCanvas")
var context = canvas.getContext('2d');
//Starting point of curve
context.moveTo(62, 242);
//variables with parameters of two control points and end point
var control1_X = 187;
var control1_Y = 32;
var control2_X = 429;
var control2_Y = 480;
var endPointX = 365;
var endPointY = 113;
//draws curve
context.bezierCurveTo(control1_X, control1_Y, control2_X, control2_Y,endPointX, endPointY);
//draws line between start and end point.
context.closePath();
//draws line
context.stroke();
});