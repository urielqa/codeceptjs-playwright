@articles
Feature: Artigos do Blog do Agibank
  Como um visitante do blog do Agibank
  Eu quero ler e interagir com os artigos
  Para obter informacoes financeiras e educacionais

  Background:
    Given que estou na pagina inicial do blog "https://blog.agibank.com.br/"

  Scenario: Visualizar listagem de artigos na pagina inicial
    Then devo ver uma lista de artigos na secao "Ultimas do Blog do Agi"
    And cada artigo deve exibir:
      | Imagem de destaque |
      | Titulo do artigo   |
      | Categoria          |
      | Link do artigo     |
    And devo ver pelo menos 6 artigos visiveis

  Scenario: Acessar um artigo especifico
    When clico no link de um artigo
    Then devo ser redirecionado para a pagina completa do artigo
    And devo ver o titulo do artigo
    And devo ver o conteudo completo do artigo
    And devo ver a data de publicacao
    And devo ver a categoria do artigo

  Scenario: Verificar elementos dentro de um artigo
    Given que estou visualizando um artigo completo
    Then devo ver:
      | Titulo principal        |
      | Imagem de destaque      |
      | Data de publicacao      |
      | Categoria               |
      | Conteudo do artigo      |
      | Tags                       |
      | Botoes de compartilhamento |

  Scenario: Testar compartilhamento de artigo
    Given que estou visualizando um artigo completo
    When clico nos botoes de compartilhamento social
    Then devo poder compartilhar nas redes sociais
    And o link compartilhado deve ser valido
    And deve conter informacoes corretas do artigo

  Scenario: Verificar artigos relacionados
    Given que estou visualizando um artigo completo
    When rolo ate o final do artigo
    Then devo ver uma secao de "Artigos Relacionados"
    And devo ver pelo menos 3 artigos relacionados
    And cada artigo relacionado deve ter imagem e titulo
    And devo poder clicar nos artigos relacionados

  Scenario: Navegacao entre artigos por categoria
    When acesso uma categoria especifica como "Suas Financas"
    Then devo ver apenas artigos relacionados a financas
    And todos os artigos devem estar corretamente categorizados
    And devo poder navegar entre as paginas da categoria

  Scenario: Verificar SEO e meta informacoes
    When acesso um artigo especifico
    Then a pagina deve ter:
      | Titulo otimizado na aba do navegador           |
      | Meta description adequada                      |
      | Estrutura de heading apropriada (H1, H2, etc.) |

  Scenario Outline: Testar artigos em diferentes categorias
    When navego para a categoria "<categoria>"
    Then os artigos devem ser exibidos de acordo com a "<categoria>"
    And deve haver paginacao na categoria "<categoria>" quando necessario

    Examples:
      | categoria       |
      | Noticias        |
      | Suas Financas   |
      | Seu Sucesso     |
      | Seus Beneficios |
