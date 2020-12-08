const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');

const Hydration = require('../src/Hydration');
const HydrationRepo = require('../src/HydrationRepo');

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
    expect(hydrationRepo.allHydrations[1].numOunces).to.equal(2);
  });


  it('should have a method returning the average fluid ounces consumed per day for all time', function() {
    expect(hydrationRepo.userLifetime(1)).to.equal(4);
    expect(hydrationRepo.userLifetime(2)).to.equal(5);
  });

  it('should have a method returning the last 7 fluid ounces consumed per day', function() {
    expect(hydrationRepo.retrieveWeekHydration(1, "2019/06/21")).to.deep.equal({
  '2019/06/15': 1,
  '2019/06/16': 4,
  '2019/06/17': 7,
  '2019/06/18': 4,
  '2019/06/19': 4,
  '2019/06/20': 4,
  '2019/06/21': 10
});
    expect(hydrationRepo.retrieveWeekHydration(2, "2019/06/21")).to.deep.equal({
  '2019/06/15': 2,
  '2019/06/16': 5,
  '2019/06/17': 8,
  '2019/06/18': 5,
  '2019/06/19': 5,
  '2019/06/20': 5,
  '2019/06/21': 5
});
    expect(hydrationRepo.retrieveWeekHydration(5, "2019/06/21")).to.deep.equal({});
  });

});
