const conDB = require('../dao/dbForum');
const entregador = require('../models/entregador')

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

const login = (req, res) => {
    console.log(req.body)
    conDB.query(Usuarios.toLogin(req.body), (err, result) => {
        if (err == null) {
            console.log(result);
            let data = {
                "email": result[0].email,
                "senha":result[0].senha,
            }

            jwt.sign(data, process.env.KEY, { expiresIn: '20m' }, (erro, token) => {
                if (erro == null) {
                    data["token"] = token
                    res.status(200).json(data).end();
                } else {

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
    listarUmEntregador
}