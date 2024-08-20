const container = document.querySelector("#container");
let numberOfSquares = 40;
let color = "black";

generateSquares();
addMouseBehavior(color);

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
    addMouseBehavior(color);
}

const submit = document.querySelector("#generate");
const input = document.querySelector("#input");

submit.onclick = () => takeInput();    // Click submit...
input.onkeydown = (event) => {      // .. or "Enter" to input 
    if (event.key === "Enter") submit.click();
}

const rainbow = document.querySelector("#rainbow");

rainbow.onchange = () => {
    
    if (rainbow.checked) {
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
    else {
        addMouseBehavior(color);
    }
};