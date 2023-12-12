"use strict";
// Push Notification
class Aparelho {
    constructor() {
        this.observadores = [];
    }
    adicicionarObservador(observador) {
        this.observadores.push(observador);
    }
    notificarObservador(mensagem) {
        this.observadores.forEach(observador => observador.atualizar(mensagem));
    }
}
class DeFatoAvisarOCelular {
    atualizar(mensagem) {
        console.log(`ATUALIZAR: Recebido: ${mensagem}`);
    }
}
const AparelhoCelular = new Aparelho();
const push1 = new DeFatoAvisarOCelular();
const push2 = new DeFatoAvisarOCelular();
const push3 = new DeFatoAvisarOCelular();
AparelhoCelular.adicicionarObservador(push1);
AparelhoCelular.adicicionarObservador(push2);
AparelhoCelular.adicicionarObservador(push3);
AparelhoCelular.notificarObservador('Agora sim essa é a mensagem');
