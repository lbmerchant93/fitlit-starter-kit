class HydrationRepo {
  constructor(hydrations) {
    this.allHydrations = hydrations;
  }
  calcUserLifetimeHydration(id) {
    let userHydrations = this.allHydrations.filter(hydration => {
      return hydration.userID === id;
    })
    let sumHydrations = userHydrations.reduce((total, day) => {
      return total += day.numOunces;
    }, 0)
    return parseFloat((sumHydrations / userHydrations.length).toFixed(1));
  }
  retrieveWeekHydration(id, date) {
    let userHydrations = this.allHydrations.filter(hydration => hydration.userID === id);
    let desiredDateIndex = userHydrations.map(hydration => hydration.date).indexOf(date);
    let desiredWeek = userHydrations.slice(desiredDateIndex - 6, desiredDateIndex + 1);
    return desiredWeek.reduce((week, hydration) => {
      week[hydration.date] = hydration.numOunces;
      return week;
    }, {});
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepo;
}
