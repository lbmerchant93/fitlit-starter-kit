//Query Selectors
let userInfo = document.querySelector(".user-info");
let displayMessage = document.querySelector(".display-message");
let stepGoalComparison = document.querySelector(".step-goal-comparison");
let hydrationWeekDisplay = document.querySelector(".hydration-week");
let hydrationTodayDisplay = document.querySelector(".hydration-today");
let latestSleep = document.querySelector(".latest-sleep");
let weekSleeps = document.querySelector(".week-sleeps");
let averageSleepData = document.querySelector(".average-sleep");
let numStepsDay = document.querySelector(".num-steps");
let minsActive = document.querySelector(".mins-active");
let distanceWalked = document.querySelector(".distance-walked");
let compareToAll = document.querySelector(".compare-to-all");
let weeklyView = document.querySelector(".weekly-view");

//Event Listeners
window.addEventListener("load", initializeUserInfo);

//Global Variables
let activeUser = new User(sampleUserData[1]);
let userRepo = new UserRepository(sampleUserData);
let hydration = new Hydration(sampleHydration[0]);
let hydrationRepo = new HydrationRepo(sampleHydration);
let sleep = new Sleep(sampleSleep[0]);
let sleepRepo = new SleepRepo(sampleSleep);
let activityRepo = new ActivityRepo(sampleActivity);

//Event Handlers and Functions
function initializeUserInfo() {
  displayUserInfo();
  greetUser();
  compareStepGoals();
  displayHydrationWeek();
  displayHydrationToday()
  userLatestHoursSleptAndQuality();
  displaySleptHoursWeek();
  displaySleepQualityWeek();
  displayAverageSleepQuality();
  displayAverageSleptHours();
  displayDailySteps();
  displayMinsActiveToday();
  displayMilesWalked();
  displayComparisons();

}

function displayUserInfo() {
  userInfo.innerHTML = `
  <p class="user-name">Name: ${activeUser.name}</p>
  <p class="user-address">Address: ${activeUser.address}</p>
  <p class="user-email">Email: ${activeUser.email}</p>
  <p class="user-stride-length">Stride Length: ${activeUser.strideLength}</p>
  <p class="user-daily-step-goal">Daily Step Goal: ${activeUser.dailyStepGoal}</p>
  `;
}

function greetUser() {
  displayMessage.innerText = `
    Welcome to FitLit, ${activeUser.getFirstName()}!
  `;
}

//will be some type of display later not the innerText
function compareStepGoals() {
  stepGoalComparison.innerText = `
    Your daily step goal = ${activeUser.dailyStepGoal}. The average daily step goal = ${userRepo.averageUserStepGoals()}.
  `
}

//will be some type of display later not the innerText
function displayHydrationWeek() {
  let week = hydrationRepo.retrieveWeekHydration(1, "2019/06/21");
  Object.keys(week).forEach(day => {
    hydrationWeekDisplay.innerText += `
      On ${day}, you drank ${week[day]} ounces.
    `
  });
}

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
  latestSleep.innerText = `You slept ${sleepRepo.getHoursSlept(activeUser.id, "2019/06/21")} hours last night. You ranked it with a quality of ${sleepRepo.getQualitySlept(activeUser.id, "2019/06/21")}.`
}

function displaySleptHoursWeek() {
  let weekSleptHours = sleepRepo.getUserWeekHours(1, "2019/06/21");
  Object.keys(weekSleptHours).forEach(day => {
    weekSleeps.innerText += `
      On ${day}, you slept ${weekSleptHours[day]} hours.
    `
  });
}

function displaySleepQualityWeek() {
  let weekSleepQuality = sleepRepo.getUserWeekQuality(1, "2019/06/21");
  Object.keys(weekSleepQuality).forEach(day => {
    weekSleeps.innerText += `
      On ${day}, your sleep quality was ranked ${weekSleepQuality[day]}.
    `
  });
}

function displayAverageSleepQuality() {
  let averageSleepQuality = sleepRepo.getAvgSleepData(activeUser.id, 'sleepQuality');
  averageSleepData.innerText += `Your average sleep quality is ${averageSleepQuality}!`;
}

function displayAverageSleptHours() {
  let averageSleptHours = sleepRepo.getAvgSleepData(activeUser.id, 'hoursSlept');
  averageSleepData.innerText += `
  Your average hours slept is ${averageSleptHours}!
  `;
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
