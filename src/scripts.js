//Query Selectors
let userInfo = document.querySelector(".user-info");
let displayMessage = document.querySelector(".display-message");
let stepGoalComparison = document.querySelector(".step-goal-comparison");
let hydrationWeekDisplay = document.querySelector(".hydration-week");
let hydrationTodayDisplay = document.querySelector(".hydration-today");

//Event Listeners
window.addEventListener("load", initializeUserInfo);

//Global Variables
let activeUser = new User(sampleUserData[1]);
let userRepo = new UserRepository(sampleUserData);
let hydration = new Hydration(sampleHydration[0]);
let hydrationRepo = new HydrationRepo(sampleHydration);

//Event Handlers and Functions
function initializeUserInfo() {
  displayUserInfo();
  greetUser();
  compareStepGoals();
  displayHydrationWeek();
  displayHydrationToday()
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
    console.log(day, week[day]);
  });
}

function displayHydrationToday() {
  let waterToday = hydration.returnFluidOuncesConsumed();
  hydrationTodayDisplay.innerText = `You drank ${waterToday} ounces today.`
}


//
