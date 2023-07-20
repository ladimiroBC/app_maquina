const path = require('path');

module.exports = {
  mode:'development',
  entry:{
    bundle:path.resolve(__dirname, 'src/index.ts'),
  }, 
  module: {
    rules:[
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include:[path.resolve(__dirname, 'src')]
      }
    ]
  },
  resolve:{
    extensions:['.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
