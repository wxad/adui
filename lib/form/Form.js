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
      itemStyle = _ref.itemStyle,
      labelAlign = _ref.labelAlign,
      labelSize = _ref.labelSize,
      labelStyle = _ref.labelStyle,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "itemStyle", "labelAlign", "labelSize", "labelStyle"]);

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-base"));
  return React.createElement(_Context.FormContext.Provider, {
    value: {
      itemStyle: itemStyle,
      labelAlign: labelAlign,
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
  itemStyle: _propTypes["default"].object,
  labelAlign: _propTypes["default"].oneOf(["left", "center", "right"]),
  labelSize: _propTypes["default"].number,
  labelStyle: _propTypes["default"].object
};
Form.defaultProps = {
  children: null,
  className: undefined,
  itemStyle: {},
  labelAlign: null,
  labelSize: null,
  labelStyle: {}
};
var _default = Form;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9Gb3JtLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJGb3JtIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJpdGVtU3R5bGUiLCJsYWJlbEFsaWduIiwibGFiZWxTaXplIiwibGFiZWxTdHlsZSIsIm90aGVyUHJvcHMiLCJjbGFzc1NldCIsIkl0ZW0iLCJUaXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwib2JqZWN0Iiwib25lT2YiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxXQUFmOztBQWlDQSxJQUFNQyxJQUdMLEdBQUcsU0FIRUEsSUFHRixPQVFjO0FBQUEsTUFQaEJDLFFBT2dCLFFBUGhCQSxRQU9nQjtBQUFBLE1BTmhCQyxTQU1nQixRQU5oQkEsU0FNZ0I7QUFBQSxNQUxoQkMsU0FLZ0IsUUFMaEJBLFNBS2dCO0FBQUEsTUFKaEJDLFVBSWdCLFFBSmhCQSxVQUlnQjtBQUFBLE1BSGhCQyxTQUdnQixRQUhoQkEsU0FHZ0I7QUFBQSxNQUZoQkMsVUFFZ0IsUUFGaEJBLFVBRWdCO0FBQUEsTUFEYkMsVUFDYTs7QUFDaEIsTUFBTUMsUUFBUSxHQUFHLDRCQUFXTixTQUFYLFlBQXlCSCxNQUF6QixXQUFqQjtBQUVBLFNBQ0Usb0JBQUMsb0JBQUQsQ0FBYSxRQUFiO0FBQ0UsSUFBQSxLQUFLLEVBQUU7QUFBRUksTUFBQUEsU0FBUyxFQUFUQSxTQUFGO0FBQWFDLE1BQUFBLFVBQVUsRUFBVkEsVUFBYjtBQUF5QkMsTUFBQUEsU0FBUyxFQUFUQSxTQUF6QjtBQUFvQ0MsTUFBQUEsVUFBVSxFQUFWQTtBQUFwQztBQURULEtBR0U7QUFBSyxJQUFBLFNBQVMsRUFBRUU7QUFBaEIsS0FBOEJELFVBQTlCLEdBQ0dOLFFBREgsQ0FIRixDQURGO0FBU0QsQ0F2QkQ7O0FBeUJBRCxJQUFJLENBQUNTLElBQUwsR0FBWUEsZ0JBQVo7QUFFQVQsSUFBSSxDQUFDVSxHQUFMLEdBQVdBLGVBQVg7QUFFQVYsSUFBSSxDQUFDVyxTQUFMLEdBQWlCO0FBSWZWLEVBQUFBLFFBQVEsRUFBRVcsc0JBQVVDLElBSkw7QUFRZlgsRUFBQUEsU0FBUyxFQUFFVSxzQkFBVUUsTUFSTjtBQVlmWCxFQUFBQSxTQUFTLEVBQUVTLHNCQUFVRyxNQVpOO0FBZ0JmWCxFQUFBQSxVQUFVLEVBQUVRLHNCQUFVSSxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsT0FBbkIsQ0FBaEIsQ0FoQkc7QUFvQmZYLEVBQUFBLFNBQVMsRUFBRU8sc0JBQVVLLE1BcEJOO0FBd0JmWCxFQUFBQSxVQUFVLEVBQUVNLHNCQUFVRztBQXhCUCxDQUFqQjtBQTJCQWYsSUFBSSxDQUFDa0IsWUFBTCxHQUFvQjtBQUNsQmpCLEVBQUFBLFFBQVEsRUFBRSxJQURRO0FBRWxCQyxFQUFBQSxTQUFTLEVBQUVpQixTQUZPO0FBR2xCaEIsRUFBQUEsU0FBUyxFQUFFLEVBSE87QUFJbEJDLEVBQUFBLFVBQVUsRUFBRSxJQUpNO0FBS2xCQyxFQUFBQSxTQUFTLEVBQUUsSUFMTztBQU1sQkMsRUFBQUEsVUFBVSxFQUFFO0FBTk0sQ0FBcEI7ZUFTZU4sSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IEZvcm1Db250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCJcbmltcG9ydCBUaXAgZnJvbSBcIi4vVGlwXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktZm9ybVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZvcm1Qcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGl0ZW0gc3R5bGVcbiAgICovXG4gIGl0ZW1TdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIGxhYmVsIOWtl+espuWvuem9kOaWueW8j1xuICAgKi9cbiAgbGFiZWxBbGlnbj86IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIiB8IG51bGxcbiAgLyoqXG4gICAqIGxhYmVsIOWtl+espuaVsO+8jEZvcm0g5Lya5LulIGVtIOWNleS9jeiuvue9riBsYWJlbCDlrr3luqZcbiAgICovXG4gIGxhYmVsU2l6ZT86IG51bWJlciB8IG51bGxcbiAgLyoqXG4gICAqIGxhYmVsIHN0eWxlXG4gICAqL1xuICBsYWJlbFN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xufVxuXG4vKipcbiAqIOihqOWNle+8jOWMheWQq+ihqOWNlemhueagh+mimOOAgei+k+WFpeWGheWuueOAgeihjOWKqOaMiemSruetieaVsOaNrumHh+mbhueahOmbhuWQiOW9ouaAgeOAgumAmuW4uOacjeWKoeS6juWkp+mHj+mcgOimgeaUtumbhueUqOaIt+S/oeaBr+WcuuaZr+OAglxuICovXG5jb25zdCBGb3JtOiBSZWFjdC5GQzxJRm9ybVByb3BzPiAmIHtcbiAgSXRlbTogdHlwZW9mIEl0ZW1cbiAgVGlwOiB0eXBlb2YgVGlwXG59ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgaXRlbVN0eWxlLFxuICBsYWJlbEFsaWduLFxuICBsYWJlbFNpemUsXG4gIGxhYmVsU3R5bGUsXG4gIC4uLm90aGVyUHJvcHNcbn06IElGb3JtUHJvcHMpID0+IHtcbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS1iYXNlYClcblxuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3sgaXRlbVN0eWxlLCBsYWJlbEFsaWduLCBsYWJlbFNpemUsIGxhYmVsU3R5bGUgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9Gb3JtQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5Gb3JtLkl0ZW0gPSBJdGVtXG5cbkZvcm0uVGlwID0gVGlwXG5cbkZvcm0ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGl0ZW0gc3R5bGVcbiAgICovXG4gIGl0ZW1TdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIGxhYmVsIOWtl+espuWvuem9kOaWueW8j1xuICAgKi9cbiAgbGFiZWxBbGlnbjogUHJvcFR5cGVzLm9uZU9mKFtcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJyaWdodFwiXSksXG4gIC8qKlxuICAgKiBsYWJlbCDlrZfnrKbmlbDvvIxGb3JtIOS8muS7pSBlbSDljZXkvY3orr7nva4gbGFiZWwg5a695bqmXG4gICAqL1xuICBsYWJlbFNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBsYWJlbCBzdHlsZVxuICAgKi9cbiAgbGFiZWxTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuRm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgaXRlbVN0eWxlOiB7fSxcbiAgbGFiZWxBbGlnbjogbnVsbCxcbiAgbGFiZWxTaXplOiBudWxsLFxuICBsYWJlbFN0eWxlOiB7fSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVxuIl19