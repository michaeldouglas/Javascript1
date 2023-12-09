enum DiasDaSemana {
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
  Domingo
}

const dia: DiasDaSemana = DiasDaSemana.Sexta;

console.log("Hoje é: ", DiasDaSemana[dia]);