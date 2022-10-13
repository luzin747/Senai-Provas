const Item = require('../models/solicitacao/solicitacao');
const con = require('../models/solicitacao/solicitacaoDAO');

const  criarSolicitacao = (req, res) => {
    con.query(Item.toCreate(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)//Se o ni já está cadastrado
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarSolicitacoes = (req, res) => {
    con.query(Item.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    criarSolicitacao,
    listarSolicitacoes
}