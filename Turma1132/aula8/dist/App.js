import { Banco } from "./Banco";
import * as prompt from "prompt";
//Iniciar a LIB
prompt.start();
// Cria a instancia do objeto de banco
const banco = new Banco();
// Schema
// @TODO: falta o id do cliente
const schema = {
    properties: {
        nomeCliente: {
            description: "Digite o nome do cliente",
            type: "string",
            required: true,
        },
        saldoInicial: {
            description: "Digite o o saldo inicial do cliente",
            type: "number",
            required: true,
        },
        depositoValor: {
            description: "Digite o valor a ser depositado",
            type: "number",
            required: true,
        },
        saqueValor: {
            description: "Digite o valor a ser sacado",
            type: "number",
            required: true,
        },
    },
};
prompt.get(schema, (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    const nomeCliente = result.nomeCliente;
    const saldoInicial = parseFloat(result.saldoInicial);
    const depositoValor = parseFloat(result.depositoValor);
    const saqueValor = parseFloat(result.saqueValor);
    // @TODO: Muitos ifs encadeados
    if (nomeCliente && !isNaN(saldoInicial)) {
        banco.cadastrarCliente(nomeCliente, saldoInicial);
        if (!isNaN(depositoValor)) {
            banco.depositar(1, depositoValor);
            // @TODO: E se eu nao quiser depositar e apenas sacar o valor
            if (!isNaN(saqueValor)) {
                banco.sacar(1, saqueValor);
                banco.consultarSaldo(1);
            }
            else {
                console.error("Valor do saque invalido!");
            }
        }
        else {
            console.log("Valor de deposito invalido!");
        }
    }
    else {
        console.log("Por favor foneca infomacoes validas sobre o cliente!");
    }
});
