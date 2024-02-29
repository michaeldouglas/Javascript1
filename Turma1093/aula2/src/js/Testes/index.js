// @TODO: Testar a falta de pessoa!
import { Pessoa } from "./../Validacoes/Pessoa";

const assertsEquals = (value, equals) => {
  return value == equals;
};

const testNome = () => {
  console.log("****** INICIANDO OS TESTES DE PESSOA ******");
  console.group();
  // @TODO: Testar do método de nome!
  console.warn(
    "\x1b[31m",
    `Verificando se Paulo é um nome inválido: ${assertsEquals(
      false,
      Pessoa.nome("Paulo")
    )}`
  );
  console.group();
  console.warn(
    "\x1b[31m",
    `Verificando se Ana é um nome inválido: ${assertsEquals(
      false,
      Pessoa.nome("Ana")
    )}`
  );
  console.log(
    "\x1b[36m%s\x1b[0m",
    `Verificando se Fernando é um nome válido: ${assertsEquals(
      true,
      Pessoa.nome("Fernando ")
    )}`
  );
  console.groupEnd();
  console.log(
    "\x1b[36m%s\x1b[0m",
    `Verificando se Maria Silvânia é um nome válido: ${assertsEquals(
      true,
      Pessoa.nome("Maria Silvânia")
    )}`
  );
  console.groupEnd();
  console.log("***** TESTE FINALIZADO *****");
};

testNome();
