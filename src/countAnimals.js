const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const everyAnimals = data.species.reduce((acc, item) => {
    acc[item.name] = item.residents.length;
    return acc;
  }, {});
  if (!animal) {
    return everyAnimals;
  } if (Object.keys(animal).length === 1) {
    const numAnimal = data.species
      .find((findAnimal) => findAnimal.name === animal.specie).residents.length;
    return numAnimal;
  } if (Object.keys(animal).length === 2) {
    const numSexAnimal = data.species
      .find((findAnimal) => findAnimal.name === animal.specie).residents
      .filter((sexAnimal) => sexAnimal.sex === animal.sex).length;
    return numSexAnimal;
  }
}
module.exports = countAnimals;
