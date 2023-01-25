const toCreate = (model) => {
    return `INSERT INTO pedidos VALUES (DEFAULT, '${model.cliente}', '${model.endereco}', '${model.bairro}', '${model.cidade}' , '${model.produto}', '${model.quantidade}', '${model.preco}', '${model.dia}', '${model.hora_pedido}', '${model.hora_entrega}', '${model.hora_fim}', '${model.entregador}')`;
}
const toReadAll = () => {
    return "SELECT * FROM pedidos ORDER BY id_pedido asc";
}

const toRead = (model) => {
    return `SELECT * FROM pedidos WHERE id_pedido = ${model.id_pedido}`;
}

const toDel = (model) => {
    return `DELETE FROM pedidos WHERE id_pedido = ${model.id_pedido}`;
}

const toUpdate = (model) => {
    return `UPDATE pedidos SET id_pedido = ${model.id_pedido} cliente = '${model.cliente}', endereco = '${model.endereco}', produto = '${model.produto}', dia = '${model.dia}' , hora_pedido = '${model.hora_pedido}', hora_entrega = '${model.hora_entrega}' , hora_fim = '${model.hora_fim}', entregador = '${model.entregador}'`;
}

module.exports = {
    toReadAll,
    toCreate,
    toUpdate,
    toRead,
    toDel

}