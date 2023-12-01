function FuncaoA() {
  // Logs
  console.log('Função A Iniciada');
  FuncaoB();
  console.log('Função A Encerrada');
}

function FuncaoB() {
  console.log('Função B Iniciada');
  FunacaoC();
  console.log('Função B Encerrada');
}

function FunacaoC() {
  console.log('Função C Iniciada');
  console.log('Função C Encerrada');
}

FuncaoA();