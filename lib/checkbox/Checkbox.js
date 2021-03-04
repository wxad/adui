"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Context = require("./Context");

var _Group = _interopRequireDefault(require("./Group"));

var _icon = _interopRequireDefault(require("../icon"));

var _popover = _interopRequireDefault(require("../popover"));

var _configProvider = require("../config-provider");

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-checkbox";
var Checkbox = (0, _react.forwardRef)(function (_ref, ref) {
  var _classNames;

  var checkedProp = _ref.checked,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      helper = _ref.helper,
      helperIcon = _ref.helperIcon,
      helperProps = _ref.helperProps,
      indeterminate = _ref.indeterminate,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      sizeProp = _ref.size,
      value = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["checked", "children", "className", "disabled", "helper", "helperIcon", "helperProps", "indeterminate", "onChange", "onClick", "size", "value"]);

  var _useState = (0, _react.useState)(!!checkedProp),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var _useContext = (0, _react.useContext)(_Context.GroupContext),
      disabledContext = _useContext.disabled,
      handleGroupValueChange = _useContext.handleGroupValueChange,
      sizeContext = _useContext.size,
      valueContext = _useContext.value;

  var _useContext2 = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeConfig = _useContext2.size;

  if (checkedProp !== null && checked !== checkedProp) {
    setChecked(!!checkedProp);
  }

  var size = (0, _configProvider.getComputedSize)(sizeProp, sizeContext, sizeConfig);
  var valueComputed = value !== null ? value : children === null || children === void 0 ? void 0 : children.toString();
  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-base"), "".concat(prefix, "-").concat(size), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-checked"), indeterminate || (valueContext ? valueComputed && valueContext.includes(valueComputed) : checked)), _defineProperty(_classNames, "".concat(prefix, "-noChildren"), !children), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disabledContext || disabled), _classNames));
  var popover = helper ? _react["default"].createElement(_popover["default"], _extends({
    alignEdge: false,
    popup: helper
  }, helperProps), _react["default"].createElement(_icon["default"], {
    icon: helperIcon || "help-circle",
    color: "var(--gray-600)",
    interactive: true,
    className: "".concat(prefix, "-helper")
  })) : null;

  var handleClick = function handleClick(e) {
    if (onClick) {
      onClick(e);
    }

    if (disabled || disabledContext) {
      return;
    }

    if (handleGroupValueChange && valueComputed) {
      handleGroupValueChange(valueComputed);
    } else {
      if (checkedProp === null) {
        setChecked(!checked);
      }

      if (onChange) {
        onChange(!checked);
      }
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 13) {
      handleClick(e);
    }
  };

  return _react["default"].createElement("label", _extends({
    "aria-checked": checked,
    className: classSet,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    ref: ref,
    role: "checkbox"
  }, otherProps), _react["default"].createElement("span", {
    className: "".concat(prefix, "-indicator")
  }, indeterminate ? _react["default"].createElement("svg", {
    width: "12",
    height: "10"
  }, _react["default"].createElement("rect", {
    x: "1",
    y: "4",
    width: "10",
    height: "2",
    rx: ".5",
    fill: "#fff",
    fillRule: "evenodd"
  })) : _react["default"].createElement("svg", {
    width: "12",
    height: "10"
  }, _react["default"].createElement("path", {
    d: "M.618 5.827a.463.463 0 0 1-.02-.675l.804-.804a.52.52 0 0 1 .716-.01L4.75 6.75l4.922-5.625a.513.513 0 0 1 .707-.06l.742.62a.478.478 0 0 1 .044.687l-6.08 6.756a.506.506 0 0 1-.703.045L.618 5.827z",
    fillRule: "evenodd"
  }))), !!children && _react["default"].createElement("span", null, children), popover);
});
Checkbox.Group = _Group["default"];
Checkbox.propTypes = {
  checked: _propTypes["default"].oneOf([null, true, false]),
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  helper: _propTypes["default"].node,
  helperIcon: _propTypes["default"].any,
  helperProps: _propTypes["default"].object,
  indeterminate: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
Checkbox.defaultProps = {
  checked: null,
  children: "",
  className: undefined,
  disabled: false,
  helper: null,
  helperIcon: "help-circle",
  helperProps: {},
  indeterminate: false,
  onChange: null,
  onClick: null,
  size: "small",
  value: null
};
var _default = Checkbox;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvQ2hlY2tib3gudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkNoZWNrYm94IiwicmVmIiwiY2hlY2tlZFByb3AiLCJjaGVja2VkIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImhlbHBlciIsImhlbHBlckljb24iLCJoZWxwZXJQcm9wcyIsImluZGV0ZXJtaW5hdGUiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJzaXplUHJvcCIsInNpemUiLCJ2YWx1ZSIsIm90aGVyUHJvcHMiLCJzZXRDaGVja2VkIiwiR3JvdXBDb250ZXh0IiwiZGlzYWJsZWRDb250ZXh0IiwiaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSIsInNpemVDb250ZXh0IiwidmFsdWVDb250ZXh0IiwiQ29uZmlnQ29udGV4dCIsInNpemVDb25maWciLCJ2YWx1ZUNvbXB1dGVkIiwidG9TdHJpbmciLCJjbGFzc1NldCIsImluY2x1ZGVzIiwicG9wb3ZlciIsImhhbmRsZUNsaWNrIiwiZSIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiR3JvdXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwiYW55Iiwib2JqZWN0IiwiZnVuYyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsZUFBZjtBQXVFQSxJQUFNQyxRQUFtQixHQUFHLHVCQUMxQixnQkFnQkVDLEdBaEJGLEVBaUJLO0FBQUE7O0FBQUEsTUFmUUMsV0FlUixRQWZEQyxPQWVDO0FBQUEsTUFkREMsUUFjQyxRQWREQSxRQWNDO0FBQUEsTUFiREMsU0FhQyxRQWJEQSxTQWFD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QUFBLElBQUksRUFBRSxPQVhnQjtBQVl0QkMsRUFBQUEsS0FBSyxFQUFFO0FBWmUsQ0FBeEI7ZUFlZWYsUSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtdG8taW50ZXJhY3RpdmUtcm9sZSAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgR3JvdXBDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgR3JvdXAgZnJvbSBcIi4vR3JvdXBcIlxuaW1wb3J0IEljb24sIHsgSWNvbk5hbWVzIH0gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1jaGVja2JveFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrYm94UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOaYr+WQpumAieS4rVxuICAgKi9cbiAgY2hlY2tlZD86IG51bGwgfCBib29sZWFuXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWKoOWFpemXruWPt+awlOazoeaPkOekuuWGheWuuVxuICAgKi9cbiAgaGVscGVyPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDoh6rlrprkuYnpl67lj7fmsJTms6HnmoQgSWNvblxuICAgKi9cbiAgaGVscGVySWNvbj86IEljb25OYW1lc1xuICAvKipcbiAgICog6Zeu5Y+35rCU5rOh5o+Q56S655qEIHByb3Bz77yM5Lya5bCG5q2k5a+56LGh6YO95Lyg6YCS57uZIDxQb3BvdmVyIC8+XG4gICAqL1xuICBoZWxwZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgLyoqXG4gICAqIOiuvue9riBpbmRldGVybWluYXRlIOeKtuaAge+8jOi0n+i0o+S4lOS7heS7hei0n+i0o+agt+W8j+aOp+WItu+8jOivt+WcqOWunueOsOWFqOmAieaViOaenOaXtuS9v+eUqFxuICAgKi9cbiAgaW5kZXRlcm1pbmF0ZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOmAieS4reaAgeWPkeeUn+WPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86ICgoY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiDngrnlh7vml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbGljaz86XG4gICAgfCAoKFxuICAgICAgICBlOlxuICAgICAgICAgIHwgUmVhY3QuTW91c2VFdmVudDxIVE1MTGFiZWxFbGVtZW50PlxuICAgICAgICAgIHwgUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MTGFiZWxFbGVtZW50PlxuICAgICAgKSA9PiB2b2lkKVxuICAgIHwgbnVsbFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDlgLzvvIzlj6rlnKjkvb/nlKggQ2hlY2tib3guR3JvdXAg5pe25Lya6K+75Y+W5L2/55SoXG4gICAqL1xuICB2YWx1ZT86IG51bGwgfCBSZWFjdC5SZWFjdFRleHRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tib3hcbiAgZXh0ZW5kcyBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICAgIElDaGVja2JveFByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxIVE1MTGFiZWxFbGVtZW50PlxuICA+IHtcbiAgR3JvdXA6IHR5cGVvZiBHcm91cFxufVxuXG4vKipcbiAqIOWLvumAieaPkOS+m+eUqOaIt+WcqOWkmuS4qumAiemhueS4re+8jOWvuemAiemhueeahOWGheWuuei/m+ihjOWNleaIluWkmuS4qumAieaLqeOAglxuICovXG4vLyBAdHMtaWdub3JlXG5jb25zdCBDaGVja2JveDogSUNoZWNrYm94ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGNoZWNrZWQ6IGNoZWNrZWRQcm9wLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGhlbHBlcixcbiAgICAgIGhlbHBlckljb24sXG4gICAgICBoZWxwZXJQcm9wcyxcbiAgICAgIGluZGV0ZXJtaW5hdGUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBzaXplOiBzaXplUHJvcCxcbiAgICAgIHZhbHVlLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElDaGVja2JveFByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZSghIWNoZWNrZWRQcm9wKVxuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZENvbnRleHQsXG4gICAgICBoYW5kbGVHcm91cFZhbHVlQ2hhbmdlLFxuICAgICAgc2l6ZTogc2l6ZUNvbnRleHQsXG4gICAgICB2YWx1ZTogdmFsdWVDb250ZXh0LFxuICAgIH0gPSB1c2VDb250ZXh0KEdyb3VwQ29udGV4dClcbiAgICBjb25zdCB7IHNpemU6IHNpemVDb25maWcgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcblxuICAgIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICBpZiAoY2hlY2tlZFByb3AgIT09IG51bGwgJiYgY2hlY2tlZCAhPT0gY2hlY2tlZFByb3ApIHtcbiAgICAgIHNldENoZWNrZWQoISFjaGVja2VkUHJvcClcbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemVQcm9wLCBzaXplQ29udGV4dCwgc2l6ZUNvbmZpZylcblxuICAgIGNvbnN0IHZhbHVlQ29tcHV0ZWQgPSB2YWx1ZSAhPT0gbnVsbCA/IHZhbHVlIDogY2hpbGRyZW4/LnRvU3RyaW5nKClcblxuICAgIC8qKlxuICAgICAqIOW9k+aciSBjb250ZXh0IGNvbnRleHQg5pe277yM5L2/55SoIHZhbHVl77yaXG4gICAgICog5aaC5p6c5a2Y5ZyoIHZhbHVlIHByb3DvvIzliJnnm7TmjqXkvb/nlKggdmFsdWXvvJtcbiAgICAgKiDlpoLmnpzkuI3lrZjlnKjvvIzlsLEgc3RyaW5nIOWMliBjaGlsZHJlbiDkvZzkuLogdmFsdWXjgIJcbiAgICAgKi9cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LWJhc2VgLFxuICAgICAgYCR7cHJlZml4fS0ke3NpemV9YCxcbiAgICAgIHtcbiAgICAgICAgW2Ake3ByZWZpeH0tY2hlY2tlZGBdOlxuICAgICAgICAgIGluZGV0ZXJtaW5hdGUgfHxcbiAgICAgICAgICAodmFsdWVDb250ZXh0XG4gICAgICAgICAgICA/IHZhbHVlQ29tcHV0ZWQgJiYgdmFsdWVDb250ZXh0LmluY2x1ZGVzKHZhbHVlQ29tcHV0ZWQpXG4gICAgICAgICAgICA6IGNoZWNrZWQpLFxuICAgICAgICBbYCR7cHJlZml4fS1ub0NoaWxkcmVuYF06ICFjaGlsZHJlbixcbiAgICAgICAgW2Ake3ByZWZpeH0tZGlzYWJsZWRgXTogZGlzYWJsZWRDb250ZXh0IHx8IGRpc2FibGVkLFxuICAgICAgfVxuICAgIClcblxuICAgIGNvbnN0IHBvcG92ZXIgPSBoZWxwZXIgPyAoXG4gICAgICA8UG9wb3ZlciBhbGlnbkVkZ2U9e2ZhbHNlfSBwb3B1cD17aGVscGVyfSB7Li4uaGVscGVyUHJvcHN9PlxuICAgICAgICA8SWNvblxuICAgICAgICAgIGljb249e2hlbHBlckljb24gfHwgXCJoZWxwLWNpcmNsZVwifVxuICAgICAgICAgIGNvbG9yPVwidmFyKC0tZ3JheS02MDApXCJcbiAgICAgICAgICBpbnRlcmFjdGl2ZVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1oZWxwZXJgfVxuICAgICAgICAvPlxuICAgICAgPC9Qb3BvdmVyPlxuICAgICkgOiBudWxsXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChcbiAgICAgIGU6XG4gICAgICAgIHwgUmVhY3QuTW91c2VFdmVudDxIVE1MTGFiZWxFbGVtZW50PlxuICAgICAgICB8IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTExhYmVsRWxlbWVudD5cbiAgICApID0+IHtcbiAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgIG9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmIChkaXNhYmxlZCB8fCBkaXNhYmxlZENvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSAmJiB2YWx1ZUNvbXB1dGVkKSB7XG4gICAgICAgIGhhbmRsZUdyb3VwVmFsdWVDaGFuZ2UodmFsdWVDb21wdXRlZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjaGVja2VkUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldENoZWNrZWQoIWNoZWNrZWQpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoIWNoZWNrZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTExhYmVsRWxlbWVudD4pID0+IHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIGhhbmRsZUNsaWNrKGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbFxuICAgICAgICBhcmlhLWNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICByb2xlPVwiY2hlY2tib3hcIlxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWluZGljYXRvcmB9PlxuICAgICAgICAgIHtpbmRldGVybWluYXRlID8gKFxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTBcIj5cbiAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICB4PVwiMVwiXG4gICAgICAgICAgICAgICAgeT1cIjRcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTBcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjJcIlxuICAgICAgICAgICAgICAgIHJ4PVwiLjVcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEwXCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0uNjE4IDUuODI3YS40NjMuNDYzIDAgMCAxLS4wMi0uNjc1bC44MDQtLjgwNGEuNTIuNTIgMCAwIDEgLjcxNi0uMDFMNC43NSA2Ljc1bDQuOTIyLTUuNjI1YS41MTMuNTEzIDAgMCAxIC43MDctLjA2bC43NDIuNjJhLjQ3OC40NzggMCAwIDEgLjA0NC42ODdsLTYuMDggNi43NTZhLjUwNi41MDYgMCAwIDEtLjcwMy4wNDVMLjYxOCA1LjgyN3pcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICApfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHshIWNoaWxkcmVuICYmIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+fVxuICAgICAgICB7cG9wb3Zlcn1cbiAgICAgIDwvbGFiZWw+XG4gICAgKVxuICB9XG4pXG5cbkNoZWNrYm94Lkdyb3VwID0gR3JvdXBcblxuQ2hlY2tib3gucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm6YCJ5LitXG4gICAqL1xuICBjaGVja2VkOiBQcm9wVHlwZXMub25lT2YoW251bGwsIHRydWUsIGZhbHNlXSksXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDliqDlhaXpl67lj7fmsJTms6Hmj5DnpLrlhoXlrrlcbiAgICovXG4gIGhlbHBlcjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDoh6rlrprkuYnpl67lj7fmsJTms6HnmoQgSWNvblxuICAgKi9cbiAgaGVscGVySWNvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOmXruWPt+awlOazoeaPkOekuueahCBwcm9wc++8jOS8muWwhuatpOWvueixoemDveS8oOmAkue7mSA8UG9wb3ZlciAvPlxuICAgKi9cbiAgaGVscGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDorr7nva4gaW5kZXRlcm1pbmF0ZSDnirbmgIHvvIzotJ/otKPkuJTku4Xku4XotJ/otKPmoLflvI/mjqfliLbvvIzor7flnKjlrp7njrDlhajpgInmlYjmnpzml7bkvb/nlKhcbiAgICovXG4gIGluZGV0ZXJtaW5hdGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6YCJ5Lit5oCB5Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOeCueWHu+aXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOWAvO+8jOWPquWcqOS9v+eUqCBDaGVja2JveC5Hcm91cCDml7bkvJror7vlj5bkvb/nlKhcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59XG5cbkNoZWNrYm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hlY2tlZDogbnVsbCxcbiAgY2hpbGRyZW46IFwiXCIsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGhlbHBlcjogbnVsbCxcbiAgaGVscGVySWNvbjogXCJoZWxwLWNpcmNsZVwiLFxuICBoZWxwZXJQcm9wczoge30sXG4gIGluZGV0ZXJtaW5hdGU6IGZhbHNlLFxuICBvbkNoYW5nZTogbnVsbCxcbiAgb25DbGljazogbnVsbCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hcbiJdfQ==