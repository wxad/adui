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
    }), _react["default"].createElement(DayPicker, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvRGF0ZVBpY2tlci50c3giXSwibmFtZXMiOlsiRGF5UGlja2VyIiwiRFBSIiwiX19lc01vZHVsZSIsInByZWZpeCIsIm5vb3AiLCJEYXRlUGlja2VyIiwicmVmIiwiY2xhc3NOYW1lIiwiY2xvc2VPblNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsImRlZmF1bHRWaXNpYmxlIiwiZGlzYWJsZWQiLCJkaXNhYmxlZERheXMiLCJpbnRlbnQiLCJtYXhEYXRlIiwibWluRGF0ZSIsIm9uQ2hhbmdlIiwib25WaXNpYmxlQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJwbGFjZW1lbnQiLCJwb3BvdmVyUHJvcHMiLCJzaG9ydGN1dHMiLCJzaXplUHJvcCIsInNpemUiLCJ0aGVtZSIsInZhbHVlUHJvcCIsInZhbHVlIiwidmlzaWJsZVByb3AiLCJ2aXNpYmxlIiwib3RoZXJQcm9wcyIsInVuZGVmaW5lZCIsIm1vbnRoIiwic2V0TW9udGgiLCJzZWxlY3RlZERheSIsInNldFNlbGVjdGVkRGF5Iiwic2V0VmFsdWUiLCJzZXRWaXNpYmxlIiwiaW5wdXRSZWYiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJjbGFzc1NldCIsInNob3J0Y3V0c0VuYWJsZWQiLCJsZW5ndGgiLCJpc0RheURpc2FibGVkIiwiZGF5IiwiRGF0ZVV0aWxzIiwiaXNEYXlCZWZvcmUiLCJpc0RheUFmdGVyIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsImJvb2wiLCJpbnB1dEVsZW1lbnQiLCJjdXJyZW50IiwiaW5wdXQiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwibmV3VmFsIiwiaGFuZGxlRGF5Q2xpY2siLCJzZWxlY3RlZERheU5ldyIsImlzU2FtZURheSIsImhhbmRsZUlucHV0Q2hhbmdlIiwidmFsIiwidGFyZ2V0IiwidHJpbSIsIm5ld0RhdGUiLCJEYXRlIiwiaXNTYW1lTW9udGgiLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlSW5wdXRLZXlEb3duIiwia2V5Q29kZSIsImtleXMiLCJpbmNsdWRlcyIsImJsdXIiLCJoYW5kbGVNb250aENoYW5nZSIsImRhdGUiLCJnZXRNb250aCIsInZhbHVlU2hvcnRjdXQiLCJzdHlsZXMiLCJNT05USFMiLCJXRUVLREFZU19MT05HIiwiV0VFS0RBWVNfU0hPUlQiLCJOYXZiYXJFbGVtZW50UHJvcHMiLCJDYXB0aW9uRWxlbWVudFByb3BzIiwiZ2V0RGF0ZSIsIm1heFdpZHRoIiwid2lkdGgiLCJibG9ja3MiLCJkZWxpbWl0ZXIiLCJkaXNwbGF5TmFtZSIsIlJhbmdlUGlja2VyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwiZnVuYyIsIm9uZU9mIiwiaW5zdGFuY2VPZiIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7O0FBT0E7O0FBQ0E7O0FBQ0E7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBTUEsU0FBUyxHQUFHQywyQkFBSUMsVUFBSixHQUFpQkQscUNBQWpCLEdBQStCQSwwQkFBakQ7QUFDQSxJQUFNRSxNQUFNLEdBQUcsV0FBZjs7QUFDQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBd0dBLElBQU1DLFVBQXVCLEdBQUcsdUJBQzlCLGdCQXVCRUMsR0F2QkYsRUF3Qks7QUFBQSxNQXRCREMsU0FzQkMsUUF0QkRBLFNBc0JDO0FBQUEsTUFyQkRDLGFBcUJDLFFBckJEQSxhQXFCQztBQUFBLE1BcEJEQyxZQW9CQyxRQXBCREEsWUFvQkM7QUFBQSxNQW5CREMsY0FtQkMsUUFuQkRBLGNBbUJDO0FBQUEsTUFsQkRDLFFBa0JDLFFBbEJEQSxRQWtCQztBQUFBLE1BakJEQyxZQWlCQyxRQWpCREEsWUFpQkM7QUFBQSxNQWhCREMsTUFn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QXdGckJ2RSxFQUFBQSxLQUFLLEVBQUVtRSxzQkFBVUksS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxPQUFQLENBQWhCLENBeEZjO0FBNEZyQnJFLEVBQUFBLEtBQUssRUFBRWlFLHNCQUFVRSxHQTVGSTtBQWdHckJqRSxFQUFBQSxPQUFPLEVBQUUrRCxzQkFBVTFDO0FBaEdFLENBQXZCO0FBbUdBNUMsVUFBVSxDQUFDNkYsWUFBWCxHQUEwQjtBQUN4QjNGLEVBQUFBLFNBQVMsRUFBRSxFQURhO0FBRXhCQyxFQUFBQSxhQUFhLEVBQUUsS0FGUztBQUd4QkMsRUFBQUEsWUFBWSxFQUFFLElBSFU7QUFJeEJDLEVBQUFBLGNBQWMsRUFBRSxJQUpRO0FBS3hCQyxFQUFBQSxRQUFRLEVBQUUsS0FMYztBQU14QkMsRUFBQUEsWUFBWSxFQUFFUixJQU5VO0FBT3hCUyxFQUFBQSxNQUFNLEVBQUUsUUFQZ0I7QUFReEJDLEVBQUFBLE9BQU8sRUFBRSw4QkFSZTtBQVN4QkMsRUFBQUEsT0FBTyxFQUFFLDhCQVRlO0FBVXhCQyxFQUFBQSxRQUFRLEVBQUVaLElBVmM7QUFXeEJhLEVBQUFBLGVBQWUsRUFBRWIsSUFYTztBQVl4QmMsRUFBQUEsV0FBVyxFQUFFLE1BWlc7QUFheEJDLEVBQUFBLFNBQVMsRUFBRSxZQWJhO0FBY3hCQyxFQUFBQSxZQUFZLEVBQUUsRUFkVTtBQWV4QkMsRUFBQUEsU0FBUyxFQUFFUyxTQWZhO0FBZ0J4QlAsRUFBQUEsSUFBSSxFQUFFLE9BaEJrQjtBQWlCeEJDLEVBQUFBLEtBQUssRUFBRSxJQWpCaUI7QUFrQnhCRSxFQUFBQSxLQUFLLEVBQUUsSUFsQmlCO0FBbUJ4QkUsRUFBQUEsT0FBTyxFQUFFO0FBbkJlLENBQTFCO2VBc0JldkIsVSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1kdXBsaWNhdGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuaW1wb3J0IFJlYWN0LCB7XG4gIGZvcndhcmRSZWYsXG4gIHVzZUNvbnRleHQsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBEUFIgZnJvbSBcImRheS1waWNrZXItcmVhY3RcIlxuaW1wb3J0IHtcbiAgQ2FwdGlvbkVsZW1lbnRQcm9wcyxcbiAgRGF0ZVV0aWxzLFxuICBOYXZiYXJFbGVtZW50UHJvcHMsXG59IGZyb20gXCJkYXktcGlja2VyLXJlYWN0XCJcbmltcG9ydCBSYW5nZVBpY2tlciBmcm9tIFwiLi9SYW5nZVBpY2tlclwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY2xhc3NOYW1lc1wiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRcIlxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSBcIi4uL3BvcC10cmlnZ2VyXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgQ2FwdGlvbiBmcm9tIFwiLi9DYXB0aW9uXCJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCJcbmltcG9ydCBTaG9ydGN1dHMgZnJvbSBcIi4vU2hvcnRjdXRzXCJcbmltcG9ydCB7XG4gIE1PTlRIUyxcbiAgV0VFS0RBWVNfTE9ORyxcbiAgV0VFS0RBWVNfU0hPUlQsXG4gIGdldERlZmF1bHRNYXhEYXRlLFxuICBnZXREZWZhdWx0TWluRGF0ZSxcbiAgaXNMZWdhbERhdGVTdHJpbmcsXG4gIGNvbnZlcnREYXRlVG9TdHJpbmcsXG59IGZyb20gXCIuL2NvcmVcIlxuXG5jb25zdCBEYXlQaWNrZXIgPSBEUFIuX19lc01vZHVsZSA/IERQUi5kZWZhdWx0IDogRFBSXG5jb25zdCBwcmVmaXggPSBcImFkdWktZGF0ZVwiXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0ZVBpY2tlclByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm5Zyo6YCJ5oup5ZCO77yM5raI5aSxIFBvcG92ZXJcbiAgICovXG4gIGNsb3NlT25TZWxlY3Q/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrpu5jorqTml6XmnJ9cbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IERhdGUgfCBcIlwiIHwgbnVsbFxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya6buY6K6k5piv5ZCm5pi+56S65LiL5ouJXG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZT86IGJvb2xlYW4gfCBudWxsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog56aB5q2i6YCJ5oup55qE5aSp77yMZGF5ID0+IGJvb2zvvIzmr4/kuIDlpKnmmK/nmoTml7bpl7TkuLogMTI6MDA6MDDvvIzov5nkuIDkuKrmmK/nlLEgZGF5LXBpY2tlci1yZWFjdCDlhrPlrprnmoTvvJtcbiAgICog5q+U6L6D5pel5pyf55qE5pe25YCZ5bCP5b+D6L+Z5LiA54K544CCXG4gICAqL1xuICBkaXNhYmxlZERheXM/OiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbiB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9rui+k+WFpeahhuexu+Wei1xuICAgKi9cbiAgaW50ZW50PzogXCJub3JtYWxcIiB8IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCJcbiAgLyoqXG4gICAqIOacgOWkp+mZkOWItuaXpeacn1xuICAgKi9cbiAgbWF4RGF0ZT86IERhdGUgfCBudWxsXG4gIC8qKlxuICAgKiDmnIDlsI/pmZDliLbml6XmnJ9cbiAgICovXG4gIG1pbkRhdGU/OiBEYXRlIHwgbnVsbFxuICAvKipcbiAgICog5pel5pyf5pS55Y+Y5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKGRhdGU/OiBEYXRlIHwgXCJcIiB8IG51bGwpID0+IHZvaWRcbiAgLyoqXG4gICAqIOaYvuekuueKtuaAgeWPkeeUn+WPmOWMluaXtueahGhhbmRsZXJcbiAgICovXG4gIG9uVmlzaWJsZUNoYW5nZT86ICh2aXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDljaDkvY3lrZfnrKZcbiAgICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gIC8qKlxuICAgKiDlvLnlh7rlsYLkvY3nva5cbiAgICovXG4gIHBsYWNlbWVudD86IFBsYWNlbWVudFxuICAvKipcbiAgICog5Lyg5YWlIFBvcG92ZXIg55qEIHByb3BzXG4gICAqL1xuICBwb3BvdmVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIC8qKlxuICAgKiDlv6vmjbfpgInmi6npobnvvIzmoLzlvI/vvJpbeyBsYWJlbDogXCLnpZblm73nlJ/ml6VcIiwgdmFsdWU6IG5ldyBEYXRlKFwiMjAyMC0xMC0wMVwiKSB9XVxuICAgKi9cbiAgc2hvcnRjdXRzPzoge1xuICAgIC8qKlxuICAgICAqIOivpemhueeahOaWh+Wtl1xuICAgICAqL1xuICAgIGxhYmVsOiBSZWFjdC5SZWFjdE5vZGVcbiAgICAvKipcbiAgICAgKiDor6XpobnnmoTml6XmnJ9cbiAgICAgKi9cbiAgICB2YWx1ZTogRGF0ZVxuICB9W11cblxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lPzogbnVsbCB8IFwibGlnaHRcIlxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5b2T5YmN5pel5pyfXG4gICAqL1xuICB2YWx1ZT86IERhdGUgfCBcIlwiIHwgbnVsbFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5piv5ZCm5pi+56S65LiL5ouJ6YCJ5oupXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbiB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0ZVBpY2tlclxuICBleHRlbmRzIFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gICAgSURhdGVQaWNrZXJQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55PlxuICA+IHtcbiAgUmFuZ2VQaWNrZXI6IHR5cGVvZiBSYW5nZVBpY2tlclxufVxuXG4vKipcbiAqIOaXpeacn+mAieaLqeWZqOeUqOS6juS6huino+W9k+WJjeW3sumAieaXpeacn++8jOmAieaLqeaIlui+k+WFpemcgOimgeeahOaXpeacn+OAgeaXpeacn+iMg+WbtOetieOAglxuICovXG4vLyBAdHMtaWdub3JlXG5jb25zdCBEYXRlUGlja2VyOiBJRGF0ZVBpY2tlciA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjbG9zZU9uU2VsZWN0LFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZGVmYXVsdFZpc2libGUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkRGF5cyxcbiAgICAgIGludGVudCxcbiAgICAgIG1heERhdGUsXG4gICAgICBtaW5EYXRlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvblZpc2libGVDaGFuZ2UsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHBvcG92ZXJQcm9wcyxcbiAgICAgIHNob3J0Y3V0cyxcbiAgICAgIHNpemU6IHNpemVQcm9wLFxuICAgICAgdGhlbWUsXG4gICAgICB2YWx1ZTogdmFsdWVQcm9wLFxuICAgICAgdmlzaWJsZTogdmlzaWJsZVByb3AsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSURhdGVQaWNrZXJQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgW21vbnRoLCBzZXRNb250aF0gPSB1c2VTdGF0ZTxEYXRlIHwgXCJcIiB8IHVuZGVmaW5lZD4oKCkgPT4ge1xuICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWVQcm9wXG4gICAgICB9XG4gICAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9KVxuICAgIGNvbnN0IFtzZWxlY3RlZERheSwgc2V0U2VsZWN0ZWREYXldID0gdXNlU3RhdGU8XG4gICAgICBEYXRlIHwgXCJcIiB8IG51bGwgfCB1bmRlZmluZWRcbiAgICA+KCgpID0+IHtcbiAgICAgIGlmICh2YWx1ZVByb3AgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlUHJvcFxuICAgICAgfVxuICAgICAgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlXG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfSlcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oKCkgPT4ge1xuICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY29udmVydERhdGVUb1N0cmluZyh2YWx1ZVByb3ApXG4gICAgICB9XG4gICAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0RGF0ZVRvU3RyaW5nKGRlZmF1bHRWYWx1ZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBcIlwiXG4gICAgfSlcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuPigoKSA9PiB7XG4gICAgICBpZiAodmlzaWJsZVByb3AgIT09IG51bGwgJiYgdmlzaWJsZVByb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmlzaWJsZVByb3BcbiAgICAgIH1cbiAgICAgIGlmIChkZWZhdWx0VmlzaWJsZSAhPT0gbnVsbCAmJiBkZWZhdWx0VmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmlzaWJsZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsICYmIHNlbGVjdGVkRGF5ICE9PSB2YWx1ZVByb3ApIHtcbiAgICAgIHNldE1vbnRoKHZhbHVlUHJvcClcbiAgICAgIHNldFNlbGVjdGVkRGF5KHZhbHVlUHJvcClcbiAgICAgIHNldFZhbHVlKGNvbnZlcnREYXRlVG9TdHJpbmcodmFsdWVQcm9wKSlcbiAgICB9XG4gICAgaWYgKHZpc2libGVQcm9wICE9PSBudWxsICYmIHZpc2libGUgIT09ICEhdmlzaWJsZVByb3ApIHtcbiAgICAgIHNldFZpc2libGUoISF2aXNpYmxlUHJvcClcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG5cbiAgICBjb25zdCB7IHNpemU6IHNpemVDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG4gICAgY29uc3Qgc2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplUHJvcCwgc2l6ZUNvbnRleHQpXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LWRhdGVCYXNlYCxcbiAgICAgIGAke3ByZWZpeH0tJHtzaXplfWBcbiAgICApXG5cbiAgICBjb25zdCBzaG9ydGN1dHNFbmFibGVkID0gc2hvcnRjdXRzICYmIHNob3J0Y3V0cy5sZW5ndGggPiAwXG5cbiAgICBjb25zdCBpc0RheURpc2FibGVkID0gKGRheTogRGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGRpc2FibGVkRGF5cyAmJiBkaXNhYmxlZERheXMoZGF5KSkgfHxcbiAgICAgICAgRGF0ZVV0aWxzLmlzRGF5QmVmb3JlKGRheSwgbWluRGF0ZSkgfHxcbiAgICAgICAgRGF0ZVV0aWxzLmlzRGF5QWZ0ZXIoZGF5LCBtYXhEYXRlKVxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVZpc2libGVDaGFuZ2UgPSAoYm9vbDogYm9vbGVhbikgPT4ge1xuICAgICAgY29uc3QgeyBpbnB1dDogaW5wdXRFbGVtZW50IH0gPSBpbnB1dFJlZi5jdXJyZW50XG4gICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgeyBhY3RpdmVFbGVtZW50IH0gPSBkb2N1bWVudFxuICAgICAgICBpZiAoYm9vbCB8fCAoIWJvb2wgJiYgaW5wdXRFbGVtZW50ICE9PSBhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgIGNvbnN0IG5ld1ZhbCA9IGNvbnZlcnREYXRlVG9TdHJpbmcoc2VsZWN0ZWREYXkpXG4gICAgICAgICAgaWYgKCFib29sICYmIHZhbHVlICE9PSBuZXdWYWwpIHtcbiAgICAgICAgICAgIHNldFZhbHVlKG5ld1ZhbClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgICAgb25WaXNpYmxlQ2hhbmdlKGJvb2wpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2aXNpYmxlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0VmlzaWJsZShib29sKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEYXlDbGljayA9IChcbiAgICAgIHNlbGVjdGVkRGF5TmV3OiBEYXRlLFxuICAgICAgeyBkaXNhYmxlZDogYm9vbCB9OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gICAgKSA9PiB7XG4gICAgICBpZiAoIWJvb2wpIHtcbiAgICAgICAgaWYgKGNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgICAvLyDlu7bov5/mmK/kuLrkuoborqnnirbmgIHnmoTlj5jljJblnKjop4bop4nkuIrlhYjooqvmjqXlj5dcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgb25WaXNpYmxlQ2hhbmdlKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHNldFZpc2libGUoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFEYXRlVXRpbHMuaXNTYW1lRGF5KHNlbGVjdGVkRGF5TmV3LCBzZWxlY3RlZERheSkpIHtcbiAgICAgICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZERheShzZWxlY3RlZERheU5ldylcbiAgICAgICAgICAgIHNldFZhbHVlKGNvbnZlcnREYXRlVG9TdHJpbmcoc2VsZWN0ZWREYXlOZXcpKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKHNlbGVjdGVkRGF5TmV3KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKHtcbiAgICAgIHRhcmdldDogeyB2YWx1ZTogdmFsIH0sXG4gICAgfTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIHNldFZhbHVlKHZhbClcbiAgICAgIGlmICh2YWwudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICBzZXRTZWxlY3RlZERheShudWxsKVxuICAgICAgICB9XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKFwiXCIpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNMZWdhbERhdGVTdHJpbmcodmFsKSkge1xuICAgICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUodmFsKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWlzRGF5RGlzYWJsZWQobmV3RGF0ZSkgJiZcbiAgICAgICAgICAhRGF0ZVV0aWxzLmlzU2FtZURheShuZXdEYXRlLCBzZWxlY3RlZERheSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWREYXkobmV3RGF0ZSlcbiAgICAgICAgICAgIHNldFZhbHVlKGNvbnZlcnREYXRlVG9TdHJpbmcobmV3RGF0ZSkpXG4gICAgICAgICAgICBpZiAoIURhdGVVdGlscy5pc1NhbWVNb250aChuZXdEYXRlLCBzZWxlY3RlZERheSkpIHtcbiAgICAgICAgICAgICAgc2V0TW9udGgobmV3RGF0ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICBvbkNoYW5nZShuZXdEYXRlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Rm9jdXMgPSAoKSA9PiB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZSh0cnVlKVxuICAgICAgICB9XG4gICAgICAgIGlmICh2aXNpYmxlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0S2V5RG93biA9ICh7XG4gICAgICBrZXlDb2RlLFxuICAgIH06IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IGtleXMgPSBbOSwgMTMsIDI3XVxuICAgICAgaWYgKGtleXMuaW5jbHVkZXMoa2V5Q29kZSkpIHtcbiAgICAgICAgaGFuZGxlVmlzaWJsZUNoYW5nZShmYWxzZSlcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5pbnB1dC5ibHVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVNb250aENoYW5nZSA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgICBjb25zdCBuZXdEYXRlID0gZGF0ZVxuICAgICAgaWYgKG1pbkRhdGUgJiYgRGF0ZVV0aWxzLmlzRGF5QmVmb3JlKGRhdGUsIG1pbkRhdGUpKSB7XG4gICAgICAgIG5ld0RhdGUuc2V0TW9udGgobWluRGF0ZS5nZXRNb250aCgpKVxuICAgICAgfSBlbHNlIGlmIChtYXhEYXRlICYmIERhdGVVdGlscy5pc0RheUFmdGVyKGRhdGUsIG1heERhdGUpKSB7XG4gICAgICAgIG5ld0RhdGUuc2V0TW9udGgobWF4RGF0ZS5nZXRNb250aCgpKVxuICAgICAgfVxuICAgICAgc2V0TW9udGgobmV3RGF0ZSlcbiAgICB9XG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICAgIGlucHV0OiBpbnB1dFJlZi5jdXJyZW50LFxuICAgICAgaGFuZGxlRGF5Q2xpY2ssXG4gICAgICBoYW5kbGVWaXNpYmxlQ2hhbmdlLFxuICAgIH0pKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BvdmVyXG4gICAgICAgIGFycm93ZWQ9e2ZhbHNlfVxuICAgICAgICBvblZpc2libGVDaGFuZ2U9e2hhbmRsZVZpc2libGVDaGFuZ2V9XG4gICAgICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICBwb3B1cD17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcG9wdXBgfT5cbiAgICAgICAgICAgIHtzaG9ydGN1dHNFbmFibGVkICYmIChcbiAgICAgICAgICAgICAgPFNob3J0Y3V0c1xuICAgICAgICAgICAgICAgIG9uU2hvcnRjdXRDbGljaz17KHZhbHVlU2hvcnRjdXQ6IERhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGhhbmRsZURheUNsaWNrKHZhbHVlU2hvcnRjdXQsIHt9KVxuICAgICAgICAgICAgICAgICAgc2V0TW9udGgodmFsdWVTaG9ydGN1dClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRGF5PXtzZWxlY3RlZERheX1cbiAgICAgICAgICAgICAgICBzaG9ydGN1dHM9e3Nob3J0Y3V0c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8RGF5UGlja2VyXG4gICAgICAgICAgICAgIGRpc2FibGVkRGF5cz17aXNEYXlEaXNhYmxlZH1cbiAgICAgICAgICAgICAgZnJvbU1vbnRoPXttaW5EYXRlfVxuICAgICAgICAgICAgICB0b01vbnRoPXttYXhEYXRlfVxuICAgICAgICAgICAgICBjYW5DaGFuZ2VNb250aFxuICAgICAgICAgICAgICBjbGFzc05hbWVzPXtzdHlsZXN9XG4gICAgICAgICAgICAgIG1vbnRoPXttb250aCB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIG1vbnRocz17TU9OVEhTfVxuICAgICAgICAgICAgICB3ZWVrZGF5c0xvbmc9e1dFRUtEQVlTX0xPTkd9XG4gICAgICAgICAgICAgIHdlZWtkYXlzU2hvcnQ9e1dFRUtEQVlTX1NIT1JUfVxuICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e3NlbGVjdGVkRGF5IHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgbmF2YmFyRWxlbWVudD17XG4gICAgICAgICAgICAgICAgPE5hdmJhclxuICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17bWF4RGF0ZX1cbiAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e21pbkRhdGV9XG4gICAgICAgICAgICAgICAgICB7Li4uTmF2YmFyRWxlbWVudFByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FwdGlvbkVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgIDxDYXB0aW9uXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICAgICAgICAgIG9uRGF0ZUNoYW5nZT17aGFuZGxlTW9udGhDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICB7Li4uQ2FwdGlvbkVsZW1lbnRQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uRGF5Q2xpY2s9e2hhbmRsZURheUNsaWNrfVxuICAgICAgICAgICAgICBvbk1vbnRoQ2hhbmdlPXtoYW5kbGVNb250aENoYW5nZX1cbiAgICAgICAgICAgICAgcmVuZGVyRGF5PXsoZGF5OiBEYXRlKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2VsbGB9PntkYXkuZ2V0RGF0ZSgpfTwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBwb3B1cFN0eWxlPXt7XG4gICAgICAgICAgbWF4V2lkdGg6IHNob3J0Y3V0c0VuYWJsZWQgPyBcIjM0MnB4XCIgOiBcIjI0MnB4XCIsXG4gICAgICAgICAgd2lkdGg6IHNob3J0Y3V0c0VuYWJsZWQgPyBcIjM0MnB4XCIgOiBcIjI0MnB4XCIsXG4gICAgICAgIH19XG4gICAgICAgIHRyaWdnZXI9XCJjbGlja1wiXG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgIHsuLi5wb3BvdmVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgICAgY2xlYXZlT3B0aW9ucz17e1xuICAgICAgICAgICAgYmxvY2tzOiBbNCwgMiwgMl0sXG4gICAgICAgICAgICBkZWxpbWl0ZXI6IFwiLVwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGludGVudD17aW50ZW50fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVJbnB1dEZvY3VzfVxuICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlSW5wdXRLZXlEb3dufVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIHJpZ2h0RWxlbWVudD17PEljb24gaWNvbj1cImNhbGVuZGFyLW91dGxpbmVkXCIgLz59XG4gICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9Qb3BvdmVyPlxuICAgIClcbiAgfVxuKVxuXG5EYXRlUGlja2VyLmRpc3BsYXlOYW1lID0gXCJEYXRlUGlja2VyXCJcblxuRGF0ZVBpY2tlci5SYW5nZVBpY2tlciA9IFJhbmdlUGlja2VyXG5cbkRhdGVQaWNrZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKblnKjpgInmi6nlkI7vvIzmtojlpLEgUG9wb3ZlclxuICAgKi9cbiAgY2xvc2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrpu5jorqTml6XmnJ9cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8mum7mOiupOaYr+WQpuaYvuekuuS4i+aLiVxuICAgKi9cbiAgZGVmYXVsdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDnpoHmraLpgInmi6nnmoTlpKnvvIxkYXkgPT4gYm9vbO+8jOavj+S4gOWkqeaYr+eahOaXtumXtOS4uiAxMjowMDowMO+8jOi/meS4gOS4quaYr+eUsSBkYXktcGlja2VyLXJlYWN0IOWGs+WumueahO+8m1xuICAgKiDmr5TovoPml6XmnJ/nmoTml7blgJnlsI/lv4Pov5nkuIDngrnjgIJcbiAgICovXG4gIGRpc2FibGVkRGF5czogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDorr7nva7ovpPlhaXmoYbnsbvlnotcbiAgICovXG4gIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcIm5vcm1hbFwiLFxuICAgIFwicHJpbWFyeVwiLFxuICAgIFwic3VjY2Vzc1wiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gIF0pLFxuICAvKipcbiAgICog5pyA5aSn6ZmQ5Yi25pel5pyfXG4gICAqL1xuICBtYXhEYXRlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgLyoqXG4gICAqIOacgOWwj+mZkOWItuaXpeacn1xuICAgKi9cbiAgbWluRGF0ZTogUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSksXG4gIC8qKlxuICAgKiDml6XmnJ/mlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5pi+56S654q25oCB5Y+R55Sf5Y+Y5YyW5pe255qEaGFuZGxlclxuICAgKi9cbiAgb25WaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOWNoOS9jeWtl+esplxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlvLnlh7rlsYLkvY3nva5cbiAgICovXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInRvcFwiLFxuICAgIFwibGVmdFwiLFxuICAgIFwicmlnaHRcIixcbiAgICBcImJvdHRvbVwiLFxuICAgIFwidG9wTGVmdFwiLFxuICAgIFwidG9wUmlnaHRcIixcbiAgICBcImJvdHRvbUxlZnRcIixcbiAgICBcImJvdHRvbVJpZ2h0XCIsXG4gICAgXCJsZWZ0VG9wXCIsXG4gICAgXCJsZWZ0Qm90dG9tXCIsXG4gICAgXCJyaWdodFRvcFwiLFxuICAgIFwicmlnaHRCb3R0b21cIixcbiAgXSksXG4gIC8qKlxuICAgKiDkvKDlhaUgUG9wb3ZlciDnmoQgcHJvcHNcbiAgICovXG4gIHBvcG92ZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOW/q+aNt+mAieaLqemhue+8jOagvOW8j++8mlt7IGxhYmVsOiBcIuelluWbveeUn+aXpVwiLCB2YWx1ZTogbmV3IERhdGUoXCIyMDIwLTEwLTAxXCIpIH1dXG4gICAqL1xuICBzaG9ydGN1dHM6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGlnaHRcIl0pLFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5b2T5YmN5pel5pyfXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muaYr+WQpuaYvuekuuS4i+aLiemAieaLqVxuICAgKi9cbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG59XG5cbkRhdGVQaWNrZXIuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IFwiXCIsXG4gIGNsb3NlT25TZWxlY3Q6IGZhbHNlLFxuICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gIGRlZmF1bHRWaXNpYmxlOiBudWxsLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGRpc2FibGVkRGF5czogbm9vcCxcbiAgaW50ZW50OiBcIm5vcm1hbFwiLFxuICBtYXhEYXRlOiBnZXREZWZhdWx0TWF4RGF0ZSgpLFxuICBtaW5EYXRlOiBnZXREZWZhdWx0TWluRGF0ZSgpLFxuICBvbkNoYW5nZTogbm9vcCxcbiAgb25WaXNpYmxlQ2hhbmdlOiBub29wLFxuICBwbGFjZWhvbGRlcjogXCLpgInmi6nml6XmnJ9cIixcbiAgcGxhY2VtZW50OiBcImJvdHRvbUxlZnRcIixcbiAgcG9wb3ZlclByb3BzOiB7fSxcbiAgc2hvcnRjdXRzOiB1bmRlZmluZWQsXG4gIHNpemU6IFwic21hbGxcIixcbiAgdGhlbWU6IG51bGwsXG4gIHZhbHVlOiBudWxsLFxuICB2aXNpYmxlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlUGlja2VyXG4iXX0=