class SleepRepo {
  constructor(sleeps) {
    this.allSleeps = sleeps;
  }

  getAvgSleepHours(id) {
    let allUserSleeps = this.allSleeps.filter(sleep => {
      return sleep.userID === id;
    })
    let sumSleep = allUserSleeps.reduce((total, day) => {
      return total += day.hoursSlept;
    }, 0)
    return Math.floor(sumSleep / allUserSleeps.length);
  }

  getAvgSleepQuality(id) {
    let allUserSleeps = this.allSleeps.filter(sleep => {
      return sleep.userID === id;
    })
    let sumSleep = allUserSleeps.reduce((total, day) => {
      return total += day.sleepQuality;
    }, 0)
    return Math.floor(sumSleep / allUserSleeps.length);
  }

  getHoursSlept(id, date) {
    let userSleeps = this.allSleeps.filter(sleep => sleep.userID === id);
    let specificSleep = userSleeps.find(sleep => sleep.date === date);
    return specificSleep.hoursSlept;
  }

  getQualitySlept(id, date) {
    let userSleeps = this.allSleeps.filter(sleep => sleep.userID === id);
    let specificSleep = userSleeps.find(sleep => sleep.date === date);
    return specificSleep.sleepQuality;
  }
}



if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}