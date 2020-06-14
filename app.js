// Declear Variable
let min = 1,
  max = 10,
  winningNumber = getRandmNumber(1, 10),
  guessLeft = 3;

// get ui
const game = document.querySelector("#game"),
  minNumber = document.querySelector(".min-num"),
  maxNumber = document.querySelector(".max-num"),
  guessInput = document.querySelector("#guess-input"),
  guessBtn = document.querySelector("#guess-btn"),
  message = document.querySelector(".message");

// assign number to ins
minNumber.textContent = min;
minNumber.style.color = "red";
maxNumber.textContent = max;
maxNumber.style.color = "red";

// listen events
guessBtn.addEventListener("click", function () {
  // Get numeric value
  const guess = parseInt(guessInput.value);

  // validate the number within game range
  if (isNaN(guess) || guess < min || guess > max) {
    showMessage(`Please write number between ${min} and ${max}`, "red");
  } else if (guess === winningNumber) {
    gameOver(true, `You WIN! the number is: ${guess}`);
  } else {
    guessLeft -= 1;
    if (guessLeft === 0) {
      gameOver(false, `You Lost! the number was: ${winningNumber}`);
      // showMessage(`You Lost! the number was: ${winningNumber}`, "red");
    } else {
      // continue the wrong number
      showMessage(
        `Wrong! You have ${guessLeft} ${
          guessLeft > 1 ? "guesses" : "guess"
        } left`,
        "blue"
      );
      // input box color
      guessInput.style.borderColor = "red";
    }
  }
});

// set message to game so player can understand
function showMessage(msg, color) {
  // insert into para
  message.textContent = msg;
  message.style.color = color;
}

// function to start game again
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  // input box color
  guessInput.style.borderColor = color;
  // hide the input after winning
  guessInput.disabled = true;
  // message to show
  showMessage(msg, color);

  // play again
  guessBtn.value = "Play Again";
  guessBtn.className = "play-again";
  // console.log(guessBtn);
}

// listen the game restart ui
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Random number for winner
function getRandmNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
