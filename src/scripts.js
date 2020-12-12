//Query Selectors

const userName = document.querySelector(".user-name");
const userAddress = document.querySelector(".user-address");
const userEmail = document.querySelector(".user-email");
const userStrideLength = document.querySelector(".user-stride-length");
const userDailyStepGoal = document.querySelector(".user-daily-step-goal");
const displayMessage = document.querySelector(".display-message");
const stepGoalComparison = document.querySelector(".step-goal-comparison");
const hydrationWeekDisplay = document.querySelector(".hydration-week");
const hydrationChart = document.querySelector(".hydration-chart")
const hydrationTodayDisplay = document.querySelector(".hydration-today");
const latestSleep = document.querySelector(".latest-sleep");
const weekSleeps = document.querySelector(".week-sleeps");
const sleepHoursWeek = document.querySelector(".sleep-hours-week");
const averageSleepData = document.querySelector(".average-sleep");
const numStepsDay = document.querySelector(".num-steps");
const minsActive = document.querySelector(".mins-active");
const distanceWalked = document.querySelector(".distance-walked");
const dailyStepChart = document.querySelector(".daily-step-chart");
const dailyStairChart = document.querySelector(".daily-stair-chart");
const dailyActiveChart = document.querySelector(".daily-active-chart");
const stepsWeeklyView = document.querySelector(".steps-weekly-view");
const stairsWeeklyView = document.querySelector(".stairs-weekly-view");
const minsActiveWeeklyView = document.querySelector(".minutes-active-weekly-view");
const friendsList = document.querySelector(".friends-list");

//Event Listeners
window.addEventListener("load", initializeUserInfo);

//Global Variables
let activeUser = new User(userData[0]);
let userRepo = new UserRepository(userData);
let hydration = new Hydration(hydrationData[0]);
let hydrationRepo = new HydrationRepo(hydrationData);
let sleep = new Sleep(sleepData[0]);
let sleepRepo = new SleepRepo(sleepData);
let activityRepo = new ActivityRepo(activityData);

//Event Handlers and Functions
function initializeUserInfo() {
  displayUserInfo();
  greetUser();
  compareStepGoals();
  // displayHydrationWeek();
  displayHydrationToday()
  userLatestHoursSleptAndQuality();
  // displaySleptHoursWeek();
  // displaySleepQualityWeek();
  displayAverageSleepForProperty('hoursSlept');
  displayAverageSleepForProperty('sleepQuality');
  // displayDailySteps();
  // displayMinsActiveToday();
  displayMilesWalked();
  // displayComparisons();
  displayFriends();

}

function displayUserInfo() {
  userName.innerText = `Name: \n${activeUser.name}`;
  userAddress.innerText = `Address: \n${activeUser.address}`;
  userEmail.innerText = `Email: \n${activeUser.email}`;
  userStrideLength.innerText = `Stride Length: \n${activeUser.strideLength}`;
  userDailyStepGoal.innerText = `Daily Step Goal: \n${activeUser.dailyStepGoal}`;
}

function greetUser() {
  displayMessage.innerText = `
    Welcome to FitBook, ${activeUser.getFirstName()}!
  `;
}

function displayFriends() {
  friendsList.innerText = `${activeUser.friends}`;
}

//will be some type of display later not the innerText
function compareStepGoals() {
  stepGoalComparison.innerText = `
    Your daily step goal = ${activeUser.dailyStepGoal}. The average daily step goal = ${userRepo.averageUserStepGoals()}.
  `
}


let weekHydrationChart = new Chart(hydrationChart, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
    labels: Object.keys(hydrationRepo.retrieveWeekHydration(activeUser.id, "2019/09/22")),
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: Object.values(hydrationRepo.retrieveWeekHydration(activeUser.id, "2019/09/22"))
    }]
  },

  // Configuration options go here
  options: {}
});

