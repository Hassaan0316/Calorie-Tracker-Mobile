const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Add resolution for node_modules
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  'redux-persist': require.resolve('redux-persist'),
};

module.exports = withNativeWind(config, { input: './styles/global.css' });