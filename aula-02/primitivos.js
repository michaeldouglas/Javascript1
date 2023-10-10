// Tipos primitivos
let teste = undefined; // 
let teste2 = null; // nullable / void
let teste3 = ""; // string sem nada
let teste4 = " "; // string com um espaço

// operacoes com bit: bitwase
let boleano1 = true;
let bolean2 = false;

let boleano3 = 1;
let boleano4 = 0;

// string
let nome = ''; // string literal; // PERFOMAR MAIS
let nome2 = "";

// NaN -> Que não é um número
let inteiro = 1;
let decimal = 0.5; //decimal, double, float [precicao]

// Nan 
//let naoNumero = nan;
naoNumero = "infinity" * 5; // NaN
let numero1 = 1;
let numero2 = "infinity";
let infinito1 = Infinity; // Positivo
let infinito2 = -Infinity; // Negativo

// Complexos
// Acordar objeto
// Carro objeto
// Pessoa objeto
// Livro objeto
// Busca de cep mas como eu enchergo isso como um objeto?
let carro = {
  numeroDoRenavam: 'dsadasdas',
  enderecoDoCarro: {
    estado: 'RJ',
    cidade: 'Rio',
    cep: '32131',
    bairro: '21312',
    outra: [
      { teste: 1 },
      { teste: 2 },
      { teste: 3 },
    ]
  }

  //AGREGACAO NESSE OBJETO?
}

// Lista de dados
// Array Simples
// Array de objetos ou definido por um objeto

let arraySimples = [1, 2, 3, 4, 5, 6]; // Array simples
let arrayObjeto = new Array(1, 2, 3, 4, 5, 6);// Objeto
let ArrayObject = [
  carro,
  carro,
  carro,
  carro,
]; // Array de unica dimensao

//console.log(ArrayObject[0].enderecoDoCarro.outra[1].teste);

let diasDaSeman = ['Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta'];

// Percorrer o Array
// Perfomance
// E possivel aplicar uma logica no i e determinar o valor inicial, dentro do for?
// Quando usar o for em uma lista?
// for (let i = 0; i < 4; i++) {
//   console.log(ArrayObject[i]);
// }

// Funcao fazer algo baseado em uma função
let segundaFuncao = (value1, value2) => value1 + value2;
let primeiraFuncao = function (value1, value2) {
  return {
    calcular: segundaFuncao(value1, value2)
  }
};


let result = primeiraFuncao(1, 2);
console.log(result);