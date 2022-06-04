let woodCuttingCounter = 0;
let woodCuttingHitsRequired = 10;

addEventListener('keypress', function (e) { if (event.code === 'KeyE') { woodCuttingActivity(); } });

function woodCuttingActivity() {
  if (savedEnergy > 0) {
    woodCuttingCounter++;
    localStorage.setItem('total_player_energy', --savedEnergy);
    console.log(localStorage.getItem('total_player_energy'));
  } else {
    document.querySelector('#cut-tree-btn').innerText = 'Not enough energy';
  }
  if (woodCuttingCounter == woodCuttingHitsRequired) {
    woodCuttingCounter = 0;
    localStorage.setItem('generated_trees', --savedTrees);
    localStorage.setItem('total_gathered_logs', ++savedLogs);
  }
}


// savedTrees + treesGrowthRatePerDay;