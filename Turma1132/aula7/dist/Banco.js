"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
// @TODO: Seria interessante ter um modulo de clientes
class Banco {
    constructor() {
        this.clientes = [];
        this.proximoId = 1;
    }
    cadastrarCliente(nome, saldoInicial) {
        const novoCliente = { id: this.proximoId++, nome, saldo: saldoInicial };
        this.clientes.push(novoCliente);
        console.log(`Cliente ${nome} foi cadastrado com sucesso no banco Turma1132_Bank`);
    }
    // @TODO: AliasType para outro tipo
    /**
     * E para consultar o sado do cliente
     * @param clienteId
     * @returns saldo
     */
    consultarSaldo(clienteId) {
        const clientes = this.clientes.find((cliente) => cliente.id === clienteId);
        if (clientes) {
            // ag+cc
            console.log(`Saldo do cliente ${clientes.id} (${clientes.nome}): ${clientes.saldo}`);
            return clientes.saldo;
        }
        else {
            console.error(`Cliente com ID ${clienteId} nao foi encontrado!`);
            return -1;
        }
    }
    depositar(clienteId, valor) {
        const clientes = this.clientes.find((cliente) => cliente.id === clienteId);
        if (clientes) {
            clientes.saldo += valor;
            console.log(`Deposito no valor de ${valor} foi realizado para o cliente 
      ${clientes.id} (${clientes.nome})`);
        }
        else {
            console.error(`Cliente com ID ${clienteId} nao foi encontrado. 
        O deposito nao pode ser realizado!`);
        }
    }
    sacar(clienteId, valor) {
        const clientes = this.clientes.find((cliente) => cliente.id === clienteId);
        if (clientes) {
            if (clientes.saldo >= valor) {
                clientes.saldo -= valor;
                console.log(`Saque de ${valor} foi realizado para o cliente ${clientes.id}
        (${clientes.nome})`);
            }
            else {
                console.error(`Saldo insuficiente para o cliente ${clientes.id} (${clientes.nome})`);
            }
        }
        else {
            console.error(`Cliente com ID ${clienteId} nao foi encontrado. 
        O saque nao pode ser realizado!`);
        }
    }
}
exports.Banco = Banco;
