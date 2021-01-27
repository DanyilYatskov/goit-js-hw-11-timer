import Timer from './countDownTimer';
const t = {
  selector: '#timer-1',
  targetDate: new Date('March 8, 2021'),
  refs: {
    days: document.querySelector("[data-value='days']"),
    mins: document.querySelector("[data-value='mins']"),
    secs: document.querySelector("[data-value='secs']"),
    hours: document.querySelector("[data-value='hours']"),
    endDate: document.querySelector('h1'),
  },
};

let timer = new Timer(t);
timer.startTimer();
