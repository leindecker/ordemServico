var mongoose = require('mongoose');

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
