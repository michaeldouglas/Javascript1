"use strict";
class PessoaES6 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    saudacao() {
        return 'Olá';
    }
}
const objetoDePessoa = new PessoaES6('Ana', 28);
const teste = objetoDePessoa.saudacao();
console.log(teste);
