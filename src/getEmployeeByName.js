const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const findName = data.employees
    .find((nam) => nam.firstName === employeeName || nam.lastName === employeeName);
  return findName;
}
module.exports = getEmployeeByName;
