let treesGrowthRatePerDay = 2;

function generateTreesDaily() {
  if (savedHours > 23) {
    localStorage.setItem('generated_trees', savedTrees += treesGrowthRatePerDay);
  }
}