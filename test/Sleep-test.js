const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');
const Sleep = require('../src/Sleep');


describe('Sleep', function() {
  let sleep1;
  let sleep2;

  beforeEach(function() {
    sleep1 = new Sleep(sampleData.sampleSleep[0]);
    sleep2 = new Sleep(sampleData.sampleSleep[1]);
  });

  it('should take an object as an arguement', function() {
    expect(sleep1.userID).to.equal(1);
    expect(sleep1.date).to.equal("2019/06/15");
    expect(sleep1.hoursSlept).to.equal(6.1);
    expect(sleep1.sleepQuality).to.equal(2.2);

    expect(sleep2.userID).to.equal(2);
    expect(sleep2.date).to.equal("2019/06/15");
    expect(sleep2.hoursSlept).to.equal(7);
    expect(sleep2.sleepQuality).to.equal(4.7);
  });


  it('should not take anything but an object as an argument', function() {
    let sleep3 = new Sleep([15, 16, 3]);
    expect(sleep3.userID).to.equal(undefined);
    expect(sleep2).to.deep.equal({
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 7,
      "sleepQuality": 4.7
    })
  });
});
