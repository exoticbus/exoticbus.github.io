let checkBtn = document.getElementById("checkBtn");
let scoreInput = document.getElementById("scoreInput");
let result = document.getElementById("result");

function checkScore() {
  let score = Number(scoreInput.value);

  if (scoreInput.value === "") {
    result.textContent = "Please enter a score.";
  } 
  else if (score < 0 || score > 100) {
    result.textContent = "Invalid!";
  } 
  else if (score >= 75) {
    result.textContent = `The student has passed!.`;
  } 
  else {
    result.textContent = `The student has failed!`;
  }

  scoreInput.value = "";
}

checkBtn.addEventListener("click", checkScore);

scoreInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkScore();
  }
});