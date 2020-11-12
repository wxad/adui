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

var _RangePicker = _interopRequireDefault(require("./RangePicker"));

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-date";

var noop = function noop() {};

var DatePicker = (0, _react.forwardRef)(function (_ref, ref) {
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

  var _useState = (0, _react.useState)(function () {
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

  var _useState3 = (0, _react.useState)(function () {
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

  var _useState5 = (0, _react.useState)(function () {
    if (valueProp !== null) {
      return (0, _core.convertDateToString)(valueProp);
    }

    if (defaultValue !== null) {
      return (0, _core.convertDateToString)(defaultValue);
    }

    return "";
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  var _useState7 = (0, _react.useState)(function () {
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
    setValue((0, _core.convertDateToString)(valueProp));
  }

  if (visibleProp !== null && visible !== !!visibleProp) {
    setVisible(!!visibleProp);
  }

  var inputRef = (0, _react.useRef)(null);

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeContext = _useContext.size;

  var size = (0, _configProvider.getComputedSize)(sizeProp, sizeContext);
  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-dateBase"), "".concat(prefix, "-").concat(size));
  var shortcutsEnabled = shortcuts && shortcuts.length > 0;

  var isDayDisabled = function isDayDisabled(day) {
    return disabledDays && disabledDays(day) || _dayPickerReact.DateUtils.isDayBefore(day, minDate) || _dayPickerReact.DateUtils.isDayAfter(day, maxDate);
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
        var newVal = (0, _core.convertDateToString)(selectedDay);

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

      if (!_dayPickerReact.DateUtils.isSameDay(selectedDayNew, selectedDay)) {
        if (valueProp === null) {
          setSelectedDay(selectedDayNew);
          setValue((0, _core.convertDateToString)(selectedDayNew));
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
    } else if ((0, _core.isLegalDateString)(val)) {
      var newDate = new Date(val);

      if (!isDayDisabled(newDate) && !_dayPickerReact.DateUtils.isSameDay(newDate, selectedDay)) {
        if (valueProp === null) {
          setSelectedDay(newDate);
          setValue((0, _core.convertDateToString)(newDate));

          if (!_dayPickerReact.DateUtils.isSameMonth(newDate, selectedDay)) {
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

    if (minDate && _dayPickerReact.DateUtils.isDayBefore(date, minDate)) {
      newDate.setMonth(minDate.getMonth());
    } else if (maxDate && _dayPickerReact.DateUtils.isDayAfter(date, maxDate)) {
      newDate.setMonth(maxDate.getMonth());
    }

    setMonth(newDate);
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
        handleDayClick(valueShortcut, {});
        setMonth(valueShortcut);
      },
      selectedDay: selectedDay,
      shortcuts: shortcuts
    }), _react["default"].createElement(_dayPickerReact["default"], {
      disabledDays: isDayDisabled,
      fromMonth: minDate,
      toMonth: maxDate,
      canChangeMonth: true,
      classNames: _classNames["default"],
      month: month || undefined,
      months: _core.MONTHS,
      weekdaysLong: _core.WEEKDAYS_LONG,
      weekdaysShort: _core.WEEKDAYS_SHORT,
      selectedDays: selectedDay || undefined,
      navbarElement: _react["default"].createElement(_Navbar["default"], _extends({
        maxDate: maxDate,
        minDate: minDate
      }, _dayPickerReact.NavbarElementProps)),
      captionElement: _react["default"].createElement(_Caption["default"], _extends({
        maxDate: maxDate,
        minDate: minDate,
        onDateChange: handleMonthChange
      }, _dayPickerReact.CaptionElementProps)),
      onDayClick: handleDayClick,
      onMonthChange: handleMonthChange,
      renderDay: function renderDay(day) {
        return _react["default"].createElement("div", {
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
  }, popoverProps), _react["default"].createElement(_input["default"], _extends({
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
    rightElement: _react["default"].createElement(_icon["default"], {
      icon: "calendar-outlined"
    }),
    size: size,
    theme: theme,
    value: value
  }, otherProps)));
});
DatePicker.displayName = "DatePicker";
DatePicker.RangePicker = _RangePicker["default"];
DatePicker.propTypes = {
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
DatePicker.defaultProps = {
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
var _default = DatePicker;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvRGF0ZVBpY2tlci50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsIkRhdGVQaWNrZXIiLCJyZWYiLCJjbGFzc05hbWUiLCJjbG9zZU9uU2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiZGVmYXVsdFZpc2libGUiLCJkaXNhYmxlZCIsImRpc2FibGVkRGF5cyIsImludGVudCIsIm1heERhdGUiLCJtaW5EYXRlIiwib25DaGFuZ2UiLCJvblZpc2libGVDaGFuZ2UiLCJwbGFjZWhvbGRlciIsInBsYWNlbWVudCIsInBvcG92ZXJQcm9wcyIsInNob3J0Y3V0cyIsInNpemVQcm9wIiwic2l6ZSIsInRoZW1lIiwidmFsdWVQcm9wIiwidmFsdWUiLCJ2aXNpYmxlUHJvcCIsInZpc2libGUiLCJvdGhlclByb3BzIiwidW5kZWZpbmVkIiwibW9udGgiLCJzZXRNb250aCIsInNlbGVjdGVkRGF5Iiwic2V0U2VsZWN0ZWREYXkiLCJzZXRWYWx1ZSIsInNldFZpc2libGUiLCJpbnB1dFJlZiIsIkNvbmZpZ0NvbnRleHQiLCJzaXplQ29udGV4dCIsImNsYXNzU2V0Iiwic2hvcnRjdXRzRW5hYmxlZCIsImxlbmd0aCIsImlzRGF5RGlzYWJsZWQiLCJkYXkiLCJEYXRlVXRpbHMiLCJpc0RheUJlZm9yZSIsImlzRGF5QWZ0ZXIiLCJoYW5kbGVWaXNpYmxlQ2hhbmdlIiwiYm9vbCIsImlucHV0RWxlbWVudCIsImN1cnJlbnQiLCJpbnB1dCIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJuZXdWYWwiLCJoYW5kbGVEYXlDbGljayIsInNlbGVjdGVkRGF5TmV3IiwiaXNTYW1lRGF5IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ2YWwiLCJ0YXJnZXQiLCJ0cmltIiwibmV3RGF0ZSIsIkRhdGUiLCJpc1NhbWVNb250aCIsImhhbmRsZUlucHV0Rm9jdXMiLCJoYW5kbGVJbnB1dEtleURvd24iLCJrZXlDb2RlIiwia2V5cyIsImluY2x1ZGVzIiwiYmx1ciIsImhhbmRsZU1vbnRoQ2hhbmdlIiwiZGF0ZSIsImdldE1vbnRoIiwidmFsdWVTaG9ydGN1dCIsInN0eWxlcyIsIk1PTlRIUyIsIldFRUtEQVlTX0xPTkciLCJXRUVLREFZU19TSE9SVCIsIk5hdmJhckVsZW1lbnRQcm9wcyIsIkNhcHRpb25FbGVtZW50UHJvcHMiLCJnZXREYXRlIiwibWF4V2lkdGgiLCJ3aWR0aCIsImJsb2NrcyIsImRlbGltaXRlciIsImRpc3BsYXlOYW1lIiwiUmFuZ2VQaWNrZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJmdW5jIiwib25lT2YiLCJpbnN0YW5jZU9mIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQU1BLE1BQU0sR0FBRyxXQUFmOztBQUNBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUF3R0EsSUFBTUMsVUFBdUIsR0FBRyx1QkFDOUIsZ0JBdUJFQyxHQXZCRixFQXdCSztBQUFBLE1BdEJEQyxTQXNCQyxRQXRCREEsU0FzQkM7QUFBQSxNQXJCREMsYUFxQkMsUUFyQkRBLGFBcUJDO0FBQUEsTUFwQkRDLFlBb0JDLFFBcEJEQSxZQW9CQztBQUFBLE1BbkJEQyxjQW1CQyxRQW5CREEsY0FtQkM7QUFBQSxNQWxCREMsUUFrQkMsUUFsQkRBLFFBa0JDO0FBQUEsTUFqQkRDLFlBaUJDLFFBakJEQSxZQWlCQztBQUFBLE1BaEJEQyxNQWdCQyxRQWhCREEsTUFnQkM7QUFBQSxNQWZEQyxPQWVDLFFBZkRBLE9BZUM7QUFBQSxNQWREQyxPQWNDLFFBZERBLE9BY0M7QUFBQSxNQWJEQyxRQWFDLFFBYkRBLFFBYUM7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RUFBRWlFLHNCQUFVRSxHQTVGSTtBQWdHckJqRSxFQUFBQSxPQUFPLEVBQUUrRCxzQkFBVTFDO0FBaEdFLENBQXZCO0FBbUdBNUMsVUFBVSxDQUFDNkYsWUFBWCxHQUEwQjtBQUN4QjNGLEVBQUFBLFNBQVMsRUFBRSxFQURhO0FBRXhCQyxFQUFBQSxhQUFhLEVBQUUsS0FGUztBQUd4QkMsRUFBQUEsWUFBWSxFQUFFLElBSFU7QUFJeEJDLEVBQUFBLGNBQWMsRUFBRSxJQUpRO0FBS3hCQyxFQUFBQSxRQUFRLEVBQUUsS0FMYztBQU14QkMsRUFBQUEsWUFBWSxFQUFFUixJQU5VO0FBT3hCUyxFQUFBQSxNQUFNLEVBQUUsUUFQZ0I7QUFReEJDLEVBQUFBLE9BQU8sRUFBRSw4QkFSZTtBQVN4QkMsRUFBQUEsT0FBTyxFQUFFLDhCQVRlO0FBVXhCQyxFQUFBQSxRQUFRLEVBQUVaLElBVmM7QUFXeEJhLEVBQUFBLGVBQWUsRUFBRWIsSUFYTztBQVl4QmMsRUFBQUEsV0FBVyxFQUFFLE1BWlc7QUFheEJDLEVBQUFBLFNBQVMsRUFBRSxZQWJhO0FBY3hCQyxFQUFBQSxZQUFZLEVBQUUsRUFkVTtBQWV4QkMsRUFBQUEsU0FBUyxFQUFFUyxTQWZhO0FBZ0J4QlAsRUFBQUEsSUFBSSxFQUFFLE9BaEJrQjtBQWlCeEJDLEVBQUFBLEtBQUssRUFBRSxJQWpCaUI7QUFrQnhCRSxFQUFBQSxLQUFLLEVBQUUsSUFsQmlCO0FBbUJ4QkUsRUFBQUEsT0FBTyxFQUFFO0FBbkJlLENBQTFCO2VBc0JldkIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VDb250ZXh0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgRGF5UGlja2VyLCB7XG4gIENhcHRpb25FbGVtZW50UHJvcHMsXG4gIERhdGVVdGlscyxcbiAgTmF2YmFyRWxlbWVudFByb3BzLFxufSBmcm9tIFwiZGF5LXBpY2tlci1yZWFjdFwiXG5pbXBvcnQgUmFuZ2VQaWNrZXIgZnJvbSBcIi4vUmFuZ2VQaWNrZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NsYXNzTmFtZXNcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2lucHV0XCJcbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gXCIuLi9wb3AtdHJpZ2dlclwiXG5pbXBvcnQgUG9wb3ZlciwgeyBJUG9wb3ZlclByb3BzIH0gZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IENhcHRpb24gZnJvbSBcIi4vQ2FwdGlvblwiXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiXG5pbXBvcnQgU2hvcnRjdXRzIGZyb20gXCIuL1Nob3J0Y3V0c1wiXG5pbXBvcnQge1xuICBNT05USFMsXG4gIFdFRUtEQVlTX0xPTkcsXG4gIFdFRUtEQVlTX1NIT1JULFxuICBnZXREZWZhdWx0TWF4RGF0ZSxcbiAgZ2V0RGVmYXVsdE1pbkRhdGUsXG4gIGlzTGVnYWxEYXRlU3RyaW5nLFxuICBjb252ZXJ0RGF0ZVRvU3RyaW5nLFxufSBmcm9tIFwiLi9jb3JlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWRhdGVcIlxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGVQaWNrZXJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuWcqOmAieaLqeWQju+8jOa2iOWksSBQb3BvdmVyXG4gICAqL1xuICBjbG9zZU9uU2VsZWN0PzogYm9vbGVhblxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya6buY6K6k5pel5pyfXG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBEYXRlIHwgXCJcIiB8IG51bGxcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8mum7mOiupOaYr+WQpuaYvuekuuS4i+aLiVxuICAgKi9cbiAgZGVmYXVsdFZpc2libGU/OiBib29sZWFuIHwgbnVsbFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOemgeatoumAieaLqeeahOWkqe+8jGRheSA9PiBib29s77yM5q+P5LiA5aSp5piv55qE5pe26Ze05Li6IDEyOjAwOjAw77yM6L+Z5LiA5Liq5piv55SxIGRheS1waWNrZXItcmVhY3Qg5Yaz5a6a55qE77ybXG4gICAqIOavlOi+g+aXpeacn+eahOaXtuWAmeWwj+W/g+i/meS4gOeCueOAglxuICAgKi9cbiAgZGlzYWJsZWREYXlzPzogKGRhdGU6IERhdGUpID0+IGJvb2xlYW4gfCB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7ovpPlhaXmoYbnsbvlnotcbiAgICovXG4gIGludGVudD86IFwibm9ybWFsXCIgfCBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJ3YXJuaW5nXCIgfCBcImRhbmdlclwiXG4gIC8qKlxuICAgKiDmnIDlpKfpmZDliLbml6XmnJ9cbiAgICovXG4gIG1heERhdGU/OiBEYXRlXG4gIC8qKlxuICAgKiDmnIDlsI/pmZDliLbml6XmnJ9cbiAgICovXG4gIG1pbkRhdGU/OiBEYXRlXG4gIC8qKlxuICAgKiDml6XmnJ/mlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAoZGF0ZT86IERhdGUgfCBcIlwiIHwgbnVsbCkgPT4gdm9pZFxuICAvKipcbiAgICog5pi+56S654q25oCB5Y+R55Sf5Y+Y5YyW5pe255qEaGFuZGxlclxuICAgKi9cbiAgb25WaXNpYmxlQ2hhbmdlPzogKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOWNoOS9jeWtl+esplxuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOW8ueWHuuWxguS9jee9rlxuICAgKi9cbiAgcGxhY2VtZW50PzogUGxhY2VtZW50XG4gIC8qKlxuICAgKiDkvKDlhaUgUG9wb3ZlciDnmoQgcHJvcHNcbiAgICovXG4gIHBvcG92ZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgLyoqXG4gICAqIOW/q+aNt+mAieaLqemhue+8jOagvOW8j++8mlt7IGxhYmVsOiBcIuelluWbveeUn+aXpVwiLCB2YWx1ZTogbmV3IERhdGUoXCIyMDIwLTEwLTAxXCIpIH1dXG4gICAqL1xuICBzaG9ydGN1dHM/OiB7XG4gICAgLyoqXG4gICAgICog6K+l6aG555qE5paH5a2XXG4gICAgICovXG4gICAgbGFiZWw6IFJlYWN0LlJlYWN0Tm9kZVxuICAgIC8qKlxuICAgICAqIOivpemhueeahOaXpeacn1xuICAgICAqL1xuICAgIHZhbHVlOiBEYXRlXG4gIH1bXVxuXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU/OiBudWxsIHwgXCJsaWdodFwiXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrlvZPliY3ml6XmnJ9cbiAgICovXG4gIHZhbHVlPzogRGF0ZSB8IFwiXCIgfCBudWxsXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKbmmL7npLrkuIvmi4npgInmi6lcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuIHwgbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlUGlja2VyXG4gIGV4dGVuZHMgUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgICBJRGF0ZVBpY2tlclByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+XG4gID4ge1xuICBSYW5nZVBpY2tlcjogdHlwZW9mIFJhbmdlUGlja2VyXG59XG5cbi8qKlxuICog5pel5pyf6YCJ5oup5Zmo55So5LqO5LqG6Kej5b2T5YmN5bey6YCJ5pel5pyf77yM6YCJ5oup5oiW6L6T5YWl6ZyA6KaB55qE5pel5pyf44CB5pel5pyf6IyD5Zu0562J44CCXG4gKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IERhdGVQaWNrZXI6IElEYXRlUGlja2VyID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNsb3NlT25TZWxlY3QsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkZWZhdWx0VmlzaWJsZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZGlzYWJsZWREYXlzLFxuICAgICAgaW50ZW50LFxuICAgICAgbWF4RGF0ZSxcbiAgICAgIG1pbkRhdGUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uVmlzaWJsZUNoYW5nZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgcG9wb3ZlclByb3BzLFxuICAgICAgc2hvcnRjdXRzLFxuICAgICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgICB0aGVtZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVByb3AsXG4gICAgICB2aXNpYmxlOiB2aXNpYmxlUHJvcCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJRGF0ZVBpY2tlclByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBbbW9udGgsIHNldE1vbnRoXSA9IHVzZVN0YXRlPERhdGUgfCBcIlwiIHwgdW5kZWZpbmVkPigoKSA9PiB7XG4gICAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVByb3BcbiAgICAgIH1cbiAgICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH0pXG4gICAgY29uc3QgW3NlbGVjdGVkRGF5LCBzZXRTZWxlY3RlZERheV0gPSB1c2VTdGF0ZTxcbiAgICAgIERhdGUgfCBcIlwiIHwgbnVsbCB8IHVuZGVmaW5lZFxuICAgID4oKCkgPT4ge1xuICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWVQcm9wXG4gICAgICB9XG4gICAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9KVxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPigoKSA9PiB7XG4gICAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0RGF0ZVRvU3RyaW5nKHZhbHVlUHJvcClcbiAgICAgIH1cbiAgICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGNvbnZlcnREYXRlVG9TdHJpbmcoZGVmYXVsdFZhbHVlKVxuICAgICAgfVxuICAgICAgcmV0dXJuIFwiXCJcbiAgICB9KVxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KCgpID0+IHtcbiAgICAgIGlmICh2aXNpYmxlUHJvcCAhPT0gbnVsbCAmJiB2aXNpYmxlUHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB2aXNpYmxlUHJvcFxuICAgICAgfVxuICAgICAgaWYgKGRlZmF1bHRWaXNpYmxlICE9PSBudWxsICYmIGRlZmF1bHRWaXNpYmxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWaXNpYmxlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICAgIGlmICh2YWx1ZVByb3AgIT09IG51bGwgJiYgc2VsZWN0ZWREYXkgIT09IHZhbHVlUHJvcCkge1xuICAgICAgc2V0TW9udGgodmFsdWVQcm9wKVxuICAgICAgc2V0U2VsZWN0ZWREYXkodmFsdWVQcm9wKVxuICAgICAgc2V0VmFsdWUoY29udmVydERhdGVUb1N0cmluZyh2YWx1ZVByb3ApKVxuICAgIH1cbiAgICBpZiAodmlzaWJsZVByb3AgIT09IG51bGwgJiYgdmlzaWJsZSAhPT0gISF2aXNpYmxlUHJvcCkge1xuICAgICAgc2V0VmlzaWJsZSghIXZpc2libGVQcm9wKVxuICAgIH1cblxuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPGFueT4obnVsbClcblxuICAgIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcbiAgICBjb25zdCBzaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemVQcm9wLCBzaXplQ29udGV4dClcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0tZGF0ZUJhc2VgLFxuICAgICAgYCR7cHJlZml4fS0ke3NpemV9YFxuICAgIClcblxuICAgIGNvbnN0IHNob3J0Y3V0c0VuYWJsZWQgPSBzaG9ydGN1dHMgJiYgc2hvcnRjdXRzLmxlbmd0aCA+IDBcblxuICAgIGNvbnN0IGlzRGF5RGlzYWJsZWQgPSAoZGF5OiBEYXRlKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAoZGlzYWJsZWREYXlzICYmIGRpc2FibGVkRGF5cyhkYXkpKSB8fFxuICAgICAgICBEYXRlVXRpbHMuaXNEYXlCZWZvcmUoZGF5LCBtaW5EYXRlKSB8fFxuICAgICAgICBEYXRlVXRpbHMuaXNEYXlBZnRlcihkYXksIG1heERhdGUpXG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVmlzaWJsZUNoYW5nZSA9IChib29sOiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zdCB7IGlucHV0OiBpbnB1dEVsZW1lbnQgfSA9IGlucHV0UmVmLmN1cnJlbnRcbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50XG4gICAgICAgIGlmIChib29sIHx8ICghYm9vbCAmJiBpbnB1dEVsZW1lbnQgIT09IGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgY29uc3QgbmV3VmFsID0gY29udmVydERhdGVUb1N0cmluZyhzZWxlY3RlZERheSlcbiAgICAgICAgICBpZiAoIWJvb2wgJiYgdmFsdWUgIT09IG5ld1ZhbCkge1xuICAgICAgICAgICAgc2V0VmFsdWUobmV3VmFsKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBvblZpc2libGVDaGFuZ2UoYm9vbClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRWaXNpYmxlKGJvb2wpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZURheUNsaWNrID0gKFxuICAgICAgc2VsZWN0ZWREYXlOZXc6IERhdGUsXG4gICAgICB7IGRpc2FibGVkOiBib29sIH06IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgICApID0+IHtcbiAgICAgIGlmICghYm9vbCkge1xuICAgICAgICBpZiAoY2xvc2VPblNlbGVjdCkge1xuICAgICAgICAgIC8vIOW7tui/n+aYr+S4uuS6huiuqeeKtuaAgeeahOWPmOWMluWcqOinhuinieS4iuWFiOiiq+aOpeWPl1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgICAgICBvblZpc2libGVDaGFuZ2UoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmlzaWJsZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIURhdGVVdGlscy5pc1NhbWVEYXkoc2VsZWN0ZWREYXlOZXcsIHNlbGVjdGVkRGF5KSkge1xuICAgICAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRGF5KHNlbGVjdGVkRGF5TmV3KVxuICAgICAgICAgICAgc2V0VmFsdWUoY29udmVydERhdGVUb1N0cmluZyhzZWxlY3RlZERheU5ldykpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgb25DaGFuZ2Uoc2VsZWN0ZWREYXlOZXcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoe1xuICAgICAgdGFyZ2V0OiB7IHZhbHVlOiB2YWwgfSxcbiAgICB9OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgc2V0VmFsdWUodmFsKVxuICAgICAgaWYgKHZhbC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldFNlbGVjdGVkRGF5KG51bGwpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoXCJcIilcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc0xlZ2FsRGF0ZVN0cmluZyh2YWwpKSB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSh2YWwpXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhaXNEYXlEaXNhYmxlZChuZXdEYXRlKSAmJlxuICAgICAgICAgICFEYXRlVXRpbHMuaXNTYW1lRGF5KG5ld0RhdGUsIHNlbGVjdGVkRGF5KVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZERheShuZXdEYXRlKVxuICAgICAgICAgICAgc2V0VmFsdWUoY29udmVydERhdGVUb1N0cmluZyhuZXdEYXRlKSlcbiAgICAgICAgICAgIGlmICghRGF0ZVV0aWxzLmlzU2FtZU1vbnRoKG5ld0RhdGUsIHNlbGVjdGVkRGF5KSkge1xuICAgICAgICAgICAgICBzZXRNb250aChuZXdEYXRlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKG5ld0RhdGUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRGb2N1cyA9ICgpID0+IHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgb25WaXNpYmxlQ2hhbmdlKHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgc2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRLZXlEb3duID0gKHtcbiAgICAgIGtleUNvZGUsXG4gICAgfTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3Qga2V5cyA9IFs5LCAxMywgMjddXG4gICAgICBpZiAoa2V5cy5pbmNsdWRlcyhrZXlDb2RlKSkge1xuICAgICAgICBoYW5kbGVWaXNpYmxlQ2hhbmdlKGZhbHNlKVxuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmlucHV0LmJsdXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU1vbnRoQ2hhbmdlID0gKGRhdGU6IERhdGUpID0+IHtcbiAgICAgIGNvbnN0IG5ld0RhdGUgPSBkYXRlXG4gICAgICBpZiAobWluRGF0ZSAmJiBEYXRlVXRpbHMuaXNEYXlCZWZvcmUoZGF0ZSwgbWluRGF0ZSkpIHtcbiAgICAgICAgbmV3RGF0ZS5zZXRNb250aChtaW5EYXRlLmdldE1vbnRoKCkpXG4gICAgICB9IGVsc2UgaWYgKG1heERhdGUgJiYgRGF0ZVV0aWxzLmlzRGF5QWZ0ZXIoZGF0ZSwgbWF4RGF0ZSkpIHtcbiAgICAgICAgbmV3RGF0ZS5zZXRNb250aChtYXhEYXRlLmdldE1vbnRoKCkpXG4gICAgICB9XG4gICAgICBzZXRNb250aChuZXdEYXRlKVxuICAgIH1cblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgaW5wdXQ6IGlucHV0UmVmLmN1cnJlbnQsXG4gICAgICBoYW5kbGVEYXlDbGljayxcbiAgICAgIGhhbmRsZVZpc2libGVDaGFuZ2UsXG4gICAgfSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcG92ZXJcbiAgICAgICAgYXJyb3dlZD17ZmFsc2V9XG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZT17aGFuZGxlVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgICAgIHBvcHVwPXtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3B1cGB9PlxuICAgICAgICAgICAge3Nob3J0Y3V0c0VuYWJsZWQgJiYgKFxuICAgICAgICAgICAgICA8U2hvcnRjdXRzXG4gICAgICAgICAgICAgICAgb25TaG9ydGN1dENsaWNrPXsodmFsdWVTaG9ydGN1dDogRGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaGFuZGxlRGF5Q2xpY2sodmFsdWVTaG9ydGN1dCwge30pXG4gICAgICAgICAgICAgICAgICBzZXRNb250aCh2YWx1ZVNob3J0Y3V0KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWREYXk9e3NlbGVjdGVkRGF5fVxuICAgICAgICAgICAgICAgIHNob3J0Y3V0cz17c2hvcnRjdXRzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxEYXlQaWNrZXJcbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtpc0RheURpc2FibGVkfVxuICAgICAgICAgICAgICBmcm9tTW9udGg9e21pbkRhdGV9XG4gICAgICAgICAgICAgIHRvTW9udGg9e21heERhdGV9XG4gICAgICAgICAgICAgIGNhbkNoYW5nZU1vbnRoXG4gICAgICAgICAgICAgIGNsYXNzTmFtZXM9e3N0eWxlc31cbiAgICAgICAgICAgICAgbW9udGg9e21vbnRoIHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgbW9udGhzPXtNT05USFN9XG4gICAgICAgICAgICAgIHdlZWtkYXlzTG9uZz17V0VFS0RBWVNfTE9OR31cbiAgICAgICAgICAgICAgd2Vla2RheXNTaG9ydD17V0VFS0RBWVNfU0hPUlR9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17c2VsZWN0ZWREYXkgfHwgdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBuYXZiYXJFbGVtZW50PXtcbiAgICAgICAgICAgICAgICA8TmF2YmFyXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICAgICAgICAgIHsuLi5OYXZiYXJFbGVtZW50UHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXB0aW9uRWxlbWVudD17XG4gICAgICAgICAgICAgICAgPENhcHRpb25cbiAgICAgICAgICAgICAgICAgIG1heERhdGU9e21heERhdGV9XG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXttaW5EYXRlfVxuICAgICAgICAgICAgICAgICAgb25EYXRlQ2hhbmdlPXtoYW5kbGVNb250aENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHsuLi5DYXB0aW9uRWxlbWVudFByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25EYXlDbGljaz17aGFuZGxlRGF5Q2xpY2t9XG4gICAgICAgICAgICAgIG9uTW9udGhDaGFuZ2U9e2hhbmRsZU1vbnRoQ2hhbmdlfVxuICAgICAgICAgICAgICByZW5kZXJEYXk9eyhkYXk6IERhdGUpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsYH0+e2RheS5nZXREYXRlKCl9PC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHBvcHVwU3R5bGU9e3tcbiAgICAgICAgICBtYXhXaWR0aDogc2hvcnRjdXRzRW5hYmxlZCA/IFwiMzQycHhcIiA6IFwiMjQycHhcIixcbiAgICAgICAgICB3aWR0aDogc2hvcnRjdXRzRW5hYmxlZCA/IFwiMzQycHhcIiA6IFwiMjQycHhcIixcbiAgICAgICAgfX1cbiAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgey4uLnBvcG92ZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgICBjbGVhdmVPcHRpb25zPXt7XG4gICAgICAgICAgICBibG9ja3M6IFs0LCAyLCAyXSxcbiAgICAgICAgICAgIGRlbGltaXRlcjogXCItXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgaW50ZW50PXtpbnRlbnR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVJbnB1dEtleURvd259XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgcmlnaHRFbGVtZW50PXs8SWNvbiBpY29uPVwiY2FsZW5kYXItb3V0bGluZWRcIiAvPn1cbiAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgKVxuICB9XG4pXG5cbkRhdGVQaWNrZXIuZGlzcGxheU5hbWUgPSBcIkRhdGVQaWNrZXJcIlxuXG5EYXRlUGlja2VyLlJhbmdlUGlja2VyID0gUmFuZ2VQaWNrZXJcblxuRGF0ZVBpY2tlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuWcqOmAieaLqeWQju+8jOa2iOWksSBQb3BvdmVyXG4gICAqL1xuICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8mum7mOiupOaXpeacn1xuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya6buY6K6k5piv5ZCm5pi+56S65LiL5ouJXG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOemgeatoumAieaLqeeahOWkqe+8jGRheSA9PiBib29s77yM5q+P5LiA5aSp5piv55qE5pe26Ze05Li6IDEyOjAwOjAw77yM6L+Z5LiA5Liq5piv55SxIGRheS1waWNrZXItcmVhY3Qg5Yaz5a6a55qE77ybXG4gICAqIOavlOi+g+aXpeacn+eahOaXtuWAmeWwj+W/g+i/meS4gOeCueOAglxuICAgKi9cbiAgZGlzYWJsZWREYXlzOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9rui+k+WFpeahhuexu+Wei1xuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwibm9ybWFsXCIsXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgXSksXG4gIC8qKlxuICAgKiDmnIDlpKfpmZDliLbml6XmnJ9cbiAgICovXG4gIG1heERhdGU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAvKipcbiAgICog5pyA5bCP6ZmQ5Yi25pel5pyfXG4gICAqL1xuICBtaW5EYXRlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgLyoqXG4gICAqIOaXpeacn+aUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDmmL7npLrnirbmgIHlj5HnlJ/lj5jljJbml7bnmoRoYW5kbGVyXG4gICAqL1xuICBvblZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5Y2g5L2N5a2X56ymXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOW8ueWHuuWxguS9jee9rlxuICAgKi9cbiAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwidG9wXCIsXG4gICAgXCJsZWZ0XCIsXG4gICAgXCJyaWdodFwiLFxuICAgIFwiYm90dG9tXCIsXG4gICAgXCJ0b3BMZWZ0XCIsXG4gICAgXCJ0b3BSaWdodFwiLFxuICAgIFwiYm90dG9tTGVmdFwiLFxuICAgIFwiYm90dG9tUmlnaHRcIixcbiAgICBcImxlZnRUb3BcIixcbiAgICBcImxlZnRCb3R0b21cIixcbiAgICBcInJpZ2h0VG9wXCIsXG4gICAgXCJyaWdodEJvdHRvbVwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOS8oOWFpSBQb3BvdmVyIOeahCBwcm9wc1xuICAgKi9cbiAgcG9wb3ZlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog5b+r5o236YCJ5oup6aG577yM5qC85byP77yaW3sgbGFiZWw6IFwi56WW5Zu955Sf5pelXCIsIHZhbHVlOiBuZXcgRGF0ZShcIjIwMjAtMTAtMDFcIikgfV1cbiAgICovXG4gIHNob3J0Y3V0czogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsaWdodFwiXSksXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrlvZPliY3ml6XmnJ9cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5piv5ZCm5pi+56S65LiL5ouJ6YCJ5oupXG4gICAqL1xuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbn1cblxuRGF0ZVBpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogXCJcIixcbiAgY2xvc2VPblNlbGVjdDogZmFsc2UsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgZGVmYXVsdFZpc2libGU6IG51bGwsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZGlzYWJsZWREYXlzOiBub29wLFxuICBpbnRlbnQ6IFwibm9ybWFsXCIsXG4gIG1heERhdGU6IGdldERlZmF1bHRNYXhEYXRlKCksXG4gIG1pbkRhdGU6IGdldERlZmF1bHRNaW5EYXRlKCksXG4gIG9uQ2hhbmdlOiBub29wLFxuICBvblZpc2libGVDaGFuZ2U6IG5vb3AsXG4gIHBsYWNlaG9sZGVyOiBcIumAieaLqeaXpeacn1wiLFxuICBwbGFjZW1lbnQ6IFwiYm90dG9tTGVmdFwiLFxuICBwb3BvdmVyUHJvcHM6IHt9LFxuICBzaG9ydGN1dHM6IHVuZGVmaW5lZCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB0aGVtZTogbnVsbCxcbiAgdmFsdWU6IG51bGwsXG4gIHZpc2libGU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVQaWNrZXJcbiJdfQ==