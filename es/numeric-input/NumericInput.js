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

import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Input from "../input";
import Icon from "../icon";
import "./style";
import { isLegal, stringToNumber, getDecimalNumber } from "./core";
var prefix = "adui-numeric-input";
var NumericInput = forwardRef(function (_ref, ref) {
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

  var precision = precisionProp === undefined ? getDecimalNumber(step || 1) : precisionProp;

  var _useState = useState(function () {
    var valueState = valueProp !== null ? valueProp : defaultValue;

    if (typeof valueState !== "number") {
      valueState = "";
    }

    return valueState;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState(typeof value === "number" ? value.toFixed(precision) : ""),
      _useState4 = _slicedToArray(_useState3, 2),
      inputValue = _useState4[0],
      setInputValue = _useState4[1];

  if (valueProp !== null && value !== valueProp) {
    setValue(typeof valueProp === "number" ? valueProp : "");
    setInputValue(typeof valueProp === "number" ? valueProp.toFixed(precision) : "");
  }

  var inputRef = useRef(null);
  useImperativeHandle(ref, function () {
    return {
      current: inputRef.current
    };
  });

  var handleValueStepChange = function handleValueStepChange(type, stp, inputVal) {
    var val = stringToNumber(inputVal);
    var decimal = getDecimalNumber(stp);

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

    if (isLegal(step || 1, val, min, max)) {
      if (valueProp === null) {
        setValue(stringToNumber(val));
      }

      if (onChange) {
        onChange(stringToNumber(val));
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

      if (!isLegal(step || 1, val, min, max) || val !== valueFixed) {
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

  return React.createElement(Input, _extends({
    className: classNames(className, "".concat(prefix), _defineProperty({}, "".concat(prefix, "-disabled"), disabled)),
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
    rightElement: React.createElement("div", {
      className: "".concat(prefix, "-buttons")
    }, React.createElement("div", {
      className: "".concat(prefix, "-button"),
      onMouseDown: function onMouseDown(e) {
        return handleMouseDown(e, "plus");
      },
      role: "none"
    }, React.createElement(Icon, {
      icon: "arrow-up",
      interactive: !disabled,
      size: 12
    })), React.createElement("div", {
      className: "".concat(prefix, "-button"),
      onMouseDown: function onMouseDown(e) {
        return handleMouseDown(e, "minus");
      },
      role: "none"
    }, React.createElement(Icon, {
      icon: "arrow-down",
      interactive: !disabled,
      size: 12
    })))
  }, otherProps));
});
NumericInput.displayName = "NumericInput";
NumericInput.propTypes = {
  defaultValue: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
  precision: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number
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
export default NumericInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbnVtZXJpYy1pbnB1dC9OdW1lcmljSW5wdXQudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiZm9yd2FyZFJlZiIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJJbnB1dCIsIkljb24iLCJpc0xlZ2FsIiwic3RyaW5nVG9OdW1iZXIiLCJnZXREZWNpbWFsTnVtYmVyIiwicHJlZml4IiwiTnVtZXJpY0lucHV0IiwicmVmIiwiY2xhc3NOYW1lIiwiZGVmYXVsdFZhbHVlIiwiZGlzYWJsZWQiLCJtYXgiLCJtaW4iLCJvbkJsdXIiLCJvbkNoYW5nZSIsIm9uRm9jdXMiLCJvbktleURvd24iLCJwcmVjaXNpb25Qcm9wIiwicHJlY2lzaW9uIiwic3RlcCIsInZhbHVlUHJvcCIsInZhbHVlIiwib3RoZXJQcm9wcyIsInVuZGVmaW5lZCIsInZhbHVlU3RhdGUiLCJzZXRWYWx1ZSIsInRvRml4ZWQiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImlucHV0UmVmIiwiY3VycmVudCIsImhhbmRsZVZhbHVlU3RlcENoYW5nZSIsInR5cGUiLCJzdHAiLCJpbnB1dFZhbCIsInZhbCIsImRlY2ltYWwiLCJoYW5kbGVCdXR0b25DbGljayIsInZhbHVlU3RlcENoYW5nZWQiLCJoYW5kbGVJbnB1dENoYW5nZSIsInRhcmdldCIsImhhbmRsZUlucHV0Qmx1ciIsImUiLCJ2YWx1ZUZpeGVkIiwiaGFuZGxlTW91c2VEb3duIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJpbnB1dCIsImZvY3VzIiwiaGFuZGxlS2V5RG93biIsImtleUNvZGUiLCJudW1lcmFsIiwibnVtZXJhbERlY2ltYWxTY2FsZSIsImRlbGltaXRlciIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwibnVtYmVyIiwiZnVuYyIsImRlZmF1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QVMsQ0FBQzRELE1BWlE7QUFnQnZCNUMsRUFBQUEsUUFBUSxFQUFFaEIsU0FBUyxDQUFDNkQsSUFoQkc7QUFvQnZCekMsRUFBQUEsU0FBUyxFQUFFcEIsU0FBUyxDQUFDNEQsTUFwQkU7QUF3QnZCdkMsRUFBQUEsSUFBSSxFQUFFckIsU0FBUyxDQUFDNEQsTUF4Qk87QUE0QnZCckMsRUFBQUEsS0FBSyxFQUFFdkIsU0FBUyxDQUFDNEQ7QUE1Qk0sQ0FBekI7QUErQkFwRCxZQUFZLENBQUNzRCxZQUFiLEdBQTRCO0FBQzFCbkQsRUFBQUEsWUFBWSxFQUFFLElBRFk7QUFFMUJFLEVBQUFBLEdBQUcsRUFBRVksU0FGcUI7QUFHMUJYLEVBQUFBLEdBQUcsRUFBRVcsU0FIcUI7QUFJMUJULEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBSlE7QUFLMUJJLEVBQUFBLFNBQVMsRUFBRUssU0FMZTtBQU0xQkosRUFBQUEsSUFBSSxFQUFFLENBTm9CO0FBTzFCRSxFQUFBQSxLQUFLLEVBQUU7QUFQbUIsQ0FBNUI7QUFVQSxlQUFlZixZQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGUsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgSW5wdXQsIHsgSUlucHV0UHJvcHMgfSBmcm9tIFwiLi4vaW5wdXRcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5pbXBvcnQgeyBpc0xlZ2FsLCBzdHJpbmdUb051bWJlciwgZ2V0RGVjaW1hbE51bWJlciB9IGZyb20gXCIuL2NvcmVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktbnVtZXJpYy1pbnB1dFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSU51bWVyaWNJbnB1dFByb3BzXG4gIGV4dGVuZHMgT21pdDxJSW5wdXRQcm9wcywgXCJkZWZhdWx0VmFsdWVcIiB8IFwib25DaGFuZ2VcIiB8IFwidmFsdWVcIj4ge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOm7mOiupOeahOWIneWni+WAvCAtIOWGhemDqOmpseWKqFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlPzogbnVtYmVyIHwgbnVsbFxuICAvKipcbiAgICog6K6+572u5pyA5aSn5YC8XG4gICAqL1xuICBtYXg/OiBudW1iZXJcbiAgLyoqXG4gICAqIOiuvue9ruacgOWwj+WAvFxuICAgKi9cbiAgbWluPzogbnVtYmVyXG4gIC8qKlxuICAgKiDlgLzmlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAodmFsdWU/OiBudW1iZXIpID0+IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9rueyvuW6plxuICAgKi9cbiAgcHJlY2lzaW9uPzogbnVtYmVyXG4gIC8qKlxuICAgKiDorr7nva7lop7liqDnmoTluYXluqZcbiAgICovXG4gIHN0ZXA/OiBudW1iZXJcbiAgLyoqXG4gICAqIOWAvCAtIOWklumDqOaOp+WItlxuICAgKi9cbiAgdmFsdWU/OiBudW1iZXIgfCBudWxsXG59XG5cbi8qKlxuICog5pWw5a2X6L6T5YWl5qGG44CCXG4gKi9cbmNvbnN0IE51bWVyaWNJbnB1dDogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgSU51bWVyaWNJbnB1dFByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+XG4+ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgbWF4LFxuICAgICAgbWluLFxuICAgICAgb25CbHVyLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbkZvY3VzLFxuICAgICAgb25LZXlEb3duLFxuICAgICAgcHJlY2lzaW9uOiBwcmVjaXNpb25Qcm9wLFxuICAgICAgc3RlcCxcbiAgICAgIHZhbHVlOiB2YWx1ZVByb3AsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSU51bWVyaWNJbnB1dFByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBwcmVjaXNpb24gPVxuICAgICAgcHJlY2lzaW9uUHJvcCA9PT0gdW5kZWZpbmVkID8gZ2V0RGVjaW1hbE51bWJlcihzdGVwIHx8IDEpIDogcHJlY2lzaW9uUHJvcFxuXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxudW1iZXIgfCBzdHJpbmc+KCgpID0+IHtcbiAgICAgIGxldCB2YWx1ZVN0YXRlOiBSZWFjdC5SZWFjdFRleHQgfCBudWxsIHwgdW5kZWZpbmVkID1cbiAgICAgICAgdmFsdWVQcm9wICE9PSBudWxsID8gdmFsdWVQcm9wIDogZGVmYXVsdFZhbHVlXG4gICAgICBpZiAodHlwZW9mIHZhbHVlU3RhdGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgdmFsdWVTdGF0ZSA9IFwiXCJcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZVN0YXRlXG4gICAgfSlcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFxuICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiID8gdmFsdWUudG9GaXhlZChwcmVjaXNpb24pIDogXCJcIlxuICAgIClcblxuICAgIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsICYmIHZhbHVlICE9PSB2YWx1ZVByb3ApIHtcbiAgICAgIHNldFZhbHVlKHR5cGVvZiB2YWx1ZVByb3AgPT09IFwibnVtYmVyXCIgPyB2YWx1ZVByb3AgOiBcIlwiKVxuICAgICAgc2V0SW5wdXRWYWx1ZShcbiAgICAgICAgdHlwZW9mIHZhbHVlUHJvcCA9PT0gXCJudW1iZXJcIiA/IHZhbHVlUHJvcC50b0ZpeGVkKHByZWNpc2lvbikgOiBcIlwiXG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICBjdXJyZW50OiBpbnB1dFJlZi5jdXJyZW50LFxuICAgIH0pKVxuXG4gICAgY29uc3QgaGFuZGxlVmFsdWVTdGVwQ2hhbmdlID0gKFxuICAgICAgdHlwZTogXCJwbHVzXCIgfCBcIm1pbnVzXCIsXG4gICAgICBzdHA6IG51bWJlcixcbiAgICAgIGlucHV0VmFsPzogc3RyaW5nXG4gICAgKSA9PiB7XG4gICAgICAvLyDlsIYgaW5wdXRWYWwg6L2s5oiQ5pWw5a2X77yM5aaC5p6c5piv56m65a2X56ym5Liy77yM5YiZ6K6k5Li65LuOIDAg5byA5aeL5Yqg5YePXG4gICAgICBjb25zdCB2YWwgPSBzdHJpbmdUb051bWJlcihpbnB1dFZhbClcbiAgICAgIGNvbnN0IGRlY2ltYWwgPSBnZXREZWNpbWFsTnVtYmVyKHN0cClcbiAgICAgIGlmICh0eXBlID09PSBcInBsdXNcIikge1xuICAgICAgICByZXR1cm4gKHZhbCAqIDEwICoqIGRlY2ltYWwgKyBzdHAgKiAxMCAqKiBkZWNpbWFsKSAvIDEwICoqIGRlY2ltYWxcbiAgICAgIH1cbiAgICAgIHJldHVybiAodmFsICogMTAgKiogZGVjaW1hbCAtIHN0cCAqIDEwICoqIGRlY2ltYWwpIC8gMTAgKiogZGVjaW1hbFxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gKHR5cGU6IFwicGx1c1wiIHwgXCJtaW51c1wiKSA9PiB7XG4gICAgICBsZXQgdmFsdWVTdGVwQ2hhbmdlZCA9IGhhbmRsZVZhbHVlU3RlcENoYW5nZSh0eXBlLCBzdGVwIHx8IDEsIGlucHV0VmFsdWUpXG4gICAgICBpZiAobWluICE9PSB1bmRlZmluZWQgJiYgdmFsdWVTdGVwQ2hhbmdlZCA8IG1pbikge1xuICAgICAgICB2YWx1ZVN0ZXBDaGFuZ2VkID0gbWluXG4gICAgICB9IGVsc2UgaWYgKG1heCAhPT0gdW5kZWZpbmVkICYmIHZhbHVlU3RlcENoYW5nZWQgPiBtYXgpIHtcbiAgICAgICAgdmFsdWVTdGVwQ2hhbmdlZCA9IG1heFxuICAgICAgfVxuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICBzZXRWYWx1ZSh2YWx1ZVN0ZXBDaGFuZ2VkKVxuICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbHVlU3RlcENoYW5nZWQudG9GaXhlZChwcmVjaXNpb24pKVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbHVlU3RlcENoYW5nZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoe1xuICAgICAgdGFyZ2V0OiB7IHZhbHVlOiB2YWwgfSxcbiAgICB9OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgaWYgKGlzTGVnYWwoc3RlcCB8fCAxLCB2YWwsIG1pbiwgbWF4KSkge1xuICAgICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgc2V0VmFsdWUoc3RyaW5nVG9OdW1iZXIodmFsKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShzdHJpbmdUb051bWJlcih2YWwpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHNldElucHV0VmFsdWUodmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Qmx1ciA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHRhcmdldDogeyB2YWx1ZTogdmFsIH0sXG4gICAgICB9ID0gZVxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBzZXRJbnB1dFZhbHVlKFwiXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2YWx1ZUZpeGVkID0gdmFsdWUudG9GaXhlZChwcmVjaXNpb24pXG4gICAgICAgIGlmICghaXNMZWdhbChzdGVwIHx8IDEsIHZhbCwgbWluLCBtYXgpIHx8IHZhbCAhPT0gdmFsdWVGaXhlZCkge1xuICAgICAgICAgIHNldElucHV0VmFsdWUodmFsdWVGaXhlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9uQmx1cikge1xuICAgICAgICBvbkJsdXIoZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSAoXG4gICAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PixcbiAgICAgIHR5cGU6IFwicGx1c1wiIHwgXCJtaW51c1wiXG4gICAgKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGhhbmRsZUJ1dHRvbkNsaWNrKHR5cGUpXG4gICAgICBpZiAoXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQgJiZcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gaW5wdXRSZWYuY3VycmVudC5pbnB1dFxuICAgICAgKSB7XG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuaW5wdXQuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBlXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gMzgpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgaGFuZGxlQnV0dG9uQ2xpY2soXCJwbHVzXCIpXG4gICAgICB9XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gNDApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgaGFuZGxlQnV0dG9uQ2xpY2soXCJtaW51c1wiKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fWAsIHtcbiAgICAgICAgICBbYCR7cHJlZml4fS1kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgICAgICAgfSl9XG4gICAgICAgIGNsZWF2ZU9wdGlvbnM9e3tcbiAgICAgICAgICBudW1lcmFsOiB0cnVlLFxuICAgICAgICAgIG51bWVyYWxEZWNpbWFsU2NhbGU6IHByZWNpc2lvbixcbiAgICAgICAgICBkZWxpbWl0ZXI6IFwiXCIsXG4gICAgICAgIH19XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICBvbkJsdXI9e2hhbmRsZUlucHV0Qmx1cn1cbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgcmlnaHRFbGVtZW50PXtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1idXR0b25zYH0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1idXR0b25gfVxuICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlRG93bihlLCBcInBsdXNcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uIGljb249XCJhcnJvdy11cFwiIGludGVyYWN0aXZlPXshZGlzYWJsZWR9IHNpemU9ezEyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1idXR0b25gfVxuICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlRG93bihlLCBcIm1pbnVzXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvbiBpY29uPVwiYXJyb3ctZG93blwiIGludGVyYWN0aXZlPXshZGlzYWJsZWR9IHNpemU9ezEyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxuKVxuXG5OdW1lcmljSW5wdXQuZGlzcGxheU5hbWUgPSBcIk51bWVyaWNJbnB1dFwiXG5cbk51bWVyaWNJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDpu5jorqTnmoTliJ3lp4vlgLwgLSDlhoXpg6jpqbHliqhcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOiuvue9ruacgOWkp+WAvFxuICAgKi9cbiAgbWF4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog6K6+572u5pyA5bCP5YC8XG4gICAqL1xuICBtaW46IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDlgLzmlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6K6+572u57K+5bqmXG4gICAqL1xuICBwcmVjaXNpb246IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDlop7lh4/nmoTluYXluqZcbiAgICovXG4gIHN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDlgLwgLSDlpJbpg6jmjqfliLZcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxufVxuXG5OdW1lcmljSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gIG1heDogdW5kZWZpbmVkLFxuICBtaW46IHVuZGVmaW5lZCxcbiAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICBwcmVjaXNpb246IHVuZGVmaW5lZCxcbiAgc3RlcDogMSxcbiAgdmFsdWU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWVyaWNJbnB1dFxuIl19