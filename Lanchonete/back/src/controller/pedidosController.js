const conDB = require('../dao/dbForum');
const pedidos = require('../models/pedidos')

function listarPedidos(req, res) {
    conDB.query(pedidos.toReadAll(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};
function listarUmPedido(req, res) {
    conDB.query(pedidos.toRead(req.params), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

function cadPedido(req, res) {
    conDB.query(pedidos.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

const editarPedido = (req, res) => {
    conDB.query(pedidos.toUpdate(req.body), (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(500).json(err).end();
        }
    });
};

const excluirPedido = (req, res) => {
    conDB.query(pedidos.toDel(req.params), (err, result) => {
        if(err == null) {
            res.json("Deletado").status(200).end();
        }else {
            res.json(result).status(400).end();
        }
    });
};


module.exports = {
    listarPedidos,
    listarUmPedido,
    cadPedido,
    editarPedido,
    excluirPedido
}