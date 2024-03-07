const Idades = require("../Idades");

describe("[Suite_Testes_1093_Projeto][Idades] Suíte de testes módulo (idades)", () => {
  test("Deve retornar true para idade maior que 18", () => {
    expect(Idades(19)).toBe(true);
    expect(Idades(25)).toBe(true);
  });

  test("Deve retornar false para idade menor que 18", () => {
    expect(Idades(17)).toBe(false); // Quantos anos de idade e meses -> FrontEnd, Designer, UXs etc
    expect(Idades(15)).toBe(false);
    //expect(Idades(-15)).toBe(false);
    //expect(Idades("17 + 1")).toBe(false);
  });

  test("Deve retornar true para idade igual a 18", () => {
    expect(Idades(18)).toBe(true);
  });
});
