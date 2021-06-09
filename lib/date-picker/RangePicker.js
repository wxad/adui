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
    }), _react["default"].createElement(_dayPickerReact["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvUmFuZ2VQaWNrZXIudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIm5vb3AiLCJSYW5nZVBpY2tlciIsInJlZiIsImNsYXNzTmFtZSIsImNsb3NlT25TZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJkZWZhdWx0VmlzaWJsZSIsImRpc2FibGVkIiwiZGlzYWJsZWREYXlzIiwiaW50ZW50IiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJvbkNoYW5nZSIsIm9uRW5kRGF5U2VsZWN0Iiwib25TdGFydERheVNlbGVjdCIsIm9uVmlzaWJsZUNoYW5nZSIsInBsYWNlaG9sZGVyIiwicGxhY2VtZW50IiwicG9wb3ZlclByb3BzIiwic2hvcnRjdXRzIiwic2l6ZVByb3AiLCJzaXplIiwidGhlbWUiLCJ2YWx1ZVByb3AiLCJ2YWx1ZSIsInZpc2libGVQcm9wIiwidmlzaWJsZSIsIm90aGVyUHJvcHMiLCJnZXRJbml0aWFsU3RhdGUiLCJyYW5nZVZhbHVlIiwiZnJvbSIsInRvIiwidW5kZWZpbmVkIiwibW9udGgiLCJpbml0aWFsU3RhdGUiLCJlbnRlcmVkVG8iLCJzZXRFbnRlcmVkVG8iLCJzZXRGcm9tIiwic2V0VG8iLCJzZXRNb250aCIsInByZXZWYWx1ZVByb3AiLCJzZXRQcmV2VmFsdWVQcm9wIiwic2V0UmFuZ2VWYWx1ZSIsInNldFZpc2libGUiLCJpbnB1dFJlZiIsImRheVBpY2tlclJlZiIsIkNvbmZpZ0NvbnRleHQiLCJzaXplQ29udGV4dCIsImNsYXNzU2V0IiwiZnJvbUZpbmFsIiwiZW50ZXJlZFRvRmluYWwiLCJpc1JldmVyc2UiLCJEYXRlVXRpbHMiLCJpc0RheUFmdGVyIiwic2VsZWN0ZWREYXlzIiwibW9kaWZpZXJzIiwiZGF5Iiwic2hvcnRjdXRzRW5hYmxlZCIsImxlbmd0aCIsInJhbmdlIiwiaXNEYXlEaXNhYmxlZCIsImlzRGF5QmVmb3JlIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsImJvb2wiLCJpbnB1dEVsZW1lbnQiLCJjdXJyZW50IiwiaW5wdXQiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwibmV3VmFsIiwicmFuZ2VSZXNldCIsInNwbGl0IiwiRGF0ZSIsImlzU2VsZWN0aW5nRmlyc3REYXkiLCJmcm9tQXJnIiwidG9BcmciLCJpc1JhbmdlU2VsZWN0ZWQiLCJoYW5kbGVEYXlDbGljayIsIm5ld1JhbmdlIiwiZnJvbVN0ciIsInRvU3RyIiwibmV3UmFuZ2VWYWx1ZSIsImhhbmRsZURheU1vdXNlRW50ZXIiLCJoYW5kbGVEYXlNb3VzZUxlYXZlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWwiLCJ0cmltIiwicmFuZ2VWYWx1ZVN0cnMiLCJuZXdGcm9tIiwibmV3VG8iLCJpc1NhbWVEYXkiLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlSW5wdXRLZXlEb3duIiwia2V5Q29kZSIsImtleXMiLCJpbmNsdWRlcyIsImJsdXIiLCJoYW5kbGVNb250aENoYW5nZSIsImRhdGUiLCJlIiwiY3VycmVudFRhcmdldCIsInRhcmdldFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJkYXlQaWNrZXJSZWN0IiwiZGF5UGlja2VyIiwibmFtZSIsImxlZnQiLCJ3aWR0aCIsImdldE1vbnRoIiwibmV3TW9udGgiLCJ2YWx1ZVNob3J0Y3V0IiwiQXJyYXkiLCJpc0FycmF5IiwiZnJvbVNob3J0Y3V0IiwidG9TaG9ydGN1dCIsInN0eWxlcyIsIk1PTlRIUyIsIldFRUtEQVlTX0xPTkciLCJXRUVLREFZU19TSE9SVCIsIk5hdmJhckVsZW1lbnRQcm9wcyIsIkNhcHRpb25FbGVtZW50UHJvcHMiLCJnZXREYXRlIiwibWF4V2lkdGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJmdW5jIiwib25lT2YiLCJpbnN0YW5jZU9mIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQVFBOztBQUNBOztBQUNBOztBQUtBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUEsSUFBTUEsTUFBTSxHQUFHLFdBQWY7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQTBHQSxJQUFNQyxXQUVMLEdBQUcsdUJBQ0YsZ0JBeUJFQyxHQXpCRixFQTBCSztBQUFBOztBQUFBLE1BeEJEQyxTQXdCQyxRQXhCREEsU0F3QkM7QUFBQSxNQXZCREMsYUF1QkMsUUF2QkRBLGFBdUJDO0FBQUEsTUF0QkRDLFlBc0JDLFFBdEJEQSxZQXNCQztBQUFBLE1BckJEQyxjQXFCQyxRQXJCREEsY0FxQkM7QUFBQSxNQXBCREMsUUFvQkMsUUFwQkRBLFFBb0JDO0FBQUEsTUFuQkRDLFlBbUJDLFFBbkJEQSxZQW1CQztBQUFBLE1BbEJEQyxNQWtCQyxRQWxCREEsTUFrQkM7QUFBQSxNQWpCREMsT0FpQkMsUUFqQkRBLE9BaUJDO0FBQUEsTUFoQkRDLE9BZ0JDLFFBaEJEQSxPQWdCQztBQUFBLE1BZkRDLFFBZUMsUUFmREEsUUFlQztBQUFBLE1BZERDLGNBY0MsUUFkREEsY0FjQztBQUFBLE1BYkRDLGdCQWFDLFFBYkRBLGdCQWFDO0FBQUEsTUFaREMsZUFZQyxRQVpEQSxlQVlDO0FBQUEsTUFYREMsV0FXQyxRQVhEQSxXQVdDO0FBQUEsTUFWREMsU0FVQyxRQVZEQSxTQVVDO0FBQUEsTUFUREMsWUFTQyxRQVREQSxZQVNDO0FBQUEsTUFSREMsU0FRQyxRQVJEQSxTQVFDO0FBQUEsTUFQS0MsUUFPTCxRQVBEQyxJQU9DO0FBQUEsTUFOREMsS0FNQyxRQU5EQSxLQU1DO0FBQUEsTUFMTUMsU0FLTixRQUxEQyxLQUtDO0FBQUEsTUFKUUMsV0FJUixRQUpEQyxPQUlDO0FBQUEsTUFIRUMsVUFHRjs7QUFLSCxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsUUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsUUFBSUMsSUFBSjtBQUNBLFFBQUlDLEVBQUo7O0FBQ0EsUUFBSVIsU0FBUyxLQUFLLElBQWQsSUFBc0JBLFNBQVMsS0FBS1MsU0FBeEMsRUFBbUQ7QUFDakQ7O0FBRGlELHNDQUNuQ1QsU0FEbUM7O0FBQy9DTyxNQUFBQSxJQUQrQztBQUN6Q0MsTUFBQUEsRUFEeUM7QUFFakRGLE1BQUFBLFVBQVUsR0FBRyxvQ0FBeUJOLFNBQXpCLENBQWI7QUFDRCxLQUhELE1BR08sSUFBSWxCLFlBQVksS0FBSyxJQUFqQixJQUF5QkEsWUFBWSxLQUFLMkIsU0FBOUMsRUFBeUQ7QUFDOUQ7O0FBRDhELHlDQUNoRDNCLFlBRGdEOztBQUM1RHlCLE1BQUFBLElBRDREO0FBQ3REQyxNQUFBQSxFQURzRDtBQUU5REYsTUFBQUEsVUFBVSxHQUFHLG9DQUF5QnhCLFlBQXpCLENBQWI7QUFDRDs7QUFFRCxXQUFPO0FBQ0x5QixNQUFBQSxJQUFJLEVBQUpBLElBREs7QUFFTEcsTUFBQUEsS0FBSyxFQUFFSCxJQUZGO0FBR0xELE1BQUFBLFVBQVUsRUFBVkEsVUFISztBQUlMRSxNQUFBQSxFQUFFLEVBQUZBO0FBSkssS0FBUDtBQU1ELEdBbEJEOztBQW9CQSxNQUFNRyxZQUFZLEdBQUcsb0JBQVFOLGVBQVIsRUFBeUIsRUFBekIsQ0FBckI7O0FBekJHLGtCQTJCK0IscUJBQWtDLElBQWxDLENBM0IvQjtBQUFBO0FBQUEsTUEyQklPLFNBM0JKO0FBQUEsTUEyQmVDLFlBM0JmOztBQUFBLG1CQTRCcUIscUJBQWtDRixZQUFZLENBQUNKLElBQS9DLENBNUJyQjtBQUFBO0FBQUEsTUE0QklBLElBNUJKO0FBQUEsTUE0QlVPLE9BNUJWOztBQUFBLG1CQTZCaUIscUJBQWtDSCxZQUFZLENBQUNILEVBQS9DLENBN0JqQjtBQUFBO0FBQUEsTUE2QklBLEVBN0JKO0FBQUEsTUE2QlFPLEtBN0JSOztBQUFBLG1CQThCdUIscUJBQ3hCSixZQUFZLENBQUNELEtBRFcsQ0E5QnZCO0FBQUE7QUFBQSxNQThCSUEsS0E5Qko7QUFBQSxNQThCV00sUUE5Qlg7O0FBQUEsbUJBa0NELHFCQUVFaEIsU0FGRixDQWxDQztBQUFBO0FBQUEsTUFpQ0lpQixhQWpDSjtBQUFBLE1BaUNtQkMsZ0JBakNuQjs7QUFBQSxvQkFxQ2lDLHFCQUNsQ1AsWUFBWSxDQUFDTCxVQURxQixDQXJDakM7QUFBQTtBQUFBLE1BcUNJQSxVQXJDSjtBQUFBLE1BcUNnQmEsYUFyQ2hCOztBQUFBLG9CQXdDMkIscUJBQWtCLFlBQU07QUFDcEQsUUFBSWpCLFdBQVcsS0FBSyxJQUFoQixJQUF3QkEsV0FBVyxLQUFLTyxTQUE1QyxFQUF1RDtBQUNyRCxhQUFPUCxXQUFQO0FBQ0Q7O0FBQ0QsUUFBSW5CLGNBQWMsS0FBSyxJQUFuQixJQUEyQkEsY0FBYyxLQUFLMEIsU0FBbEQsRUFBNkQ7QUFDM0QsYUFBTzFCLGNBQVA7QUFDRDs7QUFDRCxXQUFPLEtBQVA7QUFDRCxHQVI2QixDQXhDM0I7QUFBQTtBQUFBLE1Bd0NJb0IsT0F4Q0o7QUFBQSxNQXdDYWlCLFVBeENiOztBQW1ESCxNQUNFcEIsU0FBUyxLQUFLLElBQWQsSUFDQUEsU0FBUyxLQUFLUyxTQURkLElBRUFULFNBQVMsS0FBS2lCLGFBSGhCLEVBSUU7QUFDQUgsSUFBQUEsT0FBTyxDQUFDZCxTQUFTLENBQUMsQ0FBRCxDQUFWLENBQVA7QUFDQWUsSUFBQUEsS0FBSyxDQUFDZixTQUFTLENBQUMsQ0FBRCxDQUFWLENBQUw7QUFDQW1CLElBQUFBLGFBQWEsQ0FBQyxvQ0FBeUJuQixTQUF6QixDQUFELENBQWI7QUFDQWtCLElBQUFBLGdCQUFnQixDQUFDbEIsU0FBRCxDQUFoQjtBQUNEOztBQUNELE1BQUlFLFdBQVcsS0FBSyxJQUFoQixJQUF3QkMsT0FBTyxLQUFLLENBQUMsQ0FBQ0QsV0FBMUMsRUFBdUQ7QUFDckRrQixJQUFBQSxVQUFVLENBQUMsQ0FBQyxDQUFDbEIsV0FBSCxDQUFWO0FBQ0Q7O0FBRUQsTUFBTW1CLFFBQVEsR0FBRyxtQkFBWSxJQUFaLENBQWpCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLG1CQUFZLElBQVosQ0FBckI7O0FBbEVHLG9CQW9FMkIsdUJBQVdDLDZCQUFYLENBcEUzQjtBQUFBLE1Bb0VXQyxXQXBFWCxlQW9FSzFCLElBcEVMOztBQXFFSCxNQUFNQSxJQUFJLEdBQUcscUNBQWdCRCxRQUFoQixFQUEwQjJCLFdBQTFCLENBQWI7QUFFQSxNQUFNQyxRQUFRLEdBQUcsNEJBQ2Y3QyxTQURlLFlBRVpKLE1BRlksMkJBR1pBLE1BSFksY0FHRnNCLElBSEUsRUFBakI7QUFNQSxNQUFJNEIsU0FBSjtBQUNBLE1BQUlDLGNBQWMsR0FBR25CLEVBQUUsSUFBSUksU0FBM0I7O0FBQ0EsTUFBTWdCLFNBQVMsR0FDYnJCLElBQUksSUFBSW9CLGNBQVIsSUFBMEJFLDBCQUFVQyxVQUFWLENBQXFCdkIsSUFBckIsRUFBMkJvQixjQUEzQixDQUQ1Qjs7QUFFQSxNQUFJQyxTQUFKLEVBQWU7QUFDYkYsSUFBQUEsU0FBUyxHQUFHQyxjQUFaO0FBQ0FBLElBQUFBLGNBQWMsR0FBR3BCLElBQWpCO0FBQ0QsR0FIRCxNQUdPO0FBQ0xtQixJQUFBQSxTQUFTLEdBQUduQixJQUFaO0FBQ0Q7O0FBRUQsTUFBTXdCLFlBQVksR0FBRyxDQUNuQkwsU0FEbUIsRUFFbkI7QUFDRW5CLElBQUFBLElBQUksRUFBRW1CLFNBRFI7QUFFRWxCLElBQUFBLEVBQUUsRUFBRW1CO0FBRk4sR0FGbUIsQ0FBckI7QUFPQSxNQUFNSyxTQUFTLDJEQUNUeEQsTUFEUyxrQkFDYW9ELFNBQVMsR0FBR3BCLEVBQUUsSUFBSWtCLFNBQVQsR0FBcUJBLFNBRDNDLHlDQUVUbEQsTUFGUyx1QkFFa0JvRCxTQUFTLElBQUksQ0FBQ3BCLEVBQWQsSUFBb0JrQixTQUZ0Qyx5Q0FHVGxELE1BSFMsZ0JBR1dvRCxTQUFTLEdBQUdELGNBQUgsR0FBb0JuQixFQUFFLElBQUltQixjQUg5Qyx5Q0FJVG5ELE1BSlMscUJBSWdCLENBQUNvRCxTQUFELElBQWMsQ0FBQ3BCLEVBQWYsSUFBcUJtQixjQUpyQyx5Q0FLVG5ELE1BTFMscUJBS2dCLHVCQUFDeUQsR0FBRDtBQUFBLFdBQzNCLHdCQUFhQSxHQUFiLEVBQWtCLENBQUNQLFNBQUQsRUFBWUMsY0FBWixDQUFsQixFQUErQyxJQUEvQyxDQUQyQjtBQUFBLEdBTGhCLGNBQWY7QUFTQSxNQUFNTyxnQkFBZ0IsR0FBR3RDLFNBQVMsSUFBSUEsU0FBUyxDQUFDdUMsTUFBVixHQUFtQixDQUF6RDtBQUVBLE1BQU1DLEtBQXlELEdBQUcsQ0FDaEVWLFNBRGdFLEVBRWhFQyxjQUZnRSxDQUFsRTs7QUFLQSxNQUFNVSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNKLEdBQUQsRUFBZTtBQUNuQyxXQUFPaEQsWUFBWSxHQUNmQSxZQUFZLENBQUNnRCxHQUFELENBQVosSUFDRUosMEJBQVVTLFdBQVYsQ0FBc0JMLEdBQXRCLEVBQTJCN0MsT0FBM0IsQ0FERixJQUVFeUMsMEJBQVVDLFVBQVYsQ0FBcUJHLEdBQXJCLEVBQTBCOUMsT0FBMUIsQ0FIYSxHQUlmLElBSko7QUFLRCxHQU5EOztBQVFBLE1BQU1vRCxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLElBQUQsRUFBbUI7QUFBQSxRQUM5QkMsWUFEOEIsR0FDYnBCLFFBQVEsQ0FBQ3FCLE9BREksQ0FDckNDLEtBRHFDOztBQUU3QyxRQUFJM0QsUUFBSixFQUFjO0FBQ1o7QUFDRDs7QUFDRDRELElBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQUEsc0JBQ1dDLFFBRFg7QUFBQSxVQUNQQyxhQURPLGFBQ1BBLGFBRE87O0FBRWYsVUFBSU4sSUFBSSxJQUFLLENBQUNBLElBQUQsSUFBU0MsWUFBWSxLQUFLSyxhQUF2QyxFQUF1RDtBQUNyRCxZQUFNQyxNQUFNLEdBQUcsb0NBQXlCLENBQUN4QyxJQUFELEVBQU9DLEVBQVAsQ0FBekIsQ0FBZjs7QUFDQSxZQUFJLENBQUNnQyxJQUFMLEVBQVc7QUFDVCxjQUFJLENBQUNoQyxFQUFMLEVBQVM7QUFDUCxnQkFBSXVDLE1BQUosRUFBWTtBQUNWLGtCQUFNQyxVQUFVLEdBQUcxQyxVQUFVLENBQUMyQyxLQUFYLENBQWlCLEtBQWpCLENBQW5CO0FBQ0FMLGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2Y5QixnQkFBQUEsT0FBTyxDQUFDLElBQUlvQyxJQUFKLENBQVNGLFVBQVUsQ0FBQyxDQUFELENBQW5CLENBQUQsQ0FBUDtBQUNBakMsZ0JBQUFBLEtBQUssQ0FBQyxJQUFJbUMsSUFBSixDQUFTRixVQUFVLENBQUMsQ0FBRCxDQUFuQixDQUFELENBQUw7QUFDRCxlQUhTLEVBR1AsR0FITyxDQUFWO0FBSUQ7QUFDRixXQVJELE1BUU8sSUFBSTFDLFVBQVUsS0FBS3lDLE1BQW5CLEVBQTJCO0FBQ2hDNUIsWUFBQUEsYUFBYSxDQUFDNEIsTUFBRCxDQUFiO0FBQ0Q7QUFDRjs7QUFDRCxZQUFJdkQsZUFBSixFQUFxQjtBQUNuQkEsVUFBQUEsZUFBZSxDQUFDZ0QsSUFBRCxDQUFmO0FBQ0Q7O0FBQ0QsWUFBSXRDLFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN4QmtCLFVBQUFBLFVBQVUsQ0FBQ29CLElBQUQsQ0FBVjtBQUNEO0FBQ0Y7QUFDRixLQXhCUyxFQXdCUCxDQXhCTyxDQUFWO0FBeUJELEdBOUJEOztBQWdDQSxNQUFNVyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQzFCQyxPQUQwQixFQUUxQkMsS0FGMEIsRUFHdkI7QUFDSCxRQUFNQyxlQUFlLEdBQUdGLE9BQU8sSUFBSUMsS0FBbkM7QUFDQSxXQUFPLENBQUNELE9BQUQsSUFBWUUsZUFBbkI7QUFDRCxHQU5EOztBQVFBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ3RCLEdBQUQsRUFBZTtBQUNwQyxRQUNFSiwwQkFBVVMsV0FBVixDQUFzQkwsR0FBdEIsRUFBMkI3QyxPQUEzQixLQUNBeUMsMEJBQVVDLFVBQVYsQ0FBcUJHLEdBQXJCLEVBQTBCOUMsT0FBMUIsQ0FGRixFQUdFO0FBQ0E7QUFDRDs7QUFDRCxRQUFJZ0UsbUJBQW1CLENBQUM1QyxJQUFELEVBQU9DLEVBQVAsQ0FBdkIsRUFBbUM7QUFDakMsVUFBSWpCLGdCQUFKLEVBQXNCO0FBQ3BCQSxRQUFBQSxnQkFBZ0IsQ0FBQzBDLEdBQUQsQ0FBaEI7QUFDRDs7QUFDRHBCLE1BQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDQUMsTUFBQUEsT0FBTyxDQUFDbUIsR0FBRCxDQUFQO0FBQ0FsQixNQUFBQSxLQUFLLENBQUMsSUFBRCxDQUFMO0FBQ0QsS0FQRCxNQU9PO0FBQ0wsVUFBSXpCLGNBQUosRUFBb0I7QUFDbEJBLFFBQUFBLGNBQWMsQ0FBQzJDLEdBQUQsQ0FBZDtBQUNEOztBQUNELFVBQUl1QixRQUFKO0FBQ0EsVUFBTUMsT0FBTyxHQUFHLCtCQUFvQmxELElBQXBCLENBQWhCO0FBQ0EsVUFBTW1ELEtBQUssR0FBRywrQkFBb0J6QixHQUFwQixDQUFkO0FBQ0EsVUFBSTBCLGFBQWEsR0FBRyxFQUFwQjs7QUFDQSxVQUFJOUIsMEJBQVVDLFVBQVYsQ0FBcUJHLEdBQXJCLEVBQTBCMUIsSUFBMUIsQ0FBSixFQUFxQztBQUNuQ2lELFFBQUFBLFFBQVEsR0FBRyxDQUFDakQsSUFBRCxFQUFPMEIsR0FBUCxDQUFYO0FBQ0EwQixRQUFBQSxhQUFhLGFBQU1GLE9BQU4sZ0JBQW1CQyxLQUFuQixDQUFiO0FBQ0QsT0FIRCxNQUdPO0FBQ0xGLFFBQUFBLFFBQVEsR0FBRyxDQUFDdkIsR0FBRCxFQUFNMUIsSUFBTixDQUFYO0FBQ0FvRCxRQUFBQSxhQUFhLGFBQU1ELEtBQU4sZ0JBQWlCRCxPQUFqQixDQUFiO0FBQ0Q7O0FBQ0QsVUFBSXpELFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QmEsUUFBQUEsWUFBWSxDQUFDb0IsR0FBRCxDQUFaO0FBQ0FkLFFBQUFBLGFBQWEsQ0FBQ3dDLGFBQUQsQ0FBYjtBQUNBNUMsUUFBQUEsS0FBSyxDQUFDa0IsR0FBRCxDQUFMO0FBQ0Q7O0FBQ0QsVUFBSTVDLFFBQUosRUFBYztBQUNaQSxRQUFBQSxRQUFRLENBQUNtRSxRQUFELENBQVI7QUFDRDs7QUFDRCxVQUFJM0UsYUFBSixFQUFtQjtBQUVqQitELFFBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2YsY0FBSXBELGVBQUosRUFBcUI7QUFDbkJBLFlBQUFBLGVBQWUsQ0FBQyxLQUFELENBQWY7QUFDRDs7QUFDRCxjQUFJVSxXQUFXLEtBQUssSUFBcEIsRUFBMEI7QUFDeEJrQixZQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0Q7QUFDRixTQVBTLEVBT1AsR0FQTyxDQUFWO0FBUUQ7QUFDRjtBQUNGLEdBakREOztBQW1EQSxNQUFNd0MsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDM0IsR0FBRCxFQUFlO0FBQ3pDLFFBQUksQ0FBQ2tCLG1CQUFtQixDQUFDNUMsSUFBRCxFQUFPQyxFQUFQLENBQXhCLEVBQW9DO0FBQ2xDSyxNQUFBQSxZQUFZLENBQUNvQixHQUFELENBQVo7QUFDRDtBQUNGLEdBSkQ7O0FBTUEsTUFBTTRCLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNoQ2hELElBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxHQUZEOztBQUlBLE1BQU1pRCxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLFFBRWlCO0FBQUEsUUFEekNDLE1BQ3lDLFNBRHpDQSxNQUN5QztBQUFBLFFBQzFCQyxHQUQwQixHQUNsQkQsTUFEa0IsQ0FDakM5RCxLQURpQztBQUV6Q2tCLElBQUFBLGFBQWEsQ0FBQzZDLEdBQUQsQ0FBYjs7QUFDQSxRQUFJQSxHQUFHLENBQUNDLElBQUosT0FBZSxFQUFuQixFQUF1QjtBQUNyQixVQUFJakUsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCYSxRQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FDLFFBQUFBLE9BQU8sQ0FBQyxJQUFELENBQVA7QUFDQUMsUUFBQUEsS0FBSyxDQUFDLElBQUQsQ0FBTDtBQUNEOztBQUNELFVBQUkxQixRQUFKLEVBQWM7QUFDWkEsUUFBQUEsUUFBUSxDQUFDLENBQUNvQixTQUFELEVBQVlBLFNBQVosQ0FBRCxDQUFSO0FBQ0Q7QUFDRixLQVRELE1BU08sSUFBSSxrQ0FBdUJ1RCxHQUF2QixDQUFKLEVBQWlDO0FBQ3RDLFVBQU1FLGNBQWMsR0FBR0YsR0FBRyxDQUFDZixLQUFKLENBQVUsS0FBVixDQUF2QjtBQUNBLFVBQU1rQixPQUFPLEdBQUcsSUFBSWpCLElBQUosQ0FBU2dCLGNBQWMsQ0FBQyxDQUFELENBQXZCLENBQWhCO0FBQ0EsVUFBTUUsS0FBSyxHQUFHLElBQUlsQixJQUFKLENBQVNnQixjQUFjLENBQUMsQ0FBRCxDQUF2QixDQUFkOztBQUNBLFVBQ0UsQ0FBQzdCLGFBQWEsQ0FBQzhCLE9BQUQsQ0FBZCxJQUNBLENBQUM5QixhQUFhLENBQUMrQixLQUFELENBRGQsSUFFQSxDQUFDdkMsMEJBQVVTLFdBQVYsQ0FBc0I4QixLQUF0QixFQUE2QkQsT0FBN0IsQ0FGRCxJQUdBLEVBQ0V0QywwQkFBVXdDLFNBQVYsQ0FBb0I5RCxJQUFwQixFQUEwQjRELE9BQTFCLEtBQXNDdEMsMEJBQVV3QyxTQUFWLENBQW9CN0QsRUFBcEIsRUFBd0I0RCxLQUF4QixDQUR4QyxDQUpGLEVBT0U7QUFDQSxZQUFJcEUsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCYyxVQUFBQSxPQUFPLENBQUNxRCxPQUFELENBQVA7QUFDQXBELFVBQUFBLEtBQUssQ0FBQ3FELEtBQUQsQ0FBTDtBQUNEOztBQUVELFlBQUksQ0FBQ3ZDLDBCQUFVd0MsU0FBVixDQUFvQjlELElBQXBCLEVBQTBCNEQsT0FBMUIsQ0FBTCxFQUF5QztBQUN2Q25ELFVBQUFBLFFBQVEsQ0FBQ21ELE9BQUQsQ0FBUjtBQUNELFNBRkQsTUFFTyxJQUFJLENBQUN0QywwQkFBVXdDLFNBQVYsQ0FBb0I3RCxFQUFwQixFQUF3QjRELEtBQXhCLENBQUwsRUFBcUM7QUFDMUNwRCxVQUFBQSxRQUFRLENBQUNvRCxLQUFELENBQVI7QUFDRDs7QUFDRCxZQUFJL0UsUUFBSixFQUFjO0FBQ1pBLFVBQUFBLFFBQVEsQ0FBQyxDQUFDOEUsT0FBRCxFQUFVQyxLQUFWLENBQUQsQ0FBUjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEdBekNEOztBQTJDQSxNQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsUUFBSSxDQUFDbkUsT0FBTCxFQUFjO0FBQ1osVUFBSVgsZUFBSixFQUFxQjtBQUNuQkEsUUFBQUEsZUFBZSxDQUFDLElBQUQsQ0FBZjtBQUNEOztBQUNELFVBQUlVLFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN4QmtCLFFBQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFDRDtBQUNGO0FBQ0YsR0FURDs7QUFXQSxNQUFNbUQsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixRQUVrQjtBQUFBLFFBRDNDQyxPQUMyQyxTQUQzQ0EsT0FDMkM7QUFDM0MsUUFBTUMsSUFBSSxHQUFHLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLENBQWI7O0FBQ0EsUUFBSUEsSUFBSSxDQUFDQyxRQUFMLENBQWNGLE9BQWQsQ0FBSixFQUE0QjtBQUMxQmpDLE1BQUFBLG1CQUFtQixDQUFDLEtBQUQsQ0FBbkI7QUFDQWxCLE1BQUFBLFFBQVEsQ0FBQ3FCLE9BQVQsQ0FBaUJDLEtBQWpCLENBQXVCZ0MsSUFBdkI7QUFDRDtBQUNGLEdBUkQ7O0FBVUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUN4QkMsSUFEd0IsRUFFeEJDLENBRndCLEVBR3JCO0FBQ0gsUUFBSUEsQ0FBSixFQUFPO0FBQUEsVUFDa0JmLE1BRGxCLEdBQzZCZSxDQUQ3QixDQUNHQyxhQURIO0FBRUwsVUFBTUMsVUFBVSxHQUFHakIsTUFBTSxJQUFJQSxNQUFNLENBQUNrQixxQkFBUCxFQUE3QjtBQUNBLFVBQU1DLGFBQWEsR0FDakI1RCxZQUFZLENBQUNvQixPQUFiLENBQXFCeUMsU0FBckIsQ0FBK0JGLHFCQUEvQixFQURGOztBQUdBLFVBQ0VsQixNQUFNLENBQUNxQixJQUFQLEtBQWdCLE9BQWhCLElBQ0EsQ0FBQ0osVUFBVSxDQUFDSyxJQUFYLEdBQWtCSCxhQUFhLENBQUNHLElBQWpDLElBQXlDLENBQXpDLEdBQTZDSCxhQUFhLENBQUNJLEtBRjdELEVBR0U7QUFDQVQsUUFBQUEsSUFBSSxDQUFDN0QsUUFBTCxDQUFjNkQsSUFBSSxDQUFDVSxRQUFMLEtBQWtCLENBQWhDO0FBQ0Q7QUFDRjs7QUFDRCxRQUFJQyxRQUFRLEdBQUdYLElBQWY7O0FBQ0EsUUFBSWhELDBCQUFVQyxVQUFWLENBQXFCK0MsSUFBckIsRUFBMkIxRixPQUEzQixDQUFKLEVBQXlDO0FBQ3ZDLFVBQUlBLE9BQUosRUFBYTtBQUNYcUcsUUFBQUEsUUFBUSxHQUFHckcsT0FBWDtBQUNEO0FBQ0YsS0FKRCxNQUlPLElBQUkwQywwQkFBVVMsV0FBVixDQUFzQnVDLElBQXRCLEVBQTRCekYsT0FBNUIsQ0FBSixFQUEwQztBQUMvQyxVQUFJQSxPQUFKLEVBQWE7QUFDWG9HLFFBQUFBLFFBQVEsR0FBR3BHLE9BQVg7QUFDRDtBQUNGOztBQUNENEIsSUFBQUEsUUFBUSxDQUFDd0UsUUFBRCxDQUFSO0FBQ0QsR0E1QkQ7O0FBOEJBLGtDQUFvQjdHLEdBQXBCLEVBQXlCO0FBQUEsV0FBTztBQUM5QmdFLE1BQUFBLEtBQUssRUFBRXRCLFFBQVEsQ0FBQ3FCLE9BRGM7QUFFOUJhLE1BQUFBLGNBQWMsRUFBZEEsY0FGOEI7QUFHOUJoQixNQUFBQSxtQkFBbUIsRUFBbkJBO0FBSDhCLEtBQVA7QUFBQSxHQUF6QjtBQU1BLFNBQ0UsZ0NBQUMsbUJBQUQ7QUFDRSxJQUFBLE9BQU8sRUFBRSxLQURYO0FBRUUsSUFBQSxlQUFlLEVBQUVBLG1CQUZuQjtBQUdFLElBQUEsU0FBUyxFQUFFN0MsU0FIYjtBQUlFLElBQUEsS0FBSyxFQUNIO0FBQUssTUFBQSxTQUFTLFlBQUtsQixNQUFMO0FBQWQsT0FDRzBELGdCQUFnQixJQUNmLGdDQUFDLHFCQUFEO0FBQ0UsTUFBQSxlQUFlLEVBQUUseUJBQUN1RCxhQUFELEVBQW1CO0FBQ2xDLFlBQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixhQUFkLENBQUosRUFBa0M7QUFDaEMsY0FBTUcsWUFBWSxHQUFHSCxhQUFhLENBQUMsQ0FBRCxDQUFsQztBQUNBLGNBQU1JLFVBQVUsR0FBR0osYUFBYSxDQUFDLENBQUQsQ0FBaEM7QUFDQTNFLFVBQUFBLE9BQU8sQ0FBQzhFLFlBQUQsQ0FBUDtBQUNBNUUsVUFBQUEsUUFBUSxDQUFDNEUsWUFBRCxDQUFSO0FBQ0E3RSxVQUFBQSxLQUFLLENBQUM4RSxVQUFELENBQUw7QUFDQTFFLFVBQUFBLGFBQWEsQ0FBQyxvQ0FBeUJzRSxhQUF6QixDQUFELENBQWI7O0FBRUEsY0FBSXBHLFFBQUosRUFBYztBQUNaQSxZQUFBQSxRQUFRLENBQUNvRyxhQUFELENBQVI7QUFDRDs7QUFFRCxjQUFJNUcsYUFBSixFQUFtQjtBQUVqQitELFlBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2Z4QixjQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsYUFGUyxFQUVQLEdBRk8sQ0FBVjtBQUdEO0FBQ0Y7QUFDRixPQXJCSDtBQXNCRSxNQUFBLFlBQVksRUFBRWdCLEtBdEJoQjtBQXVCRSxNQUFBLFNBQVMsRUFBRXhDO0FBdkJiLE1BRkosRUE0QkUsZ0NBQUMsMEJBQUQ7QUFDRSxNQUFBLEdBQUcsRUFBRTBCLFlBRFA7QUFFRSxNQUFBLGNBQWMsRUFBRSxDQUZsQjtBQUdFLE1BQUEsWUFBWSxFQUFFZSxhQUhoQjtBQUlFLE1BQUEsU0FBUyxFQUFFakQsT0FKYjtBQUtFLE1BQUEsT0FBTyxFQUFFRCxPQUxYO0FBTUUsTUFBQSxjQUFjLE1BTmhCO0FBT0UsTUFBQSxVQUFVLEVBQUUyRyxzQkFQZDtBQVFFLE1BQUEsS0FBSyxFQUFFcEYsS0FSVDtBQVNFLE1BQUEsTUFBTSxFQUFFcUYsWUFUVjtBQVVFLE1BQUEsWUFBWSxFQUFFQyxtQkFWaEI7QUFXRSxNQUFBLGFBQWEsRUFBRUMsb0JBWGpCO0FBWUUsTUFBQSxZQUFZLEVBQUVsRSxZQVpoQjtBQWFFLE1BQUEsYUFBYSxFQUNYLGdDQUFDLGtCQUFEO0FBQ0UsUUFBQSxPQUFPLEVBQUU1QyxPQURYO0FBRUUsUUFBQSxPQUFPLEVBQUVDLE9BRlg7QUFHRSxRQUFBLHFCQUFxQixFQUFFLGlDQUFNO0FBQzNCNEIsVUFBQUEsUUFBUSxDQUFDNUIsT0FBRCxDQUFSO0FBQ0Q7QUFMSCxTQU1NOEcsa0NBTk4sRUFkSjtBQXVCRSxNQUFBLGNBQWMsRUFDWixnQ0FBQyxtQkFBRDtBQUNFLFFBQUEsT0FBTyxFQUFFL0csT0FEWDtBQUVFLFFBQUEsT0FBTyxFQUFFQyxPQUZYO0FBR0UsUUFBQSxZQUFZLEVBQUV3RjtBQUhoQixTQUlNdUIsbUNBSk4sRUF4Qko7QUErQkUsTUFBQSxlQUFlLEVBQUV2QyxtQkEvQm5CO0FBZ0NFLE1BQUEsZUFBZSxFQUFFQyxtQkFoQ25CO0FBaUNFLE1BQUEsVUFBVSxFQUFFTixjQWpDZDtBQWtDRSxNQUFBLFNBQVMsRUFBRSxtQkFBQ3RCLEdBQUQ7QUFBQSxlQUNUO0FBQUssVUFBQSxTQUFTLFlBQUt6RCxNQUFMO0FBQWQsV0FBbUN5RCxHQUFHLENBQUNtRSxPQUFKLEVBQW5DLENBRFM7QUFBQSxPQWxDYjtBQXFDRSxNQUFBLFNBQVMsRUFBRXBFO0FBckNiLE1BNUJGLENBTEo7QUEwRUUsSUFBQSxVQUFVLEVBQUU7QUFDVnNELE1BQUFBLEtBQUssRUFBRXBELGdCQUFnQixHQUFHLE9BQUgsR0FBYSxPQUQxQjtBQUVWbUUsTUFBQUEsUUFBUSxFQUFFbkUsZ0JBQWdCLEdBQUcsT0FBSCxHQUFhO0FBRjdCLEtBMUVkO0FBOEVFLElBQUEsT0FBTyxFQUFDLE9BOUVWO0FBK0VFLElBQUEsT0FBTyxFQUFFL0I7QUEvRVgsS0FnRk1SLFlBaEZOLEdBa0ZFLGdDQUFDLGlCQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUU4QixRQURiO0FBRUUsSUFBQSxRQUFRLEVBQUV6QyxRQUZaO0FBR0UsSUFBQSxNQUFNLEVBQUVFLE1BSFY7QUFJRSxJQUFBLFFBQVEsRUFBRTRFLGlCQUpaO0FBS0UsSUFBQSxPQUFPLEVBQUVRLGdCQUxYO0FBTUUsSUFBQSxTQUFTLEVBQUVDLGtCQU5iO0FBT0UsSUFBQSxXQUFXLEVBQUU5RSxXQVBmO0FBUUUsSUFBQSxHQUFHLEVBQUU0QixRQVJQO0FBU0UsSUFBQSxZQUFZLEVBQUUsZ0NBQUMsZ0JBQUQ7QUFBTSxNQUFBLElBQUksRUFBQztBQUFYLE1BVGhCO0FBVUUsSUFBQSxJQUFJLEVBQUV2QixJQVZSO0FBV0UsSUFBQSxLQUFLLEVBQUVDLEtBWFQ7QUFZRSxJQUFBLEtBQUssRUFBRU87QUFaVCxLQWFNRixVQWJOLEVBbEZGLENBREY7QUFvR0QsQ0EvYkMsQ0FGSjtBQW9jQTFCLFdBQVcsQ0FBQzRILFNBQVosR0FBd0I7QUFJdEIxSCxFQUFBQSxTQUFTLEVBQUUySCxzQkFBVUMsTUFKQztBQVF0QjNILEVBQUFBLGFBQWEsRUFBRTBILHNCQUFVL0QsSUFSSDtBQVl0QjFELEVBQUFBLFlBQVksRUFBRXlILHNCQUFVRSxHQVpGO0FBZ0J0QjFILEVBQUFBLGNBQWMsRUFBRXdILHNCQUFVL0QsSUFoQko7QUFvQnRCeEQsRUFBQUEsUUFBUSxFQUFFdUgsc0JBQVUvRCxJQXBCRTtBQXlCdEJ2RCxFQUFBQSxZQUFZLEVBQUVzSCxzQkFBVUcsSUF6QkY7QUE2QnRCeEgsRUFBQUEsTUFBTSxFQUFFcUgsc0JBQVVJLEtBQVYsQ0FBZ0IsQ0FDdEIsUUFEc0IsRUFFdEIsU0FGc0IsRUFHdEIsU0FIc0IsRUFJdEIsU0FKc0IsRUFLdEIsUUFMc0IsQ0FBaEIsQ0E3QmM7QUF1Q3RCeEgsRUFBQUEsT0FBTyxFQUFFb0gsc0JBQVVLLFVBQVYsQ0FBcUIxRCxJQUFyQixDQXZDYTtBQTJDdEI5RCxFQUFBQSxPQUFPLEVBQUVtSCxzQkFBVUssVUFBVixDQUFxQjFELElBQXJCLENBM0NhO0FBK0N0QjdELEVBQUFBLFFBQVEsRUFBRWtILHNCQUFVRyxJQS9DRTtBQW1EdEJwSCxFQUFBQSxjQUFjLEVBQUVpSCxzQkFBVUcsSUFuREo7QUF1RHRCbkgsRUFBQUEsZ0JBQWdCLEVBQUVnSCxzQkFBVUcsSUF2RE47QUEyRHRCbEgsRUFBQUEsZUFBZSxFQUFFK0csc0JBQVVHLElBM0RMO0FBK0R0QmpILEVBQUFBLFdBQVcsRUFBRThHLHNCQUFVQyxNQS9ERDtBQW1FdEI5RyxFQUFBQSxTQUFTLEVBQUU2RyxzQkFBVUksS0FBVixDQUFnQixDQUN6QixLQUR5QixFQUV6QixNQUZ5QixFQUd6QixPQUh5QixFQUl6QixRQUp5QixFQUt6QixTQUx5QixFQU16QixVQU55QixFQU96QixZQVB5QixFQVF6QixhQVJ5QixFQVN6QixTQVR5QixFQVV6QixZQVZ5QixFQVd6QixVQVh5QixFQVl6QixhQVp5QixDQUFoQixDQW5FVztBQW9GdEJoSCxFQUFBQSxZQUFZLEVBQUU0RyxzQkFBVU0sTUFwRkY7QUEyRnRCakgsRUFBQUEsU0FBUyxFQUFFMkcsc0JBQVVFLEdBM0ZDO0FBK0Z0QjNHLEVBQUFBLElBQUksRUFBRXlHLHNCQUFVSSxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEIsT0FBNUIsQ0FBaEIsQ0EvRmdCO0FBbUd0QjVHLEVBQUFBLEtBQUssRUFBRXdHLHNCQUFVSSxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLE9BQVAsQ0FBaEIsQ0FuR2U7QUF1R3RCMUcsRUFBQUEsS0FBSyxFQUFFc0csc0JBQVVFLEdBdkdLO0FBMkd0QnRHLEVBQUFBLE9BQU8sRUFBRW9HLHNCQUFVL0Q7QUEzR0csQ0FBeEI7QUE4R0E5RCxXQUFXLENBQUNvSSxZQUFaLEdBQTJCO0FBQ3pCbEksRUFBQUEsU0FBUyxFQUFFLEVBRGM7QUFFekJDLEVBQUFBLGFBQWEsRUFBRSxLQUZVO0FBR3pCQyxFQUFBQSxZQUFZLEVBQUUsSUFIVztBQUl6QkMsRUFBQUEsY0FBYyxFQUFFLElBSlM7QUFLekJDLEVBQUFBLFFBQVEsRUFBRSxLQUxlO0FBTXpCQyxFQUFBQSxZQUFZLEVBQUVSLElBTlc7QUFPekJTLEVBQUFBLE1BQU0sRUFBRSxRQVBpQjtBQVF6QkMsRUFBQUEsT0FBTyxFQUFFLDhCQVJnQjtBQVN6QkMsRUFBQUEsT0FBTyxFQUFFLDhCQVRnQjtBQVV6QkMsRUFBQUEsUUFBUSxFQUFFWixJQVZlO0FBV3pCYSxFQUFBQSxjQUFjLEVBQUViLElBWFM7QUFZekJjLEVBQUFBLGdCQUFnQixFQUFFZCxJQVpPO0FBYXpCZSxFQUFBQSxlQUFlLEVBQUVmLElBYlE7QUFjekJnQixFQUFBQSxXQUFXLEVBQUUsUUFkWTtBQWV6QkMsRUFBQUEsU0FBUyxFQUFFLFlBZmM7QUFnQnpCQyxFQUFBQSxZQUFZLEVBQUUsRUFoQlc7QUFpQnpCQyxFQUFBQSxTQUFTLEVBQUVhLFNBakJjO0FBa0J6QlgsRUFBQUEsSUFBSSxFQUFFLE9BbEJtQjtBQW1CekJDLEVBQUFBLEtBQUssRUFBRSxJQW5Ca0I7QUFvQnpCRSxFQUFBQSxLQUFLLEVBQUUsSUFwQmtCO0FBcUJ6QkUsRUFBQUEsT0FBTyxFQUFFO0FBckJnQixDQUEzQjtBQXdCQXpCLFdBQVcsQ0FBQ3FJLFdBQVosR0FBMEIsYUFBMUI7ZUFFZXJJLFciLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgUmVhY3QsIHtcbiAgZm9yd2FyZFJlZixcbiAgdXNlQ29udGV4dCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlTWVtbyxcbiAgdXNlUmVmLFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IERheVBpY2tlciwge1xuICBDYXB0aW9uRWxlbWVudFByb3BzLFxuICBEYXRlVXRpbHMsXG4gIE5hdmJhckVsZW1lbnRQcm9wcyxcbn0gZnJvbSBcImRheS1waWNrZXItcmVhY3RcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NsYXNzTmFtZXNcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2lucHV0XCJcbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gXCIuLi9wb3AtdHJpZ2dlclwiXG5pbXBvcnQgUG9wb3ZlciwgeyBJUG9wb3ZlclByb3BzIH0gZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IENhcHRpb24gZnJvbSBcIi4vQ2FwdGlvblwiXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiXG5pbXBvcnQgU2hvcnRjdXRzIGZyb20gXCIuL1Nob3J0Y3V0c1wiXG5pbXBvcnQge1xuICBNT05USFMsXG4gIFdFRUtEQVlTX0xPTkcsXG4gIFdFRUtEQVlTX1NIT1JULFxuICBnZXREZWZhdWx0TWF4RGF0ZSxcbiAgZ2V0RGVmYXVsdE1pbkRhdGUsXG4gIGlzTGVnYWxEYXRlUmFuZ2VTdHJpbmcsXG4gIGNvbnZlcnREYXRlVG9TdHJpbmcsXG4gIGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyxcbiAgaXNEYXlJblJhbmdlLFxufSBmcm9tIFwiLi9jb3JlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWRhdGVcIlxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuZXhwb3J0IGludGVyZmFjZSBJUmFuZ2VQaWNrZXJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuWcqOmAieaLqeWQju+8jOa2iOWksSBQb3BvdmVyXG4gICAqL1xuICBjbG9zZU9uU2VsZWN0PzogYm9vbGVhblxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya6buY6K6k5pel5pyf6IyD5Zu0XG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBbRGF0ZSB8IG51bGwgfCB1bmRlZmluZWQsIERhdGUgfCBudWxsIHwgdW5kZWZpbmVkXSB8IG51bGxcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8mum7mOiupOaYr+WQpuaYvuekuuS4i+aLiVxuICAgKi9cbiAgZGVmYXVsdFZpc2libGU/OiBib29sZWFuIHwgbnVsbFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOemgeatoumAieaLqeeahOWkqe+8jGRheSA9PiBib29s77yb5q+P5LiA5aSp5piv55qE5pe26Ze05Li6IDEyOjAwOjAw77yM6L+Z5LiA5Liq5piv55SxIGRheS1waWNrZXItcmVhY3Qg5Yaz5a6a55qE77ybXG4gICAqIOavlOi+g+aXpeacn+eahOaXtuWAmeWwj+W/g+i/meS4gOeCueOAglxuICAgKi9cbiAgZGlzYWJsZWREYXlzPzogKGRhdGU6IERhdGUpID0+IGJvb2xlYW4gfCB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7ovpPlhaXmoYbnsbvlnotcbiAgICovXG4gIGludGVudD86IFwibm9ybWFsXCIgfCBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJ3YXJuaW5nXCIgfCBcImRhbmdlclwiXG4gIC8qKlxuICAgKiDmnIDlpKfpmZDliLbml6XmnJ9cbiAgICovXG4gIG1heERhdGU/OiBEYXRlXG4gIC8qKlxuICAgKiDmnIDlsI/pmZDliLbml6XmnJ9cbiAgICovXG4gIG1pbkRhdGU/OiBEYXRlXG4gIC8qKlxuICAgKiDml6XmnJ/mlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAoZGF0ZTogW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF0pID0+IHZvaWRcbiAgLyoqXG4gICAqIOesrOS6jOasoeeCueWHu+S6huaXpeacn+aXtueahCBoYW5kbGVy77yM5Y2z57uT5p2f6YCJ5oupXG4gICAqL1xuICBvbkVuZERheVNlbGVjdD86IChkYXRlOiBEYXRlKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDnrKzkuIDmrKHngrnlh7vkuobml6XmnJ/ml7bnmoQgaGFuZGxlcu+8jOWNs+W8gOWni+mAieaLqe+8iOWPr+S7peWcqOatpOaXtuiuvue9riBtYXhEYXRlIG1pbkRhdGXvvIzlrp7njrDmjqfliLbml6XmnJ/pgInmi6nojIPlm7TnmoTlip/og73vvIlcbiAgICovXG4gIG9uU3RhcnREYXlTZWxlY3Q/OiAoZGF0ZTogRGF0ZSkgPT4gdm9pZFxuICAvKipcbiAgICog5pi+56S654q25oCB5Y+R55Sf5Y+Y5YyW5pe255qEaGFuZGxlclxuICAgKi9cbiAgb25WaXNpYmxlQ2hhbmdlPzogKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOWNoOS9jeWtl+esplxuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOW8ueWHuuWxguS9jee9rlxuICAgKi9cbiAgcGxhY2VtZW50PzogUGxhY2VtZW50XG4gIC8qKlxuICAgKiDkvKDlhaUgUG9wb3ZlciDnmoQgcHJvcHNcbiAgICovXG4gIHBvcG92ZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgLyoqXG4gICAqIOW/q+aNt+mAieaLqemhue+8jOagvOW8j++8mlxuICAgKiBbe1xuICAgKiBsYWJlbDogXCLnpZblm73mr43kurLnlJ/ml6VcIiwgdmFsdWU6IFtuZXcgRGF0ZShcIjIwMjAtMTAtMDFcIiksIG5ldyBEYXRlKFwiMjAyMC0xMC0wN1wiKV1cbiAgICogfV1cbiAgICovXG4gIHNob3J0Y3V0cz86IHtcbiAgICAvKipcbiAgICAgKiDor6XpobnnmoTmloflrZdcbiAgICAgKi9cbiAgICBsYWJlbDogUmVhY3QuUmVhY3ROb2RlXG4gICAgLyoqXG4gICAgICog6K+l6aG555qE5pel5pyfXG4gICAgICovXG4gICAgdmFsdWU6IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdXG4gIH1bXVxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lPzogbnVsbCB8IFwibGlnaHRcIlxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5b2T5YmN5pel5pyf6IyD5Zu0XG4gICAqL1xuICB2YWx1ZT86IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdIHwgbnVsbFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5piv5ZCm5pi+56S65LiL5ouJ6YCJ5oupXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbiB8IG51bGxcbn1cblxuLyoqXG4gKiDml6XmnJ/pgInmi6nlmajnlKjkuo7kuobop6PlvZPliY3lt7LpgInml6XmnJ/vvIzpgInmi6nmiJbovpPlhaXpnIDopoHnmoTml6XmnJ/jgIHml6XmnJ/ojIPlm7TnrYnjgIJcbiAqL1xuY29uc3QgUmFuZ2VQaWNrZXI6IFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gIElSYW5nZVBpY2tlclByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+XG4+ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNsb3NlT25TZWxlY3QsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkZWZhdWx0VmlzaWJsZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZGlzYWJsZWREYXlzLFxuICAgICAgaW50ZW50LFxuICAgICAgbWF4RGF0ZSxcbiAgICAgIG1pbkRhdGUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uRW5kRGF5U2VsZWN0LFxuICAgICAgb25TdGFydERheVNlbGVjdCxcbiAgICAgIG9uVmlzaWJsZUNoYW5nZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgcG9wb3ZlclByb3BzLFxuICAgICAgc2hvcnRjdXRzLFxuICAgICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgICB0aGVtZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVByb3AsXG4gICAgICB2aXNpYmxlOiB2aXNpYmxlUHJvcCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJUmFuZ2VQaWNrZXJQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgLyoqXG4gICAgICogc2VsZWN0ZWREYXkg5Li65Lyg57uZIERheVBpY2tlciDnmoTmnIDnu4ggRGF0ZSBPYmplY3TvvIxcbiAgICAgKiB2YWx1ZSDkuLogaW5wdXQg55qE6L6T5YWlIFN0cmluZ+OAglxuICAgICAqL1xuICAgIGNvbnN0IGdldEluaXRpYWxTdGF0ZSA9ICgpID0+IHtcbiAgICAgIGxldCByYW5nZVZhbHVlID0gXCJcIlxuICAgICAgbGV0IGZyb21cbiAgICAgIGxldCB0b1xuICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCAmJiB2YWx1ZVByb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICA7W2Zyb20sIHRvXSA9IHZhbHVlUHJvcFxuICAgICAgICByYW5nZVZhbHVlID0gY29udmVydERhdGVSYW5nZVRvU3RyaW5nKHZhbHVlUHJvcClcbiAgICAgIH0gZWxzZSBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsICYmIGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIDtbZnJvbSwgdG9dID0gZGVmYXVsdFZhbHVlXG4gICAgICAgIHJhbmdlVmFsdWUgPSBjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcoZGVmYXVsdFZhbHVlKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBmcm9tLFxuICAgICAgICBtb250aDogZnJvbSxcbiAgICAgICAgcmFuZ2VWYWx1ZSxcbiAgICAgICAgdG8sXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdXNlTWVtbyhnZXRJbml0aWFsU3RhdGUsIFtdKVxuXG4gICAgY29uc3QgW2VudGVyZWRUbywgc2V0RW50ZXJlZFRvXSA9IHVzZVN0YXRlPERhdGUgfCBudWxsIHwgdW5kZWZpbmVkPihudWxsKVxuICAgIGNvbnN0IFtmcm9tLCBzZXRGcm9tXSA9IHVzZVN0YXRlPERhdGUgfCBudWxsIHwgdW5kZWZpbmVkPihpbml0aWFsU3RhdGUuZnJvbSlcbiAgICBjb25zdCBbdG8sIHNldFRvXSA9IHVzZVN0YXRlPERhdGUgfCBudWxsIHwgdW5kZWZpbmVkPihpbml0aWFsU3RhdGUudG8pXG4gICAgY29uc3QgW21vbnRoLCBzZXRNb250aF0gPSB1c2VTdGF0ZTxEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZD4oXG4gICAgICBpbml0aWFsU3RhdGUubW9udGhcbiAgICApXG4gICAgY29uc3QgW3ByZXZWYWx1ZVByb3AsIHNldFByZXZWYWx1ZVByb3BdID1cbiAgICAgIHVzZVN0YXRlPFxuICAgICAgICBbRGF0ZSB8IG51bGwgfCB1bmRlZmluZWQsIERhdGUgfCBudWxsIHwgdW5kZWZpbmVkXSB8IG51bGwgfCB1bmRlZmluZWRcbiAgICAgID4odmFsdWVQcm9wKVxuICAgIGNvbnN0IFtyYW5nZVZhbHVlLCBzZXRSYW5nZVZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXG4gICAgICBpbml0aWFsU3RhdGUucmFuZ2VWYWx1ZVxuICAgIClcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuPigoKSA9PiB7XG4gICAgICBpZiAodmlzaWJsZVByb3AgIT09IG51bGwgJiYgdmlzaWJsZVByb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmlzaWJsZVByb3BcbiAgICAgIH1cbiAgICAgIGlmIChkZWZhdWx0VmlzaWJsZSAhPT0gbnVsbCAmJiBkZWZhdWx0VmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmlzaWJsZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICBpZiAoXG4gICAgICB2YWx1ZVByb3AgIT09IG51bGwgJiZcbiAgICAgIHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB2YWx1ZVByb3AgIT09IHByZXZWYWx1ZVByb3BcbiAgICApIHtcbiAgICAgIHNldEZyb20odmFsdWVQcm9wWzBdKVxuICAgICAgc2V0VG8odmFsdWVQcm9wWzFdKVxuICAgICAgc2V0UmFuZ2VWYWx1ZShjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcodmFsdWVQcm9wKSlcbiAgICAgIHNldFByZXZWYWx1ZVByb3AodmFsdWVQcm9wKVxuICAgIH1cbiAgICBpZiAodmlzaWJsZVByb3AgIT09IG51bGwgJiYgdmlzaWJsZSAhPT0gISF2aXNpYmxlUHJvcCkge1xuICAgICAgc2V0VmlzaWJsZSghIXZpc2libGVQcm9wKVxuICAgIH1cblxuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPGFueT4obnVsbClcbiAgICBjb25zdCBkYXlQaWNrZXJSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuXG4gICAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuICAgIGNvbnN0IHNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZVByb3AsIHNpemVDb250ZXh0KVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYCR7cHJlZml4fS1yYW5nZUJhc2VgLFxuICAgICAgYCR7cHJlZml4fS0ke3NpemV9YFxuICAgIClcblxuICAgIGxldCBmcm9tRmluYWw6IERhdGUgfCBudWxsIHwgdW5kZWZpbmVkXG4gICAgbGV0IGVudGVyZWRUb0ZpbmFsID0gdG8gfHwgZW50ZXJlZFRvXG4gICAgY29uc3QgaXNSZXZlcnNlID1cbiAgICAgIGZyb20gJiYgZW50ZXJlZFRvRmluYWwgJiYgRGF0ZVV0aWxzLmlzRGF5QWZ0ZXIoZnJvbSwgZW50ZXJlZFRvRmluYWwpXG4gICAgaWYgKGlzUmV2ZXJzZSkge1xuICAgICAgZnJvbUZpbmFsID0gZW50ZXJlZFRvRmluYWxcbiAgICAgIGVudGVyZWRUb0ZpbmFsID0gZnJvbVxuICAgIH0gZWxzZSB7XG4gICAgICBmcm9tRmluYWwgPSBmcm9tXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWREYXlzID0gW1xuICAgICAgZnJvbUZpbmFsLFxuICAgICAge1xuICAgICAgICBmcm9tOiBmcm9tRmluYWwsXG4gICAgICAgIHRvOiBlbnRlcmVkVG9GaW5hbCxcbiAgICAgIH0sXG4gICAgXVxuICAgIGNvbnN0IG1vZGlmaWVycyA9IHtcbiAgICAgIFtgJHtwcmVmaXh9LXJhbmdlU3RhcnRgXTogaXNSZXZlcnNlID8gdG8gJiYgZnJvbUZpbmFsIDogZnJvbUZpbmFsLFxuICAgICAgW2Ake3ByZWZpeH0tcmFuZ2VTdGFydEhvdmVyYF06IGlzUmV2ZXJzZSAmJiAhdG8gJiYgZnJvbUZpbmFsLFxuICAgICAgW2Ake3ByZWZpeH0tcmFuZ2VFbmRgXTogaXNSZXZlcnNlID8gZW50ZXJlZFRvRmluYWwgOiB0byAmJiBlbnRlcmVkVG9GaW5hbCxcbiAgICAgIFtgJHtwcmVmaXh9LXJhbmdlRW5kSG92ZXJgXTogIWlzUmV2ZXJzZSAmJiAhdG8gJiYgZW50ZXJlZFRvRmluYWwsXG4gICAgICBbYCR7cHJlZml4fS1zZWxlY3RlZFJhbmdlYF06IChkYXk6IERhdGUpID0+XG4gICAgICAgIGlzRGF5SW5SYW5nZShkYXksIFtmcm9tRmluYWwsIGVudGVyZWRUb0ZpbmFsXSwgdHJ1ZSksXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvcnRjdXRzRW5hYmxlZCA9IHNob3J0Y3V0cyAmJiBzaG9ydGN1dHMubGVuZ3RoID4gMFxuXG4gICAgY29uc3QgcmFuZ2U6IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdID0gW1xuICAgICAgZnJvbUZpbmFsLFxuICAgICAgZW50ZXJlZFRvRmluYWwsXG4gICAgXVxuXG4gICAgY29uc3QgaXNEYXlEaXNhYmxlZCA9IChkYXk6IERhdGUpID0+IHtcbiAgICAgIHJldHVybiBkaXNhYmxlZERheXNcbiAgICAgICAgPyBkaXNhYmxlZERheXMoZGF5KSB8fFxuICAgICAgICAgICAgRGF0ZVV0aWxzLmlzRGF5QmVmb3JlKGRheSwgbWluRGF0ZSkgfHxcbiAgICAgICAgICAgIERhdGVVdGlscy5pc0RheUFmdGVyKGRheSwgbWF4RGF0ZSlcbiAgICAgICAgOiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVmlzaWJsZUNoYW5nZSA9IChib29sOiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zdCB7IGlucHV0OiBpbnB1dEVsZW1lbnQgfSA9IGlucHV0UmVmLmN1cnJlbnRcbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50XG4gICAgICAgIGlmIChib29sIHx8ICghYm9vbCAmJiBpbnB1dEVsZW1lbnQgIT09IGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgY29uc3QgbmV3VmFsID0gY29udmVydERhdGVSYW5nZVRvU3RyaW5nKFtmcm9tLCB0b10pXG4gICAgICAgICAgaWYgKCFib29sKSB7XG4gICAgICAgICAgICBpZiAoIXRvKSB7XG4gICAgICAgICAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZVJlc2V0ID0gcmFuZ2VWYWx1ZS5zcGxpdChcIiAtIFwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0RnJvbShuZXcgRGF0ZShyYW5nZVJlc2V0WzBdKSlcbiAgICAgICAgICAgICAgICAgIHNldFRvKG5ldyBEYXRlKHJhbmdlUmVzZXRbMV0pKVxuICAgICAgICAgICAgICAgIH0sIDI1MClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5nZVZhbHVlICE9PSBuZXdWYWwpIHtcbiAgICAgICAgICAgICAgc2V0UmFuZ2VWYWx1ZShuZXdWYWwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZShib29sKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodmlzaWJsZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNldFZpc2libGUoYm9vbClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgY29uc3QgaXNTZWxlY3RpbmdGaXJzdERheSA9IChcbiAgICAgIGZyb21Bcmc/OiBEYXRlIHwgbnVsbCxcbiAgICAgIHRvQXJnPzogRGF0ZSB8IG51bGxcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IGlzUmFuZ2VTZWxlY3RlZCA9IGZyb21BcmcgJiYgdG9BcmdcbiAgICAgIHJldHVybiAhZnJvbUFyZyB8fCBpc1JhbmdlU2VsZWN0ZWRcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEYXlDbGljayA9IChkYXk6IERhdGUpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgRGF0ZVV0aWxzLmlzRGF5QmVmb3JlKGRheSwgbWluRGF0ZSkgfHxcbiAgICAgICAgRGF0ZVV0aWxzLmlzRGF5QWZ0ZXIoZGF5LCBtYXhEYXRlKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKGlzU2VsZWN0aW5nRmlyc3REYXkoZnJvbSwgdG8pKSB7XG4gICAgICAgIGlmIChvblN0YXJ0RGF5U2VsZWN0KSB7XG4gICAgICAgICAgb25TdGFydERheVNlbGVjdChkYXkpXG4gICAgICAgIH1cbiAgICAgICAgc2V0RW50ZXJlZFRvKG51bGwpXG4gICAgICAgIHNldEZyb20oZGF5KVxuICAgICAgICBzZXRUbyhudWxsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG9uRW5kRGF5U2VsZWN0KSB7XG4gICAgICAgICAgb25FbmREYXlTZWxlY3QoZGF5KVxuICAgICAgICB9XG4gICAgICAgIGxldCBuZXdSYW5nZTogW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF1cbiAgICAgICAgY29uc3QgZnJvbVN0ciA9IGNvbnZlcnREYXRlVG9TdHJpbmcoZnJvbSlcbiAgICAgICAgY29uc3QgdG9TdHIgPSBjb252ZXJ0RGF0ZVRvU3RyaW5nKGRheSlcbiAgICAgICAgbGV0IG5ld1JhbmdlVmFsdWUgPSBcIlwiXG4gICAgICAgIGlmIChEYXRlVXRpbHMuaXNEYXlBZnRlcihkYXksIGZyb20pKSB7XG4gICAgICAgICAgbmV3UmFuZ2UgPSBbZnJvbSwgZGF5XVxuICAgICAgICAgIG5ld1JhbmdlVmFsdWUgPSBgJHtmcm9tU3RyfSAtICR7dG9TdHJ9YFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1JhbmdlID0gW2RheSwgZnJvbV1cbiAgICAgICAgICBuZXdSYW5nZVZhbHVlID0gYCR7dG9TdHJ9IC0gJHtmcm9tU3RyfWBcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgc2V0RW50ZXJlZFRvKGRheSlcbiAgICAgICAgICBzZXRSYW5nZVZhbHVlKG5ld1JhbmdlVmFsdWUpXG4gICAgICAgICAgc2V0VG8oZGF5KVxuICAgICAgICB9XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKG5ld1JhbmdlKVxuICAgICAgICB9XG4gICAgICAgIGlmIChjbG9zZU9uU2VsZWN0KSB7XG4gICAgICAgICAgLy8g5bu26L+f5piv5Li65LqG6K6p54q25oCB55qE5Y+Y5YyW5Zyo6KeG6KeJ5LiK5YWI6KKr5o6l5Y+XXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZShmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2aXNpYmxlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZURheU1vdXNlRW50ZXIgPSAoZGF5OiBEYXRlKSA9PiB7XG4gICAgICBpZiAoIWlzU2VsZWN0aW5nRmlyc3REYXkoZnJvbSwgdG8pKSB7XG4gICAgICAgIHNldEVudGVyZWRUbyhkYXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRGF5TW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICAgIHNldEVudGVyZWRUbyhudWxsKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKHtcbiAgICAgIHRhcmdldCxcbiAgICB9OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3QgeyB2YWx1ZTogdmFsIH0gPSB0YXJnZXRcbiAgICAgIHNldFJhbmdlVmFsdWUodmFsKVxuICAgICAgaWYgKHZhbC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldEVudGVyZWRUbyhudWxsKVxuICAgICAgICAgIHNldEZyb20obnVsbClcbiAgICAgICAgICBzZXRUbyhudWxsKVxuICAgICAgICB9XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKFt1bmRlZmluZWQsIHVuZGVmaW5lZF0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNMZWdhbERhdGVSYW5nZVN0cmluZyh2YWwpKSB7XG4gICAgICAgIGNvbnN0IHJhbmdlVmFsdWVTdHJzID0gdmFsLnNwbGl0KFwiIC0gXCIpXG4gICAgICAgIGNvbnN0IG5ld0Zyb20gPSBuZXcgRGF0ZShyYW5nZVZhbHVlU3Ryc1swXSlcbiAgICAgICAgY29uc3QgbmV3VG8gPSBuZXcgRGF0ZShyYW5nZVZhbHVlU3Ryc1sxXSlcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFpc0RheURpc2FibGVkKG5ld0Zyb20pICYmXG4gICAgICAgICAgIWlzRGF5RGlzYWJsZWQobmV3VG8pICYmXG4gICAgICAgICAgIURhdGVVdGlscy5pc0RheUJlZm9yZShuZXdUbywgbmV3RnJvbSkgJiZcbiAgICAgICAgICAhKFxuICAgICAgICAgICAgRGF0ZVV0aWxzLmlzU2FtZURheShmcm9tLCBuZXdGcm9tKSAmJiBEYXRlVXRpbHMuaXNTYW1lRGF5KHRvLCBuZXdUbylcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNldEZyb20obmV3RnJvbSlcbiAgICAgICAgICAgIHNldFRvKG5ld1RvKVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDkv67mlLnml6XmnJ/lkI7nmoQgbW9udGgg6Lez6L2sXG4gICAgICAgICAgaWYgKCFEYXRlVXRpbHMuaXNTYW1lRGF5KGZyb20sIG5ld0Zyb20pKSB7XG4gICAgICAgICAgICBzZXRNb250aChuZXdGcm9tKVxuICAgICAgICAgIH0gZWxzZSBpZiAoIURhdGVVdGlscy5pc1NhbWVEYXkodG8sIG5ld1RvKSkge1xuICAgICAgICAgICAgc2V0TW9udGgobmV3VG8pXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgb25DaGFuZ2UoW25ld0Zyb20sIG5ld1RvXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dEZvY3VzID0gKCkgPT4ge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICBvblZpc2libGVDaGFuZ2UodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlzaWJsZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICBzZXRWaXNpYmxlKHRydWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dEtleURvd24gPSAoe1xuICAgICAga2V5Q29kZSxcbiAgICB9OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBjb25zdCBrZXlzID0gWzksIDEzLCAyN11cbiAgICAgIGlmIChrZXlzLmluY2x1ZGVzKGtleUNvZGUpKSB7XG4gICAgICAgIGhhbmRsZVZpc2libGVDaGFuZ2UoZmFsc2UpXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuaW5wdXQuYmx1cigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTW9udGhDaGFuZ2UgPSAoXG4gICAgICBkYXRlOiBEYXRlLFxuICAgICAgZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PlxuICAgICkgPT4ge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0OiB0YXJnZXQgfSA9IGVcbiAgICAgICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRhcmdldCAmJiB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgY29uc3QgZGF5UGlja2VyUmVjdCA9XG4gICAgICAgICAgZGF5UGlja2VyUmVmLmN1cnJlbnQuZGF5UGlja2VyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRhcmdldC5uYW1lID09PSBcIm1vbnRoXCIgJiZcbiAgICAgICAgICAodGFyZ2V0UmVjdC5sZWZ0IC0gZGF5UGlja2VyUmVjdC5sZWZ0KSAqIDIgPiBkYXlQaWNrZXJSZWN0LndpZHRoXG4gICAgICAgICkge1xuICAgICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpIC0gMSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IG5ld01vbnRoID0gZGF0ZVxuICAgICAgaWYgKERhdGVVdGlscy5pc0RheUFmdGVyKGRhdGUsIG1heERhdGUpKSB7XG4gICAgICAgIGlmIChtYXhEYXRlKSB7XG4gICAgICAgICAgbmV3TW9udGggPSBtYXhEYXRlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoRGF0ZVV0aWxzLmlzRGF5QmVmb3JlKGRhdGUsIG1pbkRhdGUpKSB7XG4gICAgICAgIGlmIChtaW5EYXRlKSB7XG4gICAgICAgICAgbmV3TW9udGggPSBtaW5EYXRlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldE1vbnRoKG5ld01vbnRoKVxuICAgIH1cblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgaW5wdXQ6IGlucHV0UmVmLmN1cnJlbnQsXG4gICAgICBoYW5kbGVEYXlDbGljayxcbiAgICAgIGhhbmRsZVZpc2libGVDaGFuZ2UsXG4gICAgfSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcG92ZXJcbiAgICAgICAgYXJyb3dlZD17ZmFsc2V9XG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZT17aGFuZGxlVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgICAgIHBvcHVwPXtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3B1cGB9PlxuICAgICAgICAgICAge3Nob3J0Y3V0c0VuYWJsZWQgJiYgKFxuICAgICAgICAgICAgICA8U2hvcnRjdXRzXG4gICAgICAgICAgICAgICAgb25TaG9ydGN1dENsaWNrPXsodmFsdWVTaG9ydGN1dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVTaG9ydGN1dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJvbVNob3J0Y3V0ID0gdmFsdWVTaG9ydGN1dFswXVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b1Nob3J0Y3V0ID0gdmFsdWVTaG9ydGN1dFsxXVxuICAgICAgICAgICAgICAgICAgICBzZXRGcm9tKGZyb21TaG9ydGN1dClcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9udGgoZnJvbVNob3J0Y3V0KVxuICAgICAgICAgICAgICAgICAgICBzZXRUbyh0b1Nob3J0Y3V0KVxuICAgICAgICAgICAgICAgICAgICBzZXRSYW5nZVZhbHVlKGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyh2YWx1ZVNob3J0Y3V0KSlcblxuICAgICAgICAgICAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSh2YWx1ZVNob3J0Y3V0KVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyDlu7bov5/mmK/kuLrkuoborqnnirbmgIHnmoTlj5jljJblnKjop4bop4nkuIrlhYjooqvmjqXlj5dcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e3JhbmdlfVxuICAgICAgICAgICAgICAgIHNob3J0Y3V0cz17c2hvcnRjdXRzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxEYXlQaWNrZXJcbiAgICAgICAgICAgICAgcmVmPXtkYXlQaWNrZXJSZWZ9XG4gICAgICAgICAgICAgIG51bWJlck9mTW9udGhzPXsyfVxuICAgICAgICAgICAgICBkaXNhYmxlZERheXM9e2lzRGF5RGlzYWJsZWR9XG4gICAgICAgICAgICAgIGZyb21Nb250aD17bWluRGF0ZX1cbiAgICAgICAgICAgICAgdG9Nb250aD17bWF4RGF0ZX1cbiAgICAgICAgICAgICAgY2FuQ2hhbmdlTW9udGhcbiAgICAgICAgICAgICAgY2xhc3NOYW1lcz17c3R5bGVzfVxuICAgICAgICAgICAgICBtb250aD17bW9udGh9XG4gICAgICAgICAgICAgIG1vbnRocz17TU9OVEhTfVxuICAgICAgICAgICAgICB3ZWVrZGF5c0xvbmc9e1dFRUtEQVlTX0xPTkd9XG4gICAgICAgICAgICAgIHdlZWtkYXlzU2hvcnQ9e1dFRUtEQVlTX1NIT1JUfVxuICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e3NlbGVjdGVkRGF5c31cbiAgICAgICAgICAgICAgbmF2YmFyRWxlbWVudD17XG4gICAgICAgICAgICAgICAgPE5hdmJhclxuICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17bWF4RGF0ZX1cbiAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e21pbkRhdGV9XG4gICAgICAgICAgICAgICAgICBvbk1hbnVhbGx5Q2hhbmdlTW9udGg9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9udGgobWluRGF0ZSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB7Li4uTmF2YmFyRWxlbWVudFByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FwdGlvbkVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgIDxDYXB0aW9uXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICAgICAgICAgIG9uRGF0ZUNoYW5nZT17aGFuZGxlTW9udGhDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICB7Li4uQ2FwdGlvbkVsZW1lbnRQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uRGF5TW91c2VFbnRlcj17aGFuZGxlRGF5TW91c2VFbnRlcn1cbiAgICAgICAgICAgICAgb25EYXlNb3VzZUxlYXZlPXtoYW5kbGVEYXlNb3VzZUxlYXZlfVxuICAgICAgICAgICAgICBvbkRheUNsaWNrPXtoYW5kbGVEYXlDbGlja31cbiAgICAgICAgICAgICAgcmVuZGVyRGF5PXsoZGF5OiBEYXRlKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2VsbGB9PntkYXkuZ2V0RGF0ZSgpfTwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBtb2RpZmllcnM9e21vZGlmaWVyc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgcG9wdXBTdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBzaG9ydGN1dHNFbmFibGVkID8gXCI1NzZweFwiIDogXCI0NzZweFwiLFxuICAgICAgICAgIG1heFdpZHRoOiBzaG9ydGN1dHNFbmFibGVkID8gXCI1NzZweFwiIDogXCI0NzZweFwiLFxuICAgICAgICB9fVxuICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICB7Li4ucG9wb3ZlclByb3BzfVxuICAgICAgPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBpbnRlbnQ9e2ludGVudH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgb25Gb2N1cz17aGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgICBvbktleURvd249e2hhbmRsZUlucHV0S2V5RG93bn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICByaWdodEVsZW1lbnQ9ezxJY29uIGljb249XCJjYWxlbmRhci1vdXRsaW5lZFwiIC8+fVxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgIHZhbHVlPXtyYW5nZVZhbHVlfVxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9Qb3BvdmVyPlxuICAgIClcbiAgfVxuKVxuXG5SYW5nZVBpY2tlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuWcqOmAieaLqeWQju+8jOa2iOWksSBQb3BvdmVyXG4gICAqL1xuICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8mum7mOiupOaXpeacn+iMg+WbtFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya6buY6K6k5piv5ZCm5pi+56S65LiL5ouJXG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOemgeatoumAieaLqeeahOWkqe+8jGRheSA9PiBib29s77yb5q+P5LiA5aSp5piv55qE5pe26Ze05Li6IDEyOjAwOjAw77yM6L+Z5LiA5Liq5piv55SxIGRheS1waWNrZXItcmVhY3Qg5Yaz5a6a55qE77ybXG4gICAqIOavlOi+g+aXpeacn+eahOaXtuWAmeWwj+W/g+i/meS4gOeCueOAglxuICAgKi9cbiAgZGlzYWJsZWREYXlzOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9rui+k+WFpeahhuexu+Wei1xuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwibm9ybWFsXCIsXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgXSksXG4gIC8qKlxuICAgKiDmnIDlpKfpmZDliLbml6XmnJ9cbiAgICovXG4gIG1heERhdGU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAvKipcbiAgICog5pyA5bCP6ZmQ5Yi25pel5pyfXG4gICAqL1xuICBtaW5EYXRlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgLyoqXG4gICAqIOaXpeacn+aUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDnrKzkuozmrKHngrnlh7vkuobml6XmnJ/ml7bnmoQgaGFuZGxlcu+8jOWNs+e7k+adn+mAieaLqVxuICAgKi9cbiAgb25FbmREYXlTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog56ys5LiA5qyh54K55Ye75LqG5pel5pyf5pe255qEIGhhbmRsZXLvvIzljbPlvIDlp4vpgInmi6nvvIjlj6/ku6XlnKjmraTml7borr7nva4gbWF4RGF0ZSBtaW5EYXRl77yM5a6e546w5o6n5Yi25pel5pyf6YCJ5oup6IyD5Zu055qE5Yqf6IO977yJXG4gICAqL1xuICBvblN0YXJ0RGF5U2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOaYvuekuueKtuaAgeWPkeeUn+WPmOWMluaXtueahGhhbmRsZXJcbiAgICovXG4gIG9uVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDljaDkvY3lrZfnrKZcbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5by55Ye65bGC5L2N572uXG4gICAqL1xuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJ0b3BcIixcbiAgICBcImxlZnRcIixcbiAgICBcInJpZ2h0XCIsXG4gICAgXCJib3R0b21cIixcbiAgICBcInRvcExlZnRcIixcbiAgICBcInRvcFJpZ2h0XCIsXG4gICAgXCJib3R0b21MZWZ0XCIsXG4gICAgXCJib3R0b21SaWdodFwiLFxuICAgIFwibGVmdFRvcFwiLFxuICAgIFwibGVmdEJvdHRvbVwiLFxuICAgIFwicmlnaHRUb3BcIixcbiAgICBcInJpZ2h0Qm90dG9tXCIsXG4gIF0pLFxuICAvKipcbiAgICog5Lyg5YWlIFBvcG92ZXIg55qEIHByb3BzXG4gICAqL1xuICBwb3BvdmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDlv6vmjbfpgInmi6npobnvvIzmoLzlvI/vvJpcbiAgICogW3tcbiAgICogbGFiZWw6IFwi56WW5Zu95q+N5Lqy55Sf5pelXCIsIHZhbHVlOiBbbmV3IERhdGUoXCIyMDIwLTEwLTAxXCIpLCBuZXcgRGF0ZShcIjIwMjAtMTAtMDdcIildXG4gICAqIH1dXG4gICAqL1xuICBzaG9ydGN1dHM6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGlnaHRcIl0pLFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5b2T5YmN5pel5pyf6IyD5Zu0XG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muaYr+WQpuaYvuekuuS4i+aLiemAieaLqVxuICAgKi9cbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG59XG5cblJhbmdlUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBcIlwiLFxuICBjbG9zZU9uU2VsZWN0OiBmYWxzZSxcbiAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICBkZWZhdWx0VmlzaWJsZTogbnVsbCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBkaXNhYmxlZERheXM6IG5vb3AsXG4gIGludGVudDogXCJub3JtYWxcIixcbiAgbWF4RGF0ZTogZ2V0RGVmYXVsdE1heERhdGUoKSxcbiAgbWluRGF0ZTogZ2V0RGVmYXVsdE1pbkRhdGUoKSxcbiAgb25DaGFuZ2U6IG5vb3AsXG4gIG9uRW5kRGF5U2VsZWN0OiBub29wLFxuICBvblN0YXJ0RGF5U2VsZWN0OiBub29wLFxuICBvblZpc2libGVDaGFuZ2U6IG5vb3AsXG4gIHBsYWNlaG9sZGVyOiBcIumAieaLqeaXpeacn+iMg+WbtFwiLFxuICBwbGFjZW1lbnQ6IFwiYm90dG9tTGVmdFwiLFxuICBwb3BvdmVyUHJvcHM6IHt9LFxuICBzaG9ydGN1dHM6IHVuZGVmaW5lZCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB0aGVtZTogbnVsbCxcbiAgdmFsdWU6IG51bGwsXG4gIHZpc2libGU6IG51bGwsXG59XG5cblJhbmdlUGlja2VyLmRpc3BsYXlOYW1lID0gXCJSYW5nZVBpY2tlclwiXG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlUGlja2VyXG4iXX0=