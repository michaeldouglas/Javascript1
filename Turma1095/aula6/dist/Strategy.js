"use strict";
class EstrategiaA {
    executar() {
        console.log('Estrategia A');
    }
}
class EstrategiaB {
    executar() {
        console.log('Estrategia B');
    }
}
class CapitaNascimento {
    constructor(estrategia) {
        this.estrategia = estrategia;
    }
    setEstrategia(estrategia) {
        this.estrategia = estrategia;
    }
    executarEstrategia() {
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
