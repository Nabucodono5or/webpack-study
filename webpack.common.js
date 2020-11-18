var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "assets",
            name: "[name].[hash].[ext]",
            outputPath: "assets",
          },
        },
      },
    ],
  },
};
