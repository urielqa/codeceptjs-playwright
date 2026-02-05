exports.config = {
  output: './output',
    helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://blog.agibank.com.br/',
      show: false
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './src/pages/home.js',
    articlesPage: './src/pages/articles.js',
    footerPage: './src/pages/footer.js',
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './src/features/*.feature',
    steps: './src/step_definitions/*_steps.js',
  },
  plugins: {
    allure: {
      enabled: true,
      require: 'allure-codeceptjs',
      outputDir: './output/allure-results',
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true,
      enableScreenshotDiffReports: true,
      outputDir: './output',
    },
    screenshotOnFail: {
      enabled: true,
    },
    tryTo: {
      enabled: false,
    },
    retryFailedStep: {
      enabled: false,
    },
    retryTo: {
      enabled: false,
    },
    eachElement: {
      enabled: false,
    },
    pauseOnFail: {},
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: 'wait.*',
      timeout: 0,
    },
    {
      pattern: 'amOnPage',
      timeout: 0,
    },
  ],
  name: 'api-codeceptjs',
  name: 'desafio-web-blog-agibank'
};
