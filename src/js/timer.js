class Timer {
  constructor(selector, targetDate, refs) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
    this.active = false;
    this.refs = {
      days: refs.days,
      mins: refs.mins,
      secs: refs.secs,
      hours: refs.hours,
    };
  }
  getRemainingTime() {
    const total = Date.parse(new Date()) - Date.parse(this.targetDate);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const mins = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((total % (1000 * 60)) / 1000);
    return {
      total,
      days,
      hours,
      mins,
      secs,
    };
  }
  updateTimer() {
    const time = this.getRemainingTime();
    this.refs.days.innerHTML = time.days;
    this.refs.hours.innerHTML = ('0' + time.hours).slice(-2);
    this.refs.mins.innerHTML = ('0' + time.mins).slice(-2);
    this.refs.secs.innerHTML = ('0' + time.secs).slice(-2);
    if (time.total <= 0) {
      clearInterval(this.intervalId);
    }
  }
  startTimer() {
    if (this.active) {
      return;
    }
    this.updateTimer();
    this.intervalId = setInterval(this.updateTimer, 1000);
    this.active = true;
  }
  stopTimer() {
    clearInterval(this.intervalId);
    this.active = false;
    this.intervalId = null;
  }
}
const refs = {
  days: document.querySelector("[data-value='days']"),
  mins: document.querySelector("[data-value='mins']"),
  secs: document.querySelector("[data-value='secs']"),
  hours: document.querySelector("[data-value='hours']"),
};
let timer = new Timer('#timer-1', new Date('Jul 17, 2019'), refs);
timer.startTimer();
