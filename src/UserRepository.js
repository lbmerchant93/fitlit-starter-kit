class UserRepository {
  constructor(users) {
    this.allUsers = users;
  }
  getUserData(id) {
    const foundUser = this.allUsers.findIndex((user) =>  user.id === id);
    return this.allUsers[foundUser];
  }
}
if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
