class Carro {
  public marca: string;
  public modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  dirigir(): string {
    return 'Vrum, Vrum!';
  }
}

const meuCarro: Carro = new Carro('Toyota', 'Corolla');
meuCarro.dirigir();