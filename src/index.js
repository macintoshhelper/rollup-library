const json = require('rollup-plugin-json');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');

const getBaseConfig = ({
  input = 'src/index.js',
  output,
  external,
  name,
  plugins,
  ...extra
}) => ({
  input,
  output: output || {
    file: './dist/bundle.js',
    format: 'esm',
    name,
  },
  plugins: [
    json(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions: ['.mjs', '.js', '.json'],
    }),
    commonjs(),
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
