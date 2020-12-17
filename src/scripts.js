//Query Selectors
const userName = document.querySelector(".user-name");
const userAddress = document.querySelector(".user-address");
const userEmail = document.querySelector(".user-email");
const userStrideLength = document.querySelector(".user-stride-length");
const userDailyStepGoal = document.querySelector(".user-daily-step-goal");
const userInfoButton = document.querySelector(".user-info-button");
const displayWelcomeMessage = document.querySelector(".display-message");
const stepGoalComparison = document.querySelector(".step-goal-comparison");
const hydrationChart = document.querySelector(".hydration-chart")
const hydrationTodayDisplay = document.querySelector(".hydration-today");
const latestSleep = document.querySelector(".latest-sleep");
const sleepWeek = document.querySelector(".sleep-week");
const averageSleepHoursData = document.querySelector(".average-sleep-hours");
const averageSleepQualityData = document.querySelector(".average-sleep-quality");
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
userInfoButton.addEventListener("click", toggleUserInfo);

//Global Variables
let activeUser = new User(userData[getRandomIndex(userData)]);
let userRepo = new UserRepository(userData);
let hydration = new Hydration(hydrationData[0]);
let hydrationRepo = new HydrationRepo(hydrationData);
let sleepRepo = new SleepRepo(sleepData);
let activityRepo = new ActivityRepo(activityData);

//Event Handlers and Functions
function initializeUserInfo() {
  displayUserInfo();
  greetUser();
  displayHydrationToday()
  userLatestHoursSleptAndQuality();
  displayAverageSleepForProperty('hoursSlept');
  displayAverageSleepForProperty('sleepQuality');
  displayMilesWalked();
  displayFriends();
}

// User:
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayUserInfo() {
  userName.innerText = `Name: \n${activeUser.name}`;
  userAddress.innerText = `Address: \n${activeUser.address}`;
  userEmail.innerText = `Email: \n${activeUser.email}`;
  userStrideLength.innerText = `Stride Length: \n${activeUser.strideLength}`;
  userDailyStepGoal.innerText = `Daily Step Goal: \n${activeUser.dailyStepGoal}`;
}

function greetUser() {
  displayWelcomeMessage.innerText = `
    Welcome to FitBook, ${activeUser.getFirstName()}!
  `;
}

function displayFriends() {
  activeUser.friends.forEach(friendId => {
    let friendIndex = userData.map(user => user.id).indexOf(friendId);
    friendsList.innerText += `
    ${userData[friendIndex].name}
    Step Goal: ${userData[friendIndex].dailyStepGoal}
    `;
  });
}

function toggleUserInfo() {
  if (userInfoButton.innerText === "Show More") {
    userInfoButton.innerText = "Show Less";
    userInfoButton.setAttribute('aria-expanded', 'true');
    userInfoButton.setAttribute(
      'aria-label', 
      'Show Less User Info'
    );
  } else {
    userInfoButton.innerText = "Show More";
    userInfoButton.setAttribute('aria-expanded', 'false');
    userInfoButton.setAttribute(
      'aria-label', 
      'Show More User Info'
    );
  }
  userAddress.classList.toggle('hidden');
  userEmail.classList.toggle('hidden');
  userStrideLength.classList.toggle('hidden');
}


// Step Goal Comprison:
let stepGoalComparisonChart = new Chart(stepGoalComparison, {
  type: 'bar',
  data: {
    datasets: [{
      label: "Your Goal",
      backgroundColor: "rgb(255, 131, 0)",
      borderColor: "rgb(255, 131, 0)",
      data: [activeUser.dailyStepGoal]
    }, {
      label: "Average step goal",
      backgroundColor: "rgb(124, 252, 0)",
      borderColor: "rgb(124, 252, 0)",
      data: [userRepo.averageUserStepGoals()]
    }]
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Your daily step goal compared to the average of all users",
      fontSize: 16,
      fontColor: "rgb(0, 0, 0)"
    },
    legend: {
      labels: {
        fontColor: "rgb(0, 0, 0)"
      }
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
          labelString: "Number of steps",
          fontStyle: 'bold',
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
          labelString: "Goals",
          fontStyle: 'bold',
          fontColor: "rgb(0, 0, 0)"
        }
      }]
    }
  }
});

