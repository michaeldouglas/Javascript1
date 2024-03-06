const v1 = (nome) => {
  if (nome.trim() === "") return false;

  // ^[Michael Douglas]+$
  const regex = /^[A-Za-z\s]+$/;
  return regex.test(nome);
};

const defaultValidar = (nome) => nome.length > 0 && nome != "" && nome != " ";

// #Teste inicia aqui
const Nomes = (nome, versaoDoValidador = "v1") => {
  let validarDoNome = false;

  switch (versaoDoValidador) {
    case "v1":
      validarDoNome = () => v1(nome); // React nao vai assustar!!!!
      break;
    default:
      validarDoNome = () => defaultValidar(nome);
      break;
  }

  return validarDoNome();
};

module.exports = Nomes;
