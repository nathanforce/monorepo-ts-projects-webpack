const path = require('path');
const REPO_ROOT = path.resolve(__dirname, '../../');
const APP_ROOT = path.resolve(REPO_ROOT, 'apps/alpha');

const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const SRC_DIR = path.resolve(APP_ROOT, 'src');

/**
 * @type { import('webpack').Configuration }
 */
module.exports = function(env, args) {
  const mode = args.mode;
  const isDevelopment = mode === 'development';

  return {
    mode,
    entry: [
      'react-app-polyfill/ie11',
      'react-app-polyfill/stable',
      path.join(APP_ROOT, '/src/index.tsx')
    ],
    resolve: {
      modules: ['node_modules', SRC_DIR],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@packages/design-system': path.resolve(
          REPO_ROOT,
          'packages/design-system/src'
        ),
        '@packages/constants': path.resolve(
          REPO_ROOT,
          'packages/constants/src'
        ),
        '@packages/utils': path.resolve(REPO_ROOT, 'packages/utils/src')
      }
    },
    output: {
      path: path.resolve(REPO_ROOT, 'dist', 'alpha'),
      publicPath: '/',
      filename: '[name].bundle.js',
      chunkFilename: '[name].chunk.js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              root: APP_ROOT
            }
          }
        }
      ]
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        async: true,
        typescript: {
          mode: 'write-references',
          configFile: path.resolve(APP_ROOT, 'tsconfig.json'),
          configOverwrite: {
            compilerOptions: {
              incremental: true
            }
          },
          profile: true,
          build: true
        }
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ],
    ...(isDevelopment
      ? {
          devServer: {
            hot: true,
            stats: 'minimal',
            port: 3000,
            disableHostCheck: true,
            headers: { 'Access-Control-Allow-Origin': '*' },
            historyApiFallback: true,
            publicPath: '/'
          }
        }
      : {})
  };
};
