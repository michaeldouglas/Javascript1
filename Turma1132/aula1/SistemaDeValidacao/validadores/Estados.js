
class Estados {
  constructor(estado) {
    this.valido = estado.length > 0 && estado != '' && estado != ' ';
  }
  valido() {
    return this.valido;
  }
}

module.exports = Estados;