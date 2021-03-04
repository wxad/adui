"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _configProvider = require("../config-provider");

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-card";

var Header = function Header(_ref) {
  var children = _ref.children,
      className = _ref.className,
      topContent = _ref.topContent,
      size = _ref.size,
      subTitle = _ref.subTitle,
      title = _ref.title,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "topContent", "size", "subTitle", "title"]);

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeContext = _useContext.size;

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-header"), "".concat(prefix, "-").concat((0, _configProvider.getComputedSize)(size, sizeContext)));
  return _react["default"].createElement("div", _extends({
    className: classSet
  }, otherProps), _react["default"].createElement("div", {
    className: "".concat(prefix, "-headerBlock")
  }, !!title && _react["default"].createElement("div", {
    className: "".concat(prefix, "-headerTop")
  }, _react["default"].createElement("div", {
    className: "".concat(prefix, "-title")
  }, title), !!subTitle && _react["default"].createElement("div", {
    className: "".concat(prefix, "-subTitle")
  }, subTitle)), !!topContent && _react["default"].createElement("div", {
    className: "".concat(prefix, "-topContent")
  }, topContent)), !!children && _react["default"].createElement("div", {
    className: "".concat(prefix, "-children")
  }, children));
};

Header.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  subTitle: _propTypes["default"].node,
  title: _propTypes["default"].node,
  topContent: _propTypes["default"].node
};
Header.defaultProps = {
  children: "",
  className: undefined,
  size: "small",
  subTitle: null,
  title: null,
  topContent: null
};
var _default = Header;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2FyZC9IZWFkZXIudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkhlYWRlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwidG9wQ29udGVudCIsInNpemUiLCJzdWJUaXRsZSIsInRpdGxlIiwib3RoZXJQcm9wcyIsIkNvbmZpZ0NvbnRleHQiLCJzaXplQ29udGV4dCIsImNsYXNzU2V0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsInN0cmluZyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsV0FBZjs7QUFpQ0EsSUFBTUMsTUFBOEIsR0FBRyxTQUFqQ0EsTUFBaUMsT0FRakM7QUFBQSxNQVBKQyxRQU9JLFFBUEpBLFFBT0k7QUFBQSxNQU5KQyxTQU1JLFFBTkpBLFNBTUk7QUFBQSxNQUxKQyxVQUtJLFFBTEpBLFVBS0k7QUFBQSxNQUpKQyxJQUlJLFFBSkpBLElBSUk7QUFBQSxNQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxNQUZKQyxLQUVJLFFBRkpBLEtBRUk7QUFBQSxNQUREQyxVQUNDOztBQUFBLG9CQUMwQix1QkFBV0MsNkJBQVgsQ0FEMUI7QUFBQSxNQUNVQyxXQURWLGVBQ0lMLElBREo7O0FBR0osTUFBTU0sUUFBUSxHQUFHLDRCQUNmUixTQURlLFlBRVpILE1BRlksd0JBR1pBLE1BSFksY0FHRixxQ0FBZ0JLLElBQWhCLEVBQXNCSyxXQUF0QixDQUhFLEVBQWpCO0FBTUEsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFQztBQUFoQixLQUE4QkgsVUFBOUIsR0FDRTtBQUFLLElBQUEsU0FBUyxZQUFLUixNQUFMO0FBQWQsS0FDRyxDQUFDLENBQUNPLEtBQUYsSUFDQztBQUFLLElBQUEsU0FBUyxZQUFLUCxNQUFMO0FBQWQsS0FDRTtBQUFLLElBQUEsU0FBUyxZQUFLQSxNQUFMO0FBQWQsS0FBb0NPLEtBQXBDLENBREYsRUFFRyxDQUFDLENBQUNELFFBQUYsSUFDQztBQUFLLElBQUEsU0FBUyxZQUFLTixNQUFMO0FBQWQsS0FBdUNNLFFBQXZDLENBSEosQ0FGSixFQVNHLENBQUMsQ0FBQ0YsVUFBRixJQUNDO0FBQUssSUFBQSxTQUFTLFlBQUtKLE1BQUw7QUFBZCxLQUF5Q0ksVUFBekMsQ0FWSixDQURGLEVBY0csQ0FBQyxDQUFDRixRQUFGLElBQWM7QUFBSyxJQUFBLFNBQVMsWUFBS0YsTUFBTDtBQUFkLEtBQXVDRSxRQUF2QyxDQWRqQixDQURGO0FBa0JELENBbkNEOztBQXFDQUQsTUFBTSxDQUFDVyxTQUFQLEdBQW1CO0FBSWpCVixFQUFBQSxRQUFRLEVBQUVXLHNCQUFVQyxJQUpIO0FBUWpCWCxFQUFBQSxTQUFTLEVBQUVVLHNCQUFVRSxNQVJKO0FBWWpCVixFQUFBQSxJQUFJLEVBQUVRLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEIsT0FBNUIsQ0FBaEIsQ0FaVztBQWdCakJWLEVBQUFBLFFBQVEsRUFBRU8sc0JBQVVDLElBaEJIO0FBb0JqQlAsRUFBQUEsS0FBSyxFQUFFTSxzQkFBVUMsSUFwQkE7QUF3QmpCVixFQUFBQSxVQUFVLEVBQUVTLHNCQUFVQztBQXhCTCxDQUFuQjtBQTJCQWIsTUFBTSxDQUFDZ0IsWUFBUCxHQUFzQjtBQUNwQmYsRUFBQUEsUUFBUSxFQUFFLEVBRFU7QUFFcEJDLEVBQUFBLFNBQVMsRUFBRWUsU0FGUztBQUdwQmIsRUFBQUEsSUFBSSxFQUFFLE9BSGM7QUFJcEJDLEVBQUFBLFFBQVEsRUFBRSxJQUpVO0FBS3BCQyxFQUFBQSxLQUFLLEVBQUUsSUFMYTtBQU1wQkgsRUFBQUEsVUFBVSxFQUFFO0FBTlEsQ0FBdEI7ZUFTZUgsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNhcmRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElIZWFkZXJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog5Y2h54mH5Ymv5qCH6aKYXG4gICAqL1xuICBzdWJUaXRsZT86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog5Y2h54mH5Li75qCH6aKY77yI5aaC5LiN5aGr5pW05Liq5qCH6aKY5qih5Z2X6ZqQ6JeP77yJXG4gICAqL1xuICB0aXRsZT86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog5aS06YOo5Y+z5L6n6IqC54K5XG4gICAqL1xuICB0b3BDb250ZW50PzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbi8qKlxuICog5Y2h54mH57uE5Lu25aS06YOo6YOo5YiGXG4gKi9cbmNvbnN0IEhlYWRlcjogUmVhY3QuRkM8SUhlYWRlclByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIHRvcENvbnRlbnQsXG4gIHNpemUsXG4gIHN1YlRpdGxlLFxuICB0aXRsZSxcbiAgLi4ub3RoZXJQcm9wc1xufSkgPT4ge1xuICBjb25zdCB7IHNpemU6IHNpemVDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICBgJHtwcmVmaXh9LWhlYWRlcmAsXG4gICAgYCR7cHJlZml4fS0ke2dldENvbXB1dGVkU2l6ZShzaXplLCBzaXplQ29udGV4dCl9YFxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWhlYWRlckJsb2NrYH0+XG4gICAgICAgIHshIXRpdGxlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1oZWFkZXJUb3BgfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRpdGxlYH0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgeyEhc3ViVGl0bGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1zdWJUaXRsZWB9PntzdWJUaXRsZX08L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHshIXRvcENvbnRlbnQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRvcENvbnRlbnRgfT57dG9wQ29udGVudH08L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgeyEhY2hpbGRyZW4gJiYgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2hpbGRyZW5gfT57Y2hpbGRyZW59PC9kaXY+fVxuICAgIDwvZGl2PlxuICApXG59XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog5Y2h54mH5Ymv5qCH6aKYXG4gICAqL1xuICBzdWJUaXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDljaHniYfkuLvmoIfpopjvvIjlpoLkuI3loavmlbTkuKrmoIfpopjmqKHlnZfpmpDol4/vvIlcbiAgICovXG4gIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOWktOmDqOWPs+S+p+iKgueCuVxuICAgKi9cbiAgdG9wQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG59XG5cbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBcIlwiLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICBzdWJUaXRsZTogbnVsbCxcbiAgdGl0bGU6IG51bGwsXG4gIHRvcENvbnRlbnQ6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl19