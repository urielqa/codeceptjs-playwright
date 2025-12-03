@home
Feature: Pagina Inicial do Blog do Agibank
  Como um visitante do blog do Agibank
  Eu quero navegar pela pagina inicial
  Para acessar conteudos financeiros e noticias relevantes

  Scenario: Acessar a pagina inicial do blog
    Given que estou na pagina inicial do blog "https://blog.agibank.com.br/"
    Then devo ver o titulo "Agi Blog"
    And devo ver o menu principal de navegacao
    And devo ver a secao "Stories"
    And devo ver a secao "Últimas do Blog"
    And devo ver a secao "Tudo Sobre Empréstimo"

  Scenario: Visualizar elementos do cabecalho
    Given que estou na pagina inicial do blog
    Then devo ver o logo do Agibank
    And devo ver o menu principal com as seguintes opcoes:
      | O Agibank       |
      | Produtos        |
      | Servicos        |
      | Suas financas   |
      | Seus beneficios |
      | Sua seguranca   |
      | Stories         |

  Scenario: Verificar secao Stories
    Given que estou na pagina inicial do blog
    When visualizo a secao "Stories"
    Then devo ver pelo menos 5 web stories exibidas
    And cada story deve ter uma imagem
    And cada story deve ter um titulo
    And cada story deve ser clicavel

  Scenario: Verificar secao Ultimas do Blog
    Given que estou na pagina inicial do blog
    When visualizo a secao "Últimas do Blog"
    Then devo ver uma lista de artigos recentes
    And cada artigo deve ter estar padronizado
    And devo ver paginacao no final da secao

  Scenario: Verificar secao Tudo Sobre Emprestimo
    Given que estou na pagina inicial do blog
    When visualizo a secao "Tudo Sobre Empréstimo"
    Then devo ver artigos relacionados a emprestimos
    And cada artigo deve ter estar padronizado
    
  Scenario: Verificar tempo de carregamento da pagina
    Given que estou acessando a pagina inicial do blog
    When a pagina carregar completamente
    Then o tempo de carregamento deve ser inferior a 5 segundos
    And todas as imagens devem carregar corretamente

  Scenario: Verificar links funcionais na pagina inicial
    Given que estou na pagina inicial do blog
    When clico em qualquer link de artigo ou story
    Then devo ser redirecionado para a pagina correspondente
    And a pagina deve carregar sem erros
    And devo poder retornar a pagina inicial

  Scenario Outline: Testar home em diferentes navegadores
    When acesso a home no navegador "<navegador>"
    Then a home deve renderizar consistentemente no "<navegador>"
    And todos os elementos devem funcionar corretamente no "<navegador>"
    And o layout deve estar correto no "<navegador>"

    Examples:
      | navegador |
      | Chrome    |
      | Firefox   |
      | Safari    |
      | Edge      |