/**
 * Game cycle == 15m (900,000ms)
 * Game hour == 37.5s (37500ms)
 * Game minute = 625ms
 * Every 3 minutes, wallpaper changes
 * 
 * 
 * 
 */

const gameMinutesUI = document.querySelector('#game-minutes-ui');
const gameHoursUI = document.querySelector('#game-hours-ui');
const gameDaysUI = document.querySelector('#game-days-ui');
const pausePlayBtn = document.querySelector('#pause-play-btn');

let gamePace = 625;
let gameMinutes = 0;
let gameHours = 0;
let gameDays = 0;

let timerInterval;
let gameStatus = 'paused';

window.addEventListener('load', (event) => {
  startTimer();
});

function startTimer() {
  timerInterval = setInterval(function () {
    gameMinutes++;
    updateGameBackground();
    gameStatus = 'running'

    // Pad 0 for minutes if less than 10
    if (gameHours < 10) {
      gameHoursUI.innerText = `0${gameHours}`;
    } else {
      gameHoursUI.innerText = `${gameHours}`;
    }
    // Resets game hour
    if (gameHours > 23) {
      gameHours = 0;
      gameDays += 1;
      gameDaysUI.innerHTML = `Day ${gameDays} <br>`;
    }

    if (gameMinutes > 59) {
      gameMinutes = 0;
      gameMinutesUI.innerText = `00`;
      gameHoursTicker();
    } else {
      if (gameMinutes < 10) {
        gameMinutesUI.innerText = `0${gameMinutes}`;
      } else {
        gameMinutesUI.innerText = `${gameMinutes}`;
      }
      if (gameHours == 0) {
        gameHoursUI.innerText = `00`;
      }
      if (gameDays == 0) {
        gameDaysUI.innerHTML = `Day 0 <br>`;
      }
    }
  }, gamePace);
}

function pauseGame() {
  clearInterval(timerInterval);
  gameStatus = 'paused'
}

function gameHoursTicker() {
  gameHours += 1;
}

function togglePausePlay() {
  if (gameStatus == 'running') {
    pauseGame();
    pausePlayBtn.innerText = 'Resume';
  } else if (gameStatus == 'paused') {
    startTimer();
    pausePlayBtn.innerText = 'Pause';
  }
}

function manipulateTime(t) {
  pauseGame();
  if (t == 1) {
    gamePace = 625;
  } else if (t == 2) {
    gamePace = 312.5;
  } else if (t == 3) {
    gamePace = 208.3;
  } else if (t == 4) {
    gamePace = 156.3;
  } else if (t == 10) {
    gamePace = 62.5;
  } else if (t == 100) {
    gamePace = 6.25;
  } else if (t == 1000) {
    gamePace = 0.625;
  }
  startTimer();
}

// Game Background
function updateGameBackground() {
  if (gameHours == 0 || gameHours == 1 || gameHours == 2 || gameHours == 24) {
    document.body.style.backgroundImage = `url('assets/backgrounds/7.png')`;
  } else if (gameHours == 3 || gameHours == 4 || gameHours == 5) {
    document.body.style.backgroundImage = "url('assets/backgrounds/8.png')";
  } else if (gameHours == 6 || gameHours == 7 || gameHours == 8) {
    document.body.style.backgroundImage = "url('assets/backgrounds/1.png')";
  } else if (gameHours == 9 || gameHours == 10 || gameHours == 11) {
    document.body.style.backgroundImage = "url('assets/backgrounds/2.png')";
  } else if (gameHours == 12 || gameHours == 13 || gameHours == 14) {
    document.body.style.backgroundImage = "url('assets/backgrounds/3.png')";
  } else if (gameHours == 15 || gameHours == 16 || gameHours == 17) {
    document.body.style.backgroundImage = "url('assets/backgrounds/4.png')";
  } else if (gameHours == 18 || gameHours == 19 || gameHours == 20) {
    document.body.style.backgroundImage = "url('assets/backgrounds/5.png')";
  } else if (gameHours == 21 || gameHours == 22 || gameHours == 23) {
    document.body.style.backgroundImage = "url('assets/backgrounds/6.png')";
  }
}