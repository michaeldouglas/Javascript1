const ValidarPessoas = require('./validadores/ValidarPessoas');

const Pessoas = require('./database/pessoa.database.json');

const Resultado = Pessoas.map(pessoa => pessoa)
  .map(validandoPessoas => ValidarPessoas(validandoPessoas));

if (Boolean(Resultado.length)) {
  console.log('Dados da pessoa invalida');
  Resultado.map(resultado => console.table(resultado));

  // const final = Resultado[0].map(resultado => resultado)
  //   .filter(resultado => resultado.valido === true);

  // console.log(final);
} else {
  console.log('Ta tudo valido');
}