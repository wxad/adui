"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

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

var Col = function Col(_ref) {
  var children = _ref.children,
      className = _ref.className,
      span = _ref.span,
      style = _ref.style,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "span", "style"]);

  var _useContext = (0, _react.useContext)(_Context.RowContext),
      gutter = _useContext.gutter;

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-col"), "".concat(prefix, "-col_").concat(span));
  var padding = "".concat((gutter || 0) / 2, "px");
  var additionStyle = padding ? {
    paddingLeft: padding,
    paddingRight: padding
  } : {};
  return _react["default"].createElement("div", _extends({
    className: classSet,
    style: _objectSpread({}, additionStyle, {}, style)
  }, otherProps), children);
};

Col.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  span: _propTypes["default"].oneOf([0, 1, 2, 3, 4, 6, 8, 12]),
  style: _propTypes["default"].object
};
Col.defaultProps = {
  children: "",
  className: undefined,
  span: 12,
  style: {}
};
var _default = Col;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZ3JpZC9Db2wudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkNvbCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3BhbiIsInN0eWxlIiwib3RoZXJQcm9wcyIsIlJvd0NvbnRleHQiLCJndXR0ZXIiLCJjbGFzc1NldCIsInBhZGRpbmciLCJhZGRpdGlvblN0eWxlIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwib25lT2YiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxXQUFmOztBQXlCQSxJQUFNQyxHQUF1QyxHQUFHLFNBQTFDQSxHQUEwQyxPQU0vQjtBQUFBLE1BTGZDLFFBS2UsUUFMZkEsUUFLZTtBQUFBLE1BSmZDLFNBSWUsUUFKZkEsU0FJZTtBQUFBLE1BSGZDLElBR2UsUUFIZkEsSUFHZTtBQUFBLE1BRmZDLEtBRWUsUUFGZkEsS0FFZTtBQUFBLE1BRFpDLFVBQ1k7O0FBQUEsb0JBQ0ksdUJBQVdDLG1CQUFYLENBREo7QUFBQSxNQUNQQyxNQURPLGVBQ1BBLE1BRE87O0FBR2YsTUFBTUMsUUFBUSxHQUFHLDRCQUNmTixTQURlLFlBRVpILE1BRlkscUJBR1pBLE1BSFksa0JBR0VJLElBSEYsRUFBakI7QUFNQSxNQUFNTSxPQUFPLGFBQU0sQ0FBQ0YsTUFBTSxJQUFJLENBQVgsSUFBZ0IsQ0FBdEIsT0FBYjtBQUNBLE1BQU1HLGFBQWEsR0FBR0QsT0FBTyxHQUN6QjtBQUNFRSxJQUFBQSxXQUFXLEVBQUVGLE9BRGY7QUFFRUcsSUFBQUEsWUFBWSxFQUFFSDtBQUZoQixHQUR5QixHQUt6QixFQUxKO0FBT0EsU0FDRTtBQUNFLElBQUEsU0FBUyxFQUFFRCxRQURiO0FBRUUsSUFBQSxLQUFLLG9CQUNBRSxhQURBLE1BRUFOLEtBRkE7QUFGUCxLQU1NQyxVQU5OLEdBUUdKLFFBUkgsQ0FERjtBQVlELENBbkNEOztBQXFDQUQsR0FBRyxDQUFDYSxTQUFKLEdBQWdCO0FBSWRaLEVBQUFBLFFBQVEsRUFBRWEsc0JBQVVDLElBSk47QUFRZGIsRUFBQUEsU0FBUyxFQUFFWSxzQkFBVUUsTUFSUDtBQVlkYixFQUFBQSxJQUFJLEVBQUVXLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsQ0FBaEIsQ0FaUTtBQWdCZGIsRUFBQUEsS0FBSyxFQUFFVSxzQkFBVUk7QUFoQkgsQ0FBaEI7QUFtQkFsQixHQUFHLENBQUNtQixZQUFKLEdBQW1CO0FBQ2pCbEIsRUFBQUEsUUFBUSxFQUFFLEVBRE87QUFFakJDLEVBQUFBLFNBQVMsRUFBRWtCLFNBRk07QUFHakJqQixFQUFBQSxJQUFJLEVBQUUsRUFIVztBQUlqQkMsRUFBQUEsS0FBSyxFQUFFO0FBSlUsQ0FBbkI7ZUFPZUosRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgUm93Q29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1ncmlkXCJcblxuZXhwb3J0IGludGVyZmFjZSBJQ29sUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmoIXmoLzljaDkvY3moLzmlbBcbiAgICovXG4gIHNwYW4/OiAwIHwgMSB8IDIgfCAzIHwgNCB8IDYgfCA4IHwgMTJcbiAgLyoqXG4gICAqIOmZhOWKoOagt+W8j1xuICAgKi9cbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG59XG5cbi8qKlxuICog5qCF5qC8XGLliJdcbiAqL1xuY29uc3QgQ29sOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJQ29sUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgc3BhbixcbiAgc3R5bGUsXG4gIC4uLm90aGVyUHJvcHNcbn06IElDb2xQcm9wcykgPT4ge1xuICBjb25zdCB7IGd1dHRlciB9ID0gdXNlQ29udGV4dChSb3dDb250ZXh0KVxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICBjbGFzc05hbWUsXG4gICAgYCR7cHJlZml4fS1jb2xgLFxuICAgIGAke3ByZWZpeH0tY29sXyR7c3Bhbn1gXG4gIClcblxuICBjb25zdCBwYWRkaW5nID0gYCR7KGd1dHRlciB8fCAwKSAvIDJ9cHhgXG4gIGNvbnN0IGFkZGl0aW9uU3R5bGUgPSBwYWRkaW5nXG4gICAgPyB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmcsXG4gICAgICB9XG4gICAgOiB7fVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLmFkZGl0aW9uU3R5bGUsXG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgfX1cbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Db2wucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOagheagvOWNoOS9jeagvOaVsFxuICAgKi9cbiAgc3BhbjogUHJvcFR5cGVzLm9uZU9mKFswLCAxLCAyLCAzLCA0LCA2LCA4LCAxMl0pLFxuICAvKipcbiAgICog6ZmE5Yqg5qC35byPXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuQ29sLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFwiXCIsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBzcGFuOiAxMixcbiAgc3R5bGU6IHt9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xcbiJdfQ==