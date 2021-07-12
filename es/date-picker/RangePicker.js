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

import React, { forwardRef, useContext, useImperativeHandle, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import DPR from "day-picker-react";
import { CaptionElementProps, DateUtils, NavbarElementProps } from "day-picker-react";
import "./style";
import styles from "./classNames";
import { ConfigContext, getComputedSize } from "../config-provider";
import Icon from "../icon";
import Input from "../input";
import Popover from "../popover";
import Caption from "./Caption";
import Navbar from "./Navbar";
import Shortcuts from "./Shortcuts";
import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT, getDefaultMaxDate, getDefaultMinDate, isLegalDateRangeString, convertDateToString, convertDateRangeToString, isDayInRange } from "./core";
var DayPicker = DPR.__esModule ? DPR.default : DPR;
var prefix = "adui-date";

var noop = function noop() {};

var RangePicker = forwardRef(function (_ref, ref) {
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
      rangeValue = convertDateRangeToString(valueProp);
    } else if (defaultValue !== null && defaultValue !== undefined) {
      ;

      var _defaultValue = _slicedToArray(defaultValue, 2);

      from = _defaultValue[0];
      to = _defaultValue[1];
      rangeValue = convertDateRangeToString(defaultValue);
    }

    return {
      from: from,
      month: from,
      rangeValue: rangeValue,
      to: to
    };
  };

  var initialState = useMemo(getInitialState, []);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      enteredTo = _useState2[0],
      setEnteredTo = _useState2[1];

  var _useState3 = useState(initialState.from),
      _useState4 = _slicedToArray(_useState3, 2),
      from = _useState4[0],
      setFrom = _useState4[1];

  var _useState5 = useState(initialState.to),
      _useState6 = _slicedToArray(_useState5, 2),
      to = _useState6[0],
      setTo = _useState6[1];

  var _useState7 = useState(initialState.month),
      _useState8 = _slicedToArray(_useState7, 2),
      month = _useState8[0],
      setMonth = _useState8[1];

  var _useState9 = useState(valueProp),
      _useState10 = _slicedToArray(_useState9, 2),
      prevValueProp = _useState10[0],
      setPrevValueProp = _useState10[1];

  var _useState11 = useState(initialState.rangeValue),
      _useState12 = _slicedToArray(_useState11, 2),
      rangeValue = _useState12[0],
      setRangeValue = _useState12[1];

  var _useState13 = useState(function () {
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
    setRangeValue(convertDateRangeToString(valueProp));
    setPrevValueProp(valueProp);
  }

  if (visibleProp !== null && visible !== !!visibleProp) {
    setVisible(!!visibleProp);
  }

  var inputRef = useRef(null);
  var dayPickerRef = useRef(null);

  var _useContext = useContext(ConfigContext),
      sizeContext = _useContext.size;

  var size = getComputedSize(sizeProp, sizeContext);
  var classSet = classNames(className, "".concat(prefix, "-rangeBase"), "".concat(prefix, "-").concat(size));
  var fromFinal;
  var enteredToFinal = to || enteredTo;
  var isReverse = from && enteredToFinal && DateUtils.isDayAfter(from, enteredToFinal);

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
    return isDayInRange(day, [fromFinal, enteredToFinal], true);
  }), _modifiers);
  var shortcutsEnabled = shortcuts && shortcuts.length > 0;
  var range = [fromFinal, enteredToFinal];

  var isDayDisabled = function isDayDisabled(day) {
    return disabledDays ? disabledDays(day) || DateUtils.isDayBefore(day, minDate) || DateUtils.isDayAfter(day, maxDate) : null;
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
        var newVal = convertDateRangeToString([from, to]);

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
    if (DateUtils.isDayBefore(day, minDate) || DateUtils.isDayAfter(day, maxDate)) {
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
      var fromStr = convertDateToString(from);
      var toStr = convertDateToString(day);
      var newRangeValue = "";

      if (DateUtils.isDayAfter(day, from)) {
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
    } else if (isLegalDateRangeString(val)) {
      var rangeValueStrs = val.split(" - ");
      var newFrom = new Date(rangeValueStrs[0]);
      var newTo = new Date(rangeValueStrs[1]);

      if (!isDayDisabled(newFrom) && !isDayDisabled(newTo) && !DateUtils.isDayBefore(newTo, newFrom) && !(DateUtils.isSameDay(from, newFrom) && DateUtils.isSameDay(to, newTo))) {
        if (valueProp === null) {
          setFrom(newFrom);
          setTo(newTo);
        }

        if (!DateUtils.isSameDay(from, newFrom)) {
          setMonth(newFrom);
        } else if (!DateUtils.isSameDay(to, newTo)) {
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

    if (DateUtils.isDayAfter(date, maxDate)) {
      if (maxDate) {
        newMonth = maxDate;
      }
    } else if (DateUtils.isDayBefore(date, minDate)) {
      if (minDate) {
        newMonth = minDate;
      }
    }

    setMonth(newMonth);
  };

  useImperativeHandle(ref, function () {
    return {
      input: inputRef.current,
      handleDayClick: handleDayClick,
      handleVisibleChange: handleVisibleChange
    };
  });
  return React.createElement(Popover, _extends({
    arrowed: false,
    onVisibleChange: handleVisibleChange,
    placement: placement,
    popup: React.createElement("div", {
      className: "".concat(prefix, "-popup")
    }, shortcutsEnabled && React.createElement(Shortcuts, {
      onShortcutClick: function onShortcutClick(valueShortcut) {
        if (Array.isArray(valueShortcut)) {
          var fromShortcut = valueShortcut[0];
          var toShortcut = valueShortcut[1];
          setFrom(fromShortcut);
          setMonth(fromShortcut);
          setTo(toShortcut);
          setRangeValue(convertDateRangeToString(valueShortcut));

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
    }), React.createElement(DayPicker, {
      ref: dayPickerRef,
      numberOfMonths: 2,
      disabledDays: isDayDisabled,
      fromMonth: minDate,
      toMonth: maxDate,
      canChangeMonth: true,
      classNames: styles,
      month: month,
      months: MONTHS,
      weekdaysLong: WEEKDAYS_LONG,
      weekdaysShort: WEEKDAYS_SHORT,
      selectedDays: selectedDays,
      navbarElement: React.createElement(Navbar, _extends({
        maxDate: maxDate,
        minDate: minDate,
        onManuallyChangeMonth: function onManuallyChangeMonth() {
          setMonth(minDate);
        }
      }, NavbarElementProps)),
      captionElement: React.createElement(Caption, _extends({
        maxDate: maxDate,
        minDate: minDate,
        onDateChange: handleMonthChange
      }, CaptionElementProps)),
      onDayMouseEnter: handleDayMouseEnter,
      onDayMouseLeave: handleDayMouseLeave,
      onDayClick: handleDayClick,
      renderDay: function renderDay(day) {
        return React.createElement("div", {
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
  }, popoverProps), React.createElement(Input, _extends({
    className: classSet,
    disabled: disabled,
    intent: intent,
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    onKeyDown: handleInputKeyDown,
    placeholder: placeholder,
    ref: inputRef,
    rightElement: React.createElement(Icon, {
      icon: "calendar-outlined"
    }),
    size: size,
    theme: theme,
    value: rangeValue
  }, otherProps)));
});
RangePicker.propTypes = {
  className: PropTypes.string,
  closeOnSelect: PropTypes.bool,
  defaultValue: PropTypes.any,
  defaultVisible: PropTypes.bool,
  disabled: PropTypes.bool,
  disabledDays: PropTypes.func,
  intent: PropTypes.oneOf(["normal", "primary", "success", "warning", "danger"]),
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  onEndDaySelect: PropTypes.func,
  onStartDaySelect: PropTypes.func,
  onVisibleChange: PropTypes.func,
  placeholder: PropTypes.string,
  placement: PropTypes.oneOf(["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]),
  popoverProps: PropTypes.object,
  shortcuts: PropTypes.any,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  theme: PropTypes.oneOf([null, "light"]),
  value: PropTypes.any,
  visible: PropTypes.bool
};
RangePicker.defaultProps = {
  className: "",
  closeOnSelect: false,
  defaultValue: null,
  defaultVisible: null,
  disabled: false,
  disabledDays: noop,
  intent: "normal",
  maxDate: getDefaultMaxDate(),
  minDate: getDefaultMinDate(),
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
export default RangePicker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvUmFuZ2VQaWNrZXIudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiZm9yd2FyZFJlZiIsInVzZUNvbnRleHQiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwidXNlTWVtbyIsInVzZVJlZiIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIkRQUiIsIkNhcHRpb25FbGVtZW50UHJvcHMiLCJEYXRlVXRpbHMiLCJOYXZiYXJFbGVtZW50UHJvcHMiLCJzdHlsZXMiLCJDb25maWdDb250ZXh0IiwiZ2V0Q29tcHV0ZWRTaXplIiwiSWNvbiIsIklucHV0IiwiUG9wb3ZlciIsIkNhcHRpb24iLCJOYXZiYXIiLCJTaG9ydGN1dHMiLCJNT05USFMiLCJXRUVLREFZU19MT05HIiwiV0VFS0RBWVNfU0hPUlQiLCJnZXREZWZhdWx0TWF4RGF0ZSIsImdldERlZmF1bHRNaW5EYXRlIiwiaXNMZWdhbERhdGVSYW5nZVN0cmluZyIsImNvbnZlcnREYXRlVG9TdHJpbmciLCJjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmciLCJpc0RheUluUmFuZ2UiLCJEYXlQaWNrZXIiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInByZWZpeCIsIm5vb3AiLCJSYW5nZVBpY2tlciIsInJlZiIsImNsYXNzTmFtZSIsImNsb3NlT25TZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJkZWZhdWx0VmlzaWJsZSIsImRpc2FibGVkIiwiZGlzYWJsZWREYXlzIiwiaW50ZW50IiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJvbkNoYW5nZSIsIm9uRW5kRGF5U2VsZWN0Iiwib25TdGFydERheVNlbGVjdCIsIm9uVmlzaWJsZUNoYW5nZSIsInBsYWNlaG9sZGVyIiwicGxhY2VtZW50IiwicG9wb3ZlclByb3BzIiwic2hvcnRjdXRzIiwic2l6ZVByb3AiLCJzaXplIiwidGhlbWUiLCJ2YWx1ZVByb3AiLCJ2YWx1ZSIsInZpc2libGVQcm9wIiwidmlzaWJsZSIsIm90aGVyUHJvcHMiLCJnZXRJbml0aWFsU3RhdGUiLCJyYW5nZVZhbHVlIiwiZnJvbSIsInRvIiwidW5kZWZpbmVkIiwibW9udGgiLCJpbml0aWFsU3RhdGUiLCJlbnRlcmVkVG8iLCJzZXRFbnRlcmVkVG8iLCJzZXRGcm9tIiwic2V0VG8iLCJzZXRNb250aCIsInByZXZWYWx1ZVByb3AiLCJzZXRQcmV2VmFsdWVQcm9wIiwic2V0UmFuZ2VWYWx1ZSIsInNldFZpc2libGUiLCJpbnB1dFJlZiIsImRheVBpY2tlclJlZiIsInNpemVDb250ZXh0IiwiY2xhc3NTZXQiLCJmcm9tRmluYWwiLCJlbnRlcmVkVG9GaW5hbCIsImlzUmV2ZXJzZSIsImlzRGF5QWZ0ZXIiLCJzZWxlY3RlZERheXMiLCJtb2RpZmllcnMiLCJkYXkiLCJzaG9ydGN1dHNFbmFibGVkIiwibGVuZ3RoIiwicmFuZ2UiLCJpc0RheURpc2FibGVkIiwiaXNEYXlCZWZvcmUiLCJoYW5kbGVWaXNpYmxlQ2hhbmdlIiwiYm9vbCIsImlucHV0RWxlbWVudCIsImN1cnJlbnQiLCJpbnB1dCIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJuZXdWYWwiLCJyYW5nZVJlc2V0Iiwic3BsaXQiLCJEYXRlIiwiaXNTZWxlY3RpbmdGaXJzdERheSIsImZyb21BcmciLCJ0b0FyZyIsImlzUmFuZ2VTZWxlY3RlZCIsImhhbmRsZURheUNsaWNrIiwibmV3UmFuZ2UiLCJmcm9tU3RyIiwidG9TdHIiLCJuZXdSYW5nZVZhbHVlIiwiaGFuZGxlRGF5TW91c2VFbnRlciIsImhhbmRsZURheU1vdXNlTGVhdmUiLCJoYW5kbGVJbnB1dENoYW5nZSIsInRhcmdldCIsInZhbCIsInRyaW0iLCJyYW5nZVZhbHVlU3RycyIsIm5ld0Zyb20iLCJuZXdUbyIsImlzU2FtZURheSIsImhhbmRsZUlucHV0Rm9jdXMiLCJoYW5kbGVJbnB1dEtleURvd24iLCJrZXlDb2RlIiwia2V5cyIsImluY2x1ZGVzIiwiYmx1ciIsImhhbmRsZU1vbnRoQ2hhbmdlIiwiZGF0ZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImRheVBpY2tlclJlY3QiLCJkYXlQaWNrZXIiLCJuYW1lIiwibGVmdCIsIndpZHRoIiwiZ2V0TW9udGgiLCJuZXdNb250aCIsInZhbHVlU2hvcnRjdXQiLCJBcnJheSIsImlzQXJyYXkiLCJmcm9tU2hvcnRjdXQiLCJ0b1Nob3J0Y3V0IiwiZ2V0RGF0ZSIsIm1heFdpZHRoIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwiZnVuYyIsIm9uZU9mIiwiaW5zdGFuY2VPZiIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLE9BQU9BLEtBQVAsSUFDRUMsVUFERixFQUVFQyxVQUZGLEVBR0VDLG1CQUhGLEVBSUVDLE9BSkYsRUFLRUMsTUFMRixFQU1FQyxRQU5GLFFBT08sT0FQUDtBQVFBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixrQkFBaEI7QUFDQSxTQUNFQyxtQkFERixFQUVFQyxTQUZGLEVBR0VDLGtCQUhGLFFBSU8sa0JBSlA7QUFLQSxPQUFPLFNBQVA7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGNBQW5CO0FBQ0EsU0FBU0MsYUFBVCxFQUF3QkMsZUFBeEIsUUFBK0Msb0JBQS9DO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixTQUFqQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsVUFBbEI7QUFFQSxPQUFPQyxPQUFQLE1BQXVDLFlBQXZDO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixXQUFwQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsVUFBbkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGFBQXRCO0FBQ0EsU0FDRUMsTUFERixFQUVFQyxhQUZGLEVBR0VDLGNBSEYsRUFJRUMsaUJBSkYsRUFLRUMsaUJBTEYsRUFNRUMsc0JBTkYsRUFPRUMsbUJBUEYsRUFRRUMsd0JBUkYsRUFTRUMsWUFURixRQVVPLFFBVlA7QUFZQSxJQUFNQyxTQUFTLEdBQUd0QixHQUFHLENBQUN1QixVQUFKLEdBQWlCdkIsR0FBRyxDQUFDd0IsT0FBckIsR0FBK0J4QixHQUFqRDtBQUNBLElBQU15QixNQUFNLEdBQUcsV0FBZjs7QUFDQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBMEdBLElBQU1DLFdBRUwsR0FBR25DLFVBQVUsQ0FDWixnQkF5QkVvQyxHQXpCRixFQTBCSztBQUFBOztBQUFBLE1BeEJEQyxTQXdCQyxRQXhCREEsU0F3QkM7QUFBQSxNQXZCREMsYUF1QkMsUUF2QkRBLGFBdUJDO0FBQUEsTUF0QkRDLFlBc0JDLFFBdEJEQSxZQXNCQztBQUFBLE1BckJEQyxjQXFCQyxRQXJCREEsY0FxQkM7QUFBQSxNQXBCREMsUUFvQkMsUUFwQkRBLFFBb0JDO0FBQUEsTUFuQkRDLFlBbUJDLFFBbkJEQSxZQW1CQztBQUFBLE1BbEJEQyxNQWtCQyxRQWxCREEsTUFrQkM7QUFBQSxNQWpCREMsT0FpQkMsUUFqQkRBLE9BaUJDO0FBQUEsTUFoQkRDLE9BZ0JDLFFBaEJEQSxPQWdCQztBQUFBLE1BZkRDLFFBZUMsUUFmREEsUUFlQztBQUFBLE1BZERDLGNBY0MsUUFkREEsY0FjQztBQUFBLE1BYkRDLGdCQWFDLFFBYkRBLGdCQWFDO0FBQUEsTUFaREMsZUFZQyxRQVpEQSxlQVlDO0FBQUEsTUFYREMsV0FXQyxRQVhEQSxXQVdDO0FBQUEsTUFWREMsU0FVQyxRQVZEQSxTQVVDO0FBQUEsTUFUREMsWUFTQyxRQVREQSxZQVNDO0FBQUEsTUFSREMsU0FRQyxRQVJEQSxTQVFDO0FBQUEsTUFQS0MsUUFPTCxRQVBEQyxJQU9DO0FBQUEsTUFOREMsS0FNQyxRQU5EQSxLQU1DO0FBQUEsTUFMTUMsU0FLTixRQUxEQyxLQUtDO0FBQUEsTUFKUUMsV0FJUixRQUpEQyxPQUlDO0FBQUEsTUFIRUMsVUFHRjs7QUFLSCxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsUUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsUUFBSUMsSUFBSjtBQUNBLFFBQUlDLEVBQUo7O0FBQ0EsUUFBSVIsU0FBUyxLQUFLLElBQWQsSUFBc0JBLFNBQVMsS0FBS1MsU0FBeEMsRUFBbUQ7QUFDakQ7O0FBRGlELHNDQUNuQ1QsU0FEbUM7O0FBQy9DTyxNQUFBQSxJQUQrQztBQUN6Q0MsTUFBQUEsRUFEeUM7QUFFakRGLE1BQUFBLFVBQVUsR0FBR25DLHdCQUF3QixDQUFDNkIsU0FBRCxDQUFyQztBQUNELEtBSEQsTUFHTyxJQUFJbEIsWUFBWSxLQUFLLElBQWpCLElBQXlCQSxZQUFZLEtBQUsyQixTQUE5QyxFQUF5RDtBQUM5RDs7QUFEOEQseUNBQ2hEM0IsWUFEZ0Q7O0FBQzVEeUIsTUFBQUEsSUFENEQ7QUFDdERDLE1BQUFBLEVBRHNEO0FBRTlERixNQUFBQSxVQUFVLEdBQUduQyx3QkFBd0IsQ0FBQ1csWUFBRCxDQUFyQztBQUNEOztBQUVELFdBQU87QUFDTHlCLE1BQUFBLElBQUksRUFBSkEsSUFESztBQUVMRyxNQUFBQSxLQUFLLEVBQUVILElBRkY7QUFHTEQsTUFBQUEsVUFBVSxFQUFWQSxVQUhLO0FBSUxFLE1BQUFBLEVBQUUsRUFBRkE7QUFKSyxLQUFQO0FBTUQsR0FsQkQ7O0FBb0JBLE1BQU1HLFlBQVksR0FBR2pFLE9BQU8sQ0FBQzJELGVBQUQsRUFBa0IsRUFBbEIsQ0FBNUI7O0FBekJHLGtCQTJCK0J6RCxRQUFRLENBQTBCLElBQTFCLENBM0J2QztBQUFBO0FBQUEsTUEyQklnRSxTQTNCSjtBQUFBLE1BMkJlQyxZQTNCZjs7QUFBQSxtQkE0QnFCakUsUUFBUSxDQUEwQitELFlBQVksQ0FBQ0osSUFBdkMsQ0E1QjdCO0FBQUE7QUFBQSxNQTRCSUEsSUE1Qko7QUFBQSxNQTRCVU8sT0E1QlY7O0FBQUEsbUJBNkJpQmxFLFFBQVEsQ0FBMEIrRCxZQUFZLENBQUNILEVBQXZDLENBN0J6QjtBQUFBO0FBQUEsTUE2QklBLEVBN0JKO0FBQUEsTUE2QlFPLEtBN0JSOztBQUFBLG1CQThCdUJuRSxRQUFRLENBQ2hDK0QsWUFBWSxDQUFDRCxLQURtQixDQTlCL0I7QUFBQTtBQUFBLE1BOEJJQSxLQTlCSjtBQUFBLE1BOEJXTSxRQTlCWDs7QUFBQSxtQkFrQ0RwRSxRQUFRLENBRU5vRCxTQUZNLENBbENQO0FBQUE7QUFBQSxNQWlDSWlCLGFBakNKO0FBQUEsTUFpQ21CQyxnQkFqQ25COztBQUFBLG9CQXFDaUN0RSxRQUFRLENBQzFDK0QsWUFBWSxDQUFDTCxVQUQ2QixDQXJDekM7QUFBQTtBQUFBLE1BcUNJQSxVQXJDSjtBQUFBLE1BcUNnQmEsYUFyQ2hCOztBQUFBLG9CQXdDMkJ2RSxRQUFRLENBQVUsWUFBTTtBQUNwRCxRQUFJc0QsV0FBVyxLQUFLLElBQWhCLElBQXdCQSxXQUFXLEtBQUtPLFNBQTVDLEVBQXVEO0FBQ3JELGFBQU9QLFdBQVA7QUFDRDs7QUFDRCxRQUFJbkIsY0FBYyxLQUFLLElBQW5CLElBQTJCQSxjQUFjLEtBQUswQixTQUFsRCxFQUE2RDtBQUMzRCxhQUFPMUIsY0FBUDtBQUNEOztBQUNELFdBQU8sS0FBUDtBQUNELEdBUnFDLENBeENuQztBQUFBO0FBQUEsTUF3Q0lvQixPQXhDSjtBQUFBLE1Bd0NhaUIsVUF4Q2I7O0FBbURILE1BQ0VwQixTQUFTLEtBQUssSUFBZCxJQUNBQSxTQUFTLEtBQUtTLFNBRGQsSUFFQVQsU0FBUyxLQUFLaUIsYUFIaEIsRUFJRTtBQUNBSCxJQUFBQSxPQUFPLENBQUNkLFNBQVMsQ0FBQyxDQUFELENBQVYsQ0FBUDtBQUNBZSxJQUFBQSxLQUFLLENBQUNmLFNBQVMsQ0FBQyxDQUFELENBQVYsQ0FBTDtBQUNBbUIsSUFBQUEsYUFBYSxDQUFDaEQsd0JBQXdCLENBQUM2QixTQUFELENBQXpCLENBQWI7QUFDQWtCLElBQUFBLGdCQUFnQixDQUFDbEIsU0FBRCxDQUFoQjtBQUNEOztBQUNELE1BQUlFLFdBQVcsS0FBSyxJQUFoQixJQUF3QkMsT0FBTyxLQUFLLENBQUMsQ0FBQ0QsV0FBMUMsRUFBdUQ7QUFDckRrQixJQUFBQSxVQUFVLENBQUMsQ0FBQyxDQUFDbEIsV0FBSCxDQUFWO0FBQ0Q7O0FBRUQsTUFBTW1CLFFBQVEsR0FBRzFFLE1BQU0sQ0FBTSxJQUFOLENBQXZCO0FBQ0EsTUFBTTJFLFlBQVksR0FBRzNFLE1BQU0sQ0FBTSxJQUFOLENBQTNCOztBQWxFRyxvQkFvRTJCSCxVQUFVLENBQUNZLGFBQUQsQ0FwRXJDO0FBQUEsTUFvRVdtRSxXQXBFWCxlQW9FS3pCLElBcEVMOztBQXFFSCxNQUFNQSxJQUFJLEdBQUd6QyxlQUFlLENBQUN3QyxRQUFELEVBQVcwQixXQUFYLENBQTVCO0FBRUEsTUFBTUMsUUFBUSxHQUFHMUUsVUFBVSxDQUN6QjhCLFNBRHlCLFlBRXRCSixNQUZzQiwyQkFHdEJBLE1BSHNCLGNBR1pzQixJQUhZLEVBQTNCO0FBTUEsTUFBSTJCLFNBQUo7QUFDQSxNQUFJQyxjQUFjLEdBQUdsQixFQUFFLElBQUlJLFNBQTNCO0FBQ0EsTUFBTWUsU0FBUyxHQUNicEIsSUFBSSxJQUFJbUIsY0FBUixJQUEwQnpFLFNBQVMsQ0FBQzJFLFVBQVYsQ0FBcUJyQixJQUFyQixFQUEyQm1CLGNBQTNCLENBRDVCOztBQUVBLE1BQUlDLFNBQUosRUFBZTtBQUNiRixJQUFBQSxTQUFTLEdBQUdDLGNBQVo7QUFDQUEsSUFBQUEsY0FBYyxHQUFHbkIsSUFBakI7QUFDRCxHQUhELE1BR087QUFDTGtCLElBQUFBLFNBQVMsR0FBR2xCLElBQVo7QUFDRDs7QUFFRCxNQUFNc0IsWUFBWSxHQUFHLENBQ25CSixTQURtQixFQUVuQjtBQUNFbEIsSUFBQUEsSUFBSSxFQUFFa0IsU0FEUjtBQUVFakIsSUFBQUEsRUFBRSxFQUFFa0I7QUFGTixHQUZtQixDQUFyQjtBQU9BLE1BQU1JLFNBQVMsMkRBQ1R0RCxNQURTLGtCQUNhbUQsU0FBUyxHQUFHbkIsRUFBRSxJQUFJaUIsU0FBVCxHQUFxQkEsU0FEM0MseUNBRVRqRCxNQUZTLHVCQUVrQm1ELFNBQVMsSUFBSSxDQUFDbkIsRUFBZCxJQUFvQmlCLFNBRnRDLHlDQUdUakQsTUFIUyxnQkFHV21ELFNBQVMsR0FBR0QsY0FBSCxHQUFvQmxCLEVBQUUsSUFBSWtCLGNBSDlDLHlDQUlUbEQsTUFKUyxxQkFJZ0IsQ0FBQ21ELFNBQUQsSUFBYyxDQUFDbkIsRUFBZixJQUFxQmtCLGNBSnJDLHlDQUtUbEQsTUFMUyxxQkFLZ0IsdUJBQUN1RCxHQUFEO0FBQUEsV0FDM0IzRCxZQUFZLENBQUMyRCxHQUFELEVBQU0sQ0FBQ04sU0FBRCxFQUFZQyxjQUFaLENBQU4sRUFBbUMsSUFBbkMsQ0FEZTtBQUFBLEdBTGhCLGNBQWY7QUFTQSxNQUFNTSxnQkFBZ0IsR0FBR3BDLFNBQVMsSUFBSUEsU0FBUyxDQUFDcUMsTUFBVixHQUFtQixDQUF6RDtBQUVBLE1BQU1DLEtBQXlELEdBQUcsQ0FDaEVULFNBRGdFLEVBRWhFQyxjQUZnRSxDQUFsRTs7QUFLQSxNQUFNUyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNKLEdBQUQsRUFBZTtBQUNuQyxXQUFPOUMsWUFBWSxHQUNmQSxZQUFZLENBQUM4QyxHQUFELENBQVosSUFDRTlFLFNBQVMsQ0FBQ21GLFdBQVYsQ0FBc0JMLEdBQXRCLEVBQTJCM0MsT0FBM0IsQ0FERixJQUVFbkMsU0FBUyxDQUFDMkUsVUFBVixDQUFxQkcsR0FBckIsRUFBMEI1QyxPQUExQixDQUhhLEdBSWYsSUFKSjtBQUtELEdBTkQ7O0FBUUEsTUFBTWtELG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsSUFBRCxFQUFtQjtBQUFBLFFBQzlCQyxZQUQ4QixHQUNibEIsUUFBUSxDQUFDbUIsT0FESSxDQUNyQ0MsS0FEcUM7O0FBRTdDLFFBQUl6RCxRQUFKLEVBQWM7QUFDWjtBQUNEOztBQUNEMEQsSUFBQUEsVUFBVSxDQUFDLFlBQU07QUFBQSxzQkFDV0MsUUFEWDtBQUFBLFVBQ1BDLGFBRE8sYUFDUEEsYUFETzs7QUFFZixVQUFJTixJQUFJLElBQUssQ0FBQ0EsSUFBRCxJQUFTQyxZQUFZLEtBQUtLLGFBQXZDLEVBQXVEO0FBQ3JELFlBQU1DLE1BQU0sR0FBRzFFLHdCQUF3QixDQUFDLENBQUNvQyxJQUFELEVBQU9DLEVBQVAsQ0FBRCxDQUF2Qzs7QUFDQSxZQUFJLENBQUM4QixJQUFMLEVBQVc7QUFDVCxjQUFJLENBQUM5QixFQUFMLEVBQVM7QUFDUCxnQkFBSXFDLE1BQUosRUFBWTtBQUNWLGtCQUFNQyxVQUFVLEdBQUd4QyxVQUFVLENBQUN5QyxLQUFYLENBQWlCLEtBQWpCLENBQW5CO0FBQ0FMLGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2Y1QixnQkFBQUEsT0FBTyxDQUFDLElBQUlrQyxJQUFKLENBQVNGLFVBQVUsQ0FBQyxDQUFELENBQW5CLENBQUQsQ0FBUDtBQUNBL0IsZ0JBQUFBLEtBQUssQ0FBQyxJQUFJaUMsSUFBSixDQUFTRixVQUFVLENBQUMsQ0FBRCxDQUFuQixDQUFELENBQUw7QUFDRCxlQUhTLEVBR1AsR0FITyxDQUFWO0FBSUQ7QUFDRixXQVJELE1BUU8sSUFBSXhDLFVBQVUsS0FBS3VDLE1BQW5CLEVBQTJCO0FBQ2hDMUIsWUFBQUEsYUFBYSxDQUFDMEIsTUFBRCxDQUFiO0FBQ0Q7QUFDRjs7QUFDRCxZQUFJckQsZUFBSixFQUFxQjtBQUNuQkEsVUFBQUEsZUFBZSxDQUFDOEMsSUFBRCxDQUFmO0FBQ0Q7O0FBQ0QsWUFBSXBDLFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN4QmtCLFVBQUFBLFVBQVUsQ0FBQ2tCLElBQUQsQ0FBVjtBQUNEO0FBQ0Y7QUFDRixLQXhCUyxFQXdCUCxDQXhCTyxDQUFWO0FBeUJELEdBOUJEOztBQWdDQSxNQUFNVyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQzFCQyxPQUQwQixFQUUxQkMsS0FGMEIsRUFHdkI7QUFDSCxRQUFNQyxlQUFlLEdBQUdGLE9BQU8sSUFBSUMsS0FBbkM7QUFDQSxXQUFPLENBQUNELE9BQUQsSUFBWUUsZUFBbkI7QUFDRCxHQU5EOztBQVFBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ3RCLEdBQUQsRUFBZTtBQUNwQyxRQUNFOUUsU0FBUyxDQUFDbUYsV0FBVixDQUFzQkwsR0FBdEIsRUFBMkIzQyxPQUEzQixLQUNBbkMsU0FBUyxDQUFDMkUsVUFBVixDQUFxQkcsR0FBckIsRUFBMEI1QyxPQUExQixDQUZGLEVBR0U7QUFDQTtBQUNEOztBQUNELFFBQUk4RCxtQkFBbUIsQ0FBQzFDLElBQUQsRUFBT0MsRUFBUCxDQUF2QixFQUFtQztBQUNqQyxVQUFJakIsZ0JBQUosRUFBc0I7QUFDcEJBLFFBQUFBLGdCQUFnQixDQUFDd0MsR0FBRCxDQUFoQjtBQUNEOztBQUNEbEIsTUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBQyxNQUFBQSxPQUFPLENBQUNpQixHQUFELENBQVA7QUFDQWhCLE1BQUFBLEtBQUssQ0FBQyxJQUFELENBQUw7QUFDRCxLQVBELE1BT087QUFDTCxVQUFJekIsY0FBSixFQUFvQjtBQUNsQkEsUUFBQUEsY0FBYyxDQUFDeUMsR0FBRCxDQUFkO0FBQ0Q7O0FBQ0QsVUFBSXVCLFFBQUo7QUFDQSxVQUFNQyxPQUFPLEdBQUdyRixtQkFBbUIsQ0FBQ3FDLElBQUQsQ0FBbkM7QUFDQSxVQUFNaUQsS0FBSyxHQUFHdEYsbUJBQW1CLENBQUM2RCxHQUFELENBQWpDO0FBQ0EsVUFBSTBCLGFBQWEsR0FBRyxFQUFwQjs7QUFDQSxVQUFJeEcsU0FBUyxDQUFDMkUsVUFBVixDQUFxQkcsR0FBckIsRUFBMEJ4QixJQUExQixDQUFKLEVBQXFDO0FBQ25DK0MsUUFBQUEsUUFBUSxHQUFHLENBQUMvQyxJQUFELEVBQU93QixHQUFQLENBQVg7QUFDQTBCLFFBQUFBLGFBQWEsYUFBTUYsT0FBTixnQkFBbUJDLEtBQW5CLENBQWI7QUFDRCxPQUhELE1BR087QUFDTEYsUUFBQUEsUUFBUSxHQUFHLENBQUN2QixHQUFELEVBQU14QixJQUFOLENBQVg7QUFDQWtELFFBQUFBLGFBQWEsYUFBTUQsS0FBTixnQkFBaUJELE9BQWpCLENBQWI7QUFDRDs7QUFDRCxVQUFJdkQsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCYSxRQUFBQSxZQUFZLENBQUNrQixHQUFELENBQVo7QUFDQVosUUFBQUEsYUFBYSxDQUFDc0MsYUFBRCxDQUFiO0FBQ0ExQyxRQUFBQSxLQUFLLENBQUNnQixHQUFELENBQUw7QUFDRDs7QUFDRCxVQUFJMUMsUUFBSixFQUFjO0FBQ1pBLFFBQUFBLFFBQVEsQ0FBQ2lFLFFBQUQsQ0FBUjtBQUNEOztBQUNELFVBQUl6RSxhQUFKLEVBQW1CO0FBRWpCNkQsUUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZixjQUFJbEQsZUFBSixFQUFxQjtBQUNuQkEsWUFBQUEsZUFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNEOztBQUNELGNBQUlVLFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN4QmtCLFlBQUFBLFVBQVUsQ0FBQyxLQUFELENBQVY7QUFDRDtBQUNGLFNBUFMsRUFPUCxHQVBPLENBQVY7QUFRRDtBQUNGO0FBQ0YsR0FqREQ7O0FBbURBLE1BQU1zQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUMzQixHQUFELEVBQWU7QUFDekMsUUFBSSxDQUFDa0IsbUJBQW1CLENBQUMxQyxJQUFELEVBQU9DLEVBQVAsQ0FBeEIsRUFBb0M7QUFDbENLLE1BQUFBLFlBQVksQ0FBQ2tCLEdBQUQsQ0FBWjtBQUNEO0FBQ0YsR0FKRDs7QUFNQSxNQUFNNEIsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2hDOUMsSUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNELEdBRkQ7O0FBSUEsTUFBTStDLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsUUFFaUI7QUFBQSxRQUR6Q0MsTUFDeUMsU0FEekNBLE1BQ3lDO0FBQUEsUUFDMUJDLEdBRDBCLEdBQ2xCRCxNQURrQixDQUNqQzVELEtBRGlDO0FBRXpDa0IsSUFBQUEsYUFBYSxDQUFDMkMsR0FBRCxDQUFiOztBQUNBLFFBQUlBLEdBQUcsQ0FBQ0MsSUFBSixPQUFlLEVBQW5CLEVBQXVCO0FBQ3JCLFVBQUkvRCxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEJhLFFBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDQUMsUUFBQUEsT0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBQyxRQUFBQSxLQUFLLENBQUMsSUFBRCxDQUFMO0FBQ0Q7O0FBQ0QsVUFBSTFCLFFBQUosRUFBYztBQUNaQSxRQUFBQSxRQUFRLENBQUMsQ0FBQ29CLFNBQUQsRUFBWUEsU0FBWixDQUFELENBQVI7QUFDRDtBQUNGLEtBVEQsTUFTTyxJQUFJeEMsc0JBQXNCLENBQUM2RixHQUFELENBQTFCLEVBQWlDO0FBQ3RDLFVBQU1FLGNBQWMsR0FBR0YsR0FBRyxDQUFDZixLQUFKLENBQVUsS0FBVixDQUF2QjtBQUNBLFVBQU1rQixPQUFPLEdBQUcsSUFBSWpCLElBQUosQ0FBU2dCLGNBQWMsQ0FBQyxDQUFELENBQXZCLENBQWhCO0FBQ0EsVUFBTUUsS0FBSyxHQUFHLElBQUlsQixJQUFKLENBQVNnQixjQUFjLENBQUMsQ0FBRCxDQUF2QixDQUFkOztBQUNBLFVBQ0UsQ0FBQzdCLGFBQWEsQ0FBQzhCLE9BQUQsQ0FBZCxJQUNBLENBQUM5QixhQUFhLENBQUMrQixLQUFELENBRGQsSUFFQSxDQUFDakgsU0FBUyxDQUFDbUYsV0FBVixDQUFzQjhCLEtBQXRCLEVBQTZCRCxPQUE3QixDQUZELElBR0EsRUFDRWhILFNBQVMsQ0FBQ2tILFNBQVYsQ0FBb0I1RCxJQUFwQixFQUEwQjBELE9BQTFCLEtBQXNDaEgsU0FBUyxDQUFDa0gsU0FBVixDQUFvQjNELEVBQXBCLEVBQXdCMEQsS0FBeEIsQ0FEeEMsQ0FKRixFQU9FO0FBQ0EsWUFBSWxFLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QmMsVUFBQUEsT0FBTyxDQUFDbUQsT0FBRCxDQUFQO0FBQ0FsRCxVQUFBQSxLQUFLLENBQUNtRCxLQUFELENBQUw7QUFDRDs7QUFFRCxZQUFJLENBQUNqSCxTQUFTLENBQUNrSCxTQUFWLENBQW9CNUQsSUFBcEIsRUFBMEIwRCxPQUExQixDQUFMLEVBQXlDO0FBQ3ZDakQsVUFBQUEsUUFBUSxDQUFDaUQsT0FBRCxDQUFSO0FBQ0QsU0FGRCxNQUVPLElBQUksQ0FBQ2hILFNBQVMsQ0FBQ2tILFNBQVYsQ0FBb0IzRCxFQUFwQixFQUF3QjBELEtBQXhCLENBQUwsRUFBcUM7QUFDMUNsRCxVQUFBQSxRQUFRLENBQUNrRCxLQUFELENBQVI7QUFDRDs7QUFDRCxZQUFJN0UsUUFBSixFQUFjO0FBQ1pBLFVBQUFBLFFBQVEsQ0FBQyxDQUFDNEUsT0FBRCxFQUFVQyxLQUFWLENBQUQsQ0FBUjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEdBekNEOztBQTJDQSxNQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsUUFBSSxDQUFDakUsT0FBTCxFQUFjO0FBQ1osVUFBSVgsZUFBSixFQUFxQjtBQUNuQkEsUUFBQUEsZUFBZSxDQUFDLElBQUQsQ0FBZjtBQUNEOztBQUNELFVBQUlVLFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN4QmtCLFFBQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFDRDtBQUNGO0FBQ0YsR0FURDs7QUFXQSxNQUFNaUQsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixRQUVrQjtBQUFBLFFBRDNDQyxPQUMyQyxTQUQzQ0EsT0FDMkM7QUFDM0MsUUFBTUMsSUFBSSxHQUFHLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLENBQWI7O0FBQ0EsUUFBSUEsSUFBSSxDQUFDQyxRQUFMLENBQWNGLE9BQWQsQ0FBSixFQUE0QjtBQUMxQmpDLE1BQUFBLG1CQUFtQixDQUFDLEtBQUQsQ0FBbkI7QUFDQWhCLE1BQUFBLFFBQVEsQ0FBQ21CLE9BQVQsQ0FBaUJDLEtBQWpCLENBQXVCZ0MsSUFBdkI7QUFDRDtBQUNGLEdBUkQ7O0FBVUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUN4QkMsSUFEd0IsRUFFeEJDLENBRndCLEVBR3JCO0FBQ0gsUUFBSUEsQ0FBSixFQUFPO0FBQUEsVUFDa0JmLE1BRGxCLEdBQzZCZSxDQUQ3QixDQUNHQyxhQURIO0FBRUwsVUFBTUMsVUFBVSxHQUFHakIsTUFBTSxJQUFJQSxNQUFNLENBQUNrQixxQkFBUCxFQUE3QjtBQUNBLFVBQU1DLGFBQWEsR0FDakIxRCxZQUFZLENBQUNrQixPQUFiLENBQXFCeUMsU0FBckIsQ0FBK0JGLHFCQUEvQixFQURGOztBQUdBLFVBQ0VsQixNQUFNLENBQUNxQixJQUFQLEtBQWdCLE9BQWhCLElBQ0EsQ0FBQ0osVUFBVSxDQUFDSyxJQUFYLEdBQWtCSCxhQUFhLENBQUNHLElBQWpDLElBQXlDLENBQXpDLEdBQTZDSCxhQUFhLENBQUNJLEtBRjdELEVBR0U7QUFDQVQsUUFBQUEsSUFBSSxDQUFDM0QsUUFBTCxDQUFjMkQsSUFBSSxDQUFDVSxRQUFMLEtBQWtCLENBQWhDO0FBQ0Q7QUFDRjs7QUFDRCxRQUFJQyxRQUFRLEdBQUdYLElBQWY7O0FBQ0EsUUFBSTFILFNBQVMsQ0FBQzJFLFVBQVYsQ0FBcUIrQyxJQUFyQixFQUEyQnhGLE9BQTNCLENBQUosRUFBeUM7QUFDdkMsVUFBSUEsT0FBSixFQUFhO0FBQ1htRyxRQUFBQSxRQUFRLEdBQUduRyxPQUFYO0FBQ0Q7QUFDRixLQUpELE1BSU8sSUFBSWxDLFNBQVMsQ0FBQ21GLFdBQVYsQ0FBc0J1QyxJQUF0QixFQUE0QnZGLE9BQTVCLENBQUosRUFBMEM7QUFDL0MsVUFBSUEsT0FBSixFQUFhO0FBQ1hrRyxRQUFBQSxRQUFRLEdBQUdsRyxPQUFYO0FBQ0Q7QUFDRjs7QUFDRDRCLElBQUFBLFFBQVEsQ0FBQ3NFLFFBQUQsQ0FBUjtBQUNELEdBNUJEOztBQThCQTdJLEVBQUFBLG1CQUFtQixDQUFDa0MsR0FBRCxFQUFNO0FBQUEsV0FBTztBQUM5QjhELE1BQUFBLEtBQUssRUFBRXBCLFFBQVEsQ0FBQ21CLE9BRGM7QUFFOUJhLE1BQUFBLGNBQWMsRUFBZEEsY0FGOEI7QUFHOUJoQixNQUFBQSxtQkFBbUIsRUFBbkJBO0FBSDhCLEtBQVA7QUFBQSxHQUFOLENBQW5CO0FBTUEsU0FDRSxvQkFBQyxPQUFEO0FBQ0UsSUFBQSxPQUFPLEVBQUUsS0FEWDtBQUVFLElBQUEsZUFBZSxFQUFFQSxtQkFGbkI7QUFHRSxJQUFBLFNBQVMsRUFBRTNDLFNBSGI7QUFJRSxJQUFBLEtBQUssRUFDSDtBQUFLLE1BQUEsU0FBUyxZQUFLbEIsTUFBTDtBQUFkLE9BQ0d3RCxnQkFBZ0IsSUFDZixvQkFBQyxTQUFEO0FBQ0UsTUFBQSxlQUFlLEVBQUUseUJBQUN1RCxhQUFELEVBQW1CO0FBQ2xDLFlBQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixhQUFkLENBQUosRUFBa0M7QUFDaEMsY0FBTUcsWUFBWSxHQUFHSCxhQUFhLENBQUMsQ0FBRCxDQUFsQztBQUNBLGNBQU1JLFVBQVUsR0FBR0osYUFBYSxDQUFDLENBQUQsQ0FBaEM7QUFDQXpFLFVBQUFBLE9BQU8sQ0FBQzRFLFlBQUQsQ0FBUDtBQUNBMUUsVUFBQUEsUUFBUSxDQUFDMEUsWUFBRCxDQUFSO0FBQ0EzRSxVQUFBQSxLQUFLLENBQUM0RSxVQUFELENBQUw7QUFDQXhFLFVBQUFBLGFBQWEsQ0FBQ2hELHdCQUF3QixDQUFDb0gsYUFBRCxDQUF6QixDQUFiOztBQUVBLGNBQUlsRyxRQUFKLEVBQWM7QUFDWkEsWUFBQUEsUUFBUSxDQUFDa0csYUFBRCxDQUFSO0FBQ0Q7O0FBRUQsY0FBSTFHLGFBQUosRUFBbUI7QUFFakI2RCxZQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmdEIsY0FBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELGFBRlMsRUFFUCxHQUZPLENBQVY7QUFHRDtBQUNGO0FBQ0YsT0FyQkg7QUFzQkUsTUFBQSxZQUFZLEVBQUVjLEtBdEJoQjtBQXVCRSxNQUFBLFNBQVMsRUFBRXRDO0FBdkJiLE1BRkosRUE0QkUsb0JBQUMsU0FBRDtBQUNFLE1BQUEsR0FBRyxFQUFFMEIsWUFEUDtBQUVFLE1BQUEsY0FBYyxFQUFFLENBRmxCO0FBR0UsTUFBQSxZQUFZLEVBQUVhLGFBSGhCO0FBSUUsTUFBQSxTQUFTLEVBQUUvQyxPQUpiO0FBS0UsTUFBQSxPQUFPLEVBQUVELE9BTFg7QUFNRSxNQUFBLGNBQWMsTUFOaEI7QUFPRSxNQUFBLFVBQVUsRUFBRWhDLE1BUGQ7QUFRRSxNQUFBLEtBQUssRUFBRXVELEtBUlQ7QUFTRSxNQUFBLE1BQU0sRUFBRTlDLE1BVFY7QUFVRSxNQUFBLFlBQVksRUFBRUMsYUFWaEI7QUFXRSxNQUFBLGFBQWEsRUFBRUMsY0FYakI7QUFZRSxNQUFBLFlBQVksRUFBRStELFlBWmhCO0FBYUUsTUFBQSxhQUFhLEVBQ1gsb0JBQUMsTUFBRDtBQUNFLFFBQUEsT0FBTyxFQUFFMUMsT0FEWDtBQUVFLFFBQUEsT0FBTyxFQUFFQyxPQUZYO0FBR0UsUUFBQSxxQkFBcUIsRUFBRSxpQ0FBTTtBQUMzQjRCLFVBQUFBLFFBQVEsQ0FBQzVCLE9BQUQsQ0FBUjtBQUNEO0FBTEgsU0FNTWxDLGtCQU5OLEVBZEo7QUF1QkUsTUFBQSxjQUFjLEVBQ1osb0JBQUMsT0FBRDtBQUNFLFFBQUEsT0FBTyxFQUFFaUMsT0FEWDtBQUVFLFFBQUEsT0FBTyxFQUFFQyxPQUZYO0FBR0UsUUFBQSxZQUFZLEVBQUVzRjtBQUhoQixTQUlNMUgsbUJBSk4sRUF4Qko7QUErQkUsTUFBQSxlQUFlLEVBQUUwRyxtQkEvQm5CO0FBZ0NFLE1BQUEsZUFBZSxFQUFFQyxtQkFoQ25CO0FBaUNFLE1BQUEsVUFBVSxFQUFFTixjQWpDZDtBQWtDRSxNQUFBLFNBQVMsRUFBRSxtQkFBQ3RCLEdBQUQ7QUFBQSxlQUNUO0FBQUssVUFBQSxTQUFTLFlBQUt2RCxNQUFMO0FBQWQsV0FBbUN1RCxHQUFHLENBQUM2RCxPQUFKLEVBQW5DLENBRFM7QUFBQSxPQWxDYjtBQXFDRSxNQUFBLFNBQVMsRUFBRTlEO0FBckNiLE1BNUJGLENBTEo7QUEwRUUsSUFBQSxVQUFVLEVBQUU7QUFDVnNELE1BQUFBLEtBQUssRUFBRXBELGdCQUFnQixHQUFHLE9BQUgsR0FBYSxPQUQxQjtBQUVWNkQsTUFBQUEsUUFBUSxFQUFFN0QsZ0JBQWdCLEdBQUcsT0FBSCxHQUFhO0FBRjdCLEtBMUVkO0FBOEVFLElBQUEsT0FBTyxFQUFDLE9BOUVWO0FBK0VFLElBQUEsT0FBTyxFQUFFN0I7QUEvRVgsS0FnRk1SLFlBaEZOLEdBa0ZFLG9CQUFDLEtBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBRTZCLFFBRGI7QUFFRSxJQUFBLFFBQVEsRUFBRXhDLFFBRlo7QUFHRSxJQUFBLE1BQU0sRUFBRUUsTUFIVjtBQUlFLElBQUEsUUFBUSxFQUFFMEUsaUJBSlo7QUFLRSxJQUFBLE9BQU8sRUFBRVEsZ0JBTFg7QUFNRSxJQUFBLFNBQVMsRUFBRUMsa0JBTmI7QUFPRSxJQUFBLFdBQVcsRUFBRTVFLFdBUGY7QUFRRSxJQUFBLEdBQUcsRUFBRTRCLFFBUlA7QUFTRSxJQUFBLFlBQVksRUFBRSxvQkFBQyxJQUFEO0FBQU0sTUFBQSxJQUFJLEVBQUM7QUFBWCxNQVRoQjtBQVVFLElBQUEsSUFBSSxFQUFFdkIsSUFWUjtBQVdFLElBQUEsS0FBSyxFQUFFQyxLQVhUO0FBWUUsSUFBQSxLQUFLLEVBQUVPO0FBWlQsS0FhTUYsVUFiTixFQWxGRixDQURGO0FBb0dELENBL2JXLENBRmQ7QUFvY0ExQixXQUFXLENBQUNvSCxTQUFaLEdBQXdCO0FBSXRCbEgsRUFBQUEsU0FBUyxFQUFFL0IsU0FBUyxDQUFDa0osTUFKQztBQVF0QmxILEVBQUFBLGFBQWEsRUFBRWhDLFNBQVMsQ0FBQ3lGLElBUkg7QUFZdEJ4RCxFQUFBQSxZQUFZLEVBQUVqQyxTQUFTLENBQUNtSixHQVpGO0FBZ0J0QmpILEVBQUFBLGNBQWMsRUFBRWxDLFNBQVMsQ0FBQ3lGLElBaEJKO0FBb0J0QnRELEVBQUFBLFFBQVEsRUFBRW5DLFNBQVMsQ0FBQ3lGLElBcEJFO0FBeUJ0QnJELEVBQUFBLFlBQVksRUFBRXBDLFNBQVMsQ0FBQ29KLElBekJGO0FBNkJ0Qi9HLEVBQUFBLE1BQU0sRUFBRXJDLFNBQVMsQ0FBQ3FKLEtBQVYsQ0FBZ0IsQ0FDdEIsUUFEc0IsRUFFdEIsU0FGc0IsRUFHdEIsU0FIc0IsRUFJdEIsU0FKc0IsRUFLdEIsUUFMc0IsQ0FBaEIsQ0E3QmM7QUF1Q3RCL0csRUFBQUEsT0FBTyxFQUFFdEMsU0FBUyxDQUFDc0osVUFBVixDQUFxQm5ELElBQXJCLENBdkNhO0FBMkN0QjVELEVBQUFBLE9BQU8sRUFBRXZDLFNBQVMsQ0FBQ3NKLFVBQVYsQ0FBcUJuRCxJQUFyQixDQTNDYTtBQStDdEIzRCxFQUFBQSxRQUFRLEVBQUV4QyxTQUFTLENBQUNvSixJQS9DRTtBQW1EdEIzRyxFQUFBQSxjQUFjLEVBQUV6QyxTQUFTLENBQUNvSixJQW5ESjtBQXVEdEIxRyxFQUFBQSxnQkFBZ0IsRUFBRTFDLFNBQVMsQ0FBQ29KLElBdkROO0FBMkR0QnpHLEVBQUFBLGVBQWUsRUFBRTNDLFNBQVMsQ0FBQ29KLElBM0RMO0FBK0R0QnhHLEVBQUFBLFdBQVcsRUFBRTVDLFNBQVMsQ0FBQ2tKLE1BL0REO0FBbUV0QnJHLEVBQUFBLFNBQVMsRUFBRTdDLFNBQVMsQ0FBQ3FKLEtBQVYsQ0FBZ0IsQ0FDekIsS0FEeUIsRUFFekIsTUFGeUIsRUFHekIsT0FIeUIsRUFJekIsUUFKeUIsRUFLekIsU0FMeUIsRUFNekIsVUFOeUIsRUFPekIsWUFQeUIsRUFRekIsYUFSeUIsRUFTekIsU0FUeUIsRUFVekIsWUFWeUIsRUFXekIsVUFYeUIsRUFZekIsYUFaeUIsQ0FBaEIsQ0FuRVc7QUFvRnRCdkcsRUFBQUEsWUFBWSxFQUFFOUMsU0FBUyxDQUFDdUosTUFwRkY7QUEyRnRCeEcsRUFBQUEsU0FBUyxFQUFFL0MsU0FBUyxDQUFDbUosR0EzRkM7QUErRnRCbEcsRUFBQUEsSUFBSSxFQUFFakQsU0FBUyxDQUFDcUosS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLENBQWhCLENBL0ZnQjtBQW1HdEJuRyxFQUFBQSxLQUFLLEVBQUVsRCxTQUFTLENBQUNxSixLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLE9BQVAsQ0FBaEIsQ0FuR2U7QUF1R3RCakcsRUFBQUEsS0FBSyxFQUFFcEQsU0FBUyxDQUFDbUosR0F2R0s7QUEyR3RCN0YsRUFBQUEsT0FBTyxFQUFFdEQsU0FBUyxDQUFDeUY7QUEzR0csQ0FBeEI7QUE4R0E1RCxXQUFXLENBQUMySCxZQUFaLEdBQTJCO0FBQ3pCekgsRUFBQUEsU0FBUyxFQUFFLEVBRGM7QUFFekJDLEVBQUFBLGFBQWEsRUFBRSxLQUZVO0FBR3pCQyxFQUFBQSxZQUFZLEVBQUUsSUFIVztBQUl6QkMsRUFBQUEsY0FBYyxFQUFFLElBSlM7QUFLekJDLEVBQUFBLFFBQVEsRUFBRSxLQUxlO0FBTXpCQyxFQUFBQSxZQUFZLEVBQUVSLElBTlc7QUFPekJTLEVBQUFBLE1BQU0sRUFBRSxRQVBpQjtBQVF6QkMsRUFBQUEsT0FBTyxFQUFFcEIsaUJBQWlCLEVBUkQ7QUFTekJxQixFQUFBQSxPQUFPLEVBQUVwQixpQkFBaUIsRUFURDtBQVV6QnFCLEVBQUFBLFFBQVEsRUFBRVosSUFWZTtBQVd6QmEsRUFBQUEsY0FBYyxFQUFFYixJQVhTO0FBWXpCYyxFQUFBQSxnQkFBZ0IsRUFBRWQsSUFaTztBQWF6QmUsRUFBQUEsZUFBZSxFQUFFZixJQWJRO0FBY3pCZ0IsRUFBQUEsV0FBVyxFQUFFLFFBZFk7QUFlekJDLEVBQUFBLFNBQVMsRUFBRSxZQWZjO0FBZ0J6QkMsRUFBQUEsWUFBWSxFQUFFLEVBaEJXO0FBaUJ6QkMsRUFBQUEsU0FBUyxFQUFFYSxTQWpCYztBQWtCekJYLEVBQUFBLElBQUksRUFBRSxPQWxCbUI7QUFtQnpCQyxFQUFBQSxLQUFLLEVBQUUsSUFuQmtCO0FBb0J6QkUsRUFBQUEsS0FBSyxFQUFFLElBcEJrQjtBQXFCekJFLEVBQUFBLE9BQU8sRUFBRTtBQXJCZ0IsQ0FBM0I7QUF3QkF6QixXQUFXLENBQUM0SCxXQUFaLEdBQTBCLGFBQTFCO0FBRUEsZUFBZTVILFdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZHVwbGljYXRlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VDb250ZXh0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VNZW1vLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgRFBSIGZyb20gXCJkYXktcGlja2VyLXJlYWN0XCJcbmltcG9ydCB7XG4gIENhcHRpb25FbGVtZW50UHJvcHMsXG4gIERhdGVVdGlscyxcbiAgTmF2YmFyRWxlbWVudFByb3BzLFxufSBmcm9tIFwiZGF5LXBpY2tlci1yZWFjdFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY2xhc3NOYW1lc1wiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRcIlxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSBcIi4uL3BvcC10cmlnZ2VyXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgQ2FwdGlvbiBmcm9tIFwiLi9DYXB0aW9uXCJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCJcbmltcG9ydCBTaG9ydGN1dHMgZnJvbSBcIi4vU2hvcnRjdXRzXCJcbmltcG9ydCB7XG4gIE1PTlRIUyxcbiAgV0VFS0RBWVNfTE9ORyxcbiAgV0VFS0RBWVNfU0hPUlQsXG4gIGdldERlZmF1bHRNYXhEYXRlLFxuICBnZXREZWZhdWx0TWluRGF0ZSxcbiAgaXNMZWdhbERhdGVSYW5nZVN0cmluZyxcbiAgY29udmVydERhdGVUb1N0cmluZyxcbiAgY29udmVydERhdGVSYW5nZVRvU3RyaW5nLFxuICBpc0RheUluUmFuZ2UsXG59IGZyb20gXCIuL2NvcmVcIlxuXG5jb25zdCBEYXlQaWNrZXIgPSBEUFIuX19lc01vZHVsZSA/IERQUi5kZWZhdWx0IDogRFBSXG5jb25zdCBwcmVmaXggPSBcImFkdWktZGF0ZVwiXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuZXhwb3J0IGludGVyZmFjZSBJUmFuZ2VQaWNrZXJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuWcqOmAieaLqeWQju+8jOa2iOWksSBQb3BvdmVyXG4gICAqL1xuICBjbG9zZU9uU2VsZWN0PzogYm9vbGVhblxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya6buY6K6k5pel5pyf6IyD5Zu0XG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBbRGF0ZSB8IG51bGwgfCB1bmRlZmluZWQsIERhdGUgfCBudWxsIHwgdW5kZWZpbmVkXSB8IG51bGxcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8mum7mOiupOaYr+WQpuaYvuekuuS4i+aLiVxuICAgKi9cbiAgZGVmYXVsdFZpc2libGU/OiBib29sZWFuIHwgbnVsbFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOemgeatoumAieaLqeeahOWkqe+8jGRheSA9PiBib29s77yb5q+P5LiA5aSp5piv55qE5pe26Ze05Li6IDEyOjAwOjAw77yM6L+Z5LiA5Liq5piv55SxIGRheS1waWNrZXItcmVhY3Qg5Yaz5a6a55qE77ybXG4gICAqIOavlOi+g+aXpeacn+eahOaXtuWAmeWwj+W/g+i/meS4gOeCueOAglxuICAgKi9cbiAgZGlzYWJsZWREYXlzPzogKGRhdGU6IERhdGUpID0+IGJvb2xlYW4gfCB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7ovpPlhaXmoYbnsbvlnotcbiAgICovXG4gIGludGVudD86IFwibm9ybWFsXCIgfCBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJ3YXJuaW5nXCIgfCBcImRhbmdlclwiXG4gIC8qKlxuICAgKiDmnIDlpKfpmZDliLbml6XmnJ9cbiAgICovXG4gIG1heERhdGU/OiBEYXRlXG4gIC8qKlxuICAgKiDmnIDlsI/pmZDliLbml6XmnJ9cbiAgICovXG4gIG1pbkRhdGU/OiBEYXRlXG4gIC8qKlxuICAgKiDml6XmnJ/mlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAoZGF0ZTogW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF0pID0+IHZvaWRcbiAgLyoqXG4gICAqIOesrOS6jOasoeeCueWHu+S6huaXpeacn+aXtueahCBoYW5kbGVy77yM5Y2z57uT5p2f6YCJ5oupXG4gICAqL1xuICBvbkVuZERheVNlbGVjdD86IChkYXRlOiBEYXRlKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDnrKzkuIDmrKHngrnlh7vkuobml6XmnJ/ml7bnmoQgaGFuZGxlcu+8jOWNs+W8gOWni+mAieaLqe+8iOWPr+S7peWcqOatpOaXtuiuvue9riBtYXhEYXRlIG1pbkRhdGXvvIzlrp7njrDmjqfliLbml6XmnJ/pgInmi6nojIPlm7TnmoTlip/og73vvIlcbiAgICovXG4gIG9uU3RhcnREYXlTZWxlY3Q/OiAoZGF0ZTogRGF0ZSkgPT4gdm9pZFxuICAvKipcbiAgICog5pi+56S654q25oCB5Y+R55Sf5Y+Y5YyW5pe255qEaGFuZGxlclxuICAgKi9cbiAgb25WaXNpYmxlQ2hhbmdlPzogKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOWNoOS9jeWtl+esplxuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOW8ueWHuuWxguS9jee9rlxuICAgKi9cbiAgcGxhY2VtZW50PzogUGxhY2VtZW50XG4gIC8qKlxuICAgKiDkvKDlhaUgUG9wb3ZlciDnmoQgcHJvcHNcbiAgICovXG4gIHBvcG92ZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgLyoqXG4gICAqIOW/q+aNt+mAieaLqemhue+8jOagvOW8j++8mlxuICAgKiBbe1xuICAgKiBsYWJlbDogXCLnpZblm73mr43kurLnlJ/ml6VcIiwgdmFsdWU6IFtuZXcgRGF0ZShcIjIwMjAtMTAtMDFcIiksIG5ldyBEYXRlKFwiMjAyMC0xMC0wN1wiKV1cbiAgICogfV1cbiAgICovXG4gIHNob3J0Y3V0cz86IHtcbiAgICAvKipcbiAgICAgKiDor6XpobnnmoTmloflrZdcbiAgICAgKi9cbiAgICBsYWJlbDogUmVhY3QuUmVhY3ROb2RlXG4gICAgLyoqXG4gICAgICog6K+l6aG555qE5pel5pyfXG4gICAgICovXG4gICAgdmFsdWU6IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdXG4gIH1bXVxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lPzogbnVsbCB8IFwibGlnaHRcIlxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5b2T5YmN5pel5pyf6IyD5Zu0XG4gICAqL1xuICB2YWx1ZT86IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdIHwgbnVsbFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5piv5ZCm5pi+56S65LiL5ouJ6YCJ5oupXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbiB8IG51bGxcbn1cblxuLyoqXG4gKiDml6XmnJ/pgInmi6nlmajnlKjkuo7kuobop6PlvZPliY3lt7LpgInml6XmnJ/vvIzpgInmi6nmiJbovpPlhaXpnIDopoHnmoTml6XmnJ/jgIHml6XmnJ/ojIPlm7TnrYnjgIJcbiAqL1xuY29uc3QgUmFuZ2VQaWNrZXI6IFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gIElSYW5nZVBpY2tlclByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+XG4+ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNsb3NlT25TZWxlY3QsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkZWZhdWx0VmlzaWJsZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZGlzYWJsZWREYXlzLFxuICAgICAgaW50ZW50LFxuICAgICAgbWF4RGF0ZSxcbiAgICAgIG1pbkRhdGUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uRW5kRGF5U2VsZWN0LFxuICAgICAgb25TdGFydERheVNlbGVjdCxcbiAgICAgIG9uVmlzaWJsZUNoYW5nZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgcG9wb3ZlclByb3BzLFxuICAgICAgc2hvcnRjdXRzLFxuICAgICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgICB0aGVtZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVByb3AsXG4gICAgICB2aXNpYmxlOiB2aXNpYmxlUHJvcCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJUmFuZ2VQaWNrZXJQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgLyoqXG4gICAgICogc2VsZWN0ZWREYXkg5Li65Lyg57uZIERheVBpY2tlciDnmoTmnIDnu4ggRGF0ZSBPYmplY3TvvIxcbiAgICAgKiB2YWx1ZSDkuLogaW5wdXQg55qE6L6T5YWlIFN0cmluZ+OAglxuICAgICAqL1xuICAgIGNvbnN0IGdldEluaXRpYWxTdGF0ZSA9ICgpID0+IHtcbiAgICAgIGxldCByYW5nZVZhbHVlID0gXCJcIlxuICAgICAgbGV0IGZyb21cbiAgICAgIGxldCB0b1xuICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCAmJiB2YWx1ZVByb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICA7W2Zyb20sIHRvXSA9IHZhbHVlUHJvcFxuICAgICAgICByYW5nZVZhbHVlID0gY29udmVydERhdGVSYW5nZVRvU3RyaW5nKHZhbHVlUHJvcClcbiAgICAgIH0gZWxzZSBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsICYmIGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIDtbZnJvbSwgdG9dID0gZGVmYXVsdFZhbHVlXG4gICAgICAgIHJhbmdlVmFsdWUgPSBjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcoZGVmYXVsdFZhbHVlKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBmcm9tLFxuICAgICAgICBtb250aDogZnJvbSxcbiAgICAgICAgcmFuZ2VWYWx1ZSxcbiAgICAgICAgdG8sXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdXNlTWVtbyhnZXRJbml0aWFsU3RhdGUsIFtdKVxuXG4gICAgY29uc3QgW2VudGVyZWRUbywgc2V0RW50ZXJlZFRvXSA9IHVzZVN0YXRlPERhdGUgfCBudWxsIHwgdW5kZWZpbmVkPihudWxsKVxuICAgIGNvbnN0IFtmcm9tLCBzZXRGcm9tXSA9IHVzZVN0YXRlPERhdGUgfCBudWxsIHwgdW5kZWZpbmVkPihpbml0aWFsU3RhdGUuZnJvbSlcbiAgICBjb25zdCBbdG8sIHNldFRvXSA9IHVzZVN0YXRlPERhdGUgfCBudWxsIHwgdW5kZWZpbmVkPihpbml0aWFsU3RhdGUudG8pXG4gICAgY29uc3QgW21vbnRoLCBzZXRNb250aF0gPSB1c2VTdGF0ZTxEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZD4oXG4gICAgICBpbml0aWFsU3RhdGUubW9udGhcbiAgICApXG4gICAgY29uc3QgW3ByZXZWYWx1ZVByb3AsIHNldFByZXZWYWx1ZVByb3BdID1cbiAgICAgIHVzZVN0YXRlPFxuICAgICAgICBbRGF0ZSB8IG51bGwgfCB1bmRlZmluZWQsIERhdGUgfCBudWxsIHwgdW5kZWZpbmVkXSB8IG51bGwgfCB1bmRlZmluZWRcbiAgICAgID4odmFsdWVQcm9wKVxuICAgIGNvbnN0IFtyYW5nZVZhbHVlLCBzZXRSYW5nZVZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXG4gICAgICBpbml0aWFsU3RhdGUucmFuZ2VWYWx1ZVxuICAgIClcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuPigoKSA9PiB7XG4gICAgICBpZiAodmlzaWJsZVByb3AgIT09IG51bGwgJiYgdmlzaWJsZVByb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmlzaWJsZVByb3BcbiAgICAgIH1cbiAgICAgIGlmIChkZWZhdWx0VmlzaWJsZSAhPT0gbnVsbCAmJiBkZWZhdWx0VmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmlzaWJsZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICBpZiAoXG4gICAgICB2YWx1ZVByb3AgIT09IG51bGwgJiZcbiAgICAgIHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB2YWx1ZVByb3AgIT09IHByZXZWYWx1ZVByb3BcbiAgICApIHtcbiAgICAgIHNldEZyb20odmFsdWVQcm9wWzBdKVxuICAgICAgc2V0VG8odmFsdWVQcm9wWzFdKVxuICAgICAgc2V0UmFuZ2VWYWx1ZShjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcodmFsdWVQcm9wKSlcbiAgICAgIHNldFByZXZWYWx1ZVByb3AodmFsdWVQcm9wKVxuICAgIH1cbiAgICBpZiAodmlzaWJsZVByb3AgIT09IG51bGwgJiYgdmlzaWJsZSAhPT0gISF2aXNpYmxlUHJvcCkge1xuICAgICAgc2V0VmlzaWJsZSghIXZpc2libGVQcm9wKVxuICAgIH1cblxuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPGFueT4obnVsbClcbiAgICBjb25zdCBkYXlQaWNrZXJSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuXG4gICAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuICAgIGNvbnN0IHNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZVByb3AsIHNpemVDb250ZXh0KVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYCR7cHJlZml4fS1yYW5nZUJhc2VgLFxuICAgICAgYCR7cHJlZml4fS0ke3NpemV9YFxuICAgIClcblxuICAgIGxldCBmcm9tRmluYWw6IERhdGUgfCBudWxsIHwgdW5kZWZpbmVkXG4gICAgbGV0IGVudGVyZWRUb0ZpbmFsID0gdG8gfHwgZW50ZXJlZFRvXG4gICAgY29uc3QgaXNSZXZlcnNlID1cbiAgICAgIGZyb20gJiYgZW50ZXJlZFRvRmluYWwgJiYgRGF0ZVV0aWxzLmlzRGF5QWZ0ZXIoZnJvbSwgZW50ZXJlZFRvRmluYWwpXG4gICAgaWYgKGlzUmV2ZXJzZSkge1xuICAgICAgZnJvbUZpbmFsID0gZW50ZXJlZFRvRmluYWxcbiAgICAgIGVudGVyZWRUb0ZpbmFsID0gZnJvbVxuICAgIH0gZWxzZSB7XG4gICAgICBmcm9tRmluYWwgPSBmcm9tXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWREYXlzID0gW1xuICAgICAgZnJvbUZpbmFsLFxuICAgICAge1xuICAgICAgICBmcm9tOiBmcm9tRmluYWwsXG4gICAgICAgIHRvOiBlbnRlcmVkVG9GaW5hbCxcbiAgICAgIH0sXG4gICAgXVxuICAgIGNvbnN0IG1vZGlmaWVycyA9IHtcbiAgICAgIFtgJHtwcmVmaXh9LXJhbmdlU3RhcnRgXTogaXNSZXZlcnNlID8gdG8gJiYgZnJvbUZpbmFsIDogZnJvbUZpbmFsLFxuICAgICAgW2Ake3ByZWZpeH0tcmFuZ2VTdGFydEhvdmVyYF06IGlzUmV2ZXJzZSAmJiAhdG8gJiYgZnJvbUZpbmFsLFxuICAgICAgW2Ake3ByZWZpeH0tcmFuZ2VFbmRgXTogaXNSZXZlcnNlID8gZW50ZXJlZFRvRmluYWwgOiB0byAmJiBlbnRlcmVkVG9GaW5hbCxcbiAgICAgIFtgJHtwcmVmaXh9LXJhbmdlRW5kSG92ZXJgXTogIWlzUmV2ZXJzZSAmJiAhdG8gJiYgZW50ZXJlZFRvRmluYWwsXG4gICAgICBbYCR7cHJlZml4fS1zZWxlY3RlZFJhbmdlYF06IChkYXk6IERhdGUpID0+XG4gICAgICAgIGlzRGF5SW5SYW5nZShkYXksIFtmcm9tRmluYWwsIGVudGVyZWRUb0ZpbmFsXSwgdHJ1ZSksXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvcnRjdXRzRW5hYmxlZCA9IHNob3J0Y3V0cyAmJiBzaG9ydGN1dHMubGVuZ3RoID4gMFxuXG4gICAgY29uc3QgcmFuZ2U6IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdID0gW1xuICAgICAgZnJvbUZpbmFsLFxuICAgICAgZW50ZXJlZFRvRmluYWwsXG4gICAgXVxuXG4gICAgY29uc3QgaXNEYXlEaXNhYmxlZCA9IChkYXk6IERhdGUpID0+IHtcbiAgICAgIHJldHVybiBkaXNhYmxlZERheXNcbiAgICAgICAgPyBkaXNhYmxlZERheXMoZGF5KSB8fFxuICAgICAgICAgICAgRGF0ZVV0aWxzLmlzRGF5QmVmb3JlKGRheSwgbWluRGF0ZSkgfHxcbiAgICAgICAgICAgIERhdGVVdGlscy5pc0RheUFmdGVyKGRheSwgbWF4RGF0ZSlcbiAgICAgICAgOiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVmlzaWJsZUNoYW5nZSA9IChib29sOiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zdCB7IGlucHV0OiBpbnB1dEVsZW1lbnQgfSA9IGlucHV0UmVmLmN1cnJlbnRcbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50XG4gICAgICAgIGlmIChib29sIHx8ICghYm9vbCAmJiBpbnB1dEVsZW1lbnQgIT09IGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgY29uc3QgbmV3VmFsID0gY29udmVydERhdGVSYW5nZVRvU3RyaW5nKFtmcm9tLCB0b10pXG4gICAgICAgICAgaWYgKCFib29sKSB7XG4gICAgICAgICAgICBpZiAoIXRvKSB7XG4gICAgICAgICAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZVJlc2V0ID0gcmFuZ2VWYWx1ZS5zcGxpdChcIiAtIFwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0RnJvbShuZXcgRGF0ZShyYW5nZVJlc2V0WzBdKSlcbiAgICAgICAgICAgICAgICAgIHNldFRvKG5ldyBEYXRlKHJhbmdlUmVzZXRbMV0pKVxuICAgICAgICAgICAgICAgIH0sIDI1MClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5nZVZhbHVlICE9PSBuZXdWYWwpIHtcbiAgICAgICAgICAgICAgc2V0UmFuZ2VWYWx1ZShuZXdWYWwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZShib29sKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodmlzaWJsZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNldFZpc2libGUoYm9vbClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgY29uc3QgaXNTZWxlY3RpbmdGaXJzdERheSA9IChcbiAgICAgIGZyb21Bcmc/OiBEYXRlIHwgbnVsbCxcbiAgICAgIHRvQXJnPzogRGF0ZSB8IG51bGxcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IGlzUmFuZ2VTZWxlY3RlZCA9IGZyb21BcmcgJiYgdG9BcmdcbiAgICAgIHJldHVybiAhZnJvbUFyZyB8fCBpc1JhbmdlU2VsZWN0ZWRcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEYXlDbGljayA9IChkYXk6IERhdGUpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgRGF0ZVV0aWxzLmlzRGF5QmVmb3JlKGRheSwgbWluRGF0ZSkgfHxcbiAgICAgICAgRGF0ZVV0aWxzLmlzRGF5QWZ0ZXIoZGF5LCBtYXhEYXRlKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKGlzU2VsZWN0aW5nRmlyc3REYXkoZnJvbSwgdG8pKSB7XG4gICAgICAgIGlmIChvblN0YXJ0RGF5U2VsZWN0KSB7XG4gICAgICAgICAgb25TdGFydERheVNlbGVjdChkYXkpXG4gICAgICAgIH1cbiAgICAgICAgc2V0RW50ZXJlZFRvKG51bGwpXG4gICAgICAgIHNldEZyb20oZGF5KVxuICAgICAgICBzZXRUbyhudWxsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG9uRW5kRGF5U2VsZWN0KSB7XG4gICAgICAgICAgb25FbmREYXlTZWxlY3QoZGF5KVxuICAgICAgICB9XG4gICAgICAgIGxldCBuZXdSYW5nZTogW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF1cbiAgICAgICAgY29uc3QgZnJvbVN0ciA9IGNvbnZlcnREYXRlVG9TdHJpbmcoZnJvbSlcbiAgICAgICAgY29uc3QgdG9TdHIgPSBjb252ZXJ0RGF0ZVRvU3RyaW5nKGRheSlcbiAgICAgICAgbGV0IG5ld1JhbmdlVmFsdWUgPSBcIlwiXG4gICAgICAgIGlmIChEYXRlVXRpbHMuaXNEYXlBZnRlcihkYXksIGZyb20pKSB7XG4gICAgICAgICAgbmV3UmFuZ2UgPSBbZnJvbSwgZGF5XVxuICAgICAgICAgIG5ld1JhbmdlVmFsdWUgPSBgJHtmcm9tU3RyfSAtICR7dG9TdHJ9YFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1JhbmdlID0gW2RheSwgZnJvbV1cbiAgICAgICAgICBuZXdSYW5nZVZhbHVlID0gYCR7dG9TdHJ9IC0gJHtmcm9tU3RyfWBcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgc2V0RW50ZXJlZFRvKGRheSlcbiAgICAgICAgICBzZXRSYW5nZVZhbHVlKG5ld1JhbmdlVmFsdWUpXG4gICAgICAgICAgc2V0VG8oZGF5KVxuICAgICAgICB9XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKG5ld1JhbmdlKVxuICAgICAgICB9XG4gICAgICAgIGlmIChjbG9zZU9uU2VsZWN0KSB7XG4gICAgICAgICAgLy8g5bu26L+f5piv5Li65LqG6K6p54q25oCB55qE5Y+Y5YyW5Zyo6KeG6KeJ5LiK5YWI6KKr5o6l5Y+XXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZShmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2aXNpYmxlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZURheU1vdXNlRW50ZXIgPSAoZGF5OiBEYXRlKSA9PiB7XG4gICAgICBpZiAoIWlzU2VsZWN0aW5nRmlyc3REYXkoZnJvbSwgdG8pKSB7XG4gICAgICAgIHNldEVudGVyZWRUbyhkYXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRGF5TW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICAgIHNldEVudGVyZWRUbyhudWxsKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKHtcbiAgICAgIHRhcmdldCxcbiAgICB9OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3QgeyB2YWx1ZTogdmFsIH0gPSB0YXJnZXRcbiAgICAgIHNldFJhbmdlVmFsdWUodmFsKVxuICAgICAgaWYgKHZhbC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldEVudGVyZWRUbyhudWxsKVxuICAgICAgICAgIHNldEZyb20obnVsbClcbiAgICAgICAgICBzZXRUbyhudWxsKVxuICAgICAgICB9XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKFt1bmRlZmluZWQsIHVuZGVmaW5lZF0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNMZWdhbERhdGVSYW5nZVN0cmluZyh2YWwpKSB7XG4gICAgICAgIGNvbnN0IHJhbmdlVmFsdWVTdHJzID0gdmFsLnNwbGl0KFwiIC0gXCIpXG4gICAgICAgIGNvbnN0IG5ld0Zyb20gPSBuZXcgRGF0ZShyYW5nZVZhbHVlU3Ryc1swXSlcbiAgICAgICAgY29uc3QgbmV3VG8gPSBuZXcgRGF0ZShyYW5nZVZhbHVlU3Ryc1sxXSlcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFpc0RheURpc2FibGVkKG5ld0Zyb20pICYmXG4gICAgICAgICAgIWlzRGF5RGlzYWJsZWQobmV3VG8pICYmXG4gICAgICAgICAgIURhdGVVdGlscy5pc0RheUJlZm9yZShuZXdUbywgbmV3RnJvbSkgJiZcbiAgICAgICAgICAhKFxuICAgICAgICAgICAgRGF0ZVV0aWxzLmlzU2FtZURheShmcm9tLCBuZXdGcm9tKSAmJiBEYXRlVXRpbHMuaXNTYW1lRGF5KHRvLCBuZXdUbylcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNldEZyb20obmV3RnJvbSlcbiAgICAgICAgICAgIHNldFRvKG5ld1RvKVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDkv67mlLnml6XmnJ/lkI7nmoQgbW9udGgg6Lez6L2sXG4gICAgICAgICAgaWYgKCFEYXRlVXRpbHMuaXNTYW1lRGF5KGZyb20sIG5ld0Zyb20pKSB7XG4gICAgICAgICAgICBzZXRNb250aChuZXdGcm9tKVxuICAgICAgICAgIH0gZWxzZSBpZiAoIURhdGVVdGlscy5pc1NhbWVEYXkodG8sIG5ld1RvKSkge1xuICAgICAgICAgICAgc2V0TW9udGgobmV3VG8pXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgb25DaGFuZ2UoW25ld0Zyb20sIG5ld1RvXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dEZvY3VzID0gKCkgPT4ge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICBvblZpc2libGVDaGFuZ2UodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlzaWJsZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICBzZXRWaXNpYmxlKHRydWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dEtleURvd24gPSAoe1xuICAgICAga2V5Q29kZSxcbiAgICB9OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBjb25zdCBrZXlzID0gWzksIDEzLCAyN11cbiAgICAgIGlmIChrZXlzLmluY2x1ZGVzKGtleUNvZGUpKSB7XG4gICAgICAgIGhhbmRsZVZpc2libGVDaGFuZ2UoZmFsc2UpXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuaW5wdXQuYmx1cigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTW9udGhDaGFuZ2UgPSAoXG4gICAgICBkYXRlOiBEYXRlLFxuICAgICAgZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PlxuICAgICkgPT4ge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0OiB0YXJnZXQgfSA9IGVcbiAgICAgICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRhcmdldCAmJiB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgY29uc3QgZGF5UGlja2VyUmVjdCA9XG4gICAgICAgICAgZGF5UGlja2VyUmVmLmN1cnJlbnQuZGF5UGlja2VyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRhcmdldC5uYW1lID09PSBcIm1vbnRoXCIgJiZcbiAgICAgICAgICAodGFyZ2V0UmVjdC5sZWZ0IC0gZGF5UGlja2VyUmVjdC5sZWZ0KSAqIDIgPiBkYXlQaWNrZXJSZWN0LndpZHRoXG4gICAgICAgICkge1xuICAgICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpIC0gMSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IG5ld01vbnRoID0gZGF0ZVxuICAgICAgaWYgKERhdGVVdGlscy5pc0RheUFmdGVyKGRhdGUsIG1heERhdGUpKSB7XG4gICAgICAgIGlmIChtYXhEYXRlKSB7XG4gICAgICAgICAgbmV3TW9udGggPSBtYXhEYXRlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoRGF0ZVV0aWxzLmlzRGF5QmVmb3JlKGRhdGUsIG1pbkRhdGUpKSB7XG4gICAgICAgIGlmIChtaW5EYXRlKSB7XG4gICAgICAgICAgbmV3TW9udGggPSBtaW5EYXRlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldE1vbnRoKG5ld01vbnRoKVxuICAgIH1cblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgaW5wdXQ6IGlucHV0UmVmLmN1cnJlbnQsXG4gICAgICBoYW5kbGVEYXlDbGljayxcbiAgICAgIGhhbmRsZVZpc2libGVDaGFuZ2UsXG4gICAgfSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcG92ZXJcbiAgICAgICAgYXJyb3dlZD17ZmFsc2V9XG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZT17aGFuZGxlVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgICAgIHBvcHVwPXtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3B1cGB9PlxuICAgICAgICAgICAge3Nob3J0Y3V0c0VuYWJsZWQgJiYgKFxuICAgICAgICAgICAgICA8U2hvcnRjdXRzXG4gICAgICAgICAgICAgICAgb25TaG9ydGN1dENsaWNrPXsodmFsdWVTaG9ydGN1dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVTaG9ydGN1dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJvbVNob3J0Y3V0ID0gdmFsdWVTaG9ydGN1dFswXVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b1Nob3J0Y3V0ID0gdmFsdWVTaG9ydGN1dFsxXVxuICAgICAgICAgICAgICAgICAgICBzZXRGcm9tKGZyb21TaG9ydGN1dClcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9udGgoZnJvbVNob3J0Y3V0KVxuICAgICAgICAgICAgICAgICAgICBzZXRUbyh0b1Nob3J0Y3V0KVxuICAgICAgICAgICAgICAgICAgICBzZXRSYW5nZVZhbHVlKGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyh2YWx1ZVNob3J0Y3V0KSlcblxuICAgICAgICAgICAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSh2YWx1ZVNob3J0Y3V0KVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyDlu7bov5/mmK/kuLrkuoborqnnirbmgIHnmoTlj5jljJblnKjop4bop4nkuIrlhYjooqvmjqXlj5dcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e3JhbmdlfVxuICAgICAgICAgICAgICAgIHNob3J0Y3V0cz17c2hvcnRjdXRzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxEYXlQaWNrZXJcbiAgICAgICAgICAgICAgcmVmPXtkYXlQaWNrZXJSZWZ9XG4gICAgICAgICAgICAgIG51bWJlck9mTW9udGhzPXsyfVxuICAgICAgICAgICAgICBkaXNhYmxlZERheXM9e2lzRGF5RGlzYWJsZWR9XG4gICAgICAgICAgICAgIGZyb21Nb250aD17bWluRGF0ZX1cbiAgICAgICAgICAgICAgdG9Nb250aD17bWF4RGF0ZX1cbiAgICAgICAgICAgICAgY2FuQ2hhbmdlTW9udGhcbiAgICAgICAgICAgICAgY2xhc3NOYW1lcz17c3R5bGVzfVxuICAgICAgICAgICAgICBtb250aD17bW9udGh9XG4gICAgICAgICAgICAgIG1vbnRocz17TU9OVEhTfVxuICAgICAgICAgICAgICB3ZWVrZGF5c0xvbmc9e1dFRUtEQVlTX0xPTkd9XG4gICAgICAgICAgICAgIHdlZWtkYXlzU2hvcnQ9e1dFRUtEQVlTX1NIT1JUfVxuICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e3NlbGVjdGVkRGF5c31cbiAgICAgICAgICAgICAgbmF2YmFyRWxlbWVudD17XG4gICAgICAgICAgICAgICAgPE5hdmJhclxuICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17bWF4RGF0ZX1cbiAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e21pbkRhdGV9XG4gICAgICAgICAgICAgICAgICBvbk1hbnVhbGx5Q2hhbmdlTW9udGg9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9udGgobWluRGF0ZSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB7Li4uTmF2YmFyRWxlbWVudFByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FwdGlvbkVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgIDxDYXB0aW9uXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICAgICAgICAgIG9uRGF0ZUNoYW5nZT17aGFuZGxlTW9udGhDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICB7Li4uQ2FwdGlvbkVsZW1lbnRQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uRGF5TW91c2VFbnRlcj17aGFuZGxlRGF5TW91c2VFbnRlcn1cbiAgICAgICAgICAgICAgb25EYXlNb3VzZUxlYXZlPXtoYW5kbGVEYXlNb3VzZUxlYXZlfVxuICAgICAgICAgICAgICBvbkRheUNsaWNrPXtoYW5kbGVEYXlDbGlja31cbiAgICAgICAgICAgICAgcmVuZGVyRGF5PXsoZGF5OiBEYXRlKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2VsbGB9PntkYXkuZ2V0RGF0ZSgpfTwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBtb2RpZmllcnM9e21vZGlmaWVyc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgcG9wdXBTdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBzaG9ydGN1dHNFbmFibGVkID8gXCI1NzZweFwiIDogXCI0NzZweFwiLFxuICAgICAgICAgIG1heFdpZHRoOiBzaG9ydGN1dHNFbmFibGVkID8gXCI1NzZweFwiIDogXCI0NzZweFwiLFxuICAgICAgICB9fVxuICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICB7Li4ucG9wb3ZlclByb3BzfVxuICAgICAgPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBpbnRlbnQ9e2ludGVudH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgb25Gb2N1cz17aGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgICBvbktleURvd249e2hhbmRsZUlucHV0S2V5RG93bn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICByaWdodEVsZW1lbnQ9ezxJY29uIGljb249XCJjYWxlbmRhci1vdXRsaW5lZFwiIC8+fVxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgIHZhbHVlPXtyYW5nZVZhbHVlfVxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9Qb3BvdmVyPlxuICAgIClcbiAgfVxuKVxuXG5SYW5nZVBpY2tlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuWcqOmAieaLqeWQju+8jOa2iOWksSBQb3BvdmVyXG4gICAqL1xuICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8mum7mOiupOaXpeacn+iMg+WbtFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya6buY6K6k5piv5ZCm5pi+56S65LiL5ouJXG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOemgeatoumAieaLqeeahOWkqe+8jGRheSA9PiBib29s77yb5q+P5LiA5aSp5piv55qE5pe26Ze05Li6IDEyOjAwOjAw77yM6L+Z5LiA5Liq5piv55SxIGRheS1waWNrZXItcmVhY3Qg5Yaz5a6a55qE77ybXG4gICAqIOavlOi+g+aXpeacn+eahOaXtuWAmeWwj+W/g+i/meS4gOeCueOAglxuICAgKi9cbiAgZGlzYWJsZWREYXlzOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9rui+k+WFpeahhuexu+Wei1xuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwibm9ybWFsXCIsXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgXSksXG4gIC8qKlxuICAgKiDmnIDlpKfpmZDliLbml6XmnJ9cbiAgICovXG4gIG1heERhdGU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAvKipcbiAgICog5pyA5bCP6ZmQ5Yi25pel5pyfXG4gICAqL1xuICBtaW5EYXRlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgLyoqXG4gICAqIOaXpeacn+aUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDnrKzkuozmrKHngrnlh7vkuobml6XmnJ/ml7bnmoQgaGFuZGxlcu+8jOWNs+e7k+adn+mAieaLqVxuICAgKi9cbiAgb25FbmREYXlTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog56ys5LiA5qyh54K55Ye75LqG5pel5pyf5pe255qEIGhhbmRsZXLvvIzljbPlvIDlp4vpgInmi6nvvIjlj6/ku6XlnKjmraTml7borr7nva4gbWF4RGF0ZSBtaW5EYXRl77yM5a6e546w5o6n5Yi25pel5pyf6YCJ5oup6IyD5Zu055qE5Yqf6IO977yJXG4gICAqL1xuICBvblN0YXJ0RGF5U2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOaYvuekuueKtuaAgeWPkeeUn+WPmOWMluaXtueahGhhbmRsZXJcbiAgICovXG4gIG9uVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDljaDkvY3lrZfnrKZcbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5by55Ye65bGC5L2N572uXG4gICAqL1xuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJ0b3BcIixcbiAgICBcImxlZnRcIixcbiAgICBcInJpZ2h0XCIsXG4gICAgXCJib3R0b21cIixcbiAgICBcInRvcExlZnRcIixcbiAgICBcInRvcFJpZ2h0XCIsXG4gICAgXCJib3R0b21MZWZ0XCIsXG4gICAgXCJib3R0b21SaWdodFwiLFxuICAgIFwibGVmdFRvcFwiLFxuICAgIFwibGVmdEJvdHRvbVwiLFxuICAgIFwicmlnaHRUb3BcIixcbiAgICBcInJpZ2h0Qm90dG9tXCIsXG4gIF0pLFxuICAvKipcbiAgICog5Lyg5YWlIFBvcG92ZXIg55qEIHByb3BzXG4gICAqL1xuICBwb3BvdmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDlv6vmjbfpgInmi6npobnvvIzmoLzlvI/vvJpcbiAgICogW3tcbiAgICogbGFiZWw6IFwi56WW5Zu95q+N5Lqy55Sf5pelXCIsIHZhbHVlOiBbbmV3IERhdGUoXCIyMDIwLTEwLTAxXCIpLCBuZXcgRGF0ZShcIjIwMjAtMTAtMDdcIildXG4gICAqIH1dXG4gICAqL1xuICBzaG9ydGN1dHM6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGlnaHRcIl0pLFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5b2T5YmN5pel5pyf6IyD5Zu0XG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muaYr+WQpuaYvuekuuS4i+aLiemAieaLqVxuICAgKi9cbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG59XG5cblJhbmdlUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBcIlwiLFxuICBjbG9zZU9uU2VsZWN0OiBmYWxzZSxcbiAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICBkZWZhdWx0VmlzaWJsZTogbnVsbCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBkaXNhYmxlZERheXM6IG5vb3AsXG4gIGludGVudDogXCJub3JtYWxcIixcbiAgbWF4RGF0ZTogZ2V0RGVmYXVsdE1heERhdGUoKSxcbiAgbWluRGF0ZTogZ2V0RGVmYXVsdE1pbkRhdGUoKSxcbiAgb25DaGFuZ2U6IG5vb3AsXG4gIG9uRW5kRGF5U2VsZWN0OiBub29wLFxuICBvblN0YXJ0RGF5U2VsZWN0OiBub29wLFxuICBvblZpc2libGVDaGFuZ2U6IG5vb3AsXG4gIHBsYWNlaG9sZGVyOiBcIumAieaLqeaXpeacn+iMg+WbtFwiLFxuICBwbGFjZW1lbnQ6IFwiYm90dG9tTGVmdFwiLFxuICBwb3BvdmVyUHJvcHM6IHt9LFxuICBzaG9ydGN1dHM6IHVuZGVmaW5lZCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB0aGVtZTogbnVsbCxcbiAgdmFsdWU6IG51bGwsXG4gIHZpc2libGU6IG51bGwsXG59XG5cblJhbmdlUGlja2VyLmRpc3BsYXlOYW1lID0gXCJSYW5nZVBpY2tlclwiXG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlUGlja2VyXG4iXX0=