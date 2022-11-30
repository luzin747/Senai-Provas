const express = require('express');
const router = express.Router();

const Aluno = require("../controller/alunosController")

router.get("/alunos", Aluno.listarAlunos);
router.get("/alunos/:id_aluno", Aluno.listarAlunosporId);
router.post("/alunos", Aluno.cadastrarAlunos);
router.delete("/alunos/:id_aluno", Aluno.deletarAlunos);

router.get("/vw_concursados", Aluno.listarConcursados);



module.exports = router


