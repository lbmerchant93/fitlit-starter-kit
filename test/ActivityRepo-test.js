const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');
const User = require('../src/User');
const ActivityRepo = require('../src/ActivityRepo');

describe('ActivityRepo', function() {
  let activityRepo, user1;

  beforeEach(function() {
    user1 = new User(sampleData.sampleUserData[0]);
    activityRepo = new ActivityRepo(sampleData.sampleActivity);
  });

  it('should be a function', function() {
    expect(ActivityRepo).to.be.a('function');
  });

  it('should hold all the Activity objects', function() {
    expect(activityRepo.allActivities).to.be.an('array');
    expect(activityRepo.allActivities[0].numSteps).to.equal(3577);
    expect(activityRepo.allActivities[1].numSteps).to.equal(4294);
    expect(activityRepo.allActivities.length).to.equal(21);
  });

  it('should return the miles a user has walked based on their number of steps, on a specified date', function() {
    expect(activityRepo.gatherMilesWalked(user1, "2019/06/15")).to.equal(2.9);
  });

  it('should return how many minutes a user specified by id, was active for a given day', function() {
    expect(activityRepo.gatherMinutesActive(user1, "2019/06/15")).to.equal(140)
  });

  it('should return average minutes a user was active for a given week', function() {
    expect(activityRepo.calcAverageMinActiveForAWeek(user1, "2019/06/21")).to.equal(171.1)
  });

  it('should determine if they hit their step goal for a given day', function() {
    expect(activityRepo.hitDailyStepGoal(user1, "2019/06/15")).to.equal(false);
    expect(activityRepo.hitDailyStepGoal(user1, "2019/06/17")).to.equal(true);
  });

  it('should find all days where a user exceeded their step goal', function() {
    expect(activityRepo.allHitStepGoals(user1)).to.deep.equal(["2019/06/17", "2019/06/20"]);
  });

  it('should find a user\'s all-time stair climbing record', function() {
    expect(activityRepo.userStairClimbingRecord(user1)).to.equal(36);
  });

  it('should find the average stairs climbed for a specified date for all users', function() {
    expect(activityRepo.averageAllPropertyForDate("2019/06/15", "flightsOfStairs")).to.equal(19.7);
    expect(activityRepo.averageAllPropertyForDate("2019/06/16", "flightsOfStairs")).to.equal(27);
  });

  it('should find the average steps taken for a specific date for all users', function() {
    expect(activityRepo.averageAllPropertyForDate("2019/06/15", "numSteps")).to.equal(5091);
    expect(activityRepo.averageAllPropertyForDate("2019/06/16", "numSteps")).to.equal(7684.3);
  });

  it('should find the average minutes active for a specific date for all users', function() {
    expect(activityRepo.averageAllPropertyForDate("2019/06/15", "minutesActive")).to.equal(131.3);
    expect(activityRepo.averageAllPropertyForDate("2019/06/16", "minutesActive")).to.equal(182.3);
  });

});
