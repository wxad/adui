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

var _icon = _interopRequireDefault(require("../icon"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-tag";

var Tag = function Tag(_ref) {
  var _classNames;

  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      intent = _ref.intent,
      interactive = _ref.interactive,
      onRemove = _ref.onRemove,
      removableProp = _ref.removable,
      round = _ref.round,
      size = _ref.size,
      style = _ref.style,
      theme = _ref.theme,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "color", "intent", "interactive", "onRemove", "removable", "round", "size", "style", "theme"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      removed = _useState2[0],
      setRemoved = _useState2[1];

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeContext = _useContext.size;

  var handleRemove = function handleRemove(e) {
    setRemoved(true);

    if (onRemove) {
      onRemove(e);
    }
  };

  var removable = !!onRemove || removableProp;
  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-base"), color ? "" : "".concat(prefix, "-").concat(intent), "".concat(prefix, "-").concat((0, _configProvider.getComputedSize)(size, sizeContext)), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-colored"), !!color), _defineProperty(_classNames, "".concat(prefix, "-interactive"), interactive), _defineProperty(_classNames, "".concat(prefix, "-removable"), removable), _defineProperty(_classNames, "".concat(prefix, "-round"), round), _defineProperty(_classNames, "".concat(prefix, "-").concat(theme), theme), _classNames));

  if (removed) {
    return null;
  }

  var colorStyle = {};

  if (color) {
    colorStyle.color = color;
  }

  return _react["default"].createElement("div", _extends({
    className: classSet,
    style: _objectSpread({}, colorStyle, {}, style)
  }, otherProps), _react["default"].createElement("div", {
    className: "".concat(prefix, "-content")
  }, children, removable && _react["default"].createElement(_icon["default"], {
    icon: "cancel-circle",
    className: "".concat(prefix, "-remove"),
    onClick: handleRemove,
    size: 16
  })), _react["default"].createElement("div", {
    className: "".concat(prefix, "-background")
  }), !theme && _react["default"].createElement("div", {
    className: "".concat(prefix, "-shadow")
  }));
};

