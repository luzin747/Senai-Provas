const express = require('express');
const cors = require('cors');

const funcionarios = require('./src/routes/funcionarios')
const ordemServico = require('./src/routes/ordemServico')

const app = express()
    .use(express.json())
    .use(cors())
    .use('/funcionarios', funcionarios)
    .use('/ordemServico', ordemServico)


app.listen(3000, () => {
    console.log('Servidor em execução na porta 3000');
});