$(document).ready(function() {

var gridCount = 25;
var gameTime = 30;
var running = false;
var boxFrequency = 1000;
var box = 0;
var score = 0;
var perScore = 1;
var turn = 0;
var gt;
var bt;

  function clearBoxes() {
    $('.square').each(function() {
      $(this).css('background-color', '#FDFDFD');
    });
  }

  function resetGame() {
    $('.square').each(function() {
      $(this).css('background-color', '#fcfce1');
      $('#playTurn b').html('Player 1');
      turn = 0;
      gameTime = 30;
      $('#score b').html('0');
      $('#playerOneScore b').html('0');
      $('#playerTwoScore b').html('0');
    });
  }

  function updateValues() {
    $('#time b').html(gameTime);
    $('#score b').html(score);
  }

  function checkTime() {
    if (gameTime < 30 && gameTime > 10) {
      $('#time b').css('color', '#397D02');
    } else if (gameTime < 10) {
      $('#time b').css('color', '#e50000');
    }

    if (gameTime <= 0) {
      running = false;
      $('.square').css('background-color', '#FDFDFD');
      $('#gameStart').show();
      $('#gameStop').hide();
      turn++;
      checkTurn();
      displayScore();
    }
  }

  function displayScore() {
    if ((gameTime <= 0) && (turn % 2 !== 0)) {
      $('#playerOneScore b').html(score);
    } else if ((gameTime <= 0) && (turn % 2 === 0)) {
      $('#playerTwoScore b').html(score);
      winner();
    }
  }

  function winner() {
    $('.overlay').show();
    $('#resetGame').click(function() {
      location.reload();
    });

    if (parseInt($('#playerOneScore b').html()) > parseInt($('#playerTwoScore b').html())) {
      $('#winnerDisplay').html('<h2>Player 1 Wins!</h2>');
    } else if (parseInt($('#playerOneScore b').html()) < parseInt($('#playerTwoScore b').html())) {
      $('#winnerDisplay').html('<h2>Player 2 Wins!</h2>');
    } else {
      $('#winnerDisplay').html('<h2>It\'s a Tie!</h2>');
    }
  }

  function checkTurn() {
    if (turn % 2 === 0) {
      $('#playTurn b').html('Player 1');
    } else {
      $('#playTurn b').html('Player 2');
    }
  }

  $('#gameStart').click(function() {
    startGame();
  });

  function startGame() {
    $('#gameStart').hide();
    $('#gameStop').show();
    boxFrequency = 1000;
    perScore = 1;

    if (running === false) {
      score = 0;
      gameTime = 30;
      clearInterval(gt);
      clearInterval(bt);
    }

    $('#status').html('Catch the orange circle');
    running = true;
    gameClock();
    generateBox();
  }

  function generateBox() {
    bt = setInterval(function() {
      if (running === true) {
        clearBoxes();
        var box = randNum();
        $('#' + box).css('background-color', '#F18805');
      }
    }, boxFrequency);
  }

  function gameClock() {
    gt = setInterval(function() {
      if (running === true) {
        gameTime--;
        updateValues();
        checkTime();
      }
    }, 1000);
  }

  $('#gameStop').click(function() {
    $('#gameStart').show();
    $('#gameStop').hide();
    running = false;
    score = 0;
    gameTime = 30;
    clearInterval(gt);
    clearInterval(bt);
    resetGame();
    $('#status').html('Game Over');
  });

  $('.square').click(function() {
    $(this).css('background-color', '#FDFDFD');
    if (running === false) {
      clearBoxes();
      $('#status').html('Press Start');
    } else if ($(this).attr('id') == box) {
      score += perScore;
    } else {
      score -= perScore;
    }
    updateValues();
  });

  function randNum() {
    box = Math.floor(Math.random() * gridCount);
    return box;
  }

});
