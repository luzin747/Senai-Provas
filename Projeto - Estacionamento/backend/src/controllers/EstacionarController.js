const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "renasparking"
});
function listarEstacionamentospagos(req, res) {
    let query = "SELECT * FROM ticket_pagos";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function listarEstacionamentos(req, res) {
    let query = "SELECT * FROM vw_estacionar";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function listaEstcacionamento(req, res) {
    let query = `SELECT * FROM registro_ticket WHERE ticket_id = '${req.params.ticket_id}'`;
    
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
};

function cadastrarEstacionamento(req, res) {  
    let query = `INSERT INTO registro_ticket VALUES (DEFAULT, '${req.body.number_vaga}', '${req.body.placa_car}', '${req.body.cpf_cli}', '${req.body.h_entrada}', 
    '${req.body.h_entrada}', '${req.body.h_saida}', '${req.body.valor_final}', '${req.body.forma_pagamento}', '${req.body.status_pag}')`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function excluirEstacionamento(req, res) {
    let query = `DELETE FROM registro_estac WHERE ticket_id = '${req.body.ticket_id}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function editarEstacionamento(req, res){
    let query = `UPDATE registro_ticket SET number_vaga = '${req.body.number_vaga}', placa_car = '${req.body.placa_car}', cpf_cli = '${req.body.cpf_cli}', 
    h_entrada = '${req.body.h_entrada}', h_saida = '${req.body.h_saida}', valor_final = '${req.body.valor_final}', forma_pagamento = '${req.body.forma_pagamento}', 
    status_pag = '${req.body.status_pag}' WHERE ticket_id = '${req.body.ticket_id}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    listarEstacionamentos,
    listaEstcacionamento,
    listarEstacionamentospagos,
    cadastrarEstacionamento,
    excluirEstacionamento,
    editarEstacionamento
}