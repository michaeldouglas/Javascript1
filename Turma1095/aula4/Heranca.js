// Animal
// definição cachorro
// definição gato
// definição macaco

class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  emitirSom() {
    console.log('Som genérico! - Mas ele faz som - qual nao sei');
  }
}

class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome);
    this.raca = raca;
  }

  emitirSom() {
    console.log('Au Au');
  }
}

const meuCachorro = new Cachorro('Max', 'Labrador');
meuCachorro.emitirSom();

// Passeando na floresta
const animal = new Animal('Nem sei o que é isso');
animal.emitirSom();