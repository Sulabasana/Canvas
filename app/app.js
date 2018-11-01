document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    var canvas = document.getElementById('drawingCanvas');
	var context = canvas.getContext("2d");
	context.moveTo(10,10);
	context.lineTo(200,40);
	context.lineWidth=10;
	context.strokeStyle="#EA3400"
	context.stroke()
  });