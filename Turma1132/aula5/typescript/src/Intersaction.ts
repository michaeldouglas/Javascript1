// JSON Pessoa -> Trabalhador {nomes, idade}
// herança -> prototipo
// Pessoa -> Trabalhador -> Funcionario
type Pessoa = { nome: string; idade: number };
type Trabalhador = { cargo: string };
type Funcionario = Pessoa & Trabalhador;

const empregado: Funcionario = {
  nome: "Ana",
  idade: 30,
  cargo: "Desenvolvedora",
};

console.log(empregado);
