import { Banco } from './Banco';
import * as prompt from 'prompt';

// Iniciar a lib 
prompt.start();

// Criar a instancia do banco
const banco = new Banco();

// Schema
const schema: any = {
  properties: {
    nomeCliente: {
      description: 'Digite o nome do cliente',
      type: 'string',
      required: true
    },
    saldoInicial: {
      description: 'Digite o saldo inicial do cliente',
      type: 'number',
      required: true
    },
    depositoValor: {
      description: 'Digite o valor a ser depositado',
      type: 'number',
      required: true
    },
    saqueValor: {
      description: 'Digite o valor a ser sacado',
      type: 'number',
      required: true
    }
  }
}

prompt.get(schema, (err: any, result: any) => {
  if (err) {
    console.error(err);
    return;
  }

  const nomeCliente = result.nomeCliente;
  const saldoInicial = parseFloat(result.saldoInicial);
  const depositoValor = parseFloat(result.depositoValor);
  const saqueValor = parseFloat(result.saqueValor);

  if (nomeCliente && !isNaN(saldoInicial)) {
    banco.cadastrarCliente(nomeCliente, saldoInicial);

    if (!isNaN(depositoValor)) {
      banco.depositar(1, depositoValor);

      if (!isNaN(saqueValor)) {
        banco.sacar(1, saqueValor);
        banco.consultarSaldo(1);
      } else {
        console.error('Valor de saque inválido');
      }
    } else {
      console.log('Valor de depósito inválido.');
    }
  } else {
    console.log('Por favor fornecer informações válidas sobre o cliente e o saldo.')
  }
})