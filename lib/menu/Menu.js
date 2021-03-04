"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Item = _interopRequireDefault(require("./Item"));

var _SubMenu = _interopRequireDefault(require("./SubMenu"));

var _Context = require("./Context");

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var noop = function noop() {};

var prefix = "adui-menu";

var Menu = function Menu(_ref) {
  var className = _ref.className,
      onExpandChange = _ref.onExpandChange,
      onItemClick = _ref.onItemClick,
      otherProps = _objectWithoutProperties(_ref, ["className", "onExpandChange", "onItemClick"]);

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-base"));
  return React.createElement(_Context.MenuContext.Provider, {
    value: {
      onExpandChange: onExpandChange,
      onItemClick: onItemClick
    }
  }, React.createElement("div", _extends({
    className: classSet
  }, otherProps)));
};

Menu.Item = _Item["default"];
Menu.SubMenu = _SubMenu["default"];
Menu.propTypes = {
  className: _propTypes["default"].string,
  onExpandChange: _propTypes["default"].func,
  onItemClick: _propTypes["default"].func
};
Menu.defaultProps = {
  className: undefined,
  onExpandChange: noop,
  onItemClick: noop
};
var _default = Menu;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbWVudS9NZW51LnRzeCJdLCJuYW1lcyI6WyJub29wIiwicHJlZml4IiwiTWVudSIsImNsYXNzTmFtZSIsIm9uRXhwYW5kQ2hhbmdlIiwib25JdGVtQ2xpY2siLCJvdGhlclByb3BzIiwiY2xhc3NTZXQiLCJJdGVtIiwiU3ViTWVudSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFDQSxJQUFNQyxNQUFNLEdBQUcsV0FBZjs7QUFzQkEsSUFBTUMsSUFHTCxHQUFHLFNBSEVBLElBR0YsT0FBMkU7QUFBQSxNQUF4RUMsU0FBd0UsUUFBeEVBLFNBQXdFO0FBQUEsTUFBN0RDLGNBQTZELFFBQTdEQSxjQUE2RDtBQUFBLE1BQTdDQyxXQUE2QyxRQUE3Q0EsV0FBNkM7QUFBQSxNQUE3QkMsVUFBNkI7O0FBQzdFLE1BQU1DLFFBQVEsR0FBRyw0QkFBV0osU0FBWCxZQUF5QkYsTUFBekIsV0FBakI7QUFFQSxTQUNFLG9CQUFDLG9CQUFELENBQWEsUUFBYjtBQUFzQixJQUFBLEtBQUssRUFBRTtBQUFFRyxNQUFBQSxjQUFjLEVBQWRBLGNBQUY7QUFBa0JDLE1BQUFBLFdBQVcsRUFBWEE7QUFBbEI7QUFBN0IsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFRTtBQUFoQixLQUE4QkQsVUFBOUIsRUFERixDQURGO0FBS0QsQ0FYRDs7QUFhQUosSUFBSSxDQUFDTSxJQUFMLEdBQVlBLGdCQUFaO0FBQ0FOLElBQUksQ0FBQ08sT0FBTCxHQUFlQSxtQkFBZjtBQUVBUCxJQUFJLENBQUNRLFNBQUwsR0FBaUI7QUFJZlAsRUFBQUEsU0FBUyxFQUFFUSxzQkFBVUMsTUFKTjtBQVFmUixFQUFBQSxjQUFjLEVBQUVPLHNCQUFVRSxJQVJYO0FBYWZSLEVBQUFBLFdBQVcsRUFBRU0sc0JBQVVFO0FBYlIsQ0FBakI7QUFnQkFYLElBQUksQ0FBQ1ksWUFBTCxHQUFvQjtBQUNsQlgsRUFBQUEsU0FBUyxFQUFFWSxTQURPO0FBRWxCWCxFQUFBQSxjQUFjLEVBQUVKLElBRkU7QUFHbEJLLEVBQUFBLFdBQVcsRUFBRUw7QUFISyxDQUFwQjtlQU1lRSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiXG5pbXBvcnQgU3ViTWVudSBmcm9tIFwiLi9TdWJNZW51XCJcbmltcG9ydCB7IE1lbnVDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5jb25zdCBwcmVmaXggPSBcImFkdWktbWVudVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lbnVQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOWFtuS4i+eahCBTdWJNZW51IOWxleW8gOeKtuaAgeWPkeeUn+WPmOWMlueahCBoYW5kbGVy77yM5Y+C5pWwMSBpbmRleO+8jOWPguaVsDIgYm9vbFxuICAgKi9cbiAgb25FeHBhbmRDaGFuZ2U/OiAoaW5kZXg6IFJlYWN0LlJlYWN0VGV4dCwgb3BlbjogYm9vbGVhbikgPT4gdm9pZFxuICAvKipcbiAgICog5YW25LiL55qEIEl0ZW0g54K55Ye755qEIGhhbmRsZXLvvIzlj4LmlbAgaW5kZXjjgILlvZPnhLbkuZ/lj6/ku6XlnKjmr4/kuKogSXRlbSDkuIrliqAgb25DbGljayBwcm9w44CCXG4gICAqIOi/meS4qiBwcm9wIOS5n+WPquaYr+S9nOS4uuS4gOS4qiBjb250ZXh077yM5YW25LiLIEl0ZW0g55qEIG9uQ2xpY2sg6YO95Lya6Kem5Y+R5q2k5pa55rOV44CCXG4gICAqL1xuICBvbkl0ZW1DbGljaz86IChpbmRleDogUmVhY3QuUmVhY3RUZXh0KSA9PiB2b2lkXG59XG5cbi8qKlxuICog6KGM5Yqo6I+c5Y2V5piv5Lul4oCc6KGM5Yqo4oCd44CB4oCc5pON5L2c4oCd5Li65Li755qE6YCJ5oup6I+c5Y2V77yM5LiO6YCJ5oup5ZmoIFNlbGVjdCDkuI3lkIzvvIzooYzliqjoj5zljZXkuI3nlKjkuo7pgInmi6nmn5DpobnlhoXlrrnvvIzogIznlKjkuo7ov5vooYzmn5Dnp43mk43kvZzjgIJcbiAqL1xuY29uc3QgTWVudTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SU1lbnVQcm9wcz4gJiB7XG4gIEl0ZW06IHR5cGVvZiBJdGVtXG4gIFN1Yk1lbnU6IHR5cGVvZiBTdWJNZW51XG59ID0gKHsgY2xhc3NOYW1lLCBvbkV4cGFuZENoYW5nZSwgb25JdGVtQ2xpY2ssIC4uLm90aGVyUHJvcHMgfTogSU1lbnVQcm9wcykgPT4ge1xuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LWJhc2VgKVxuXG4gIHJldHVybiAoXG4gICAgPE1lbnVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IG9uRXhwYW5kQ2hhbmdlLCBvbkl0ZW1DbGljayB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gey4uLm90aGVyUHJvcHN9IC8+XG4gICAgPC9NZW51Q29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5NZW51Lkl0ZW0gPSBJdGVtXG5NZW51LlN1Yk1lbnUgPSBTdWJNZW51XG5cbk1lbnUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlhbbkuIvnmoQgU3ViTWVudSDlsZXlvIDnirbmgIHlj5HnlJ/lj5jljJbnmoQgaGFuZGxlcu+8jOWPguaVsDEgaW5kZXjvvIzlj4LmlbAyIGJvb2xcbiAgICovXG4gIG9uRXhwYW5kQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOWFtuS4i+eahCBJdGVtIOeCueWHu+eahCBoYW5kbGVy77yM5Y+C5pWwIGluZGV444CC5b2T54S25Lmf5Y+v5Lul5Zyo5q+P5LiqIEl0ZW0g5LiK5YqgIG9uQ2xpY2sgcHJvcOOAglxuICAgKiDov5nkuKogcHJvcCDkuZ/lj6rmmK/kvZzkuLrkuIDkuKogY29udGV4dO+8jOWFtuS4iyBJdGVtIOeahCBvbkNsaWNrIOmDveS8muinpuWPkeatpOaWueazleOAglxuICAgKi9cbiAgb25JdGVtQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxufVxuXG5NZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIG9uRXhwYW5kQ2hhbmdlOiBub29wLFxuICBvbkl0ZW1DbGljazogbm9vcCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudVxuIl19