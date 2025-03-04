function gamblerGame() {
  let money = 100;
  let goal = 200;
  let bets = 0,
    wins = 0;

  while (money > 0 && money < goal) {
    bets++;
    if (Math.random() < 0.5) {
      // 50% chance to win
      money++;
      wins++;
    } else {
      money--;
    }
  }

  console.log(`Final Money: Rs ${money}`);
  console.log(`Total Bets: ${bets}`);
  console.log(`Total Wins: ${wins}`);
  console.log(money === goal ? "Goal reached! 🎉" : "Broke! 💸");
}

gamblerGame();
