const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "renasparking"
});

function listarEstacionamentosPagos(req, res) {
    let query = "SELECT * FROM mensalidades";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function excluirMensalidade(req, res) {
    let query = `DELETE FROM mensalidades WHERE mensal_id = '${req.body.mensal_id}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function registraMensalidade(req, res) {  
    let query = `INSERT INTO mensalidades VALUES(default, '${req.body.mensalista}', '${req.body.cpf_mensalista}','${req.body.placa_car}', '${req.body.categoria_car}','${req.body.data_ent}','${req.body.hora_ent}','${req.body.hora_sai}', '${req.body.valor_tot}', '${req.body.forma_pagamento}', '${req.body.stats_mensal}')`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
}

module.exports = {
    listarEstacionamentosPagos,
    registraMensalidade,
    excluirMensalidade
}