const { I } = inject();
const articlesPage = require('../pages/articles');

Then('devo ver uma lista de artigos na secao {string}', async (sectionName) => {
  await articlesPage.navegarParaSecaoArtigos();
  articlesPage.verificarListaArtigos();
});

Then('cada artigo deve ter estar padronizado', () => {
  articlesPage.verificarElementosArtigo();
});

Then('devo ver pelo menos {string} artigos visiveis', async (count) => {
  const articles = await articlesPage.contarArtigos();
  const expectedCount = parseInt(count);
  if (articles < expectedCount) {
    throw new Error(`Expected at least ${expectedCount} articles, but found ${articles}`);
  }
});

When('clico no link de um artigo', async () => {
  await articlesPage.clicarArtigo();
});

Then('devo ver o conteudo completo do artigo', () => {
  articlesPage.verificarConteudoCompleto();
});

Then('devo ver as informacoes padronizadas do artigo', () => {
  articlesPage.verificarInformacoesArtigo();
});

When('clico nos botoes de compartilhamento social', async () => {
  await I.click(articlesPage.selectors.shareButtons);
});

Then('devo poder compartilhar nas redes sociais', () => {
  I.seeElement(articlesPage.selectors.shareButtons);
});

When('rolo ate o final do artigo', async () => {
  await I.scrollTo(articlesPage.selectors.relatedArticles);
});

Then('devo ver uma secao de {string}', async (sectionName) => {
  await articlesPage.verificarArtigosRelacionados();
});

Then('devo ver pelo menos {string} artigos relacionados', async (count) => {
  await articlesPage.verificarArtigosRelacionados();
  const relatedCount = await I.grabNumberOfVisibleElements(`${articlesPage.selectors.relatedArticles} article, ${articlesPage.selectors.relatedArticles} .post`);
  const expectedCount = parseInt(count);
  if (relatedCount < expectedCount) {
    throw new Error(`Expected at least ${expectedCount} related articles, but found ${relatedCount}`);
  }
});
