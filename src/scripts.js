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
const averageSleepData = document.querySelector(".average-sleep");
const numStepsDay = document.querySelector(".num-steps");
const minsActive = document.querySelector(".mins-active");
const distanceWalked = document.querySelector(".distance-walked");
const compareToAll = document.querySelector(".compare-to-all");
const weeklyView = document.querySelector(".weekly-view");
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
  displaySleptHoursWeek();
  displaySleepQualityWeek();
  displayAverageSleepForProperty('hoursSlept');
  displayAverageSleepForProperty('sleepQuality');
  displayDailySteps();
  displayMinsActiveToday();
  displayMilesWalked();
  displayComparisons();
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

//will be some type of display later not the innerText
// function displayHydrationWeek() {
//   let week = hydrationRepo.retrieveWeekHydration(1, "2019/06/21");
//   Object.keys(week).forEach(day => {
//
//     hydrationWeekDisplay.innerText += `
//       On ${day}, you drank ${week[day]} ounces.
//     `
//   });
// }

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

function displayHydrationToday() {
  let waterToday = hydration.returnFluidOuncesConsumed();
  hydrationTodayDisplay.innerText = `You drank ${waterToday} ounces today.`
}

function displayDailySteps() {
  let steps = activityRepo.getStepsToday(activeUser, "2019/06/21");
  numStepsDay.innerText = `You have walked ${steps} steps today!`;
}

function displayMinsActiveToday() {
  let mins = activityRepo.gatherMinutesActive(activeUser, "2019/06/21");
  minsActive.innerText = `You were active ${mins} minutes today!`
}

function userLatestHoursSleptAndQuality() {
  latestSleep.innerText = `You slept ${sleepRepo.getUserSleepDataForDate(activeUser.id, "2019/06/21", "hoursSlept")} hours last night. You ranked it with a quality of ${sleepRepo.getUserSleepDataForDate(activeUser.id, "2019/06/21", "sleepQuality")}.`
}

function displaySleptHoursWeek() {
  let week = sleepRepo.getUserSleepWeekInfo(1, "2019/06/21", "hoursSlept");
  Object.keys(week).forEach(day => {
    weekSleeps.innerText += `
      On ${day}, you slept ${week[day]} hours.
    `
  });
}

function displaySleepQualityWeek() {
  let week = sleepRepo.getUserSleepWeekInfo(1, "2019/06/21", "sleepQuality");
  Object.keys(week).forEach(day => {
    weekSleeps.innerText += `
      On ${day}, your sleep quality was ranked ${week[day]}.
    `
  });
}

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


//this function is more than 10 lines long but dynamic, replacing the two funcitons above
function displayAverageSleepForProperty(property) {
    let averageSleptInfo = sleepRepo.getAvgSleepData(activeUser.id, property);
    if(property === 'hoursSlept'){
      averageSleepData.innerText += `
      Your average hours slept ${averageSleptInfo}!
      `;
    } else if(property === 'sleepQuality') {
      averageSleepData.innerText += `
      Your average sleep quality is ${averageSleptInfo}!
      `;
    }
}

function displayMilesWalked() {
  let miles = activityRepo.gatherMilesWalked(activeUser, "2019/06/21");
  distanceWalked.innerText = `You walked ${miles} miles today!`
}

function displayComparisons() {
  compareToAll.innerText = `You climbed ${activityRepo.gatherStairsClimbed(activeUser, "2019/06/21")} The average was ${activityRepo.averageAllPropertyForDate("2019/06/21", "flightsOfStairs")}.
  You walked ${activityRepo.getStepsToday(activeUser, "2019/06/21")} The average was ${activityRepo.averageAllPropertyForDate("2019/06/21", "numSteps")}
  You were active for ${activityRepo.gatherMinutesActive(activeUser, "2019/06/21")} minutes today. The average was ${activityRepo.averageAllPropertyForDate("2019/06/21", "minutesActive")}
  `
}
