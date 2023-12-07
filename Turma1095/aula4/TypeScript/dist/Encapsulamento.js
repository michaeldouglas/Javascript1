"use strict";
class ContaItauTradicional {
    constructor(saldo) {
        this._saldo = saldo;
    }
    saldo() {
        return this._saldo;
    }
    depositar(valor) {
        this._saldo += valor;
    }
}
class ITIContaDigital extends ContaItauTradicional {
    constructor(saldoInicial = 5) {
        super(saldoInicial);
    }
    depositar(valor) {
        super.depositar(valor);
    }
}
const objetoDeConta = new ContaItauTradicional(10);
const outroObjeto = new ITIContaDigital();
outroObjeto.depositar(10);
console.log(outroObjeto.saldo());
