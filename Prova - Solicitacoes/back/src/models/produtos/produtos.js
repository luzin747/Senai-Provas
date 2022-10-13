const toReadAll = () => {
    return "SELECT * FROM produtos";
}



const toCreate = (model) => {
    return `INSERT INTO produtos VALUES ('${model.Cod_Produto}','${model.Nome_produto}')`;
}

module.exports = {
    toCreate,
    toReadAll
}