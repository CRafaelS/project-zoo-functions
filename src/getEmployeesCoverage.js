const data = require('../data/zoo_data');

const employeeLocation = () => {
  const allresult = data.employees
    .reduce((acc, { id, firstName, lastName, responsibleFor }) => {
      acc.push({
        id,
        fullName: `${firstName} ${lastName}`,
        species: responsibleFor.map((animal) => data.species
          .find((test) => test.id === animal).name),
        locations: responsibleFor.map((animal) => data.species
          .find((test) => test.id === animal).location),
      });
      return acc;
    }, []);
    return allresult;
}

function getEmployeesCoverage(param) {
  // seu código aqui
  if (!param) {
    return employeeLocation();
  }
  const findEmployee = data.employees.find((employee) => employee.id === param.id
    || employee.firstName === param.name || employee.lastName === param.name);
  if (!findEmployee) {
    throw new Error('Informações inválidas', {
      id: 'Id inválido' });
  }
  return employeeLocation().find((item) => item.id.includes(findEmployee.id));
}
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
