const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');
const sampleHydration = sampleData.sampleHydration;
const User = require('../src/User');
const UserRepository = require('../src/UserRepository');

describe('HydrationRepo', function() {
  let hydrationRepo;

  beforeEach(function() {
    hydrationRepo = new HydrationRepo(sampleHydration);
  });

  it('should be a function', function() {
    expect(HydrationRepo).to.be.a('function');
  });

  it('should instantiate a HydrationRepo', function() {
    expect(hydrationRepo).to.be.an.instanceof(HydrationRepo);
  });

  it('should hold all the Hydration objects', function() {
    expect(hydrationRepo.allHydrations).to.be.an('array');
    expect(hydrationRepo.allHydrations[0].numOunces).to.equal(1);
  });


  it('should have a method returning the average fluid ounces consumed per day for all time', function() {
    expect(hydrationRepo.userLifetime(1).to.equal(4))
  });

  it('should have a method returning the average fluid ounces consumed per week', function() {
    expect(hydrationRepo.userWeek(1).to.equal(4));

    hydrationRepo.userWeek.slice(-7, -1)
  });

});