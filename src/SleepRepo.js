class SleepRepo {
  constructor(sleeps) {
    this.allSleeps = sleeps;
  }

  getAvgSleepData(id, property) {
    let allUserSleeps = this.allSleeps.filter(sleep => {
      return sleep.userID === id;
    })
    let sumSleep = allUserSleeps.reduce((total, day) => {
      return total += day[property];
    }, 0)
    return parseFloat((sumSleep / allUserSleeps.length).toFixed(1));
  }

  getUserSleepDataForDate(id, date, property) {
    let userSleeps = this.allSleeps.filter(sleep => sleep.userID === id);
    let specificSleep = userSleeps.find(sleep => sleep.date === date);
    return specificSleep[property];
  }

  getUserSleepWeekInfo(id, date, property) {
    let userSleeps = this.allSleeps.filter(sleep => sleep.userID === id);
    let desiredDateIndex = userSleeps.map(sleep => sleep.date).indexOf(date);
    let desiredWeek = userSleeps.slice(desiredDateIndex - 6, desiredDateIndex + 1);
    return desiredWeek.reduce((week, sleep) => {
      week[sleep.date] = sleep[property];
      return week;
    }, {});
  }

  averageAllUsersSleep() {
    let sumAllSleeps = this.allSleeps.reduce((totalSleepHours, sleep) => {
      totalSleepHours += sleep.hoursSlept;
      return totalSleepHours
    }, 0)
    return parseFloat((sumAllSleeps / this.allSleeps.length).toFixed(1));
  }

  checkUserOverThree(date, id) {
    let userSleeps = this.allSleeps.filter(sleep => sleep.userID === id);
    let desiredDateIndex = userSleeps.map(sleep => sleep.date).indexOf(date);
    let desiredWeek = userSleeps.slice(desiredDateIndex - 6, desiredDateIndex + 1);
    let weekTotal = desiredWeek.reduce((weekTotal, sleep) => {
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
    let mostRestedUsers = sortedHoursSlept.filter(sleep => sleep.hoursSlept === sortedHoursSlept[0].hoursSlept);
    return mostRestedUsers.map(user => user.userID);
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}
