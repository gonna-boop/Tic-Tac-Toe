let boardPlay = 0;
let gameBoard = ['', '', '', '', '', '', '', '', ''];

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

function checkScore(gameBoard) {
  if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X')
       || (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X')
       || (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X')
       || (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X')
       || (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X')
       || (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X')
       || (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X')
       || (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X')
       || (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X')) {
    alert('X wins!');
  } else if ((gameBoard[0] === '0' && gameBoard[1] === 'O' && gameBoard[2] === 'O')
  || (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O')
  || (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O')
  || (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O')
  || (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O')
  || (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')
  || (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O')
  || (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')
  || (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O')) {
    alert('O wins!');
  }
}

// the below function writes the game move on the board

function writeMove(i) {
  if (boardPlay === 0) {
    const writeX = document.getElementById(`mouseOverGameBox${i}`);
    writeX.innerHTML += 'X';
    document.getElementById(`mouseOverGameBox${i}`).onclick = null;
    gameBoard.splice(i, 1, 'X');
    boardPlay++;
    checkScore(gameBoard);
  } else if (boardPlay === 1) {
    const writeO = document.getElementById(`mouseOverGameBox${i}`);
    writeO.innerHTML += 'O';
    document.getElementById(`mouseOverGameBox${i}`).onclick = null;
    gameBoard.splice(i, 1, 'O');
    boardPlay = 0;
    checkScore(gameBoard);
  }
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
          gameBox.setAttribute('onclick', `writeMove(${i})`);
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
          gameBox.setAttribute('onclick', `writeMove(${i})`);
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
          gameBox.setAttribute('onclick', `writeMove(${i})`);
          gameContainer.appendChild(gameBox);
        }
      }
    },
  };
}());

createGameBoard.gameBoard();