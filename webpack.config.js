const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['react']
            }
          },
          {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
          },
          {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
            exclude: /node_modules/
          },
          {
              test: /\.(gif|png|jpe?g|svg)/i,
              use: [
                  'file-loader',
                  {
                      loader: 'image-webpack-loader',
                      options: {
                          gifsicle: {
                              interlanced: false
                          },
                          optipng: {
                              optimizationLevel: 7
                          },
                          pngquant: {
                              quality: '65-90',
                              speed: 4
                          },
                          mozjpeg: {
                              progressive: true,
                              quality: 65
                          }
                      }
                  }
              ]
          }       
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}