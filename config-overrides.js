const webpack = require('webpack');
const { useBabelRc, override } = require('customize-cra');

module.exports = function override(config, env) {
  useBabelRc(),
    (config.resolve.fallback = {
      url: false,
      querystring: false
    });
  return config;
};
