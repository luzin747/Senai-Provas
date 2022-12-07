const create = (model) => {
    return `insert into ordem_servico values(default,'${model.id_func}','${model.descricao}', '${model.custo}')`
}

const read = () => {
    return 'select * from ordem_servico'
}
// const readById = (id) => {
//     return `select * from vw_alunos where id_aluno = ${id}`
// }

const update = (model) => {
    return `update ordem_servico set id_func = ${model.id_func}, descricao = '${model.descricao}', custo = ${model.custo} where id_os = ${model.id_os}`
}

const deletar = (model) => {
    return `delete from ordem_servico where id_os = ${model.id_os}`
}

module.exports = {
    create,
    read,
    // readById,
    update,
    deletar
}