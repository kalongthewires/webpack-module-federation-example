const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require("./package.json");

const PRODUCTION_URL = process.env.PRODUCTION_URL;

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const baseUrl = isProduction ? PRODUCTION_URL : "http://localhost:8081";

  return {
    entry: "./src/index.tsx",
    mode: isProduction ? "production" : "development",
    devServer: {
      port: 8080,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
            options: {
              compilerOptions: { noEmit: false },
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "container",
        remotes: {
          marketing: `marketing@${baseUrl}/remoteEntry.js`,
        },
        shared: packageJson.dependencies,
      }),
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
    ],
  };
};
