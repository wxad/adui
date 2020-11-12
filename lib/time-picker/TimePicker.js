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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGltZS1waWNrZXIvVGltZVBpY2tlci50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsIlRpbWVQaWNrZXIiLCJyZWYiLCJjbGFzc05hbWUiLCJjbG9zZU9uU2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiZGlzYWJsZWQiLCJkaXNhYmxlZEhvdXJzIiwiZGlzYWJsZWRNaW51dGVzIiwiaW50ZW50IiwibWF4VGltZSIsIm1pblRpbWUiLCJvbkNoYW5nZSIsIm9ubHlIb3VyIiwicGxhY2Vob2xkZXIiLCJwb3BvdmVyUHJvcHMiLCJzaXplUHJvcCIsInNpemUiLCJ2YWx1ZSIsIm90aGVyUHJvcHMiLCJnZXRJbml0aWFsU3RhdGUiLCJ2YWx1ZVN0YXRlIiwiaG91ciIsIm1pbnV0ZSIsImlucHV0VmFsdWUiLCJwcmV2VmFsdWVQcm9wIiwidmlzaWJsZSIsImluaXRpYWxTdGF0ZSIsInNldEhvdXIiLCJzZXRJbnB1dFZhbHVlIiwic2V0TWludXRlIiwic2V0UHJldlZhbHVlUHJvcCIsInNldFZpc2libGUiLCJuZXdIb3VyIiwibmV3TWludXRlIiwiaW5wdXRSZWYiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJoYW5kbGVDbGljayIsInZhbHVlTmV3IiwidHlwZSIsInZhbHVlUHJvcCIsImlucHV0VmFsdWVOb3ciLCJ2YWx1ZUZpbmFsIiwic2V0VGltZW91dCIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJ2aXNpYmxlTmV3IiwiaW5wdXRFbGVtZW50IiwiY3VycmVudCIsImlucHV0IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwibmV3SW5wdXRWYWx1ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaW5wdXRWYWx1ZU5ldyIsInRhcmdldCIsImhvdXJOZXciLCJtaW51dGVOZXciLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlSW5wdXRLZXlEb3duIiwia2V5Q29kZSIsImtleXMiLCJpbmNsdWRlcyIsImJsdXIiLCJjbGFzc1NldCIsInBhcnNlSW50IiwiYmxvY2tzIiwiZGVsaW1pdGVyIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFRQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLElBQU1BLE1BQU0sR0FBRyxXQUFmOztBQUNBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUE2RUEsSUFBTUMsVUFDcUIsR0FBRyx1QkFDNUIsZ0JBbUJFQyxHQW5CRixFQW9CSztBQUFBLE1BbEJEQyxTQWtCQyxRQWxCREEsU0FrQkM7QUFBQSxNQWpCREMsYUFpQkMsUUFqQkRBLGFBaUJDO0FBQUEsTUFoQkRDLFlBZ0JDLFFBaEJEQSxZQWdCQztBQUFBLE1BZkRDLFFBZUMsUUFmREEsUUFlQztBQUFBLE1BZERDLGFBY0MsUUFkREEsYUFjQztBQUFBLE1BYkRDLGVBYUMsUUFiREEsZUFhQztBQUFBLE1BWkRDLE1BWUMsUUFaREEsTUFZQztBQUFBLE1BWERDLE9BV0MsUUFYREEsT0FXQztBQUFBLE1BVkRDLE9BVUMsUUFWREEsT0FVQztBQUFBLE1BVERDLFFBU0MsUUFUREEsUUFTQztBQUFBLE1BUkRDLFFBUUMsUUFSREEsUUFRQztBQUFBLE1BUERDLFdBT0MsUUFQREEsV0FPQztBQUFBLE1BTkRDLFlBTUMsUUFOREEsWUFNQztBQUFBLE1BTEtDLFFBS0wsUUFMREMsSUFLQztBQUFBLE1BSkRDLEtBSUMsUUFKREEsS0FJQztBQUFBLE1BSEVDLFVBR0Y7O0FBQ0gsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFFBQU1DLFVBQVUsR0FBR0gsS0FBSyxLQUFLLElBQVYsR0FBaUJBLEtBQWpCLEdBQXlCYixZQUE1Qzs7QUFENEIs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RUFBRSxLQVhjO0FBWXhCQyxFQUFBQSxXQUFXLEVBQUUsS0FaVztBQWF4QkcsRUFBQUEsSUFBSSxFQUFFLE9BYmtCO0FBY3hCQyxFQUFBQSxLQUFLLEVBQUU7QUFkaUIsQ0FBMUI7ZUFpQmVqQixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIGZvcndhcmRSZWYsXG4gIHVzZUNvbnRleHQsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG4gIHVzZU1lbW8sXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dFwiXG5pbXBvcnQgUG9wb3ZlciwgeyBJUG9wb3ZlclByb3BzIH0gZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IFRpbWVTZWxlY3QgZnJvbSBcIi4vVGltZVNlbGVjdFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcbmltcG9ydCB7XG4gIGV4dHJhY3RIb3VyQW5kTWludXRlRnJvbVRpbWUsXG4gIGlzTGVnYWxUaW1lU3RyaW5nLFxuICBpc1RpbWVBZnRlcixcbiAgaXNUaW1lQmVmb3JlLFxufSBmcm9tIFwiLi9jb3JlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXRpbWVcIlxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRpbWVQaWNrZXJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuWcqOmAieaLqeWQju+8jOa2iOWksSBQb3BvdmVyXG4gICAqL1xuICBjbG9zZU9uU2VsZWN0PzogYm9vbGVhblxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77yM6buY6K6k6YCJ5oup5pe26Ze0XG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBudWxsIHwgc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog56aB5q2i6YCJ5oup55qE5bCP5pe2XG4gICAqL1xuICBkaXNhYmxlZEhvdXJzPzogKGhvdXI/OiBzdHJpbmcgfCBudWxsKSA9PiBib29sZWFuIHwgdm9pZFxuICAvKipcbiAgICog56aB5q2i6YCJ5oup55qE5YiG6ZKfXG4gICAqL1xuICBkaXNhYmxlZE1pbnV0ZXM/OiAobWludXRlPzogc3RyaW5nIHwgbnVsbCkgPT4gYm9vbGVhbiB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9rui+k+WFpeahhuexu+Wei1xuICAgKi9cbiAgaW50ZW50PzogXCJub3JtYWxcIiB8IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCJcbiAgLyoqXG4gICAqIOWPr+mAieaXtumXtOeahOacgOWkp+WAvFxuICAgKi9cbiAgbWF4VGltZT86IHN0cmluZyB8IG51bGxcbiAgLyoqXG4gICAqIOWPr+mAieaXtumXtOeahOacgOWwj+WAvFxuICAgKi9cbiAgbWluVGltZT86IHN0cmluZyB8IG51bGxcbiAgLyoqXG4gICAqIOaXtumXtOaUueWPmOeahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDliKTmlq3mmK/lkKbmmK/mlbTmlbBcbiAgICovXG4gIG9ubHlIb3VyPzogYm9vbGVhblxuICAvKipcbiAgICog5Y2g5L2N5a2X56ymXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICAvKipcbiAgICog5Lyg5YWlIFBvcG92ZXIg55qEIHByb3BzXG4gICAqL1xuICBwb3BvdmVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muW9k+WJjeaXtumXtFxuICAgKi9cbiAgdmFsdWU/OiBudWxsIHwgc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRpbWVQaWNrZXJTdGF0ZSB7XG4gIGhvdXI6IHN0cmluZyB8IG51bGxcbiAgbWludXRlOiBzdHJpbmcgfCBudWxsXG4gIGlucHV0VmFsdWU/OiBzdHJpbmcgfCBudWxsXG4gIHZpc2libGU6IGJvb2xlYW5cbiAgcHJldlZhbHVlUHJvcDogbnVsbCB8IHN0cmluZ1xufVxuXG4vKipcbiAqIOaXtumXtOmAieaLqeWZqOeUqOS6juS6huino+W9k+WJjeW3sumAieaXtumXtO+8jOmAieaLqeaIlui+k+WFpemcgOimgeeahOaXtumXtOOAgeaXtumXtOiMg+WbtOetieOAglxuICovXG5jb25zdCBUaW1lUGlja2VyOiBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PElUaW1lUGlja2VyUHJvcHMgJlxuICBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT4+ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNsb3NlT25TZWxlY3QsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkSG91cnMsXG4gICAgICBkaXNhYmxlZE1pbnV0ZXMsXG4gICAgICBpbnRlbnQsXG4gICAgICBtYXhUaW1lLFxuICAgICAgbWluVGltZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgb25seUhvdXIsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHBvcG92ZXJQcm9wcyxcbiAgICAgIHNpemU6IHNpemVQcm9wLFxuICAgICAgdmFsdWUsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSVRpbWVQaWNrZXJQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgZ2V0SW5pdGlhbFN0YXRlID0gKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWVTdGF0ZSA9IHZhbHVlICE9PSBudWxsID8gdmFsdWUgOiBkZWZhdWx0VmFsdWVcbiAgICAgIGNvbnN0IHsgaG91ciwgbWludXRlIH0gPSBleHRyYWN0SG91ckFuZE1pbnV0ZUZyb21UaW1lKHZhbHVlU3RhdGUpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBob3VyLFxuICAgICAgICBpbnB1dFZhbHVlOiB2YWx1ZVN0YXRlIHx8IFwiXCIsXG4gICAgICAgIG1pbnV0ZTogb25seUhvdXIgPyBcIjAwXCIgOiBtaW51dGUsXG4gICAgICAgIHByZXZWYWx1ZVByb3A6IHZhbHVlU3RhdGUgfHwgXCJcIixcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHVzZU1lbW8oZ2V0SW5pdGlhbFN0YXRlLCBbXSlcbiAgICBjb25zdCBbaG91ciwgc2V0SG91cl0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUuaG91cilcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUuaW5wdXRWYWx1ZSlcbiAgICBjb25zdCBbbWludXRlLCBzZXRNaW51dGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlLm1pbnV0ZSlcbiAgICBjb25zdCBbcHJldlZhbHVlUHJvcCwgc2V0UHJldlZhbHVlUHJvcF0gPSB1c2VTdGF0ZShcbiAgICAgIGluaXRpYWxTdGF0ZS5wcmV2VmFsdWVQcm9wXG4gICAgKVxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZS52aXNpYmxlKVxuXG4gICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHByZXZWYWx1ZVByb3AgIT09IHZhbHVlKSB7XG4gICAgICBjb25zdCB7IGhvdXI6IG5ld0hvdXIsIG1pbnV0ZTogbmV3TWludXRlIH0gPSBleHRyYWN0SG91ckFuZE1pbnV0ZUZyb21UaW1lKFxuICAgICAgICB2YWx1ZVxuICAgICAgKVxuICAgICAgc2V0SG91cihuZXdIb3VyKVxuICAgICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZSB8fCBcIlwiKVxuICAgICAgc2V0TWludXRlKG9ubHlIb3VyID8gXCIwMFwiIDogbmV3TWludXRlKVxuICAgICAgc2V0UHJldlZhbHVlUHJvcCh2YWx1ZSB8fCBcIlwiKVxuICAgIH1cblxuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPGFueT4obnVsbClcblxuICAgIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcblxuICAgIGNvbnN0IHNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZVByb3AsIHNpemVDb250ZXh0KVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAodmFsdWVOZXc6IHN0cmluZywgdHlwZTogXCJob3VyXCIgfCBcIm1pbnV0ZVwiKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZVByb3AgPSB2YWx1ZVxuXG4gICAgICBsZXQgaW5wdXRWYWx1ZU5vdyA9XG4gICAgICAgIHR5cGUgPT09IFwiaG91clwiXG4gICAgICAgICAgPyBgJHt2YWx1ZU5ld306JHttaW51dGUgfHwgXCJcIn1gXG4gICAgICAgICAgOiBgJHtob3VyIHx8IFwiXCJ9OiR7dmFsdWVOZXd9YFxuXG4gICAgICBpZiAobWF4VGltZSAmJiBpc1RpbWVBZnRlcihpbnB1dFZhbHVlTm93LCBtYXhUaW1lKSkge1xuICAgICAgICBpbnB1dFZhbHVlTm93ID0gbWF4VGltZVxuICAgICAgfSBlbHNlIGlmIChtaW5UaW1lICYmIGlzVGltZUJlZm9yZShpbnB1dFZhbHVlTm93LCBtaW5UaW1lKSkge1xuICAgICAgICBpbnB1dFZhbHVlTm93ID0gbWluVGltZVxuICAgICAgfVxuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YWx1ZUZpbmFsID0ge1xuICAgICAgICAgIGlucHV0VmFsdWVOb3csXG4gICAgICAgICAgLi4uZXh0cmFjdEhvdXJBbmRNaW51dGVGcm9tVGltZShpbnB1dFZhbHVlTm93KSxcbiAgICAgICAgfVxuICAgICAgICBzZXRIb3VyKHZhbHVlRmluYWwuaG91cilcbiAgICAgICAgc2V0TWludXRlKHZhbHVlRmluYWwubWludXRlKVxuICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbHVlRmluYWwuaW5wdXRWYWx1ZU5vdylcbiAgICAgIH1cbiAgICAgIGlmIChpc0xlZ2FsVGltZVN0cmluZyhpbnB1dFZhbHVlLCBvbmx5SG91cikpIHtcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoaW5wdXRWYWx1ZU5vdylcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xvc2VPblNlbGVjdCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgICAgICB9LCAxMjApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVWaXNpYmxlQ2hhbmdlID0gKHZpc2libGVOZXc6IGJvb2xlYW4pID0+IHtcbiAgICAgIGNvbnN0IHsgaW5wdXQ6IGlucHV0RWxlbWVudCB9ID0gaW5wdXRSZWYuY3VycmVudFxuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgYWN0aXZlRWxlbWVudCB9ID0gZG9jdW1lbnRcbiAgICAgICAgaWYgKHZpc2libGVOZXcgfHwgKCF2aXNpYmxlTmV3ICYmIGlucHV0RWxlbWVudCAhPT0gYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICBjb25zdCBuZXdJbnB1dFZhbHVlID0gaG91ciAmJiBtaW51dGUgPyBgJHtob3VyfToke21pbnV0ZX1gIDogXCJcIlxuICAgICAgICAgIGlmICghdmlzaWJsZU5ldyAmJiBpbnB1dFZhbHVlICE9PSBuZXdJbnB1dFZhbHVlKSB7XG4gICAgICAgICAgICBzZXRJbnB1dFZhbHVlKG5ld0lucHV0VmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICAgIHNldFZpc2libGUodmlzaWJsZU5ldylcbiAgICAgICAgfVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9ICh7XG4gICAgICB0YXJnZXQ6IHsgdmFsdWU6IGlucHV0VmFsdWVOZXcgfSxcbiAgICB9OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgc2V0SW5wdXRWYWx1ZShpbnB1dFZhbHVlTmV3KVxuICAgICAgaWYgKFxuICAgICAgICBpbnB1dFZhbHVlTmV3ID09PSBcIlwiIHx8XG4gICAgICAgIChpc0xlZ2FsVGltZVN0cmluZyhpbnB1dFZhbHVlTmV3LCBvbmx5SG91cikgJiZcbiAgICAgICAgICAhaXNUaW1lQWZ0ZXIoaW5wdXRWYWx1ZU5ldywgbWF4VGltZSkgJiZcbiAgICAgICAgICAhaXNUaW1lQmVmb3JlKGlucHV0VmFsdWVOZXcsIG1pblRpbWUpKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBob3VyOiBob3VyTmV3LFxuICAgICAgICAgIG1pbnV0ZTogbWludXRlTmV3LFxuICAgICAgICB9ID0gZXh0cmFjdEhvdXJBbmRNaW51dGVGcm9tVGltZShpbnB1dFZhbHVlTmV3KVxuICAgICAgICBpZiAoXG4gICAgICAgICAgIShkaXNhYmxlZEhvdXJzICYmIGRpc2FibGVkSG91cnMoaG91ck5ldykpICYmXG4gICAgICAgICAgIShkaXNhYmxlZE1pbnV0ZXMgJiYgZGlzYWJsZWRNaW51dGVzKG1pbnV0ZU5ldykpXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgb25DaGFuZ2UoaW5wdXRWYWx1ZU5ldylcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRIb3VyKGhvdXJOZXcpXG4gICAgICAgICAgICBzZXRNaW51dGUob25seUhvdXIgPyBcIjAwXCIgOiBtaW51dGVOZXcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRGb2N1cyA9ICgpID0+IHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRLZXlEb3duID0gKHtcbiAgICAgIGtleUNvZGUsXG4gICAgfTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3Qga2V5cyA9IFs5LCAxMywgMjddXG4gICAgICBpZiAoa2V5cy5pbmNsdWRlcyhrZXlDb2RlKSkge1xuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKVxuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmlucHV0LmJsdXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgaW5wdXQ6IGlucHV0UmVmLmN1cnJlbnQsXG4gICAgICBoYW5kbGVWaXNpYmxlQ2hhbmdlLFxuICAgIH0pKVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYCR7cHJlZml4fS1pbnB1dGAsXG4gICAgICBgJHtwcmVmaXh9LSR7c2l6ZX1gXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BvdmVyXG4gICAgICAgIGFycm93ZWQ9e2ZhbHNlfVxuICAgICAgICBvblZpc2libGVDaGFuZ2U9e2hhbmRsZVZpc2libGVDaGFuZ2V9XG4gICAgICAgIHBvcHVwPXtcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFRpbWVTZWxlY3RcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICBjdXJyZW50SG91cj17aG91ciA/IHBhcnNlSW50KGhvdXIsIDEwKSA6IG51bGx9XG4gICAgICAgICAgICAgIGRpc2FibGVkSG91cnM9e2Rpc2FibGVkSG91cnN9XG4gICAgICAgICAgICAgIG1heFRpbWU9e21heFRpbWV9XG4gICAgICAgICAgICAgIG1pblRpbWU9e21pblRpbWV9XG4gICAgICAgICAgICAgIG9ubHlIb3VyPXtvbmx5SG91cn1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZT17aG91cn1cbiAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgdHlwZT1cImhvdXJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHshb25seUhvdXIgJiYgKFxuICAgICAgICAgICAgICA8VGltZVNlbGVjdFxuICAgICAgICAgICAgICAgIGRpc2FibGVkTWludXRlcz17ZGlzYWJsZWRNaW51dGVzfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICBjdXJyZW50SG91cj17aG91ciA/IHBhcnNlSW50KGhvdXIsIDEwKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgbWF4VGltZT17bWF4VGltZX1cbiAgICAgICAgICAgICAgICBtaW5UaW1lPXttaW5UaW1lfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWU9e21pbnV0ZX1cbiAgICAgICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJtaW51dGVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICB7Li4ucG9wb3ZlclByb3BzfVxuICAgICAgPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICAgIGNsZWF2ZU9wdGlvbnM9e3tcbiAgICAgICAgICAgIGJsb2NrczogWzIsIDJdLFxuICAgICAgICAgICAgZGVsaW1pdGVyOiBcIjpcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICByaWdodEVsZW1lbnQ9ezxJY29uIGljb249XCJ0aW1lLW91dGxpbmVkXCIgLz59XG4gICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgb25Gb2N1cz17aGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgICBvbktleURvd249e2hhbmRsZUlucHV0S2V5RG93bn1cbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9Qb3BvdmVyPlxuICAgIClcbiAgfVxuKVxuXG5UaW1lUGlja2VyLmRpc3BsYXlOYW1lID0gXCJUaW1lUGlja2VyXCJcblxuVGltZVBpY2tlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuWcqOmAieaLqeWQju+8jOa2iOWksSBQb3BvdmVyXG4gICAqL1xuICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8jOm7mOiupOmAieaLqeaXtumXtFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDnpoHmraLpgInmi6nnmoTlsI/ml7ZcbiAgICovXG4gIGRpc2FibGVkSG91cnM6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog56aB5q2i6YCJ5oup55qE5YiG6ZKfXG4gICAqL1xuICBkaXNhYmxlZE1pbnV0ZXM6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6K6+572u6L6T5YWl5qGG57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJub3JtYWxcIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOWPr+mAieaXtumXtOeahOacgOWkp+WAvFxuICAgKi9cbiAgbWF4VGltZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOWPr+mAieaXtumXtOeahOacgOWwj+WAvFxuICAgKi9cbiAgbWluVGltZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaXtumXtOaUueWPmOeahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDliKTmlq3mmK/lkKbmmK/mlbTmlbBcbiAgICovXG4gIG9ubHlIb3VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWNoOS9jeWtl+esplxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrlvZPliY3ml7bpl7RcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5UaW1lUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBcIlwiLFxuICBjbG9zZU9uU2VsZWN0OiBmYWxzZSxcbiAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGRpc2FibGVkSG91cnM6IG5vb3AsXG4gIGRpc2FibGVkTWludXRlczogbm9vcCxcbiAgaW50ZW50OiBcIm5vcm1hbFwiLFxuICBtYXhUaW1lOiBudWxsLFxuICBtaW5UaW1lOiBudWxsLFxuICBvbkNoYW5nZTogbm9vcCxcbiAgb25seUhvdXI6IGZhbHNlLFxuICBwbGFjZWhvbGRlcjogXCLor7fpgInmi6lcIixcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZVBpY2tlclxuIl19