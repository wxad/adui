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
import DayPicker, { CaptionElementProps, DateUtils, NavbarElementProps } from "day-picker-react";
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
        minDate: minDate
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvUmFuZ2VQaWNrZXIudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiZm9yd2FyZFJlZiIsInVzZUNvbnRleHQiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwidXNlTWVtbyIsInVzZVJlZiIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIkRheVBpY2tlciIsIkNhcHRpb25FbGVtZW50UHJvcHMiLCJEYXRlVXRpbHMiLCJOYXZiYXJFbGVtZW50UHJvcHMiLCJzdHlsZXMiLCJDb25maWdDb250ZXh0IiwiZ2V0Q29tcHV0ZWRTaXplIiwiSWNvbiIsIklucHV0IiwiUG9wb3ZlciIsIkNhcHRpb24iLCJOYXZiYXIiLCJTaG9ydGN1dHMiLCJNT05USFMiLCJXRUVLREFZU19MT05HIiwiV0VFS0RBWVNfU0hPUlQiLCJnZXREZWZhdWx0TWF4RGF0ZSIsImdldERlZmF1bHRNaW5EYXRlIiwiaXNMZWdhbERhdGVSYW5nZVN0cmluZyIsImNvbnZlcnREYXRlVG9TdHJpbmciLCJjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmciLCJpc0RheUluUmFuZ2UiLCJwcmVmaXgiLCJub29wIiwiUmFuZ2VQaWNrZXIiLCJyZWYiLCJjbGFzc05hbWUiLCJjbG9zZU9uU2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiZGVmYXVsdFZpc2libGUiLCJkaXNhYmxlZCIsImRpc2FibGVkRGF5cyIsImludGVudCIsIm1heERhdGUiLCJtaW5EYXRlIiwib25DaGFuZ2UiLCJvbkVuZERheVNlbGVjdCIsIm9uU3RhcnREYXlTZWxlY3QiLCJvblZpc2libGVDaGFuZ2UiLCJwbGFjZWhvbGRlciIsInBsYWNlbWVudCIsInBvcG92ZXJQcm9wcyIsInNob3J0Y3V0cyIsInNpemVQcm9wIiwic2l6ZSIsInRoZW1lIiwidmFsdWVQcm9wIiwidmFsdWUiLCJ2aXNpYmxlUHJvcCIsInZpc2libGUiLCJvdGhlclByb3BzIiwiZ2V0SW5pdGlhbFN0YXRlIiwicmFuZ2VWYWx1ZSIsImZyb20iLCJ0byIsInVuZGVmaW5lZCIsIm1vbnRoIiwiaW5pdGlhbFN0YXRlIiwiZW50ZXJlZFRvIiwic2V0RW50ZXJlZFRvIiwic2V0RnJvbSIsInNldFRvIiwic2V0TW9udGgiLCJwcmV2VmFsdWVQcm9wIiwic2V0UHJldlZhbHVlUHJvcCIsInNldFJhbmdlVmFsdWUiLCJzZXRWaXNpYmxlIiwiaW5wdXRSZWYiLCJkYXlQaWNrZXJSZWYiLCJzaXplQ29udGV4dCIsImNsYXNzU2V0IiwiZnJvbUZpbmFsIiwiZW50ZXJlZFRvRmluYWwiLCJpc1JldmVyc2UiLCJpc0RheUFmdGVyIiwic2VsZWN0ZWREYXlzIiwibW9kaWZpZXJzIiwiZGF5Iiwic2hvcnRjdXRzRW5hYmxlZCIsImxlbmd0aCIsInJhbmdlIiwiaXNEYXlEaXNhYmxlZCIsImlzRGF5QmVmb3JlIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsImJvb2wiLCJpbnB1dEVsZW1lbnQiLCJjdXJyZW50IiwiaW5wdXQiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwibmV3VmFsIiwicmFuZ2VSZXNldCIsInNwbGl0IiwiRGF0ZSIsImlzU2VsZWN0aW5nRmlyc3REYXkiLCJmcm9tQXJnIiwidG9BcmciLCJpc1JhbmdlU2VsZWN0ZWQiLCJoYW5kbGVEYXlDbGljayIsIm5ld1JhbmdlIiwiZnJvbVN0ciIsInRvU3RyIiwibmV3UmFuZ2VWYWx1ZSIsImhhbmRsZURheU1vdXNlRW50ZXIiLCJoYW5kbGVEYXlNb3VzZUxlYXZlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWwiLCJ0cmltIiwicmFuZ2VWYWx1ZVN0cnMiLCJuZXdGcm9tIiwibmV3VG8iLCJpc1NhbWVEYXkiLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlSW5wdXRLZXlEb3duIiwia2V5Q29kZSIsImtleXMiLCJpbmNsdWRlcyIsImJsdXIiLCJoYW5kbGVNb250aENoYW5nZSIsImRhdGUiLCJlIiwiY3VycmVudFRhcmdldCIsInRhcmdldFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJkYXlQaWNrZXJSZWN0IiwiZGF5UGlja2VyIiwibmFtZSIsImxlZnQiLCJ3aWR0aCIsImdldE1vbnRoIiwibmV3TW9udGgiLCJ2YWx1ZVNob3J0Y3V0IiwiQXJyYXkiLCJpc0FycmF5IiwiZnJvbVNob3J0Y3V0IiwidG9TaG9ydGN1dCIsImdldERhdGUiLCJtYXhXaWR0aCIsInByb3BUeXBlcyIsInN0cmluZyIsImFueSIsImZ1bmMiLCJvbmVPZiIsImluc3RhbmNlT2YiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxLQUFQLElBQ0VDLFVBREYsRUFFRUMsVUFGRixFQUdFQyxtQkFIRixFQUlFQyxPQUpGLEVBS0VDLE1BTEYsRUFNRUMsUUFORixRQU9PLE9BUFA7QUFRQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLFNBQVAsSUFDRUMsbUJBREYsRUFFRUMsU0FGRixFQUdFQyxrQkFIRixRQUlPLGtCQUpQO0FBS0EsT0FBTyxTQUFQO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixjQUFuQjtBQUNBLFNBQVNDLGFBQVQsRUFBd0JDLGVBQXhCLFFBQStDLG9CQUEvQztBQUNBLE9BQU9DLElBQVAsTUFBaUIsU0FBakI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLFVBQWxCO0FBRUEsT0FBT0MsT0FBUCxNQUF1QyxZQUF2QztBQUNBLE9BQU9DLE9BQVAsTUFBb0IsV0FBcEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFVBQW5CO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixhQUF0QjtBQUNBLFNBQ0VDLE1BREYsRUFFRUMsYUFGRixFQUdFQyxjQUhGLEVBSUVDLGlCQUpGLEVBS0VDLGlCQUxGLEVBTUVDLHNCQU5GLEVBT0VDLG1CQVBGLEVBUUVDLHdCQVJGLEVBU0VDLFlBVEYsUUFVTyxRQVZQO0FB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QWdCLEVBQUVkLElBWk87QUFhekJlLEVBQUFBLGVBQWUsRUFBRWYsSUFiUTtBQWN6QmdCLEVBQUFBLFdBQVcsRUFBRSxRQWRZO0FBZXpCQyxFQUFBQSxTQUFTLEVBQUUsWUFmYztBQWdCekJDLEVBQUFBLFlBQVksRUFBRSxFQWhCVztBQWlCekJDLEVBQUFBLFNBQVMsRUFBRWEsU0FqQmM7QUFrQnpCWCxFQUFBQSxJQUFJLEVBQUUsT0FsQm1CO0FBbUJ6QkMsRUFBQUEsS0FBSyxFQUFFLElBbkJrQjtBQW9CekJFLEVBQUFBLEtBQUssRUFBRSxJQXBCa0I7QUFxQnpCRSxFQUFBQSxPQUFPLEVBQUU7QUFyQmdCLENBQTNCO0FBd0JBekIsV0FBVyxDQUFDNEgsV0FBWixHQUEwQixhQUExQjtBQUVBLGVBQWU1SCxXQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IFJlYWN0LCB7XG4gIGZvcndhcmRSZWYsXG4gIHVzZUNvbnRleHQsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZU1lbW8sXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBEYXlQaWNrZXIsIHtcbiAgQ2FwdGlvbkVsZW1lbnRQcm9wcyxcbiAgRGF0ZVV0aWxzLFxuICBOYXZiYXJFbGVtZW50UHJvcHMsXG59IGZyb20gXCJkYXktcGlja2VyLXJlYWN0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jbGFzc05hbWVzXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dFwiXG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tIFwiLi4vcG9wLXRyaWdnZXJcIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBDYXB0aW9uIGZyb20gXCIuL0NhcHRpb25cIlxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIlxuaW1wb3J0IFNob3J0Y3V0cyBmcm9tIFwiLi9TaG9ydGN1dHNcIlxuaW1wb3J0IHtcbiAgTU9OVEhTLFxuICBXRUVLREFZU19MT05HLFxuICBXRUVLREFZU19TSE9SVCxcbiAgZ2V0RGVmYXVsdE1heERhdGUsXG4gIGdldERlZmF1bHRNaW5EYXRlLFxuICBpc0xlZ2FsRGF0ZVJhbmdlU3RyaW5nLFxuICBjb252ZXJ0RGF0ZVRvU3RyaW5nLFxuICBjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcsXG4gIGlzRGF5SW5SYW5nZSxcbn0gZnJvbSBcIi4vY29yZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1kYXRlXCJcblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJhbmdlUGlja2VyUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKblnKjpgInmi6nlkI7vvIzmtojlpLEgUG9wb3ZlclxuICAgKi9cbiAgY2xvc2VPblNlbGVjdD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8mum7mOiupOaXpeacn+iMg+WbtFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlPzogW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF0gfCBudWxsXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrpu5jorqTmmK/lkKbmmL7npLrkuIvmi4lcbiAgICovXG4gIGRlZmF1bHRWaXNpYmxlPzogYm9vbGVhbiB8IG51bGxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDnpoHmraLpgInmi6nnmoTlpKnvvIxkYXkgPT4gYm9vbO+8m+avj+S4gOWkqeaYr+eahOaXtumXtOS4uiAxMjowMDowMO+8jOi/meS4gOS4quaYr+eUsSBkYXktcGlja2VyLXJlYWN0IOWGs+WumueahO+8m1xuICAgKiDmr5TovoPml6XmnJ/nmoTml7blgJnlsI/lv4Pov5nkuIDngrnjgIJcbiAgICovXG4gIGRpc2FibGVkRGF5cz86IChkYXRlOiBEYXRlKSA9PiBib29sZWFuIHwgdm9pZFxuICAvKipcbiAgICog6K6+572u6L6T5YWl5qGG57G75Z6LXG4gICAqL1xuICBpbnRlbnQ/OiBcIm5vcm1hbFwiIHwgXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiIHwgXCJkYW5nZXJcIlxuICAvKipcbiAgICog5pyA5aSn6ZmQ5Yi25pel5pyfXG4gICAqL1xuICBtYXhEYXRlPzogRGF0ZVxuICAvKipcbiAgICog5pyA5bCP6ZmQ5Yi25pel5pyfXG4gICAqL1xuICBtaW5EYXRlPzogRGF0ZVxuICAvKipcbiAgICog5pel5pyf5pS55Y+Y5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKGRhdGU6IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDnrKzkuozmrKHngrnlh7vkuobml6XmnJ/ml7bnmoQgaGFuZGxlcu+8jOWNs+e7k+adn+mAieaLqVxuICAgKi9cbiAgb25FbmREYXlTZWxlY3Q/OiAoZGF0ZTogRGF0ZSkgPT4gdm9pZFxuICAvKipcbiAgICog56ys5LiA5qyh54K55Ye75LqG5pel5pyf5pe255qEIGhhbmRsZXLvvIzljbPlvIDlp4vpgInmi6nvvIjlj6/ku6XlnKjmraTml7borr7nva4gbWF4RGF0ZSBtaW5EYXRl77yM5a6e546w5o6n5Yi25pel5pyf6YCJ5oup6IyD5Zu055qE5Yqf6IO977yJXG4gICAqL1xuICBvblN0YXJ0RGF5U2VsZWN0PzogKGRhdGU6IERhdGUpID0+IHZvaWRcbiAgLyoqXG4gICAqIOaYvuekuueKtuaAgeWPkeeUn+WPmOWMluaXtueahGhhbmRsZXJcbiAgICovXG4gIG9uVmlzaWJsZUNoYW5nZT86ICh2aXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDljaDkvY3lrZfnrKZcbiAgICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gIC8qKlxuICAgKiDlvLnlh7rlsYLkvY3nva5cbiAgICovXG4gIHBsYWNlbWVudD86IFBsYWNlbWVudFxuICAvKipcbiAgICog5Lyg5YWlIFBvcG92ZXIg55qEIHByb3BzXG4gICAqL1xuICBwb3BvdmVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIC8qKlxuICAgKiDlv6vmjbfpgInmi6npobnvvIzmoLzlvI/vvJpcbiAgICogW3tcbiAgICogbGFiZWw6IFwi56WW5Zu95q+N5Lqy55Sf5pelXCIsIHZhbHVlOiBbbmV3IERhdGUoXCIyMDIwLTEwLTAxXCIpLCBuZXcgRGF0ZShcIjIwMjAtMTAtMDdcIildXG4gICAqIH1dXG4gICAqL1xuICBzaG9ydGN1dHM/OiB7XG4gICAgLyoqXG4gICAgICog6K+l6aG555qE5paH5a2XXG4gICAgICovXG4gICAgbGFiZWw6IFJlYWN0LlJlYWN0Tm9kZVxuICAgIC8qKlxuICAgICAqIOivpemhueeahOaXpeacn1xuICAgICAqL1xuICAgIHZhbHVlOiBbRGF0ZSB8IG51bGwgfCB1bmRlZmluZWQsIERhdGUgfCBudWxsIHwgdW5kZWZpbmVkXVxuICB9W11cbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog6K6+572u5Li76aKYXG4gICAqL1xuICB0aGVtZT86IG51bGwgfCBcImxpZ2h0XCJcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muW9k+WJjeaXpeacn+iMg+WbtFxuICAgKi9cbiAgdmFsdWU/OiBbRGF0ZSB8IG51bGwgfCB1bmRlZmluZWQsIERhdGUgfCBudWxsIHwgdW5kZWZpbmVkXSB8IG51bGxcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muaYr+WQpuaYvuekuuS4i+aLiemAieaLqVxuICAgKi9cbiAgdmlzaWJsZT86IGJvb2xlYW4gfCBudWxsXG59XG5cbi8qKlxuICog5pel5pyf6YCJ5oup5Zmo55So5LqO5LqG6Kej5b2T5YmN5bey6YCJ5pel5pyf77yM6YCJ5oup5oiW6L6T5YWl6ZyA6KaB55qE5pel5pyf44CB5pel5pyf6IyD5Zu0562J44CCXG4gKi9cbmNvbnN0IFJhbmdlUGlja2VyOiBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICBJUmFuZ2VQaWNrZXJQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55PlxuPiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjbG9zZU9uU2VsZWN0LFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZGVmYXVsdFZpc2libGUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkRGF5cyxcbiAgICAgIGludGVudCxcbiAgICAgIG1heERhdGUsXG4gICAgICBtaW5EYXRlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbkVuZERheVNlbGVjdCxcbiAgICAgIG9uU3RhcnREYXlTZWxlY3QsXG4gICAgICBvblZpc2libGVDaGFuZ2UsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHBvcG92ZXJQcm9wcyxcbiAgICAgIHNob3J0Y3V0cyxcbiAgICAgIHNpemU6IHNpemVQcm9wLFxuICAgICAgdGhlbWUsXG4gICAgICB2YWx1ZTogdmFsdWVQcm9wLFxuICAgICAgdmlzaWJsZTogdmlzaWJsZVByb3AsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSVJhbmdlUGlja2VyUHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIC8qKlxuICAgICAqIHNlbGVjdGVkRGF5IOS4uuS8oOe7mSBEYXlQaWNrZXIg55qE5pyA57uIIERhdGUgT2JqZWN077yMXG4gICAgICogdmFsdWUg5Li6IGlucHV0IOeahOi+k+WFpSBTdHJpbmfjgIJcbiAgICAgKi9cbiAgICBjb25zdCBnZXRJbml0aWFsU3RhdGUgPSAoKSA9PiB7XG4gICAgICBsZXQgcmFuZ2VWYWx1ZSA9IFwiXCJcbiAgICAgIGxldCBmcm9tXG4gICAgICBsZXQgdG9cbiAgICAgIGlmICh2YWx1ZVByb3AgIT09IG51bGwgJiYgdmFsdWVQcm9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgO1tmcm9tLCB0b10gPSB2YWx1ZVByb3BcbiAgICAgICAgcmFuZ2VWYWx1ZSA9IGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyh2YWx1ZVByb3ApXG4gICAgICB9IGVsc2UgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gbnVsbCAmJiBkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICA7W2Zyb20sIHRvXSA9IGRlZmF1bHRWYWx1ZVxuICAgICAgICByYW5nZVZhbHVlID0gY29udmVydERhdGVSYW5nZVRvU3RyaW5nKGRlZmF1bHRWYWx1ZSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZnJvbSxcbiAgICAgICAgbW9udGg6IGZyb20sXG4gICAgICAgIHJhbmdlVmFsdWUsXG4gICAgICAgIHRvLFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHVzZU1lbW8oZ2V0SW5pdGlhbFN0YXRlLCBbXSlcblxuICAgIGNvbnN0IFtlbnRlcmVkVG8sIHNldEVudGVyZWRUb10gPSB1c2VTdGF0ZTxEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZD4obnVsbClcbiAgICBjb25zdCBbZnJvbSwgc2V0RnJvbV0gPSB1c2VTdGF0ZTxEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZD4oaW5pdGlhbFN0YXRlLmZyb20pXG4gICAgY29uc3QgW3RvLCBzZXRUb10gPSB1c2VTdGF0ZTxEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZD4oaW5pdGlhbFN0YXRlLnRvKVxuICAgIGNvbnN0IFttb250aCwgc2V0TW9udGhdID0gdXNlU3RhdGU8RGF0ZSB8IG51bGwgfCB1bmRlZmluZWQ+KFxuICAgICAgaW5pdGlhbFN0YXRlLm1vbnRoXG4gICAgKVxuICAgIGNvbnN0IFtwcmV2VmFsdWVQcm9wLCBzZXRQcmV2VmFsdWVQcm9wXSA9IHVzZVN0YXRlPFxuICAgICAgW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF0gfCBudWxsIHwgdW5kZWZpbmVkXG4gICAgPih2YWx1ZVByb3ApXG4gICAgY29uc3QgW3JhbmdlVmFsdWUsIHNldFJhbmdlVmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihcbiAgICAgIGluaXRpYWxTdGF0ZS5yYW5nZVZhbHVlXG4gICAgKVxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KCgpID0+IHtcbiAgICAgIGlmICh2aXNpYmxlUHJvcCAhPT0gbnVsbCAmJiB2aXNpYmxlUHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB2aXNpYmxlUHJvcFxuICAgICAgfVxuICAgICAgaWYgKGRlZmF1bHRWaXNpYmxlICE9PSBudWxsICYmIGRlZmF1bHRWaXNpYmxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWaXNpYmxlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICAgIGlmIChcbiAgICAgIHZhbHVlUHJvcCAhPT0gbnVsbCAmJlxuICAgICAgdmFsdWVQcm9wICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHZhbHVlUHJvcCAhPT0gcHJldlZhbHVlUHJvcFxuICAgICkge1xuICAgICAgc2V0RnJvbSh2YWx1ZVByb3BbMF0pXG4gICAgICBzZXRUbyh2YWx1ZVByb3BbMV0pXG4gICAgICBzZXRSYW5nZVZhbHVlKGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyh2YWx1ZVByb3ApKVxuICAgICAgc2V0UHJldlZhbHVlUHJvcCh2YWx1ZVByb3ApXG4gICAgfVxuICAgIGlmICh2aXNpYmxlUHJvcCAhPT0gbnVsbCAmJiB2aXNpYmxlICE9PSAhIXZpc2libGVQcm9wKSB7XG4gICAgICBzZXRWaXNpYmxlKCEhdmlzaWJsZVByb3ApXG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuICAgIGNvbnN0IGRheVBpY2tlclJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG5cbiAgICBjb25zdCB7IHNpemU6IHNpemVDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG4gICAgY29uc3Qgc2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplUHJvcCwgc2l6ZUNvbnRleHQpXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LXJhbmdlQmFzZWAsXG4gICAgICBgJHtwcmVmaXh9LSR7c2l6ZX1gXG4gICAgKVxuXG4gICAgbGV0IGZyb21GaW5hbDogRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRcbiAgICBsZXQgZW50ZXJlZFRvRmluYWwgPSB0byB8fCBlbnRlcmVkVG9cbiAgICBjb25zdCBpc1JldmVyc2UgPVxuICAgICAgZnJvbSAmJiBlbnRlcmVkVG9GaW5hbCAmJiBEYXRlVXRpbHMuaXNEYXlBZnRlcihmcm9tLCBlbnRlcmVkVG9GaW5hbClcbiAgICBpZiAoaXNSZXZlcnNlKSB7XG4gICAgICBmcm9tRmluYWwgPSBlbnRlcmVkVG9GaW5hbFxuICAgICAgZW50ZXJlZFRvRmluYWwgPSBmcm9tXG4gICAgfSBlbHNlIHtcbiAgICAgIGZyb21GaW5hbCA9IGZyb21cbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZERheXMgPSBbXG4gICAgICBmcm9tRmluYWwsXG4gICAgICB7XG4gICAgICAgIGZyb206IGZyb21GaW5hbCxcbiAgICAgICAgdG86IGVudGVyZWRUb0ZpbmFsLFxuICAgICAgfSxcbiAgICBdXG4gICAgY29uc3QgbW9kaWZpZXJzID0ge1xuICAgICAgW2Ake3ByZWZpeH0tcmFuZ2VTdGFydGBdOiBpc1JldmVyc2UgPyB0byAmJiBmcm9tRmluYWwgOiBmcm9tRmluYWwsXG4gICAgICBbYCR7cHJlZml4fS1yYW5nZVN0YXJ0SG92ZXJgXTogaXNSZXZlcnNlICYmICF0byAmJiBmcm9tRmluYWwsXG4gICAgICBbYCR7cHJlZml4fS1yYW5nZUVuZGBdOiBpc1JldmVyc2UgPyBlbnRlcmVkVG9GaW5hbCA6IHRvICYmIGVudGVyZWRUb0ZpbmFsLFxuICAgICAgW2Ake3ByZWZpeH0tcmFuZ2VFbmRIb3ZlcmBdOiAhaXNSZXZlcnNlICYmICF0byAmJiBlbnRlcmVkVG9GaW5hbCxcbiAgICAgIFtgJHtwcmVmaXh9LXNlbGVjdGVkUmFuZ2VgXTogKGRheTogRGF0ZSkgPT5cbiAgICAgICAgaXNEYXlJblJhbmdlKGRheSwgW2Zyb21GaW5hbCwgZW50ZXJlZFRvRmluYWxdLCB0cnVlKSxcbiAgICB9XG5cbiAgICBjb25zdCBzaG9ydGN1dHNFbmFibGVkID0gc2hvcnRjdXRzICYmIHNob3J0Y3V0cy5sZW5ndGggPiAwXG5cbiAgICBjb25zdCByYW5nZTogW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF0gPSBbXG4gICAgICBmcm9tRmluYWwsXG4gICAgICBlbnRlcmVkVG9GaW5hbCxcbiAgICBdXG5cbiAgICBjb25zdCBpc0RheURpc2FibGVkID0gKGRheTogRGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIGRpc2FibGVkRGF5c1xuICAgICAgICA/IGRpc2FibGVkRGF5cyhkYXkpIHx8XG4gICAgICAgICAgICBEYXRlVXRpbHMuaXNEYXlCZWZvcmUoZGF5LCBtaW5EYXRlKSB8fFxuICAgICAgICAgICAgRGF0ZVV0aWxzLmlzRGF5QWZ0ZXIoZGF5LCBtYXhEYXRlKVxuICAgICAgICA6IG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVWaXNpYmxlQ2hhbmdlID0gKGJvb2w6IGJvb2xlYW4pID0+IHtcbiAgICAgIGNvbnN0IHsgaW5wdXQ6IGlucHV0RWxlbWVudCB9ID0gaW5wdXRSZWYuY3VycmVudFxuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgYWN0aXZlRWxlbWVudCB9ID0gZG9jdW1lbnRcbiAgICAgICAgaWYgKGJvb2wgfHwgKCFib29sICYmIGlucHV0RWxlbWVudCAhPT0gYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICBjb25zdCBuZXdWYWwgPSBjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcoW2Zyb20sIHRvXSlcbiAgICAgICAgICBpZiAoIWJvb2wpIHtcbiAgICAgICAgICAgIGlmICghdG8pIHtcbiAgICAgICAgICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlUmVzZXQgPSByYW5nZVZhbHVlLnNwbGl0KFwiIC0gXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRGcm9tKG5ldyBEYXRlKHJhbmdlUmVzZXRbMF0pKVxuICAgICAgICAgICAgICAgICAgc2V0VG8obmV3IERhdGUocmFuZ2VSZXNldFsxXSkpXG4gICAgICAgICAgICAgICAgfSwgMjUwKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJhbmdlVmFsdWUgIT09IG5ld1ZhbCkge1xuICAgICAgICAgICAgICBzZXRSYW5nZVZhbHVlKG5ld1ZhbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgICAgb25WaXNpYmxlQ2hhbmdlKGJvb2wpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2aXNpYmxlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0VmlzaWJsZShib29sKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICBjb25zdCBpc1NlbGVjdGluZ0ZpcnN0RGF5ID0gKFxuICAgICAgZnJvbUFyZz86IERhdGUgfCBudWxsLFxuICAgICAgdG9Bcmc/OiBEYXRlIHwgbnVsbFxuICAgICkgPT4ge1xuICAgICAgY29uc3QgaXNSYW5nZVNlbGVjdGVkID0gZnJvbUFyZyAmJiB0b0FyZ1xuICAgICAgcmV0dXJuICFmcm9tQXJnIHx8IGlzUmFuZ2VTZWxlY3RlZFxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZURheUNsaWNrID0gKGRheTogRGF0ZSkgPT4ge1xuICAgICAgaWYgKGlzU2VsZWN0aW5nRmlyc3REYXkoZnJvbSwgdG8pKSB7XG4gICAgICAgIGlmIChvblN0YXJ0RGF5U2VsZWN0KSB7XG4gICAgICAgICAgb25TdGFydERheVNlbGVjdChkYXkpXG4gICAgICAgIH1cbiAgICAgICAgc2V0RW50ZXJlZFRvKG51bGwpXG4gICAgICAgIHNldEZyb20oZGF5KVxuICAgICAgICBzZXRUbyhudWxsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG9uRW5kRGF5U2VsZWN0KSB7XG4gICAgICAgICAgb25FbmREYXlTZWxlY3QoZGF5KVxuICAgICAgICB9XG4gICAgICAgIGxldCBuZXdSYW5nZTogW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF1cbiAgICAgICAgY29uc3QgZnJvbVN0ciA9IGNvbnZlcnREYXRlVG9TdHJpbmcoZnJvbSlcbiAgICAgICAgY29uc3QgdG9TdHIgPSBjb252ZXJ0RGF0ZVRvU3RyaW5nKGRheSlcbiAgICAgICAgbGV0IG5ld1JhbmdlVmFsdWUgPSBcIlwiXG4gICAgICAgIGlmIChEYXRlVXRpbHMuaXNEYXlBZnRlcihkYXksIGZyb20pKSB7XG4gICAgICAgICAgbmV3UmFuZ2UgPSBbZnJvbSwgZGF5XVxuICAgICAgICAgIG5ld1JhbmdlVmFsdWUgPSBgJHtmcm9tU3RyfSAtICR7dG9TdHJ9YFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1JhbmdlID0gW2RheSwgZnJvbV1cbiAgICAgICAgICBuZXdSYW5nZVZhbHVlID0gYCR7dG9TdHJ9IC0gJHtmcm9tU3RyfWBcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgc2V0RW50ZXJlZFRvKGRheSlcbiAgICAgICAgICBzZXRSYW5nZVZhbHVlKG5ld1JhbmdlVmFsdWUpXG4gICAgICAgICAgc2V0VG8oZGF5KVxuICAgICAgICB9XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKG5ld1JhbmdlKVxuICAgICAgICB9XG4gICAgICAgIGlmIChjbG9zZU9uU2VsZWN0KSB7XG4gICAgICAgICAgLy8g5bu26L+f5piv5Li65LqG6K6p54q25oCB55qE5Y+Y5YyW5Zyo6KeG6KeJ5LiK5YWI6KKr5o6l5Y+XXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZShmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2aXNpYmxlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZURheU1vdXNlRW50ZXIgPSAoZGF5OiBEYXRlKSA9PiB7XG4gICAgICBpZiAoIWlzU2VsZWN0aW5nRmlyc3REYXkoZnJvbSwgdG8pKSB7XG4gICAgICAgIHNldEVudGVyZWRUbyhkYXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRGF5TW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICAgIHNldEVudGVyZWRUbyhudWxsKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKHtcbiAgICAgIHRhcmdldCxcbiAgICB9OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3QgeyB2YWx1ZTogdmFsIH0gPSB0YXJnZXRcbiAgICAgIHNldFJhbmdlVmFsdWUodmFsKVxuICAgICAgaWYgKHZhbC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldEVudGVyZWRUbyhudWxsKVxuICAgICAgICAgIHNldEZyb20obnVsbClcbiAgICAgICAgICBzZXRUbyhudWxsKVxuICAgICAgICB9XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKFt1bmRlZmluZWQsIHVuZGVmaW5lZF0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNMZWdhbERhdGVSYW5nZVN0cmluZyh2YWwpKSB7XG4gICAgICAgIGNvbnN0IHJhbmdlVmFsdWVTdHJzID0gdmFsLnNwbGl0KFwiIC0gXCIpXG4gICAgICAgIGNvbnN0IG5ld0Zyb20gPSBuZXcgRGF0ZShyYW5nZVZhbHVlU3Ryc1swXSlcbiAgICAgICAgY29uc3QgbmV3VG8gPSBuZXcgRGF0ZShyYW5nZVZhbHVlU3Ryc1sxXSlcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFpc0RheURpc2FibGVkKG5ld0Zyb20pICYmXG4gICAgICAgICAgIWlzRGF5RGlzYWJsZWQobmV3VG8pICYmXG4gICAgICAgICAgIURhdGVVdGlscy5pc0RheUJlZm9yZShuZXdUbywgbmV3RnJvbSkgJiZcbiAgICAgICAgICAhKFxuICAgICAgICAgICAgRGF0ZVV0aWxzLmlzU2FtZURheShmcm9tLCBuZXdGcm9tKSAmJiBEYXRlVXRpbHMuaXNTYW1lRGF5KHRvLCBuZXdUbylcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNldEZyb20obmV3RnJvbSlcbiAgICAgICAgICAgIHNldFRvKG5ld1RvKVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDkv67mlLnml6XmnJ/lkI7nmoQgbW9udGgg6Lez6L2sXG4gICAgICAgICAgaWYgKCFEYXRlVXRpbHMuaXNTYW1lRGF5KGZyb20sIG5ld0Zyb20pKSB7XG4gICAgICAgICAgICBzZXRNb250aChuZXdGcm9tKVxuICAgICAgICAgIH0gZWxzZSBpZiAoIURhdGVVdGlscy5pc1NhbWVEYXkodG8sIG5ld1RvKSkge1xuICAgICAgICAgICAgc2V0TW9udGgobmV3VG8pXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgb25DaGFuZ2UoW25ld0Zyb20sIG5ld1RvXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dEZvY3VzID0gKCkgPT4ge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICBvblZpc2libGVDaGFuZ2UodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlzaWJsZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICBzZXRWaXNpYmxlKHRydWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dEtleURvd24gPSAoe1xuICAgICAga2V5Q29kZSxcbiAgICB9OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBjb25zdCBrZXlzID0gWzksIDEzLCAyN11cbiAgICAgIGlmIChrZXlzLmluY2x1ZGVzKGtleUNvZGUpKSB7XG4gICAgICAgIGhhbmRsZVZpc2libGVDaGFuZ2UoZmFsc2UpXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuaW5wdXQuYmx1cigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTW9udGhDaGFuZ2UgPSAoXG4gICAgICBkYXRlOiBEYXRlLFxuICAgICAgZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PlxuICAgICkgPT4ge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0OiB0YXJnZXQgfSA9IGVcbiAgICAgICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRhcmdldCAmJiB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgY29uc3QgZGF5UGlja2VyUmVjdCA9IGRheVBpY2tlclJlZi5jdXJyZW50LmRheVBpY2tlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0YXJnZXQubmFtZSA9PT0gXCJtb250aFwiICYmXG4gICAgICAgICAgKHRhcmdldFJlY3QubGVmdCAtIGRheVBpY2tlclJlY3QubGVmdCkgKiAyID4gZGF5UGlja2VyUmVjdC53aWR0aFxuICAgICAgICApIHtcbiAgICAgICAgICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSAtIDEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBuZXdNb250aCA9IGRhdGVcbiAgICAgIGlmIChEYXRlVXRpbHMuaXNEYXlBZnRlcihkYXRlLCBtYXhEYXRlKSkge1xuICAgICAgICBpZiAobWF4RGF0ZSkge1xuICAgICAgICAgIG5ld01vbnRoID0gbWF4RGF0ZVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKERhdGVVdGlscy5pc0RheUJlZm9yZShkYXRlLCBtaW5EYXRlKSkge1xuICAgICAgICBpZiAobWluRGF0ZSkge1xuICAgICAgICAgIG5ld01vbnRoID0gbWluRGF0ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRNb250aChuZXdNb250aClcbiAgICB9XG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICAgIGlucHV0OiBpbnB1dFJlZi5jdXJyZW50LFxuICAgICAgaGFuZGxlRGF5Q2xpY2ssXG4gICAgICBoYW5kbGVWaXNpYmxlQ2hhbmdlLFxuICAgIH0pKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BvdmVyXG4gICAgICAgIGFycm93ZWQ9e2ZhbHNlfVxuICAgICAgICBvblZpc2libGVDaGFuZ2U9e2hhbmRsZVZpc2libGVDaGFuZ2V9XG4gICAgICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICBwb3B1cD17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcG9wdXBgfT5cbiAgICAgICAgICAgIHtzaG9ydGN1dHNFbmFibGVkICYmIChcbiAgICAgICAgICAgICAgPFNob3J0Y3V0c1xuICAgICAgICAgICAgICAgIG9uU2hvcnRjdXRDbGljaz17KHZhbHVlU2hvcnRjdXQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlU2hvcnRjdXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyb21TaG9ydGN1dCA9IHZhbHVlU2hvcnRjdXRbMF1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9TaG9ydGN1dCA9IHZhbHVlU2hvcnRjdXRbMV1cbiAgICAgICAgICAgICAgICAgICAgc2V0RnJvbShmcm9tU2hvcnRjdXQpXG4gICAgICAgICAgICAgICAgICAgIHNldE1vbnRoKGZyb21TaG9ydGN1dClcbiAgICAgICAgICAgICAgICAgICAgc2V0VG8odG9TaG9ydGN1dClcbiAgICAgICAgICAgICAgICAgICAgc2V0UmFuZ2VWYWx1ZShjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcodmFsdWVTaG9ydGN1dCkpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UodmFsdWVTaG9ydGN1dClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbG9zZU9uU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8g5bu26L+f5piv5Li65LqG6K6p54q25oCB55qE5Y+Y5YyW5Zyo6KeG6KeJ5LiK5YWI6KKr5o6l5Y+XXG4gICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtyYW5nZX1cbiAgICAgICAgICAgICAgICBzaG9ydGN1dHM9e3Nob3J0Y3V0c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8RGF5UGlja2VyXG4gICAgICAgICAgICAgIHJlZj17ZGF5UGlja2VyUmVmfVxuICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocz17Mn1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtpc0RheURpc2FibGVkfVxuICAgICAgICAgICAgICBmcm9tTW9udGg9e21pbkRhdGV9XG4gICAgICAgICAgICAgIHRvTW9udGg9e21heERhdGV9XG4gICAgICAgICAgICAgIGNhbkNoYW5nZU1vbnRoXG4gICAgICAgICAgICAgIGNsYXNzTmFtZXM9e3N0eWxlc31cbiAgICAgICAgICAgICAgbW9udGg9e21vbnRofVxuICAgICAgICAgICAgICBtb250aHM9e01PTlRIU31cbiAgICAgICAgICAgICAgd2Vla2RheXNMb25nPXtXRUVLREFZU19MT05HfVxuICAgICAgICAgICAgICB3ZWVrZGF5c1Nob3J0PXtXRUVLREFZU19TSE9SVH1cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtzZWxlY3RlZERheXN9XG4gICAgICAgICAgICAgIG5hdmJhckVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgIDxOYXZiYXJcbiAgICAgICAgICAgICAgICAgIG1heERhdGU9e21heERhdGV9XG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXttaW5EYXRlfVxuICAgICAgICAgICAgICAgICAgey4uLk5hdmJhckVsZW1lbnRQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhcHRpb25FbGVtZW50PXtcbiAgICAgICAgICAgICAgICA8Q2FwdGlvblxuICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17bWF4RGF0ZX1cbiAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e21pbkRhdGV9XG4gICAgICAgICAgICAgICAgICBvbkRhdGVDaGFuZ2U9e2hhbmRsZU1vbnRoQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgey4uLkNhcHRpb25FbGVtZW50UHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkRheU1vdXNlRW50ZXI9e2hhbmRsZURheU1vdXNlRW50ZXJ9XG4gICAgICAgICAgICAgIG9uRGF5TW91c2VMZWF2ZT17aGFuZGxlRGF5TW91c2VMZWF2ZX1cbiAgICAgICAgICAgICAgb25EYXlDbGljaz17aGFuZGxlRGF5Q2xpY2t9XG4gICAgICAgICAgICAgIHJlbmRlckRheT17KGRheTogRGF0ZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNlbGxgfT57ZGF5LmdldERhdGUoKX08L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHBvcHVwU3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogc2hvcnRjdXRzRW5hYmxlZCA/IFwiNTc2cHhcIiA6IFwiNDc2cHhcIixcbiAgICAgICAgICBtYXhXaWR0aDogc2hvcnRjdXRzRW5hYmxlZCA/IFwiNTc2cHhcIiA6IFwiNDc2cHhcIixcbiAgICAgICAgfX1cbiAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgey4uLnBvcG92ZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgaW50ZW50PXtpbnRlbnR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVJbnB1dEtleURvd259XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgcmlnaHRFbGVtZW50PXs8SWNvbiBpY29uPVwiY2FsZW5kYXItb3V0bGluZWRcIiAvPn1cbiAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICB2YWx1ZT17cmFuZ2VWYWx1ZX1cbiAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvUG9wb3Zlcj5cbiAgICApXG4gIH1cbilcblxuUmFuZ2VQaWNrZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKblnKjpgInmi6nlkI7vvIzmtojlpLEgUG9wb3ZlclxuICAgKi9cbiAgY2xvc2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrpu5jorqTml6XmnJ/ojIPlm7RcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8mum7mOiupOaYr+WQpuaYvuekuuS4i+aLiVxuICAgKi9cbiAgZGVmYXVsdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDnpoHmraLpgInmi6nnmoTlpKnvvIxkYXkgPT4gYm9vbO+8m+avj+S4gOWkqeaYr+eahOaXtumXtOS4uiAxMjowMDowMO+8jOi/meS4gOS4quaYr+eUsSBkYXktcGlja2VyLXJlYWN0IOWGs+WumueahO+8m1xuICAgKiDmr5TovoPml6XmnJ/nmoTml7blgJnlsI/lv4Pov5nkuIDngrnjgIJcbiAgICovXG4gIGRpc2FibGVkRGF5czogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDorr7nva7ovpPlhaXmoYbnsbvlnotcbiAgICovXG4gIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcIm5vcm1hbFwiLFxuICAgIFwicHJpbWFyeVwiLFxuICAgIFwic3VjY2Vzc1wiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gIF0pLFxuICAvKipcbiAgICog5pyA5aSn6ZmQ5Yi25pel5pyfXG4gICAqL1xuICBtYXhEYXRlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgLyoqXG4gICAqIOacgOWwj+mZkOWItuaXpeacn1xuICAgKi9cbiAgbWluRGF0ZTogUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIC8qKlxuICAgKiDml6XmnJ/mlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog56ys5LqM5qyh54K55Ye75LqG5pel5pyf5pe255qEIGhhbmRsZXLvvIzljbPnu5PmnZ/pgInmi6lcbiAgICovXG4gIG9uRW5kRGF5U2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOesrOS4gOasoeeCueWHu+S6huaXpeacn+aXtueahCBoYW5kbGVy77yM5Y2z5byA5aeL6YCJ5oup77yI5Y+v5Lul5Zyo5q2k5pe26K6+572uIG1heERhdGUgbWluRGF0Ze+8jOWunueOsOaOp+WItuaXpeacn+mAieaLqeiMg+WbtOeahOWKn+iDve+8iVxuICAgKi9cbiAgb25TdGFydERheVNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDmmL7npLrnirbmgIHlj5HnlJ/lj5jljJbml7bnmoRoYW5kbGVyXG4gICAqL1xuICBvblZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5Y2g5L2N5a2X56ymXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOW8ueWHuuWxguS9jee9rlxuICAgKi9cbiAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwidG9wXCIsXG4gICAgXCJsZWZ0XCIsXG4gICAgXCJyaWdodFwiLFxuICAgIFwiYm90dG9tXCIsXG4gICAgXCJ0b3BMZWZ0XCIsXG4gICAgXCJ0b3BSaWdodFwiLFxuICAgIFwiYm90dG9tTGVmdFwiLFxuICAgIFwiYm90dG9tUmlnaHRcIixcbiAgICBcImxlZnRUb3BcIixcbiAgICBcImxlZnRCb3R0b21cIixcbiAgICBcInJpZ2h0VG9wXCIsXG4gICAgXCJyaWdodEJvdHRvbVwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOS8oOWFpSBQb3BvdmVyIOeahCBwcm9wc1xuICAgKi9cbiAgcG9wb3ZlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog5b+r5o236YCJ5oup6aG577yM5qC85byP77yaXG4gICAqIFt7XG4gICAqIGxhYmVsOiBcIuelluWbveavjeS6sueUn+aXpVwiLCB2YWx1ZTogW25ldyBEYXRlKFwiMjAyMC0xMC0wMVwiKSwgbmV3IERhdGUoXCIyMDIwLTEwLTA3XCIpXVxuICAgKiB9XVxuICAgKi9cbiAgc2hvcnRjdXRzOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog6K6+572u5Li76aKYXG4gICAqL1xuICB0aGVtZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCBcImxpZ2h0XCJdKSxcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muW9k+WJjeaXpeacn+iMg+WbtFxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKbmmL7npLrkuIvmi4npgInmi6lcbiAgICovXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxufVxuXG5SYW5nZVBpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogXCJcIixcbiAgY2xvc2VPblNlbGVjdDogZmFsc2UsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgZGVmYXVsdFZpc2libGU6IG51bGwsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZGlzYWJsZWREYXlzOiBub29wLFxuICBpbnRlbnQ6IFwibm9ybWFsXCIsXG4gIG1heERhdGU6IGdldERlZmF1bHRNYXhEYXRlKCksXG4gIG1pbkRhdGU6IGdldERlZmF1bHRNaW5EYXRlKCksXG4gIG9uQ2hhbmdlOiBub29wLFxuICBvbkVuZERheVNlbGVjdDogbm9vcCxcbiAgb25TdGFydERheVNlbGVjdDogbm9vcCxcbiAgb25WaXNpYmxlQ2hhbmdlOiBub29wLFxuICBwbGFjZWhvbGRlcjogXCLpgInmi6nml6XmnJ/ojIPlm7RcIixcbiAgcGxhY2VtZW50OiBcImJvdHRvbUxlZnRcIixcbiAgcG9wb3ZlclByb3BzOiB7fSxcbiAgc2hvcnRjdXRzOiB1bmRlZmluZWQsXG4gIHNpemU6IFwic21hbGxcIixcbiAgdGhlbWU6IG51bGwsXG4gIHZhbHVlOiBudWxsLFxuICB2aXNpYmxlOiBudWxsLFxufVxuXG5SYW5nZVBpY2tlci5kaXNwbGF5TmFtZSA9IFwiUmFuZ2VQaWNrZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBSYW5nZVBpY2tlclxuIl19