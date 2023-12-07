class ContaItauTradicional {
  private _saldo: number;

  constructor(saldo: number) {
    this._saldo = saldo;
  }

  saldo(): number {
    return this._saldo;
  }

  depositar(valor: number): void {
    this._saldo += valor;
  }
}

class ITIContaDigital extends ContaItauTradicional {
  constructor(saldoInicial: number = 5) {
    super(saldoInicial);
  }
  depositar(valor: number): void {
    super.depositar(valor);
  }
}

const objetoDeConta: ContaItauTradicional = new ContaItauTradicional(10);
const outroObjeto: ITIContaDigital = new ITIContaDigital();
outroObjeto.depositar(10);
console.log(outroObjeto.saldo());