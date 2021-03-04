"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rcAnimate = _interopRequireDefault(require("rc-animate"));

var _classnames = _interopRequireDefault(require("classnames"));

var _warning = _interopRequireDefault(require("../_util/warning"));

var _configProvider = require("../config-provider");

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
    (0, _warning["default"])(value >= 0 && value <= 1, "Spinner", "prop `value` 范围为 0 到 1，请传入在此范围内的数字");
  }

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-base"), "".concat(prefix, "-").concat(intent), _defineProperty({}, "".concat(prefix, "-spinning"), spinning && value === null));

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeContext = _useContext.size;

  var size = (0, _configProvider.getComputedSize)(sizeProp, sizeContext);
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

  var spin = _react["default"].createElement("div", _extends({
    className: classSet,
    style: _objectSpread(_objectSpread({}, spinStyle), style || {})
  }, otherProps), _react["default"].createElement("svg", {
    fill: "none",
    width: dimension,
    height: dimension,
    viewBox: "0 0 100 100",
    className: "".concat(prefix, "-circular")
  }, _react["default"].createElement("circle", {
    className: "".concat(prefix, "-track"),
    cx: "50%",
    cy: "50%",
    r: "44",
    strokeWidth: 100 / dimension * strokeWidth
  }), _react["default"].createElement("circle", {
    className: "".concat(prefix, "-head"),
    cx: "50%",
    cy: "50%",
    r: "44",
    strokeWidth: 100 / dimension * strokeWidth,
    style: _objectSpread({
      strokeDasharray: "282.743px"
    }, strokeStyle)
  })), !!text && _react["default"].createElement("div", {
    className: "".concat(prefix, "-text")
  }, text));

  if (isNestedPattern()) {
    return _react["default"].createElement(_rcAnimate["default"], _extends({
      component: "div",
      className: "".concat(prefix, "-nestedWrapper"),
      style: null,
      transitionName: "fade"
    }, otherProps), spinning && _react["default"].createElement("div", {
      key: "loading"
    }, spin), _react["default"].createElement("div", {
      className: (0, _classnames["default"])("".concat(prefix, "-container"), _defineProperty({}, "".concat(prefix, "-blur"), spinning)),
      key: "container",
      style: {
        minHeight: minHeight
      }
    }, children));
  }

  return spin;
};

