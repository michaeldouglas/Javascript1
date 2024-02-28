class Estados {
  constructor(estado) {
    // Stack / erros / linear
    this.valido = estado.length > 0 && estado != "" && estado != " ";
  }
  valido() {
    return this.valido;
  }
}

module.exports = Estados;
