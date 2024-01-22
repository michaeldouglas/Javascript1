class dsadsa {}

function GeraErro(mensagem: string): never {
  console.error({
    Application: "dsada",
    dataDoErro: Date.now(),
    mensagem,
  });

  throw new Error(mensagem); //Furei contexto
}

try {
  const GeraErroNever: never = GeraErro("ALGO FORA DE CONTEXTO");
} catch (error) {
  console.error(error);
}
