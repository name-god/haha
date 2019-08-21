module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://api.jk1601.xyz",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "" //重写,
        }
      }
    }
  }
};
