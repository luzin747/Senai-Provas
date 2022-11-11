const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "renasparking"
});

function listarCarros(req, res) {
    let query = "SELECT * FROM carros";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function listaCarro(req, res) {
    let query = `SELECT * FROM carros WHERE placa = '${req.params.placa}'`;
    
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
};

function cadastrarCarro(req, res) {
    let query = `INSERT INTO carros VALUES (DEFAULT , '${req.body.placa}','${req.body.cpf_cliente}' ,'${req.body.marca}','${req.body.modelo}' , '${req.body.categoria}')`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function excluirCarro(req, res) {
    let query = `DELETE FROM carros WHERE placa = '${req.body.placa}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};                                      

function editarCarro(req, res){
    let query = `UPDATE carros SET  placa = '${req.body.placa}', cpf_cliente = '${req.body.cpf_cliente}', marca = '${req.body.marca}', modelo = '${req.body.modelo}', categoria = '${req.body.categoria}' WHERE id_carro = '${req.body.id_carro}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    listarCarros,
    listaCarro,
    cadastrarCarro,
    excluirCarro,
    editarCarro
}