var mongoose = require('mongoose');

var clienteSchema = mongoose.Schema({
        nome : String,
        email : String,
        endereco: String,
        contato: String,
        automovel: String
});
module.exports = mongoose.model('Cliente', clienteSchema);
