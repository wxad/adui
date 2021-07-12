function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef, useContext, useImperativeHandle, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import DPR from "day-picker-react";
import { CaptionElementProps, DateUtils, NavbarElementProps } from "day-picker-react";
import RangePicker from "./RangePicker";
import "./style";
import styles from "./classNames";
import { ConfigContext, getComputedSize } from "../config-provider";
import Icon from "../icon";
import Input from "../input";
import Popover from "../popover";
import Caption from "./Caption";
import Navbar from "./Navbar";
import Shortcuts from "./Shortcuts";
import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT, getDefaultMaxDate, getDefaultMinDate, isLegalDateString, convertDateToString } from "./core";
var DayPicker = DPR.__esModule ? DPR.default : DPR;
var prefix = "adui-date";

var noop = function noop() {};

var DatePicker = forwardRef(function (_ref, ref) {
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
      onVisibleChange = _ref.onVisibleChange,
      placeholder = _ref.placeholder,
      placement = _ref.placement,
      popoverProps = _ref.popoverProps,
      shortcuts = _ref.shortcuts,
      sizeProp = _ref.size,
      theme = _ref.theme,
      valueProp = _ref.value,
      visibleProp = _ref.visible,
      otherProps = _objectWithoutProperties(_ref, ["className", "closeOnSelect", "defaultValue", "defaultVisible", "disabled", "disabledDays", "intent", "maxDate", "minDate", "onChange", "onVisibleChange", "placeholder", "placement", "popoverProps", "shortcuts", "size", "theme", "value", "visible"]);

  var _useState = useState(function () {
    if (valueProp !== null) {
      return valueProp;
    }

    if (defaultValue !== null) {
      return defaultValue;
    }

    return undefined;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      month = _useState2[0],
      setMonth = _useState2[1];

  var _useState3 = useState(function () {
    if (valueProp !== null) {
      return valueProp;
    }

    if (defaultValue !== null) {
      return defaultValue;
    }

    return undefined;
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedDay = _useState4[0],
      setSelectedDay = _useState4[1];

  var _useState5 = useState(function () {
    if (valueProp !== null) {
      return convertDateToString(valueProp);
    }

    if (defaultValue !== null) {
      return convertDateToString(defaultValue);
    }

    return "";
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  var _useState7 = useState(function () {
    if (visibleProp !== null && visibleProp !== undefined) {
      return visibleProp;
    }

    if (defaultVisible !== null && defaultVisible !== undefined) {
      return defaultVisible;
    }

    return false;
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      visible = _useState8[0],
      setVisible = _useState8[1];

  if (valueProp !== null && selectedDay !== valueProp) {
    setMonth(valueProp);
    setSelectedDay(valueProp);
    setValue(convertDateToString(valueProp));
  }

  if (visibleProp !== null && visible !== !!visibleProp) {
    setVisible(!!visibleProp);
  }

  var inputRef = useRef(null);

  var _useContext = useContext(ConfigContext),
      sizeContext = _useContext.size;

  var size = getComputedSize(sizeProp, sizeContext);
  var classSet = classNames(className, "".concat(prefix, "-dateBase"), "".concat(prefix, "-").concat(size));
  var shortcutsEnabled = shortcuts && shortcuts.length > 0;

  var isDayDisabled = function isDayDisabled(day) {
    return disabledDays && disabledDays(day) || DateUtils.isDayBefore(day, minDate) || DateUtils.isDayAfter(day, maxDate);
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
        var newVal = convertDateToString(selectedDay);

        if (!bool && value !== newVal) {
          setValue(newVal);
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

  var handleDayClick = function handleDayClick(selectedDayNew, _ref2) {
    var bool = _ref2.disabled;

    if (!bool) {
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

      if (!DateUtils.isSameDay(selectedDayNew, selectedDay)) {
        if (valueProp === null) {
          setSelectedDay(selectedDayNew);
          setValue(convertDateToString(selectedDayNew));
        }

        if (onChange) {
          onChange(selectedDayNew);
        }
      }
    }
  };

  var handleInputChange = function handleInputChange(_ref3) {
    var val = _ref3.target.value;
    setValue(val);

    if (val.trim() === "") {
      if (valueProp === null) {
        setSelectedDay(null);
      }

      if (onChange) {
        onChange("");
      }
    } else if (isLegalDateString(val)) {
      var newDate = new Date(val);

      if (!isDayDisabled(newDate) && !DateUtils.isSameDay(newDate, selectedDay)) {
        if (valueProp === null) {
          setSelectedDay(newDate);
          setValue(convertDateToString(newDate));

          if (!DateUtils.isSameMonth(newDate, selectedDay)) {
            setMonth(newDate);
          }
        }

        if (onChange) {
          onChange(newDate);
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

  var handleInputKeyDown = function handleInputKeyDown(_ref4) {
    var keyCode = _ref4.keyCode;
    var keys = [9, 13, 27];

    if (keys.includes(keyCode)) {
      handleVisibleChange(false);
      inputRef.current.input.blur();
    }
  };

  var handleMonthChange = function handleMonthChange(date) {
    var newDate = date;

    if (minDate && DateUtils.isDayBefore(date, minDate)) {
      newDate.setMonth(minDate.getMonth());
    } else if (maxDate && DateUtils.isDayAfter(date, maxDate)) {
      newDate.setMonth(maxDate.getMonth());
    }

    setMonth(newDate);
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
        handleDayClick(valueShortcut, {});
        setMonth(valueShortcut);
      },
      selectedDay: selectedDay,
      shortcuts: shortcuts
    }), React.createElement(DayPicker, {
      disabledDays: isDayDisabled,
      fromMonth: minDate,
      toMonth: maxDate,
      canChangeMonth: true,
      classNames: styles,
      month: month || undefined,
      months: MONTHS,
      weekdaysLong: WEEKDAYS_LONG,
      weekdaysShort: WEEKDAYS_SHORT,
      selectedDays: selectedDay || undefined,
      navbarElement: React.createElement(Navbar, _extends({
        maxDate: maxDate,
        minDate: minDate
      }, NavbarElementProps)),
      captionElement: React.createElement(Caption, _extends({
        maxDate: maxDate,
        minDate: minDate,
        onDateChange: handleMonthChange
      }, CaptionElementProps)),
      onDayClick: handleDayClick,
      onMonthChange: handleMonthChange,
      renderDay: function renderDay(day) {
        return React.createElement("div", {
          className: "".concat(prefix, "-cell")
        }, day.getDate());
      }
    })),
    popupStyle: {
      maxWidth: shortcutsEnabled ? "342px" : "242px",
      width: shortcutsEnabled ? "342px" : "242px"
    },
    trigger: "click",
    visible: visible
  }, popoverProps), React.createElement(Input, _extends({
    className: classSet,
    cleaveOptions: {
      blocks: [4, 2, 2],
      delimiter: "-"
    },
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
    value: value
  }, otherProps)));
});
DatePicker.displayName = "DatePicker";
DatePicker.RangePicker = RangePicker;
DatePicker.propTypes = {
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
DatePicker.defaultProps = {
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
  onVisibleChange: noop,
  placeholder: "选择日期",
  placement: "bottomLeft",
  popoverProps: {},
  shortcuts: undefined,
  size: "small",
  theme: null,
  value: null,
  visible: null
};
export default DatePicker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvRGF0ZVBpY2tlci50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJmb3J3YXJkUmVmIiwidXNlQ29udGV4dCIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJEUFIiLCJDYXB0aW9uRWxlbWVudFByb3BzIiwiRGF0ZVV0aWxzIiwiTmF2YmFyRWxlbWVudFByb3BzIiwiUmFuZ2VQaWNrZXIiLCJzdHlsZXMiLCJDb25maWdDb250ZXh0IiwiZ2V0Q29tcHV0ZWRTaXplIiwiSWNvbiIsIklucHV0IiwiUG9wb3ZlciIsIkNhcHRpb24iLCJOYXZiYXIiLCJTaG9ydGN1dHMiLCJNT05USFMiLCJXRUVLREFZU19MT05HIiwiV0VFS0RBWVNfU0hPUlQiLCJnZXREZWZhdWx0TWF4RGF0ZSIsImdldERlZmF1bHRNaW5EYXRlIiwiaXNMZWdhbERhdGVTdHJpbmciLCJjb252ZXJ0RGF0ZVRvU3RyaW5nIiwiRGF5UGlja2VyIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJwcmVmaXgiLCJub29wIiwiRGF0ZVBpY2tlciIsInJlZiIsImNsYXNzTmFtZSIsImNsb3NlT25TZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJkZWZhdWx0VmlzaWJsZSIsImRpc2FibGVkIiwiZGlzYWJsZWREYXlzIiwiaW50ZW50IiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJvbkNoYW5nZSIsIm9uVmlzaWJsZUNoYW5nZSIsInBsYWNlaG9sZGVyIiwicGxhY2VtZW50IiwicG9wb3ZlclByb3BzIiwic2hvcnRjdXRzIiwic2l6ZVByb3AiLCJzaXplIiwidGhlbWUiLCJ2YWx1ZVByb3AiLCJ2YWx1ZSIsInZpc2libGVQcm9wIiwidmlzaWJsZSIsIm90aGVyUHJvcHMiLCJ1bmRlZmluZWQiLCJtb250aCIsInNldE1vbnRoIiwic2VsZWN0ZWREYXkiLCJzZXRTZWxlY3RlZERheSIsInNldFZhbHVlIiwic2V0VmlzaWJsZSIsImlucHV0UmVmIiwic2l6ZUNvbnRleHQiLCJjbGFzc1NldCIsInNob3J0Y3V0c0VuYWJsZWQiLCJsZW5ndGgiLCJpc0RheURpc2FibGVkIiwiZGF5IiwiaXNEYXlCZWZvcmUiLCJpc0RheUFmdGVyIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsImJvb2wiLCJpbnB1dEVsZW1lbnQiLCJjdXJyZW50IiwiaW5wdXQiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwibmV3VmFsIiwiaGFuZGxlRGF5Q2xpY2siLCJzZWxlY3RlZERheU5ldyIsImlzU2FtZURheSIsImhhbmRsZUlucHV0Q2hhbmdlIiwidmFsIiwidGFyZ2V0IiwidHJpbSIsIm5ld0RhdGUiLCJEYXRlIiwiaXNTYW1lTW9udGgiLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlSW5wdXRLZXlEb3duIiwia2V5Q29kZSIsImtleXMiLCJpbmNsdWRlcyIsImJsdXIiLCJoYW5kbGVNb250aENoYW5nZSIsImRhdGUiLCJnZXRNb250aCIsInZhbHVlU2hvcnRjdXQiLCJnZXREYXRlIiwibWF4V2lkdGgiLCJ3aWR0aCIsImJsb2NrcyIsImRlbGltaXRlciIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwiZnVuYyIsIm9uZU9mIiwiaW5zdGFuY2VPZiIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsT0FBT0EsS0FBUCxJQUNFQyxVQURGLEVBRUVDLFVBRkYsRUFHRUMsbUJBSEYsRUFJRUMsTUFKRixFQUtFQyxRQUxGLFFBTU8sT0FOUDtBQU9BLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixrQkFBaEI7QUFDQSxTQUNFQyxtQkFERixFQUVFQyxTQUZGLEVBR0VDLGtCQUhGLFFBSU8sa0JBSlA7QUFLQSxPQUFPQyxXQUFQLE1BQXdC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ZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1kdXBsaWNhdGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuaW1wb3J0IFJlYWN0LCB7XG4gIGZvcndhcmRSZWYsXG4gIHVzZUNvbnRleHQsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBEUFIgZnJvbSBcImRheS1waWNrZXItcmVhY3RcIlxuaW1wb3J0IHtcbiAgQ2FwdGlvbkVsZW1lbnRQcm9wcyxcbiAgRGF0ZVV0aWxzLFxuICBOYXZiYXJFbGVtZW50UHJvcHMsXG59IGZyb20gXCJkYXktcGlja2VyLXJlYWN0XCJcbmltcG9ydCBSYW5nZVBpY2tlciBmcm9tIFwiLi9SYW5nZVBpY2tlclwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY2xhc3NOYW1lc1wiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRcIlxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSBcIi4uL3BvcC10cmlnZ2VyXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgQ2FwdGlvbiBmcm9tIFwiLi9DYXB0aW9uXCJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCJcbmltcG9ydCBTaG9ydGN1dHMgZnJvbSBcIi4vU2hvcnRjdXRzXCJcbmltcG9ydCB7XG4gIE1PTlRIUyxcbiAgV0VFS0RBWVNfTE9ORyxcbiAgV0VFS0RBWVNfU0hPUlQsXG4gIGdldERlZmF1bHRNYXhEYXRlLFxuICBnZXREZWZhdWx0TWluRGF0ZSxcbiAgaXNMZWdhbERhdGVTdHJpbmcsXG4gIGNvbnZlcnREYXRlVG9TdHJpbmcsXG59IGZyb20gXCIuL2NvcmVcIlxuXG5jb25zdCBEYXlQaWNrZXIgPSBEUFIuX19lc01vZHVsZSA/IERQUi5kZWZhdWx0IDogRFBSXG5jb25zdCBwcmVmaXggPSBcImFkdWktZGF0ZVwiXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0ZVBpY2tlclByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm5Zyo6YCJ5oup5ZCO77yM5raI5aSxIFBvcG92ZXJcbiAgICovXG4gIGNsb3NlT25TZWxlY3Q/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrpu5jorqTml6XmnJ9cbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IERhdGUgfCBcIlwiIHwgbnVsbFxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya6buY6K6k5piv5ZCm5pi+56S65LiL5ouJXG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZT86IGJvb2xlYW4gfCBudWxsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog56aB5q2i6YCJ5oup55qE5aSp77yMZGF5ID0+IGJvb2zvvIzmr4/kuIDlpKnmmK/nmoTml7bpl7TkuLogMTI6MDA6MDDvvIzov5nkuIDkuKrmmK/nlLEgZGF5LXBpY2tlci1yZWFjdCDlhrPlrprnmoTvvJtcbiAgICog5q+U6L6D5pel5pyf55qE5pe25YCZ5bCP5b+D6L+Z5LiA54K544CCXG4gICAqL1xuICBkaXNhYmxlZERheXM/OiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbiB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9rui+k+WFpeahhuexu+Wei1xuICAgKi9cbiAgaW50ZW50PzogXCJub3JtYWxcIiB8IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCJcbiAgLyoqXG4gICAqIOacgOWkp+mZkOWItuaXpeacn1xuICAgKi9cbiAgbWF4RGF0ZT86IERhdGUgfCBudWxsXG4gIC8qKlxuICAgKiDmnIDlsI/pmZDliLbml6XmnJ9cbiAgICovXG4gIG1pbkRhdGU/OiBEYXRlIHwgbnVsbFxuICAvKipcbiAgICog5pel5pyf5pS55Y+Y5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKGRhdGU/OiBEYXRlIHwgXCJcIiB8IG51bGwpID0+IHZvaWRcbiAgLyoqXG4gICAqIOaYvuekuueKtuaAgeWPkeeUn+WPmOWMluaXtueahGhhbmRsZXJcbiAgICovXG4gIG9uVmlzaWJsZUNoYW5nZT86ICh2aXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDljaDkvY3lrZfnrKZcbiAgICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gIC8qKlxuICAgKiDlvLnlh7rlsYLkvY3nva5cbiAgICovXG4gIHBsYWNlbWVudD86IFBsYWNlbWVudFxuICAvKipcbiAgICog5Lyg5YWlIFBvcG92ZXIg55qEIHByb3BzXG4gICAqL1xuICBwb3BvdmVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIC8qKlxuICAgKiDlv6vmjbfpgInmi6npobnvvIzmoLzlvI/vvJpbeyBsYWJlbDogXCLnpZblm73nlJ/ml6VcIiwgdmFsdWU6IG5ldyBEYXRlKFwiMjAyMC0xMC0wMVwiKSB9XVxuICAgKi9cbiAgc2hvcnRjdXRzPzoge1xuICAgIC8qKlxuICAgICAqIOivpemhueeahOaWh+Wtl1xuICAgICAqL1xuICAgIGxhYmVsOiBSZWFjdC5SZWFjdE5vZGVcbiAgICAvKipcbiAgICAgKiDor6XpobnnmoTml6XmnJ9cbiAgICAgKi9cbiAgICB2YWx1ZTogRGF0ZVxuICB9W11cblxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lPzogbnVsbCB8IFwibGlnaHRcIlxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5b2T5YmN5pel5pyfXG4gICAqL1xuICB2YWx1ZT86IERhdGUgfCBcIlwiIHwgbnVsbFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5piv5ZCm5pi+56S65LiL5ouJ6YCJ5oupXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbiB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0ZVBpY2tlclxuICBleHRlbmRzIFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gICAgSURhdGVQaWNrZXJQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55PlxuICA+IHtcbiAgUmFuZ2VQaWNrZXI6IHR5cGVvZiBSYW5nZVBpY2tlclxufVxuXG4vKipcbiAqIOaXpeacn+mAieaLqeWZqOeUqOS6juS6huino+W9k+WJjeW3sumAieaXpeacn++8jOmAieaLqeaIlui+k+WFpemcgOimgeeahOaXpeacn+OAgeaXpeacn+iMg+WbtOetieOAglxuICovXG4vLyBAdHMtaWdub3JlXG5jb25zdCBEYXRlUGlja2VyOiBJRGF0ZVBpY2tlciA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjbG9zZU9uU2VsZWN0LFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZGVmYXVsdFZpc2libGUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkRGF5cyxcbiAgICAgIGludGVudCxcbiAgICAgIG1heERhdGUsXG4gICAgICBtaW5EYXRlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvblZpc2libGVDaGFuZ2UsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHBvcG92ZXJQcm9wcyxcbiAgICAgIHNob3J0Y3V0cyxcbiAgICAgIHNpemU6IHNpemVQcm9wLFxuICAgICAgdGhlbWUsXG4gICAgICB2YWx1ZTogdmFsdWVQcm9wLFxuICAgICAgdmlzaWJsZTogdmlzaWJsZVByb3AsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSURhdGVQaWNrZXJQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgW21vbnRoLCBzZXRNb250aF0gPSB1c2VTdGF0ZTxEYXRlIHwgXCJcIiB8IHVuZGVmaW5lZD4oKCkgPT4ge1xuICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWVQcm9wXG4gICAgICB9XG4gICAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9KVxuICAgIGNvbnN0IFtzZWxlY3RlZERheSwgc2V0U2VsZWN0ZWREYXldID0gdXNlU3RhdGU8XG4gICAgICBEYXRlIHwgXCJcIiB8IG51bGwgfCB1bmRlZmluZWRcbiAgICA+KCgpID0+IHtcbiAgICAgIGlmICh2YWx1ZVByb3AgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlUHJvcFxuICAgICAgfVxuICAgICAgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlXG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfSlcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oKCkgPT4ge1xuICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY29udmVydERhdGVUb1N0cmluZyh2YWx1ZVByb3ApXG4gICAgICB9XG4gICAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0RGF0ZVRvU3RyaW5nKGRlZmF1bHRWYWx1ZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBcIlwiXG4gICAgfSlcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuPigoKSA9PiB7XG4gICAgICBpZiAodmlzaWJsZVByb3AgIT09IG51bGwgJiYgdmlzaWJsZVByb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmlzaWJsZVByb3BcbiAgICAgIH1cbiAgICAgIGlmIChkZWZhdWx0VmlzaWJsZSAhPT0gbnVsbCAmJiBkZWZhdWx0VmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmlzaWJsZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsICYmIHNlbGVjdGVkRGF5ICE9PSB2YWx1ZVByb3ApIHtcbiAgICAgIHNldE1vbnRoKHZhbHVlUHJvcClcbiAgICAgIHNldFNlbGVjdGVkRGF5KHZhbHVlUHJvcClcbiAgICAgIHNldFZhbHVlKGNvbnZlcnREYXRlVG9TdHJpbmcodmFsdWVQcm9wKSlcbiAgICB9XG4gICAgaWYgKHZpc2libGVQcm9wICE9PSBudWxsICYmIHZpc2libGUgIT09ICEhdmlzaWJsZVByb3ApIHtcbiAgICAgIHNldFZpc2libGUoISF2aXNpYmxlUHJvcClcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG5cbiAgICBjb25zdCB7IHNpemU6IHNpemVDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG4gICAgY29uc3Qgc2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplUHJvcCwgc2l6ZUNvbnRleHQpXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LWRhdGVCYXNlYCxcbiAgICAgIGAke3ByZWZpeH0tJHtzaXplfWBcbiAgICApXG5cbiAgICBjb25zdCBzaG9ydGN1dHNFbmFibGVkID0gc2hvcnRjdXRzICYmIHNob3J0Y3V0cy5sZW5ndGggPiAwXG5cbiAgICBjb25zdCBpc0RheURpc2FibGVkID0gKGRheTogRGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGRpc2FibGVkRGF5cyAmJiBkaXNhYmxlZERheXMoZGF5KSkgfHxcbiAgICAgICAgRGF0ZVV0aWxzLmlzRGF5QmVmb3JlKGRheSwgbWluRGF0ZSkgfHxcbiAgICAgICAgRGF0ZVV0aWxzLmlzRGF5QWZ0ZXIoZGF5LCBtYXhEYXRlKVxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVZpc2libGVDaGFuZ2UgPSAoYm9vbDogYm9vbGVhbikgPT4ge1xuICAgICAgY29uc3QgeyBpbnB1dDogaW5wdXRFbGVtZW50IH0gPSBpbnB1dFJlZi5jdXJyZW50XG4gICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgeyBhY3RpdmVFbGVtZW50IH0gPSBkb2N1bWVudFxuICAgICAgICBpZiAoYm9vbCB8fCAoIWJvb2wgJiYgaW5wdXRFbGVtZW50ICE9PSBhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgIGNvbnN0IG5ld1ZhbCA9IGNvbnZlcnREYXRlVG9TdHJpbmcoc2VsZWN0ZWREYXkpXG4gICAgICAgICAgaWYgKCFib29sICYmIHZhbHVlICE9PSBuZXdWYWwpIHtcbiAgICAgICAgICAgIHNldFZhbHVlKG5ld1ZhbClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgICAgb25WaXNpYmxlQ2hhbmdlKGJvb2wpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2aXNpYmxlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0VmlzaWJsZShib29sKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEYXlDbGljayA9IChcbiAgICAgIHNlbGVjdGVkRGF5TmV3OiBEYXRlLFxuICAgICAgeyBkaXNhYmxlZDogYm9vbCB9OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gICAgKSA9PiB7XG4gICAgICBpZiAoIWJvb2wpIHtcbiAgICAgICAgaWYgKGNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgICAvLyDlu7bov5/mmK/kuLrkuoborqnnirbmgIHnmoTlj5jljJblnKjop4bop4nkuIrlhYjooqvmjqXlj5dcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgb25WaXNpYmxlQ2hhbmdlKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHNldFZpc2libGUoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFEYXRlVXRpbHMuaXNTYW1lRGF5KHNlbGVjdGVkRGF5TmV3LCBzZWxlY3RlZERheSkpIHtcbiAgICAgICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZERheShzZWxlY3RlZERheU5ldylcbiAgICAgICAgICAgIHNldFZhbHVlKGNvbnZlcnREYXRlVG9TdHJpbmcoc2VsZWN0ZWREYXlOZXcpKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKHNlbGVjdGVkRGF5TmV3KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKHtcbiAgICAgIHRhcmdldDogeyB2YWx1ZTogdmFsIH0sXG4gICAgfTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIHNldFZhbHVlKHZhbClcbiAgICAgIGlmICh2YWwudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICBzZXRTZWxlY3RlZERheShudWxsKVxuICAgICAgICB9XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKFwiXCIpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNMZWdhbERhdGVTdHJpbmcodmFsKSkge1xuICAgICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUodmFsKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWlzRGF5RGlzYWJsZWQobmV3RGF0ZSkgJiZcbiAgICAgICAgICAhRGF0ZVV0aWxzLmlzU2FtZURheShuZXdEYXRlLCBzZWxlY3RlZERheSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWREYXkobmV3RGF0ZSlcbiAgICAgICAgICAgIHNldFZhbHVlKGNvbnZlcnREYXRlVG9TdHJpbmcobmV3RGF0ZSkpXG4gICAgICAgICAgICBpZiAoIURhdGVVdGlscy5pc1NhbWVNb250aChuZXdEYXRlLCBzZWxlY3RlZERheSkpIHtcbiAgICAgICAgICAgICAgc2V0TW9udGgobmV3RGF0ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICBvbkNoYW5nZShuZXdEYXRlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Rm9jdXMgPSAoKSA9PiB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZSh0cnVlKVxuICAgICAgICB9XG4gICAgICAgIGlmICh2aXNpYmxlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0S2V5RG93biA9ICh7XG4gICAgICBrZXlDb2RlLFxuICAgIH06IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IGtleXMgPSBbOSwgMTMsIDI3XVxuICAgICAgaWYgKGtleXMuaW5jbHVkZXMoa2V5Q29kZSkpIHtcbiAgICAgICAgaGFuZGxlVmlzaWJsZUNoYW5nZShmYWxzZSlcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5pbnB1dC5ibHVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVNb250aENoYW5nZSA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgICBjb25zdCBuZXdEYXRlID0gZGF0ZVxuICAgICAgaWYgKG1pbkRhdGUgJiYgRGF0ZVV0aWxzLmlzRGF5QmVmb3JlKGRhdGUsIG1pbkRhdGUpKSB7XG4gICAgICAgIG5ld0RhdGUuc2V0TW9udGgobWluRGF0ZS5nZXRNb250aCgpKVxuICAgICAgfSBlbHNlIGlmIChtYXhEYXRlICYmIERhdGVVdGlscy5pc0RheUFmdGVyKGRhdGUsIG1heERhdGUpKSB7XG4gICAgICAgIG5ld0RhdGUuc2V0TW9udGgobWF4RGF0ZS5nZXRNb250aCgpKVxuICAgICAgfVxuICAgICAgc2V0TW9udGgobmV3RGF0ZSlcbiAgICB9XG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICAgIGlucHV0OiBpbnB1dFJlZi5jdXJyZW50LFxuICAgICAgaGFuZGxlRGF5Q2xpY2ssXG4gICAgICBoYW5kbGVWaXNpYmxlQ2hhbmdlLFxuICAgIH0pKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BvdmVyXG4gICAgICAgIGFycm93ZWQ9e2ZhbHNlfVxuICAgICAgICBvblZpc2libGVDaGFuZ2U9e2hhbmRsZVZpc2libGVDaGFuZ2V9XG4gICAgICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICBwb3B1cD17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcG9wdXBgfT5cbiAgICAgICAgICAgIHtzaG9ydGN1dHNFbmFibGVkICYmIChcbiAgICAgICAgICAgICAgPFNob3J0Y3V0c1xuICAgICAgICAgICAgICAgIG9uU2hvcnRjdXRDbGljaz17KHZhbHVlU2hvcnRjdXQ6IERhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGhhbmRsZURheUNsaWNrKHZhbHVlU2hvcnRjdXQsIHt9KVxuICAgICAgICAgICAgICAgICAgc2V0TW9udGgodmFsdWVTaG9ydGN1dClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRGF5PXtzZWxlY3RlZERheX1cbiAgICAgICAgICAgICAgICBzaG9ydGN1dHM9e3Nob3J0Y3V0c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8RGF5UGlja2VyXG4gICAgICAgICAgICAgIGRpc2FibGVkRGF5cz17aXNEYXlEaXNhYmxlZH1cbiAgICAgICAgICAgICAgZnJvbU1vbnRoPXttaW5EYXRlfVxuICAgICAgICAgICAgICB0b01vbnRoPXttYXhEYXRlfVxuICAgICAgICAgICAgICBjYW5DaGFuZ2VNb250aFxuICAgICAgICAgICAgICBjbGFzc05hbWVzPXtzdHlsZXN9XG4gICAgICAgICAgICAgIG1vbnRoPXttb250aCB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIG1vbnRocz17TU9OVEhTfVxuICAgICAgICAgICAgICB3ZWVrZGF5c0xvbmc9e1dFRUtEQVlTX0xPTkd9XG4gICAgICAgICAgICAgIHdlZWtkYXlzU2hvcnQ9e1dFRUtEQVlTX1NIT1JUfVxuICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e3NlbGVjdGVkRGF5IHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgbmF2YmFyRWxlbWVudD17XG4gICAgICAgICAgICAgICAgPE5hdmJhclxuICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17bWF4RGF0ZX1cbiAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e21pbkRhdGV9XG4gICAgICAgICAgICAgICAgICB7Li4uTmF2YmFyRWxlbWVudFByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FwdGlvbkVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgIDxDYXB0aW9uXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICAgICAgICAgIG9uRGF0ZUNoYW5nZT17aGFuZGxlTW9udGhDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICB7Li4uQ2FwdGlvbkVsZW1lbnRQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uRGF5Q2xpY2s9e2hhbmRsZURheUNsaWNrfVxuICAgICAgICAgICAgICBvbk1vbnRoQ2hhbmdlPXtoYW5kbGVNb250aENoYW5nZX1cbiAgICAgICAgICAgICAgcmVuZGVyRGF5PXsoZGF5OiBEYXRlKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2VsbGB9PntkYXkuZ2V0RGF0ZSgpfTwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBwb3B1cFN0eWxlPXt7XG4gICAgICAgICAgbWF4V2lkdGg6IHNob3J0Y3V0c0VuYWJsZWQgPyBcIjM0MnB4XCIgOiBcIjI0MnB4XCIsXG4gICAgICAgICAgd2lkdGg6IHNob3J0Y3V0c0VuYWJsZWQgPyBcIjM0MnB4XCIgOiBcIjI0MnB4XCIsXG4gICAgICAgIH19XG4gICAgICAgIHRyaWdnZXI9XCJjbGlja1wiXG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgIHsuLi5wb3BvdmVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgICAgY2xlYXZlT3B0aW9ucz17e1xuICAgICAgICAgICAgYmxvY2tzOiBbNCwgMiwgMl0sXG4gICAgICAgICAgICBkZWxpbWl0ZXI6IFwiLVwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGludGVudD17aW50ZW50fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVJbnB1dEZvY3VzfVxuICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlSW5wdXRLZXlEb3dufVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIHJpZ2h0RWxlbWVudD17PEljb24gaWNvbj1cImNhbGVuZGFyLW91dGxpbmVkXCIgLz59XG4gICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9Qb3BvdmVyPlxuICAgIClcbiAgfVxuKVxuXG5EYXRlUGlja2VyLmRpc3BsYXlOYW1lID0gXCJEYXRlUGlja2VyXCJcblxuRGF0ZVBpY2tlci5SYW5nZVBpY2tlciA9IFJhbmdlUGlja2VyXG5cbkRhdGVQaWNrZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKblnKjpgInmi6nlkI7vvIzmtojlpLEgUG9wb3ZlclxuICAgKi9cbiAgY2xvc2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrpu5jorqTml6XmnJ9cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8mum7mOiupOaYr+WQpuaYvuekuuS4i+aLiVxuICAgKi9cbiAgZGVmYXVsdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDnpoHmraLpgInmi6nnmoTlpKnvvIxkYXkgPT4gYm9vbO+8jOavj+S4gOWkqeaYr+eahOaXtumXtOS4uiAxMjowMDowMO+8jOi/meS4gOS4quaYr+eUsSBkYXktcGlja2VyLXJlYWN0IOWGs+WumueahO+8m1xuICAgKiDmr5TovoPml6XmnJ/nmoTml7blgJnlsI/lv4Pov5nkuIDngrnjgIJcbiAgICovXG4gIGRpc2FibGVkRGF5czogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDorr7nva7ovpPlhaXmoYbnsbvlnotcbiAgICovXG4gIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcIm5vcm1hbFwiLFxuICAgIFwicHJpbWFyeVwiLFxuICAgIFwic3VjY2Vzc1wiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gIF0pLFxuICAvKipcbiAgICog5pyA5aSn6ZmQ5Yi25pel5pyfXG4gICAqL1xuICBtYXhEYXRlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgLyoqXG4gICAqIOacgOWwj+mZkOWItuaXpeacn1xuICAgKi9cbiAgbWluRGF0ZTogUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIC8qKlxuICAgKiDml6XmnJ/mlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5pi+56S654q25oCB5Y+R55Sf5Y+Y5YyW5pe255qEaGFuZGxlclxuICAgKi9cbiAgb25WaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOWNoOS9jeWtl+esplxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlvLnlh7rlsYLkvY3nva5cbiAgICovXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInRvcFwiLFxuICAgIFwibGVmdFwiLFxuICAgIFwicmlnaHRcIixcbiAgICBcImJvdHRvbVwiLFxuICAgIFwidG9wTGVmdFwiLFxuICAgIFwidG9wUmlnaHRcIixcbiAgICBcImJvdHRvbUxlZnRcIixcbiAgICBcImJvdHRvbVJpZ2h0XCIsXG4gICAgXCJsZWZ0VG9wXCIsXG4gICAgXCJsZWZ0Qm90dG9tXCIsXG4gICAgXCJyaWdodFRvcFwiLFxuICAgIFwicmlnaHRCb3R0b21cIixcbiAgXSksXG4gIC8qKlxuICAgKiDkvKDlhaUgUG9wb3ZlciDnmoQgcHJvcHNcbiAgICovXG4gIHBvcG92ZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOW/q+aNt+mAieaLqemhue+8jOagvOW8j++8mlt7IGxhYmVsOiBcIuelluWbveeUn+aXpVwiLCB2YWx1ZTogbmV3IERhdGUoXCIyMDIwLTEwLTAxXCIpIH1dXG4gICAqL1xuICBzaG9ydGN1dHM6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGlnaHRcIl0pLFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5b2T5YmN5pel5pyfXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muaYr+WQpuaYvuekuuS4i+aLiemAieaLqVxuICAgKi9cbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG59XG5cbkRhdGVQaWNrZXIuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IFwiXCIsXG4gIGNsb3NlT25TZWxlY3Q6IGZhbHNlLFxuICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gIGRlZmF1bHRWaXNpYmxlOiBudWxsLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGRpc2FibGVkRGF5czogbm9vcCxcbiAgaW50ZW50OiBcIm5vcm1hbFwiLFxuICBtYXhEYXRlOiBnZXREZWZhdWx0TWF4RGF0ZSgpLFxuICBtaW5EYXRlOiBnZXREZWZhdWx0TWluRGF0ZSgpLFxuICBvbkNoYW5nZTogbm9vcCxcbiAgb25WaXNpYmxlQ2hhbmdlOiBub29wLFxuICBwbGFjZWhvbGRlcjogXCLpgInmi6nml6XmnJ9cIixcbiAgcGxhY2VtZW50OiBcImJvdHRvbUxlZnRcIixcbiAgcG9wb3ZlclByb3BzOiB7fSxcbiAgc2hvcnRjdXRzOiB1bmRlZmluZWQsXG4gIHNpemU6IFwic21hbGxcIixcbiAgdGhlbWU6IG51bGwsXG4gIHZhbHVlOiBudWxsLFxuICB2aXNpYmxlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlUGlja2VyXG4iXX0=