let contador = 0;

// while (contador < 10) {
//   console.log('Oi tudo bem?')
//   contador += 1;
//   console.log(contador);
// }

// 
// //prompt('Digite um numero entre 1 e 50')
// let valorAtual = parseInt(30);

// while (valorAtual !== target) {
//   console.log('Esse não é o número correto, tente novamente...');
//   valorAtual = 40;
// }

// console.log('Você acertou!');

// do {
//   var guess = 30;
//   if (guess !== target)
//     console.log('Tente novamente')
// } while (guess !== target);

// console.log('Você acertou!');


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function randomizarNumeros(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function rolarDado(dice) {
  if (dice == 4 || dice == 6 || dice == 8 || dice == 10 || dice == 12
    || dice == 13 || dice == 14 || dice == 20) {
    console.log('Rolagem: ' + randomizarNumeros(1, dice));
  } else {
    console.log('Numero invalido!');
  }
}

// Isso é um looping?
// Looping de função
// function meuGameDeDados() {
//   rl.question('Digite 4,6,8,10,12 ou 20 para rolar o dado: ', (resposta) => {
//     const dice = parseInt(resposta);

//     if (!isNaN(dice)) {
//       rolarDado(dice);
//       console.log('dkjsahv ');
//       meuGameDeDados();

//     } else {
//       rl.close();
//     }
//   })
// }

// meuGameDeDados();


// function meuGameDeDadosLaco() {
//   let terminar = false;
//   //Ajuste da logica
//   // Readline sync
//   do {
//     rl.question('Digite 4,6,8,10,12 ou 20 para rolar o dado: ', (resposta) => {
//       const dice = parseInt(resposta);
//       if (!isNaN(dice)) {
//         rolarDado(dice);
//       } else {
//         terminar = true;
//         rl.close();
//       }
//     });
//   } while (!terminar);
// }

// meuGameDeDadosLaco();

const numeros = [1, 2, 3, 4, 6];
const meusValores = [];

// [1] - Trazer mais exemplos 

//Varri os itens e atribui a um novo espaço de memoria
// Não fiz isso em tempo de intereção
let table = '<table>'
numeros.forEach(function (numero) {
  //condicao
  table += '<tr>';
  meusValores.push('<td>' + numero * 2 + '</td>')
  table += '</tr>';
})
table += '</table>';

// Mapei valores e então multipliquei por 2
const valoresDuplicados = numeros.map(valores => valores * 2)

console.log(meusValores);
console.log(valoresDuplicados);