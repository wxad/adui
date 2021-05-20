"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Context = require("./Context");

var _Item = _interopRequireDefault(require("./Item"));

var _Tip = _interopRequireDefault(require("./Tip"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-form";

var Form = function Form(_ref) {
  var children = _ref.children,
      className = _ref.className,
      itemClassName = _ref.itemClassName,
      itemStyle = _ref.itemStyle,
      labelAlign = _ref.labelAlign,
      labelClassName = _ref.labelClassName,
      labelSize = _ref.labelSize,
      labelStyle = _ref.labelStyle,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "itemClassName", "itemStyle", "labelAlign", "labelClassName", "labelSize", "labelStyle"]);

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-base"));
  return React.createElement(_Context.FormContext.Provider, {
    value: {
      itemClassName: itemClassName,
      itemStyle: itemStyle,
      labelAlign: labelAlign,
      labelClassName: labelClassName,
      labelSize: labelSize,
      labelStyle: labelStyle
    }
  }, React.createElement("div", _extends({
    className: classSet
  }, otherProps), children));
};

Form.Item = _Item["default"];
Form.Tip = _Tip["default"];
Form.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  itemClassName: _propTypes["default"].string,
  itemStyle: _propTypes["default"].object,
  labelAlign: _propTypes["default"].oneOf(["left", "center", "right"]),
  labelClassName: _propTypes["default"].string,
  labelSize: _propTypes["default"].number,
  labelStyle: _propTypes["default"].object
};
Form.defaultProps = {
  children: null,
  className: undefined,
  itemClassName: undefined,
  itemStyle: {},
  labelAlign: null,
  labelClassName: undefined,
  labelSize: null,
  labelStyle: {}
};
var _default = Form;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9Gb3JtLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJGb3JtIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJpdGVtQ2xhc3NOYW1lIiwiaXRlbVN0eWxlIiwibGFiZWxBbGlnbiIsImxhYmVsQ2xhc3NOYW1lIiwibGFiZWxTaXplIiwibGFiZWxTdHlsZSIsIm90aGVyUHJvcHMiLCJjbGFzc1NldCIsIkl0ZW0iLCJUaXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwib2JqZWN0Iiwib25lT2YiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxXQUFmOztBQXlDQSxJQUFNQyxJQUdMLEdBQUcsU0FIRUEsSUFHRixPQVVjO0FBQUEsTUFUaEJDLFFBU2dCLFFBVGhCQSxRQVNnQjtBQUFBLE1BUmhCQyxTQVFnQixRQVJoQkEsU0FRZ0I7QUFBQSxNQVBoQkMsYUFPZ0IsUUFQaEJBLGFBT2dCO0FBQUEsTUFOaEJDLFNBTWdCLFFBTmhCQSxTQU1nQjtBQUFBLE1BTGhCQyxVQUtnQixRQUxoQkEsVUFLZ0I7QUFBQSxNQUpoQkMsY0FJZ0IsUUFKaEJBLGNBSWdCO0FBQUEsTUFIaEJDLFNBR2dCLFFBSGhCQSxTQUdnQjtBQUFBLE1BRmhCQyxVQUVnQixRQUZoQkEsVUFFZ0I7QUFBQSxNQURiQyxVQUNhOztBQUNoQixNQUFNQyxRQUFRLEdBQUcsNEJBQVdSLFNBQVgsWUFBeUJILE1BQXpCLFdBQWpCO0FBRUEsU0FDRSxvQkFBQyxvQkFBRCxDQUFhLFFBQWI7QUFDRSxJQUFBLEtBQUssRUFBRTtBQUNMSSxNQUFBQSxhQUFhLEVBQWJBLGFBREs7QUFFTEMsTUFBQUEsU0FBUyxFQUFUQSxTQUZLO0FBR0xDLE1BQUFBLFVBQVUsRUFBVkEsVUFISztBQUlMQyxNQUFBQSxjQUFjLEVBQWRBLGNBSks7QUFLTEMsTUFBQUEsU0FBUyxFQUFUQSxTQUxLO0FBTUxDLE1BQUFBLFVBQVUsRUFBVkE7QUFOSztBQURULEtBVUU7QUFBSyxJQUFBLFNBQVMsRUFBRUU7QUFBaEIsS0FBOEJELFVBQTlCLEdBQ0dSLFFBREgsQ0FWRixDQURGO0FBZ0JELENBaENEOztBQWtDQUQsSUFBSSxDQUFDVyxJQUFMLEdBQVlBLGdCQUFaO0FBRUFYLElBQUksQ0FBQ1ksR0FBTCxHQUFXQSxlQUFYO0FBRUFaLElBQUksQ0FBQ2EsU0FBTCxHQUFpQjtBQUlmWixFQUFBQSxRQUFRLEVBQUVhLHNCQUFVQyxJQUpMO0FBUWZiLEVBQUFBLFNBQVMsRUFBRVksc0JBQVVFLE1BUk47QUFZZmIsRUFBQUEsYUFBYSxFQUFFVyxzQkFBVUUsTUFaVjtBQWdCZlosRUFBQUEsU0FBUyxFQUFFVSxzQkFBVUcsTUFoQk47QUFvQmZaLEVBQUFBLFVBQVUsRUFBRVMsc0JBQVVJLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixPQUFuQixDQUFoQixDQXBCRztBQXdCZlosRUFBQUEsY0FBYyxFQUFFUSxzQkFBVUUsTUF4Qlg7QUE0QmZULEVBQUFBLFNBQVMsRUFBRU8sc0JBQVVLLE1BNUJOO0FBZ0NmWCxFQUFBQSxVQUFVLEVBQUVNLHNCQUFVRztBQWhDUCxDQUFqQjtBQW1DQWpCLElBQUksQ0FBQ29CLFlBQUwsR0FBb0I7QUFDbEJuQixFQUFBQSxRQUFRLEVBQUUsSUFEUTtBQUVsQkMsRUFBQUEsU0FBUyxFQUFFbUIsU0FGTztBQUdsQmxCLEVBQUFBLGFBQWEsRUFBRWtCLFNBSEc7QUFJbEJqQixFQUFBQSxTQUFTLEVBQUUsRUFKTztBQUtsQkMsRUFBQUEsVUFBVSxFQUFFLElBTE07QUFNbEJDLEVBQUFBLGNBQWMsRUFBRWUsU0FORTtBQU9sQmQsRUFBQUEsU0FBUyxFQUFFLElBUE87QUFRbEJDLEVBQUFBLFVBQVUsRUFBRTtBQVJNLENBQXBCO2VBV2VSLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBGb3JtQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiXG5pbXBvcnQgVGlwIGZyb20gXCIuL1RpcFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWZvcm1cIlxuXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiBpdGVtIGNsYXNzTmFtZVxuICAgKi9cbiAgaXRlbUNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICogaXRlbSBzdHlsZVxuICAgKi9cbiAgaXRlbVN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICogbGFiZWwg5a2X56ym5a+56b2Q5pa55byPXG4gICAqL1xuICBsYWJlbEFsaWduPzogXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiIHwgbnVsbFxuICAvKipcbiAgICogbGFiZWwg5a2X56ym5pWw77yMRm9ybSDkvJrku6UgZW0g5Y2V5L2N6K6+572uIGxhYmVsIOWuveW6plxuICAgKi9cbiAgbGFiZWxTaXplPzogbnVtYmVyIHwgbnVsbFxuICAvKipcbiAgICogbGFiZWwgY2xhc3NOYW1lXG4gICAqL1xuICBsYWJlbENsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICogbGFiZWwgc3R5bGVcbiAgICovXG4gIGxhYmVsU3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG59XG5cbi8qKlxuICog6KGo5Y2V77yM5YyF5ZCr6KGo5Y2V6aG55qCH6aKY44CB6L6T5YWl5YaF5a6544CB6KGM5Yqo5oyJ6ZKu562J5pWw5o2u6YeH6ZuG55qE6ZuG5ZCI5b2i5oCB44CC6YCa5bi45pyN5Yqh5LqO5aSn6YeP6ZyA6KaB5pS26ZuG55So5oi35L+h5oGv5Zy65pmv44CCXG4gKi9cbmNvbnN0IEZvcm06IFJlYWN0LkZDPElGb3JtUHJvcHM+ICYge1xuICBJdGVtOiB0eXBlb2YgSXRlbVxuICBUaXA6IHR5cGVvZiBUaXBcbn0gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBpdGVtQ2xhc3NOYW1lLFxuICBpdGVtU3R5bGUsXG4gIGxhYmVsQWxpZ24sXG4gIGxhYmVsQ2xhc3NOYW1lLFxuICBsYWJlbFNpemUsXG4gIGxhYmVsU3R5bGUsXG4gIC4uLm90aGVyUHJvcHNcbn06IElGb3JtUHJvcHMpID0+IHtcbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS1iYXNlYClcblxuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgaXRlbUNsYXNzTmFtZSxcbiAgICAgICAgaXRlbVN0eWxlLFxuICAgICAgICBsYWJlbEFsaWduLFxuICAgICAgICBsYWJlbENsYXNzTmFtZSxcbiAgICAgICAgbGFiZWxTaXplLFxuICAgICAgICBsYWJlbFN0eWxlLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9Gb3JtQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5Gb3JtLkl0ZW0gPSBJdGVtXG5cbkZvcm0uVGlwID0gVGlwXG5cbkZvcm0ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGl0ZW0gY2xhc3NOYW1lXG4gICAqL1xuICBpdGVtQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogaXRlbSBzdHlsZVxuICAgKi9cbiAgaXRlbVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogbGFiZWwg5a2X56ym5a+56b2Q5pa55byPXG4gICAqL1xuICBsYWJlbEFsaWduOiBQcm9wVHlwZXMub25lT2YoW1wibGVmdFwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCJdKSxcbiAgLyoqXG4gICAqIGxhYmVsIGNsYXNzTmFtZVxuICAgKi9cbiAgbGFiZWxDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBsYWJlbCDlrZfnrKbmlbDvvIxGb3JtIOS8muS7pSBlbSDljZXkvY3orr7nva4gbGFiZWwg5a695bqmXG4gICAqL1xuICBsYWJlbFNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBsYWJlbCBzdHlsZVxuICAgKi9cbiAgbGFiZWxTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuRm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgaXRlbUNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBpdGVtU3R5bGU6IHt9LFxuICBsYWJlbEFsaWduOiBudWxsLFxuICBsYWJlbENsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBsYWJlbFNpemU6IG51bGwsXG4gIGxhYmVsU3R5bGU6IHt9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtXG4iXX0=