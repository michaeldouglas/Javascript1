"use strict";
class ContaBancaria {
    constructor() {
        this._saldo = 0;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        if (valor >= 0) {
            this._saldo = valor;
        }
        else {
            console.log('Valor Invalido');
        }
    }
}
const contaBancaria = new ContaBancaria();
contaBancaria.saldo = 5;
console.log(contaBancaria.saldo);
