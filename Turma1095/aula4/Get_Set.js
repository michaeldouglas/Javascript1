class ContaBancariaES6 {
  constructor() {
    this._saldo = 0;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    if (valor >= 0) {
      this._saldo = valor;
    } else {
      console.log('Valor invalido para o saldo');
    }
  }
}

let contaES6 = new ContaBancariaES6();
contaES6.saldo = 5; // SET
console.log(contaES6.saldo); // GET