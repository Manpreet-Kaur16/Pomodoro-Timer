let timeLeft = 120; // Time in seconds;
let timer;

function startTimer() {
  console.log(`Starting timer: ${timeLeft} seconds`);

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      let mintues = timeLeft / 60;
      console.log(`Time Left: ${mintues}, ${seconds} seconds`);
    } else {
      clearInterval(timer);
      console.log("Time's up!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 10;
  console.log("Timer reset to 10 seconds");
}

// Start the timer
startTimer();

// Reset the timer after 5 seconds
//setTimeout(() => {
//resetTimer();
//}, 5000);
