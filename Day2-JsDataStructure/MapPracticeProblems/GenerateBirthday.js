function generateBirthMonths(count) {
  let birthMonths = {};

  for (let i = 0; i < count; i++) {
    let month = Math.floor(Math.random() * 12) + 1;
    let year = Math.random() < 0.5 ? 1992 : 1993;
    let person = `Person${i + 1} (${year})`;

    if (!birthMonths[month]) {
      birthMonths[month] = [];
    }

    birthMonths[month].push(person);
  }

  return birthMonths;
}

const birthMonthGroups = generateBirthMonths(50);

console.log("Individuals grouped by birth month:");
Object.keys(birthMonthGroups).forEach((month) => {
  console.log(`Month ${month}:`, birthMonthGroups[month]);
});
