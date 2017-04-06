const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const timeDisplay = document.querySelector(".time");


function Timer() {

  this.date = new Date();

  this.hours = this.date.getHours();

  this.minutes = this.date.getMinutes();

  this.seconds = this.date.getSeconds();
}

Timer.prototype.format = function() {
    if (this.seconds < 10 ) {this.seconds = "0" + this.seconds;}
    if (this.minutes < 10 ) {this.minutes = "0" + this.minutes;}
    if (this.hours < 10 ) {this.hours = "0" + this.hours;}
    return (this.hours + ":" + this.minutes + ":" + this.seconds);
}

Timer.prototype.display = function() {
  timeDisplay.innerHTML = this.format();
}


function loop() {
  let time = new Timer();
  time.display();
}

function start(){
  timeInterval = setInterval(loop, 1000);
}

function stopTimer() {
  clearInterval(timeInterval);
}

stopButton.addEventListener("click", stopTimer);
startButton.addEventListener("click", start);


//
