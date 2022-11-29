const limitValue = document.querySelector("#limitValue");
const userValue = document.querySelector("#userValue");
const playBtn = document.querySelector("button");
const displayResult = document.querySelector(".displayResult");
const wonText = document.querySelector("#won");
const lostText = document.querySelector("#lost");

function changeLimitNumber() {
  userValue.max = limitValue.value;
  userValue.placeholder = `write under ${limitValue}`;
}

function gameResult(event) {
  event.preventDefault();

  if (userValue.value > limitValue.value) {
    return;
  }

  const userNumber = userValue.value;
  const machineNumber = Math.floor(Math.random() * limitValue.value);
  displayResult.innerText = `You chose: ${userNumber}, the machine chose: ${machineNumber}`;

  if (parseInt(userNumber, 10) === parseInt(machineNumber, 10)) {
    wonText.classList.remove("hidden");
    lostText.classList.add("hidden");
  } else {
    wonText.classList.add("hidden");
    lostText.classList.remove("hidden");
  }
}

limitValue.addEventListener("input", changeLimitNumber);
playBtn.addEventListener("click", gameResult);
