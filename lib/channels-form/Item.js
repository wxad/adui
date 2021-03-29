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

var prefix = "adui-channels-form";

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
  var labelSizeFinal = labelSize || labelSizeContext;
  var labelFinal = (0, _react.useMemo)(function () {
    var getFormatStrLeng = function getFormatStrLeng(str) {
      var len = str.length;
      var realLength = 0;
      var charCode = -1;

      for (var i = 0; i < len; i += 1) {
        charCode = str.charCodeAt(i);

        if (charCode >= 0 && charCode <= 128) {
          realLength += 0.5;
        } else {
          realLength += 1;
        }
      }

      return Math.ceil(realLength);
    };

    if (typeof label === "string" && labelSizeFinal && getFormatStrLeng(label) - labelSizeFinal === 1) {
      return "".concat(label.slice(0, 4), "\n").concat(label.slice(4));
    }

    return label;
  }, [label]);
  return _react["default"].createElement("div", _extends({
    className: classSet,
    style: _objectSpread(_objectSpread({}, itemStyle), style)
  }, otherProps), !!label && _react["default"].createElement("div", {
    className: "".concat(prefix, "-label"),
    style: _objectSpread(_objectSpread(_objectSpread({
      width: "".concat(labelSizeFinal, "em")
    }, alignStyle), labelStyleContext), labelStyle)
  }, labelFinal, !!labelHelper && _react["default"].createElement(_popover["default"], _extends({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtZm9ybS9JdGVtLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJJdGVtIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJsYWJlbCIsImxhYmVsQWxpZ24iLCJsYWJlbEhlbHBlciIsImxhYmVsSGVscGVySWNvbiIsImxhYmVsSGVscGVyUHJvcHMiLCJsYWJlbFNpemUiLCJsYWJlbFN0eWxlIiwic3R5bGUiLCJvdGhlclByb3BzIiwiRm9ybUNvbnRleHQiLCJsYWJlbEFsaWduQ29udGV4dCIsIml0ZW1TdHlsZSIsImxhYmVsU3R5bGVDb250ZXh0IiwibGFiZWxTaXplQ29udGV4dCIsImNsYXNzU2V0IiwiYWxpZ24iLCJhbGlnblN0eWxlIiwianVzdGlmeUNvbnRlbnQiLCJsYWJlbFNpemVGaW5hbCIsImxhYmVsRmluYWwiLCJnZXRGb3JtYXRTdHJMZW5nIiwic3RyIiwibGVuIiwibGVuZ3RoIiwicmVhbExlbmd0aCIsImNoYXJDb2RlIiwiaSIsImNoYXJDb2RlQXQiLCJNYXRoIiwiY2VpbCIsInNsaWNlIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsInN0cmluZyIsIm9uZU9mIiwiYW55Iiwib2JqZWN0IiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsb0JBQWY7O0FBaURBLElBQU1DLElBQXlDLEdBQUcsU0FBNUNBLElBQTRDLE9BWWhDO0FBQUEsTUFYaEJDLFFBV2dCLFFBWGhCQSxRQVdnQjtBQUFBLE1BVmhCQyxTQVVnQixRQVZoQkEsU0FVZ0I7QUFBQSxNQVRoQkMsS0FTZ0IsUUFUaEJBLEtBU2dCO0FBQUEsTUFSaEJDLFVBUWdCLFFBUmhCQSxVQVFnQjtBQUFB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QUZPO0FBR2xCMUMsRUFBQUEsS0FBSyxFQUFFLElBSFc7QUFJbEJDLEVBQUFBLFVBQVUsRUFBRSxJQUpNO0FBS2xCQyxFQUFBQSxXQUFXLEVBQUUsSUFMSztBQU1sQkMsRUFBQUEsZUFBZSxFQUFFLGFBTkM7QUFPbEJDLEVBQUFBLGdCQUFnQixFQUFFLEVBUEE7QUFRbEJDLEVBQUFBLFNBQVMsRUFBRSxJQVJPO0FBU2xCQyxFQUFBQSxVQUFVLEVBQUUsRUFUTTtBQVVsQkMsRUFBQUEsS0FBSyxFQUFFO0FBVlcsQ0FBcEI7ZUFhZVYsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEljb24sIHsgSWNvbk5hbWVzIH0gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCB7IEZvcm1Db250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNoYW5uZWxzLWZvcm1cIlxuXG5leHBvcnQgaW50ZXJmYWNlIElJdGVtUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiBsYWJlbFxuICAgKi9cbiAgbGFiZWw/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIGxhYmVsIOWtl+espuWvuem9kOaWueW8j1xuICAgKi9cbiAgbGFiZWxBbGlnbj86IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIiB8IG51bGxcbiAgLyoqXG4gICAqIGxhYmVsIOino+mHiuWGheWuuVxuICAgKi9cbiAgbGFiZWxIZWxwZXI/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIGxhYmVsIOino+mHiuWGheWuueeahCBJY29uXG4gICAqL1xuICBsYWJlbEhlbHBlckljb24/OiBJY29uTmFtZXNcbiAgLyoqXG4gICAqIGxhYmVsIOino+mHiuWGheWuueaJgOS9v+eUqOeahCBQb3BvdmVyIOeahCBQcm9wc1xuICAgKi9cbiAgbGFiZWxIZWxwZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgLyoqXG4gICAqIGxhYmVsIOWtl+espuaVsO+8jEZvcm0g5Lya5LulIGVtIOWNleS9jeiuvue9riBsYWJlbCDlrr3luqZcbiAgICovXG4gIGxhYmVsU2l6ZT86IG51bWJlciB8IG51bGxcbiAgLyoqXG4gICAqIGxhYmVsIHN0eWxlXG4gICAqL1xuICBsYWJlbFN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog6ZmE5YqgIHN0eWxlXG4gICAqL1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbn1cblxuLyoqXG4gKiDooajljZUgaXRlbVxuICovXG5jb25zdCBJdGVtOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJSXRlbVByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGxhYmVsLFxuICBsYWJlbEFsaWduLFxuICBsYWJlbEhlbHBlcixcbiAgbGFiZWxIZWxwZXJJY29uLFxuICBsYWJlbEhlbHBlclByb3BzLFxuICBsYWJlbFNpemUsXG4gIGxhYmVsU3R5bGUsXG4gIHN0eWxlLFxuICAuLi5vdGhlclByb3BzXG59OiBJSXRlbVByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBsYWJlbEFsaWduOiBsYWJlbEFsaWduQ29udGV4dCxcbiAgICBpdGVtU3R5bGUsXG4gICAgbGFiZWxTdHlsZTogbGFiZWxTdHlsZUNvbnRleHQsXG4gICAgbGFiZWxTaXplOiBsYWJlbFNpemVDb250ZXh0LFxuICB9ID0gdXNlQ29udGV4dChGb3JtQ29udGV4dClcblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LWl0ZW1gKVxuXG4gIGxldCBhbGlnbjogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCA9IGxhYmVsQWxpZ24gfHwgbGFiZWxBbGlnbkNvbnRleHRcbiAgc3dpdGNoIChhbGlnbikge1xuICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICBhbGlnbiA9IFwiZmxleC1zdGFydFwiXG4gICAgICBicmVha1xuICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgYWxpZ24gPSBcImZsZXgtZW5kXCJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBcImNlbnRlclwiOlxuICAgICAgYWxpZ24gPSBcImNlbnRlclwiXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gIH1cblxuICBjb25zdCBhbGlnblN0eWxlID0gYWxpZ24gPyB7IGp1c3RpZnlDb250ZW50OiBhbGlnbiB9IDoge31cbiAgY29uc3QgbGFiZWxTaXplRmluYWwgPSBsYWJlbFNpemUgfHwgbGFiZWxTaXplQ29udGV4dFxuXG4gIC8qKlxuICAgKiDlpoLmnpwgbGFiZWwg5Li6IHRleHTvvIzliJnpmLLmraLkuIDkuKrlrZfmjaLooYznmoTpl67pophcbiAgICovXG4gIGNvbnN0IGxhYmVsRmluYWwgPSB1c2VNZW1vKCgpOiBSZWFjdC5SZWFjdE5vZGUgPT4ge1xuICAgIGNvbnN0IGdldEZvcm1hdFN0ckxlbmcgPSAoc3RyOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGhcbiAgICAgIGxldCByZWFsTGVuZ3RoID0gMFxuICAgICAgbGV0IGNoYXJDb2RlID0gLTFcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgICAgICBpZiAoY2hhckNvZGUgPj0gMCAmJiBjaGFyQ29kZSA8PSAxMjgpIHtcbiAgICAgICAgICByZWFsTGVuZ3RoICs9IDAuNVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlYWxMZW5ndGggKz0gMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gTWF0aC5jZWlsKHJlYWxMZW5ndGgpXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIGxhYmVsID09PSBcInN0cmluZ1wiICYmXG4gICAgICBsYWJlbFNpemVGaW5hbCAmJlxuICAgICAgZ2V0Rm9ybWF0U3RyTGVuZyhsYWJlbCkgLSBsYWJlbFNpemVGaW5hbCA9PT0gMVxuICAgICkge1xuICAgICAgcmV0dXJuIGAke2xhYmVsLnNsaWNlKDAsIDQpfVxcbiR7bGFiZWwuc2xpY2UoNCl9YFxuICAgIH1cbiAgICByZXR1cm4gbGFiZWxcbiAgfSwgW2xhYmVsXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5pdGVtU3R5bGUsXG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgfX1cbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgID5cbiAgICAgIHshIWxhYmVsICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1sYWJlbGB9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtsYWJlbFNpemVGaW5hbH1lbWAsXG4gICAgICAgICAgICAuLi5hbGlnblN0eWxlLFxuICAgICAgICAgICAgLi4ubGFiZWxTdHlsZUNvbnRleHQsXG4gICAgICAgICAgICAuLi5sYWJlbFN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWxGaW5hbH1cbiAgICAgICAgICB7ISFsYWJlbEhlbHBlciAmJiAoXG4gICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICBwb3B1cD17bGFiZWxIZWxwZXJ9XG4gICAgICAgICAgICAgIGFsaWduRWRnZT17ZmFsc2V9XG4gICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgIHsuLi5sYWJlbEhlbHBlclByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIGljb249e2xhYmVsSGVscGVySWNvbiB8fCBcImhlbHAtY2lyY2xlXCJ9XG4gICAgICAgICAgICAgICAgaW50ZXJhY3RpdmVcbiAgICAgICAgICAgICAgICBjb2xvcj1cInZhcigtLWdyYXktNjAwKVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI0cHhcIiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNvbnRyb2xgfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuSXRlbS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogbGFiZWxcbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIGxhYmVsIOWtl+espuWvuem9kOaWueW8j1xuICAgKi9cbiAgbGFiZWxBbGlnbjogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCBcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJyaWdodFwiXSksXG4gIC8qKlxuICAgKiBsYWJlbCDop6Pph4rlhoXlrrlcbiAgICovXG4gIGxhYmVsSGVscGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIGxhYmVsIOino+mHiuWGheWuueeahCBJY29uXG4gICAqL1xuICBsYWJlbEhlbHBlckljb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiBsYWJlbCDop6Pph4rlhoXlrrnmiYDkvb/nlKjnmoQgUG9wb3ZlciDnmoQgUHJvcHNcbiAgICovXG4gIGxhYmVsSGVscGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiBsYWJlbCDlrZfnrKbmlbDvvIxGb3JtIOS8muS7pSBlbSDljZXkvY3orr7nva4gbGFiZWwg5a695bqmXG4gICAqL1xuICBsYWJlbFNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBsYWJlbCBzdHlsZVxuICAgKi9cbiAgbGFiZWxTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOmZhOWKoCBzdHlsZVxuICAgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59XG5cbkl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGxhYmVsOiBudWxsLFxuICBsYWJlbEFsaWduOiBudWxsLFxuICBsYWJlbEhlbHBlcjogbnVsbCxcbiAgbGFiZWxIZWxwZXJJY29uOiBcImhlbHAtY2lyY2xlXCIsXG4gIGxhYmVsSGVscGVyUHJvcHM6IHt9LFxuICBsYWJlbFNpemU6IG51bGwsXG4gIGxhYmVsU3R5bGU6IHt9LFxuICBzdHlsZToge30sXG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1cbiJdfQ==