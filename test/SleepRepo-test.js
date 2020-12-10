const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');
const UserRepo = require('../src/UserRepository');
const SleepRepo = require('../src/SleepRepo');

describe('SleepRepo', function() {
  let sleepRepoBig;

  beforeEach(function() {
    sleepRepoBig = new SleepRepo(sampleData.sampleSleep);
  });

  it('should instantiate a SleepRepo', function() {
    expect(sleepRepoBig).to.be.an.instanceof(SleepRepo);
  });

  it('should hold all the Sleep objects', function() {
    expect(sleepRepoBig.allSleeps).to.be.an('array');
    expect(sleepRepoBig.allSleeps[0].hoursSlept).to.equal(6.1);
    expect(sleepRepoBig.allSleeps[1].hoursSlept).to.equal(7);
  });

  it('should have a method returning average number of hours slept per day', function() {
    expect(sleepRepoBig.getAvgSleepData(1, "hoursSlept")).to.equal(8.1);
  });

  it('should be able to calculate average sleep quality per day over all time', function() {
    expect(sleepRepoBig.getAvgSleepData(1, "sleepQuality")).to.equal(2.6);
  });

  it('should be able to display how many hours were slept on a specific date', function() {
    expect(sleepRepoBig.getUserSleepDataForDate(1, "2019/06/21", "hoursSlept")).to.equal(7.8);
  });

  it('should be able to display the sleep quality for a specific date', function() {
    expect(sleepRepoBig.getUserSleepDataForDate(1, "2019/06/21", "sleepQuality")).to.equal(4.2);
  });

  it('should be able to display hours of sleep per day over the course of any week', function() {
    expect(sleepRepoBig.getUserSleepWeekInfo(1, "2019/06/21", "hoursSlept")).to.deep.equal({
      '2019/06/15': 6.1,
      '2019/06/16': 4.1,
      '2019/06/17': 8,
      '2019/06/18': 10.4,
      '2019/06/19': 10.7,
      '2019/06/20': 9.3,
      '2019/06/21': 7.8
    });
  });

  it('should be able to display sleep quality per day over the course of any week', function() {
    expect(sleepRepoBig.getUserSleepWeekInfo(1, "2019/06/21", "sleepQuality")).to.deep.equal({
      '2019/06/15': 2.2,
      '2019/06/16': 3.8,
      '2019/06/17': 2.6,
      '2019/06/18': 3.1,
      '2019/06/19': 1.2,
      '2019/06/20': 1.2,
      '2019/06/21': 4.2
    });
  });

  it('should be able to display average sleep per day for all users', function() {
    expect(sleepRepoBig.averageAllUsersSleep()).to.equal(8.3);
  });

  it('should be able to get the average sleep quality for a user for a week', function() {
    expect(sleepRepoBig.checkUserOverThree("2019/06/21", 1)).to.equal(2.6);
  });

  it('should filter all users whos sleep quality for the week is over 3', function() {
    const userRep = new UserRepo(sampleData.sampleUserData);
    expect(sleepRepoBig.findAllUsersOverThree(userRep, "2019/06/21")).to.deep.equal([2, 3])
  })

  it('should find the user who slept the most number of hours for a specified day (return multiple if theres a tie', function() {
    expect(sleepRepoBig.findMostRestedUsers("2019/06/16")).to.deep.equal([3]);
    expect(sleepRepoBig.findMostRestedUsers("2019/06/17")).to.deep.equal([1]);
  });
});
