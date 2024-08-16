const container = document.querySelector("#container");
let input = Number(prompt("How many rows? (Under 20)"));

for (let i = 1; i <= (input * input); i++) {        // Generate # of squares 
    const squares = document.createElement("div");
    
    let dim = (500 - input)/input;      // Determine size of each square
    squares.setAttribute("style", `width: ${dim}px; height: ${dim}px`);
    
    
    squares.classList.add("square");  
    container.appendChild(squares);
}

const squares = document.querySelectorAll(".square")

squares.forEach((square) => {       // Add mouseenter behavior
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "blue"
    });
});