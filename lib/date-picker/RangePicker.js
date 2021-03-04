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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvUmFuZ2VQaWNrZXIudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIm5vb3AiLCJSYW5nZVBpY2tlciIsInJlZiIsImNsYXNzTmFtZSIsImNsb3NlT25TZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJkZWZhdWx0VmlzaWJsZSIsImRpc2FibGVkIiwiZGlzYWJsZWREYXlzIiwiaW50ZW50IiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJvbkNoYW5nZSIsIm9uRW5kRGF5U2VsZWN0Iiwib25TdGFydERheVNlbGVjdCIsIm9uVmlzaWJsZUNoYW5nZSIsInBsYWNlaG9sZGVyIiwicGxhY2VtZW50IiwicG9wb3ZlclByb3BzIiwic2hvcnRjdXRzIiwic2l6ZVByb3AiLCJzaXplIiwidGhlbWUiLCJ2YWx1ZVByb3AiLCJ2YWx1ZSIsInZpc2libGVQcm9wIiwidmlzaWJsZSIsIm90aGVyUHJvcHMiLCJnZXRJbml0aWFsU3RhdGUiLCJyYW5nZVZhbHVlIiwiZnJvbSIsInRvIiwidW5kZWZpbmVkIiwibW9udGgiLCJpbml0aWFsU3RhdGUiLCJlbnRlcmVkVG8iLCJzZXRFbnRlcmVkVG8iLCJzZXRGcm9tIiwic2V0VG8iLCJzZXRNb250aCIsInByZXZWYWx1ZVByb3AiLCJzZXRQcmV2VmFsdWVQcm9wIiwic2V0UmFuZ2VWYWx1ZSIsInNldFZpc2libGUiLCJpbnB1dFJlZiIsImRheVBpY2tlclJlZiIsIkNvbmZpZ0NvbnRleHQiLCJzaXplQ29udGV4dCIsImNsYXNzU2V0IiwiZnJvbUZpbmFsIiwiZW50ZXJlZFRvRmluYWwiLCJpc1JldmVyc2UiLCJEYXRlVXRpbHMiLCJpc0RheUFmdGVyIiwic2VsZWN0ZWREYXlzIiwibW9kaWZpZXJzIiwiZGF5Iiwic2hvcnRjdXRzRW5hYmxlZCIsImxlbmd0aCIsInJhbmdlIiwiaXNEYXlEaXNhYmxlZCIsImlzRGF5QmVmb3JlIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsImJvb2wiLCJpbnB1dEVsZW1lbnQiLCJjdXJyZW50IiwiaW5wdXQiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwibmV3VmFsIiwicmFuZ2VSZXNldCIsInNwbGl0IiwiRGF0ZSIsImlzU2VsZWN0aW5nRmlyc3REYXkiLCJmcm9tQXJnIiwidG9BcmciLCJpc1JhbmdlU2VsZWN0ZWQiLCJoYW5kbGVEYXlDbGljayIsIm5ld1JhbmdlIiwiZnJvbVN0ciIsInRvU3RyIiwibmV3UmFuZ2VWYWx1ZSIsImhhbmRsZURheU1vdXNlRW50ZXIiLCJoYW5kbGVEYXlNb3VzZUxlYXZlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWwiLCJ0cmltIiwicmFuZ2VWYWx1ZVN0cnMiLCJuZXdGcm9tIiwibmV3VG8iLCJpc1NhbWVEYXkiLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlSW5wdXRLZXlEb3duIiwia2V5Q29kZSIsImtleXMiLCJpbmNsdWRlcyIsImJsdXIiLCJoYW5kbGVNb250aENoYW5nZSIsImRhdGUiLCJlIiwiY3VycmVudFRhcmdldCIsInRhcmdldFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJkYXlQaWNrZXJSZWN0IiwiZGF5UGlja2VyIiwibmFtZSIsImxlZnQiLCJ3aWR0aCIsImdldE1vbnRoIiwibmV3TW9udGgiLCJ2YWx1ZVNob3J0Y3V0IiwiQXJyYXkiLCJpc0FycmF5IiwiZnJvbVNob3J0Y3V0IiwidG9TaG9ydGN1dCIsInN0eWxlcyIsIk1PTlRIUyIsIldFRUtEQVlTX0xPTkciLCJXRUVLREFZU19TSE9SVCIsIk5hdmJhckVsZW1lbnRQcm9wcyIsIkNhcHRpb25FbGVtZW50UHJvcHMiLCJnZXREYXRlIiwibWF4V2lkdGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJmdW5jIiwib25lT2YiLCJpbnN0YW5jZU9mIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQVFB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QW9CekJFLEVBQUFBLEtBQUssRUFBRSxJQXBCa0I7QUFxQnpCRSxFQUFBQSxPQUFPLEVBQUU7QUFyQmdCLENBQTNCO0FBd0JBekIsV0FBVyxDQUFDcUksV0FBWixHQUEwQixhQUExQjtlQUVlckksVyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VDb250ZXh0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VNZW1vLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgRGF5UGlja2VyLCB7XG4gIENhcHRpb25FbGVtZW50UHJvcHMsXG4gIERhdGVVdGlscyxcbiAgTmF2YmFyRWxlbWVudFByb3BzLFxufSBmcm9tIFwiZGF5LXBpY2tlci1yZWFjdFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY2xhc3NOYW1lc1wiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRcIlxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSBcIi4uL3BvcC10cmlnZ2VyXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgQ2FwdGlvbiBmcm9tIFwiLi9DYXB0aW9uXCJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCJcbmltcG9ydCBTaG9ydGN1dHMgZnJvbSBcIi4vU2hvcnRjdXRzXCJcbmltcG9ydCB7XG4gIE1PTlRIUyxcbiAgV0VFS0RBWVNfTE9ORyxcbiAgV0VFS0RBWVNfU0hPUlQsXG4gIGdldERlZmF1bHRNYXhEYXRlLFxuICBnZXREZWZhdWx0TWluRGF0ZSxcbiAgaXNMZWdhbERhdGVSYW5nZVN0cmluZyxcbiAgY29udmVydERhdGVUb1N0cmluZyxcbiAgY29udmVydERhdGVSYW5nZVRvU3RyaW5nLFxuICBpc0RheUluUmFuZ2UsXG59IGZyb20gXCIuL2NvcmVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktZGF0ZVwiXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIElSYW5nZVBpY2tlclByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm5Zyo6YCJ5oup5ZCO77yM5raI5aSxIFBvcG92ZXJcbiAgICovXG4gIGNsb3NlT25TZWxlY3Q/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrpu5jorqTml6XmnJ/ojIPlm7RcbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdIHwgbnVsbFxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya6buY6K6k5piv5ZCm5pi+56S65LiL5ouJXG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZT86IGJvb2xlYW4gfCBudWxsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog56aB5q2i6YCJ5oup55qE5aSp77yMZGF5ID0+IGJvb2zvvJvmr4/kuIDlpKnmmK/nmoTml7bpl7TkuLogMTI6MDA6MDDvvIzov5nkuIDkuKrmmK/nlLEgZGF5LXBpY2tlci1yZWFjdCDlhrPlrprnmoTvvJtcbiAgICog5q+U6L6D5pel5pyf55qE5pe25YCZ5bCP5b+D6L+Z5LiA54K544CCXG4gICAqL1xuICBkaXNhYmxlZERheXM/OiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbiB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9rui+k+WFpeahhuexu+Wei1xuICAgKi9cbiAgaW50ZW50PzogXCJub3JtYWxcIiB8IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCJcbiAgLyoqXG4gICAqIOacgOWkp+mZkOWItuaXpeacn1xuICAgKi9cbiAgbWF4RGF0ZT86IERhdGVcbiAgLyoqXG4gICAqIOacgOWwj+mZkOWItuaXpeacn1xuICAgKi9cbiAgbWluRGF0ZT86IERhdGVcbiAgLyoqXG4gICAqIOaXpeacn+aUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86IChkYXRlOiBbRGF0ZSB8IG51bGwgfCB1bmRlZmluZWQsIERhdGUgfCBudWxsIHwgdW5kZWZpbmVkXSkgPT4gdm9pZFxuICAvKipcbiAgICog56ys5LqM5qyh54K55Ye75LqG5pel5pyf5pe255qEIGhhbmRsZXLvvIzljbPnu5PmnZ/pgInmi6lcbiAgICovXG4gIG9uRW5kRGF5U2VsZWN0PzogKGRhdGU6IERhdGUpID0+IHZvaWRcbiAgLyoqXG4gICAqIOesrOS4gOasoeeCueWHu+S6huaXpeacn+aXtueahCBoYW5kbGVy77yM5Y2z5byA5aeL6YCJ5oup77yI5Y+v5Lul5Zyo5q2k5pe26K6+572uIG1heERhdGUgbWluRGF0Ze+8jOWunueOsOaOp+WItuaXpeacn+mAieaLqeiMg+WbtOeahOWKn+iDve+8iVxuICAgKi9cbiAgb25TdGFydERheVNlbGVjdD86IChkYXRlOiBEYXRlKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDmmL7npLrnirbmgIHlj5HnlJ/lj5jljJbml7bnmoRoYW5kbGVyXG4gICAqL1xuICBvblZpc2libGVDaGFuZ2U/OiAodmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxuICAvKipcbiAgICog5Y2g5L2N5a2X56ymXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICAvKipcbiAgICog5by55Ye65bGC5L2N572uXG4gICAqL1xuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnRcbiAgLyoqXG4gICAqIOS8oOWFpSBQb3BvdmVyIOeahCBwcm9wc1xuICAgKi9cbiAgcG9wb3ZlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICAvKipcbiAgICog5b+r5o236YCJ5oup6aG577yM5qC85byP77yaXG4gICAqIFt7XG4gICAqIGxhYmVsOiBcIuelluWbveavjeS6sueUn+aXpVwiLCB2YWx1ZTogW25ldyBEYXRlKFwiMjAyMC0xMC0wMVwiKSwgbmV3IERhdGUoXCIyMDIwLTEwLTA3XCIpXVxuICAgKiB9XVxuICAgKi9cbiAgc2hvcnRjdXRzPzoge1xuICAgIC8qKlxuICAgICAqIOivpemhueeahOaWh+Wtl1xuICAgICAqL1xuICAgIGxhYmVsOiBSZWFjdC5SZWFjdE5vZGVcbiAgICAvKipcbiAgICAgKiDor6XpobnnmoTml6XmnJ9cbiAgICAgKi9cbiAgICB2YWx1ZTogW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF1cbiAgfVtdXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU/OiBudWxsIHwgXCJsaWdodFwiXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrlvZPliY3ml6XmnJ/ojIPlm7RcbiAgICovXG4gIHZhbHVlPzogW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF0gfCBudWxsXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKbmmL7npLrkuIvmi4npgInmi6lcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuIHwgbnVsbFxufVxuXG4vKipcbiAqIOaXpeacn+mAieaLqeWZqOeUqOS6juS6huino+W9k+WJjeW3sumAieaXpeacn++8jOmAieaLqeaIlui+k+WFpemcgOimgeeahOaXpeacn+OAgeaXpeacn+iMg+WbtOetieOAglxuICovXG5jb25zdCBSYW5nZVBpY2tlcjogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgSVJhbmdlUGlja2VyUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT5cbj4gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY2xvc2VPblNlbGVjdCxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGRlZmF1bHRWaXNpYmxlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlZERheXMsXG4gICAgICBpbnRlbnQsXG4gICAgICBtYXhEYXRlLFxuICAgICAgbWluRGF0ZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgb25FbmREYXlTZWxlY3QsXG4gICAgICBvblN0YXJ0RGF5U2VsZWN0LFxuICAgICAgb25WaXNpYmxlQ2hhbmdlLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBwb3BvdmVyUHJvcHMsXG4gICAgICBzaG9ydGN1dHMsXG4gICAgICBzaXplOiBzaXplUHJvcCxcbiAgICAgIHRoZW1lLFxuICAgICAgdmFsdWU6IHZhbHVlUHJvcCxcbiAgICAgIHZpc2libGU6IHZpc2libGVQcm9wLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElSYW5nZVBpY2tlclByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICAvKipcbiAgICAgKiBzZWxlY3RlZERheSDkuLrkvKDnu5kgRGF5UGlja2VyIOeahOacgOe7iCBEYXRlIE9iamVjdO+8jFxuICAgICAqIHZhbHVlIOS4uiBpbnB1dCDnmoTovpPlhaUgU3RyaW5n44CCXG4gICAgICovXG4gICAgY29uc3QgZ2V0SW5pdGlhbFN0YXRlID0gKCkgPT4ge1xuICAgICAgbGV0IHJhbmdlVmFsdWUgPSBcIlwiXG4gICAgICBsZXQgZnJvbVxuICAgICAgbGV0IHRvXG4gICAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsICYmIHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIDtbZnJvbSwgdG9dID0gdmFsdWVQcm9wXG4gICAgICAgIHJhbmdlVmFsdWUgPSBjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcodmFsdWVQcm9wKVxuICAgICAgfSBlbHNlIGlmIChkZWZhdWx0VmFsdWUgIT09IG51bGwgJiYgZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgO1tmcm9tLCB0b10gPSBkZWZhdWx0VmFsdWVcbiAgICAgICAgcmFuZ2VWYWx1ZSA9IGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyhkZWZhdWx0VmFsdWUpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZyb20sXG4gICAgICAgIG1vbnRoOiBmcm9tLFxuICAgICAgICByYW5nZVZhbHVlLFxuICAgICAgICB0byxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB1c2VNZW1vKGdldEluaXRpYWxTdGF0ZSwgW10pXG5cbiAgICBjb25zdCBbZW50ZXJlZFRvLCBzZXRFbnRlcmVkVG9dID0gdXNlU3RhdGU8RGF0ZSB8IG51bGwgfCB1bmRlZmluZWQ+KG51bGwpXG4gICAgY29uc3QgW2Zyb20sIHNldEZyb21dID0gdXNlU3RhdGU8RGF0ZSB8IG51bGwgfCB1bmRlZmluZWQ+KGluaXRpYWxTdGF0ZS5mcm9tKVxuICAgIGNvbnN0IFt0bywgc2V0VG9dID0gdXNlU3RhdGU8RGF0ZSB8IG51bGwgfCB1bmRlZmluZWQ+KGluaXRpYWxTdGF0ZS50bylcbiAgICBjb25zdCBbbW9udGgsIHNldE1vbnRoXSA9IHVzZVN0YXRlPERhdGUgfCBudWxsIHwgdW5kZWZpbmVkPihcbiAgICAgIGluaXRpYWxTdGF0ZS5tb250aFxuICAgIClcbiAgICBjb25zdCBbcHJldlZhbHVlUHJvcCwgc2V0UHJldlZhbHVlUHJvcF0gPSB1c2VTdGF0ZTxcbiAgICAgIFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdIHwgbnVsbCB8IHVuZGVmaW5lZFxuICAgID4odmFsdWVQcm9wKVxuICAgIGNvbnN0IFtyYW5nZVZhbHVlLCBzZXRSYW5nZVZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXG4gICAgICBpbml0aWFsU3RhdGUucmFuZ2VWYWx1ZVxuICAgIClcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuPigoKSA9PiB7XG4gICAgICBpZiAodmlzaWJsZVByb3AgIT09IG51bGwgJiYgdmlzaWJsZVByb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmlzaWJsZVByb3BcbiAgICAgIH1cbiAgICAgIGlmIChkZWZhdWx0VmlzaWJsZSAhPT0gbnVsbCAmJiBkZWZhdWx0VmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmlzaWJsZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICBpZiAoXG4gICAgICB2YWx1ZVByb3AgIT09IG51bGwgJiZcbiAgICAgIHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB2YWx1ZVByb3AgIT09IHByZXZWYWx1ZVByb3BcbiAgICApIHtcbiAgICAgIHNldEZyb20odmFsdWVQcm9wWzBdKVxuICAgICAgc2V0VG8odmFsdWVQcm9wWzFdKVxuICAgICAgc2V0UmFuZ2VWYWx1ZShjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcodmFsdWVQcm9wKSlcbiAgICAgIHNldFByZXZWYWx1ZVByb3AodmFsdWVQcm9wKVxuICAgIH1cbiAgICBpZiAodmlzaWJsZVByb3AgIT09IG51bGwgJiYgdmlzaWJsZSAhPT0gISF2aXNpYmxlUHJvcCkge1xuICAgICAgc2V0VmlzaWJsZSghIXZpc2libGVQcm9wKVxuICAgIH1cblxuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPGFueT4obnVsbClcbiAgICBjb25zdCBkYXlQaWNrZXJSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuXG4gICAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuICAgIGNvbnN0IHNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZVByb3AsIHNpemVDb250ZXh0KVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYCR7cHJlZml4fS1yYW5nZUJhc2VgLFxuICAgICAgYCR7cHJlZml4fS0ke3NpemV9YFxuICAgIClcblxuICAgIGxldCBmcm9tRmluYWw6IERhdGUgfCBudWxsIHwgdW5kZWZpbmVkXG4gICAgbGV0IGVudGVyZWRUb0ZpbmFsID0gdG8gfHwgZW50ZXJlZFRvXG4gICAgY29uc3QgaXNSZXZlcnNlID1cbiAgICAgIGZyb20gJiYgZW50ZXJlZFRvRmluYWwgJiYgRGF0ZVV0aWxzLmlzRGF5QWZ0ZXIoZnJvbSwgZW50ZXJlZFRvRmluYWwpXG4gICAgaWYgKGlzUmV2ZXJzZSkge1xuICAgICAgZnJvbUZpbmFsID0gZW50ZXJlZFRvRmluYWxcbiAgICAgIGVudGVyZWRUb0ZpbmFsID0gZnJvbVxuICAgIH0gZWxzZSB7XG4gICAgICBmcm9tRmluYWwgPSBmcm9tXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWREYXlzID0gW1xuICAgICAgZnJvbUZpbmFsLFxuICAgICAge1xuICAgICAgICBmcm9tOiBmcm9tRmluYWwsXG4gICAgICAgIHRvOiBlbnRlcmVkVG9GaW5hbCxcbiAgICAgIH0sXG4gICAgXVxuICAgIGNvbnN0IG1vZGlmaWVycyA9IHtcbiAgICAgIFtgJHtwcmVmaXh9LXJhbmdlU3RhcnRgXTogaXNSZXZlcnNlID8gdG8gJiYgZnJvbUZpbmFsIDogZnJvbUZpbmFsLFxuICAgICAgW2Ake3ByZWZpeH0tcmFuZ2VTdGFydEhvdmVyYF06IGlzUmV2ZXJzZSAmJiAhdG8gJiYgZnJvbUZpbmFsLFxuICAgICAgW2Ake3ByZWZpeH0tcmFuZ2VFbmRgXTogaXNSZXZlcnNlID8gZW50ZXJlZFRvRmluYWwgOiB0byAmJiBlbnRlcmVkVG9GaW5hbCxcbiAgICAgIFtgJHtwcmVmaXh9LXJhbmdlRW5kSG92ZXJgXTogIWlzUmV2ZXJzZSAmJiAhdG8gJiYgZW50ZXJlZFRvRmluYWwsXG4gICAgICBbYCR7cHJlZml4fS1zZWxlY3RlZFJhbmdlYF06IChkYXk6IERhdGUpID0+XG4gICAgICAgIGlzRGF5SW5SYW5nZShkYXksIFtmcm9tRmluYWwsIGVudGVyZWRUb0ZpbmFsXSwgdHJ1ZSksXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvcnRjdXRzRW5hYmxlZCA9IHNob3J0Y3V0cyAmJiBzaG9ydGN1dHMubGVuZ3RoID4gMFxuXG4gICAgY29uc3QgcmFuZ2U6IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdID0gW1xuICAgICAgZnJvbUZpbmFsLFxuICAgICAgZW50ZXJlZFRvRmluYWwsXG4gICAgXVxuXG4gICAgY29uc3QgaXNEYXlEaXNhYmxlZCA9IChkYXk6IERhdGUpID0+IHtcbiAgICAgIHJldHVybiBkaXNhYmxlZERheXNcbiAgICAgICAgPyBkaXNhYmxlZERheXMoZGF5KSB8fFxuICAgICAgICAgICAgRGF0ZVV0aWxzLmlzRGF5QmVmb3JlKGRheSwgbWluRGF0ZSkgfHxcbiAgICAgICAgICAgIERhdGVVdGlscy5pc0RheUFmdGVyKGRheSwgbWF4RGF0ZSlcbiAgICAgICAgOiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVmlzaWJsZUNoYW5nZSA9IChib29sOiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zdCB7IGlucHV0OiBpbnB1dEVsZW1lbnQgfSA9IGlucHV0UmVmLmN1cnJlbnRcbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50XG4gICAgICAgIGlmIChib29sIHx8ICghYm9vbCAmJiBpbnB1dEVsZW1lbnQgIT09IGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgY29uc3QgbmV3VmFsID0gY29udmVydERhdGVSYW5nZVRvU3RyaW5nKFtmcm9tLCB0b10pXG4gICAgICAgICAgaWYgKCFib29sKSB7XG4gICAgICAgICAgICBpZiAoIXRvKSB7XG4gICAgICAgICAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZVJlc2V0ID0gcmFuZ2VWYWx1ZS5zcGxpdChcIiAtIFwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0RnJvbShuZXcgRGF0ZShyYW5nZVJlc2V0WzBdKSlcbiAgICAgICAgICAgICAgICAgIHNldFRvKG5ldyBEYXRlKHJhbmdlUmVzZXRbMV0pKVxuICAgICAgICAgICAgICAgIH0sIDI1MClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5nZVZhbHVlICE9PSBuZXdWYWwpIHtcbiAgICAgICAgICAgICAgc2V0UmFuZ2VWYWx1ZShuZXdWYWwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZShib29sKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodmlzaWJsZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNldFZpc2libGUoYm9vbClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgY29uc3QgaXNTZWxlY3RpbmdGaXJzdERheSA9IChcbiAgICAgIGZyb21Bcmc/OiBEYXRlIHwgbnVsbCxcbiAgICAgIHRvQXJnPzogRGF0ZSB8IG51bGxcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IGlzUmFuZ2VTZWxlY3RlZCA9IGZyb21BcmcgJiYgdG9BcmdcbiAgICAgIHJldHVybiAhZnJvbUFyZyB8fCBpc1JhbmdlU2VsZWN0ZWRcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEYXlDbGljayA9IChkYXk6IERhdGUpID0+IHtcbiAgICAgIGlmIChpc1NlbGVjdGluZ0ZpcnN0RGF5KGZyb20sIHRvKSkge1xuICAgICAgICBpZiAob25TdGFydERheVNlbGVjdCkge1xuICAgICAgICAgIG9uU3RhcnREYXlTZWxlY3QoZGF5KVxuICAgICAgICB9XG4gICAgICAgIHNldEVudGVyZWRUbyhudWxsKVxuICAgICAgICBzZXRGcm9tKGRheSlcbiAgICAgICAgc2V0VG8obnVsbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChvbkVuZERheVNlbGVjdCkge1xuICAgICAgICAgIG9uRW5kRGF5U2VsZWN0KGRheSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV3UmFuZ2U6IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdXG4gICAgICAgIGNvbnN0IGZyb21TdHIgPSBjb252ZXJ0RGF0ZVRvU3RyaW5nKGZyb20pXG4gICAgICAgIGNvbnN0IHRvU3RyID0gY29udmVydERhdGVUb1N0cmluZyhkYXkpXG4gICAgICAgIGxldCBuZXdSYW5nZVZhbHVlID0gXCJcIlxuICAgICAgICBpZiAoRGF0ZVV0aWxzLmlzRGF5QWZ0ZXIoZGF5LCBmcm9tKSkge1xuICAgICAgICAgIG5ld1JhbmdlID0gW2Zyb20sIGRheV1cbiAgICAgICAgICBuZXdSYW5nZVZhbHVlID0gYCR7ZnJvbVN0cn0gLSAke3RvU3RyfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdSYW5nZSA9IFtkYXksIGZyb21dXG4gICAgICAgICAgbmV3UmFuZ2VWYWx1ZSA9IGAke3RvU3RyfSAtICR7ZnJvbVN0cn1gXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldEVudGVyZWRUbyhkYXkpXG4gICAgICAgICAgc2V0UmFuZ2VWYWx1ZShuZXdSYW5nZVZhbHVlKVxuICAgICAgICAgIHNldFRvKGRheSlcbiAgICAgICAgfVxuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShuZXdSYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xvc2VPblNlbGVjdCkge1xuICAgICAgICAgIC8vIOW7tui/n+aYr+S4uuS6huiuqeeKtuaAgeeahOWPmOWMluWcqOinhuinieS4iuWFiOiiq+aOpeWPl1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgICAgICBvblZpc2libGVDaGFuZ2UoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmlzaWJsZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEYXlNb3VzZUVudGVyID0gKGRheTogRGF0ZSkgPT4ge1xuICAgICAgaWYgKCFpc1NlbGVjdGluZ0ZpcnN0RGF5KGZyb20sIHRvKSkge1xuICAgICAgICBzZXRFbnRlcmVkVG8oZGF5KVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZURheU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgICBzZXRFbnRlcmVkVG8obnVsbClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9ICh7XG4gICAgICB0YXJnZXQsXG4gICAgfTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWU6IHZhbCB9ID0gdGFyZ2V0XG4gICAgICBzZXRSYW5nZVZhbHVlKHZhbClcbiAgICAgIGlmICh2YWwudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICBzZXRFbnRlcmVkVG8obnVsbClcbiAgICAgICAgICBzZXRGcm9tKG51bGwpXG4gICAgICAgICAgc2V0VG8obnVsbClcbiAgICAgICAgfVxuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShbdW5kZWZpbmVkLCB1bmRlZmluZWRdKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzTGVnYWxEYXRlUmFuZ2VTdHJpbmcodmFsKSkge1xuICAgICAgICBjb25zdCByYW5nZVZhbHVlU3RycyA9IHZhbC5zcGxpdChcIiAtIFwiKVxuICAgICAgICBjb25zdCBuZXdGcm9tID0gbmV3IERhdGUocmFuZ2VWYWx1ZVN0cnNbMF0pXG4gICAgICAgIGNvbnN0IG5ld1RvID0gbmV3IERhdGUocmFuZ2VWYWx1ZVN0cnNbMV0pXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhaXNEYXlEaXNhYmxlZChuZXdGcm9tKSAmJlxuICAgICAgICAgICFpc0RheURpc2FibGVkKG5ld1RvKSAmJlxuICAgICAgICAgICFEYXRlVXRpbHMuaXNEYXlCZWZvcmUobmV3VG8sIG5ld0Zyb20pICYmXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIERhdGVVdGlscy5pc1NhbWVEYXkoZnJvbSwgbmV3RnJvbSkgJiYgRGF0ZVV0aWxzLmlzU2FtZURheSh0bywgbmV3VG8pXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRGcm9tKG5ld0Zyb20pXG4gICAgICAgICAgICBzZXRUbyhuZXdUbylcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g5L+u5pS55pel5pyf5ZCO55qEIG1vbnRoIOi3s+i9rFxuICAgICAgICAgIGlmICghRGF0ZVV0aWxzLmlzU2FtZURheShmcm9tLCBuZXdGcm9tKSkge1xuICAgICAgICAgICAgc2V0TW9udGgobmV3RnJvbSlcbiAgICAgICAgICB9IGVsc2UgaWYgKCFEYXRlVXRpbHMuaXNTYW1lRGF5KHRvLCBuZXdUbykpIHtcbiAgICAgICAgICAgIHNldE1vbnRoKG5ld1RvKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKFtuZXdGcm9tLCBuZXdUb10pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRGb2N1cyA9ICgpID0+IHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgb25WaXNpYmxlQ2hhbmdlKHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgc2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRLZXlEb3duID0gKHtcbiAgICAgIGtleUNvZGUsXG4gICAgfTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3Qga2V5cyA9IFs5LCAxMywgMjddXG4gICAgICBpZiAoa2V5cy5pbmNsdWRlcyhrZXlDb2RlKSkge1xuICAgICAgICBoYW5kbGVWaXNpYmxlQ2hhbmdlKGZhbHNlKVxuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmlucHV0LmJsdXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU1vbnRoQ2hhbmdlID0gKFxuICAgICAgZGF0ZTogRGF0ZSxcbiAgICAgIGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MU2VsZWN0RWxlbWVudD5cbiAgICApID0+IHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVudFRhcmdldDogdGFyZ2V0IH0gPSBlXG4gICAgICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0YXJnZXQgJiYgdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGNvbnN0IGRheVBpY2tlclJlY3QgPSBkYXlQaWNrZXJSZWYuY3VycmVudC5kYXlQaWNrZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGFyZ2V0Lm5hbWUgPT09IFwibW9udGhcIiAmJlxuICAgICAgICAgICh0YXJnZXRSZWN0LmxlZnQgLSBkYXlQaWNrZXJSZWN0LmxlZnQpICogMiA+IGRheVBpY2tlclJlY3Qud2lkdGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgLSAxKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgbmV3TW9udGggPSBkYXRlXG4gICAgICBpZiAoRGF0ZVV0aWxzLmlzRGF5QWZ0ZXIoZGF0ZSwgbWF4RGF0ZSkpIHtcbiAgICAgICAgaWYgKG1heERhdGUpIHtcbiAgICAgICAgICBuZXdNb250aCA9IG1heERhdGVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChEYXRlVXRpbHMuaXNEYXlCZWZvcmUoZGF0ZSwgbWluRGF0ZSkpIHtcbiAgICAgICAgaWYgKG1pbkRhdGUpIHtcbiAgICAgICAgICBuZXdNb250aCA9IG1pbkRhdGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2V0TW9udGgobmV3TW9udGgpXG4gICAgfVxuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICBpbnB1dDogaW5wdXRSZWYuY3VycmVudCxcbiAgICAgIGhhbmRsZURheUNsaWNrLFxuICAgICAgaGFuZGxlVmlzaWJsZUNoYW5nZSxcbiAgICB9KSlcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wb3ZlclxuICAgICAgICBhcnJvd2VkPXtmYWxzZX1cbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXtoYW5kbGVWaXNpYmxlQ2hhbmdlfVxuICAgICAgICBwbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgcG9wdXA9e1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcHVwYH0+XG4gICAgICAgICAgICB7c2hvcnRjdXRzRW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgIDxTaG9ydGN1dHNcbiAgICAgICAgICAgICAgICBvblNob3J0Y3V0Q2xpY2s9eyh2YWx1ZVNob3J0Y3V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZVNob3J0Y3V0KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcm9tU2hvcnRjdXQgPSB2YWx1ZVNob3J0Y3V0WzBdXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvU2hvcnRjdXQgPSB2YWx1ZVNob3J0Y3V0WzFdXG4gICAgICAgICAgICAgICAgICAgIHNldEZyb20oZnJvbVNob3J0Y3V0KVxuICAgICAgICAgICAgICAgICAgICBzZXRNb250aChmcm9tU2hvcnRjdXQpXG4gICAgICAgICAgICAgICAgICAgIHNldFRvKHRvU2hvcnRjdXQpXG4gICAgICAgICAgICAgICAgICAgIHNldFJhbmdlVmFsdWUoY29udmVydERhdGVSYW5nZVRvU3RyaW5nKHZhbHVlU2hvcnRjdXQpKVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHZhbHVlU2hvcnRjdXQpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VPblNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIOW7tui/n+aYr+S4uuS6huiuqeeKtuaAgeeahOWPmOWMluWcqOinhuinieS4iuWFiOiiq+aOpeWPl1xuICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17cmFuZ2V9XG4gICAgICAgICAgICAgICAgc2hvcnRjdXRzPXtzaG9ydGN1dHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPERheVBpY2tlclxuICAgICAgICAgICAgICByZWY9e2RheVBpY2tlclJlZn1cbiAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9ezJ9XG4gICAgICAgICAgICAgIGRpc2FibGVkRGF5cz17aXNEYXlEaXNhYmxlZH1cbiAgICAgICAgICAgICAgZnJvbU1vbnRoPXttaW5EYXRlfVxuICAgICAgICAgICAgICB0b01vbnRoPXttYXhEYXRlfVxuICAgICAgICAgICAgICBjYW5DaGFuZ2VNb250aFxuICAgICAgICAgICAgICBjbGFzc05hbWVzPXtzdHlsZXN9XG4gICAgICAgICAgICAgIG1vbnRoPXttb250aH1cbiAgICAgICAgICAgICAgbW9udGhzPXtNT05USFN9XG4gICAgICAgICAgICAgIHdlZWtkYXlzTG9uZz17V0VFS0RBWVNfTE9OR31cbiAgICAgICAgICAgICAgd2Vla2RheXNTaG9ydD17V0VFS0RBWVNfU0hPUlR9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17c2VsZWN0ZWREYXlzfVxuICAgICAgICAgICAgICBuYXZiYXJFbGVtZW50PXtcbiAgICAgICAgICAgICAgICA8TmF2YmFyXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICAgICAgICAgIHsuLi5OYXZiYXJFbGVtZW50UHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXB0aW9uRWxlbWVudD17XG4gICAgICAgICAgICAgICAgPENhcHRpb25cbiAgICAgICAgICAgICAgICAgIG1heERhdGU9e21heERhdGV9XG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXttaW5EYXRlfVxuICAgICAgICAgICAgICAgICAgb25EYXRlQ2hhbmdlPXtoYW5kbGVNb250aENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHsuLi5DYXB0aW9uRWxlbWVudFByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25EYXlNb3VzZUVudGVyPXtoYW5kbGVEYXlNb3VzZUVudGVyfVxuICAgICAgICAgICAgICBvbkRheU1vdXNlTGVhdmU9e2hhbmRsZURheU1vdXNlTGVhdmV9XG4gICAgICAgICAgICAgIG9uRGF5Q2xpY2s9e2hhbmRsZURheUNsaWNrfVxuICAgICAgICAgICAgICByZW5kZXJEYXk9eyhkYXk6IERhdGUpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsYH0+e2RheS5nZXREYXRlKCl9PC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBwb3B1cFN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IHNob3J0Y3V0c0VuYWJsZWQgPyBcIjU3NnB4XCIgOiBcIjQ3NnB4XCIsXG4gICAgICAgICAgbWF4V2lkdGg6IHNob3J0Y3V0c0VuYWJsZWQgPyBcIjU3NnB4XCIgOiBcIjQ3NnB4XCIsXG4gICAgICAgIH19XG4gICAgICAgIHRyaWdnZXI9XCJjbGlja1wiXG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgIHsuLi5wb3BvdmVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGludGVudD17aW50ZW50fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVJbnB1dEZvY3VzfVxuICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlSW5wdXRLZXlEb3dufVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIHJpZ2h0RWxlbWVudD17PEljb24gaWNvbj1cImNhbGVuZGFyLW91dGxpbmVkXCIgLz59XG4gICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgdmFsdWU9e3JhbmdlVmFsdWV9XG4gICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgKVxuICB9XG4pXG5cblJhbmdlUGlja2VyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm5Zyo6YCJ5oup5ZCO77yM5raI5aSxIFBvcG92ZXJcbiAgICovXG4gIGNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya6buY6K6k5pel5pyf6IyD5Zu0XG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrpu5jorqTmmK/lkKbmmL7npLrkuIvmi4lcbiAgICovXG4gIGRlZmF1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog56aB5q2i6YCJ5oup55qE5aSp77yMZGF5ID0+IGJvb2zvvJvmr4/kuIDlpKnmmK/nmoTml7bpl7TkuLogMTI6MDA6MDDvvIzov5nkuIDkuKrmmK/nlLEgZGF5LXBpY2tlci1yZWFjdCDlhrPlrprnmoTvvJtcbiAgICog5q+U6L6D5pel5pyf55qE5pe25YCZ5bCP5b+D6L+Z5LiA54K544CCXG4gICAqL1xuICBkaXNhYmxlZERheXM6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6K6+572u6L6T5YWl5qGG57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJub3JtYWxcIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOacgOWkp+mZkOWItuaXpeacn1xuICAgKi9cbiAgbWF4RGF0ZTogUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIC8qKlxuICAgKiDmnIDlsI/pmZDliLbml6XmnJ9cbiAgICovXG4gIG1pbkRhdGU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAvKipcbiAgICog5pel5pyf5pS55Y+Y5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOesrOS6jOasoeeCueWHu+S6huaXpeacn+aXtueahCBoYW5kbGVy77yM5Y2z57uT5p2f6YCJ5oupXG4gICAqL1xuICBvbkVuZERheVNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDnrKzkuIDmrKHngrnlh7vkuobml6XmnJ/ml7bnmoQgaGFuZGxlcu+8jOWNs+W8gOWni+mAieaLqe+8iOWPr+S7peWcqOatpOaXtuiuvue9riBtYXhEYXRlIG1pbkRhdGXvvIzlrp7njrDmjqfliLbml6XmnJ/pgInmi6nojIPlm7TnmoTlip/og73vvIlcbiAgICovXG4gIG9uU3RhcnREYXlTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5pi+56S654q25oCB5Y+R55Sf5Y+Y5YyW5pe255qEaGFuZGxlclxuICAgKi9cbiAgb25WaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOWNoOS9jeWtl+esplxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlvLnlh7rlsYLkvY3nva5cbiAgICovXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInRvcFwiLFxuICAgIFwibGVmdFwiLFxuICAgIFwicmlnaHRcIixcbiAgICBcImJvdHRvbVwiLFxuICAgIFwidG9wTGVmdFwiLFxuICAgIFwidG9wUmlnaHRcIixcbiAgICBcImJvdHRvbUxlZnRcIixcbiAgICBcImJvdHRvbVJpZ2h0XCIsXG4gICAgXCJsZWZ0VG9wXCIsXG4gICAgXCJsZWZ0Qm90dG9tXCIsXG4gICAgXCJyaWdodFRvcFwiLFxuICAgIFwicmlnaHRCb3R0b21cIixcbiAgXSksXG4gIC8qKlxuICAgKiDkvKDlhaUgUG9wb3ZlciDnmoQgcHJvcHNcbiAgICovXG4gIHBvcG92ZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOW/q+aNt+mAieaLqemhue+8jOagvOW8j++8mlxuICAgKiBbe1xuICAgKiBsYWJlbDogXCLnpZblm73mr43kurLnlJ/ml6VcIiwgdmFsdWU6IFtuZXcgRGF0ZShcIjIwMjAtMTAtMDFcIiksIG5ldyBEYXRlKFwiMjAyMC0xMC0wN1wiKV1cbiAgICogfV1cbiAgICovXG4gIHNob3J0Y3V0czogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsaWdodFwiXSksXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrlvZPliY3ml6XmnJ/ojIPlm7RcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5piv5ZCm5pi+56S65LiL5ouJ6YCJ5oupXG4gICAqL1xuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbn1cblxuUmFuZ2VQaWNrZXIuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IFwiXCIsXG4gIGNsb3NlT25TZWxlY3Q6IGZhbHNlLFxuICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gIGRlZmF1bHRWaXNpYmxlOiBudWxsLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGRpc2FibGVkRGF5czogbm9vcCxcbiAgaW50ZW50OiBcIm5vcm1hbFwiLFxuICBtYXhEYXRlOiBnZXREZWZhdWx0TWF4RGF0ZSgpLFxuICBtaW5EYXRlOiBnZXREZWZhdWx0TWluRGF0ZSgpLFxuICBvbkNoYW5nZTogbm9vcCxcbiAgb25FbmREYXlTZWxlY3Q6IG5vb3AsXG4gIG9uU3RhcnREYXlTZWxlY3Q6IG5vb3AsXG4gIG9uVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgcGxhY2Vob2xkZXI6IFwi6YCJ5oup5pel5pyf6IyD5Zu0XCIsXG4gIHBsYWNlbWVudDogXCJib3R0b21MZWZ0XCIsXG4gIHBvcG92ZXJQcm9wczoge30sXG4gIHNob3J0Y3V0czogdW5kZWZpbmVkLFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHRoZW1lOiBudWxsLFxuICB2YWx1ZTogbnVsbCxcbiAgdmlzaWJsZTogbnVsbCxcbn1cblxuUmFuZ2VQaWNrZXIuZGlzcGxheU5hbWUgPSBcIlJhbmdlUGlja2VyXCJcblxuZXhwb3J0IGRlZmF1bHQgUmFuZ2VQaWNrZXJcbiJdfQ==