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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
      var _target = e.currentTarget;

      var targetRect = _target && _target.getBoundingClientRect();

      var dayPickerRect = dayPickerRef.current.dayPicker.getBoundingClientRect();

      if (_target.name === "month" && (targetRect.left - dayPickerRect.left) * 2 > dayPickerRect.width) {
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
        minDate: minDate
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvUmFuZ2VQaWNrZXIudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIm5vb3AiLCJSYW5nZVBpY2tlciIsInJlZiIsImNsYXNzTmFtZSIsImNsb3NlT25TZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJkZWZhdWx0VmlzaWJsZSIsImRpc2FibGVkIiwiZGlzYWJsZWREYXlzIiwiaW50ZW50IiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJvbkNoYW5nZSIsIm9uRW5kRGF5U2VsZWN0Iiwib25TdGFydERheVNlbGVjdCIsIm9uVmlzaWJsZUNoYW5nZSIsInBsYWNlaG9sZGVyIiwicGxhY2VtZW50IiwicG9wb3ZlclByb3BzIiwic2hvcnRjdXRzIiwic2l6ZVByb3AiLCJzaXplIiwidGhlbWUiLCJ2YWx1ZVByb3AiLCJ2YWx1ZSIsInZpc2libGVQcm9wIiwidmlzaWJsZSIsIm90aGVyUHJvcHMiLCJnZXRJbml0aWFsU3RhdGUiLCJyYW5nZVZhbHVlIiwiZnJvbSIsInRvIiwidW5kZWZpbmVkIiwibW9udGgiLCJpbml0aWFsU3RhdGUiLCJlbnRlcmVkVG8iLCJzZXRFbnRlcmVkVG8iLCJzZXRGcm9tIiwic2V0VG8iLCJzZXRNb250aCIsInByZXZWYWx1ZVByb3AiLCJzZXRQcmV2VmFsdWVQcm9wIiwic2V0UmFuZ2VWYWx1ZSIsInNldFZpc2libGUiLCJpbnB1dFJlZiIsImRheVBpY2tlclJlZiIsIkNvbmZpZ0NvbnRleHQiLCJzaXplQ29udGV4dCIsImNsYXNzU2V0IiwiZnJvbUZpbmFsIiwiZW50ZXJlZFRvRmluYWwiLCJpc1JldmVyc2UiLCJEYXRlVXRpbHMiLCJpc0RheUFmdGVyIiwic2VsZWN0ZWREYXlzIiwibW9kaWZpZXJzIiwiZGF5Iiwic2hvcnRjdXRzRW5hYmxlZCIsImxlbmd0aCIsInJhbmdlIiwiaXNEYXlEaXNhYmxlZCIsImlzRGF5QmVmb3JlIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsImJvb2wiLCJpbnB1dEVsZW1lbnQiLCJjdXJyZW50IiwiaW5wdXQiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwibmV3VmFsIiwicmFuZ2VSZXNldCIsInNwbGl0IiwiRGF0ZSIsImlzU2VsZWN0aW5nRmlyc3REYXkiLCJmcm9tQXJnIiwidG9BcmciLCJpc1JhbmdlU2VsZWN0ZWQiLCJoYW5kbGVEYXlDbGljayIsIm5ld1JhbmdlIiwiZnJvbVN0ciIsInRvU3RyIiwibmV3UmFuZ2VWYWx1ZSIsImhhbmRsZURheU1vdXNlRW50ZXIiLCJoYW5kbGVEYXlNb3VzZUxlYXZlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWwiLCJ0cmltIiwicmFuZ2VWYWx1ZVN0cnMiLCJuZXdGcm9tIiwibmV3VG8iLCJpc1NhbWVEYXkiLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlSW5wdXRLZXlEb3duIiwia2V5Q29kZSIsImtleXMiLCJpbmNsdWRlcyIsImJsdXIiLCJoYW5kbGVNb250aENoYW5nZSIsImRhdGUiLCJlIiwiY3VycmVudFRhcmdldCIsInRhcmdldFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJkYXlQaWNrZXJSZWN0IiwiZGF5UGlja2VyIiwibmFtZSIsImxlZnQiLCJ3aWR0aCIsImdldE1vbnRoIiwibmV3TW9udGgiLCJ2YWx1ZVNob3J0Y3V0IiwiQXJyYXkiLCJpc0FycmF5IiwiZnJvbVNob3J0Y3V0IiwidG9TaG9ydGN1dCIsInN0eWxlcyIsIk1PTlRIUyIsIldFRUtEQVlTX0xPTkciLCJXRUVLREFZU19TSE9SVCIsIk5hdmJhckVsZW1lbnRQcm9wcyIsIkNhcHRpb25FbGVtZW50UHJvcHMiLCJnZXREYXRlIiwibWF4V2lkdGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJmdW5jIiwib25lT2YiLCJpbnN0YW5jZU9mIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQVFB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QUFvQnpCRSxFQUFBQSxLQUFLLEVBQUUsSUFwQmtCO0FBcUJ6QkUsRUFBQUEsT0FBTyxFQUFFO0FBckJnQixDQUEzQjtBQXdCQXpCLFdBQVcsQ0FBQ3FJLFdBQVosR0FBMEIsYUFBMUI7ZUFFZXJJLFciLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgUmVhY3QsIHtcbiAgZm9yd2FyZFJlZixcbiAgdXNlQ29udGV4dCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlTWVtbyxcbiAgdXNlUmVmLFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IERheVBpY2tlciwge1xuICBDYXB0aW9uRWxlbWVudFByb3BzLFxuICBEYXRlVXRpbHMsXG4gIE5hdmJhckVsZW1lbnRQcm9wcyxcbn0gZnJvbSBcImRheS1waWNrZXItcmVhY3RcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NsYXNzTmFtZXNcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2lucHV0XCJcbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gXCIuLi9wb3AtdHJpZ2dlclwiXG5pbXBvcnQgUG9wb3ZlciwgeyBJUG9wb3ZlclByb3BzIH0gZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IENhcHRpb24gZnJvbSBcIi4vQ2FwdGlvblwiXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiXG5pbXBvcnQgU2hvcnRjdXRzIGZyb20gXCIuL1Nob3J0Y3V0c1wiXG5pbXBvcnQge1xuICBNT05USFMsXG4gIFdFRUtEQVlTX0xPTkcsXG4gIFdFRUtEQVlTX1NIT1JULFxuICBnZXREZWZhdWx0TWF4RGF0ZSxcbiAgZ2V0RGVmYXVsdE1pbkRhdGUsXG4gIGlzTGVnYWxEYXRlUmFuZ2VTdHJpbmcsXG4gIGNvbnZlcnREYXRlVG9TdHJpbmcsXG4gIGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyxcbiAgaXNEYXlJblJhbmdlLFxufSBmcm9tIFwiLi9jb3JlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWRhdGVcIlxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuZXhwb3J0IGludGVyZmFjZSBJUmFuZ2VQaWNrZXJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuWcqOmAieaLqeWQju+8jOa2iOWksSBQb3BvdmVyXG4gICAqL1xuICBjbG9zZU9uU2VsZWN0PzogYm9vbGVhblxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya6buY6K6k5pel5pyf6IyD5Zu0XG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBbRGF0ZSB8IG51bGwgfCB1bmRlZmluZWQsIERhdGUgfCBudWxsIHwgdW5kZWZpbmVkXSB8IG51bGxcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8mum7mOiupOaYr+WQpuaYvuekuuS4i+aLiVxuICAgKi9cbiAgZGVmYXVsdFZpc2libGU/OiBib29sZWFuIHwgbnVsbFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOemgeatoumAieaLqeeahOWkqe+8jGRheSA9PiBib29s77yb5q+P5LiA5aSp5piv55qE5pe26Ze05Li6IDEyOjAwOjAw77yM6L+Z5LiA5Liq5piv55SxIGRheS1waWNrZXItcmVhY3Qg5Yaz5a6a55qE77ybXG4gICAqIOavlOi+g+aXpeacn+eahOaXtuWAmeWwj+W/g+i/meS4gOeCueOAglxuICAgKi9cbiAgZGlzYWJsZWREYXlzPzogKGRhdGU6IERhdGUpID0+IGJvb2xlYW4gfCB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7ovpPlhaXmoYbnsbvlnotcbiAgICovXG4gIGludGVudD86IFwibm9ybWFsXCIgfCBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJ3YXJuaW5nXCIgfCBcImRhbmdlclwiXG4gIC8qKlxuICAgKiDmnIDlpKfpmZDliLbml6XmnJ9cbiAgICovXG4gIG1heERhdGU/OiBEYXRlXG4gIC8qKlxuICAgKiDmnIDlsI/pmZDliLbml6XmnJ9cbiAgICovXG4gIG1pbkRhdGU/OiBEYXRlXG4gIC8qKlxuICAgKiDml6XmnJ/mlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAoZGF0ZTogW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF0pID0+IHZvaWRcbiAgLyoqXG4gICAqIOesrOS6jOasoeeCueWHu+S6huaXpeacn+aXtueahCBoYW5kbGVy77yM5Y2z57uT5p2f6YCJ5oupXG4gICAqL1xuICBvbkVuZERheVNlbGVjdD86IChkYXRlOiBEYXRlKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDnrKzkuIDmrKHngrnlh7vkuobml6XmnJ/ml7bnmoQgaGFuZGxlcu+8jOWNs+W8gOWni+mAieaLqe+8iOWPr+S7peWcqOatpOaXtuiuvue9riBtYXhEYXRlIG1pbkRhdGXvvIzlrp7njrDmjqfliLbml6XmnJ/pgInmi6nojIPlm7TnmoTlip/og73vvIlcbiAgICovXG4gIG9uU3RhcnREYXlTZWxlY3Q/OiAoZGF0ZTogRGF0ZSkgPT4gdm9pZFxuICAvKipcbiAgICog5pi+56S654q25oCB5Y+R55Sf5Y+Y5YyW5pe255qEaGFuZGxlclxuICAgKi9cbiAgb25WaXNpYmxlQ2hhbmdlPzogKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOWNoOS9jeWtl+esplxuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOW8ueWHuuWxguS9jee9rlxuICAgKi9cbiAgcGxhY2VtZW50PzogUGxhY2VtZW50XG4gIC8qKlxuICAgKiDkvKDlhaUgUG9wb3ZlciDnmoQgcHJvcHNcbiAgICovXG4gIHBvcG92ZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgLyoqXG4gICAqIOW/q+aNt+mAieaLqemhue+8jOagvOW8j++8mlxuICAgKiBbe1xuICAgKiBsYWJlbDogXCLnpZblm73mr43kurLnlJ/ml6VcIiwgdmFsdWU6IFtuZXcgRGF0ZShcIjIwMjAtMTAtMDFcIiksIG5ldyBEYXRlKFwiMjAyMC0xMC0wN1wiKV1cbiAgICogfV1cbiAgICovXG4gIHNob3J0Y3V0cz86IHtcbiAgICAvKipcbiAgICAgKiDor6XpobnnmoTmloflrZdcbiAgICAgKi9cbiAgICBsYWJlbDogUmVhY3QuUmVhY3ROb2RlXG4gICAgLyoqXG4gICAgICog6K+l6aG555qE5pel5pyfXG4gICAgICovXG4gICAgdmFsdWU6IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdXG4gIH1bXVxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lPzogbnVsbCB8IFwibGlnaHRcIlxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5b2T5YmN5pel5pyf6IyD5Zu0XG4gICAqL1xuICB2YWx1ZT86IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdIHwgbnVsbFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5piv5ZCm5pi+56S65LiL5ouJ6YCJ5oupXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbiB8IG51bGxcbn1cblxuLyoqXG4gKiDml6XmnJ/pgInmi6nlmajnlKjkuo7kuobop6PlvZPliY3lt7LpgInml6XmnJ/vvIzpgInmi6nmiJbovpPlhaXpnIDopoHnmoTml6XmnJ/jgIHml6XmnJ/ojIPlm7TnrYnjgIJcbiAqL1xuY29uc3QgUmFuZ2VQaWNrZXI6IFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8SVJhbmdlUGlja2VyUHJvcHMgJlxuICBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT4+ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNsb3NlT25TZWxlY3QsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkZWZhdWx0VmlzaWJsZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZGlzYWJsZWREYXlzLFxuICAgICAgaW50ZW50LFxuICAgICAgbWF4RGF0ZSxcbiAgICAgIG1pbkRhdGUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uRW5kRGF5U2VsZWN0LFxuICAgICAgb25TdGFydERheVNlbGVjdCxcbiAgICAgIG9uVmlzaWJsZUNoYW5nZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgcG9wb3ZlclByb3BzLFxuICAgICAgc2hvcnRjdXRzLFxuICAgICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgICB0aGVtZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVByb3AsXG4gICAgICB2aXNpYmxlOiB2aXNpYmxlUHJvcCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJUmFuZ2VQaWNrZXJQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgLyoqXG4gICAgICogc2VsZWN0ZWREYXkg5Li65Lyg57uZIERheVBpY2tlciDnmoTmnIDnu4ggRGF0ZSBPYmplY3TvvIxcbiAgICAgKiB2YWx1ZSDkuLogaW5wdXQg55qE6L6T5YWlIFN0cmluZ+OAglxuICAgICAqL1xuICAgIGNvbnN0IGdldEluaXRpYWxTdGF0ZSA9ICgpID0+IHtcbiAgICAgIGxldCByYW5nZVZhbHVlID0gXCJcIlxuICAgICAgbGV0IGZyb21cbiAgICAgIGxldCB0b1xuICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCAmJiB2YWx1ZVByb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICA7W2Zyb20sIHRvXSA9IHZhbHVlUHJvcFxuICAgICAgICByYW5nZVZhbHVlID0gY29udmVydERhdGVSYW5nZVRvU3RyaW5nKHZhbHVlUHJvcClcbiAgICAgIH0gZWxzZSBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsICYmIGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIDtbZnJvbSwgdG9dID0gZGVmYXVsdFZhbHVlXG4gICAgICAgIHJhbmdlVmFsdWUgPSBjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcoZGVmYXVsdFZhbHVlKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBmcm9tLFxuICAgICAgICBtb250aDogZnJvbSxcbiAgICAgICAgcmFuZ2VWYWx1ZSxcbiAgICAgICAgdG8sXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdXNlTWVtbyhnZXRJbml0aWFsU3RhdGUsIFtdKVxuXG4gICAgY29uc3QgW2VudGVyZWRUbywgc2V0RW50ZXJlZFRvXSA9IHVzZVN0YXRlPERhdGUgfCBudWxsIHwgdW5kZWZpbmVkPihudWxsKVxuICAgIGNvbnN0IFtmcm9tLCBzZXRGcm9tXSA9IHVzZVN0YXRlPERhdGUgfCBudWxsIHwgdW5kZWZpbmVkPihpbml0aWFsU3RhdGUuZnJvbSlcbiAgICBjb25zdCBbdG8sIHNldFRvXSA9IHVzZVN0YXRlPERhdGUgfCBudWxsIHwgdW5kZWZpbmVkPihpbml0aWFsU3RhdGUudG8pXG4gICAgY29uc3QgW21vbnRoLCBzZXRNb250aF0gPSB1c2VTdGF0ZTxEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZD4oXG4gICAgICBpbml0aWFsU3RhdGUubW9udGhcbiAgICApXG4gICAgY29uc3QgW3ByZXZWYWx1ZVByb3AsIHNldFByZXZWYWx1ZVByb3BdID0gdXNlU3RhdGU8XG4gICAgICBbRGF0ZSB8IG51bGwgfCB1bmRlZmluZWQsIERhdGUgfCBudWxsIHwgdW5kZWZpbmVkXSB8IG51bGwgfCB1bmRlZmluZWRcbiAgICA+KHZhbHVlUHJvcClcbiAgICBjb25zdCBbcmFuZ2VWYWx1ZSwgc2V0UmFuZ2VWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFxuICAgICAgaW5pdGlhbFN0YXRlLnJhbmdlVmFsdWVcbiAgICApXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oKCkgPT4ge1xuICAgICAgaWYgKHZpc2libGVQcm9wICE9PSBudWxsICYmIHZpc2libGVQcm9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHZpc2libGVQcm9wXG4gICAgICB9XG4gICAgICBpZiAoZGVmYXVsdFZpc2libGUgIT09IG51bGwgJiYgZGVmYXVsdFZpc2libGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZpc2libGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAgaWYgKFxuICAgICAgdmFsdWVQcm9wICE9PSBudWxsICYmXG4gICAgICB2YWx1ZVByb3AgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdmFsdWVQcm9wICE9PSBwcmV2VmFsdWVQcm9wXG4gICAgKSB7XG4gICAgICBzZXRGcm9tKHZhbHVlUHJvcFswXSlcbiAgICAgIHNldFRvKHZhbHVlUHJvcFsxXSlcbiAgICAgIHNldFJhbmdlVmFsdWUoY29udmVydERhdGVSYW5nZVRvU3RyaW5nKHZhbHVlUHJvcCkpXG4gICAgICBzZXRQcmV2VmFsdWVQcm9wKHZhbHVlUHJvcClcbiAgICB9XG4gICAgaWYgKHZpc2libGVQcm9wICE9PSBudWxsICYmIHZpc2libGUgIT09ICEhdmlzaWJsZVByb3ApIHtcbiAgICAgIHNldFZpc2libGUoISF2aXNpYmxlUHJvcClcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG4gICAgY29uc3QgZGF5UGlja2VyUmVmID0gdXNlUmVmPGFueT4obnVsbClcblxuICAgIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcbiAgICBjb25zdCBzaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemVQcm9wLCBzaXplQ29udGV4dClcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0tcmFuZ2VCYXNlYCxcbiAgICAgIGAke3ByZWZpeH0tJHtzaXplfWBcbiAgICApXG5cbiAgICBsZXQgZnJvbUZpbmFsOiBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZFxuICAgIGxldCBlbnRlcmVkVG9GaW5hbCA9IHRvIHx8IGVudGVyZWRUb1xuICAgIGNvbnN0IGlzUmV2ZXJzZSA9XG4gICAgICBmcm9tICYmIGVudGVyZWRUb0ZpbmFsICYmIERhdGVVdGlscy5pc0RheUFmdGVyKGZyb20sIGVudGVyZWRUb0ZpbmFsKVxuICAgIGlmIChpc1JldmVyc2UpIHtcbiAgICAgIGZyb21GaW5hbCA9IGVudGVyZWRUb0ZpbmFsXG4gICAgICBlbnRlcmVkVG9GaW5hbCA9IGZyb21cbiAgICB9IGVsc2Uge1xuICAgICAgZnJvbUZpbmFsID0gZnJvbVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGVkRGF5cyA9IFtcbiAgICAgIGZyb21GaW5hbCxcbiAgICAgIHtcbiAgICAgICAgZnJvbTogZnJvbUZpbmFsLFxuICAgICAgICB0bzogZW50ZXJlZFRvRmluYWwsXG4gICAgICB9LFxuICAgIF1cbiAgICBjb25zdCBtb2RpZmllcnMgPSB7XG4gICAgICBbYCR7cHJlZml4fS1yYW5nZVN0YXJ0YF06IGlzUmV2ZXJzZSA/IHRvICYmIGZyb21GaW5hbCA6IGZyb21GaW5hbCxcbiAgICAgIFtgJHtwcmVmaXh9LXJhbmdlU3RhcnRIb3ZlcmBdOiBpc1JldmVyc2UgJiYgIXRvICYmIGZyb21GaW5hbCxcbiAgICAgIFtgJHtwcmVmaXh9LXJhbmdlRW5kYF06IGlzUmV2ZXJzZSA/IGVudGVyZWRUb0ZpbmFsIDogdG8gJiYgZW50ZXJlZFRvRmluYWwsXG4gICAgICBbYCR7cHJlZml4fS1yYW5nZUVuZEhvdmVyYF06ICFpc1JldmVyc2UgJiYgIXRvICYmIGVudGVyZWRUb0ZpbmFsLFxuICAgICAgW2Ake3ByZWZpeH0tc2VsZWN0ZWRSYW5nZWBdOiAoZGF5OiBEYXRlKSA9PlxuICAgICAgICBpc0RheUluUmFuZ2UoZGF5LCBbZnJvbUZpbmFsLCBlbnRlcmVkVG9GaW5hbF0sIHRydWUpLFxuICAgIH1cblxuICAgIGNvbnN0IHNob3J0Y3V0c0VuYWJsZWQgPSBzaG9ydGN1dHMgJiYgc2hvcnRjdXRzLmxlbmd0aCA+IDBcblxuICAgIGNvbnN0IHJhbmdlOiBbRGF0ZSB8IG51bGwgfCB1bmRlZmluZWQsIERhdGUgfCBudWxsIHwgdW5kZWZpbmVkXSA9IFtcbiAgICAgIGZyb21GaW5hbCxcbiAgICAgIGVudGVyZWRUb0ZpbmFsLFxuICAgIF1cblxuICAgIGNvbnN0IGlzRGF5RGlzYWJsZWQgPSAoZGF5OiBEYXRlKSA9PiB7XG4gICAgICByZXR1cm4gZGlzYWJsZWREYXlzXG4gICAgICAgID8gZGlzYWJsZWREYXlzKGRheSkgfHxcbiAgICAgICAgICAgIERhdGVVdGlscy5pc0RheUJlZm9yZShkYXksIG1pbkRhdGUpIHx8XG4gICAgICAgICAgICBEYXRlVXRpbHMuaXNEYXlBZnRlcihkYXksIG1heERhdGUpXG4gICAgICAgIDogbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVZpc2libGVDaGFuZ2UgPSAoYm9vbDogYm9vbGVhbikgPT4ge1xuICAgICAgY29uc3QgeyBpbnB1dDogaW5wdXRFbGVtZW50IH0gPSBpbnB1dFJlZi5jdXJyZW50XG4gICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgeyBhY3RpdmVFbGVtZW50IH0gPSBkb2N1bWVudFxuICAgICAgICBpZiAoYm9vbCB8fCAoIWJvb2wgJiYgaW5wdXRFbGVtZW50ICE9PSBhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgIGNvbnN0IG5ld1ZhbCA9IGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyhbZnJvbSwgdG9dKVxuICAgICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgaWYgKCF0bykge1xuICAgICAgICAgICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VSZXNldCA9IHJhbmdlVmFsdWUuc3BsaXQoXCIgLSBcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldEZyb20obmV3IERhdGUocmFuZ2VSZXNldFswXSkpXG4gICAgICAgICAgICAgICAgICBzZXRUbyhuZXcgRGF0ZShyYW5nZVJlc2V0WzFdKSlcbiAgICAgICAgICAgICAgICB9LCAyNTApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmFuZ2VWYWx1ZSAhPT0gbmV3VmFsKSB7XG4gICAgICAgICAgICAgIHNldFJhbmdlVmFsdWUobmV3VmFsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBvblZpc2libGVDaGFuZ2UoYm9vbClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRWaXNpYmxlKGJvb2wpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIGNvbnN0IGlzU2VsZWN0aW5nRmlyc3REYXkgPSAoXG4gICAgICBmcm9tQXJnPzogRGF0ZSB8IG51bGwsXG4gICAgICB0b0FyZz86IERhdGUgfCBudWxsXG4gICAgKSA9PiB7XG4gICAgICBjb25zdCBpc1JhbmdlU2VsZWN0ZWQgPSBmcm9tQXJnICYmIHRvQXJnXG4gICAgICByZXR1cm4gIWZyb21BcmcgfHwgaXNSYW5nZVNlbGVjdGVkXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRGF5Q2xpY2sgPSAoZGF5OiBEYXRlKSA9PiB7XG4gICAgICBpZiAoaXNTZWxlY3RpbmdGaXJzdERheShmcm9tLCB0bykpIHtcbiAgICAgICAgaWYgKG9uU3RhcnREYXlTZWxlY3QpIHtcbiAgICAgICAgICBvblN0YXJ0RGF5U2VsZWN0KGRheSlcbiAgICAgICAgfVxuICAgICAgICBzZXRFbnRlcmVkVG8obnVsbClcbiAgICAgICAgc2V0RnJvbShkYXkpXG4gICAgICAgIHNldFRvKG51bGwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAob25FbmREYXlTZWxlY3QpIHtcbiAgICAgICAgICBvbkVuZERheVNlbGVjdChkYXkpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ld1JhbmdlOiBbRGF0ZSB8IG51bGwgfCB1bmRlZmluZWQsIERhdGUgfCBudWxsIHwgdW5kZWZpbmVkXVxuICAgICAgICBjb25zdCBmcm9tU3RyID0gY29udmVydERhdGVUb1N0cmluZyhmcm9tKVxuICAgICAgICBjb25zdCB0b1N0ciA9IGNvbnZlcnREYXRlVG9TdHJpbmcoZGF5KVxuICAgICAgICBsZXQgbmV3UmFuZ2VWYWx1ZSA9IFwiXCJcbiAgICAgICAgaWYgKERhdGVVdGlscy5pc0RheUFmdGVyKGRheSwgZnJvbSkpIHtcbiAgICAgICAgICBuZXdSYW5nZSA9IFtmcm9tLCBkYXldXG4gICAgICAgICAgbmV3UmFuZ2VWYWx1ZSA9IGAke2Zyb21TdHJ9IC0gJHt0b1N0cn1gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3UmFuZ2UgPSBbZGF5LCBmcm9tXVxuICAgICAgICAgIG5ld1JhbmdlVmFsdWUgPSBgJHt0b1N0cn0gLSAke2Zyb21TdHJ9YFxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICBzZXRFbnRlcmVkVG8oZGF5KVxuICAgICAgICAgIHNldFJhbmdlVmFsdWUobmV3UmFuZ2VWYWx1ZSlcbiAgICAgICAgICBzZXRUbyhkYXkpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UobmV3UmFuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgICAvLyDlu7bov5/mmK/kuLrkuoborqnnirbmgIHnmoTlj5jljJblnKjop4bop4nkuIrlhYjooqvmjqXlj5dcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgb25WaXNpYmxlQ2hhbmdlKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHNldFZpc2libGUoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRGF5TW91c2VFbnRlciA9IChkYXk6IERhdGUpID0+IHtcbiAgICAgIGlmICghaXNTZWxlY3RpbmdGaXJzdERheShmcm9tLCB0bykpIHtcbiAgICAgICAgc2V0RW50ZXJlZFRvKGRheSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEYXlNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgICAgc2V0RW50ZXJlZFRvKG51bGwpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoe1xuICAgICAgdGFyZ2V0LFxuICAgIH06IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBjb25zdCB7IHZhbHVlOiB2YWwgfSA9IHRhcmdldFxuICAgICAgc2V0UmFuZ2VWYWx1ZSh2YWwpXG4gICAgICBpZiAodmFsLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgc2V0RW50ZXJlZFRvKG51bGwpXG4gICAgICAgICAgc2V0RnJvbShudWxsKVxuICAgICAgICAgIHNldFRvKG51bGwpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoW3VuZGVmaW5lZCwgdW5kZWZpbmVkXSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc0xlZ2FsRGF0ZVJhbmdlU3RyaW5nKHZhbCkpIHtcbiAgICAgICAgY29uc3QgcmFuZ2VWYWx1ZVN0cnMgPSB2YWwuc3BsaXQoXCIgLSBcIilcbiAgICAgICAgY29uc3QgbmV3RnJvbSA9IG5ldyBEYXRlKHJhbmdlVmFsdWVTdHJzWzBdKVxuICAgICAgICBjb25zdCBuZXdUbyA9IG5ldyBEYXRlKHJhbmdlVmFsdWVTdHJzWzFdKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWlzRGF5RGlzYWJsZWQobmV3RnJvbSkgJiZcbiAgICAgICAgICAhaXNEYXlEaXNhYmxlZChuZXdUbykgJiZcbiAgICAgICAgICAhRGF0ZVV0aWxzLmlzRGF5QmVmb3JlKG5ld1RvLCBuZXdGcm9tKSAmJlxuICAgICAgICAgICEoXG4gICAgICAgICAgICBEYXRlVXRpbHMuaXNTYW1lRGF5KGZyb20sIG5ld0Zyb20pICYmIERhdGVVdGlscy5pc1NhbWVEYXkodG8sIG5ld1RvKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0RnJvbShuZXdGcm9tKVxuICAgICAgICAgICAgc2V0VG8obmV3VG8pXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOS/ruaUueaXpeacn+WQjueahCBtb250aCDot7PovaxcbiAgICAgICAgICBpZiAoIURhdGVVdGlscy5pc1NhbWVEYXkoZnJvbSwgbmV3RnJvbSkpIHtcbiAgICAgICAgICAgIHNldE1vbnRoKG5ld0Zyb20pXG4gICAgICAgICAgfSBlbHNlIGlmICghRGF0ZVV0aWxzLmlzU2FtZURheSh0bywgbmV3VG8pKSB7XG4gICAgICAgICAgICBzZXRNb250aChuZXdUbylcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICBvbkNoYW5nZShbbmV3RnJvbSwgbmV3VG9dKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Rm9jdXMgPSAoKSA9PiB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZSh0cnVlKVxuICAgICAgICB9XG4gICAgICAgIGlmICh2aXNpYmxlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0S2V5RG93biA9ICh7XG4gICAgICBrZXlDb2RlLFxuICAgIH06IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IGtleXMgPSBbOSwgMTMsIDI3XVxuICAgICAgaWYgKGtleXMuaW5jbHVkZXMoa2V5Q29kZSkpIHtcbiAgICAgICAgaGFuZGxlVmlzaWJsZUNoYW5nZShmYWxzZSlcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5pbnB1dC5ibHVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVNb250aENoYW5nZSA9IChcbiAgICAgIGRhdGU6IERhdGUsXG4gICAgICBlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+XG4gICAgKSA9PiB7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBjb25zdCB7IGN1cnJlbnRUYXJnZXQ6IHRhcmdldCB9ID0gZVxuICAgICAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGFyZ2V0ICYmIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBjb25zdCBkYXlQaWNrZXJSZWN0ID0gZGF5UGlja2VyUmVmLmN1cnJlbnQuZGF5UGlja2VyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRhcmdldC5uYW1lID09PSBcIm1vbnRoXCIgJiZcbiAgICAgICAgICAodGFyZ2V0UmVjdC5sZWZ0IC0gZGF5UGlja2VyUmVjdC5sZWZ0KSAqIDIgPiBkYXlQaWNrZXJSZWN0LndpZHRoXG4gICAgICAgICkge1xuICAgICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpIC0gMSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IG5ld01vbnRoID0gZGF0ZVxuICAgICAgaWYgKERhdGVVdGlscy5pc0RheUFmdGVyKGRhdGUsIG1heERhdGUpKSB7XG4gICAgICAgIGlmIChtYXhEYXRlKSB7XG4gICAgICAgICAgbmV3TW9udGggPSBtYXhEYXRlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoRGF0ZVV0aWxzLmlzRGF5QmVmb3JlKGRhdGUsIG1pbkRhdGUpKSB7XG4gICAgICAgIGlmIChtaW5EYXRlKSB7XG4gICAgICAgICAgbmV3TW9udGggPSBtaW5EYXRlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldE1vbnRoKG5ld01vbnRoKVxuICAgIH1cblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgaW5wdXQ6IGlucHV0UmVmLmN1cnJlbnQsXG4gICAgICBoYW5kbGVEYXlDbGljayxcbiAgICAgIGhhbmRsZVZpc2libGVDaGFuZ2UsXG4gICAgfSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcG92ZXJcbiAgICAgICAgYXJyb3dlZD17ZmFsc2V9XG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZT17aGFuZGxlVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgICAgIHBvcHVwPXtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3B1cGB9PlxuICAgICAgICAgICAge3Nob3J0Y3V0c0VuYWJsZWQgJiYgKFxuICAgICAgICAgICAgICA8U2hvcnRjdXRzXG4gICAgICAgICAgICAgICAgb25TaG9ydGN1dENsaWNrPXt2YWx1ZVNob3J0Y3V0ID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlU2hvcnRjdXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyb21TaG9ydGN1dCA9IHZhbHVlU2hvcnRjdXRbMF1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9TaG9ydGN1dCA9IHZhbHVlU2hvcnRjdXRbMV1cbiAgICAgICAgICAgICAgICAgICAgc2V0RnJvbShmcm9tU2hvcnRjdXQpXG4gICAgICAgICAgICAgICAgICAgIHNldE1vbnRoKGZyb21TaG9ydGN1dClcbiAgICAgICAgICAgICAgICAgICAgc2V0VG8odG9TaG9ydGN1dClcbiAgICAgICAgICAgICAgICAgICAgc2V0UmFuZ2VWYWx1ZShjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcodmFsdWVTaG9ydGN1dCkpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UodmFsdWVTaG9ydGN1dClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbG9zZU9uU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8g5bu26L+f5piv5Li65LqG6K6p54q25oCB55qE5Y+Y5YyW5Zyo6KeG6KeJ5LiK5YWI6KKr5o6l5Y+XXG4gICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtyYW5nZX1cbiAgICAgICAgICAgICAgICBzaG9ydGN1dHM9e3Nob3J0Y3V0c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8RGF5UGlja2VyXG4gICAgICAgICAgICAgIHJlZj17ZGF5UGlja2VyUmVmfVxuICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocz17Mn1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtpc0RheURpc2FibGVkfVxuICAgICAgICAgICAgICBmcm9tTW9udGg9e21pbkRhdGV9XG4gICAgICAgICAgICAgIHRvTW9udGg9e21heERhdGV9XG4gICAgICAgICAgICAgIGNhbkNoYW5nZU1vbnRoXG4gICAgICAgICAgICAgIGNsYXNzTmFtZXM9e3N0eWxlc31cbiAgICAgICAgICAgICAgbW9udGg9e21vbnRofVxuICAgICAgICAgICAgICBtb250aHM9e01PTlRIU31cbiAgICAgICAgICAgICAgd2Vla2RheXNMb25nPXtXRUVLREFZU19MT05HfVxuICAgICAgICAgICAgICB3ZWVrZGF5c1Nob3J0PXtXRUVLREFZU19TSE9SVH1cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtzZWxlY3RlZERheXN9XG4gICAgICAgICAgICAgIG5hdmJhckVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgIDxOYXZiYXJcbiAgICAgICAgICAgICAgICAgIG1heERhdGU9e21heERhdGV9XG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXttaW5EYXRlfVxuICAgICAgICAgICAgICAgICAgey4uLk5hdmJhckVsZW1lbnRQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhcHRpb25FbGVtZW50PXtcbiAgICAgICAgICAgICAgICA8Q2FwdGlvblxuICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17bWF4RGF0ZX1cbiAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e21pbkRhdGV9XG4gICAgICAgICAgICAgICAgICBvbkRhdGVDaGFuZ2U9e2hhbmRsZU1vbnRoQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgey4uLkNhcHRpb25FbGVtZW50UHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkRheU1vdXNlRW50ZXI9e2hhbmRsZURheU1vdXNlRW50ZXJ9XG4gICAgICAgICAgICAgIG9uRGF5TW91c2VMZWF2ZT17aGFuZGxlRGF5TW91c2VMZWF2ZX1cbiAgICAgICAgICAgICAgb25EYXlDbGljaz17aGFuZGxlRGF5Q2xpY2t9XG4gICAgICAgICAgICAgIHJlbmRlckRheT17KGRheTogRGF0ZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNlbGxgfT57ZGF5LmdldERhdGUoKX08L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHBvcHVwU3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogc2hvcnRjdXRzRW5hYmxlZCA/IFwiNTc2cHhcIiA6IFwiNDc2cHhcIixcbiAgICAgICAgICBtYXhXaWR0aDogc2hvcnRjdXRzRW5hYmxlZCA/IFwiNTc2cHhcIiA6IFwiNDc2cHhcIixcbiAgICAgICAgfX1cbiAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgey4uLnBvcG92ZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgaW50ZW50PXtpbnRlbnR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVJbnB1dEtleURvd259XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgcmlnaHRFbGVtZW50PXs8SWNvbiBpY29uPVwiY2FsZW5kYXItb3V0bGluZWRcIiAvPn1cbiAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICB2YWx1ZT17cmFuZ2VWYWx1ZX1cbiAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvUG9wb3Zlcj5cbiAgICApXG4gIH1cbilcblxuUmFuZ2VQaWNrZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKblnKjpgInmi6nlkI7vvIzmtojlpLEgUG9wb3ZlclxuICAgKi9cbiAgY2xvc2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrpu5jorqTml6XmnJ/ojIPlm7RcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8mum7mOiupOaYr+WQpuaYvuekuuS4i+aLiVxuICAgKi9cbiAgZGVmYXVsdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDnpoHmraLpgInmi6nnmoTlpKnvvIxkYXkgPT4gYm9vbO+8m+avj+S4gOWkqeaYr+eahOaXtumXtOS4uiAxMjowMDowMO+8jOi/meS4gOS4quaYr+eUsSBkYXktcGlja2VyLXJlYWN0IOWGs+WumueahO+8m1xuICAgKiDmr5TovoPml6XmnJ/nmoTml7blgJnlsI/lv4Pov5nkuIDngrnjgIJcbiAgICovXG4gIGRpc2FibGVkRGF5czogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDorr7nva7ovpPlhaXmoYbnsbvlnotcbiAgICovXG4gIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcIm5vcm1hbFwiLFxuICAgIFwicHJpbWFyeVwiLFxuICAgIFwic3VjY2Vzc1wiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gIF0pLFxuICAvKipcbiAgICog5pyA5aSn6ZmQ5Yi25pel5pyfXG4gICAqL1xuICBtYXhEYXRlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgLyoqXG4gICAqIOacgOWwj+mZkOWItuaXpeacn1xuICAgKi9cbiAgbWluRGF0ZTogUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIC8qKlxuICAgKiDml6XmnJ/mlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog56ys5LqM5qyh54K55Ye75LqG5pel5pyf5pe255qEIGhhbmRsZXLvvIzljbPnu5PmnZ/pgInmi6lcbiAgICovXG4gIG9uRW5kRGF5U2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOesrOS4gOasoeeCueWHu+S6huaXpeacn+aXtueahCBoYW5kbGVy77yM5Y2z5byA5aeL6YCJ5oup77yI5Y+v5Lul5Zyo5q2k5pe26K6+572uIG1heERhdGUgbWluRGF0Ze+8jOWunueOsOaOp+WItuaXpeacn+mAieaLqeiMg+WbtOeahOWKn+iDve+8iVxuICAgKi9cbiAgb25TdGFydERheVNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDmmL7npLrnirbmgIHlj5HnlJ/lj5jljJbml7bnmoRoYW5kbGVyXG4gICAqL1xuICBvblZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5Y2g5L2N5a2X56ymXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOW8ueWHuuWxguS9jee9rlxuICAgKi9cbiAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwidG9wXCIsXG4gICAgXCJsZWZ0XCIsXG4gICAgXCJyaWdodFwiLFxuICAgIFwiYm90dG9tXCIsXG4gICAgXCJ0b3BMZWZ0XCIsXG4gICAgXCJ0b3BSaWdodFwiLFxuICAgIFwiYm90dG9tTGVmdFwiLFxuICAgIFwiYm90dG9tUmlnaHRcIixcbiAgICBcImxlZnRUb3BcIixcbiAgICBcImxlZnRCb3R0b21cIixcbiAgICBcInJpZ2h0VG9wXCIsXG4gICAgXCJyaWdodEJvdHRvbVwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOS8oOWFpSBQb3BvdmVyIOeahCBwcm9wc1xuICAgKi9cbiAgcG9wb3ZlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog5b+r5o236YCJ5oup6aG577yM5qC85byP77yaXG4gICAqIFt7XG4gICAqIGxhYmVsOiBcIuelluWbveavjeS6sueUn+aXpVwiLCB2YWx1ZTogW25ldyBEYXRlKFwiMjAyMC0xMC0wMVwiKSwgbmV3IERhdGUoXCIyMDIwLTEwLTA3XCIpXVxuICAgKiB9XVxuICAgKi9cbiAgc2hvcnRjdXRzOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog6K6+572u5Li76aKYXG4gICAqL1xuICB0aGVtZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCBcImxpZ2h0XCJdKSxcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muW9k+WJjeaXpeacn+iMg+WbtFxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKbmmL7npLrkuIvmi4npgInmi6lcbiAgICovXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxufVxuXG5SYW5nZVBpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogXCJcIixcbiAgY2xvc2VPblNlbGVjdDogZmFsc2UsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgZGVmYXVsdFZpc2libGU6IG51bGwsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZGlzYWJsZWREYXlzOiBub29wLFxuICBpbnRlbnQ6IFwibm9ybWFsXCIsXG4gIG1heERhdGU6IGdldERlZmF1bHRNYXhEYXRlKCksXG4gIG1pbkRhdGU6IGdldERlZmF1bHRNaW5EYXRlKCksXG4gIG9uQ2hhbmdlOiBub29wLFxuICBvbkVuZERheVNlbGVjdDogbm9vcCxcbiAgb25TdGFydERheVNlbGVjdDogbm9vcCxcbiAgb25WaXNpYmxlQ2hhbmdlOiBub29wLFxuICBwbGFjZWhvbGRlcjogXCLpgInmi6nml6XmnJ/ojIPlm7RcIixcbiAgcGxhY2VtZW50OiBcImJvdHRvbUxlZnRcIixcbiAgcG9wb3ZlclByb3BzOiB7fSxcbiAgc2hvcnRjdXRzOiB1bmRlZmluZWQsXG4gIHNpemU6IFwic21hbGxcIixcbiAgdGhlbWU6IG51bGwsXG4gIHZhbHVlOiBudWxsLFxuICB2aXNpYmxlOiBudWxsLFxufVxuXG5SYW5nZVBpY2tlci5kaXNwbGF5TmFtZSA9IFwiUmFuZ2VQaWNrZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBSYW5nZVBpY2tlclxuIl19