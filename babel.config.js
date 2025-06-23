/* global module */

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  // ignore: [],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ts', '.tsx', '.json'],
        root: ['.'],
        alias: {
          components: './src/components/',
          lib: './src/lib/',
          mocks: './src/mocks/',
          store: './src/store/',
          types: './src/types/',
        },
      },
    ],
  ],
};
