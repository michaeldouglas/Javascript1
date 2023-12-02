let contador = 0;

// while (contador < 10) {
//   console.log('Oi tudo bem?')
//   contador += 1;
//   console.log(contador);
//   // looping infinito sem fim
// }

// prompt('Digite um numero entre 1 e 50')
// let valorAtual = parseInt(30);

// target = 50;

// while (valorAtual != target) {
//   console.log('Esse não é o numero correto, tente novamente...');
//   valorAtual = 40;
// }

// console.log('Voce acertou');

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// uuid
function randomizarNumeros(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function rolarDados(dice) {
  if (dice == 4 || dice == 6 || dice == 8 || dice == 10 || dice == 12
    || dice == 13 || dice == 14 || dice == 20) {
    console.log('Rolagem dos dados ' + randomizarNumeros(1, dice));
  } else {
    console.log('Numero invalido!');
  }
}

rolarDados(6);

