const conDB = require('../dao/daTask');
const tarefas = require('../model/tarefas')

function listarTarefas(req, res) {
    conDB.query(tarefas.toReadAll(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};
// function listarUmPedido(req, res) {
//     conDB.query(pedidos.toRead(req.params), (err, result) => {
//         if (err == null) {
//             res.json(result).status(200).end();
//         } else {
//             res.json(err).status(400).end();
//         }
//     })
// };

function cadTarefa(req, res) {
    conDB.query(tarefas.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

const editarTarefa = (req, res) => {
    conDB.query(tarefas.toUpdate(req.body), (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(500).json(err).end();
        }
    });
};

const excluirTarefa = (req, res) => {
    conDB.query(tarefas.toDel(req.params), (err, result) => {
        if(err == null) {
            res.json("Deletado").status(200).end();
        }else {
            res.json(result).status(400).end();
        }
    });
};




module.exports = {
    listarTarefas,
    cadTarefa,
    editarTarefa,
    excluirTarefa,
}