class Activity {
  constructor(activity) {
    this.userID = activity.userID;
    this.date = activity.date;
    this.numSteps = activity.numSteps;
    this.minutesActive = activity.minutesActive;
    this.flightsOfStairs = activity.flightsOfStairs;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
