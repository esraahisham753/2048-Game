document.addEventListener("DOMContentLoaded", () => {
  const gridDisplay = document.querySelector(".grid");
  const scoreDisplay = document.querySelector("#score");
  const result = document.querySelector("#result");
  const width = 4;
  let squares = [];
  let score = 0;

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
      //console.log(i);

      if (i % 4 === 0) {
        let totalOne = squares[i].innerHTML;
        let totalTwo = squares[i + 1].innerHTML;
        let totalThree = squares[i + 2].innerHTML;
        let totalOFour = squares[i + 3].innerHTML;

        let row = [
          parseInt(totalOne),
          parseInt(totalTwo),
          parseInt(totalThree),
          parseInt(totalOFour),
        ];
        //console.log(row);

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
  }

  function moveLeft() {
    //console.log('move right');

    for (let i = 0; i < squares.length; i++) {
      //console.log(i);

      if (i % 4 === 0) {
        let totalOne = squares[i].innerHTML;
        let totalTwo = squares[i + 1].innerHTML;
        let totalThree = squares[i + 2].innerHTML;
        let totalOFour = squares[i + 3].innerHTML;

        let row = [
          parseInt(totalOne),
          parseInt(totalTwo),
          parseInt(totalThree),
          parseInt(totalOFour),
        ];
        //console.log(row);

        let filteredRow = row.filter((num) => num != 0);
        let remainZeros = 4 - filteredRow.length;
        let zeros = new Array(remainZeros).fill(0);
        let newRow = filteredRow.concat(zeros);

        //console.log(newRow);

        squares[i].innerHTML = newRow[0].toString();
        squares[i + 1].innerHTML = newRow[1].toString();
        squares[i + 2].innerHTML = newRow[2].toString();
        squares[i + 3].innerHTML = newRow[3].toString();
      }
    }
  }

  function moveUp() {
    //console.log('move right');

    for (let i = 0; i < 4; i++) {
      //console.log(i);

      let totalOne = squares[i].innerHTML;
      let totalTwo = squares[i + width].innerHTML;
      let totalThree = squares[i + 2 * width].innerHTML;
      let totalOFour = squares[i + 3 * width].innerHTML;

      let col = [
        parseInt(totalOne),
        parseInt(totalTwo),
        parseInt(totalThree),
        parseInt(totalOFour),
      ];
      //console.log(row);

      let filteredCol = col.filter((num) => num != 0);
      let remainZeros = 4 - filteredCol.length;
      let zeros = new Array(remainZeros).fill(0);
      let newCol = filteredCol.concat(zeros);

      //console.log(newRow);

      squares[i].innerHTML = newCol[0].toString();
      squares[i + width].innerHTML = newCol[1].toString();
      squares[i + 2 * width].innerHTML = newCol[2].toString();
      squares[i + 3 * width].innerHTML = newCol[3].toString();
    }
  }

  function moveDown() {
    //console.log('move right');

    for (let i = 0; i < 4; i++) {
      //console.log(i);

      let totalOne = squares[i].innerHTML;
      let totalTwo = squares[i + width].innerHTML;
      let totalThree = squares[i + 2 * width].innerHTML;
      let totalOFour = squares[i + 3 * width].innerHTML;

      let col = [
        parseInt(totalOne),
        parseInt(totalTwo),
        parseInt(totalThree),
        parseInt(totalOFour),
      ];
      //console.log(row);

      let filteredCol = col.filter((num) => num != 0);
      let remainZeros = 4 - filteredCol.length;
      let zeros = new Array(remainZeros).fill(0);
      let newCol = zeros.concat(filteredCol);

      //console.log(newRow);

      squares[i].innerHTML = newCol[0].toString();
      squares[i + width].innerHTML = newCol[1].toString();
      squares[i + 2 * width].innerHTML = newCol[2].toString();
      squares[i + 3 * width].innerHTML = newCol[3].toString();
    }
  }

  function combineRows() {
    //console.log('combine rows');

    for (let i = 0; i < 15; i++) {
      if (
        squares[i].innerHTML === squares[i + 1].innerHTML &&
        squares[i].innerHTML != 0
      ) {
        squares[i + 1].innerHTML =
          parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML);
        squares[i].innerHTML = "0";
        score += 10;
        scoreDisplay.innerText = score;
      }
    }

    winGame();
    loseGame();
  }

  function combineCols() {
    //console.log('combine rows');

    for (let i = 0; i < 12; i++) {
      if (
        squares[i].innerHTML === squares[i + width].innerHTML &&
        squares[i].innerHTML != 0
      ) {
        squares[i].innerHTML =
          parseInt(squares[i].innerHTML) +
          parseInt(squares[i + width].innerHTML);
        squares[i + width].innerHTML = "0";
        score += 10;
        scoreDisplay.innerText = score;
      }
    }

    winGame();
    loseGame();
  }

  function keyRight() {
    moveRight();
    combineRows();
    moveRight();
    generate();
  }

  function keyLeft() {
    moveLeft();
    combineRows();
    moveLeft();
    generate();
  }

  function keyUp() {
    moveUp();
    combineCols();
    moveUp();
    generate();
  }

  function keyDown() {
    moveDown();
    combineCols();
    moveDown();
    generate();
  }

  function handleKey(e) {
    if (e.key === "ArrowRight") {
      keyRight();
    } else if (e.key === "ArrowLeft") {
      keyLeft();
    } else if (e.key === "ArrowUp") {
      keyUp();
    } else if (e.key === "ArrowDown") {
      keyDown();
    }
  }

  document.addEventListener("keydown", handleKey);

  function colorTiles() {
    for (let square of squares) {
      if (square.innerHTML == 0) square.style.backgroundColor = "#697565";
      if (square.innerHTML == 2) square.style.backgroundColor = "#F5F5F5";
      if (square.innerHTML == 4) square.style.backgroundColor = "#98DED9";
      if (square.innerHTML == 8) square.style.backgroundColor = "#FFDC7F";
      if (square.innerHTML == 16) square.style.backgroundColor = "#FF9874";
      if (square.innerHTML == 32) square.style.backgroundColor = "#F05A7E";
      if (square.innerHTML == 64) square.style.backgroundColor = "#FABC3F";
      if (square.innerHTML == 128) square.style.backgroundColor = "#E2BFD9";
      if (square.innerHTML == 256) square.style.backgroundColor = "#B4E380";
      if (square.innerHTML == 512) square.style.backgroundColor = "#F3FEB8";
      if (square.innerHTML == 1024) square.style.backgroundColor = "#BBE9FF";
      if (square.innerHTML == 2048) square.style.backgroundColor = "#FF7F3E";
    }
  }

  function winGame() { 
    for (let square of squares) {
      if (square.innerHTML == 2048) {
        document.removeEventListener("keydown", handleKey);
        clearInterval(colorInterval);
        result.innerHTML = "You WIN!";
      }
    }
  }

  function loseGame() {
    console.log('lose game');
    
    for (let square of squares) {
      if (square.innerHTML == 0) {
        return;
      }
    }

    document.removeEventListener("keydown", handleKey);
    clearInterval(colorInterval);
    result.innerHTML = "GAME OVER!";
  }

  let colorInterval = setInterval(colorTiles, 50);
});
