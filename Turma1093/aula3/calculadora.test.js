const { somar, subtrair } = require("./calculadora");

test("Eu estou testando a soma por exemplo 1 + 2 = 3", () => {
  expect(somar(1, 2)).toBe(3);
  expect(somar(2, 2)).not.toBe(3);
});

test("Eu estou testando a subtracao", () => {
  expect(subtrair(3, 2)).toBe(1);
  expect(subtrair(2, 2)).not.toBe(3);
});

/**
 * Teste de borda (Boundary Testing)
 */
test("Teste de soma com números negativos", () => {
  expect(somar(-1, 2)).toBe(1);
});

test("Teste de subtração com o primeiro número menor que o segundo", () => {
  expect(subtrair(1, 2)).toBe(-1);
});

/*
Teste de tipo (Type testing) para o retorno
*/
test("Teste se somar retorna um tipo (number)", () => {
  expect(typeof somar(1, 2)).toBe("number");
});

test("Teste comportamento com a entrada inválida", () => {
  expect(() => somar("a", 2)).toThrow();
});

test("Teste assíncrono da soma", async () => {
  const resultado = await somarAsync(1, 2);
  expect(resultado).toBe(3);
});

async function somarAsync(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

const funcaoExterna = jest.fn(() => 10);

test("Teste com função externa mockada", () => {
  expect(somar(1, 2)).toBe(3);
  expect(funcaoExterna).not.toHaveBeenCalled();
});

// Testes parametrizados
const casosTesteSubtrair = [
  { a: 5, b: 3, resultadoEsperado: 2 },
  { a: 10, b: 7, resultadoEsperado: 3 },
  { a: -1, b: -3, resultadoEsperado: 2 },
];

test.each(casosTesteSubtrair)(
  "Teste parametrizado de subtração",
  ({ a, b, resultadoEsperado }) => {
    expect(subtrair(a, b)).toBe(resultadoEsperado);
  }
);

// Perfomance algoritmo !!!!!!!!!! -> latencia 3 segundos
// 1 segundo ******** MULTIPLACAR -> FIBRA -> 3G ou 4G
// SLA -> Atendimento
test("Teste de desempenho da soma", () => {
  const start = performance.now();
  // pipe
  for (let i = 0; i < 1000000; i++) {
    somar(1, 2);
  }
  // pipe
  const end = performance.now();
  const tempoTotal = end - start;
  expect(tempoTotal).toBeLessThan(10);
});

// Teste de integração
const funcaoIntegrada = jest.fn(() => 5);

test("Teste de integração com outra função ou regra do sistema", () => {
  expect(somar(1, funcaoIntegrada())).toBe(6);
});
