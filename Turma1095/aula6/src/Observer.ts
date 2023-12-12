// Push Notification

interface Observador {
  atualizar(mensagem: string): void;
}

class Aparelho {
  private observadores: Observador[] = [];

  adicicionarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  notificarObservador(mensagem: string): void {
    this.observadores.forEach(observador => observador.atualizar(mensagem));
  }
}

class DeFatoAvisarOCelular implements Observador {// Agora vou mostrar a PUSH
  atualizar(mensagem: string): void {
    console.log(`ATUALIZAR: Recebido: ${mensagem}`)
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