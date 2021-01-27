class Timer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
    this.active = false;
  }
  getRemainingTime(targetDate) {
    const total = Date.parse(new Date()) - Date.parse(targetDate);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return {
      total,
      days,
      hours,
      mins,
      secs,
    };
  }
}
