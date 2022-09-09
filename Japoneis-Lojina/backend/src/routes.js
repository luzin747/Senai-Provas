const Express = require('express');

const router = Express.Router();

const lancamentosController = require("./lancamentosController");

router.get("/loja", lancamentosController.preencherTabela2);
router.post("/loja", lancamentosController.cadastrarLancamento);

module.exports = router;