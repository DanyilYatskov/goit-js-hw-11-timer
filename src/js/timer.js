// class countdownTimer {
//   constructor(timer) {
//     this.selector = timer.selector;
//     this.targetDate = timer.targetDate;
//     this.intervalId = null;
//     this.active = false;
//     this.refs = {
//       days: timer.refs.days,
//       mins: timer.refs.mins,
//       secs: timer.refs.secs,
//       hours: timer.refs.hours,
//       endDate: timer.refs.endDate,
//     };
//   }
//   getRemainingTime() {
//     const total = Date.parse(this.targetDate) - Date.parse(new Date());
//     const days = Math.floor(total / (1000 * 60 * 60 * 24));
//     const hours = Math.floor(
//       (total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
//     );
//     const mins = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
//     const secs = Math.floor((total % (1000 * 60)) / 1000);
//     return {
//       total,
//       days,
//       hours,
//       mins,
//       secs,
//     };
//   }
//   updateTimer() {
//     const time = this.getRemainingTime();
//     this.refs.days.innerHTML = this.pad(time.days);
//     this.refs.hours.innerHTML = this.pad(time.hours);
//     this.refs.mins.innerHTML = this.pad(time.mins);
//     this.refs.secs.innerHTML = this.pad(time.secs);
//     if (time.total <= 0) {
//       clearInterval(this.intervalId);
//     }
//   }
//   startTimer() {
//     if (this.active) {
//       return;
//     }
//     this.refs.endDate.innerHTML = `Till ${this.targetDate.getDate()}th of ${this.targetDate.toLocaleString(
//       'en-EN',
//       { month: 'long' },
//     )} year ${this.targetDate.getFullYear()}  remains`;

//     this.updateTimer();
//     this.intervalId = setInterval(() => {
//       this.updateTimer();
//     }, 1000);
//     this.active = true;
//   }
//   stopTimer() {
//     clearInterval(this.intervalId);
//     this.active = false;
//     this.intervalId = null;
//   }
//   pad(value) {
//     if (value.length > 2) {
//       return;
//     }
//     return String(value).padStart(2, '0');
//   }
// }
import Timer from './countdownTimer';
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
