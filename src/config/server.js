// define a porta
const port = 3200;
//requisita o express

const express = require('express');
//requisita o body-parser
const bodyParser = require('body-parser');
//instancia o servidor que é resultado da funcao express()
const server = express();
//pluga no servidor o middleware que trata URL codificada
server.use(bodyParser.urlencoded({ extended: true }));
//pluga no servidor o middleware que trata o request e response somente em json
server.use(bodyParser.json());

//escuta a porta e dá o log abaixo no console
server.listen(port, function() {
    console.log(`Servidor no ar na porta ${port}`);
});

module.exports = server;