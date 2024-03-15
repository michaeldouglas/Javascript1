const ValidarPessoas = require("../../ValidarPessoas");

describe("ValidarPessoas", () => {
  test("Deve retornar valido para um objeto pessoa", () => {
    //@TODO: AQUI precisa de ajuste da aula do professor Marcos!!!!
    const pessoa = {
      nome: "João Silva",
      idade: 25,
      estado: "São Paulo",
      cidade: "São Paulo",
    };

    const resultado = ValidarPessoas(pessoa);

    expect(resultado).toEqual([
      { valido: false, message: "Nome Invalido", errorCode: 300 },
      { valido: true, message: "Idade Invalida", errorCode: 301 },
      { valido: true, message: "Estado Invalido", errorCode: 302 },
      { valido: true, message: "Cidade Invalida", errorCode: 303 },
    ]);
  });

  test("Deve retornar informacoes de validação para um objeto que o nome esta vazio '' ", () => {
    //@TODO: AQUI precisa de ajuste da aula do professor Marcos!!!!
    const pessoa = {
      nome: "",
      idade: 15,
      estado: "São Paulo",
      cidade: "São Paulo",
    };

    const resultado = ValidarPessoas(pessoa);

    expect(resultado).toEqual([
      { valido: false, message: "Nome Invalido", errorCode: 300 },
      { valido: false, message: "Idade Invalida", errorCode: 301 },
      { valido: true, message: "Estado Invalido", errorCode: 302 },
      { valido: true, message: "Cidade Invalida", errorCode: 303 },
    ]);
  });
});
