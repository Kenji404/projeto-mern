// importa o noderestful para iniciar a criação dos schemas mongoose/rest
const restful = require('node-restful');

// cria o esquema de acordo com os campos definidos
const contatosSchema = new restful.mongoose.Schema({
    codigo: { type: Number, required: true },
    nome: { type: String, required: true },
    telefone: { type: Number, required: true, min: 8 },
    email: { type: String, min: 0 },
    curso: {
        type: String,
        uppercase: true,
        enum: ['INFORMATICA',
            'ENGENHARIA',
            'ADMINISTRACAO',
            'REDES'
        ]
    }
});

// cria o modelo do mongoDB através do schema e o nome da tabela
module.exports = restful.model('contatos', contatosSchema);