// Hydration:
let weekHydrationChart = new Chart(hydrationChart, {
  type: 'bar',
  data: {
    labels: Object.keys(hydrationRepo.retrieveWeekHydration(activeUser.id, "2019/09/22")),
    datasets: [{
      label: "Day's Hydration",
      backgroundColor: "rgb(244, 194, 194)",
      borderColor: "rgb(244, 194, 194)",
      data: Object.values(hydrationRepo.retrieveWeekHydration(activeUser.id, "2019/09/22"))
    }]
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Your week's Hydration information",
      fontSize: 16,
      fontColor: "rgb(0, 0, 0)"
    },
    legend: {
      display: false
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
          labelString: "Ounces of water drank",
          fontStyle: 'bold',
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
          fontStyle: 'bold',
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

// Sleep:
let sleepHoursWeekChart = new Chart(sleepWeek, {
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
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Your week's Sleep information",
      fontSize: 16,
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
          fontStyle: 'bold',
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
          fontStyle: 'bold',
          fontColor: "rgb(0, 0, 0)"
        }
      }]
    }
  }
});

function userLatestHoursSleptAndQuality() {
  latestSleep.innerText = `You slept ${sleepRepo.getUserSleepDataForDate(activeUser.id, "2019/09/22", "hoursSlept")} hours last night and ranked it with a quality of ${sleepRepo.getUserSleepDataForDate(activeUser.id, "2019/09/22", "sleepQuality")}.`
}

function displayAverageSleepForProperty(property) {
  let averageSleptInfo = sleepRepo.getAvgSleepData(activeUser.id, property);
  if (property === 'hoursSlept') {
    averageSleepHoursData.innerText += `Your average hours slept ${averageSleptInfo}!`;
  } else if (property === 'sleepQuality') {
    averageSleepQualityData.innerText += `Your average sleep quality is ${averageSleptInfo}!`;
  }
}

// Activity:
function displayMilesWalked() {
  let miles = activityRepo.gatherMilesWalked(activeUser, "2019/09/22");
  distanceWalked.innerText = `You walked ${miles} miles today!`
}

let dailyStepDisplay = new Chart(dailyStepChart, {
  type: 'bar',
  data: {
    labels: ['Daily Step Counter'],
    datasets: [{
      label: 'You',
      backgroundColor: 'rgb(253, 200, 48)',
      borderColor: 'rgb(253, 200, 48)',
      data: [activityRepo.getActivityDay(activeUser, "2019/09/22", "numSteps")]
    }, {
      label: 'Average of All Users',
      backgroundColor: 'rgb(128, 18, 128)',
      borderColor: 'rgb(128, 18, 128)',
      data: [activityRepo.averageAllPropertyForDate("2019/09/22", "numSteps")]
    }]
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Steps Taken Today",
      fontSize: 16,
      fontColor: "rgb(0, 0, 0)"
    },
    legend: {
      display: false
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
          labelString: "Number of steps",
          fontStyle: 'bold',
          fontColor: "rgb(0, 0, 0)"
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: "rgb(0, 0, 0)",
          fontStyle: 'bold',
        },
        display: true,
        scaleLabel: {
          display: true,
          fontStyle: 'bold',
          fontColor: "rgb(0, 0, 0)"
        }
      }]
    }
  }
});

let dailyStairDisplay = new Chart(dailyStairChart, {
  type: 'bar',
  data: {
    labels: ['Daily Stair Counter'],
    datasets: [{
      label: 'You',
      backgroundColor: 'rgb(253, 200, 48)',
      borderColor: 'rgb(253, 200, 48)',
      data: [activityRepo.getActivityDay(activeUser, "2019/09/22", "flightsOfStairs")]
    }, {
      label: 'Average of All Users',
      backgroundColor: 'rgb(128, 18, 128)',
      borderColor: 'rgb(128, 18, 128)',
      data: [activityRepo.averageAllPropertyForDate("2019/09/22", "flightsOfStairs")]
    }]
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Flights of Stairs Climbed Today",
      fontSize: 16,
      fontColor: "rgb(0, 0, 0)"
    },
    legend: {
      display: false
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
          labelString: "Number of steps",
          fontStyle: 'bold',
          fontColor: "rgb(0, 0, 0)"
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: "rgb(0, 0, 0)",
          fontStyle: 'bold',
        },
      }]
    }
  }
});

