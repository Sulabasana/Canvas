document.addEventListener("DOMContentLoaded", function() {
//canvas
var canvas = document.getElementById("drawingCanvas")
var context = canvas.getContext('2d');
//drawing function events
canvas.onmousedown = startDrawing;
canvas.onmouseup = stopDrawing;
canvas.onmouseout = stopDrawing;
canvas.onmousemove = draw;

//remember previous color element
var previousColorElement;
var red = document.getElementById('redPen');
var blue = document.getElementById('bluePen');
var green = document.getElementById('greenPen');

red.addEventListener('click', function(){
changeColor('rgb(221,22,29)', this)
console.log("Czerwony")
});

blue.addEventListener('click', function(){
changeColor('rgb(131,190,61)', this)
console.log("Niebieski")
});

green.addEventListener('click', function(){
changeColor('rgb(0,86,166)', this)
console.log("Zielony")
});

function changeColor(color, imgElement){
	//change color to selected by user
	context.strokeStyle = color;
	//add new style to <img> element
	imgElement.className = "Selected";
	//Restore previously cliked element <img> default view
	if(previousColorElement != null){
		previousColorElement.className = " ";
		previousColorElement = imgElement;
	}
}
var previousThicknessElement;
function changeThickness(color, imgElement){
	//change line thick
	context.lineWidth = thickness;
	//Add new style to <img> element
	imgElement.className = "Selected";
	//Restore previously cliked element <img> default view
	if (previousThicknessElement != null){
		previousThicknessElement.className = " ";
		previousThicknessElement = imgElement
	}
}
})
