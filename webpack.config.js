const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'production',  // Use 'development' for easier debugging and 'production' for minification
  entry: './src/js/index.js',  // Your main JavaScript entry file
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // Target all CSS files
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      //`css-minimizer-webpack-plugin`,
      new CssMinimizerPlugin(),
    ],
    minimize: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',  // Output CSS file name
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/img", to: "img" },     
      ],
    }),
  ]  
};