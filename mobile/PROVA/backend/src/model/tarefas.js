const toCreate = (model) => {
    return `INSERT INTO lista VALUES (DEFAULT, '${model.descricao}', '${model.horario_inicial}', '${model.horario_final}', '${model.status}')`;
}
const toReadAll = () => {
    return "SELECT * FROM lista ORDER BY id_task asc";
}

const toRead = (model) => {
    return `SELECT * FROM lista WHERE id_task = ${model.id_task}`;
}

// const toReadOpen = (model) => {
//     return `SELECT * FROM lista WHERE status = ${model.status}`;
// }

// const toReadClose = (model) => {
//     return `SELECT * FROM lista WHERE status = ${model.status}`;
// }


// const toReadCancel = (model) => {
//     return `SELECT * FROM lista WHERE status = ${model.status}`;
// }


const toDel = (model) => {
    return `DELETE FROM lista WHERE id_task = ${model.id_task}`;
}

const toUpdate = (model) => {
    return `UPDATE lista SET horario_final = '${model.horario_final}', status = '${model.status}' where id_task = ${model.id_task}`;
}

module.exports = {
    toReadAll,
    toCreate,
    toUpdate,
    toDel

}