const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  // console.log(data)
  if (!ids) {
    return [];
  }
  const specie = ids.map((element) =>
    data.species.find((elementId) => elementId.id === element));
  return specie;
}
module.exports = getSpeciesByIds;