Tag.propTypes = {
  children: _propTypes["default"].node.isRequired,
  className: _propTypes["default"].string,
  color: _propTypes["default"].string,
  intent: _propTypes["default"].oneOf(["normal", "primary", "success", "warning", "danger"]),
  interactive: _propTypes["default"].bool,
  onRemove: _propTypes["default"].func,
  removable: _propTypes["default"].bool,
  round: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  style: _propTypes["default"].object,
  theme: _propTypes["default"].oneOf([null, "light"])
};
Tag.defaultProps = {
  className: undefined,
  color: null,
  intent: "normal",
  interactive: false,
  onRemove: null,
  removable: false,
  round: false,
  size: "small",
  style: {},
  theme: null
};
var _default = Tag;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFnL1RhZy50c3giXSwibmFtZXMiOlsicHJlZml4IiwiVGFnIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJjb2xvciIsImludGVudCIsImludGVyYWN0aXZlIiwib25SZW1vdmUiLCJyZW1vdmFibGVQcm9wIiwicmVtb3ZhYmxlIiwicm91bmQiLCJzaXplIiwic3R5bGUiLCJ0aGVtZSIsIm90aGVyUHJvcHMiLCJyZW1vdmVkIiwic2V0UmVtb3ZlZCIsIkNvbmZpZ0NvbnRleHQiLCJzaXplQ29udGV4dCIsImhhbmRsZVJlbW92ZSIsImUiLCJjbGFzc1NldCIsImNvbG9yU3R5bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9uZU9mIiwiYm9vbCIsImZ1bmMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFVBQWY7O0FBcURBLElBQU1DLEdBQXVDLEdBQUcsU0FBMUNBLEdBQTBDLE9BYS9CO0FBQUE7O0FBQUEsTUFaZkMsUUFZZSxRQVpmQSxRQVllO0FBQUEsTUFYZkMsU0FXZSxRQVhmQSxTQVdlO0FBQUEsTUFWZkMsS0FVZSxRQVZmQSxLQVVlO0FBQUEsTUFUZkMsTUFTZSxRQVRmQSxNQVNlO0FBQUEsTUFSZkMsV0FRZSxRQVJmQSxXQVFlO0FBQUEsTUFQZkMsUUFPZSxRQVBmQSxRQU9lO0FBQUEsTUFOSkMsYUFNSSxRQU5mQyxTQU1lO0FBQUEsTUFMZkMsS0FLZSxRQUxmQSxLQUtlO0FBQUEsTUFKZkMsSUFJZSxRQUpmQSxJQUllO0FBQUEsTUFIZkMsS0FHZSxRQUhmQSxLQUdlO0FBQUEsTUFGZkMsS0FFZSxRQUZmQSxLQUVlO0FBQUEsTUFEWkMsVUFDWTs7QUFB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cURBM0IsR0FBRyxDQUFDK0IsWUFBSixHQUFtQjtBQUNqQjdCLEVBQUFBLFNBQVMsRUFBRThCLFNBRE07QUFFakI3QixFQUFBQSxLQUFLLEVBQUUsSUFGVTtBQUdqQkMsRUFBQUEsTUFBTSxFQUFFLFFBSFM7QUFJakJDLEVBQUFBLFdBQVcsRUFBRSxLQUpJO0FBS2pCQyxFQUFBQSxRQUFRLEVBQUUsSUFMTztBQU1qQkUsRUFBQUEsU0FBUyxFQUFFLEtBTk07QUFPakJDLEVBQUFBLEtBQUssRUFBRSxLQVBVO0FBUWpCQyxFQUFBQSxJQUFJLEVBQUUsT0FSVztBQVNqQkMsRUFBQUEsS0FBSyxFQUFFLEVBVFU7QUFVakJDLEVBQUFBLEtBQUssRUFBRTtBQVZVLENBQW5CO2VBYWVaLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdGFnXCJcblxuZXhwb3J0IGludGVyZmFjZSBJVGFnUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDoh6rlrprkuYnpopzoibJcbiAgICovXG4gIGNvbG9yPzogc3RyaW5nIHwgbnVsbFxuICAvKipcbiAgICog6K6+572u57G75Z6LXG4gICAqL1xuICBpbnRlbnQ/OiBcIm5vcm1hbFwiIHwgXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiIHwgXCJkYW5nZXJcIlxuICAvKipcbiAgICog5oyH5a6aIFRhZyDmmK/lkKblj6/kuqTkupLvvIznu4Tku7blsIbkvJroh6rliqjliqDkuIogaG92ZXIgYWN0aXZlIOagt+W8j1xuICAgKi9cbiAgaW50ZXJhY3RpdmU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDnp7vpmaTml7bnmoQgaGFuZGxlcu+8jOiuvue9ruatpCBwcm9wIOaXtiBUYWcg5bCG5Lya5b+955WlIHJlbW92YWJsZSBwcm9wXG4gICAqL1xuICBvblJlbW92ZT86ICgoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiDmmK/lkKblj6/np7vpmaRcbiAgICovXG4gIHJlbW92YWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpuWchuinklxuICAgKi9cbiAgcm91bmQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOmZhOWKoOagt+W8j1xuICAgKi9cbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiDkuLvpophcbiAgICovXG4gIHRoZW1lPzogbnVsbCB8IFwibGlnaHRcIlxufVxuXG4vKipcbiAqIOagh+etvuWxleeOsOebuOWFs+eahOeLrOeri+WFs+mUruivjeS/oeaBr++8jOaWueS+v+eUqOaIt+W/q+mAn+i+qOWIq+WGheWuueWxnuaAp++8jOS5n+WPr+i/m+ihjOaTjeS9nOOAglxuICovXG5jb25zdCBUYWc6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElUYWdQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBjb2xvcixcbiAgaW50ZW50LFxuICBpbnRlcmFjdGl2ZSxcbiAgb25SZW1vdmUsXG4gIHJlbW92YWJsZTogcmVtb3ZhYmxlUHJvcCxcbiAgcm91bmQsXG4gIHNpemUsXG4gIHN0eWxlLFxuICB0aGVtZSxcbiAgLi4ub3RoZXJQcm9wc1xufTogSVRhZ1Byb3BzKSA9PiB7XG4gIGNvbnN0IFtyZW1vdmVkLCBzZXRSZW1vdmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcblxuICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIHNldFJlbW92ZWQodHJ1ZSlcbiAgICBpZiAob25SZW1vdmUpIHtcbiAgICAgIG9uUmVtb3ZlKGUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVtb3ZhYmxlID0gISFvblJlbW92ZSB8fCByZW1vdmFibGVQcm9wXG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICBgJHtwcmVmaXh9LWJhc2VgLFxuICAgIGNvbG9yID8gXCJcIiA6IGAke3ByZWZpeH0tJHtpbnRlbnR9YCxcbiAgICBgJHtwcmVmaXh9LSR7Z2V0Q29tcHV0ZWRTaXplKHNpemUsIHNpemVDb250ZXh0KX1gLFxuICAgIHtcbiAgICAgIFtgJHtwcmVmaXh9LWNvbG9yZWRgXTogISFjb2xvcixcbiAgICAgIFtgJHtwcmVmaXh9LWludGVyYWN0aXZlYF06IGludGVyYWN0aXZlLFxuICAgICAgW2Ake3ByZWZpeH0tcmVtb3ZhYmxlYF06IHJlbW92YWJsZSxcbiAgICAgIFtgJHtwcmVmaXh9LXJvdW5kYF06IHJvdW5kLFxuICAgICAgW2Ake3ByZWZpeH0tJHt0aGVtZX1gXTogdGhlbWUsXG4gICAgfVxuICApXG5cbiAgaWYgKHJlbW92ZWQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgY29sb3JTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHt9XG5cbiAgaWYgKGNvbG9yKSB7XG4gICAgY29sb3JTdHlsZS5jb2xvciA9IGNvbG9yXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5jb2xvclN0eWxlLFxuICAgICAgICAuLi5zdHlsZSxcbiAgICAgIH19XG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jb250ZW50YH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge3JlbW92YWJsZSAmJiAoXG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGljb249XCJjYW5jZWwtY2lyY2xlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1yZW1vdmVgfVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVtb3ZlfVxuICAgICAgICAgICAgc2l6ZT17MTZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tYmFja2dyb3VuZGB9IC8+XG4gICAgICB7IXRoZW1lICYmIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNoYWRvd2B9IC8+fVxuICAgIDwvZGl2PlxuICApXG59XG5cblRhZy5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDoh6rlrprkuYnpopzoibJcbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6K6+572u57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJub3JtYWxcIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOaMh+WumiBUYWcg5piv5ZCm5Y+v5Lqk5LqS77yM57uE5Lu25bCG5Lya6Ieq5Yqo5Yqg5LiKIGhvdmVyIGFjdGl2ZSDmoLflvI9cbiAgICovXG4gIGludGVyYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOenu+mZpOaXtueahCBoYW5kbGVy77yM6K6+572u5q2kIHByb3Ag5pe2IFRhZyDlsIbkvJrlv73nlaUgcmVtb3ZhYmxlIHByb3BcbiAgICovXG4gIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOaYr+WQpuWPr+enu+mZpFxuICAgKi9cbiAgcmVtb3ZhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOaYr+WQpuWchuinklxuICAgKi9cbiAgcm91bmQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog6ZmE5Yqg5qC35byPXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOS4u+mimFxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsaWdodFwiXSksXG59XG5cblRhZy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBjb2xvcjogbnVsbCxcbiAgaW50ZW50OiBcIm5vcm1hbFwiLFxuICBpbnRlcmFjdGl2ZTogZmFsc2UsXG4gIG9uUmVtb3ZlOiBudWxsLFxuICByZW1vdmFibGU6IGZhbHNlLFxuICByb3VuZDogZmFsc2UsXG4gIHNpemU6IFwic21hbGxcIixcbiAgc3R5bGU6IHt9LFxuICB0aGVtZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnXG4iXX0=