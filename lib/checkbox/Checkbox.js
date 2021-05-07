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

  if (checkedProp !== null && checked !== !!checkedProp) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvQ2hlY2tib3gudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkNoZWNrYm94IiwicmVmIiwiY2hlY2tlZFByb3AiLCJjaGVja2VkIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImhlbHBlciIsImhlbHBlckljb24iLCJoZWxwZXJQcm9wcyIsImluZGV0ZXJtaW5hdGUiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJzaXplUHJvcCIsInNpemUiLCJ2YWx1ZSIsIm90aGVyUHJvcHMiLCJzZXRDaGVja2VkIiwiR3JvdXBDb250ZXh0IiwiZGlzYWJsZWRDb250ZXh0IiwiaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSIsInNpemVDb250ZXh0IiwidmFsdWVDb250ZXh0IiwiQ29uZmlnQ29udGV4dCIsInNpemVDb25maWciLCJ2YWx1ZUNvbXB1dGVkIiwidG9TdHJpbmciLCJjbGFzc1NldCIsImluY2x1ZGVzIiwicG9wb3ZlciIsImhhbmRsZUNsaWNrIiwiZSIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiR3JvdXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwiYW55Iiwib2JqZWN0IiwiZnVuYyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsZUFBZjtBQXVFQSxJQUFNQyxRQUFtQixHQUFHLHVCQUMxQixnQkFnQkVDLEdBaEJGLEVBaUJLO0FBQUE7O0FBQUEsTUFmUUMsV0FlUixRQWZEQyxPQWVDO0FBQUEsTUFkREMsUUFjQyxRQWREQSxRQWNDO0FBQUEsTUFiREMsU0FhQyxRQWJEQSxTQWFD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O0FBV3RCRSxFQUFBQSxJQUFJLEVBQUUsT0FYZ0I7QUFZdEJDLEVBQUFBLEtBQUssRUFBRTtBQVplLENBQXhCO2VBZWVmLFEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS1lbGVtZW50LXRvLWludGVyYWN0aXZlLXJvbGUgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IEdyb3VwQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IEdyb3VwIGZyb20gXCIuL0dyb3VwXCJcbmltcG9ydCBJY29uLCB7IEljb25OYW1lcyB9IGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktY2hlY2tib3hcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja2JveFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDmmK/lkKbpgInkuK1cbiAgICovXG4gIGNoZWNrZWQ/OiBudWxsIHwgYm9vbGVhblxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDliqDlhaXpl67lj7fmsJTms6Hmj5DnpLrlhoXlrrlcbiAgICovXG4gIGhlbHBlcj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6Ieq5a6a5LmJ6Zeu5Y+35rCU5rOh55qEIEljb25cbiAgICovXG4gIGhlbHBlckljb24/OiBJY29uTmFtZXNcbiAgLyoqXG4gICAqIOmXruWPt+awlOazoeaPkOekuueahCBwcm9wc++8jOS8muWwhuatpOWvueixoemDveS8oOmAkue7mSA8UG9wb3ZlciAvPlxuICAgKi9cbiAgaGVscGVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIC8qKlxuICAgKiDorr7nva4gaW5kZXRlcm1pbmF0ZSDnirbmgIHvvIzotJ/otKPkuJTku4Xku4XotJ/otKPmoLflvI/mjqfliLbvvIzor7flnKjlrp7njrDlhajpgInmlYjmnpzml7bkvb/nlKhcbiAgICovXG4gIGluZGV0ZXJtaW5hdGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDpgInkuK3mgIHlj5HnlJ/lj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAoKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog54K55Ye75pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xpY2s/OlxuICAgIHwgKChcbiAgICAgICAgZTpcbiAgICAgICAgICB8IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTExhYmVsRWxlbWVudD5cbiAgICAgICAgICB8IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTExhYmVsRWxlbWVudD5cbiAgICAgICkgPT4gdm9pZClcbiAgICB8IG51bGxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog5YC877yM5Y+q5Zyo5L2/55SoIENoZWNrYm94Lkdyb3VwIOaXtuS8muivu+WPluS9v+eUqFxuICAgKi9cbiAgdmFsdWU/OiBudWxsIHwgUmVhY3QuUmVhY3RUZXh0XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrYm94XG4gIGV4dGVuZHMgUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgICBJQ2hlY2tib3hQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8SFRNTExhYmVsRWxlbWVudD5cbiAgPiB7XG4gIEdyb3VwOiB0eXBlb2YgR3JvdXBcbn1cblxuLyoqXG4gKiDli77pgInmj5DkvpvnlKjmiLflnKjlpJrkuKrpgInpobnkuK3vvIzlr7npgInpobnnmoTlhoXlrrnov5vooYzljZXmiJblpJrkuKrpgInmi6njgIJcbiAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgQ2hlY2tib3g6IElDaGVja2JveCA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBjaGVja2VkOiBjaGVja2VkUHJvcCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBoZWxwZXIsXG4gICAgICBoZWxwZXJJY29uLFxuICAgICAgaGVscGVyUHJvcHMsXG4gICAgICBpbmRldGVybWluYXRlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbkNsaWNrLFxuICAgICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgICB2YWx1ZSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJQ2hlY2tib3hQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoISFjaGVja2VkUHJvcClcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWRDb250ZXh0LFxuICAgICAgaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSxcbiAgICAgIHNpemU6IHNpemVDb250ZXh0LFxuICAgICAgdmFsdWU6IHZhbHVlQ29udGV4dCxcbiAgICB9ID0gdXNlQ29udGV4dChHcm91cENvbnRleHQpXG4gICAgY29uc3QgeyBzaXplOiBzaXplQ29uZmlnIH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG5cbiAgICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAgaWYgKGNoZWNrZWRQcm9wICE9PSBudWxsICYmIGNoZWNrZWQgIT09ICEhY2hlY2tlZFByb3ApIHtcbiAgICAgIHNldENoZWNrZWQoISFjaGVja2VkUHJvcClcbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemVQcm9wLCBzaXplQ29udGV4dCwgc2l6ZUNvbmZpZylcblxuICAgIGNvbnN0IHZhbHVlQ29tcHV0ZWQgPSB2YWx1ZSAhPT0gbnVsbCA/IHZhbHVlIDogY2hpbGRyZW4/LnRvU3RyaW5nKClcblxuICAgIC8qKlxuICAgICAqIOW9k+aciSBjb250ZXh0IGNvbnRleHQg5pe277yM5L2/55SoIHZhbHVl77yaXG4gICAgICog5aaC5p6c5a2Y5ZyoIHZhbHVlIHByb3DvvIzliJnnm7TmjqXkvb/nlKggdmFsdWXvvJtcbiAgICAgKiDlpoLmnpzkuI3lrZjlnKjvvIzlsLEgc3RyaW5nIOWMliBjaGlsZHJlbiDkvZzkuLogdmFsdWXjgIJcbiAgICAgKi9cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LWJhc2VgLFxuICAgICAgYCR7cHJlZml4fS0ke3NpemV9YCxcbiAgICAgIHtcbiAgICAgICAgW2Ake3ByZWZpeH0tY2hlY2tlZGBdOlxuICAgICAgICAgIGluZGV0ZXJtaW5hdGUgfHxcbiAgICAgICAgICAodmFsdWVDb250ZXh0XG4gICAgICAgICAgICA/IHZhbHVlQ29tcHV0ZWQgJiYgdmFsdWVDb250ZXh0LmluY2x1ZGVzKHZhbHVlQ29tcHV0ZWQpXG4gICAgICAgICAgICA6IGNoZWNrZWQpLFxuICAgICAgICBbYCR7cHJlZml4fS1ub0NoaWxkcmVuYF06ICFjaGlsZHJlbixcbiAgICAgICAgW2Ake3ByZWZpeH0tZGlzYWJsZWRgXTogZGlzYWJsZWRDb250ZXh0IHx8IGRpc2FibGVkLFxuICAgICAgfVxuICAgIClcblxuICAgIGNvbnN0IHBvcG92ZXIgPSBoZWxwZXIgPyAoXG4gICAgICA8UG9wb3ZlciBhbGlnbkVkZ2U9e2ZhbHNlfSBwb3B1cD17aGVscGVyfSB7Li4uaGVscGVyUHJvcHN9PlxuICAgICAgICA8SWNvblxuICAgICAgICAgIGljb249e2hlbHBlckljb24gfHwgXCJoZWxwLWNpcmNsZVwifVxuICAgICAgICAgIGNvbG9yPVwidmFyKC0tZ3JheS02MDApXCJcbiAgICAgICAgICBpbnRlcmFjdGl2ZVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1oZWxwZXJgfVxuICAgICAgICAvPlxuICAgICAgPC9Qb3BvdmVyPlxuICAgICkgOiBudWxsXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChcbiAgICAgIGU6XG4gICAgICAgIHwgUmVhY3QuTW91c2VFdmVudDxIVE1MTGFiZWxFbGVtZW50PlxuICAgICAgICB8IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTExhYmVsRWxlbWVudD5cbiAgICApID0+IHtcbiAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgIG9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmIChkaXNhYmxlZCB8fCBkaXNhYmxlZENvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSAmJiB2YWx1ZUNvbXB1dGVkKSB7XG4gICAgICAgIGhhbmRsZUdyb3VwVmFsdWVDaGFuZ2UodmFsdWVDb21wdXRlZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjaGVja2VkUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldENoZWNrZWQoIWNoZWNrZWQpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoIWNoZWNrZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTExhYmVsRWxlbWVudD4pID0+IHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIGhhbmRsZUNsaWNrKGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbFxuICAgICAgICBhcmlhLWNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICByb2xlPVwiY2hlY2tib3hcIlxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWluZGljYXRvcmB9PlxuICAgICAgICAgIHtpbmRldGVybWluYXRlID8gKFxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTBcIj5cbiAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICB4PVwiMVwiXG4gICAgICAgICAgICAgICAgeT1cIjRcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTBcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjJcIlxuICAgICAgICAgICAgICAgIHJ4PVwiLjVcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEwXCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0uNjE4IDUuODI3YS40NjMuNDYzIDAgMCAxLS4wMi0uNjc1bC44MDQtLjgwNGEuNTIuNTIgMCAwIDEgLjcxNi0uMDFMNC43NSA2Ljc1bDQuOTIyLTUuNjI1YS41MTMuNTEzIDAgMCAxIC43MDctLjA2bC43NDIuNjJhLjQ3OC40NzggMCAwIDEgLjA0NC42ODdsLTYuMDggNi43NTZhLjUwNi41MDYgMCAwIDEtLjcwMy4wNDVMLjYxOCA1LjgyN3pcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICApfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHshIWNoaWxkcmVuICYmIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+fVxuICAgICAgICB7cG9wb3Zlcn1cbiAgICAgIDwvbGFiZWw+XG4gICAgKVxuICB9XG4pXG5cbkNoZWNrYm94Lkdyb3VwID0gR3JvdXBcblxuQ2hlY2tib3gucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm6YCJ5LitXG4gICAqL1xuICBjaGVja2VkOiBQcm9wVHlwZXMub25lT2YoW251bGwsIHRydWUsIGZhbHNlXSksXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDliqDlhaXpl67lj7fmsJTms6Hmj5DnpLrlhoXlrrlcbiAgICovXG4gIGhlbHBlcjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDoh6rlrprkuYnpl67lj7fmsJTms6HnmoQgSWNvblxuICAgKi9cbiAgaGVscGVySWNvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOmXruWPt+awlOazoeaPkOekuueahCBwcm9wc++8jOS8muWwhuatpOWvueixoemDveS8oOmAkue7mSA8UG9wb3ZlciAvPlxuICAgKi9cbiAgaGVscGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDorr7nva4gaW5kZXRlcm1pbmF0ZSDnirbmgIHvvIzotJ/otKPkuJTku4Xku4XotJ/otKPmoLflvI/mjqfliLbvvIzor7flnKjlrp7njrDlhajpgInmlYjmnpzml7bkvb/nlKhcbiAgICovXG4gIGluZGV0ZXJtaW5hdGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6YCJ5Lit5oCB5Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOeCueWHu+aXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOWAvO+8jOWPquWcqOS9v+eUqCBDaGVja2JveC5Hcm91cCDml7bkvJror7vlj5bkvb/nlKhcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59XG5cbkNoZWNrYm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hlY2tlZDogbnVsbCxcbiAgY2hpbGRyZW46IFwiXCIsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGhlbHBlcjogbnVsbCxcbiAgaGVscGVySWNvbjogXCJoZWxwLWNpcmNsZVwiLFxuICBoZWxwZXJQcm9wczoge30sXG4gIGluZGV0ZXJtaW5hdGU6IGZhbHNlLFxuICBvbkNoYW5nZTogbnVsbCxcbiAgb25DbGljazogbnVsbCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hcbiJdfQ==