const diaEnsolarado = true;
const euTenhoCarro = true;
let ondeEuVou = diaEnsolarado && euTenhoCarro ? true : false;
// let ondeEuVouSemTernario = if (diaEnsolarado) 'praia' else 'campo';

// condicao ? valor_se_verdadeiro : valor_se_falso

const idade = 18;
const status = idade >= 18 ? "Adulto" : "Menor de idade";
console.log(status);

// ?? nullish coalescing operator
// null ou undefined
const valor1 = " ";
const valor2 = "Teste nullish";

const resultado = valor1 ?? valor2;
console.log(resultado);