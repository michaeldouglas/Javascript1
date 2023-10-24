const v1 = (nome) => {
  if (nome.trim() === '')
    return false;

  const regex = /ˆ[A-Za-z\s]+$/;
  return regex.test(nome);
}

const defaultValidar = (nome) => nome.length > 0 && nome != '' && nome != ' '


const Nomes = (nome, versaoDoValidador = 'v1') => {
  let ValidarDoNome = false;

  switch (versaoDoValidador) {
    case 'v1':
      ValidarDoNome = () => v1(nome)
      break;
    default:
      ValidarDoNome = () => defaultValidar(nome)
      break;
  }

  return ValidarDoNome();
};

module.exports = Nomes