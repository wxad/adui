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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

  if (checkedProp !== null && checked !== !!checkedProp) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcmFkaW8vUmFkaW8udHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIlJhZGlvIiwicmVmIiwiY2hlY2tlZFByb3AiLCJjaGVja2VkIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImhlbHBlciIsImhlbHBlckljb24iLCJoZWxwZXJQcm9wcyIsIm9uQ2hhbmdlIiwib25DbGljayIsInNpemVQcm9wIiwic2l6ZSIsInZhbHVlIiwib3RoZXJQcm9wcyIsInNldENoZWNrZWQiLCJHcm91cENvbnRleHQiLCJkaXNhYmxlZENvbnRleHQiLCJoYW5kbGVHcm91cFZhbHVlQ2hhbmdlIiwic2l6ZUNvbnRleHQiLCJ2YWx1ZUNvbnRleHQiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbmZpZyIsInBvcG92ZXIiLCJjbGFzc1NldCIsInVuZGVmaW5lZCIsInRvU3RyaW5nIiwiaGFuZGxlQ2xpY2siLCJlIiwiY29tcHV0ZWRWYWx1ZSIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiR3JvdXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwiYW55Iiwib2JqZWN0IiwiZnVuYyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsWUFBZjtBQW1FQSxJQUFNQyxLQUFhLEdBQUcsdUJBQ3BCLGdCQWVFQyxHQWZGLEVBZ0JLO0FBQUE7O0FBQUEsTUFkUUMsV0FjUixRQWREQyxPQWNDO0FBQUEsTUFiREMsUUFhQyxRQWJEQSxRQWFDO0FBQUEsTUFaREMsU0FZQyxRQVpEQSxTQVlDO0FBQUEsTUFYREMsUUFXQyxRQVhEQSxRQVdDO0FBQUEsTUFWREMs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aENKO0FBb0NoQi9CLEVBQUFBLE9BQU8sRUFBRXdCLHNCQUFVTyxJQXBDSDtBQXdDaEI3QixFQUFBQSxJQUFJLEVBQUVzQixzQkFBVUMsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLENBQWhCLENBeENVO0FBNENoQnRCLEVBQUFBLEtBQUssRUFBRXFCLHNCQUFVUSxTQUFWLENBQW9CLENBQUNSLHNCQUFVRyxNQUFYLEVBQW1CSCxzQkFBVVMsTUFBN0IsQ0FBcEI7QUE1Q1MsQ0FBbEI7QUErQ0E1QyxLQUFLLENBQUM2QyxZQUFOLEdBQXFCO0FBQ25CMUMsRUFBQUEsT0FBTyxFQUFFLElBRFU7QUFFbkJDLEVBQUFBLFFBQVEsRUFBRSxFQUZTO0FBR25CQyxFQUFBQSxTQUFTLEVBQUVxQixTQUhRO0FBSW5CcEIsRUFBQUEsUUFBUSxFQUFFLEtBSlM7QUFLbkJDLEVBQUFBLE1BQU0sRUFBRSxJQUxXO0FBTW5CQyxFQUFBQSxVQUFVLEVBQUUsYUFOTztBQU9uQkMsRUFBQUEsV0FBVyxFQUFFLEVBUE07QUFRbkJDLEVBQUFBLFFBQVEsRUFBRSxJQVJTO0FBU25CQyxFQUFBQSxPQUFPLEVBQUUsSUFUVTtBQVVuQkUsRUFBQUEsSUFBSSxFQUFFLE9BVmE7QUFXbkJDLEVBQUFBLEtBQUssRUFBRTtBQVhZLENBQXJCO2VBY2VkLEsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS1lbGVtZW50LXRvLWludGVyYWN0aXZlLXJvbGUgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IEdyb3VwQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgR3JvdXAgZnJvbSBcIi4vR3JvdXBcIlxuaW1wb3J0IEljb24sIHsgSWNvbk5hbWVzIH0gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktcmFkaW9cIlxuXG5leHBvcnQgaW50ZXJmYWNlIElSYWRpb1Byb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDmmK/lkKbpgInkuK1cbiAgICovXG4gIGNoZWNrZWQ/OiBudWxsIHwgYm9vbGVhblxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDliqDlhaXpl67lj7fmsJTms6Hmj5DnpLrlhoXlrrlcbiAgICovXG4gIGhlbHBlcj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6Ieq5a6a5LmJ6Zeu5Y+35rCU5rOh55qEIEljb25cbiAgICovXG4gIGhlbHBlckljb24/OiBJY29uTmFtZXNcbiAgLyoqXG4gICAqIOmXruWPt+awlOazoeaPkOekuueahCBwcm9wc++8jOS8muWwhuatpOWvueixoemDveS8oOmAkue7mSA8UG9wb3ZlciAvPlxuICAgKi9cbiAgaGVscGVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIC8qKlxuICAgKiDpgInkuK3mgIHlj5HnlJ/lj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAoKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog54K55Ye75pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xpY2s/OlxuICAgIHwgKChcbiAgICAgICAgZTpcbiAgICAgICAgICB8IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTExhYmVsRWxlbWVudD5cbiAgICAgICAgICB8IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTExhYmVsRWxlbWVudD5cbiAgICAgICkgPT4gdm9pZClcbiAgICB8IG51bGxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog5YC877yM5Y+q5Zyo5L2/55SoIFJhZGlvLkdyb3VwIOaXtuS8muivu+WPluS9v+eUqFxuICAgKi9cbiAgdmFsdWU/OiBudWxsIHwgUmVhY3QuUmVhY3RUZXh0XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJhZGlvXG4gIGV4dGVuZHMgUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgICBJUmFkaW9Qcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8SFRNTExhYmVsRWxlbWVudD5cbiAgPiB7XG4gIEdyb3VwOiB0eXBlb2YgR3JvdXBcbn1cblxuLyoqXG4gKiDljZXpgInmj5Dkvpvnu5nnlKjmiLflnKjkupLmlqXnmoTlpJrkuKrpgInpobnkuK3vvIzlr7npgInpobnlhoXlrrnov5vooYzljZXkuKrpgInmi6njgIJcbiAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgUmFkaW86IElSYWRpbyA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBjaGVja2VkOiBjaGVja2VkUHJvcCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBoZWxwZXIsXG4gICAgICBoZWxwZXJJY29uLFxuICAgICAgaGVscGVyUHJvcHMsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBzaXplOiBzaXplUHJvcCxcbiAgICAgIHZhbHVlLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElSYWRpb1Byb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZSghIWNoZWNrZWRQcm9wKVxuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZENvbnRleHQsXG4gICAgICBoYW5kbGVHcm91cFZhbHVlQ2hhbmdlLFxuICAgICAgc2l6ZTogc2l6ZUNvbnRleHQsXG4gICAgICB2YWx1ZTogdmFsdWVDb250ZXh0LFxuICAgIH0gPSB1c2VDb250ZXh0KEdyb3VwQ29udGV4dClcblxuICAgIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICBpZiAoY2hlY2tlZFByb3AgIT09IG51bGwgJiYgY2hlY2tlZCAhPT0gISFjaGVja2VkUHJvcCkge1xuICAgICAgc2V0Q2hlY2tlZCghIWNoZWNrZWRQcm9wKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbmZpZyB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuXG4gICAgY29uc3Qgc2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplUHJvcCwgc2l6ZUNvbnRleHQsIHNpemVDb25maWcpXG5cbiAgICBjb25zdCBwb3BvdmVyID0gaGVscGVyID8gKFxuICAgICAgPFBvcG92ZXIgYWxpZ25FZGdlPXtmYWxzZX0gcG9wdXA9e2hlbHBlcn0gey4uLmhlbHBlclByb3BzfT5cbiAgICAgICAgPEljb25cbiAgICAgICAgICBpY29uPXtoZWxwZXJJY29uIHx8IFwiaGVscC1jaXJjbGVcIn1cbiAgICAgICAgICBjb2xvcj1cInZhcigtLWdyYXktNjAwKVwiXG4gICAgICAgICAgaW50ZXJhY3RpdmVcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0taGVscGVyYH1cbiAgICAgICAgLz5cbiAgICAgIDwvUG9wb3Zlcj5cbiAgICApIDogbnVsbFxuXG4gICAgLyoqXG4gICAgICog5b2T5pyJIHJhZGlvR3JvdXAgY29udGV4dCDml7bvvIzkvb/nlKggdmFsdWXvvJpcbiAgICAgKiDlpoLmnpzlrZjlnKggdmFsdWUgcHJvcO+8jOWImeebtOaOpeS9v+eUqCB2YWx1Ze+8m1xuICAgICAqIOWmguaenOS4jeWtmOWcqO+8jOWwsSBzdHJpbmcg5YyWIGNoaWxkcmVuIOS9nOS4uiB2YWx1ZeOAglxuICAgICAqL1xuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0tYmFzZWAsXG4gICAgICBgJHtwcmVmaXh9LSR7c2l6ZX1gLFxuICAgICAge1xuICAgICAgICBbYCR7cHJlZml4fS1jaGVja2VkYF06XG4gICAgICAgICAgdmFsdWVDb250ZXh0ICE9PSBudWxsICYmIHZhbHVlQ29udGV4dCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHZhbHVlQ29udGV4dCA9PT0gKHZhbHVlID09PSBudWxsID8gY2hpbGRyZW4/LnRvU3RyaW5nKCkgOiB2YWx1ZSlcbiAgICAgICAgICAgIDogY2hlY2tlZCxcbiAgICAgICAgW2Ake3ByZWZpeH0tbm9DaGlsZHJlbmBdOiAhY2hpbGRyZW4sXG4gICAgICAgIFtgJHtwcmVmaXh9LWRpc2FibGVkYF06IGRpc2FibGVkQ29udGV4dCB8fCBkaXNhYmxlZCxcbiAgICAgIH1cbiAgICApXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChcbiAgICAgIGU6XG4gICAgICAgIHwgUmVhY3QuTW91c2VFdmVudDxIVE1MTGFiZWxFbGVtZW50PlxuICAgICAgICB8IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTExhYmVsRWxlbWVudD5cbiAgICApID0+IHtcbiAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgIG9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbXB1dGVkVmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCA/IGNoaWxkcmVuPy50b1N0cmluZygpIDogdmFsdWVcbiAgICAgIC8qKlxuICAgICAgICog5Y2V6YCJ5LiO5aSa6YCJ5aSE55CG54K55Ye755qE5LiN5ZCM5Zyo5LqO77yaXG4gICAgICAgKiDljZXpgInpgInkuK3nirbmgIHmmK/ljZXpobnnmoTvvIzkuIDml6bpgInkuK3kuI3lho3op6blj5Hkuovku7bjgIJcbiAgICAgICAqL1xuICAgICAgaWYgKFxuICAgICAgICAodmFsdWVDb250ZXh0ICE9PSBudWxsID8gdmFsdWVDb250ZXh0ID09PSBjb21wdXRlZFZhbHVlIDogY2hlY2tlZCkgfHxcbiAgICAgICAgZGlzYWJsZWQgfHxcbiAgICAgICAgZGlzYWJsZWRDb250ZXh0XG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSkge1xuICAgICAgICBoYW5kbGVHcm91cFZhbHVlQ2hhbmdlKGNvbXB1dGVkVmFsdWUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBjb21wdXRlZFZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoZWNrZWRQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgc2V0Q2hlY2tlZCh0cnVlKVxuICAgICAgICB9XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKHRydWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTExhYmVsRWxlbWVudD4pID0+IHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIGhhbmRsZUNsaWNrKGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbFxuICAgICAgICBhcmlhLWNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICByb2xlPVwicmFkaW9cIlxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWluZGljYXRvcmB9IC8+XG4gICAgICAgIHshIWNoaWxkcmVuICYmIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+fVxuICAgICAgICB7cG9wb3Zlcn1cbiAgICAgIDwvbGFiZWw+XG4gICAgKVxuICB9XG4pXG5cblJhZGlvLkdyb3VwID0gR3JvdXBcblxuUmFkaW8ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm6YCJ5LitXG4gICAqL1xuICBjaGVja2VkOiBQcm9wVHlwZXMub25lT2YoW251bGwsIHRydWUsIGZhbHNlXSksXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDliqDlhaXpl67lj7fmsJTms6Hmj5DnpLrlhoXlrrlcbiAgICovXG4gIGhlbHBlcjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDoh6rlrprkuYnpl67lj7fmsJTms6HnmoQgSWNvblxuICAgKi9cbiAgaGVscGVySWNvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOmXruWPt+awlOazoeaPkOekuueahCBwcm9wc++8jOS8muWwhuatpOWvueixoemDveS8oOmAkue7mSA8UG9wb3ZlciAvPlxuICAgKi9cbiAgaGVscGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDpgInkuK3mgIHlj5HnlJ/lj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog54K55Ye75pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog5YC877yM5Y+q5Zyo5L2/55SoIFJhZGlvLkdyb3VwIOaXtuS8muivu+WPluS9v+eUqFxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbn1cblxuUmFkaW8uZGVmYXVsdFByb3BzID0ge1xuICBjaGVja2VkOiBudWxsLFxuICBjaGlsZHJlbjogXCJcIixcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgaGVscGVyOiBudWxsLFxuICBoZWxwZXJJY29uOiBcImhlbHAtY2lyY2xlXCIsXG4gIGhlbHBlclByb3BzOiB7fSxcbiAgb25DaGFuZ2U6IG51bGwsXG4gIG9uQ2xpY2s6IG51bGwsXG4gIHNpemU6IFwic21hbGxcIixcbiAgdmFsdWU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvXG4iXX0=