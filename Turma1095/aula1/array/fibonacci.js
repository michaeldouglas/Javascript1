const fibonaaci = (n) => {
  const resultado = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = resultado[i - 1];
    const b = resultado[i - 2];
    resultado.push(a + b);
  }
  return resultado;
}

const n = 10;
const sequenciaFibonacci = fibonaaci(n);
console.log(`Os primeiros ${n} números da sequência`);
console.log(sequenciaFibonacci.join(', '));
