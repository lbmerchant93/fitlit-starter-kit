class UserRepository {
  constructor(users) {
    this.allUsers = users;
  }
  getUserData(id) {
    const foundUser = this.allUsers.findIndex((user) =>  user.id === id);
    return this.allUsers[foundUser];
  }
  averageUserStepGoals() {
    const totalStepGoals = this.allUsers.reduce((total, personalGoal) => {
      total += personalGoal.dailyStepGoal;
      return total;
    }, 0);
    return totalStepGoals / this.allUsers.length;
  }
}


if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
