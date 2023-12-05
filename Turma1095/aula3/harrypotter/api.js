const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { DateTime } = require('luxon');

const harryUrl = 'https://hp-api.onrender.com/api/characters';
const itemPerPage = 6;

async function getPersonanges(page = 1) {
  try {
    const response = await axios.get(harryUrl);
    const charactersData = response.data;

    const filteredData = charactersData
      .filter(values => values.dateOfBirth != null)
      .map(values => ({
        nome: values.name,
        idade: DateTime.fromFormat(values.dateOfBirth, 'dd-mm-yyyy').toFormat('dd/MM/yyyy'),
        foto: values.image || 'https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png'
      }));

    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / itemPerPage);

    if (page < 1 || page > totalPages) {
      return { data: [], total: totalItems, currentPage: page, totalPages }
    }

    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    const nextPage = page < totalPages ? page + 1 : null;

    return { data: paginatedData, total: totalItems, currentPage: page, totalPages, nextPage }

  } catch (error) {
    console.error('Erro');
    throw error;
  }
}

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.get('/api', async (req, res) => {
  const page = parseInt(req.query.page) || 1;

  try {
    const result = await getPersonanges(page);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao obter as informacoes'
    })
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Estou rodando em: http://localhost:3000');
})