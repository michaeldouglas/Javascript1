const Estados = require("../Estados");

describe("[Suite_Testes_1093_Projeto][Estados] Suíte de testes módulo (estados)", () => {
  test("Deve retornar true para um estado válido exemplo: São Paulo", () => {
    const estado = new Estados("São Paulo"); // SP // SP São Paulo // SP - São Paulo
    expect(estado.valido).toBe(true);
  });
});
