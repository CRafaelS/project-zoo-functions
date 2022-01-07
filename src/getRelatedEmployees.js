const data = require('../data/zoo_data');

// Considerando a boa prática de dividir o código em partes menores, apresentamos a função getRelatedEmployees em que você deverá dividí-la em duas funções:
// 1 - isManager - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: true ou false;

function isManager(id) {
  // Para resolver essa questão eu utilizei o includes, referecia a seguir:
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  const searchManag = data.employees.some((element) => element.managers.includes(id));
  return searchManag;
}

// 2 - getRelatedEmployees - que utiliza a primeira função para apresentar as seguintes saídas:
// se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
// se não for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora Error da biblioteca padrão do JavaScript com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!".

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const nameManager = data.employees
      .filter((employee) => employee.managers.some((manager) => manager === managerId))
      .map((finalEmployee) => `${finalEmployee.firstName} ${finalEmployee.lastName}`);
    return nameManager;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
