const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');
const ActivityRepo = require('../src/ActivityRepo');

describe('ActivityRepo', function() {
  let activityRepo;

  beforeEach(function() {
    hydrationRepo = new HydrationRepo(sampleData.sampleActivity);
  });

  it('should be a function', function() {
    expect(ActivitRepo).to.be.a('function');
  });

  it('should hold all the Activity objects', function() {
    expect(activityRepo.allActivities).to.be.an('array');
    expect(activityRepo.allActivities[0].numSteps).to.equal(3577);
    expect(hydrationRepo.allActivities[1].numSteps).to.equal(4294);
  });

  it('should return the miles a user has walked based on their number of steps, on a specified date', function() {
    expect(activityRepo.gatherMilesWalked()).to.equal(2.913087121));
  });

  it('should return how many minutes a user specified by id, was active for a given day',  function() {
    expect(activityRepo.gatherMinutesActive()).to.equal(140)
  });

  it('should return average minutes a user was active for a given week', function() {
    expect(activityRepo.calcAverageMinActivePerWeek()).to.equal(171.14)
  });

  it('should determine if they hit their step goal for a given day', function() {
    expect(activityRepo.hitDailyStepGoal()).to.equal(false);
  });

  it('should find all days where a user exceeded their step goal', function() {
    expect(activityRepo.allHitStepGoals()).to.equal(["2019/06/17", "2019/06/20"]);
  });

  it('should find a user\'s all-time stair climbing record',function() {
    expect(activityRepo.stairClimbingRecord()).to.equal(36);
  });

  it('should find the average stairs climbed for a specified date for all users', function() {
    expect(activityRepo.allAverageStairsClimbedForDate()).to.equal(20.62);
  });

  it('should find the average steps taken for a specific date for all users', function() {
    expect(activityRepo.allAverageStepsTakenForDate()).to.equal(7824.286);
  });

  it('should find the average minutes active for a specific date', function() {
    expect(activityRepo.allAverageMinActiveForDate()).to.equal(164.19);
  });

});
