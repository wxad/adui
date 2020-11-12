"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react2 = _interopRequireDefault(require("cleave.js/react"));

var _warning = _interopRequireDefault(require("../_util/warning"));

var _configProvider = require("../config-provider");

var _Textarea = _interopRequireDefault(require("./Textarea"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-input";
var Input = (0, _react.forwardRef)(function (_ref, ref) {
  var _cleaveRef$current, _classNames, _classNames2, _classNames3;

  var autoComplete = _ref.autoComplete,
      autoFocus = _ref.autoFocus,
      className = _ref.className,
      cleaveOptions = _ref.cleaveOptions,
      contentJustify = _ref.contentJustify,
      countHanzi = _ref.countHanzi,
      defaultValue = _ref.defaultValue,
      disabled = _ref.disabled,
      id = _ref.id,
      intent = _ref.intent,
      leftElement = _ref.leftElement,
      limit = _ref.limit,
      name = _ref.name,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onKeyDown = _ref.onKeyDown,
      onPressEnter = _ref.onPressEnter,
      placeholder = _ref.placeholder,
      required = _ref.required,
      rightElement = _ref.rightElement,
      sizeProp = _ref.size,
      style = _ref.style,
      theme = _ref.theme,
      type = _ref.type,
      value = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["autoComplete", "autoFocus", "className", "cleaveOptions", "contentJustify", "countHanzi", "defaultValue", "disabled", "id", "intent", "leftElement", "limit", "name", "onBlur", "onChange", "onFocus", "onKeyDown", "onPressEnter", "placeholder", "required", "rightElement", "size", "style", "theme", "type", "value"]);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      leftElementWidth = _useState2[0],
      setLeftElementWidth = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      rightElementWidth = _useState4[0],
      setRightElementWidth = _useState4[1];

  var inputRef = (0, _react.useRef)(null);
  var wrapperElementRef = (0, _react.useRef)(null);
  var leftElementRef = (0, _react.useRef)(null);
  var rightElementRef = (0, _react.useRef)(null);
  var justifyElementRef = (0, _react.useRef)(null);
  var cleaveRef = (0, _react.useRef)(null);
  var inputElement = (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) || (cleaveRef === null || cleaveRef === void 0 ? void 0 : (_cleaveRef$current = cleaveRef.current) === null || _cleaveRef$current === void 0 ? void 0 : _cleaveRef$current.element);

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeContext = _useContext.size;

  var size = (0, _configProvider.getComputedSize)(sizeProp, sizeContext);

  var handleChange = function handleChange(e) {
    if (!disabled && onChange) {
      var val = e.target.value.replace(/\u0008|\u0009|\u000A|\u000B|\u000C|\u000D|\u00A0|\u2028|\u2029|\uFEFF/g, "");
      onChange(e, val);
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e);
    }

    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  var handleBlur = function handleBlur(e) {
    if (onBlur) {
      onBlur(e);
    }
  };

  var handleFocus = function handleFocus(e) {
    if (onFocus) {
      onFocus(e);
    }
  };

  var handleAttachedElementClick = function handleAttachedElementClick(position) {
    if (position === "left" && leftElement && leftElement.type && leftElement.type.name === "Icon") {
      inputElement.focus();
      inputElement.select();
    }

    if (position === "right" && rightElement && rightElement.type && rightElement.type.name === "Icon") {
      inputElement.focus();
      inputElement.select();
    }
  };

  var fixControlledValue = function fixControlledValue(val) {
    if (typeof val === "undefined" || val === null) {
      return "";
    }

    return val;
  };

  var updateElementsWidth = function updateElementsWidth() {
    if (leftElementRef === null || leftElementRef === void 0 ? void 0 : leftElementRef.current) {
      var clientWidth = leftElementRef.current.clientWidth;

      if (Math.abs(clientWidth - (leftElementWidth || 0)) > 2) {
        setLeftElementWidth(clientWidth);
      }
    } else if (leftElementWidth) {
      setLeftElementWidth(null);
    }

    if (rightElementRef === null || rightElementRef === void 0 ? void 0 : rightElementRef.current) {
      var _clientWidth = rightElementRef.current.clientWidth;

      if (Math.abs(_clientWidth - (rightElementWidth || 0)) > 2) {
        setRightElementWidth(_clientWidth);
      }
    } else if (rightElementWidth) {
      setRightElementWidth(null);
    }

    if (justifyElementRef === null || justifyElementRef === void 0 ? void 0 : justifyElementRef.current) {
      var scrollWidth = justifyElementRef.current.scrollWidth;

      if (wrapperElementRef.current && Math.ceil(scrollWidth) !== wrapperElementRef.current.clientWidth) {
        wrapperElementRef.current.style.width = "".concat(Math.ceil(scrollWidth), "px");
      }
    }
  };

  var getFormatStrLeng = function getFormatStrLeng(str) {
    var len = str.length;
    var realLength = 0;
    var charCode = -1;

    for (var _i2 = 0; _i2 < len; _i2 += 1) {
      charCode = str.charCodeAt(_i2);

      if (charCode >= 0 && charCode <= 128) {
        realLength += 0.5;
      } else {
        realLength += 1;
      }
    }

    return Math.ceil(realLength);
  };

  (0, _react.useEffect)(function () {
    updateElementsWidth();

    if (cleaveRef === null || cleaveRef === void 0 ? void 0 : cleaveRef.current) {
      var el = cleaveRef.current.element;

      if (cleaveRef.current.lastInputValue !== value) {
        cleaveRef.current.lastInputValue = value;
      }

      if (cleaveRef.current.state.value !== value) {
        cleaveRef.current.state.value = value;
      }

      if (cleaveRef.current.properties.result !== value) {
        cleaveRef.current.properties.result = value;
      }

      if (el && el.value !== value && value) {
        el.value = value;
      }
    }
  });
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      cleave: cleaveRef === null || cleaveRef === void 0 ? void 0 : cleaveRef.current,
      input: inputElement,
      leftElement: leftElementRef === null || leftElementRef === void 0 ? void 0 : leftElementRef.current,
      rightElement: rightElementRef === null || rightElementRef === void 0 ? void 0 : rightElementRef.current,
      updateElementsWidth: updateElementsWidth,
      handleChange: handleChange,
      handleKeyDown: handleKeyDown,
      handleBlur: handleBlur,
      handleFocus: handleFocus,
      handleAttachedElementClick: handleAttachedElementClick,
      focus: function focus() {
        return inputElement.focus();
      },
      blur: function blur() {
        return inputElement.blur();
      }
    };
  });
  var inputProps = {
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    className: "".concat(prefix, "-base"),
    disabled: disabled,
    id: id,
    name: name,
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    placeholder: placeholder,
    ref: inputRef,
    required: required,
    style: {
      paddingLeft: leftElementWidth ? "".concat(leftElementWidth, "px") : undefined,
      paddingRight: rightElementWidth ? "".concat(rightElementWidth, "px") : undefined
    },
    type: type
  };

  var cleaveInputProps = _objectSpread({}, inputProps);

  if (value !== null) {
    inputProps.value = fixControlledValue(value);
  } else {
    inputProps.defaultValue = fixControlledValue(defaultValue);
  }

  cleaveInputProps.value = value || defaultValue || "";
  var input = !cleaveOptions || Object.keys(cleaveOptions).length === 0 ? _react["default"].createElement("input", inputProps) : _react["default"].createElement(_react2["default"], _extends({
    options: cleaveOptions
  }, cleaveInputProps, {
    ref: cleaveRef
  }));
  var length;

  if (limit) {
    (0, _warning["default"])(!rightElement, "Input", "不允许同时使用 prop `limit` 与 prop `rightElement`");

    if (value) {
      length = countHanzi ? getFormatStrLeng(value) : value.length;
    } else {
      (0, _warning["default"])(value !== null, "Input", "如果要使用 limit Prop，必须从外部控制 value。");
      length = 0;
    }
  }

  if (contentJustify) {
    (0, _warning["default"])(value !== null, "Input", "如果使用 contentJusfity Prop，必须从外部控制 value。");
  }

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-wrapper"), "".concat(prefix, "-").concat(size), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-").concat(theme), theme), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefix, "-limited"), limit), _defineProperty(_classNames, "".concat(prefix, "-limited_digit-over-2"), limit && limit.toString().length > 2), _defineProperty(_classNames, "".concat(prefix, "-normal"), intent === "normal"), _defineProperty(_classNames, "".concat(prefix, "-primary"), intent === "primary"), _defineProperty(_classNames, "".concat(prefix, "-success"), intent === "success"), _defineProperty(_classNames, "".concat(prefix, "-warning"), intent === "warning"), _defineProperty(_classNames, "".concat(prefix, "-danger"), intent === "danger" || length && limit && length > limit), _classNames));
  var leftType = leftElement && leftElement.type ? leftElement.type.type : "";
  var rightType = rightElement && rightElement.type ? rightElement.type.type : "";
  return _react["default"].createElement("div", _extends({
    ref: wrapperElementRef,
    className: classSet,
    style: style
  }, otherProps), !!leftElement && _react["default"].createElement("div", {
    ref: leftElementRef,
    onClick: function onClick() {
      return handleAttachedElementClick("left");
    },
    role: "none",
    className: (0, _classnames["default"])("".concat(prefix, "-left"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "-left_button"), leftType === "Button"), _defineProperty(_classNames2, "".concat(prefix, "-left_icon"), leftType === "Icon"), _defineProperty(_classNames2, "".concat(prefix, "-left_select"), leftType === "Select"), _classNames2))
  }, leftElement), input, !!rightElement && _react["default"].createElement("div", {
    ref: rightElementRef,
    onClick: function onClick() {
      return handleAttachedElementClick("right");
    },
    role: "none",
    className: (0, _classnames["default"])("".concat(prefix, "-right"), (_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefix, "-right_button"), rightType === "Button"), _defineProperty(_classNames3, "".concat(prefix, "-right_icon"), rightType === "Icon"), _defineProperty(_classNames3, "".concat(prefix, "-right_select"), rightType === "Select"), _classNames3))
  }, rightElement), limit && _react["default"].createElement("div", {
    className: "".concat(prefix, "-limit")
  }, _react["default"].createElement("span", null, "".concat(length, "/").concat(limit))), contentJustify && _react["default"].createElement("div", {
    className: "".concat(prefix, "-justify"),
    ref: justifyElementRef,
    style: {
      paddingLeft: leftElementWidth ? "".concat(leftElementWidth, "px") : undefined,
      paddingRight: rightElementWidth ? "".concat(rightElementWidth, "px") : undefined,
      minWidth: style === null || style === void 0 ? void 0 : style.minWidth
    }
  }, fixControlledValue(value)));
});
Input.Textarea = _Textarea["default"];
Input.displayName = "Input";
Input.propTypes = {
  autoComplete: _propTypes["default"].oneOf(["on", "off"]),
  autoFocus: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  cleaveOptions: _propTypes["default"].object,
  contentJustify: _propTypes["default"].bool,
  countHanzi: _propTypes["default"].bool,
  defaultValue: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  id: _propTypes["default"].string,
  intent: _propTypes["default"].oneOf(["normal", "primary", "success", "warning", "danger"]),
  leftElement: _propTypes["default"].any,
  limit: _propTypes["default"].number,
  name: _propTypes["default"].string,
  onBlur: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onPressEnter: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  rightElement: _propTypes["default"].any,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  style: _propTypes["default"].object,
  theme: _propTypes["default"].oneOf([null, "light"]),
  type: _propTypes["default"].string,
  value: _propTypes["default"].string
};
Input.defaultProps = {
  autoComplete: "off",
  autoFocus: false,
  className: undefined,
  cleaveOptions: {},
  contentJustify: false,
  countHanzi: true,
  defaultValue: null,
  disabled: false,
  id: null,
  intent: "normal",
  leftElement: undefined,
  limit: null,
  name: null,
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onKeyDown: function onKeyDown() {},
  onPressEnter: function onPressEnter() {},
  placeholder: "请输入",
  required: false,
  rightElement: undefined,
  size: "small",
  style: {},
  theme: null,
  type: null,
  value: null
};
var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvaW5wdXQvSW5wdXQudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIklucHV0IiwicmVmIiwiYXV0b0NvbXBsZXRlIiwiYXV0b0ZvY3VzIiwiY2xhc3NOYW1lIiwiY2xlYXZlT3B0aW9ucyIsImNvbnRlbnRKdXN0aWZ5IiwiY291bnRIYW56aSIsImRlZmF1bHRWYWx1ZSIsImRpc2FibGVkIiwiaWQiLCJpbnRlbnQiLCJsZWZ0RWxlbWVudCIsImxpbWl0IiwibmFtZSIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwib25Gb2N1cyIsIm9uS2V5RG93biIsIm9uUHJlc3NFbnRlciIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJyaWdodEVsZW1lbnQiLCJzaXplUHJvcCIsInNpemUiLCJzdHlsZSIsInRoZW1lIiwidHlwZSIsInZhbHVlIiwib3RoZXJQcm9wcyIsImxlZnRFbGVtZW50V2lkdGgiLCJzZXRMZWZ0RWxlbWVudFdpZHRoIiwicmlnaHRFbGVtZW50V2lkdGgiLCJzZXRSaWdodEVsZW1lbnRXaWR0aCIsImlucHV0UmVmIiwid3JhcHBlckVsZW1lbnRSZWYiLCJsZWZ0RWxlbWVudFJlZiIsInJpZ2h0RWxlbWVudFJlZiIsImp1c3RpZnlFbGVtZW50UmVmIiwiY2xlYXZlUmVmIiwiaW5wdXRFbGVtZW50IiwiY3VycmVudCIsImVsZW1lbnQiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsIiwidGFyZ2V0IiwicmVwbGFjZSIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiaGFuZGxlQmx1ciIsImhhbmRsZUZvY3VzIiwiaGFuZGxlQXR0YWNoZWRFbGVtZW50Q2xpY2siLCJwb3NpdGlvbiIsImZvY3VzIiwic2VsZWN0IiwiZml4Q29udHJvbGxlZFZhbHVlIiwidXBkYXRlRWxlbWVudHNXaWR0aCIsImNsaWVudFdpZHRoIiwiTWF0aCIsImFicyIsInNjcm9sbFdpZHRoIiwiY2VpbCIsIndpZHRoIiwiZ2V0Rm9ybWF0U3RyTGVuZyIsInN0ciIsImxlbiIsImxlbmd0aCIsInJlYWxMZW5ndGgiLCJjaGFyQ29kZSIsImkiLCJjaGFyQ29kZUF0IiwiZWwiLCJsYXN0SW5wdXRWYWx1ZSIsInN0YXRlIiwicHJvcGVydGllcyIsInJlc3VsdCIsImNsZWF2ZSIsImlucHV0IiwiYmx1ciIsImlucHV0UHJvcHMiLCJwYWRkaW5nTGVmdCIsInVuZGVmaW5lZCIsInBhZGRpbmdSaWdodCIsImNsZWF2ZUlucHV0UHJvcHMiLCJPYmplY3QiLCJrZXlzIiwiY2xhc3NTZXQiLCJ0b1N0cmluZyIsImxlZnRUeXBlIiwicmlnaHRUeXBlIiwibWluV2lkdGgiLCJUZXh0YXJlYSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2YiLCJib29sIiwic3RyaW5nIiwib2JqZWN0IiwiYW55IiwibnVtYmVyIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBUUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsWUFBZjtBQXlIQSxJQUFNQyxLQUFhLEdBQUcsdUJBQ3BCLGdCQThCRUMsR0E5QkYsRUErQks7QUFBQTs7QUFBQSxNQTdCREMsWUE2QkMsUUE3QkRBLFlBNkJDO0FBQUEsTUE1QkRDLFNBNEJDLFFBNUJEQSxTQTRCQztBQUFBLE1BM0JEQyxTQTJCQyxRQTNCREEsU0EyQkM7QUFBQSxNQTFCREMsYUEwQkMsUUExQkRBLGFBMEJDO0FBQUEsTUF6QkRDLGNBeUJDLFFBekJEQSxjQXlCQztBQUFBLE1BeEJEQyxVQXdCQyxRQXhCREEsVUF3QkM7QUFBQSxNQXZCREMsWUF1QkMsUUF2QkRBLFlBdUJDO0FBQUEsTUF0QkRDLFFBc0JDLFFBdEJEQSxRQXNCQztBQUFBLE1BckJEQyxFQXFCQyxRQXJCREEsRUFxQkM7QUFBQSxNQXBCREMsTUFvQkMs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O2VBNkJlNUIsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VDb250ZXh0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VFZmZlY3QsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBDbGVhdmUgZnJvbSBcImNsZWF2ZS5qcy9yZWFjdFwiXG5pbXBvcnQgd2FybmluZyBmcm9tIFwiLi4vX3V0aWwvd2FybmluZ1wiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi9UZXh0YXJlYVwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWlucHV0XCJcblxuZXhwb3J0IGludGVyZmFjZSBJSW5wdXRQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICogaW5wdXQg5qCH562+5Y6f55Sf5bGe5oCnIC0gYXV0b0NvbXBsZXRlXG4gICAqL1xuICBhdXRvQ29tcGxldGU/OiBcIm9uXCIgfCBcIm9mZlwiXG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSBhdXRvRm9jdXNcbiAgICovXG4gIGF1dG9Gb2N1cz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDlrp7njrDmiYvmnLrlj7fjgIHml6XmnJ/jgIHmlbDlrZflj4roh6rlrprkuYnmoLzlvI/vvIzlj6/mn6XnnItb56S65L6LXShodHRwOi8vd3hhZC5kZXNpZ24vYWR1aS9jb21wb25lbnRzL2lucHV0KeOAglxuICAgKi9cbiAgY2xlYXZlT3B0aW9ucz86IG9iamVjdFxuICAvKipcbiAgICog5a695bqm5piv5ZCm5LiO5YaF5a655a695bqm5a+56b2QXG4gICAqL1xuICBjb250ZW50SnVzdGlmeT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpuaMieeFp+S4gOS4quaxieWtl+eulyAyIOWtl+aVsOeahOaWueW8j+mZkOWItumVv+W6plxuICAgKi9cbiAgY291bnRIYW56aT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOm7mOiupOWAvCAtIOWGhemDqOmpseWKqFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlPzogc3RyaW5nIHwgbnVsbFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOi+k+WFpeahhueahCBpZFxuICAgKi9cbiAgaWQ/OiBzdHJpbmcgfCBudWxsXG4gIC8qKlxuICAgKiDnsbvlnotcbiAgICovXG4gIGludGVudD86IFwibm9ybWFsXCIgfCBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJ3YXJuaW5nXCIgfCBcImRhbmdlclwiXG4gIC8qKlxuICAgKiDliY3nva7lhYPntKBcbiAgICovXG4gIGxlZnRFbGVtZW50PzogSlNYLkVsZW1lbnRcbiAgLyoqXG4gICAqIOmZkOWItumVv+W6plxuICAgKi9cbiAgbGltaXQ/OiBudW1iZXIgfCBudWxsXG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSBuYW1lXG4gICAqL1xuICBuYW1lPzogc3RyaW5nIHwgbnVsbFxuICAvKipcbiAgICogYmx1ciDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25CbHVyPzogKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOWAvOaUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PiwgdmFsdWU/OiBzdHJpbmcpID0+IHZvaWRcbiAgLyoqXG4gICAqIGZvY3VzIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkZvY3VzPzogKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWRcbiAgLyoqXG4gICAqIGtleWRvd24g5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uS2V5RG93bj86IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkXG4gIC8qKlxuICAgKiBlbnRlciDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25QcmVzc0VudGVyPzogKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWRcbiAgLyoqXG4gICAqIHBsYWNlaG9sZGVyXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICAvKipcbiAgICogaW5wdXQg5qCH562+5Y6f55Sf5bGe5oCnIC0gcmVxdWlyZWRcbiAgICovXG4gIHJlcXVpcmVkPzogYm9vbGVhblxuICAvKipcbiAgICog5ZCO572u5YWD57SgXG4gICAqL1xuICByaWdodEVsZW1lbnQ/OiBKU1guRWxlbWVudFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDpmYTliqDmoLflvI9cbiAgICovXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog6K6+572u5Li76aKYXG4gICAqL1xuICB0aGVtZT86IG51bGwgfCBcImxpZ2h0XCJcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIHR5cGVcbiAgICovXG4gIHR5cGU/OiBzdHJpbmcgfCBudWxsXG4gIC8qKlxuICAgKiDlgLwgLSDlpJbpg6jmjqfliLZcbiAgICovXG4gIHZhbHVlPzogc3RyaW5nIHwgbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJbnB1dFxuICBleHRlbmRzIFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gICAgSUlucHV0UHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT5cbiAgPiB7XG4gIFRleHRhcmVhOiB0eXBlb2YgVGV4dGFyZWFcbn1cblxuLyoqXG4gKiDovpPlhaXmoYbnlKjkuo7mlofmnKzovpPlhaXnmoTljLrln5/vvIzlj6/nu5PlkIjlm77moIfjgIHmjInpkq7jgIHpgInmi6nlmajnrYnnu4Tku7bkvb/nlKjjgIJcbiAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgSW5wdXQ6IElJbnB1dCA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBhdXRvQ29tcGxldGUsXG4gICAgICBhdXRvRm9jdXMsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjbGVhdmVPcHRpb25zLFxuICAgICAgY29udGVudEp1c3RpZnksXG4gICAgICBjb3VudEhhbnppLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpZCxcbiAgICAgIGludGVudCxcbiAgICAgIGxlZnRFbGVtZW50LFxuICAgICAgbGltaXQsXG4gICAgICBuYW1lLFxuICAgICAgb25CbHVyLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbkZvY3VzLFxuICAgICAgb25LZXlEb3duLFxuICAgICAgb25QcmVzc0VudGVyLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIHJpZ2h0RWxlbWVudCxcbiAgICAgIHNpemU6IHNpemVQcm9wLFxuICAgICAgc3R5bGUsXG4gICAgICB0aGVtZSxcbiAgICAgIHR5cGUsXG4gICAgICB2YWx1ZSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJSW5wdXRQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgW2xlZnRFbGVtZW50V2lkdGgsIHNldExlZnRFbGVtZW50V2lkdGhdID0gdXNlU3RhdGU8bnVsbCB8IG51bWJlcj4oXG4gICAgICBudWxsXG4gICAgKVxuICAgIGNvbnN0IFtyaWdodEVsZW1lbnRXaWR0aCwgc2V0UmlnaHRFbGVtZW50V2lkdGhdID0gdXNlU3RhdGU8bnVsbCB8IG51bWJlcj4oXG4gICAgICBudWxsXG4gICAgKVxuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPGFueT4obnVsbClcbiAgICBjb25zdCB3cmFwcGVyRWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcbiAgICBjb25zdCBsZWZ0RWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcbiAgICBjb25zdCByaWdodEVsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG4gICAgY29uc3QganVzdGlmeUVsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG4gICAgY29uc3QgY2xlYXZlUmVmID0gdXNlUmVmPGFueT4obnVsbClcblxuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGlucHV0UmVmPy5jdXJyZW50IHx8IGNsZWF2ZVJlZj8uY3VycmVudD8uZWxlbWVudFxuXG4gICAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuXG4gICAgY29uc3Qgc2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplUHJvcCwgc2l6ZUNvbnRleHQpXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGlmICghZGlzYWJsZWQgJiYgb25DaGFuZ2UpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29udHJvbC1yZWdleCwgbWF4LWxlbiAqL1xuICAgICAgICAvLyAwOCBCYWNrc3BhY2UsIDA5IFRhYiwgMEEg5o2i6KGM56ymLCAwQiDlnoLnm7TliLbooajnrKYsIDBDIOaNoumhtSwgMEQg5Zue6L2mLCBBMCDkuI3pl7Tmlq3nqbrmoLwsXG4gICAgICAgIC8vIDIwMjgvMjAyOSDliIbpmpTnrKYsIEZFZmYg5a2X6IqC6aG65bqP5qCH6K6w44CCXG4gICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoXG4gICAgICAgICAgL1xcdTAwMDh8XFx1MDAwOXxcXHUwMDBBfFxcdTAwMEJ8XFx1MDAwQ3xcXHUwMDBEfFxcdTAwQTB8XFx1MjAyOHxcXHUyMDI5fFxcdUZFRkYvZyxcbiAgICAgICAgICBcIlwiXG4gICAgICAgIClcbiAgICAgICAgb25DaGFuZ2UoZSwgdmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgb25QcmVzc0VudGVyKSB7XG4gICAgICAgIG9uUHJlc3NFbnRlcihlKVxuICAgICAgfVxuICAgICAgaWYgKG9uS2V5RG93bikge1xuICAgICAgICBvbktleURvd24oZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVCbHVyID0gKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGlmIChvbkJsdXIpIHtcbiAgICAgICAgb25CbHVyKGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRm9jdXMgPSAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgaWYgKG9uRm9jdXMpIHtcbiAgICAgICAgb25Gb2N1cyhlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUF0dGFjaGVkRWxlbWVudENsaWNrID0gKHBvc2l0aW9uOiBcImxlZnRcIiB8IFwicmlnaHRcIikgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBwb3NpdGlvbiA9PT0gXCJsZWZ0XCIgJiZcbiAgICAgICAgbGVmdEVsZW1lbnQgJiZcbiAgICAgICAgbGVmdEVsZW1lbnQudHlwZSAmJlxuICAgICAgICBsZWZ0RWxlbWVudC50eXBlLm5hbWUgPT09IFwiSWNvblwiXG4gICAgICApIHtcbiAgICAgICAgaW5wdXRFbGVtZW50LmZvY3VzKClcbiAgICAgICAgaW5wdXRFbGVtZW50LnNlbGVjdCgpXG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHBvc2l0aW9uID09PSBcInJpZ2h0XCIgJiZcbiAgICAgICAgcmlnaHRFbGVtZW50ICYmXG4gICAgICAgIHJpZ2h0RWxlbWVudC50eXBlICYmXG4gICAgICAgIHJpZ2h0RWxlbWVudC50eXBlLm5hbWUgPT09IFwiSWNvblwiXG4gICAgICApIHtcbiAgICAgICAgaW5wdXRFbGVtZW50LmZvY3VzKClcbiAgICAgICAgaW5wdXRFbGVtZW50LnNlbGVjdCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZml4Q29udHJvbGxlZFZhbHVlID0gKHZhbD86IHN0cmluZyB8IG51bGwpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcInVuZGVmaW5lZFwiIHx8IHZhbCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gXCJcIlxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbFxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZUVsZW1lbnRzV2lkdGggPSAoKSA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIOi/meS4quaWueazleS8muWcqCBkaWRVcGRhdGUg5ZKMIGRpZE1vdW50IOaXtuWOuyBzZXRTdGF0ZVxuICAgICAgICog5LiA5a6a6KaB6YG/5YWN6YCg5oiQ5b6q546v44CCXG4gICAgICAgKi9cbiAgICAgIGlmIChsZWZ0RWxlbWVudFJlZj8uY3VycmVudCkge1xuICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoIH0gPSBsZWZ0RWxlbWVudFJlZi5jdXJyZW50XG5cbiAgICAgICAgLy8g6Ziy5q2i5b6q546vXG4gICAgICAgIGlmIChNYXRoLmFicyhjbGllbnRXaWR0aCAtIChsZWZ0RWxlbWVudFdpZHRoIHx8IDApKSA+IDIpIHtcbiAgICAgICAgICBzZXRMZWZ0RWxlbWVudFdpZHRoKGNsaWVudFdpZHRoKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGxlZnRFbGVtZW50V2lkdGgpIHtcbiAgICAgICAgc2V0TGVmdEVsZW1lbnRXaWR0aChudWxsKVxuICAgICAgfVxuXG4gICAgICBpZiAocmlnaHRFbGVtZW50UmVmPy5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IHsgY2xpZW50V2lkdGggfSA9IHJpZ2h0RWxlbWVudFJlZi5jdXJyZW50XG5cbiAgICAgICAgLy8g6Ziy5q2i5b6q546vXG4gICAgICAgIGlmIChNYXRoLmFicyhjbGllbnRXaWR0aCAtIChyaWdodEVsZW1lbnRXaWR0aCB8fCAwKSkgPiAyKSB7XG4gICAgICAgICAgc2V0UmlnaHRFbGVtZW50V2lkdGgoY2xpZW50V2lkdGgpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmlnaHRFbGVtZW50V2lkdGgpIHtcbiAgICAgICAgc2V0UmlnaHRFbGVtZW50V2lkdGgobnVsbClcbiAgICAgIH1cblxuICAgICAgaWYgKGp1c3RpZnlFbGVtZW50UmVmPy5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IHsgc2Nyb2xsV2lkdGggfSA9IGp1c3RpZnlFbGVtZW50UmVmLmN1cnJlbnRcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHdyYXBwZXJFbGVtZW50UmVmLmN1cnJlbnQgJiZcbiAgICAgICAgICBNYXRoLmNlaWwoc2Nyb2xsV2lkdGgpICE9PSB3cmFwcGVyRWxlbWVudFJlZi5jdXJyZW50LmNsaWVudFdpZHRoXG4gICAgICAgICkge1xuICAgICAgICAgIHdyYXBwZXJFbGVtZW50UmVmLmN1cnJlbnQuc3R5bGUud2lkdGggPSBgJHtNYXRoLmNlaWwoc2Nyb2xsV2lkdGgpfXB4YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Rm9ybWF0U3RyTGVuZyA9IChzdHI6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgbGVuID0gc3RyLmxlbmd0aFxuICAgICAgbGV0IHJlYWxMZW5ndGggPSAwXG4gICAgICBsZXQgY2hhckNvZGUgPSAtMVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgICAgIGlmIChjaGFyQ29kZSA+PSAwICYmIGNoYXJDb2RlIDw9IDEyOCkge1xuICAgICAgICAgIHJlYWxMZW5ndGggKz0gMC41XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVhbExlbmd0aCArPSAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBNYXRoLmNlaWwocmVhbExlbmd0aClcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgdXBkYXRlRWxlbWVudHNXaWR0aCgpXG4gICAgICBpZiAoY2xlYXZlUmVmPy5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IGVsID0gY2xlYXZlUmVmLmN1cnJlbnQuZWxlbWVudFxuICAgICAgICAvKipcbiAgICAgICAgICog5L+u5aSNIGNsZWF2ZS4xLjQuNyBidWc6XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoY2xlYXZlUmVmLmN1cnJlbnQubGFzdElucHV0VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgY2xlYXZlUmVmLmN1cnJlbnQubGFzdElucHV0VmFsdWUgPSB2YWx1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChjbGVhdmVSZWYuY3VycmVudC5zdGF0ZS52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBjbGVhdmVSZWYuY3VycmVudC5zdGF0ZS52YWx1ZSA9IHZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsZWF2ZVJlZi5jdXJyZW50LnByb3BlcnRpZXMucmVzdWx0ICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGNsZWF2ZVJlZi5jdXJyZW50LnByb3BlcnRpZXMucmVzdWx0ID0gdmFsdWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWwgJiYgZWwudmFsdWUgIT09IHZhbHVlICYmIHZhbHVlKSB7XG4gICAgICAgICAgZWwudmFsdWUgPSB2YWx1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgY2xlYXZlOiBjbGVhdmVSZWY/LmN1cnJlbnQsXG4gICAgICBpbnB1dDogaW5wdXRFbGVtZW50LFxuICAgICAgbGVmdEVsZW1lbnQ6IGxlZnRFbGVtZW50UmVmPy5jdXJyZW50LFxuICAgICAgcmlnaHRFbGVtZW50OiByaWdodEVsZW1lbnRSZWY/LmN1cnJlbnQsXG4gICAgICB1cGRhdGVFbGVtZW50c1dpZHRoLFxuICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgaGFuZGxlS2V5RG93bixcbiAgICAgIGhhbmRsZUJsdXIsXG4gICAgICBoYW5kbGVGb2N1cyxcbiAgICAgIGhhbmRsZUF0dGFjaGVkRWxlbWVudENsaWNrLFxuICAgICAgZm9jdXM6ICgpID0+IGlucHV0RWxlbWVudC5mb2N1cygpLFxuICAgICAgYmx1cjogKCkgPT4gaW5wdXRFbGVtZW50LmJsdXIoKSxcbiAgICB9KSlcblxuICAgIGNvbnN0IGlucHV0UHJvcHM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICBhdXRvQ29tcGxldGUsXG4gICAgICBhdXRvRm9jdXMsXG4gICAgICBjbGFzc05hbWU6IGAke3ByZWZpeH0tYmFzZWAsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIG9uQmx1cjogaGFuZGxlQmx1cixcbiAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICBvbkZvY3VzOiBoYW5kbGVGb2N1cyxcbiAgICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcmVmOiBpbnB1dFJlZixcbiAgICAgIHJlcXVpcmVkLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IGxlZnRFbGVtZW50V2lkdGggPyBgJHtsZWZ0RWxlbWVudFdpZHRofXB4YCA6IHVuZGVmaW5lZCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiByaWdodEVsZW1lbnRXaWR0aCA/IGAke3JpZ2h0RWxlbWVudFdpZHRofXB4YCA6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgICB0eXBlLFxuICAgIH1cblxuICAgIGNvbnN0IGNsZWF2ZUlucHV0UHJvcHMgPSB7IC4uLmlucHV0UHJvcHMgfVxuXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICBpbnB1dFByb3BzLnZhbHVlID0gZml4Q29udHJvbGxlZFZhbHVlKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFByb3BzLmRlZmF1bHRWYWx1ZSA9IGZpeENvbnRyb2xsZWRWYWx1ZShkZWZhdWx0VmFsdWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2xlYXZlIOS4jeaOpeaUtuWOn+eUn+eahCBkZWZhdWx0VmFsdWXvvIzlv4XpobvkvKDlhaUgdmFsdWUgcHJvcCDmnaXlrp7njrAgZGVmYXVsdFZhbHVlIOeahOS9nOeUqFxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ub3Npci9jbGVhdmUuanMvYmxvYi9tYXN0ZXIvZG9jL3JlYWN0anMtY29tcG9uZW50LXVzYWdlLm1kI2hvdy10by1wYXNzLWRlZmF1bHQtdmFsdWVcbiAgICAgKi9cbiAgICBjbGVhdmVJbnB1dFByb3BzLnZhbHVlID0gdmFsdWUgfHwgZGVmYXVsdFZhbHVlIHx8IFwiXCJcblxuICAgIGNvbnN0IGlucHV0ID1cbiAgICAgICFjbGVhdmVPcHRpb25zIHx8IE9iamVjdC5rZXlzKGNsZWF2ZU9wdGlvbnMpLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgPGlucHV0IHsuLi5pbnB1dFByb3BzfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPENsZWF2ZSBvcHRpb25zPXtjbGVhdmVPcHRpb25zfSB7Li4uY2xlYXZlSW5wdXRQcm9wc30gcmVmPXtjbGVhdmVSZWZ9IC8+XG4gICAgICApXG5cbiAgICBsZXQgbGVuZ3RoXG4gICAgaWYgKGxpbWl0KSB7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICAhcmlnaHRFbGVtZW50LFxuICAgICAgICBcIklucHV0XCIsXG4gICAgICAgIFwi5LiN5YWB6K645ZCM5pe25L2/55SoIHByb3AgYGxpbWl0YCDkuI4gcHJvcCBgcmlnaHRFbGVtZW50YFwiXG4gICAgICApXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgbGVuZ3RoID0gY291bnRIYW56aSA/IGdldEZvcm1hdFN0ckxlbmcodmFsdWUpIDogdmFsdWUubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIHZhbHVlICE9PSBudWxsLFxuICAgICAgICAgIFwiSW5wdXRcIixcbiAgICAgICAgICBcIuWmguaenOimgeS9v+eUqCBsaW1pdCBQcm9w77yM5b+F6aG75LuO5aSW6YOo5o6n5Yi2IHZhbHVl44CCXCJcbiAgICAgICAgKVxuICAgICAgICBsZW5ndGggPSAwXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb250ZW50SnVzdGlmeSkge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgdmFsdWUgIT09IG51bGwsXG4gICAgICAgIFwiSW5wdXRcIixcbiAgICAgICAgXCLlpoLmnpzkvb/nlKggY29udGVudEp1c2ZpdHkgUHJvcO+8jOW/hemhu+S7juWklumDqOaOp+WItiB2YWx1ZeOAglwiXG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYCR7cHJlZml4fS13cmFwcGVyYCxcbiAgICAgIGAke3ByZWZpeH0tJHtzaXplfWAsXG4gICAgICB7XG4gICAgICAgIFtgJHtwcmVmaXh9LSR7dGhlbWV9YF06IHRoZW1lLFxuICAgICAgICBbYCR7cHJlZml4fS1kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgICAgICAgW2Ake3ByZWZpeH0tbGltaXRlZGBdOiBsaW1pdCxcbiAgICAgICAgW2Ake3ByZWZpeH0tbGltaXRlZF9kaWdpdC1vdmVyLTJgXTpcbiAgICAgICAgICBsaW1pdCAmJiBsaW1pdC50b1N0cmluZygpLmxlbmd0aCA+IDIsXG4gICAgICAgIFtgJHtwcmVmaXh9LW5vcm1hbGBdOiBpbnRlbnQgPT09IFwibm9ybWFsXCIsXG4gICAgICAgIFtgJHtwcmVmaXh9LXByaW1hcnlgXTogaW50ZW50ID09PSBcInByaW1hcnlcIixcbiAgICAgICAgW2Ake3ByZWZpeH0tc3VjY2Vzc2BdOiBpbnRlbnQgPT09IFwic3VjY2Vzc1wiLFxuICAgICAgICBbYCR7cHJlZml4fS13YXJuaW5nYF06IGludGVudCA9PT0gXCJ3YXJuaW5nXCIsXG4gICAgICAgIFtgJHtwcmVmaXh9LWRhbmdlcmBdOlxuICAgICAgICAgIGludGVudCA9PT0gXCJkYW5nZXJcIiB8fCAobGVuZ3RoICYmIGxpbWl0ICYmIGxlbmd0aCA+IGxpbWl0KSxcbiAgICAgIH1cbiAgICApXG5cbiAgICBjb25zdCBsZWZ0VHlwZSA9XG4gICAgICBsZWZ0RWxlbWVudCAmJiBsZWZ0RWxlbWVudC50eXBlID8gbGVmdEVsZW1lbnQudHlwZS50eXBlIDogXCJcIlxuICAgIGNvbnN0IHJpZ2h0VHlwZSA9XG4gICAgICByaWdodEVsZW1lbnQgJiYgcmlnaHRFbGVtZW50LnR5cGUgPyByaWdodEVsZW1lbnQudHlwZS50eXBlIDogXCJcIlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXt3cmFwcGVyRWxlbWVudFJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAgeyEhbGVmdEVsZW1lbnQgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17bGVmdEVsZW1lbnRSZWZ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBdHRhY2hlZEVsZW1lbnRDbGljayhcImxlZnRcIil9XG4gICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1sZWZ0YCwge1xuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1sZWZ0X2J1dHRvbmBdOiBsZWZ0VHlwZSA9PT0gXCJCdXR0b25cIixcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tbGVmdF9pY29uYF06IGxlZnRUeXBlID09PSBcIkljb25cIixcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tbGVmdF9zZWxlY3RgXTogbGVmdFR5cGUgPT09IFwiU2VsZWN0XCIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGVmdEVsZW1lbnR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtpbnB1dH1cbiAgICAgICAgeyEhcmlnaHRFbGVtZW50ICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e3JpZ2h0RWxlbWVudFJlZn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUF0dGFjaGVkRWxlbWVudENsaWNrKFwicmlnaHRcIil9XG4gICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1yaWdodGAsIHtcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tcmlnaHRfYnV0dG9uYF06IHJpZ2h0VHlwZSA9PT0gXCJCdXR0b25cIixcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tcmlnaHRfaWNvbmBdOiByaWdodFR5cGUgPT09IFwiSWNvblwiLFxuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1yaWdodF9zZWxlY3RgXTogcmlnaHRUeXBlID09PSBcIlNlbGVjdFwiLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3JpZ2h0RWxlbWVudH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2xpbWl0ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1saW1pdGB9PlxuICAgICAgICAgICAgPHNwYW4+e2Ake2xlbmd0aH0vJHtsaW1pdH1gfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2NvbnRlbnRKdXN0aWZ5ICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tanVzdGlmeWB9XG4gICAgICAgICAgICByZWY9e2p1c3RpZnlFbGVtZW50UmVmfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IGxlZnRFbGVtZW50V2lkdGhcbiAgICAgICAgICAgICAgICA/IGAke2xlZnRFbGVtZW50V2lkdGh9cHhgXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogcmlnaHRFbGVtZW50V2lkdGhcbiAgICAgICAgICAgICAgICA/IGAke3JpZ2h0RWxlbWVudFdpZHRofXB4YFxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBtaW5XaWR0aDogc3R5bGU/Lm1pbldpZHRoLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Zml4Q29udHJvbGxlZFZhbHVlKHZhbHVlKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuKVxuXG5JbnB1dC5UZXh0YXJlYSA9IFRleHRhcmVhXG5cbklucHV0LmRpc3BsYXlOYW1lID0gXCJJbnB1dFwiXG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIGF1dG9Db21wbGV0ZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMub25lT2YoW1wib25cIiwgXCJvZmZcIl0pLFxuICAvKipcbiAgICogaW5wdXQg5qCH562+5Y6f55Sf5bGe5oCnIC0gYXV0b0ZvY3VzXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlrp7njrDmiYvmnLrlj7fjgIHml6XmnJ/jgIHmlbDlrZflj4roh6rlrprkuYnmoLzlvI/vvIzlj6/mn6XnnItb56S65L6LXShodHRwOi8vd3hhZC5kZXNpZ24vYWR1aS9jb21wb25lbnRzL2lucHV0KeOAglxuICAgKi9cbiAgY2xlYXZlT3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOWuveW6puaYr+WQpuS4juWGheWuueWuveW6puWvuem9kFxuICAgKi9cbiAgY29udGVudEp1c3RpZnk6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5piv5ZCm5oyJ54Wn5LiA5Liq5rGJ5a2X566XIDIg5a2X5pWw55qE5pa55byP6ZmQ5Yi26ZW/5bqmXG4gICAqL1xuICBjb3VudEhhbnppOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOm7mOiupOWAvCAtIOWGhemDqOmpseWKqFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDovpPlhaXmoYbnmoQgaWRcbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJub3JtYWxcIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOWJjee9ruWFg+e0oFxuICAgKi9cbiAgbGVmdEVsZW1lbnQ6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDpmZDliLbplb/luqZcbiAgICovXG4gIGxpbWl0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogaW5wdXQg5qCH562+5Y6f55Sf5bGe5oCnIC0gbmFtZVxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGJsdXIg5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlgLzmlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogZm9jdXMg5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICoga2V5ZG93biDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIGVudGVyIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvblByZXNzRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogcGxhY2Vob2xkZXJcbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogaW5wdXQg5qCH562+5Y6f55Sf5bGe5oCnIC0gcmVxdWlyZWRcbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWQjue9ruWFg+e0oFxuICAgKi9cbiAgcmlnaHRFbGVtZW50OiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog6ZmE5Yqg5qC35byPXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsaWdodFwiXSksXG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSB0eXBlXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5YC8IC0g5aSW6YOo5o6n5Yi2XG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBhdXRvQ29tcGxldGU6IFwib2ZmXCIsXG4gIGF1dG9Gb2N1czogZmFsc2UsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBjbGVhdmVPcHRpb25zOiB7fSxcbiAgY29udGVudEp1c3RpZnk6IGZhbHNlLFxuICBjb3VudEhhbnppOiB0cnVlLFxuICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgaWQ6IG51bGwsXG4gIGludGVudDogXCJub3JtYWxcIixcbiAgbGVmdEVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgbGltaXQ6IG51bGwsXG4gIG5hbWU6IG51bGwsXG4gIG9uQmx1cjogKCkgPT4ge30sXG4gIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgb25Gb2N1czogKCkgPT4ge30sXG4gIG9uS2V5RG93bjogKCkgPT4ge30sXG4gIG9uUHJlc3NFbnRlcjogKCkgPT4ge30sXG4gIHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpVwiLFxuICByZXF1aXJlZDogZmFsc2UsXG4gIHJpZ2h0RWxlbWVudDogdW5kZWZpbmVkLFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHN0eWxlOiB7fSxcbiAgdGhlbWU6IG51bGwsXG4gIHR5cGU6IG51bGwsXG4gIHZhbHVlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuIl19