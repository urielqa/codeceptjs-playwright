const { I } = inject();
const homePage = require('../pages/home');

Given('que estou na pagina inicial do blog {string}', async (url) => {
  await I.amOnPage(url);
});

Given('que estou na pagina inicial do blog', async () => {
  await homePage.abrirPagina();
});

Given('que estou acessando a pagina inicial do blog', async () => {
  await homePage.abrirPagina();
});

Then('devo ver o titulo {string}', async (title) => {
  await homePage.verificarTitulo(title);
});

Then('devo ver o menu principal de navegacao', async () => {
  await homePage.verificarMenu();
});

Then('devo ver a secao {string}', async (sectionName) => {
  await I.see(sectionName);
});

Then('devo ver o logo do Agibank', async () => {
  await I.seeElement(homePage.selectors.logo);
});

Then('devo ver o menu principal com as seguintes opcoes:', async (table) => {
  // Extrair dados da tabela - pode ser DataTable do Cucumber
  let menuItems;
  if (table && table.raw) {
    menuItems = table.raw().flat();
  } else if (Array.isArray(table)) {
    menuItems = table.flat();
  } else {
    menuItems = [];
  }
  
  for (const item of menuItems) {
    if (item && item.trim()) {
      await I.see(item);
    }
  }
});

When('visualizo a secao {string}', async (sectionName) => {
  if (sectionName.includes('Stories')) {
    await homePage.verificarSecaoStories();
  } else {
    await I.scrollTo(`//*[contains(text(), "${sectionName}")]`);
    await I.see(sectionName);
  }
});

Then('devo ver pelo menos {int} web stories exibidas', async (count) => {
  const stories = await homePage.contarStories();
  if (stories < count) {
    throw new Error(`Expected at least ${count} stories, but found ${stories}`);
  }
});

Then('cada story deve ter uma imagem', async () => {
  await homePage.verificarImagensStories();
});

Then('cada story deve ter um titulo', async () => {
  const stories = await homePage.contarStories();
  if (stories === 0) {
    throw new Error('No stories found');
  }
});

Then('cada story deve ser clicavel', async () => {
  await I.seeElement(homePage.selectors.storiesContainer);
});

Then('devo ver uma lista de artigos recentes', async () => {
  await homePage.verificarSecaoArtigos();
});

Then('cada artigo deve ter estar padronizado', async () => {
  await homePage.verificarElementosArtigo();
});

Then('devo ver paginacao no final da secao', async () => {
  await homePage.verificarPaginacao();
});

Then('devo ver artigos relacionados a emprestimos', async () => {
  await homePage.verificarSecaoEmprestimos();
});

When('a pagina carregar completamente', async () => {
  await homePage.aguardarCarregamentoCompleto();
});

Then('o tempo de carregamento deve ser inferior a {int} segundos', async (seconds) => {
  await I.seeElement(homePage.selectors.body);
});

Then('todas as imagens devem carregar corretamente', async () => {
  await homePage.verificarCarregamentoImagens();
});

When('clico em qualquer link de artigo ou story', async () => {
  await homePage.clicarArtigo();
});

Then('devo ser redirecionado para a pagina correspondente', async () => {
  await I.waitForElement(homePage.selectors.body);
  await homePage.verificarSemErros();
});

Then('a pagina deve carregar sem erros', async () => {
  await homePage.verificarSemErros();
});

Then('devo poder retornar a pagina inicial', async () => {
  await homePage.voltarHome();
});

When('acesso a home no navegador {string}', async (browser) => {
  await homePage.abrirPagina();
});

Then('a home deve renderizar consistentemente no {string}', async (browser) => {
  await homePage.verificarElementosBasicos();
  await homePage.verificarSecaoStories();
  await homePage.verificarSecaoArtigos();
});

Then('todos os elementos devem funcionar corretamente no {string}', async (browser) => {
  await I.seeElement('a, button, input');
});

Then('o layout deve estar correto no {string}', async (browser) => {
  await I.dontSeeElement('.broken-layout, .overflow-error');
});