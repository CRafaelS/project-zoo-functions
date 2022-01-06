const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalsOlder = data.species
    .filter(({ name }) => name === animal);
  const ageAnimal = animalsOlder[0].residents.every((num) => num.age > age);
  return ageAnimal;
}
module.exports = getAnimalsOlderThan;
