function ContaBancaria(saldo) {
  let _saldo = saldo; //encapsulado - comportamento - protected
  // visibilidade 

  this.saldo = function () {
    return _saldo;
  }

  this.depositar = function (valor) {
    _saldo += valor;
  }
}

const conta = new ContaBancaria(5);
console.log(`O saldo da conta: `, conta.saldo());
conta.depositar(10);
console.log(`O saldo da conta: `, conta.saldo());