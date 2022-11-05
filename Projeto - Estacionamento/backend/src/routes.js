const express = require('express');

const router = express.Router();

const ClienteController = require("./controllers/Clientes.Controller");
const CarroController = require("./controllers/CarrosController");
const EstcacionamentoController = require("./controllers/EstacionarController");
const VagasController = require("./controllers/VagasController");
const TelefoneController = require("./controllers/TelefonesController");



router.get("/clientes/vw_clientes", ClienteController.listarClientes);
router.get("/clientes/:cpf", ClienteController.listaCliente);
router.post("/clientes", ClienteController.cadastrarCliente);
router.delete("/clientes", ClienteController.excluirCliente);
router.put("/clientes", ClienteController.editarCliente);

router.get("/carros", CarroController.listarCarros);
router.get("/carros/:placa", CarroController.listaCarro);
router.post("/carros", CarroController.cadastrarCarro);
router.delete("/carros", CarroController.excluirCarro);
router.put("/carros", CarroController.editarCarro);

router.get("/estacionamento_pagos", EstcacionamentoController.listarEstacionamentospagos);
router.get("/vw_estacionar", EstcacionamentoController.listarEstacionamentos);
router.get("/vw_estacionar/:vagas", EstcacionamentoController.listaEstcacionamento);
router.post("/registro_estac", EstcacionamentoController.cadastrarEstacionamento);
router.delete("/registro_estac", EstcacionamentoController.excluirEstacionamento);
router.put("/registro_estac", EstcacionamentoController.editarEstacionamento);

router.get("/vagas", VagasController.listarVagas);
router.get("/vagas/:id_vaga", VagasController.listaVaga);
router.post("/vagas", VagasController.cadastrarVaga);
router.delete("/vagas", VagasController.excluirVaga);
router.put("/vagas", VagasController.editarVaga);

router.get("/telefones", TelefoneController.listarTelefones);
router.get("/telefones/:cliente_id", TelefoneController.listaTelefone);




module.exports = router;