function somar(a, b) {
  if (typeof a === "string" || typeof b === "string")
    throw new Error("Erro no tipo");

  return a + b;
}

function subtrair(a, b) {
  //@TODO: Ajustar para a condição
  return a - b;
}

exports.somar = somar;
exports.subtrair = subtrair;
