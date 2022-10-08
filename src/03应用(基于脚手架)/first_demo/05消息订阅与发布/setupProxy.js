const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/api1', {
      // 遇见/api1的请求，就会触发代理配置
      target: 'http://localhost:5000', // 请求转发给谁
      changeOrigin: true, // 控制服务器收到的响应头中HOST的值
      pathRewrite: { '^api1': '' }, // 重新请求路径
    })
  );
};
