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

var _popover = _interopRequireDefault(require("../popover"));

var _Context = require("./Context");

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-form";

var Item = function Item(_ref) {
  var children = _ref.children,
      className = _ref.className,
      label = _ref.label,
      labelAlign = _ref.labelAlign,
      labelHelper = _ref.labelHelper,
      labelHelperIcon = _ref.labelHelperIcon,
      labelHelperProps = _ref.labelHelperProps,
      labelSize = _ref.labelSize,
      labelClassName = _ref.labelClassName,
      labelStyle = _ref.labelStyle,
      style = _ref.style,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "label", "labelAlign", "labelHelper", "labelHelperIcon", "labelHelperProps", "labelSize", "labelClassName", "labelStyle", "style"]);

  var _useContext = (0, _react.useContext)(_Context.FormContext),
      itemClassNameContext = _useContext.itemClassName,
      itemStyle = _useContext.itemStyle,
      labelAlignContext = _useContext.labelAlign,
      labelStyleContext = _useContext.labelStyle,
      labelSizeContext = _useContext.labelSize,
      labelClassNameContext = _useContext.labelClassName;

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-item"), itemClassNameContext);
  var align = labelAlign || labelAlignContext;

  switch (align) {
    case "left":
      align = "flex-start";
      break;

    case "right":
      align = "flex-end";
      break;

    case "center":
      align = "center";
      break;

    default:
  }

  var alignStyle = align ? {
    justifyContent: align
  } : {};
  return _react["default"].createElement("div", _extends({
    className: classSet,
    style: _objectSpread(_objectSpread({}, itemStyle), style)
  }, otherProps), !!label && _react["default"].createElement("div", {
    className: (0, _classnames["default"])("".concat(prefix, "-label"), labelClassNameContext),
    style: _objectSpread(_objectSpread(_objectSpread({
      width: "".concat(labelSize || labelSizeContext, "em")
    }, alignStyle), labelStyleContext), labelStyle)
  }, label, !!labelHelper && _react["default"].createElement(_popover["default"], _extends({
    popup: labelHelper,
    alignEdge: false,
    placement: "bottom"
  }, labelHelperProps), _react["default"].createElement(_icon["default"], {
    icon: labelHelperIcon || "help-circle",
    interactive: true,
    color: "var(--gray-600)",
    style: {
      marginLeft: "4px"
    }
  }))), _react["default"].createElement("div", {
    className: "".concat(prefix, "-control")
  }, children));
};

