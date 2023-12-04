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

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// function rolarDados(lados) {
//   return Math.floor(Math.random() * lados) + 1;
// }

// function MeuGameDeDados() {
//   rl.question('Digite 4, 6, 8, 10, 12 ou 20 para rolar o dado: ', (resposta) => {
//     const dice = parseInt(resposta);

//     if (!isNaN(dice)) {
//       let numeroDaSorte;

//       do {
//         numeroDaSorte = rolarDados(dice);
//         console.log(`Você rolou um ${numeroDaSorte}`);

//         if (dice === numeroDaSorte) {
//           console.log('👾👾👾👾 Parabéns, você ganhou! 👾👾👾👾');
//         } else {
//           console.log('Tente novamente')
//         }
//       } while (dice !== numeroDaSorte);

//       rl.close();
//     } else {
//       console.log('Por favor, digite um numero valido');
//       rl.close();
//     }
//   })
// }

// MeuGameDeDados();

function rolarDados(dice) {
  if (dice == 4 || dice == 6 || dice == 8 || dice == 10 || dice == 12
    || dice == 13 || dice == 14 || dice == 20) {
    const numero = randomizarNumeros(1, dice);

    console.log('Rolagem dos dados ' + numero);
    return numero
  } else {
    console.log('Numero invalido!');
  }
}

function MeuGameDeDados() {
  rl.question('Digite 4, 6, 8, 10, 12 ou 20 para rolar o dado: ', (resposta) => {
    const dice = parseInt(resposta);

    if (!isNaN(dice)) {
      const numeroDaSorte = rolarDados(dice);

      if (dice === numeroDaSorte) {
        console.log(`👾👾👾👾 Parabens você ganhou!!!! 👾👾👾👾👾`);
        rl.close();
      } else {
        MeuGameDeDados();
      }
    } else {
      rl.close();
    }
  });
}

MeuGameDeDados();