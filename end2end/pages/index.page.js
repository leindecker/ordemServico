var IndexPage = function() {
  var menuNavegacaoEl = element(by.id('menuNavegacao'));

  this.getMenuNavegacaoEl = function() {
    return menuNavegacaoEl;
  };

};

module.exports = new IndexPage();
