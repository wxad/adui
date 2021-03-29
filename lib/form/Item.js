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
      labelStyle = _ref.labelStyle,
      style = _ref.style,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "label", "labelAlign", "labelHelper", "labelHelperIcon", "labelHelperProps", "labelSize", "labelStyle", "style"]);

  var _useContext = (0, _react.useContext)(_Context.FormContext),
      labelAlignContext = _useContext.labelAlign,
      itemStyle = _useContext.itemStyle,
      labelStyleContext = _useContext.labelStyle,
      labelSizeContext = _useContext.labelSize;

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-item"));
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
    className: "".concat(prefix, "-label"),
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
  labelStyle: {},
  style: {}
};
var _default = Item;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9JdGVtLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJJdGVtIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJsYWJlbCIsImxhYmVsQWxpZ24iLCJsYWJlbEhlbHBlciIsImxhYmVsSGVscGVySWNvbiIsImxhYmVsSGVscGVyUHJvcHMiLCJsYWJlbFNpemUiLCJsYWJlbFN0eWxlIiwic3R5bGUiLCJvdGhlclByb3BzIiwiRm9ybUNvbnRleHQiLCJsYWJlbEFsaWduQ29udGV4dCIsIml0ZW1TdHlsZSIsImxhYmVsU3R5bGVDb250ZXh0IiwibGFiZWxTaXplQ29udGV4dCIsImNsYXNzU2V0IiwiYWxpZ24iLCJhbGlnblN0eWxlIiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwib25lT2YiLCJhbnkiLCJvYmplY3QiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxXQUFmOztBQWlEQSxJQUFNQyxJQUEwQixHQUFHLFNBQTdCQSxJQUE2QixPQVlqQjtBQUFBLE1BWGhCQyxRQVdnQixRQVhoQkEsUUFXZ0I7QUFBQSxNQVZoQkMsU0FVZ0IsUUFWaEJBLFNBVWdCO0FBQUEsTUFUaEJDLEtBU2dCLFFBVGhCQSxLQVNnQjtBQUFBLE1BUmhCQyxVQVFnQixRQVJoQkEsVUFRZ0I7QUFBQSxNQVBoQkMsV0FPZ0IsUUFQaEJBLFdBT2dCO0FBQUEsTUFOaEJDLGVBTWdCLFFBTmhCQSxlQU1nQjtBQUFBLE1BTGhCQyxnQkFLZ0IsUUFMaEJBLGdCQUtnQjtBQUFBLE1BSmhCQyxTQUlnQixRQUpoQkEsU0FJZ0I7QUFBQSxNQUhoQkMsVUFHZ0IsUUFI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S2xCQyxFQUFBQSxXQUFXLEVBQUUsSUFMSztBQU1sQkMsRUFBQUEsZUFBZSxFQUFFLGFBTkM7QUFPbEJDLEVBQUFBLGdCQUFnQixFQUFFLEVBUEE7QUFRbEJDLEVBQUFBLFNBQVMsRUFBRSxJQVJPO0FBU2xCQyxFQUFBQSxVQUFVLEVBQUUsRUFUTTtBQVVsQkMsRUFBQUEsS0FBSyxFQUFFO0FBVlcsQ0FBcEI7ZUFhZVYsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEljb24sIHsgSWNvbk5hbWVzIH0gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCB7IEZvcm1Db250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWZvcm1cIlxuXG5leHBvcnQgaW50ZXJmYWNlIElJdGVtUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiBsYWJlbFxuICAgKi9cbiAgbGFiZWw/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIGxhYmVsIOWtl+espuWvuem9kOaWueW8j1xuICAgKi9cbiAgbGFiZWxBbGlnbj86IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIiB8IG51bGxcbiAgLyoqXG4gICAqIGxhYmVsIOino+mHiuWGheWuuVxuICAgKi9cbiAgbGFiZWxIZWxwZXI/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIGxhYmVsIOino+mHiuWGheWuueeahCBJY29uXG4gICAqL1xuICBsYWJlbEhlbHBlckljb24/OiBJY29uTmFtZXNcbiAgLyoqXG4gICAqIGxhYmVsIOino+mHiuWGheWuueaJgOS9v+eUqOeahCBQb3BvdmVyIOeahCBQcm9wc1xuICAgKi9cbiAgbGFiZWxIZWxwZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgLyoqXG4gICAqIGxhYmVsIOWtl+espuaVsO+8jEZvcm0g5Lya5LulIGVtIOWNleS9jeiuvue9riBsYWJlbCDlrr3luqZcbiAgICovXG4gIGxhYmVsU2l6ZT86IG51bWJlciB8IG51bGxcbiAgLyoqXG4gICAqIGxhYmVsIHN0eWxlXG4gICAqL1xuICBsYWJlbFN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog6ZmE5YqgIHN0eWxlXG4gICAqL1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbn1cblxuLyoqXG4gKiDooajljZUgaXRlbVxuICovXG5jb25zdCBJdGVtOiBSZWFjdC5GQzxJSXRlbVByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGxhYmVsLFxuICBsYWJlbEFsaWduLFxuICBsYWJlbEhlbHBlcixcbiAgbGFiZWxIZWxwZXJJY29uLFxuICBsYWJlbEhlbHBlclByb3BzLFxuICBsYWJlbFNpemUsXG4gIGxhYmVsU3R5bGUsXG4gIHN0eWxlLFxuICAuLi5vdGhlclByb3BzXG59OiBJSXRlbVByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBsYWJlbEFsaWduOiBsYWJlbEFsaWduQ29udGV4dCxcbiAgICBpdGVtU3R5bGUsXG4gICAgbGFiZWxTdHlsZTogbGFiZWxTdHlsZUNvbnRleHQsXG4gICAgbGFiZWxTaXplOiBsYWJlbFNpemVDb250ZXh0LFxuICB9ID0gdXNlQ29udGV4dChGb3JtQ29udGV4dClcblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LWl0ZW1gKVxuXG4gIGxldCBhbGlnbjogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCA9IGxhYmVsQWxpZ24gfHwgbGFiZWxBbGlnbkNvbnRleHRcbiAgc3dpdGNoIChhbGlnbikge1xuICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICBhbGlnbiA9IFwiZmxleC1zdGFydFwiXG4gICAgICBicmVha1xuICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgYWxpZ24gPSBcImZsZXgtZW5kXCJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBcImNlbnRlclwiOlxuICAgICAgYWxpZ24gPSBcImNlbnRlclwiXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gIH1cblxuICBjb25zdCBhbGlnblN0eWxlID0gYWxpZ24gPyB7IGp1c3RpZnlDb250ZW50OiBhbGlnbiB9IDoge31cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5pdGVtU3R5bGUsXG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgfX1cbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgID5cbiAgICAgIHshIWxhYmVsICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1sYWJlbGB9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtsYWJlbFNpemUgfHwgbGFiZWxTaXplQ29udGV4dH1lbWAsXG4gICAgICAgICAgICAuLi5hbGlnblN0eWxlLFxuICAgICAgICAgICAgLi4ubGFiZWxTdHlsZUNvbnRleHQsXG4gICAgICAgICAgICAuLi5sYWJlbFN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgeyEhbGFiZWxIZWxwZXIgJiYgKFxuICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgcG9wdXA9e2xhYmVsSGVscGVyfVxuICAgICAgICAgICAgICBhbGlnbkVkZ2U9e2ZhbHNlfVxuICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICB7Li4ubGFiZWxIZWxwZXJQcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICBpY29uPXtsYWJlbEhlbHBlckljb24gfHwgXCJoZWxwLWNpcmNsZVwifVxuICAgICAgICAgICAgICAgIGludGVyYWN0aXZlXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ2YXIoLS1ncmF5LTYwMClcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiNHB4XCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jb250cm9sYH0+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbkl0ZW0ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGxhYmVsXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiBsYWJlbCDlrZfnrKblr7npvZDmlrnlvI9cbiAgICovXG4gIGxhYmVsQWxpZ246IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0pLFxuICAvKipcbiAgICogbGFiZWwg6Kej6YeK5YaF5a65XG4gICAqL1xuICBsYWJlbEhlbHBlcjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiBsYWJlbCDop6Pph4rlhoXlrrnnmoQgSWNvblxuICAgKi9cbiAgbGFiZWxIZWxwZXJJY29uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICogbGFiZWwg6Kej6YeK5YaF5a655omA5L2/55So55qEIFBvcG92ZXIg55qEIFByb3BzXG4gICAqL1xuICBsYWJlbEhlbHBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogbGFiZWwg5a2X56ym5pWw77yMRm9ybSDkvJrku6UgZW0g5Y2V5L2N6K6+572uIGxhYmVsIOWuveW6plxuICAgKi9cbiAgbGFiZWxTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbGFiZWwgc3R5bGVcbiAgICovXG4gIGxhYmVsU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDpmYTliqAgc3R5bGVcbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5JdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBsYWJlbDogbnVsbCxcbiAgbGFiZWxBbGlnbjogbnVsbCxcbiAgbGFiZWxIZWxwZXI6IG51bGwsXG4gIGxhYmVsSGVscGVySWNvbjogXCJoZWxwLWNpcmNsZVwiLFxuICBsYWJlbEhlbHBlclByb3BzOiB7fSxcbiAgbGFiZWxTaXplOiBudWxsLFxuICBsYWJlbFN0eWxlOiB7fSxcbiAgc3R5bGU6IHt9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtXG4iXX0=