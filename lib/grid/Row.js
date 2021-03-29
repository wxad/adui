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

var prefix = "adui-grid";

var Row = function Row(_ref) {
  var children = _ref.children,
      className = _ref.className,
      gutter = _ref.gutter,
      style = _ref.style,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "gutter", "style"]);

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-row"));
  var margin = gutter ? "-".concat(gutter / 2, "px") : 0;
  var additionStyle = margin ? {
    marginLeft: margin,
    marginRight: margin
  } : {};
  return React.createElement(_Context.RowContext.Provider, {
    value: {
      gutter: gutter
    }
  }, React.createElement("div", _extends({
    className: classSet,
    style: _objectSpread(_objectSpread({}, additionStyle), style)
  }, otherProps), children));
};

Row.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  gutter: _propTypes["default"].number,
  style: _propTypes["default"].object
};
Row.defaultProps = {
  children: "",
  className: undefined,
  gutter: 0,
  style: {}
};
var _default = Row;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZ3JpZC9Sb3cudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIlJvdyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZ3V0dGVyIiwic3R5bGUiLCJvdGhlclByb3BzIiwiY2xhc3NTZXQiLCJtYXJnaW4iLCJhZGRpdGlvblN0eWxlIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsInN0cmluZyIsIm51bWJlciIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFdBQWY7O0FBeUJBLElBQU1DLEdBQXdCLEdBQUcsU0FBM0JBLEdBQTJCLE9BTWhCO0FBQUEsTUFMZkMsUUFLZSxRQUxmQSxRQUtlO0FBQUEsTUFKZkMsU0FJZSxRQUpmQSxTQUllO0FBQUEsTUFIZkMsTUFHZSxRQUhmQSxNQUdlO0FBQUEsTUFGZkMsS0FFZSxRQUZmQSxLQUVlO0FBQUEsTUFEWkMsVUFDWTs7QUFDZixNQUFNQyxRQUFRLEdBQUcsNEJBQVdKLFNBQVgsWUFBeUJILE1BQXpCLFVBQWpCO0FBQ0EsTUFBTVEsTUFBTSxHQUFHSixNQUFNLGNBQU9BLE1BQU0sR0FBRyxDQUFoQixVQUF3QixDQUE3QztBQUNBLE1BQU1LLGFBQWEsR0FBR0QsTUFBTSxHQUN4QjtBQUNFRSxJQUFBQSxVQUFVLEVBQUVGLE1BRGQ7QUFFRUcsSUFBQUEsV0FBVyxFQUFFSDtBQUZmLEdBRHdCLEdBS3hCLEVBTEo7QUFPQSxTQUNFLG9CQUFDLG1CQUFELENBQVksUUFBWjtBQUFxQixJQUFBLEtBQUssRUFBRTtBQUFFSixNQUFBQSxNQUFNLEVBQU5BO0FBQUY7QUFBNUIsS0FDRTtBQUNFLElBQUEsU0FBUyxFQUFFRyxRQURiO0FBRUUsSUFBQSxLQUFLLGtDQUNBRSxhQURBLEdBRUFKLEtBRkE7QUFGUCxLQU1NQyxVQU5OLEdBUUdKLFFBUkgsQ0FERixDQURGO0FBY0QsQ0E5QkQ7O0FBZ0NBRCxHQUFHLENBQUNXLFNBQUosR0FBZ0I7QUFJZFYsRUFBQUEsUUFBUSxFQUFFVyxzQkFBVUMsSUFKTjtBQVFkWCxFQUFBQSxTQUFTLEVBQUVVLHNCQUFVRSxNQVJQO0FBWWRYLEVBQUFBLE1BQU0sRUFBRVMsc0JBQVVHLE1BWko7QUFnQmRYLEVBQUFBLEtBQUssRUFBRVEsc0JBQVVJO0FBaEJILENBQWhCO0FBbUJBaEIsR0FBRyxDQUFDaUIsWUFBSixHQUFtQjtBQUNqQmhCLEVBQUFBLFFBQVEsRUFBRSxFQURPO0FBRWpCQyxFQUFBQSxTQUFTLEVBQUVnQixTQUZNO0FBR2pCZixFQUFBQSxNQUFNLEVBQUUsQ0FIUztBQUlqQkMsRUFBQUEsS0FBSyxFQUFFO0FBSlUsQ0FBbkI7ZUFPZUosRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IFJvd0NvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktZ3JpZFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJvd1Byb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5q+P5YiX5LmL6Ze055qE6Ze06LedXG4gICAqL1xuICBndXR0ZXI/OiBudW1iZXJcbiAgLyoqXG4gICAqIOmZhOWKoOagt+W8j++8jOWPr+S7peWcqOi/memHjOiuvue9riBmbGV4IOebuOWFs+agt+W8j++8jOWmgiBhbGlnbi1pdGVtc1xuICAgKi9cbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG59XG5cbi8qKlxuICog5qCF5qC8XGLooYxcbiAqL1xuY29uc3QgUm93OiBSZWFjdC5GQzxJUm93UHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgZ3V0dGVyLFxuICBzdHlsZSxcbiAgLi4ub3RoZXJQcm9wc1xufTogSVJvd1Byb3BzKSA9PiB7XG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tcm93YClcbiAgY29uc3QgbWFyZ2luID0gZ3V0dGVyID8gYC0ke2d1dHRlciAvIDJ9cHhgIDogMFxuICBjb25zdCBhZGRpdGlvblN0eWxlID0gbWFyZ2luXG4gICAgPyB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IG1hcmdpbixcbiAgICAgICAgbWFyZ2luUmlnaHQ6IG1hcmdpbixcbiAgICAgIH1cbiAgICA6IHt9XG5cbiAgcmV0dXJuIChcbiAgICA8Um93Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBndXR0ZXIgfX0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgLi4uYWRkaXRpb25TdHlsZSxcbiAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgfX1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvUm93Q29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5Sb3cucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOavj+WIl+S5i+mXtOeahOmXtOi3nVxuICAgKi9cbiAgZ3V0dGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog6ZmE5Yqg5qC35byP77yM5Y+v5Lul5Zyo6L+Z6YeM6K6+572uIGZsZXgg55u45YWz5qC35byP77yM5aaCIGFsaWduLWl0ZW1zXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuUm93LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFwiXCIsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBndXR0ZXI6IDAsXG4gIHN0eWxlOiB7fSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm93XG4iXX0=