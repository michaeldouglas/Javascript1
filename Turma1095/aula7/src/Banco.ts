import { BancoInterface } from "./interfaces/BancoInterface";

export class Banco implements BancoInterface {
  private clientes: { id: number; nome: string; saldo: number }[] = [];
  private proximoId: number = 1;

  cadastrarCliente(nome: string, saldoInicial: number): void {
    const novoCliente = { id: this.proximoId++, nome, saldo: saldoInicial };
    this.clientes.push(novoCliente);
    console.log(`Cliente ${nome} foi cadastrado com sucesso no banco Turma1095_bank`);
  }

  consultarSaldo(clienteId: number): number {
    const clientes = this.clientes.find((cliente) => cliente.id === clienteId);
    if (clientes) {
      console.log(`Saldo do cliente ${clientes.id} (${clientes.nome}): ${clientes.saldo}`);
      return clientes.saldo;
    } else {
      console.error(`Cliente com ID ${clienteId} não encontrado!`);
      return -1;
    }
  }

  depositar(clienteId: number, valor: number): void {
    const clientes = this.clientes.find((cliente) => cliente.id === clienteId);
    if (clientes) {
      clientes.saldo += valor;
      console.log(`Depósito de ${valor} foi realizado para o cliente ${clientes.id} (${clientes.nome})`);
    } else {
      console.error(`Cliente com ID ${clienteId} não encontrado. Depósito não realizado.`);
    }
  }

  sacar(clienteId: number, valor: number): void {
    const clientes = this.clientes.find((cliente) => cliente.id === clienteId);
    if (clientes) {
      if (clientes.saldo >= valor) {
        clientes.saldo -= valor;
        console.log(`Saque de ${valor} foi realizado para o cliente ${clientes.id} (${clientes.nome})`);
      } else {
        console.log(`Saldo insuficiente para o cliente ${clientes.id} (${clientes.nome})`);
      }
    } else {
      console.error(`Cliente com ID ${clienteId} não encontrado. Saque não realizado.`);
    }
  }
}