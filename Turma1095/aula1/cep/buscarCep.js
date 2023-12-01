const axios = require('axios');

const viaCepUrl = 'https://viacep.com.br/ws/01001000/json/';

async function getCEPInfo() {
  try {
    const response = await axios.get(viaCepUrl);
    const cepData = response.data;

    console.log('Informacoes do cep: ');
    console.log(`CEP: ${cepData.cep}`);
    console.log(`logradouro: ${cepData.logradouro}`);

  } catch (err) {
    console.error('Erro ao obter', error.message)
  }
}

getCEPInfo();