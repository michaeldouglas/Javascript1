class PessoaES6 {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log('Saudacao');
  }
}

const pessoaES6 = new PessoaES6('Ana', 28);

PessoaES6.nome = 'Fernando';
PessoaES6.idade = -10;

console.log(PessoaES6.nome);
console.log(PessoaES6.idade);