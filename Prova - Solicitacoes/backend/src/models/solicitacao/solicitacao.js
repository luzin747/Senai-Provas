const toReadAll = () => {
    return "SELECT * FROM vw_solicitacoes";
}
function toDeleteAll(req, res) {
    return `DELETE FROM Departamentos WHERE Cod_Depto = '${req.body.n_sol}'`;

};

const toCreate = (model) => {
    return `CALL solicita_um_item(${model.n_sol} ,${model.depto} ,${model.func} ,${model.prod} ,${model.qtd} ,${model.total})`;
}

module.exports = {
    toCreate,
    toReadAll,
    toDeleteAll
}