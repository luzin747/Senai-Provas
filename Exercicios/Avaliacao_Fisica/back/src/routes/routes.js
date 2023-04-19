const express = require('express');

const router = express.Router();

const Paciente = require('../controllers/paciente')

router.post('/paciente', Paciente.create);
router.get('/paciente', Paciente.read);
router.put('/paciente/:id_paciente', Paciente.update);
router.delete('/paciente/:id_paciente', Paciente.deletar);

module.exports = router;
