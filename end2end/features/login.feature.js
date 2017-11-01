var loginPage = require('../pages/login.page.js');
var indexPage = require('../pages/index.page.js');

describe('Validar Login com email inexistente', function () {
  it('Acessar a aplicacao', function() {
    loginPage.acessarAplicacao();
  });

  it('Preencher campo Email com Email inexistente', function () {
    loginPage.preencherEmail('senac@senac.com.br');
  });

  it('Preencher campo Senha', function () {
    loginPage.preencherSenha('102030a');
  });

  it("Clicar em ", function () {
    loginPage.clicarEntrar();
  });

  it('Validar mensagem de erro quando usuário não foi localizado', function () {
    expect(loginPage.getMensagemErro()).toEqual('Usuário não foi localizado.');
  });
});

describe('Validar Login com senha inválida', function () {
  it('Acessar a aplicacao', function() {
    loginPage.acessarAplicacao();
  });

  it('Preencher campo Email com Email inexistente', function () {
    loginPage.preencherEmail('testeautomatizado@gmail.com');
  });

  it('Preencher campo Senha', function () {
    loginPage.preencherSenha('14785224');
  });

  it('Clicar em Entrar', function () {
    loginPage.clicarEntrar();
  });

  it('Validar mensagem de erro quando a senha é inválida', function () {
    expect(loginPage.getMensagemErro()).toEqual('Oops! Senha Inválida.');
  });
});

describe('Validar Login com credenciais válidas', function () {
  it('Acessar a aplicacao', function() {
    loginPage.acessarAplicacao();
  });

  it('Preencher campo Email com Email inexistente', function () {
    loginPage.preencherEmail('testeautomatizado@gmail.com');
  });

  it('Preencher campo Senha', function () {
    loginPage.preencherSenha('123456');
  });

  it('Clicar em Entrar', function () {
    loginPage.clicarEntrar();
  });

  it('Valida que acessou a aplicação', function () {
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/index');
    expect(indexPage.getMenuNavegacaoEl().isDisplayed()).toBe(true);
  });
});
