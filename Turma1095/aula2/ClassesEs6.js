class PessoaES6 {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log('Olá');
  }
}

const Pessoa = new PessoaES6('Ana', 28);
Pessoa.saudacao();