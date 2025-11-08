<<<<<<< HEAD
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
=======
let studentName = document.querySelector("#student");
let english = document.querySelector("#english");
let math = document.querySelector("#math");
let  computer = document.querySelector("#computer");
let calculate = document.querySelector("#calculate");
let result = document.querySelector("#result");

let total = 0;
let percentage = 0;
let staus;

calculate.addEventListener("click", function () {
    let Name = studentName.value;
    let engli = Number(english.value);
    let mat = Number(math.value);
    let com = Number(computer.value)

    if (Name === "" && engli === "" && mat == "" && com === "") {
    result.textContent = `please fill all field`;
}

total = engli + mat + com;

percentage = total / 3;
staus = (percentage >= 40) ? "pass" : "your are fail";

let grade = "";

if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B"
} else if (percentage >= 50) {
    grade = "C";
} else if (percentage >= 40) {
    grade = "d"
} else 
    grade = "F"
    

//final out put

result.innerHTML = `
<h3>Result for :${Name}</h>
total marks : ${total}<br>
percentage : ${percentage.toFixed(2)}% <br>
grade : ${grade}
status : ${staus}
`;

});






//  calculate.addEventListener ("click", function () {



//     total = english + math + computer ;
//     percentage = total / 3;
//     if (percentage > 40 ) {
//         percentage.textContent = `congrulation you have pass`;
//     } else if (percentage < 40) {
//         percentage.textContent = `oh so sad you are fail`
//     }
//     if (percentage >= 80) {
//         result.textContent = `ypur grade is A`
//     } else if (percentage >= 60) {
//         result.textContent = `your grade is B`;
//     } else if (percentage >= 50) {
//         result.textContent = `your garde  c`
//     }
//     result();
//  }); 

// calculate();
>>>>>>> f5dcc5f (Initial commit)
