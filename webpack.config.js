const { merge } = require('webpack-merge');
const loadSharedConfig = require('./webpack/config/webpack.base');

const loadModeConfig = (env, { mode }) =>
  require(`./webpack/config/webpack.${mode}`)(env);

module.exports = (env, argv) =>
  merge(loadSharedConfig(env), loadModeConfig(env, argv));
