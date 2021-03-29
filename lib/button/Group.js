"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Context = require("./Context");

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-button";

var Group = function Group(_ref) {
  var banner = _ref.banner,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      intent = _ref.intent,
      size = _ref.size,
      theme = _ref.theme,
      otherProps = _objectWithoutProperties(_ref, ["banner", "children", "className", "disabled", "intent", "size", "theme"]);

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-group"), _defineProperty({}, "".concat(prefix, "-group_banner"), banner));
  return React.createElement(_Context.ButtonGroupContext.Provider, {
    value: {
      disabled: disabled,
      intent: intent,
      size: size,
      theme: theme
    }
  }, React.createElement("div", _extends({
    className: classSet
  }, otherProps), children));
};

Group.propTypes = {
  banner: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  intent: _propTypes["default"].oneOf(["normal", "primary", "success", "warning", "danger"]),
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  theme: _propTypes["default"].oneOf([null, "light"])
};
Group.defaultProps = {
  banner: false,
  children: null,
  className: undefined,
  disabled: false,
  intent: "normal",
  size: "small",
  theme: null
};
var _default = Group;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL0dyb3VwLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJHcm91cCIsImJhbm5lciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJpbnRlbnQiLCJzaXplIiwidGhlbWUiLCJvdGhlclByb3BzIiwiY2xhc3NTZXQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwibm9kZSIsInN0cmluZyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxhQUFmOztBQXFDQSxJQUFNQyxLQUFrQyxHQUFHLFNBQXJDQSxLQUFxQyxPQVNsQjtBQUFBLE1BUnZCQyxNQVF1QixRQVJ2QkEsTUFRdUI7QUFBQSxNQVB2QkMsUUFPdUIsUUFQdkJBLFFBT3VCO0FBQUEsTUFOdkJDLFNBTXVCLFFBTnZCQSxTQU11QjtBQUFBLE1BTHZCQyxRQUt1QixRQUx2QkEsUUFLdUI7QUFBQSxNQUp2QkMsTUFJdUIsUUFKdkJBLE1BSXVCO0FBQUEsTUFIdkJDLElBR3VCLFFBSHZCQSxJQUd1QjtBQUFBLE1BRnZCQyxLQUV1QixRQUZ2QkEsS0FFdUI7QUFBQSxNQURwQkMsVUFDb0I7O0FBQ3ZCLE1BQU1DLFFBQVEsR0FBRyw0QkFBV04sU0FBWCxZQUF5QkosTUFBekIsMkNBQ1hBLE1BRFcsb0JBQ2FFLE1BRGIsRUFBakI7QUFJQSxTQUNFLG9CQUFDLDJCQUFELENBQW9CLFFBQXBCO0FBQTZCLElBQUEsS0FBSyxFQUFFO0FBQUVHLE1BQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZQyxNQUFBQSxNQUFNLEVBQU5BLE1BQVo7QUFBb0JDLE1BQUFBLElBQUksRUFBSkEsSUFBcEI7QUFBMEJDLE1BQUFBLEtBQUssRUFBTEE7QUFBMUI7QUFBcEMsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFRTtBQUFoQixLQUE4QkQsVUFBOUIsR0FDR04sUUFESCxDQURGLENBREY7QUFPRCxDQXJCRDs7QUF1QkFGLEtBQUssQ0FBQ1UsU0FBTixHQUFrQjtBQUloQlQsRUFBQUEsTUFBTSxFQUFFVSxzQkFBVUMsSUFKRjtBQVFoQlYsRUFBQUEsUUFBUSxFQUFFUyxzQkFBVUUsSUFSSjtBQVloQlYsRUFBQUEsU0FBUyxFQUFFUSxzQkFBVUcsTUFaTDtBQWdCaEJWLEVBQUFBLFFBQVEsRUFBRU8sc0JBQVVDLElBaEJKO0FBb0JoQlAsRUFBQUEsTUFBTSxFQUFFTSxzQkFBVUksS0FBVixDQUFnQixDQUN0QixRQURzQixFQUV0QixTQUZzQixFQUd0QixTQUhzQixFQUl0QixTQUpzQixFQUt0QixRQUxzQixDQUFoQixDQXBCUTtBQThCaEJULEVBQUFBLElBQUksRUFBRUssc0JBQVVJLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixDQUFoQixDQTlCVTtBQWtDaEJSLEVBQUFBLEtBQUssRUFBRUksc0JBQVVJLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sT0FBUCxDQUFoQjtBQWxDUyxDQUFsQjtBQW9DQWYsS0FBSyxDQUFDZ0IsWUFBTixHQUFxQjtBQUNuQmYsRUFBQUEsTUFBTSxFQUFFLEtBRFc7QUFFbkJDLEVBQUFBLFFBQVEsRUFBRSxJQUZTO0FBR25CQyxFQUFBQSxTQUFTLEVBQUVjLFNBSFE7QUFJbkJiLEVBQUFBLFFBQVEsRUFBRSxLQUpTO0FBS25CQyxFQUFBQSxNQUFNLEVBQUUsUUFMVztBQU1uQkMsRUFBQUEsSUFBSSxFQUFFLE9BTmE7QUFPbkJDLEVBQUFBLEtBQUssRUFBRTtBQVBZLENBQXJCO2VBVWVQLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBCdXR0b25Hcm91cENvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktYnV0dG9uXCJcblxuZXhwb3J0IGludGVyZmFjZSBJQnV0dG9uR3JvdXBQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5piv5ZCm6YCa5qCP5YiG6YWN5a695bqm77yIZmxleDogMTvvvIlcbiAgICovXG4gIGJhbm5lcj86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva7lhoXpg6jmiYDmnIkgPEJ1dHRvbiAvPiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog6K6+572u5YaF6YOo5omA5pyJIDxCdXR0b24gLz4g57G75Z6LXG4gICAqL1xuICBpbnRlbnQ/OiBcIm5vcm1hbFwiIHwgXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiIHwgXCJkYW5nZXJcIlxuICAvKipcbiAgICog6K6+572u5YaF6YOo5omA5pyJIDxCdXR0b24gLz4g5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDorr7nva7lhoXpg6jmiYDmnIkgPEJ1dHRvbiAvPiDkuLvpophcbiAgICovXG4gIHRoZW1lPzogbnVsbCB8IFwibGlnaHRcIlxufVxuXG4vKipcbiAqIOaMiemSrue7hFxuICovXG5jb25zdCBHcm91cDogUmVhY3QuRkM8SUJ1dHRvbkdyb3VwUHJvcHM+ID0gKHtcbiAgYmFubmVyLFxuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBkaXNhYmxlZCxcbiAgaW50ZW50LFxuICBzaXplLFxuICB0aGVtZSxcbiAgLi4ub3RoZXJQcm9wc1xufTogSUJ1dHRvbkdyb3VwUHJvcHMpID0+IHtcbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS1ncm91cGAsIHtcbiAgICBbYCR7cHJlZml4fS1ncm91cF9iYW5uZXJgXTogYmFubmVyLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbkdyb3VwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBkaXNhYmxlZCwgaW50ZW50LCBzaXplLCB0aGVtZSB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gey4uLm90aGVyUHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L0J1dHRvbkdyb3VwQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5Hcm91cC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKbpgJrmoI/liIbphY3lrr3luqbvvIhmbGV4OiAxO++8iVxuICAgKi9cbiAgYmFubmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDorr7nva7lhoXpg6jmiYDmnIkgPEJ1dHRvbiAvPiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOiuvue9ruWGhemDqOaJgOaciSA8QnV0dG9uIC8+IOexu+Wei1xuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwibm9ybWFsXCIsXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgXSksXG4gIC8qKlxuICAgKiDorr7nva7lhoXpg6jmiYDmnIkgPEJ1dHRvbiAvPiDlsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDorr7nva7lhoXpg6jmiYDmnIkgPEJ1dHRvbiAvPiDkuLvpophcbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGlnaHRcIl0pLFxufVxuR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICBiYW5uZXI6IGZhbHNlLFxuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgaW50ZW50OiBcIm5vcm1hbFwiLFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHRoZW1lOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cFxuIl19