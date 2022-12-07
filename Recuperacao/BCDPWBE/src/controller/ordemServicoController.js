const modelos = require('../model/ordermServicoModel')
// const comp = require('../models/compositeModel')
const con = require('../dao/rec')


const create = (req, res) => {
    con.query(modelos.create(req.body), (err, result) => {
        if (err == null) {
            res.status(201).end()
        } else {
            if (err.sqlState == 23000) {
                res.status(406).json(err).end()
            } else {
                res.status(500).json(err).end()
            }
        }
    })
}
const read = (req, res) => {
    con.query(modelos.read(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        } else {
            res.status(400).json(err)
        }
    })
}

// const readById = (req, res) => {
//     con.query(modelos.readById(req.params.id_aluno), (err, result) => {
//         if (err == null) {
//             res.status(200).json(comp.funcionariosComposite(result)).end()
//         } else {
//             res.status(400).json(err)
//         }
//     })
// }

const update = (req, res) => {
    con.query(modelos.update(req.body), (err, result) => {
        if (err == null) {
            res.status(202).json(result).end()
        } else {
            res.status(400).json(err)
        }
    })
}
const deletar = (req, res) => {
    con.query(modelos.deletar(req.body), (err, result) => {
        if (err == null) {
            res.status(204).json(result).end()
        } else {
            res.status(400).json(err)
        }
    })
}

module.exports = {
    create,
    read,
    // readById,
    update,
    deletar
}