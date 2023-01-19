import path from "node:path";
import nodeExternals from "webpack-node-externals";
import { Configuration, node } from "webpack";

const browserConfig: Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    filename: "client.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
};

const serverConfig: Configuration = {
  mode: "production",
  entry: "./src/server.tsx",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  externals: [nodeExternals()],
};

module.exports = [browserConfig, serverConfig];
