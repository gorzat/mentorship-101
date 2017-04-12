const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const timeDisplayer = document.querySelector(".time");

class Timer {
  constructor(startBtn, stopBtn, placer) {
    this.timeInterval = 0;
    this.startBtn = startBtn;
    this.stopBtn = stopButton;
    this.placer = placer;
  }

  format() {
    if (this.seconds < 10) {
      this.seconds = "0" + this.seconds;
    }
    if (this.minutes < 10) {
      this.minutes = "0" + this.minutes;
    }
    if (this.hours < 10) {
      this.hours = "0" + this.hours;
    }
    return (this.hours + ":" + this.minutes + ":" + this.seconds);
  }

  getDate() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    return this.format();
  }

  display(placer) {
    this.placer.innerHTML = this.getDate();
  }

  addListener() {
    this.startBtn.addEventListener("click", () => this.start(this.placer));
    this.stopBtn.addEventListener("click", () => this.stop(this.timeInterval));
  }

  start() {
    this.timeInterval = setInterval(() => this.display(this.placer), 1000);
  }

  stop(timeInterval) {
    clearInterval(timeInterval);
  }
}

let time = new Timer(startButton, stopButton, timeDisplayer);
time.addListener();
