const sampleUserData = [
  {
    "id": 1,
    "name": "Luisa Hane",
    "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    "email": "Diana.Hayes1@hotmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 10000,
    "friends": [
      16,
      4,
      8
    ]
  },
  {
    "id": 2,
    "name": "Jarvis Considine",
    "address": "30086 Kathryn Port, Ciceroland NE 07273",
    "email": "Dimitri.Bechtelar11@gmail.com",
    "strideLength": 4.5,
    "dailyStepGoal": 20000,
    "friends": [
      9,
      18,
      24,
      19
    ]
  },
  {
    "id": 3,
    "name": "Herminia Witting",
    "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
    "email": "Elwin.Tromp@yahoo.com",
    "strideLength": 4.4,
    "dailyStepGoal": 30000,
    "friends": [
      19,
      11,
      42,
      33
    ]
  }
];

const sampleHydration = [{
  "userID": 1,
  "date": "2019/06/15",
  "numOunces": 1
},
{
  "userID": 2,
  "date": "2019/06/15",
  "numOunces": 2
},
{
  "userID": 3,
  "date": "2019/06/15",
  "numOunces": 3
},
{
  "userID": 1,
  "date": "2019/06/16",
  "numOunces": 4
},
{
  "userID": 2,
  "date": "2019/06/16",
  "numOunces": 5
},
{
  "userID": 3,
  "date": "2019/06/16",
  "numOunces": 6
},
{
  "userID": 1,
  "date": "2019/06/17",
  "numOunces": 7
},
{
  "userID": 2,
  "date": "2019/06/17",
  "numOunces": 8
},
{
  "userID": 3,
  "date": "2019/06/17",
  "numOunces": 9
},
{
  "userID": 1,
  "date": "2019/06/18",
  "numOunces": 4
},
{
  "userID": 2,
  "date": "2019/06/18",
  "numOunces": 5
},
{
  "userID": 1,
  "date": "2019/06/19",
  "numOunces": 4
},
{
  "userID": 2,
  "date": "2019/06/19",
  "numOunces": 5
},
{
  "userID": 1,
  "date": "2019/06/20",
  "numOunces": 4
},
{
  "userID": 2,
  "date": "2019/06/20",
  "numOunces": 5
},
{
  "userID": 1,
  "date": "2019/06/21",
  "numOunces": 10
},
{
  "userID": 2,
  "date": "2019/06/21",
  "numOunces": 5
}];


const sampleSleep = [{
  "userID": 1,
  "date": "2019/06/15",
  "hoursSlept": 6.1,
  "sleepQuality": 2.2
},
{
  "userID": 2,
  "date": "2019/06/15",
  "hoursSlept": 7,
  "sleepQuality": 4.7
},
{
  "userID": 3,
  "date": "2019/06/15",
  "hoursSlept": 10.8,
  "sleepQuality": 4.7
},
{
  "userID": 1,
  "date": "2019/06/16",
  "hoursSlept": 4.1,
  "sleepQuality": 3.8
},
{
  "userID": 2,
  "date": "2019/06/16",
  "hoursSlept": 7.5,
  "sleepQuality": 3.8
},
{
  "userID": 3,
  "date": "2019/06/16",
  "hoursSlept": 10.7,
  "sleepQuality": 3.4
},
{
  "userID": 1,
  "date": "2019/06/17",
  "hoursSlept": 8,
  "sleepQuality": 2.6
},
{
  "userID": 2,
  "date": "2019/06/17",
  "hoursSlept": 5.7,
  "sleepQuality": 3
},
{
  "userID": 3,
  "date": "2019/06/17",
  "hoursSlept": 5.3,
  "sleepQuality": 4.9
},
{
  "userID": 1,
  "date": "2019/06/18",
  "hoursSlept": 10.4,
  "sleepQuality": 3.1
},
{
  "userID": 2,
  "date": "2019/06/18",
  "hoursSlept": 10.8,
  "sleepQuality": 3.2
},
{
  "userID": 3,
  "date": "2019/06/18",
  "hoursSlept": 9.8,
  "sleepQuality": 2.6
},
{
  "userID": 1,
  "date": "2019/06/19",
  "hoursSlept": 10.7,
  "sleepQuality": 1.2
},
{
  "userID": 2,
  "date": "2019/06/19",
  "hoursSlept": 9.6,
  "sleepQuality": 2.5
},
{
  "userID": 3,
  "date": "2019/06/19",
  "hoursSlept": 7.2,
  "sleepQuality": 3.4
},
{
  "userID": 1,
  "date": "2019/06/20",
  "hoursSlept": 9.3,
  "sleepQuality": 1.2
},
{
  "userID": 2,
  "date": "2019/06/20",
  "hoursSlept": 10.1,
  "sleepQuality": 2.4
},
{
  "userID": 3,
  "date": "2019/06/20",
  "hoursSlept": 9.4,
  "sleepQuality": 1.2
}, {
  "userID": 1,
  "date": "2019/06/21",
  "hoursSlept": 7.8,
  "sleepQuality": 4.2
},
{
  "userID": 2,
  "date": "2019/06/21",
  "hoursSlept": 4.3,
  "sleepQuality": 4.8
},
{
  "userID": 3,
  "date": "2019/06/21",
  "hoursSlept": 8.9,
  "sleepQuality": 3.7
}
];


if (typeof module !== 'undefined') {
  module.exports = {sampleUserData, sampleHydration, sampleSleep};
}
