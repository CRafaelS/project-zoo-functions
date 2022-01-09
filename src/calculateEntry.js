const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const entrant = entrants.reduce(() => {
    if (entrants.age < 18) {
      return child += 1;
    } else if (entrants.age < 50) {
      return adult += 1;
    } else {
      return senior +=1
    }
  } ,{child: 0, adult: 0, senior: 0})
  
}

function calculateEntry(entrants) {
  // seu código aqui
}
console.log (countEntrants([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]))
module.exports = { calculateEntry, countEntrants };
