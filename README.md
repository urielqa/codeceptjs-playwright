<div align="center">

# 🚀 CodeceptJS + Playwright - Blog Agibank Test Suite

![CodeceptJS](https://img.shields.io/badge/CodeceptJS-3.6.7-green.svg)
![Playwright](https://img.shields.io/badge/Playwright-1.49-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-22.x-green.svg)
![Allure](https://img.shields.io/badge/Allure-Reports-orange.svg)
![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)

*Framework de testes automatizados E2E para o Blog do Agibank*

**por [Uriel Sampaio](https://github.com/urielqa)** · Analista de QA | Automação Web E2E

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/uriel-sampaio-728184356/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/urielqa)
[![Email](https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:urielsqa@gmail.com)

[🎯 Recursos](#-recursos) • [🚀 Instalação](#-instalação) • [📝 Uso](#-uso) • [🧪 Testes](#-executando-testes) • [📊 Reports](#-relatórios)

</div>

---

## 📋 Sobre o Projeto

Este projeto é uma **suite de testes automatizados E2E** desenvolvida com **CodeceptJS** e **Playwright** para validar a funcionalidade do **Blog do Agibank**. Utiliza práticas modernas de automação de testes com:

- ✅ **Testes BDD** com Cucumber/Gherkin
- ✅ **Page Object Model** para organização de código
- ✅ **Relatórios Allure** com screenshots automáticos
- ✅ **Otimização async/await** para melhor performance
- ✅ **Arquitetura escalável** e manutenível

## 🎯 Recursos

### 🎭 **Playwright Integration**
- **Multi-browser support**: Chromium, Firefox, Safari
- **Headless/Headed modes**: Para debug e CI/CD
- **Auto-wait**: Aguarda elementos automaticamente
- **Screenshots automáticos** em falhas

### 🥒 **BDD Testing**
- **Gherkin syntax**: Cenários em linguagem natural
- **Reutilização de steps**: DRY principle aplicado
- **Cenários parametrizados**: Data-driven testing
- **Português nativo**: Steps em português brasileiro

### 📊 **Reporting & Analytics**
- **Allure Reports**: Relatórios visuais detalhados
- **Screenshot capture**: Em cada falha automaticamente
- **Step-by-step tracking**: Rastreamento completo
- **Metrics & trends**: Análise de tendências

## 🏗️ Arquitetura

```
codeceptjs-playwright-ai/
├── 📁 src/
│   ├── 📁 features/           # Cenários BDD (.feature)
│   │   ├── home.feature       # Testes da página inicial
│   │   └── articles.feature   # Testes de artigos
│   ├── 📁 pages/             # Page Objects
│   │   ├── home.js           # Página inicial
│   │   ├── articles.js       # Página de artigos
│   └── 📁 step_definitions/  # Implementação dos steps
│       ├── home_steps.js     # Steps da home
│       ├── articles_steps.js # Steps de artigos
├── 📁 output/               # Screenshots e logs
├── 📁 allure-results/       # Dados brutos do Allure
├── 📁 allure-report/        # Relatórios HTML gerados
├── codecept.conf.js         # Configuração principal
├── steps_file.js           # Steps personalizados
└── package.json            # Dependências e scripts
```

## 🚀 Instalação

### Pré-requisitos

```bash
# Node.js 18+ requerido
node --version  # v22.20.0 ou superior
npm --version   # v9.0.0 ou superior
```

### Setup do Projeto

```bash
# 1. Clone o repositório
git clone https://github.com/urielqa/codeceptjs-playwright.git
cd codeceptjs-playwright

# 2. Instale as dependências
npm install

# 3. Instale os browsers do Playwright
npx playwright install

```

### Dependências Principais

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **CodeceptJS** | 3.6.7 | Framework de testes E2E |
| **Playwright** | 1.49 | Engine de automação |
| **Allure** | 2.34.1 | Geração de relatórios |
| **Node.js** | 22.x | Runtime JavaScript |

## 📝 Uso

### Configuração Básica

```javascript
// codecept.conf.js
exports.config = {
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://blog.agibank.com.br/',
      show: false // true para modo visual
    }
  },
  plugins: {
    allure: { enabled: true },
    stepByStepReport: { enabled: true },
    screenshotOnFail: { enabled: true }
  }
};
```

### Page Object Example

```javascript
// src/pages/home.js
const { I } = inject();

module.exports = {
  selectors: {
    logo: '[alt*="Agibank"]',
    mainNav: 'nav, [role="navigation"]',
    articlesList: 'article, .post, .card'
  },

  async abrirPagina() {
    await I.amOnPage(this.url);
    I.waitForElement(this.selectors.logo);
  },

  verificarElementosBasicos() {
    I.seeElement(this.selectors.logo);
    I.seeElement(this.selectors.mainNav);
  }
};
```

### Step Definition Example

```javascript
// src/step_definitions/home_steps.js
const { I } = inject();
const homePage = require('../pages/home');

Given('que estou na pagina inicial do blog {string}', async (url) => {
  await I.amOnPage(url);
});

Then('devo ver o logo do Agibank', () => {
  I.seeElement(homePage.selectors.logo);
});
```

## 🧪 Executando Testes

### Scripts Disponíveis

```bash
# Executar todos os testes
npm test

# Testes por categoria
npm run test-home      # Testes da página inicial
npm run test-articles  # Testes de artigos

# Execução completa com relatórios
npm run test-all       # Testa + Gera relatório + Abre
```

### Comandos Avançados

```bash
# Modo debug com browser visível
npx codeceptjs run --debug --verbose

# Executar cenários específicos
npx codeceptjs run --grep @home
npx codeceptjs run --grep "@articles"

# Executar feature específica
npx codeceptjs run src/features/home.feature

# Paralelo (múltiplas threads)
npx codeceptjs run --workers 3
```

### Tags Disponíveis

| Tag | Descrição | Comando |
|-----|-----------|---------|
| `@home` | Testes da página inicial | `--grep @home` |
| `@articles` | Testes de artigos | `--grep @articles` |

## 📊 Relatórios

### Allure Reports

```bash
# Gerar relatórios
npm run allure-generate

# Abrir relatórios
npm run allure-open

# Servir relatórios
npm run allure-server
```

### Screenshots Automáticos

- 📸 **On Failure**: Screenshot automático em cada falha
- 🎬 **Step by Step**: Screenshot a cada step (opcional)
- 📁 **Organização**: Salvos em `output/` com timestamp
- 🏷️ **Nomenclatura**: Nome do teste + timestamp

### Métricas Importantes

O Allure fornece:
- ✅ **Taxa de sucesso** por feature
- ⏱️ **Tempo de execução** por cenário
- 📈 **Tendências** ao longo do tempo
- 🐛 **Categorização** de falhas
- 📊 **Gráficos** interativos

## 🎨 Cenários de Teste

### 🏠 Home Page (`@home`)

```gherkin
@home
Feature: Pagina Inicial do Blog do Agibank
  Scenario: Acessar a pagina inicial do blog
    Given que estou na pagina inicial do blog "https://blog.agibank.com.br/"
    Then devo ver o titulo "Agi Blog"
    And devo ver o menu principal de navegacao
    And devo ver o logo do Agibank
```

### 📰 Articles (`@articles`)

```gherkin
@articles  
Feature: Artigos do Blog do Agibank
  Scenario: Visualizar listagem de artigos
    Given que estou na pagina inicial do blog
    Then devo ver uma lista de artigos na secao "Últimas do Blog"
    And cada artigo deve exibir:
      | Título    |
      | Imagem    |
      | Resumo    |
      | Data      |
      | Categoria |
```

**Resultado**: 
- 📉 **53% menos código** em steps
- 📉 **84% menos código** em page objects
- ⚡ **Melhor performance** de execução
- 🧹 **Código mais limpo** e legível


### CI/CD Integration

```yaml
# .github/workflows/tests.yml
name: E2E Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
      - run: npm ci
      - run: npx playwright install
      - run: npm test
      - uses: actions/upload-artifact@v4
        if: failure()
        with:
          name: test-results
          path: output/
```

### Guidelines

- 📝 **BDD First**: Escreva cenários antes do código
- 🧹 **Clean Code**: Mantenha código limpo e documentado  
- 🚀 **Performance**: Evite async/await desnecessários
- 📸 **Screenshots**: Capture evidências das funcionalidades
- ✅ **Tests**: Garanta que novos testes passem

### Estrutura de Commits

```
feat: nova funcionalidade
fix: correção de bug
docs: atualização de documentação
style: formatação de código
refactor: refatoração sem mudança funcional
test: adição/modificação de testes
chore: tarefas de manutenção
```

## 📚 Recursos Úteis

### Links Importantes

- 📖 [CodeceptJS Docs](https://codecept.io/)
- 🎭 [Playwright Docs](https://playwright.dev/)
- 📊 [Allure Docs](https://docs.qameta.io/allure/)
- 🥒 [Gherkin Reference](https://cucumber.io/docs/gherkin/)

### Comunidade

- 💬 [CodeceptJS Discord](https://discord.gg/codeceptjs)
- 📧 [Playwright Slack](https://playwright.dev/community)
- 🐦 [Twitter: @CodeceptJS](https://twitter.com/CodeceptJS)

<div align="center">

### 🌟 Desenvolvido com ❤️ para automação de testes de qualidade

**Feito com ❤️ por [Uriel Sampaio](https://github.com/urielqa)**

[⬆️ Voltar ao topo](#-codeceptjs--playwright---blog-agibank-test-suite)

</div>

## 📄 Licença

Este projeto está sob a licença [ISC](LICENSE).

---

*Última atualização: Fevereiro 2025*
