// Testes -> ValidarPessoas
const ValidarPessoas = require("./validadores/ValidarPessoas");

const Pessoas = require("./database/pessoa.database.json");

const Resultado = Pessoas.map((pessoa) => pessoa).map((validandoPessoas) =>
  ValidarPessoas(validandoPessoas)
);

// Talves +1 teste
if (Boolean(Resultado.length)) {
  console.log("Dados de pessoa invalido!");

  Resultado.map((resultado) => console.table(resultado));
} else {
  // +1 teste?
  console.log("Ta tudo valido!!!!");
}
