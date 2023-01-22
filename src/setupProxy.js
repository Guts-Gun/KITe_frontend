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
    '/request',
    createProxyMiddleware( {
      target: 'http://localhost:8011',
      changeOrigin: true,
    })
  );

};
