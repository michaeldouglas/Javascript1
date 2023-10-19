// Alocação de memória 
let estouNaMemoria = [];

// Garbage Collector - Limpeza 
// Vazamento de memoria 
for (var i = 0; i < 1000; i++) {
  estouNaMemoria.push(i);
}

delete estouNaMemoria;

for (var i = 0; i < 1000; i++) {
  estouNaMemoria.push(i);
}

delete estouNaMemoria;

for (var i = 0; i < 1000; i++) {
  estouNaMemoria.push(i);
}

delete estouNaMemoria;

for (var i = 0; i < 1000; i++) {
  estouNaMemoria.push(i);
}

delete estouNaMemoria;

for (var i = 0; i < 1000; i++) {
  estouNaMemoria.push(i);
}

delete estouNaMemoria;

for (var i = 0; i < 1000; i++) {
  estouNaMemoria.push(i);
}

delete estouNaMemoria;

for (var i = 0; i < 1000; i++) {
  estouNaMemoria.push(i);
}

delete estouNaMemoria;

for (var i = 0; i < 1000; i++) {
  estouNaMemoria.push(i);
}


/*

*/

// Coletor de lixo ele vai tentar limpar

console.log(estouNaMemoria);