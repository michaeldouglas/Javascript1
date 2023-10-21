const validarNomeDaPessoa = require('./validadores/validarNome');
const validarIdade = require('./validadores/validarIdade');

const pessoa = {
  nome: ' ',
  idade: 17,
  estado: ' ',
  cidade: 'dsadsa'
};



const validarEstado = estado =>
  estado.length > 0 && estado != '' && estado != ' ';

const validarCidade = cidade => {
  if (cidade != null)
    if (cidade.length > 0)
      if (cidade != '')
        if (cidade != ' ')
          return true

  return false;
}

const validarPessoa = pessoa => {
  return [
    {
      valido: validarNomeDaPessoa(pessoa.nome),
      message: 'Nome Invalido',
      errorCode: 300
    },
    {
      valido: validarIdade(pessoa.idade),
      message: 'Idade Invalida',
      errorCode: 301
    },
    {
      valido: validarEstado(pessoa.estado),
      message: 'Estado Invalido',
      errorCode: 302
    },
    {
      valido: validarCidade(pessoa.cidade),
      message: 'Cidade Invalida',
      errorCode: 303
    }
  ]
}

const validador = validarPessoa(pessoa);

const resultado = validador.filter(values => values.valido === false)
  .map(
    values => ({
      errorCode: values.errorCode,
      message: values.message
    })
  );

if (Boolean(resultado.length)) {
  console.error('Dados da pessoa invalidos');
  console.table(resultado);
} else {
  console.log('Dados validos');
}

