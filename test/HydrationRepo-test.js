const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');

const Hydration = require('../src/Hydration');
const HydrationRepo = require('../src/HydrationRepo');

console.log(sampleData);

describe('HydrationRepo', function() {
  let hydrationRepo;

  beforeEach(function() {
    hydrationRepo = new HydrationRepo(sampleData.sampleHydration);
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
    expect(hydrationRepo.userLifetime(1)).to.equal(4)
  });

  it('should have a method returning the last 7 fluid ounces consumed per day', function() {
    hydrationRepo.retrieveWeekHydration(1, "2019/06/21");
    expect(hydrationRepo.waterForWeek).to.deep.equal([1, 4, 7, 4, 4, 4, 10]);
  });

});
