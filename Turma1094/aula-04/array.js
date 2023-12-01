// const arr = [
//   [[1, 2], 6, 7, 8],
//   [1, 2, 3, 4],
//   [9, 10, 11, 12]
// ];

//const lastValue = arr.pop();
//const PrimeiroValor = arr.shift();
//console.log(arr);
//console.log(lastValue);
//console.log(PrimeiroValor);

//const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const res = arr2.splice(-2, 2);

//console.log(res);
//console.log(arr2);

//const arr3 = new Array(10);
//arr3.fill({ id: 1 });
//console.log(arr3);

//const arr4 = [1, 2, 3, 4];
//const arr5 = [5, 6, 7, 8];
//const arr6 = arr4.concat(arr5);
//console.log(arr6);

//const arr7 = [1, 2, 3, 4];
//arr7.reverse();
//console.log(arr7);

const arr8 = [5, 7, 3, 2, 1, 9, 8, 6];
arr8.sort();
// console.log(arr8);

// const arr9 = [2, "Alberto", "Carla", 3, "Bruna", "Amanda", 1];
// arr9.sort();
// console.log(arr9);

// Ordem crescente
// const numeros = [3, 1, 5, 2, 4];
// const sortearNumerosa = numeros.sort(
//   ((a, b) => b - a)
// );

// console.log(sortearNumerosa);

// const produtos = [
//   { name: 'produto1_teste', price: 800 },
//   { name: 'produto2', price: 600 },
//   { name: 'produto3_1', price: 300 },
// ];

// const OrdenarPeloPreco = produtos.sort(
//   (a, b) => a.name.length - b.name.length,
// );

// console.log(OrdenarPeloPreco);

// Resolva com um for a matriz e exiba o resultado:
// 1 2 3 4 5 6 7 8 9 10 11 12
const matriz = [
  [1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11, 12]
];

console.table(matriz);

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}