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

var prefix = "adui-channels-checkbox";
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
  }, _react["default"].createElement("svg", {
    width: "11",
    height: "8",
    viewBox: "0 0 11 8"
  }, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.38909 6.86396C3.99856 7.25449 3.3654 7.25449 2.97487 6.86396L0.5 4.38909L1.20711 3.68198L3.68198 6.15685L9.33883 0.5L10.0459 1.20711L4.38909 6.86396Z",
    strokeLinejoin: "round"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtY2hlY2tib3gvQ2hlY2tib3gudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkNoZWNrYm94IiwicmVmIiwiY2hlY2tlZFByb3AiLCJjaGVja2VkIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImhlbHBlciIsImhlbHBlckljb24iLCJoZWxwZXJQcm9wcyIsImluZGV0ZXJtaW5hdGUiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJzaXplUHJvcCIsInNpemUiLCJ2YWx1ZSIsIm90aGVyUHJvcHMiLCJzZXRDaGVja2VkIiwiR3JvdXBDb250ZXh0IiwiZGlzYWJsZWRDb250ZXh0IiwiaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSIsInNpemVDb250ZXh0IiwidmFsdWVDb250ZXh0IiwiQ29uZmlnQ29udGV4dCIsInNpemVDb25maWciLCJ2YWx1ZUNvbXB1dGVkIiwidG9TdHJpbmciLCJjbGFzc1NldCIsImluY2x1ZGVzIiwicG9wb3ZlciIsImhhbmRsZUNsaWNrIiwiZSIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiR3JvdXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwiYW55Iiwib2JqZWN0IiwiZnVuYyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsd0JBQWY7QUF1RUEsSUFBTUMsUUFBbUIsR0FBRyx1QkFDMUIsZ0JBZ0JFQyxHQWhCRixFQWlCSztBQUFBOztBQUFBLE1BZlFDLFdBZVIsUUFmREMsT0FlQztBQUFBLE1BZERDLFFBY0MsUUFkREEsUUFjQztBQUFBLE1BYkRDLFNBYUMs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cEJDO0FBd0JuQjlCLEVBQUFBLFVBQVUsRUFBRTRCLHNCQUFVSyxHQXhCSDtBQTRCbkJoQyxFQUFBQSxXQUFXLEVBQUUyQixzQkFBVU0sTUE1Qko7QUFnQ25CaEMsRUFBQUEsYUFBYSxFQUFFMEIsc0JBQVVJLElBaENOO0FBb0NuQjdCLEVBQUFBLFFBQVEsRUFBRXlCLHNCQUFVTyxJQXBDRDtBQXdDbkIvQixFQUFBQSxPQUFPLEVBQUV3QixzQkFBVU8sSUF4Q0E7QUE0Q25CN0IsRUFBQUEsSUFBSSxFQUFFc0Isc0JBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixDQUFoQixDQTVDYTtBQWdEbkJ0QixFQUFBQSxLQUFLLEVBQUVxQixzQkFBVVEsU0FBVixDQUFvQixDQUFDUixzQkFBVUcsTUFBWCxFQUFtQkgsc0JBQVVTLE1BQTdCLENBQXBCO0FBaERZLENBQXJCO0FBbURBN0MsUUFBUSxDQUFDOEMsWUFBVCxHQUF3QjtBQUN0QjNDLEVBQUFBLE9BQU8sRUFBRSxJQURhO0FBRXRCQyxFQUFBQSxRQUFRLEVBQUUsRUFGWTtBQUd0QkMsRUFBQUEsU0FBUyxFQUFFMEMsU0FIVztBQUl0QnpDLEVBQUFBLFFBQVEsRUFBRSxLQUpZO0FBS3RCQyxFQUFBQSxNQUFNLEVBQUUsSUFMYztBQU10QkMsRUFBQUEsVUFBVSxFQUFFLGFBTlU7QUFPdEJDLEVBQUFBLFdBQVcsRUFBRSxFQVBTO0FBUXRCQyxFQUFBQSxhQUFhLEVBQUUsS0FSTztBQVN0QkMsRUFBQUEsUUFBUSxFQUFFLElBVFk7QUFVdEJDLEVBQUFBLE9BQU8sRUFBRSxJQVZhO0FBV3RCRSxFQUFBQSxJQUFJLEVBQUUsT0FYZ0I7QUFZdEJDLEVBQUFBLEtBQUssRUFBRTtBQVplLENBQXhCO2VBZWVmLFEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS1lbGVtZW50LXRvLWludGVyYWN0aXZlLXJvbGUgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IEdyb3VwQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IEdyb3VwIGZyb20gXCIuL0dyb3VwXCJcbmltcG9ydCBJY29uLCB7IEljb25OYW1lcyB9IGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktY2hhbm5lbHMtY2hlY2tib3hcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja2JveFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDmmK/lkKbpgInkuK1cbiAgICovXG4gIGNoZWNrZWQ/OiBudWxsIHwgYm9vbGVhblxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDliqDlhaXpl67lj7fmsJTms6Hmj5DnpLrlhoXlrrlcbiAgICovXG4gIGhlbHBlcj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6Ieq5a6a5LmJ6Zeu5Y+35rCU5rOh55qEIEljb25cbiAgICovXG4gIGhlbHBlckljb24/OiBJY29uTmFtZXNcbiAgLyoqXG4gICAqIOmXruWPt+awlOazoeaPkOekuueahCBwcm9wc++8jOS8muWwhuatpOWvueixoemDveS8oOmAkue7mSA8UG9wb3ZlciAvPlxuICAgKi9cbiAgaGVscGVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIC8qKlxuICAgKiDorr7nva4gaW5kZXRlcm1pbmF0ZSDnirbmgIHvvIzotJ/otKPkuJTku4Xku4XotJ/otKPmoLflvI/mjqfliLbvvIzor7flnKjlrp7njrDlhajpgInmlYjmnpzml7bkvb/nlKhcbiAgICovXG4gIGluZGV0ZXJtaW5hdGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDpgInkuK3mgIHlj5HnlJ/lj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAoKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog54K55Ye75pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xpY2s/OlxuICAgIHwgKChcbiAgICAgICAgZTpcbiAgICAgICAgICB8IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTExhYmVsRWxlbWVudD5cbiAgICAgICAgICB8IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTExhYmVsRWxlbWVudD5cbiAgICAgICkgPT4gdm9pZClcbiAgICB8IG51bGxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog5YC877yM5Y+q5Zyo5L2/55SoIENoZWNrYm94Lkdyb3VwIOaXtuS8muivu+WPluS9v+eUqFxuICAgKi9cbiAgdmFsdWU/OiBudWxsIHwgUmVhY3QuUmVhY3RUZXh0XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrYm94XG4gIGV4dGVuZHMgUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgICBJQ2hlY2tib3hQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8SFRNTExhYmVsRWxlbWVudD5cbiAgPiB7XG4gIEdyb3VwOiB0eXBlb2YgR3JvdXBcbn1cblxuLyoqXG4gKiDli77pgInmj5DkvpvnlKjmiLflnKjlpJrkuKrpgInpobnkuK3vvIzlr7npgInpobnnmoTlhoXlrrnov5vooYzljZXmiJblpJrkuKrpgInmi6njgIJcbiAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgQ2hlY2tib3g6IElDaGVja2JveCA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBjaGVja2VkOiBjaGVja2VkUHJvcCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBoZWxwZXIsXG4gICAgICBoZWxwZXJJY29uLFxuICAgICAgaGVscGVyUHJvcHMsXG4gICAgICBpbmRldGVybWluYXRlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbkNsaWNrLFxuICAgICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgICB2YWx1ZSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJQ2hlY2tib3hQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoISFjaGVja2VkUHJvcClcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWRDb250ZXh0LFxuICAgICAgaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSxcbiAgICAgIHNpemU6IHNpemVDb250ZXh0LFxuICAgICAgdmFsdWU6IHZhbHVlQ29udGV4dCxcbiAgICB9ID0gdXNlQ29udGV4dChHcm91cENvbnRleHQpXG4gICAgY29uc3QgeyBzaXplOiBzaXplQ29uZmlnIH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG5cbiAgICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAgaWYgKGNoZWNrZWRQcm9wICE9PSBudWxsICYmIGNoZWNrZWQgIT09IGNoZWNrZWRQcm9wKSB7XG4gICAgICBzZXRDaGVja2VkKCEhY2hlY2tlZFByb3ApXG4gICAgfVxuXG4gICAgY29uc3Qgc2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplUHJvcCwgc2l6ZUNvbnRleHQsIHNpemVDb25maWcpXG5cbiAgICBjb25zdCB2YWx1ZUNvbXB1dGVkID0gdmFsdWUgIT09IG51bGwgPyB2YWx1ZSA6IGNoaWxkcmVuPy50b1N0cmluZygpXG5cbiAgICAvKipcbiAgICAgKiDlvZPmnIkgY29udGV4dCBjb250ZXh0IOaXtu+8jOS9v+eUqCB2YWx1Ze+8mlxuICAgICAqIOWmguaenOWtmOWcqCB2YWx1ZSBwcm9w77yM5YiZ55u05o6l5L2/55SoIHZhbHVl77ybXG4gICAgICog5aaC5p6c5LiN5a2Y5Zyo77yM5bCxIHN0cmluZyDljJYgY2hpbGRyZW4g5L2c5Li6IHZhbHVl44CCXG4gICAgICovXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYCR7cHJlZml4fS1iYXNlYCxcbiAgICAgIGAke3ByZWZpeH0tJHtzaXplfWAsXG4gICAgICB7XG4gICAgICAgIFtgJHtwcmVmaXh9LWNoZWNrZWRgXTpcbiAgICAgICAgICBpbmRldGVybWluYXRlIHx8XG4gICAgICAgICAgKHZhbHVlQ29udGV4dFxuICAgICAgICAgICAgPyB2YWx1ZUNvbXB1dGVkICYmIHZhbHVlQ29udGV4dC5pbmNsdWRlcyh2YWx1ZUNvbXB1dGVkKVxuICAgICAgICAgICAgOiBjaGVja2VkKSxcbiAgICAgICAgW2Ake3ByZWZpeH0tbm9DaGlsZHJlbmBdOiAhY2hpbGRyZW4sXG4gICAgICAgIFtgJHtwcmVmaXh9LWRpc2FibGVkYF06IGRpc2FibGVkQ29udGV4dCB8fCBkaXNhYmxlZCxcbiAgICAgIH1cbiAgICApXG5cbiAgICBjb25zdCBwb3BvdmVyID0gaGVscGVyID8gKFxuICAgICAgPFBvcG92ZXIgYWxpZ25FZGdlPXtmYWxzZX0gcG9wdXA9e2hlbHBlcn0gey4uLmhlbHBlclByb3BzfT5cbiAgICAgICAgPEljb25cbiAgICAgICAgICBpY29uPXtoZWxwZXJJY29uIHx8IFwiaGVscC1jaXJjbGVcIn1cbiAgICAgICAgICBjb2xvcj1cInZhcigtLWdyYXktNjAwKVwiXG4gICAgICAgICAgaW50ZXJhY3RpdmVcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0taGVscGVyYH1cbiAgICAgICAgLz5cbiAgICAgIDwvUG9wb3Zlcj5cbiAgICApIDogbnVsbFxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoXG4gICAgICBlOlxuICAgICAgICB8IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTExhYmVsRWxlbWVudD5cbiAgICAgICAgfCBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+XG4gICAgKSA9PiB7XG4gICAgICBpZiAob25DbGljaykge1xuICAgICAgICBvbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoZGlzYWJsZWQgfHwgZGlzYWJsZWRDb250ZXh0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKGhhbmRsZUdyb3VwVmFsdWVDaGFuZ2UgJiYgdmFsdWVDb21wdXRlZCkge1xuICAgICAgICBoYW5kbGVHcm91cFZhbHVlQ2hhbmdlKHZhbHVlQ29tcHV0ZWQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2hlY2tlZFByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICBzZXRDaGVja2VkKCFjaGVja2VkKVxuICAgICAgICB9XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKCFjaGVja2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+KSA9PiB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBoYW5kbGVDbGljayhlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8bGFiZWxcbiAgICAgICAgYXJpYS1jaGVja2VkPXtjaGVja2VkfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgcm9sZT1cImNoZWNrYm94XCJcbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbmRpY2F0b3JgfT5cbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTFcIiBoZWlnaHQ9XCI4XCIgdmlld0JveD1cIjAgMCAxMSA4XCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTQuMzg5MDkgNi44NjM5NkMzLjk5ODU2IDcuMjU0NDkgMy4zNjU0IDcuMjU0NDkgMi45NzQ4NyA2Ljg2Mzk2TDAuNSA0LjM4OTA5TDEuMjA3MTEgMy42ODE5OEwzLjY4MTk4IDYuMTU2ODVMOS4zMzg4MyAwLjVMMTAuMDQ1OSAxLjIwNzExTDQuMzg5MDkgNi44NjM5NlpcIlxuICAgICAgICAgICAgICAvLyBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgICAvLyBmaWxsT3BhY2l0eT1cIjAuOVwiXG4gICAgICAgICAgICAgIC8vIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHshIWNoaWxkcmVuICYmIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+fVxuICAgICAgICB7cG9wb3Zlcn1cbiAgICAgIDwvbGFiZWw+XG4gICAgKVxuICB9XG4pXG5cbkNoZWNrYm94Lkdyb3VwID0gR3JvdXBcblxuQ2hlY2tib3gucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm6YCJ5LitXG4gICAqL1xuICBjaGVja2VkOiBQcm9wVHlwZXMub25lT2YoW251bGwsIHRydWUsIGZhbHNlXSksXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDliqDlhaXpl67lj7fmsJTms6Hmj5DnpLrlhoXlrrlcbiAgICovXG4gIGhlbHBlcjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDoh6rlrprkuYnpl67lj7fmsJTms6HnmoQgSWNvblxuICAgKi9cbiAgaGVscGVySWNvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOmXruWPt+awlOazoeaPkOekuueahCBwcm9wc++8jOS8muWwhuatpOWvueixoemDveS8oOmAkue7mSA8UG9wb3ZlciAvPlxuICAgKi9cbiAgaGVscGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDorr7nva4gaW5kZXRlcm1pbmF0ZSDnirbmgIHvvIzotJ/otKPkuJTku4Xku4XotJ/otKPmoLflvI/mjqfliLbvvIzor7flnKjlrp7njrDlhajpgInmlYjmnpzml7bkvb/nlKhcbiAgICovXG4gIGluZGV0ZXJtaW5hdGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6YCJ5Lit5oCB5Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOeCueWHu+aXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOWAvO+8jOWPquWcqOS9v+eUqCBDaGVja2JveC5Hcm91cCDml7bkvJror7vlj5bkvb/nlKhcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59XG5cbkNoZWNrYm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hlY2tlZDogbnVsbCxcbiAgY2hpbGRyZW46IFwiXCIsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGhlbHBlcjogbnVsbCxcbiAgaGVscGVySWNvbjogXCJoZWxwLWNpcmNsZVwiLFxuICBoZWxwZXJQcm9wczoge30sXG4gIGluZGV0ZXJtaW5hdGU6IGZhbHNlLFxuICBvbkNoYW5nZTogbnVsbCxcbiAgb25DbGljazogbnVsbCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hcbiJdfQ==