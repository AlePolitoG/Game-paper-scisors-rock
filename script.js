let random = Math.round(Math.random() * 10);

function computer() {
  const result = random < 3 ? "paper" : random < 6 ? "scissors" : "rock";
  return result;
}

function human() {
  const result = prompt("Rock, paper, o scissor?");
  return result.toLowerCase();
}
var computer_score = 0;
var human_score = 0;
function game() {
  if (human() === computer()) {
    return human_score + 0;
  } else if (
    (human() === "rock" && computer() === "scissor") ||
    (human() === "paper" && computer() === "rock") ||
    (human() === "scissor" && computer() === "paper")
  ) {
    () => human_score++;
  } else if (
    (human() === "rock" && computer() === "paper") ||
    (human() === "paper" && computer() === "scissor") ||
    (human() === "scissor" && computer() === "rock")
  ) {
    () => computer_score++;
  }
}
