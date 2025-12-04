@articles
Feature: Artigos do Blog do Agibank
  Como um visitante do blog do Agibank
  Eu quero ler e interagir com os artigos
  Para obter informacoes financeiras e educacionais

  Background:
    Given que estou na pagina inicial do blog "https://blog.agibank.com.br/"

  Scenario: Visualizar listagem de artigos na pagina inicial
    Then devo ver uma lista de artigos na secao "Ultimas do Blog do Agi"
    And cada artigo deve ter estar padronizado
    And devo ver pelo menos "6" artigos visiveis

  Scenario: Acessar um artigo especifico
    When clico no link de um artigo
    Then devo ver o conteudo completo do artigo

  Scenario: Verificar elementos dentro de um artigo
    When clico no link de um artigo
    Then devo ver as informacoes padronizadas do artigo

  Scenario: Testar compartilhamento de artigo
    When clico no link de um artigo
    And clico nos botoes de compartilhamento social
    Then devo poder compartilhar nas redes sociais

  Scenario: Verificar artigos relacionados
    Given clico no link de um artigo
    When rolo ate o final do artigo
    Then devo ver uma secao de "CONTEÚDOS RELACIONADOS"
    And devo ver pelo menos "3" artigos relacionados
