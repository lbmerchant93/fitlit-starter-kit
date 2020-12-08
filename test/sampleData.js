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


if (typeof module !== 'undefined') {
  module.exports = {sampleUserData, sampleHydration};
}
