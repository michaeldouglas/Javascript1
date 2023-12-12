interface Estrategia {
  executar(): void;
}

class EstrategiaA implements Estrategia {
  executar(): void {
    console.log('Estrategia A');
  }
}

class EstrategiaB implements Estrategia {
  executar(): void {
    console.log('Estrategia B');
  }
}

class CapitaNascimento {
  private estrategia: Estrategia;

  constructor(estrategia: Estrategia) {
    this.estrategia = estrategia;
  }

  setEstrategia(estrategia: Estrategia): void {
    this.estrategia = estrategia;
  }

  executarEstrategia(): void {
    this.estrategia.executar();
  }
}

const estrategiaA = new EstrategiaA();
const estrategiaB = new EstrategiaB();

const capitaoNascimento = new CapitaNascimento(estrategiaA);
capitaoNascimento.executarEstrategia();

// Acontece um problema - PENSAR EM MUDAR A ESTRATEGIA A 

capitaoNascimento.setEstrategia(estrategiaB);
capitaoNascimento.executarEstrategia();