let sleepHoursWeekChart = new Chart(sleepHoursWeek, {
  type: "line",
  data: {
    labels: Object.keys(sleepRepo.getUserSleepWeekInfo(activeUser.id, "2019/09/22", "hoursSlept")),
    datasets: [{
      label: 'Hours Slept (hrs)',
      backgroundColor: "rgb(223, 175, 55)",
      borderColor: "rgb(223, 175, 55)",
      fill: false,
      data: Object.values(sleepRepo.getUserSleepWeekInfo(activeUser.id, "2019/09/22", "hoursSlept"))
    }, {
      label: "Sleep Quality (rating 1-5)",
      backgroundColor: "rgb(248, 24, 148)",
      borderColor: "rgb(248, 24, 148)",
      fill: false,
      data: Object.values(sleepRepo.getUserSleepWeekInfo(activeUser.id, "2019/09/22", "sleepQuality"))
    }]
  },
  options: {
    title: {
      display: true,
      text: "Your week\'s sleep information",
      fontColor: "rgb(0, 0, 0)"
    },
    legend: {
      labels: {
        fontColor: "rgb(0, 0, 0)"
      },
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: "rgb(0, 0, 0)",
          beginAtZero: true
        },
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Value",
          fontColor: "rgb(0, 0, 0)"
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: "rgb(0, 0, 0)",
        },
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Date",
          fontColor: "rgb(0, 0, 0)"
        }
      }]
    }
  }
});

function displayHydrationToday() {
  let waterToday = hydration.returnFluidOuncesConsumed();
  hydrationTodayDisplay.innerText = `You drank ${waterToday} ounces today.`
}

function userLatestHoursSleptAndQuality() {
  latestSleep.innerText = `You slept ${sleepRepo.getUserSleepDataForDate(activeUser.id, "2019/06/21", "hoursSlept")} hours last night. You ranked it with a quality of ${sleepRepo.getUserSleepDataForDate(activeUser.id, "2019/06/21", "sleepQuality")}.`
}

// function displaySleptHoursWeek() {
//   let week = sleepRepo.getUserSleepWeekInfo(1, "2019/06/21", "hoursSlept");
//   Object.keys(week).forEach(day => {
//     weekSleeps.innerText += `
//       On ${day}, you slept ${week[day]} hours.
//     `
//   });
// }


// function displaySleepQualityWeek() {
//   let week = sleepRepo.getUserSleepWeekInfo(1, "2019/06/21", "sleepQuality");
//   Object.keys(week).forEach(day => {
//     weekSleeps.innerText += `
//       On ${day}, your sleep quality was ranked ${week[day]}.
//     `
//   });
// }

// function displayAverageSleepQuality() {
//   let averageSleepQuality = sleepRepo.getAvgSleepData(activeUser.id, 'sleepQuality');
//   averageSleepData.innerText += `Your average sleep quality is ${averageSleepQuality}!`;
// }
//
// function displayAverageSleptHours() {
//   let averageSleptHours = sleepRepo.getAvgSleepData(activeUser.id, 'hoursSlept');
//   averageSleepData.innerText += `
//   Your average hours slept is ${averageSleptHours}!
//   `;
// }

function displaySleepQualityWeek() {
  let week = sleepRepo.getUserSleepWeekInfo(1, "2019/06/21", "sleepQuality");
  Object.keys(week).forEach(day => {
    weekSleeps.innerText += `
      On ${day}, your sleep quality was ranked ${week[day]}.
    `
  });
} 


//this function is more than 10 lines long but dynamic, replacing the two funcitons above
function displayAverageSleepForProperty(property) {
  let averageSleptInfo = sleepRepo.getAvgSleepData(activeUser.id, property);
  if (property === 'hoursSlept') {
    averageSleepData.innerText += `
      Your average hours slept ${averageSleptInfo}!
      `;
  } else if (property === 'sleepQuality') {
    averageSleepData.innerText += `
      Your average sleep quality is ${averageSleptInfo}!
      `;
  }
}

function displayMilesWalked() {
  let miles = activityRepo.gatherMilesWalked(activeUser, "2019/06/21");
  distanceWalked.innerText = `You walked ${miles} miles today!`
}

// function displayComparisons() {
//   compareToAll.innerText = `You climbed ${activityRepo.gatherStairsClimbed(activeUser, "2019/06/21")} The average was ${activityRepo.averageAllPropertyForDate("2019/06/21", "flightsOfStairs")}.
//   You walked ${activityRepo.getActivityDay(activeUser, "2019/06/21", "numSteps")} The average was ${activityRepo.averageAllPropertyForDate("2019/06/21", "numSteps")}
//   You were active for ${activityRepo.gatherMinutesActive(activeUser, "2019/06/21")} minutes today. The average was ${activityRepo.averageAllPropertyForDate("2019/06/21", "minutesActive")}
//   `
// }



