@navigation
Feature: Navegacao do Blog do Agibank
  Como um visitante do blog do Agibank
  Eu quero navegar pelas diferentes secoes e categorias
  Para encontrar conteudos especificos de meu interesse

  Background:
    Given que estou na pagina inicial do blog "https://blog.agibank.com.br/"

  Scenario: Navegar pelo menu principal
    When clico no item do menu "O Agibank"
    Then devo ser redirecionado para a pagina institucional
    And devo ver informacoes sobre o banco

  Scenario: Acessar secao Produtos
    When clico no item do menu "Produtos"
    Then devo ser redirecionado para a pagina de produtos
    And devo ver informacoes sobre os produtos oferecidos

  Scenario: Acessar secao Servicos
    When clico no item do menu "Servicos"
    Then devo ser redirecionado para a pagina de servicos
    And devo ver a lista de servicos disponiveis

  Scenario Outline: Navegar pelas categorias do blog
    When clico no item do menu "<categoria>"
    Then devo ser redirecionado para a pagina da categoria "<categoria>"
    And devo ver artigos relacionados a "<categoria>"
    And devo ver o titulo da pagina contendo "<categoria>"

    Examples:
      | categoria       |
      | Suas financas   |
      | Seus beneficios |
      | Sua seguranca   |
      | Stories         |

  Scenario: Testar funcionalidade de busca
    Given que existe um campo de busca na pagina
    When confirmo o texto "emprestimo" no campo de busca
    Then devo ver resultados relacionados a "emprestimo"
    And os resultados devem ser relevantes ao termo buscado

  Scenario: Navegacao por paginacao
    Given que estou na pagina de emprestimos consignados
    When clico no botao "Proxima"
    Then devo ser redirecionado para a proxima pagina
    And devo ver novos artigos
    And o numero da pagina deve ser atualizado

  Scenario: Retornar para pagina anterior na paginacao
    Given que estou na pagina 2 ou superior da pagina de emprestimos consignados
    When clico no botao "Anterior" ou no numero da pagina anterior
    Then devo retornar a pagina anterior
    And devo ver os artigos da pagina anterior

  Scenario: Testar links de volta ao topo
    Given que estou na pagina de emprestimos consignados
    When rolo a pagina para baixo
    Then devo ver um botao "Voltar ao topo"
    And ao clicar nele, devo retornar ao inicio da pagina
