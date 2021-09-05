const path = require('path');

//html
const HtmlWebpackPlugin = require('html-webpack-plugin');   

module.exports = {
  entry: {
      // home:'./src/home.js',
      // about:'./src/about.js',
      // home:'./src/other.js',
      img:'./src/img.js'
  },
  output: {
    path: path.resolve(__dirname, './src/dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        title:'許龍',                 //設置指定html文件的title屬性
        filename: 'indexxx.html',       //指定打包的文件(輸出文件)
        template:'./src/template.html'      //代表輸入文件，（自己寫的文件要引入）（輸入文件）
      }
    )
],
  module:{
    rules:[
        {
            test:/\.(png|jpg|gif)$/i,
            use:[
                {
                    loader:'url-loader',
                    options:{
                        limit:99908192          //如果是超过这个8192kb 就会用dataUrl 64位存储在文件当中
                    }
                }
            ]
        }
    ]
  },
  mode: 'development',              //控制是生产打包(production)还是开发开包(development)

};