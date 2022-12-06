module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugisn: [
      "react-native-reanimated/plugin"
    ]
  };
};
