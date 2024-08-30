document.addEventListener("DOMContentLoaded", () => {
  const gridDisplay = document.querySelector(".grid");
  const score = document.querySelector("#score");
  const result = document.querySelector("#result");
  const width = 4;
  let squares = [];

  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      let square = document.createElement("div");
      square.innerHTML = "0";
      gridDisplay.appendChild(square);
      squares.push(square);
    }

    generate();
    generate();
  }

  createBoard();

  function generate() {
    const randomSquare = Math.floor(Math.random() * squares.length);
    if (squares[randomSquare].innerHTML === "0") {
      squares[randomSquare].innerHTML = "2";
    } else {
      generate();
    }
  }

  function moveRight() {
    //console.log('move right');

    for (let i = 0; i < squares.length; i++) {
      console.log(i);

      if (i % 4 === 0) {
        let totalOne = squares[i].innerHTML;
        let totalTwo = squares[i + 1].innerHTML;
        let totalThree = squares[i + 2].innerHTML;
        let totalOFour = squares[i + 3].innerHTML;

        let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalOFour)];
        console.log(row);

        let filteredRow = row.filter((num) => num != 0);
        let remainZeros = 4 - filteredRow.length;
        let zeros = new Array(remainZeros).fill(0);
        let newRow = zeros.concat(filteredRow);

        //console.log(newRow);

        squares[i].innerHTML = newRow[0].toString();
        squares[i + 1].innerHTML = newRow[1].toString();
        squares[i + 2].innerHTML = newRow[2].toString();
        squares[i + 3].innerHTML = newRow[3].toString();
      }
    }

    generate();
  }

  function combineRows() {
    for(let i = 0; i < 15; i++) {
        
    }
  }

  function keyRight() {
    moveRight();
    combineRows();
    moveRight();
    generate()
  }

  function handleKey(e) {
    if(e.key === 'ArrowRight') {
        keyRight();
    }
  }

  document.addEventListener('keydown', handleKey);


});
