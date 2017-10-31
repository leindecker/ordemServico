var LoginPage = function() {
  var emailInput = element(by.id('emailInput '));
  var senhaInput = element(by.id('senhaInput'));

  this.acessarAplicacao = function() {
    browser.get('http://localhost:8080/login');
  };

  this.setEmail = function(email) {
    emailInput.sendKeys(email);
  };

  this.getEmail = function() {
    return emailInput.getText();
  };

  this.setSenha = function(senha) {
    emailInput.sendKeys(senha);
  };

  this.getSenha = function() {
    return senhaInput.getText();
  };
};

module.exports = new LoginPage();
