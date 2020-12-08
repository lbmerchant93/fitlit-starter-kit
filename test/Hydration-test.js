const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');
const Hydration = require('../src/Hydration');

describe('Hydration', function() {
  let hydration1, hydration2;

  beforeEach(function() {
    hydration1 = new Hydration(sampleData.sampleHydration[0]);
    hydration2 = new Hydration(sampleData.sampleHydration[1]);
  });

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should instantiate a Hydration', function() {
    expect(hydration1).to.be.an.instanceof(Hydration);
  });

  it('should hold a user\'s hyrdration info for one day', function() {
    expect(hydration1.userID).to.equal(1);
    expect(hydration1.date).to.equal("2019/06/15");
    expect(hydration1.numOunces).to.equal(1);

    expect(hydration2.userID).to.equal(2);
    expect(hydration2.date).to.equal("2019/06/15");
    expect(hydration2.numOunces).to.equal(2);
  });
  it('should have a method to return the fluid onces they consumed for that day', function() {
    expect(hydration1.returnFluidOuncesConsumed()).to.equal(1);
    expect(hydration2.returnFluidOuncesConsumed()).to.equal(2);
  });

});
