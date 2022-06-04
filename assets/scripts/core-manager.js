window.addEventListener('load', (event) => {
  initGame();
});

function initGame() {
  timerInterval = setInterval(function () {
    if (localStorage.getItem('game_prepped') === null) {
      window.open("index.html", "_self")
    }

    gameStatus = 'running'
    initGameBackground();
    initDays();
    initHours();
    initMinutes();

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

let treesGrowthRatePerDay = 2;

function uiUpdater() {
  gameYearsUI.innerHTML = `Year ${savedYears}<br>`;
  gameDaysUI.innerHTML = `Day ${savedDays}<br>`;
  gameHoursUI.innerText = `${savedHours}`;
  gameMinutesUI.innerText = `${savedMinutes}`;

  playerCoinsUI.innerHTML = `${savedCoins}<br>`;
  playerMaxEnergyUI.innerHTML = `${savedMaxEnergy}<br>`;
  playerEnergyUI.innerHTML = `${savedEnergy}`;
  gatheredLogsUI.innerHTML = `${savedLogs}<br>`;

  generatedTreesUI.innerHTML = `Trees count: ${savedTrees}`;

  if (savedHours < 10) {
    gameHoursUI.innerText = `0${savedHours}`;
  }

  if (savedMinutes < 10) {
    gameMinutesUI.innerText = `0${savedMinutes}`;
  }
}