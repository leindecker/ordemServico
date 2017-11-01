var IndexPage = function() {
  var menuNavegacaoEl = element(by.id('menuNavegacao'));
  var opcaoClientesMenu = element(by.id('menuClientes'));
  var opcaoOrdemServicoMenu = element(by.id('menuOrdemServico'));

  this.getMenuNavegacaoEl = function() {
    return menuNavegacaoEl;
  };

  this.acessaMenuClientes = function() {
    return opcaoClientesMenu.click();
  };

  this.acessaOrdemServico = function() {
    return opcaoOrdemServicoMenu.click();
  };

};

module.exports = new IndexPage();
