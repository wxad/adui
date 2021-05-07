/* eslint-disable */
// @ts-ignore

/**
 * @babel/parser: Babel 中使用的 JavaScript 解析器，主要基于 acorn 和 acorn jsx
 * Babel解析器根据 Babel-AS T格式生成 AST。它基于 ESTree 规范
 */
var parser = require("@babel/parser")
/**
 * @babel/traverse: parse 的好伙伴，用于遍历和设置 ast 节点信息
 */
var traverse = require("@babel/traverse").default
/**
 * loaderUtils: Webpack 官方提供的 loader 开发者工具
 * 使用 getOptions 拿到自定义的配置
 */
var loaderUtils = require("loader-utils")
/**
 * 通过 @babel/parser 将 JS 代码转换为 ast 格式，并修改后，你需要将 ast 格式转回 JS 代码，交给下一个 webpack loader
 * 最后输出物为 core.transformFromAstSync(ast).code
 */
var core = require("@babel/core")
var IconSvgPaths = require("./lib/icon/IconSvgPaths").default
var fs = require("fs")
var path = require("path")

var tempFilePath = ""
var initIcons = []
/**
 * addedIconsArray: 记录已经被添加的 icon
 */
var addedIconsArray = []
var validTypeArr = ["Literal", "StringLiteral"]
var ICON_INTENTS = {
  danger: "alert-circle",
  info: "info-circle",
  normal: "info-circle",
  primary: "tick-circle",
  success: "tick-circle",
  warning: "warning",
}
var ICON_DEFAULTS = {
  breadcrumb: ["arrow-right"],
  colorpicker: ["arrow-down"],
  datepicker: ["calendar-outlined", "triangle-down", "arrow-down"],
  dialog: ["cancel"],
  menu: ["triangle-right"],
  numericinput: ["arrow-up", "arrow-down"],
  tag: ["cancel-circle"],
  timepicker: ["time-outlined"],
  treeselect: ["menu", "triangle-right", "triangle-down", "cancel", "file-outlined"],
  upload: ["delete-outlined", "add", "cancel"],
}

/**
 * 此方法来自 create-react-app/config/webpack.config.js
 */
var hasJsxRuntime = (function () {
  if (process.env.DISABLE_NEW_JSX_TRANSFORM === "true") {
    return false
  }

  try {
    require.resolve("react/jsx-runtime")

    return true
  } catch (e) {
    return false
  }
})()

function isArray(arrLike) {
  return Object.prototype.toString.call(arrLike) === "[object Array]"
}

function searchIconByName(name) {
  if (!name) {
    return
  }
  var paths = IconSvgPaths[name]
  /**
   * 如果 name 合法，并且 addedIconsArray 中不存在，则写入
   */
  if (paths && addedIconsArray.indexOf(name) === -1) {
    console.log("[adui-icon-loader]", name)
    addedIconsArray.push(name)
    var content = `\n_default["${name}"] = ["${paths.join('","')}"]`
    if (!fs.existsSync(tempFilePath) || !fs.readFileSync(tempFilePath).length) {
      fs.writeFileSync(
        tempFilePath,
        `/* eslint-disable */
// @ts-ignore"

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {}
window.aduiIconReduced = _default
exports["default"] = _default;`
      )
    }
    fs.appendFileSync(tempFilePath, content)
  }
}

function parseOptions() {
  var options = loaderUtils.getOptions(this) || {}
  tempFilePath = options.filePath
  initIcons = options.initIcons || []
}
function isEleType(astParam, evarype) {
  if (
    Object.hasOwnProperty.call(astParam, "name") &&
    astParam.name.toLowerCase() === evarype
  ) {
    return evarype
  }
  if (
    Object.hasOwnProperty.call(astParam, "object") &&
    astParam.object.name &&
    astParam.object.name.toLowerCase() === evarype
  ) {
    return evarype
  }
  return false
}
function isValidIdentifier(astParam) {
  return (
    isEleType(astParam, "alert") ||
    isEleType(astParam, "button") ||
    isEleType(astParam, "checkbox") ||
    isEleType(astParam, "icon") ||
    isEleType(astParam, "radio") ||
    isEleType(astParam, "form") ||
    isEleType(astParam, "nav") ||
    isEleType(astParam, "select")
  )
}
function getProps(astParam, type) {
  if (["alert", "icon", "nav"].includes(type)) {
    return getEleProps(astParam, ["icon"])
  }
  if (["checkbox", "radio"].includes(type)) {
    return getEleProps(astParam, ["helperIcon"])
  }
  if (type === "form") {
    return getEleProps(astParam, ["labelHelperIcon"])
  }
  if (type === "button") {
    return getEleProps(astParam, ["leftIcon", "rightIcon"])
  }
  if (type === "select") {
    return getEleProps(astParam, ["rightIcon"])
  }
}

function isValidIconType(node) {
  return validTypeArr.indexOf(node.type) >= 0
}
/**
 * Prop 支持两种语法：
 * 1. 字面量
 * 2. 三元判断
 * * 其他无法支持
 */
