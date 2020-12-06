//Query Selectors
let userInfo = document.querySelector(".user-info");
let displayMessage = document.querySelector(".display-message");
let stepGoalComparison = document.querySelector(".step-goal-comparison");

//Event Listeners
window.addEventListener("load", initializeUserInfo);

//Global Variables
let activeUser = new User(sampleData[1]);
let userRepo = new UserRepository(sampleData);

//Event Handlers and Functions
function initializeUserInfo() {
  displayUserInfo();
  greetUser();
  compareStepGoals();
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






//
