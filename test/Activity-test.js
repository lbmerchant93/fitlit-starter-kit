const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');
const Activity = require('../src/Activity');


describe('Activity', function() {
  let activity1, activity2;

  beforeEach(function() {
    activity1 = new Activity(sampleData.sampleActivity[0]);
    activity2 = new Activity(sampleData.sampleActivity[1]);
  });

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should hold a user\'s activity info for one day', function() {
    expect(activity1.userID).to.equal(1);
    expect(activity1.date).to.equal("2019/06/15");
    expect(activity1.numSteps).to.equal(3577);
    expect(activity1.minutesActive).to.equal(140);
    expect(activity1.flightsOfStairs).to.equal(16);

    expect(activity2.userID).to.equal(2);
    expect(activity2.date).to.equal("2019/06/15");
    expect(activity2.numSteps).to.equal(4294);
    expect(activity2.minutesActive).to.equal(138);
    expect(activity2.flightsOfStairs).to.equal(10);
  });

});
