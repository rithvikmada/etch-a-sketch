const container = document.querySelector("#container");
let numberOfSquares = 30;
let color = "black";

generateSquares();
addMouseBehavior(color);
addShadingBehavior(1);

function generateSquares() {        // Generate canvas
    for (let i = 1; i <= (numberOfSquares * numberOfSquares); i++) {        
        const squares = document.createElement("div");
        
        let dim = (500 - numberOfSquares)/numberOfSquares;      
        squares.setAttribute("style", `width: ${dim}px; height: ${dim}px`);
        squares.style.backgroundColor = "grey";

        squares.classList.add("square");  
        container.appendChild(squares);
    }
}

function addMouseBehavior(color) {       // Add mouseenter behavior
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {      
        let squareColor = square.style.backgroundColor;
        
        
        square.addEventListener("mouseenter", () => {

            if (squareColor == "grey") {
                squareColor = color;
                square.style.backgroundColor = squareColor; 
            }
        })
    });
};
 
function takeInput() {      // Clear canvas & grab user input
    container.innerHTML = "";
    numberOfSquares = input.value; 
    generateSquares();
    rainbow.checked = false;
    shader.checked = false;

    colorInput.value = "black"
    color = "black"
    addMouseBehavior(color);
}

function changeColor() {      // Clear canvas & grab user input
    rainbow.checked = false;
    color = colorInput.value; 
    addMouseBehavior(color);
}

function randomMouseBehavior() {
    const squares = document.querySelectorAll(".square");

        squares.forEach((square) => {
            let squareColor = square.style.backgroundColor;

            square.addEventListener("mouseenter", () => {

                if (squareColor == "grey") {
                    squareColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
                    square.style.backgroundColor = squareColor;
                }
            });
        });
}

function addShadingBehavior(level) {
    const squares = document.querySelectorAll(".square");

        squares.forEach((square) => {
            let squareOpacity = Number(square.style.opacity);

            if (squareOpacity < 1) {
                square.addEventListener("mouseenter", () => {
                    console.log(squareOpacity);
                    squareOpacity += level;
                    console.log(squareOpacity);
                    square.style.opacity = squareOpacity;
                    console.log(squareOpacity);
                }, true);
            }
        });

}

const submitButton = document.querySelector("#generate");
const input = document.querySelector("#input");

submitButton.onclick = () => takeInput();    // Click submit...
input.onkeydown = (event) => {      // .. or "Enter" to input 
    if (event.key === "Enter") submitButton.click();
}

const colorInput = document.querySelector("#color");
const changeButton = document.querySelector("#change");

changeButton.onclick = () => changeColor();    // Click submit...
colorInput.onkeydown = (event) => {      // .. or "Enter" to input 
    if (event.key === "Enter") changeButton.click();
}

const rainbow = document.querySelector("#rainbow");

rainbow.onchange = () => {
    if (rainbow.checked) randomMouseBehavior();
    else addMouseBehavior(color);
};

const shader = document.querySelector("#shader");

shader.onchange = () => {
    if (shader.checked) addShadingBehavior(0.2);
    else addShadingBehavior(1);
};