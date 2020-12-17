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

  it('should return a user\'s activity value based on their id, date and property', function() {
    expect(activityRepo.getActivityDay(user1, "2019/06/21", "numSteps")).to.equal(6760);
    expect(activityRepo.getActivityDay(user1, "2019/06/21", "minutesActive")).to.equal(135);
    expect(activityRepo.getActivityDay(user1, "2019/06/21", "flightsOfStairs")).to.equal(6);
  });

  it('should return an array of activities for the six days prior to a given date, also including that date (seven total days)', function() {
    expect(activityRepo.getUserWeek(user1, "2019/06/21")).to.deep.equal([
      {
        userID: 1,
        date: '2019/06/15',
        numSteps: 3577,
        minutesActive: 140,
        flightsOfStairs: 16
      },
      {
        userID: 1,
        date: '2019/06/16',
        numSteps: 6637,
        minutesActive: 175,
        flightsOfStairs: 36
      },
      {
        userID: 1,
        date: '2019/06/17',
        numSteps: 14329,
        minutesActive: 168,
        flightsOfStairs: 18
      },
      {
        userID: 1,
        date: '2019/06/18',
        numSteps: 4419,
        minutesActive: 165,
        flightsOfStairs: 33
      },
      {
        userID: 1,
        date: '2019/06/19',
        numSteps: 8429,
        minutesActive: 275,
        flightsOfStairs: 2
      },
      {
        userID: 1,
        date: '2019/06/20',
        numSteps: 14478,
        minutesActive: 140,
        flightsOfStairs: 12
      },
      {
        userID: 1,
        date: '2019/06/21',
        numSteps: 6760,
        minutesActive: 135,
        flightsOfStairs: 6
      }
    ]);
  });

  it('should return the miles a user has walked based on their number of steps, on a specified date', function() {
    expect(activityRepo.gatherMilesWalked(user1, "2019/06/15")).to.equal(2.9);
  });

  it('should return average minutes a user was active for a given week', function() {
    expect(activityRepo.calcAverageMinActiveForAWeek(user1, "2019/06/21")).to.equal(171.1);
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

  it('should find the latest three day step streak where each day increase the number of steps', function() {
    expect(activityRepo.getStepStreak(user1)).to.deep.equal([
     "2019/06/18",
     "2019/06/19",
     "2019/06/20"
    ]);
  });
});
