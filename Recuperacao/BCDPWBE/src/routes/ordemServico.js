const express = require('express');
const router = express.Router();

const ordemServico = require('../controller/ordemServicoController')

router.post('/create', ordemServico.create)
router.get('/read', ordemServico.read)
// router.get('/read/:id_aluno', ordemServico.readById)
router.put('/update', ordemServico.update)
router.delete('/delete', ordemServico.deletar)

module.exports = router