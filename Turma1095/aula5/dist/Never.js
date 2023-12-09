"use strict";
function GerarErro(mensagem) {
    console.error({
        Application: 'Nerver.ts',
        DateDoErro: Date.now(),
        mensagem
    });
    throw new Error(mensagem); // ELE GERA CONTEXTO
}
try {
    const NaoEVerdadeiro = GerarErro('Algo deu errado');
}
catch (error) {
    console.log('Ops algo deu errado');
}
