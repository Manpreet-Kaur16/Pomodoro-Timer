let focusButtonElement = document.getElementById("focusButton");
let breakButtonElement = document.getElementById("breakButton");
let mintuesElement = document.getElementById("mintues");
let secondsElement = document.getElementById("seconds");
let focusDecrementElement = document.getElementById("focusDecrement");
let focusIncrementElement = document.getElementById("focusIncrement");
let breakDecrementElement = document.getElementById("breakDecrement");
let breakIncrementElement = document.getElementById("breakIncrement");
let focusTimeElement = document.getElementById("focusTime");
let breakTimeElement = document.getElementById("breakTime");
let resetButtonElement = document.getElementById("resetButton");
let startButtonElement = document.getElementById("startButton");

let currentMode = "focus";
let currentTime = 30;
let focusTime = 30;
let breakTime = 5;
let timer;
let timeLeftGlobal = null;
function displayTimer(formattedMinutes, formattedSeconds) {
  mintuesElement.innerText = formattedMinutes;
  secondsElement.innerText = formattedSeconds;
}
function startTimer(timeLeft) {
  console.log(`Starting timer, ${timeLeft}, seconds`);

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timeLeftGlobal = timeLeft;
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;

      // Format to show leading zeros
      const formattedMinutes = minutes.toString().padStart(2, "0");
      const formattedSeconds = seconds.toString().padStart(2, "0");

      displayTimer(formattedMinutes, formattedSeconds);

      console.log(`Time Left: ${formattedMinutes}:${formattedSeconds}`);
    } else {
      clearInterval(timer);
      console.log("Time's up!!!");
    }
  }, 1000);
  return timer;
}
function resetTimer() {
  clearInterval(timer);
  timeLeft = 10;
  console.log("timer reset");
}

setTimeout(() => {
  resetTimer();
});
function setMode(mode) {
  if (mode == "focus") {
    focusButtonElement.classList.add("bg-black", "text-white");
    focusButtonElement.classList.remove("bg-white", "text-black");
    breakButtonElement.classList.add("bg-white", "text-black");
    breakButtonElement.classList.remove("bg-black", "text-white");
    currentTime = focusTime;
  } else {
    focusButtonElement.classList.remove("bg-black", "text-white");
    focusButtonElement.classList.add("bg-white", "text-black");
    breakButtonElement.classList.remove("bg-white", "text-black");
    breakButtonElement.classList.add("bg-black", "text-white");
    currentTime = breakTime;
  }

  mintuesElement.innerText = currentTime;
}

focusButtonElement.addEventListener("click", () => {
  currentMode = "focus";
  currentTime = focusTime;
  setMode(currentMode);
});

breakButtonElement.addEventListener("click", () => {
  currentMode = "break";
  setMode(currentMode);
});

focusDecrementElement.addEventListener("click", () => {
  currentMode = "focus";
  setMode(currentMode);
  if (focusTime > 1) {
    focusTime = focusTime - 1;
  }
  currentTime = focusTime;
  mintuesElement.innerText = currentTime;
  focusTimeElement.innerText = currentTime + "m";
});

focusIncrementElement.addEventListener("click", () => {
  currentMode = "focus";
  setMode(currentMode);
  if (focusTime < 59) {
    focusTime = focusTime + 1;
  }
  currentTime = focusTime;
  mintuesElement.innerText = currentTime;
  focusTimeElement.innerText = currentTime + "m";
});

breakDecrementElement.addEventListener("click", () => {
  currentMode = "break";
  setMode(currentMode);
  if (breakTime > 1) {
    breakTime = breakTime - 1;
  }
  currentTime = breakTime;
  mintuesElement.innerText = currentTime;
  breakTimeElement.innerText = currentTime + "m";
});

breakIncrementElement.addEventListener("click", () => {
  currentMode = "break";
  setMode(currentMode);
  if (breakTime < 30) {
    breakTime = breakTime + 1;
  }
  currentTime = breakTime;
  mintuesElement.innerText = currentTime;
  breakTimeElement.innerText = currentTime + "m";
});

resetButtonElement.addEventListener("click", () => {
  resetButtonElement.classList.add("bg-black", "text-white");
  resetButtonElement.classList.remove("bg-white", "text-black");
  timeLeftGlobal = null;
  if (currentMode == "focus") {
    currentTime = 30;
    focusTime = 30;
    mintuesElement.innerText = currentTime;
    secondsElement.innerText = "00";
    focusTimeElement.innerText = currentTime + "m";
  }
  if (currentMode == "break") {
    currentTime = 5;
    breakTime = 5;
    mintuesElement.innerText = currentTime;
    secondsElement.innerText = "00";
    breakTimeElement.innerText = currentTime + "m";
  }
});

//start timer//
startButtonElement.addEventListener("click", () => {
  let timeInSeconds;
  if (currentMode == "focus") {
    timeInSeconds = focusTime * 60;
  } else {
    timeInSeconds = breakTime * 60;
  }

  if (startButtonElement.innerText == "Start") {
    if (timeLeftGlobal) {
      startTimer(timeLeftGlobal);
    } else {
      startTimer(timeInSeconds);
    }
    startButtonElement.innerText = "Stop";
  } else {
    startButtonElement.innerText = "Start";
    clearInterval(timer);
    console.log("Time's up!!!");
  }
});
