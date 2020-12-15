class Sleep {
  constructor(sleep) {
    this.userID = sleep.userID;
    this.date = sleep.date;
    this.hoursSlept = sleep.hoursSlept;
    this.sleepQuality = sleep.sleepQuality;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}