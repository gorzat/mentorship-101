const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const timeDisplayer = document.querySelector(".time");

class Timer {
  constructor(startBtn, stopBtn, placer) {
    this.timeInterval = null;
    this.startBtn = startBtn;
    this.stopBtn = stopButton;
    this.placer = placer;
  }

  addZero(time) {
    if (time < 10) {
      time = "0" + time;
    }
    return time;
  }

  format() {
    this.hours = this.addZero(this.hours);
    this.minutes = this.addZero(this.minutes);
    this.seconds = this.addZero(this.seconds);
    return (this.hours + ":" + this.minutes + ":" + this.seconds);
  }

  getDate() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    return this.format();
  }

  display() {
    this.placer.innerHTML = this.getDate();
  }

  addListener() {
    this.startBtn.addEventListener("click", () => this.start(this.placer));
    this.stopBtn.addEventListener("click", () => this.stop(this.timeInterval));
  }

  start() {
    this.timeInterval = setInterval(() => this.display(this.placer), 100);
    this.startBtn.setAttribute("disabled", "true");
    this.startBtn.classList.add("start--on");
    this.stopBtn.removeAttribute("disabled", "true");
    this.stopBtn.classList.add("stop--on");
  }

  stop() {
    clearInterval(this.timeInterval);
    this.stopBtn.setAttribute("disabled", "true");
    this.stopBtn.classList.remove("stop--on");
    this.startBtn.removeAttribute("disabled", "true");
    this.startBtn.classList.remove("start--on");
  }
}

let time = new Timer(startButton, stopButton, timeDisplayer);
time.addListener();
