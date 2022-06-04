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
const gameYearsUI = document.querySelector('#game-years-ui');
const pausePlayBtn = document.querySelector('#pause-play-btn');

let gameSpeed = 625;
let gameStatus = 'paused';
let savedMinutes = parseInt(localStorage.getItem('elapsed_game_minutes'));
let savedHours = parseInt(localStorage.getItem('elapsed_game_hours'));
let savedDays = parseInt(localStorage.getItem('elapsed_game_days'));
let savedYears = parseInt(localStorage.getItem('elapsed_game_years'));

window.addEventListener('load', (event) => {
  initGame();
});

function initGame() {
  timerInterval = setInterval(function () {
    gameStatus = 'running'
    initGameBackground();
    initYears();
    initDays();
    initHours();
    initMinutes();
  }, gameSpeed);
}

function initYears() {
  if (localStorage.getItem('elapsed_game_years') === null) {
    localStorage.setItem('elapsed_game_years', 0);
    gameYearsUI.innerHTML = `Year ${savedYears}<br>`;
  } else {
    gameYearsUI.innerHTML = `Year ${savedYears}<br>`;
  }
}

function initDays() {
  if (localStorage.getItem('elapsed_game_days') === null) {
    localStorage.setItem('elapsed_game_days', 0);
    gameDaysUI.innerHTML = `Day ${savedDays}<br>`;
  } else {
    gameDaysUI.innerHTML = `Day ${savedDays}<br>`;
  }
  // Reset Year Cycle
  if (savedDays > 365) {
    savedDays = 0;
    // Increment Day + 1
    localStorage.setItem('elapsed_game_years', savedYears += 1);
  }
}

function initHours() {
  if (localStorage.getItem('elapsed_game_hours') === null) {
    localStorage.setItem('elapsed_game_hours', 0);
    gameHoursUI.innerText = `${savedHours}`;
  } else {
    if (savedHours < 10) {
      gameHoursUI.innerText = `0${savedHours}`;
    } else {
      gameHoursUI.innerText = `${savedHours}`;
    }
  }
  // Reset Day Cycle
  if (savedHours > 23) {
    savedHours = 0;
    // Increment Day + 1
    localStorage.setItem('elapsed_game_days', savedDays += 1);
  }
}

function initMinutes() {
  if (localStorage.getItem('elapsed_game_minutes') !== null) {
    localStorage.setItem('elapsed_game_minutes', savedMinutes++);
  }
  if (localStorage.getItem('elapsed_game_minutes') === null) {
    localStorage.setItem('elapsed_game_minutes', 0);
    gameMinutesUI.innerText = `${savedMinutes}`;
  } else {
    if (savedMinutes < 10) {
      gameMinutesUI.innerText = `0${savedMinutes}`;
    } else {
      gameMinutesUI.innerText = `${savedMinutes}`;
    }
  }
  if (savedMinutes > 59) {
    savedMinutes = 0;
    localStorage.setItem('elapsed_game_hours', savedHours += 1);
  }
}

function pauseGame() {
  clearInterval(timerInterval);
  gameStatus = 'paused'
}

addEventListener('keypress', function (e) { if (event.code === 'Space') { togglePausePlay(); } });

function togglePausePlay() {
  if (gameStatus == 'running') {
    pauseGame();
    pausePlayBtn.innerText = 'Resume';
  } else if (gameStatus == 'paused') {
    initGame();
    pausePlayBtn.innerText = 'Pause';
  }
}

function manipulateTime(t) {
  pauseGame();
  if (t == 1) {
    gameSpeed = 625;
  } else if (t == 2) {
    gameSpeed = 312.5;
  } else if (t == 3) {
    gameSpeed = 208.3;
  } else if (t == 4) {
    gameSpeed = 156.3;
  } else if (t == 10) {
    gameSpeed = 62.5;
  } else if (t == 100) {
    gameSpeed = 6.25;
  } else if (t == 1000) {
    gameSpeed = 0.625;
  }
  initGame();
}

// Game Background
function initGameBackground() {
  if (savedHours == 0 || savedHours == 1 || savedHours == 2 || savedHours == 24) {
    document.body.style.backgroundImage = `url('assets/backgrounds/7.png')`;
  } else if (savedHours == 3 || savedHours == 4 || savedHours == 5) {
    document.body.style.backgroundImage = `url('assets/backgrounds/8.png')`;
  } else if (savedHours == 6 || savedHours == 7 || savedHours == 8) {
    document.body.style.backgroundImage = `url('assets/backgrounds/1.png')`;
  } else if (savedHours == 9 || savedHours == 10 || savedHours == 11) {
    document.body.style.backgroundImage = `url('assets/backgrounds/2.png')`;
  } else if (savedHours == 12 || savedHours == 13 || savedHours == 14) {
    document.body.style.backgroundImage = `url('assets/backgrounds/3.png')`;
  } else if (savedHours == 15 || savedHours == 16 || savedHours == 17) {
    document.body.style.backgroundImage = `url('assets/backgrounds/4.png')`;
  } else if (savedHours == 18 || savedHours == 19 || savedHours == 20) {
    document.body.style.backgroundImage = `url('assets/backgrounds/5.png')`;
  } else if (savedHours == 21 || savedHours == 22 || savedHours == 23) {
    document.body.style.backgroundImage = `url('assets/backgrounds/6.png')`;
  }
}