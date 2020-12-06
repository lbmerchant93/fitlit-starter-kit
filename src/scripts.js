//Query Selectors
let userInfo = document.querySelector(".user-info");

//Event Listeners
window.addEventListener("load", displayUserInfo);


//Global Variables
let activeUser = new User(sampleData[1]);

console.log(activeUser);
//Event Handlers and Functions
function displayUserInfo() {
  console.log(activeUser);
  userInfo.innerHTML = `
  <p class="user-name">Name: ${activeUser.name}</p>
  <p class="user-address">Address: ${activeUser.address}</p>
  <p class="user-email">Email: ${activeUser.email}</p>
  <p class="user-stride-length">Stride Length: ${activeUser.strideLength}</p>
  <p class="user-daily-step-goal">Daily Step Goal: ${activeUser.dailyStepGoal}</p>
  `;
}

