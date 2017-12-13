var AdicionaClientesPage = function() {
  var adicionarClientesFormEl = element(by.id('adicionarClienteForm'));
  var nomeInputEl = element(by.id('nomeInput'));
  var emailInputEl = element(by.id('emailInput'));
  var enderecoInputEl = element(by.id('enderecoInput'));
  var cepInput = element(by.id('cepInput'));
  var numeroInput = element(by.id('numeroInput'));
  var contatoInputEl = element(by.id('contatoInput'));
  var automovelInputEl = element(by.id('automovelInput'));
  var salvarBtn = element(by.id('salvarBtn'));

  this.adicionarClientesFormEl = function() {
    return adicionarClientesFormEl;
  };

  this.salvar = function() {
    return salvarBtn.click();
  }

  this.preencheNumeroInput = function(numero) {
    return numeroInput.sendKeys(numero);
  };

  this.preencheNomeInput = function(nome) {
    return nomeInputEl.sendKeys(nome);
  };

  this.preencheCepInput = function(cep) {
    return cepInput.sendKeys(cep);
  }

  this.preencheEmailInputEl = function(email) {
    return emailInputEl.sendKeys(email)
  };

  this.preencheEnderecoInputEl = function(endereco) {
    return enderecoInputEl.sendKeys(endereco)
  };

  this.preencheContatoInputEl = function(contato) {
    return contatoInputEl.sendKeys(contato)
  };

  this.preencheAutomovelInputEl = function(automovel) {
    return automovelInputEl.sendKeys(automovel)
  };
};

module.exports = new AdicionaClientesPage();
