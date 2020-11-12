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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkFsZXJ0IiwiYWZ0ZXJDbG9zZSIsImNsYXNzTmFtZSIsImNsb3NhYmxlIiwiY2xvc2VUZXh0IiwiZGVmYXVsdEV4cGFuZGVkIiwiZXhwYW5kQ29udGVudCIsImV4cGFuZGVkUHJvcCIsImV4cGFuZGVkIiwiaWNvbiIsImludGVudCIsIm9uQ2xvc2UiLCJvbkV4cGFuZENoYW5nZSIsInNpemUiLCJ0ZXh0IiwidGl0bGUiLCJ0aGVtZSIsIm90aGVyUHJvcHMiLCJ1bmRlZmluZWQiLCJzZXRFeHBhbmRlZCIsImNsb3NpbmciLCJzZXRDbG9zaW5nIiwiQ29uZmlnQ29udGV4dCIsInNpemVDb250ZXh0IiwiY29tcHV0ZWRTaXplIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVFeHBhbmQiLCJjbGFzc1NldCIsIklDT05fSU5URU5UUyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJzdHJpbmciLCJib29sIiwibm9kZSIsImFueSIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxZQUFmOztBQXNFQSxJQUFNQyxLQUEyQyxHQUFHLFNBQTlDQSxLQUE4QyxPQWlCakM7QUFBQSxNQWhCakJDLFVBZ0JpQixRQWhCakJBLFVBZ0JpQjtBQUFBLE1BZmpCQyxTQWVpQixRQWZqQkEsU0FlaUI7QUFBQSxNQWRqQkMsUUFjaUIsUUFkakJBLFFBY2lCO0FBQUEsTUFiakJDLFNBYWlCLFFBYmpCQSxTQWFpQjtBQUFBLE1BWmpCQyxlQVlpQixRQVpqQkEsZUFZaUI7QUFBQSxNQVhqQkMsYUFXaUIsUUFYakJBLGFBV2lCO0FBQUEsTUFWUEMsWUFVTyxRQVZqQkMs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Y25CRCxFQUFBQSxLQUFLLEVBQUU7QUFkWSxDQUFyQjtlQWlCZWYsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBJY29uLCB7IEljb25OYW1lcyB9IGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBJQ09OX0lOVEVOVFMgZnJvbSBcIi4vaWNvbkludGVudHNcIlxuaW1wb3J0IE1vdGlvbiBmcm9tIFwiLi4vbW90aW9uXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1hbGVydFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFsZXJ0UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWFs+mXreWQjueahCBoYW5kbGVy77yM5Y+C5pWwIG5vZGVcbiAgICovXG4gIGFmdGVyQ2xvc2U/OiAoKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm5Y+v5YWz6ZetXG4gICAqL1xuICBjbG9zYWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWFs+mXreaWh+Wtl1xuICAgKi9cbiAgY2xvc2VUZXh0PzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDmmK/lkKblsZXlvIDvvIzlhoXpg6jpqbHliqhcbiAgICovXG4gIGRlZmF1bHRFeHBhbmRlZD86IGJvb2xlYW4gfCBudWxsXG4gIC8qKlxuICAgKiDlsZXlvIDlhoXlrrlcbiAgICovXG4gIGV4cGFuZENvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOaYr+WQpuWxleW8gO+8jOWklumDqOaOp+WItlxuICAgKi9cbiAgZXhwYW5kZWQ/OiBib29sZWFuIHwgbnVsbFxuICAvKipcbiAgICog6K6+572u5Zu+5qCHXG4gICAqL1xuICBpY29uPzogSWNvbk5hbWVzXG4gIC8qKlxuICAgKiDorr7nva7nsbvlnotcbiAgICovXG4gIGludGVudD86IFwibm9ybWFsXCIgfCBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJpbmZvXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCJcbiAgLyoqXG4gICAqIOWFs+mXreaXtueahCBoYW5kbGVy77yM5Y+C5pWwIG5vZGVcbiAgICovXG4gIG9uQ2xvc2U/OiAobm9kZTogSFRNTEVsZW1lbnQpID0+IHZvaWRcbiAgLyoqXG4gICAqIOWxleW8gOeKtuaAgeWPmOWMluaXtueahCBoYW5kbGVy77yM5Y+C5pWw5Li6IGJvb2xcbiAgICovXG4gIG9uRXhwYW5kQ2hhbmdlPzogKGV4cGFuZGVkOiBib29sZWFuKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCJcbiAgLyoqXG4gICAqIOaPkOmGkuWGheWuuVxuICAgKi9cbiAgdGV4dDogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lPzogbnVsbCB8IFwibGlnaHRcIlxuICAvKipcbiAgICog5o+Q6YaS5qCH6aKYXG4gICAqL1xuICB0aXRsZT86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG4vKipcbiAqIOaPkOmGkuaYr+WGheWuueeahOW4uOaAgeOAgeWNs+aXtuaAp+aPkOekuu+8jOWxleekuumcgOimgeeUqOaIt+WNs+aXtuWFs+azqOeahOS/oeaBr+OAglxuICog5LiO5a+56K+d5qGGIERpYWxvZyDmiJbmsJTms6Hmj5DnpLogUG9wb3ZlciDkuI3lkIzvvIzmj5DphpIgQWxlcnQg6YCa5bi45bi46am75Zyo6aG16Z2i5Lit77yM5LiO6aG16Z2i5YaF5a655pyJ5pu05by655qE5YWz6IGU5oCn44CCXG4gKi9cbmNvbnN0IEFsZXJ0OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJQWxlcnRQcm9wcz4gPSAoe1xuICBhZnRlckNsb3NlLFxuICBjbGFzc05hbWUsXG4gIGNsb3NhYmxlLFxuICBjbG9zZVRleHQsXG4gIGRlZmF1bHRFeHBhbmRlZCxcbiAgZXhwYW5kQ29udGVudCxcbiAgZXhwYW5kZWQ6IGV4cGFuZGVkUHJvcCxcbiAgaWNvbixcbiAgaW50ZW50LFxuICBvbkNsb3NlLFxuICBvbkV4cGFuZENoYW5nZSxcbiAgc2l6ZSxcbiAgdGV4dCxcbiAgdGl0bGUsXG4gIHRoZW1lLFxuICAuLi5vdGhlclByb3BzXG59OiBJQWxlcnRQcm9wcykgPT4ge1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKFxuICAgIGV4cGFuZGVkUHJvcCAhPT0gbnVsbCAmJiBleHBhbmRlZFByb3AgIT09IHVuZGVmaW5lZFxuICAgICAgPyBleHBhbmRlZFByb3BcbiAgICAgIDogISFkZWZhdWx0RXhwYW5kZWRcbiAgKVxuICBjb25zdCBbY2xvc2luZywgc2V0Q2xvc2luZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gIGlmIChcbiAgICBleHBhbmRlZFByb3AgIT09IG51bGwgJiZcbiAgICBleHBhbmRlZFByb3AgIT09IHVuZGVmaW5lZCAmJlxuICAgIGV4cGFuZGVkICE9PSBleHBhbmRlZFByb3BcbiAgKSB7XG4gICAgc2V0RXhwYW5kZWQoZXhwYW5kZWRQcm9wKVxuICB9XG5cbiAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuICBjb25zdCBjb21wdXRlZFNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZSwgc2l6ZUNvbnRleHQpXG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRDbG9zaW5nKHRydWUpXG5cbiAgY29uc3QgaGFuZGxlRXhwYW5kID0gKCkgPT4ge1xuICAgIGlmIChleHBhbmRlZFByb3AgPT09IG51bGwpIHtcbiAgICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZClcbiAgICB9XG4gICAgaWYgKG9uRXhwYW5kQ2hhbmdlKSB7XG4gICAgICBvbkV4cGFuZENoYW5nZSghZXhwYW5kZWQpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICBgJHtwcmVmaXh9LWJhc2VgLFxuICAgIGAke3ByZWZpeH0tJHtpbnRlbnR9YCxcbiAgICBgJHtwcmVmaXh9LSR7Y29tcHV0ZWRTaXplfWAsXG4gICAge1xuICAgICAgW2Ake3ByZWZpeH0tJHt0aGVtZX1gXTogdGhlbWUsXG4gICAgfVxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8TW90aW9uXG4gICAgICB0cmFuc2l0aW9uPVwiem9vbVwiXG4gICAgICBvbkxlYXZlPXtvbkNsb3NlfVxuICAgICAgYWZ0ZXJMZWF2ZT17YWZ0ZXJDbG9zZX1cbiAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgPlxuICAgICAgeyFjbG9zaW5nICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW5uZXJgfT5cbiAgICAgICAgICAgIHtpY29uICE9PSBudWxsICYmIChcbiAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICBpY29uPXtpY29uIHx8IElDT05fSU5URU5UU1tpbnRlbnQgfHwgXCJub3JtYWxcIl19XG4gICAgICAgICAgICAgICAgc2l6ZT17Y29tcHV0ZWRTaXplID09PSBcIm1pbmlcIiA/IDE4IDogMjB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWljb25gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRleHRgfT5cbiAgICAgICAgICAgICAgeyEhdGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdGl0bGVgfT57dGl0bGV9PC9kaXY+fVxuICAgICAgICAgICAgICA8ZGl2Pnt0ZXh0fTwvZGl2PlxuICAgICAgICAgICAgICB7ISFleHBhbmRDb250ZW50ICYmIChcbiAgICAgICAgICAgICAgICA8TW90aW9uIHRyYW5zaXRpb249XCJzbGlkZVwiIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAgICAgICAge2V4cGFuZGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tZXhwYW5kQ29udGVudGB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICB7ZXhwYW5kQ29udGVudH17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L01vdGlvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2Nsb3NhYmxlICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LWNsb3NlYCwge1xuICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tY2xvc2VfdGV4dGBdOiAhIWNsb3NlVGV4dCxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjbG9zZVRleHQgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1jbG9zZVRleHRgfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y2xvc2VUZXh0fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1jbG9zZUljb25gfVxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshIWV4cGFuZENvbnRlbnQgJiYgKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWV4cGFuZGB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRXhwYW5kfVxuICAgICAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtleHBhbmRlZCA/IFwi5pS26LW3XCIgOiBcIuWxleW8gFwifVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L01vdGlvbj5cbiAgKVxufVxuXG5BbGVydC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlhbPpl63lkI7nmoQgaGFuZGxlcu+8jOWPguaVsCBub2RlXG4gICAqL1xuICBhZnRlckNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm5Y+v5YWz6ZetXG4gICAqL1xuICBjbG9zYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlhbPpl63mloflrZdcbiAgICovXG4gIGNsb3NlVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDmmK/lkKblsZXlvIDvvIzlhoXpg6jpqbHliqhcbiAgICovXG4gIGRlZmF1bHRFeHBhbmRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlsZXlvIDlhoXlrrlcbiAgICovXG4gIGV4cGFuZENvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog5piv5ZCm5bGV5byA77yM5aSW6YOo5o6n5Yi2XG4gICAqL1xuICBleHBhbmRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDorr7nva7lm77moIdcbiAgICovXG4gIGljb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDorr7nva7nsbvlnotcbiAgICovXG4gIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcIm5vcm1hbFwiLFxuICAgIFwicHJpbWFyeVwiLFxuICAgIFwic3VjY2Vzc1wiLFxuICAgIFwiaW5mb1wiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gIF0pLFxuICAvKipcbiAgICog5YWz6Zet5pe255qEIGhhbmRsZXLvvIzlj4LmlbAgbm9kZVxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlsZXlvIDnirbmgIHlj5jljJbml7bnmoQgaGFuZGxlcu+8jOWPguaVsOS4uiBib29sXG4gICAqL1xuICBvbkV4cGFuZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIl0pLFxuICAvKipcbiAgICog5o+Q6YaS5YaF5a65XG4gICAqL1xuICB0ZXh0OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICog6K6+572u5Li76aKYXG4gICAqL1xuICB0aGVtZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCBcImxpZ2h0XCJdKSxcbiAgLyoqXG4gICAqIOaPkOmGkuagh+mimFxuICAgKi9cbiAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxufVxuXG5BbGVydC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFmdGVyQ2xvc2U6ICgpID0+IHt9LFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgY2xvc2FibGU6IGZhbHNlLFxuICBjbG9zZVRleHQ6IG51bGwsXG4gIGRlZmF1bHRFeHBhbmRlZDogbnVsbCxcbiAgZXhwYW5kQ29udGVudDogbnVsbCxcbiAgZXhwYW5kZWQ6IG51bGwsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgaW50ZW50OiBcIm5vcm1hbFwiLFxuICBvbkNsb3NlOiAoKSA9PiB7fSxcbiAgb25FeHBhbmRDaGFuZ2U6ICgpID0+IHt9LFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHRoZW1lOiBudWxsLFxuICB0aXRsZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcbiJdfQ==