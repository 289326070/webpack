const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:{
     // index:'./src/index.js',   //  那些重复模块都会被引入到各个 bundle 
      //another:'./src/another-module.js'
      index:{
        import :'./src/index.js',
        dependOn:'shared'
      },
      another:{
        import : './src/another-module.js',
        dependOn: "shared"
      },  
      shared:'lodash' //  配置 dependOn option 选项，这样可以在多个 chunk 之间共享模块：
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
  // optimization:{
  //   runtimeChunk:'single' //如果我们要在一个 HTML 页面上使用多个入口时，还需设置 optimization.runtimeChunk: 'single'，否则还会遇到这里所述的麻烦。
  // },
  // optimization:{  //SplitChunksPlugin 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk
  //   splitChunks:{
  //     chunks:'all'
  //   }
  // }
};