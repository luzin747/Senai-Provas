const Produto = require('../models/produtos/produtos');
const con = require('../models/produtos/produtosDAO');

const  cadastrarProduto = (req, res) => {
    con.query(Produto.toCreate(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}
function listarProdutosNome(req, res) {
    let query = `SELECT  (Cod_Depto),(Nome_Depto),(Nome_Produto)  FROM vw_solicitacoes WHERE Nome_Produto = '${req.params.Nome_Produto}'`;;
    con.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
};


const listarProdutos = (req, res) => {
    con.query(Produto.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    cadastrarProduto,
    listarProdutosNome,
    listarProdutos
}