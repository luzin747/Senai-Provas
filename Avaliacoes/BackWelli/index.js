const Express = require('express');

const cors = require('cors');



const Alunos = require('./src/routes/alunos.routes');

const app = Express();

    app.use(Express.json());

    app.use(cors());

    app.use(Alunos);



app.listen(3000, () => {

    console.log("App ON");

});