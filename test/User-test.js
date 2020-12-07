const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');
const userData = sampleData.sampleUserData[0];
const User = require('../src/User');


describe('User', function() {
  let user, example;

  beforeEach(function() {
    user = new User(userData);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should instantiate a User', function() {
    expect(user).to.be.an.instanceof(User);
  });

  it('should hold all the user data', function() {
    expect(user.id).to.equal(1);
    expect(user.name).to.equal("Luisa Hane");
    expect(user.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697");
    expect(user.email).to.equal("Diana.Hayes1@hotmail.com");
    expect(user.strideLength).to.equal(4.3);
    expect(user.dailyStepGoal).to.equal(10000);
    expect(user.friends).to.deep.equal([16, 4, 8]);
  });

  it('should be able to return the first name of the user', function() {
    expect(user.getFirstName()).to.equal("Luisa");
  });
});
