const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
// const alunos = require("./alunos.js");

const routes = require('./routes.js');

const app = express();
app.use(cors());
app.use(routes)

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});
