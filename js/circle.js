document.addEventListener("DOMContentLoaded", function() {
//canvas
var canvas = document.getElementById("drawingCanvas")
var context = canvas.getContext('2d');
// //arch parametr
// var centerX = 150;
// var centerY = 300;
// var radius = 100;
// var startingAngle = 1.25 * Math.PI;
// var endingAngle = 1.75 * Math.PI;
// //draws circe using parameters above
// context.arc(centerX, centerY, radius, startingAngle, endingAngle);
// //draws line between start and end of arch
// context.closePath();
// //draws line
// context.stroke();

//Create CIRCLE
var centerX = 150;//odległośc punktu startowego na osi X
var centerY = 300;//odległośc punktu startowego na osi Y
var radius = 100; //promień
var startingAngle = 0;
var endingAngle = 2 * Math.PI;
context.arc(centerX, centerY, radius, startingAngle, endingAngle);
context.stroke();
});