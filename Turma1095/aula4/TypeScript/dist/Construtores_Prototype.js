"use strict";
class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    dirigir() {
        return 'Vrum, Vrum!';
    }
}
const meuCarro = new Carro('Toyota', 'Corolla');
meuCarro.dirigir();
