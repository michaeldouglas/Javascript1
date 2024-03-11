const Estados = require("../Estados");

describe("[Suite_Testes_1093_Projeto][Estados] Suíte de testes módulo (estados)", () => {
  test("Deve retornar true para um estado válido exemplo: São Paulo", () => {
    //@TODO: Objeto e repetição
    const estado = new Estados("São Paulo"); // SP // SP São Paulo // SP - São Paulo
    expect(estado.valido).toBe(true);
  });

  test("Deve retornar false para uma string vazio '' ", () => {
    const estado = new Estados("");
    expect(estado.valido).toBe(false);
  });

  test("Deve retornar false para um espaço em branco ' ' ", () => {
    const estado = new Estados(" ");
    expect(estado.valido).toBe(false);
  });

  test("Deve retornar true para um estado inexistes por exemplo: SÃO PEDRO", () => {
    const estado = new Estados("SÃO PEDRO");
    expect(estado.valido).toBe(true);
  });

  test("Deve retornar false para um número de estado por exemplo 12:", () => {
    const estado = new Estados(12);
    expect(estado.valido).toBe(false);
  });

  test("Deve retornar true em casos onde o estado possui caracteres especiais por exemplo: São Paulo !@#$%&%#%$%", () => {
    const estado = new Estados("São Paulo !@#$%&%#%$%");
    expect(estado.valido).toBe(true);
  });

  test("Deve retornar true para um estado que contenha números junto ao estado: São Paulo - 2024", () => {
    const estado = new Estados("São Paulo - 2024");
    expect(estado.valido).toBe(true);
  });

  test("Deve retornar true para emojis por exemplo: São Paulo 😀😐😐😐😐😐😐😐", () => {
    const estado = new Estados("São Paulo 😀 😐😐😐😐😐😐😐");
    expect(estado.valido).toBe(true);
  });

  test("Deve retornar true para um estado com traços e espaços por exemplo: Minas Gerais - MG ", () => {
    const estado = new Estados("Minas Gerais - MG ");
    expect(estado.valido).toBe(true);
  });

  test("Deve retornar false para um estado com apenas um espaço ' ' ", () => {
    const estado = new Estados(" ");
    expect(estado.valido).toBe(false);
  });

  test("Deve retornar false para um objeto exemplo {estado: 'São Paulo'}", () => {
    const estado = new Estados({ estado: "São Paulo" });
    expect(estado.valido).toBe(false);
  });
});
