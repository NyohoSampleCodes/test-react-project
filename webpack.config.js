const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-3']
        }
      }
    }, {
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-3']
        }
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
