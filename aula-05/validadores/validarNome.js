const validarNomeDaPessoa = nome =>
  nome.length > 0 && nome != '' && nome != ' ';

module.exports = validarNomeDaPessoa