var ClientesPage = function() {
  var listarClientesBtn = element(by.id('listarClientesBtn'));
  var clientesGridEl = element(by.id('clientesGridEl'));
  var deletaClienteBtn = element(by.id('deletaClienteBtn'));
  var listaClientesRowEl = $$('[ng-repeat="cliente in clientes"]');
  var adicionaClientesBtn = element(by.id('cadastrarClientesBtn'));
  var nomeClienteListaEl = element(by.id('nomeCliente-ngRepeat'));
  var enderecoClienteListaEl = element(by.id('enderecoCliente-ngRepeat'));
  var contatoClienteListaEl = element(by.id('contatoCliente-ngRepeat'));
  var automovelClienteListaEl = element(by.id('automovelCliente-ngRepeat'));

  this.clicaListarClientes = function() {
    return listarClientesBtn.click();
  };

  this.deletaCliente = function() {
    return deletaClienteBtn.click();
  }

  this.adicionaCliente = function() {
    return adicionaClientesBtn.click();
  }

  this.getCLientesGrid = function() {
    return clientesGridEl;
  };

  this.getRows = function() {
    return listaClientesRowEl;
  }

  this.getRowNomeCliente = function() {
    return nomeClienteListaEl.getText();
  }

  this.getRowEnderecoCliente = function() {
    return enderecoClienteListaEl.getText();
  }

  this.getRowContatoCliente = function() {
    return contatoClienteListaEl.getText();
  }

  this.getRowAutomovelCliente = function() {
    return automovelClienteListaEl.getText();
  }
};

module.exports = new ClientesPage();
