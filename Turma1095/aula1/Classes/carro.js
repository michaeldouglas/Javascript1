// RECEITA DE FAZER CARROS
class Carro {
  constructor() {
    // A ESTE CONTEXTO 
    this.cor = "azul";
    this.modelo = 'Sedan';
    this.velocidade = 0;
  }

  definirACor(definirACorDoCarro) {
    this.cor = definirACorDoCarro;
  }

  definirOModelo(definirOModelo) {
    this.modelo = definirOModelo;
  }

  acelerar(acaoDePisarNoPedal) {
    this.velocidade = acaoDePisarNoPedal;
  }

  resultado() {
    return {
      velocidade: this.velocidade,
      modelo: this.modelo,
      cor: this.cor
    }
  }
}

const carro1 = new Carro();
const carro2 = new Carro();

carro1.acelerar(5);
carro2.acelerar(50);
carro2.definirOModelo('Esportivo');
carro2.definirACor('preto');

console.log(carro1.resultado());
console.log(carro2.resultado());

// NAO E O OBJETO