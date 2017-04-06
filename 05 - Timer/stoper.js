const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const timeDisplay = document.querySelector(".time");
let timeInterval = 0;

function setTimer(){
  timeInterval = setInterval( function() { timer(start); }, 1000 );
}

function stopTimer() {
  clearInterval(timeInterval);
}

 const start = startTime();
 console.log(start);

function startTime() {
  const startT = new Date();
  const startH = startT.getHours();
  const startM = startT.getMinutes();
  const startS = startT.getSeconds();
  return startS;
}

function timer(start) {
  let timerNow = new Date();
  let nowS = timerNow.getSeconds();
    let diff = Math.abs(nowS-start-2);
    timeDisplay.innerHTML = "00:00:"+diff;
    console.log(diff);

startButton.addEventListener("click", setTimer);

stopButton.addEventListener("click", stopTimer);
