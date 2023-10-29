let countdown;
const timerDisplay = document.querySelector(".countdown");
const endDate = document.querySelector('input[type="date"]');
const startButton = document.querySelector("#start-button");

startButton.addEventListener("click", function () {
  const endTime = new Date(endDate.value);
  startTimer(endTime);
});

function startTimer(endTime) {
  clearInterval(countdown);

  const seconds = Math.round((endTime - Date.now()) / 1000);

  if (seconds < 0) {
    clearInterval(countdown);
    return;
  }

  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((endTime - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainderSeconds = seconds % 60;

  document.querySelector("#days").textContent = `${
    days < 10 ? "0" : ""
  }${days}`;
  document.querySelector("#hours").textContent = `${
    hours < 10 ? "0" : ""
  }${hours}`;
  document.querySelector("#minutes").textContent = `${
    minutes < 10 ? "0" : ""
  }${minutes}`;
  document.querySelector("#seconds").textContent = `${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
}
