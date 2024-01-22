// Dependencias do projeto
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {DateTime} = require('luxon');

// Configuracoes do projeto
const harryUrl = 'https://hp-api.onrender.com/api/characters';
const itemPerPage = 6;
const defaultError = {
    message: 'Not Found',
    code: 301
}

// Tratativa da API do Harry - paginacao
async function obterPersonagens(page = 1) {
    try {
        const dadosDeResposta = await axios.get(harryUrl);
        const personagesRetornados = dadosDeResposta.data;

        const dadosFiltrados = personagesRetornados
        /* .filter(values => values.dateOfBirth != null) */
        .map(values => ({
            nome: values.name,
            idade:  values.dateOfBirth != null ? DateTime.fromFormat(values.dateOfBirth, 'dd-mm-yyyy').toFormat('dd/MM/yyyy') : 'Nada a exibir',
            foto: values.image || 'https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png' 
        }));

        const totalItems = dadosFiltrados.length;
        const totalPages = Math.ceil(totalItems / itemPerPage);

        if(page < 1 || page > totalPages) {
            return { data: [], total: totalItems, currentPage: page, totalPages }
        }

        const startIndex = (page - 1) * itemPerPage;
        const endIndex = startIndex + itemPerPage;
        const dadosPaginados = dadosFiltrados.slice(startIndex, endIndex);

        const nextPage = page < totalPages ? page + 1 : null;

        return {data: dadosPaginados, total: totalItems, currentPage: page, totalPages, nextPage}
    } catch (error) {
        console.error(defaultError)
        throw error;
    }
}

// Start do BFF e devolucao dos dados
const app = express();
app.use(bodyParser.json());

// Configuracao do cors
app.use(cors());

app.get('/api', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    try {
        const resultado = await obterPersonagens(page);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao obter os dados!'
        })
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000, () => {
    console.log('Estou rodando em: http://localhost:3000')
})