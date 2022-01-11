const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employeeId = data.employees.find((employee) => employee.id === id).responsibleFor[0];

  const animal = data.species.find((findAnimal) => findAnimal.id === employeeId).residents
    .reduce((acc, elem) => (acc.age > elem.age ? acc : elem));
  return Object.values(animal);
  //   .find((listId) => listId.id === list))//.reduce((acc, elem) => (acc.age > elem.age ? acc : elem));
}

module.exports = getOldestFromFirstSpecies;
