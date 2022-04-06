const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js',
    library: {
        type: 'module',
      },
  },
  experiments: {
    outputModule: true,
  },
  mode:'development',
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, ''),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults" 
              }],
              '@babel/preset-react'
            ]
          }
        }]
      }
    ]
  }
}