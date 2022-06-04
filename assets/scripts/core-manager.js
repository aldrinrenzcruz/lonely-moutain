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

    initCoins();
    initMaxEnergy();
    initEnergy();
    initLogs();
  }, gameSpeed);
}

const playerCoinsUI = document.querySelector('#player-coins-ui');
const playerMaxEnergyUI = document.querySelector('#player-max-energy-ui');
const playerEnergyUI = document.querySelector('#player-energy-ui');
const gatheredLogsUI = document.querySelector('#gathered-logs-ui');
let savedCoins = parseInt(localStorage.getItem('total_player_coins'));
let savedMaxEnergy = parseInt(localStorage.getItem('total_player_max_energy'));
let savedEnergy = parseInt(localStorage.getItem('total_player_energy'));
let savedLogs = parseInt(localStorage.getItem('total_gathered_logs'));

function initCoins() {
  if (localStorage.getItem('total_player_coins') === null) {
    localStorage.setItem('total_player_coins', 0);
    playerCoinsUI.innerHTML = `${savedCoins}<br>`;
  } else {
    playerCoinsUI.innerHTML = `${savedCoins}<br>`;
  }
}

function initMaxEnergy() {
  if (localStorage.getItem('total_player_max_energy') === null) {
    localStorage.setItem('total_player_max_energy', 100);
    playerMaxEnergyUI.innerHTML = `${savedMaxEnergy}<br>`;
  } else {
    playerMaxEnergyUI.innerHTML = `${savedMaxEnergy}<br>`;
  }
}

function initEnergy() {
  if (localStorage.getItem('total_player_energy') === null) {
    localStorage.setItem('total_player_energy', 100);
    playerEnergyUI.innerHTML = `${savedEnergy}`;
  } else {
    playerEnergyUI.innerHTML = `${savedEnergy}`;
  }
}

function initLogs() {
  if (localStorage.getItem('total_gathered_logs') === null) {
    localStorage.setItem('total_gathered_logs', 0);
    gatheredLogsUI.innerHTML = `${savedLogs}<br>`;
  } else {
    gatheredLogsUI.innerHTML = `${savedLogs}<br>`;
  }
}