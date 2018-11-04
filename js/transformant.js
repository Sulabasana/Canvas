document.addEventListener("DOMContentLoaded", function() {

//canvas
var canvas = document.getElementById("drawingCanvas")
var context = canvas.getContext('2d');
////draw 3 sqaures
// context.rect(0,0,30,30);
// context.rect(50,50,30,30);
// context.rect(100,100,30,30);
////draw square
// context.stroke();
//OR 
//draw one square
// context.rect(0,0,30,30);
// //move 0 point for 50 right and down and draw another square
// context.translate(50,50);
// context.rect(0,0,30,30);
// //move 0 point for another 50 right and down
// context.translate(50,50);
// context.rect(0,0,30,30);

//10 sqaures will create pattern
context.translate(100,100);
var copies = 10;
for (var i =1; i<copies;i++){
	//before drawing a square it turns coordinate system
	//Full turn is 2*Math.PI this code turns about small bit of this vaule
	context.rotate(2 * Math.PI * 1/(copies -1));
	//draw rectangle
	context.rect(0,0,60,60);

}


context.stroke();


});