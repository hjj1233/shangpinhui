module.exports={
  //关闭eslint
  lintOnSave:false,
  //代理跨域
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://39.98.123.211',
        target:'http://127.0.0.1:4523',
        pathRewrite: {'^/api' : ''}
      }
    }
  }
}