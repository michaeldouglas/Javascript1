let diaDaSemana = new Array();
let diaDaSemana2 = new Array();
let diaDaSemana3 = new Array(
  'Segunda', 'Terca', 'Quarta'
);


console.log(typeof diaDaSemana);
console.log(typeof diaDaSemana2);
console.log(typeof diaDaSemana3);

let outraForma = ['Segunda', 'Terca', 'Quarta'];
console.log(typeof outraForma);

console.log(diaDaSemana3.length);
console.log(outraForma.length);

// map - Mapear objeto
// foreach - interando apenas!
// for - Estou iterando e controlando a pilha?
// while - Condição e iteração
// doWhile - Condição mais controalda e iteração?

// mapear
// 

for (let i = 0; i < outraForma.length; i++) {
  console.log(outraForma[i]);
}