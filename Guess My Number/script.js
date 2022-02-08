"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highestScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "Not a Number!!";
  } else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "🥳Correct Number🥳!!";

    // change the background color
    document.querySelector("body").style.backgroundColor = "green";

    // change the width of the number
    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".number").textContent = randomNumber;
    if (score > highestScore) {
      highestScore = score;
      document.querySelector(".highscore").textContent = highestScore;
    }
  } else if (guess !== randomNumber) {
    // Refactoring
    document.querySelector(".message").textContent =
      guess > randomNumber ? "Number is too high!!📈" : "Number is too Low!!📉";
    if (score <= 1) {
      document.querySelector(".message").textContent = "Lose the game!!";
      document.querySelector("body").style.backgroundColor = "red";
    } else {
      score--;
      document.querySelector(".score").textContent = score;
    }
  }

  /*
  
  else if (guess > randomNumber) {
    document.querySelector(".message").textContent = "Number is too high!!📈";
    if (score <= 1) {
      document.querySelector(".message").textContent = "Lose the game!!";
      document.querySelector("body").style.backgroundColor = "red";
    } else {
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else if (guess < randomNumber) {
    document.querySelector(".message").textContent = "number is too Low!!📉";
    if (score <= 1) {
      document.querySelector(".message").textContent = "Lose the game!!";
      document.querySelector("body").style.backgroundColor = "red";
    } else {
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
  */
});

document.querySelector(".again").addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start Guessing..";
  document.querySelector("body").style.backgroundColor = "gray";
  document.querySelector(".number").style.width = "15rem";
});
