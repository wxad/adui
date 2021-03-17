"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

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

  var lightness = (0, _react.useMemo)(function () {
    var colorProp = color;

    if (colorProp && colorProp.includes("var")) {
      var documentStyle = getComputedStyle(document.documentElement);

      if (documentStyle) {
        colorProp = documentStyle.getPropertyValue(colorProp.slice(4, colorProp.length - 1));
      }

      colorProp = "#a3a3a3";
    }

    return (0, _color.color2hsl)(colorProp).l;
  }, [color]);
  var data = _IconSvgPaths["default"][icon] || [];
  var paths = data.map(function (d) {
    return _react["default"].createElement("path", {
      d: d,
      key: d,
      fillRule: "evenodd"
    });
  });
  var interactive = interactiveProp || !!_onClick;
  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-base"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-interactive"), interactive), _defineProperty(_classNames, "".concat(prefix, "-interactive_level_0"), interactive && lightness < 0.35), _defineProperty(_classNames, "".concat(prefix, "-interactive_level_1"), interactive && lightness < 0.45 && lightness >= 0.35), _defineProperty(_classNames, "".concat(prefix, "-interactive_level_2"), interactive && lightness < 0.65 && lightness >= 0.45), _defineProperty(_classNames, "".concat(prefix, "-interactive_level_3"), interactive && lightness < 1 && lightness >= 0.65), _defineProperty(_classNames, "".concat(prefix, "-interactive_level_white"), interactive && lightness === 1), _classNames));
  return _react["default"].createElement("svg", _extends({
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
  }, otherProps), paths, interactive && lightness !== 1 && _react["default"].createElement("g", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvaWNvbi9JY29uLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJJY29uIiwiY2xhc3NOYW1lIiwiY29sb3IiLCJpY29uIiwiaW50ZXJhY3RpdmVQcm9wIiwiaW50ZXJhY3RpdmUiLCJvbkNsaWNrIiwic2l6ZSIsIm90aGVyUHJvcHMiLCJsaWdodG5lc3MiLCJjb2xvclByb3AiLCJpbmNsdWRlcyIsImRvY3VtZW50U3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic2xpY2UiLCJsZW5ndGgiLCJsIiwiZGF0YSIsIkljb25TdmdQYXRocyIsInBhdGhzIiwibWFwIiwiZCIsImNsYXNzU2V0IiwiZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFueSIsImlzUmVxdWlyZWQiLCJib29sIiwiZnVuYyIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFdBQWY7O0FBbUNBLElBQU1DLElBRUwsR0FBRyxTQUZFQSxJQUVGLE9BUWM7QUFBQTs7QUFBQSxNQVBoQkMsU0FPZ0IsUUFQaEJBLFNBT2dCO0FBQUEsTUFOaEJDLEtBTWdCLFFBTmhCQSxLQU1nQjtBQUFBLE1BTGhCQyxJQUtnQixRQUxoQkEsSUFLZ0I7QUFBQSxNQUpIQyxlQUlHLFFBSmhCQyxXQUlnQjtBQUFBLE1BSGhCQyxRQUdnQixRQUhoQkEsT0FHZ0I7QUFBQSxNQUZoQkMsSUFFZ0IsUUFGaEJBLElBRWdCO0FBQUEsTUFEYkMsVUFDYTs7QUFDaEIsTUFBTUMsU0FBUyxHQUFHLG9CQUFRLFlBQU07QUFDOUIsUUFBSUMsU0FBUyxHQUFHUixLQUFoQjs7QUFDQSxRQUFJUSxTQUFTLElB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QUFLLEVBQUUsaUJBRlc7QUFHbEJHLEVBQUFBLFdBQVcsRUFBRSxLQUhLO0FBSWxCQyxFQUFBQSxPQUFPLEVBQUUsSUFKUztBQUtsQkMsRUFBQUEsSUFBSSxFQUFFO0FBTFksQ0FBcEI7QUFRQVAsSUFBSSxDQUFDcUMsSUFBTCxHQUFZLE1BQVo7ZUFFZXJDLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IGNvbG9yMmhzbCB9IGZyb20gXCIuLi9fdXRpbC9jb2xvclwiXG5pbXBvcnQgSWNvblN2Z1BhdGhzIGZyb20gXCIuL0ljb25TdmdQYXRoc1wiXG5pbXBvcnQgeyBJSWNvbk5hbWVzIH0gZnJvbSBcIi4vSWNvbk5hbWVzXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktaWNvblwiXG5cbmV4cG9ydCB0eXBlIEljb25OYW1lcyA9IGtleW9mIElJY29uTmFtZXNcblxuZXhwb3J0IGludGVyZmFjZSBJSWNvblByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6aKc6Imy5YC877yM5pSv5oyBIHJnYihhPyksIGhleCDku6Xlj4ogY3NzIHZhcmlhYmxlXG4gICAqL1xuICBjb2xvcj86IHN0cmluZ1xuICAvKipcbiAgICog5Zu+5qCH5ZCN56ewXG4gICAqL1xuICBpY29uOiBJY29uTmFtZXNcbiAgLyoqXG4gICAqIOaYr+WQpuWPr+S6pOS6ku+8jOe7hOS7tuWGhemDqOWwhuS8muagueaNruW9k+WJjeminOiJsu+8jOS4uuWFtuWKoOS4iiBob3ZlciBhY3RpdmUg5qC35byPXG4gICAqL1xuICBpbnRlcmFjdGl2ZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOeCueWHu+S6i+S7tueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrPzogKChlOiBSZWFjdC5Nb3VzZUV2ZW50PFNWR1NWR0VsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IG51bWJlclxufVxuXG4vKipcbiAqIOivreS5ieWMlueahOefoumHj+WbvuW9ou+8jOWIhuS4uuWvvOiIquOAgeWPjemmiOOAgee8lui+keOAgeW3peWFt+OAgeWbvuihqOWSjOeUn+a0u+S6lOenjeexu+Wei+OAglxuICovXG5jb25zdCBJY29uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJSWNvblByb3BzPiAmIHtcbiAgdHlwZTogc3RyaW5nXG59ID0gKHtcbiAgY2xhc3NOYW1lLFxuICBjb2xvcixcbiAgaWNvbixcbiAgaW50ZXJhY3RpdmU6IGludGVyYWN0aXZlUHJvcCxcbiAgb25DbGljayxcbiAgc2l6ZSxcbiAgLi4ub3RoZXJQcm9wc1xufTogSUljb25Qcm9wcykgPT4ge1xuICBjb25zdCBsaWdodG5lc3MgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgY29sb3JQcm9wID0gY29sb3JcbiAgICBpZiAoY29sb3JQcm9wICYmIGNvbG9yUHJvcC5pbmNsdWRlcyhcInZhclwiKSkge1xuICAgICAgY29uc3QgZG9jdW1lbnRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KVxuICAgICAgaWYgKGRvY3VtZW50U3R5bGUpIHtcbiAgICAgICAgY29sb3JQcm9wID0gZG9jdW1lbnRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFxuICAgICAgICAgIGNvbG9yUHJvcC5zbGljZSg0LCBjb2xvclByb3AubGVuZ3RoIC0gMSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgY29sb3JQcm9wID0gXCIjYTNhM2EzXCJcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9yMmhzbChjb2xvclByb3ApLmxcbiAgfSwgW2NvbG9yXSlcblxuICBjb25zdCBkYXRhID0gSWNvblN2Z1BhdGhzW2ljb25dIHx8IFtdXG4gIGNvbnN0IHBhdGhzID0gZGF0YS5tYXAoKGQ6IHN0cmluZykgPT4gKFxuICAgIDxwYXRoIGQ9e2R9IGtleT17ZH0gZmlsbFJ1bGU9XCJldmVub2RkXCIgLz5cbiAgKSlcbiAgY29uc3QgaW50ZXJhY3RpdmUgPSBpbnRlcmFjdGl2ZVByb3AgfHwgISFvbkNsaWNrXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tYmFzZWAsIHtcbiAgICBbYCR7cHJlZml4fS1pbnRlcmFjdGl2ZWBdOiBpbnRlcmFjdGl2ZSxcbiAgICBbYCR7cHJlZml4fS1pbnRlcmFjdGl2ZV9sZXZlbF8wYF06IGludGVyYWN0aXZlICYmIGxpZ2h0bmVzcyA8IDAuMzUsXG4gICAgW2Ake3ByZWZpeH0taW50ZXJhY3RpdmVfbGV2ZWxfMWBdOlxuICAgICAgaW50ZXJhY3RpdmUgJiYgbGlnaHRuZXNzIDwgMC40NSAmJiBsaWdodG5lc3MgPj0gMC4zNSxcbiAgICBbYCR7cHJlZml4fS1pbnRlcmFjdGl2ZV9sZXZlbF8yYF06XG4gICAgICBpbnRlcmFjdGl2ZSAmJiBsaWdodG5lc3MgPCAwLjY1ICYmIGxpZ2h0bmVzcyA+PSAwLjQ1LFxuICAgIFtgJHtwcmVmaXh9LWludGVyYWN0aXZlX2xldmVsXzNgXTpcbiAgICAgIGludGVyYWN0aXZlICYmIGxpZ2h0bmVzcyA8IDEgJiYgbGlnaHRuZXNzID49IDAuNjUsXG4gICAgW2Ake3ByZWZpeH0taW50ZXJhY3RpdmVfbGV2ZWxfd2hpdGVgXTogaW50ZXJhY3RpdmUgJiYgbGlnaHRuZXNzID09PSAxLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgIHdpZHRoPXtzaXplfVxuICAgICAgaGVpZ2h0PXtzaXplfVxuICAgICAgdmlld0JveD1cIjAgMCAxOCAxOFwiXG4gICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIGRhdGEtaW50ZXJhY3RpdmU9e2ludGVyYWN0aXZlfVxuICAgICAgZGF0YS1pY29uPXtpY29ufVxuICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgICBvbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICA+XG4gICAgICB7cGF0aHN9XG4gICAgICB7aW50ZXJhY3RpdmUgJiYgbGlnaHRuZXNzICE9PSAxICYmIChcbiAgICAgICAgPGcgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWludGVyYWN0aXZlLWNvdmVyYH0gZmlsbD1cIiMwMDBcIj5cbiAgICAgICAgICB7cGF0aHN9XG4gICAgICAgIDwvZz5cbiAgICAgICl9XG4gICAgPC9zdmc+XG4gIClcbn1cblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOminOiJsuWAvO+8jOaUr+aMgSByZ2IoYT8pLCBoZXgg5Lul5Y+KIGNzcyB2YXJpYWJsZVxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlm77moIflkI3np7BcbiAgICovXG4gIGljb246IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIOaYr+WQpuWPr+S6pOS6ku+8jOe7hOS7tuWGhemDqOWwhuS8muagueaNruW9k+WJjeminOiJsu+8jOS4uuWFtuWKoOS4iiBob3ZlciBhY3RpdmUg5qC35byPXG4gICAqL1xuICBpbnRlcmFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDngrnlh7vkuovku7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG59XG5cbkljb24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgY29sb3I6IFwidmFyKC0tZ3JheS03MDApXCIsXG4gIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgb25DbGljazogbnVsbCxcbiAgc2l6ZTogMTgsXG59XG5cbkljb24udHlwZSA9IFwiSWNvblwiXG5cbmV4cG9ydCBkZWZhdWx0IEljb25cbiJdfQ==