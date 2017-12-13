var mongoose = require('mongoose');

var clienteSchema = mongoose.Schema({
        nome : String,
        email : String,
        cep: String,
        endereco: String,
        cidade: String,
        bairro: String,
        numero: String,
        contato: String,
        automovel: String
});
module.exports = mongoose.model('Cliente', clienteSchema);
