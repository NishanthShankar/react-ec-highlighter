var webpack = require('webpack')
var pkg = require('./package.json')

module.exports = [
  {
    entry: './index.js',
    output: {
      path: __dirname + '/dist',
      pathinfo: true,
      sourcePrefix: '',
      filename: 'bundle.js',
      libraryTarget: 'umd'
    },
    optimization: {
      minimize: true
    },
    externals: {
      react: 'React'
    }
  }
  // {
  //   entry: __dirname + 'index.js',
  //   output: {
  //     path: __dirname + '/dist',
  //     filename: 'ReactECHighlighter-v' + pkg.version + '.min.js',
  //     library: 'ReactECHighlighter',
  //     libraryTarget: 'umd'
  //   },
  //   optimization: {
  //     minimize: true
  //   },
  //   externals: {
  //     react: 'React'
  //   }
  // }
]
