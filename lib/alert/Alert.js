"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = _interopRequireDefault(require("../icon"));

var _iconIntents = _interopRequireDefault(require("./iconIntents"));

var _motion = _interopRequireDefault(require("../motion"));

var _configProvider = require("../config-provider");

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-alert";

var Alert = function Alert(_ref) {
  var afterClose = _ref.afterClose,
      className = _ref.className,
      closable = _ref.closable,
      closeText = _ref.closeText,
      defaultExpanded = _ref.defaultExpanded,
      expandContent = _ref.expandContent,
      expandedProp = _ref.expanded,
      icon = _ref.icon,
      intent = _ref.intent,
      onClose = _ref.onClose,
      onExpandChange = _ref.onExpandChange,
      size = _ref.size,
      text = _ref.text,
      title = _ref.title,
      theme = _ref.theme,
      otherProps = _objectWithoutProperties(_ref, ["afterClose", "className", "closable", "closeText", "defaultExpanded", "expandContent", "expanded", "icon", "intent", "onClose", "onExpandChange", "size", "text", "title", "theme"]);

  var _useState = (0, _react.useState)(expandedProp !== null && expandedProp !== undefined ? expandedProp : !!defaultExpanded),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      closing = _useState4[0],
      setClosing = _useState4[1];

  if (expandedProp !== null && expandedProp !== undefined && expanded !== expandedProp) {
    setExpanded(expandedProp);
  }

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeContext = _useContext.size;

  var computedSize = (0, _configProvider.getComputedSize)(size, sizeContext);

  var handleClose = function handleClose() {
    return setClosing(true);
  };

  var handleExpand = function handleExpand() {
    if (expandedProp === null) {
      setExpanded(!expanded);
    }

    if (onExpandChange) {
      onExpandChange(!expanded);
    }
  };

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-base"), "".concat(prefix, "-").concat(intent), "".concat(prefix, "-").concat(computedSize), _defineProperty({}, "".concat(prefix, "-").concat(theme), theme));
  return _react["default"].createElement(_motion["default"], {
    transition: "zoom",
    onLeave: onClose,
    afterLeave: afterClose,
    component: "div"
  }, !closing && _react["default"].createElement("div", _extends({
    className: classSet
  }, otherProps), _react["default"].createElement("div", {
    className: "".concat(prefix, "-inner")
  }, icon !== null && _react["default"].createElement(_icon["default"], {
    icon: icon || _iconIntents["default"][intent || "normal"],
    size: computedSize === "mini" ? 18 : 20,
    className: "".concat(prefix, "-icon")
  }), _react["default"].createElement("div", {
    className: "".concat(prefix, "-text")
  }, !!title && _react["default"].createElement("div", {
    className: "".concat(prefix, "-title")
  }, title), _react["default"].createElement("div", null, text), !!expandContent && _react["default"].createElement(_motion["default"], {
    transition: "slide",
    component: "div"
  }, expanded && _react["default"].createElement("div", {
    className: "".concat(prefix, "-expandContent")
  }, " ", expandContent, " "))), closable && _react["default"].createElement("div", {
    className: (0, _classnames["default"])("".concat(prefix, "-close"), _defineProperty({}, "".concat(prefix, "-close_text"), !!closeText))
  }, closeText ? _react["default"].createElement("div", {
    className: "".concat(prefix, "-closeText"),
    onClick: handleClose,
    role: "none"
  }, closeText) : _react["default"].createElement(_icon["default"], {
    className: "".concat(prefix, "-closeIcon"),
    icon: "cancel",
    onClick: handleClose
  })), !!expandContent && _react["default"].createElement("div", {
    className: "".concat(prefix, "-expand"),
    onClick: handleExpand,
    role: "none"
  }, expanded ? "收起" : "展开"))));
};

