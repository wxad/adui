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

var _Item = _interopRequireDefault(require("./Item"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-breadcrumb";

var Breadcrumb = function Breadcrumb(_ref) {
  var children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "size"]);

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeContext = _useContext.size;

  var computedSize = (0, _configProvider.getComputedSize)(size, sizeContext);
  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-").concat(computedSize));
  return _react["default"].createElement("div", _extends({
    className: classSet
  }, otherProps), children);
};

Breadcrumb.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"])
};
Breadcrumb.defaultProps = {
  children: null,
  className: undefined,
  size: "small"
};
Breadcrumb.Item = _Item["default"];
var _default = Breadcrumb;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJCcmVhZGNydW1iIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJzaXplIiwib3RoZXJQcm9wcyIsIkNvbmZpZ0NvbnRleHQiLCJzaXplQ29udGV4dCIsImNvbXB1dGVkU2l6ZSIsImNsYXNzU2V0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsInN0cmluZyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwiSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLGlCQUFmOztBQXFCQSxJQUFNQyxVQUVMLEdBQUcsU0FGRUEsVUFFRixPQUFvRTtBQUFBLE1BQWpFQyxRQUFpRSxRQUFqRUEsUUFBaUU7QUFBQSxNQUF2REMsU0FBdUQsUUFBdkRBLFNBQXVEO0FBQUEsTUFBNUNDLElBQTRDLFFBQTVDQSxJQUE0QztBQUFBLE1BQW5DQyxVQUFtQzs7QUFBQSxvQkFDeEMsdUJBQVdDLDZCQUFYLENBRHdDO0FBQUEsTUFDeERDLFdBRHdELGVBQzlESCxJQUQ4RDs7QUFFdEUsTUFBTUksWUFBWSxHQUFHLHFDQUFnQkosSUFBaEIsRUFBc0JHLFdBQXRCLENBQXJCO0FBRUEsTUFBTUUsUUFBUSxHQUFHLDRCQUFXTixTQUFYLFlBQXlCSCxNQUF6QixjQUFtQ1EsWUFBbkMsRUFBakI7QUFDQSxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUVDO0FBQWhCLEtBQThCSixVQUE5QixHQUNHSCxRQURILENBREY7QUFLRCxDQVpEOztBQWNBRCxVQUFVLENBQUNTLFNBQVgsR0FBdUI7QUFJckJSLEVBQUFBLFFBQVEsRUFBRVMsc0JBQVVDLElBSkM7QUFRckJULEVBQUFBLFNBQVMsRUFBRVEsc0JBQVVFLE1BUkE7QUFZckJULEVBQUFBLElBQUksRUFBRU8sc0JBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixDQUFoQjtBQVplLENBQXZCO0FBZUFiLFVBQVUsQ0FBQ2MsWUFBWCxHQUEwQjtBQUN4QmIsRUFBQUEsUUFBUSxFQUFFLElBRGM7QUFFeEJDLEVBQUFBLFNBQVMsRUFBRWEsU0FGYTtBQUd4QlosRUFBQUEsSUFBSSxFQUFFO0FBSGtCLENBQTFCO0FBTUFILFVBQVUsQ0FBQ2dCLElBQVgsR0FBa0JBLGdCQUFsQjtlQUVlaEIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktYnJlYWRjcnVtYlwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJyZWFkY3J1bWJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOWwuuWvuOWkp+Wwj1xuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxufVxuXG4vKipcbiAqIOmdouWMheWxkeeUqOS6juWxleekuuW9k+WJjeWSjOWOhuWPsueahOihjOS4uui3r+W+hOOAgeaJgOWcqOS9jee9ru+8jOW5tuiDveWkn+S+neaNrue6v+aAp+mAu+i+kei/m+ihjOi/lOWbnuOAglxuICovXG5jb25zdCBCcmVhZGNydW1iOiBSZWFjdC5GQzxJQnJlYWRjcnVtYlByb3BzPiAmIHtcbiAgSXRlbTogdHlwZW9mIEl0ZW1cbn0gPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBzaXplLCAuLi5vdGhlclByb3BzIH06IElCcmVhZGNydW1iUHJvcHMpID0+IHtcbiAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuICBjb25zdCBjb21wdXRlZFNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZSwgc2l6ZUNvbnRleHQpXG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS0ke2NvbXB1dGVkU2l6ZX1gKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gey4uLm90aGVyUHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbkJyZWFkY3J1bWIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOWwuuWvuOWkp+Wwj1xuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbn1cblxuQnJlYWRjcnVtYi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxufVxuXG5CcmVhZGNydW1iLkl0ZW0gPSBJdGVtXG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFkY3J1bWJcbiJdfQ==