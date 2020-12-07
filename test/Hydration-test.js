const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');
const Hydration = require('../src/Hydration');

describe('Hydration', function() {
  let hydration;

  beforeEach(function() {
    hydration = new Hydration(sampleData.sampleHydration[0]);
  });

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should instantiate a Hydration', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should hold a user\'s hyrdration info for one day', function() {
    expect(hydration.userID).to.equal(1);
    expect(hydration.date).to.equal("2019/06/15");
    expect(hydration.numOunces).to.equal(1);
  });
  it('should have a method to return the fluid onces they consumed for that day'), function() {
    expect(hydration.returnFluidOuncesConsumed()).to.equal(1);
  }

});
