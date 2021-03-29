"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-nav";

var Divider = function Divider(_ref) {
  var className = _ref.className,
      otherProps = _objectWithoutProperties(_ref, ["className"]);

  return React.createElement("div", _extends({
    className: (0, _classnames["default"])(className, "".concat(prefix, "-divider"))
  }, otherProps));
};

Divider.propTypes = {
  className: _propTypes["default"].string
};
Divider.defaultProps = {
  className: undefined
};
var _default = Divider;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L0RpdmlkZXIudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkRpdmlkZXIiLCJjbGFzc05hbWUiLCJvdGhlclByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsVUFBZjs7QUFhQSxJQUFNQyxPQUFnQyxHQUFHLFNBQW5DQSxPQUFtQyxPQUdwQjtBQUFBLE1BRm5CQyxTQUVtQixRQUZuQkEsU0FFbUI7QUFBQSxNQURoQkMsVUFDZ0I7O0FBQ25CLFNBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBRSw0QkFBV0QsU0FBWCxZQUF5QkYsTUFBekI7QUFEYixLQUVNRyxVQUZOLEVBREY7QUFNRCxDQVZEOztBQVlBRixPQUFPLENBQUNHLFNBQVIsR0FBb0I7QUFJbEJGLEVBQUFBLFNBQVMsRUFBRUcsc0JBQVVDO0FBSkgsQ0FBcEI7QUFPQUwsT0FBTyxDQUFDTSxZQUFSLEdBQXVCO0FBQ3JCTCxFQUFBQSxTQUFTLEVBQUVNO0FBRFUsQ0FBdkI7ZUFJZVAsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktbmF2XCJcblxuZXhwb3J0IGludGVyZmFjZSBJRGl2aWRlclByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIOWvvOiIquagjyAtIOWIhuWJsue6v1xuICovXG5jb25zdCBEaXZpZGVyOiBSZWFjdC5GQzxJRGl2aWRlclByb3BzPiA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgLi4ub3RoZXJQcm9wc1xufTogSURpdmlkZXJQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tZGl2aWRlcmApfVxuICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgLz5cbiAgKVxufVxuXG5EaXZpZGVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5EaXZpZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IERpdmlkZXJcbiJdfQ==