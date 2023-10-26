class ChapeuDoPatinho {
  constructor(
    cor = 'marrom',
    tipo = 'borracha',
    furo = true
  ) {
    this.cor = cor;
    this.tipo = tipo;
    this.furo = furo;
  }

  acaoCurvatura(curvarOChapeu = true) {
    this.curvarOChapeu = curvarOChapeu
  }
}

// const MeuChapeu = new ChapeuDoPatinho('marrom', 'ferro', true);
// const MeuChapeu2 = new ChapeuDoPatinho(
//   'verde', 'ferro', false
// );
// MeuChapeu2.acaoCurvatura();

// console.log(MeuChapeu);
// console.log(MeuChapeu2);

// objeto se tudo é um objeto, porque não pensar
// na programação como objeto?

// sistema

// Formulário de contato
// Formulário
// classe -> o passo a passo que defini o objeto


// if, eles, while, foreach, map, filter iodsajdksah kdjhsa
//algoritmo -> Tá bem claro na cabeça
// Estrututaral 

class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  emiteUmSom() {
    console.log(`${this.nome} fez um som!`);
  }
}

class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome);
    this.raca = raca;
  }

  emiteUmSom() {
    console.log(`${this.nome} (raça ${this.raca}) late.`);
  }
}

// const Jobs = new Cachorro('Jobs', 'Bulldog');
// Jobs.emiteUmSom();
// console.log(Jobs);

// const Gatinho = new Animal('Gatinho');
// Gatinho.emiteUmSom();
// console.log(Gatinho);

class Pessoa {
  constructor(nome, idade) {
    let _nome = nome; //private/setter
    this.idade = idade; // public

    this.ObterNome = function () {//getters
      return _nome;
    }
  }

  _MeuMetodoProtected() {
    console.log('ESTOU NO PROTECTED');
  }
}

class Aluno extends Pessoa {
  constructor(nome, matricula) {
    super(nome);
    this.matricula = matricula;
  }

  exibirInfo() {
    this._MeuMetodoProtected();
  }
}

// const APessoa = new Pessoa('Joao', 18);
// const nomeDaPessoa = APessoa.ObterNome();
// console.log(APessoa._MeuMetodoProtected());

const meuTeste = new Aluno();
meuTeste.exibirInfo();

