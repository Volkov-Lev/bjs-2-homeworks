class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null; // ID текущего интервала
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    const existingAlarm = this.alarmCollection.find(alarm => alarm.time === time);
    if (existingAlarm) {
      console.warn('Уже присутствует звонок на это же время');
      return;
    }

    this.alarmCollection.push({
      callback,
      time,
      canCall: true
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  getCurrentFormattedTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  }

  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach(alarm => {
        if (alarm.canCall && this.getCurrentFormattedTime() === alarm.time) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

// Пример использования:
const clock = new AlarmClock();
clock.addClock('10:00', () => console.log('Звонок на 10:00'));
clock.addClock('11:00', () => console.log('Звонок на 11:00'));
clock.start();

setTimeout(() => {
  clock.stop();
  clock.clearAlarms();
}, 5000);
