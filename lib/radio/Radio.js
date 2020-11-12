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

var _configProvider = require("../config-provider");

var _Group = _interopRequireDefault(require("./Group"));

var _icon = _interopRequireDefault(require("../icon"));

var _popover = _interopRequireDefault(require("../popover"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-radio";
var Radio = (0, _react.forwardRef)(function (_ref, ref) {
  var _classNames;

  var checkedProp = _ref.checked,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      helper = _ref.helper,
      helperIcon = _ref.helperIcon,
      helperProps = _ref.helperProps,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      sizeProp = _ref.size,
      value = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["checked", "children", "className", "disabled", "helper", "helperIcon", "helperProps", "onChange", "onClick", "size", "value"]);

  var _useState = (0, _react.useState)(!!checkedProp),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var _useContext = (0, _react.useContext)(_Context.GroupContext),
      disabledContext = _useContext.disabled,
      handleGroupValueChange = _useContext.handleGroupValueChange,
      sizeContext = _useContext.size,
      valueContext = _useContext.value;

  if (checkedProp !== null && checked !== checkedProp) {
    setChecked(!!checkedProp);
  }

  var _useContext2 = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeConfig = _useContext2.size;

  var size = (0, _configProvider.getComputedSize)(sizeProp, sizeContext, sizeConfig);
  var popover = helper ? _react["default"].createElement(_popover["default"], _extends({
    alignEdge: false,
    popup: helper
  }, helperProps), _react["default"].createElement(_icon["default"], {
    icon: helperIcon || "help-circle",
    color: "var(--gray-600)",
    interactive: true,
    className: "".concat(prefix, "-helper")
  })) : null;
  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-base"), "".concat(prefix, "-").concat(size), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-checked"), valueContext !== null && valueContext !== undefined ? valueContext === (value === null ? children === null || children === void 0 ? void 0 : children.toString() : value) : checked), _defineProperty(_classNames, "".concat(prefix, "-noChildren"), !children), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disabledContext || disabled), _classNames));

  var handleClick = function handleClick(e) {
    if (onClick) {
      onClick(e);
    }

    var computedValue = value === null ? children === null || children === void 0 ? void 0 : children.toString() : value;

    if ((valueContext !== null ? valueContext === computedValue : checked) || disabled || disabledContext) {
      return;
    }

    if (handleGroupValueChange) {
      handleGroupValueChange(computedValue === undefined ? "" : computedValue);
    } else {
      if (checkedProp === null) {
        setChecked(true);
      }

      if (onChange) {
        onChange(true);
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
    role: "radio"
  }, otherProps), _react["default"].createElement("span", {
    className: "".concat(prefix, "-indicator")
  }), !!children && _react["default"].createElement("span", null, children), popover);
});
Radio.Group = _Group["default"];
Radio.propTypes = {
  checked: _propTypes["default"].oneOf([null, true, false]),
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  helper: _propTypes["default"].node,
  helperIcon: _propTypes["default"].any,
  helperProps: _propTypes["default"].object,
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
Radio.defaultProps = {
  checked: null,
  children: "",
  className: undefined,
  disabled: false,
  helper: null,
  helperIcon: "help-circle",
  helperProps: {},
  onChange: null,
  onClick: null,
  size: "small",
  value: null
};
var _default = Radio;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcmFkaW8vUmFkaW8udHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIlJhZGlvIiwicmVmIiwiY2hlY2tlZFByb3AiLCJjaGVja2VkIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImhlbHBlciIsImhlbHBlckljb24iLCJoZWxwZXJQcm9wcyIsIm9uQ2hhbmdlIiwib25DbGljayIsInNpemVQcm9wIiwic2l6ZSIsInZhbHVlIiwib3RoZXJQcm9wcyIsInNldENoZWNrZWQiLCJHcm91cENvbnRleHQiLCJkaXNhYmxlZENvbnRleHQiLCJoYW5kbGVHcm91cFZhbHVlQ2hhbmdlIiwic2l6ZUNvbnRleHQiLCJ2YWx1ZUNvbnRleHQiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbmZpZyIsInBvcG92ZXIiLCJjbGFzc1NldCIsInVuZGVmaW5lZCIsInRvU3RyaW5nIiwiaGFuZGxlQ2xpY2siLCJlIiwiY29tcHV0ZWRWYWx1ZSIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiR3JvdXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwiYW55Iiwib2JqZWN0IiwiZnVuYyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxZQUFmO0FBbUVBLElBQU1DLEtBQWEsR0FBRyx1QkFDcEIsZ0JBZUVDLEdBZkYsRUFnQks7QUFBQTs7QUFBQSxNQWRRQyxXQWNSLFFBZERDLE9BY0M7QUFBQSxNQWJEQyxRQWFDLFFBYkRBLFFBYUM7QUFBQSxNQVpEQyxTQVlDLFFBWkRBLFNBWUM7QUFBQSxNQVhEQyxRQVdDLFFBWERBLFFBV0M7QUFBQSxNQVZEQyxNQVVD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QUFBQSxPQUFPLEVBQUV3QixzQkFBVU8sSUFwQ0g7QUF3Q2hCN0IsRUFBQUEsSUFBSSxFQUFFc0Isc0JBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixDQUFoQixDQXhDVTtBQTRDaEJ0QixFQUFBQSxLQUFLLEVBQUVxQixzQkFBVVEsU0FBVixDQUFvQixDQUFDUixzQkFBVUcsTUFBWCxFQUFtQkgsc0JBQVVTLE1BQTdCLENBQXBCO0FBNUNTLENBQWxCO0FBK0NBNUMsS0FBSyxDQUFDNkMsWUFBTixHQUFxQjtBQUNuQjFDLEVBQUFBLE9BQU8sRUFBRSxJQURVO0FBRW5CQyxFQUFBQSxRQUFRLEVBQUUsRUFGUztBQUduQkMsRUFBQUEsU0FBUyxFQUFFcUIsU0FIUTtBQUluQnBCLEVBQUFBLFFBQVEsRUFBRSxLQUpTO0FBS25CQyxFQUFBQSxNQUFNLEVBQUUsSUFMVztBQU1uQkMsRUFBQUEsVUFBVSxFQUFFLGFBTk87QUFPbkJDLEVBQUFBLFdBQVcsRUFBRSxFQVBNO0FBUW5CQyxFQUFBQSxRQUFRLEVBQUUsSUFSUztBQVNuQkMsRUFBQUEsT0FBTyxFQUFFLElBVFU7QUFVbkJFLEVBQUFBLElBQUksRUFBRSxPQVZhO0FBV25CQyxFQUFBQSxLQUFLLEVBQUU7QUFYWSxDQUFyQjtlQWNlZCxLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tbm9uaW50ZXJhY3RpdmUtZWxlbWVudC10by1pbnRlcmFjdGl2ZS1yb2xlICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBHcm91cENvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IEdyb3VwIGZyb20gXCIuL0dyb3VwXCJcbmltcG9ydCBJY29uLCB7IEljb25OYW1lcyB9IGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXJhZGlvXCJcblxuZXhwb3J0IGludGVyZmFjZSBJUmFkaW9Qcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5piv5ZCm6YCJ5LitXG4gICAqL1xuICBjaGVja2VkPzogbnVsbCB8IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog5Yqg5YWl6Zeu5Y+35rCU5rOh5o+Q56S65YaF5a65XG4gICAqL1xuICBoZWxwZXI/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOiHquWumuS5iemXruWPt+awlOazoeeahCBJY29uXG4gICAqL1xuICBoZWxwZXJJY29uPzogSWNvbk5hbWVzXG4gIC8qKlxuICAgKiDpl67lj7fmsJTms6Hmj5DnpLrnmoQgcHJvcHPvvIzkvJrlsIbmraTlr7nosaHpg73kvKDpgJLnu5kgPFBvcG92ZXIgLz5cbiAgICovXG4gIGhlbHBlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICAvKipcbiAgICog6YCJ5Lit5oCB5Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOeCueWHu+aXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrPzpcbiAgICB8ICgoXG4gICAgICAgIGU6XG4gICAgICAgICAgfCBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+XG4gICAgICAgICAgfCBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+XG4gICAgICApID0+IHZvaWQpXG4gICAgfCBudWxsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOWAvO+8jOWPquWcqOS9v+eUqCBSYWRpby5Hcm91cCDml7bkvJror7vlj5bkvb/nlKhcbiAgICovXG4gIHZhbHVlPzogbnVsbCB8IFJlYWN0LlJlYWN0VGV4dFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSYWRpb1xuICBleHRlbmRzIFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gICAgSVJhZGlvUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPEhUTUxMYWJlbEVsZW1lbnQ+XG4gID4ge1xuICBHcm91cDogdHlwZW9mIEdyb3VwXG59XG5cbi8qKlxuICog5Y2V6YCJ5o+Q5L6b57uZ55So5oi35Zyo5LqS5pal55qE5aSa5Liq6YCJ6aG55Lit77yM5a+56YCJ6aG55YaF5a656L+b6KGM5Y2V5Liq6YCJ5oup44CCXG4gKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IFJhZGlvOiBJUmFkaW8gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY2hlY2tlZDogY2hlY2tlZFByb3AsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaGVscGVyLFxuICAgICAgaGVscGVySWNvbixcbiAgICAgIGhlbHBlclByb3BzLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbkNsaWNrLFxuICAgICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgICB2YWx1ZSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJUmFkaW9Qcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoISFjaGVja2VkUHJvcClcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWRDb250ZXh0LFxuICAgICAgaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSxcbiAgICAgIHNpemU6IHNpemVDb250ZXh0LFxuICAgICAgdmFsdWU6IHZhbHVlQ29udGV4dCxcbiAgICB9ID0gdXNlQ29udGV4dChHcm91cENvbnRleHQpXG5cbiAgICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAgaWYgKGNoZWNrZWRQcm9wICE9PSBudWxsICYmIGNoZWNrZWQgIT09IGNoZWNrZWRQcm9wKSB7XG4gICAgICBzZXRDaGVja2VkKCEhY2hlY2tlZFByb3ApXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaXplOiBzaXplQ29uZmlnIH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG5cbiAgICBjb25zdCBzaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemVQcm9wLCBzaXplQ29udGV4dCwgc2l6ZUNvbmZpZylcblxuICAgIGNvbnN0IHBvcG92ZXIgPSBoZWxwZXIgPyAoXG4gICAgICA8UG9wb3ZlciBhbGlnbkVkZ2U9e2ZhbHNlfSBwb3B1cD17aGVscGVyfSB7Li4uaGVscGVyUHJvcHN9PlxuICAgICAgICA8SWNvblxuICAgICAgICAgIGljb249e2hlbHBlckljb24gfHwgXCJoZWxwLWNpcmNsZVwifVxuICAgICAgICAgIGNvbG9yPVwidmFyKC0tZ3JheS02MDApXCJcbiAgICAgICAgICBpbnRlcmFjdGl2ZVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1oZWxwZXJgfVxuICAgICAgICAvPlxuICAgICAgPC9Qb3BvdmVyPlxuICAgICkgOiBudWxsXG5cbiAgICAvKipcbiAgICAgKiDlvZPmnIkgcmFkaW9Hcm91cCBjb250ZXh0IOaXtu+8jOS9v+eUqCB2YWx1Ze+8mlxuICAgICAqIOWmguaenOWtmOWcqCB2YWx1ZSBwcm9w77yM5YiZ55u05o6l5L2/55SoIHZhbHVl77ybXG4gICAgICog5aaC5p6c5LiN5a2Y5Zyo77yM5bCxIHN0cmluZyDljJYgY2hpbGRyZW4g5L2c5Li6IHZhbHVl44CCXG4gICAgICovXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYCR7cHJlZml4fS1iYXNlYCxcbiAgICAgIGAke3ByZWZpeH0tJHtzaXplfWAsXG4gICAgICB7XG4gICAgICAgIFtgJHtwcmVmaXh9LWNoZWNrZWRgXTpcbiAgICAgICAgICB2YWx1ZUNvbnRleHQgIT09IG51bGwgJiYgdmFsdWVDb250ZXh0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gdmFsdWVDb250ZXh0ID09PSAodmFsdWUgPT09IG51bGwgPyBjaGlsZHJlbj8udG9TdHJpbmcoKSA6IHZhbHVlKVxuICAgICAgICAgICAgOiBjaGVja2VkLFxuICAgICAgICBbYCR7cHJlZml4fS1ub0NoaWxkcmVuYF06ICFjaGlsZHJlbixcbiAgICAgICAgW2Ake3ByZWZpeH0tZGlzYWJsZWRgXTogZGlzYWJsZWRDb250ZXh0IHx8IGRpc2FibGVkLFxuICAgICAgfVxuICAgIClcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKFxuICAgICAgZTpcbiAgICAgICAgfCBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+XG4gICAgICAgIHwgUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MTGFiZWxFbGVtZW50PlxuICAgICkgPT4ge1xuICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgb25DbGljayhlKVxuICAgICAgfVxuICAgICAgY29uc3QgY29tcHV0ZWRWYWx1ZSA9IHZhbHVlID09PSBudWxsID8gY2hpbGRyZW4/LnRvU3RyaW5nKCkgOiB2YWx1ZVxuICAgICAgLyoqXG4gICAgICAgKiDljZXpgInkuI7lpJrpgInlpITnkIbngrnlh7vnmoTkuI3lkIzlnKjkuo7vvJpcbiAgICAgICAqIOWNlemAiemAieS4reeKtuaAgeaYr+WNlemhueeahO+8jOS4gOaXpumAieS4reS4jeWGjeinpuWPkeS6i+S7tuOAglxuICAgICAgICovXG4gICAgICBpZiAoXG4gICAgICAgICh2YWx1ZUNvbnRleHQgIT09IG51bGwgPyB2YWx1ZUNvbnRleHQgPT09IGNvbXB1dGVkVmFsdWUgOiBjaGVja2VkKSB8fFxuICAgICAgICBkaXNhYmxlZCB8fFxuICAgICAgICBkaXNhYmxlZENvbnRleHRcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChoYW5kbGVHcm91cFZhbHVlQ2hhbmdlKSB7XG4gICAgICAgIGhhbmRsZUdyb3VwVmFsdWVDaGFuZ2UoY29tcHV0ZWRWYWx1ZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGNvbXB1dGVkVmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2hlY2tlZFByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICBzZXRDaGVja2VkKHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MTGFiZWxFbGVtZW50PikgPT4ge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgaGFuZGxlQ2xpY2soZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsXG4gICAgICAgIGFyaWEtY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHJvbGU9XCJyYWRpb1wiXG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW5kaWNhdG9yYH0gLz5cbiAgICAgICAgeyEhY2hpbGRyZW4gJiYgPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj59XG4gICAgICAgIHtwb3BvdmVyfVxuICAgICAgPC9sYWJlbD5cbiAgICApXG4gIH1cbilcblxuUmFkaW8uR3JvdXAgPSBHcm91cFxuXG5SYWRpby5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKbpgInkuK1cbiAgICovXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgdHJ1ZSwgZmFsc2VdKSxcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWKoOWFpemXruWPt+awlOazoeaPkOekuuWGheWuuVxuICAgKi9cbiAgaGVscGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOiHquWumuS5iemXruWPt+awlOazoeeahCBJY29uXG4gICAqL1xuICBoZWxwZXJJY29uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog6Zeu5Y+35rCU5rOh5o+Q56S655qEIHByb3Bz77yM5Lya5bCG5q2k5a+56LGh6YO95Lyg6YCS57uZIDxQb3BvdmVyIC8+XG4gICAqL1xuICBoZWxwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOmAieS4reaAgeWPkeeUn+WPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDngrnlh7vml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDlgLzvvIzlj6rlnKjkvb/nlKggUmFkaW8uR3JvdXAg5pe25Lya6K+75Y+W5L2/55SoXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxufVxuXG5SYWRpby5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoZWNrZWQ6IG51bGwsXG4gIGNoaWxkcmVuOiBcIlwiLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBoZWxwZXI6IG51bGwsXG4gIGhlbHBlckljb246IFwiaGVscC1jaXJjbGVcIixcbiAgaGVscGVyUHJvcHM6IHt9LFxuICBvbkNoYW5nZTogbnVsbCxcbiAgb25DbGljazogbnVsbCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9cbiJdfQ==