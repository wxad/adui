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

  var classSet = (0, _classnames["default"])(className || itemClassNameContext, "".concat(prefix, "-item"));
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
    className: (0, _classnames["default"])("".concat(prefix, "-label"), labelClassName || labelClassNameContext),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9JdGVtLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJJdGVtIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJsYWJlbCIsImxhYmVsQWxpZ24iLCJsYWJlbEhlbHBlciIsImxhYmVsSGVscGVySWNvbiIsImxhYmVsSGVscGVyUHJvcHMiLCJsYWJlbFNpemUiLCJsYWJlbENsYXNzTmFtZSIsImxhYmVsU3R5bGUiLCJzdHlsZSIsIm90aGVyUHJvcHMiLCJGb3JtQ29udGV4dCIsIml0ZW1DbGFzc05hbWVDb250ZXh0IiwiaXRlbUNsYXNzTmFtZSIsIml0ZW1TdHlsZSIsImxhYmVsQWxpZ25Db250ZXh0IiwibGFiZWxTdHlsZUNvbnRleHQiLCJsYWJlbFNpemVDb250ZXh0IiwibGFiZWxDbGFzc05hbWVDb250ZXh0IiwiY2xhc3NTZXQiLCJhbGlnbiIsImFsaWduU3R5bGUiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwibWFyZ2luTGVmdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJvbmVPZiIsImFueSIsIm9iamVjdCIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFdBQWY7O0FBcURBLElBQU1DLElBQTBCLEdBQUcsU0FBN0JBLElBQTZCLE9BYWpCO0FBQUEsTUFaaEJDLFFBWWdCLFFBWmhCQSxRQVlnQjtBQUFBLE1BWGhCQyxTQVdnQixRQVhoQkEsU0FXZ0I7QUFBQSxNQVZoQkMsS0FVZ0IsUUFWaEJBLEtBVWdCO0FBQUEsTUFUaEJDLFVBU2dCLFFBVGhCQSxVQVNnQjtBQUFBLE1BUmhCQyxXQVFnQixRQVJoQkEsV0FRZ0I7QUFBQSxNQVBoQkMsZUFPZ0IsUUFQaEJBLGVBT2dCO0FBQUEs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b0Isc0JBQVVNLE1BcENOO0FBd0NmeEIsRUFBQUEsVUFBVSxFQUFFa0Isc0JBQVVLLE1BeENQO0FBNENmdEIsRUFBQUEsS0FBSyxFQUFFaUIsc0JBQVVLO0FBNUNGLENBQWpCO0FBK0NBakMsSUFBSSxDQUFDbUMsWUFBTCxHQUFvQjtBQUNsQmxDLEVBQUFBLFFBQVEsRUFBRSxJQURRO0FBRWxCQyxFQUFBQSxTQUFTLEVBQUVrQyxTQUZPO0FBR2xCakMsRUFBQUEsS0FBSyxFQUFFLElBSFc7QUFJbEJDLEVBQUFBLFVBQVUsRUFBRSxJQUpNO0FBS2xCQyxFQUFBQSxXQUFXLEVBQUUsSUFMSztBQU1sQkMsRUFBQUEsZUFBZSxFQUFFLGFBTkM7QUFPbEJDLEVBQUFBLGdCQUFnQixFQUFFLEVBUEE7QUFRbEJDLEVBQUFBLFNBQVMsRUFBRSxJQVJPO0FBU2xCQyxFQUFBQSxjQUFjLEVBQUUyQixTQVRFO0FBVWxCMUIsRUFBQUEsVUFBVSxFQUFFLEVBVk07QUFXbEJDLEVBQUFBLEtBQUssRUFBRTtBQVhXLENBQXBCO2VBY2VYLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBJY29uLCB7IEljb25OYW1lcyB9IGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgeyBGb3JtQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1mb3JtXCJcblxuZXhwb3J0IGludGVyZmFjZSBJSXRlbVByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICogbGFiZWxcbiAgICovXG4gIGxhYmVsPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiBsYWJlbCDlrZfnrKblr7npvZDmlrnlvI9cbiAgICovXG4gIGxhYmVsQWxpZ24/OiBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCIgfCBudWxsXG4gIC8qKlxuICAgKiBsYWJlbCDop6Pph4rlhoXlrrlcbiAgICovXG4gIGxhYmVsSGVscGVyPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiBsYWJlbCDop6Pph4rlhoXlrrnnmoQgSWNvblxuICAgKi9cbiAgbGFiZWxIZWxwZXJJY29uPzogSWNvbk5hbWVzXG4gIC8qKlxuICAgKiBsYWJlbCDop6Pph4rlhoXlrrnmiYDkvb/nlKjnmoQgUG9wb3ZlciDnmoQgUHJvcHNcbiAgICovXG4gIGxhYmVsSGVscGVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIC8qKlxuICAgKiBsYWJlbCDlrZfnrKbmlbDvvIxGb3JtIOS8muS7pSBlbSDljZXkvY3orr7nva4gbGFiZWwg5a695bqmXG4gICAqL1xuICBsYWJlbFNpemU/OiBudW1iZXIgfCBudWxsXG4gIC8qKlxuICAgKiBsYWJlbCBjbGFzc05hbWVcbiAgICovXG4gIGxhYmVsQ2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiBsYWJlbCBzdHlsZVxuICAgKi9cbiAgbGFiZWxTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOmZhOWKoCBzdHlsZVxuICAgKi9cbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG59XG5cbi8qKlxuICog6KGo5Y2VIGl0ZW1cbiAqL1xuY29uc3QgSXRlbTogUmVhY3QuRkM8SUl0ZW1Qcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBsYWJlbCxcbiAgbGFiZWxBbGlnbixcbiAgbGFiZWxIZWxwZXIsXG4gIGxhYmVsSGVscGVySWNvbixcbiAgbGFiZWxIZWxwZXJQcm9wcyxcbiAgbGFiZWxTaXplLFxuICBsYWJlbENsYXNzTmFtZSxcbiAgbGFiZWxTdHlsZSxcbiAgc3R5bGUsXG4gIC4uLm90aGVyUHJvcHNcbn06IElJdGVtUHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGl0ZW1DbGFzc05hbWU6IGl0ZW1DbGFzc05hbWVDb250ZXh0LFxuICAgIGl0ZW1TdHlsZSxcbiAgICBsYWJlbEFsaWduOiBsYWJlbEFsaWduQ29udGV4dCxcbiAgICBsYWJlbFN0eWxlOiBsYWJlbFN0eWxlQ29udGV4dCxcbiAgICBsYWJlbFNpemU6IGxhYmVsU2l6ZUNvbnRleHQsXG4gICAgbGFiZWxDbGFzc05hbWU6IGxhYmVsQ2xhc3NOYW1lQ29udGV4dCxcbiAgfSA9IHVzZUNvbnRleHQoRm9ybUNvbnRleHQpXG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzTmFtZSB8fCBpdGVtQ2xhc3NOYW1lQ29udGV4dCxcbiAgICBgJHtwcmVmaXh9LWl0ZW1gXG4gIClcblxuICBsZXQgYWxpZ246IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwgPSBsYWJlbEFsaWduIHx8IGxhYmVsQWxpZ25Db250ZXh0XG4gIHN3aXRjaCAoYWxpZ24pIHtcbiAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgYWxpZ24gPSBcImZsZXgtc3RhcnRcIlxuICAgICAgYnJlYWtcbiAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgIGFsaWduID0gXCJmbGV4LWVuZFwiXG4gICAgICBicmVha1xuICAgIGNhc2UgXCJjZW50ZXJcIjpcbiAgICAgIGFsaWduID0gXCJjZW50ZXJcIlxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICB9XG5cbiAgY29uc3QgYWxpZ25TdHlsZSA9IGFsaWduID8geyBqdXN0aWZ5Q29udGVudDogYWxpZ24gfSA6IHt9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgLi4uaXRlbVN0eWxlLFxuICAgICAgICAuLi5zdHlsZSxcbiAgICAgIH19XG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICA+XG4gICAgICB7ISFsYWJlbCAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICBgJHtwcmVmaXh9LWxhYmVsYCxcbiAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lIHx8IGxhYmVsQ2xhc3NOYW1lQ29udGV4dFxuICAgICAgICAgICl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtsYWJlbFNpemUgfHwgbGFiZWxTaXplQ29udGV4dH1lbWAsXG4gICAgICAgICAgICAuLi5hbGlnblN0eWxlLFxuICAgICAgICAgICAgLi4ubGFiZWxTdHlsZUNvbnRleHQsXG4gICAgICAgICAgICAuLi5sYWJlbFN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgeyEhbGFiZWxIZWxwZXIgJiYgKFxuICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgcG9wdXA9e2xhYmVsSGVscGVyfVxuICAgICAgICAgICAgICBhbGlnbkVkZ2U9e2ZhbHNlfVxuICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICB7Li4ubGFiZWxIZWxwZXJQcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICBpY29uPXtsYWJlbEhlbHBlckljb24gfHwgXCJoZWxwLWNpcmNsZVwifVxuICAgICAgICAgICAgICAgIGludGVyYWN0aXZlXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ2YXIoLS1ncmF5LTYwMClcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiNHB4XCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jb250cm9sYH0+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbkl0ZW0ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGxhYmVsXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiBsYWJlbCDlrZfnrKblr7npvZDmlrnlvI9cbiAgICovXG4gIGxhYmVsQWxpZ246IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0pLFxuICAvKipcbiAgICogbGFiZWwgY2xhc3NOYW1lXG4gICAqL1xuICBsYWJlbENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGxhYmVsIOino+mHiuWGheWuuVxuICAgKi9cbiAgbGFiZWxIZWxwZXI6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogbGFiZWwg6Kej6YeK5YaF5a6555qEIEljb25cbiAgICovXG4gIGxhYmVsSGVscGVySWNvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIGxhYmVsIOino+mHiuWGheWuueaJgOS9v+eUqOeahCBQb3BvdmVyIOeahCBQcm9wc1xuICAgKi9cbiAgbGFiZWxIZWxwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIGxhYmVsIOWtl+espuaVsO+8jEZvcm0g5Lya5LulIGVtIOWNleS9jeiuvue9riBsYWJlbCDlrr3luqZcbiAgICovXG4gIGxhYmVsU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIGxhYmVsIHN0eWxlXG4gICAqL1xuICBsYWJlbFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog6ZmE5YqgIHN0eWxlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuSXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgbGFiZWw6IG51bGwsXG4gIGxhYmVsQWxpZ246IG51bGwsXG4gIGxhYmVsSGVscGVyOiBudWxsLFxuICBsYWJlbEhlbHBlckljb246IFwiaGVscC1jaXJjbGVcIixcbiAgbGFiZWxIZWxwZXJQcm9wczoge30sXG4gIGxhYmVsU2l6ZTogbnVsbCxcbiAgbGFiZWxDbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgbGFiZWxTdHlsZToge30sXG4gIHN0eWxlOiB7fSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbVxuIl19