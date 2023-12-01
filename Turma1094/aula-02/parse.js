// use strict;
// "use strict";

let numero = "42";
numero = Number(numero);

let valor = 1;
let forcarBoleano = !!valor;

// console.log(forcarBoleano);

let resultadoFloat = parseInt('1.2');

//console.log(typeof resultadoFloat);

// Texto
let novoTexto = 'Olá mundo!'.length;
for (let i = 0; i < 'Olá mundo!'.length; i++) {
  //console.log(i);
}

let outroTexto = 'Olá mundo!'.replace('!', '@');
//console.log(outroTexto);

let encadeado = 'Olá, '.concat('Teste! ').concat('Tudo bem!');
//console.log(encadeado);

let numero1Precisao = Math.floor(1.4);
let numero2Precisao = Math.floor(1.98);


let numeroAcima = Math.round(1.5);
console.log(numeroAcima);