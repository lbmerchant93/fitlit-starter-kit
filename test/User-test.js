const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');
const userData1 = sampleData.sampleUserData[0];
const userData2 = sampleData.sampleUserData[1];
const User = require('../src/User');


describe('User', function() {
  let user1, user2;

  beforeEach(function() {
    user1 = new User(userData1);
    user2 = new User(userData2);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should instantiate a User', function() {
    expect(user1).to.be.an.instanceof(User);
    expect(user2).to.be.an.instanceof(User);
  });

  it('should hold all the user data', function() {
    expect(user1.id).to.equal(1);
    expect(user1.name).to.equal("Luisa Hane");
    expect(user1.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697");
    expect(user1.email).to.equal("Diana.Hayes1@hotmail.com");
    expect(user1.strideLength).to.equal(4.3);
    expect(user1.dailyStepGoal).to.equal(10000);
    expect(user1.friends).to.deep.equal([16, 4, 8]);

    expect(user2.id).to.equal(2);
    expect(user2.name).to.equal("Jarvis Considine");
    expect(user2.address).to.equal("30086 Kathryn Port, Ciceroland NE 07273");
    expect(user2.email).to.equal("Dimitri.Bechtelar11@gmail.com");
    expect(user2.strideLength).to.equal(4.5);
    expect(user2.dailyStepGoal).to.equal(20000);
    expect(user2.friends).to.deep.equal([9, 18, 24, 19]);
  });

  it('should be able to return the first name of the user', function() {
    expect(user1.getFirstName()).to.equal("Luisa");
    expect(user2.getFirstName()).to.equal("Jarvis");
  });

  it('should not take anything but an object as an argument', function() {
    let user3 = new User([11, 1, 3]);
    expect(user3.id).to.equal(undefined);
  });
});
