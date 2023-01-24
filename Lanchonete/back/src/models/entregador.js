const toReadAll = () => {
    return "SELECT * FROM entregador";
    }
    
const toRead = (model) => {
    return `SELECT * FROM entregador WHERE id_entregador = ${model.id_entregador}`
}
    
const toLogin = (model) => {
    return `SELECT * FROM entregador WHERE email = '${model.email}' AND senha = '${model.senha}'`;
}

module.exports = {
    toReadAll,
    toRead
}