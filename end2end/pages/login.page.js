var LoginPage = function() {
  var emailInput = element(by.id('emailInput '));
  var senhaInput = element(by.id('senhaInput'));
  var entrarBtn = element(by.id('entrarBtn'));
  var alertEl = $('.alert');

  this.acessarAplicacao = function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:8080/login');
  };

  this.preencherEmail = function(email) {
    emailInput.sendKeys(email);
  };

  this.getEmail = function() {
    return emailInput.getText();
  };

  this.preencherSenha = function(senha) {
    senhaInput.sendKeys(senha);
  };

  this.getSenha = function() {
    return senhaInput.getText();
  };

  this.getMensagemErro = function() {
    return alertEl.getText();
  }

  this.clicarEntrar = function() {
    return entrarBtn.click();
  }
};

module.exports = new LoginPage();
