const { I } = inject();

module.exports = {
  // Seletores de artigos
  selectors: {
    // Lista de artigos
    articlesSection: '//*[contains(text(), "Últimas do Blog") or contains(text(), "Ultimas do Blog")]',
    articlesList: 'article, .post, .card',
    articleLinks: '.ast-post-format',
    
    // Elementos do artigo
    articleTitles: 'h1, h2, h3, .title, .post-title',
    articleImages: 'article img, .post img, .featured-image',
    articleExcerpts: '.excerpt, .summary, .description, p',
    articleDates: '.posted-on, .date, time, .entry-date, .uagb-post__date, [class*="date"]',
    articleCategories: '.category, .tag, [href*="categoria"]',
    readMoreLinks: '.read-more, [href*="/blog/"], article a',
    
    // Página do artigo
    articleContent: 'article, .post-content, .content, .entry-content',
    authorInfo: '.author, .by-author, [href*="author"]',
    shareButtons: '//*[@aria-label="Facebook"]',
    relatedArticles: '#jp-relatedposts',
    
    // Categorias e filtros
    categoryFilter: '.category, .tag, [href*="categoria"]',
    
    // Paginação
    pagination: '.pagination, [rel="next"], [rel="prev"], a[href*="page"]'
  },

  // Métodos para artigos
  async navegarParaSecaoArtigos() {
    await I.scrollTo(this.selectors.articlesSection);
    I.seeElement(this.selectors.articlesList);
  },

  verificarListaArtigos() {
    I.seeElement(this.selectors.articlesList);
  },

  verificarElementosArtigo() {
    I.seeElement(this.selectors.articleTitles);
    I.seeElement(this.selectors.articleImages);
    I.seeElement(this.selectors.articleExcerpts);
    I.seeElement(this.selectors.articleDates);
    I.seeElement(this.selectors.articleCategories);
  },

  async clicarArtigo() {
    await I.scrollTo(this.selectors.articlesSection);
    I.waitForElement(this.selectors.articlesList, 10);
    // Clica no primeiro link de artigo (título) da seção Últimas do Blog
    I.click('.uagb-post__title a, article h2 a, article .post-title a');
  },

  async verificarPaginaArtigo() {
    const url = await I.grabCurrentUrl();
    I.assertTrue(
      url.includes('/blog/'), 
      'Deve estar na página do artigo'
    );
  },

  verificarConteudoCompleto() {
    I.seeElement(this.selectors.articleContent);
  },

  verificarInformacoesArtigo() {
    I.seeElement(this.selectors.articleDates);
    I.seeElement(this.selectors.authorInfo);
    I.seeElement(this.selectors.shareButtons);
  },

  async filtrarPorCategoria(categoria) {
    await I.click(categoria);
    I.waitForElement('body');
  },

  verificarArtigosDaCategoria(categoria) {
    I.see(categoria);
    I.seeElement(this.selectors.articlesList);
  },

  async verificarArtigosRelacionados() {
    await I.scrollTo(this.selectors.relatedArticles);
    I.seeElement(this.selectors.relatedArticles);
  },

  async clicarArtigoRelacionado() {
    await I.click(`${this.selectors.relatedArticles} a`);
    I.waitForElement('body');
  },

  // Métodos utilitários
  async contarArtigos() {
    return await I.grabNumberOfVisibleElements(this.selectors.articlesList);
  }
}