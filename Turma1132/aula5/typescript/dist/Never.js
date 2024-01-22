"use strict";
function GeraErro(mensagem) {
    console.error({
        Application: "dsada",
        dataDoErro: Date.now(),
        mensagem,
    });
    throw new Error(mensagem); //Furei contexto
}
try {
    const GeraErroNever = GeraErro("ALGO FORA DE CONTEXTO");
}
catch (error) {
    console.error(error);
}
