@footer
Feature: Footer e Download do App do Blog do Agibank
  Como um visitante do blog do Agibank
  Eu quero acessar informacoes do rodape e links para download
  Para obter mais informacoes sobre o banco e baixar o aplicativo

  Background:
    Given que estou na pagina inicial do blog "https://blog.agibank.com.br/"

  Scenario: Visualizar secao de download do app
    When rolo ate a secao "Baixe agora mesmo o App do Agi"
    Then devo ver:
      | Titulo da secao                           |
      | Botao de download para App Store (iOS)    |
      | Botao de download para Google Play        |
      | Links para redes sociais                  |

  Scenario: Testar download do app para iOS
    When clico no botao de download da App Store
    Then devo ser redirecionado para a App Store
    And o link deve abrir em uma nova aba
    And deve levar para a pagina correta do app do Agibank

  Scenario: Testar download do app para Android
    When clico no botao de download do Google Play
    Then devo ser redirecionado para o Google Play
    And o link deve abrir em uma nova aba
    And deve levar para a pagina correta do app do Agibank

  Scenario Outline: Verificar links das redes sociais
    When visualizo a secao do footer
    Then devo ver o link da "<rede_social>"
    And o link da "<rede_social>" deve ter o icone correspondente

    Examples:
      | rede_social |
      | Facebook    |
      | Instagram   |
      | LinkedIn    |
      | TikTok      |

  Scenario: Testar funcionalidade dos links de redes sociais
    When clico nos links das redes sociais
    Then cada link deve abrir em uma nova aba
    And deve levar para a pagina oficial do Agibank na respectiva rede

  Scenario Outline: Validar redirecionamento das redes sociais
    When clico no link do "<rede_social>"
    Then devo ser redirecionado para "<url_esperada>"
    And a pagina deve carregar corretamente

    Examples:
      | rede_social | url_esperada                                    |
      | Facebook    | https://www.facebook.com/Agibank               |
      | Instagram   | https://www.instagram.com/agibank/             |
      | LinkedIn    | https://www.linkedin.com/company/agibank/      |
      | TikTok      | https://www.tiktok.com/@agibank                |

  Scenario: Verificar informacoes de copyright
    When visualizo o final da pagina
    Then devo ver informacoes de copyright
    And deve conter o ano atual (2025)
    And deve mencionar "Blog do Agi"
    And as informacoes devem estar atualizadas

  Scenario Outline: Testar hover effects nos elementos do footer
    When passo o mouse sobre "<elemento_footer>"
    Then deve haver feedback visual apropriado no "<elemento_footer>"
    And o "<elemento_footer>" deve responder ao hover corretamente

    Examples:
      | elemento_footer        |
      | Botoes de download     |
      | Links de redes sociais |
      | Outros links           |

  Scenario Outline: Testar footer em diferentes navegadores
    When acesso o footer no navegador "<navegador>"
    Then o footer deve renderizar consistentemente no "<navegador>"
    And todos os links devem funcionar corretamente no "<navegador>"
    And o layout do footer deve estar correto no "<navegador>"

    Examples:
      | navegador |
      | Chrome    |
      | Firefox   |
      | Safari    |
      | Edge      |
