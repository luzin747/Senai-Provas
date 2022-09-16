const Express = require('express');

const router = Express.Router();

const lancamentosController = require("./controllers/lancamentosController");

router.get("/loja", lancamentosController.preencherTabela2);
router.post("/loja", lancamentosController.cadastrarLancamento);
router.delete("/loja", lancamentosController.excluirLancamento);

module.exports = router;