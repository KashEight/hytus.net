import path from "path"
import webpack from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCSSExtractPlugin from "mini-css-extract-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import { CleanWebpackPlugin } from "clean-webpack-plugin"
import TerserWebpackPlugin from "terser-webpack-plugin"

const isProduction = process.env.NODE_ENV === "production"

const commonPlugins: Array<webpack.Plugin> = [
  new HtmlWebpackPlugin({
    template: "./template/index.html"
  }),
  new MiniCSSExtractPlugin(),
  new ForkTsCheckerWebpackPlugin()
]

const plugins: Array<webpack.Plugin> = isProduction ? [
  ...commonPlugins,
  new CleanWebpackPlugin(),
] : [
  ...commonPlugins
]

const config: webpack.Configuration = {
  mode: isProduction ? "production" : "development",
  entry: "./src/index.tsx",
  devtool: isProduction ? false : "source-map",

  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "index.js"
  },

  plugins: plugins,

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {
              hmr: !isProduction
            }
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader"
      },
      {
        test: /\.(gif|png|jpe?g|eot|woff?|ttf|svg)$/,
        loader: "file-loader",
        options: {
          name: "./images/[name].[ext]"
        }
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx", ".json"]
  },

  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserWebpackPlugin({
        extractComments: {
          condition: /^\**!|@preserve|@license|@cc_on/i,
          filename: "LICENSE.txt",
          banner: false
        }
      })
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, "/dist"),
    historyApiFallback: true,
    // https: true,
    open: true,
    port: 8000,
    hot: true
  }
}

export default config
