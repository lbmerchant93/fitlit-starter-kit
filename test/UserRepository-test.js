const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');
const sampleUserData = sampleData.sampleUserData;
const UserRepository = require('../src/UserRepository');

describe('UserRepository', function() {
  let userRepo;

  beforeEach(function() {
    userRepo = new UserRepository(sampleData.sampleUserData);
  });

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should instantiate a UserRepository', function() {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });

  it('should hold all the user objects', function() {
    expect(userRepo.allUsers).to.be.a('array');
    expect(userRepo.allUsers[0].name).to.equal("Luisa Hane");
    expect(userRepo.allUsers[1].name).to.equal("Jarvis Considine");
  });

  it('should be able to return user data given the ID', function() {
    expect(userRepo.getUserData(1)).to.deep.equal({
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

    expect(userRepo.getUserData(2)).to.deep.equal({
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 20000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    });
    
    expect(userRepo.getUserData(4)).to.deep.equal(undefined);
  });

  it('should be able to return the average step goal amonst all users', function() {
    expect(userRepo.averageUserStepGoals()).to.equal(20000);
  });

});
