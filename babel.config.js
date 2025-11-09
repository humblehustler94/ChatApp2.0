// babel.config.js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // This plugin is ESSENTIAL for reanimated to work
    plugins: ['react-native-reanimated/plugin'],
  };
};