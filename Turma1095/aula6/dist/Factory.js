"use strict";
class EcomerceBoticatio {
    digital(nome, preco) {
        return { nome, preco, tipo: 'digital' };
    }
    fisico(nome, preco) {
        return { nome, preco, tipo: 'fisico' };
    }
}
const fabrica = new EcomerceBoticatio();
const produto = fabrica.digital("Ebook", 5);
const produto2 = fabrica.fisico("Livro Fisico", 30);
console.log(produto);
console.log(produto2);
