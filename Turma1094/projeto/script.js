class CEPService {
  constructor() {
    this.endpoint = "https://viacep.com.br/ws/";
  }

  async buscarCep(cep) {
    try {
      const response = await fetch(`${this.endpoint}${cep}/json/`);

      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('CEP não encontrado');
      }

    } catch (error) {
      console.error(error);
      throw new Error('Erro ao buscar o cep');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const cepInput = document.getElementById('cepInput');
  const buscarCEPButton = document.getElementById('buscarCEP');
  const resultado = document.querySelector('#resultado tbody');
  const mapa = document.getElementById('mapa');

  const cepService = new CEPService();

  buscarCEPButton.addEventListener('click', async () => {
    const cep = cepInput.value.trim();
    resultado.innerHTML = ""; //Limpar a div 
    mapa.innerHTML = "";


    try {
      buscarCEPButton.classList.add('bg-blue-300', 'cursor-not-allowed');
      buscarCEPButton.textContent = 'Buscando...';

      const data = await cepService.buscarCep(cep);

      const row = resultado.insertRow(0);
      row.insertCell(0).textContent = data.cep;
      row.insertCell(1).textContent = data.logradouro;
      row.insertCell(2).textContent = data.bairro;
      row.insertCell(3).textContent = data.localidade;
      row.insertCell(4).textContent = data.uf;

      // Adiciona classes zebradas e faz espaçamento na tabela
      const rows = resultado.querySelectorAll('tr');
      rows.forEach((row, index) => {
        row.classList.toggle('bg-gray-100', index % 2 === 0);
        row.classList.toggle('bg-white', index % 2 === 0);
        row.classList.add('py-2');
      });

      buscarCEPButton.classList.remove('bg-blue-300', 'cursor-not-allowed');
      buscarCEPButton.textContent = 'Buscar CEP';

      // Use o google maps
      const mapaIframe = document.createElement('iframe');
      mapaIframe.src = `https://geosampa.prefeitura.sp.gov.br/PaginasPublicas/_SBC.aspx`;
      mapaIframe.width = "100%";
      mapaIframe.height = "300";
      mapaIframe.frameborder = "0";
      mapaIframe.style.border = "0";
      mapa.appendChild(mapaIframe);

    } catch (error) {
      console.error(error);
    }
  })
})