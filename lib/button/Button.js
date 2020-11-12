"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = _interopRequireDefault(require("../icon"));

var _spinner = _interopRequireDefault(require("../spinner"));

var _Group = _interopRequireDefault(require("./Group"));

var _configProvider = require("../config-provider");

var _Context = require("./Context");

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

var prefix = "adui-button";
var Button = (0, _react.forwardRef)(function (_ref, ref) {
  var _classNames;

  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      disabledProp = _ref.disabled,
      href = _ref.href,
      leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      intentProp = _ref.intent,
      loading = _ref.loading,
      onClick = _ref.onClick,
      sizeProp = _ref.size,
      themeProp = _ref.theme,
      otherProps = _objectWithoutProperties(_ref, ["active", "children", "className", "disabled", "href", "leftIcon", "rightIcon", "intent", "loading", "onClick", "size", "theme"]);

  var _useContext = (0, _react.useContext)(_Context.ButtonGroupContext),
      disabledContext = _useContext.disabled,
      intentContext = _useContext.intent,
      sizeContext = _useContext.size,
      themeContext = _useContext.theme;

  var _useContext2 = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeConfigContext = _useContext2.size;

  var disabled = disabledProp === null ? disabledContext : disabledProp;
  var intent = intentProp === null ? intentContext : intentProp;
  var size = (0, _configProvider.getComputedSize)(sizeProp, sizeContext, sizeConfigContext);
  var theme = themeProp === null ? themeContext : themeProp;
  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-base"), "".concat(prefix, "-").concat(intent), "".concat(prefix, "-").concat(size), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-").concat(theme), theme), _defineProperty(_classNames, "".concat(prefix, "-active"), active), _defineProperty(_classNames, "".concat(prefix, "-hasLeftIcon"), !!leftIcon || !children), _defineProperty(_classNames, "".concat(prefix, "-hasRightIcon"), !!rightIcon || !children), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disabled && !loading), _defineProperty(_classNames, "".concat(prefix, "-loading"), loading), _classNames));

  var handleClick = function handleClick(e) {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  var tagProps = _objectSpread({
    className: classSet,
    disabled: !!disabled,
    href: href,
    onClick: handleClick,
    ref: ref,
    target: href && "_blank"
  }, otherProps);

  var tagChildren = _react["default"].createElement(_react["default"].Fragment, null, !!leftIcon && _react["default"].createElement(_icon["default"], {
    size: 18,
    className: "".concat(prefix, "-leftIcon"),
    icon: leftIcon
  }), !!children && _react["default"].createElement("span", {
    className: "".concat(prefix, "-content")
  }, children), !!rightIcon && _react["default"].createElement(_icon["default"], {
    size: 18,
    className: "".concat(prefix, "-rightIcon"),
    icon: rightIcon
  }), loading && _react["default"].createElement("div", {
    className: "".concat(prefix, "-spinner")
  }, _react["default"].createElement(_spinner["default"], {
    color: theme === "light" || intent === "normal" ? null : "#fff",
    intent: theme === "light" ? intent : "normal"
  })));

  if (href) {
    return _react["default"].createElement("a", tagProps, tagChildren);
  }

  return _react["default"].createElement("button", _extends({
    type: "button"
  }, tagProps), tagChildren);
});
Button.type = "Button";
Button.Group = _Group["default"];
Button.propTypes = {
  active: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  href: _propTypes["default"].string,
  intent: _propTypes["default"].oneOf(["normal", "primary", "success", "warning", "danger"]),
  leftIcon: _propTypes["default"].any,
  loading: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  rightIcon: _propTypes["default"].any,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  theme: _propTypes["default"].oneOf([null, "light"])
};
Button.defaultProps = {
  active: false,
  children: "",
  className: undefined,
  disabled: null,
  href: undefined,
  intent: "normal",
  leftIcon: undefined,
  loading: false,
  onClick: null,
  rightIcon: undefined,
  size: "small",
  theme: null
};
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL0J1dHRvbi50c3giXSwibmFtZXMiOlsicHJlZml4IiwiQnV0dG9uIiwicmVmIiwiYWN0aXZlIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkaXNhYmxlZFByb3AiLCJkaXNhYmxlZCIsImhyZWYiLCJsZWZ0SWNvbiIsInJpZ2h0SWNvbiIsImludGVudFByb3AiLCJpbnRlbnQiLCJsb2FkaW5nIiwib25DbGljayIsInNpemVQcm9wIiwic2l6ZSIsInRoZW1lUHJvcCIsInRoZW1lIiwib3RoZXJQcm9wcyIsIkJ1dHRvbkdyb3VwQ29udGV4dCIsImRpc2FibGVkQ29udGV4dCIsImludGVudENvbnRleHQiLCJzaXplQ29udGV4dCIsInRoZW1lQ29udGV4dCIsIkNvbmZpZ0NvbnRleHQiLCJzaXplQ29uZmlnQ29udGV4dCIsImNsYXNzU2V0IiwiaGFuZGxlQ2xpY2siLCJlIiwidGFnUHJvcHMiLCJ0YXJnZXQiLCJ0YWdDaGlsZHJlbiIsInR5cGUiLCJHcm91cCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJub2RlIiwic3RyaW5nIiwib25lT2YiLCJhbnkiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsYUFBZjtBQW9FQSxJQUFNQyxNQUFlLEdBQUcsdUJBQ3RCLGdCQWdCRUMsR0FoQkYsRUFpQks7QUFBQTs7QUFBQSxNQWZEQyxNQWVDLFFBZkRBLE1BZUM7QUFBQSxNQWREQyxRQWNDLFFBZERBLFFBY0M7QUFBQSxNQWJEQyxTQWFDLFFBYkRBLFNBYUM7QUFBQSxNQVpTQyxZQVlULFFBWkRDLFFBWUM7QUFBQSxNQVhEQyxJQVdDLFFBWERBLElBV0M7QUFBQSxNQVZEQyxRQVVDLFFBVkRB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Q0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixDQUFoQixDQWxEVztBQXNEakJ0QixFQUFBQSxLQUFLLEVBQUVrQixzQkFBVUksS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxPQUFQLENBQWhCO0FBdERVLENBQW5CO0FBeURBdkMsTUFBTSxDQUFDMEMsWUFBUCxHQUFzQjtBQUNwQnhDLEVBQUFBLE1BQU0sRUFBRSxLQURZO0FBRXBCQyxFQUFBQSxRQUFRLEVBQUUsRUFGVTtBQUdwQkMsRUFBQUEsU0FBUyxFQUFFdUMsU0FIUztBQUlwQnJDLEVBQUFBLFFBQVEsRUFBRSxJQUpVO0FBS3BCQyxFQUFBQSxJQUFJLEVBQUVvQyxTQUxjO0FBTXBCaEMsRUFBQUEsTUFBTSxFQUFFLFFBTlk7QUFPcEJILEVBQUFBLFFBQVEsRUFBRW1DLFNBUFU7QUFRcEIvQixFQUFBQSxPQUFPLEVBQUUsS0FSVztBQVNwQkMsRUFBQUEsT0FBTyxFQUFFLElBVFc7QUFVcEJKLEVBQUFBLFNBQVMsRUFBRWtDLFNBVlM7QUFXcEI1QixFQUFBQSxJQUFJLEVBQUUsT0FYYztBQVlwQkUsRUFBQUEsS0FBSyxFQUFFO0FBWmEsQ0FBdEI7ZUFlZWpCLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBJY29uLCB7IEljb25OYW1lcyB9IGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9zcGlubmVyXCJcbmltcG9ydCBHcm91cCBmcm9tIFwiLi9Hcm91cFwiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCB7IEJ1dHRvbkdyb3VwQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1idXR0b25cIlxuXG5leHBvcnQgaW50ZXJmYWNlIElCdXR0b25Qcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICogYWN0aXZlIOeKtuaAge+8jOeUqOS6jiBCdXR0b24uR3JvdXAg5LitXG4gICAqL1xuICBhY3RpdmU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW4gfCBudWxsXG4gIC8qKlxuICAgKiDkvb/nlKggaHJlZu+8jOWwhiA8YnV0dG9uIC8+IOi9rOWMluS4uiA8YSAvPiDmoIfnrb7vvIzov5nml7blgJnkuZ/lj6/ku6XkvKDlhaUgdGFyZ2V0PVwiX2JsYW5rXCIg562JIDxhIC8+IOagh+etvueahOWxnuaAp1xuICAgKi9cbiAgaHJlZj86IHN0cmluZ1xuICAvKipcbiAgICog57G75Z6LXG4gICAqL1xuICBpbnRlbnQ/OiBcIm5vcm1hbFwiIHwgXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiIHwgXCJkYW5nZXJcIlxuICAvKipcbiAgICog5bem5Zu+5qCHXG4gICAqL1xuICBsZWZ0SWNvbj86IEljb25OYW1lc1xuICAvKipcbiAgICog5piv5ZCm5Yqg6L29XG4gICAqL1xuICBsb2FkaW5nPzogYm9vbGVhblxuICAvKipcbiAgICog54K55Ye75LqL5Lu255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xpY2s/OlxuICAgIHwgbnVsbFxuICAgIHwgKChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50IHwgSFRNTEFuY2hvckVsZW1lbnQ+KSA9PiB2b2lkKVxuICAvKipcbiAgICog5Y+z5Zu+5qCHXG4gICAqL1xuICByaWdodEljb24/OiBJY29uTmFtZXNcbiAgLyoqXG4gICAqIOWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog5Li76aKYXG4gICAqL1xuICB0aGVtZT86IG51bGwgfCBcImxpZ2h0XCJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQnV0dG9uXG4gIGV4dGVuZHMgUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgICBJQnV0dG9uUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT5cbiAgPiB7XG4gIEdyb3VwOiB0eXBlb2YgR3JvdXBcbiAgdHlwZTogc3RyaW5nXG59XG5cbi8qKlxuICog5oyJ6ZKu55So5LqO6Kem5Y+R5LiA5Liq5paw5Lu75Yqh44CB5paw5rWB56iL562J55qE5Y2z5pe26KGM5Yqo44CCXG4gKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IEJ1dHRvbjogSUJ1dHRvbiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBhY3RpdmUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFByb3AsXG4gICAgICBocmVmLFxuICAgICAgbGVmdEljb24sXG4gICAgICByaWdodEljb24sXG4gICAgICBpbnRlbnQ6IGludGVudFByb3AsXG4gICAgICBsb2FkaW5nLFxuICAgICAgb25DbGljayxcbiAgICAgIHNpemU6IHNpemVQcm9wLFxuICAgICAgdGhlbWU6IHRoZW1lUHJvcCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJQnV0dG9uUHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZENvbnRleHQsXG4gICAgICBpbnRlbnQ6IGludGVudENvbnRleHQsXG4gICAgICBzaXplOiBzaXplQ29udGV4dCxcbiAgICAgIHRoZW1lOiB0aGVtZUNvbnRleHQsXG4gICAgfSA9IHVzZUNvbnRleHQoQnV0dG9uR3JvdXBDb250ZXh0KVxuICAgIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbmZpZ0NvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcblxuICAgIGNvbnN0IGRpc2FibGVkID0gZGlzYWJsZWRQcm9wID09PSBudWxsID8gZGlzYWJsZWRDb250ZXh0IDogZGlzYWJsZWRQcm9wXG4gICAgY29uc3QgaW50ZW50ID0gaW50ZW50UHJvcCA9PT0gbnVsbCA/IGludGVudENvbnRleHQgOiBpbnRlbnRQcm9wXG4gICAgY29uc3Qgc2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplUHJvcCwgc2l6ZUNvbnRleHQsIHNpemVDb25maWdDb250ZXh0KVxuICAgIGNvbnN0IHRoZW1lID0gdGhlbWVQcm9wID09PSBudWxsID8gdGhlbWVDb250ZXh0IDogdGhlbWVQcm9wXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LWJhc2VgLFxuICAgICAgYCR7cHJlZml4fS0ke2ludGVudH1gLFxuICAgICAgYCR7cHJlZml4fS0ke3NpemV9YCxcbiAgICAgIHtcbiAgICAgICAgW2Ake3ByZWZpeH0tJHt0aGVtZX1gXTogdGhlbWUsXG4gICAgICAgIFtgJHtwcmVmaXh9LWFjdGl2ZWBdOiBhY3RpdmUsXG4gICAgICAgIFtgJHtwcmVmaXh9LWhhc0xlZnRJY29uYF06ICEhbGVmdEljb24gfHwgIWNoaWxkcmVuLFxuICAgICAgICBbYCR7cHJlZml4fS1oYXNSaWdodEljb25gXTogISFyaWdodEljb24gfHwgIWNoaWxkcmVuLFxuICAgICAgICBbYCR7cHJlZml4fS1kaXNhYmxlZGBdOiBkaXNhYmxlZCAmJiAhbG9hZGluZyxcbiAgICAgICAgW2Ake3ByZWZpeH0tbG9hZGluZ2BdOiBsb2FkaW5nLFxuICAgICAgfVxuICAgIClcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKFxuICAgICAgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCB8IEhUTUxBbmNob3JFbGVtZW50PlxuICAgICkgPT4ge1xuICAgICAgaWYgKCFkaXNhYmxlZCAmJiAhbG9hZGluZyAmJiBvbkNsaWNrKSB7XG4gICAgICAgIG9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0YWdQcm9wcyA9IHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NTZXQsXG4gICAgICBkaXNhYmxlZDogISFkaXNhYmxlZCxcbiAgICAgIGhyZWYsXG4gICAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICAgIHJlZixcbiAgICAgIHRhcmdldDogaHJlZiAmJiBcIl9ibGFua1wiLFxuICAgICAgLi4ub3RoZXJQcm9wcyxcbiAgICB9XG5cbiAgICBjb25zdCB0YWdDaGlsZHJlbiA9IChcbiAgICAgIDw+XG4gICAgICAgIHshIWxlZnRJY29uICYmIChcbiAgICAgICAgICA8SWNvbiBzaXplPXsxOH0gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWxlZnRJY29uYH0gaWNvbj17bGVmdEljb259IC8+XG4gICAgICAgICl9XG4gICAgICAgIHshIWNoaWxkcmVuICYmIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4fS1jb250ZW50YH0+e2NoaWxkcmVufTwvc3Bhbj59XG4gICAgICAgIHshIXJpZ2h0SWNvbiAmJiAoXG4gICAgICAgICAgPEljb24gc2l6ZT17MTh9IGNsYXNzTmFtZT17YCR7cHJlZml4fS1yaWdodEljb25gfSBpY29uPXtyaWdodEljb259IC8+XG4gICAgICAgICl9XG4gICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1zcGlubmVyYH0+XG4gICAgICAgICAgICA8U3Bpbm5lclxuICAgICAgICAgICAgICBjb2xvcj17dGhlbWUgPT09IFwibGlnaHRcIiB8fCBpbnRlbnQgPT09IFwibm9ybWFsXCIgPyBudWxsIDogXCIjZmZmXCJ9XG4gICAgICAgICAgICAgIGludGVudD17dGhlbWUgPT09IFwibGlnaHRcIiA/IGludGVudCA6IFwibm9ybWFsXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKVxuXG4gICAgaWYgKGhyZWYpIHtcbiAgICAgIHJldHVybiA8YSB7Li4udGFnUHJvcHN9Pnt0YWdDaGlsZHJlbn08L2E+XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB7Li4udGFnUHJvcHN9PlxuICAgICAgICB7dGFnQ2hpbGRyZW59XG4gICAgICA8L2J1dHRvbj5cbiAgICApXG4gIH1cbilcblxuQnV0dG9uLnR5cGUgPSBcIkJ1dHRvblwiXG5cbkJ1dHRvbi5Hcm91cCA9IEdyb3VwXG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBhY3RpdmUg54q25oCB77yM55So5LqOIEJ1dHRvbi5Hcm91cCDkuK1cbiAgICovXG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDkvb/nlKggaHJlZu+8jOWwhiA8YnV0dG9uIC8+IOi9rOWMluS4uiA8YSAvPiDmoIfnrb7vvIzov5nml7blgJnkuZ/lj6/ku6XkvKDlhaUgdGFyZ2V0PVwiX2JsYW5rXCIg562JIDxhIC8+IOagh+etvueahOWxnuaAp1xuICAgKi9cbiAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOexu+Wei1xuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwibm9ybWFsXCIsXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgXSksXG4gIC8qKlxuICAgKiDlt6blm77moIdcbiAgICovXG4gIGxlZnRJY29uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5piv5ZCm5Yqg6L29XG4gICAqL1xuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOeCueWHu+S6i+S7tueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOWPs+Wbvuagh1xuICAgKi9cbiAgcmlnaHRJY29uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog5Li76aKYXG4gICAqL1xuICB0aGVtZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCBcImxpZ2h0XCJdKSxcbn1cblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgY2hpbGRyZW46IFwiXCIsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogbnVsbCxcbiAgaHJlZjogdW5kZWZpbmVkLFxuICBpbnRlbnQ6IFwibm9ybWFsXCIsXG4gIGxlZnRJY29uOiB1bmRlZmluZWQsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBvbkNsaWNrOiBudWxsLFxuICByaWdodEljb246IHVuZGVmaW5lZCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB0aGVtZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iXX0=