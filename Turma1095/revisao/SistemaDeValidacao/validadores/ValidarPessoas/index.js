const {
  Nomes,
  Idades,
  Estados,
  Cidades
} = require('../index');


const ValidarPessoas = pessoa => {
  return [
    {
      valido: Nomes(pessoa.nome),
      message: 'Nome Invalido',
      errorCode: 300
    },
    {
      valido: Idades(pessoa.idade),
      message: 'Idade Invalida',
      errorCode: 301
    },
    {
      valido: new Estados(pessoa.estado).valido,
      message: 'Estado Invalido',
      errorCode: 302
    },
    {
      valido: Cidades(pessoa.cidade),
      message: 'Cidade Invalida',
      errorCode: 303
    }
  ]
}

module.exports = ValidarPessoas