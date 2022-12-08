
const osComposite = (array) => {

    let ordemServicoList = []

    array.forEach(e => {
        let curso = {}
        curso.aluno = {}
        curso.curso = {}

        curso.aluno['id'] = e.id_aluno
        curso.aluno['nome'] = e.nome
        curso.aluno['nascimento'] = e.nascimento

        curso.curso['id'] = e.id_curso
        curso.curso['curso'] = e.curso
        curso.curso['duracao'] = e.duracao

        curso['data'] = e.data

        cursosList.push(curso);
        
    });

    return ordemServicoList
   
    
}


module.exports = {
    osComposite
}