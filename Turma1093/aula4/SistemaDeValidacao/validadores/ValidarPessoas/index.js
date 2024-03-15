// Validar uma pessoa = nomes, idades .....
const { Nomes, Idades, Estados, Cidades } = require("../index");

// @TODO: Criar a forma versao
const ValidarPessoas = (pessoa) => {
  return [
    {
      valido: Nomes(pessoa.nome),
      message: "Nome Invalido",
      errorCode: 300,
    },
    {
      valido: Idades(pessoa.idade),
      message: "Idade Invalida",
      errorCode: 301,
    },
    {
      valido: new Estados(pessoa.estado).valido, // E se nao fosse objeto?
      message: "Estado Invalido",
      errorCode: 302,
    },
    {
      valido: Cidades(pessoa.cidade),
      message: "Cidade Invalida",
      errorCode: 303,
    },
  ];
};

module.exports = ValidarPessoas;
