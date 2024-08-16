const container = document.querySelector("#container");
let numberOfSquares = 40;
generateSquares();
addMouseBehavior();

function generateSquares() {        // Generate canvas
    for (let i = 1; i <= (numberOfSquares * numberOfSquares); i++) {        
        const squares = document.createElement("div");
        
        let dim = (500 - numberOfSquares)/numberOfSquares;      
        squares.setAttribute("style", `width: ${dim}px; height: ${dim}px`);
        
        squares.classList.add("square");  
        container.appendChild(squares);
    }
}

function addMouseBehavior() {       // Add mouseenter behavior
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {       
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "blue"
        });
    });
}

function takeInput() {      // Clear canvas & grab user input
    container.innerHTML = "";
    numberOfSquares = input.value; 
    generateSquares();
    addMouseBehavior();
}

const submit = document.querySelector("#generate");
const input = document.querySelector("#input");

submit.onclick = () => takeInput();    // Click submit...
input.onkeydown = (event) => {      // .. or "Enter" to input 
    if (event.key === "Enter") submit.click();
}