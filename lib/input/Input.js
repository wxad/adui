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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
    if (leftElementRef !== null && leftElementRef !== void 0 && leftElementRef.current) {
      var clientWidth = leftElementRef.current.clientWidth;

      if (Math.abs(clientWidth - (leftElementWidth || 0)) > 2) {
        setLeftElementWidth(clientWidth);
      }
    } else if (leftElementWidth) {
      setLeftElementWidth(null);
    }

    if (rightElementRef !== null && rightElementRef !== void 0 && rightElementRef.current) {
      var _clientWidth = rightElementRef.current.clientWidth;

      if (Math.abs(_clientWidth - (rightElementWidth || 0)) > 2) {
        setRightElementWidth(_clientWidth);
      }
    } else if (rightElementWidth) {
      setRightElementWidth(null);
    }

    if (justifyElementRef !== null && justifyElementRef !== void 0 && justifyElementRef.current) {
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

    for (var i = 0; i < len; i += 1) {
      charCode = str.charCodeAt(i);

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

    if (cleaveRef !== null && cleaveRef !== void 0 && cleaveRef.current) {
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
    var _cleaveRef$current2;

    var realRef = (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) || (cleaveRef === null || cleaveRef === void 0 ? void 0 : (_cleaveRef$current2 = cleaveRef.current) === null || _cleaveRef$current2 === void 0 ? void 0 : _cleaveRef$current2.element);
    return {
      cleave: cleaveRef === null || cleaveRef === void 0 ? void 0 : cleaveRef.current,
      input: realRef,
      leftElement: leftElementRef === null || leftElementRef === void 0 ? void 0 : leftElementRef.current,
      rightElement: rightElementRef === null || rightElementRef === void 0 ? void 0 : rightElementRef.current,
      updateElementsWidth: updateElementsWidth,
      handleChange: handleChange,
      handleKeyDown: handleKeyDown,
      handleBlur: handleBlur,
      handleFocus: handleFocus,
      handleAttachedElementClick: handleAttachedElementClick,
      focus: function focus() {
        return realRef.focus();
      },
      blur: function blur() {
        return realRef.blur();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvaW5wdXQvSW5wdXQudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIklucHV0IiwicmVmIiwiYXV0b0NvbXBsZXRlIiwiYXV0b0ZvY3VzIiwiY2xhc3NOYW1lIiwiY2xlYXZlT3B0aW9ucyIsImNvbnRlbnRKdXN0aWZ5IiwiY291bnRIYW56aSIsImRlZmF1bHRWYWx1ZSIsImRpc2FibGVkIiwiaWQiLCJpbnRlbnQiLCJsZWZ0RWxlbWVudCIsImxpbWl0IiwibmFtZSIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwib25Gb2N1cyIsIm9uS2V5RG93biIsIm9uUHJlc3NFbnRlciIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJyaWdodEVsZW1lbnQiLCJzaXplUHJvcCIsInNpemUiLCJzdHlsZSIsInRoZW1lIiwidHlwZSIsInZhbHVlIiwib3RoZXJQcm9wcyIsImxlZnRFbGVtZW50V2lkdGgiLCJzZXRMZWZ0RWxlbWVudFdpZHRoIiwicmlnaHRFbGVtZW50V2lkdGgiLCJzZXRSaWdodEVsZW1lbnRXaWR0aCIsImlucHV0UmVmIiwid3JhcHBlckVsZW1lbnRSZWYiLCJsZWZ0RWxlbWVudFJlZiIsInJpZ2h0RWxlbWVudFJlZiIsImp1c3RpZnlFbGVtZW50UmVmIiwiY2xlYXZlUmVmIiwiaW5wdXRFbGVtZW50IiwiY3VycmVudCIsImVsZW1lbnQiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsIiwidGFyZ2V0IiwicmVwbGFjZSIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiaGFuZGxlQmx1ciIsImhhbmRsZUZvY3VzIiwiaGFuZGxlQXR0YWNoZWRFbGVtZW50Q2xpY2siLCJwb3NpdGlvbiIsImZvY3VzIiwic2VsZWN0IiwiZml4Q29udHJvbGxlZFZhbHVlIiwidXBkYXRlRWxlbWVudHNXaWR0aCIsImNsaWVudFdpZHRoIiwiTWF0aCIsImFicyIsInNjcm9sbFdpZHRoIiwiY2VpbCIsIndpZHRoIiwiZ2V0Rm9ybWF0U3RyTGVuZyIsInN0ciIsImxlbiIsImxlbmd0aCIsInJlYWxMZW5ndGgiLCJjaGFyQ29kZSIsImkiLCJjaGFyQ29kZUF0IiwiZWwiLCJsYXN0SW5wdXRWYWx1ZSIsInN0YXRlIiwicHJvcGVydGllcyIsInJlc3VsdCIsInJlYWxSZWYiLCJjbGVhdmUiLCJpbnB1dCIsImJsdXIiLCJpbnB1dFByb3BzIiwicGFkZGluZ0xlZnQiLCJ1bmRlZmluZWQiLCJwYWRkaW5nUmlnaHQiLCJjbGVhdmVJbnB1dFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsImNsYXNzU2V0IiwidG9TdHJpbmciLCJsZWZ0VHlwZSIsInJpZ2h0VHlwZSIsIm1pbldpZHRoIiwiVGV4dGFyZWEiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwiYm9vbCIsInN0cmluZyIsIm9iamVjdCIsImFueSIsIm51bWJlciIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQVFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxZQUFmO0FBeUhBLElBQU1DLEtBQWEsR0FBRyx1QkFDcEIsZ0JBOEJFQyxHQTlCRixFQStCSztBQUFBOztBQUFBLE1BN0JEQyxZQTZCQyxRQTdCREEsWUE2QkM7QUFBQSxNQTVCREMsU0E0QkMsUUE1QkRBLFNBNEJDO0FBQUEsTUEzQkRDLFNBMkJDLFFBM0JEQSxTQTJCQztBQUFBLE1BMUJEQyxhQTBCQyxRQTFCREEsYUEwQkM7QUFBQSxNQXpCREMsY0F5QkMsUUF6QkRBLGNBeUJDO0FBQUEsTUF4QkRDLFVBd0JDLFFBeEJEQSxVQXdCQztBQUFBLE1BdkJEQyxZQXVCQyxRQXZCREEsWUF1QkM7QUFBQSxNQXRCREMsUUFzQkMsUUF0QkRBLFFBc0JDO0FBQUEsTUFyQkRDLEVBcUJDLFFBckJEQSxFQXFCQztBQUFB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QUFzQm5CN0QsRUFBQUEsSUFBSSxFQUFFLE9BdEJhO0FBdUJuQkMsRUFBQUEsS0FBSyxFQUFFLEVBdkJZO0FBd0JuQkMsRUFBQUEsS0FBSyxFQUFFLElBeEJZO0FBeUJuQkMsRUFBQUEsSUFBSSxFQUFFLElBekJhO0FBMEJuQkMsRUFBQUEsS0FBSyxFQUFFO0FBMUJZLENBQXJCO2VBNkJlNUIsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VDb250ZXh0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VFZmZlY3QsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBDbGVhdmUgZnJvbSBcImNsZWF2ZS5qcy9yZWFjdFwiXG5pbXBvcnQgd2FybmluZyBmcm9tIFwiLi4vX3V0aWwvd2FybmluZ1wiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi9UZXh0YXJlYVwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWlucHV0XCJcblxuZXhwb3J0IGludGVyZmFjZSBJSW5wdXRQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICogaW5wdXQg5qCH562+5Y6f55Sf5bGe5oCnIC0gYXV0b0NvbXBsZXRlXG4gICAqL1xuICBhdXRvQ29tcGxldGU/OiBcIm9uXCIgfCBcIm9mZlwiXG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSBhdXRvRm9jdXNcbiAgICovXG4gIGF1dG9Gb2N1cz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDlrp7njrDmiYvmnLrlj7fjgIHml6XmnJ/jgIHmlbDlrZflj4roh6rlrprkuYnmoLzlvI/vvIzlj6/mn6XnnItb56S65L6LXShodHRwOi8vd3hhZC5kZXNpZ24vYWR1aS9jb21wb25lbnRzL2lucHV0KeOAglxuICAgKi9cbiAgY2xlYXZlT3B0aW9ucz86IG9iamVjdFxuICAvKipcbiAgICog5a695bqm5piv5ZCm5LiO5YaF5a655a695bqm5a+56b2QXG4gICAqL1xuICBjb250ZW50SnVzdGlmeT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpuaMieeFp+S4gOS4quaxieWtl+eulyAyIOWtl+aVsOeahOaWueW8j+mZkOWItumVv+W6plxuICAgKi9cbiAgY291bnRIYW56aT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOm7mOiupOWAvCAtIOWGhemDqOmpseWKqFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlPzogc3RyaW5nIHwgbnVsbFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOi+k+WFpeahhueahCBpZFxuICAgKi9cbiAgaWQ/OiBzdHJpbmcgfCBudWxsXG4gIC8qKlxuICAgKiDnsbvlnotcbiAgICovXG4gIGludGVudD86IFwibm9ybWFsXCIgfCBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJ3YXJuaW5nXCIgfCBcImRhbmdlclwiXG4gIC8qKlxuICAgKiDliY3nva7lhYPntKBcbiAgICovXG4gIGxlZnRFbGVtZW50PzogSlNYLkVsZW1lbnRcbiAgLyoqXG4gICAqIOmZkOWItumVv+W6plxuICAgKi9cbiAgbGltaXQ/OiBudW1iZXIgfCBudWxsXG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSBuYW1lXG4gICAqL1xuICBuYW1lPzogc3RyaW5nIHwgbnVsbFxuICAvKipcbiAgICogYmx1ciDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25CbHVyPzogKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOWAvOaUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PiwgdmFsdWU/OiBzdHJpbmcpID0+IHZvaWRcbiAgLyoqXG4gICAqIGZvY3VzIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkZvY3VzPzogKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWRcbiAgLyoqXG4gICAqIGtleWRvd24g5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uS2V5RG93bj86IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkXG4gIC8qKlxuICAgKiBlbnRlciDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25QcmVzc0VudGVyPzogKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWRcbiAgLyoqXG4gICAqIHBsYWNlaG9sZGVyXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICAvKipcbiAgICogaW5wdXQg5qCH562+5Y6f55Sf5bGe5oCnIC0gcmVxdWlyZWRcbiAgICovXG4gIHJlcXVpcmVkPzogYm9vbGVhblxuICAvKipcbiAgICog5ZCO572u5YWD57SgXG4gICAqL1xuICByaWdodEVsZW1lbnQ/OiBKU1guRWxlbWVudFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDpmYTliqDmoLflvI9cbiAgICovXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog6K6+572u5Li76aKYXG4gICAqL1xuICB0aGVtZT86IG51bGwgfCBcImxpZ2h0XCJcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIHR5cGVcbiAgICovXG4gIHR5cGU/OiBzdHJpbmcgfCBudWxsXG4gIC8qKlxuICAgKiDlgLwgLSDlpJbpg6jmjqfliLZcbiAgICovXG4gIHZhbHVlPzogc3RyaW5nIHwgbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJbnB1dFxuICBleHRlbmRzIFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gICAgSUlucHV0UHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT5cbiAgPiB7XG4gIFRleHRhcmVhOiB0eXBlb2YgVGV4dGFyZWFcbn1cblxuLyoqXG4gKiDovpPlhaXmoYbnlKjkuo7mlofmnKzovpPlhaXnmoTljLrln5/vvIzlj6/nu5PlkIjlm77moIfjgIHmjInpkq7jgIHpgInmi6nlmajnrYnnu4Tku7bkvb/nlKjjgIJcbiAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgSW5wdXQ6IElJbnB1dCA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBhdXRvQ29tcGxldGUsXG4gICAgICBhdXRvRm9jdXMsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjbGVhdmVPcHRpb25zLFxuICAgICAgY29udGVudEp1c3RpZnksXG4gICAgICBjb3VudEhhbnppLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpZCxcbiAgICAgIGludGVudCxcbiAgICAgIGxlZnRFbGVtZW50LFxuICAgICAgbGltaXQsXG4gICAgICBuYW1lLFxuICAgICAgb25CbHVyLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbkZvY3VzLFxuICAgICAgb25LZXlEb3duLFxuICAgICAgb25QcmVzc0VudGVyLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIHJpZ2h0RWxlbWVudCxcbiAgICAgIHNpemU6IHNpemVQcm9wLFxuICAgICAgc3R5bGUsXG4gICAgICB0aGVtZSxcbiAgICAgIHR5cGUsXG4gICAgICB2YWx1ZSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJSW5wdXRQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgW2xlZnRFbGVtZW50V2lkdGgsIHNldExlZnRFbGVtZW50V2lkdGhdID0gdXNlU3RhdGU8bnVsbCB8IG51bWJlcj4oXG4gICAgICBudWxsXG4gICAgKVxuICAgIGNvbnN0IFtyaWdodEVsZW1lbnRXaWR0aCwgc2V0UmlnaHRFbGVtZW50V2lkdGhdID0gdXNlU3RhdGU8bnVsbCB8IG51bWJlcj4oXG4gICAgICBudWxsXG4gICAgKVxuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPGFueT4obnVsbClcbiAgICBjb25zdCB3cmFwcGVyRWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcbiAgICBjb25zdCBsZWZ0RWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcbiAgICBjb25zdCByaWdodEVsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG4gICAgY29uc3QganVzdGlmeUVsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG4gICAgY29uc3QgY2xlYXZlUmVmID0gdXNlUmVmPGFueT4obnVsbClcblxuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGlucHV0UmVmPy5jdXJyZW50IHx8IGNsZWF2ZVJlZj8uY3VycmVudD8uZWxlbWVudFxuXG4gICAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuXG4gICAgY29uc3Qgc2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplUHJvcCwgc2l6ZUNvbnRleHQpXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGlmICghZGlzYWJsZWQgJiYgb25DaGFuZ2UpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29udHJvbC1yZWdleCwgbWF4LWxlbiAqL1xuICAgICAgICAvLyAwOCBCYWNrc3BhY2UsIDA5IFRhYiwgMEEg5o2i6KGM56ymLCAwQiDlnoLnm7TliLbooajnrKYsIDBDIOaNoumhtSwgMEQg5Zue6L2mLCBBMCDkuI3pl7Tmlq3nqbrmoLwsXG4gICAgICAgIC8vIDIwMjgvMjAyOSDliIbpmpTnrKYsIEZFZmYg5a2X6IqC6aG65bqP5qCH6K6w44CCXG4gICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoXG4gICAgICAgICAgL1xcdTAwMDh8XFx1MDAwOXxcXHUwMDBBfFxcdTAwMEJ8XFx1MDAwQ3xcXHUwMDBEfFxcdTAwQTB8XFx1MjAyOHxcXHUyMDI5fFxcdUZFRkYvZyxcbiAgICAgICAgICBcIlwiXG4gICAgICAgIClcbiAgICAgICAgb25DaGFuZ2UoZSwgdmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgb25QcmVzc0VudGVyKSB7XG4gICAgICAgIG9uUHJlc3NFbnRlcihlKVxuICAgICAgfVxuICAgICAgaWYgKG9uS2V5RG93bikge1xuICAgICAgICBvbktleURvd24oZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVCbHVyID0gKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGlmIChvbkJsdXIpIHtcbiAgICAgICAgb25CbHVyKGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRm9jdXMgPSAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgaWYgKG9uRm9jdXMpIHtcbiAgICAgICAgb25Gb2N1cyhlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUF0dGFjaGVkRWxlbWVudENsaWNrID0gKHBvc2l0aW9uOiBcImxlZnRcIiB8IFwicmlnaHRcIikgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBwb3NpdGlvbiA9PT0gXCJsZWZ0XCIgJiZcbiAgICAgICAgbGVmdEVsZW1lbnQgJiZcbiAgICAgICAgbGVmdEVsZW1lbnQudHlwZSAmJlxuICAgICAgICBsZWZ0RWxlbWVudC50eXBlLm5hbWUgPT09IFwiSWNvblwiXG4gICAgICApIHtcbiAgICAgICAgaW5wdXRFbGVtZW50LmZvY3VzKClcbiAgICAgICAgaW5wdXRFbGVtZW50LnNlbGVjdCgpXG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHBvc2l0aW9uID09PSBcInJpZ2h0XCIgJiZcbiAgICAgICAgcmlnaHRFbGVtZW50ICYmXG4gICAgICAgIHJpZ2h0RWxlbWVudC50eXBlICYmXG4gICAgICAgIHJpZ2h0RWxlbWVudC50eXBlLm5hbWUgPT09IFwiSWNvblwiXG4gICAgICApIHtcbiAgICAgICAgaW5wdXRFbGVtZW50LmZvY3VzKClcbiAgICAgICAgaW5wdXRFbGVtZW50LnNlbGVjdCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZml4Q29udHJvbGxlZFZhbHVlID0gKHZhbD86IHN0cmluZyB8IG51bGwpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcInVuZGVmaW5lZFwiIHx8IHZhbCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gXCJcIlxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbFxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZUVsZW1lbnRzV2lkdGggPSAoKSA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIOi/meS4quaWueazleS8muWcqCBkaWRVcGRhdGUg5ZKMIGRpZE1vdW50IOaXtuWOuyBzZXRTdGF0ZVxuICAgICAgICog5LiA5a6a6KaB6YG/5YWN6YCg5oiQ5b6q546v44CCXG4gICAgICAgKi9cbiAgICAgIGlmIChsZWZ0RWxlbWVudFJlZj8uY3VycmVudCkge1xuICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoIH0gPSBsZWZ0RWxlbWVudFJlZi5jdXJyZW50XG5cbiAgICAgICAgLy8g6Ziy5q2i5b6q546vXG4gICAgICAgIGlmIChNYXRoLmFicyhjbGllbnRXaWR0aCAtIChsZWZ0RWxlbWVudFdpZHRoIHx8IDApKSA+IDIpIHtcbiAgICAgICAgICBzZXRMZWZ0RWxlbWVudFdpZHRoKGNsaWVudFdpZHRoKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGxlZnRFbGVtZW50V2lkdGgpIHtcbiAgICAgICAgc2V0TGVmdEVsZW1lbnRXaWR0aChudWxsKVxuICAgICAgfVxuXG4gICAgICBpZiAocmlnaHRFbGVtZW50UmVmPy5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IHsgY2xpZW50V2lkdGggfSA9IHJpZ2h0RWxlbWVudFJlZi5jdXJyZW50XG5cbiAgICAgICAgLy8g6Ziy5q2i5b6q546vXG4gICAgICAgIGlmIChNYXRoLmFicyhjbGllbnRXaWR0aCAtIChyaWdodEVsZW1lbnRXaWR0aCB8fCAwKSkgPiAyKSB7XG4gICAgICAgICAgc2V0UmlnaHRFbGVtZW50V2lkdGgoY2xpZW50V2lkdGgpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmlnaHRFbGVtZW50V2lkdGgpIHtcbiAgICAgICAgc2V0UmlnaHRFbGVtZW50V2lkdGgobnVsbClcbiAgICAgIH1cblxuICAgICAgaWYgKGp1c3RpZnlFbGVtZW50UmVmPy5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IHsgc2Nyb2xsV2lkdGggfSA9IGp1c3RpZnlFbGVtZW50UmVmLmN1cnJlbnRcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHdyYXBwZXJFbGVtZW50UmVmLmN1cnJlbnQgJiZcbiAgICAgICAgICBNYXRoLmNlaWwoc2Nyb2xsV2lkdGgpICE9PSB3cmFwcGVyRWxlbWVudFJlZi5jdXJyZW50LmNsaWVudFdpZHRoXG4gICAgICAgICkge1xuICAgICAgICAgIHdyYXBwZXJFbGVtZW50UmVmLmN1cnJlbnQuc3R5bGUud2lkdGggPSBgJHtNYXRoLmNlaWwoc2Nyb2xsV2lkdGgpfXB4YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Rm9ybWF0U3RyTGVuZyA9IChzdHI6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgbGVuID0gc3RyLmxlbmd0aFxuICAgICAgbGV0IHJlYWxMZW5ndGggPSAwXG4gICAgICBsZXQgY2hhckNvZGUgPSAtMVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgICAgIGlmIChjaGFyQ29kZSA+PSAwICYmIGNoYXJDb2RlIDw9IDEyOCkge1xuICAgICAgICAgIHJlYWxMZW5ndGggKz0gMC41XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVhbExlbmd0aCArPSAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBNYXRoLmNlaWwocmVhbExlbmd0aClcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgdXBkYXRlRWxlbWVudHNXaWR0aCgpXG4gICAgICBpZiAoY2xlYXZlUmVmPy5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IGVsID0gY2xlYXZlUmVmLmN1cnJlbnQuZWxlbWVudFxuICAgICAgICAvKipcbiAgICAgICAgICog5L+u5aSNIGNsZWF2ZS4xLjQuNyBidWc6XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoY2xlYXZlUmVmLmN1cnJlbnQubGFzdElucHV0VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgY2xlYXZlUmVmLmN1cnJlbnQubGFzdElucHV0VmFsdWUgPSB2YWx1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChjbGVhdmVSZWYuY3VycmVudC5zdGF0ZS52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBjbGVhdmVSZWYuY3VycmVudC5zdGF0ZS52YWx1ZSA9IHZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsZWF2ZVJlZi5jdXJyZW50LnByb3BlcnRpZXMucmVzdWx0ICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGNsZWF2ZVJlZi5jdXJyZW50LnByb3BlcnRpZXMucmVzdWx0ID0gdmFsdWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWwgJiYgZWwudmFsdWUgIT09IHZhbHVlICYmIHZhbHVlKSB7XG4gICAgICAgICAgZWwudmFsdWUgPSB2YWx1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiB7XG4gICAgICBjb25zdCByZWFsUmVmID0gaW5wdXRSZWY/LmN1cnJlbnQgfHwgY2xlYXZlUmVmPy5jdXJyZW50Py5lbGVtZW50XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbGVhdmU6IGNsZWF2ZVJlZj8uY3VycmVudCxcbiAgICAgICAgaW5wdXQ6IHJlYWxSZWYsXG4gICAgICAgIGxlZnRFbGVtZW50OiBsZWZ0RWxlbWVudFJlZj8uY3VycmVudCxcbiAgICAgICAgcmlnaHRFbGVtZW50OiByaWdodEVsZW1lbnRSZWY/LmN1cnJlbnQsXG4gICAgICAgIHVwZGF0ZUVsZW1lbnRzV2lkdGgsXG4gICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgaGFuZGxlS2V5RG93bixcbiAgICAgICAgaGFuZGxlQmx1cixcbiAgICAgICAgaGFuZGxlRm9jdXMsXG4gICAgICAgIGhhbmRsZUF0dGFjaGVkRWxlbWVudENsaWNrLFxuICAgICAgICBmb2N1czogKCkgPT4gcmVhbFJlZi5mb2N1cygpLFxuICAgICAgICBibHVyOiAoKSA9PiByZWFsUmVmLmJsdXIoKSxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW5wdXRQcm9wczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgIGF1dG9Db21wbGV0ZSxcbiAgICAgIGF1dG9Gb2N1cyxcbiAgICAgIGNsYXNzTmFtZTogYCR7cHJlZml4fS1iYXNlYCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgb25CbHVyOiBoYW5kbGVCbHVyLFxuICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgIG9uRm9jdXM6IGhhbmRsZUZvY3VzLFxuICAgICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICByZWY6IGlucHV0UmVmLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBzdHlsZToge1xuICAgICAgICBwYWRkaW5nTGVmdDogbGVmdEVsZW1lbnRXaWR0aCA/IGAke2xlZnRFbGVtZW50V2lkdGh9cHhgIDogdW5kZWZpbmVkLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHJpZ2h0RWxlbWVudFdpZHRoID8gYCR7cmlnaHRFbGVtZW50V2lkdGh9cHhgIDogdW5kZWZpbmVkLFxuICAgICAgfSxcbiAgICAgIHR5cGUsXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXZlSW5wdXRQcm9wcyA9IHsgLi4uaW5wdXRQcm9wcyB9XG5cbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGlucHV0UHJvcHMudmFsdWUgPSBmaXhDb250cm9sbGVkVmFsdWUodmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0UHJvcHMuZGVmYXVsdFZhbHVlID0gZml4Q29udHJvbGxlZFZhbHVlKGRlZmF1bHRWYWx1ZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjbGVhdmUg5LiN5o6l5pS25Y6f55Sf55qEIGRlZmF1bHRWYWx1Ze+8jOW/hemhu+S8oOWFpSB2YWx1ZSBwcm9wIOadpeWunueOsCBkZWZhdWx0VmFsdWUg55qE5L2c55SoXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL25vc2lyL2NsZWF2ZS5qcy9ibG9iL21hc3Rlci9kb2MvcmVhY3Rqcy1jb21wb25lbnQtdXNhZ2UubWQjaG93LXRvLXBhc3MtZGVmYXVsdC12YWx1ZVxuICAgICAqL1xuICAgIGNsZWF2ZUlucHV0UHJvcHMudmFsdWUgPSB2YWx1ZSB8fCBkZWZhdWx0VmFsdWUgfHwgXCJcIlxuXG4gICAgY29uc3QgaW5wdXQgPVxuICAgICAgIWNsZWF2ZU9wdGlvbnMgfHwgT2JqZWN0LmtleXMoY2xlYXZlT3B0aW9ucykubGVuZ3RoID09PSAwID8gKFxuICAgICAgICA8aW5wdXQgey4uLmlucHV0UHJvcHN9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8Q2xlYXZlIG9wdGlvbnM9e2NsZWF2ZU9wdGlvbnN9IHsuLi5jbGVhdmVJbnB1dFByb3BzfSByZWY9e2NsZWF2ZVJlZn0gLz5cbiAgICAgIClcblxuICAgIGxldCBsZW5ndGhcbiAgICBpZiAobGltaXQpIHtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgICFyaWdodEVsZW1lbnQsXG4gICAgICAgIFwiSW5wdXRcIixcbiAgICAgICAgXCLkuI3lhYHorrjlkIzml7bkvb/nlKggcHJvcCBgbGltaXRgIOS4jiBwcm9wIGByaWdodEVsZW1lbnRgXCJcbiAgICAgIClcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBsZW5ndGggPSBjb3VudEhhbnppID8gZ2V0Rm9ybWF0U3RyTGVuZyh2YWx1ZSkgOiB2YWx1ZS5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgdmFsdWUgIT09IG51bGwsXG4gICAgICAgICAgXCJJbnB1dFwiLFxuICAgICAgICAgIFwi5aaC5p6c6KaB5L2/55SoIGxpbWl0IFByb3DvvIzlv4Xpobvku47lpJbpg6jmjqfliLYgdmFsdWXjgIJcIlxuICAgICAgICApXG4gICAgICAgIGxlbmd0aCA9IDBcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbnRlbnRKdXN0aWZ5KSB7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICB2YWx1ZSAhPT0gbnVsbCxcbiAgICAgICAgXCJJbnB1dFwiLFxuICAgICAgICBcIuWmguaenOS9v+eUqCBjb250ZW50SnVzZml0eSBQcm9w77yM5b+F6aG75LuO5aSW6YOo5o6n5Yi2IHZhbHVl44CCXCJcbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LXdyYXBwZXJgLFxuICAgICAgYCR7cHJlZml4fS0ke3NpemV9YCxcbiAgICAgIHtcbiAgICAgICAgW2Ake3ByZWZpeH0tJHt0aGVtZX1gXTogdGhlbWUsXG4gICAgICAgIFtgJHtwcmVmaXh9LWRpc2FibGVkYF06IGRpc2FibGVkLFxuICAgICAgICBbYCR7cHJlZml4fS1saW1pdGVkYF06IGxpbWl0LFxuICAgICAgICBbYCR7cHJlZml4fS1saW1pdGVkX2RpZ2l0LW92ZXItMmBdOlxuICAgICAgICAgIGxpbWl0ICYmIGxpbWl0LnRvU3RyaW5nKCkubGVuZ3RoID4gMixcbiAgICAgICAgW2Ake3ByZWZpeH0tbm9ybWFsYF06IGludGVudCA9PT0gXCJub3JtYWxcIixcbiAgICAgICAgW2Ake3ByZWZpeH0tcHJpbWFyeWBdOiBpbnRlbnQgPT09IFwicHJpbWFyeVwiLFxuICAgICAgICBbYCR7cHJlZml4fS1zdWNjZXNzYF06IGludGVudCA9PT0gXCJzdWNjZXNzXCIsXG4gICAgICAgIFtgJHtwcmVmaXh9LXdhcm5pbmdgXTogaW50ZW50ID09PSBcIndhcm5pbmdcIixcbiAgICAgICAgW2Ake3ByZWZpeH0tZGFuZ2VyYF06XG4gICAgICAgICAgaW50ZW50ID09PSBcImRhbmdlclwiIHx8IChsZW5ndGggJiYgbGltaXQgJiYgbGVuZ3RoID4gbGltaXQpLFxuICAgICAgfVxuICAgIClcblxuICAgIGNvbnN0IGxlZnRUeXBlID1cbiAgICAgIGxlZnRFbGVtZW50ICYmIGxlZnRFbGVtZW50LnR5cGUgPyBsZWZ0RWxlbWVudC50eXBlLnR5cGUgOiBcIlwiXG4gICAgY29uc3QgcmlnaHRUeXBlID1cbiAgICAgIHJpZ2h0RWxlbWVudCAmJiByaWdodEVsZW1lbnQudHlwZSA/IHJpZ2h0RWxlbWVudC50eXBlLnR5cGUgOiBcIlwiXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICByZWY9e3dyYXBwZXJFbGVtZW50UmVmfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgPlxuICAgICAgICB7ISFsZWZ0RWxlbWVudCAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXtsZWZ0RWxlbWVudFJlZn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUF0dGFjaGVkRWxlbWVudENsaWNrKFwibGVmdFwiKX1cbiAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LWxlZnRgLCB7XG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LWxlZnRfYnV0dG9uYF06IGxlZnRUeXBlID09PSBcIkJ1dHRvblwiLFxuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1sZWZ0X2ljb25gXTogbGVmdFR5cGUgPT09IFwiSWNvblwiLFxuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1sZWZ0X3NlbGVjdGBdOiBsZWZ0VHlwZSA9PT0gXCJTZWxlY3RcIixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsZWZ0RWxlbWVudH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2lucHV0fVxuICAgICAgICB7ISFyaWdodEVsZW1lbnQgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17cmlnaHRFbGVtZW50UmVmfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQXR0YWNoZWRFbGVtZW50Q2xpY2soXCJyaWdodFwiKX1cbiAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXJpZ2h0YCwge1xuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1yaWdodF9idXR0b25gXTogcmlnaHRUeXBlID09PSBcIkJ1dHRvblwiLFxuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1yaWdodF9pY29uYF06IHJpZ2h0VHlwZSA9PT0gXCJJY29uXCIsXG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXJpZ2h0X3NlbGVjdGBdOiByaWdodFR5cGUgPT09IFwiU2VsZWN0XCIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cmlnaHRFbGVtZW50fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7bGltaXQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWxpbWl0YH0+XG4gICAgICAgICAgICA8c3Bhbj57YCR7bGVuZ3RofS8ke2xpbWl0fWB9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7Y29udGVudEp1c3RpZnkgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1qdXN0aWZ5YH1cbiAgICAgICAgICAgIHJlZj17anVzdGlmeUVsZW1lbnRSZWZ9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogbGVmdEVsZW1lbnRXaWR0aFxuICAgICAgICAgICAgICAgID8gYCR7bGVmdEVsZW1lbnRXaWR0aH1weGBcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiByaWdodEVsZW1lbnRXaWR0aFxuICAgICAgICAgICAgICAgID8gYCR7cmlnaHRFbGVtZW50V2lkdGh9cHhgXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIG1pbldpZHRoOiBzdHlsZT8ubWluV2lkdGgsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtmaXhDb250cm9sbGVkVmFsdWUodmFsdWUpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4pXG5cbklucHV0LlRleHRhcmVhID0gVGV4dGFyZWFcblxuSW5wdXQuZGlzcGxheU5hbWUgPSBcIklucHV0XCJcblxuSW5wdXQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogaW5wdXQg5qCH562+5Y6f55Sf5bGe5oCnIC0gYXV0b0NvbXBsZXRlXG4gICAqL1xuICBhdXRvQ29tcGxldGU6IFByb3BUeXBlcy5vbmVPZihbXCJvblwiLCBcIm9mZlwiXSksXG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSBhdXRvRm9jdXNcbiAgICovXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOWunueOsOaJi+acuuWPt+OAgeaXpeacn+OAgeaVsOWtl+WPiuiHquWumuS5ieagvOW8j++8jOWPr+afpeeci1vnpLrkvotdKGh0dHA6Ly93eGFkLmRlc2lnbi9hZHVpL2NvbXBvbmVudHMvaW5wdXQp44CCXG4gICAqL1xuICBjbGVhdmVPcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog5a695bqm5piv5ZCm5LiO5YaF5a655a695bqm5a+56b2QXG4gICAqL1xuICBjb250ZW50SnVzdGlmeTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmmK/lkKbmjInnhafkuIDkuKrmsYnlrZfnrpcgMiDlrZfmlbDnmoTmlrnlvI/pmZDliLbplb/luqZcbiAgICovXG4gIGNvdW50SGFuemk6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6buY6K6k5YC8IC0g5YaF6YOo6amx5YqoXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOi+k+WFpeahhueahCBpZFxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDnsbvlnotcbiAgICovXG4gIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcIm5vcm1hbFwiLFxuICAgIFwicHJpbWFyeVwiLFxuICAgIFwic3VjY2Vzc1wiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gIF0pLFxuICAvKipcbiAgICog5YmN572u5YWD57SgXG4gICAqL1xuICBsZWZ0RWxlbWVudDogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOmZkOWItumVv+W6plxuICAgKi9cbiAgbGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSBuYW1lXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogYmx1ciDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOWAvOaUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBmb2N1cyDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBrZXlkb3duIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogZW50ZXIg5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uUHJlc3NFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBwbGFjZWhvbGRlclxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSByZXF1aXJlZFxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5ZCO572u5YWD57SgXG4gICAqL1xuICByaWdodEVsZW1lbnQ6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDpmYTliqDmoLflvI9cbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog6K6+572u5Li76aKYXG4gICAqL1xuICB0aGVtZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCBcImxpZ2h0XCJdKSxcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIHR5cGVcbiAgICovXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlgLwgLSDlpJbpg6jmjqfliLZcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGF1dG9Db21wbGV0ZTogXCJvZmZcIixcbiAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGNsZWF2ZU9wdGlvbnM6IHt9LFxuICBjb250ZW50SnVzdGlmeTogZmFsc2UsXG4gIGNvdW50SGFuemk6IHRydWUsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBpZDogbnVsbCxcbiAgaW50ZW50OiBcIm5vcm1hbFwiLFxuICBsZWZ0RWxlbWVudDogdW5kZWZpbmVkLFxuICBsaW1pdDogbnVsbCxcbiAgbmFtZTogbnVsbCxcbiAgb25CbHVyOiAoKSA9PiB7fSxcbiAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICBvbkZvY3VzOiAoKSA9PiB7fSxcbiAgb25LZXlEb3duOiAoKSA9PiB7fSxcbiAgb25QcmVzc0VudGVyOiAoKSA9PiB7fSxcbiAgcGxhY2Vob2xkZXI6IFwi6K+36L6T5YWlXCIsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgcmlnaHRFbGVtZW50OiB1bmRlZmluZWQsXG4gIHNpemU6IFwic21hbGxcIixcbiAgc3R5bGU6IHt9LFxuICB0aGVtZTogbnVsbCxcbiAgdHlwZTogbnVsbCxcbiAgdmFsdWU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0XG4iXX0=