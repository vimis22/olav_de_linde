module.exports = {
  preset: 'react-native',
  testPathIgnorePatterns: ['lib/', 'node_modules/'],
  moduleFileExtensions: ['js','ts','tsx','jsx','json','node'],
  testEnvironment: 'jsdom',
  rootDir: 'src',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation)/)',
  ],
};
