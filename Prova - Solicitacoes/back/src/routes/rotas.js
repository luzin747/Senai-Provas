const express = require('express');
const router = express.Router();

const Produtos = require("../controllers/produtosController");
const Solicitacao = require("../controllers/solicitacaoController");
const Departamento = require("../controllers/departamentosController");

router.post("/solicitacoes/vw_solicitacoes/Umitem", Solicitacao.criarSolicitacao);
router.get("/solicitacoes/vw_solicitacoes/todas", Solicitacao.listarSolicitacoes);

router.post("/solicitacoes/produtos", Produtos.cadastrarProduto);
router.get("/solicitacoes/produtos", Produtos.listarProdutos);
router.get("/solicitacoes/vw_solicitacoes/:Nome_Produto", Produtos.listarProdutosNome);


router.post("/solicitacoes/departamentos", Departamento.cadastrarDepto);
router.delete("/solicitacoes/departamentos", Departamento.deletarDepto);


module.exports = router;