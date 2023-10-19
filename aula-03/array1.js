// Apontou 
const array = [5, 4, 3.5, 4, "string", null, undefined, 'ultimo'];

const VEMALGUEM = [1, 2, 3, 4, 5];

array[0] = 'FALAR QUE MUDOU';
array[8] = 'TEMOS O 8';
array[8] = VEMALGUEM;
//console.log(array);

// Lista dentro de uma lista
// Tamanho da minha estrutura de dados nao é 9
// COISAS DE MERCADO: É um desse que, quebra tudo em procução
// Interface do front - Nao vai carregar ou a lista esta grande d+
// console.log(array.length);

const arr = [11];
arr.push(10);

arr.push('NAO TER DUVIDA');
arr.unshift('PRIMEIRO');
arr.unshift([
  { id: 1, outro: arr[1] },
  {
    id: 1, outro: [{
      id: 2,
      name: 'teste'
    }]
  }
]);
//console.log(arr);

// Como resolver isso com 2 funções

// BUSCAR EM UMA LISTA
const Buscar = [1, 8, 9, 8, 10, 3, 10, 5, 10];
const primeiroItem = Buscar.indexOf(10);
const UltimoItem = Buscar.lastIndexOf(10);
//console.log(Buscar[UltimoItem]);
//console.log(UltimoItem);
// Traga um indice baseado em uma busca e exibda o resultado
// console.log(Buscar.indexOf(11) > -1);
console.log(Buscar.includes(11));