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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvQ2hlY2tib3gudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkNoZWNrYm94IiwicmVmIiwiY2hlY2tlZFByb3AiLCJjaGVja2VkIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImhlbHBlciIsImhlbHBlckljb24iLCJoZWxwZXJQcm9wcyIsImluZGV0ZXJtaW5hdGUiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJzaXplUHJvcCIsInNpemUiLCJ2YWx1ZSIsIm90aGVyUHJvcHMiLCJzZXRDaGVja2VkIiwiR3JvdXBDb250ZXh0IiwiZGlzYWJsZWRDb250ZXh0IiwiaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSIsInNpemVDb250ZXh0IiwidmFsdWVDb250ZXh0IiwiQ29uZmlnQ29udGV4dCIsInNpemVDb25maWciLCJ2YWx1ZUNvbXB1dGVkIiwidG9TdHJpbmciLCJjbGFzc1NldCIsImluY2x1ZGVzIiwicG9wb3ZlciIsImhhbmRsZUNsaWNrIiwiZSIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiR3JvdXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwiYW55Iiwib2JqZWN0IiwiZnVuYyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsZUFBZjtBQXNFQSxJQUFNQyxRQUFtQixHQUFHLHVCQUMxQixnQkFnQkVDLEdBaEJGLEVBaUJLO0FBQUE7O0FBQUEsTUFmUUMsV0FlUixRQWZEQyxPQWVDO0FBQUEsTUFkREMsUUFjQyxRQWREQSxRQWNDO0FBQUEsTUFiREMsU0FhQyxRQWJEQSxTQWFD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O0FBV3RCRSxFQUFBQSxJQUFJLEVBQUUsT0FYZ0I7QUFZdEJDLEVBQUFBLEtBQUssRUFBRTtBQVplLENBQXhCO2VBZWVmLFEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS1lbGVtZW50LXRvLWludGVyYWN0aXZlLXJvbGUgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IEdyb3VwQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IEdyb3VwIGZyb20gXCIuL0dyb3VwXCJcbmltcG9ydCBJY29uLCB7IEljb25OYW1lcyB9IGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktY2hlY2tib3hcIlxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tib3hQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5piv5ZCm6YCJ5LitXG4gICAqL1xuICBjaGVja2VkPzogbnVsbCB8IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog5Yqg5YWl6Zeu5Y+35rCU5rOh5o+Q56S65YaF5a65XG4gICAqL1xuICBoZWxwZXI/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOiHquWumuS5iemXruWPt+awlOazoeeahCBJY29uXG4gICAqL1xuICBoZWxwZXJJY29uPzogSWNvbk5hbWVzXG4gIC8qKlxuICAgKiDpl67lj7fmsJTms6Hmj5DnpLrnmoQgcHJvcHPvvIzkvJrlsIbmraTlr7nosaHpg73kvKDpgJLnu5kgPFBvcG92ZXIgLz5cbiAgICovXG4gIGhlbHBlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICAvKipcbiAgICog6K6+572uIGluZGV0ZXJtaW5hdGUg54q25oCB77yM6LSf6LSj5LiU5LuF5LuF6LSf6LSj5qC35byP5o6n5Yi277yM6K+35Zyo5a6e546w5YWo6YCJ5pWI5p6c5pe25L2/55SoXG4gICAqL1xuICBpbmRldGVybWluYXRlPzogYm9vbGVhblxuICAvKipcbiAgICog6YCJ5Lit5oCB5Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOeCueWHu+aXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrPzpcbiAgICB8ICgoXG4gICAgICAgIGU6XG4gICAgICAgICAgfCBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+XG4gICAgICAgICAgfCBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+XG4gICAgICApID0+IHZvaWQpXG4gICAgfCBudWxsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOWAvO+8jOWPquWcqOS9v+eUqCBDaGVja2JveC5Hcm91cCDml7bkvJror7vlj5bkvb/nlKhcbiAgICovXG4gIHZhbHVlPzogbnVsbCB8IFJlYWN0LlJlYWN0VGV4dFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja2JveFxuICBleHRlbmRzIFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gICAgSUNoZWNrYm94UHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPEhUTUxMYWJlbEVsZW1lbnQ+XG4gID4ge1xuICBHcm91cDogdHlwZW9mIEdyb3VwXG59XG5cbi8qKlxuICog5Yu+6YCJ5o+Q5L6b55So5oi35Zyo5aSa5Liq6YCJ6aG55Lit77yM5a+56YCJ6aG555qE5YaF5a656L+b6KGM5Y2V5oiW5aSa5Liq6YCJ5oup44CCXG4gKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IENoZWNrYm94OiBJQ2hlY2tib3ggPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY2hlY2tlZDogY2hlY2tlZFByb3AsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaGVscGVyLFxuICAgICAgaGVscGVySWNvbixcbiAgICAgIGhlbHBlclByb3BzLFxuICAgICAgaW5kZXRlcm1pbmF0ZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgb25DbGljayxcbiAgICAgIHNpemU6IHNpemVQcm9wLFxuICAgICAgdmFsdWUsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSUNoZWNrYm94UHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKCEhY2hlY2tlZFByb3ApXG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkQ29udGV4dCxcbiAgICAgIGhhbmRsZUdyb3VwVmFsdWVDaGFuZ2UsXG4gICAgICBzaXplOiBzaXplQ29udGV4dCxcbiAgICAgIHZhbHVlOiB2YWx1ZUNvbnRleHQsXG4gICAgfSA9IHVzZUNvbnRleHQoR3JvdXBDb250ZXh0KVxuICAgIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbmZpZyB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuXG4gICAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICAgIGlmIChjaGVja2VkUHJvcCAhPT0gbnVsbCAmJiBjaGVja2VkICE9PSAhIWNoZWNrZWRQcm9wKSB7XG4gICAgICBzZXRDaGVja2VkKCEhY2hlY2tlZFByb3ApXG4gICAgfVxuXG4gICAgY29uc3Qgc2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplUHJvcCwgc2l6ZUNvbnRleHQsIHNpemVDb25maWcpXG5cbiAgICBjb25zdCB2YWx1ZUNvbXB1dGVkID0gdmFsdWUgIT09IG51bGwgPyB2YWx1ZSA6IGNoaWxkcmVuPy50b1N0cmluZygpXG5cbiAgICAvKipcbiAgICAgKiDlvZPmnIkgY29udGV4dCBjb250ZXh0IOaXtu+8jOS9v+eUqCB2YWx1Ze+8mlxuICAgICAqIOWmguaenOWtmOWcqCB2YWx1ZSBwcm9w77yM5YiZ55u05o6l5L2/55SoIHZhbHVl77ybXG4gICAgICog5aaC5p6c5LiN5a2Y5Zyo77yM5bCxIHN0cmluZyDljJYgY2hpbGRyZW4g5L2c5Li6IHZhbHVl44CCXG4gICAgICovXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYCR7cHJlZml4fS1iYXNlYCxcbiAgICAgIGAke3ByZWZpeH0tJHtzaXplfWAsXG4gICAgICB7XG4gICAgICAgIFtgJHtwcmVmaXh9LWNoZWNrZWRgXTpcbiAgICAgICAgICBpbmRldGVybWluYXRlIHx8XG4gICAgICAgICAgKHZhbHVlQ29udGV4dFxuICAgICAgICAgICAgPyB2YWx1ZUNvbXB1dGVkICYmIHZhbHVlQ29udGV4dC5pbmNsdWRlcyh2YWx1ZUNvbXB1dGVkKVxuICAgICAgICAgICAgOiBjaGVja2VkKSxcbiAgICAgICAgW2Ake3ByZWZpeH0tbm9DaGlsZHJlbmBdOiAhY2hpbGRyZW4sXG4gICAgICAgIFtgJHtwcmVmaXh9LWRpc2FibGVkYF06IGRpc2FibGVkQ29udGV4dCB8fCBkaXNhYmxlZCxcbiAgICAgIH1cbiAgICApXG5cbiAgICBjb25zdCBwb3BvdmVyID0gaGVscGVyID8gKFxuICAgICAgPFBvcG92ZXIgYWxpZ25FZGdlPXtmYWxzZX0gcG9wdXA9e2hlbHBlcn0gey4uLmhlbHBlclByb3BzfT5cbiAgICAgICAgPEljb25cbiAgICAgICAgICBpY29uPXtoZWxwZXJJY29uIHx8IFwiaGVscC1jaXJjbGVcIn1cbiAgICAgICAgICBjb2xvcj1cInZhcigtLWdyYXktNjAwKVwiXG4gICAgICAgICAgaW50ZXJhY3RpdmVcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0taGVscGVyYH1cbiAgICAgICAgLz5cbiAgICAgIDwvUG9wb3Zlcj5cbiAgICApIDogbnVsbFxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoXG4gICAgICBlOlxuICAgICAgICB8IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTExhYmVsRWxlbWVudD5cbiAgICAgICAgfCBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+XG4gICAgKSA9PiB7XG4gICAgICBpZiAob25DbGljaykge1xuICAgICAgICBvbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoZGlzYWJsZWQgfHwgZGlzYWJsZWRDb250ZXh0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKGhhbmRsZUdyb3VwVmFsdWVDaGFuZ2UgJiYgdmFsdWVDb21wdXRlZCkge1xuICAgICAgICBoYW5kbGVHcm91cFZhbHVlQ2hhbmdlKHZhbHVlQ29tcHV0ZWQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2hlY2tlZFByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICBzZXRDaGVja2VkKCFjaGVja2VkKVxuICAgICAgICB9XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKCFjaGVja2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+KSA9PiB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBoYW5kbGVDbGljayhlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8bGFiZWxcbiAgICAgICAgYXJpYS1jaGVja2VkPXtjaGVja2VkfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgcm9sZT1cImNoZWNrYm94XCJcbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbmRpY2F0b3JgfT5cbiAgICAgICAgICB7aW5kZXRlcm1pbmF0ZSA/IChcbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEwXCI+XG4gICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgeD1cIjFcIlxuICAgICAgICAgICAgICAgIHk9XCI0XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyXCJcbiAgICAgICAgICAgICAgICByeD1cIi41XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMFwiPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNLjYxOCA1LjgyN2EuNDYzLjQ2MyAwIDAgMS0uMDItLjY3NWwuODA0LS44MDRhLjUyLjUyIDAgMCAxIC43MTYtLjAxTDQuNzUgNi43NWw0LjkyMi01LjYyNWEuNTEzLjUxMyAwIDAgMSAuNzA3LS4wNmwuNzQyLjYyYS40NzguNDc4IDAgMCAxIC4wNDQuNjg3bC02LjA4IDYuNzU2YS41MDYuNTA2IDAgMCAxLS43MDMuMDQ1TC42MTggNS44Mjd6XCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7ISFjaGlsZHJlbiAmJiA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPn1cbiAgICAgICAge3BvcG92ZXJ9XG4gICAgICA8L2xhYmVsPlxuICAgIClcbiAgfVxuKVxuXG5DaGVja2JveC5Hcm91cCA9IEdyb3VwXG5cbkNoZWNrYm94LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOaYr+WQpumAieS4rVxuICAgKi9cbiAgY2hlY2tlZDogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCB0cnVlLCBmYWxzZV0pLFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5Yqg5YWl6Zeu5Y+35rCU5rOh5o+Q56S65YaF5a65XG4gICAqL1xuICBoZWxwZXI6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6Ieq5a6a5LmJ6Zeu5Y+35rCU5rOh55qEIEljb25cbiAgICovXG4gIGhlbHBlckljb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDpl67lj7fmsJTms6Hmj5DnpLrnmoQgcHJvcHPvvIzkvJrlsIbmraTlr7nosaHpg73kvKDpgJLnu5kgPFBvcG92ZXIgLz5cbiAgICovXG4gIGhlbHBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog6K6+572uIGluZGV0ZXJtaW5hdGUg54q25oCB77yM6LSf6LSj5LiU5LuF5LuF6LSf6LSj5qC35byP5o6n5Yi277yM6K+35Zyo5a6e546w5YWo6YCJ5pWI5p6c5pe25L2/55SoXG4gICAqL1xuICBpbmRldGVybWluYXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOmAieS4reaAgeWPkeeUn+WPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDngrnlh7vml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDlgLzvvIzlj6rlnKjkvb/nlKggQ2hlY2tib3guR3JvdXAg5pe25Lya6K+75Y+W5L2/55SoXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxufVxuXG5DaGVja2JveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoZWNrZWQ6IG51bGwsXG4gIGNoaWxkcmVuOiBcIlwiLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBoZWxwZXI6IG51bGwsXG4gIGhlbHBlckljb246IFwiaGVscC1jaXJjbGVcIixcbiAgaGVscGVyUHJvcHM6IHt9LFxuICBpbmRldGVybWluYXRlOiBmYWxzZSxcbiAgb25DaGFuZ2U6IG51bGwsXG4gIG9uQ2xpY2s6IG51bGwsXG4gIHNpemU6IFwic21hbGxcIixcbiAgdmFsdWU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94XG4iXX0=