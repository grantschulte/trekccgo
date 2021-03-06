const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const dotenv = require("dotenv-webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

const { dirs } = require("./server/config").app;
const { isProd, isDev } = require("./server/utils");

module.exports = (env) => {
  // Common Configuration

  const common = {
    entry: {
      "app": path.join(dirs.client.src, "index")
    },

    output: {
      path: dirs.client.build,
      filename: "scripts/[name].js",
      publicPath: "/"
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: `file-loader?name=${dirs.client.src}/assets/fonts/**/[name].[ext]`
        },
        {
          test: /\.(ico|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: `file-loader?name=${dirs.client.src}/assets/images/**/[name].[ext]`
        }
      ]
    },

    /*
     * Resolve module folders. This allows us to import files into
     * other files (in the client directory) without messy relative paths.
     */

    resolve: {
      modules: [
        "node_modules"
      ],
      extensions: [".js", ".jsx"]
    },

    plugins: [
      new dotenv(),
      new ExtractTextPlugin({
        filename: "styles/[name].css"
      }),
      new CopyWebpackPlugin([
        {
          from: `${dirs.client.public}/**/*`,
          to: dirs.client.build,
          flatten: true
        },
        {
          from: `${dirs.client.src}/assets/images/**/*`,
          to: `${dirs.client.build}/images`,
          flatten: true
        },
        {
          from: `${dirs.client.src}/assets/fonts/**/*`,
          to: `${dirs.client.build}/fonts`,
          flatten: true
        }
      ])
    ]
  };

  // Development Configuration

  if (isDev) {
    return merge(common, {
      devtool: "source-map",

      module: {
        rules: [
          {
            test:/\.(s*)css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: [
                {
                  loader: "css-loader",
                  options: {
                    importLoaders: 1
                  }
                },
                {
                  loader: "postcss-loader?parser=postcss-scss",
                  options: {
                    sourceMap: true,
                    plugins: [
                      require("autoprefixer")()
                    ]
                  }
                },
                {
                  loader: "sass-loader",
                  options: {
                    sourceMap: true,
                    data: "@import 'vars';",
                    includePaths: [
                      path.join(dirs.client.src),
                      path.join(dirs.client.src, "assets"),
                      path.join(dirs.client.src, "components")
                    ]
                  }
                }
              ]
            })
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
          },
          {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
          }
        ]
      },

      stats: {
        colors: true
      },

      devServer: {
        port: 9000,
        historyApiFallback: true
      }
    });
  }

  // Production Configuration

  if (isProd) {
    return merge(common, {
      module: {
        rules: [
          {
            test:/\.(s*)css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: [
                {
                  loader: "css-loader",
                  options: {
                    importLoaders: 1
                  }
                },
                {
                  loader: "postcss-loader?parser=postcss-scss",
                  options: {
                    plugins: [
                      require("autoprefixer")(),
                      require("postcss-clean")()
                    ]
                  }
                },
                {
                  loader: "sass-loader",
                  options: {
                    sourceMap: false,
                    data: "@import 'vars';",
                    includePaths: [
                      path.join(dirs.client.src),
                      path.join(dirs.client.src, "assets"),
                      path.join(dirs.client.src, "components")
                    ]
                  }
                }
              ]
            })
          },
        ]
      },

      plugins: [
        new UglifyWebpackPlugin(),
        new ImageminPlugin({
          test: /\.(jpe?g|png|gif|svg)$/i
        })
      ]
    });
  }
};
