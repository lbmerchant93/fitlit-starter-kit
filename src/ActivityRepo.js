class ActivityRepo {
  constructor(activies) {
    this.allActivities = activies;
  }
  gatherMilesWalked(user, date) {
    let specificDay = this.allActivities.find(day => day.date === date && day.userID === user.id);
    let int = ((user.strideLength * specificDay.numSteps)/5280).toFixed(1);
    return parseFloat(int);
  }
  gatherMinutesActive(user, date) {
    let specificDay = this.allActivities.find(day => day.date === date && day.userID === user.id);
    console.log(specificDay);
    return specificDay.minutesActive;
  }
  calcAverageMinActiveForAWeek(id, date) {
    let userActivities = this.allActivities.filter(activity => activity.userID === id);
    let desiredDateIndex = userActivities.map(activity => activity.date).indexOf(date);
    let desiredWeek = userActivities.slice(desiredDateIndex - 6, desiredDateIndex + 1);
    let totalTimeActive = desiredWeek.reduce((totalMin, activity) => {
      totalMin += activity.minutesActive;
      return totalMin;
    }, 0);
    return parseFloat((totalTimeActive / 7).toFixed(1));
  }
}



if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}
