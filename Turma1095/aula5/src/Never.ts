function GerarErro(mensagem: string): never {
  console.error({
    Application: 'Nerver.ts',
    DateDoErro: Date.now(),
    mensagem
  })
  throw new Error(mensagem);// ELE GERA CONTEXTO
}

try {
  const NaoEVerdadeiro: never = GerarErro('Algo deu errado');
} catch (error) {
  console.log('Ops algo deu errado');
}
