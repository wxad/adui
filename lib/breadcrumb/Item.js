"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = _interopRequireDefault(require("../icon"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-breadcrumb";

var Item = function Item(_ref) {
  var className = _ref.className,
      href = _ref.href,
      children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ["className", "href", "children"]);

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-item"));
  var TagName = href ? "a" : "span";
  return React.createElement(TagName, _extends({
    className: classSet,
    href: href,
    target: href && "_blank"
  }, otherProps), React.createElement("div", {
    className: "".concat(prefix, "-content")
  }, children), React.createElement(_icon["default"], {
    size: 18,
    icon: "arrow-right",
    className: "".concat(prefix, "-icon")
  }));
};

Item.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  href: _propTypes["default"].string
};
Item.defaultProps = {
  children: null,
  className: undefined,
  href: undefined
};
var _default = Item;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9JdGVtLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJJdGVtIiwiY2xhc3NOYW1lIiwiaHJlZiIsImNoaWxkcmVuIiwib3RoZXJQcm9wcyIsImNsYXNzU2V0IiwiVGFnTmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxpQkFBZjs7QUFzQkEsSUFBTUMsSUFBMEIsR0FBRyxTQUE3QkEsSUFBNkIsT0FLakI7QUFBQSxNQUpoQkMsU0FJZ0IsUUFKaEJBLFNBSWdCO0FBQUEsTUFIaEJDLElBR2dCLFFBSGhCQSxJQUdnQjtBQUFBLE1BRmhCQyxRQUVnQixRQUZoQkEsUUFFZ0I7QUFBQSxNQURiQyxVQUNhOztBQUNoQixNQUFNQyxRQUFRLEdBQUcsNEJBQVdKLFNBQVgsWUFBeUJGLE1BQXpCLFdBQWpCO0FBQ0EsTUFBTU8sT0FBTyxHQUFHSixJQUFJLEdBQUcsR0FBSCxHQUFTLE1BQTdCO0FBRUEsU0FDRSxvQkFBQyxPQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUVHLFFBRGI7QUFFRSxJQUFBLElBQUksRUFBRUgsSUFGUjtBQUdFLElBQUEsTUFBTSxFQUFFQSxJQUFJLElBQUk7QUFIbEIsS0FJTUUsVUFKTixHQU1FO0FBQUssSUFBQSxTQUFTLFlBQUtMLE1BQUw7QUFBZCxLQUFzQ0ksUUFBdEMsQ0FORixFQU9FLG9CQUFDLGdCQUFEO0FBQU0sSUFBQSxJQUFJLEVBQUUsRUFBWjtBQUFnQixJQUFBLElBQUksRUFBQyxhQUFyQjtBQUFtQyxJQUFBLFNBQVMsWUFBS0osTUFBTDtBQUE1QyxJQVBGLENBREY7QUFXRCxDQXBCRDs7QUFzQkFDLElBQUksQ0FBQ08sU0FBTCxHQUFpQjtBQUlmSixFQUFBQSxRQUFRLEVBQUVLLHNCQUFVQyxJQUpMO0FBUWZSLEVBQUFBLFNBQVMsRUFBRU8sc0JBQVVFLE1BUk47QUFZZlIsRUFBQUEsSUFBSSxFQUFFTSxzQkFBVUU7QUFaRCxDQUFqQjtBQWVBVixJQUFJLENBQUNXLFlBQUwsR0FBb0I7QUFDbEJSLEVBQUFBLFFBQVEsRUFBRSxJQURRO0FBRWxCRixFQUFBQSxTQUFTLEVBQUVXLFNBRk87QUFHbEJWLEVBQUFBLElBQUksRUFBRVU7QUFIWSxDQUFwQjtlQU1lWixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1icmVhZGNydW1iXCJcblxuZXhwb3J0IGludGVyZmFjZSBJSXRlbVByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5oyH5ZCR6ZO+5o6lXG4gICAqL1xuICBocmVmPzogc3RyaW5nXG59XG5cbi8qKlxuICog6Z2i5YyF5bGRIC0gaXRlbVxuICovXG5cbmNvbnN0IEl0ZW06IFJlYWN0LkZDPElJdGVtUHJvcHM+ID0gKHtcbiAgY2xhc3NOYW1lLFxuICBocmVmLFxuICBjaGlsZHJlbixcbiAgLi4ub3RoZXJQcm9wc1xufTogSUl0ZW1Qcm9wcykgPT4ge1xuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LWl0ZW1gKVxuICBjb25zdCBUYWdOYW1lID0gaHJlZiA/IFwiYVwiIDogXCJzcGFuXCJcblxuICByZXR1cm4gKFxuICAgIDxUYWdOYW1lXG4gICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgaHJlZj17aHJlZn1cbiAgICAgIHRhcmdldD17aHJlZiAmJiBcIl9ibGFua1wifVxuICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY29udGVudGB9PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDxJY29uIHNpemU9ezE4fSBpY29uPVwiYXJyb3ctcmlnaHRcIiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taWNvbmB9IC8+XG4gICAgPC9UYWdOYW1lPlxuICApXG59XG5cbkl0ZW0ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaMh+WQkemTvuaOpVxuICAgKi9cbiAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuSXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgaHJlZjogdW5kZWZpbmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtXG4iXX0=