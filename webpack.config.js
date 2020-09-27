const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./public/assets"),
    publicPath: "/assets/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: { localIdentName: "[local]" } },
          },
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
    publicPath: "/assets/",
    contentBase: path.resolve(__dirname, "./public"),
    watchContentBase: true,
  },
};
