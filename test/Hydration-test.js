const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');
const sampleHydration = sampleData.sampleHydration;
const User = require('../src/User');
const UserRepository = require('../src/UserRepository');

describe('User', function() {
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

  it('should have a method returning the average fluid ounces consumed per day for all time', function() {

  });

  it('should h')
});