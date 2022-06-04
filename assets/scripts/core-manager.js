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

    initTrees();

    uiUpdater();

  }, gameSpeed);
}

const playerCoinsUI = document.querySelector('#player-coins-ui');
let savedCoins = parseInt(localStorage.getItem('total_player_coins'));

const playerMaxEnergyUI = document.querySelector('#player-max-energy-ui');
let savedMaxEnergy = parseInt(localStorage.getItem('total_player_max_energy'));

const playerEnergyUI = document.querySelector('#player-energy-ui');
let savedEnergy = parseInt(localStorage.getItem('total_player_energy'));

const gatheredLogsUI = document.querySelector('#gathered-logs-ui');
let savedLogs = parseInt(localStorage.getItem('total_gathered_logs'));

const generatedTreesUI = document.querySelector('#generated-trees-ui');
let savedTrees = parseInt(localStorage.getItem('generated_trees'));

function uiUpdater() {
  gameYearsUI.innerHTML = `Year ${savedYears}<br>`;
  gameDaysUI.innerHTML = `Day ${savedDays}<br>`;
  gameHoursUI.innerText = `${savedHours}`;
  gameMinutesUI.innerText = `${savedMinutes}`;

  if (savedHours < 10) {
    gameHoursUI.innerText = `0${savedHours}`;
  }

  if (savedMinutes < 10) {
    gameMinutesUI.innerText = `0${savedMinutes}`;
  }
}

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

function initTrees() {
  if (localStorage.getItem('generated_trees') === null) {
    localStorage.setItem('generated_trees', 500);
    generatedTreesUI.innerHTML = `Trees count: ${savedTrees}`;
  } else {
    generatedTreesUI.innerHTML = `Trees count: ${savedTrees}`;
  }
}