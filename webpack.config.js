const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: "source-map",
  entry: {
    bundle: path.resolve(__dirname, './src/app.index.tsx'),
  },
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        type:'asset/resource',
        options: {
          publicPath: 'assets',
          name: '[name].[hash].[ext]',
          outputPath: 'images'
        }
      },
      {
        test: /\.html$/i,
        use: 'html-loader'
      }
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      // new ImageMinimizerPlugin({
      //   minimizer: {
      //     implementation: ImageMinimizerPlugin.imageminMinify
      //   }
      // })
    ],
    minimize: true,
  },
  resolve: {
    extensions: ['.ts', '.js', 'tsx']
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        title:"Application Webpack",
        filename:"index.html",
        template:"./src/app.index.html",
      }
    ),
    new HtmlWebpackPlugin(
      {
        filename: 'form.create.product.html',
        template: './src/app/ui/web/views/form.create.product.html'
      }
    ),
    new MiniCssExtractPlugin(
      {
        filename: "styles.css"
      }
    )
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  }
}
