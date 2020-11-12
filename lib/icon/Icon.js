"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _color = require("../_util/color");

var _IconSvgPaths = _interopRequireDefault(require("./IconSvgPaths"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-icon";

var Icon = function Icon(_ref) {
  var _classNames;

  var className = _ref.className,
      color = _ref.color,
      icon = _ref.icon,
      interactiveProp = _ref.interactive,
      _onClick = _ref.onClick,
      size = _ref.size,
      otherProps = _objectWithoutProperties(_ref, ["className", "color", "icon", "interactive", "onClick", "size"]);

  var colorProp = color;

  if (colorProp && colorProp.includes("var")) {
    var documentStyle = getComputedStyle(document.documentElement);

    if (documentStyle) {
      colorProp = documentStyle.getPropertyValue(colorProp.slice(4, colorProp.length - 1));
    }

    colorProp = "#a3a3a3";
  }

  var lightness = (0, _color.color2hsl)(colorProp).l;
  var data = _IconSvgPaths["default"][icon];
  var paths = data.map(function (d) {
    return React.createElement("path", {
      d: d,
      key: d,
      fillRule: "evenodd"
    });
  });
  var interactive = interactiveProp || !!_onClick;
  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-base"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-interactive"), interactive), _defineProperty(_classNames, "".concat(prefix, "-interactive_level_0"), interactive && lightness < 0.35), _defineProperty(_classNames, "".concat(prefix, "-interactive_level_1"), interactive && lightness < 0.45 && lightness >= 0.35), _defineProperty(_classNames, "".concat(prefix, "-interactive_level_2"), interactive && lightness < 0.65 && lightness >= 0.45), _defineProperty(_classNames, "".concat(prefix, "-interactive_level_3"), interactive && lightness < 1 && lightness >= 0.65), _defineProperty(_classNames, "".concat(prefix, "-interactive_level_white"), interactive && lightness === 1), _classNames));
  return React.createElement("svg", _extends({
    className: classSet,
    width: size,
    height: size,
    viewBox: "0 0 18 18",
    fill: color,
    "data-interactive": interactive,
    "data-icon": icon,
    onClick: function onClick(e) {
      if (_onClick) {
        _onClick(e);
      }
    }
  }, otherProps), paths, interactive && lightness !== 1 && React.createElement("g", {
    className: "".concat(prefix, "-interactive-cover"),
    fill: "#000"
  }, paths));
};

