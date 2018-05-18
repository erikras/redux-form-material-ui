var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  resolve: {
    modules: [ 'src', 'node_modules' ],
    extensions: [ '.json', '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [ 'babel-loader' ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.md/,
        use: [ "html-loader", "markdown-loader" ]
      }
    ]
  }
};