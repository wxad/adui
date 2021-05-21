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
import DayPicker, { CaptionElementProps, DateUtils, NavbarElementProps } from "day-picker-react";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvRGF0ZVBpY2tlci50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJmb3J3YXJkUmVmIiwidXNlQ29udGV4dCIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJEYXlQaWNrZXIiLCJDYXB0aW9uRWxlbWVudFByb3BzIiwiRGF0ZVV0aWxzIiwiTmF2YmFyRWxlbWVudFByb3BzIiwiUmFuZ2VQaWNrZXIiLCJzdHlsZXMiLCJDb25maWdDb250ZXh0IiwiZ2V0Q29tcHV0ZWRTaXplIiwiSWNvbiIsIklucHV0IiwiUG9wb3ZlciIsIkNhcHRpb24iLCJOYXZiYXIiLCJTaG9ydGN1dHMiLCJNT05USFMiLCJXRUVLREFZU19MT05HIiwiV0VFS0RBWVNfU0hPUlQiLCJnZXREZWZhdWx0TWF4RGF0ZSIsImdldERlZmF1bHRNaW5EYXRlIiwiaXNMZWdhbERhdGVTdHJpbmciLCJjb252ZXJ0RGF0ZVRvU3RyaW5nIiwicHJlZml4Iiwibm9vcCIsIkRhdGVQaWNrZXIiLCJyZWYiLCJjbGFzc05hbWUiLCJjbG9zZU9uU2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiZGVmYXVsdFZpc2libGUiLCJkaXNhYmxlZCIsImRpc2FibGVkRGF5cyIsImludGVudCIsIm1heERhdGUiLCJtaW5EYXRlIiwib25DaGFuZ2UiLCJvblZpc2libGVDaGFuZ2UiLCJwbGFjZWhvbGRlciIsInBsYWNlbWVudCIsInBvcG92ZXJQcm9wcyIsInNob3J0Y3V0cyIsInNpemVQcm9wIiwic2l6ZSIsInRoZW1lIiwidmFsdWVQcm9wIiwidmFsdWUiLCJ2aXNpYmxlUHJvcCIsInZpc2libGUiLCJvdGhlclByb3BzIiwidW5kZWZpbmVkIiwibW9udGgiLCJzZXRNb250aCIsInNlbGVjdGVkRGF5Iiwic2V0U2VsZWN0ZWREYXkiLCJzZXRWYWx1ZSIsInNldFZpc2libGUiLCJpbnB1dFJlZiIsInNpemVDb250ZXh0IiwiY2xhc3NTZXQiLCJzaG9ydGN1dHNFbmFibGVkIiwibGVuZ3RoIiwiaXNEYXlEaXNhYmxlZCIsImRheSIsImlzRGF5QmVmb3JlIiwiaXNEYXlBZnRlciIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJib29sIiwiaW5wdXRFbGVtZW50IiwiY3VycmVudCIsImlucHV0Iiwic2V0VGltZW91dCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsIm5ld1ZhbCIsImhhbmRsZURheUNsaWNrIiwic2VsZWN0ZWREYXlOZXciLCJpc1NhbWVEYXkiLCJoYW5kbGVJbnB1dENoYW5nZSIsInZhbCIsInRhcmdldCIsInRyaW0iLCJuZXdEYXRlIiwiRGF0ZSIsImlzU2FtZU1vbnRoIiwiaGFuZGxlSW5wdXRGb2N1cyIsImhhbmRsZUlucHV0S2V5RG93biIsImtleUNvZGUiLCJrZXlzIiwiaW5jbHVkZXMiLCJibHVyIiwiaGFuZGxlTW9udGhDaGFuZ2UiLCJkYXRlIiwiZ2V0TW9udGgiLCJ2YWx1ZVNob3J0Y3V0IiwiZ2V0RGF0ZSIsIm1heFdpZHRoIiwid2lkdGgiLCJibG9ja3MiLCJkZWxpbWl0ZXIiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsInN0cmluZyIsImFueSIsImZ1bmMiLCJvbmVPZiIsImluc3RhbmNlT2YiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFDRUMsVUFERixFQUVFQyxVQUZGLEVBR0VDLG1CQUhGLEVBSUVDLE1BSkYsRUFLRUMsUUFMRixRQU1PLE9BTlA7QUFPQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLFNBQVAsSUFDRUMsbUJBREYsRUFFRUMsU0FGRixFQUdFQyxrQkFIRixRQUlPLGtCQUpQO0FBS0EsT0FBT0MsV0FBUCxNQUF3QixlQUF4QjtBQUNBLE9BQU8sU0FBUDtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsY0FB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LEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sT0FBUCxDQUFoQixDQXhGYztBQTRGckIzRCxFQUFBQSxLQUFLLEVBQUU5QyxTQUFTLENBQUN1RyxHQTVGSTtBQWdHckJ2RCxFQUFBQSxPQUFPLEVBQUVoRCxTQUFTLENBQUNtRTtBQWhHRSxDQUF2QjtBQW1HQTFDLFVBQVUsQ0FBQ21GLFlBQVgsR0FBMEI7QUFDeEJqRixFQUFBQSxTQUFTLEVBQUUsRUFEYTtBQUV4QkMsRUFBQUEsYUFBYSxFQUFFLEtBRlM7QUFHeEJDLEVBQUFBLFlBQVksRUFBRSxJQUhVO0FBSXhCQyxFQUFBQSxjQUFjLEVBQUUsSUFKUTtBQUt4QkMsRUFBQUEsUUFBUSxFQUFFLEtBTGM7QUFNeEJDLEVBQUFBLFlBQVksRUFBRVIsSUFOVTtBQU94QlMsRUFBQUEsTUFBTSxFQUFFLFFBUGdCO0FBUXhCQyxFQUFBQSxPQUFPLEVBQUVmLGlCQUFpQixFQVJGO0FBU3hCZ0IsRUFBQUEsT0FBTyxFQUFFZixpQkFBaUIsRUFURjtBQVV4QmdCLEVBQUFBLFFBQVEsRUFBRVosSUFWYztBQVd4QmEsRUFBQUEsZUFBZSxFQUFFYixJQVhPO0FBWXhCYyxFQUFBQSxXQUFXLEVBQUUsTUFaVztBQWF4QkMsRUFBQUEsU0FBUyxFQUFFLFlBYmE7QUFjeEJDLEVBQUFBLFlBQVksRUFBRSxFQWRVO0FBZXhCQyxFQUFBQSxTQUFTLEVBQUVTLFNBZmE7QUFnQnhCUCxFQUFBQSxJQUFJLEVBQUUsT0FoQmtCO0FBaUJ4QkMsRUFBQUEsS0FBSyxFQUFFLElBakJpQjtBQWtCeEJFLEVBQUFBLEtBQUssRUFBRSxJQWxCaUI7QUFtQnhCRSxFQUFBQSxPQUFPLEVBQUU7QUFuQmUsQ0FBMUI7QUFzQkEsZUFBZXZCLFVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgZm9yd2FyZFJlZixcbiAgdXNlQ29udGV4dCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlUmVmLFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IERheVBpY2tlciwge1xuICBDYXB0aW9uRWxlbWVudFByb3BzLFxuICBEYXRlVXRpbHMsXG4gIE5hdmJhckVsZW1lbnRQcm9wcyxcbn0gZnJvbSBcImRheS1waWNrZXItcmVhY3RcIlxuaW1wb3J0IFJhbmdlUGlja2VyIGZyb20gXCIuL1JhbmdlUGlja2VyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jbGFzc05hbWVzXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dFwiXG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tIFwiLi4vcG9wLXRyaWdnZXJcIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBDYXB0aW9uIGZyb20gXCIuL0NhcHRpb25cIlxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIlxuaW1wb3J0IFNob3J0Y3V0cyBmcm9tIFwiLi9TaG9ydGN1dHNcIlxuaW1wb3J0IHtcbiAgTU9OVEhTLFxuICBXRUVLREFZU19MT05HLFxuICBXRUVLREFZU19TSE9SVCxcbiAgZ2V0RGVmYXVsdE1heERhdGUsXG4gIGdldERlZmF1bHRNaW5EYXRlLFxuICBpc0xlZ2FsRGF0ZVN0cmluZyxcbiAgY29udmVydERhdGVUb1N0cmluZyxcbn0gZnJvbSBcIi4vY29yZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1kYXRlXCJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlUGlja2VyUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKblnKjpgInmi6nlkI7vvIzmtojlpLEgUG9wb3ZlclxuICAgKi9cbiAgY2xvc2VPblNlbGVjdD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8mum7mOiupOaXpeacn1xuICAgKi9cbiAgZGVmYXVsdFZhbHVlPzogRGF0ZSB8IFwiXCIgfCBudWxsXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrpu5jorqTmmK/lkKbmmL7npLrkuIvmi4lcbiAgICovXG4gIGRlZmF1bHRWaXNpYmxlPzogYm9vbGVhbiB8IG51bGxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDnpoHmraLpgInmi6nnmoTlpKnvvIxkYXkgPT4gYm9vbO+8jOavj+S4gOWkqeaYr+eahOaXtumXtOS4uiAxMjowMDowMO+8jOi/meS4gOS4quaYr+eUsSBkYXktcGlja2VyLXJlYWN0IOWGs+WumueahO+8m1xuICAgKiDmr5TovoPml6XmnJ/nmoTml7blgJnlsI/lv4Pov5nkuIDngrnjgIJcbiAgICovXG4gIGRpc2FibGVkRGF5cz86IChkYXRlOiBEYXRlKSA9PiBib29sZWFuIHwgdm9pZFxuICAvKipcbiAgICog6K6+572u6L6T5YWl5qGG57G75Z6LXG4gICAqL1xuICBpbnRlbnQ/OiBcIm5vcm1hbFwiIHwgXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiIHwgXCJkYW5nZXJcIlxuICAvKipcbiAgICog5pyA5aSn6ZmQ5Yi25pel5pyfXG4gICAqL1xuICBtYXhEYXRlPzogRGF0ZSB8IG51bGxcbiAgLyoqXG4gICAqIOacgOWwj+mZkOWItuaXpeacn1xuICAgKi9cbiAgbWluRGF0ZT86IERhdGUgfCBudWxsXG4gIC8qKlxuICAgKiDml6XmnJ/mlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAoZGF0ZT86IERhdGUgfCBcIlwiIHwgbnVsbCkgPT4gdm9pZFxuICAvKipcbiAgICog5pi+56S654q25oCB5Y+R55Sf5Y+Y5YyW5pe255qEaGFuZGxlclxuICAgKi9cbiAgb25WaXNpYmxlQ2hhbmdlPzogKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOWNoOS9jeWtl+esplxuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOW8ueWHuuWxguS9jee9rlxuICAgKi9cbiAgcGxhY2VtZW50PzogUGxhY2VtZW50XG4gIC8qKlxuICAgKiDkvKDlhaUgUG9wb3ZlciDnmoQgcHJvcHNcbiAgICovXG4gIHBvcG92ZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgLyoqXG4gICAqIOW/q+aNt+mAieaLqemhue+8jOagvOW8j++8mlt7IGxhYmVsOiBcIuelluWbveeUn+aXpVwiLCB2YWx1ZTogbmV3IERhdGUoXCIyMDIwLTEwLTAxXCIpIH1dXG4gICAqL1xuICBzaG9ydGN1dHM/OiB7XG4gICAgLyoqXG4gICAgICog6K+l6aG555qE5paH5a2XXG4gICAgICovXG4gICAgbGFiZWw6IFJlYWN0LlJlYWN0Tm9kZVxuICAgIC8qKlxuICAgICAqIOivpemhueeahOaXpeacn1xuICAgICAqL1xuICAgIHZhbHVlOiBEYXRlXG4gIH1bXVxuXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU/OiBudWxsIHwgXCJsaWdodFwiXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrlvZPliY3ml6XmnJ9cbiAgICovXG4gIHZhbHVlPzogRGF0ZSB8IFwiXCIgfCBudWxsXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKbmmL7npLrkuIvmi4npgInmi6lcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuIHwgbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlUGlja2VyXG4gIGV4dGVuZHMgUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgICBJRGF0ZVBpY2tlclByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+XG4gID4ge1xuICBSYW5nZVBpY2tlcjogdHlwZW9mIFJhbmdlUGlja2VyXG59XG5cbi8qKlxuICog5pel5pyf6YCJ5oup5Zmo55So5LqO5LqG6Kej5b2T5YmN5bey6YCJ5pel5pyf77yM6YCJ5oup5oiW6L6T5YWl6ZyA6KaB55qE5pel5pyf44CB5pel5pyf6IyD5Zu0562J44CCXG4gKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IERhdGVQaWNrZXI6IElEYXRlUGlja2VyID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNsb3NlT25TZWxlY3QsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkZWZhdWx0VmlzaWJsZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZGlzYWJsZWREYXlzLFxuICAgICAgaW50ZW50LFxuICAgICAgbWF4RGF0ZSxcbiAgICAgIG1pbkRhdGUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uVmlzaWJsZUNoYW5nZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgcG9wb3ZlclByb3BzLFxuICAgICAgc2hvcnRjdXRzLFxuICAgICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgICB0aGVtZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVByb3AsXG4gICAgICB2aXNpYmxlOiB2aXNpYmxlUHJvcCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJRGF0ZVBpY2tlclByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBbbW9udGgsIHNldE1vbnRoXSA9IHVzZVN0YXRlPERhdGUgfCBcIlwiIHwgdW5kZWZpbmVkPigoKSA9PiB7XG4gICAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVByb3BcbiAgICAgIH1cbiAgICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH0pXG4gICAgY29uc3QgW3NlbGVjdGVkRGF5LCBzZXRTZWxlY3RlZERheV0gPSB1c2VTdGF0ZTxcbiAgICAgIERhdGUgfCBcIlwiIHwgbnVsbCB8IHVuZGVmaW5lZFxuICAgID4oKCkgPT4ge1xuICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWVQcm9wXG4gICAgICB9XG4gICAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9KVxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPigoKSA9PiB7XG4gICAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0RGF0ZVRvU3RyaW5nKHZhbHVlUHJvcClcbiAgICAgIH1cbiAgICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGNvbnZlcnREYXRlVG9TdHJpbmcoZGVmYXVsdFZhbHVlKVxuICAgICAgfVxuICAgICAgcmV0dXJuIFwiXCJcbiAgICB9KVxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KCgpID0+IHtcbiAgICAgIGlmICh2aXNpYmxlUHJvcCAhPT0gbnVsbCAmJiB2aXNpYmxlUHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB2aXNpYmxlUHJvcFxuICAgICAgfVxuICAgICAgaWYgKGRlZmF1bHRWaXNpYmxlICE9PSBudWxsICYmIGRlZmF1bHRWaXNpYmxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWaXNpYmxlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICAgIGlmICh2YWx1ZVByb3AgIT09IG51bGwgJiYgc2VsZWN0ZWREYXkgIT09IHZhbHVlUHJvcCkge1xuICAgICAgc2V0TW9udGgodmFsdWVQcm9wKVxuICAgICAgc2V0U2VsZWN0ZWREYXkodmFsdWVQcm9wKVxuICAgICAgc2V0VmFsdWUoY29udmVydERhdGVUb1N0cmluZyh2YWx1ZVByb3ApKVxuICAgIH1cbiAgICBpZiAodmlzaWJsZVByb3AgIT09IG51bGwgJiYgdmlzaWJsZSAhPT0gISF2aXNpYmxlUHJvcCkge1xuICAgICAgc2V0VmlzaWJsZSghIXZpc2libGVQcm9wKVxuICAgIH1cblxuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPGFueT4obnVsbClcblxuICAgIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcbiAgICBjb25zdCBzaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemVQcm9wLCBzaXplQ29udGV4dClcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0tZGF0ZUJhc2VgLFxuICAgICAgYCR7cHJlZml4fS0ke3NpemV9YFxuICAgIClcblxuICAgIGNvbnN0IHNob3J0Y3V0c0VuYWJsZWQgPSBzaG9ydGN1dHMgJiYgc2hvcnRjdXRzLmxlbmd0aCA+IDBcblxuICAgIGNvbnN0IGlzRGF5RGlzYWJsZWQgPSAoZGF5OiBEYXRlKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAoZGlzYWJsZWREYXlzICYmIGRpc2FibGVkRGF5cyhkYXkpKSB8fFxuICAgICAgICBEYXRlVXRpbHMuaXNEYXlCZWZvcmUoZGF5LCBtaW5EYXRlKSB8fFxuICAgICAgICBEYXRlVXRpbHMuaXNEYXlBZnRlcihkYXksIG1heERhdGUpXG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVmlzaWJsZUNoYW5nZSA9IChib29sOiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zdCB7IGlucHV0OiBpbnB1dEVsZW1lbnQgfSA9IGlucHV0UmVmLmN1cnJlbnRcbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50XG4gICAgICAgIGlmIChib29sIHx8ICghYm9vbCAmJiBpbnB1dEVsZW1lbnQgIT09IGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgY29uc3QgbmV3VmFsID0gY29udmVydERhdGVUb1N0cmluZyhzZWxlY3RlZERheSlcbiAgICAgICAgICBpZiAoIWJvb2wgJiYgdmFsdWUgIT09IG5ld1ZhbCkge1xuICAgICAgICAgICAgc2V0VmFsdWUobmV3VmFsKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBvblZpc2libGVDaGFuZ2UoYm9vbClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRWaXNpYmxlKGJvb2wpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZURheUNsaWNrID0gKFxuICAgICAgc2VsZWN0ZWREYXlOZXc6IERhdGUsXG4gICAgICB7IGRpc2FibGVkOiBib29sIH06IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgICApID0+IHtcbiAgICAgIGlmICghYm9vbCkge1xuICAgICAgICBpZiAoY2xvc2VPblNlbGVjdCkge1xuICAgICAgICAgIC8vIOW7tui/n+aYr+S4uuS6huiuqeeKtuaAgeeahOWPmOWMluWcqOinhuinieS4iuWFiOiiq+aOpeWPl1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgICAgICBvblZpc2libGVDaGFuZ2UoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmlzaWJsZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIURhdGVVdGlscy5pc1NhbWVEYXkoc2VsZWN0ZWREYXlOZXcsIHNlbGVjdGVkRGF5KSkge1xuICAgICAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRGF5KHNlbGVjdGVkRGF5TmV3KVxuICAgICAgICAgICAgc2V0VmFsdWUoY29udmVydERhdGVUb1N0cmluZyhzZWxlY3RlZERheU5ldykpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgb25DaGFuZ2Uoc2VsZWN0ZWREYXlOZXcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoe1xuICAgICAgdGFyZ2V0OiB7IHZhbHVlOiB2YWwgfSxcbiAgICB9OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgc2V0VmFsdWUodmFsKVxuICAgICAgaWYgKHZhbC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldFNlbGVjdGVkRGF5KG51bGwpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoXCJcIilcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc0xlZ2FsRGF0ZVN0cmluZyh2YWwpKSB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSh2YWwpXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhaXNEYXlEaXNhYmxlZChuZXdEYXRlKSAmJlxuICAgICAgICAgICFEYXRlVXRpbHMuaXNTYW1lRGF5KG5ld0RhdGUsIHNlbGVjdGVkRGF5KVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZERheShuZXdEYXRlKVxuICAgICAgICAgICAgc2V0VmFsdWUoY29udmVydERhdGVUb1N0cmluZyhuZXdEYXRlKSlcbiAgICAgICAgICAgIGlmICghRGF0ZVV0aWxzLmlzU2FtZU1vbnRoKG5ld0RhdGUsIHNlbGVjdGVkRGF5KSkge1xuICAgICAgICAgICAgICBzZXRNb250aChuZXdEYXRlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKG5ld0RhdGUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRGb2N1cyA9ICgpID0+IHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgb25WaXNpYmxlQ2hhbmdlKHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgc2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRLZXlEb3duID0gKHtcbiAgICAgIGtleUNvZGUsXG4gICAgfTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3Qga2V5cyA9IFs5LCAxMywgMjddXG4gICAgICBpZiAoa2V5cy5pbmNsdWRlcyhrZXlDb2RlKSkge1xuICAgICAgICBoYW5kbGVWaXNpYmxlQ2hhbmdlKGZhbHNlKVxuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmlucHV0LmJsdXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU1vbnRoQ2hhbmdlID0gKGRhdGU6IERhdGUpID0+IHtcbiAgICAgIGNvbnN0IG5ld0RhdGUgPSBkYXRlXG4gICAgICBpZiAobWluRGF0ZSAmJiBEYXRlVXRpbHMuaXNEYXlCZWZvcmUoZGF0ZSwgbWluRGF0ZSkpIHtcbiAgICAgICAgbmV3RGF0ZS5zZXRNb250aChtaW5EYXRlLmdldE1vbnRoKCkpXG4gICAgICB9IGVsc2UgaWYgKG1heERhdGUgJiYgRGF0ZVV0aWxzLmlzRGF5QWZ0ZXIoZGF0ZSwgbWF4RGF0ZSkpIHtcbiAgICAgICAgbmV3RGF0ZS5zZXRNb250aChtYXhEYXRlLmdldE1vbnRoKCkpXG4gICAgICB9XG4gICAgICBzZXRNb250aChuZXdEYXRlKVxuICAgIH1cblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgaW5wdXQ6IGlucHV0UmVmLmN1cnJlbnQsXG4gICAgICBoYW5kbGVEYXlDbGljayxcbiAgICAgIGhhbmRsZVZpc2libGVDaGFuZ2UsXG4gICAgfSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcG92ZXJcbiAgICAgICAgYXJyb3dlZD17ZmFsc2V9XG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZT17aGFuZGxlVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgICAgIHBvcHVwPXtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3B1cGB9PlxuICAgICAgICAgICAge3Nob3J0Y3V0c0VuYWJsZWQgJiYgKFxuICAgICAgICAgICAgICA8U2hvcnRjdXRzXG4gICAgICAgICAgICAgICAgb25TaG9ydGN1dENsaWNrPXsodmFsdWVTaG9ydGN1dDogRGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaGFuZGxlRGF5Q2xpY2sodmFsdWVTaG9ydGN1dCwge30pXG4gICAgICAgICAgICAgICAgICBzZXRNb250aCh2YWx1ZVNob3J0Y3V0KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWREYXk9e3NlbGVjdGVkRGF5fVxuICAgICAgICAgICAgICAgIHNob3J0Y3V0cz17c2hvcnRjdXRzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxEYXlQaWNrZXJcbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtpc0RheURpc2FibGVkfVxuICAgICAgICAgICAgICBmcm9tTW9udGg9e21pbkRhdGV9XG4gICAgICAgICAgICAgIHRvTW9udGg9e21heERhdGV9XG4gICAgICAgICAgICAgIGNhbkNoYW5nZU1vbnRoXG4gICAgICAgICAgICAgIGNsYXNzTmFtZXM9e3N0eWxlc31cbiAgICAgICAgICAgICAgbW9udGg9e21vbnRoIHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgbW9udGhzPXtNT05USFN9XG4gICAgICAgICAgICAgIHdlZWtkYXlzTG9uZz17V0VFS0RBWVNfTE9OR31cbiAgICAgICAgICAgICAgd2Vla2RheXNTaG9ydD17V0VFS0RBWVNfU0hPUlR9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17c2VsZWN0ZWREYXkgfHwgdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBuYXZiYXJFbGVtZW50PXtcbiAgICAgICAgICAgICAgICA8TmF2YmFyXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICAgICAgICAgIHsuLi5OYXZiYXJFbGVtZW50UHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXB0aW9uRWxlbWVudD17XG4gICAgICAgICAgICAgICAgPENhcHRpb25cbiAgICAgICAgICAgICAgICAgIG1heERhdGU9e21heERhdGV9XG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXttaW5EYXRlfVxuICAgICAgICAgICAgICAgICAgb25EYXRlQ2hhbmdlPXtoYW5kbGVNb250aENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHsuLi5DYXB0aW9uRWxlbWVudFByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25EYXlDbGljaz17aGFuZGxlRGF5Q2xpY2t9XG4gICAgICAgICAgICAgIG9uTW9udGhDaGFuZ2U9e2hhbmRsZU1vbnRoQ2hhbmdlfVxuICAgICAgICAgICAgICByZW5kZXJEYXk9eyhkYXk6IERhdGUpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsYH0+e2RheS5nZXREYXRlKCl9PC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHBvcHVwU3R5bGU9e3tcbiAgICAgICAgICBtYXhXaWR0aDogc2hvcnRjdXRzRW5hYmxlZCA/IFwiMzQycHhcIiA6IFwiMjQycHhcIixcbiAgICAgICAgICB3aWR0aDogc2hvcnRjdXRzRW5hYmxlZCA/IFwiMzQycHhcIiA6IFwiMjQycHhcIixcbiAgICAgICAgfX1cbiAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgey4uLnBvcG92ZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgICBjbGVhdmVPcHRpb25zPXt7XG4gICAgICAgICAgICBibG9ja3M6IFs0LCAyLCAyXSxcbiAgICAgICAgICAgIGRlbGltaXRlcjogXCItXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgaW50ZW50PXtpbnRlbnR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVJbnB1dEtleURvd259XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgcmlnaHRFbGVtZW50PXs8SWNvbiBpY29uPVwiY2FsZW5kYXItb3V0bGluZWRcIiAvPn1cbiAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgKVxuICB9XG4pXG5cbkRhdGVQaWNrZXIuZGlzcGxheU5hbWUgPSBcIkRhdGVQaWNrZXJcIlxuXG5EYXRlUGlja2VyLlJhbmdlUGlja2VyID0gUmFuZ2VQaWNrZXJcblxuRGF0ZVBpY2tlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuWcqOmAieaLqeWQju+8jOa2iOWksSBQb3BvdmVyXG4gICAqL1xuICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8mum7mOiupOaXpeacn1xuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya6buY6K6k5piv5ZCm5pi+56S65LiL5ouJXG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOemgeatoumAieaLqeeahOWkqe+8jGRheSA9PiBib29s77yM5q+P5LiA5aSp5piv55qE5pe26Ze05Li6IDEyOjAwOjAw77yM6L+Z5LiA5Liq5piv55SxIGRheS1waWNrZXItcmVhY3Qg5Yaz5a6a55qE77ybXG4gICAqIOavlOi+g+aXpeacn+eahOaXtuWAmeWwj+W/g+i/meS4gOeCueOAglxuICAgKi9cbiAgZGlzYWJsZWREYXlzOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9rui+k+WFpeahhuexu+Wei1xuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwibm9ybWFsXCIsXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgXSksXG4gIC8qKlxuICAgKiDmnIDlpKfpmZDliLbml6XmnJ9cbiAgICovXG4gIG1heERhdGU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAvKipcbiAgICog5pyA5bCP6ZmQ5Yi25pel5pyfXG4gICAqL1xuICBtaW5EYXRlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgLyoqXG4gICAqIOaXpeacn+aUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDmmL7npLrnirbmgIHlj5HnlJ/lj5jljJbml7bnmoRoYW5kbGVyXG4gICAqL1xuICBvblZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5Y2g5L2N5a2X56ymXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOW8ueWHuuWxguS9jee9rlxuICAgKi9cbiAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwidG9wXCIsXG4gICAgXCJsZWZ0XCIsXG4gICAgXCJyaWdodFwiLFxuICAgIFwiYm90dG9tXCIsXG4gICAgXCJ0b3BMZWZ0XCIsXG4gICAgXCJ0b3BSaWdodFwiLFxuICAgIFwiYm90dG9tTGVmdFwiLFxuICAgIFwiYm90dG9tUmlnaHRcIixcbiAgICBcImxlZnRUb3BcIixcbiAgICBcImxlZnRCb3R0b21cIixcbiAgICBcInJpZ2h0VG9wXCIsXG4gICAgXCJyaWdodEJvdHRvbVwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOS8oOWFpSBQb3BvdmVyIOeahCBwcm9wc1xuICAgKi9cbiAgcG9wb3ZlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog5b+r5o236YCJ5oup6aG577yM5qC85byP77yaW3sgbGFiZWw6IFwi56WW5Zu955Sf5pelXCIsIHZhbHVlOiBuZXcgRGF0ZShcIjIwMjAtMTAtMDFcIikgfV1cbiAgICovXG4gIHNob3J0Y3V0czogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsaWdodFwiXSksXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrlvZPliY3ml6XmnJ9cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5piv5ZCm5pi+56S65LiL5ouJ6YCJ5oupXG4gICAqL1xuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbn1cblxuRGF0ZVBpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogXCJcIixcbiAgY2xvc2VPblNlbGVjdDogZmFsc2UsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgZGVmYXVsdFZpc2libGU6IG51bGwsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZGlzYWJsZWREYXlzOiBub29wLFxuICBpbnRlbnQ6IFwibm9ybWFsXCIsXG4gIG1heERhdGU6IGdldERlZmF1bHRNYXhEYXRlKCksXG4gIG1pbkRhdGU6IGdldERlZmF1bHRNaW5EYXRlKCksXG4gIG9uQ2hhbmdlOiBub29wLFxuICBvblZpc2libGVDaGFuZ2U6IG5vb3AsXG4gIHBsYWNlaG9sZGVyOiBcIumAieaLqeaXpeacn1wiLFxuICBwbGFjZW1lbnQ6IFwiYm90dG9tTGVmdFwiLFxuICBwb3BvdmVyUHJvcHM6IHt9LFxuICBzaG9ydGN1dHM6IHVuZGVmaW5lZCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB0aGVtZTogbnVsbCxcbiAgdmFsdWU6IG51bGwsXG4gIHZpc2libGU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVQaWNrZXJcbiJdfQ==