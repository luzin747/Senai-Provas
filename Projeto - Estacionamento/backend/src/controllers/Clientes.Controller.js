const mysql = require('mysql');


const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "renasparking"
});

function listarClientes(req, res) {
    let query = "SELECT * FROM vw_clientes ";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function listaCliente(req, res) {
    let query = `SELECT * FROM vw_clientes WHERE cpf = '${req.params.cpf}'`;
    
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(400).json(err).end();
        }
    })
};

function cadastrarCliente(req, res) {
    let query = `INSERT INTO clientes VALUES (DEFAULT, '${req.body.nome}', '${req.body.sobrenome}', '${req.body.data_nasci}', '${req.body.cpf}', '${req.body.rg}','${req.body.tipo_tel}','${req.body.numero_tel}','${req.body.email}','${req.body.cep}', '${req.body.endereco}','${req.body.numero}', '${req.body.bairro}','${req.body.cidade}', '${req.body.uf}', '${req.body.complemento}','${req.body.status_cli}')`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function excluirCliente(req, res) {
    let query = `DELETE FROM clientes WHERE cpf = '${req.body.cpf}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function editarCliente(req, res){
    let query = `UPDATE clientes SET nome = '${req.body.nome}', sobrenome = '${req.body.sobrenome}', data_nasci = '${req.body.data_nasci}', cpf =  '${req.body.cpf}', 
    rg = '${req.body.rg}',email = '${req.body.email}',cep = '${req.body.cep}', endereco = '${req.body.endereco}', numero = '${req.body.numero}', bairro = '${req.body.bairro}', cidade = '${req.body.cidade}', 
    uf =  '${req.body.uf}', complemento = '${req.body.complemento}', status_cli = '${req.body.status_cli}' WHERE cpf = '${req.body.cpf}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    listarClientes,
    listaCliente,
    cadastrarCliente,
    excluirCliente,
    editarCliente
}