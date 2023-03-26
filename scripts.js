const createGameBoard = (function () {
  return {
    gameBoard() {
      for (i = 0; i < 9; i++) {
        if (i < 3) {
          const gameContainer = document.getElementById('gameBoard1');
          const gameBox = document.createElement('div');
          gameBox.id = 'gameBox';
          gameBox.className = 'col';
          gameContainer.appendChild(gameBox);
        } else if (i < 6) {
          const gameContainer = document.getElementById('gameBoard2');
          const gameBox = document.createElement('div');
          gameBox.id = 'gameBox';
          gameBox.className = 'col';
          gameContainer.appendChild(gameBox);
        } else {
          const gameContainer = document.getElementById('gameBoard3');
          const gameBox = document.createElement('div');
          gameBox.id = 'gameBox';
          gameBox.className = 'col';
          gameContainer.appendChild(gameBox);
        }
      }
    },
  };
}());

createGameBoard.gameBoard();
