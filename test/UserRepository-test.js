const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');

describe('UserRepository', function() {
  let userRepo;
  const newUser = {
    "id": 4,
    "name": "Morris",
    "address": "123 Denver",
    "email": "DJKhaled.com",
    "strideLength": 9.9,
    "dailyStepGoal": 20000,
    "friends": [
      12,
      5,
      8
    ]
  };

  beforeEach(function() {
    userRepo = new UserRepository(newUser);
  });

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should instantiate a UserRepository', function() {
    expect(userRepo).to.equal(new UserRepository(sampleData));
  });

  it('should hold all the user objects', function() {
    expect(allUsers).to.be.an(Array);
    expect(allUsers[0].name).to.equal("Luisa Hane");
  });

  it('should be able to store a new user by pushing an object into all users', function() {

    expect(sampleData.length).to.equal(4);
  })

  it('should be able to return user data given the ID', function() {
    expect(userRepo.getUserData(1)).to.equal({
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    });
  });

  it('should be able to return the average step goal amonst all users', function() {
    expect(userRepo.averageUserStepGoals()).to.equal(20000);
  });

});