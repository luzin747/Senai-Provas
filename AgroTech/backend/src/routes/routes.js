const express = require('express');

const router = express.Router();

const Usuarios = require('../controller/usuario')

router.post('/usuario', Usuarios.create);
router.get('/usuario', Usuarios.read);
router.get('/usuario/:id_usuario', Usuarios.readOne);
router.delete('/usuario/:id_usuario', Usuarios.deletar);
router.put('/usuario', Usuarios.update);



module.exports = router;