document.addEventListener("DOMContentLoaded", function() {
    //console.log("DOM fully loaded and parsed");
    var canvas = document.getElementById('drawingCanvas');
	var context = canvas.getContext("2d");
	// //style of line
	// context.lineWidth=20;
	// context.strokeStyle="#EA3400"
	// //Draws line with rectangle ending 
	// context.moveTo(10,50);
	// context.lineTo(400,50);
	// context.lineCap = "butt";
	// context.stroke();
	// //Draws line with round ending
	// context.beginPath();
	// context.moveTo(20,120);
	// context.lineTo(400,120);
	// context.lineCap = "round";
	// context.stroke();
	// //Draws line with long, square ending
	// context.beginPath();
	// context.moveTo(20,190);
	// context.lineTo(400,190);
	// context.lineCap = "square";
	// context.stroke();

	//Triangle
	//draw shape
	context.moveTo(257,50);
	context.lineTo(50,250);
	context.lineTo(450,250);
	context.lineTo(250,50);
	//color triangle field
	context.fillStyle ="blue";
	context.fill();
	//line style
	context.lineWidth = '10';
	context.strokeStyle = "red";
	context.stroke();

  });