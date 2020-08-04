const path = require('path')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'index.user.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      }
    ]
  }
}
