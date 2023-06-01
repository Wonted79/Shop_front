module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://hoyaho.shop:8080',
        //target: 'http://localhost:8080/',

        changeOrigin: true,
        pathRewrite:{
          '^/':''
        }
      }
    }
  }
}