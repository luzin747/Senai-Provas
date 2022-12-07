const create = (model) => {
    return `insert into funcionarios values(default,'${model.nome}','${model.especialidade}')`
}

const read = () => {
    return 'select * from funcionarios'
}
// const readById = (id) => {
//     return `select * from vw_alunos where id_aluno = ${id}`
// }

const update = (model) => {
    return `update funcionarios set nome = '${model.nome}', especialidade = '${model.especialidade}' where id_func = ${model.id_func}`
}

const deletar = (model) => {
    return `delete from funcionarios where id_func = ${model.id_func}`
}

module.exports = {
    create,
    read,
    // readById,
    update,
    deletar
}