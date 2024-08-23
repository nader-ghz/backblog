const webpack = require("webpack");
module.exports = (config ) => {
  // Add the plugin to the existing config
  config.plugins.push(
    new webpack.NormalModuleReplacementPlugin(
      /^tippy\.js$/,
      'tippy.js/dist/tippy-bundle.umd.min.js'
    )
  );

  // Important: return the modified config
  return config;
};