const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employeeId = data.employees.find((employee) => employee.id === id).responsibleFor[0];

  const animal = data.species.find((findAnimal) => findAnimal.id === employeeId).residents
    .sort((a, b) => b.age - a.age)[0];
  return Object.values(animal);
}

module.exports = getOldestFromFirstSpecies;
