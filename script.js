let borad = document.querySelector("#chessbord");

//unicode chhess pieces 

const pieces  = {
    black : ['♜','♞','♝','♛','♚','♝','♞','♜'],
    white : ['♖','♘','♗','♕','♔','♗','♘','♖'],
    pawnBlack : ['♟'],
    pawnWhite : ['♙']
};

let selectedSquare = null; //track the currently pices
const square = [];

//creat the 8 crox 8 chessbord
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
       const square = document.createElement("div");
       square.classList.add("square");
       square.dataset.row = row;
       square.dataset.col = col;
       
       
       //alternative color

       if ((row + col) % 2 === 0 ) square.classList.add("white");
       else square.classList.add("black");

       //palce pieces 

       if (row === 0) {
        square.textContent = pieces.black[col];
       } else if (row === 1) {
        square.textContent = pieces.pawnBlack;
       } else if (row === 6) {
        square.textContent = pieces.pawnWhite;
       }else if (row === 7) {
        square.textContent = pieces.white[col];
       }

       // click event for the moving

       square.addEventListener("click", () => handleclick(square) );

       borad.appendChild(square);
       square.push(square);
    }
    
}


function handleclick (square) {
    if (square.textContent && !selectedSquare) {
        selectedSquare = square;
        square.classList.add("selected");
    }
    //if moving to the empty or another squre
    else if (selectedSquare) {
        square.textContent = selectedSquare.textContent;
        selectedSquare.textContent = "";
        selectedSquare.classList.remove("selected");
        selectedSquare = null;
    }
}