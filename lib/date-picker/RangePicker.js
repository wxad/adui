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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvUmFuZ2VQaWNrZXIudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIm5vb3AiLCJSYW5nZVBpY2tlciIsInJlZiIsImNsYXNzTmFtZSIsImNsb3NlT25TZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJkZWZhdWx0VmlzaWJsZSIsImRpc2FibGVkIiwiZGlzYWJsZWREYXlzIiwiaW50ZW50IiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJvbkNoYW5nZSIsIm9uRW5kRGF5U2VsZWN0Iiwib25TdGFydERheVNlbGVjdCIsIm9uVmlzaWJsZUNoYW5nZSIsInBsYWNlaG9sZGVyIiwicGxhY2VtZW50IiwicG9wb3ZlclByb3BzIiwic2hvcnRjdXRzIiwic2l6ZVByb3AiLCJzaXplIiwidGhlbWUiLCJ2YWx1ZVByb3AiLCJ2YWx1ZSIsInZpc2libGVQcm9wIiwidmlzaWJsZSIsIm90aGVyUHJvcHMiLCJnZXRJbml0aWFsU3RhdGUiLCJyYW5nZVZhbHVlIiwiZnJvbSIsInRvIiwidW5kZWZpbmVkIiwibW9udGgiLCJpbml0aWFsU3RhdGUiLCJlbnRlcmVkVG8iLCJzZXRFbnRlcmVkVG8iLCJzZXRGcm9tIiwic2V0VG8iLCJzZXRNb250aCIsInByZXZWYWx1ZVByb3AiLCJzZXRQcmV2VmFsdWVQcm9wIiwic2V0UmFuZ2VWYWx1ZSIsInNldFZpc2libGUiLCJpbnB1dFJlZiIsImRheVBpY2tlclJlZiIsIkNvbmZpZ0NvbnRleHQiLCJzaXplQ29udGV4dCIsImNsYXNzU2V0IiwiZnJvbUZpbmFsIiwiZW50ZXJlZFRvRmluYWwiLCJpc1JldmVyc2UiLCJEYXRlVXRpbHMiLCJpc0RheUFmdGVyIiwic2VsZWN0ZWREYXlzIiwibW9kaWZpZXJzIiwiZGF5Iiwic2hvcnRjdXRzRW5hYmxlZCIsImxlbmd0aCIsInJhbmdlIiwiaXNEYXlEaXNhYmxlZCIsImlzRGF5QmVmb3JlIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsImJvb2wiLCJpbnB1dEVsZW1lbnQiLCJjdXJyZW50IiwiaW5wdXQiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwibmV3VmFsIiwicmFuZ2VSZXNldCIsInNwbGl0IiwiRGF0ZSIsImlzU2VsZWN0aW5nRmlyc3REYXkiLCJmcm9tQXJnIiwidG9BcmciLCJpc1JhbmdlU2VsZWN0ZWQiLCJoYW5kbGVEYXlDbGljayIsIm5ld1JhbmdlIiwiZnJvbVN0ciIsInRvU3RyIiwibmV3UmFuZ2VWYWx1ZSIsImhhbmRsZURheU1vdXNlRW50ZXIiLCJoYW5kbGVEYXlNb3VzZUxlYXZlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWwiLCJ0cmltIiwicmFuZ2VWYWx1ZVN0cnMiLCJuZXdGcm9tIiwibmV3VG8iLCJpc1NhbWVEYXkiLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlSW5wdXRLZXlEb3duIiwia2V5Q29kZSIsImtleXMiLCJpbmNsdWRlcyIsImJsdXIiLCJoYW5kbGVNb250aENoYW5nZSIsImRhdGUiLCJlIiwiY3VycmVudFRhcmdldCIsInRhcmdldFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJkYXlQaWNrZXJSZWN0IiwiZGF5UGlja2VyIiwibmFtZSIsImxlZnQiLCJ3aWR0aCIsImdldE1vbnRoIiwibmV3TW9udGgiLCJ2YWx1ZVNob3J0Y3V0IiwiQXJyYXkiLCJpc0FycmF5IiwiZnJvbVNob3J0Y3V0IiwidG9TaG9ydGN1dCIsInN0eWxlcyIsIk1PTlRIUyIsIldFRUtEQVlTX0xPTkciLCJXRUVLREFZU19TSE9SVCIsIk5hdmJhckVsZW1lbnRQcm9wcyIsIkNhcHRpb25FbGVtZW50UHJvcHMiLCJnZXREYXRlIiwibWF4V2lkdGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJmdW5jIiwib25lT2YiLCJpbnN0YW5jZU9mIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQVFB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QjtBQW9CekJFLEVBQUFBLEtBQUssRUFBRSxJQXBCa0I7QUFxQnpCRSxFQUFBQSxPQUFPLEVBQUU7QUFyQmdCLENBQTNCO0FBd0JBekIsV0FBVyxDQUFDcUksV0FBWixHQUEwQixhQUExQjtlQUVlckksVyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VDb250ZXh0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VNZW1vLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgRGF5UGlja2VyLCB7XG4gIENhcHRpb25FbGVtZW50UHJvcHMsXG4gIERhdGVVdGlscyxcbiAgTmF2YmFyRWxlbWVudFByb3BzLFxufSBmcm9tIFwiZGF5LXBpY2tlci1yZWFjdFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY2xhc3NOYW1lc1wiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRcIlxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSBcIi4uL3BvcC10cmlnZ2VyXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgQ2FwdGlvbiBmcm9tIFwiLi9DYXB0aW9uXCJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCJcbmltcG9ydCBTaG9ydGN1dHMgZnJvbSBcIi4vU2hvcnRjdXRzXCJcbmltcG9ydCB7XG4gIE1PTlRIUyxcbiAgV0VFS0RBWVNfTE9ORyxcbiAgV0VFS0RBWVNfU0hPUlQsXG4gIGdldERlZmF1bHRNYXhEYXRlLFxuICBnZXREZWZhdWx0TWluRGF0ZSxcbiAgaXNMZWdhbERhdGVSYW5nZVN0cmluZyxcbiAgY29udmVydERhdGVUb1N0cmluZyxcbiAgY29udmVydERhdGVSYW5nZVRvU3RyaW5nLFxuICBpc0RheUluUmFuZ2UsXG59IGZyb20gXCIuL2NvcmVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktZGF0ZVwiXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIElSYW5nZVBpY2tlclByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm5Zyo6YCJ5oup5ZCO77yM5raI5aSxIFBvcG92ZXJcbiAgICovXG4gIGNsb3NlT25TZWxlY3Q/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrpu5jorqTml6XmnJ/ojIPlm7RcbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdIHwgbnVsbFxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya6buY6K6k5piv5ZCm5pi+56S65LiL5ouJXG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZT86IGJvb2xlYW4gfCBudWxsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog56aB5q2i6YCJ5oup55qE5aSp77yMZGF5ID0+IGJvb2zvvJvmr4/kuIDlpKnmmK/nmoTml7bpl7TkuLogMTI6MDA6MDDvvIzov5nkuIDkuKrmmK/nlLEgZGF5LXBpY2tlci1yZWFjdCDlhrPlrprnmoTvvJtcbiAgICog5q+U6L6D5pel5pyf55qE5pe25YCZ5bCP5b+D6L+Z5LiA54K544CCXG4gICAqL1xuICBkaXNhYmxlZERheXM/OiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbiB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9rui+k+WFpeahhuexu+Wei1xuICAgKi9cbiAgaW50ZW50PzogXCJub3JtYWxcIiB8IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCJcbiAgLyoqXG4gICAqIOacgOWkp+mZkOWItuaXpeacn1xuICAgKi9cbiAgbWF4RGF0ZT86IERhdGVcbiAgLyoqXG4gICAqIOacgOWwj+mZkOWItuaXpeacn1xuICAgKi9cbiAgbWluRGF0ZT86IERhdGVcbiAgLyoqXG4gICAqIOaXpeacn+aUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86IChkYXRlOiBbRGF0ZSB8IG51bGwgfCB1bmRlZmluZWQsIERhdGUgfCBudWxsIHwgdW5kZWZpbmVkXSkgPT4gdm9pZFxuICAvKipcbiAgICog56ys5LqM5qyh54K55Ye75LqG5pel5pyf5pe255qEIGhhbmRsZXLvvIzljbPnu5PmnZ/pgInmi6lcbiAgICovXG4gIG9uRW5kRGF5U2VsZWN0PzogKGRhdGU6IERhdGUpID0+IHZvaWRcbiAgLyoqXG4gICAqIOesrOS4gOasoeeCueWHu+S6huaXpeacn+aXtueahCBoYW5kbGVy77yM5Y2z5byA5aeL6YCJ5oup77yI5Y+v5Lul5Zyo5q2k5pe26K6+572uIG1heERhdGUgbWluRGF0Ze+8jOWunueOsOaOp+WItuaXpeacn+mAieaLqeiMg+WbtOeahOWKn+iDve+8iVxuICAgKi9cbiAgb25TdGFydERheVNlbGVjdD86IChkYXRlOiBEYXRlKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDmmL7npLrnirbmgIHlj5HnlJ/lj5jljJbml7bnmoRoYW5kbGVyXG4gICAqL1xuICBvblZpc2libGVDaGFuZ2U/OiAodmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxuICAvKipcbiAgICog5Y2g5L2N5a2X56ymXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICAvKipcbiAgICog5by55Ye65bGC5L2N572uXG4gICAqL1xuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnRcbiAgLyoqXG4gICAqIOS8oOWFpSBQb3BvdmVyIOeahCBwcm9wc1xuICAgKi9cbiAgcG9wb3ZlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICAvKipcbiAgICog5b+r5o236YCJ5oup6aG577yM5qC85byP77yaXG4gICAqIFt7XG4gICAqIGxhYmVsOiBcIuelluWbveavjeS6sueUn+aXpVwiLCB2YWx1ZTogW25ldyBEYXRlKFwiMjAyMC0xMC0wMVwiKSwgbmV3IERhdGUoXCIyMDIwLTEwLTA3XCIpXVxuICAgKiB9XVxuICAgKi9cbiAgc2hvcnRjdXRzPzoge1xuICAgIC8qKlxuICAgICAqIOivpemhueeahOaWh+Wtl1xuICAgICAqL1xuICAgIGxhYmVsOiBSZWFjdC5SZWFjdE5vZGVcbiAgICAvKipcbiAgICAgKiDor6XpobnnmoTml6XmnJ9cbiAgICAgKi9cbiAgICB2YWx1ZTogW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF1cbiAgfVtdXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU/OiBudWxsIHwgXCJsaWdodFwiXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrlvZPliY3ml6XmnJ/ojIPlm7RcbiAgICovXG4gIHZhbHVlPzogW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF0gfCBudWxsXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKbmmL7npLrkuIvmi4npgInmi6lcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuIHwgbnVsbFxufVxuXG4vKipcbiAqIOaXpeacn+mAieaLqeWZqOeUqOS6juS6huino+W9k+WJjeW3sumAieaXpeacn++8jOmAieaLqeaIlui+k+WFpemcgOimgeeahOaXpeacn+OAgeaXpeacn+iMg+WbtOetieOAglxuICovXG5jb25zdCBSYW5nZVBpY2tlcjogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxJUmFuZ2VQaWNrZXJQcm9wcyAmXG4gIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55Pj4gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY2xvc2VPblNlbGVjdCxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGRlZmF1bHRWaXNpYmxlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlZERheXMsXG4gICAgICBpbnRlbnQsXG4gICAgICBtYXhEYXRlLFxuICAgICAgbWluRGF0ZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgb25FbmREYXlTZWxlY3QsXG4gICAgICBvblN0YXJ0RGF5U2VsZWN0LFxuICAgICAgb25WaXNpYmxlQ2hhbmdlLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBwb3BvdmVyUHJvcHMsXG4gICAgICBzaG9ydGN1dHMsXG4gICAgICBzaXplOiBzaXplUHJvcCxcbiAgICAgIHRoZW1lLFxuICAgICAgdmFsdWU6IHZhbHVlUHJvcCxcbiAgICAgIHZpc2libGU6IHZpc2libGVQcm9wLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElSYW5nZVBpY2tlclByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICAvKipcbiAgICAgKiBzZWxlY3RlZERheSDkuLrkvKDnu5kgRGF5UGlja2VyIOeahOacgOe7iCBEYXRlIE9iamVjdO+8jFxuICAgICAqIHZhbHVlIOS4uiBpbnB1dCDnmoTovpPlhaUgU3RyaW5n44CCXG4gICAgICovXG4gICAgY29uc3QgZ2V0SW5pdGlhbFN0YXRlID0gKCkgPT4ge1xuICAgICAgbGV0IHJhbmdlVmFsdWUgPSBcIlwiXG4gICAgICBsZXQgZnJvbVxuICAgICAgbGV0IHRvXG4gICAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsICYmIHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIDtbZnJvbSwgdG9dID0gdmFsdWVQcm9wXG4gICAgICAgIHJhbmdlVmFsdWUgPSBjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcodmFsdWVQcm9wKVxuICAgICAgfSBlbHNlIGlmIChkZWZhdWx0VmFsdWUgIT09IG51bGwgJiYgZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgO1tmcm9tLCB0b10gPSBkZWZhdWx0VmFsdWVcbiAgICAgICAgcmFuZ2VWYWx1ZSA9IGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyhkZWZhdWx0VmFsdWUpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZyb20sXG4gICAgICAgIG1vbnRoOiBmcm9tLFxuICAgICAgICByYW5nZVZhbHVlLFxuICAgICAgICB0byxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB1c2VNZW1vKGdldEluaXRpYWxTdGF0ZSwgW10pXG5cbiAgICBjb25zdCBbZW50ZXJlZFRvLCBzZXRFbnRlcmVkVG9dID0gdXNlU3RhdGU8RGF0ZSB8IG51bGwgfCB1bmRlZmluZWQ+KG51bGwpXG4gICAgY29uc3QgW2Zyb20sIHNldEZyb21dID0gdXNlU3RhdGU8RGF0ZSB8IG51bGwgfCB1bmRlZmluZWQ+KGluaXRpYWxTdGF0ZS5mcm9tKVxuICAgIGNvbnN0IFt0bywgc2V0VG9dID0gdXNlU3RhdGU8RGF0ZSB8IG51bGwgfCB1bmRlZmluZWQ+KGluaXRpYWxTdGF0ZS50bylcbiAgICBjb25zdCBbbW9udGgsIHNldE1vbnRoXSA9IHVzZVN0YXRlPERhdGUgfCBudWxsIHwgdW5kZWZpbmVkPihcbiAgICAgIGluaXRpYWxTdGF0ZS5tb250aFxuICAgIClcbiAgICBjb25zdCBbcHJldlZhbHVlUHJvcCwgc2V0UHJldlZhbHVlUHJvcF0gPSB1c2VTdGF0ZTxcbiAgICAgIFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdIHwgbnVsbCB8IHVuZGVmaW5lZFxuICAgID4odmFsdWVQcm9wKVxuICAgIGNvbnN0IFtyYW5nZVZhbHVlLCBzZXRSYW5nZVZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXG4gICAgICBpbml0aWFsU3RhdGUucmFuZ2VWYWx1ZVxuICAgIClcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuPigoKSA9PiB7XG4gICAgICBpZiAodmlzaWJsZVByb3AgIT09IG51bGwgJiYgdmlzaWJsZVByb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmlzaWJsZVByb3BcbiAgICAgIH1cbiAgICAgIGlmIChkZWZhdWx0VmlzaWJsZSAhPT0gbnVsbCAmJiBkZWZhdWx0VmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmlzaWJsZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICBpZiAoXG4gICAgICB2YWx1ZVByb3AgIT09IG51bGwgJiZcbiAgICAgIHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB2YWx1ZVByb3AgIT09IHByZXZWYWx1ZVByb3BcbiAgICApIHtcbiAgICAgIHNldEZyb20odmFsdWVQcm9wWzBdKVxuICAgICAgc2V0VG8odmFsdWVQcm9wWzFdKVxuICAgICAgc2V0UmFuZ2VWYWx1ZShjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcodmFsdWVQcm9wKSlcbiAgICAgIHNldFByZXZWYWx1ZVByb3AodmFsdWVQcm9wKVxuICAgIH1cbiAgICBpZiAodmlzaWJsZVByb3AgIT09IG51bGwgJiYgdmlzaWJsZSAhPT0gISF2aXNpYmxlUHJvcCkge1xuICAgICAgc2V0VmlzaWJsZSghIXZpc2libGVQcm9wKVxuICAgIH1cblxuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPGFueT4obnVsbClcbiAgICBjb25zdCBkYXlQaWNrZXJSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuXG4gICAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuICAgIGNvbnN0IHNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZVByb3AsIHNpemVDb250ZXh0KVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYCR7cHJlZml4fS1yYW5nZUJhc2VgLFxuICAgICAgYCR7cHJlZml4fS0ke3NpemV9YFxuICAgIClcblxuICAgIGxldCBmcm9tRmluYWw6IERhdGUgfCBudWxsIHwgdW5kZWZpbmVkXG4gICAgbGV0IGVudGVyZWRUb0ZpbmFsID0gdG8gfHwgZW50ZXJlZFRvXG4gICAgY29uc3QgaXNSZXZlcnNlID1cbiAgICAgIGZyb20gJiYgZW50ZXJlZFRvRmluYWwgJiYgRGF0ZVV0aWxzLmlzRGF5QWZ0ZXIoZnJvbSwgZW50ZXJlZFRvRmluYWwpXG4gICAgaWYgKGlzUmV2ZXJzZSkge1xuICAgICAgZnJvbUZpbmFsID0gZW50ZXJlZFRvRmluYWxcbiAgICAgIGVudGVyZWRUb0ZpbmFsID0gZnJvbVxuICAgIH0gZWxzZSB7XG4gICAgICBmcm9tRmluYWwgPSBmcm9tXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWREYXlzID0gW1xuICAgICAgZnJvbUZpbmFsLFxuICAgICAge1xuICAgICAgICBmcm9tOiBmcm9tRmluYWwsXG4gICAgICAgIHRvOiBlbnRlcmVkVG9GaW5hbCxcbiAgICAgIH0sXG4gICAgXVxuICAgIGNvbnN0IG1vZGlmaWVycyA9IHtcbiAgICAgIFtgJHtwcmVmaXh9LXJhbmdlU3RhcnRgXTogaXNSZXZlcnNlID8gdG8gJiYgZnJvbUZpbmFsIDogZnJvbUZpbmFsLFxuICAgICAgW2Ake3ByZWZpeH0tcmFuZ2VTdGFydEhvdmVyYF06IGlzUmV2ZXJzZSAmJiAhdG8gJiYgZnJvbUZpbmFsLFxuICAgICAgW2Ake3ByZWZpeH0tcmFuZ2VFbmRgXTogaXNSZXZlcnNlID8gZW50ZXJlZFRvRmluYWwgOiB0byAmJiBlbnRlcmVkVG9GaW5hbCxcbiAgICAgIFtgJHtwcmVmaXh9LXJhbmdlRW5kSG92ZXJgXTogIWlzUmV2ZXJzZSAmJiAhdG8gJiYgZW50ZXJlZFRvRmluYWwsXG4gICAgICBbYCR7cHJlZml4fS1zZWxlY3RlZFJhbmdlYF06IChkYXk6IERhdGUpID0+XG4gICAgICAgIGlzRGF5SW5SYW5nZShkYXksIFtmcm9tRmluYWwsIGVudGVyZWRUb0ZpbmFsXSwgdHJ1ZSksXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvcnRjdXRzRW5hYmxlZCA9IHNob3J0Y3V0cyAmJiBzaG9ydGN1dHMubGVuZ3RoID4gMFxuXG4gICAgY29uc3QgcmFuZ2U6IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdID0gW1xuICAgICAgZnJvbUZpbmFsLFxuICAgICAgZW50ZXJlZFRvRmluYWwsXG4gICAgXVxuXG4gICAgY29uc3QgaXNEYXlEaXNhYmxlZCA9IChkYXk6IERhdGUpID0+IHtcbiAgICAgIHJldHVybiBkaXNhYmxlZERheXNcbiAgICAgICAgPyBkaXNhYmxlZERheXMoZGF5KSB8fFxuICAgICAgICAgICAgRGF0ZVV0aWxzLmlzRGF5QmVmb3JlKGRheSwgbWluRGF0ZSkgfHxcbiAgICAgICAgICAgIERhdGVVdGlscy5pc0RheUFmdGVyKGRheSwgbWF4RGF0ZSlcbiAgICAgICAgOiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVmlzaWJsZUNoYW5nZSA9IChib29sOiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zdCB7IGlucHV0OiBpbnB1dEVsZW1lbnQgfSA9IGlucHV0UmVmLmN1cnJlbnRcbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50XG4gICAgICAgIGlmIChib29sIHx8ICghYm9vbCAmJiBpbnB1dEVsZW1lbnQgIT09IGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgY29uc3QgbmV3VmFsID0gY29udmVydERhdGVSYW5nZVRvU3RyaW5nKFtmcm9tLCB0b10pXG4gICAgICAgICAgaWYgKCFib29sKSB7XG4gICAgICAgICAgICBpZiAoIXRvKSB7XG4gICAgICAgICAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZVJlc2V0ID0gcmFuZ2VWYWx1ZS5zcGxpdChcIiAtIFwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0RnJvbShuZXcgRGF0ZShyYW5nZVJlc2V0WzBdKSlcbiAgICAgICAgICAgICAgICAgIHNldFRvKG5ldyBEYXRlKHJhbmdlUmVzZXRbMV0pKVxuICAgICAgICAgICAgICAgIH0sIDI1MClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5nZVZhbHVlICE9PSBuZXdWYWwpIHtcbiAgICAgICAgICAgICAgc2V0UmFuZ2VWYWx1ZShuZXdWYWwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZShib29sKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodmlzaWJsZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNldFZpc2libGUoYm9vbClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgY29uc3QgaXNTZWxlY3RpbmdGaXJzdERheSA9IChcbiAgICAgIGZyb21Bcmc/OiBEYXRlIHwgbnVsbCxcbiAgICAgIHRvQXJnPzogRGF0ZSB8IG51bGxcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IGlzUmFuZ2VTZWxlY3RlZCA9IGZyb21BcmcgJiYgdG9BcmdcbiAgICAgIHJldHVybiAhZnJvbUFyZyB8fCBpc1JhbmdlU2VsZWN0ZWRcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEYXlDbGljayA9IChkYXk6IERhdGUpID0+IHtcbiAgICAgIGlmIChpc1NlbGVjdGluZ0ZpcnN0RGF5KGZyb20sIHRvKSkge1xuICAgICAgICBpZiAob25TdGFydERheVNlbGVjdCkge1xuICAgICAgICAgIG9uU3RhcnREYXlTZWxlY3QoZGF5KVxuICAgICAgICB9XG4gICAgICAgIHNldEVudGVyZWRUbyhudWxsKVxuICAgICAgICBzZXRGcm9tKGRheSlcbiAgICAgICAgc2V0VG8obnVsbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChvbkVuZERheVNlbGVjdCkge1xuICAgICAgICAgIG9uRW5kRGF5U2VsZWN0KGRheSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV3UmFuZ2U6IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdXG4gICAgICAgIGNvbnN0IGZyb21TdHIgPSBjb252ZXJ0RGF0ZVRvU3RyaW5nKGZyb20pXG4gICAgICAgIGNvbnN0IHRvU3RyID0gY29udmVydERhdGVUb1N0cmluZyhkYXkpXG4gICAgICAgIGxldCBuZXdSYW5nZVZhbHVlID0gXCJcIlxuICAgICAgICBpZiAoRGF0ZVV0aWxzLmlzRGF5QWZ0ZXIoZGF5LCBmcm9tKSkge1xuICAgICAgICAgIG5ld1JhbmdlID0gW2Zyb20sIGRheV1cbiAgICAgICAgICBuZXdSYW5nZVZhbHVlID0gYCR7ZnJvbVN0cn0gLSAke3RvU3RyfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdSYW5nZSA9IFtkYXksIGZyb21dXG4gICAgICAgICAgbmV3UmFuZ2VWYWx1ZSA9IGAke3RvU3RyfSAtICR7ZnJvbVN0cn1gXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldEVudGVyZWRUbyhkYXkpXG4gICAgICAgICAgc2V0UmFuZ2VWYWx1ZShuZXdSYW5nZVZhbHVlKVxuICAgICAgICAgIHNldFRvKGRheSlcbiAgICAgICAgfVxuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShuZXdSYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xvc2VPblNlbGVjdCkge1xuICAgICAgICAgIC8vIOW7tui/n+aYr+S4uuS6huiuqeeKtuaAgeeahOWPmOWMluWcqOinhuinieS4iuWFiOiiq+aOpeWPl1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgICAgICBvblZpc2libGVDaGFuZ2UoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmlzaWJsZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEYXlNb3VzZUVudGVyID0gKGRheTogRGF0ZSkgPT4ge1xuICAgICAgaWYgKCFpc1NlbGVjdGluZ0ZpcnN0RGF5KGZyb20sIHRvKSkge1xuICAgICAgICBzZXRFbnRlcmVkVG8oZGF5KVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZURheU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgICBzZXRFbnRlcmVkVG8obnVsbClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9ICh7XG4gICAgICB0YXJnZXQsXG4gICAgfTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWU6IHZhbCB9ID0gdGFyZ2V0XG4gICAgICBzZXRSYW5nZVZhbHVlKHZhbClcbiAgICAgIGlmICh2YWwudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICBzZXRFbnRlcmVkVG8obnVsbClcbiAgICAgICAgICBzZXRGcm9tKG51bGwpXG4gICAgICAgICAgc2V0VG8obnVsbClcbiAgICAgICAgfVxuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShbdW5kZWZpbmVkLCB1bmRlZmluZWRdKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzTGVnYWxEYXRlUmFuZ2VTdHJpbmcodmFsKSkge1xuICAgICAgICBjb25zdCByYW5nZVZhbHVlU3RycyA9IHZhbC5zcGxpdChcIiAtIFwiKVxuICAgICAgICBjb25zdCBuZXdGcm9tID0gbmV3IERhdGUocmFuZ2VWYWx1ZVN0cnNbMF0pXG4gICAgICAgIGNvbnN0IG5ld1RvID0gbmV3IERhdGUocmFuZ2VWYWx1ZVN0cnNbMV0pXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhaXNEYXlEaXNhYmxlZChuZXdGcm9tKSAmJlxuICAgICAgICAgICFpc0RheURpc2FibGVkKG5ld1RvKSAmJlxuICAgICAgICAgICFEYXRlVXRpbHMuaXNEYXlCZWZvcmUobmV3VG8sIG5ld0Zyb20pICYmXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIERhdGVVdGlscy5pc1NhbWVEYXkoZnJvbSwgbmV3RnJvbSkgJiYgRGF0ZVV0aWxzLmlzU2FtZURheSh0bywgbmV3VG8pXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRGcm9tKG5ld0Zyb20pXG4gICAgICAgICAgICBzZXRUbyhuZXdUbylcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g5L+u5pS55pel5pyf5ZCO55qEIG1vbnRoIOi3s+i9rFxuICAgICAgICAgIGlmICghRGF0ZVV0aWxzLmlzU2FtZURheShmcm9tLCBuZXdGcm9tKSkge1xuICAgICAgICAgICAgc2V0TW9udGgobmV3RnJvbSlcbiAgICAgICAgICB9IGVsc2UgaWYgKCFEYXRlVXRpbHMuaXNTYW1lRGF5KHRvLCBuZXdUbykpIHtcbiAgICAgICAgICAgIHNldE1vbnRoKG5ld1RvKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKFtuZXdGcm9tLCBuZXdUb10pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRGb2N1cyA9ICgpID0+IHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgb25WaXNpYmxlQ2hhbmdlKHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgc2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRLZXlEb3duID0gKHtcbiAgICAgIGtleUNvZGUsXG4gICAgfTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3Qga2V5cyA9IFs5LCAxMywgMjddXG4gICAgICBpZiAoa2V5cy5pbmNsdWRlcyhrZXlDb2RlKSkge1xuICAgICAgICBoYW5kbGVWaXNpYmxlQ2hhbmdlKGZhbHNlKVxuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmlucHV0LmJsdXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU1vbnRoQ2hhbmdlID0gKFxuICAgICAgZGF0ZTogRGF0ZSxcbiAgICAgIGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MU2VsZWN0RWxlbWVudD5cbiAgICApID0+IHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVudFRhcmdldDogdGFyZ2V0IH0gPSBlXG4gICAgICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0YXJnZXQgJiYgdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGNvbnN0IGRheVBpY2tlclJlY3QgPSBkYXlQaWNrZXJSZWYuY3VycmVudC5kYXlQaWNrZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGFyZ2V0Lm5hbWUgPT09IFwibW9udGhcIiAmJlxuICAgICAgICAgICh0YXJnZXRSZWN0LmxlZnQgLSBkYXlQaWNrZXJSZWN0LmxlZnQpICogMiA+IGRheVBpY2tlclJlY3Qud2lkdGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgLSAxKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgbmV3TW9udGggPSBkYXRlXG4gICAgICBpZiAoRGF0ZVV0aWxzLmlzRGF5QWZ0ZXIoZGF0ZSwgbWF4RGF0ZSkpIHtcbiAgICAgICAgaWYgKG1heERhdGUpIHtcbiAgICAgICAgICBuZXdNb250aCA9IG1heERhdGVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChEYXRlVXRpbHMuaXNEYXlCZWZvcmUoZGF0ZSwgbWluRGF0ZSkpIHtcbiAgICAgICAgaWYgKG1pbkRhdGUpIHtcbiAgICAgICAgICBuZXdNb250aCA9IG1pbkRhdGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2V0TW9udGgobmV3TW9udGgpXG4gICAgfVxuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICBpbnB1dDogaW5wdXRSZWYuY3VycmVudCxcbiAgICAgIGhhbmRsZURheUNsaWNrLFxuICAgICAgaGFuZGxlVmlzaWJsZUNoYW5nZSxcbiAgICB9KSlcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wb3ZlclxuICAgICAgICBhcnJvd2VkPXtmYWxzZX1cbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXtoYW5kbGVWaXNpYmxlQ2hhbmdlfVxuICAgICAgICBwbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgcG9wdXA9e1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcHVwYH0+XG4gICAgICAgICAgICB7c2hvcnRjdXRzRW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgIDxTaG9ydGN1dHNcbiAgICAgICAgICAgICAgICBvblNob3J0Y3V0Q2xpY2s9e3ZhbHVlU2hvcnRjdXQgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVTaG9ydGN1dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJvbVNob3J0Y3V0ID0gdmFsdWVTaG9ydGN1dFswXVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b1Nob3J0Y3V0ID0gdmFsdWVTaG9ydGN1dFsxXVxuICAgICAgICAgICAgICAgICAgICBzZXRGcm9tKGZyb21TaG9ydGN1dClcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9udGgoZnJvbVNob3J0Y3V0KVxuICAgICAgICAgICAgICAgICAgICBzZXRUbyh0b1Nob3J0Y3V0KVxuICAgICAgICAgICAgICAgICAgICBzZXRSYW5nZVZhbHVlKGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyh2YWx1ZVNob3J0Y3V0KSlcblxuICAgICAgICAgICAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSh2YWx1ZVNob3J0Y3V0KVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyDlu7bov5/mmK/kuLrkuoborqnnirbmgIHnmoTlj5jljJblnKjop4bop4nkuIrlhYjooqvmjqXlj5dcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e3JhbmdlfVxuICAgICAgICAgICAgICAgIHNob3J0Y3V0cz17c2hvcnRjdXRzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxEYXlQaWNrZXJcbiAgICAgICAgICAgICAgcmVmPXtkYXlQaWNrZXJSZWZ9XG4gICAgICAgICAgICAgIG51bWJlck9mTW9udGhzPXsyfVxuICAgICAgICAgICAgICBkaXNhYmxlZERheXM9e2lzRGF5RGlzYWJsZWR9XG4gICAgICAgICAgICAgIGZyb21Nb250aD17bWluRGF0ZX1cbiAgICAgICAgICAgICAgdG9Nb250aD17bWF4RGF0ZX1cbiAgICAgICAgICAgICAgY2FuQ2hhbmdlTW9udGhcbiAgICAgICAgICAgICAgY2xhc3NOYW1lcz17c3R5bGVzfVxuICAgICAgICAgICAgICBtb250aD17bW9udGh9XG4gICAgICAgICAgICAgIG1vbnRocz17TU9OVEhTfVxuICAgICAgICAgICAgICB3ZWVrZGF5c0xvbmc9e1dFRUtEQVlTX0xPTkd9XG4gICAgICAgICAgICAgIHdlZWtkYXlzU2hvcnQ9e1dFRUtEQVlTX1NIT1JUfVxuICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e3NlbGVjdGVkRGF5c31cbiAgICAgICAgICAgICAgbmF2YmFyRWxlbWVudD17XG4gICAgICAgICAgICAgICAgPE5hdmJhclxuICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17bWF4RGF0ZX1cbiAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e21pbkRhdGV9XG4gICAgICAgICAgICAgICAgICB7Li4uTmF2YmFyRWxlbWVudFByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FwdGlvbkVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgIDxDYXB0aW9uXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICAgICAgICAgIG9uRGF0ZUNoYW5nZT17aGFuZGxlTW9udGhDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICB7Li4uQ2FwdGlvbkVsZW1lbnRQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uRGF5TW91c2VFbnRlcj17aGFuZGxlRGF5TW91c2VFbnRlcn1cbiAgICAgICAgICAgICAgb25EYXlNb3VzZUxlYXZlPXtoYW5kbGVEYXlNb3VzZUxlYXZlfVxuICAgICAgICAgICAgICBvbkRheUNsaWNrPXtoYW5kbGVEYXlDbGlja31cbiAgICAgICAgICAgICAgcmVuZGVyRGF5PXsoZGF5OiBEYXRlKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2VsbGB9PntkYXkuZ2V0RGF0ZSgpfTwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBtb2RpZmllcnM9e21vZGlmaWVyc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgcG9wdXBTdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBzaG9ydGN1dHNFbmFibGVkID8gXCI1NzZweFwiIDogXCI0NzZweFwiLFxuICAgICAgICAgIG1heFdpZHRoOiBzaG9ydGN1dHNFbmFibGVkID8gXCI1NzZweFwiIDogXCI0NzZweFwiLFxuICAgICAgICB9fVxuICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICB7Li4ucG9wb3ZlclByb3BzfVxuICAgICAgPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBpbnRlbnQ9e2ludGVudH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgb25Gb2N1cz17aGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgICBvbktleURvd249e2hhbmRsZUlucHV0S2V5RG93bn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICByaWdodEVsZW1lbnQ9ezxJY29uIGljb249XCJjYWxlbmRhci1vdXRsaW5lZFwiIC8+fVxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgIHZhbHVlPXtyYW5nZVZhbHVlfVxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9Qb3BvdmVyPlxuICAgIClcbiAgfVxuKVxuXG5SYW5nZVBpY2tlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuWcqOmAieaLqeWQju+8jOa2iOWksSBQb3BvdmVyXG4gICAqL1xuICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8mum7mOiupOaXpeacn+iMg+WbtFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya6buY6K6k5piv5ZCm5pi+56S65LiL5ouJXG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOemgeatoumAieaLqeeahOWkqe+8jGRheSA9PiBib29s77yb5q+P5LiA5aSp5piv55qE5pe26Ze05Li6IDEyOjAwOjAw77yM6L+Z5LiA5Liq5piv55SxIGRheS1waWNrZXItcmVhY3Qg5Yaz5a6a55qE77ybXG4gICAqIOavlOi+g+aXpeacn+eahOaXtuWAmeWwj+W/g+i/meS4gOeCueOAglxuICAgKi9cbiAgZGlzYWJsZWREYXlzOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9rui+k+WFpeahhuexu+Wei1xuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwibm9ybWFsXCIsXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgXSksXG4gIC8qKlxuICAgKiDmnIDlpKfpmZDliLbml6XmnJ9cbiAgICovXG4gIG1heERhdGU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAvKipcbiAgICog5pyA5bCP6ZmQ5Yi25pel5pyfXG4gICAqL1xuICBtaW5EYXRlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgLyoqXG4gICAqIOaXpeacn+aUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDnrKzkuozmrKHngrnlh7vkuobml6XmnJ/ml7bnmoQgaGFuZGxlcu+8jOWNs+e7k+adn+mAieaLqVxuICAgKi9cbiAgb25FbmREYXlTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog56ys5LiA5qyh54K55Ye75LqG5pel5pyf5pe255qEIGhhbmRsZXLvvIzljbPlvIDlp4vpgInmi6nvvIjlj6/ku6XlnKjmraTml7borr7nva4gbWF4RGF0ZSBtaW5EYXRl77yM5a6e546w5o6n5Yi25pel5pyf6YCJ5oup6IyD5Zu055qE5Yqf6IO977yJXG4gICAqL1xuICBvblN0YXJ0RGF5U2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOaYvuekuueKtuaAgeWPkeeUn+WPmOWMluaXtueahGhhbmRsZXJcbiAgICovXG4gIG9uVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDljaDkvY3lrZfnrKZcbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5by55Ye65bGC5L2N572uXG4gICAqL1xuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJ0b3BcIixcbiAgICBcImxlZnRcIixcbiAgICBcInJpZ2h0XCIsXG4gICAgXCJib3R0b21cIixcbiAgICBcInRvcExlZnRcIixcbiAgICBcInRvcFJpZ2h0XCIsXG4gICAgXCJib3R0b21MZWZ0XCIsXG4gICAgXCJib3R0b21SaWdodFwiLFxuICAgIFwibGVmdFRvcFwiLFxuICAgIFwibGVmdEJvdHRvbVwiLFxuICAgIFwicmlnaHRUb3BcIixcbiAgICBcInJpZ2h0Qm90dG9tXCIsXG4gIF0pLFxuICAvKipcbiAgICog5Lyg5YWlIFBvcG92ZXIg55qEIHByb3BzXG4gICAqL1xuICBwb3BvdmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDlv6vmjbfpgInmi6npobnvvIzmoLzlvI/vvJpcbiAgICogW3tcbiAgICogbGFiZWw6IFwi56WW5Zu95q+N5Lqy55Sf5pelXCIsIHZhbHVlOiBbbmV3IERhdGUoXCIyMDIwLTEwLTAxXCIpLCBuZXcgRGF0ZShcIjIwMjAtMTAtMDdcIildXG4gICAqIH1dXG4gICAqL1xuICBzaG9ydGN1dHM6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGlnaHRcIl0pLFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5b2T5YmN5pel5pyf6IyD5Zu0XG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muaYr+WQpuaYvuekuuS4i+aLiemAieaLqVxuICAgKi9cbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG59XG5cblJhbmdlUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBcIlwiLFxuICBjbG9zZU9uU2VsZWN0OiBmYWxzZSxcbiAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICBkZWZhdWx0VmlzaWJsZTogbnVsbCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBkaXNhYmxlZERheXM6IG5vb3AsXG4gIGludGVudDogXCJub3JtYWxcIixcbiAgbWF4RGF0ZTogZ2V0RGVmYXVsdE1heERhdGUoKSxcbiAgbWluRGF0ZTogZ2V0RGVmYXVsdE1pbkRhdGUoKSxcbiAgb25DaGFuZ2U6IG5vb3AsXG4gIG9uRW5kRGF5U2VsZWN0OiBub29wLFxuICBvblN0YXJ0RGF5U2VsZWN0OiBub29wLFxuICBvblZpc2libGVDaGFuZ2U6IG5vb3AsXG4gIHBsYWNlaG9sZGVyOiBcIumAieaLqeaXpeacn+iMg+WbtFwiLFxuICBwbGFjZW1lbnQ6IFwiYm90dG9tTGVmdFwiLFxuICBwb3BvdmVyUHJvcHM6IHt9LFxuICBzaG9ydGN1dHM6IHVuZGVmaW5lZCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB0aGVtZTogbnVsbCxcbiAgdmFsdWU6IG51bGwsXG4gIHZpc2libGU6IG51bGwsXG59XG5cblJhbmdlUGlja2VyLmRpc3BsYXlOYW1lID0gXCJSYW5nZVBpY2tlclwiXG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlUGlja2VyXG4iXX0=