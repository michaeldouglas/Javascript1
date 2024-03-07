const Nomes = require("../Nomes");

describe("[Suite_Testes_1093_Projeto][Nomes] Suíte de testes módulo (nome)", () => {
  // Testes do default
  describe("[DEFAULT] Regra de negócios default", () => {
    test("Deve retornar true para um nome válido por exemplo: Maria Sousa", () => {
      expect(Nomes("Maria Sousa", "default")).toBe(true);
    });

    test("Deve retornar false para um nome vazio por exemplo: ''", () => {
      expect(Nomes("", "default")).toBe(false);
    });

    test("Devo retornar true para um nome com apenas espaços em branco '    ' ", () => {
      expect(Nomes("    ", "default")).toBe(true);
    });

    test("Deve retornar true para um nome com caracteres especiais por exemplo: Carlos Oliviera@filho.com.br", () => {
      expect(Nomes("Carlos Oliviera@filho.com.br", "default")).toBe(true);
    });
  });

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
