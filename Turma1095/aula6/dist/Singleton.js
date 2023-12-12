"use strict";
// configuração
// config 
// static // estatica ao seu contexto
class Produtos {
    static Produtos() {
        return { nome: 'dasdsda' };
    }
}
class Usuarios extends Produtos {
    static Usuarios() {
        return { nome: 'dasdsda' };
    }
}
class Configuracao extends Usuarios {
    //private constructor() { }
    static obterStancia() {
        if (!Configuracao.instancia) {
            Configuracao.instancia = new Configuracao();
        }
        return Configuracao.instancia;
    }
    obterUsuario() {
        return { id: 1 };
    }
    obterProduto() {
        return Configuracao.Produtos();
    }
    obterNovoUsuario() {
        return Configuracao.Usuarios();
    }
}
const config1 = Configuracao.obterStancia();
const config2 = Configuracao.obterStancia();
console.log(config1 === config2);
console.log(config1.obterUsuario());
console.log(config2.obterUsuario());
console.log(config2.obterNovoUsuario());
console.log(config2.obterProduto());
