function computer() {
  let random = Math.round(Math.random() * 10);
  const result = random < 3 ? "paper" : random < 6 ? "scissor" : "rock";
  return result;
}
const paragraph = document.querySelector("p");
const btPaper = document.getElementById("paper");
const btRock = document.querySelector("#rock");
const btScissor = document.querySelector("#scissors");
const tryText = document.getElementById("winner-loser");
const scoreH = document.getElementById("playerScore");
const scoreC = document.getElementById("computerScore");

tryText.innerText = "TRY!";

scoreH.innerText = 0;
scoreC.innerText = 0;

btPaper.onclick = () => {
  casePaper();
};

function casePaper() {
  if (computer() === "paper") {
    tryText.innerText = "Tie!";
  } else if (computer() === "rock") {
    tryText.innerText = "Good!";
    scoreH.innerText++;
  } else if (computer() === "scissor") {
    tryText.innerText = ":(";
    scoreC.innerText++;
  }
  if (scoreH.innerText == 5 || scoreC.innerText == 5) {
    btPaper.onclick = null;
    btRock.onclick = null;
    btScissor.onclick = null;
  }
}

btRock.onclick = () => {
  caseRock();
};

function caseRock() {
  if (computer() === "rock") {
    tryText.innerText = "Tie!";
  } else if (computer() === "scissor") {
    tryText.innerText = "Good!";
    scoreH.innerText++;
  } else if (computer() === "paper") {
    tryText.innerText = ":(";
    scoreC.innerText++;
  }
  if (scoreH.innerText == 5 || scoreC.innerText == 5) {
    btPaper.onclick = null;
    btRock.onclick = null;
    btScissor.onclick = null;
  }
}

btScissor.onclick = () => {
  caseScissor();
};

function caseScissor() {
  if (computer() === "scissor") {
    tryText.innerText = "Tie!";
  } else if (computer() === "paper") {
    tryText.innerText = "Good!";
    scoreH.innerText++;
  } else if (computer() === "rock") {
    tryText.innerText = ":(";
    scoreC.innerText++;
  }
  if (scoreH.innerText == 5 || scoreC.innerText == 5) {
    btPaper.onclick = null;
    btRock.onclick = null;
    btScissor.onclick = null;
  }
}
