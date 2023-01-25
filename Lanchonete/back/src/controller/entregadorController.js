const conDB = require('../dao/dbForum');
const entregador = require('../models/entregador')
require('dotenv').config();
function listarEntregadores(req, res) {
    conDB.query(entregador.toReadAll(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};
function listarUmEntregador(req, res) {
    conDB.query(entregador.toRead(req.params), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

const jwt = require('jsonwebtoken');
const login = (req, res) => {
    console.log(req.body)
    conDB.query(entregador.toLogin(req.body), (err, result) => {
        if (err == null) {
            console.log(result);
            let data = {
                "id": result[0].id,
                "nome":result[0].nome,
                "email": result[0].email,
                "senha":result[0].senha,
                "veiculo":result[0].veiculo
            }

            jwt.sign(data, process.env.KEY, { expiresIn: '20m' }, (erro, token) => {
                if (erro == null) {
                    data["token"] = token
                    res.status(200).json(data).end();
                } else {
                    console.log(erro)
                    res.status(404).json(err).end();
                }
            });
        }else{
            res.status(400).json(err).end()
        }
    })
}


module.exports = {
    listarEntregadores,
    listarUmEntregador,
    login
}