function getEleProps(astParam, propKeys = []) {
  var result = {}
  if (isArray(astParam)) {
    for (var i = 0; i < astParam.length; i++) {
      var keyName = astParam[i].key && astParam[i].key.name
      if (propKeys.includes(keyName)) {
        if (astParam[i].value.type === "ConditionalExpression") {
          result[keyName] = []
          if (isValidIconType(astParam[i].value.consequent)) {
            result[keyName].push(astParam[i].value.consequent.value)
          }
          if (isValidIconType(astParam[i].value.alternate)) {
            result[keyName].push(astParam[i].value.alternate.value)
          }
        } else if (isValidIconType(astParam[i].value)) {
          result[keyName] = [astParam[i].value.value]
        }
      }
    }
  }
  return result
}
function initOptionIcons() {
  if (initIcons.length > 0) {
    searchIcons(initIcons)
  }
}
function searchIcons(icons = []) {
  icons.forEach(function (iconItem) {
    searchIconByName(iconItem)
  })
}
/**
 * adui-icon-loader
 * @param {source} source babel-loader 吐给我的 js 文件代码
 * @returns core.transformFromAstSync(ast).code
 */
module.exports = function (source) {
  parseOptions.call(this)
  if (!fs.existsSync(tempFilePath)) {
    tempFilePath = path.resolve(__dirname, "adui-icons-reduced.js")
  }
  initOptionIcons()
  var ast = parser.parse(source, {
    sourceType: "module",
    plugins: ["dynamicImport"],
  })
  traverse(ast, {
    CallExpression: function (path) {
      if (path.node.callee && isArray(path.node.arguments)) {
        /**
         * React 16：
         * React.createElement(xxx, { xxx: "" })
         * ↓
         * object.property(Identifier, ObjectExpression)
         *
         * React 17 hasJsxRuntime：
         * _jsx(xxx, {xxx: ""})
         * ↓
         * callee(Identifier, ObjectExpression)
         */
        var { object, property, name } = path.node.callee
        var [Identifier, ObjectExpression] = path.node.arguments

        if ((!object || !property) && name !== "_jsx") {
          return
        }
        /**
         * 确认格式分支：
         * 1. React.createElement(xxx) || _jsx(xxx)
         * 2. Dialog.xxx()
         * 3. Message.xxx()
         */
        if (
          name === "_jsx" ||
          (object.name === "React" && property.name === "createElement")
        ) {
          if (
            (!object || !property || !Identifier || !ObjectExpression) &&
            name !== "_jsx"
          ) {
            return
          }
          /**
           * 分支：
           * 1. 动态获取 prop 值
           * 2. 静态设置 icon 值
           */
          var validIdentifierType = isValidIdentifier(Identifier)
          /**
           * 确认格式 React.createElement(xxx, { xxx: "" }) || _jsx(xxx, {xxx: ""})
           */
          if (validIdentifierType) {
            if (isArray(ObjectExpression.properties)) {
              var props = getProps(
                ObjectExpression.properties,
                validIdentifierType
              )
              Object.keys(props).forEach(function (key) {
                props[key].forEach(function (item) {
                  searchIconByName(item)
                })
              })
            }
            /**
             * 组件：alert checkbox radio form nav
             * 既支持自定义 icon，又有一些组件内 icon 使用，在这里设置
             */
            if (validIdentifierType === "alert") {
              /**
               * 判断 intent，如果没有设置 icon，则拿到对应 intent 的 icon
               */
              var props = getEleProps(ObjectExpression.properties, [
                "icon",
                "intent",
              ])
              if (!props.icon) {
                (props.intent || ["normal"]).forEach(function (o) {
                  searchIconByName(ICON_INTENTS[o])
                })
              }
            }
            if (["checkbox", "radio"].includes(validIdentifierType)) {
              if (isArray(ObjectExpression.properties)) {
                var props = getEleProps(ObjectExpression.properties, [
                  "helperIcon",
                  "helper",
                ])
                /**
                 * 如果存在 helper，则判断是否有 helperIcon，
                 * 有则设置 helperIcon（上面已经做过这一步）
                 * 无则设置默认的 help-circle
                 */
                if (props.helper && !props.helperIcon) {
                  searchIconByName("help-circle")
                }
              }
            }
            if (validIdentifierType === "form") {
              if (isArray(ObjectExpression.properties)) {
                var props = getEleProps(ObjectExpression.properties, [
                  "labelHelperIcon",
                  "labelHelper",
                ])
                /**
                 * 如果存在 labelHelper，则判断是否有 labelHelperIcon，
                 * 有则设置 labelHelperIcon（上面已经做过这一步）
                 * 无则设置默认的 help-circle
                 */
                if (props.labelHelper && !props.labelHelperIcon) {
                  searchIconByName("help-circle")
                }
              }
            }
            if (validIdentifierType === "nav") {
              /**
               * 判断 nav，加入 arrow-up
               */
              searchIconByName("arrow-up")
            }
            if (validIdentifierType === "select") {
              if (isArray(ObjectExpression.properties)) {
                var props = getEleProps(ObjectExpression.properties, [
                  "rightIcon",
                ])
                if (!props.rightIcon) {
                  searchIconByName("triangle-down")
                }
                searchIconByName("search")
              }
            }
          } else {
            Object.keys(ICON_DEFAULTS).forEach(function (o) {
              if (isEleType(Identifier, o)) {
                ICON_DEFAULTS[o].forEach(function (p) {
                  searchIconByName(p)
                })
              }
            })
          }
        } else if (["Dialog", "Message"].includes(object.name)) {
          if (property && property.name) {
            searchIconByName(ICON_INTENTS[property.name])
          }
        }
      }
    },
  })
  return core.transformFromAstSync(ast).code
}
