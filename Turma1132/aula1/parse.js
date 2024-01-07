//"use strict";

{/* <input type="text" id="numero" /> */ }

let numero = "42";
numero = Number(numero);
console.log(typeof numero);

let valor = 1;
let forcarBoleano = !!valor;

console.log(forcarBoleano);

//Texto
for (let i = 0; i < 'Olá mundo!'.length; i++) {
  // console.log(i);
}

//
let outroTexto = 'Olá mundo!'.replace('!', '@');
// console.log(outroTexto);

let encadeado = 'Olá, '.concat('Teste! ').concat('Tudo bem!');
console.log(encadeado);