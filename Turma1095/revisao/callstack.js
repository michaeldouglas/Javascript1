function FuncaoA() {
  console.log('Função A Iniciada');
  FuncaoB();
  console.log('Função A Encerrada');
}

function FuncaoB() {
  console.log('Função B Iniciada');
  FuncaoC();
  console.log('Função B Encerrada');
}

function FuncaoC() {
  console.log('Função C Iniciada');
  console.log('Função C Encerrada');
}

FuncaoA();