"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _dayPickerReact = _interopRequireWildcard(require("day-picker-react"));

require("./style");

var _classNames = _interopRequireDefault(require("./classNames"));

var _configProvider = require("../config-provider");

var _icon = _interopRequireDefault(require("../icon"));

var _input = _interopRequireDefault(require("../input"));

var _popover = _interopRequireDefault(require("../popover"));

var _Caption = _interopRequireDefault(require("./Caption"));

var _Navbar = _interopRequireDefault(require("./Navbar"));

var _Shortcuts = _interopRequireDefault(require("./Shortcuts"));

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

var DayPicker = _dayPickerReact["default"].__esModule ? _dayPickerReact["default"]["default"] : _dayPickerReact["default"];
var prefix = "adui-date";

var noop = function noop() {};

var RangePicker = (0, _react.forwardRef)(function (_ref, ref) {
  var _modifiers;

  var className = _ref.className,
      closeOnSelect = _ref.closeOnSelect,
      defaultValue = _ref.defaultValue,
      defaultVisible = _ref.defaultVisible,
      disabled = _ref.disabled,
      disabledDays = _ref.disabledDays,
      intent = _ref.intent,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      onChange = _ref.onChange,
      onEndDaySelect = _ref.onEndDaySelect,
      onStartDaySelect = _ref.onStartDaySelect,
      onVisibleChange = _ref.onVisibleChange,
      placeholder = _ref.placeholder,
      placement = _ref.placement,
      popoverProps = _ref.popoverProps,
      shortcuts = _ref.shortcuts,
      sizeProp = _ref.size,
      theme = _ref.theme,
      valueProp = _ref.value,
      visibleProp = _ref.visible,
      otherProps = _objectWithoutProperties(_ref, ["className", "closeOnSelect", "defaultValue", "defaultVisible", "disabled", "disabledDays", "intent", "maxDate", "minDate", "onChange", "onEndDaySelect", "onStartDaySelect", "onVisibleChange", "placeholder", "placement", "popoverProps", "shortcuts", "size", "theme", "value", "visible"]);

  var getInitialState = function getInitialState() {
    var rangeValue = "";
    var from;
    var to;

    if (valueProp !== null && valueProp !== undefined) {
      ;

      var _valueProp = _slicedToArray(valueProp, 2);

      from = _valueProp[0];
      to = _valueProp[1];
      rangeValue = (0, _core.convertDateRangeToString)(valueProp);
    } else if (defaultValue !== null && defaultValue !== undefined) {
      ;

      var _defaultValue = _slicedToArray(defaultValue, 2);

      from = _defaultValue[0];
      to = _defaultValue[1];
      rangeValue = (0, _core.convertDateRangeToString)(defaultValue);
    }

    return {
      from: from,
      month: from,
      rangeValue: rangeValue,
      to: to
    };
  };

  var initialState = (0, _react.useMemo)(getInitialState, []);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      enteredTo = _useState2[0],
      setEnteredTo = _useState2[1];

  var _useState3 = (0, _react.useState)(initialState.from),
      _useState4 = _slicedToArray(_useState3, 2),
      from = _useState4[0],
      setFrom = _useState4[1];

  var _useState5 = (0, _react.useState)(initialState.to),
      _useState6 = _slicedToArray(_useState5, 2),
      to = _useState6[0],
      setTo = _useState6[1];

  var _useState7 = (0, _react.useState)(initialState.month),
      _useState8 = _slicedToArray(_useState7, 2),
      month = _useState8[0],
      setMonth = _useState8[1];

  var _useState9 = (0, _react.useState)(valueProp),
      _useState10 = _slicedToArray(_useState9, 2),
      prevValueProp = _useState10[0],
      setPrevValueProp = _useState10[1];

  var _useState11 = (0, _react.useState)(initialState.rangeValue),
      _useState12 = _slicedToArray(_useState11, 2),
      rangeValue = _useState12[0],
      setRangeValue = _useState12[1];

  var _useState13 = (0, _react.useState)(function () {
    if (visibleProp !== null && visibleProp !== undefined) {
      return visibleProp;
    }

    if (defaultVisible !== null && defaultVisible !== undefined) {
      return defaultVisible;
    }

    return false;
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      visible = _useState14[0],
      setVisible = _useState14[1];

  if (valueProp !== null && valueProp !== undefined && valueProp !== prevValueProp) {
    setFrom(valueProp[0]);
    setTo(valueProp[1]);
    setRangeValue((0, _core.convertDateRangeToString)(valueProp));
    setPrevValueProp(valueProp);
  }

  if (visibleProp !== null && visible !== !!visibleProp) {
    setVisible(!!visibleProp);
  }

  var inputRef = (0, _react.useRef)(null);
  var dayPickerRef = (0, _react.useRef)(null);

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeContext = _useContext.size;

  var size = (0, _configProvider.getComputedSize)(sizeProp, sizeContext);
  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-rangeBase"), "".concat(prefix, "-").concat(size));
  var fromFinal;
  var enteredToFinal = to || enteredTo;

  var isReverse = from && enteredToFinal && _dayPickerReact.DateUtils.isDayAfter(from, enteredToFinal);

  if (isReverse) {
    fromFinal = enteredToFinal;
    enteredToFinal = from;
  } else {
    fromFinal = from;
  }

  var selectedDays = [fromFinal, {
    from: fromFinal,
    to: enteredToFinal
  }];
  var modifiers = (_modifiers = {}, _defineProperty(_modifiers, "".concat(prefix, "-rangeStart"), isReverse ? to && fromFinal : fromFinal), _defineProperty(_modifiers, "".concat(prefix, "-rangeStartHover"), isReverse && !to && fromFinal), _defineProperty(_modifiers, "".concat(prefix, "-rangeEnd"), isReverse ? enteredToFinal : to && enteredToFinal), _defineProperty(_modifiers, "".concat(prefix, "-rangeEndHover"), !isReverse && !to && enteredToFinal), _defineProperty(_modifiers, "".concat(prefix, "-selectedRange"), function selectedRange(day) {
    return (0, _core.isDayInRange)(day, [fromFinal, enteredToFinal], true);
  }), _modifiers);
  var shortcutsEnabled = shortcuts && shortcuts.length > 0;
  var range = [fromFinal, enteredToFinal];

  var isDayDisabled = function isDayDisabled(day) {
    return disabledDays ? disabledDays(day) || _dayPickerReact.DateUtils.isDayBefore(day, minDate) || _dayPickerReact.DateUtils.isDayAfter(day, maxDate) : null;
  };

  var handleVisibleChange = function handleVisibleChange(bool) {
    var inputElement = inputRef.current.input;

    if (disabled) {
      return;
    }

    setTimeout(function () {
      var _document = document,
          activeElement = _document.activeElement;

      if (bool || !bool && inputElement !== activeElement) {
        var newVal = (0, _core.convertDateRangeToString)([from, to]);

        if (!bool) {
          if (!to) {
            if (newVal) {
              var rangeReset = rangeValue.split(" - ");
              setTimeout(function () {
                setFrom(new Date(rangeReset[0]));
                setTo(new Date(rangeReset[1]));
              }, 250);
            }
          } else if (rangeValue !== newVal) {
            setRangeValue(newVal);
          }
        }

        if (onVisibleChange) {
          onVisibleChange(bool);
        }

        if (visibleProp === null) {
          setVisible(bool);
        }
      }
    }, 0);
  };

  var isSelectingFirstDay = function isSelectingFirstDay(fromArg, toArg) {
    var isRangeSelected = fromArg && toArg;
    return !fromArg || isRangeSelected;
  };

  var handleDayClick = function handleDayClick(day) {
    if (_dayPickerReact.DateUtils.isDayBefore(day, minDate) || _dayPickerReact.DateUtils.isDayAfter(day, maxDate)) {
      return;
    }

    if (isSelectingFirstDay(from, to)) {
      if (onStartDaySelect) {
        onStartDaySelect(day);
      }

      setEnteredTo(null);
      setFrom(day);
      setTo(null);
    } else {
      if (onEndDaySelect) {
        onEndDaySelect(day);
      }

      var newRange;
      var fromStr = (0, _core.convertDateToString)(from);
      var toStr = (0, _core.convertDateToString)(day);
      var newRangeValue = "";

      if (_dayPickerReact.DateUtils.isDayAfter(day, from)) {
        newRange = [from, day];
        newRangeValue = "".concat(fromStr, " - ").concat(toStr);
      } else {
        newRange = [day, from];
        newRangeValue = "".concat(toStr, " - ").concat(fromStr);
      }

      if (valueProp === null) {
        setEnteredTo(day);
        setRangeValue(newRangeValue);
        setTo(day);
      }

      if (onChange) {
        onChange(newRange);
      }

      if (closeOnSelect) {
        setTimeout(function () {
          if (onVisibleChange) {
            onVisibleChange(false);
          }

          if (visibleProp === null) {
            setVisible(false);
          }
        }, 100);
      }
    }
  };

  var handleDayMouseEnter = function handleDayMouseEnter(day) {
    if (!isSelectingFirstDay(from, to)) {
      setEnteredTo(day);
    }
  };

  var handleDayMouseLeave = function handleDayMouseLeave() {
    setEnteredTo(null);
  };

  var handleInputChange = function handleInputChange(_ref2) {
    var target = _ref2.target;
    var val = target.value;
    setRangeValue(val);

    if (val.trim() === "") {
      if (valueProp === null) {
        setEnteredTo(null);
        setFrom(null);
        setTo(null);
      }

      if (onChange) {
        onChange([undefined, undefined]);
      }
    } else if ((0, _core.isLegalDateRangeString)(val)) {
      var rangeValueStrs = val.split(" - ");
      var newFrom = new Date(rangeValueStrs[0]);
      var newTo = new Date(rangeValueStrs[1]);

      if (!isDayDisabled(newFrom) && !isDayDisabled(newTo) && !_dayPickerReact.DateUtils.isDayBefore(newTo, newFrom) && !(_dayPickerReact.DateUtils.isSameDay(from, newFrom) && _dayPickerReact.DateUtils.isSameDay(to, newTo))) {
        if (valueProp === null) {
          setFrom(newFrom);
          setTo(newTo);
        }

        if (!_dayPickerReact.DateUtils.isSameDay(from, newFrom)) {
          setMonth(newFrom);
        } else if (!_dayPickerReact.DateUtils.isSameDay(to, newTo)) {
          setMonth(newTo);
        }

        if (onChange) {
          onChange([newFrom, newTo]);
        }
      }
    }
  };

  var handleInputFocus = function handleInputFocus() {
    if (!visible) {
      if (onVisibleChange) {
        onVisibleChange(true);
      }

      if (visibleProp === null) {
        setVisible(true);
      }
    }
  };

  var handleInputKeyDown = function handleInputKeyDown(_ref3) {
    var keyCode = _ref3.keyCode;
    var keys = [9, 13, 27];

    if (keys.includes(keyCode)) {
      handleVisibleChange(false);
      inputRef.current.input.blur();
    }
  };

  var handleMonthChange = function handleMonthChange(date, e) {
    if (e) {
      var target = e.currentTarget;
      var targetRect = target && target.getBoundingClientRect();
      var dayPickerRect = dayPickerRef.current.dayPicker.getBoundingClientRect();

      if (target.name === "month" && (targetRect.left - dayPickerRect.left) * 2 > dayPickerRect.width) {
        date.setMonth(date.getMonth() - 1);
      }
    }

    var newMonth = date;

    if (_dayPickerReact.DateUtils.isDayAfter(date, maxDate)) {
      if (maxDate) {
        newMonth = maxDate;
      }
    } else if (_dayPickerReact.DateUtils.isDayBefore(date, minDate)) {
      if (minDate) {
        newMonth = minDate;
      }
    }

    setMonth(newMonth);
  };

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      input: inputRef.current,
      handleDayClick: handleDayClick,
      handleVisibleChange: handleVisibleChange
    };
  });
  return _react["default"].createElement(_popover["default"], _extends({
    arrowed: false,
    onVisibleChange: handleVisibleChange,
    placement: placement,
    popup: _react["default"].createElement("div", {
      className: "".concat(prefix, "-popup")
    }, shortcutsEnabled && _react["default"].createElement(_Shortcuts["default"], {
      onShortcutClick: function onShortcutClick(valueShortcut) {
        if (Array.isArray(valueShortcut)) {
          var fromShortcut = valueShortcut[0];
          var toShortcut = valueShortcut[1];
          setFrom(fromShortcut);
          setMonth(fromShortcut);
          setTo(toShortcut);
          setRangeValue((0, _core.convertDateRangeToString)(valueShortcut));

          if (onChange) {
            onChange(valueShortcut);
          }

          if (closeOnSelect) {
            setTimeout(function () {
              setVisible(false);
            }, 100);
          }
        }
      },
      selectedDays: range,
      shortcuts: shortcuts
    }), _react["default"].createElement(DayPicker, {
      ref: dayPickerRef,
      numberOfMonths: 2,
      disabledDays: isDayDisabled,
      fromMonth: minDate,
      toMonth: maxDate,
      canChangeMonth: true,
      classNames: _classNames["default"],
      month: month,
      months: _core.MONTHS,
      weekdaysLong: _core.WEEKDAYS_LONG,
      weekdaysShort: _core.WEEKDAYS_SHORT,
      selectedDays: selectedDays,
      navbarElement: _react["default"].createElement(_Navbar["default"], _extends({
        maxDate: maxDate,
        minDate: minDate,
        onManuallyChangeMonth: function onManuallyChangeMonth() {
          setMonth(minDate);
        }
      }, _dayPickerReact.NavbarElementProps)),
      captionElement: _react["default"].createElement(_Caption["default"], _extends({
        maxDate: maxDate,
        minDate: minDate,
        onDateChange: handleMonthChange
      }, _dayPickerReact.CaptionElementProps)),
      onDayMouseEnter: handleDayMouseEnter,
      onDayMouseLeave: handleDayMouseLeave,
      onDayClick: handleDayClick,
      renderDay: function renderDay(day) {
        return _react["default"].createElement("div", {
          className: "".concat(prefix, "-cell")
        }, day.getDate());
      },
      modifiers: modifiers
    })),
    popupStyle: {
      width: shortcutsEnabled ? "576px" : "476px",
      maxWidth: shortcutsEnabled ? "576px" : "476px"
    },
    trigger: "click",
    visible: visible
  }, popoverProps), _react["default"].createElement(_input["default"], _extends({
    className: classSet,
    disabled: disabled,
    intent: intent,
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    onKeyDown: handleInputKeyDown,
    placeholder: placeholder,
    ref: inputRef,
    rightElement: _react["default"].createElement(_icon["default"], {
      icon: "calendar-outlined"
    }),
    size: size,
    theme: theme,
    value: rangeValue
  }, otherProps)));
});
RangePicker.propTypes = {
  className: _propTypes["default"].string,
  closeOnSelect: _propTypes["default"].bool,
  defaultValue: _propTypes["default"].any,
  defaultVisible: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  disabledDays: _propTypes["default"].func,
  intent: _propTypes["default"].oneOf(["normal", "primary", "success", "warning", "danger"]),
  maxDate: _propTypes["default"].instanceOf(Date),
  minDate: _propTypes["default"].instanceOf(Date),
  onChange: _propTypes["default"].func,
  onEndDaySelect: _propTypes["default"].func,
  onStartDaySelect: _propTypes["default"].func,
  onVisibleChange: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  placement: _propTypes["default"].oneOf(["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]),
  popoverProps: _propTypes["default"].object,
  shortcuts: _propTypes["default"].any,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  theme: _propTypes["default"].oneOf([null, "light"]),
  value: _propTypes["default"].any,
  visible: _propTypes["default"].bool
};
RangePicker.defaultProps = {
  className: "",
  closeOnSelect: false,
  defaultValue: null,
  defaultVisible: null,
  disabled: false,
  disabledDays: noop,
  intent: "normal",
  maxDate: (0, _core.getDefaultMaxDate)(),
  minDate: (0, _core.getDefaultMinDate)(),
  onChange: noop,
  onEndDaySelect: noop,
  onStartDaySelect: noop,
  onVisibleChange: noop,
  placeholder: "选择日期范围",
  placement: "bottomLeft",
  popoverProps: {},
  shortcuts: undefined,
  size: "small",
  theme: null,
  value: null,
  visible: null
};
RangePicker.displayName = "RangePicker";
var _default = RangePicker;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvUmFuZ2VQaWNrZXIudHN4Il0sIm5hbWVzIjpbIkRheVBpY2tlciIsIkRQUiIsIl9fZXNNb2R1bGUiLCJwcmVmaXgiLCJub29wIiwiUmFuZ2VQaWNrZXIiLCJyZWYiLCJjbGFzc05hbWUiLCJjbG9zZU9uU2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiZGVmYXVsdFZpc2libGUiLCJkaXNhYmxlZCIsImRpc2FibGVkRGF5cyIsImludGVudCIsIm1heERhdGUiLCJtaW5EYXRlIiwib25DaGFuZ2UiLCJvbkVuZERheVNlbGVjdCIsIm9uU3RhcnREYXlTZWxlY3QiLCJvblZpc2libGVDaGFuZ2UiLCJwbGFjZWhvbGRlciIsInBsYWNlbWVudCIsInBvcG92ZXJQcm9wcyIsInNob3J0Y3V0cyIsInNpemVQcm9wIiwic2l6ZSIsInRoZW1lIiwidmFsdWVQcm9wIiwidmFsdWUiLCJ2aXNpYmxlUHJvcCIsInZpc2libGUiLCJvdGhlclByb3BzIiwiZ2V0SW5pdGlhbFN0YXRlIiwicmFuZ2VWYWx1ZSIsImZyb20iLCJ0byIsInVuZGVmaW5lZCIsIm1vbnRoIiwiaW5pdGlhbFN0YXRlIiwiZW50ZXJlZFRvIiwic2V0RW50ZXJlZFRvIiwic2V0RnJvbSIsInNldFRvIiwic2V0TW9udGgiLCJwcmV2VmFsdWVQcm9wIiwic2V0UHJldlZhbHVlUHJvcCIsInNldFJhbmdlVmFsdWUiLCJzZXRWaXNpYmxlIiwiaW5wdXRSZWYiLCJkYXlQaWNrZXJSZWYiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJjbGFzc1NldCIsImZyb21GaW5hbCIsImVudGVyZWRUb0ZpbmFsIiwiaXNSZXZlcnNlIiwiRGF0ZVV0aWxzIiwiaXNEYXlBZnRlciIsInNlbGVjdGVkRGF5cyIsIm1vZGlmaWVycyIsImRheSIsInNob3J0Y3V0c0VuYWJsZWQiLCJsZW5ndGgiLCJyYW5nZSIsImlzRGF5RGlzYWJsZWQiLCJpc0RheUJlZm9yZSIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJib29sIiwiaW5wdXRFbGVtZW50IiwiY3VycmVudCIsImlucHV0Iiwic2V0VGltZW91dCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsIm5ld1ZhbCIsInJhbmdlUmVzZXQiLCJzcGxpdCIsIkRhdGUiLCJpc1NlbGVjdGluZ0ZpcnN0RGF5IiwiZnJvbUFyZyIsInRvQXJnIiwiaXNSYW5nZVNlbGVjdGVkIiwiaGFuZGxlRGF5Q2xpY2siLCJuZXdSYW5nZSIsImZyb21TdHIiLCJ0b1N0ciIsIm5ld1JhbmdlVmFsdWUiLCJoYW5kbGVEYXlNb3VzZUVudGVyIiwiaGFuZGxlRGF5TW91c2VMZWF2ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwidGFyZ2V0IiwidmFsIiwidHJpbSIsInJhbmdlVmFsdWVTdHJzIiwibmV3RnJvbSIsIm5ld1RvIiwiaXNTYW1lRGF5IiwiaGFuZGxlSW5wdXRGb2N1cyIsImhhbmRsZUlucHV0S2V5RG93biIsImtleUNvZGUiLCJrZXlzIiwiaW5jbHVkZXMiLCJibHVyIiwiaGFuZGxlTW9udGhDaGFuZ2UiLCJkYXRlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZGF5UGlja2VyUmVjdCIsImRheVBpY2tlciIsIm5hbWUiLCJsZWZ0Iiwid2lkdGgiLCJnZXRNb250aCIsIm5ld01vbnRoIiwidmFsdWVTaG9ydGN1dCIsIkFycmF5IiwiaXNBcnJheSIsImZyb21TaG9ydGN1dCIsInRvU2hvcnRjdXQiLCJzdHlsZXMiLCJNT05USFMiLCJXRUVLREFZU19MT05HIiwiV0VFS0RBWVNfU0hPUlQiLCJOYXZiYXJFbGVtZW50UHJvcHMiLCJDYXB0aW9uRWxlbWVudFByb3BzIiwiZ2V0RGF0ZSIsIm1heFdpZHRoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwiZnVuYyIsIm9uZU9mIiwiaW5zdGFuY2VPZiIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0s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QUVaLElBVmU7QUFXekJhLEVBQUFBLGNBQWMsRUFBRWIsSUFYUztBQVl6QmMsRUFBQUEsZ0JBQWdCLEVBQUVkLElBWk87QUFhekJlLEVBQUFBLGVBQWUsRUFBRWYsSUFiUTtBQWN6QmdCLEVBQUFBLFdBQVcsRUFBRSxRQWRZO0FBZXpCQyxFQUFBQSxTQUFTLEVBQUUsWUFmYztBQWdCekJDLEVBQUFBLFlBQVksRUFBRSxFQWhCVztBQWlCekJDLEVBQUFBLFNBQVMsRUFBRWEsU0FqQmM7QUFrQnpCWCxFQUFBQSxJQUFJLEVBQUUsT0FsQm1CO0FBbUJ6QkMsRUFBQUEsS0FBSyxFQUFFLElBbkJrQjtBQW9CekJFLEVBQUFBLEtBQUssRUFBRSxJQXBCa0I7QUFxQnpCRSxFQUFBQSxPQUFPLEVBQUU7QUFyQmdCLENBQTNCO0FBd0JBekIsV0FBVyxDQUFDcUksV0FBWixHQUEwQixhQUExQjtlQUVlckksVyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1kdXBsaWNhdGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IFJlYWN0LCB7XG4gIGZvcndhcmRSZWYsXG4gIHVzZUNvbnRleHQsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZU1lbW8sXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBEUFIgZnJvbSBcImRheS1waWNrZXItcmVhY3RcIlxuaW1wb3J0IHtcbiAgQ2FwdGlvbkVsZW1lbnRQcm9wcyxcbiAgRGF0ZVV0aWxzLFxuICBOYXZiYXJFbGVtZW50UHJvcHMsXG59IGZyb20gXCJkYXktcGlja2VyLXJlYWN0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jbGFzc05hbWVzXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dFwiXG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tIFwiLi4vcG9wLXRyaWdnZXJcIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBDYXB0aW9uIGZyb20gXCIuL0NhcHRpb25cIlxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIlxuaW1wb3J0IFNob3J0Y3V0cyBmcm9tIFwiLi9TaG9ydGN1dHNcIlxuaW1wb3J0IHtcbiAgTU9OVEhTLFxuICBXRUVLREFZU19MT05HLFxuICBXRUVLREFZU19TSE9SVCxcbiAgZ2V0RGVmYXVsdE1heERhdGUsXG4gIGdldERlZmF1bHRNaW5EYXRlLFxuICBpc0xlZ2FsRGF0ZVJhbmdlU3RyaW5nLFxuICBjb252ZXJ0RGF0ZVRvU3RyaW5nLFxuICBjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcsXG4gIGlzRGF5SW5SYW5nZSxcbn0gZnJvbSBcIi4vY29yZVwiXG5cbmNvbnN0IERheVBpY2tlciA9IERQUi5fX2VzTW9kdWxlID8gRFBSLmRlZmF1bHQgOiBEUFJcbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1kYXRlXCJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIElSYW5nZVBpY2tlclByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm5Zyo6YCJ5oup5ZCO77yM5raI5aSxIFBvcG92ZXJcbiAgICovXG4gIGNsb3NlT25TZWxlY3Q/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrpu5jorqTml6XmnJ/ojIPlm7RcbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdIHwgbnVsbFxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya6buY6K6k5piv5ZCm5pi+56S65LiL5ouJXG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZT86IGJvb2xlYW4gfCBudWxsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog56aB5q2i6YCJ5oup55qE5aSp77yMZGF5ID0+IGJvb2zvvJvmr4/kuIDlpKnmmK/nmoTml7bpl7TkuLogMTI6MDA6MDDvvIzov5nkuIDkuKrmmK/nlLEgZGF5LXBpY2tlci1yZWFjdCDlhrPlrprnmoTvvJtcbiAgICog5q+U6L6D5pel5pyf55qE5pe25YCZ5bCP5b+D6L+Z5LiA54K544CCXG4gICAqL1xuICBkaXNhYmxlZERheXM/OiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbiB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9rui+k+WFpeahhuexu+Wei1xuICAgKi9cbiAgaW50ZW50PzogXCJub3JtYWxcIiB8IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCJcbiAgLyoqXG4gICAqIOacgOWkp+mZkOWItuaXpeacn1xuICAgKi9cbiAgbWF4RGF0ZT86IERhdGVcbiAgLyoqXG4gICAqIOacgOWwj+mZkOWItuaXpeacn1xuICAgKi9cbiAgbWluRGF0ZT86IERhdGVcbiAgLyoqXG4gICAqIOaXpeacn+aUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86IChkYXRlOiBbRGF0ZSB8IG51bGwgfCB1bmRlZmluZWQsIERhdGUgfCBudWxsIHwgdW5kZWZpbmVkXSkgPT4gdm9pZFxuICAvKipcbiAgICog56ys5LqM5qyh54K55Ye75LqG5pel5pyf5pe255qEIGhhbmRsZXLvvIzljbPnu5PmnZ/pgInmi6lcbiAgICovXG4gIG9uRW5kRGF5U2VsZWN0PzogKGRhdGU6IERhdGUpID0+IHZvaWRcbiAgLyoqXG4gICAqIOesrOS4gOasoeeCueWHu+S6huaXpeacn+aXtueahCBoYW5kbGVy77yM5Y2z5byA5aeL6YCJ5oup77yI5Y+v5Lul5Zyo5q2k5pe26K6+572uIG1heERhdGUgbWluRGF0Ze+8jOWunueOsOaOp+WItuaXpeacn+mAieaLqeiMg+WbtOeahOWKn+iDve+8iVxuICAgKi9cbiAgb25TdGFydERheVNlbGVjdD86IChkYXRlOiBEYXRlKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDmmL7npLrnirbmgIHlj5HnlJ/lj5jljJbml7bnmoRoYW5kbGVyXG4gICAqL1xuICBvblZpc2libGVDaGFuZ2U/OiAodmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxuICAvKipcbiAgICog5Y2g5L2N5a2X56ymXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICAvKipcbiAgICog5by55Ye65bGC5L2N572uXG4gICAqL1xuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnRcbiAgLyoqXG4gICAqIOS8oOWFpSBQb3BvdmVyIOeahCBwcm9wc1xuICAgKi9cbiAgcG9wb3ZlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICAvKipcbiAgICog5b+r5o236YCJ5oup6aG577yM5qC85byP77yaXG4gICAqIFt7XG4gICAqIGxhYmVsOiBcIuelluWbveavjeS6sueUn+aXpVwiLCB2YWx1ZTogW25ldyBEYXRlKFwiMjAyMC0xMC0wMVwiKSwgbmV3IERhdGUoXCIyMDIwLTEwLTA3XCIpXVxuICAgKiB9XVxuICAgKi9cbiAgc2hvcnRjdXRzPzoge1xuICAgIC8qKlxuICAgICAqIOivpemhueeahOaWh+Wtl1xuICAgICAqL1xuICAgIGxhYmVsOiBSZWFjdC5SZWFjdE5vZGVcbiAgICAvKipcbiAgICAgKiDor6XpobnnmoTml6XmnJ9cbiAgICAgKi9cbiAgICB2YWx1ZTogW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF1cbiAgfVtdXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU/OiBudWxsIHwgXCJsaWdodFwiXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrlvZPliY3ml6XmnJ/ojIPlm7RcbiAgICovXG4gIHZhbHVlPzogW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF0gfCBudWxsXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKbmmL7npLrkuIvmi4npgInmi6lcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuIHwgbnVsbFxufVxuXG4vKipcbiAqIOaXpeacn+mAieaLqeWZqOeUqOS6juS6huino+W9k+WJjeW3sumAieaXpeacn++8jOmAieaLqeaIlui+k+WFpemcgOimgeeahOaXpeacn+OAgeaXpeacn+iMg+WbtOetieOAglxuICovXG5jb25zdCBSYW5nZVBpY2tlcjogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgSVJhbmdlUGlja2VyUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT5cbj4gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY2xvc2VPblNlbGVjdCxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGRlZmF1bHRWaXNpYmxlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlZERheXMsXG4gICAgICBpbnRlbnQsXG4gICAgICBtYXhEYXRlLFxuICAgICAgbWluRGF0ZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgb25FbmREYXlTZWxlY3QsXG4gICAgICBvblN0YXJ0RGF5U2VsZWN0LFxuICAgICAgb25WaXNpYmxlQ2hhbmdlLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBwb3BvdmVyUHJvcHMsXG4gICAgICBzaG9ydGN1dHMsXG4gICAgICBzaXplOiBzaXplUHJvcCxcbiAgICAgIHRoZW1lLFxuICAgICAgdmFsdWU6IHZhbHVlUHJvcCxcbiAgICAgIHZpc2libGU6IHZpc2libGVQcm9wLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElSYW5nZVBpY2tlclByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICAvKipcbiAgICAgKiBzZWxlY3RlZERheSDkuLrkvKDnu5kgRGF5UGlja2VyIOeahOacgOe7iCBEYXRlIE9iamVjdO+8jFxuICAgICAqIHZhbHVlIOS4uiBpbnB1dCDnmoTovpPlhaUgU3RyaW5n44CCXG4gICAgICovXG4gICAgY29uc3QgZ2V0SW5pdGlhbFN0YXRlID0gKCkgPT4ge1xuICAgICAgbGV0IHJhbmdlVmFsdWUgPSBcIlwiXG4gICAgICBsZXQgZnJvbVxuICAgICAgbGV0IHRvXG4gICAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsICYmIHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIDtbZnJvbSwgdG9dID0gdmFsdWVQcm9wXG4gICAgICAgIHJhbmdlVmFsdWUgPSBjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcodmFsdWVQcm9wKVxuICAgICAgfSBlbHNlIGlmIChkZWZhdWx0VmFsdWUgIT09IG51bGwgJiYgZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgO1tmcm9tLCB0b10gPSBkZWZhdWx0VmFsdWVcbiAgICAgICAgcmFuZ2VWYWx1ZSA9IGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyhkZWZhdWx0VmFsdWUpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZyb20sXG4gICAgICAgIG1vbnRoOiBmcm9tLFxuICAgICAgICByYW5nZVZhbHVlLFxuICAgICAgICB0byxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB1c2VNZW1vKGdldEluaXRpYWxTdGF0ZSwgW10pXG5cbiAgICBjb25zdCBbZW50ZXJlZFRvLCBzZXRFbnRlcmVkVG9dID0gdXNlU3RhdGU8RGF0ZSB8IG51bGwgfCB1bmRlZmluZWQ+KG51bGwpXG4gICAgY29uc3QgW2Zyb20sIHNldEZyb21dID0gdXNlU3RhdGU8RGF0ZSB8IG51bGwgfCB1bmRlZmluZWQ+KGluaXRpYWxTdGF0ZS5mcm9tKVxuICAgIGNvbnN0IFt0bywgc2V0VG9dID0gdXNlU3RhdGU8RGF0ZSB8IG51bGwgfCB1bmRlZmluZWQ+KGluaXRpYWxTdGF0ZS50bylcbiAgICBjb25zdCBbbW9udGgsIHNldE1vbnRoXSA9IHVzZVN0YXRlPERhdGUgfCBudWxsIHwgdW5kZWZpbmVkPihcbiAgICAgIGluaXRpYWxTdGF0ZS5tb250aFxuICAgIClcbiAgICBjb25zdCBbcHJldlZhbHVlUHJvcCwgc2V0UHJldlZhbHVlUHJvcF0gPVxuICAgICAgdXNlU3RhdGU8XG4gICAgICAgIFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdIHwgbnVsbCB8IHVuZGVmaW5lZFxuICAgICAgPih2YWx1ZVByb3ApXG4gICAgY29uc3QgW3JhbmdlVmFsdWUsIHNldFJhbmdlVmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihcbiAgICAgIGluaXRpYWxTdGF0ZS5yYW5nZVZhbHVlXG4gICAgKVxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KCgpID0+IHtcbiAgICAgIGlmICh2aXNpYmxlUHJvcCAhPT0gbnVsbCAmJiB2aXNpYmxlUHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB2aXNpYmxlUHJvcFxuICAgICAgfVxuICAgICAgaWYgKGRlZmF1bHRWaXNpYmxlICE9PSBudWxsICYmIGRlZmF1bHRWaXNpYmxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWaXNpYmxlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICAgIGlmIChcbiAgICAgIHZhbHVlUHJvcCAhPT0gbnVsbCAmJlxuICAgICAgdmFsdWVQcm9wICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHZhbHVlUHJvcCAhPT0gcHJldlZhbHVlUHJvcFxuICAgICkge1xuICAgICAgc2V0RnJvbSh2YWx1ZVByb3BbMF0pXG4gICAgICBzZXRUbyh2YWx1ZVByb3BbMV0pXG4gICAgICBzZXRSYW5nZVZhbHVlKGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyh2YWx1ZVByb3ApKVxuICAgICAgc2V0UHJldlZhbHVlUHJvcCh2YWx1ZVByb3ApXG4gICAgfVxuICAgIGlmICh2aXNpYmxlUHJvcCAhPT0gbnVsbCAmJiB2aXNpYmxlICE9PSAhIXZpc2libGVQcm9wKSB7XG4gICAgICBzZXRWaXNpYmxlKCEhdmlzaWJsZVByb3ApXG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuICAgIGNvbnN0IGRheVBpY2tlclJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG5cbiAgICBjb25zdCB7IHNpemU6IHNpemVDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG4gICAgY29uc3Qgc2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplUHJvcCwgc2l6ZUNvbnRleHQpXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LXJhbmdlQmFzZWAsXG4gICAgICBgJHtwcmVmaXh9LSR7c2l6ZX1gXG4gICAgKVxuXG4gICAgbGV0IGZyb21GaW5hbDogRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRcbiAgICBsZXQgZW50ZXJlZFRvRmluYWwgPSB0byB8fCBlbnRlcmVkVG9cbiAgICBjb25zdCBpc1JldmVyc2UgPVxuICAgICAgZnJvbSAmJiBlbnRlcmVkVG9GaW5hbCAmJiBEYXRlVXRpbHMuaXNEYXlBZnRlcihmcm9tLCBlbnRlcmVkVG9GaW5hbClcbiAgICBpZiAoaXNSZXZlcnNlKSB7XG4gICAgICBmcm9tRmluYWwgPSBlbnRlcmVkVG9GaW5hbFxuICAgICAgZW50ZXJlZFRvRmluYWwgPSBmcm9tXG4gICAgfSBlbHNlIHtcbiAgICAgIGZyb21GaW5hbCA9IGZyb21cbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZERheXMgPSBbXG4gICAgICBmcm9tRmluYWwsXG4gICAgICB7XG4gICAgICAgIGZyb206IGZyb21GaW5hbCxcbiAgICAgICAgdG86IGVudGVyZWRUb0ZpbmFsLFxuICAgICAgfSxcbiAgICBdXG4gICAgY29uc3QgbW9kaWZpZXJzID0ge1xuICAgICAgW2Ake3ByZWZpeH0tcmFuZ2VTdGFydGBdOiBpc1JldmVyc2UgPyB0byAmJiBmcm9tRmluYWwgOiBmcm9tRmluYWwsXG4gICAgICBbYCR7cHJlZml4fS1yYW5nZVN0YXJ0SG92ZXJgXTogaXNSZXZlcnNlICYmICF0byAmJiBmcm9tRmluYWwsXG4gICAgICBbYCR7cHJlZml4fS1yYW5nZUVuZGBdOiBpc1JldmVyc2UgPyBlbnRlcmVkVG9GaW5hbCA6IHRvICYmIGVudGVyZWRUb0ZpbmFsLFxuICAgICAgW2Ake3ByZWZpeH0tcmFuZ2VFbmRIb3ZlcmBdOiAhaXNSZXZlcnNlICYmICF0byAmJiBlbnRlcmVkVG9GaW5hbCxcbiAgICAgIFtgJHtwcmVmaXh9LXNlbGVjdGVkUmFuZ2VgXTogKGRheTogRGF0ZSkgPT5cbiAgICAgICAgaXNEYXlJblJhbmdlKGRheSwgW2Zyb21GaW5hbCwgZW50ZXJlZFRvRmluYWxdLCB0cnVlKSxcbiAgICB9XG5cbiAgICBjb25zdCBzaG9ydGN1dHNFbmFibGVkID0gc2hvcnRjdXRzICYmIHNob3J0Y3V0cy5sZW5ndGggPiAwXG5cbiAgICBjb25zdCByYW5nZTogW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF0gPSBbXG4gICAgICBmcm9tRmluYWwsXG4gICAgICBlbnRlcmVkVG9GaW5hbCxcbiAgICBdXG5cbiAgICBjb25zdCBpc0RheURpc2FibGVkID0gKGRheTogRGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIGRpc2FibGVkRGF5c1xuICAgICAgICA/IGRpc2FibGVkRGF5cyhkYXkpIHx8XG4gICAgICAgICAgICBEYXRlVXRpbHMuaXNEYXlCZWZvcmUoZGF5LCBtaW5EYXRlKSB8fFxuICAgICAgICAgICAgRGF0ZVV0aWxzLmlzRGF5QWZ0ZXIoZGF5LCBtYXhEYXRlKVxuICAgICAgICA6IG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVWaXNpYmxlQ2hhbmdlID0gKGJvb2w6IGJvb2xlYW4pID0+IHtcbiAgICAgIGNvbnN0IHsgaW5wdXQ6IGlucHV0RWxlbWVudCB9ID0gaW5wdXRSZWYuY3VycmVudFxuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgYWN0aXZlRWxlbWVudCB9ID0gZG9jdW1lbnRcbiAgICAgICAgaWYgKGJvb2wgfHwgKCFib29sICYmIGlucHV0RWxlbWVudCAhPT0gYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICBjb25zdCBuZXdWYWwgPSBjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcoW2Zyb20sIHRvXSlcbiAgICAgICAgICBpZiAoIWJvb2wpIHtcbiAgICAgICAgICAgIGlmICghdG8pIHtcbiAgICAgICAgICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlUmVzZXQgPSByYW5nZVZhbHVlLnNwbGl0KFwiIC0gXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRGcm9tKG5ldyBEYXRlKHJhbmdlUmVzZXRbMF0pKVxuICAgICAgICAgICAgICAgICAgc2V0VG8obmV3IERhdGUocmFuZ2VSZXNldFsxXSkpXG4gICAgICAgICAgICAgICAgfSwgMjUwKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJhbmdlVmFsdWUgIT09IG5ld1ZhbCkge1xuICAgICAgICAgICAgICBzZXRSYW5nZVZhbHVlKG5ld1ZhbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgICAgb25WaXNpYmxlQ2hhbmdlKGJvb2wpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2aXNpYmxlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0VmlzaWJsZShib29sKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICBjb25zdCBpc1NlbGVjdGluZ0ZpcnN0RGF5ID0gKFxuICAgICAgZnJvbUFyZz86IERhdGUgfCBudWxsLFxuICAgICAgdG9Bcmc/OiBEYXRlIHwgbnVsbFxuICAgICkgPT4ge1xuICAgICAgY29uc3QgaXNSYW5nZVNlbGVjdGVkID0gZnJvbUFyZyAmJiB0b0FyZ1xuICAgICAgcmV0dXJuICFmcm9tQXJnIHx8IGlzUmFuZ2VTZWxlY3RlZFxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZURheUNsaWNrID0gKGRheTogRGF0ZSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBEYXRlVXRpbHMuaXNEYXlCZWZvcmUoZGF5LCBtaW5EYXRlKSB8fFxuICAgICAgICBEYXRlVXRpbHMuaXNEYXlBZnRlcihkYXksIG1heERhdGUpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoaXNTZWxlY3RpbmdGaXJzdERheShmcm9tLCB0bykpIHtcbiAgICAgICAgaWYgKG9uU3RhcnREYXlTZWxlY3QpIHtcbiAgICAgICAgICBvblN0YXJ0RGF5U2VsZWN0KGRheSlcbiAgICAgICAgfVxuICAgICAgICBzZXRFbnRlcmVkVG8obnVsbClcbiAgICAgICAgc2V0RnJvbShkYXkpXG4gICAgICAgIHNldFRvKG51bGwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAob25FbmREYXlTZWxlY3QpIHtcbiAgICAgICAgICBvbkVuZERheVNlbGVjdChkYXkpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ld1JhbmdlOiBbRGF0ZSB8IG51bGwgfCB1bmRlZmluZWQsIERhdGUgfCBudWxsIHwgdW5kZWZpbmVkXVxuICAgICAgICBjb25zdCBmcm9tU3RyID0gY29udmVydERhdGVUb1N0cmluZyhmcm9tKVxuICAgICAgICBjb25zdCB0b1N0ciA9IGNvbnZlcnREYXRlVG9TdHJpbmcoZGF5KVxuICAgICAgICBsZXQgbmV3UmFuZ2VWYWx1ZSA9IFwiXCJcbiAgICAgICAgaWYgKERhdGVVdGlscy5pc0RheUFmdGVyKGRheSwgZnJvbSkpIHtcbiAgICAgICAgICBuZXdSYW5nZSA9IFtmcm9tLCBkYXldXG4gICAgICAgICAgbmV3UmFuZ2VWYWx1ZSA9IGAke2Zyb21TdHJ9IC0gJHt0b1N0cn1gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3UmFuZ2UgPSBbZGF5LCBmcm9tXVxuICAgICAgICAgIG5ld1JhbmdlVmFsdWUgPSBgJHt0b1N0cn0gLSAke2Zyb21TdHJ9YFxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICBzZXRFbnRlcmVkVG8oZGF5KVxuICAgICAgICAgIHNldFJhbmdlVmFsdWUobmV3UmFuZ2VWYWx1ZSlcbiAgICAgICAgICBzZXRUbyhkYXkpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UobmV3UmFuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgICAvLyDlu7bov5/mmK/kuLrkuoborqnnirbmgIHnmoTlj5jljJblnKjop4bop4nkuIrlhYjooqvmjqXlj5dcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgb25WaXNpYmxlQ2hhbmdlKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHNldFZpc2libGUoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRGF5TW91c2VFbnRlciA9IChkYXk6IERhdGUpID0+IHtcbiAgICAgIGlmICghaXNTZWxlY3RpbmdGaXJzdERheShmcm9tLCB0bykpIHtcbiAgICAgICAgc2V0RW50ZXJlZFRvKGRheSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEYXlNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgICAgc2V0RW50ZXJlZFRvKG51bGwpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoe1xuICAgICAgdGFyZ2V0LFxuICAgIH06IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBjb25zdCB7IHZhbHVlOiB2YWwgfSA9IHRhcmdldFxuICAgICAgc2V0UmFuZ2VWYWx1ZSh2YWwpXG4gICAgICBpZiAodmFsLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgc2V0RW50ZXJlZFRvKG51bGwpXG4gICAgICAgICAgc2V0RnJvbShudWxsKVxuICAgICAgICAgIHNldFRvKG51bGwpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoW3VuZGVmaW5lZCwgdW5kZWZpbmVkXSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc0xlZ2FsRGF0ZVJhbmdlU3RyaW5nKHZhbCkpIHtcbiAgICAgICAgY29uc3QgcmFuZ2VWYWx1ZVN0cnMgPSB2YWwuc3BsaXQoXCIgLSBcIilcbiAgICAgICAgY29uc3QgbmV3RnJvbSA9IG5ldyBEYXRlKHJhbmdlVmFsdWVTdHJzWzBdKVxuICAgICAgICBjb25zdCBuZXdUbyA9IG5ldyBEYXRlKHJhbmdlVmFsdWVTdHJzWzFdKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWlzRGF5RGlzYWJsZWQobmV3RnJvbSkgJiZcbiAgICAgICAgICAhaXNEYXlEaXNhYmxlZChuZXdUbykgJiZcbiAgICAgICAgICAhRGF0ZVV0aWxzLmlzRGF5QmVmb3JlKG5ld1RvLCBuZXdGcm9tKSAmJlxuICAgICAgICAgICEoXG4gICAgICAgICAgICBEYXRlVXRpbHMuaXNTYW1lRGF5KGZyb20sIG5ld0Zyb20pICYmIERhdGVVdGlscy5pc1NhbWVEYXkodG8sIG5ld1RvKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0RnJvbShuZXdGcm9tKVxuICAgICAgICAgICAgc2V0VG8obmV3VG8pXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOS/ruaUueaXpeacn+WQjueahCBtb250aCDot7PovaxcbiAgICAgICAgICBpZiAoIURhdGVVdGlscy5pc1NhbWVEYXkoZnJvbSwgbmV3RnJvbSkpIHtcbiAgICAgICAgICAgIHNldE1vbnRoKG5ld0Zyb20pXG4gICAgICAgICAgfSBlbHNlIGlmICghRGF0ZVV0aWxzLmlzU2FtZURheSh0bywgbmV3VG8pKSB7XG4gICAgICAgICAgICBzZXRNb250aChuZXdUbylcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICBvbkNoYW5nZShbbmV3RnJvbSwgbmV3VG9dKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Rm9jdXMgPSAoKSA9PiB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZSh0cnVlKVxuICAgICAgICB9XG4gICAgICAgIGlmICh2aXNpYmxlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0S2V5RG93biA9ICh7XG4gICAgICBrZXlDb2RlLFxuICAgIH06IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IGtleXMgPSBbOSwgMTMsIDI3XVxuICAgICAgaWYgKGtleXMuaW5jbHVkZXMoa2V5Q29kZSkpIHtcbiAgICAgICAgaGFuZGxlVmlzaWJsZUNoYW5nZShmYWxzZSlcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5pbnB1dC5ibHVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVNb250aENoYW5nZSA9IChcbiAgICAgIGRhdGU6IERhdGUsXG4gICAgICBlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+XG4gICAgKSA9PiB7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBjb25zdCB7IGN1cnJlbnRUYXJnZXQ6IHRhcmdldCB9ID0gZVxuICAgICAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGFyZ2V0ICYmIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBjb25zdCBkYXlQaWNrZXJSZWN0ID1cbiAgICAgICAgICBkYXlQaWNrZXJSZWYuY3VycmVudC5kYXlQaWNrZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGFyZ2V0Lm5hbWUgPT09IFwibW9udGhcIiAmJlxuICAgICAgICAgICh0YXJnZXRSZWN0LmxlZnQgLSBkYXlQaWNrZXJSZWN0LmxlZnQpICogMiA+IGRheVBpY2tlclJlY3Qud2lkdGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgLSAxKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgbmV3TW9udGggPSBkYXRlXG4gICAgICBpZiAoRGF0ZVV0aWxzLmlzRGF5QWZ0ZXIoZGF0ZSwgbWF4RGF0ZSkpIHtcbiAgICAgICAgaWYgKG1heERhdGUpIHtcbiAgICAgICAgICBuZXdNb250aCA9IG1heERhdGVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChEYXRlVXRpbHMuaXNEYXlCZWZvcmUoZGF0ZSwgbWluRGF0ZSkpIHtcbiAgICAgICAgaWYgKG1pbkRhdGUpIHtcbiAgICAgICAgICBuZXdNb250aCA9IG1pbkRhdGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2V0TW9udGgobmV3TW9udGgpXG4gICAgfVxuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICBpbnB1dDogaW5wdXRSZWYuY3VycmVudCxcbiAgICAgIGhhbmRsZURheUNsaWNrLFxuICAgICAgaGFuZGxlVmlzaWJsZUNoYW5nZSxcbiAgICB9KSlcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wb3ZlclxuICAgICAgICBhcnJvd2VkPXtmYWxzZX1cbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXtoYW5kbGVWaXNpYmxlQ2hhbmdlfVxuICAgICAgICBwbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgcG9wdXA9e1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcHVwYH0+XG4gICAgICAgICAgICB7c2hvcnRjdXRzRW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgIDxTaG9ydGN1dHNcbiAgICAgICAgICAgICAgICBvblNob3J0Y3V0Q2xpY2s9eyh2YWx1ZVNob3J0Y3V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZVNob3J0Y3V0KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcm9tU2hvcnRjdXQgPSB2YWx1ZVNob3J0Y3V0WzBdXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvU2hvcnRjdXQgPSB2YWx1ZVNob3J0Y3V0WzFdXG4gICAgICAgICAgICAgICAgICAgIHNldEZyb20oZnJvbVNob3J0Y3V0KVxuICAgICAgICAgICAgICAgICAgICBzZXRNb250aChmcm9tU2hvcnRjdXQpXG4gICAgICAgICAgICAgICAgICAgIHNldFRvKHRvU2hvcnRjdXQpXG4gICAgICAgICAgICAgICAgICAgIHNldFJhbmdlVmFsdWUoY29udmVydERhdGVSYW5nZVRvU3RyaW5nKHZhbHVlU2hvcnRjdXQpKVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHZhbHVlU2hvcnRjdXQpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VPblNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIOW7tui/n+aYr+S4uuS6huiuqeeKtuaAgeeahOWPmOWMluWcqOinhuinieS4iuWFiOiiq+aOpeWPl1xuICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17cmFuZ2V9XG4gICAgICAgICAgICAgICAgc2hvcnRjdXRzPXtzaG9ydGN1dHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPERheVBpY2tlclxuICAgICAgICAgICAgICByZWY9e2RheVBpY2tlclJlZn1cbiAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9ezJ9XG4gICAgICAgICAgICAgIGRpc2FibGVkRGF5cz17aXNEYXlEaXNhYmxlZH1cbiAgICAgICAgICAgICAgZnJvbU1vbnRoPXttaW5EYXRlfVxuICAgICAgICAgICAgICB0b01vbnRoPXttYXhEYXRlfVxuICAgICAgICAgICAgICBjYW5DaGFuZ2VNb250aFxuICAgICAgICAgICAgICBjbGFzc05hbWVzPXtzdHlsZXN9XG4gICAgICAgICAgICAgIG1vbnRoPXttb250aH1cbiAgICAgICAgICAgICAgbW9udGhzPXtNT05USFN9XG4gICAgICAgICAgICAgIHdlZWtkYXlzTG9uZz17V0VFS0RBWVNfTE9OR31cbiAgICAgICAgICAgICAgd2Vla2RheXNTaG9ydD17V0VFS0RBWVNfU0hPUlR9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17c2VsZWN0ZWREYXlzfVxuICAgICAgICAgICAgICBuYXZiYXJFbGVtZW50PXtcbiAgICAgICAgICAgICAgICA8TmF2YmFyXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICAgICAgICAgIG9uTWFudWFsbHlDaGFuZ2VNb250aD17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRNb250aChtaW5EYXRlKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHsuLi5OYXZiYXJFbGVtZW50UHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXB0aW9uRWxlbWVudD17XG4gICAgICAgICAgICAgICAgPENhcHRpb25cbiAgICAgICAgICAgICAgICAgIG1heERhdGU9e21heERhdGV9XG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXttaW5EYXRlfVxuICAgICAgICAgICAgICAgICAgb25EYXRlQ2hhbmdlPXtoYW5kbGVNb250aENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHsuLi5DYXB0aW9uRWxlbWVudFByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25EYXlNb3VzZUVudGVyPXtoYW5kbGVEYXlNb3VzZUVudGVyfVxuICAgICAgICAgICAgICBvbkRheU1vdXNlTGVhdmU9e2hhbmRsZURheU1vdXNlTGVhdmV9XG4gICAgICAgICAgICAgIG9uRGF5Q2xpY2s9e2hhbmRsZURheUNsaWNrfVxuICAgICAgICAgICAgICByZW5kZXJEYXk9eyhkYXk6IERhdGUpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsYH0+e2RheS5nZXREYXRlKCl9PC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBwb3B1cFN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IHNob3J0Y3V0c0VuYWJsZWQgPyBcIjU3NnB4XCIgOiBcIjQ3NnB4XCIsXG4gICAgICAgICAgbWF4V2lkdGg6IHNob3J0Y3V0c0VuYWJsZWQgPyBcIjU3NnB4XCIgOiBcIjQ3NnB4XCIsXG4gICAgICAgIH19XG4gICAgICAgIHRyaWdnZXI9XCJjbGlja1wiXG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgIHsuLi5wb3BvdmVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGludGVudD17aW50ZW50fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVJbnB1dEZvY3VzfVxuICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlSW5wdXRLZXlEb3dufVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIHJpZ2h0RWxlbWVudD17PEljb24gaWNvbj1cImNhbGVuZGFyLW91dGxpbmVkXCIgLz59XG4gICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgdmFsdWU9e3JhbmdlVmFsdWV9XG4gICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgKVxuICB9XG4pXG5cblJhbmdlUGlja2VyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm5Zyo6YCJ5oup5ZCO77yM5raI5aSxIFBvcG92ZXJcbiAgICovXG4gIGNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya6buY6K6k5pel5pyf6IyD5Zu0XG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrpu5jorqTmmK/lkKbmmL7npLrkuIvmi4lcbiAgICovXG4gIGRlZmF1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog56aB5q2i6YCJ5oup55qE5aSp77yMZGF5ID0+IGJvb2zvvJvmr4/kuIDlpKnmmK/nmoTml7bpl7TkuLogMTI6MDA6MDDvvIzov5nkuIDkuKrmmK/nlLEgZGF5LXBpY2tlci1yZWFjdCDlhrPlrprnmoTvvJtcbiAgICog5q+U6L6D5pel5pyf55qE5pe25YCZ5bCP5b+D6L+Z5LiA54K544CCXG4gICAqL1xuICBkaXNhYmxlZERheXM6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6K6+572u6L6T5YWl5qGG57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJub3JtYWxcIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOacgOWkp+mZkOWItuaXpeacn1xuICAgKi9cbiAgbWF4RGF0ZTogUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIC8qKlxuICAgKiDmnIDlsI/pmZDliLbml6XmnJ9cbiAgICovXG4gIG1pbkRhdGU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAvKipcbiAgICog5pel5pyf5pS55Y+Y5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOesrOS6jOasoeeCueWHu+S6huaXpeacn+aXtueahCBoYW5kbGVy77yM5Y2z57uT5p2f6YCJ5oupXG4gICAqL1xuICBvbkVuZERheVNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDnrKzkuIDmrKHngrnlh7vkuobml6XmnJ/ml7bnmoQgaGFuZGxlcu+8jOWNs+W8gOWni+mAieaLqe+8iOWPr+S7peWcqOatpOaXtuiuvue9riBtYXhEYXRlIG1pbkRhdGXvvIzlrp7njrDmjqfliLbml6XmnJ/pgInmi6nojIPlm7TnmoTlip/og73vvIlcbiAgICovXG4gIG9uU3RhcnREYXlTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5pi+56S654q25oCB5Y+R55Sf5Y+Y5YyW5pe255qEaGFuZGxlclxuICAgKi9cbiAgb25WaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOWNoOS9jeWtl+esplxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlvLnlh7rlsYLkvY3nva5cbiAgICovXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInRvcFwiLFxuICAgIFwibGVmdFwiLFxuICAgIFwicmlnaHRcIixcbiAgICBcImJvdHRvbVwiLFxuICAgIFwidG9wTGVmdFwiLFxuICAgIFwidG9wUmlnaHRcIixcbiAgICBcImJvdHRvbUxlZnRcIixcbiAgICBcImJvdHRvbVJpZ2h0XCIsXG4gICAgXCJsZWZ0VG9wXCIsXG4gICAgXCJsZWZ0Qm90dG9tXCIsXG4gICAgXCJyaWdodFRvcFwiLFxuICAgIFwicmlnaHRCb3R0b21cIixcbiAgXSksXG4gIC8qKlxuICAgKiDkvKDlhaUgUG9wb3ZlciDnmoQgcHJvcHNcbiAgICovXG4gIHBvcG92ZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOW/q+aNt+mAieaLqemhue+8jOagvOW8j++8mlxuICAgKiBbe1xuICAgKiBsYWJlbDogXCLnpZblm73mr43kurLnlJ/ml6VcIiwgdmFsdWU6IFtuZXcgRGF0ZShcIjIwMjAtMTAtMDFcIiksIG5ldyBEYXRlKFwiMjAyMC0xMC0wN1wiKV1cbiAgICogfV1cbiAgICovXG4gIHNob3J0Y3V0czogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsaWdodFwiXSksXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrlvZPliY3ml6XmnJ/ojIPlm7RcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5piv5ZCm5pi+56S65LiL5ouJ6YCJ5oupXG4gICAqL1xuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbn1cblxuUmFuZ2VQaWNrZXIuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IFwiXCIsXG4gIGNsb3NlT25TZWxlY3Q6IGZhbHNlLFxuICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gIGRlZmF1bHRWaXNpYmxlOiBudWxsLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGRpc2FibGVkRGF5czogbm9vcCxcbiAgaW50ZW50OiBcIm5vcm1hbFwiLFxuICBtYXhEYXRlOiBnZXREZWZhdWx0TWF4RGF0ZSgpLFxuICBtaW5EYXRlOiBnZXREZWZhdWx0TWluRGF0ZSgpLFxuICBvbkNoYW5nZTogbm9vcCxcbiAgb25FbmREYXlTZWxlY3Q6IG5vb3AsXG4gIG9uU3RhcnREYXlTZWxlY3Q6IG5vb3AsXG4gIG9uVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgcGxhY2Vob2xkZXI6IFwi6YCJ5oup5pel5pyf6IyD5Zu0XCIsXG4gIHBsYWNlbWVudDogXCJib3R0b21MZWZ0XCIsXG4gIHBvcG92ZXJQcm9wczoge30sXG4gIHNob3J0Y3V0czogdW5kZWZpbmVkLFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHRoZW1lOiBudWxsLFxuICB2YWx1ZTogbnVsbCxcbiAgdmlzaWJsZTogbnVsbCxcbn1cblxuUmFuZ2VQaWNrZXIuZGlzcGxheU5hbWUgPSBcIlJhbmdlUGlja2VyXCJcblxuZXhwb3J0IGRlZmF1bHQgUmFuZ2VQaWNrZXJcbiJdfQ==