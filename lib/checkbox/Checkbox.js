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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvQ2hlY2tib3gudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkNoZWNrYm94IiwicmVmIiwiY2hlY2tlZFByb3AiLCJjaGVja2VkIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImhlbHBlciIsImhlbHBlckljb24iLCJoZWxwZXJQcm9wcyIsImluZGV0ZXJtaW5hdGUiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJzaXplUHJvcCIsInNpemUiLCJ2YWx1ZSIsIm90aGVyUHJvcHMiLCJzZXRDaGVja2VkIiwiR3JvdXBDb250ZXh0IiwiZGlzYWJsZWRDb250ZXh0IiwiaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSIsInNpemVDb250ZXh0IiwidmFsdWVDb250ZXh0IiwiQ29uZmlnQ29udGV4dCIsInNpemVDb25maWciLCJ2YWx1ZUNvbXB1dGVkIiwidG9TdHJpbmciLCJjbGFzc1NldCIsImluY2x1ZGVzIiwicG9wb3ZlciIsImhhbmRsZUNsaWNrIiwiZSIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiR3JvdXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwiYW55Iiwib2JqZWN0IiwiZnVuYyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxlQUFmO0FBdUVBLElBQU1DLFFBQW1CLEdBQUcsdUJBQzFCLGdCQWdCRUMsR0FoQkYsRUFpQks7QUFBQTs7QUFBQSxNQWZRQyxXQWVSLFFBZkRDLE9BZUM7QUFBQSxNQWREQyxRQWNDLFFBZERBLFFBY0M7QUFBQSxNQWJEQyxTQWFDLFFBYkRBLFNBYUM7QUFB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SUFBSSxFQUFFLE9BWGdCO0FBWXRCQyxFQUFBQSxLQUFLLEVBQUU7QUFaZSxDQUF4QjtlQWVlZixRIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tbm9uaW50ZXJhY3RpdmUtZWxlbWVudC10by1pbnRlcmFjdGl2ZS1yb2xlICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBHcm91cENvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBHcm91cCBmcm9tIFwiLi9Hcm91cFwiXG5pbXBvcnQgSWNvbiwgeyBJY29uTmFtZXMgfSBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgUG9wb3ZlciwgeyBJUG9wb3ZlclByb3BzIH0gZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNoZWNrYm94XCJcblxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tib3hQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5piv5ZCm6YCJ5LitXG4gICAqL1xuICBjaGVja2VkPzogbnVsbCB8IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog5Yqg5YWl6Zeu5Y+35rCU5rOh5o+Q56S65YaF5a65XG4gICAqL1xuICBoZWxwZXI/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOiHquWumuS5iemXruWPt+awlOazoeeahCBJY29uXG4gICAqL1xuICBoZWxwZXJJY29uPzogSWNvbk5hbWVzXG4gIC8qKlxuICAgKiDpl67lj7fmsJTms6Hmj5DnpLrnmoQgcHJvcHPvvIzkvJrlsIbmraTlr7nosaHpg73kvKDpgJLnu5kgPFBvcG92ZXIgLz5cbiAgICovXG4gIGhlbHBlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICAvKipcbiAgICog6K6+572uIGluZGV0ZXJtaW5hdGUg54q25oCB77yM6LSf6LSj5LiU5LuF5LuF6LSf6LSj5qC35byP5o6n5Yi277yM6K+35Zyo5a6e546w5YWo6YCJ5pWI5p6c5pe25L2/55SoXG4gICAqL1xuICBpbmRldGVybWluYXRlPzogYm9vbGVhblxuICAvKipcbiAgICog6YCJ5Lit5oCB5Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOeCueWHu+aXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrPzpcbiAgICB8ICgoXG4gICAgICAgIGU6XG4gICAgICAgICAgfCBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+XG4gICAgICAgICAgfCBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+XG4gICAgICApID0+IHZvaWQpXG4gICAgfCBudWxsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOWAvO+8jOWPquWcqOS9v+eUqCBDaGVja2JveC5Hcm91cCDml7bkvJror7vlj5bkvb/nlKhcbiAgICovXG4gIHZhbHVlPzogbnVsbCB8IFJlYWN0LlJlYWN0VGV4dFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja2JveFxuICBleHRlbmRzIFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gICAgSUNoZWNrYm94UHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPEhUTUxMYWJlbEVsZW1lbnQ+XG4gID4ge1xuICBHcm91cDogdHlwZW9mIEdyb3VwXG59XG5cbi8qKlxuICog5Yu+6YCJ5o+Q5L6b55So5oi35Zyo5aSa5Liq6YCJ6aG55Lit77yM5a+56YCJ6aG555qE5YaF5a656L+b6KGM5Y2V5oiW5aSa5Liq6YCJ5oup44CCXG4gKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IENoZWNrYm94OiBJQ2hlY2tib3ggPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY2hlY2tlZDogY2hlY2tlZFByb3AsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaGVscGVyLFxuICAgICAgaGVscGVySWNvbixcbiAgICAgIGhlbHBlclByb3BzLFxuICAgICAgaW5kZXRlcm1pbmF0ZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgb25DbGljayxcbiAgICAgIHNpemU6IHNpemVQcm9wLFxuICAgICAgdmFsdWUsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSUNoZWNrYm94UHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKCEhY2hlY2tlZFByb3ApXG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkQ29udGV4dCxcbiAgICAgIGhhbmRsZUdyb3VwVmFsdWVDaGFuZ2UsXG4gICAgICBzaXplOiBzaXplQ29udGV4dCxcbiAgICAgIHZhbHVlOiB2YWx1ZUNvbnRleHQsXG4gICAgfSA9IHVzZUNvbnRleHQoR3JvdXBDb250ZXh0KVxuICAgIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbmZpZyB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuXG4gICAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICAgIGlmIChjaGVja2VkUHJvcCAhPT0gbnVsbCAmJiBjaGVja2VkICE9PSBjaGVja2VkUHJvcCkge1xuICAgICAgc2V0Q2hlY2tlZCghIWNoZWNrZWRQcm9wKVxuICAgIH1cblxuICAgIGNvbnN0IHNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZVByb3AsIHNpemVDb250ZXh0LCBzaXplQ29uZmlnKVxuXG4gICAgY29uc3QgdmFsdWVDb21wdXRlZCA9IHZhbHVlICE9PSBudWxsID8gdmFsdWUgOiBjaGlsZHJlbj8udG9TdHJpbmcoKVxuXG4gICAgLyoqXG4gICAgICog5b2T5pyJIGNvbnRleHQgY29udGV4dCDml7bvvIzkvb/nlKggdmFsdWXvvJpcbiAgICAgKiDlpoLmnpzlrZjlnKggdmFsdWUgcHJvcO+8jOWImeebtOaOpeS9v+eUqCB2YWx1Ze+8m1xuICAgICAqIOWmguaenOS4jeWtmOWcqO+8jOWwsSBzdHJpbmcg5YyWIGNoaWxkcmVuIOS9nOS4uiB2YWx1ZeOAglxuICAgICAqL1xuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0tYmFzZWAsXG4gICAgICBgJHtwcmVmaXh9LSR7c2l6ZX1gLFxuICAgICAge1xuICAgICAgICBbYCR7cHJlZml4fS1jaGVja2VkYF06XG4gICAgICAgICAgaW5kZXRlcm1pbmF0ZSB8fFxuICAgICAgICAgICh2YWx1ZUNvbnRleHRcbiAgICAgICAgICAgID8gdmFsdWVDb21wdXRlZCAmJiB2YWx1ZUNvbnRleHQuaW5jbHVkZXModmFsdWVDb21wdXRlZClcbiAgICAgICAgICAgIDogY2hlY2tlZCksXG4gICAgICAgIFtgJHtwcmVmaXh9LW5vQ2hpbGRyZW5gXTogIWNoaWxkcmVuLFxuICAgICAgICBbYCR7cHJlZml4fS1kaXNhYmxlZGBdOiBkaXNhYmxlZENvbnRleHQgfHwgZGlzYWJsZWQsXG4gICAgICB9XG4gICAgKVxuXG4gICAgY29uc3QgcG9wb3ZlciA9IGhlbHBlciA/IChcbiAgICAgIDxQb3BvdmVyIGFsaWduRWRnZT17ZmFsc2V9IHBvcHVwPXtoZWxwZXJ9IHsuLi5oZWxwZXJQcm9wc30+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgaWNvbj17aGVscGVySWNvbiB8fCBcImhlbHAtY2lyY2xlXCJ9XG4gICAgICAgICAgY29sb3I9XCJ2YXIoLS1ncmF5LTYwMClcIlxuICAgICAgICAgIGludGVyYWN0aXZlXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWhlbHBlcmB9XG4gICAgICAgIC8+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgKSA6IG51bGxcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKFxuICAgICAgZTpcbiAgICAgICAgfCBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+XG4gICAgICAgIHwgUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MTGFiZWxFbGVtZW50PlxuICAgICkgPT4ge1xuICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgb25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKGRpc2FibGVkIHx8IGRpc2FibGVkQ29udGV4dCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChoYW5kbGVHcm91cFZhbHVlQ2hhbmdlICYmIHZhbHVlQ29tcHV0ZWQpIHtcbiAgICAgICAgaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSh2YWx1ZUNvbXB1dGVkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoZWNrZWRQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgc2V0Q2hlY2tlZCghY2hlY2tlZClcbiAgICAgICAgfVxuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZSghY2hlY2tlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MTGFiZWxFbGVtZW50PikgPT4ge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgaGFuZGxlQ2xpY2soZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsXG4gICAgICAgIGFyaWEtY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHJvbGU9XCJjaGVja2JveFwiXG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW5kaWNhdG9yYH0+XG4gICAgICAgICAge2luZGV0ZXJtaW5hdGUgPyAoXG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMFwiPlxuICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgIHg9XCIxXCJcbiAgICAgICAgICAgICAgICB5PVwiNFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMlwiXG4gICAgICAgICAgICAgICAgcng9XCIuNVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTBcIj5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTS42MTggNS44MjdhLjQ2My40NjMgMCAwIDEtLjAyLS42NzVsLjgwNC0uODA0YS41Mi41MiAwIDAgMSAuNzE2LS4wMUw0Ljc1IDYuNzVsNC45MjItNS42MjVhLjUxMy41MTMgMCAwIDEgLjcwNy0uMDZsLjc0Mi42MmEuNDc4LjQ3OCAwIDAgMSAuMDQ0LjY4N2wtNi4wOCA2Ljc1NmEuNTA2LjUwNiAwIDAgMS0uNzAzLjA0NUwuNjE4IDUuODI3elwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgeyEhY2hpbGRyZW4gJiYgPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj59XG4gICAgICAgIHtwb3BvdmVyfVxuICAgICAgPC9sYWJlbD5cbiAgICApXG4gIH1cbilcblxuQ2hlY2tib3guR3JvdXAgPSBHcm91cFxuXG5DaGVja2JveC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKbpgInkuK1cbiAgICovXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgdHJ1ZSwgZmFsc2VdKSxcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWKoOWFpemXruWPt+awlOazoeaPkOekuuWGheWuuVxuICAgKi9cbiAgaGVscGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOiHquWumuS5iemXruWPt+awlOazoeeahCBJY29uXG4gICAqL1xuICBoZWxwZXJJY29uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog6Zeu5Y+35rCU5rOh5o+Q56S655qEIHByb3Bz77yM5Lya5bCG5q2k5a+56LGh6YO95Lyg6YCS57uZIDxQb3BvdmVyIC8+XG4gICAqL1xuICBoZWxwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOiuvue9riBpbmRldGVybWluYXRlIOeKtuaAge+8jOi0n+i0o+S4lOS7heS7hei0n+i0o+agt+W8j+aOp+WItu+8jOivt+WcqOWunueOsOWFqOmAieaViOaenOaXtuS9v+eUqFxuICAgKi9cbiAgaW5kZXRlcm1pbmF0ZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDpgInkuK3mgIHlj5HnlJ/lj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog54K55Ye75pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog5YC877yM5Y+q5Zyo5L2/55SoIENoZWNrYm94Lkdyb3VwIOaXtuS8muivu+WPluS9v+eUqFxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbn1cblxuQ2hlY2tib3guZGVmYXVsdFByb3BzID0ge1xuICBjaGVja2VkOiBudWxsLFxuICBjaGlsZHJlbjogXCJcIixcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgaGVscGVyOiBudWxsLFxuICBoZWxwZXJJY29uOiBcImhlbHAtY2lyY2xlXCIsXG4gIGhlbHBlclByb3BzOiB7fSxcbiAgaW5kZXRlcm1pbmF0ZTogZmFsc2UsXG4gIG9uQ2hhbmdlOiBudWxsLFxuICBvbkNsaWNrOiBudWxsLFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHZhbHVlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveFxuIl19