//Define an initial number of box to show on screen
let BoxesPerSide = 4;

//Calculate number of grids either with initial set number or the given number by the user
function changeBoxSize(BoxesPerSide) {
    let containerSide = document.getElementById("container").clientWidth;
    newBoxSide = containerSide/BoxesPerSide;
    //Change size of boxes
    let boxes = document.querySelectorAll(".boxesDivs");
    boxes.forEach((box) =>{
        box.style.height =  `${newBoxSide}px`;
        box.style.width =  `${newBoxSide}px`;
    })
}

//For loop to create the boxes inside the div
function createBoxes() {
    //Get the container element that it's going to contain the squares
    let container = document.getElementById("container");
    //variable with total of boxes to create
    totalBoxes = totalBoxes = BoxesPerSide * BoxesPerSide;
    //For loop to create desire number of boxes
    for (let index = 0; index < totalBoxes; index++) {
        let box = document.createElement("div");
        box.className = "boxesDivs"
        container.appendChild(box);
    }
}
createBoxes()
changeBoxSize(BoxesPerSide);



//Random function to choose a color in RGB
function randomColor(){
    return Math.floor(Math.random() * 256);
}

//Change the color of the box
function changeBoxColor() {
    //Gets the divs inside the div container
    var boxes = document.getElementsByClassName("boxesDivs");
    //For loop that iterate between boxes elements and change their color
    for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseover', (e) => {
        //Changes the div background color
        e.target.style.background = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
        //Gets current opacity as a string and convert it to float 
        let currentOpacity = parseFloat(e.target.style.opacity || 0);
        //Checks if the current opacity it's below a value of 1 and adds ".10" to the opacity value.
        if (currentOpacity  < 1) {
            e.target.style.opacity = (currentOpacity + 0.10).toFixed(2);
        }
    })
};
}
changeBoxColor();


//Delete all boxes from container
function clearBoxes() {
    let boxes = document.getElementsByClassName("boxesDivs");
    // for (let i = boxes.length; i > 0; i--) {
    //     boxes[i].parentNode.removeChild(boxes[i]);    
    // }
    while (boxes.length > 0) {
        boxes[0].parentNode.removeChild(boxes[0]);       
    }
}

//Get the button element to change number of squares
let gridButton = document.getElementById("gridButton");
//Add an event listener to the button that listens for the click event
gridButton.addEventListener('click', function(){
    if((BoxesPerSide = parseInt(prompt("Enter the number of squares per side. Max value: 100"))) <= 100){
        totalBoxes = BoxesPerSide * BoxesPerSide;
        clearBoxes();
        createBoxes(totalBoxes);
        changeBoxSize(BoxesPerSide)
        changeBoxColor();
    }

})

// //Reset the HTML 
resetButton.addEventListener("click", () => (window.location.reload()))

