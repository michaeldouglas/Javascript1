const Nomes = require("../Nomes");

describe("[Suite_Testes_1093_Projeto][Nomes] Suíte de testes módulo (nome)", () => {
  // Testes da versão 1
  describe("[VERSAO_1] Regra de negócios v1", () => {
    test("Deve retornar false para um nome que não está válido por exemplo: João Silva", () => {
      expect(Nomes("João Silva")).toBe(false);
    });

    test("Deve retornar false para um nome vazio por exemplo: '' ", () => {
      expect(Nomes("")).toBe(false);
    });

    test("Deve retornar false para um nome com apenas espaços em branco por exemplo: '    ' ", () => {
      expect(Nomes("   ")).toBe(false);
    });

    test("Deve retornar false para um nome com caracteres especiais por exemplo: teste@teste.com.br", () => {
      expect(Nomes("teste@teste.com.br")).toBe(false);
    });
  });
});
