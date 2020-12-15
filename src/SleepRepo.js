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

  getUserWeekHours(id, date) {
    let userSleeps = this.allSleeps.filter(sleep => sleep.userID === id);
    let desiredDateIndex = userSleeps.map(sleep => sleep.date).indexOf(date);
    let desiredWeek = userSleeps.slice(desiredDateIndex - 6, desiredDateIndex + 1);
    return desiredWeek.reduce((week, sleep) => {
      week[sleep.date] = sleep.hoursSlept;
      return week;
    }, {});
  }

  getUserWeekQuality(id, date) {
    let userSleeps = this.allSleeps.filter(sleep => sleep.userID === id);
    let desiredDateIndex = userSleeps.map(sleep => sleep.date).indexOf(date);
    let desiredWeek = userSleeps.slice(desiredDateIndex - 6, desiredDateIndex + 1);
    return desiredWeek.reduce((week, sleep) => {
      week[sleep.date] = sleep.sleepQuality;
      return week;
    }, {});
  }

  averageAllUsersSleep() {
    let sumAllSleeps = this.allSleeps.reduce((totalSleepHours, sleep) => {
      totalSleepHours += sleep.hoursSlept;
      return totalSleepHours
    }, 0)
    return Math.floor(sumAllSleeps / this.allSleeps.length);
  }

  checkUserOverThree(date, id) {
    let userSleeps = this.allSleeps.filter(sleep => sleep.userID === id);
    let desiredDateIndex = userSleeps.map(sleep => sleep.date).indexOf(date);
    let desiredWeek = userSleeps.slice(desiredDateIndex - 6, desiredDateIndex + 1);
    let weekTotal =  desiredWeek.reduce((weekTotal, sleep) => {
      weekTotal += sleep.sleepQuality;
      return weekTotal;
    }, 0);
    return parseFloat((weekTotal / 7).toFixed(1));

  }

  findAllUsersOverThree(userRepo, date) {
    let restedUsers = userRepo.allUsers.filter(user => {
      let userAvg = this.checkUserOverThree(date, user.id);
      if (userAvg > 3) {
        return user.id;
      }
    })
    return restedUsers.map(user => user.id)
  }


  findMostRestedUsers(date) {
    let desiredDay = this.allSleeps.filter(sleep => sleep.date === date);
    let sortedHoursSlept = desiredDay.sort((a, b) => {
      return b.hoursSlept - a.hoursSlept;
    })
    //iterate through the desired day, if hoursSlept === largest than push to array, return array
    var mostRestedUsers = sortedHoursSlept.filter(sleep => sleep.hoursSlept === sortedHoursSlept[0].hoursSlept);
    return mostRestedUsers.map(user => user.userID);
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}