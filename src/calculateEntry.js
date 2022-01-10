const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const numEntrants = entrants.reduce((acc, compareAge) => {
    if (compareAge.age < 18) {
      acc.child += 1;
    } else if (compareAge.age < 50) {
      acc.adult += 1;
    } else {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
  return numEntrants;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  const numEntrant = countEntrants(entrants);
  const price = numEntrant.child * data.prices.child
      + numEntrant.adult * data.prices.adult
      + numEntrant.senior * data.prices.senior;
  return price;
}
module.exports = { calculateEntry, countEntrants };
