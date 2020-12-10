const sampleUserData = [{
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
  }
];


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
  }, {
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

const sampleActivity = [{
    "userID": 1,
    "date": "2019/06/15",
    "numSteps": 3577,
    "minutesActive": 140,
    "flightsOfStairs": 16
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "numSteps": 4294,
    "minutesActive": 138,
    "flightsOfStairs": 10
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "numSteps": 7402,
    "minutesActive": 116,
    "flightsOfStairs": 33
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "numSteps": 6637,
    "minutesActive": 175,
    "flightsOfStairs": 36
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "numSteps": 4112,
    "minutesActive": 220,
    "flightsOfStairs": 37
  },
  {
    "userID": 3,
    "date": "2019/06/16",
    "numSteps": 12304,
    "minutesActive": 152,
    "flightsOfStairs": 8
  },
  {
    "userID": 1,
    "date": "2019/06/17",
    "numSteps": 14329,
    "minutesActive": 168,
    "flightsOfStairs": 18
  },
  {
    "userID": 2,
    "date": "2019/06/17",
    "numSteps": 13750,
    "minutesActive": 65,
    "flightsOfStairs": 4
  },
  {
    "userID": 3,
    "date": "2019/06/17",
    "numSteps": 4547,
    "minutesActive": 97,
    "flightsOfStairs": 5
  },
  {
    "userID": 1,
    "date": "2019/06/18",
    "numSteps": 4419,
    "minutesActive": 165,
    "flightsOfStairs": 33
  },
  {
    "userID": 2,
    "date": "2019/06/18",
    "numSteps": 4662,
    "minutesActive": 181,
    "flightsOfStairs": 31
  },
  {
    "userID": 3,
    "date": "2019/06/18",
    "numSteps": 2546,
    "minutesActive": 274,
    "flightsOfStairs": 26
  },
  {
    "userID": 1,
    "date": "2019/06/19",
    "numSteps": 8429,
    "minutesActive": 275,
    "flightsOfStairs": 2
  },
  {
    "userID": 2,
    "date": "2019/06/19",
    "numSteps": 9858,
    "minutesActive": 243,
    "flightsOfStairs": 44
  },
  {
    "userID": 3,
    "date": "2019/06/19",
    "numSteps": 10961,
    "minutesActive": 188,
    "flightsOfStairs": 17
  },
  {
    "userID": 1,
    "date": "2019/06/20",
    "numSteps": 14478,
    "minutesActive": 140,
    "flightsOfStairs": 12
  },
  {
    "userID": 2,
    "date": "2019/06/20",
    "numSteps": 8153,
    "minutesActive": 74,
    "flightsOfStairs": 10
  },
  {
    "userID": 3,
    "date": "2019/06/20",
    "numSteps": 5369,
    "minutesActive": 129,
    "flightsOfStairs": 46
  },
  {
    "userID": 1,
    "date": "2019/06/21",
    "numSteps": 6760,
    "minutesActive": 135,
    "flightsOfStairs": 6
  },
  {
    "userID": 2,
    "date": "2019/06/21",
    "numSteps": 10225,
    "minutesActive": 174,
    "flightsOfStairs": 26
  },
  {
    "userID": 3,
    "date": "2019/06/21",
    "numSteps": 7498,
    "minutesActive": 199,
    "flightsOfStairs": 13
  },
];


if (typeof module !== 'undefined') {
  module.exports = {
    sampleUserData,
    sampleHydration,
    sampleSleep, sampleActivity
  };
}
