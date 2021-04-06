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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvRGF0ZVBpY2tlci50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsIkRhdGVQaWNrZXIiLCJyZWYiLCJjbGFzc05hbWUiLCJjbG9zZU9uU2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiZGVmYXVsdFZpc2libGUiLCJkaXNhYmxlZCIsImRpc2FibGVkRGF5cyIsImludGVudCIsIm1heERhdGUiLCJtaW5EYXRlIiwib25DaGFuZ2UiLCJvblZpc2libGVDaGFuZ2UiLCJwbGFjZWhvbGRlciIsInBsYWNlbWVudCIsInBvcG92ZXJQcm9wcyIsInNob3J0Y3V0cyIsInNpemVQcm9wIiwic2l6ZSIsInRoZW1lIiwidmFsdWVQcm9wIiwidmFsdWUiLCJ2aXNpYmxlUHJvcCIsInZpc2libGUiLCJvdGhlclByb3BzIiwidW5kZWZpbmVkIiwibW9udGgiLCJzZXRNb250aCIsInNlbGVjdGVkRGF5Iiwic2V0U2VsZWN0ZWREYXkiLCJzZXRWYWx1ZSIsInNldFZpc2libGUiLCJpbnB1dFJlZiIsIkNvbmZpZ0NvbnRleHQiLCJzaXplQ29udGV4dCIsImNsYXNzU2V0Iiwic2hvcnRjdXRzRW5hYmxlZCIsImxlbmd0aCIsImlzRGF5RGlzYWJsZWQiLCJkYXkiLCJEYXRlVXRpbHMiLCJpc0RheUJlZm9yZSIsImlzRGF5QWZ0ZXIiLCJoYW5kbGVWaXNpYmxlQ2hhbmdlIiwiYm9vbCIsImlucHV0RWxlbWVudCIsImN1cnJlbnQiLCJpbnB1dCIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJuZXdWYWwiLCJoYW5kbGVEYXlDbGljayIsInNlbGVjdGVkRGF5TmV3IiwiaXNTYW1lRGF5IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ2YWwiLCJ0YXJnZXQiLCJ0cmltIiwibmV3RGF0ZSIsIkRhdGUiLCJpc1NhbWVNb250aCIsImhhbmRsZUlucHV0Rm9jdXMiLCJoYW5kbGVJbnB1dEtleURvd24iLCJrZXlDb2RlIiwia2V5cyIsImluY2x1ZGVzIiwiYmx1ciIsImhhbmRsZU1vbnRoQ2hhbmdlIiwiZGF0ZSIsImdldE1vbnRoIiwidmFsdWVTaG9ydGN1dCIsInN0eWxlcyIsIk1PTlRIUyIsIldFRUtEQVlTX0xPTkciLCJXRUVLREFZU19TSE9SVCIsIk5hdmJhckVsZW1lbnRQcm9wcyIsIkNhcHRpb25FbGVtZW50UHJvcHMiLCJnZXREYXRlIiwibWF4V2lkdGgiLCJ3aWR0aCIsImJsb2NrcyIsImRlbGltaXRlciIsImRpc3BsYXlOYW1lIiwiUmFuZ2VQaWNrZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJmdW5jIiwib25lT2YiLCJpbnN0YW5jZU9mIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFNQSxNQUFNLEdBQUcsV0FBZjs7QUFDQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBd0dBLElBQU1DLFVBQXVCLEdBQUcsdUJBQzlCLGdCQXVCRUMsR0F2QkYsRUF3Qks7QUFBQSxNQXRCREMsU0FzQkMsUUF0QkRBLFNBc0JDO0FBQUEsTUFyQkRDLGFBcUJDLFFBckJEQSxhQXFCQztBQUFBLE1BcEJEQyxZQW9CQyxRQXBCREEsWUFvQkM7QUFBQSxNQW5CREMsY0FtQkMsUUFuQkRBLGNBbUJDO0FBQUEsTUFsQkRDLFFBa0JDLFFBbEJEQSxRQWtCQztBQUFBLE1BakJEQyxZQWlCQyxRQWpCREEsWUFpQkM7QUFBQSxNQWhCREMsTUFnQkMsUUFoQkRBLE1BZ0JDO0FBQUEsTUFmREMsT0FlQyxRQWZEQSxPQWVDO0FBQUEsTUFkREMsT0FjQyxRQWREQSxPQWNDO0FBQUEsTUFiREMsUUFhQyxRQWJEQSxR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QUFLLEVBQUVpRSxzQkFBVUUsR0E1Rkk7QUFnR3JCakUsRUFBQUEsT0FBTyxFQUFFK0Qsc0JBQVUxQztBQWhHRSxDQUF2QjtBQW1HQTVDLFVBQVUsQ0FBQzZGLFlBQVgsR0FBMEI7QUFDeEIzRixFQUFBQSxTQUFTLEVBQUUsRUFEYTtBQUV4QkMsRUFBQUEsYUFBYSxFQUFFLEtBRlM7QUFHeEJDLEVBQUFBLFlBQVksRUFBRSxJQUhVO0FBSXhCQyxFQUFBQSxjQUFjLEVBQUUsSUFKUTtBQUt4QkMsRUFBQUEsUUFBUSxFQUFFLEtBTGM7QUFNeEJDLEVBQUFBLFlBQVksRUFBRVIsSUFOVTtBQU94QlMsRUFBQUEsTUFBTSxFQUFFLFFBUGdCO0FBUXhCQyxFQUFBQSxPQUFPLEVBQUUsOEJBUmU7QUFTeEJDLEVBQUFBLE9BQU8sRUFBRSw4QkFUZTtBQVV4QkMsRUFBQUEsUUFBUSxFQUFFWixJQVZjO0FBV3hCYSxFQUFBQSxlQUFlLEVBQUViLElBWE87QUFZeEJjLEVBQUFBLFdBQVcsRUFBRSxNQVpXO0FBYXhCQyxFQUFBQSxTQUFTLEVBQUUsWUFiYTtBQWN4QkMsRUFBQUEsWUFBWSxFQUFFLEVBZFU7QUFleEJDLEVBQUFBLFNBQVMsRUFBRVMsU0FmYTtBQWdCeEJQLEVBQUFBLElBQUksRUFBRSxPQWhCa0I7QUFpQnhCQyxFQUFBQSxLQUFLLEVBQUUsSUFqQmlCO0FBa0J4QkUsRUFBQUEsS0FBSyxFQUFFLElBbEJpQjtBQW1CeEJFLEVBQUFBLE9BQU8sRUFBRTtBQW5CZSxDQUExQjtlQXNCZXZCLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgZm9yd2FyZFJlZixcbiAgdXNlQ29udGV4dCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlUmVmLFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IERheVBpY2tlciwge1xuICBDYXB0aW9uRWxlbWVudFByb3BzLFxuICBEYXRlVXRpbHMsXG4gIE5hdmJhckVsZW1lbnRQcm9wcyxcbn0gZnJvbSBcImRheS1waWNrZXItcmVhY3RcIlxuaW1wb3J0IFJhbmdlUGlja2VyIGZyb20gXCIuL1JhbmdlUGlja2VyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jbGFzc05hbWVzXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dFwiXG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tIFwiLi4vcG9wLXRyaWdnZXJcIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBDYXB0aW9uIGZyb20gXCIuL0NhcHRpb25cIlxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIlxuaW1wb3J0IFNob3J0Y3V0cyBmcm9tIFwiLi9TaG9ydGN1dHNcIlxuaW1wb3J0IHtcbiAgTU9OVEhTLFxuICBXRUVLREFZU19MT05HLFxuICBXRUVLREFZU19TSE9SVCxcbiAgZ2V0RGVmYXVsdE1heERhdGUsXG4gIGdldERlZmF1bHRNaW5EYXRlLFxuICBpc0xlZ2FsRGF0ZVN0cmluZyxcbiAgY29udmVydERhdGVUb1N0cmluZyxcbn0gZnJvbSBcIi4vY29yZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1kYXRlXCJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlUGlja2VyUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKblnKjpgInmi6nlkI7vvIzmtojlpLEgUG9wb3ZlclxuICAgKi9cbiAgY2xvc2VPblNlbGVjdD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8mum7mOiupOaXpeacn1xuICAgKi9cbiAgZGVmYXVsdFZhbHVlPzogRGF0ZSB8IFwiXCIgfCBudWxsXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrpu5jorqTmmK/lkKbmmL7npLrkuIvmi4lcbiAgICovXG4gIGRlZmF1bHRWaXNpYmxlPzogYm9vbGVhbiB8IG51bGxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDnpoHmraLpgInmi6nnmoTlpKnvvIxkYXkgPT4gYm9vbO+8jOavj+S4gOWkqeaYr+eahOaXtumXtOS4uiAxMjowMDowMO+8jOi/meS4gOS4quaYr+eUsSBkYXktcGlja2VyLXJlYWN0IOWGs+WumueahO+8m1xuICAgKiDmr5TovoPml6XmnJ/nmoTml7blgJnlsI/lv4Pov5nkuIDngrnjgIJcbiAgICovXG4gIGRpc2FibGVkRGF5cz86IChkYXRlOiBEYXRlKSA9PiBib29sZWFuIHwgdm9pZFxuICAvKipcbiAgICog6K6+572u6L6T5YWl5qGG57G75Z6LXG4gICAqL1xuICBpbnRlbnQ/OiBcIm5vcm1hbFwiIHwgXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiIHwgXCJkYW5nZXJcIlxuICAvKipcbiAgICog5pyA5aSn6ZmQ5Yi25pel5pyfXG4gICAqL1xuICBtYXhEYXRlPzogRGF0ZSB8IG51bGxcbiAgLyoqXG4gICAqIOacgOWwj+mZkOWItuaXpeacn1xuICAgKi9cbiAgbWluRGF0ZT86IERhdGUgfCBudWxsXG4gIC8qKlxuICAgKiDml6XmnJ/mlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAoZGF0ZT86IERhdGUgfCBcIlwiIHwgbnVsbCkgPT4gdm9pZFxuICAvKipcbiAgICog5pi+56S654q25oCB5Y+R55Sf5Y+Y5YyW5pe255qEaGFuZGxlclxuICAgKi9cbiAgb25WaXNpYmxlQ2hhbmdlPzogKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOWNoOS9jeWtl+esplxuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOW8ueWHuuWxguS9jee9rlxuICAgKi9cbiAgcGxhY2VtZW50PzogUGxhY2VtZW50XG4gIC8qKlxuICAgKiDkvKDlhaUgUG9wb3ZlciDnmoQgcHJvcHNcbiAgICovXG4gIHBvcG92ZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgLyoqXG4gICAqIOW/q+aNt+mAieaLqemhue+8jOagvOW8j++8mlt7IGxhYmVsOiBcIuelluWbveeUn+aXpVwiLCB2YWx1ZTogbmV3IERhdGUoXCIyMDIwLTEwLTAxXCIpIH1dXG4gICAqL1xuICBzaG9ydGN1dHM/OiB7XG4gICAgLyoqXG4gICAgICog6K+l6aG555qE5paH5a2XXG4gICAgICovXG4gICAgbGFiZWw6IFJlYWN0LlJlYWN0Tm9kZVxuICAgIC8qKlxuICAgICAqIOivpemhueeahOaXpeacn1xuICAgICAqL1xuICAgIHZhbHVlOiBEYXRlXG4gIH1bXVxuXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU/OiBudWxsIHwgXCJsaWdodFwiXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrlvZPliY3ml6XmnJ9cbiAgICovXG4gIHZhbHVlPzogRGF0ZSB8IFwiXCIgfCBudWxsXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKbmmL7npLrkuIvmi4npgInmi6lcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuIHwgbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlUGlja2VyXG4gIGV4dGVuZHMgUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgICBJRGF0ZVBpY2tlclByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+XG4gID4ge1xuICBSYW5nZVBpY2tlcjogdHlwZW9mIFJhbmdlUGlja2VyXG59XG5cbi8qKlxuICog5pel5pyf6YCJ5oup5Zmo55So5LqO5LqG6Kej5b2T5YmN5bey6YCJ5pel5pyf77yM6YCJ5oup5oiW6L6T5YWl6ZyA6KaB55qE5pel5pyf44CB5pel5pyf6IyD5Zu0562J44CCXG4gKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IERhdGVQaWNrZXI6IElEYXRlUGlja2VyID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNsb3NlT25TZWxlY3QsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkZWZhdWx0VmlzaWJsZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZGlzYWJsZWREYXlzLFxuICAgICAgaW50ZW50LFxuICAgICAgbWF4RGF0ZSxcbiAgICAgIG1pbkRhdGUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uVmlzaWJsZUNoYW5nZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgcG9wb3ZlclByb3BzLFxuICAgICAgc2hvcnRjdXRzLFxuICAgICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgICB0aGVtZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVByb3AsXG4gICAgICB2aXNpYmxlOiB2aXNpYmxlUHJvcCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJRGF0ZVBpY2tlclByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBbbW9udGgsIHNldE1vbnRoXSA9IHVzZVN0YXRlPERhdGUgfCBcIlwiIHwgdW5kZWZpbmVkPigoKSA9PiB7XG4gICAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVByb3BcbiAgICAgIH1cbiAgICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH0pXG4gICAgY29uc3QgW3NlbGVjdGVkRGF5LCBzZXRTZWxlY3RlZERheV0gPSB1c2VTdGF0ZTxcbiAgICAgIERhdGUgfCBcIlwiIHwgbnVsbCB8IHVuZGVmaW5lZFxuICAgID4oKCkgPT4ge1xuICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWVQcm9wXG4gICAgICB9XG4gICAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9KVxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPigoKSA9PiB7XG4gICAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0RGF0ZVRvU3RyaW5nKHZhbHVlUHJvcClcbiAgICAgIH1cbiAgICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGNvbnZlcnREYXRlVG9TdHJpbmcoZGVmYXVsdFZhbHVlKVxuICAgICAgfVxuICAgICAgcmV0dXJuIFwiXCJcbiAgICB9KVxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KCgpID0+IHtcbiAgICAgIGlmICh2aXNpYmxlUHJvcCAhPT0gbnVsbCAmJiB2aXNpYmxlUHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB2aXNpYmxlUHJvcFxuICAgICAgfVxuICAgICAgaWYgKGRlZmF1bHRWaXNpYmxlICE9PSBudWxsICYmIGRlZmF1bHRWaXNpYmxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWaXNpYmxlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICAgIGlmICh2YWx1ZVByb3AgIT09IG51bGwgJiYgc2VsZWN0ZWREYXkgIT09IHZhbHVlUHJvcCkge1xuICAgICAgc2V0TW9udGgodmFsdWVQcm9wKVxuICAgICAgc2V0U2VsZWN0ZWREYXkodmFsdWVQcm9wKVxuICAgICAgc2V0VmFsdWUoY29udmVydERhdGVUb1N0cmluZyh2YWx1ZVByb3ApKVxuICAgIH1cbiAgICBpZiAodmlzaWJsZVByb3AgIT09IG51bGwgJiYgdmlzaWJsZSAhPT0gISF2aXNpYmxlUHJvcCkge1xuICAgICAgc2V0VmlzaWJsZSghIXZpc2libGVQcm9wKVxuICAgIH1cblxuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPGFueT4obnVsbClcblxuICAgIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcbiAgICBjb25zdCBzaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemVQcm9wLCBzaXplQ29udGV4dClcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0tZGF0ZUJhc2VgLFxuICAgICAgYCR7cHJlZml4fS0ke3NpemV9YFxuICAgIClcblxuICAgIGNvbnN0IHNob3J0Y3V0c0VuYWJsZWQgPSBzaG9ydGN1dHMgJiYgc2hvcnRjdXRzLmxlbmd0aCA+IDBcblxuICAgIGNvbnN0IGlzRGF5RGlzYWJsZWQgPSAoZGF5OiBEYXRlKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAoZGlzYWJsZWREYXlzICYmIGRpc2FibGVkRGF5cyhkYXkpKSB8fFxuICAgICAgICBEYXRlVXRpbHMuaXNEYXlCZWZvcmUoZGF5LCBtaW5EYXRlKSB8fFxuICAgICAgICBEYXRlVXRpbHMuaXNEYXlBZnRlcihkYXksIG1heERhdGUpXG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVmlzaWJsZUNoYW5nZSA9IChib29sOiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zdCB7IGlucHV0OiBpbnB1dEVsZW1lbnQgfSA9IGlucHV0UmVmLmN1cnJlbnRcbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50XG4gICAgICAgIGlmIChib29sIHx8ICghYm9vbCAmJiBpbnB1dEVsZW1lbnQgIT09IGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgY29uc3QgbmV3VmFsID0gY29udmVydERhdGVUb1N0cmluZyhzZWxlY3RlZERheSlcbiAgICAgICAgICBpZiAoIWJvb2wgJiYgdmFsdWUgIT09IG5ld1ZhbCkge1xuICAgICAgICAgICAgc2V0VmFsdWUobmV3VmFsKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBvblZpc2libGVDaGFuZ2UoYm9vbClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRWaXNpYmxlKGJvb2wpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZURheUNsaWNrID0gKFxuICAgICAgc2VsZWN0ZWREYXlOZXc6IERhdGUsXG4gICAgICB7IGRpc2FibGVkOiBib29sIH06IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgICApID0+IHtcbiAgICAgIGlmICghYm9vbCkge1xuICAgICAgICBpZiAoY2xvc2VPblNlbGVjdCkge1xuICAgICAgICAgIC8vIOW7tui/n+aYr+S4uuS6huiuqeeKtuaAgeeahOWPmOWMluWcqOinhuinieS4iuWFiOiiq+aOpeWPl1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgICAgICBvblZpc2libGVDaGFuZ2UoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmlzaWJsZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIURhdGVVdGlscy5pc1NhbWVEYXkoc2VsZWN0ZWREYXlOZXcsIHNlbGVjdGVkRGF5KSkge1xuICAgICAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRGF5KHNlbGVjdGVkRGF5TmV3KVxuICAgICAgICAgICAgc2V0VmFsdWUoY29udmVydERhdGVUb1N0cmluZyhzZWxlY3RlZERheU5ldykpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgb25DaGFuZ2Uoc2VsZWN0ZWREYXlOZXcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoe1xuICAgICAgdGFyZ2V0OiB7IHZhbHVlOiB2YWwgfSxcbiAgICB9OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgc2V0VmFsdWUodmFsKVxuICAgICAgaWYgKHZhbC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldFNlbGVjdGVkRGF5KG51bGwpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoXCJcIilcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc0xlZ2FsRGF0ZVN0cmluZyh2YWwpKSB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSh2YWwpXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhaXNEYXlEaXNhYmxlZChuZXdEYXRlKSAmJlxuICAgICAgICAgICFEYXRlVXRpbHMuaXNTYW1lRGF5KG5ld0RhdGUsIHNlbGVjdGVkRGF5KVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZERheShuZXdEYXRlKVxuICAgICAgICAgICAgc2V0VmFsdWUoY29udmVydERhdGVUb1N0cmluZyhuZXdEYXRlKSlcbiAgICAgICAgICAgIGlmICghRGF0ZVV0aWxzLmlzU2FtZU1vbnRoKG5ld0RhdGUsIHNlbGVjdGVkRGF5KSkge1xuICAgICAgICAgICAgICBzZXRNb250aChuZXdEYXRlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKG5ld0RhdGUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRGb2N1cyA9ICgpID0+IHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgb25WaXNpYmxlQ2hhbmdlKHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgc2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRLZXlEb3duID0gKHtcbiAgICAgIGtleUNvZGUsXG4gICAgfTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3Qga2V5cyA9IFs5LCAxMywgMjddXG4gICAgICBpZiAoa2V5cy5pbmNsdWRlcyhrZXlDb2RlKSkge1xuICAgICAgICBoYW5kbGVWaXNpYmxlQ2hhbmdlKGZhbHNlKVxuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmlucHV0LmJsdXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU1vbnRoQ2hhbmdlID0gKGRhdGU6IERhdGUpID0+IHtcbiAgICAgIGNvbnN0IG5ld0RhdGUgPSBkYXRlXG4gICAgICBpZiAobWluRGF0ZSAmJiBEYXRlVXRpbHMuaXNEYXlCZWZvcmUoZGF0ZSwgbWluRGF0ZSkpIHtcbiAgICAgICAgbmV3RGF0ZS5zZXRNb250aChtaW5EYXRlLmdldE1vbnRoKCkpXG4gICAgICB9IGVsc2UgaWYgKG1heERhdGUgJiYgRGF0ZVV0aWxzLmlzRGF5QWZ0ZXIoZGF0ZSwgbWF4RGF0ZSkpIHtcbiAgICAgICAgbmV3RGF0ZS5zZXRNb250aChtYXhEYXRlLmdldE1vbnRoKCkpXG4gICAgICB9XG4gICAgICBzZXRNb250aChuZXdEYXRlKVxuICAgIH1cblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgaW5wdXQ6IGlucHV0UmVmLmN1cnJlbnQsXG4gICAgICBoYW5kbGVEYXlDbGljayxcbiAgICAgIGhhbmRsZVZpc2libGVDaGFuZ2UsXG4gICAgfSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcG92ZXJcbiAgICAgICAgYXJyb3dlZD17ZmFsc2V9XG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZT17aGFuZGxlVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgICAgIHBvcHVwPXtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3B1cGB9PlxuICAgICAgICAgICAge3Nob3J0Y3V0c0VuYWJsZWQgJiYgKFxuICAgICAgICAgICAgICA8U2hvcnRjdXRzXG4gICAgICAgICAgICAgICAgb25TaG9ydGN1dENsaWNrPXsodmFsdWVTaG9ydGN1dDogRGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaGFuZGxlRGF5Q2xpY2sodmFsdWVTaG9ydGN1dCwge30pXG4gICAgICAgICAgICAgICAgICBzZXRNb250aCh2YWx1ZVNob3J0Y3V0KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWREYXk9e3NlbGVjdGVkRGF5fVxuICAgICAgICAgICAgICAgIHNob3J0Y3V0cz17c2hvcnRjdXRzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxEYXlQaWNrZXJcbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtpc0RheURpc2FibGVkfVxuICAgICAgICAgICAgICBmcm9tTW9udGg9e21pbkRhdGV9XG4gICAgICAgICAgICAgIHRvTW9udGg9e21heERhdGV9XG4gICAgICAgICAgICAgIGNhbkNoYW5nZU1vbnRoXG4gICAgICAgICAgICAgIGNsYXNzTmFtZXM9e3N0eWxlc31cbiAgICAgICAgICAgICAgbW9udGg9e21vbnRoIHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgbW9udGhzPXtNT05USFN9XG4gICAgICAgICAgICAgIHdlZWtkYXlzTG9uZz17V0VFS0RBWVNfTE9OR31cbiAgICAgICAgICAgICAgd2Vla2RheXNTaG9ydD17V0VFS0RBWVNfU0hPUlR9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17c2VsZWN0ZWREYXkgfHwgdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBuYXZiYXJFbGVtZW50PXtcbiAgICAgICAgICAgICAgICA8TmF2YmFyXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICAgICAgICAgIHsuLi5OYXZiYXJFbGVtZW50UHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXB0aW9uRWxlbWVudD17XG4gICAgICAgICAgICAgICAgPENhcHRpb25cbiAgICAgICAgICAgICAgICAgIG1heERhdGU9e21heERhdGV9XG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXttaW5EYXRlfVxuICAgICAgICAgICAgICAgICAgb25EYXRlQ2hhbmdlPXtoYW5kbGVNb250aENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHsuLi5DYXB0aW9uRWxlbWVudFByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25EYXlDbGljaz17aGFuZGxlRGF5Q2xpY2t9XG4gICAgICAgICAgICAgIG9uTW9udGhDaGFuZ2U9e2hhbmRsZU1vbnRoQ2hhbmdlfVxuICAgICAgICAgICAgICByZW5kZXJEYXk9eyhkYXk6IERhdGUpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsYH0+e2RheS5nZXREYXRlKCl9PC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHBvcHVwU3R5bGU9e3tcbiAgICAgICAgICBtYXhXaWR0aDogc2hvcnRjdXRzRW5hYmxlZCA/IFwiMzQycHhcIiA6IFwiMjQycHhcIixcbiAgICAgICAgICB3aWR0aDogc2hvcnRjdXRzRW5hYmxlZCA/IFwiMzQycHhcIiA6IFwiMjQycHhcIixcbiAgICAgICAgfX1cbiAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgey4uLnBvcG92ZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgICBjbGVhdmVPcHRpb25zPXt7XG4gICAgICAgICAgICBibG9ja3M6IFs0LCAyLCAyXSxcbiAgICAgICAgICAgIGRlbGltaXRlcjogXCItXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgaW50ZW50PXtpbnRlbnR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVJbnB1dEtleURvd259XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgcmlnaHRFbGVtZW50PXs8SWNvbiBpY29uPVwiY2FsZW5kYXItb3V0bGluZWRcIiAvPn1cbiAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgKVxuICB9XG4pXG5cbkRhdGVQaWNrZXIuZGlzcGxheU5hbWUgPSBcIkRhdGVQaWNrZXJcIlxuXG5EYXRlUGlja2VyLlJhbmdlUGlja2VyID0gUmFuZ2VQaWNrZXJcblxuRGF0ZVBpY2tlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuWcqOmAieaLqeWQju+8jOa2iOWksSBQb3BvdmVyXG4gICAqL1xuICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8mum7mOiupOaXpeacn1xuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya6buY6K6k5piv5ZCm5pi+56S65LiL5ouJXG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOemgeatoumAieaLqeeahOWkqe+8jGRheSA9PiBib29s77yM5q+P5LiA5aSp5piv55qE5pe26Ze05Li6IDEyOjAwOjAw77yM6L+Z5LiA5Liq5piv55SxIGRheS1waWNrZXItcmVhY3Qg5Yaz5a6a55qE77ybXG4gICAqIOavlOi+g+aXpeacn+eahOaXtuWAmeWwj+W/g+i/meS4gOeCueOAglxuICAgKi9cbiAgZGlzYWJsZWREYXlzOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9rui+k+WFpeahhuexu+Wei1xuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwibm9ybWFsXCIsXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgXSksXG4gIC8qKlxuICAgKiDmnIDlpKfpmZDliLbml6XmnJ9cbiAgICovXG4gIG1heERhdGU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAvKipcbiAgICog5pyA5bCP6ZmQ5Yi25pel5pyfXG4gICAqL1xuICBtaW5EYXRlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKSxcbiAgLyoqXG4gICAqIOaXpeacn+aUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDmmL7npLrnirbmgIHlj5HnlJ/lj5jljJbml7bnmoRoYW5kbGVyXG4gICAqL1xuICBvblZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5Y2g5L2N5a2X56ymXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOW8ueWHuuWxguS9jee9rlxuICAgKi9cbiAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwidG9wXCIsXG4gICAgXCJsZWZ0XCIsXG4gICAgXCJyaWdodFwiLFxuICAgIFwiYm90dG9tXCIsXG4gICAgXCJ0b3BMZWZ0XCIsXG4gICAgXCJ0b3BSaWdodFwiLFxuICAgIFwiYm90dG9tTGVmdFwiLFxuICAgIFwiYm90dG9tUmlnaHRcIixcbiAgICBcImxlZnRUb3BcIixcbiAgICBcImxlZnRCb3R0b21cIixcbiAgICBcInJpZ2h0VG9wXCIsXG4gICAgXCJyaWdodEJvdHRvbVwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOS8oOWFpSBQb3BvdmVyIOeahCBwcm9wc1xuICAgKi9cbiAgcG9wb3ZlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog5b+r5o236YCJ5oup6aG577yM5qC85byP77yaW3sgbGFiZWw6IFwi56WW5Zu955Sf5pelXCIsIHZhbHVlOiBuZXcgRGF0ZShcIjIwMjAtMTAtMDFcIikgfV1cbiAgICovXG4gIHNob3J0Y3V0czogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsaWdodFwiXSksXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrlvZPliY3ml6XmnJ9cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5piv5ZCm5pi+56S65LiL5ouJ6YCJ5oupXG4gICAqL1xuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbn1cblxuRGF0ZVBpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogXCJcIixcbiAgY2xvc2VPblNlbGVjdDogZmFsc2UsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgZGVmYXVsdFZpc2libGU6IG51bGwsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZGlzYWJsZWREYXlzOiBub29wLFxuICBpbnRlbnQ6IFwibm9ybWFsXCIsXG4gIG1heERhdGU6IGdldERlZmF1bHRNYXhEYXRlKCksXG4gIG1pbkRhdGU6IGdldERlZmF1bHRNaW5EYXRlKCksXG4gIG9uQ2hhbmdlOiBub29wLFxuICBvblZpc2libGVDaGFuZ2U6IG5vb3AsXG4gIHBsYWNlaG9sZGVyOiBcIumAieaLqeaXpeacn1wiLFxuICBwbGFjZW1lbnQ6IFwiYm90dG9tTGVmdFwiLFxuICBwb3BvdmVyUHJvcHM6IHt9LFxuICBzaG9ydGN1dHM6IHVuZGVmaW5lZCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB0aGVtZTogbnVsbCxcbiAgdmFsdWU6IG51bGwsXG4gIHZpc2libGU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVQaWNrZXJcbiJdfQ==