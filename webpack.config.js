const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');

/** @type {import('webpack').Configuration} */
module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/main.js',
    output: {
      filename: isProd ? 'js/bundle.[contenthash].js' : 'js/bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: '>0.25%, not dead',
                  },
                ],
              ],
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html'),
        filename: 'index.html',
      }),
      ...(isProd
        ? [
            new WebpackObfuscator(
              {
                rotateStringArray: true,
                stringArray: true,
                stringArrayThreshold: 0.75,
              },
              []
            ),
          ]
        : []),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname),
      },
      port: 8080,
      open: true,
      historyApiFallback: true,
      proxy: [
        {
          context: ['/api'],
          target: 'http://localhost:3000',
          changeOrigin: true,
        },
      ],
    },
  };
};

