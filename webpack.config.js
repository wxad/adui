/* eslint-disable */
const fs = require("fs")
const lodash = require("lodash")
const path = require("path")
const webpack = require("webpack")
const WebpackBar = require("webpackbar")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase()
    })
    .replace(/\s+/g, "")
}

const entry = {}
const componentPath = path.resolve(__dirname, "./components/")
const componentDir = fs
  .readdirSync(componentPath)
  .filter(
    o =>
      o.indexOf("_") === -1 &&
      o.indexOf("style") === -1 &&
      o.indexOf("motion") === -1 &&
      fs.statSync(path.join(componentPath, o)).isDirectory()
  )
componentDir.forEach(component => {
  if (!["config-provider", "portal", "resize-observer"].includes(component)) {
    entry[`${component}/style`] = `${componentPath}/${component}/style/index.ts`
  }
})

const commonCssLoaders = [
  {
    loader: "style-loader",
  },
  {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: "[name]-[local]-[hash:base64:5]",
      },
      minimize: true,
      importLoaders: 1,
    },
  },
]

module.exports = {
  entry,
  plugins: [
    new WebpackBar({
      name: "📦 adui compiling",
      minimal: false,
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "/[name]/index.css",
      chunkFilename: "/[id]/index.css",
    }),
  ],
  output: {
    path: path.resolve(__dirname, process.env.COMPILE_TYPE),
    filename: "[name].js",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  externals: {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
    },
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: false,
              compilerOptions: {
                target: "es6",
                jsx: "react",
                moduleResolution: "node",
                declaration: false,
                noEmitOnError: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: commonCssLoaders,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", query: { modules: false } },
          { loader: "postcss-loader" },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10,
              name: "img/[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      componentPath,
    },
  },
}
