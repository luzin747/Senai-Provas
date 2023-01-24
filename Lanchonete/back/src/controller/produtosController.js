const conDB = require('../dao/dbForum');
const produtos = require('../models/produtos')

const listarProdutos = (req, res) => {
    conDB.query(produtos.toReadAll(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};

module.exports = {
    listarProdutos
}