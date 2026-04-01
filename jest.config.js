module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/js/**/*.js',
    '!src/js/__tests__/**/*.js',
    '!src/js/http.js',           
    '!src/js/app.js',           
    '!webpack.config.js'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
};