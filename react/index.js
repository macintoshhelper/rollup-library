import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

const getBaseConfig = ({
  input = 'src/index.js',
  output,
  external = ['react'],
  name,
  ...extra
}) => ({
  input,
  output: output || {
    file: './dist/bundle.js',
    format: 'esm',
    name,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  plugins: [
    json(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json'],
    }),
    commonjs(),
  ],
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

export default makeConfig;
