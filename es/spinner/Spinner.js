function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from "react";
import PropTypes from "prop-types";
import Animate from "rc-animate";
import classNames from "classnames";
import warning from "../_util/warning";
import { ConfigContext, getComputedSize } from "../config-provider";
import "./style";
var prefix = "adui-spinner";

var Spinner = function Spinner(props) {
  var children = props.children,
      className = props.className,
      color = props.color,
      intent = props.intent,
      minHeight = props.minHeight,
      sizeProp = props.size,
      spinning = props.spinning,
      style = props.style,
      text = props.text,
      value = props.value,
      otherProps = _objectWithoutProperties(props, ["children", "className", "color", "intent", "minHeight", "size", "spinning", "style", "text", "value"]);

  var isNestedPattern = function isNestedPattern() {
    return !!(props && props.children !== null);
  };

  if (value !== null && value !== undefined) {
    warning(value >= 0 && value <= 1, "Spinner", "prop `value` 范围为 0 到 1，请传入在此范围内的数字");
  }

  var classSet = classNames(className, "".concat(prefix, "-base"), "".concat(prefix, "-").concat(intent), _defineProperty({}, "".concat(prefix, "-spinning"), spinning && value === null));

  var _useContext = useContext(ConfigContext),
      sizeContext = _useContext.size;

  var size = getComputedSize(sizeProp, sizeContext);
  var dimension;
  var strokeWidth;

  if (size === "medium") {
    dimension = 28;
    strokeWidth = 3;
  } else if (size === "mini") {
    dimension = 16;
    strokeWidth = 2;
  } else if (size === "small") {
    dimension = 20;
    strokeWidth = 2.5;
  } else {
    dimension = 38;
    strokeWidth = 4;
  }

  var spinStyle = {};
  var strokeStyle = {};

  if (color) {
    spinStyle.color = color;
  }

  if (value !== null && value !== undefined) {
    strokeStyle.strokeDashoffset = "".concat(282.743 - value * 282.743, "px");
  }

  var spin = React.createElement("div", _extends({
    className: classSet,
    style: _objectSpread(_objectSpread({}, spinStyle), style || {})
  }, otherProps), React.createElement("svg", {
    fill: "none",
    width: dimension,
    height: dimension,
    viewBox: "0 0 100 100",
    className: "".concat(prefix, "-circular")
  }, React.createElement("circle", {
    className: "".concat(prefix, "-track"),
    cx: "50%",
    cy: "50%",
    r: "44",
    strokeWidth: 100 / dimension * strokeWidth
  }), React.createElement("circle", {
    className: "".concat(prefix, "-head"),
    cx: "50%",
    cy: "50%",
    r: "44",
    strokeWidth: 100 / dimension * strokeWidth,
    style: _objectSpread({
      strokeDasharray: "282.743px"
    }, strokeStyle)
  })), !!text && React.createElement("div", {
    className: "".concat(prefix, "-text")
  }, text));

  if (isNestedPattern()) {
    return React.createElement(Animate, _extends({
      component: "div",
      className: "".concat(prefix, "-nestedWrapper"),
      style: null,
      transitionName: "fade"
    }, otherProps), spinning && React.createElement("div", {
      key: "loading"
    }, spin), React.createElement("div", {
      className: classNames("".concat(prefix, "-container"), _defineProperty({}, "".concat(prefix, "-blur"), spinning)),
      key: "container",
      style: {
        minHeight: minHeight
      }
    }, children));
  }

  return spin;
};

