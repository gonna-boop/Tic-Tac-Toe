let boardPlay = 0;

// the below two functions change the color of the gameboard
// when the mouse hovers above them

function mouseOver(i) {
  const colorChange = document.getElementById(`gameBox${i}`);
  colorChange.id = `mouseOverGameBox${i}`;
}

function mouseOut(i) {
  const colorChange = document.getElementById(`mouseOverGameBox${i}`);
  colorChange.id = `gameBox${i}`;
}

function playGame(i) {
  const makeMove = document.getElementById(`mouseOverGameBox${i}`);
  
}

// the below function creates the Gameboard for the game to be played on
// it creates the HTML div, and assigns it parameters (i.e. data-ids, onclick, classes)
const createGameBoard = (function () {
  return {
    gameBoard() {
      for (i = 0; i < 9; i++) {
        if (i < 3) {
          const gameContainer = document.getElementById('gameBoard1');
          const gameBox = document.createElement('div');
          gameBox.id = `gameBox${i}`;
          gameBox.dataset.id = i;
          gameBox.className = 'col';
          gameBox.setAttribute('onmouseover', `mouseOver(${i})`);
          gameBox.setAttribute('onmouseout', `mouseOut(${i})`);
          gameBox.setAttribute('onclick', `playGame(${i})`);
          gameBox.setAttribute('onclick', 'writeMove()');
          gameContainer.appendChild(gameBox);
        } else if (i < 6) {
          const gameContainer = document.getElementById('gameBoard2');
          const gameBox = document.createElement('div');
          gameBox.id = `gameBox${i}`;
          gameBox.dataset.id = i;
          gameBox.className = 'col';
          gameBox.setAttribute('onmouseover', `mouseOver(${i})`);
          gameBox.setAttribute('onmouseout', `mouseOut(${i})`);
          gameBox.setAttribute('onclick', `playGame(${i})`);
          gameBox.setAttribute('onclick', 'writeMove()');
          gameContainer.appendChild(gameBox);
        } else {
          const gameContainer = document.getElementById('gameBoard3');
          const gameBox = document.createElement('div');
          gameBox.id = `gameBox${i}`;
          gameBox.dataset.id = i;
          gameBox.className = 'col';
          gameBox.setAttribute('onmouseover', `mouseOver(${i})`);
          gameBox.setAttribute('onmouseout', `mouseOut(${i})`);
          gameBox.setAttribute('onclick', `playGame(${i})`);
          gameBox.setAttribute('onclick', 'writeMove()');
          gameContainer.appendChild(gameBox);
        }
      }
    },
  };
}());

createGameBoard.gameBoard();

// the below function writes the game move on the board

function writeMove() {
  if (boardPlay === 0) {
    // write down "x" on game board
    boardPlay++; 
  } else {
    // write down "o" on game board
    boardPlay = 0;
  }
}