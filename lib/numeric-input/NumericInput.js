"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _input = _interopRequireDefault(require("../input"));

var _icon = _interopRequireDefault(require("../icon"));

require("./style");

var _core = require("./core");

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

var prefix = "adui-numeric-input";
var NumericInput = (0, _react.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
      defaultValue = _ref.defaultValue,
      disabled = _ref.disabled,
      max = _ref.max,
      min = _ref.min,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onKeyDown = _ref.onKeyDown,
      precisionProp = _ref.precision,
      step = _ref.step,
      valueProp = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["className", "defaultValue", "disabled", "max", "min", "onBlur", "onChange", "onFocus", "onKeyDown", "precision", "step", "value"]);

  var precision = precisionProp === undefined ? (0, _core.getDecimalNumber)(step || 1) : precisionProp;

  var _useState = (0, _react.useState)(function () {
    var valueState = valueProp !== null ? valueProp : defaultValue;

    if (typeof valueState !== "number") {
      valueState = "";
    }

    return valueState;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(typeof value === "number" ? value.toFixed(precision) : ""),
      _useState4 = _slicedToArray(_useState3, 2),
      inputValue = _useState4[0],
      setInputValue = _useState4[1];

  if (valueProp !== null && value !== valueProp) {
    setValue(typeof valueProp === "number" ? valueProp : "");
    setInputValue(typeof valueProp === "number" ? valueProp.toFixed(precision) : "");
  }

  var inputRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      current: inputRef.current
    };
  });

  var handleValueStepChange = function handleValueStepChange(type, stp, inputVal) {
    var val = (0, _core.stringToNumber)(inputVal);
    var decimal = (0, _core.getDecimalNumber)(stp);

    if (type === "plus") {
      return (val * Math.pow(10, decimal) + stp * Math.pow(10, decimal)) / Math.pow(10, decimal);
    }

    return (val * Math.pow(10, decimal) - stp * Math.pow(10, decimal)) / Math.pow(10, decimal);
  };

  var handleButtonClick = function handleButtonClick(type) {
    var valueStepChanged = handleValueStepChange(type, step || 1, inputValue);

    if (min !== undefined && valueStepChanged < min) {
      valueStepChanged = min;
    } else if (max !== undefined && valueStepChanged > max) {
      valueStepChanged = max;
    }

    if (valueProp === null) {
      setValue(valueStepChanged);
      setInputValue(valueStepChanged.toFixed(precision));
    }

    if (onChange) {
      onChange(valueStepChanged);
    }
  };

  var handleInputChange = function handleInputChange(_ref2) {
    var val = _ref2.target.value;

    if ((0, _core.isLegal)(step || 1, val, min, max)) {
      if (valueProp === null) {
        setValue((0, _core.stringToNumber)(val));
      }

      if (onChange) {
        onChange((0, _core.stringToNumber)(val));
      }
    }

    if (valueProp === null) {
      setInputValue(val);
    }
  };

  var handleInputBlur = function handleInputBlur(e) {
    var val = e.target.value;

    if (typeof value !== "number") {
      setInputValue("");
    } else {
      var valueFixed = value.toFixed(precision);

      if (!(0, _core.isLegal)(step || 1, val, min, max) || val !== valueFixed) {
        setInputValue(valueFixed);
      }
    }

    if (onBlur) {
      onBlur(e);
    }
  };

  var handleMouseDown = function handleMouseDown(e, type) {
    e.preventDefault();
    e.stopPropagation();
    handleButtonClick(type);

    if (inputRef.current && document.activeElement !== inputRef.current.input) {
      inputRef.current.input.focus();
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    var keyCode = e.keyCode;

    if (keyCode === 38) {
      e.preventDefault();
      e.stopPropagation();
      handleButtonClick("plus");
    }

    if (keyCode === 40) {
      e.preventDefault();
      e.stopPropagation();
      handleButtonClick("minus");
    }
  };

  return _react["default"].createElement(_input["default"], _extends({
    className: (0, _classnames["default"])(className, "".concat(prefix), _defineProperty({}, "".concat(prefix, "-disabled"), disabled)),
    cleaveOptions: {
      numeral: true,
      numeralDecimalScale: precision,
      delimiter: ""
    },
    disabled: disabled,
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    onKeyDown: handleKeyDown,
    value: inputValue,
    ref: inputRef,
    rightElement: _react["default"].createElement("div", {
      className: "".concat(prefix, "-buttons")
    }, _react["default"].createElement("div", {
      className: "".concat(prefix, "-button"),
      onMouseDown: function onMouseDown(e) {
        return handleMouseDown(e, "plus");
      },
      role: "none"
    }, _react["default"].createElement(_icon["default"], {
      icon: "arrow-up",
      interactive: !disabled,
      size: 12
    })), _react["default"].createElement("div", {
      className: "".concat(prefix, "-button"),
      onMouseDown: function onMouseDown(e) {
        return handleMouseDown(e, "minus");
      },
      role: "none"
    }, _react["default"].createElement(_icon["default"], {
      icon: "arrow-down",
      interactive: !disabled,
      size: 12
    })))
  }, otherProps));
});
NumericInput.displayName = "NumericInput";
NumericInput.propTypes = {
  defaultValue: _propTypes["default"].number,
  max: _propTypes["default"].number,
  min: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  precision: _propTypes["default"].number,
  step: _propTypes["default"].number,
  value: _propTypes["default"].number
};
NumericInput.defaultProps = {
  defaultValue: null,
  max: undefined,
  min: undefined,
  onChange: function onChange() {},
  precision: undefined,
  step: 1,
  value: null
};
var _default = NumericInput;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbnVtZXJpYy1pbnB1dC9OdW1lcmljSW5wdXQudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIk51bWVyaWNJbnB1dCIsInJlZiIsImNsYXNzTmFtZSIsImRlZmF1bHRWYWx1ZSIsImRpc2FibGVkIiwibWF4IiwibWluIiwib25CbHVyIiwib25DaGFuZ2UiLCJvbkZvY3VzIiwib25LZXlEb3duIiwicHJlY2lzaW9uUHJvcCIsInByZWNpc2lvbiIsInN0ZXAiLCJ2YWx1ZVByb3AiLCJ2YWx1ZSIsIm90aGVyUHJvcHMiLCJ1bmRlZmluZWQiLCJ2YWx1ZVN0YXRlIiwic2V0VmFsdWUiLCJ0b0ZpeGVkIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJpbnB1dFJlZiIsImN1cnJlbnQiLCJoYW5kbGVWYWx1ZVN0ZXBDaGFuZ2UiLCJ0eXBlIiwic3RwIiwiaW5wdXRWYWwiLCJ2YWwiLCJkZWNpbWFsIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJ2YWx1ZVN0ZXBDaGFuZ2VkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJoYW5kbGVJbnB1dEJsdXIiLCJlIiwidmFsdWVGaXhlZCIsImhhbmRsZU1vdXNlRG93biIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiaW5wdXQiLCJmb2N1cyIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwibnVtZXJhbCIsIm51bWVyYWxEZWNpbWFsU2NhbGUiLCJkZWxpbWl0ZXIiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLG9CQUFmO0FBc0NBLElBQU1D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QjtlQVVlZixZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGUsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgSW5wdXQsIHsgSUlucHV0UHJvcHMgfSBmcm9tIFwiLi4vaW5wdXRcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5pbXBvcnQgeyBpc0xlZ2FsLCBzdHJpbmdUb051bWJlciwgZ2V0RGVjaW1hbE51bWJlciB9IGZyb20gXCIuL2NvcmVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktbnVtZXJpYy1pbnB1dFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSU51bWVyaWNJbnB1dFByb3BzXG4gIGV4dGVuZHMgT21pdDxJSW5wdXRQcm9wcywgXCJkZWZhdWx0VmFsdWVcIiB8IFwib25DaGFuZ2VcIiB8IFwidmFsdWVcIj4ge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOm7mOiupOeahOWIneWni+WAvCAtIOWGhemDqOmpseWKqFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlPzogbnVtYmVyIHwgbnVsbFxuICAvKipcbiAgICog6K6+572u5pyA5aSn5YC8XG4gICAqL1xuICBtYXg/OiBudW1iZXJcbiAgLyoqXG4gICAqIOiuvue9ruacgOWwj+WAvFxuICAgKi9cbiAgbWluPzogbnVtYmVyXG4gIC8qKlxuICAgKiDlgLzmlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAodmFsdWU/OiBudW1iZXIpID0+IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9rueyvuW6plxuICAgKi9cbiAgcHJlY2lzaW9uPzogbnVtYmVyXG4gIC8qKlxuICAgKiDorr7nva7lop7liqDnmoTluYXluqZcbiAgICovXG4gIHN0ZXA/OiBudW1iZXJcbiAgLyoqXG4gICAqIOWAvCAtIOWklumDqOaOp+WItlxuICAgKi9cbiAgdmFsdWU/OiBudW1iZXIgfCBudWxsXG59XG5cbi8qKlxuICog5pWw5a2X6L6T5YWl5qGG44CCXG4gKi9cbmNvbnN0IE51bWVyaWNJbnB1dDogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxJTnVtZXJpY0lucHV0UHJvcHMgJlxuICBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT4+ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgbWF4LFxuICAgICAgbWluLFxuICAgICAgb25CbHVyLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbkZvY3VzLFxuICAgICAgb25LZXlEb3duLFxuICAgICAgcHJlY2lzaW9uOiBwcmVjaXNpb25Qcm9wLFxuICAgICAgc3RlcCxcbiAgICAgIHZhbHVlOiB2YWx1ZVByb3AsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSU51bWVyaWNJbnB1dFByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBwcmVjaXNpb24gPVxuICAgICAgcHJlY2lzaW9uUHJvcCA9PT0gdW5kZWZpbmVkID8gZ2V0RGVjaW1hbE51bWJlcihzdGVwIHx8IDEpIDogcHJlY2lzaW9uUHJvcFxuXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxudW1iZXIgfCBzdHJpbmc+KCgpID0+IHtcbiAgICAgIGxldCB2YWx1ZVN0YXRlOiBSZWFjdC5SZWFjdFRleHQgfCBudWxsIHwgdW5kZWZpbmVkID1cbiAgICAgICAgdmFsdWVQcm9wICE9PSBudWxsID8gdmFsdWVQcm9wIDogZGVmYXVsdFZhbHVlXG4gICAgICBpZiAodHlwZW9mIHZhbHVlU3RhdGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgdmFsdWVTdGF0ZSA9IFwiXCJcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZVN0YXRlXG4gICAgfSlcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFxuICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiID8gdmFsdWUudG9GaXhlZChwcmVjaXNpb24pIDogXCJcIlxuICAgIClcblxuICAgIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsICYmIHZhbHVlICE9PSB2YWx1ZVByb3ApIHtcbiAgICAgIHNldFZhbHVlKHR5cGVvZiB2YWx1ZVByb3AgPT09IFwibnVtYmVyXCIgPyB2YWx1ZVByb3AgOiBcIlwiKVxuICAgICAgc2V0SW5wdXRWYWx1ZShcbiAgICAgICAgdHlwZW9mIHZhbHVlUHJvcCA9PT0gXCJudW1iZXJcIiA/IHZhbHVlUHJvcC50b0ZpeGVkKHByZWNpc2lvbikgOiBcIlwiXG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICBjdXJyZW50OiBpbnB1dFJlZi5jdXJyZW50LFxuICAgIH0pKVxuXG4gICAgY29uc3QgaGFuZGxlVmFsdWVTdGVwQ2hhbmdlID0gKFxuICAgICAgdHlwZTogXCJwbHVzXCIgfCBcIm1pbnVzXCIsXG4gICAgICBzdHA6IG51bWJlcixcbiAgICAgIGlucHV0VmFsPzogc3RyaW5nXG4gICAgKSA9PiB7XG4gICAgICAvLyDlsIYgaW5wdXRWYWwg6L2s5oiQ5pWw5a2X77yM5aaC5p6c5piv56m65a2X56ym5Liy77yM5YiZ6K6k5Li65LuOIDAg5byA5aeL5Yqg5YePXG4gICAgICBjb25zdCB2YWwgPSBzdHJpbmdUb051bWJlcihpbnB1dFZhbClcbiAgICAgIGNvbnN0IGRlY2ltYWwgPSBnZXREZWNpbWFsTnVtYmVyKHN0cClcbiAgICAgIGlmICh0eXBlID09PSBcInBsdXNcIikge1xuICAgICAgICByZXR1cm4gKHZhbCAqIDEwICoqIGRlY2ltYWwgKyBzdHAgKiAxMCAqKiBkZWNpbWFsKSAvIDEwICoqIGRlY2ltYWxcbiAgICAgIH1cbiAgICAgIHJldHVybiAodmFsICogMTAgKiogZGVjaW1hbCAtIHN0cCAqIDEwICoqIGRlY2ltYWwpIC8gMTAgKiogZGVjaW1hbFxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gKHR5cGU6IFwicGx1c1wiIHwgXCJtaW51c1wiKSA9PiB7XG4gICAgICBsZXQgdmFsdWVTdGVwQ2hhbmdlZCA9IGhhbmRsZVZhbHVlU3RlcENoYW5nZSh0eXBlLCBzdGVwIHx8IDEsIGlucHV0VmFsdWUpXG4gICAgICBpZiAobWluICE9PSB1bmRlZmluZWQgJiYgdmFsdWVTdGVwQ2hhbmdlZCA8IG1pbikge1xuICAgICAgICB2YWx1ZVN0ZXBDaGFuZ2VkID0gbWluXG4gICAgICB9IGVsc2UgaWYgKG1heCAhPT0gdW5kZWZpbmVkICYmIHZhbHVlU3RlcENoYW5nZWQgPiBtYXgpIHtcbiAgICAgICAgdmFsdWVTdGVwQ2hhbmdlZCA9IG1heFxuICAgICAgfVxuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICBzZXRWYWx1ZSh2YWx1ZVN0ZXBDaGFuZ2VkKVxuICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbHVlU3RlcENoYW5nZWQudG9GaXhlZChwcmVjaXNpb24pKVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbHVlU3RlcENoYW5nZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoe1xuICAgICAgdGFyZ2V0OiB7IHZhbHVlOiB2YWwgfSxcbiAgICB9OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgaWYgKGlzTGVnYWwoc3RlcCB8fCAxLCB2YWwsIG1pbiwgbWF4KSkge1xuICAgICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgc2V0VmFsdWUoc3RyaW5nVG9OdW1iZXIodmFsKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShzdHJpbmdUb051bWJlcih2YWwpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHNldElucHV0VmFsdWUodmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Qmx1ciA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHRhcmdldDogeyB2YWx1ZTogdmFsIH0sXG4gICAgICB9ID0gZVxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBzZXRJbnB1dFZhbHVlKFwiXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2YWx1ZUZpeGVkID0gdmFsdWUudG9GaXhlZChwcmVjaXNpb24pXG4gICAgICAgIGlmICghaXNMZWdhbChzdGVwIHx8IDEsIHZhbCwgbWluLCBtYXgpIHx8IHZhbCAhPT0gdmFsdWVGaXhlZCkge1xuICAgICAgICAgIHNldElucHV0VmFsdWUodmFsdWVGaXhlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9uQmx1cikge1xuICAgICAgICBvbkJsdXIoZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSAoXG4gICAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PixcbiAgICAgIHR5cGU6IFwicGx1c1wiIHwgXCJtaW51c1wiXG4gICAgKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGhhbmRsZUJ1dHRvbkNsaWNrKHR5cGUpXG4gICAgICBpZiAoXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQgJiZcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gaW5wdXRSZWYuY3VycmVudC5pbnB1dFxuICAgICAgKSB7XG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuaW5wdXQuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBlXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gMzgpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgaGFuZGxlQnV0dG9uQ2xpY2soXCJwbHVzXCIpXG4gICAgICB9XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gNDApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgaGFuZGxlQnV0dG9uQ2xpY2soXCJtaW51c1wiKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fWAsIHtcbiAgICAgICAgICBbYCR7cHJlZml4fS1kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgICAgICAgfSl9XG4gICAgICAgIGNsZWF2ZU9wdGlvbnM9e3tcbiAgICAgICAgICBudW1lcmFsOiB0cnVlLFxuICAgICAgICAgIG51bWVyYWxEZWNpbWFsU2NhbGU6IHByZWNpc2lvbixcbiAgICAgICAgICBkZWxpbWl0ZXI6IFwiXCIsXG4gICAgICAgIH19XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICBvbkJsdXI9e2hhbmRsZUlucHV0Qmx1cn1cbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgcmlnaHRFbGVtZW50PXtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1idXR0b25zYH0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1idXR0b25gfVxuICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlRG93bihlLCBcInBsdXNcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uIGljb249XCJhcnJvdy11cFwiIGludGVyYWN0aXZlPXshZGlzYWJsZWR9IHNpemU9ezEyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1idXR0b25gfVxuICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlRG93bihlLCBcIm1pbnVzXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvbiBpY29uPVwiYXJyb3ctZG93blwiIGludGVyYWN0aXZlPXshZGlzYWJsZWR9IHNpemU9ezEyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxuKVxuXG5OdW1lcmljSW5wdXQuZGlzcGxheU5hbWUgPSBcIk51bWVyaWNJbnB1dFwiXG5cbk51bWVyaWNJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDpu5jorqTnmoTliJ3lp4vlgLwgLSDlhoXpg6jpqbHliqhcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOiuvue9ruacgOWkp+WAvFxuICAgKi9cbiAgbWF4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog6K6+572u5pyA5bCP5YC8XG4gICAqL1xuICBtaW46IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDlgLzmlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6K6+572u57K+5bqmXG4gICAqL1xuICBwcmVjaXNpb246IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDlop7lh4/nmoTluYXluqZcbiAgICovXG4gIHN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDlgLwgLSDlpJbpg6jmjqfliLZcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxufVxuXG5OdW1lcmljSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gIG1heDogdW5kZWZpbmVkLFxuICBtaW46IHVuZGVmaW5lZCxcbiAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICBwcmVjaXNpb246IHVuZGVmaW5lZCxcbiAgc3RlcDogMSxcbiAgdmFsdWU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWVyaWNJbnB1dFxuIl19