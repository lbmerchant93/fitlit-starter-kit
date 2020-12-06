const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');
const sampleHydration = sampleData.sampleHydration;
const HydrationDay = require('../src/HydrationDay');

describe('HydrationDay', function() {
  let hydrationDay;

  beforeEach(function() {
    hydrationDay = new HydrationDay(sampleHydration[0]);
  });

  it('should be a function', function() {
    expect(HydrationDay).to.be.a('function');
  });

  it('should instantiate a HydrationDay', function() {
    expect(hydrationDay).to.be.an.instanceof(HydrationDay);
  });

  it('should hold a user\'s hyrdration info for one day', function() {
    expect(hydrationDay.id).to.equal(1);
    expect(hydrationDay.date).to.equal("2019/06/15");
    expect(hydrationDay.numOunces).to.equal(1);
  });
  it('should have a method to return the fluid onces they consumed for that day'), function() {
    expect(hydrationDay.returnFluidOuncesConsumed()).to.equal(1);
  }

});
