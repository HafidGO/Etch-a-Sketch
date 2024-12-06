let container = document.getElementById("container");

//Variable for number of grids wanted
var numberOfGrids = 16;

//For loop to create the grids
for (let index = 0; index < numberOfGrids; index++) {
    let pixelBox = document.createElement("div");
    pixelBox.className = "containerDivs"
    container.appendChild(pixelBox);
}

//Gets the divs inside the div container
var boxes = document.getElementsByClassName("containerDivs");
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mousemove', changeDivColors);
}

//Change background color of divs inside container
function changeDivColors(e) {
    console.log('Event type:' + e.type);    
    e.target.style.background = "rgb(184, 99, 99)";
} 
