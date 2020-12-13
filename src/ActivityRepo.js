class ActivityRepo {
  constructor(activies) {
    this.allActivities = activies;
  }
  getActivityDay(user, date, property) {
    let specificDay = this.allActivities.find(day => day.date === date && day.userID === user.id);
    return specificDay[property];
  }
  getUserWeek(user, date) {
    let userActivities = this.allActivities.filter(activity => activity.userID === user.id);
    let desiredDateIndex = userActivities.map(activity => activity.date).indexOf(date);
    let desiredWeek = userActivities.slice(desiredDateIndex - 6, desiredDateIndex + 1);
    return desiredWeek;
  }
  gatherMilesWalked(user, date) {
    let specificDay = this.allActivities.find(day => day.date === date && day.userID === user.id);
    let int = ((user.strideLength * specificDay.numSteps) / 5280).toFixed(1);
    return parseFloat(int);
  }
  gatherMinutesActive(user, date) {
    let specificDay = this.allActivities.find(day => day.date === date && day.userID === user.id);
    return specificDay.minutesActive;
  }
  gatherStairsClimbed(user, date) {
    let specificDay = this.allActivities.find(day => day.date === date && day.userID === user.id);
    return specificDay.flightsOfStairs;
  }
  calcAverageMinActiveForAWeek(user, date) {
    let userActivities = this.allActivities.filter(activity => activity.userID === user.id);
    let desiredDateIndex = userActivities.map(activity => activity.date).indexOf(date);
    let desiredWeek = userActivities.slice(desiredDateIndex - 6, desiredDateIndex + 1);
    let totalTimeActive = desiredWeek.reduce((totalMin, activity) => {
      totalMin += activity.minutesActive;
      return totalMin;
    }, 0);
    return parseFloat((totalTimeActive / 7).toFixed(1));
  }
  hitDailyStepGoal(user, date) {
    let specificDay = this.allActivities.find(day => day.date === date && day.userID === user.id);
    if (specificDay.numSteps >= user.dailyStepGoal) {
      return true;
    } else {
      return false;
    }
  }
  allHitStepGoals(user) {
    let userActivities = this.allActivities.filter(activity => activity.userID === user.id);
    let hitDays = userActivities.filter(activity => activity.numSteps > user.dailyStepGoal);
    return hitDays.map(day => day.date);
  }
  userStairClimbingRecord(user) {
    let userActivities = this.allActivities.filter(activity => activity.userID === user.id);
    userActivities.sort((a, b) => {
      return b.flightsOfStairs - a.flightsOfStairs;
    });
    return userActivities[0].flightsOfStairs;
  }
  averageAllPropertyForDate(date, property) {
    let desiredDay = this.allActivities.filter(activity => activity.date === date);
    let sumActive = desiredDay.reduce((totalActive, activity) => {
      totalActive += activity[property];
      return totalActive;
    }, 0);
    return parseFloat((sumActive / desiredDay.length).toFixed(1));
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}
