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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbnVtZXJpYy1pbnB1dC9OdW1lcmljSW5wdXQudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIk51bWVyaWNJbnB1dCIsInJlZiIsImNsYXNzTmFtZSIsImRlZmF1bHRWYWx1ZSIsImRpc2FibGVkIiwibWF4IiwibWluIiwib25CbHVyIiwib25DaGFuZ2UiLCJvbkZvY3VzIiwib25LZXlEb3duIiwicHJlY2lzaW9uUHJvcCIsInByZWNpc2lvbiIsInN0ZXAiLCJ2YWx1ZVByb3AiLCJ2YWx1ZSIsIm90aGVyUHJvcHMiLCJ1bmRlZmluZWQiLCJ2YWx1ZVN0YXRlIiwic2V0VmFsdWUiLCJ0b0ZpeGVkIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJpbnB1dFJlZiIsImN1cnJlbnQiLCJoYW5kbGVWYWx1ZVN0ZXBDaGFuZ2UiLCJ0eXBlIiwic3RwIiwiaW5wdXRWYWwiLCJ2YWwiLCJkZWNpbWFsIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJ2YWx1ZVN0ZXBDaGFuZ2VkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJoYW5kbGVJbnB1dEJsdXIiLCJlIiwidmFsdWVGaXhlZCIsImhhbmRsZU1vdXNlRG93biIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiaW5wdXQiLCJmb2N1cyIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwibnVtZXJhbCIsIm51bWVyYWxEZWNpbWFsU2NhbGUiLCJkZWxpbWl0ZXIiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLG9CQUFmO0FBc0NBLElBQU1D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VWVmLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBJbnB1dCwgeyBJSW5wdXRQcm9wcyB9IGZyb20gXCIuLi9pbnB1dFwiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcbmltcG9ydCB7IGlzTGVnYWwsIHN0cmluZ1RvTnVtYmVyLCBnZXREZWNpbWFsTnVtYmVyIH0gZnJvbSBcIi4vY29yZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1udW1lcmljLWlucHV0XCJcblxuZXhwb3J0IGludGVyZmFjZSBJTnVtZXJpY0lucHV0UHJvcHNcbiAgZXh0ZW5kcyBPbWl0PElJbnB1dFByb3BzLCBcImRlZmF1bHRWYWx1ZVwiIHwgXCJvbkNoYW5nZVwiIHwgXCJ2YWx1ZVwiPiB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog6buY6K6k55qE5Yid5aeL5YC8IC0g5YaF6YOo6amx5YqoXG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBudW1iZXIgfCBudWxsXG4gIC8qKlxuICAgKiDorr7nva7mnIDlpKflgLxcbiAgICovXG4gIG1heD86IG51bWJlclxuICAvKipcbiAgICog6K6+572u5pyA5bCP5YC8XG4gICAqL1xuICBtaW4/OiBudW1iZXJcbiAgLyoqXG4gICAqIOWAvOaUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86ICh2YWx1ZT86IG51bWJlcikgPT4gdm9pZFxuICAvKipcbiAgICog6K6+572u57K+5bqmXG4gICAqL1xuICBwcmVjaXNpb24/OiBudW1iZXJcbiAgLyoqXG4gICAqIOiuvue9ruWinuWKoOeahOW5heW6plxuICAgKi9cbiAgc3RlcD86IG51bWJlclxuICAvKipcbiAgICog5YC8IC0g5aSW6YOo5o6n5Yi2XG4gICAqL1xuICB2YWx1ZT86IG51bWJlciB8IG51bGxcbn1cblxuLyoqXG4gKiDmlbDlrZfovpPlhaXmoYbjgIJcbiAqL1xuY29uc3QgTnVtZXJpY0lucHV0OiBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICBJTnVtZXJpY0lucHV0UHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT5cbj4gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBtYXgsXG4gICAgICBtaW4sXG4gICAgICBvbkJsdXIsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uRm9jdXMsXG4gICAgICBvbktleURvd24sXG4gICAgICBwcmVjaXNpb246IHByZWNpc2lvblByb3AsXG4gICAgICBzdGVwLFxuICAgICAgdmFsdWU6IHZhbHVlUHJvcCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJTnVtZXJpY0lucHV0UHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IHByZWNpc2lvbiA9XG4gICAgICBwcmVjaXNpb25Qcm9wID09PSB1bmRlZmluZWQgPyBnZXREZWNpbWFsTnVtYmVyKHN0ZXAgfHwgMSkgOiBwcmVjaXNpb25Qcm9wXG5cbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPG51bWJlciB8IHN0cmluZz4oKCkgPT4ge1xuICAgICAgbGV0IHZhbHVlU3RhdGU6IFJlYWN0LlJlYWN0VGV4dCB8IG51bGwgfCB1bmRlZmluZWQgPVxuICAgICAgICB2YWx1ZVByb3AgIT09IG51bGwgPyB2YWx1ZVByb3AgOiBkZWZhdWx0VmFsdWVcbiAgICAgIGlmICh0eXBlb2YgdmFsdWVTdGF0ZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICB2YWx1ZVN0YXRlID0gXCJcIlxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlU3RhdGVcbiAgICB9KVxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXG4gICAgICB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgPyB2YWx1ZS50b0ZpeGVkKHByZWNpc2lvbikgOiBcIlwiXG4gICAgKVxuXG4gICAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICAgIGlmICh2YWx1ZVByb3AgIT09IG51bGwgJiYgdmFsdWUgIT09IHZhbHVlUHJvcCkge1xuICAgICAgc2V0VmFsdWUodHlwZW9mIHZhbHVlUHJvcCA9PT0gXCJudW1iZXJcIiA/IHZhbHVlUHJvcCA6IFwiXCIpXG4gICAgICBzZXRJbnB1dFZhbHVlKFxuICAgICAgICB0eXBlb2YgdmFsdWVQcm9wID09PSBcIm51bWJlclwiID8gdmFsdWVQcm9wLnRvRml4ZWQocHJlY2lzaW9uKSA6IFwiXCJcbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICAgIGN1cnJlbnQ6IGlucHV0UmVmLmN1cnJlbnQsXG4gICAgfSkpXG5cbiAgICBjb25zdCBoYW5kbGVWYWx1ZVN0ZXBDaGFuZ2UgPSAoXG4gICAgICB0eXBlOiBcInBsdXNcIiB8IFwibWludXNcIixcbiAgICAgIHN0cDogbnVtYmVyLFxuICAgICAgaW5wdXRWYWw/OiBzdHJpbmdcbiAgICApID0+IHtcbiAgICAgIC8vIOWwhiBpbnB1dFZhbCDovazmiJDmlbDlrZfvvIzlpoLmnpzmmK/nqbrlrZfnrKbkuLLvvIzliJnorqTkuLrku44gMCDlvIDlp4vliqDlh49cbiAgICAgIGNvbnN0IHZhbCA9IHN0cmluZ1RvTnVtYmVyKGlucHV0VmFsKVxuICAgICAgY29uc3QgZGVjaW1hbCA9IGdldERlY2ltYWxOdW1iZXIoc3RwKVxuICAgICAgaWYgKHR5cGUgPT09IFwicGx1c1wiKSB7XG4gICAgICAgIHJldHVybiAodmFsICogMTAgKiogZGVjaW1hbCArIHN0cCAqIDEwICoqIGRlY2ltYWwpIC8gMTAgKiogZGVjaW1hbFxuICAgICAgfVxuICAgICAgcmV0dXJuICh2YWwgKiAxMCAqKiBkZWNpbWFsIC0gc3RwICogMTAgKiogZGVjaW1hbCkgLyAxMCAqKiBkZWNpbWFsXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAodHlwZTogXCJwbHVzXCIgfCBcIm1pbnVzXCIpID0+IHtcbiAgICAgIGxldCB2YWx1ZVN0ZXBDaGFuZ2VkID0gaGFuZGxlVmFsdWVTdGVwQ2hhbmdlKHR5cGUsIHN0ZXAgfHwgMSwgaW5wdXRWYWx1ZSlcbiAgICAgIGlmIChtaW4gIT09IHVuZGVmaW5lZCAmJiB2YWx1ZVN0ZXBDaGFuZ2VkIDwgbWluKSB7XG4gICAgICAgIHZhbHVlU3RlcENoYW5nZWQgPSBtaW5cbiAgICAgIH0gZWxzZSBpZiAobWF4ICE9PSB1bmRlZmluZWQgJiYgdmFsdWVTdGVwQ2hhbmdlZCA+IG1heCkge1xuICAgICAgICB2YWx1ZVN0ZXBDaGFuZ2VkID0gbWF4XG4gICAgICB9XG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHNldFZhbHVlKHZhbHVlU3RlcENoYW5nZWQpXG4gICAgICAgIHNldElucHV0VmFsdWUodmFsdWVTdGVwQ2hhbmdlZC50b0ZpeGVkKHByZWNpc2lvbikpXG4gICAgICB9XG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UodmFsdWVTdGVwQ2hhbmdlZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9ICh7XG4gICAgICB0YXJnZXQ6IHsgdmFsdWU6IHZhbCB9LFxuICAgIH06IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBpZiAoaXNMZWdhbChzdGVwIHx8IDEsIHZhbCwgbWluLCBtYXgpKSB7XG4gICAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICBzZXRWYWx1ZShzdHJpbmdUb051bWJlcih2YWwpKVxuICAgICAgICB9XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKHN0cmluZ1RvTnVtYmVyKHZhbCkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRCbHVyID0gKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdGFyZ2V0OiB7IHZhbHVlOiB2YWwgfSxcbiAgICAgIH0gPSBlXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHNldElucHV0VmFsdWUoXCJcIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZhbHVlRml4ZWQgPSB2YWx1ZS50b0ZpeGVkKHByZWNpc2lvbilcbiAgICAgICAgaWYgKCFpc0xlZ2FsKHN0ZXAgfHwgMSwgdmFsLCBtaW4sIG1heCkgfHwgdmFsICE9PSB2YWx1ZUZpeGVkKSB7XG4gICAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZUZpeGVkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAob25CbHVyKSB7XG4gICAgICAgIG9uQmx1cihlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChcbiAgICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+LFxuICAgICAgdHlwZTogXCJwbHVzXCIgfCBcIm1pbnVzXCJcbiAgICApID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaGFuZGxlQnV0dG9uQ2xpY2sodHlwZSlcbiAgICAgIGlmIChcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudCAmJlxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBpbnB1dFJlZi5jdXJyZW50LmlucHV0XG4gICAgICApIHtcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5pbnB1dC5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBjb25zdCB7IGtleUNvZGUgfSA9IGVcbiAgICAgIGlmIChrZXlDb2RlID09PSAzOCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBoYW5kbGVCdXR0b25DbGljayhcInBsdXNcIilcbiAgICAgIH1cbiAgICAgIGlmIChrZXlDb2RlID09PSA0MCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBoYW5kbGVCdXR0b25DbGljayhcIm1pbnVzXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9YCwge1xuICAgICAgICAgIFtgJHtwcmVmaXh9LWRpc2FibGVkYF06IGRpc2FibGVkLFxuICAgICAgICB9KX1cbiAgICAgICAgY2xlYXZlT3B0aW9ucz17e1xuICAgICAgICAgIG51bWVyYWw6IHRydWUsXG4gICAgICAgICAgbnVtZXJhbERlY2ltYWxTY2FsZTogcHJlY2lzaW9uLFxuICAgICAgICAgIGRlbGltaXRlcjogXCJcIixcbiAgICAgICAgfX1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgIG9uQmx1cj17aGFuZGxlSW5wdXRCbHVyfVxuICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICByaWdodEVsZW1lbnQ9e1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWJ1dHRvbnNgfT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWJ1dHRvbmB9XG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+XG4gICAgICAgICAgICAgICAgaGFuZGxlTW91c2VEb3duKGUsIFwicGx1c1wiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb24gaWNvbj1cImFycm93LXVwXCIgaW50ZXJhY3RpdmU9eyFkaXNhYmxlZH0gc2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWJ1dHRvbmB9XG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+XG4gICAgICAgICAgICAgICAgaGFuZGxlTW91c2VEb3duKGUsIFwibWludXNcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uIGljb249XCJhcnJvdy1kb3duXCIgaW50ZXJhY3RpdmU9eyFkaXNhYmxlZH0gc2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG4pXG5cbk51bWVyaWNJbnB1dC5kaXNwbGF5TmFtZSA9IFwiTnVtZXJpY0lucHV0XCJcblxuTnVtZXJpY0lucHV0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOm7mOiupOeahOWIneWni+WAvCAtIOWGhemDqOmpseWKqFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog6K6+572u5pyA5aSn5YC8XG4gICAqL1xuICBtYXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDorr7nva7mnIDlsI/lgLxcbiAgICovXG4gIG1pbjogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOWAvOaUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDorr7nva7nsr7luqZcbiAgICovXG4gIHByZWNpc2lvbjogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOWinuWHj+eahOW5heW6plxuICAgKi9cbiAgc3RlcDogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOWAvCAtIOWklumDqOaOp+WItlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG59XG5cbk51bWVyaWNJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgbWF4OiB1bmRlZmluZWQsXG4gIG1pbjogdW5kZWZpbmVkLFxuICBvbkNoYW5nZTogKCkgPT4ge30sXG4gIHByZWNpc2lvbjogdW5kZWZpbmVkLFxuICBzdGVwOiAxLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtZXJpY0lucHV0XG4iXX0=