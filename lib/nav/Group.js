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

var Group = function Group(_ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "title"]);

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-group"));
  return React.createElement("div", _extends({
    className: classSet
  }, otherProps), React.createElement("div", {
    className: "".concat(prefix, "-groupTitle")
  }, title), children);
};

Group.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  title: _propTypes["default"].node
};
Group.defaultProps = {
  children: null,
  className: undefined,
  title: null
};
var _default = Group;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L0dyb3VwLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJHcm91cCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJvdGhlclByb3BzIiwiY2xhc3NTZXQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsVUFBZjs7QUFxQkEsSUFBTUMsS0FBNEIsR0FBRyxTQUEvQkEsS0FBK0IsT0FLbEI7QUFBQSxNQUpqQkMsUUFJaUIsUUFKakJBLFFBSWlCO0FBQUEsTUFIakJDLFNBR2lCLFFBSGpCQSxTQUdpQjtBQUFBLE1BRmpCQyxLQUVpQixRQUZqQkEsS0FFaUI7QUFBQSxNQURkQyxVQUNjOztBQUNqQixNQUFNQyxRQUFRLEdBQUcsNEJBQVdILFNBQVgsWUFBeUJILE1BQXpCLFlBQWpCO0FBRUEsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFTTtBQUFoQixLQUE4QkQsVUFBOUIsR0FDRTtBQUFLLElBQUEsU0FBUyxZQUFLTCxNQUFMO0FBQWQsS0FBeUNJLEtBQXpDLENBREYsRUFFR0YsUUFGSCxDQURGO0FBTUQsQ0FkRDs7QUFnQkFELEtBQUssQ0FBQ00sU0FBTixHQUFrQjtBQUloQkwsRUFBQUEsUUFBUSxFQUFFTSxzQkFBVUMsSUFKSjtBQVFoQk4sRUFBQUEsU0FBUyxFQUFFSyxzQkFBVUUsTUFSTDtBQVloQk4sRUFBQUEsS0FBSyxFQUFFSSxzQkFBVUM7QUFaRCxDQUFsQjtBQWVBUixLQUFLLENBQUNVLFlBQU4sR0FBcUI7QUFDbkJULEVBQUFBLFFBQVEsRUFBRSxJQURTO0FBRW5CQyxFQUFBQSxTQUFTLEVBQUVTLFNBRlE7QUFHbkJSLEVBQUFBLEtBQUssRUFBRTtBQUhZLENBQXJCO2VBTWVILEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLW5hdlwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUdyb3VwUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDnu4TlkI1cbiAgICovXG4gIHRpdGxlPzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbi8qKlxuICog5a+86Iiq5qCPIC0g5YiG57uEXG4gKi9cbmNvbnN0IEdyb3VwOiBSZWFjdC5GQzxJR3JvdXBQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICB0aXRsZSxcbiAgLi4ub3RoZXJQcm9wc1xufTogSUdyb3VwUHJvcHMpID0+IHtcbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS1ncm91cGApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWdyb3VwVGl0bGVgfT57dGl0bGV9PC9kaXY+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuR3JvdXAucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOe7hOWQjVxuICAgKi9cbiAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxufVxuXG5Hcm91cC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgdGl0bGU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwXG4iXX0=