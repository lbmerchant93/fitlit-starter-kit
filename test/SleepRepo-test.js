const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');
const SleepRepo = require('../src/SleepRepo');

describe('SleepRepo', function() {
  let sleepRepo;

  beforeEach(function() {
    sleepRepo = new SleepRepo(sampleData.sampleSleep);
  });

  it('should instantiate a SleepRepo', function() {
    expect(sleepRepo).to.be.an.instanceof(SleepRepo);
  });

  it('should hold all the Sleep objects', function() {
    expect(sleepRepo.allSleeps).to.be.an('array');
    expect(sleepRepo.allSleeps[0].hoursSlept).to.equal(6.1);
    expect(sleepRepo.allSleeps[1].hoursSlept).to.equal(7);
  });

  it('should have a method returning average number of hours slept per day', function() {
    expect(sleepRepo.getAvgSleepHours(1)).to.equal(8);
  });

  it('should be able to calculate average sleep quality per day over all time', function() {
    expect(sleepRepo.getAvgSleepQuality(1)).to.equal(2);
  });

  it('should be able to display how many hours were slept on a specific date', function() {
    expect(sleepRepo.getHoursSlept(1, "2019/06/21")).to.equal(7.8);
  });

  it('should be able to display the sleep quality for a specific date', function() {
    expect(sleepRepo.getQualitySlept(1, "2019/06/21")).to.equal(4.2);
  });

  it('should be able to display hours of sleep per day over the course of any week', function() {
    expect(sleepRepo.getWeekHours(1, "2019/06/21")).to.equal(8.1);
  });

  it('should be able to display sleep quality per day over the course of any week', function() {
    expect(sleepRepo.getWeekQuality(1, "2019/06/21")).to.equal(3.1);
  });

//start here
  it('should be able to display average sleep per day for all users', function() {

  });

  it('should be able to find all users that average sleep quality greater than 3 for any week', function() {

  });

  it('should find the user who slept the most number of hours for a specified day (return multiple if theres a tie');

});