Spinner.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  intent: PropTypes.oneOf(["normal", "primary", "success", "warning", "danger"]),
  minHeight: PropTypes.number,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  spinning: PropTypes.bool,
  style: PropTypes.object,
  text: PropTypes.string,
  value: PropTypes.number
};
Spinner.defaultProps = {
  children: null,
  className: "",
  color: null,
  intent: "normal",
  minHeight: 200,
  size: "small",
  spinning: true,
  style: {},
  text: null,
  value: null
};
export default Spinner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3Bpbm5lci9TcGlubmVyLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJQcm9wVHlwZXMiLCJBbmltYXRlIiwiY2xhc3NOYW1lcyIsIndhcm5pbmciLCJDb25maWdDb250ZXh0IiwiZ2V0Q29tcHV0ZWRTaXplIiwicHJlZml4IiwiU3Bpbm5lciIsInByb3BzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJjb2xvciIsImludGVudCIsIm1pbkhlaWdodCIsInNpemVQcm9wIiwic2l6ZSIsInNwaW5uaW5nIiwic3R5bGUiLCJ0ZXh0IiwidmFsdWUiLCJvdGhlclByb3BzIiwiaXNOZXN0ZWRQYXR0ZXJuIiwidW5kZWZpbmVkIiwiY2xhc3NTZXQiLCJzaXplQ29udGV4dCIsImRpbWVuc2lvbiIsInN0cm9rZVdpZHRoIiwic3BpblN0eWxlIiwic3Ryb2tlU3R5bGUiLCJzdHJva2VEYXNob2Zmc2V0Iiwic3BpbiIsInN0cm9rZURhc2hhcnJheSIsInByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJvbmVPZiIsIm51bWJlciIsImJvb2wiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFVBQWhCLFFBQWtDLE9BQWxDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsWUFBcEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixrQkFBcEI7QUFDQSxTQUFTQyxhQUFULEVBQXdCQyxlQUF4QixRQUErQyxvQkFBL0M7QUFDQSxPQUFPLFNBQVA7QUFFQSxJQUFNQyxNQUFNLEdBQUcsY0FBZjs7QUFpREEsSUFBTUMsT0FBZ0MsR0FBRyxTQUFuQ0EsT0FBbUMsQ0FBQ0MsS0FBRCxFQUEwQjtBQUFBLE1BRS9EQyxRQUYrRCxHQWE3REQsS0FiNkQsQ0FFL0RDLFFB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QkMsRUFBQUEsS0FBSyxFQUFFLEVBUmM7QUFTckJDLEVBQUFBLElBQUksRUFBRSxJQVRlO0FBVXJCQyxFQUFBQSxLQUFLLEVBQUU7QUFWYyxDQUF2QjtBQWFBLGVBQWVaLE9BQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBBbmltYXRlIGZyb20gXCJyYy1hbmltYXRlXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB3YXJuaW5nIGZyb20gXCIuLi9fdXRpbC93YXJuaW5nXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1zcGlubmVyXCJcblxuZXhwb3J0IGludGVyZmFjZSBJU3Bpbm5lclByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6K6+572u6aKc6ImyXG4gICAqL1xuICBjb2xvcj86IHN0cmluZyB8IG51bGxcbiAgLyoqXG4gICAqIOiuvue9ruexu+Wei1xuICAgKi9cbiAgaW50ZW50PzogXCJub3JtYWxcIiB8IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcImluZm9cIiB8IFwid2FybmluZ1wiIHwgXCJkYW5nZXJcIlxuICAvKipcbiAgICog6K6+572uIFNwaW5uZXIg5Zyo5pyJIGNoaWxkcmVuIOS4uiBmYWxzZe+8iOWNs+epuueKtuaAge+8ieaXtueahOacgOWwj+mrmOW6plxuICAgKi9cbiAgbWluSGVpZ2h0PzogbnVtYmVyXG4gIC8qKlxuICAgKiBzdmcg5a696auY5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDmmK/lkKbovazliqhcbiAgICovXG4gIHNwaW5uaW5nPzogYm9vbGVhblxuICAvKipcbiAgICog6ZmE5Yqg5qC35byPXG4gICAqL1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOaWh+Wtl+aPkOekulxuICAgKi9cbiAgdGV4dD86IHN0cmluZyB8IG51bGxcbiAgLyoqXG4gICAqIOaMh+WumuWKoOi9vei/m+W6plxuICAgKi9cbiAgdmFsdWU/OiBudW1iZXIgfCBudWxsXG59XG5cbi8qKlxuICog5peL6L2s5Yqg6L2955So5LqO5ZGK55+l55So5oi35L+h5oGv5YaF5a6555qE5Yqg6L2954q25oCB77yM6YCa5bi45piv5Y2z5pe244CB55+t5pe255qE44CCXG4gKi9cbmNvbnN0IFNwaW5uZXI6IFJlYWN0LkZDPElTcGlubmVyUHJvcHM+ID0gKHByb3BzOiBJU3Bpbm5lclByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBjbGFzc05hbWUsXG4gICAgY29sb3IsXG4gICAgaW50ZW50LFxuICAgIG1pbkhlaWdodCxcbiAgICBzaXplOiBzaXplUHJvcCxcbiAgICBzcGlubmluZyxcbiAgICBzdHlsZSxcbiAgICB0ZXh0LFxuICAgIHZhbHVlLFxuICAgIC4uLm90aGVyUHJvcHNcbiAgfSA9IHByb3BzXG4gIGNvbnN0IGlzTmVzdGVkUGF0dGVybiA9ICgpID0+ICEhKHByb3BzICYmIHByb3BzLmNoaWxkcmVuICE9PSBudWxsKVxuXG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgd2FybmluZyhcbiAgICAgIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gMSxcbiAgICAgIFwiU3Bpbm5lclwiLFxuICAgICAgXCJwcm9wIGB2YWx1ZWAg6IyD5Zu05Li6IDAg5YiwIDHvvIzor7fkvKDlhaXlnKjmraTojIPlm7TlhoXnmoTmlbDlrZdcIlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICBjbGFzc05hbWUsXG4gICAgYCR7cHJlZml4fS1iYXNlYCxcbiAgICBgJHtwcmVmaXh9LSR7aW50ZW50fWAsXG4gICAge1xuICAgICAgW2Ake3ByZWZpeH0tc3Bpbm5pbmdgXTogc3Bpbm5pbmcgJiYgdmFsdWUgPT09IG51bGwsXG4gICAgfVxuICApXG5cbiAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuICBjb25zdCBzaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemVQcm9wLCBzaXplQ29udGV4dClcblxuICBsZXQgZGltZW5zaW9uXG4gIGxldCBzdHJva2VXaWR0aFxuXG4gIGlmIChzaXplID09PSBcIm1lZGl1bVwiKSB7XG4gICAgZGltZW5zaW9uID0gMjhcbiAgICBzdHJva2VXaWR0aCA9IDNcbiAgfSBlbHNlIGlmIChzaXplID09PSBcIm1pbmlcIikge1xuICAgIGRpbWVuc2lvbiA9IDE2XG4gICAgc3Ryb2tlV2lkdGggPSAyXG4gIH0gZWxzZSBpZiAoc2l6ZSA9PT0gXCJzbWFsbFwiKSB7XG4gICAgZGltZW5zaW9uID0gMjBcbiAgICBzdHJva2VXaWR0aCA9IDIuNVxuICB9IGVsc2Uge1xuICAgIGRpbWVuc2lvbiA9IDM4XG4gICAgc3Ryb2tlV2lkdGggPSA0XG4gIH1cblxuICBjb25zdCBzcGluU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7fVxuICBjb25zdCBzdHJva2VTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHt9XG4gIGlmIChjb2xvcikge1xuICAgIHNwaW5TdHlsZS5jb2xvciA9IGNvbG9yXG4gIH1cbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICBzdHJva2VTdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gYCR7MjgyLjc0MyAtIHZhbHVlICogMjgyLjc0M31weGBcbiAgfVxuXG4gIGNvbnN0IHNwaW4gPSAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnNwaW5TdHlsZSxcbiAgICAgICAgLi4uKHN0eWxlIHx8IHt9KSxcbiAgICAgIH19XG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICA+XG4gICAgICA8c3ZnXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgd2lkdGg9e2RpbWVuc2lvbn1cbiAgICAgICAgaGVpZ2h0PXtkaW1lbnNpb259XG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1jaXJjdWxhcmB9XG4gICAgICA+XG4gICAgICAgIDxjaXJjbGVcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdHJhY2tgfVxuICAgICAgICAgIGN4PVwiNTAlXCJcbiAgICAgICAgICBjeT1cIjUwJVwiXG4gICAgICAgICAgcj1cIjQ0XCJcbiAgICAgICAgICBzdHJva2VXaWR0aD17KDEwMCAvIGRpbWVuc2lvbikgKiBzdHJva2VXaWR0aH1cbiAgICAgICAgLz5cbiAgICAgICAgPGNpcmNsZVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1oZWFkYH1cbiAgICAgICAgICBjeD1cIjUwJVwiXG4gICAgICAgICAgY3k9XCI1MCVcIlxuICAgICAgICAgIHI9XCI0NFwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9eygxMDAgLyBkaW1lbnNpb24pICogc3Ryb2tlV2lkdGh9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheTogXCIyODIuNzQzcHhcIixcbiAgICAgICAgICAgIC4uLnN0cm9rZVN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L3N2Zz5cbiAgICAgIHshIXRleHQgJiYgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdGV4dGB9Pnt0ZXh0fTwvZGl2Pn1cbiAgICA8L2Rpdj5cbiAgKVxuXG4gIGlmIChpc05lc3RlZFBhdHRlcm4oKSkge1xuICAgIHJldHVybiAoXG4gICAgICA8QW5pbWF0ZVxuICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbmVzdGVkV3JhcHBlcmB9XG4gICAgICAgIHN0eWxlPXtudWxsfVxuICAgICAgICB0cmFuc2l0aW9uTmFtZT1cImZhZGVcIlxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAge3NwaW5uaW5nICYmIDxkaXYga2V5PVwibG9hZGluZ1wiPntzcGlufTwvZGl2Pn1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LWNvbnRhaW5lcmAsIHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LWJsdXJgXTogc3Bpbm5pbmcsXG4gICAgICAgICAgfSl9XG4gICAgICAgICAga2V5PVwiY29udGFpbmVyXCJcbiAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0FuaW1hdGU+XG4gICAgKVxuICB9XG4gIHJldHVybiBzcGluXG59XG5cblNwaW5uZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOiuvue9ruminOiJslxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDorr7nva7nsbvlnotcbiAgICovXG4gIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcIm5vcm1hbFwiLFxuICAgIFwicHJpbWFyeVwiLFxuICAgIFwic3VjY2Vzc1wiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gIF0pLFxuICAvKipcbiAgICog6K6+572uIFNwaW5uZXIg5Zyo5pyJIGNoaWxkcmVuIOS4uiBmYWxzZe+8iOWNs+epuueKtuaAge+8ieaXtueahOacgOWwj+mrmOW6plxuICAgKi9cbiAgbWluSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogc3ZnIOWuvemrmOWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOaYr+WQpui9rOWKqFxuICAgKi9cbiAgc3Bpbm5pbmc6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6ZmE5Yqg5qC35byPXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOaWh+Wtl+aPkOekulxuICAgKi9cbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaMh+WumuWKoOi9vei/m+W6plxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG59XG5cblNwaW5uZXIuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiBcIlwiLFxuICBjb2xvcjogbnVsbCxcbiAgaW50ZW50OiBcIm5vcm1hbFwiLFxuICBtaW5IZWlnaHQ6IDIwMCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICBzcGlubmluZzogdHJ1ZSxcbiAgc3R5bGU6IHt9LFxuICB0ZXh0OiBudWxsLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lclxuIl19