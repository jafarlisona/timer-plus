const timer = document.querySelector("h2");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const stopBtn = document.querySelector(".stop");
let seconds = 0;
let minutes = 0;
let hours = 0;
let time;
let isTimer = false;
startBtn.addEventListener("click", () => {
  if (isTimer) {
    return;
  } else {
    time = setInterval(() => {
      seconds++;

      let timerContent = "";
      if (hours < 10) {
        timerContent += `0${hours}:`;
      } else {
        timerContent += `${hours}:`;
      }
      if (minutes < 10) {
        timerContent += `0${minutes}:`;
      } else {
        timerContent += `${minutes}:`;
      }
      if (seconds < 10) {
        timerContent += `0${seconds}`;
      } else {
        timerContent += `${seconds}`;
      }
      timer.textContent = timerContent;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      } else if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }, 1000);
    isTimer=true
  }
});
resetBtn.onclick = () => {
  timer.textContent = "00:00:00";
  seconds = 0;
  minutes = 0;
  hours = 0;
  clearInterval(time);
  isTimer = false;
};
stopBtn.onclick = () => {
  clearInterval(time);
  isTimer = false;
};
