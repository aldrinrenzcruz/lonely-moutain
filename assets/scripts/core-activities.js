let woodCuttingCounter = 0;
let woodCuttingHitsRequired = 10;
let woodCuttingEnergyCostPerClick = 1;


// addEventListener('keypress', function (e) { if (event.code === 'KeyE') { woodCuttingActivity(); } });

function activityWithEnergyCost(activity) {
  if (gameStatus == 'running') {
    if (charStatus == 'awake') {
      /*******************************************************/
      if (activity == 'woodcutting') {
        woodCutting();
      }
      /*******************************************************/
    } else {
      alert('You can\'t do this action while sleeping.');
    }
  } else {
    alert('You can\'t do this action while the game is paused.');
  }
}

function woodCutting() {
  if (savedEnergy >= woodCuttingEnergyCostPerClick) {
    ++woodCuttingCounter;
    localStorage.setItem('total_player_energy', --savedEnergy);
    document.querySelector('#cut-tree-btn').innerText = 'Cut Tree';
  } else {
    alert('Not enough energy.');
  }
  if (woodCuttingCounter == woodCuttingHitsRequired) {
    woodCuttingCounter = 0;
    localStorage.setItem('generated_trees', --savedTrees);
    localStorage.setItem('total_gathered_logs', ++savedLogs);
  }
}