class UserRepository {
  constructor(users) {
    this.users = users;
  }
  getUserData(id) {
    const foundUser = this.users.findIndex((user) =>  user.id === id);
    return this.users[foundUser];
  }
  averageUserStepGoals() {
    const totalStepGoals = this.users.reduce((total, personalGoal) => {
      total += personalGoal.dailyStepGoal;
      return total;
    }, 0);
    return totalStepGoals / this.users.length;
  }
}


if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
