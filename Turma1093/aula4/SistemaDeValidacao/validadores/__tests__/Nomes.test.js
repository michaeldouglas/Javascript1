const Nomes = require("../Nomes");

describe("[Suite_Testes_1093_Projeto][Nomes] Suíte de testes módulo (nome)", () => {
  // Testes da versão 1
  describe("[VERSAO_1] Regra de negócios v1", () => {
    test("Deve retornar true para um nome válido por exemplo: João Silva", () => {
      expect(Nomes("João Silva")).toBe(false);
    });
  });
});
