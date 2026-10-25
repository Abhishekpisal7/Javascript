let circleContainer = document.querySelector(".circleContainer");
let timerValue = document.getElementById("timerValue");
let targetValue = document.getElementById("targetValue");
let scoreValue = document.getElementById("scoreValue");
let start = document.getElementById("startGame");

let timeLimit;
let score = 0;
let target;
let resultArray = [];

start.addEventListener("click", startGame);

function startGame() {
  resetScore();
  resetTimer();

  timeLimit = 60;

  generateTarget();
  generateNumber();

  regenerateNumber();
}

setInterval(() => {
  if (timeLimit <= 0) {
    circleContainer.innerHTML = ``;

    let div = document.createElement("div");
    div.className = "result";
    div.innerHTML = `
            <h1>GAME OVER</h1>
            <h3>Your Score is ${score}</h3>
            <button onClick=restartGame()>Restart Game</button>
        `;
    circleContainer.append(div);

    return;
  }
  timeLimit--;
  timerValue.innerText = timeLimit;
}, 1000);

function generateTarget() {
  target = Math.ceil(Math.random() * 10);
  targetValue.innerText = target;
}

function generateNumber() {
  circleContainer.innerHTML = ``;
  for (let i = 1; i <= 50; i++) {
    let divElem = document.createElement("div");
    let num = Math.ceil(Math.random() * target * 10);
    divElem.className = "circle";
    divElem.innerText = num;

    circleContainer.append(divElem);
  }
}

function regenerateNumber() {
  let circle = document.querySelectorAll(".circle");
  let generatedNumber = Array.from(circle);

  resultArray.length = 0;
  generatedNumber.forEach((value) => {
    resultArray.push(value.innerText);
  });

  while (!resultArray.includes(String(target))) {
    circleContainer.innerHTML = ``;
    resultArray.length = 0;
    generateNumber();

    let circle = document.querySelectorAll(".circle");
    let generatedNumber = Array.from(circle);

    generatedNumber.forEach((value) => {
      resultArray.push(value.innerText);
    });
  }
}

circleContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    let num = Number(event.target.innerText);
    if (num === Number(target)) {
      score += 10;
      scoreValue.innerText = score;
      generateTarget();
      circleContainer.innerHTML = ``;
      generateNumber();
      regenerateNumber();
    }
  }
});

function resetTimer() {
  timeLimit = 60;
  timerValue.innerText = timeLimit;
}

function resetScore() {
  score = 0;
  scoreValue.innerText = 0;
}

function restartGame() {
  resetTimer();
  resetScore();
  generateTarget();
  circleContainer.innerHTML = ``;
  generateNumber();
  regenerateNumber();
}
