const ValidarPessoas = require('./Validadores/ValidarPessoas');

const Pessoas = require('./database/pessoa.database.json');

const Resultado = Pessoas.map(pessoa => pessoa)
  .map(validandoPessoas => ValidarPessoas(validandoPessoas));

if (Boolean(Resultado.length)) {
  console.error('Dados da pessoa invalidos');
  Resultado.map(resultado => console.table(resultado))
} else {
  console.log('Dados validos');
}