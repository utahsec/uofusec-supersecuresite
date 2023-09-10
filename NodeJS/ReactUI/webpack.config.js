const path = require("path");

module.exports = {
  //...
  devServer: {
    contentBase: DIST_FOLDER,
    port: 3006,
    // Send API requests on localhost to API server get around CORS.
    proxy: {
      "/api": {
        target: {
          host: "0.0.0.0",
          protocol: "http:",
          port: 3000,
        },
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
