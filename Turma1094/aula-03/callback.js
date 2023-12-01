const fs = require('fs'); // FyleSystem Sistema de arquivos
const path = require('path'); // Caminhos

function lerArquivoCallback(arquivo, callback) {
  const caminhoDoArquivo = path.join(__dirname, arquivo);
  fs.readFile(caminhoDoArquivo, 'utf8', (err, data) => {// Buffer
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  })
}

function outraFuncao(err, data) {
  if (err) {
    console.error('Erro ao ler o arquivo: ', err)
  }
  console.log('Countedo do arquivo: ', data)
}

lerArquivoCallback('arquivo.txt', outraFuncao);