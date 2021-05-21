function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef, useContext, useImperativeHandle, useRef, useState, useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ConfigContext, getComputedSize } from "../config-provider";
import Icon from "../icon";
import Input from "../input";
import Popover from "../popover";
import TimeSelect from "./TimeSelect";
import "./style";
import { extractHourAndMinuteFromTime, isLegalTimeString, isTimeAfter, isTimeBefore } from "./core";
var prefix = "adui-time";

var noop = function noop() {};

var TimePicker = forwardRef(function (_ref, ref) {
  var className = _ref.className,
      closeOnSelect = _ref.closeOnSelect,
      defaultValue = _ref.defaultValue,
      disabled = _ref.disabled,
      disabledHours = _ref.disabledHours,
      disabledMinutes = _ref.disabledMinutes,
      intent = _ref.intent,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      onChange = _ref.onChange,
      onlyHour = _ref.onlyHour,
      placeholder = _ref.placeholder,
      popoverProps = _ref.popoverProps,
      sizeProp = _ref.size,
      value = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["className", "closeOnSelect", "defaultValue", "disabled", "disabledHours", "disabledMinutes", "intent", "maxTime", "minTime", "onChange", "onlyHour", "placeholder", "popoverProps", "size", "value"]);

  var getInitialState = function getInitialState() {
    var valueState = value !== null ? value : defaultValue;

    var _extractHourAndMinute = extractHourAndMinuteFromTime(valueState),
        hour = _extractHourAndMinute.hour,
        minute = _extractHourAndMinute.minute;

    return {
      hour: hour,
      inputValue: valueState || "",
      minute: onlyHour ? "00" : minute,
      prevValueProp: valueState || "",
      visible: false
    };
  };

  var initialState = useMemo(getInitialState, []);

  var _useState = useState(initialState.hour),
      _useState2 = _slicedToArray(_useState, 2),
      hour = _useState2[0],
      setHour = _useState2[1];

  var _useState3 = useState(initialState.inputValue),
      _useState4 = _slicedToArray(_useState3, 2),
      inputValue = _useState4[0],
      setInputValue = _useState4[1];

  var _useState5 = useState(initialState.minute),
      _useState6 = _slicedToArray(_useState5, 2),
      minute = _useState6[0],
      setMinute = _useState6[1];

  var _useState7 = useState(initialState.prevValueProp),
      _useState8 = _slicedToArray(_useState7, 2),
      prevValueProp = _useState8[0],
      setPrevValueProp = _useState8[1];

  var _useState9 = useState(initialState.visible),
      _useState10 = _slicedToArray(_useState9, 2),
      visible = _useState10[0],
      setVisible = _useState10[1];

  if (value !== null && prevValueProp !== value) {
    var _extractHourAndMinute2 = extractHourAndMinuteFromTime(value),
        newHour = _extractHourAndMinute2.hour,
        newMinute = _extractHourAndMinute2.minute;

    setHour(newHour);
    setInputValue(value || "");
    setMinute(onlyHour ? "00" : newMinute);
    setPrevValueProp(value || "");
  }

  var inputRef = useRef(null);

  var _useContext = useContext(ConfigContext),
      sizeContext = _useContext.size;

  var size = getComputedSize(sizeProp, sizeContext);

  var handleClick = function handleClick(valueNew, type) {
    var valueProp = value;
    var inputValueNow = type === "hour" ? "".concat(valueNew, ":").concat(minute || "") : "".concat(hour || "", ":").concat(valueNew);

    if (maxTime && isTimeAfter(inputValueNow, maxTime)) {
      inputValueNow = maxTime;
    } else if (minTime && isTimeBefore(inputValueNow, minTime)) {
      inputValueNow = minTime;
    }

    if (valueProp === null) {
      var valueFinal = _objectSpread({
        inputValueNow: inputValueNow
      }, extractHourAndMinuteFromTime(inputValueNow));

      setHour(valueFinal.hour);
      setMinute(valueFinal.minute);
      setInputValue(valueFinal.inputValueNow);
    }

    if (isLegalTimeString(inputValue, onlyHour)) {
      if (onChange) {
        onChange(inputValueNow);
      }

      if (closeOnSelect) {
        setTimeout(function () {
          setVisible(false);
        }, 120);
      }
    }
  };

  var handleVisibleChange = function handleVisibleChange(visibleNew) {
    var inputElement = inputRef.current.input;

    if (disabled) {
      return;
    }

    setTimeout(function () {
      var _document = document,
          activeElement = _document.activeElement;

      if (visibleNew || !visibleNew && inputElement !== activeElement) {
        var newInputValue = hour && minute ? "".concat(hour, ":").concat(minute) : "";

        if (!visibleNew && inputValue !== newInputValue) {
          setInputValue(newInputValue);
        }

        setVisible(visibleNew);
      }
    }, 0);
  };

  var handleInputChange = function handleInputChange(_ref2) {
    var inputValueNew = _ref2.target.value;
    setInputValue(inputValueNew);

    if (inputValueNew === "" || isLegalTimeString(inputValueNew, onlyHour) && !isTimeAfter(inputValueNew, maxTime) && !isTimeBefore(inputValueNew, minTime)) {
      var _extractHourAndMinute3 = extractHourAndMinuteFromTime(inputValueNew),
          hourNew = _extractHourAndMinute3.hour,
          minuteNew = _extractHourAndMinute3.minute;

      if (!(disabledHours && disabledHours(hourNew)) && !(disabledMinutes && disabledMinutes(minuteNew))) {
        if (onChange) {
          onChange(inputValueNew);
        }

        if (value === null) {
          setHour(hourNew);
          setMinute(onlyHour ? "00" : minuteNew);
        }
      }
    }
  };

  var handleInputFocus = function handleInputFocus() {
    if (!visible) {
      setVisible(true);
    }
  };

  var handleInputKeyDown = function handleInputKeyDown(_ref3) {
    var keyCode = _ref3.keyCode;
    var keys = [9, 13, 27];

    if (keys.includes(keyCode)) {
      setVisible(false);
      inputRef.current.input.blur();
    }
  };

  useImperativeHandle(ref, function () {
    return {
      input: inputRef.current,
      handleVisibleChange: handleVisibleChange
    };
  });
  var classSet = classNames(className, "".concat(prefix, "-input"), "".concat(prefix, "-").concat(size));
  return React.createElement(Popover, _extends({
    arrowed: false,
    onVisibleChange: handleVisibleChange,
    popup: React.createElement("div", null, React.createElement(TimeSelect, {
      onChange: handleClick,
      currentHour: hour ? parseInt(hour, 10) : null,
      disabledHours: disabledHours,
      maxTime: maxTime,
      minTime: minTime,
      onlyHour: onlyHour,
      selectedValue: hour,
      size: size,
      type: "hour"
    }), !onlyHour && React.createElement(TimeSelect, {
      disabledMinutes: disabledMinutes,
      onChange: handleClick,
      currentHour: hour ? parseInt(hour, 10) : null,
      maxTime: maxTime,
      minTime: minTime,
      selectedValue: minute,
      size: size,
      type: "minute"
    })),
    trigger: "click",
    visible: visible
  }, popoverProps), React.createElement(Input, _extends({
    className: classSet,
    cleaveOptions: {
      blocks: [2, 2],
      delimiter: ":"
    },
    disabled: disabled,
    rightElement: React.createElement(Icon, {
      icon: "time-outlined"
    }),
    size: size,
    value: inputValue,
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    onKeyDown: handleInputKeyDown,
    ref: inputRef
  }, otherProps)));
});
TimePicker.displayName = "TimePicker";
TimePicker.propTypes = {
  className: PropTypes.string,
  closeOnSelect: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  disabledHours: PropTypes.func,
  disabledMinutes: PropTypes.func,
  intent: PropTypes.oneOf(["normal", "primary", "success", "warning", "danger"]),
  maxTime: PropTypes.string,
  minTime: PropTypes.string,
  onChange: PropTypes.func,
  onlyHour: PropTypes.bool,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  value: PropTypes.string
};
TimePicker.defaultProps = {
  className: "",
  closeOnSelect: false,
  defaultValue: null,
  disabled: false,
  disabledHours: noop,
  disabledMinutes: noop,
  intent: "normal",
  maxTime: "24:00",
  minTime: null,
  onChange: noop,
  onlyHour: false,
  placeholder: "请选择",
  size: "small",
  value: null
};
export default TimePicker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGltZS1waWNrZXIvVGltZVBpY2tlci50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJmb3J3YXJkUmVmIiwidXNlQ29udGV4dCIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiQ29uZmlnQ29udGV4dCIsImdldENvbXB1dGVkU2l6ZSIsIkljb24iLCJJbnB1dCIsIlBvcG92ZXIiLCJUaW1lU2VsZWN0IiwiZXh0cmFjdEhvdXJBbmRNaW51dGVGcm9tVGltZSIsImlzTGVnYWxUaW1lU3RyaW5nIiwiaXNUaW1lQWZ0ZXIiLCJpc1RpbWVCZWZvcmUiLCJwcmVmaXgiLCJub29wIiwiVGltZVBpY2tlciIsInJlZiIsImNsYXNzTmFtZSIsImNsb3NlT25TZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsImRpc2FibGVkSG91cnMiLCJkaXNhYmxlZE1pbnV0ZXMiLCJpbnRlbnQiLCJtYXhUaW1lIiwibWluVGltZSIsIm9uQ2hhbmdlIiwib25seUhvdXIiLCJwbGFjZWhvbGRlciIsInBvcG92ZXJQcm9wcyIsInNpemVQcm9wIiwic2l6ZSIsInZhbHVlIiwib3RoZXJQcm9wcyIsImdldEluaXRpYWxTdGF0ZSIsInZhbHVlU3RhdGUiLCJob3VyIiwibWludXRlIiwiaW5wdXRWYWx1ZSIsInByZXZWYWx1ZVByb3AiLCJ2aXNpYmxlIiwiaW5pdGlhbFN0YXRlIiwic2V0SG91ciIsInNldElucHV0VmFsdWUiLCJzZXRNaW51dGUiLCJzZXRQcmV2VmFsdWVQcm9wIiwic2V0VmlzaWJsZSIsIm5ld0hvdXIiLCJuZXdNaW51dGUiLCJpbnB1dFJlZiIsInNpemVDb250ZXh0IiwiaGFuZGxlQ2xpY2siLCJ2YWx1ZU5ldyIsInR5cGUiLCJ2YWx1ZVByb3AiLCJpbnB1dFZhbHVlTm93IiwidmFsdWVGaW5hbCIsInNldFRpbWVvdXQiLCJoYW5kbGVWaXNpYmxlQ2hhbmdlIiwidmlzaWJsZU5ldyIsImlucHV0RWxlbWVudCIsImN1cnJlbnQiLCJpbnB1dCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsIm5ld0lucHV0VmFsdWUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImlucHV0VmFsdWVOZXciLCJ0YXJnZXQiLCJob3VyTmV3IiwibWludXRlTmV3IiwiaGFuZGxlSW5wdXRGb2N1cyIsImhhbmRsZUlucHV0S2V5RG93biIsImtleUNvZGUiLCJrZXlzIiwiaW5jbHVkZXMiLCJibHVyIiwiY2xhc3NTZXQiLCJwYXJzZUludCIsImJsb2NrcyIsImRlbGltaXRlciIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUNFQyxVQURGLEVBRUVDLFVBRkYsRUFHRUMsbUJBSEYsRUFJRUMsTUFKRixFQUtFQyxRQUxGLEVBTUVDLE9BTkYsUUFPTyxPQVBQO0FBUUEsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxTQUFTQyxhQUFULEVBQXdCQyxlQUF4QixRQUErQyxvQkFBL0M7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFNBQWpCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixVQUFsQjtBQUNBLE9BQU9DLE9BQVAsTUFBdUMsWUFBdkM7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLGNBQXZCO0FBQ0EsT0FBTyxTQUFQO0FBQ0EsU0FDRUMsNEJBREYsRUFFRUMsaUJBRkYsRUFHRUMsV0FIRixFQUlFQyxZQUpGLFFBS08sUUFMUDtBQU9BLElBQU1DLE1BQU0sR0FBRyxXQUFmOztBQUNBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUE2RUEsSUFBTUMsVUFFTCxHQUFHcEIsVUFBVSxDQUNaLGdCQW1CRXFCLEdBbkJGLEVB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ImltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VDb250ZXh0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxuICB1c2VNZW1vLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRcIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBUaW1lU2VsZWN0IGZyb20gXCIuL1RpbWVTZWxlY3RcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5pbXBvcnQge1xuICBleHRyYWN0SG91ckFuZE1pbnV0ZUZyb21UaW1lLFxuICBpc0xlZ2FsVGltZVN0cmluZyxcbiAgaXNUaW1lQWZ0ZXIsXG4gIGlzVGltZUJlZm9yZSxcbn0gZnJvbSBcIi4vY29yZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10aW1lXCJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIElUaW1lUGlja2VyUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKblnKjpgInmi6nlkI7vvIzmtojlpLEgUG9wb3ZlclxuICAgKi9cbiAgY2xvc2VPblNlbGVjdD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8jOm7mOiupOmAieaLqeaXtumXtFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlPzogbnVsbCB8IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOemgeatoumAieaLqeeahOWwj+aXtlxuICAgKi9cbiAgZGlzYWJsZWRIb3Vycz86IChob3VyPzogc3RyaW5nIHwgbnVsbCkgPT4gYm9vbGVhbiB8IHZvaWRcbiAgLyoqXG4gICAqIOemgeatoumAieaLqeeahOWIhumSn1xuICAgKi9cbiAgZGlzYWJsZWRNaW51dGVzPzogKG1pbnV0ZT86IHN0cmluZyB8IG51bGwpID0+IGJvb2xlYW4gfCB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7ovpPlhaXmoYbnsbvlnotcbiAgICovXG4gIGludGVudD86IFwibm9ybWFsXCIgfCBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJ3YXJuaW5nXCIgfCBcImRhbmdlclwiXG4gIC8qKlxuICAgKiDlj6/pgInml7bpl7TnmoTmnIDlpKflgLxcbiAgICovXG4gIG1heFRpbWU/OiBzdHJpbmcgfCBudWxsXG4gIC8qKlxuICAgKiDlj6/pgInml7bpl7TnmoTmnIDlsI/lgLxcbiAgICovXG4gIG1pblRpbWU/OiBzdHJpbmcgfCBudWxsXG4gIC8qKlxuICAgKiDml7bpl7TmlLnlj5jnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICAvKipcbiAgICog5Yik5pat5piv5ZCm5piv5pW05pWwXG4gICAqL1xuICBvbmx5SG91cj86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWNoOS9jeWtl+esplxuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOS8oOWFpSBQb3BvdmVyIOeahCBwcm9wc1xuICAgKi9cbiAgcG9wb3ZlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrlvZPliY3ml7bpl7RcbiAgICovXG4gIHZhbHVlPzogbnVsbCB8IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUaW1lUGlja2VyU3RhdGUge1xuICBob3VyOiBzdHJpbmcgfCBudWxsXG4gIG1pbnV0ZTogc3RyaW5nIHwgbnVsbFxuICBpbnB1dFZhbHVlPzogc3RyaW5nIHwgbnVsbFxuICB2aXNpYmxlOiBib29sZWFuXG4gIHByZXZWYWx1ZVByb3A6IG51bGwgfCBzdHJpbmdcbn1cblxuLyoqXG4gKiDml7bpl7TpgInmi6nlmajnlKjkuo7kuobop6PlvZPliY3lt7LpgInml7bpl7TvvIzpgInmi6nmiJbovpPlhaXpnIDopoHnmoTml7bpl7TjgIHml7bpl7TojIPlm7TnrYnjgIJcbiAqL1xuY29uc3QgVGltZVBpY2tlcjogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgSVRpbWVQaWNrZXJQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55PlxuPiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjbG9zZU9uU2VsZWN0LFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlZEhvdXJzLFxuICAgICAgZGlzYWJsZWRNaW51dGVzLFxuICAgICAgaW50ZW50LFxuICAgICAgbWF4VGltZSxcbiAgICAgIG1pblRpbWUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9ubHlIb3VyLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBwb3BvdmVyUHJvcHMsXG4gICAgICBzaXplOiBzaXplUHJvcCxcbiAgICAgIHZhbHVlLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElUaW1lUGlja2VyUHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IGdldEluaXRpYWxTdGF0ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlU3RhdGUgPSB2YWx1ZSAhPT0gbnVsbCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlXG4gICAgICBjb25zdCB7IGhvdXIsIG1pbnV0ZSB9ID0gZXh0cmFjdEhvdXJBbmRNaW51dGVGcm9tVGltZSh2YWx1ZVN0YXRlKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaG91cixcbiAgICAgICAgaW5wdXRWYWx1ZTogdmFsdWVTdGF0ZSB8fCBcIlwiLFxuICAgICAgICBtaW51dGU6IG9ubHlIb3VyID8gXCIwMFwiIDogbWludXRlLFxuICAgICAgICBwcmV2VmFsdWVQcm9wOiB2YWx1ZVN0YXRlIHx8IFwiXCIsXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB1c2VNZW1vKGdldEluaXRpYWxTdGF0ZSwgW10pXG4gICAgY29uc3QgW2hvdXIsIHNldEhvdXJdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlLmhvdXIpXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlLmlucHV0VmFsdWUpXG4gICAgY29uc3QgW21pbnV0ZSwgc2V0TWludXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZS5taW51dGUpXG4gICAgY29uc3QgW3ByZXZWYWx1ZVByb3AsIHNldFByZXZWYWx1ZVByb3BdID0gdXNlU3RhdGUoXG4gICAgICBpbml0aWFsU3RhdGUucHJldlZhbHVlUHJvcFxuICAgIClcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUudmlzaWJsZSlcblxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiBwcmV2VmFsdWVQcm9wICE9PSB2YWx1ZSkge1xuICAgICAgY29uc3QgeyBob3VyOiBuZXdIb3VyLCBtaW51dGU6IG5ld01pbnV0ZSB9ID0gZXh0cmFjdEhvdXJBbmRNaW51dGVGcm9tVGltZShcbiAgICAgICAgdmFsdWVcbiAgICAgIClcbiAgICAgIHNldEhvdXIobmV3SG91cilcbiAgICAgIHNldElucHV0VmFsdWUodmFsdWUgfHwgXCJcIilcbiAgICAgIHNldE1pbnV0ZShvbmx5SG91ciA/IFwiMDBcIiA6IG5ld01pbnV0ZSlcbiAgICAgIHNldFByZXZWYWx1ZVByb3AodmFsdWUgfHwgXCJcIilcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG5cbiAgICBjb25zdCB7IHNpemU6IHNpemVDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG5cbiAgICBjb25zdCBzaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemVQcm9wLCBzaXplQ29udGV4dClcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKHZhbHVlTmV3OiBzdHJpbmcsIHR5cGU6IFwiaG91clwiIHwgXCJtaW51dGVcIikgPT4ge1xuICAgICAgY29uc3QgdmFsdWVQcm9wID0gdmFsdWVcblxuICAgICAgbGV0IGlucHV0VmFsdWVOb3cgPVxuICAgICAgICB0eXBlID09PSBcImhvdXJcIlxuICAgICAgICAgID8gYCR7dmFsdWVOZXd9OiR7bWludXRlIHx8IFwiXCJ9YFxuICAgICAgICAgIDogYCR7aG91ciB8fCBcIlwifToke3ZhbHVlTmV3fWBcblxuICAgICAgaWYgKG1heFRpbWUgJiYgaXNUaW1lQWZ0ZXIoaW5wdXRWYWx1ZU5vdywgbWF4VGltZSkpIHtcbiAgICAgICAgaW5wdXRWYWx1ZU5vdyA9IG1heFRpbWVcbiAgICAgIH0gZWxzZSBpZiAobWluVGltZSAmJiBpc1RpbWVCZWZvcmUoaW5wdXRWYWx1ZU5vdywgbWluVGltZSkpIHtcbiAgICAgICAgaW5wdXRWYWx1ZU5vdyA9IG1pblRpbWVcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFsdWVGaW5hbCA9IHtcbiAgICAgICAgICBpbnB1dFZhbHVlTm93LFxuICAgICAgICAgIC4uLmV4dHJhY3RIb3VyQW5kTWludXRlRnJvbVRpbWUoaW5wdXRWYWx1ZU5vdyksXG4gICAgICAgIH1cbiAgICAgICAgc2V0SG91cih2YWx1ZUZpbmFsLmhvdXIpXG4gICAgICAgIHNldE1pbnV0ZSh2YWx1ZUZpbmFsLm1pbnV0ZSlcbiAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZUZpbmFsLmlucHV0VmFsdWVOb3cpXG4gICAgICB9XG4gICAgICBpZiAoaXNMZWdhbFRpbWVTdHJpbmcoaW5wdXRWYWx1ZSwgb25seUhvdXIpKSB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGlucHV0VmFsdWVOb3cpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFZpc2libGUoZmFsc2UpXG4gICAgICAgICAgfSwgMTIwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVmlzaWJsZUNoYW5nZSA9ICh2aXNpYmxlTmV3OiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zdCB7IGlucHV0OiBpbnB1dEVsZW1lbnQgfSA9IGlucHV0UmVmLmN1cnJlbnRcbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50XG4gICAgICAgIGlmICh2aXNpYmxlTmV3IHx8ICghdmlzaWJsZU5ldyAmJiBpbnB1dEVsZW1lbnQgIT09IGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgY29uc3QgbmV3SW5wdXRWYWx1ZSA9IGhvdXIgJiYgbWludXRlID8gYCR7aG91cn06JHttaW51dGV9YCA6IFwiXCJcbiAgICAgICAgICBpZiAoIXZpc2libGVOZXcgJiYgaW5wdXRWYWx1ZSAhPT0gbmV3SW5wdXRWYWx1ZSkge1xuICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShuZXdJbnB1dFZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRWaXNpYmxlKHZpc2libGVOZXcpXG4gICAgICAgIH1cbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoe1xuICAgICAgdGFyZ2V0OiB7IHZhbHVlOiBpbnB1dFZhbHVlTmV3IH0sXG4gICAgfTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIHNldElucHV0VmFsdWUoaW5wdXRWYWx1ZU5ldylcbiAgICAgIGlmIChcbiAgICAgICAgaW5wdXRWYWx1ZU5ldyA9PT0gXCJcIiB8fFxuICAgICAgICAoaXNMZWdhbFRpbWVTdHJpbmcoaW5wdXRWYWx1ZU5ldywgb25seUhvdXIpICYmXG4gICAgICAgICAgIWlzVGltZUFmdGVyKGlucHV0VmFsdWVOZXcsIG1heFRpbWUpICYmXG4gICAgICAgICAgIWlzVGltZUJlZm9yZShpbnB1dFZhbHVlTmV3LCBtaW5UaW1lKSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgaG91cjogaG91ck5ldyxcbiAgICAgICAgICBtaW51dGU6IG1pbnV0ZU5ldyxcbiAgICAgICAgfSA9IGV4dHJhY3RIb3VyQW5kTWludXRlRnJvbVRpbWUoaW5wdXRWYWx1ZU5ldylcbiAgICAgICAgaWYgKFxuICAgICAgICAgICEoZGlzYWJsZWRIb3VycyAmJiBkaXNhYmxlZEhvdXJzKGhvdXJOZXcpKSAmJlxuICAgICAgICAgICEoZGlzYWJsZWRNaW51dGVzICYmIGRpc2FibGVkTWludXRlcyhtaW51dGVOZXcpKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKGlucHV0VmFsdWVOZXcpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0SG91cihob3VyTmV3KVxuICAgICAgICAgICAgc2V0TWludXRlKG9ubHlIb3VyID8gXCIwMFwiIDogbWludXRlTmV3KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Rm9jdXMgPSAoKSA9PiB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0S2V5RG93biA9ICh7XG4gICAgICBrZXlDb2RlLFxuICAgIH06IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IGtleXMgPSBbOSwgMTMsIDI3XVxuICAgICAgaWYgKGtleXMuaW5jbHVkZXMoa2V5Q29kZSkpIHtcbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5pbnB1dC5ibHVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICAgIGlucHV0OiBpbnB1dFJlZi5jdXJyZW50LFxuICAgICAgaGFuZGxlVmlzaWJsZUNoYW5nZSxcbiAgICB9KSlcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0taW5wdXRgLFxuICAgICAgYCR7cHJlZml4fS0ke3NpemV9YFxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wb3ZlclxuICAgICAgICBhcnJvd2VkPXtmYWxzZX1cbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXtoYW5kbGVWaXNpYmxlQ2hhbmdlfVxuICAgICAgICBwb3B1cD17XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUaW1lU2VsZWN0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgY3VycmVudEhvdXI9e2hvdXIgPyBwYXJzZUludChob3VyLCAxMCkgOiBudWxsfVxuICAgICAgICAgICAgICBkaXNhYmxlZEhvdXJzPXtkaXNhYmxlZEhvdXJzfVxuICAgICAgICAgICAgICBtYXhUaW1lPXttYXhUaW1lfVxuICAgICAgICAgICAgICBtaW5UaW1lPXttaW5UaW1lfVxuICAgICAgICAgICAgICBvbmx5SG91cj17b25seUhvdXJ9XG4gICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWU9e2hvdXJ9XG4gICAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICAgIHR5cGU9XCJob3VyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7IW9ubHlIb3VyICYmIChcbiAgICAgICAgICAgICAgPFRpbWVTZWxlY3RcbiAgICAgICAgICAgICAgICBkaXNhYmxlZE1pbnV0ZXM9e2Rpc2FibGVkTWludXRlc31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgY3VycmVudEhvdXI9e2hvdXIgPyBwYXJzZUludChob3VyLCAxMCkgOiBudWxsfVxuICAgICAgICAgICAgICAgIG1heFRpbWU9e21heFRpbWV9XG4gICAgICAgICAgICAgICAgbWluVGltZT17bWluVGltZX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlPXttaW51dGV9XG4gICAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgICB0eXBlPVwibWludXRlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgey4uLnBvcG92ZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgICBjbGVhdmVPcHRpb25zPXt7XG4gICAgICAgICAgICBibG9ja3M6IFsyLCAyXSxcbiAgICAgICAgICAgIGRlbGltaXRlcjogXCI6XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgcmlnaHRFbGVtZW50PXs8SWNvbiBpY29uPVwidGltZS1vdXRsaW5lZFwiIC8+fVxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVJbnB1dEtleURvd259XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvUG9wb3Zlcj5cbiAgICApXG4gIH1cbilcblxuVGltZVBpY2tlci5kaXNwbGF5TmFtZSA9IFwiVGltZVBpY2tlclwiXG5cblRpbWVQaWNrZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKblnKjpgInmi6nlkI7vvIzmtojlpLEgUG9wb3ZlclxuICAgKi9cbiAgY2xvc2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvIzpu5jorqTpgInmi6nml7bpl7RcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog56aB5q2i6YCJ5oup55qE5bCP5pe2XG4gICAqL1xuICBkaXNhYmxlZEhvdXJzOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOemgeatoumAieaLqeeahOWIhumSn1xuICAgKi9cbiAgZGlzYWJsZWRNaW51dGVzOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9rui+k+WFpeahhuexu+Wei1xuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwibm9ybWFsXCIsXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgXSksXG4gIC8qKlxuICAgKiDlj6/pgInml7bpl7TnmoTmnIDlpKflgLxcbiAgICovXG4gIG1heFRpbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlj6/pgInml7bpl7TnmoTmnIDlsI/lgLxcbiAgICovXG4gIG1pblRpbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDml7bpl7TmlLnlj5jnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5Yik5pat5piv5ZCm5piv5pW05pWwXG4gICAqL1xuICBvbmx5SG91cjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDljaDkvY3lrZfnrKZcbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5b2T5YmN5pe26Ze0XG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuVGltZVBpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogXCJcIixcbiAgY2xvc2VPblNlbGVjdDogZmFsc2UsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBkaXNhYmxlZEhvdXJzOiBub29wLFxuICBkaXNhYmxlZE1pbnV0ZXM6IG5vb3AsXG4gIGludGVudDogXCJub3JtYWxcIixcbiAgbWF4VGltZTogXCIyNDowMFwiLFxuICBtaW5UaW1lOiBudWxsLFxuICBvbkNoYW5nZTogbm9vcCxcbiAgb25seUhvdXI6IGZhbHNlLFxuICBwbGFjZWhvbGRlcjogXCLor7fpgInmi6lcIixcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZVBpY2tlclxuIl19