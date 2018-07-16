$(document).ready(function() {
  var board = {
    row1: {
      col1: 0,
      col2: 0,
      col3: 0
    },
    row2: {
      col1: 0,
      col2: 0,
      col3: 0
    },
    row3: {
      col1: 0,
      col2: 0,
      col3: 0
    }
  }
  var startingBoard = JSON.parse(JSON.stringify(board))
  var tie = false;
  var winner = '';
  window.moveCount = 9;
  var playerXTurn = true;
  var grid = document.querySelectorAll('.grid');
  var winText = document.getElementById('winner');
  var startGame = document.getElementById('startGame').addEventListener('click', startGame);
  var gameBox = $('.gameBox');
  var button = $('.button');
  // var nameX = $('#nameX');
  // var nameO = $('#nameO');

  function startGame() {
    var moveCount = 9;
    // button.css('visibility', 'hidden');
    gameBox.css('visibility', 'visible');
    winText.innerHTML = 'Player X gets the first move';
    board = JSON.parse(JSON.stringify(startingBoard))
    playerXTurn = true;
    for (var i = 0; i < grid.length; i++) {
      // Add active class on the click of "Start Game" button
      grid[i].innerHTML = '';
      grid[i].classList.add('active');
      grid[i].addEventListener('click', function(e) {
        // loop to get set column and row value
        var col = (e.target).getAttribute('value');
        var row = (e.target).getAttribute('id');
        if (this.innerHTML !== 'X' && this.innerHTML !== 'O'){
          if (playerXTurn == true) {
            winText.innerHTML = 'Player O turn'
            board[row][col]++;
            this.innerHTML = 'X';
            this.classList.remove('active');
            this.classList.add('inactive');
            window.moveCount--;
            checkWin();
            switchPlayer();
          } else if (playerXTurn == false) {
            winText.innerHTML = 'Player X turn'
            board[row][col]--;
            this.innerHTML = 'O';
            this.classList.remove('active');
            this.classList.add('inactive');
            window.moveCount--;
            checkWin();
            switchPlayer();
          }
        }
      })
    }
}

  // switch between X and O
  function switchPlayer() {
    if (playerXTurn !== false) {
      playerXTurn = false;
    } else {
      playerXTurn = true;
    }
  }

  // check for winner
  function checkWin() {
    // row 1
    if (board['row1']['col1'] == board['row1']['col2'] && board['row1']['col1'] == board['row1']['col3'] && board['row1']['col3'] !== 0) {
      if (board['row1']['col1'] == 1) {
        winner = 'X';
        endGame();
      } else {
        winner = 'O';
        endGame();
      }
      // row 2
    } else if (board['row2']['col1'] == board['row2']['col2'] && board['row2']['col1'] == board['row2']['col3'] && board['row2']['col3'] !== 0) {
      if (board['row2']['col1'] == 1) {
        winner = 'X';
        endGame();
      } else {
        winner = 'O';
        endGame();
      }
      // row 3
    } else if (board['row3']['col1'] == board['row3']['col2'] && board['row3']['col1'] == board['row3']['col3'] && board['row3']['col3'] !== 0) {
      if (board['row3']['col1'] == 1) {
        winner = 'X';
        endGame();
      } else {
        winner = 'O';
        endGame();
      }
      // col 1
    } else if (board['row1']['col1'] == board['row2']['col1'] && board['row1']['col1'] == board['row3']['col1'] && board['row3']['col1'] !== 0) {
      if (board['row1']['col1'] == 1) {
        winner = 'X';
        endGame();
      } else {
        winner = 'O';
        endGame();
      }
      // col 2
    } else if (board['row1']['col2'] == board['row2']['col2'] && board['row1']['col2'] == board['row3']['col2'] && board['row3']['col2'] !== 0) {
      if (board['row1']['col2'] == 1) {
        winner = 'X';
        endGame();
      } else {
        winner = 'O';
        endGame();
      }
      // col 3
    } else if (board['row1']['col3'] == board['row2']['col3'] && board['row1']['col3'] == board['row3']['col3'] && board['row3']['col3'] !== 0) {
      if (board['row1']['col3'] == 1) {
        winner = 'X';
        endGame();
      } else {
        winner = 'O';
      }
      // diagonal from top left
    } else if (board['row1']['col1'] == board['row2']['col2'] && board['row1']['col1'] == board['row3']['col3'] && board['row3']['col3'] !== 0) {
      if (board['row1']['col1'] == 1) {
        winner = 'X';
        endGame();
      } else {
        winner = 'O';
        endGame();
      }
      // diagonal from top right
    } else if (board['row1']['col3'] == board['row2']['col2'] && board['row1']['col3'] == board['row3']['col1'] && board['row3']['col1'] !== 0) {
      if (board['row1']['col3'] == 1) {
        winner = 'X';
        endGame();
      } else {
        winner = 'O';
        endGame();
      }
      // Tie
    } else if (window.moveCount === 0) {
      winner = 'Tie';
      endGame();
    }
  }

  function endGame() {
    if (winner == 'X') {
      winText.innerHTML = 'X is the winner!'
    }
    if (winner == 'O') {
      winText.innerHTML = 'O is the winner!';
    }
    if (winner == 'Tie') {
      winText.innerHTML = 'Tie';
    }
    setTimeout(function clearBoard() {
      for (var i = 0; i < grid.length; i++) {
        // clear html text
        grid[i].innerHTML = '';
        // reset classes
        grid[i].classList.remove('inactive');
        grid[i].classList.add('active');
        // prompt to start new game
        winText.innerHTML = 'Start a new game.';
        // make the button visible
        // button.css('visibility', 'visible');
        // make the board invisible
        // gameBox.css('visibility','hidden');
        // reset the move counter
        window.moveCount = 9;
        // reset the board object
        board = JSON.parse(JSON.stringify(startingBoard));
      }
    }, 2000);
  }
})
