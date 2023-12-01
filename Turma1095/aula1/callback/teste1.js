// file: teste.txt
// UNIX, POSIX, WINDOWS C:/kdsakjhdsajkh / / \
// Pasta: teste/arquivo.txt

const fs = require('fs');
const path = require('path');

function lerArquivoCallback(arquivo, callback) {
  const caminhoDoArquivo = path.join(__dirname, arquivo);
  fs.readFile(caminhoDoArquivo, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  })
}

lerArquivoCallback('arquivo2.txt', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo: ', err);
    return;
  }

  console.log('Conteudo do arquivo: ', data)
})