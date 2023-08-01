// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = app =>   {
//     app.use(
//         createProxyMiddleware('/',
// {
//       target: "https://tr-yös.com/api/v1/users/newuser.php?token=",
//   changeOrigin: true,
// })
//     )    

// }


const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api", 
    createProxyMiddleware({
      target: "https://tr-yös.com", 
      changeOrigin: true, 
    }) ); };