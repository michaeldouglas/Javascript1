// Criação com notação literal
// Json
let pessoa = {
  Pessoa: {
    nome: 'João',
    idade: 25,
    saudacao: function () {
      console.log('Literal');
    }
  }
}

//pessoa[`dsadsda_${dsadsa}`].append(pessoa);

// Objetivo por função
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.saudacao = function () {
    console.log('Saudacao');
  }
}

const pessoa1 = new Pessoa('Maria', 30);
pessoa1.saudacao();
pessoa.Pessoa.saudacao();

// Exibir propriedades
console.log(pessoa1.nome);
console.log(pessoa.Pessoa.nome);

// 
console.log(pessoa1)
console.log(pessoa)