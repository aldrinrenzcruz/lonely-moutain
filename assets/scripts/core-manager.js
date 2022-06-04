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