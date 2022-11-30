const conDB = require('../dao/connection');
const Aluno = require('../models/Aluno')

function listarAlunos(req, res) {
    conDB.query(Aluno.listarAlunos(), (err, result) => {
        
        if (err == null) {
            res.json(result).end();
        } else {
            res.json(err).end();
        }
    })
};
function listarAlunosporId(req, res) {
    conDB.query(Aluno.listarAlunosbyId(), (err, result) => {
        
        if (err == null) {
            res.json(result).end();
        } else {
            res.json(err).end();
        }
    })
};

function cadastrarAlunos(req, res) {
    conDB.query(Aluno.cadastrarAlunos(), (err, result) => {
        
        if (err == null) {
            res.json(result).end();
        } else {
            res.json(err).end();
        }
    })
};
function listarConcursados(req, res) {
    conDB.query(Aluno.listarVwConcursados(), (err, result) => {
        
        if (err == null) {
            res.json(result).end();
        } else {
            res.json(err).end();
        }
    })
};

function deletarAlunos(req, res) {
    conDB.query(Aluno.deletarAlunos(), (err, result) => {
        
        if (err == null) {
            res.json(result).end();
        } else {
            res.json(err).end();
        }
    })
};

// function toRead(req, res) {
//     conDB.query(Aluno.listarVwConcursados(), (err, result) => {
        
//         if (err == null) {
//             res.json(result).end();
//         } else {
//             res.json(err).end();
//         }
//     })
// };


// function criarAluno(req, res) {
//     conDB.query(Aluno.criarAluno(), (err, result) => {
//         if (err == null) {
//             res.json(result).status(200).end();
//         } else {
//             res.json(err).status(400).end();
//         }
//     })
// };

// function deletarAluno(req, res) {
//     conDB.query(Aluno.deletarAluno(), (err, result) => {
//         if (err == null) {
//             res.json(result).status(200).end();
//         } else {
//             res.json(err).status(400).end();
//         }
//     })
// };


module.exports = {
    listarAlunos,
    listarAlunosporId,
    cadastrarAlunos,
    deletarAlunos,
    listarConcursados

    // criarAluno,
    // deletarAluno
}