Item.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  label: _propTypes["default"].node,
  labelAlign: _propTypes["default"].oneOf([null, "left", "center", "right"]),
  labelClassName: _propTypes["default"].string,
  labelHelper: _propTypes["default"].node,
  labelHelperIcon: _propTypes["default"].any,
  labelHelperProps: _propTypes["default"].object,
  labelSize: _propTypes["default"].number,
  labelStyle: _propTypes["default"].object,
  style: _propTypes["default"].object
};
Item.defaultProps = {
  children: null,
  className: undefined,
  label: null,
  labelAlign: null,
  labelHelper: null,
  labelHelperIcon: "help-circle",
  labelHelperProps: {},
  labelSize: null,
  labelClassName: undefined,
  labelStyle: {},
  style: {}
};
var _default = Item;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9JdGVtLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJJdGVtIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJsYWJlbCIsImxhYmVsQWxpZ24iLCJsYWJlbEhlbHBlciIsImxhYmVsSGVscGVySWNvbiIsImxhYmVsSGVscGVyUHJvcHMiLCJsYWJlbFNpemUiLCJsYWJlbENsYXNzTmFtZSIsImxhYmVsU3R5bGUiLCJzdHlsZSIsIm90aGVyUHJvcHMiLCJGb3JtQ29udGV4dCIsIml0ZW1DbGFzc05hbWVDb250ZXh0IiwiaXRlbUNsYXNzTmFtZSIsIml0ZW1TdHlsZSIsImxhYmVsQWxpZ25Db250ZXh0IiwibGFiZWxTdHlsZUNvbnRleHQiLCJsYWJlbFNpemVDb250ZXh0IiwibGFiZWxDbGFzc05hbWVDb250ZXh0IiwiY2xhc3NTZXQiLCJhbGlnbiIsImFsaWduU3R5bGUiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwibWFyZ2luTGVmdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJvbmVPZiIsImFueSIsIm9iamVjdCIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFdBQWY7O0FBcURBLElBQU1DLElBQTBCLEdBQUcsU0FBN0JBLElBQTZCLE9BYWpCO0FBQUEsTUFaaEJDLFFBWWdCLFFBWmhCQSxRQVlnQjtBQUFBLE1BWGhCQyxTQVdnQixRQVhoQkEsU0FXZ0I7QUFBQSxNQVZoQkMsS0FVZ0IsUUFWaEJBLEtBVWdCO0FBQUEsTUFUaEJDLFVBU2dCLFFBVGhCQSxVQVNnQjtBQUFBLE1BUmhCQyxXQVFnQixRQVJoQkEsV0FRZ0I7QUFBQSxNQVBoQkMsZUFPZ0IsUUFQaEJBLGVBT2dCO0FBQUEs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QUFVTSxNQXBDTjtBQXdDZnhCLEVBQUFBLFVBQVUsRUFBRWtCLHNCQUFVSyxNQXhDUDtBQTRDZnRCLEVBQUFBLEtBQUssRUFBRWlCLHNCQUFVSztBQTVDRixDQUFqQjtBQStDQWpDLElBQUksQ0FBQ21DLFlBQUwsR0FBb0I7QUFDbEJsQyxFQUFBQSxRQUFRLEVBQUUsSUFEUTtBQUVsQkMsRUFBQUEsU0FBUyxFQUFFa0MsU0FGTztBQUdsQmpDLEVBQUFBLEtBQUssRUFBRSxJQUhXO0FBSWxCQyxFQUFBQSxVQUFVLEVBQUUsSUFKTTtBQUtsQkMsRUFBQUEsV0FBVyxFQUFFLElBTEs7QUFNbEJDLEVBQUFBLGVBQWUsRUFBRSxhQU5DO0FBT2xCQyxFQUFBQSxnQkFBZ0IsRUFBRSxFQVBBO0FBUWxCQyxFQUFBQSxTQUFTLEVBQUUsSUFSTztBQVNsQkMsRUFBQUEsY0FBYyxFQUFFMkIsU0FURTtBQVVsQjFCLEVBQUFBLFVBQVUsRUFBRSxFQVZNO0FBV2xCQyxFQUFBQSxLQUFLLEVBQUU7QUFYVyxDQUFwQjtlQWNlWCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgSWNvbiwgeyBJY29uTmFtZXMgfSBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgUG9wb3ZlciwgeyBJUG9wb3ZlclByb3BzIH0gZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IHsgRm9ybUNvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktZm9ybVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUl0ZW1Qcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGxhYmVsXG4gICAqL1xuICBsYWJlbD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICogbGFiZWwg5a2X56ym5a+56b2Q5pa55byPXG4gICAqL1xuICBsYWJlbEFsaWduPzogXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiIHwgbnVsbFxuICAvKipcbiAgICogbGFiZWwg6Kej6YeK5YaF5a65XG4gICAqL1xuICBsYWJlbEhlbHBlcj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICogbGFiZWwg6Kej6YeK5YaF5a6555qEIEljb25cbiAgICovXG4gIGxhYmVsSGVscGVySWNvbj86IEljb25OYW1lc1xuICAvKipcbiAgICogbGFiZWwg6Kej6YeK5YaF5a655omA5L2/55So55qEIFBvcG92ZXIg55qEIFByb3BzXG4gICAqL1xuICBsYWJlbEhlbHBlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICAvKipcbiAgICogbGFiZWwg5a2X56ym5pWw77yMRm9ybSDkvJrku6UgZW0g5Y2V5L2N6K6+572uIGxhYmVsIOWuveW6plxuICAgKi9cbiAgbGFiZWxTaXplPzogbnVtYmVyIHwgbnVsbFxuICAvKipcbiAgICogbGFiZWwgY2xhc3NOYW1lXG4gICAqL1xuICBsYWJlbENsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICogbGFiZWwgc3R5bGVcbiAgICovXG4gIGxhYmVsU3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiDpmYTliqAgc3R5bGVcbiAgICovXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xufVxuXG4vKipcbiAqIOihqOWNlSBpdGVtXG4gKi9cbmNvbnN0IEl0ZW06IFJlYWN0LkZDPElJdGVtUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgbGFiZWwsXG4gIGxhYmVsQWxpZ24sXG4gIGxhYmVsSGVscGVyLFxuICBsYWJlbEhlbHBlckljb24sXG4gIGxhYmVsSGVscGVyUHJvcHMsXG4gIGxhYmVsU2l6ZSxcbiAgbGFiZWxDbGFzc05hbWUsXG4gIGxhYmVsU3R5bGUsXG4gIHN0eWxlLFxuICAuLi5vdGhlclByb3BzXG59OiBJSXRlbVByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpdGVtQ2xhc3NOYW1lOiBpdGVtQ2xhc3NOYW1lQ29udGV4dCxcbiAgICBpdGVtU3R5bGUsXG4gICAgbGFiZWxBbGlnbjogbGFiZWxBbGlnbkNvbnRleHQsXG4gICAgbGFiZWxTdHlsZTogbGFiZWxTdHlsZUNvbnRleHQsXG4gICAgbGFiZWxTaXplOiBsYWJlbFNpemVDb250ZXh0LFxuICAgIGxhYmVsQ2xhc3NOYW1lOiBsYWJlbENsYXNzTmFtZUNvbnRleHQsXG4gIH0gPSB1c2VDb250ZXh0KEZvcm1Db250ZXh0KVxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0taXRlbWAsIGl0ZW1DbGFzc05hbWVDb250ZXh0KVxuXG4gIGxldCBhbGlnbjogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCA9IGxhYmVsQWxpZ24gfHwgbGFiZWxBbGlnbkNvbnRleHRcbiAgc3dpdGNoIChhbGlnbikge1xuICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICBhbGlnbiA9IFwiZmxleC1zdGFydFwiXG4gICAgICBicmVha1xuICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgYWxpZ24gPSBcImZsZXgtZW5kXCJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBcImNlbnRlclwiOlxuICAgICAgYWxpZ24gPSBcImNlbnRlclwiXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gIH1cblxuICBjb25zdCBhbGlnblN0eWxlID0gYWxpZ24gPyB7IGp1c3RpZnlDb250ZW50OiBhbGlnbiB9IDoge31cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5pdGVtU3R5bGUsXG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgfX1cbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgID5cbiAgICAgIHshIWxhYmVsICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LWxhYmVsYCwgbGFiZWxDbGFzc05hbWVDb250ZXh0KX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAke2xhYmVsU2l6ZSB8fCBsYWJlbFNpemVDb250ZXh0fWVtYCxcbiAgICAgICAgICAgIC4uLmFsaWduU3R5bGUsXG4gICAgICAgICAgICAuLi5sYWJlbFN0eWxlQ29udGV4dCxcbiAgICAgICAgICAgIC4uLmxhYmVsU3R5bGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICB7ISFsYWJlbEhlbHBlciAmJiAoXG4gICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICBwb3B1cD17bGFiZWxIZWxwZXJ9XG4gICAgICAgICAgICAgIGFsaWduRWRnZT17ZmFsc2V9XG4gICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgIHsuLi5sYWJlbEhlbHBlclByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIGljb249e2xhYmVsSGVscGVySWNvbiB8fCBcImhlbHAtY2lyY2xlXCJ9XG4gICAgICAgICAgICAgICAgaW50ZXJhY3RpdmVcbiAgICAgICAgICAgICAgICBjb2xvcj1cInZhcigtLWdyYXktNjAwKVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI0cHhcIiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNvbnRyb2xgfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuSXRlbS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogbGFiZWxcbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIGxhYmVsIOWtl+espuWvuem9kOaWueW8j1xuICAgKi9cbiAgbGFiZWxBbGlnbjogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCBcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJyaWdodFwiXSksXG4gIC8qKlxuICAgKiBsYWJlbCBjbGFzc05hbWVcbiAgICovXG4gIGxhYmVsQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogbGFiZWwg6Kej6YeK5YaF5a65XG4gICAqL1xuICBsYWJlbEhlbHBlcjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiBsYWJlbCDop6Pph4rlhoXlrrnnmoQgSWNvblxuICAgKi9cbiAgbGFiZWxIZWxwZXJJY29uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICogbGFiZWwg6Kej6YeK5YaF5a655omA5L2/55So55qEIFBvcG92ZXIg55qEIFByb3BzXG4gICAqL1xuICBsYWJlbEhlbHBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogbGFiZWwg5a2X56ym5pWw77yMRm9ybSDkvJrku6UgZW0g5Y2V5L2N6K6+572uIGxhYmVsIOWuveW6plxuICAgKi9cbiAgbGFiZWxTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbGFiZWwgc3R5bGVcbiAgICovXG4gIGxhYmVsU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDpmYTliqAgc3R5bGVcbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5JdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBsYWJlbDogbnVsbCxcbiAgbGFiZWxBbGlnbjogbnVsbCxcbiAgbGFiZWxIZWxwZXI6IG51bGwsXG4gIGxhYmVsSGVscGVySWNvbjogXCJoZWxwLWNpcmNsZVwiLFxuICBsYWJlbEhlbHBlclByb3BzOiB7fSxcbiAgbGFiZWxTaXplOiBudWxsLFxuICBsYWJlbENsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBsYWJlbFN0eWxlOiB7fSxcbiAgc3R5bGU6IHt9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtXG4iXX0=