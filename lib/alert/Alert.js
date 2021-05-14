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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkFsZXJ0IiwiYWZ0ZXJDbG9zZSIsImNsYXNzTmFtZSIsImNsb3NhYmxlIiwiY2xvc2VUZXh0IiwiZGVmYXVsdEV4cGFuZGVkIiwiZXhwYW5kQ29udGVudCIsImV4cGFuZGVkUHJvcCIsImV4cGFuZGVkIiwiaWNvbiIsImludGVudCIsIm9uQ2xvc2UiLCJvbkV4cGFuZENoYW5nZSIsInNpemUiLCJ0ZXh0IiwidGl0bGUiLCJ0aGVtZSIsIm90aGVyUHJvcHMiLCJ1bmRlZmluZWQiLCJzZXRFeHBhbmRlZCIsImNsb3NpbmciLCJzZXRDbG9zaW5nIiwiQ29uZmlnQ29udGV4dCIsInNpemVDb250ZXh0IiwiY29tcHV0ZWRTaXplIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVFeHBhbmQiLCJjbGFzc1NldCIsIklDT05fSU5URU5UUyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJzdHJpbmciLCJib29sIiwibm9kZSIsImFueSIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsWUFBZjs7QUFzRUEsSUFBTUMsS0FBNEIsR0FBRyxTQUEvQkEsS0FBK0IsT0FpQmxCO0FBQUEsTUFoQmpCQyxVQWdCaUIsUUFoQmpCQSxVQWdCaUI7QUFBQSxNQWZqQkMsU0FlaUIsUUFmakJBLFNBZWlCO0FBQUEsTUFkakJDLFFBY2lCLFFBZGpCQSxRQWNpQjtBQUFBLE1BYmpCQyxTQWFpQixRQWJqQkEsU0FhaUI7QUFBQSxNQVpqQkMsZUFZaUIsUUFaakJBLGVBWWlCO0FBQUEsTUFYakJDLGFBV2lCLFFBWGpCQSxhQVdpQjtBQUFBLE1BVlBDLFlBVU8sUUFW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WTtBQWNuQkQsRUFBQUEsS0FBSyxFQUFFO0FBZFksQ0FBckI7ZUFpQmVmLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgSWNvbiwgeyBJY29uTmFtZXMgfSBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgSUNPTl9JTlRFTlRTIGZyb20gXCIuL2ljb25JbnRlbnRzXCJcbmltcG9ydCBNb3Rpb24gZnJvbSBcIi4uL21vdGlvblwiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktYWxlcnRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElBbGVydFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlhbPpl63lkI7nmoQgaGFuZGxlcu+8jOWPguaVsCBub2RlXG4gICAqL1xuICBhZnRlckNsb3NlPzogKCkgPT4gdm9pZFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuWPr+WFs+mXrVxuICAgKi9cbiAgY2xvc2FibGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlhbPpl63mloflrZdcbiAgICovXG4gIGNsb3NlVGV4dD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog5piv5ZCm5bGV5byA77yM5YaF6YOo6amx5YqoXG4gICAqL1xuICBkZWZhdWx0RXhwYW5kZWQ/OiBib29sZWFuIHwgbnVsbFxuICAvKipcbiAgICog5bGV5byA5YaF5a65XG4gICAqL1xuICBleHBhbmRDb250ZW50PzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDmmK/lkKblsZXlvIDvvIzlpJbpg6jmjqfliLZcbiAgICovXG4gIGV4cGFuZGVkPzogYm9vbGVhbiB8IG51bGxcbiAgLyoqXG4gICAqIOiuvue9ruWbvuagh1xuICAgKi9cbiAgaWNvbj86IEljb25OYW1lcyB8IG51bGxcbiAgLyoqXG4gICAqIOiuvue9ruexu+Wei1xuICAgKi9cbiAgaW50ZW50PzogXCJub3JtYWxcIiB8IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcImluZm9cIiB8IFwid2FybmluZ1wiIHwgXCJkYW5nZXJcIlxuICAvKipcbiAgICog5YWz6Zet5pe255qEIGhhbmRsZXLvvIzlj4LmlbAgbm9kZVxuICAgKi9cbiAgb25DbG9zZT86IChub2RlOiBIVE1MRWxlbWVudCkgPT4gdm9pZFxuICAvKipcbiAgICog5bGV5byA54q25oCB5Y+Y5YyW5pe255qEIGhhbmRsZXLvvIzlj4LmlbDkuLogYm9vbFxuICAgKi9cbiAgb25FeHBhbmRDaGFuZ2U/OiAoZXhwYW5kZWQ6IGJvb2xlYW4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIlxuICAvKipcbiAgICog5o+Q6YaS5YaF5a65XG4gICAqL1xuICB0ZXh0OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU/OiBudWxsIHwgXCJsaWdodFwiXG4gIC8qKlxuICAgKiDmj5DphpLmoIfpophcbiAgICovXG4gIHRpdGxlPzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbi8qKlxuICog5o+Q6YaS5piv5YaF5a6555qE5bi45oCB44CB5Y2z5pe25oCn5o+Q56S677yM5bGV56S66ZyA6KaB55So5oi35Y2z5pe25YWz5rOo55qE5L+h5oGv44CCXG4gKiDkuI7lr7nor53moYYgRGlhbG9nIOaIluawlOazoeaPkOekuiBQb3BvdmVyIOS4jeWQjO+8jOaPkOmGkiBBbGVydCDpgJrluLjluLjpqbvlnKjpobXpnaLkuK3vvIzkuI7pobXpnaLlhoXlrrnmnInmm7TlvLrnmoTlhbPogZTmgKfjgIJcbiAqL1xuY29uc3QgQWxlcnQ6IFJlYWN0LkZDPElBbGVydFByb3BzPiA9ICh7XG4gIGFmdGVyQ2xvc2UsXG4gIGNsYXNzTmFtZSxcbiAgY2xvc2FibGUsXG4gIGNsb3NlVGV4dCxcbiAgZGVmYXVsdEV4cGFuZGVkLFxuICBleHBhbmRDb250ZW50LFxuICBleHBhbmRlZDogZXhwYW5kZWRQcm9wLFxuICBpY29uLFxuICBpbnRlbnQsXG4gIG9uQ2xvc2UsXG4gIG9uRXhwYW5kQ2hhbmdlLFxuICBzaXplLFxuICB0ZXh0LFxuICB0aXRsZSxcbiAgdGhlbWUsXG4gIC4uLm90aGVyUHJvcHNcbn06IElBbGVydFByb3BzKSA9PiB7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoXG4gICAgZXhwYW5kZWRQcm9wICE9PSBudWxsICYmIGV4cGFuZGVkUHJvcCAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGV4cGFuZGVkUHJvcFxuICAgICAgOiAhIWRlZmF1bHRFeHBhbmRlZFxuICApXG4gIGNvbnN0IFtjbG9zaW5nLCBzZXRDbG9zaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgaWYgKFxuICAgIGV4cGFuZGVkUHJvcCAhPT0gbnVsbCAmJlxuICAgIGV4cGFuZGVkUHJvcCAhPT0gdW5kZWZpbmVkICYmXG4gICAgZXhwYW5kZWQgIT09IGV4cGFuZGVkUHJvcFxuICApIHtcbiAgICBzZXRFeHBhbmRlZChleHBhbmRlZFByb3ApXG4gIH1cblxuICBjb25zdCB7IHNpemU6IHNpemVDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG4gIGNvbnN0IGNvbXB1dGVkU2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplLCBzaXplQ29udGV4dClcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldENsb3NpbmcodHJ1ZSlcblxuICBjb25zdCBoYW5kbGVFeHBhbmQgPSAoKSA9PiB7XG4gICAgaWYgKGV4cGFuZGVkUHJvcCA9PT0gbnVsbCkge1xuICAgICAgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKVxuICAgIH1cbiAgICBpZiAob25FeHBhbmRDaGFuZ2UpIHtcbiAgICAgIG9uRXhwYW5kQ2hhbmdlKCFleHBhbmRlZClcbiAgICB9XG4gIH1cblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgY2xhc3NOYW1lLFxuICAgIGAke3ByZWZpeH0tYmFzZWAsXG4gICAgYCR7cHJlZml4fS0ke2ludGVudH1gLFxuICAgIGAke3ByZWZpeH0tJHtjb21wdXRlZFNpemV9YCxcbiAgICB7XG4gICAgICBbYCR7cHJlZml4fS0ke3RoZW1lfWBdOiB0aGVtZSxcbiAgICB9XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxNb3Rpb25cbiAgICAgIHRyYW5zaXRpb249XCJ6b29tXCJcbiAgICAgIG9uTGVhdmU9e29uQ2xvc2V9XG4gICAgICBhZnRlckxlYXZlPXthZnRlckNsb3NlfVxuICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICA+XG4gICAgICB7IWNsb3NpbmcgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbm5lcmB9PlxuICAgICAgICAgICAge2ljb24gIT09IG51bGwgJiYgKFxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIGljb249e2ljb24gfHwgSUNPTl9JTlRFTlRTW2ludGVudCB8fCBcIm5vcm1hbFwiXX1cbiAgICAgICAgICAgICAgICBzaXplPXtjb21wdXRlZFNpemUgPT09IFwibWluaVwiID8gMTggOiAyMH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0taWNvbmB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdGV4dGB9PlxuICAgICAgICAgICAgICB7ISF0aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS10aXRsZWB9Pnt0aXRsZX08L2Rpdj59XG4gICAgICAgICAgICAgIDxkaXY+e3RleHR9PC9kaXY+XG4gICAgICAgICAgICAgIHshIWV4cGFuZENvbnRlbnQgJiYgKFxuICAgICAgICAgICAgICAgIDxNb3Rpb24gdHJhbnNpdGlvbj1cInNsaWRlXCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICAgICAgICB7ZXhwYW5kZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1leHBhbmRDb250ZW50YH0+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIHtleHBhbmRDb250ZW50fXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvTW90aW9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7Y2xvc2FibGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tY2xvc2VgLCB7XG4gICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS1jbG9zZV90ZXh0YF06ICEhY2xvc2VUZXh0LFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2Nsb3NlVGV4dCA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNsb3NlVGV4dGB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjbG9zZVRleHR9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNsb3NlSWNvbmB9XG4gICAgICAgICAgICAgICAgICAgIGljb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyEhZXhwYW5kQ29udGVudCAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tZXhwYW5kYH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFeHBhbmR9XG4gICAgICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2V4cGFuZGVkID8gXCLmlLbotbdcIiA6IFwi5bGV5byAXCJ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvTW90aW9uPlxuICApXG59XG5cbkFsZXJ0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOWFs+mXreWQjueahCBoYW5kbGVy77yM5Y+C5pWwIG5vZGVcbiAgICovXG4gIGFmdGVyQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKblj6/lhbPpl61cbiAgICovXG4gIGNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWFs+mXreaWh+Wtl1xuICAgKi9cbiAgY2xvc2VUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOaYr+WQpuWxleW8gO+8jOWGhemDqOmpseWKqFxuICAgKi9cbiAgZGVmYXVsdEV4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWxleW8gOWGheWuuVxuICAgKi9cbiAgZXhwYW5kQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDmmK/lkKblsZXlvIDvvIzlpJbpg6jmjqfliLZcbiAgICovXG4gIGV4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOiuvue9ruWbvuagh1xuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOiuvue9ruexu+Wei1xuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwibm9ybWFsXCIsXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJpbmZvXCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgXSksXG4gIC8qKlxuICAgKiDlhbPpl63ml7bnmoQgaGFuZGxlcu+8jOWPguaVsCBub2RlXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOWxleW8gOeKtuaAgeWPmOWMluaXtueahCBoYW5kbGVy77yM5Y+C5pWw5Li6IGJvb2xcbiAgICovXG4gIG9uRXhwYW5kQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiXSksXG4gIC8qKlxuICAgKiDmj5DphpLlhoXlrrlcbiAgICovXG4gIHRleHQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGlnaHRcIl0pLFxuICAvKipcbiAgICog5o+Q6YaS5qCH6aKYXG4gICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG59XG5cbkFsZXJ0LmRlZmF1bHRQcm9wcyA9IHtcbiAgYWZ0ZXJDbG9zZTogKCkgPT4ge30sXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBjbG9zYWJsZTogZmFsc2UsXG4gIGNsb3NlVGV4dDogbnVsbCxcbiAgZGVmYXVsdEV4cGFuZGVkOiBudWxsLFxuICBleHBhbmRDb250ZW50OiBudWxsLFxuICBleHBhbmRlZDogbnVsbCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICBpbnRlbnQ6IFwibm9ybWFsXCIsXG4gIG9uQ2xvc2U6ICgpID0+IHt9LFxuICBvbkV4cGFuZENoYW5nZTogKCkgPT4ge30sXG4gIHNpemU6IFwic21hbGxcIixcbiAgdGhlbWU6IG51bGwsXG4gIHRpdGxlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuIl19