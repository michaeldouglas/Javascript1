const numeros = [1, 2, 3, 4, 5];

const numerosPares = numeros
  .filter((numero) => numero % 2 === 0)
  .map((exibir) => `O par é: ${exibir}`);

console.log(numerosPares);