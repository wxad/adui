/* eslint-disable */
// @ts-ignore"

var path = require("path")
var fs = require("fs")

var tempFilePath = path.resolve(__dirname, "adui-icons-reduced.js") // 临时生成的图标导出文件
var loaderName = "adui-icon-loader" // 配套使用的loader，用于提取用到的icon
var aduiModulePath = path.resolve(__dirname, "./") // adui在项目中的绝对路径
var copyFilePath = ""
var iconFileRegx = /^adui-icons-reduced/
var pluginOptions = null
var savedIconFilePath = tempFilePath
var mode = ""
function isArray(arrLike) {
  return Object.prototype.toString.call(arrLike) === "[object Array]"
}

function AduiIconPlugin(options) {
  pluginOptions = options
}

function deleteAllFile() {
  asyncIconFileToLocal()
  deleteFile()
  deleteFile(copyFilePath)
}
function asyncIconFileToLocal() {
  if (!fs.existsSync(savedIconFilePath)) {
    fs.writeFileSync(savedIconFilePath, "")
  }
  fs.copyFileSync(tempFilePath, savedIconFilePath)
}
function deleteFile(filePath = tempFilePath) {
  if (filePath && fs.existsSync(filePath)) {
    fs.unlinkSync(filePath)
  }
}
function createTempFile() {
  createFile(tempFilePath)
}
function createFile(filePath) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "")
  }
}
function setIconAlias(compiler, filePath = tempFilePath) {
  if (mode !== "production" && fs.statSync(filePath).size <= 0) {
    return
  }
  if (!compiler.options.resolve) {
    compiler.options.resolve = {
      alias: {
        "./IconSvgPaths": filePath,
      },
    }
  } else if (!compiler.options.resolve.alias) {
    compiler.options.resolve.alias = {
      "./IconSvgPaths": filePath,
    }
  } else {
    compiler.options.resolve.alias["./IconSvgPaths"] = filePath
  }
}
function buildPluginFile(compiler) {
  if (copyFilePath && fs.existsSync(copyFilePath)) {
    fs.unlinkSync(copyFilePath)
  }
  copyFilePath = path.resolve(
    __dirname,
    "adui-icons-reduced-" + Date.now() + ".js"
  )
  createFile(copyFilePath)
  fs.copyFileSync(tempFilePath, copyFilePath)
  if (fs.existsSync(copyFilePath) && fs.statSync(copyFilePath).size > 0) {
    setIconAlias(compiler, copyFilePath)
  }
}
function clearDirIconFile() {
  fs.readdirSync(__dirname).forEach(function (fileName) {
    if (iconFileRegx.test(fileName)) {
      deleteFile(path.resolve(__dirname, fileName))
    }
  })
}
AduiIconPlugin.prototype.apply = function (compiler) {
  mode = process.env.NODE_ENV || compiler.options.mode
  var _pluginOptions = pluginOptions || {}
  if (mode === "development") {
    return
  }
  var initIcons = []
  if (isArray(_pluginOptions.icons)) {
    initIcons = _pluginOptions.icons
  }
  if (_pluginOptions.iconFilePath) {
    savedIconFilePath = _pluginOptions.iconFilePath
  }

  compiler.hooks.make.tap("AduiIconPlugin", function (compilation) {
    deleteAllFile()
    if (mode !== "production") {
      buildPluginFile(compilation)
      asyncIconFileToLocal()
    }
  })
  compiler.hooks.emit.tap("AduiIconPlugin", function (compilation) {
    if (mode === "production") {
      buildPluginFile(compilation)
    }
  })
  compiler.hooks.done.tap("AduiIconPlugin", function () {
    if (mode === "production") {
      deleteAllFile()
    } else {
      asyncIconFileToLocal()
    }
  })
  compiler.hooks.watchClose.tap("AduiIconPlugin", function (compilation) {
    deleteAllFile()
  })
  compiler.hooks.failed.tap("AduiIconPlugin", function (compilation) {
    deleteAllFile()
  })

  if (mode === "production" && fs.existsSync(savedIconFilePath)) {
    setIconAlias(compiler, savedIconFilePath)
    return
  }

  clearDirIconFile()
  createTempFile()
  setIconAlias(compiler)
  /**
   * 默认 rules 等于 compiler.options.module.rules
   * 查询是否存在 oneOf，如果存在，则设为 oneOf
   */
  var rules = compiler.options.module.rules
  var oneOf = rules.find((o) => o.oneOf)
  if (oneOf) {
    rules = oneOf.oneOf
  }

  rules.forEach(function (ruleItem) {
    if (isArray(ruleItem.use)) {
      for (var i = 0; i < ruleItem.use.length; i++) {
        if (ruleItem.use[i].loader.includes(loaderName)) {
          ruleItem.use[i] = {
            loader: ruleItem.use[i].loader,
            options: {
              initIcons: initIcons,
              filePath: tempFilePath, // 给 loader 添加临时路径配置
            },
          }
          i = ruleItem.use.length
        }
      }
    }
  })
}

module.exports = AduiIconPlugin
