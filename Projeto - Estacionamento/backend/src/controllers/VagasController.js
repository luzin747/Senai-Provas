const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "renasparking"
});

function listarVagas(req, res) {
    let query = "SELECT * FROM vagas";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function listaVaga(req, res) {
    let query = `SELECT * FROM vagas WHERE numero_vaga = '${req.params.numero_vaga}'`;
    
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
};

function cadastrarVaga(req, res) {
    let query = `INSERT INTO vagas VALUES ('${req.body.numero_vaga}', '${req.body.categoria_vaga}', '${req.body.valor_h}','${req.body.status_vaga}')`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function excluirVaga(req, res) {
    let query = `DELETE FROM vagas WHERE numero_vaga = '${req.body.numero_vaga}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};                                      

function editarVaga(req, res){
    let query = `UPDATE vagas SET categoria_vaga = '${req.body.categoria_vaga}', valor_h = '${req.body.valor_h}', status_vaga = '${req.body.status_vaga}' WHERE numero_vaga = '${req.body.numero_vaga}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    listarVagas,
    listaVaga,
    cadastrarVaga,
    excluirVaga,
    editarVaga
}