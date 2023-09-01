const targetNumber = Math.floor(Math.random() * 10);
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");

const resultMessage = document.getElementById("resultMessage");
const imageContainer = document.getElementById("imageContainer");

guessButton.addEventListener("click", function () {
  const userGuess = parseInt(guessInput.value);

  if (userGuess === targetNumber) {
    resultMessage.textContent = "Congratulations! You guessed correctly!";
    imageContainer.innerHTML =
      '<img src="./win win.jpg" alt="Win" width="300px">';
  } else {
    resultMessage.textContent = "Oooh oh Try again";
    imageContainer.innerHTML =
      '<img src="./try again.jpg" alt="Try Again" width="300px">';
  }
});

let computerNum = document.getElementById("NUM");
let comNum = document.getElementById("comNum");
computerNum.textContent = ` ${targetNumber}`;
let image = document.getElementById("image");

const showNumber = () => {
  image.style.display = "none";
  comNum.style.display = "block";
};

const hideNumber = () => {
  image.style.display = "block";
  comNum.style.display = "none";
};

comNum.addEventListener("click", hideNumber);
image.addEventListener("click", showNumber);
