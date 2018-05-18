var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'babel-polyfill',
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modules: [ 'src', 'node_modules' ],
    extensions: [ '.json', '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: [ 'babel-loader', 'eslint-loader' ],
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