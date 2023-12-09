type Pessoa = { nome: string; idade: number; };
type Trabalhador = { cargo: string };
type Funcionario = Pessoa & Trabalhador;

const empregrado: Funcionario = {
  nome: "Ana",
  idade: 30,
  cargo: "Desenvolvedor"
}

console.log(empregrado);