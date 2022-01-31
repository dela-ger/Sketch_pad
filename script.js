const container = document.getElementById("container");// we must call out the id in the html doc.

let cell; //we create a variable to hold the cells so we can make editing and formating ex. changing the color 

//this is the section where we create the rows and columns to form the grid
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (r = 0; r < (rows * cols); r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "grid-item";
    };
};

makeRows(30, 30);

function promptGrid(){
    let   number = prompt("Choose your grid size: ", 16);
       if (number >= 5 && number <=64) {
           makeRows(number,number);
           return;
        }else{
           //do{
               number = prompt("Please be serious");
           }
           //while( number < 5 || number > 64);
           //makeRows (number, number);
           return;
    }
       
//promptGrid();

//creating the function to change the color of the cells in the grid
function changeColor(cell) {
    cell.style.backgroundColor = "grey";
}

// adding the event listener to the cell for the color change
container.addEventListener("mouseover", function (e) {
    cell = e.target;

    if (cell.matches("div.grid-item")) {
        changeColor(cell);
    }
});

function reset () {
    let reset = window.location.reload();
    return reset;
}


let resetbutton = document.getElementById("resetbtn").addEventListener("click", reset);





