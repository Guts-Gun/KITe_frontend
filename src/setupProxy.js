const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/user',
    createProxyMiddleware( {
      target: 'http://localhost:8001',
      changeOrigin: true,
    })
  );
  app.use(
    '/result',
    createProxyMiddleware( {
      target: 'http://localhost:8002',
      changeOrigin: true,
    })
  );
  app.use(
    '/requestSending',
    createProxyMiddleware( {
      target: 'http://localhost:8011',
      changeOrigin: true,
    })
  );
  app.use(
    '/requestEmail',
    createProxyMiddleware( {
      target: 'http://localhost:8012',
      changeOrigin: true,
    })
  );
};
