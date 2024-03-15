const Cidades = require("../Cidades");

describe("Cidades", () => {
  test("Deve retornar true para uma cidade válida ", () => {
    expect(Cidades("São Paulo")).toBe(true);
  });

  test("Deve retornar false para um string vazia", () => {
    expect(Cidades("")).toBe(false);
  });

  test("Deve retornar false para null", () => {
    expect(Cidades(null)).toBe(false);
  });

  test("Deve retornar false para um especo em branco '' ", () => {
    expect(Cidades(" ")).toBe(false);
  });

  test("Deve retornar true para uma cidade inexistente", () => {
    expect(Cidades("cidade inexistente")).toBe(true);
  });

  test("Deve retornar false para números", () => {
    expect(Cidades(123)).toBe(false);
  });

  test("Deve retornar true para uma cidade com caracteres especiais", () => {
    expect(Cidades("São José Dos Campos !@#$%%$%$")).toBe(true);
  });

  test("Deve retornar true para uma cidade com números", () => {
    expect(Cidades("Rio De Janeiro 2024")).toBe(true);
  });

  test("Deve retornar true para uma cidade com traços e espaços", () => {
    expect(Cidades("Nova York - EUA")).toBe(true);
  });

  test("Deve retornar false para uma cidade com apenas um espaco", () => {
    expect(Cidades(" ")).toBe(false);
  });

  test("Deve retornar false para um objeto", () => {
    expect(Cidades({ cidade: "São Paulo" })).toBe(false);
  });
});
