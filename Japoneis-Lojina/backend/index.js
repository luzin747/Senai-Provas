const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
// const alunos = require("./alunos.js");

const app = express();
app.use(cors());

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'loja'
});

app.get('/loja',(req,res)=>{
    let string = "select * from lancamentos";
    con.query(string,(err,result)=>{
        if(err == null){
            res.json((result));
        }
    });
});

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});