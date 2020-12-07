class HydrationRepo {
  constructor(hydrations) {
    this.allHydrations = hydrations;
  }
  userLifetime(id) {
    let userHydrations = this.allHydrations.filter(hydration => {
      return hydration.userID === id;
    })
    let sumHydrations = userHydrations.reduce((total, day) => {
      return total += day.numOunces;
    }, 0)
    return Math.floor(sumHydrations / userHydrations.length);
  }
}



if (typeof module !== 'undefined') {
  module.exports = HydrationRepo;
}
