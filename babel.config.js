module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugin: [
      ['module-resolver', { alias: {'@': "./src", assets: './assets'} }],
      'react-native-reanimated/plugin'
    ]
  };
};
