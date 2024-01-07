const fs = require('fs');
const path = require('path');

function lerArquivoCallback(arquivo, callback) {
  const caminhoDoArquivo = path.join(__dirname, arquivo);

  return new Promise((resolve, reject) => {
    fs.readFile(caminhoDoArquivo, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    })
  })
}

async function letArquivoAsync() {
  try {
    const conteudo = await lerArquivoCallback('arquivo.txt');
    console.log('Conteudo do arquivo: ', conteudo)
  } catch (erro) {
    console.error('Erro ao ler o arquivo', erro);
  }
}

letArquivoAsync();