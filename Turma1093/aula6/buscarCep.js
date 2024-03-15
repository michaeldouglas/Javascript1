const axios = require("axios");

/**
 * URL base para consulta de cep
 * @type {string}
 */
const viaCepUrl = "https://viacep.com.br/ws/";

/**
 * Função para obter informações de um cep.
 * @param {string} cep - O cep a ser consultado.
 * @throws {Error} Caso ocorra uma falha na requisição
 * @returns {Promise<void>} Retorna uma Promise vazia.
 */
async function getCEPInfo(cep) {
  try {
    const response = await axios.get(`${viaCepUrl}${cep}/json`);

    if (response.status === 200) {
      displayCEPInfo(response.data);
    }
  } catch (error) {
    throw new Error("Erro ao obter informações do CEP: Falha na requisição");
  }
}

/**
 * Função para exibir informações de um objeto de cep
 * @param {object} cepData - O objeto de cep a ser exibido
 */
function displayCEPInfo(cepData) {
  const cepInfo = {
    cep: cepData.cep,
    logradouro: cepData.logradouro,
    complemento: cepData.complemento,
    bairro: cepData.bairro,
    cidade: cepData.localidade,
    estado: cepData.uf,
  };

  console.log(JSON.stringify(cepInfo, null, 2));
}

module.exports = getCEPInfo;
