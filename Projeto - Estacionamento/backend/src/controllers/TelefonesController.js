const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "renasparking"
});

function listarTelefones(req, res) {
    let query = "SELECT * FROM telefones";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function listaTelefone(req, res) {
    let query = `SELECT * FROM telefones WHERE id_cli = '${req.params.id_cli}'`;
    
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
};

function cadastrarTelefone(req, res) {
    let query = `INSERT INTO telefones VALUES ('${req.body.id_cli}', '${req.body.tipo_tel}', '${req.body.telefone}')`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function excluirTelefone(req, res) {
    let query = `DELETE FROM telefones WHERE id_cli = '${req.body.id_cli}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};                                      

function editarTelefone(req, res){
    let query = `UPDATE telefones SET id_cli = '${req.body.id_cli}',tipo_tel = '${req.body.tipo_tel}', telefone = '${req.body.telefone}' WHERE id_cli =  '${req.body.id_cli}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    listarTelefones,
    listaTelefone,
    cadastrarTelefone,
    excluirTelefone,
    editarTelefone
}