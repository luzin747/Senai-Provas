const express = require('express');
const router = express.Router();

const funcionarios = require('../controller/funcionariosController')

router.post('/create', funcionarios.create)
router.get('/read', funcionarios.read)
// router.get('/read/:id_aluno', funcionarios.readById)
router.put('/update', funcionarios.update)
router.delete('/delete', funcionarios.deletar)

module.exports = router