const { I } = inject();

module.exports = {
  // URL
  url: 'https://blog.agibank.com.br/',

  // Seletores da página inicial
  selectors: {
    // Header e navegação
    logo: '[alt*="Agibank"], [alt*="Blog do Agi"], img[src*="logo"]',
    mainNav: 'nav, [role="navigation"]',
    menuItems: 'nav a, .menu a',
    
    // Seção Stories
    storiesSection: '//*[contains(text(), "Stories")]',
    storiesContainer: '[href*="web-stories"], [href*="stories"], .story, .web-story',
    storyImages: '[href*="web-stories"] img, [href*="stories"] img, .story img',
    
    // Seção de artigos
    articlesSection: '//*[contains(text(), "Últimas do Blog") or contains(text(), "Ultimas do Blog")]',
    articlesList: 'article, .post, .card, [class*="post"]',
    articleImages: 'article img, .post img, .featured-image',
    articleTitles: 'h1, h2, h3, .title, .post-title',
    articleLinks: 'a[href*="/"], article a, .post a',
    categories: '//*[@class="uagb-post__taxonomy highlighted"]',
    
    // Seção Empréstimos
    loanSection: '//*[contains(text(), "Tudo Sobre Empréstimo") or contains(text(), "Tudo Sobre Emprestimo")]',
    loanArticles: '//*[contains(text(), "empréstimo") or contains(text(), "emprestimo")]',
    
    // Paginação
    pagination: '.pagination, [rel="next"], [rel="prev"], a[href*="page"]',
    
    // Footer
    footer: 'footer, .footer, .site-footer',
    footerLinks: 'footer a, .footer a',
    socialLinks: '[href*="facebook"], [href*="instagram"], [href*="linkedin"], [href*="tiktok"]',
    appStoreLinks: '[href*="play.google"], [href*="apple"], [href*="app-store"]',
    
    // Elementos gerais
    body: 'body',
    images: 'img',
    brokenImages: 'img[src=""], img:not([src])'
  },

  // Métodos da página
  async abrirPagina() {
    await I.amOnPage(this.url);
    I.waitForElement(this.selectors.body);
  },

  verificarElementosBasicos() {
    I.seeElement(this.selectors.logo);
    I.seeElement(this.selectors.mainNav);
    I.seeElement(this.selectors.footer);
  },

  verificarTitulo(titulo) {
    I.seeInTitle(titulo);
  },

  async verificarMenu() {
    await I.seeElement(this.selectors.mainNav);
    const menuItems = await I.grabNumberOfVisibleElements(this.selectors.menuItems);
    if (menuItems === 0) {
      throw new Error('Menu deve ter itens visíveis');
    }
  },

  async verificarSecaoStories() {
    await I.scrollTo(this.selectors.storiesSection);
    I.see('Stories');
    I.seeElement(this.selectors.storiesContainer);
  },

  async contarStories() {
    return I.grabNumberOfVisibleElements(this.selectors.storiesContainer);
  },

  verificarImagensStories() {
    I.seeElement(this.selectors.storyImages);
  },

  async verificarSecaoArtigos() {
    await I.scrollTo(this.selectors.articlesSection);
    I.seeElement(this.selectors.articlesList);
  },

  verificarElementosArtigo() {
    I.seeElement(this.selectors.articleImages);
    I.seeElement(this.selectors.articleTitles);
    I.seeElement(this.selectors.articleLinks);
    I.seeElement(this.selectors.categories);
  },

  async clicarArtigo() {
    await I.click(this.selectors.articleLinks);
    I.waitForElement(this.selectors.body);
  },

  async verificarPaginacao() {
    await I.scrollTo(this.selectors.pagination);
    I.seeElement(this.selectors.pagination);
  },

  async verificarCarregamentoImagens() {
    const imagensBroken = await I.grabNumberOfVisibleElements(this.selectors.brokenImages);
    if (imagensBroken !== 0) {
      throw new Error('Não deve haver imagens quebradas');
    }
  },

  async voltarHome() {
    await I.click(this.selectors.logo);
    I.waitForElement(this.selectors.body);
  },

  async verificarSecaoEmprestimos() {
    await I.scrollTo(this.selectors.loanSection);
    I.see('empréstimo');
    I.seeElement(this.selectors.articlesList);
  },

  async aguardarCarregamentoCompleto() {
    I.waitForElement(this.selectors.body);
    await I.wait(3);
  },

  async verificarSemErros() {
    const erros = ['404', '500', 'Error', 'Erro', 'Not Found'];
    for (const erro of erros) {
      I.dontSee(erro);
    }
  }
}