/* eslint-disable */
const webpack = require("webpack")
const path = require("path")
const WebpackBar = require("webpackbar")
const StyleLintPlugin = require("stylelint-webpack-plugin")
const CSSSplitWebpackPlugin = require("css-split-webpack-plugin").default
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin

const isDev = process.env.NODE_ENV === "development"

function usePrettyWebpackBar(config) {
  // remove old progress plugin.
  config.plugins = config.plugins.filter(
    (plugin) =>
      !(plugin instanceof webpack.ProgressPlugin) &&
      !(plugin instanceof WebpackBar)
  )

  // use brand new progress bar.
  config.plugins.push(
    new WebpackBar({
      name: "📦 Site",
      minimal: false,
    }),
    new StyleLintPlugin({})
  )
}

module.exports = {
  root: "/adui/",
  port: 8000,
  hash: true,
  source: {
    components: "./components",
    docs: "./doc",
    changelog: "CHANGELOG.md",
  },
  theme: "./site/theme",
  htmlTemplate: "./site/theme/static/template.html",
  themeConfig: {
    categoryOrder: {
      "AD UI": 0,
      原则: 1,
      Principles: 1,
      视觉: 2,
      Visual: 2,
      模式: 3,
      Patterns: 3,
      其他: 6,
      Other: 6,
      Components: 100,
      组件: 100,
    },
  },
  webpackConfig(config) {
    // eslint-disable-next-line
    config.resolve.alias = {
      componentPath: path.join(process.cwd(), "components"),
      componentDistPath: path.join(process.cwd(), "dist/index.js"),
      site: path.join(process.cwd(), "site"),
    }

    usePrettyWebpackBar(config)
    const CSS_MODULE_LOADER = {
      loader: "css-loader",
      options: {
        modules: {
          localIdentName: "adui-[name]-[local]",
        },
      },
    }
    const COMPONENTS_PATH = [path.resolve(__dirname, "../components/")]
    const index = config.module.rules.findIndex((o) =>
      o.test.toString().includes("scss")
    )
    config.module.rules.splice(index, 1)

    const cssIndex = config.module.rules.findIndex((o) =>
      o.test.toString().includes(".css")
    )
    config.module.rules.splice(cssIndex, 1)

    const tsxIndex = config.module.rules.findIndex((o) =>
      o.test.toString().includes(".tsx")
    )
    config.module.rules.splice(tsxIndex, 1)

    config.module.rules.push(
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        exclude: COMPONENTS_PATH,
        loaders: [
          {
            loader: "style-loader",
            options: {
              attributes: {
                id: "adui",
                key: "adui",
              },
            },
          },
          CSS_MODULE_LOADER,
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        include: COMPONENTS_PATH,
        loaders: [
          {
            loader: "style-loader",
            options: {
              attributes: {
                id: "adui",
                key: "adui",
              },
            },
          },
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.js$/,
        include: COMPONENTS_PATH,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [],
            },
          },
          "eslint-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        enforce: "pre",
        use: "eslint-loader",
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
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
      }
    )

    // eslint-disable-next-line
    config.externals = {
      "react-router-dom": "ReactRouterDOM",
    }

    config.node = {
      fs: "empty",
    }

    if (isDev) {
      // eslint-disable-next-line
      config.devtool = "source-map"
    }

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    })

    config.plugins.push(new CSSSplitWebpackPlugin({ size: 4000 }))

    return config
  },

  devServerConfig: {
    public: process.env.DEV_HOST || "localhost",
    disableHostCheck: !!process.env.DEV_HOST,
  },

  htmlTemplateExtraData: {
    isDev,
  },
}
