"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _configProvider = require("../config-provider");

var _icon = _interopRequireDefault(require("../icon"));

var _input = _interopRequireDefault(require("../input"));

var _popover = _interopRequireDefault(require("../popover"));

var _TimeSelect = _interopRequireDefault(require("./TimeSelect"));

require("./style");

var _core = require("./core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var prefix = "adui-time";

var noop = function noop() {};

var TimePicker = (0, _react.forwardRef)(function (_ref, ref) {
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

    var _extractHourAndMinute = (0, _core.extractHourAndMinuteFromTime)(valueState),
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

  var initialState = (0, _react.useMemo)(getInitialState, []);

  var _useState = (0, _react.useState)(initialState.hour),
      _useState2 = _slicedToArray(_useState, 2),
      hour = _useState2[0],
      setHour = _useState2[1];

  var _useState3 = (0, _react.useState)(initialState.inputValue),
      _useState4 = _slicedToArray(_useState3, 2),
      inputValue = _useState4[0],
      setInputValue = _useState4[1];

  var _useState5 = (0, _react.useState)(initialState.minute),
      _useState6 = _slicedToArray(_useState5, 2),
      minute = _useState6[0],
      setMinute = _useState6[1];

  var _useState7 = (0, _react.useState)(initialState.prevValueProp),
      _useState8 = _slicedToArray(_useState7, 2),
      prevValueProp = _useState8[0],
      setPrevValueProp = _useState8[1];

  var _useState9 = (0, _react.useState)(initialState.visible),
      _useState10 = _slicedToArray(_useState9, 2),
      visible = _useState10[0],
      setVisible = _useState10[1];

  if (value !== null && prevValueProp !== value) {
    var _extractHourAndMinute2 = (0, _core.extractHourAndMinuteFromTime)(value),
        newHour = _extractHourAndMinute2.hour,
        newMinute = _extractHourAndMinute2.minute;

    setHour(newHour);
    setInputValue(value || "");
    setMinute(onlyHour ? "00" : newMinute);
    setPrevValueProp(value || "");
  }

  var inputRef = (0, _react.useRef)(null);

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeContext = _useContext.size;

  var size = (0, _configProvider.getComputedSize)(sizeProp, sizeContext);

  var handleClick = function handleClick(valueNew, type) {
    var valueProp = value;
    var inputValueNow = type === "hour" ? "".concat(valueNew, ":").concat(minute || "") : "".concat(hour || "", ":").concat(valueNew);

    if (maxTime && (0, _core.isTimeAfter)(inputValueNow, maxTime)) {
      inputValueNow = maxTime;
    } else if (minTime && (0, _core.isTimeBefore)(inputValueNow, minTime)) {
      inputValueNow = minTime;
    }

    if (valueProp === null) {
      var valueFinal = _objectSpread({
        inputValueNow: inputValueNow
      }, (0, _core.extractHourAndMinuteFromTime)(inputValueNow));

      setHour(valueFinal.hour);
      setMinute(valueFinal.minute);
      setInputValue(valueFinal.inputValueNow);
    }

    if ((0, _core.isLegalTimeString)(inputValue, onlyHour)) {
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

    if (inputValueNew === "" || (0, _core.isLegalTimeString)(inputValueNew, onlyHour) && !(0, _core.isTimeAfter)(inputValueNew, maxTime) && !(0, _core.isTimeBefore)(inputValueNew, minTime)) {
      var _extractHourAndMinute3 = (0, _core.extractHourAndMinuteFromTime)(inputValueNew),
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

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      input: inputRef.current,
      handleVisibleChange: handleVisibleChange
    };
  });
  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-input"), "".concat(prefix, "-").concat(size));
  return _react["default"].createElement(_popover["default"], _extends({
    arrowed: false,
    onVisibleChange: handleVisibleChange,
    popup: _react["default"].createElement("div", null, _react["default"].createElement(_TimeSelect["default"], {
      onChange: handleClick,
      currentHour: hour ? parseInt(hour, 10) : null,
      disabledHours: disabledHours,
      maxTime: maxTime,
      minTime: minTime,
      onlyHour: onlyHour,
      selectedValue: hour,
      size: size,
      type: "hour"
    }), !onlyHour && _react["default"].createElement(_TimeSelect["default"], {
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
  }, popoverProps), _react["default"].createElement(_input["default"], _extends({
    className: classSet,
    cleaveOptions: {
      blocks: [2, 2],
      delimiter: ":"
    },
    disabled: disabled,
    rightElement: _react["default"].createElement(_icon["default"], {
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
  className: _propTypes["default"].string,
  closeOnSelect: _propTypes["default"].bool,
  defaultValue: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  disabledHours: _propTypes["default"].func,
  disabledMinutes: _propTypes["default"].func,
  intent: _propTypes["default"].oneOf(["normal", "primary", "success", "warning", "danger"]),
  maxTime: _propTypes["default"].string,
  minTime: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onlyHour: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  value: _propTypes["default"].string
};
TimePicker.defaultProps = {
  className: "",
  closeOnSelect: false,
  defaultValue: null,
  disabled: false,
  disabledHours: noop,
  disabledMinutes: noop,
  intent: "normal",
  maxTime: null,
  minTime: null,
  onChange: noop,
  onlyHour: false,
  placeholder: "请选择",
  size: "small",
  value: null
};
var _default = TimePicker;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGltZS1waWNrZXIvVGltZVBpY2tlci50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsIlRpbWVQaWNrZXIiLCJyZWYiLCJjbGFzc05hbWUiLCJjbG9zZU9uU2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiZGlzYWJsZWQiLCJkaXNhYmxlZEhvdXJzIiwiZGlzYWJsZWRNaW51dGVzIiwiaW50ZW50IiwibWF4VGltZSIsIm1pblRpbWUiLCJvbkNoYW5nZSIsIm9ubHlIb3VyIiwicGxhY2Vob2xkZXIiLCJwb3BvdmVyUHJvcHMiLCJzaXplUHJvcCIsInNpemUiLCJ2YWx1ZSIsIm90aGVyUHJvcHMiLCJnZXRJbml0aWFsU3RhdGUiLCJ2YWx1ZVN0YXRlIiwiaG91ciIsIm1pbnV0ZSIsImlucHV0VmFsdWUiLCJwcmV2VmFsdWVQcm9wIiwidmlzaWJsZSIsImluaXRpYWxTdGF0ZSIsInNldEhvdXIiLCJzZXRJbnB1dFZhbHVlIiwic2V0TWludXRlIiwic2V0UHJldlZhbHVlUHJvcCIsInNldFZpc2libGUiLCJuZXdIb3VyIiwibmV3TWludXRlIiwiaW5wdXRSZWYiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJoYW5kbGVDbGljayIsInZhbHVlTmV3IiwidHlwZSIsInZhbHVlUHJvcCIsImlucHV0VmFsdWVOb3ciLCJ2YWx1ZUZpbmFsIiwic2V0VGltZW91dCIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJ2aXNpYmxlTmV3IiwiaW5wdXRFbGVtZW50IiwiY3VycmVudCIsImlucHV0IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwibmV3SW5wdXRWYWx1ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaW5wdXRWYWx1ZU5ldyIsInRhcmdldCIsImhvdXJOZXciLCJtaW51dGVOZXciLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlSW5wdXRLZXlEb3duIiwia2V5Q29kZSIsImtleXMiLCJpbmNsdWRlcyIsImJsdXIiLCJjbGFzc1NldCIsInBhcnNlSW50IiwiYmxvY2tzIiwiZGVsaW1pdGVyIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFRQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFNQSxNQUFNLEdBQUcsV0FBZjs7QUFDQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBNkVBLElBQU1DLFVBQ3FCLEdBQUcsdUJBQzVCLGdCQW1CRUMsR0FuQkYsRUFvQks7QUFBQSxNQWxCREMsU0FrQkMsUUFsQkRBLFNBa0JDO0FBQUEsTUFqQkRDLGFBaUJDLFFBakJEQSxhQWlCQztBQUFBLE1BaEJEQyxZQWdCQyxRQWhCREEsWUFnQkM7QUFBQSxNQWZEQyxRQWVDLFFBZkRBLFFBZUM7QUFBQSxNQWREQyxhQWNDLFFBZERBLGFBY0M7QUFBQSxNQWJEQyxlQWFDLFFBYkRBLGVBYUM7QUFBQSxNQVpEQyxNQVlDLFFBWkRBLE1BWUM7QUFBQSxNQVhEQyxPQVdDLFFBWERBLE9BV0M7QUFBQSxNQVZEQyxPQVVDLFFBVkRBLE9BVUM7QUFBQSxNQVREQyxRQVNDLFFBVERBLFFBU0M7QUFBQSxNQVJEQyxRQVFDLFFBUkRBLFFBUUM7QUFBQSxNQVBEQyxXQU9DLFFBUERBLFdBT0M7QUFBQSxNQU5EQyxZQU1DLFFBTkRBLFlBTUM7QUFBQSxNQUxLQyxRQUtMLFFBTERDLElBS0M7QUFBQSxNQUpEQyxLQUlDLFFBSkRBLEtBSUM7QUFBQSxNQUhFQyxVQUdGOztBQUNILE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixRQUFNQyxVQUFVLEdBQUdILEtBQUssS0FBSyxJQUFWLEdBQWlCQSxLQUFqQixHQUF5QmIsWUFBNUM7O0FB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QUFRLEVBQUUsS0FYYztBQVl4QkMsRUFBQUEsV0FBVyxFQUFFLEtBWlc7QUFheEJHLEVBQUFBLElBQUksRUFBRSxPQWJrQjtBQWN4QkMsRUFBQUEsS0FBSyxFQUFFO0FBZGlCLENBQTFCO2VBaUJlakIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VDb250ZXh0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxuICB1c2VNZW1vLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRcIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBUaW1lU2VsZWN0IGZyb20gXCIuL1RpbWVTZWxlY3RcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5pbXBvcnQge1xuICBleHRyYWN0SG91ckFuZE1pbnV0ZUZyb21UaW1lLFxuICBpc0xlZ2FsVGltZVN0cmluZyxcbiAgaXNUaW1lQWZ0ZXIsXG4gIGlzVGltZUJlZm9yZSxcbn0gZnJvbSBcIi4vY29yZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10aW1lXCJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIElUaW1lUGlja2VyUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKblnKjpgInmi6nlkI7vvIzmtojlpLEgUG9wb3ZlclxuICAgKi9cbiAgY2xvc2VPblNlbGVjdD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8jOm7mOiupOmAieaLqeaXtumXtFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlPzogbnVsbCB8IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOemgeatoumAieaLqeeahOWwj+aXtlxuICAgKi9cbiAgZGlzYWJsZWRIb3Vycz86IChob3VyPzogc3RyaW5nIHwgbnVsbCkgPT4gYm9vbGVhbiB8IHZvaWRcbiAgLyoqXG4gICAqIOemgeatoumAieaLqeeahOWIhumSn1xuICAgKi9cbiAgZGlzYWJsZWRNaW51dGVzPzogKG1pbnV0ZT86IHN0cmluZyB8IG51bGwpID0+IGJvb2xlYW4gfCB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7ovpPlhaXmoYbnsbvlnotcbiAgICovXG4gIGludGVudD86IFwibm9ybWFsXCIgfCBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJ3YXJuaW5nXCIgfCBcImRhbmdlclwiXG4gIC8qKlxuICAgKiDlj6/pgInml7bpl7TnmoTmnIDlpKflgLxcbiAgICovXG4gIG1heFRpbWU/OiBzdHJpbmcgfCBudWxsXG4gIC8qKlxuICAgKiDlj6/pgInml7bpl7TnmoTmnIDlsI/lgLxcbiAgICovXG4gIG1pblRpbWU/OiBzdHJpbmcgfCBudWxsXG4gIC8qKlxuICAgKiDml7bpl7TmlLnlj5jnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICAvKipcbiAgICog5Yik5pat5piv5ZCm5piv5pW05pWwXG4gICAqL1xuICBvbmx5SG91cj86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWNoOS9jeWtl+esplxuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOS8oOWFpSBQb3BvdmVyIOeahCBwcm9wc1xuICAgKi9cbiAgcG9wb3ZlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrlvZPliY3ml7bpl7RcbiAgICovXG4gIHZhbHVlPzogbnVsbCB8IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUaW1lUGlja2VyU3RhdGUge1xuICBob3VyOiBzdHJpbmcgfCBudWxsXG4gIG1pbnV0ZTogc3RyaW5nIHwgbnVsbFxuICBpbnB1dFZhbHVlPzogc3RyaW5nIHwgbnVsbFxuICB2aXNpYmxlOiBib29sZWFuXG4gIHByZXZWYWx1ZVByb3A6IG51bGwgfCBzdHJpbmdcbn1cblxuLyoqXG4gKiDml7bpl7TpgInmi6nlmajnlKjkuo7kuobop6PlvZPliY3lt7LpgInml7bpl7TvvIzpgInmi6nmiJbovpPlhaXpnIDopoHnmoTml7bpl7TjgIHml7bpl7TojIPlm7TnrYnjgIJcbiAqL1xuY29uc3QgVGltZVBpY2tlcjogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxJVGltZVBpY2tlclByb3BzICZcbiAgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+PiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjbG9zZU9uU2VsZWN0LFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlZEhvdXJzLFxuICAgICAgZGlzYWJsZWRNaW51dGVzLFxuICAgICAgaW50ZW50LFxuICAgICAgbWF4VGltZSxcbiAgICAgIG1pblRpbWUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9ubHlIb3VyLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBwb3BvdmVyUHJvcHMsXG4gICAgICBzaXplOiBzaXplUHJvcCxcbiAgICAgIHZhbHVlLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElUaW1lUGlja2VyUHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IGdldEluaXRpYWxTdGF0ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlU3RhdGUgPSB2YWx1ZSAhPT0gbnVsbCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlXG4gICAgICBjb25zdCB7IGhvdXIsIG1pbnV0ZSB9ID0gZXh0cmFjdEhvdXJBbmRNaW51dGVGcm9tVGltZSh2YWx1ZVN0YXRlKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaG91cixcbiAgICAgICAgaW5wdXRWYWx1ZTogdmFsdWVTdGF0ZSB8fCBcIlwiLFxuICAgICAgICBtaW51dGU6IG9ubHlIb3VyID8gXCIwMFwiIDogbWludXRlLFxuICAgICAgICBwcmV2VmFsdWVQcm9wOiB2YWx1ZVN0YXRlIHx8IFwiXCIsXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB1c2VNZW1vKGdldEluaXRpYWxTdGF0ZSwgW10pXG4gICAgY29uc3QgW2hvdXIsIHNldEhvdXJdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlLmhvdXIpXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlLmlucHV0VmFsdWUpXG4gICAgY29uc3QgW21pbnV0ZSwgc2V0TWludXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZS5taW51dGUpXG4gICAgY29uc3QgW3ByZXZWYWx1ZVByb3AsIHNldFByZXZWYWx1ZVByb3BdID0gdXNlU3RhdGUoXG4gICAgICBpbml0aWFsU3RhdGUucHJldlZhbHVlUHJvcFxuICAgIClcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUudmlzaWJsZSlcblxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiBwcmV2VmFsdWVQcm9wICE9PSB2YWx1ZSkge1xuICAgICAgY29uc3QgeyBob3VyOiBuZXdIb3VyLCBtaW51dGU6IG5ld01pbnV0ZSB9ID0gZXh0cmFjdEhvdXJBbmRNaW51dGVGcm9tVGltZShcbiAgICAgICAgdmFsdWVcbiAgICAgIClcbiAgICAgIHNldEhvdXIobmV3SG91cilcbiAgICAgIHNldElucHV0VmFsdWUodmFsdWUgfHwgXCJcIilcbiAgICAgIHNldE1pbnV0ZShvbmx5SG91ciA/IFwiMDBcIiA6IG5ld01pbnV0ZSlcbiAgICAgIHNldFByZXZWYWx1ZVByb3AodmFsdWUgfHwgXCJcIilcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG5cbiAgICBjb25zdCB7IHNpemU6IHNpemVDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG5cbiAgICBjb25zdCBzaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemVQcm9wLCBzaXplQ29udGV4dClcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKHZhbHVlTmV3OiBzdHJpbmcsIHR5cGU6IFwiaG91clwiIHwgXCJtaW51dGVcIikgPT4ge1xuICAgICAgY29uc3QgdmFsdWVQcm9wID0gdmFsdWVcblxuICAgICAgbGV0IGlucHV0VmFsdWVOb3cgPVxuICAgICAgICB0eXBlID09PSBcImhvdXJcIlxuICAgICAgICAgID8gYCR7dmFsdWVOZXd9OiR7bWludXRlIHx8IFwiXCJ9YFxuICAgICAgICAgIDogYCR7aG91ciB8fCBcIlwifToke3ZhbHVlTmV3fWBcblxuICAgICAgaWYgKG1heFRpbWUgJiYgaXNUaW1lQWZ0ZXIoaW5wdXRWYWx1ZU5vdywgbWF4VGltZSkpIHtcbiAgICAgICAgaW5wdXRWYWx1ZU5vdyA9IG1heFRpbWVcbiAgICAgIH0gZWxzZSBpZiAobWluVGltZSAmJiBpc1RpbWVCZWZvcmUoaW5wdXRWYWx1ZU5vdywgbWluVGltZSkpIHtcbiAgICAgICAgaW5wdXRWYWx1ZU5vdyA9IG1pblRpbWVcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFsdWVGaW5hbCA9IHtcbiAgICAgICAgICBpbnB1dFZhbHVlTm93LFxuICAgICAgICAgIC4uLmV4dHJhY3RIb3VyQW5kTWludXRlRnJvbVRpbWUoaW5wdXRWYWx1ZU5vdyksXG4gICAgICAgIH1cbiAgICAgICAgc2V0SG91cih2YWx1ZUZpbmFsLmhvdXIpXG4gICAgICAgIHNldE1pbnV0ZSh2YWx1ZUZpbmFsLm1pbnV0ZSlcbiAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZUZpbmFsLmlucHV0VmFsdWVOb3cpXG4gICAgICB9XG4gICAgICBpZiAoaXNMZWdhbFRpbWVTdHJpbmcoaW5wdXRWYWx1ZSwgb25seUhvdXIpKSB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGlucHV0VmFsdWVOb3cpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFZpc2libGUoZmFsc2UpXG4gICAgICAgICAgfSwgMTIwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVmlzaWJsZUNoYW5nZSA9ICh2aXNpYmxlTmV3OiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zdCB7IGlucHV0OiBpbnB1dEVsZW1lbnQgfSA9IGlucHV0UmVmLmN1cnJlbnRcbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50XG4gICAgICAgIGlmICh2aXNpYmxlTmV3IHx8ICghdmlzaWJsZU5ldyAmJiBpbnB1dEVsZW1lbnQgIT09IGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgY29uc3QgbmV3SW5wdXRWYWx1ZSA9IGhvdXIgJiYgbWludXRlID8gYCR7aG91cn06JHttaW51dGV9YCA6IFwiXCJcbiAgICAgICAgICBpZiAoIXZpc2libGVOZXcgJiYgaW5wdXRWYWx1ZSAhPT0gbmV3SW5wdXRWYWx1ZSkge1xuICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShuZXdJbnB1dFZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRWaXNpYmxlKHZpc2libGVOZXcpXG4gICAgICAgIH1cbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoe1xuICAgICAgdGFyZ2V0OiB7IHZhbHVlOiBpbnB1dFZhbHVlTmV3IH0sXG4gICAgfTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIHNldElucHV0VmFsdWUoaW5wdXRWYWx1ZU5ldylcbiAgICAgIGlmIChcbiAgICAgICAgaW5wdXRWYWx1ZU5ldyA9PT0gXCJcIiB8fFxuICAgICAgICAoaXNMZWdhbFRpbWVTdHJpbmcoaW5wdXRWYWx1ZU5ldywgb25seUhvdXIpICYmXG4gICAgICAgICAgIWlzVGltZUFmdGVyKGlucHV0VmFsdWVOZXcsIG1heFRpbWUpICYmXG4gICAgICAgICAgIWlzVGltZUJlZm9yZShpbnB1dFZhbHVlTmV3LCBtaW5UaW1lKSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgaG91cjogaG91ck5ldyxcbiAgICAgICAgICBtaW51dGU6IG1pbnV0ZU5ldyxcbiAgICAgICAgfSA9IGV4dHJhY3RIb3VyQW5kTWludXRlRnJvbVRpbWUoaW5wdXRWYWx1ZU5ldylcbiAgICAgICAgaWYgKFxuICAgICAgICAgICEoZGlzYWJsZWRIb3VycyAmJiBkaXNhYmxlZEhvdXJzKGhvdXJOZXcpKSAmJlxuICAgICAgICAgICEoZGlzYWJsZWRNaW51dGVzICYmIGRpc2FibGVkTWludXRlcyhtaW51dGVOZXcpKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKGlucHV0VmFsdWVOZXcpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0SG91cihob3VyTmV3KVxuICAgICAgICAgICAgc2V0TWludXRlKG9ubHlIb3VyID8gXCIwMFwiIDogbWludXRlTmV3KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Rm9jdXMgPSAoKSA9PiB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0S2V5RG93biA9ICh7XG4gICAgICBrZXlDb2RlLFxuICAgIH06IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IGtleXMgPSBbOSwgMTMsIDI3XVxuICAgICAgaWYgKGtleXMuaW5jbHVkZXMoa2V5Q29kZSkpIHtcbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5pbnB1dC5ibHVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICAgIGlucHV0OiBpbnB1dFJlZi5jdXJyZW50LFxuICAgICAgaGFuZGxlVmlzaWJsZUNoYW5nZSxcbiAgICB9KSlcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0taW5wdXRgLFxuICAgICAgYCR7cHJlZml4fS0ke3NpemV9YFxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wb3ZlclxuICAgICAgICBhcnJvd2VkPXtmYWxzZX1cbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXtoYW5kbGVWaXNpYmxlQ2hhbmdlfVxuICAgICAgICBwb3B1cD17XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUaW1lU2VsZWN0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgY3VycmVudEhvdXI9e2hvdXIgPyBwYXJzZUludChob3VyLCAxMCkgOiBudWxsfVxuICAgICAgICAgICAgICBkaXNhYmxlZEhvdXJzPXtkaXNhYmxlZEhvdXJzfVxuICAgICAgICAgICAgICBtYXhUaW1lPXttYXhUaW1lfVxuICAgICAgICAgICAgICBtaW5UaW1lPXttaW5UaW1lfVxuICAgICAgICAgICAgICBvbmx5SG91cj17b25seUhvdXJ9XG4gICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWU9e2hvdXJ9XG4gICAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICAgIHR5cGU9XCJob3VyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7IW9ubHlIb3VyICYmIChcbiAgICAgICAgICAgICAgPFRpbWVTZWxlY3RcbiAgICAgICAgICAgICAgICBkaXNhYmxlZE1pbnV0ZXM9e2Rpc2FibGVkTWludXRlc31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgY3VycmVudEhvdXI9e2hvdXIgPyBwYXJzZUludChob3VyLCAxMCkgOiBudWxsfVxuICAgICAgICAgICAgICAgIG1heFRpbWU9e21heFRpbWV9XG4gICAgICAgICAgICAgICAgbWluVGltZT17bWluVGltZX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlPXttaW51dGV9XG4gICAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgICB0eXBlPVwibWludXRlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgey4uLnBvcG92ZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgICBjbGVhdmVPcHRpb25zPXt7XG4gICAgICAgICAgICBibG9ja3M6IFsyLCAyXSxcbiAgICAgICAgICAgIGRlbGltaXRlcjogXCI6XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgcmlnaHRFbGVtZW50PXs8SWNvbiBpY29uPVwidGltZS1vdXRsaW5lZFwiIC8+fVxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVJbnB1dEtleURvd259XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvUG9wb3Zlcj5cbiAgICApXG4gIH1cbilcblxuVGltZVBpY2tlci5kaXNwbGF5TmFtZSA9IFwiVGltZVBpY2tlclwiXG5cblRpbWVQaWNrZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKblnKjpgInmi6nlkI7vvIzmtojlpLEgUG9wb3ZlclxuICAgKi9cbiAgY2xvc2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvIzpu5jorqTpgInmi6nml7bpl7RcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog56aB5q2i6YCJ5oup55qE5bCP5pe2XG4gICAqL1xuICBkaXNhYmxlZEhvdXJzOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOemgeatoumAieaLqeeahOWIhumSn1xuICAgKi9cbiAgZGlzYWJsZWRNaW51dGVzOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9rui+k+WFpeahhuexu+Wei1xuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwibm9ybWFsXCIsXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgXSksXG4gIC8qKlxuICAgKiDlj6/pgInml7bpl7TnmoTmnIDlpKflgLxcbiAgICovXG4gIG1heFRpbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlj6/pgInml7bpl7TnmoTmnIDlsI/lgLxcbiAgICovXG4gIG1pblRpbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDml7bpl7TmlLnlj5jnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5Yik5pat5piv5ZCm5piv5pW05pWwXG4gICAqL1xuICBvbmx5SG91cjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDljaDkvY3lrZfnrKZcbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5b2T5YmN5pe26Ze0XG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuVGltZVBpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogXCJcIixcbiAgY2xvc2VPblNlbGVjdDogZmFsc2UsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBkaXNhYmxlZEhvdXJzOiBub29wLFxuICBkaXNhYmxlZE1pbnV0ZXM6IG5vb3AsXG4gIGludGVudDogXCJub3JtYWxcIixcbiAgbWF4VGltZTogbnVsbCxcbiAgbWluVGltZTogbnVsbCxcbiAgb25DaGFuZ2U6IG5vb3AsXG4gIG9ubHlIb3VyOiBmYWxzZSxcbiAgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oupXCIsXG4gIHNpemU6IFwic21hbGxcIixcbiAgdmFsdWU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVQaWNrZXJcbiJdfQ==