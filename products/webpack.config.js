const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: { "./Products": "./src/bootstrap" },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
