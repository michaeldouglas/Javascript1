// Generators


function* gerarNumeros() {
  yield 1; // REQUISICAO HTTP 
  yield 2;
  yield 3;
}

const numeros = gerarNumeros();

// console.log(numeros.next().value);
// console.log(numeros.next().value);
// console.log(numeros.next().value);

// Iterators
const nomes = ['joao', 'Paulo', 'Maria', 'Ana'];
const iterator = nomes[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

async function* Chamada() {
  yield await fetch('https://viacep.com.br/ws/01001000/json/');
  yield await fetch('https://viacep.com.br/ws/01001000/json/');
  yield await fetch('https://viacep.com.br/ws/01001000/json/');
}

(async () => {
  for await (const response of Chamada()) {
    const data = await response.json();
    console.log(data);
  }
})();