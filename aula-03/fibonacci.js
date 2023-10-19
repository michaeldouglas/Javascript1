const ObterResultado = (recebeOMeuArray, key) =>
  recebeOMeuArray[key].resultado.join(', ')

const ObterData = (recebeOMeuArray, key) =>
  recebeOMeuArray[key].dataDeGeracao

const fibonnaci = (n) => {
  const resultado = [0, 1];
  const teste = [];

  for (let i = 2; i <= n; i++) {
    const a = resultado[i - 1];
    const b = resultado[i - 2];
    resultado.push(a + b);
  }

  teste.push({ resultado });

  return [{ resultado }, { dataDeGeracao: '2023-11-11' }]
}

const Result = (valor1, valor2) => ({
  fibonnaci: valor1, data: valor2
}
);

const n = 10;
const sequenciaFibonnacci = fibonnaci(n);
console.log(`Os primeiros ${n} números da sequência de Fibonnaci:`);
console.log(Result(ObterResultado(sequenciaFibonnacci, 0),
  ObterData(sequenciaFibonnacci, 1)));