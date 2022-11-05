const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "renasparking"
});

function listarTelefones(req, res) {
    let query = "SELECT * FROM vw_telefones ";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function listaTelefone(req, res) {
    let query = `SELECT * FROM vw_telefones WHERE cliente_id = '${req.params.cliente_id}'`;
    
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(400).json(err).end();
        }
    })
};


module.exports = {
    listarTelefones,
    listaTelefone
}