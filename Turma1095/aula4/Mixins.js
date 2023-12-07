let euPossoNadar = {
  nadar() {
    console.log('Nadando!');
  },
  nome: 'Ana',
  idade: 30,
  caracteristicas: {
    'gosta_de_ler': ['Aventura', 'Terror'],
    'viajar': ['Com amigos', 'Avião']
  }
}

class Peixe {
  constructor(nome) {
    this.nome = nome;
  }
}

// Apicando o mixin
Object.assign(Peixe.prototype, euPossoNadar);

const meuPeixe = new Peixe('Nemo');
meuPeixe.nadar();
console.log(meuPeixe)
const { nome, idade, caracteristicas } = euPossoNadar;
console.log(nome, idade, caracteristicas)
//