var mongoose = require('mongoose');

var ordemServicoSchema = mongoose.Schema({
      nome : String,
      email : String,
      endereco: String,
      contato: String,
      automovel: String,
      servico: String,
      dataEntrega: Date,
      dataRetirada: Date,
      pagamento: String,
      total: Number
});
/*
var ordemServicoSchema = mongoose.Schema({
        nome : String,
        email : String,
        endereco: String,
        contato: String,
        automovel: String,
        servico: String,
        dataEntrega: String,
        dataRetirada: String,
        pagamento: String,
        total: String
});
*/
module.exports = mongoose.model('Ordem', ordemServicoSchema);