Spinner.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  color: _propTypes["default"].string,
  intent: _propTypes["default"].oneOf(["normal", "primary", "success", "warning", "danger"]),
  minHeight: _propTypes["default"].number,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  spinning: _propTypes["default"].bool,
  style: _propTypes["default"].object,
  text: _propTypes["default"].string,
  value: _propTypes["default"].number
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
var _default = Spinner;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3Bpbm5lci9TcGlubmVyLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJTcGlubmVyIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNvbG9yIiwiaW50ZW50IiwibWluSGVpZ2h0Iiwic2l6ZVByb3AiLCJzaXplIiwic3Bpbm5pbmciLCJzdHlsZSIsInRleHQiLCJ2YWx1ZSIsIm90aGVyUHJvcHMiLCJpc05lc3RlZFBhdHRlcm4iLCJ1bmRlZmluZWQiLCJjbGFzc1NldCIsIkNvbmZpZ0NvbnRleHQiLCJzaXplQ29udGV4dCIsImRpbWVuc2lvbiIsInN0cm9rZVdpZHRoIiwic3BpblN0eWxlIiwic3Ryb2tlU3R5bGUiLCJzdHJva2VEYXNob2Zmc2V0Iiwic3BpbiIsInN0cm9rZURhc2hhcnJheSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJvbmVPZiIsIm51bWJlciIsImJvb2wiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxjQUFmOztBQWlEQSxJQUFNQyxPQUErQyxHQUFHLFNBQWxEQSxPQUFrRCxDQUN0REMsS0FEc0QsRUFFbkQ7QUFBQSxNQUVEQyxRQUZDLEdBYUNELEtBYkQsQ0FFREMsUUFGQztBQUFBLE1BR0RDLFNBSEMsR0FhQ0YsS0FiRCxDQUdERSxTQUhDO0FBQUEsTUFJREMsS0FKQyxHQWFDSCxLQWJELENBSURHLEtBSkM7QUFBQSxNQUtEQyxNQUxDLEdBYUNKLEtBYkQsQ0FLREksTUFMQztBQUFBLE1BTURDLFNBTkMsR0FhQ0wsS0FiRCxDQU1ESyxTQU5DO0FBQUEsTUFPS0MsUUFQTCxHQWFDTixLQWJELENBT0RPLElBUEM7QUFBQSxNQVFEQyxRQVJDLEdBYUNSLEtBYkQsQ0FRRFEsUUFS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QUVxQixzQkFBVUksTUExQkg7QUE4QmxCdkIsRUFBQUEsSUFBSSxFQUFFbUIsc0JBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixDQUFoQixDQTlCWTtBQWtDbEJyQixFQUFBQSxRQUFRLEVBQUVrQixzQkFBVUssSUFsQ0Y7QUFzQ2xCdEIsRUFBQUEsS0FBSyxFQUFFaUIsc0JBQVVNLE1BdENDO0FBMENsQnRCLEVBQUFBLElBQUksRUFBRWdCLHNCQUFVRSxNQTFDRTtBQThDbEJqQixFQUFBQSxLQUFLLEVBQUVlLHNCQUFVSTtBQTlDQyxDQUFwQjtBQWlEQS9CLE9BQU8sQ0FBQ2tDLFlBQVIsR0FBdUI7QUFDckJoQyxFQUFBQSxRQUFRLEVBQUUsSUFEVztBQUVyQkMsRUFBQUEsU0FBUyxFQUFFLEVBRlU7QUFHckJDLEVBQUFBLEtBQUssRUFBRSxJQUhjO0FBSXJCQyxFQUFBQSxNQUFNLEVBQUUsUUFKYTtBQUtyQkMsRUFBQUEsU0FBUyxFQUFFLEdBTFU7QUFNckJFLEVBQUFBLElBQUksRUFBRSxPQU5lO0FBT3JCQyxFQUFBQSxRQUFRLEVBQUUsSUFQVztBQVFyQkMsRUFBQUEsS0FBSyxFQUFFLEVBUmM7QUFTckJDLEVBQUFBLElBQUksRUFBRSxJQVRlO0FBVXJCQyxFQUFBQSxLQUFLLEVBQUU7QUFWYyxDQUF2QjtlQWFlWixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgQW5pbWF0ZSBmcm9tIFwicmMtYW5pbWF0ZVwiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgd2FybmluZyBmcm9tIFwiLi4vX3V0aWwvd2FybmluZ1wiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktc3Bpbm5lclwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNwaW5uZXJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruminOiJslxuICAgKi9cbiAgY29sb3I/OiBzdHJpbmcgfCBudWxsXG4gIC8qKlxuICAgKiDorr7nva7nsbvlnotcbiAgICovXG4gIGludGVudD86IFwibm9ybWFsXCIgfCBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJpbmZvXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCJcbiAgLyoqXG4gICAqIOiuvue9riBTcGlubmVyIOWcqOaciSBjaGlsZHJlbiDkuLogZmFsc2XvvIjljbPnqbrnirbmgIHvvInml7bnmoTmnIDlsI/pq5jluqZcbiAgICovXG4gIG1pbkhlaWdodD86IG51bWJlclxuICAvKipcbiAgICogc3ZnIOWuvemrmOWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog5piv5ZCm6L2s5YqoXG4gICAqL1xuICBzcGlubmluZz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOmZhOWKoOagt+W8j1xuICAgKi9cbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiDmloflrZfmj5DnpLpcbiAgICovXG4gIHRleHQ/OiBzdHJpbmcgfCBudWxsXG4gIC8qKlxuICAgKiDmjIflrprliqDovb3ov5vluqZcbiAgICovXG4gIHZhbHVlPzogbnVtYmVyIHwgbnVsbFxufVxuXG4vKipcbiAqIOaXi+i9rOWKoOi9veeUqOS6juWRiuefpeeUqOaIt+S/oeaBr+WGheWuueeahOWKoOi9veeKtuaAge+8jOmAmuW4uOaYr+WNs+aXtuOAgeefreaXtueahOOAglxuICovXG5jb25zdCBTcGlubmVyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJU3Bpbm5lclByb3BzPiA9IChcbiAgcHJvcHM6IElTcGlubmVyUHJvcHNcbikgPT4ge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sXG4gICAgY2xhc3NOYW1lLFxuICAgIGNvbG9yLFxuICAgIGludGVudCxcbiAgICBtaW5IZWlnaHQsXG4gICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgc3Bpbm5pbmcsXG4gICAgc3R5bGUsXG4gICAgdGV4dCxcbiAgICB2YWx1ZSxcbiAgICAuLi5vdGhlclByb3BzXG4gIH0gPSBwcm9wc1xuICBjb25zdCBpc05lc3RlZFBhdHRlcm4gPSAoKSA9PiAhIShwcm9wcyAmJiBwcm9wcy5jaGlsZHJlbiAhPT0gbnVsbClcblxuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIHdhcm5pbmcoXG4gICAgICB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDEsXG4gICAgICBcIlNwaW5uZXJcIixcbiAgICAgIFwicHJvcCBgdmFsdWVgIOiMg+WbtOS4uiAwIOWIsCAx77yM6K+35Lyg5YWl5Zyo5q2k6IyD5Zu05YaF55qE5pWw5a2XXCJcbiAgICApXG4gIH1cblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgY2xhc3NOYW1lLFxuICAgIGAke3ByZWZpeH0tYmFzZWAsXG4gICAgYCR7cHJlZml4fS0ke2ludGVudH1gLFxuICAgIHtcbiAgICAgIFtgJHtwcmVmaXh9LXNwaW5uaW5nYF06IHNwaW5uaW5nICYmIHZhbHVlID09PSBudWxsLFxuICAgIH1cbiAgKVxuXG4gIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcbiAgY29uc3Qgc2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplUHJvcCwgc2l6ZUNvbnRleHQpXG5cbiAgbGV0IGRpbWVuc2lvblxuICBsZXQgc3Ryb2tlV2lkdGhcblxuICBpZiAoc2l6ZSA9PT0gXCJtZWRpdW1cIikge1xuICAgIGRpbWVuc2lvbiA9IDI4XG4gICAgc3Ryb2tlV2lkdGggPSAzXG4gIH0gZWxzZSBpZiAoc2l6ZSA9PT0gXCJtaW5pXCIpIHtcbiAgICBkaW1lbnNpb24gPSAxNlxuICAgIHN0cm9rZVdpZHRoID0gMlxuICB9IGVsc2UgaWYgKHNpemUgPT09IFwic21hbGxcIikge1xuICAgIGRpbWVuc2lvbiA9IDIwXG4gICAgc3Ryb2tlV2lkdGggPSAyLjVcbiAgfSBlbHNlIHtcbiAgICBkaW1lbnNpb24gPSAzOFxuICAgIHN0cm9rZVdpZHRoID0gNFxuICB9XG5cbiAgY29uc3Qgc3BpblN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge31cbiAgY29uc3Qgc3Ryb2tlU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7fVxuICBpZiAoY29sb3IpIHtcbiAgICBzcGluU3R5bGUuY29sb3IgPSBjb2xvclxuICB9XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc3Ryb2tlU3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IGAkezI4Mi43NDMgLSB2YWx1ZSAqIDI4Mi43NDN9cHhgXG4gIH1cblxuICBjb25zdCBzcGluID0gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5zcGluU3R5bGUsXG4gICAgICAgIC4uLihzdHlsZSB8fCB7fSksXG4gICAgICB9fVxuICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgPlxuICAgICAgPHN2Z1xuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHdpZHRoPXtkaW1lbnNpb259XG4gICAgICAgIGhlaWdodD17ZGltZW5zaW9ufVxuICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIlxuICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2lyY3VsYXJgfVxuICAgICAgPlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRyYWNrYH1cbiAgICAgICAgICBjeD1cIjUwJVwiXG4gICAgICAgICAgY3k9XCI1MCVcIlxuICAgICAgICAgIHI9XCI0NFwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9eygxMDAgLyBkaW1lbnNpb24pICogc3Ryb2tlV2lkdGh9XG4gICAgICAgIC8+XG4gICAgICAgIDxjaXJjbGVcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0taGVhZGB9XG4gICAgICAgICAgY3g9XCI1MCVcIlxuICAgICAgICAgIGN5PVwiNTAlXCJcbiAgICAgICAgICByPVwiNDRcIlxuICAgICAgICAgIHN0cm9rZVdpZHRoPXsoMTAwIC8gZGltZW5zaW9uKSAqIHN0cm9rZVdpZHRofVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IFwiMjgyLjc0M3B4XCIsXG4gICAgICAgICAgICAuLi5zdHJva2VTdHlsZSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9zdmc+XG4gICAgICB7ISF0ZXh0ICYmIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRleHRgfT57dGV4dH08L2Rpdj59XG4gICAgPC9kaXY+XG4gIClcblxuICBpZiAoaXNOZXN0ZWRQYXR0ZXJuKCkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFuaW1hdGVcbiAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW5lc3RlZFdyYXBwZXJgfVxuICAgICAgICBzdHlsZT17bnVsbH1cbiAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJmYWRlXCJcbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtzcGlubmluZyAmJiA8ZGl2IGtleT1cImxvYWRpbmdcIj57c3Bpbn08L2Rpdj59XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1jb250YWluZXJgLCB7XG4gICAgICAgICAgICBbYCR7cHJlZml4fS1ibHVyYF06IHNwaW5uaW5nLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIGtleT1cImNvbnRhaW5lclwiXG4gICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0IH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9BbmltYXRlPlxuICAgIClcbiAgfVxuICByZXR1cm4gc3BpblxufVxuXG5TcGlubmVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDorr7nva7popzoibJcbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6K6+572u57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJub3JtYWxcIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOiuvue9riBTcGlubmVyIOWcqOaciSBjaGlsZHJlbiDkuLogZmFsc2XvvIjljbPnqbrnirbmgIHvvInml7bnmoTmnIDlsI/pq5jluqZcbiAgICovXG4gIG1pbkhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIHN2ZyDlrr3pq5jlsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDmmK/lkKbovazliqhcbiAgICovXG4gIHNwaW5uaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOmZhOWKoOagt+W8j1xuICAgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDmloflrZfmj5DnpLpcbiAgICovXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmjIflrprliqDovb3ov5vluqZcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxufVxuXG5TcGlubmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG4gIGNsYXNzTmFtZTogXCJcIixcbiAgY29sb3I6IG51bGwsXG4gIGludGVudDogXCJub3JtYWxcIixcbiAgbWluSGVpZ2h0OiAyMDAsXG4gIHNpemU6IFwic21hbGxcIixcbiAgc3Bpbm5pbmc6IHRydWUsXG4gIHN0eWxlOiB7fSxcbiAgdGV4dDogbnVsbCxcbiAgdmFsdWU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXJcbiJdfQ==