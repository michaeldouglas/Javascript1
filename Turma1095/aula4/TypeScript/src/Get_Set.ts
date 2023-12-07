class ContaBancaria {
  private _saldo: number = 0;

  get saldo(): number {
    return this._saldo;
  }

  set saldo(valor: number) {
    if (valor >= 0) {
      this._saldo = valor;
    } else {
      console.log('Valor Invalido')
    }
  }
}

const contaBancaria: ContaBancaria = new ContaBancaria();
contaBancaria.saldo = 5;
console.log(contaBancaria.saldo);