Icon.propTypes = {
  className: _propTypes["default"].string,
  color: _propTypes["default"].string,
  icon: _propTypes["default"].any.isRequired,
  interactive: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  size: _propTypes["default"].number
};
Icon.defaultProps = {
  className: undefined,
  color: "var(--gray-700)",
  interactive: false,
  onClick: null,
  size: 18
};
Icon.type = "Icon";
var _default = Icon;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvaWNvbi9JY29uLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJJY29uIiwiY2xhc3NOYW1lIiwiY29sb3IiLCJpY29uIiwiaW50ZXJhY3RpdmVQcm9wIiwiaW50ZXJhY3RpdmUiLCJvbkNsaWNrIiwic2l6ZSIsIm90aGVyUHJvcHMiLCJjb2xvclByb3AiLCJpbmNsdWRlcyIsImRvY3VtZW50U3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic2xpY2UiLCJsZW5ndGgiLCJsaWdodG5lc3MiLCJsIiwiZGF0YSIsIkljb25TdmdQYXRocyIsInBhdGhzIiwibWFwIiwiZCIsImNsYXNzU2V0IiwiZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFueSIsImlzUmVxdWlyZWQiLCJib29sIiwiZnVuYyIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFdBQWY7O0FBbUNBLElBQU1DLElBRUwsR0FBRyxTQUZFQSxJQUVGLE9BUWM7QUFBQTs7QUFBQSxNQVBoQkMsU0FPZ0IsUUFQaEJBLFNBT2dCO0FBQUEsTUFOaEJDLEtBTWdCLFFBTmhCQSxLQU1nQjtBQUFBLE1BTGhCQyxJQUtnQixRQUxoQkEsSUFLZ0I7QUFBQSxNQUpIQyxlQUlHLFFBSmhCQyxXQUlnQjtBQUFBLE1BSGhCQyxRQUdnQixRQUhoQkEsT0FHZ0I7QUFBQSxNQUZoQkMsSUFFZ0IsUUFGaEJBLElBRWdCO0FBQUEsTUFEYkMsVUFDYTs7QUFDaEIsTUFBSUMsU0FBUyxHQUFHUCxLQUFoQjs7QUFDQSxNQUFJTyxTQUFTLElBQUlBLFNBQVMsQ0FBQ0MsUUFBVixDQUFtQixLQUFuQixD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LElBSlM7QUFLbEJDLEVBQUFBLElBQUksRUFBRTtBQUxZLENBQXBCO0FBUUFQLElBQUksQ0FBQ3FDLElBQUwsR0FBWSxNQUFaO2VBRWVyQyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgY29sb3IyaHNsIH0gZnJvbSBcIi4uL191dGlsL2NvbG9yXCJcbmltcG9ydCBJY29uU3ZnUGF0aHMgZnJvbSBcIi4vSWNvblN2Z1BhdGhzXCJcbmltcG9ydCB7IElJY29uTmFtZXMgfSBmcm9tIFwiLi9JY29uTmFtZXNcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1pY29uXCJcblxuZXhwb3J0IHR5cGUgSWNvbk5hbWVzID0ga2V5b2YgSUljb25OYW1lc1xuXG5leHBvcnQgaW50ZXJmYWNlIElJY29uUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDpopzoibLlgLzvvIzmlK/mjIEgcmdiKGE/KSwgaGV4IOS7peWPiiBjc3MgdmFyaWFibGVcbiAgICovXG4gIGNvbG9yPzogc3RyaW5nXG4gIC8qKlxuICAgKiDlm77moIflkI3np7BcbiAgICovXG4gIGljb246IEljb25OYW1lc1xuICAvKipcbiAgICog5piv5ZCm5Y+v5Lqk5LqS77yM57uE5Lu25YaF6YOo5bCG5Lya5qC55o2u5b2T5YmN6aKc6Imy77yM5Li65YW25Yqg5LiKIGhvdmVyIGFjdGl2ZSDmoLflvI9cbiAgICovXG4gIGludGVyYWN0aXZlPzogYm9vbGVhblxuICAvKipcbiAgICog54K55Ye75LqL5Lu255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xpY2s/OiAoKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8U1ZHU1ZHRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog5bC65a+4XG4gICAqL1xuICBzaXplPzogbnVtYmVyXG59XG5cbi8qKlxuICog6K+t5LmJ5YyW55qE55+i6YeP5Zu+5b2i77yM5YiG5Li65a+86Iiq44CB5Y+N6aaI44CB57yW6L6R44CB5bel5YW344CB5Zu+6KGo5ZKM55Sf5rS75LqU56eN57G75Z6L44CCXG4gKi9cbmNvbnN0IEljb246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElJY29uUHJvcHM+ICYge1xuICB0eXBlOiBzdHJpbmdcbn0gPSAoe1xuICBjbGFzc05hbWUsXG4gIGNvbG9yLFxuICBpY29uLFxuICBpbnRlcmFjdGl2ZTogaW50ZXJhY3RpdmVQcm9wLFxuICBvbkNsaWNrLFxuICBzaXplLFxuICAuLi5vdGhlclByb3BzXG59OiBJSWNvblByb3BzKSA9PiB7XG4gIGxldCBjb2xvclByb3AgPSBjb2xvclxuICBpZiAoY29sb3JQcm9wICYmIGNvbG9yUHJvcC5pbmNsdWRlcyhcInZhclwiKSkge1xuICAgIGNvbnN0IGRvY3VtZW50U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICBpZiAoZG9jdW1lbnRTdHlsZSkge1xuICAgICAgY29sb3JQcm9wID0gZG9jdW1lbnRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFxuICAgICAgICBjb2xvclByb3Auc2xpY2UoNCwgY29sb3JQcm9wLmxlbmd0aCAtIDEpXG4gICAgICApXG4gICAgfVxuICAgIGNvbG9yUHJvcCA9IFwiI2EzYTNhM1wiXG4gIH1cbiAgY29uc3QgbGlnaHRuZXNzID0gY29sb3IyaHNsKGNvbG9yUHJvcCkubFxuXG4gIGNvbnN0IGRhdGEgPSBJY29uU3ZnUGF0aHNbaWNvbl1cbiAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcCgoZDogc3RyaW5nKSA9PiAoXG4gICAgPHBhdGggZD17ZH0ga2V5PXtkfSBmaWxsUnVsZT1cImV2ZW5vZGRcIiAvPlxuICApKVxuICBjb25zdCBpbnRlcmFjdGl2ZSA9IGludGVyYWN0aXZlUHJvcCB8fCAhIW9uQ2xpY2tcbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS1iYXNlYCwge1xuICAgIFtgJHtwcmVmaXh9LWludGVyYWN0aXZlYF06IGludGVyYWN0aXZlLFxuICAgIFtgJHtwcmVmaXh9LWludGVyYWN0aXZlX2xldmVsXzBgXTogaW50ZXJhY3RpdmUgJiYgbGlnaHRuZXNzIDwgMC4zNSxcbiAgICBbYCR7cHJlZml4fS1pbnRlcmFjdGl2ZV9sZXZlbF8xYF06XG4gICAgICBpbnRlcmFjdGl2ZSAmJiBsaWdodG5lc3MgPCAwLjQ1ICYmIGxpZ2h0bmVzcyA+PSAwLjM1LFxuICAgIFtgJHtwcmVmaXh9LWludGVyYWN0aXZlX2xldmVsXzJgXTpcbiAgICAgIGludGVyYWN0aXZlICYmIGxpZ2h0bmVzcyA8IDAuNjUgJiYgbGlnaHRuZXNzID49IDAuNDUsXG4gICAgW2Ake3ByZWZpeH0taW50ZXJhY3RpdmVfbGV2ZWxfM2BdOlxuICAgICAgaW50ZXJhY3RpdmUgJiYgbGlnaHRuZXNzIDwgMSAmJiBsaWdodG5lc3MgPj0gMC42NSxcbiAgICBbYCR7cHJlZml4fS1pbnRlcmFjdGl2ZV9sZXZlbF93aGl0ZWBdOiBpbnRlcmFjdGl2ZSAmJiBsaWdodG5lc3MgPT09IDEsXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgd2lkdGg9e3NpemV9XG4gICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICB2aWV3Qm94PVwiMCAwIDE4IDE4XCJcbiAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgZGF0YS1pbnRlcmFjdGl2ZT17aW50ZXJhY3RpdmV9XG4gICAgICBkYXRhLWljb249e2ljb259XG4gICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgICBvbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICA+XG4gICAgICB7cGF0aHN9XG4gICAgICB7aW50ZXJhY3RpdmUgJiYgbGlnaHRuZXNzICE9PSAxICYmIChcbiAgICAgICAgPGcgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWludGVyYWN0aXZlLWNvdmVyYH0gZmlsbD1cIiMwMDBcIj5cbiAgICAgICAgICB7cGF0aHN9XG4gICAgICAgIDwvZz5cbiAgICAgICl9XG4gICAgPC9zdmc+XG4gIClcbn1cblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOminOiJsuWAvO+8jOaUr+aMgSByZ2IoYT8pLCBoZXgg5Lul5Y+KIGNzcyB2YXJpYWJsZVxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlm77moIflkI3np7BcbiAgICovXG4gIGljb246IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIOaYr+WQpuWPr+S6pOS6ku+8jOe7hOS7tuWGhemDqOWwhuS8muagueaNruW9k+WJjeminOiJsu+8jOS4uuWFtuWKoOS4iiBob3ZlciBhY3RpdmUg5qC35byPXG4gICAqL1xuICBpbnRlcmFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDngrnlh7vkuovku7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG59XG5cbkljb24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgY29sb3I6IFwidmFyKC0tZ3JheS03MDApXCIsXG4gIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgb25DbGljazogbnVsbCxcbiAgc2l6ZTogMTgsXG59XG5cbkljb24udHlwZSA9IFwiSWNvblwiXG5cbmV4cG9ydCBkZWZhdWx0IEljb25cbiJdfQ==