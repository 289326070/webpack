const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',
  entry:{
      index:'./src/index.js',
    
      print:'./src/print.js'
  },
  devtool:'inline-source-map',
  devServer:{
    static:'./dist'   //  webpack-dev-server 为你提供了一个基本的 web server，并且具有 live reloading(实时重新加载)
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'development',
    }),
  ],
  output: {
    filename: '[name].build.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,    //清理 /dist 文件夹
    publicPath:'/'    //服务启动时路径
  },
  
};