// Valor absolutos

const valor1 = Math.abs(-5.5);
// console.log(valor1); 

const valorNegativo = -5;
const valorPositivo = 10;

const resultadoNegativo = Math.abs(valorNegativo);
const resultaPositivo = Math.abs(valorPositivo);

// console.log('Valor absoluto de ' + valorNegativo + ' é ' +
//   resultadoNegativo);
// console.log('Valor absoluto de ' + valorPositivo + ' é ' +
//   resultaPositivo);

const valor3 = 5.3;
const valor4 = 9.8;
const valor5 = -6.5555555555555;

const teto1 = Math.ceil(valor3);
const teto2 = Math.ceil(valor4);
const teto3 = Math.ceil(valor5);

// console.log("Math.ceil(" + valor3 + ") = " + teto1);
// console.log("Math.ceil(" + valor4 + ") = " + teto2);
// console.log("Math.ceil(" + valor5 + ") = " + teto3);

const valor6 = 42;
const valor7 = 2;
const valor8 = 10;
const valor9 = 92;

const maiorNumero = Math.max(valor6, valor7, valor8, valor9);
const menorNumero = Math.min(valor6, valor7, valor8, valor9);

// console.log(maiorNumero);
// console.log(menorNumero);

// Potencia e raiz
let base = 2;
let expoente = 3;

let resultadoPOW = Math.pow(base, expoente);

// console.log(base + " elevado a " + expoente + " é igual a " + resultadoPOW)

let qualEONumero = 16;

let raizQuadrada = Math.sqrt(qualEONumero);

// console.log('A raiz ..' + qualEONumero + ' é ' + raizQuadrada);

// Randomico
const valorRandomico = Math.random();
// console.log(valorRandomico);

// Funcoes trignometricas e PI
const valorDePI = Math.PI;
// console.log(valorDePI);

// Seno de angulo em radianos
let qualEAnguloQVoceQUerCalcular = 30;
let AnguloRadiano = qualEAnguloQVoceQUerCalcular * (Math.PI / 180);

//
let senoDoAngulo = Math.sin(AnguloRadiano);
// console.log("O seno do angulo de " + qualEAnguloQVoceQUerCalcular + " graus é " + senoDoAngulo)

let anguloGraus = 45;
let anguloRadianos = anguloGraus + (Math.PI / 180);

let tangenteDoAngulo = Math.tan(anguloRadianos);

console.log("A tangente do angulo de " + anguloGraus + " graus é " + tangenteDoAngulo);