class Hydration {
  constructor(userHydrationData) {
    this.userID = userHydrationData.userID;
    this.date = userHydrationData.date;
    this.numOunces = userHydrationData.numOunces;
  }
  returnFluidOuncesConsumed() {
    return this.numOunces;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
