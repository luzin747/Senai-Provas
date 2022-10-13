const conDB = require('../models/departamentos/departamentoDAO');

function cadastrarDepto(req, res) {
    let query = `INSERT INTO Departamentos VALUES ('${req.body.Cod_Depto}', '${req.body.Nome_Depto}')`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function deletarDepto(req, res) {
    let query = `DELETE FROM Departamentos WHERE Cod_Depto = '${req.body.Cod_Depto}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
}
module.exports = {
    cadastrarDepto,
    deletarDepto
}