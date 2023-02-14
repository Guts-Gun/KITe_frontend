const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/user',
    createProxyMiddleware( {
      target: 'https://gutsandgun.kro.kr:30000',
      changeOrigin: true,
    })
  );
  app.use(
    '/result',
    createProxyMiddleware( {
      target: 'https://gutsandgun.kro.kr:30000',
      changeOrigin: true,
    })
  );
  app.use(
    '/auth',
    createProxyMiddleware( {
      target: 'https://gutsandgun.kro.kr:30000',
      changeOrigin: true,
    })
  );
  app.use(
    '/request',
    createProxyMiddleware( {
      target: 'https://gutsandgun.kro.kr:30000',
      changeOrigin: true,
    })
  );
  app.use(
    '/brokermanager',
    createProxyMiddleware( {
      target: 'https://gutsandgun.kro.kr:30000',
      changeOrigin: true,
    })
  );


};
