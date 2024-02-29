// Sprint 1 -> 15 dias
class ValidarPessoa {
  nome(nome) {
    let re =
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+[ ][A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]*$/;
    return re.test(nome);
  }

  // Sprint 2 -> 15 dias
  msg(msg = "Dados inválidos") {
    alert(msg);
    return false;
  }
}

const Pessoa = new ValidarPessoa();

let validarFormulario = (el) => {
  let nome = Pessoa.nome(document.cadastro.nome.value);

  return !nome
    ? Pessoa.msg(
        "Nome inválido. Você deve digitar seu nome e sobrenome \n\nPor exemplo: Fernando Almeida"
      )
    : nome;
};

export { Pessoa, validarFormulario };
