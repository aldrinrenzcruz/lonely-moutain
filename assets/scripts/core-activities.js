let woodCuttingCounter = 0;
let woodCuttingHitsRequired = 10;

function woodCuttingActivity() {
  woodCuttingCounter ++;
  console.log(woodCuttingCounter);
  savedEnergy--;

  if (woodCuttingCounter == woodCuttingHitsRequired) {
    woodCuttingCounter = 0;
    savedTrees--;
    savedLogs++;
  }

}