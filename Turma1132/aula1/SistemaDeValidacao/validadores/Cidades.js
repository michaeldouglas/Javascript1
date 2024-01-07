const Cidades = cidade => {
  if (cidade != null)
    if (cidade.length > 0)
      if (cidade != ' ')
        return true

  return false;
}

module.exports = Cidades;