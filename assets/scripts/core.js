/**
 * Game cycle == 15m(900,000ms) in real-world time 
 * Game hour == 37.5s(37500ms) RT
 * Game minute = 625ms
 * Every 3 minutes, wallpaper changes
 * 
 * 
 * 
 */

const gameMinutesUI = document.querySelector('#game-minutes-ui');
const gameHoursUI = document.querySelector('#game-hours-ui');

let gameMinutes = 0;
let gameHours = 23;

setInterval(gameMinutesTicker, 625);

function gameMinutesTicker() {
  gameMinutes++;
  updateGameBackground();

  // Append 0 for minutes if less than 10
  if (gameHours < 10) {
    gameHoursUI.innerText = `0${gameHours}`;
  } else {
    gameHoursUI.innerText = `${gameHours}`;
  }
  // Resets game hour
  if (gameHours > 23) {
    gameHours = 0;
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
  }
}

function gameHoursTicker() {
  gameHours += 1;
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



// let realSeconds = 0;
// let realMinutes = 0;
// setInterval(realSecondsTicker, 1000);
// setInterval(realMinutesTicker, 60000);

// function realSecondsTicker() {
//   realSeconds++;
//   secondsUI.innerText = `${realSeconds}s.`;
//   updateGameBackground();

//   if (gameHours == 0) {
//     gameHoursUI.innerText = `0`;
//   }
//   if (gameMinutes == 0) {
//     gameMinutesUI.innerText = `0`;
//   }
// }

// function realMinutesTicker() {
//   realMinutes++;
//   minutesUI.innerText = `${realMinutes}m.`;
// }
