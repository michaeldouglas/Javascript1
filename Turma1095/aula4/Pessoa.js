function PessoaES6(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  PessoaES6.prototype.saudacao = function () {
    console.log('Saudacao');
  }
}

PessoaES6.prototype.dizerOla = function () {
  console.log('Olá, eu sou ', this.nome);
}

const pessoaES6 = new PessoaES6('Ana', 28);
pessoaES6.saudacao();
pessoaES6.dizerOla();

console.log(pessoaES6.hasOwnProperty('nome'));
console.log(pessoaES6.hasOwnProperty('saudacao'));