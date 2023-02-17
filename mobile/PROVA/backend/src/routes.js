const Express = require('express');
const router = Express.Router();

const tarefaController = require("./controller/tarefaController");


router.get('/Tarefas/', tarefaController.listarTarefas)
router.post('/Tarefas/', tarefaController.cadTarefa)
router.put('/Tarefas/', tarefaController.editarTarefa)
router.delete('/Tarefas/:id_task', tarefaController.excluirTarefa)

module.exports = router;