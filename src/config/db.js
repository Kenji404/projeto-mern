const mongoose = require('mongoose');
//iguala a promise do mongoose com a promise do node
//para evitar warnings no console.
mongoose.Promise = global.Promise;


module.exports = mongoose.connect('mongodb://localhost:27017/escola', { useNewUrlParser: true, useUnifiedTopology: true });