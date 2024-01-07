const diaEnsolarado = null;
const euTenhCarro = true;

let ondeEuVou = diaEnsolarado && euTenhCarro ? 'Praia' : 'Ficar em casa';
// let ondeEuVouSemTernario = if (diaEnsolarado && euTenhCarro) 'dsa' else 'dsadsa'
// console.log(ondeEuVou)

const valor1 = `Teste nullish valor1`;
const valor2 = null;

const resultado = valor1 ?? valor2;
console.log(resultado);