let dailyActiveDisplay = new Chart(dailyActiveChart, {
  type: 'bar',
  data: {
    labels: ['Daily Minutes Active Counter'],
    datasets: [{
      label: 'You',
      backgroundColor: 'rgb(253, 200, 48)',
      borderColor: 'rgb(253, 200, 48)',
      data: [activityRepo.getActivityDay(activeUser, "2019/09/22", "minutesActive")],
      fontStyle: 'bold',
    }, {
      label: 'Average of All Users',
      backgroundColor: 'rgb(128, 18, 128)',
      borderColor: 'rgb(128, 18, 128)',
      data: [activityRepo.averageAllPropertyForDate("2019/09/22", "minutesActive")]
    }]
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Minutes Active Today",
      fontSize: 16,
      fontColor: "rgb(0, 0, 0)"
    },
    legend: {
      display: false
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
          labelString: "Number of steps",
          fontStyle: 'bold',
          fontColor: "rgb(0, 0, 0)"
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: "rgb(0, 0, 0)",
          fontStyle: 'bold',
        },
      }]
    }
  }
});

let stepsWeeklyChart = new Chart(stepsWeeklyView, {
  type: 'line',
  data: {
    labels: activityRepo.getUserWeek(activeUser, "2019/09/22").map(day => day.date),
    datasets: [{
      label: 'Steps Taken per Day',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 255, 255)',
      fill: false,
      pointBackgroundColor: 'rgb(255, 255, 255)',
      data: activityRepo.getUserWeek(activeUser, "2019/09/22").map(day => day.numSteps)
    }]
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Your Weekly Steps Taken",
      fontSize: 16,
      fontColor: "rgb(0, 0, 0)"
    },
    legend: {
      display: false
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
          labelString: "Steps Taken",
          fontStyle: 'bold',
          fontColor: "rgb(0, 0, 0)"
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: "rgb(0, 0, 0)",
          fontStyle: 'bold',
        },
        scaleLabel: {
          display: true,
          labelString: "Date",
          fontStyle: 'bold',
          fontColor: "rgb(0, 0, 0)"
        }
      }]
    }
  }
});

let stairsWeeklyChart = new Chart(stairsWeeklyView, {
  type: 'line',
  data: {
    labels: activityRepo.getUserWeek(activeUser, "2019/09/22").map(day => day.date),
    datasets: [{
      label: 'Flights of Stairs Climbed per Day',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 255, 255)',
      fill: false,
      pointBackgroundColor: 'rgb(255, 255, 255)',
      data: activityRepo.getUserWeek(activeUser, "2019/09/22").map(day => day.flightsOfStairs)
    }]
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Your Weekly Flights of Stairs Climbed",
      fontSize: 16,
      fontColor: "rgb(0, 0, 0)"
    },
    legend: {
      display: false
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
          labelString: "Flights of Stairs",
          fontStyle: 'bold',
          fontColor: "rgb(0, 0, 0)"
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: "rgb(0, 0, 0)",
          fontStyle: 'bold',
        },
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Date",
          fontStyle: 'bold',
          fontColor: "rgb(0, 0, 0)"
        }
      }]
    }}
});

let minsActiveWeeklyChart = new Chart(minsActiveWeeklyView, {
  type: 'line',
  data: {
    labels: activityRepo.getUserWeek(activeUser, "2019/09/22").map(day => day.date),
    datasets: [{
      label: 'Minutes Active per Day',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 255, 255)',
      fill: false,
      pointBackgroundColor: 'rgb(255, 255, 255)',
      data: activityRepo.getUserWeek(activeUser, "2019/09/22").map(day => day.minutesActive)
    }]
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Your Weekly Minutes Actvie Taken",
      fontSize: 16,
      fontColor: "rgb(0, 0, 0)"
    },
    legend: {
      display: false
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
          labelString: "Minutes Active",
          fontStyle: 'bold',
          fontColor: "rgb(0, 0, 0)"
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: "rgb(0, 0, 0)",
          fontStyle: 'bold',
        },
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Date",
          fontStyle: 'bold',
          fontColor: "rgb(0, 0, 0)"
        }
      }]
    }}
});
