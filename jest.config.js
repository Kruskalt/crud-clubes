module.exports = {
    verbose: true,
    rootDir: 'tarea2/frontApi/src',
    coverageDirectory: '../coverage/',
    testPathIgnorePatterns: ['/node_modules/', '.*fixture.js'],
    coveragePathIgnorePatterns: ['/node_modules/', '.*fixture.js'],
    testEnvironment: 'jsdom',
  };