let dailyStepDisplay = new Chart(dailyStepChart, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
      labels: ['You', 'Average of All Users'],
      datasets: [{
          label: 'Steps Taken Today',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 255, 255)',
          fill: false,
          data: [activityRepo.getActivityDay(activeUser, "2019/09/22", "numSteps"), activityRepo.averageAllPropertyForDate("2019/09/22", "numSteps")]
      }]
  },
  // Configuration options go here
  options: {}
});

let dailyStairDisplay = new Chart(dailyStairChart, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
      labels: ['You', 'Average of All Users'],
      datasets: [{
          label: 'Flights of Stairs Climbed Today',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 255, 255)',
          fill: false,
          data: [activityRepo.getActivityDay(activeUser, "2019/09/22", "flightsOfStairs"), activityRepo.averageAllPropertyForDate("2019/09/22", "flightsOfStairs")]
      }]
  },
  // Configuration options go here
  options: {}
});

let dailyActiveDisplay = new Chart(dailyActiveChart, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
      labels: ['You', 'Average of All Users'],
      datasets: [{
          label: 'Minutes Active Today',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 255, 255)',
          fill: false,
          data: [activityRepo.getActivityDay(activeUser, "2019/09/22", "minutesActive"), activityRepo.averageAllPropertyForDate("2019/09/22", "minutesActive")]
      }]
  },
  // Configuration options go here
  options: {}
});

let stepsWeeklyChart = new Chart(stepsWeeklyView, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
      labels: ["2019/09/22", "2019/09/21", "2019/09/20", "2019/09/19", "2019/09/18", "2019/09/17", "2019/09/16"],
      datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 255, 255)',
          fill: false,
          data: [activityRepo.getActivityDay(activeUser, "2019/09/22", "numSteps"), activityRepo.getActivityDay(activeUser, "2019/09/21", "numSteps"), activityRepo.getActivityDay(activeUser, "2019/09/20", "numSteps"), activityRepo.getActivityDay(activeUser, "2019/09/19", "numSteps"), activityRepo.getActivityDay(activeUser, "2019/09/18", "numSteps"), activityRepo.getActivityDay(activeUser, "2019/09/17", "numSteps"), activityRepo.getActivityDay(activeUser, "2019/09/16", "numSteps")]
      }]
  },
  // Configuration options go here
  options: {}
});

let stairsWeeklyChart = new Chart(stairsWeeklyView, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
      labels: ["2019/09/22", "2019/09/21", "2019/09/20", "2019/09/19", "2019/09/18", "2019/09/17", "2019/09/16"],
      datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 255, 255)',
          fill: false,
          data: [activityRepo.getActivityDay(activeUser, "2019/09/22", "flightsOfStairs"), activityRepo.getActivityDay(activeUser, "2019/09/21", "flightsOfStairs"), activityRepo.getActivityDay(activeUser, "2019/09/20", "flightsOfStairs"), activityRepo.getActivityDay(activeUser, "2019/09/19", "flightsOfStairs"), activityRepo.getActivityDay(activeUser, "2019/09/22", "flightsOfStairs"), activityRepo.getActivityDay(activeUser, "2019/09/18", "flightsOfStairs"), activityRepo.getActivityDay(activeUser, "2019/09/17", "flightsOfStairs")]
      }]
  },
  // Configuration options go here
  options: {}
});

let minsActiveWeeklyChart = new Chart(minsActiveWeeklyView, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
      labels: ["2019/09/22", "2019/09/21", "2019/09/20", "2019/09/19", "2019/09/18", "2019/09/17", "2019/09/16"],
      datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 255, 255)',
          fill: false,
          data: [activityRepo.getActivityDay(activeUser, "2019/09/22", "minutesActive"), activityRepo.getActivityDay(activeUser, "2019/09/21", "minutesActive"), activityRepo.getActivityDay(activeUser, "2019/09/20", "minutesActive"), activityRepo.getActivityDay(activeUser, "2019/09/19", "minutesActive"), activityRepo.getActivityDay(activeUser, "2019/09/18", "minutesActive"), activityRepo.getActivityDay(activeUser, "2019/09/17", "minutesActive"), activityRepo.getActivityDay(activeUser, "2019/09/16", "minutesActive")]
      }]
  },
  // Configuration options go here
  options: {}
});