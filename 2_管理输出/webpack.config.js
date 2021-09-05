const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:{
      index:'./src/index.js',
    
      print:'./src/print.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'管理输出',
    }),
  ],
  output: {
    filename: '[name].build.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true    //清理 /dist 文件夹
  },
  
};