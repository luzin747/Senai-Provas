const listarAlunos = () => {
    return `SELECT * FROM alunos`;

};

const listarAlunosbyId = (model) => {
    return `SELECT * FROM alunos where id_aluno = '${model.id_aluno}'`;

};

const cadastrarAlunos = (model) => {
    return `INSERT INTO alunos VALUES (default, '${model.nome}', '${model.sobrenome}')`

};

const deletarAlunos = (model) => {
    return `DELETE FROM alunos WHERE id_aluno = '${model.id_aluno}'`;
}

const listarVwConcursados = () => {
    return `SELECT * FROM vw_cursados`;

};

module.exports = {
    listarAlunos,
    listarAlunosbyId,
    cadastrarAlunos,
    deletarAlunos,
    listarVwConcursados
}