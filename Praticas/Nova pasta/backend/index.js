const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
// const alunos = require("./alunos.js");

const app = express();
app.use(cors());

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'locadora'
});

app.get('/locadora/clientes',(req,res)=>{
    let string = "select * from clientes";
    con.query(string,(err,result)=>{
        if(err == null){
            res.json((result));
        }
    });
});

app.get('/locadora/filmes',(req,res)=>{
    let string = "select * from filmes";
    con.query(string,(err,result)=>{
        if(err == null){
            res.json((result));
        }
    });
});

app.get('/locadora/locacoes',(req,res)=>{
    let string = "select * from locacoes";
    con.query(string,(err,result)=>{
        if(err == null){
            res.json((result));
        }
    });
});

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});