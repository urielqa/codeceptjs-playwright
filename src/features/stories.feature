@stories
Feature: Web Stories do Blog do Agibank
  Como um visitante do blog do Agibank
  Eu quero visualizar e interagir com as web stories
  Para consumir conteudo de forma rapida e visual

  Background:
    Given que estou na pagina inicial do blog "https://blog.agibank.com.br/"

  Scenario: Visualizar secao de Stories na pagina inicial
    Then devo ver a secao "Stories"
    And devo ver multiplas web stories exibidas
    And cada story deve ter:
      | Imagem de capa atrativa |
      | Titulo descritivo       |
      | Visual responsivo       |
    And devo ver pelo menos 5 stories visiveis

  Scenario: Acessar uma web story
    When clico em uma web story
    Then devo ser redirecionado para a pagina da story
    And a story deve abrir em formato full-screen ou modal
    And devo ver o conteudo da story carregando

  Scenario: Navegar dentro de uma web story
    Given que estou visualizando uma web story
    When a story carrega completamente
    Then devo poder navegar pelos slides/paginas da story
    And devo ver indicadores de progresso
    And devo poder:
      | Avancar para proximo slide    |
      | Voltar para slide anterior    |
      | Pausar a story                |

  Scenario Outline: Verificar controles de navegacao das stories
    Given que estou em uma web story
    Then devo ver o controle "<controle>"
    And o controle "<controle>" deve estar funcional
    And o controle "<controle>" deve estar visivel

    Examples:
      | controle               |
      | Botao de fechar/voltar |
      | Indicador de progresso |
      | Botoes de navegacao    |
      | Controle de pause/play |

  Scenario: Testar auto-play das stories
    Given que estou visualizando uma web story
    When a story tiver auto-play ativado
    Then os slides devem avancar automaticamente
    And devo poder pausar o auto-play
    And devo poder retomar o auto-play

  Scenario: Testar compartilhamento de stories
    Given que estou visualizando uma web story
    When houver opcao de compartilhamento
    Then devo poder compartilhar a story
    And o link compartilhado deve funcionar corretamente

  Scenario: Navegar entre multiplas stories
    Given que estou em uma web story
    When termino de visualizar uma story
    Then devo poder navegar para a proxima story
    And devo poder retornar a lista de stories

  Scenario Outline: Testar stories em diferentes navegadores
    When acesso as web stories no navegador "<navegador>"
    Then as stories devem funcionar consistentemente no "<navegador>"
    And todos os recursos devem estar disponiveis no "<navegador>"
    And nao deve haver problemas de compatibilidade no "<navegador>"

    Examples:
      | navegador |
      | Chrome    |
      | Firefox   |
      | Safari    |
      | Edge      |
