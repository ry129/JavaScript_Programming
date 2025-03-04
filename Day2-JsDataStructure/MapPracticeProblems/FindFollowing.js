function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollUntilTen() {
  let rollCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  while (Math.max(...Object.values(rollCounts)) < 10) {
    let roll = rollDie();
    rollCounts[roll] += 1;
  }

  let maxRolled = Object.keys(rollCounts).reduce((a, b) =>
    rollCounts[a] >= rollCounts[b] ? a : b
  );
  let minRolled = Object.keys(rollCounts).reduce((a, b) =>
    rollCounts[a] <= rollCounts[b] ? a : b
  );

  return { rollCounts, maxRolled, minRolled };
}

const { rollCounts, maxRolled, minRolled } = rollUntilTen();
console.log("Roll Counts:", rollCounts);
console.log(`Number that reached 10 times first: ${maxRolled}`);
console.log(`Number with the minimum occurrences: ${minRolled}`);
