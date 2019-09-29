const jsonPlugin = require('rollup-plugin-json');
const resolvePlugin = require('rollup-plugin-node-resolve');
const babelPlugin = require('rollup-plugin-babel');
const commonjsPlugin = require('rollup-plugin-commonjs');

const getBaseConfig = ({
  input = 'src/index.js',
  output,
  external,
  name,
  plugins,
  json = {},
  babel = {},
  resolve = {},
  commonjs = {},
  ...extra
}) => ({
  input,
  output: output || {
    file: './dist/bundle.js',
    format: 'esm',
    name
  },
  plugins: [
    jsonPlugin({
      ...json
    }),
    babelPlugin({
      exclude: 'node_modules/**',
      ...babel
    }),
    resolvePlugin({
      extensions: ['.mjs', '.js', '.json'],
      ...resolve
    }),
    commonjsPlugin({
      ...commonjs
    }),
  ].concat(plugins || []),
  external,
  ...extra
});

const makeConfig = (options, callback) => {
  const config = getBaseConfig(options);

  if (callback && typeOf(callback) === 'function') {
    callback(config);
  }

  return config;
}

module.exports = makeConfig;
