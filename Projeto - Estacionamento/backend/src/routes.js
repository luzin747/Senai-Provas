const express = require('express');

const router = express.Router();

const ClienteController = require("./controllers/clientes.Controller");
const CarroController = require("./controllers/carrosController");
const EstcacionamentoController = require("./controllers/estacionarController");
const MensalidadesController = require("./controllers/mensalidadesController");
const VagasController = require("./controllers/vagasController");
const TelefoneController = require("./controllers/telefonesController");



router.get("/clientes/vw_clientes", ClienteController.listarClientes);
router.get("/clientes/:cpf", ClienteController.listaCliente);
router.get("/infoClientes", ClienteController.pegaInformacoes);
router.get("/infoClientes/:cpf", ClienteController.pegaInformacoesDeUmCli);
router.post("/clientes", ClienteController.cadastrarCliente);
router.delete("/clientes", ClienteController.excluirCliente);
router.put("/clientes", ClienteController.editarCliente);

router.get("/carros", CarroController.listarCarros);
router.get("/carros/:placa", CarroController.listaCarro);
router.post("/carros", CarroController.cadastrarCarro);
router.delete("/carros", CarroController.excluirCarro);
router.put("/carros", CarroController.editarCarro);

router.get("/vw_estacionar", EstcacionamentoController.listarEstacionamentos);
router.get("/registro_ticket/:ticket_id", EstcacionamentoController.listaEstcacionamento);
router.post("/registro_ticket", EstcacionamentoController.cadastrarEstacionamento);
router.delete("/registro_ticket", EstcacionamentoController.excluirEstacionamento);
router.put("/registro_ticket", EstcacionamentoController.editarEstacionamento);

router.get("/mensalidades", MensalidadesController.listarEstacionamentosPagos);
router.post("/mensalidades", MensalidadesController.registraMensalidade);
router.delete("/mensalidades", MensalidadesController.excluirMensalidade);

router.get("/vagas", VagasController.listarVagas);
router.get("/vagas/:numero_vaga", VagasController.listaVaga);
router.post("/vagas", VagasController.cadastrarVaga);
router.delete("/vagas", VagasController.excluirVaga);
router.put("/vagas", VagasController.editarVaga);

router.get("/telefones", TelefoneController.listarTelefones);
router.get("/telefones/:cliente_id", TelefoneController.listaTelefone);

module.exports = router;