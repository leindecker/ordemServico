var loginPage = require('../pages/login.page.js');
var indexPage = require('../pages/index.page.js');
var clientesPage = require('../pages/clientes.page.js');
var adicionaClientesPage = require('../pages/adicionaClientes.page.js');

describe('Criar novo cliente', function() {
  it('Acessar a aplicacao', function() {
    loginPage.acessarAplicacao();
  });

  it('Realiza o login na aplicação', function () {
    loginPage.preencherEmail('testeautomatizado@gmail.com');
    loginPage.preencherSenha('123456');
    loginPage.clicarEntrar();
    expect(indexPage.getMenuNavegacaoEl().isDisplayed()).toBe(true);
  });

  it('Acessar o módulo de Clientes', function () {
    indexPage.acessaMenuClientes();
  });

  it('Clica em Listar Clientes', function () {
    clientesPage.clicaListarClientes();
    expect(clientesPage.getCLientesGrid().isDisplayed()).toBe(true);
  });

  it('Deletar todos os registros de clientes', function () {
    clientesPage.getRows().each(() => {
      clientesPage.deletaCliente();
    });
  });

  it('Clicar em Adicionar Cliente' , function () {
    clientesPage.adicionaCliente();
    expect(adicionaClientesPage.adicionarClientesFormEl().isDisplayed()).toBe(true);
  });

  it('Preenche campos para adicionar clientes', function () {
    adicionaClientesPage.preencheNomeInput('Guilherme');
    adicionaClientesPage.preencheEmailInputEl('leindecker.guilherme@gmail.com');
    adicionaClientesPage.preencheCepInput('90480000');
    adicionaClientesPage.preencheNumeroInput('190');
    adicionaClientesPage.preencheContatoInputEl('190');
    adicionaClientesPage.preencheAutomovelInputEl('VW Fusca');
  });

  it('Clica em Salvar para cadastrar Cliente', function () {
    adicionaClientesPage.salvar();
    browser.sleep(1300);
  });

  it('Clica em Listar Clientes', function () {
    clientesPage.clicaListarClientes();
    expect(clientesPage.getCLientesGrid().isDisplayed()).toBe(true);
  });

  it('Valida o cliente salvo', function () {
    browser.wait(ExpectedConditions.visibilityOf(clientesPage.getCLientesGrid()), 4000);
    expect(clientesPage.getRowNomeCliente().getText()).toEqual('Guilherme');
    expect(clientesPage.getRowContatoCliente().getText()).toEqual('190');
    expect(clientesPage.getRowAutomovelCliente().getText()).toEqual('VW Fusca');
  });
});
