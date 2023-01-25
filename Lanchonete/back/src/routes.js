const Express = require('express');
const router = Express.Router();

const entregadorController = require("./controller/entregadorController");
const pedidosController = require("./controller/pedidosController");
const produtosController = require("./controller/produtosController");

router.get('/Entregador/', entregadorController.listarEntregadores)
router.get('/Entregador/id/:id_entregador', entregadorController.listarUmEntregador)

router.get('/Pedidos/', pedidosController.listarPedidos)
router.get('/Pedidos/id/:id_pedido', pedidosController.listarUmPedido)
router.post('/Pedidos/', pedidosController.cadPedido)
router.put('/Pedidos/', pedidosController.editarPedido)
router.delete('/Pedidos/idDel/:id_pedido', pedidosController.excluirPedido)

router.get('/Produtos/', produtosController.listarProdutos)

router.post('/login', entregadorController.login)

module.exports = router;