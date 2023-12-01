const fs = require('fs'); // FyleSystem Sistema de arquivos
const path = require('path'); // Caminhos

const result = await fs.readFileSync(path, 'utf8');