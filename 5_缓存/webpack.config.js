const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:{
      index:{
        import :'./src/index.js',
        dependOn:'shared'
      },
      shared:'lodash' //  配置 dependOn option 选项，这样可以在多个 chunk 之间共享模块：
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'缓存',
    }),
  ],
  output: {
    filename: '[name].build.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true    //清理 /dist 文件夹
  },
  optimization: {
    moduleIds:'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          },
        },
      },
  },
};