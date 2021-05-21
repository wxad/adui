function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { color2hsl } from "../_util/color";
import IconSvgPaths from "./IconSvgPaths";
import "./style";
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

  var lightness = useMemo(function () {
    var colorProp = color;

    if (colorProp && colorProp.includes("var")) {
      var documentStyle = getComputedStyle(document.documentElement);

      if (documentStyle) {
        colorProp = documentStyle.getPropertyValue(colorProp.slice(4, colorProp.length - 1));
      }

      colorProp = "#a3a3a3";
    }

    return color2hsl(colorProp).l;
  }, [color]);
  var data = IconSvgPaths[icon] || [];
  var paths = data.map(function (d) {
    return React.createElement("path", {
      d: d,
      key: d,
      fillRule: "evenodd"
    });
  });
  var interactive = interactiveProp || !!_onClick;
  var classSet = classNames(className, "".concat(prefix, "-base"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-interactive"), interactive), _defineProperty(_classNames, "".concat(prefix, "-interactive_level_0"), interactive && lightness < 0.35), _defineProperty(_classNames, "".concat(prefix, "-interactive_level_1"), interactive && lightness < 0.45 && lightness >= 0.35), _defineProperty(_classNames, "".concat(prefix, "-interactive_level_2"), interactive && lightness < 0.65 && lightness >= 0.45), _defineProperty(_classNames, "".concat(prefix, "-interactive_level_3"), interactive && lightness < 1 && lightness >= 0.65), _defineProperty(_classNames, "".concat(prefix, "-interactive_level_white"), interactive && lightness === 1), _classNames));
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
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.any.isRequired,
  interactive: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.number
};
Icon.defaultProps = {
  className: undefined,
  color: "var(--gray-700)",
  interactive: false,
  onClick: null,
  size: 18
};
Icon.type = "Icon";
export default Icon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvaWNvbi9JY29uLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZU1lbW8iLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiY29sb3IyaHNsIiwiSWNvblN2Z1BhdGhzIiwicHJlZml4IiwiSWNvbiIsImNsYXNzTmFtZSIsImNvbG9yIiwiaWNvbiIsImludGVyYWN0aXZlUHJvcCIsImludGVyYWN0aXZlIiwib25DbGljayIsInNpemUiLCJvdGhlclByb3BzIiwibGlnaHRuZXNzIiwiY29sb3JQcm9wIiwiaW5jbHVkZXMiLCJkb2N1bWVudFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0UHJvcGVydHlWYWx1ZSIsInNsaWNlIiwibGVuZ3RoIiwibCIsImRhdGEiLCJwYXRocyIsIm1hcCIsImQiLCJjbGFzc1NldCIsImUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImZ1bmMiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLE9BQWhCLFFBQStCLE9BQS9CO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGdCQUExQjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsZ0JBQXpCO0FBRUEsT0FBTyxTQUFQO0FBRUEsSUFBTUMsTUFBTSxHQUFHLFdBQWY7O0FBbUNBLElBQU1DLElBRUwsR0FBRyxTQUZFQSxJQUVGLE9BUWM7QUFBQTs7QUFBQSxNQVBoQkMsU0FPZ0IsUUFQaEJBLFNBT2dCO0FBQUEsTUFOaEJDLEtBTWdCLFFBTmhCQSxLQU1nQjtBQUFBLE1BTGhCQyxJQUtnQixRQUxoQkEsSUFLZ0I7QUFBQSxNQUpIQyxlQUlHLFFBSmhCQyxXQUln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R0FBVixDQUFjQyxVQVpMO0FBZ0JmeEIsRUFBQUEsV0FBVyxFQUFFVixTQUFTLENBQUNtQyxJQWhCUjtBQW9CZnhCLEVBQUFBLE9BQU8sRUFBRVgsU0FBUyxDQUFDb0MsSUFwQko7QUF3QmZ4QixFQUFBQSxJQUFJLEVBQUVaLFNBQVMsQ0FBQ3FDO0FBeEJELENBQWpCO0FBMkJBaEMsSUFBSSxDQUFDaUMsWUFBTCxHQUFvQjtBQUNsQmhDLEVBQUFBLFNBQVMsRUFBRWlDLFNBRE87QUFFbEJoQyxFQUFBQSxLQUFLLEVBQUUsaUJBRlc7QUFHbEJHLEVBQUFBLFdBQVcsRUFBRSxLQUhLO0FBSWxCQyxFQUFBQSxPQUFPLEVBQUUsSUFKUztBQUtsQkMsRUFBQUEsSUFBSSxFQUFFO0FBTFksQ0FBcEI7QUFRQVAsSUFBSSxDQUFDbUMsSUFBTCxHQUFZLE1BQVo7QUFFQSxlQUFlbkMsSUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgY29sb3IyaHNsIH0gZnJvbSBcIi4uL191dGlsL2NvbG9yXCJcbmltcG9ydCBJY29uU3ZnUGF0aHMgZnJvbSBcIi4vSWNvblN2Z1BhdGhzXCJcbmltcG9ydCB7IElJY29uTmFtZXMgfSBmcm9tIFwiLi9JY29uTmFtZXNcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1pY29uXCJcblxuZXhwb3J0IHR5cGUgSWNvbk5hbWVzID0ga2V5b2YgSUljb25OYW1lc1xuXG5leHBvcnQgaW50ZXJmYWNlIElJY29uUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDpopzoibLlgLzvvIzmlK/mjIEgcmdiKGE/KSwgaGV4IOS7peWPiiBjc3MgdmFyaWFibGVcbiAgICovXG4gIGNvbG9yPzogc3RyaW5nXG4gIC8qKlxuICAgKiDlm77moIflkI3np7BcbiAgICovXG4gIGljb246IEljb25OYW1lc1xuICAvKipcbiAgICog5piv5ZCm5Y+v5Lqk5LqS77yM57uE5Lu25YaF6YOo5bCG5Lya5qC55o2u5b2T5YmN6aKc6Imy77yM5Li65YW25Yqg5LiKIGhvdmVyIGFjdGl2ZSDmoLflvI9cbiAgICovXG4gIGludGVyYWN0aXZlPzogYm9vbGVhblxuICAvKipcbiAgICog54K55Ye75LqL5Lu255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xpY2s/OiAoKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8U1ZHU1ZHRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog5bC65a+4XG4gICAqL1xuICBzaXplPzogbnVtYmVyXG59XG5cbi8qKlxuICog6K+t5LmJ5YyW55qE55+i6YeP5Zu+5b2i77yM5YiG5Li65a+86Iiq44CB5Y+N6aaI44CB57yW6L6R44CB5bel5YW344CB5Zu+6KGo5ZKM55Sf5rS75LqU56eN57G75Z6L44CCXG4gKi9cbmNvbnN0IEljb246IFJlYWN0LkZDPElJY29uUHJvcHM+ICYge1xuICB0eXBlOiBzdHJpbmdcbn0gPSAoe1xuICBjbGFzc05hbWUsXG4gIGNvbG9yLFxuICBpY29uLFxuICBpbnRlcmFjdGl2ZTogaW50ZXJhY3RpdmVQcm9wLFxuICBvbkNsaWNrLFxuICBzaXplLFxuICAuLi5vdGhlclByb3BzXG59OiBJSWNvblByb3BzKSA9PiB7XG4gIGNvbnN0IGxpZ2h0bmVzcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGxldCBjb2xvclByb3AgPSBjb2xvclxuICAgIGlmIChjb2xvclByb3AgJiYgY29sb3JQcm9wLmluY2x1ZGVzKFwidmFyXCIpKSB7XG4gICAgICBjb25zdCBkb2N1bWVudFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXG4gICAgICBpZiAoZG9jdW1lbnRTdHlsZSkge1xuICAgICAgICBjb2xvclByb3AgPSBkb2N1bWVudFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXG4gICAgICAgICAgY29sb3JQcm9wLnNsaWNlKDQsIGNvbG9yUHJvcC5sZW5ndGggLSAxKVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBjb2xvclByb3AgPSBcIiNhM2EzYTNcIlxuICAgIH1cbiAgICByZXR1cm4gY29sb3IyaHNsKGNvbG9yUHJvcCkubFxuICB9LCBbY29sb3JdKVxuXG4gIGNvbnN0IGRhdGEgPSBJY29uU3ZnUGF0aHNbaWNvbl0gfHwgW11cbiAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcCgoZDogc3RyaW5nKSA9PiAoXG4gICAgPHBhdGggZD17ZH0ga2V5PXtkfSBmaWxsUnVsZT1cImV2ZW5vZGRcIiAvPlxuICApKVxuICBjb25zdCBpbnRlcmFjdGl2ZSA9IGludGVyYWN0aXZlUHJvcCB8fCAhIW9uQ2xpY2tcbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS1iYXNlYCwge1xuICAgIFtgJHtwcmVmaXh9LWludGVyYWN0aXZlYF06IGludGVyYWN0aXZlLFxuICAgIFtgJHtwcmVmaXh9LWludGVyYWN0aXZlX2xldmVsXzBgXTogaW50ZXJhY3RpdmUgJiYgbGlnaHRuZXNzIDwgMC4zNSxcbiAgICBbYCR7cHJlZml4fS1pbnRlcmFjdGl2ZV9sZXZlbF8xYF06XG4gICAgICBpbnRlcmFjdGl2ZSAmJiBsaWdodG5lc3MgPCAwLjQ1ICYmIGxpZ2h0bmVzcyA+PSAwLjM1LFxuICAgIFtgJHtwcmVmaXh9LWludGVyYWN0aXZlX2xldmVsXzJgXTpcbiAgICAgIGludGVyYWN0aXZlICYmIGxpZ2h0bmVzcyA8IDAuNjUgJiYgbGlnaHRuZXNzID49IDAuNDUsXG4gICAgW2Ake3ByZWZpeH0taW50ZXJhY3RpdmVfbGV2ZWxfM2BdOlxuICAgICAgaW50ZXJhY3RpdmUgJiYgbGlnaHRuZXNzIDwgMSAmJiBsaWdodG5lc3MgPj0gMC42NSxcbiAgICBbYCR7cHJlZml4fS1pbnRlcmFjdGl2ZV9sZXZlbF93aGl0ZWBdOiBpbnRlcmFjdGl2ZSAmJiBsaWdodG5lc3MgPT09IDEsXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgd2lkdGg9e3NpemV9XG4gICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICB2aWV3Qm94PVwiMCAwIDE4IDE4XCJcbiAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgZGF0YS1pbnRlcmFjdGl2ZT17aW50ZXJhY3RpdmV9XG4gICAgICBkYXRhLWljb249e2ljb259XG4gICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICBpZiAob25DbGljaykge1xuICAgICAgICAgIG9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgID5cbiAgICAgIHtwYXRoc31cbiAgICAgIHtpbnRlcmFjdGl2ZSAmJiBsaWdodG5lc3MgIT09IDEgJiYgKFxuICAgICAgICA8ZyBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW50ZXJhY3RpdmUtY292ZXJgfSBmaWxsPVwiIzAwMFwiPlxuICAgICAgICAgIHtwYXRoc31cbiAgICAgICAgPC9nPlxuICAgICAgKX1cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6aKc6Imy5YC877yM5pSv5oyBIHJnYihhPyksIGhleCDku6Xlj4ogY3NzIHZhcmlhYmxlXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOWbvuagh+WQjeensFxuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICog5piv5ZCm5Y+v5Lqk5LqS77yM57uE5Lu25YaF6YOo5bCG5Lya5qC55o2u5b2T5YmN6aKc6Imy77yM5Li65YW25Yqg5LiKIGhvdmVyIGFjdGl2ZSDmoLflvI9cbiAgICovXG4gIGludGVyYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOeCueWHu+S6i+S7tueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbn1cblxuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBjb2xvcjogXCJ2YXIoLS1ncmF5LTcwMClcIixcbiAgaW50ZXJhY3RpdmU6IGZhbHNlLFxuICBvbkNsaWNrOiBudWxsLFxuICBzaXplOiAxOCxcbn1cblxuSWNvbi50eXBlID0gXCJJY29uXCJcblxuZXhwb3J0IGRlZmF1bHQgSWNvblxuIl19