Alert.propTypes = {
  afterClose: _propTypes["default"].func,
  className: _propTypes["default"].string,
  closable: _propTypes["default"].bool,
  closeText: _propTypes["default"].node,
  defaultExpanded: _propTypes["default"].bool,
  expandContent: _propTypes["default"].node,
  expanded: _propTypes["default"].bool,
  icon: _propTypes["default"].any,
  intent: _propTypes["default"].oneOf(["normal", "primary", "success", "info", "warning", "danger"]),
  onClose: _propTypes["default"].func,
  onExpandChange: _propTypes["default"].func,
  size: _propTypes["default"].oneOf(["mini", "small", "medium"]),
  text: _propTypes["default"].node.isRequired,
  theme: _propTypes["default"].oneOf([null, "light"]),
  title: _propTypes["default"].node
};
Alert.defaultProps = {
  afterClose: function afterClose() {},
  className: undefined,
  closable: false,
  closeText: null,
  defaultExpanded: null,
  expandContent: null,
  expanded: null,
  icon: undefined,
  intent: "normal",
  onClose: function onClose() {},
  onExpandChange: function onExpandChange() {},
  size: "small",
  theme: null,
  title: null
};
var _default = Alert;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkFsZXJ0IiwiYWZ0ZXJDbG9zZSIsImNsYXNzTmFtZSIsImNsb3NhYmxlIiwiY2xvc2VUZXh0IiwiZGVmYXVsdEV4cGFuZGVkIiwiZXhwYW5kQ29udGVudCIsImV4cGFuZGVkUHJvcCIsImV4cGFuZGVkIiwiaWNvbiIsImludGVudCIsIm9uQ2xvc2UiLCJvbkV4cGFuZENoYW5nZSIsInNpemUiLCJ0ZXh0IiwidGl0bGUiLCJ0aGVtZSIsIm90aGVyUHJvcHMiLCJ1bmRlZmluZWQiLCJzZXRFeHBhbmRlZCIsImNsb3NpbmciLCJzZXRDbG9zaW5nIiwiQ29uZmlnQ29udGV4dCIsInNpemVDb250ZXh0IiwiY29tcHV0ZWRTaXplIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVFeHBhbmQiLCJjbGFzc1NldCIsIklDT05fSU5URU5UUyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJzdHJpbmciLCJib29sIiwibm9kZSIsImFueSIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsWUFBZjs7QUFzRUEsSUFBTUMsS0FBMkMsR0FBRyxTQUE5Q0EsS0FBOEMsT0FpQmpDO0FBQUEsTUFoQmpCQyxVQWdCaUIsUUFoQmpCQSxVQWdCaUI7QUFBQSxNQWZqQkMsU0FlaUIsUUFmakJBLFNBZWlCO0FBQUEsTUFkakJDLFFBY2lCLFFBZGpCQSxRQWNpQjtBQUFBLE1BYmpCQyxTQWFpQixRQWJqQkEsU0FhaUI7QUFBQSxNQVpqQkMsZUFZaUIsUUFaakJBLGVBWWlCO0FBQUEsTUFYakJDLGFBV2lCLFFBWGpCQSxhQVdpQjtBQUFBLE1BVlBDLFlBVU8sUUFW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WTtBQWNuQkQsRUFBQUEsS0FBSyxFQUFFO0FBZFksQ0FBckI7ZUFpQmVmLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgSWNvbiwgeyBJY29uTmFtZXMgfSBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgSUNPTl9JTlRFTlRTIGZyb20gXCIuL2ljb25JbnRlbnRzXCJcbmltcG9ydCBNb3Rpb24gZnJvbSBcIi4uL21vdGlvblwiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktYWxlcnRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElBbGVydFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlhbPpl63lkI7nmoQgaGFuZGxlcu+8jOWPguaVsCBub2RlXG4gICAqL1xuICBhZnRlckNsb3NlPzogKCkgPT4gdm9pZFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuWPr+WFs+mXrVxuICAgKi9cbiAgY2xvc2FibGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlhbPpl63mloflrZdcbiAgICovXG4gIGNsb3NlVGV4dD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog5piv5ZCm5bGV5byA77yM5YaF6YOo6amx5YqoXG4gICAqL1xuICBkZWZhdWx0RXhwYW5kZWQ/OiBib29sZWFuIHwgbnVsbFxuICAvKipcbiAgICog5bGV5byA5YaF5a65XG4gICAqL1xuICBleHBhbmRDb250ZW50PzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDmmK/lkKblsZXlvIDvvIzlpJbpg6jmjqfliLZcbiAgICovXG4gIGV4cGFuZGVkPzogYm9vbGVhbiB8IG51bGxcbiAgLyoqXG4gICAqIOiuvue9ruWbvuagh1xuICAgKi9cbiAgaWNvbj86IEljb25OYW1lc1xuICAvKipcbiAgICog6K6+572u57G75Z6LXG4gICAqL1xuICBpbnRlbnQ/OiBcIm5vcm1hbFwiIHwgXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwiaW5mb1wiIHwgXCJ3YXJuaW5nXCIgfCBcImRhbmdlclwiXG4gIC8qKlxuICAgKiDlhbPpl63ml7bnmoQgaGFuZGxlcu+8jOWPguaVsCBub2RlXG4gICAqL1xuICBvbkNsb3NlPzogKG5vZGU6IEhUTUxFbGVtZW50KSA9PiB2b2lkXG4gIC8qKlxuICAgKiDlsZXlvIDnirbmgIHlj5jljJbml7bnmoQgaGFuZGxlcu+8jOWPguaVsOS4uiBib29sXG4gICAqL1xuICBvbkV4cGFuZENoYW5nZT86IChleHBhbmRlZDogYm9vbGVhbikgPT4gdm9pZFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiXG4gIC8qKlxuICAgKiDmj5DphpLlhoXlrrlcbiAgICovXG4gIHRleHQ6IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6K6+572u5Li76aKYXG4gICAqL1xuICB0aGVtZT86IG51bGwgfCBcImxpZ2h0XCJcbiAgLyoqXG4gICAqIOaPkOmGkuagh+mimFxuICAgKi9cbiAgdGl0bGU/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuLyoqXG4gKiDmj5DphpLmmK/lhoXlrrnnmoTluLjmgIHjgIHljbPml7bmgKfmj5DnpLrvvIzlsZXnpLrpnIDopoHnlKjmiLfljbPml7blhbPms6jnmoTkv6Hmga/jgIJcbiAqIOS4juWvueivneahhiBEaWFsb2cg5oiW5rCU5rOh5o+Q56S6IFBvcG92ZXIg5LiN5ZCM77yM5o+Q6YaSIEFsZXJ0IOmAmuW4uOW4uOmpu+WcqOmhtemdouS4re+8jOS4jumhtemdouWGheWuueacieabtOW8uueahOWFs+iBlOaAp+OAglxuICovXG5jb25zdCBBbGVydDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SUFsZXJ0UHJvcHM+ID0gKHtcbiAgYWZ0ZXJDbG9zZSxcbiAgY2xhc3NOYW1lLFxuICBjbG9zYWJsZSxcbiAgY2xvc2VUZXh0LFxuICBkZWZhdWx0RXhwYW5kZWQsXG4gIGV4cGFuZENvbnRlbnQsXG4gIGV4cGFuZGVkOiBleHBhbmRlZFByb3AsXG4gIGljb24sXG4gIGludGVudCxcbiAgb25DbG9zZSxcbiAgb25FeHBhbmRDaGFuZ2UsXG4gIHNpemUsXG4gIHRleHQsXG4gIHRpdGxlLFxuICB0aGVtZSxcbiAgLi4ub3RoZXJQcm9wc1xufTogSUFsZXJ0UHJvcHMpID0+IHtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShcbiAgICBleHBhbmRlZFByb3AgIT09IG51bGwgJiYgZXhwYW5kZWRQcm9wICE9PSB1bmRlZmluZWRcbiAgICAgID8gZXhwYW5kZWRQcm9wXG4gICAgICA6ICEhZGVmYXVsdEV4cGFuZGVkXG4gIClcbiAgY29uc3QgW2Nsb3NpbmcsIHNldENsb3NpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICBpZiAoXG4gICAgZXhwYW5kZWRQcm9wICE9PSBudWxsICYmXG4gICAgZXhwYW5kZWRQcm9wICE9PSB1bmRlZmluZWQgJiZcbiAgICBleHBhbmRlZCAhPT0gZXhwYW5kZWRQcm9wXG4gICkge1xuICAgIHNldEV4cGFuZGVkKGV4cGFuZGVkUHJvcClcbiAgfVxuXG4gIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcbiAgY29uc3QgY29tcHV0ZWRTaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemUsIHNpemVDb250ZXh0KVxuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0Q2xvc2luZyh0cnVlKVxuXG4gIGNvbnN0IGhhbmRsZUV4cGFuZCA9ICgpID0+IHtcbiAgICBpZiAoZXhwYW5kZWRQcm9wID09PSBudWxsKSB7XG4gICAgICBzZXRFeHBhbmRlZCghZXhwYW5kZWQpXG4gICAgfVxuICAgIGlmIChvbkV4cGFuZENoYW5nZSkge1xuICAgICAgb25FeHBhbmRDaGFuZ2UoIWV4cGFuZGVkKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICBjbGFzc05hbWUsXG4gICAgYCR7cHJlZml4fS1iYXNlYCxcbiAgICBgJHtwcmVmaXh9LSR7aW50ZW50fWAsXG4gICAgYCR7cHJlZml4fS0ke2NvbXB1dGVkU2l6ZX1gLFxuICAgIHtcbiAgICAgIFtgJHtwcmVmaXh9LSR7dGhlbWV9YF06IHRoZW1lLFxuICAgIH1cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPE1vdGlvblxuICAgICAgdHJhbnNpdGlvbj1cInpvb21cIlxuICAgICAgb25MZWF2ZT17b25DbG9zZX1cbiAgICAgIGFmdGVyTGVhdmU9e2FmdGVyQ2xvc2V9XG4gICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgID5cbiAgICAgIHshY2xvc2luZyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gey4uLm90aGVyUHJvcHN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWlubmVyYH0+XG4gICAgICAgICAgICB7aWNvbiAhPT0gbnVsbCAmJiAoXG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17aWNvbiB8fCBJQ09OX0lOVEVOVFNbaW50ZW50IHx8IFwibm9ybWFsXCJdfVxuICAgICAgICAgICAgICAgIHNpemU9e2NvbXB1dGVkU2l6ZSA9PT0gXCJtaW5pXCIgPyAxOCA6IDIwfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pY29uYH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS10ZXh0YH0+XG4gICAgICAgICAgICAgIHshIXRpdGxlICYmIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRpdGxlYH0+e3RpdGxlfTwvZGl2Pn1cbiAgICAgICAgICAgICAgPGRpdj57dGV4dH08L2Rpdj5cbiAgICAgICAgICAgICAgeyEhZXhwYW5kQ29udGVudCAmJiAoXG4gICAgICAgICAgICAgICAgPE1vdGlvbiB0cmFuc2l0aW9uPVwic2xpZGVcIiBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgICAgICAgIHtleHBhbmRlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWV4cGFuZENvbnRlbnRgfT5cbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAge2V4cGFuZENvbnRlbnR9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Nb3Rpb24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtjbG9zYWJsZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1jbG9zZWAsIHtcbiAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LWNsb3NlX3RleHRgXTogISFjbG9zZVRleHQsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2xvc2VUZXh0ID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2xvc2VUZXh0YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2Nsb3NlVGV4dH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2xvc2VJY29uYH1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7ISFleHBhbmRDb250ZW50ICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1leHBhbmRgfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUV4cGFuZH1cbiAgICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZXhwYW5kZWQgPyBcIuaUtui1t1wiIDogXCLlsZXlvIBcIn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9Nb3Rpb24+XG4gIClcbn1cblxuQWxlcnQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5YWz6Zet5ZCO55qEIGhhbmRsZXLvvIzlj4LmlbAgbm9kZVxuICAgKi9cbiAgYWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuWPr+WFs+mXrVxuICAgKi9cbiAgY2xvc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5YWz6Zet5paH5a2XXG4gICAqL1xuICBjbG9zZVRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog5piv5ZCm5bGV5byA77yM5YaF6YOo6amx5YqoXG4gICAqL1xuICBkZWZhdWx0RXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5bGV5byA5YaF5a65XG4gICAqL1xuICBleHBhbmRDb250ZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOaYr+WQpuWxleW8gO+8jOWklumDqOaOp+WItlxuICAgKi9cbiAgZXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6K6+572u5Zu+5qCHXG4gICAqL1xuICBpY29uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog6K6+572u57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJub3JtYWxcIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcImluZm9cIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOWFs+mXreaXtueahCBoYW5kbGVy77yM5Y+C5pWwIG5vZGVcbiAgICovXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5bGV5byA54q25oCB5Y+Y5YyW5pe255qEIGhhbmRsZXLvvIzlj4LmlbDkuLogYm9vbFxuICAgKi9cbiAgb25FeHBhbmRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCJdKSxcbiAgLyoqXG4gICAqIOaPkOmGkuWGheWuuVxuICAgKi9cbiAgdGV4dDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsaWdodFwiXSksXG4gIC8qKlxuICAgKiDmj5DphpLmoIfpophcbiAgICovXG4gIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcbn1cblxuQWxlcnQuZGVmYXVsdFByb3BzID0ge1xuICBhZnRlckNsb3NlOiAoKSA9PiB7fSxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGNsb3NhYmxlOiBmYWxzZSxcbiAgY2xvc2VUZXh0OiBudWxsLFxuICBkZWZhdWx0RXhwYW5kZWQ6IG51bGwsXG4gIGV4cGFuZENvbnRlbnQ6IG51bGwsXG4gIGV4cGFuZGVkOiBudWxsLFxuICBpY29uOiB1bmRlZmluZWQsXG4gIGludGVudDogXCJub3JtYWxcIixcbiAgb25DbG9zZTogKCkgPT4ge30sXG4gIG9uRXhwYW5kQ2hhbmdlOiAoKSA9PiB7fSxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB0aGVtZTogbnVsbCxcbiAgdGl0bGU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XG4iXX0=