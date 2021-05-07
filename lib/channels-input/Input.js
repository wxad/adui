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

var prefix = "adui-channels-input";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtaW5wdXQvSW5wdXQudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIklucHV0IiwicmVmIiwiYXV0b0NvbXBsZXRlIiwiYXV0b0ZvY3VzIiwiY2xhc3NOYW1lIiwiY2xlYXZlT3B0aW9ucyIsImNvbnRlbnRKdXN0aWZ5IiwiY291bnRIYW56aSIsImRlZmF1bHRWYWx1ZSIsImRpc2FibGVkIiwiaWQiLCJpbnRlbnQiLCJsZWZ0RWxlbWVudCIsImxpbWl0IiwibmFtZSIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwib25Gb2N1cyIsIm9uS2V5RG93biIsIm9uUHJlc3NFbnRlciIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJyaWdodEVsZW1lbnQiLCJzaXplUHJvcCIsInNpemUiLCJzdHlsZSIsInRoZW1lIiwidHlwZSIsInZhbHVlIiwib3RoZXJQcm9wcyIsImxlZnRFbGVtZW50V2lkdGgiLCJzZXRMZWZ0RWxlbWVudFdpZHRoIiwicmlnaHRFbGVtZW50V2lkdGgiLCJzZXRSaWdodEVsZW1lbnRXaWR0aCIsImlucHV0UmVmIiwid3JhcHBlckVsZW1lbnRSZWYiLCJsZWZ0RWxlbWVudFJlZiIsInJpZ2h0RWxlbWVudFJlZiIsImp1c3RpZnlFbGVtZW50UmVmIiwiY2xlYXZlUmVmIiwiaW5wdXRFbGVtZW50IiwiY3VycmVudCIsImVsZW1lbnQiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsIiwidGFyZ2V0IiwicmVwbGFjZSIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiaGFuZGxlQmx1ciIsImhhbmRsZUZvY3VzIiwiaGFuZGxlQXR0YWNoZWRFbGVtZW50Q2xpY2siLCJwb3NpdGlvbiIsImZvY3VzIiwic2VsZWN0IiwiZml4Q29udHJvbGxlZFZhbHVlIiwidXBkYXRlRWxlbWVudHNXaWR0aCIsImNsaWVudFdpZHRoIiwiTWF0aCIsImFicyIsInNjcm9sbFdpZHRoIiwiY2VpbCIsIndpZHRoIiwiZ2V0Rm9ybWF0U3RyTGVuZyIsInN0ciIsImxlbiIsImxlbmd0aCIsInJlYWxMZW5ndGgiLCJjaGFyQ29kZSIsImkiLCJjaGFyQ29kZUF0IiwiZWwiLCJsYXN0SW5wdXRWYWx1ZSIsInN0YXRlIiwicHJvcGVydGllcyIsInJlc3VsdCIsInJlYWxSZWYiLCJjbGVhdmUiLCJpbnB1dCIsImJsdXIiLCJpbnB1dFByb3BzIiwicGFkZGluZ0xlZnQiLCJ1bmRlZmluZWQiLCJwYWRkaW5nUmlnaHQiLCJjbGVhdmVJbnB1dFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsImNsYXNzU2V0IiwidG9TdHJpbmciLCJsZWZ0VHlwZSIsInJpZ2h0VHlwZSIsIm1pbldpZHRoIiwiVGV4dGFyZWEiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwiYm9vbCIsInN0cmluZyIsIm9iamVjdCIsImFueSIsIm51bWJlciIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQVFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxxQkFBZjtBQXlIQSxJQUFNQyxLQUFhLEdBQUcsdUJBQ3BCLGdCQThCRUMsR0E5QkYsRUErQks7QUFBQTs7QUFBQSxNQTdCREMsWUE2QkMsUUE3QkRBLFlBNkJDO0FBQUEsTUE1QkRDLFNBNEJDLFFBNUJEQSxTQTRCQztBQUFBLE1BM0JEQyxTQTJCQyxRQTNCREEsU0EyQkM7QUFBQSxNQTFCREMsYUEwQkMsUUExQkRBLGFBMEJDO0FBQUEsTUF6QkRDLGNBeUJDLFFBekJEQSxjQXlCQztBQUFBLE1BeEJEQyxVQXdCQyxRQXhCREEsVUF3QkM7QUFBQSxNQXZCREMsWUF1QkMsUUF2QkRBLFlBdUJDO0FBQUEsTUF0QkRDLFFBc0JDLFFBdEJEQSxRQXNCQztBQUFBLE1BckJEQyxFQXFCQyxRQXJCREEs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RStELFNBckJLO0FBc0JuQjdELEVBQUFBLElBQUksRUFBRSxPQXRCYTtBQXVCbkJDLEVBQUFBLEtBQUssRUFBRSxFQXZCWTtBQXdCbkJDLEVBQUFBLEtBQUssRUFBRSxJQXhCWTtBQXlCbkJDLEVBQUFBLElBQUksRUFBRSxJQXpCYTtBQTBCbkJDLEVBQUFBLEtBQUssRUFBRTtBQTFCWSxDQUFyQjtlQTZCZTVCLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgZm9yd2FyZFJlZixcbiAgdXNlQ29udGV4dCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlRWZmZWN0LFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgQ2xlYXZlIGZyb20gXCJjbGVhdmUuanMvcmVhY3RcIlxuaW1wb3J0IHdhcm5pbmcgZnJvbSBcIi4uL191dGlsL3dhcm5pbmdcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4vVGV4dGFyZWFcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1jaGFubmVscy1pbnB1dFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUlucHV0UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIGF1dG9Db21wbGV0ZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlPzogXCJvblwiIHwgXCJvZmZcIlxuICAvKipcbiAgICogaW5wdXQg5qCH562+5Y6f55Sf5bGe5oCnIC0gYXV0b0ZvY3VzXG4gICAqL1xuICBhdXRvRm9jdXM/OiBib29sZWFuXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5a6e546w5omL5py65Y+344CB5pel5pyf44CB5pWw5a2X5Y+K6Ieq5a6a5LmJ5qC85byP77yM5Y+v5p+l55yLW+ekuuS+i10oaHR0cDovL3d4YWQuZGVzaWduL2FkdWkvY29tcG9uZW50cy9pbnB1dCnjgIJcbiAgICovXG4gIGNsZWF2ZU9wdGlvbnM/OiBvYmplY3RcbiAgLyoqXG4gICAqIOWuveW6puaYr+WQpuS4juWGheWuueWuveW6puWvuem9kFxuICAgKi9cbiAgY29udGVudEp1c3RpZnk/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmmK/lkKbmjInnhafkuIDkuKrmsYnlrZfnrpcgMiDlrZfmlbDnmoTmlrnlvI/pmZDliLbplb/luqZcbiAgICovXG4gIGNvdW50SGFuemk/OiBib29sZWFuXG4gIC8qKlxuICAgKiDpu5jorqTlgLwgLSDlhoXpg6jpqbHliqhcbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IHN0cmluZyB8IG51bGxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDovpPlhaXmoYbnmoQgaWRcbiAgICovXG4gIGlkPzogc3RyaW5nIHwgbnVsbFxuICAvKipcbiAgICog57G75Z6LXG4gICAqL1xuICBpbnRlbnQ/OiBcIm5vcm1hbFwiIHwgXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiIHwgXCJkYW5nZXJcIlxuICAvKipcbiAgICog5YmN572u5YWD57SgXG4gICAqL1xuICBsZWZ0RWxlbWVudD86IEpTWC5FbGVtZW50XG4gIC8qKlxuICAgKiDpmZDliLbplb/luqZcbiAgICovXG4gIGxpbWl0PzogbnVtYmVyIHwgbnVsbFxuICAvKipcbiAgICogaW5wdXQg5qCH562+5Y6f55Sf5bGe5oCnIC0gbmFtZVxuICAgKi9cbiAgbmFtZT86IHN0cmluZyB8IG51bGxcbiAgLyoqXG4gICAqIGJsdXIg5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQmx1cj86IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkXG4gIC8qKlxuICAgKiDlgLzmlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sIHZhbHVlPzogc3RyaW5nKSA9PiB2b2lkXG4gIC8qKlxuICAgKiBmb2N1cyDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25Gb2N1cz86IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkXG4gIC8qKlxuICAgKiBrZXlkb3duIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbktleURvd24/OiAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZFxuICAvKipcbiAgICogZW50ZXIg5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uUHJlc3NFbnRlcj86IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkXG4gIC8qKlxuICAgKiBwbGFjZWhvbGRlclxuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIHJlcXVpcmVkXG4gICAqL1xuICByZXF1aXJlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWQjue9ruWFg+e0oFxuICAgKi9cbiAgcmlnaHRFbGVtZW50PzogSlNYLkVsZW1lbnRcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog6ZmE5Yqg5qC35byPXG4gICAqL1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU/OiBudWxsIHwgXCJsaWdodFwiXG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSB0eXBlXG4gICAqL1xuICB0eXBlPzogc3RyaW5nIHwgbnVsbFxuICAvKipcbiAgICog5YC8IC0g5aSW6YOo5o6n5Yi2XG4gICAqL1xuICB2YWx1ZT86IHN0cmluZyB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSW5wdXRcbiAgZXh0ZW5kcyBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICAgIElJbnB1dFByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+XG4gID4ge1xuICBUZXh0YXJlYTogdHlwZW9mIFRleHRhcmVhXG59XG5cbi8qKlxuICog6L6T5YWl5qGG55So5LqO5paH5pys6L6T5YWl55qE5Yy65Z+f77yM5Y+v57uT5ZCI5Zu+5qCH44CB5oyJ6ZKu44CB6YCJ5oup5Zmo562J57uE5Lu25L2/55So44CCXG4gKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IElucHV0OiBJSW5wdXQgPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgYXV0b0NvbXBsZXRlLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY2xlYXZlT3B0aW9ucyxcbiAgICAgIGNvbnRlbnRKdXN0aWZ5LFxuICAgICAgY291bnRIYW56aSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaWQsXG4gICAgICBpbnRlbnQsXG4gICAgICBsZWZ0RWxlbWVudCxcbiAgICAgIGxpbWl0LFxuICAgICAgbmFtZSxcbiAgICAgIG9uQmx1cixcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgb25Gb2N1cyxcbiAgICAgIG9uS2V5RG93bixcbiAgICAgIG9uUHJlc3NFbnRlcixcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICByaWdodEVsZW1lbnQsXG4gICAgICBzaXplOiBzaXplUHJvcCxcbiAgICAgIHN0eWxlLFxuICAgICAgdGhlbWUsXG4gICAgICB0eXBlLFxuICAgICAgdmFsdWUsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSUlucHV0UHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IFtsZWZ0RWxlbWVudFdpZHRoLCBzZXRMZWZ0RWxlbWVudFdpZHRoXSA9IHVzZVN0YXRlPG51bGwgfCBudW1iZXI+KFxuICAgICAgbnVsbFxuICAgIClcbiAgICBjb25zdCBbcmlnaHRFbGVtZW50V2lkdGgsIHNldFJpZ2h0RWxlbWVudFdpZHRoXSA9IHVzZVN0YXRlPG51bGwgfCBudW1iZXI+KFxuICAgICAgbnVsbFxuICAgIClcbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG4gICAgY29uc3Qgd3JhcHBlckVsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG4gICAgY29uc3QgbGVmdEVsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG4gICAgY29uc3QgcmlnaHRFbGVtZW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuICAgIGNvbnN0IGp1c3RpZnlFbGVtZW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuICAgIGNvbnN0IGNsZWF2ZVJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG5cbiAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBpbnB1dFJlZj8uY3VycmVudCB8fCBjbGVhdmVSZWY/LmN1cnJlbnQ/LmVsZW1lbnRcblxuICAgIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcblxuICAgIGNvbnN0IHNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZVByb3AsIHNpemVDb250ZXh0KVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBpZiAoIWRpc2FibGVkICYmIG9uQ2hhbmdlKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRyb2wtcmVnZXgsIG1heC1sZW4gKi9cbiAgICAgICAgLy8gMDggQmFja3NwYWNlLCAwOSBUYWIsIDBBIOaNouihjOespiwgMEIg5Z6C55u05Yi26KGo56ymLCAwQyDmjaLpobUsIDBEIOWbnui9piwgQTAg5LiN6Ze05pat56m65qC8LFxuICAgICAgICAvLyAyMDI4LzIwMjkg5YiG6ZqU56ymLCBGRWZmIOWtl+iKgumhuuW6j+agh+iusOOAglxuICAgICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKFxuICAgICAgICAgIC9cXHUwMDA4fFxcdTAwMDl8XFx1MDAwQXxcXHUwMDBCfFxcdTAwMEN8XFx1MDAwRHxcXHUwMEEwfFxcdTIwMjh8XFx1MjAyOXxcXHVGRUZGL2csXG4gICAgICAgICAgXCJcIlxuICAgICAgICApXG4gICAgICAgIG9uQ2hhbmdlKGUsIHZhbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmIG9uUHJlc3NFbnRlcikge1xuICAgICAgICBvblByZXNzRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIGlmIChvbktleURvd24pIHtcbiAgICAgICAgb25LZXlEb3duKGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQmx1ciA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBpZiAob25CbHVyKSB7XG4gICAgICAgIG9uQmx1cihlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUZvY3VzID0gKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGlmIChvbkZvY3VzKSB7XG4gICAgICAgIG9uRm9jdXMoZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVBdHRhY2hlZEVsZW1lbnRDbGljayA9IChwb3NpdGlvbjogXCJsZWZ0XCIgfCBcInJpZ2h0XCIpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgcG9zaXRpb24gPT09IFwibGVmdFwiICYmXG4gICAgICAgIGxlZnRFbGVtZW50ICYmXG4gICAgICAgIGxlZnRFbGVtZW50LnR5cGUgJiZcbiAgICAgICAgbGVmdEVsZW1lbnQudHlwZS5uYW1lID09PSBcIkljb25cIlxuICAgICAgKSB7XG4gICAgICAgIGlucHV0RWxlbWVudC5mb2N1cygpXG4gICAgICAgIGlucHV0RWxlbWVudC5zZWxlY3QoKVxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBwb3NpdGlvbiA9PT0gXCJyaWdodFwiICYmXG4gICAgICAgIHJpZ2h0RWxlbWVudCAmJlxuICAgICAgICByaWdodEVsZW1lbnQudHlwZSAmJlxuICAgICAgICByaWdodEVsZW1lbnQudHlwZS5uYW1lID09PSBcIkljb25cIlxuICAgICAgKSB7XG4gICAgICAgIGlucHV0RWxlbWVudC5mb2N1cygpXG4gICAgICAgIGlucHV0RWxlbWVudC5zZWxlY3QoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZpeENvbnRyb2xsZWRWYWx1ZSA9ICh2YWw/OiBzdHJpbmcgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB2YWwgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWxcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVFbGVtZW50c1dpZHRoID0gKCkgPT4ge1xuICAgICAgLyoqXG4gICAgICAgKiDov5nkuKrmlrnms5XkvJrlnKggZGlkVXBkYXRlIOWSjCBkaWRNb3VudCDml7bljrsgc2V0U3RhdGVcbiAgICAgICAqIOS4gOWumuimgemBv+WFjemAoOaIkOW+queOr+OAglxuICAgICAgICovXG4gICAgICBpZiAobGVmdEVsZW1lbnRSZWY/LmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCB9ID0gbGVmdEVsZW1lbnRSZWYuY3VycmVudFxuXG4gICAgICAgIC8vIOmYsuatouW+queOr1xuICAgICAgICBpZiAoTWF0aC5hYnMoY2xpZW50V2lkdGggLSAobGVmdEVsZW1lbnRXaWR0aCB8fCAwKSkgPiAyKSB7XG4gICAgICAgICAgc2V0TGVmdEVsZW1lbnRXaWR0aChjbGllbnRXaWR0aClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsZWZ0RWxlbWVudFdpZHRoKSB7XG4gICAgICAgIHNldExlZnRFbGVtZW50V2lkdGgobnVsbClcbiAgICAgIH1cblxuICAgICAgaWYgKHJpZ2h0RWxlbWVudFJlZj8uY3VycmVudCkge1xuICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoIH0gPSByaWdodEVsZW1lbnRSZWYuY3VycmVudFxuXG4gICAgICAgIC8vIOmYsuatouW+queOr1xuICAgICAgICBpZiAoTWF0aC5hYnMoY2xpZW50V2lkdGggLSAocmlnaHRFbGVtZW50V2lkdGggfHwgMCkpID4gMikge1xuICAgICAgICAgIHNldFJpZ2h0RWxlbWVudFdpZHRoKGNsaWVudFdpZHRoKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJpZ2h0RWxlbWVudFdpZHRoKSB7XG4gICAgICAgIHNldFJpZ2h0RWxlbWVudFdpZHRoKG51bGwpXG4gICAgICB9XG5cbiAgICAgIGlmIChqdXN0aWZ5RWxlbWVudFJlZj8uY3VycmVudCkge1xuICAgICAgICBjb25zdCB7IHNjcm9sbFdpZHRoIH0gPSBqdXN0aWZ5RWxlbWVudFJlZi5jdXJyZW50XG4gICAgICAgIGlmIChcbiAgICAgICAgICB3cmFwcGVyRWxlbWVudFJlZi5jdXJyZW50ICYmXG4gICAgICAgICAgTWF0aC5jZWlsKHNjcm9sbFdpZHRoKSAhPT0gd3JhcHBlckVsZW1lbnRSZWYuY3VycmVudC5jbGllbnRXaWR0aFxuICAgICAgICApIHtcbiAgICAgICAgICB3cmFwcGVyRWxlbWVudFJlZi5jdXJyZW50LnN0eWxlLndpZHRoID0gYCR7TWF0aC5jZWlsKHNjcm9sbFdpZHRoKX1weGBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldEZvcm1hdFN0ckxlbmcgPSAoc3RyOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGhcbiAgICAgIGxldCByZWFsTGVuZ3RoID0gMFxuICAgICAgbGV0IGNoYXJDb2RlID0gLTFcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgICAgICBpZiAoY2hhckNvZGUgPj0gMCAmJiBjaGFyQ29kZSA8PSAxMjgpIHtcbiAgICAgICAgICByZWFsTGVuZ3RoICs9IDAuNVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlYWxMZW5ndGggKz0gMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gTWF0aC5jZWlsKHJlYWxMZW5ndGgpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHVwZGF0ZUVsZW1lbnRzV2lkdGgoKVxuICAgICAgaWYgKGNsZWF2ZVJlZj8uY3VycmVudCkge1xuICAgICAgICBjb25zdCBlbCA9IGNsZWF2ZVJlZi5jdXJyZW50LmVsZW1lbnRcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOS/ruWkjSBjbGVhdmUuMS40LjcgYnVnOlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGNsZWF2ZVJlZi5jdXJyZW50Lmxhc3RJbnB1dFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGNsZWF2ZVJlZi5jdXJyZW50Lmxhc3RJbnB1dFZhbHVlID0gdmFsdWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xlYXZlUmVmLmN1cnJlbnQuc3RhdGUudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgY2xlYXZlUmVmLmN1cnJlbnQuc3RhdGUudmFsdWUgPSB2YWx1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChjbGVhdmVSZWYuY3VycmVudC5wcm9wZXJ0aWVzLnJlc3VsdCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBjbGVhdmVSZWYuY3VycmVudC5wcm9wZXJ0aWVzLnJlc3VsdCA9IHZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsICYmIGVsLnZhbHVlICE9PSB2YWx1ZSAmJiB2YWx1ZSkge1xuICAgICAgICAgIGVsLnZhbHVlID0gdmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4ge1xuICAgICAgY29uc3QgcmVhbFJlZiA9IGlucHV0UmVmPy5jdXJyZW50IHx8IGNsZWF2ZVJlZj8uY3VycmVudD8uZWxlbWVudFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xlYXZlOiBjbGVhdmVSZWY/LmN1cnJlbnQsXG4gICAgICAgIGlucHV0OiByZWFsUmVmLFxuICAgICAgICBsZWZ0RWxlbWVudDogbGVmdEVsZW1lbnRSZWY/LmN1cnJlbnQsXG4gICAgICAgIHJpZ2h0RWxlbWVudDogcmlnaHRFbGVtZW50UmVmPy5jdXJyZW50LFxuICAgICAgICB1cGRhdGVFbGVtZW50c1dpZHRoLFxuICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgIGhhbmRsZUtleURvd24sXG4gICAgICAgIGhhbmRsZUJsdXIsXG4gICAgICAgIGhhbmRsZUZvY3VzLFxuICAgICAgICBoYW5kbGVBdHRhY2hlZEVsZW1lbnRDbGljayxcbiAgICAgICAgZm9jdXM6ICgpID0+IHJlYWxSZWYuZm9jdXMoKSxcbiAgICAgICAgYmx1cjogKCkgPT4gcmVhbFJlZi5ibHVyKCksXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGlucHV0UHJvcHM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICBhdXRvQ29tcGxldGUsXG4gICAgICBhdXRvRm9jdXMsXG4gICAgICBjbGFzc05hbWU6IGAke3ByZWZpeH0tYmFzZWAsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIG9uQmx1cjogaGFuZGxlQmx1cixcbiAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICBvbkZvY3VzOiBoYW5kbGVGb2N1cyxcbiAgICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcmVmOiBpbnB1dFJlZixcbiAgICAgIHJlcXVpcmVkLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IGxlZnRFbGVtZW50V2lkdGggPyBgJHtsZWZ0RWxlbWVudFdpZHRofXB4YCA6IHVuZGVmaW5lZCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiByaWdodEVsZW1lbnRXaWR0aCA/IGAke3JpZ2h0RWxlbWVudFdpZHRofXB4YCA6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgICB0eXBlLFxuICAgIH1cblxuICAgIGNvbnN0IGNsZWF2ZUlucHV0UHJvcHMgPSB7IC4uLmlucHV0UHJvcHMgfVxuXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICBpbnB1dFByb3BzLnZhbHVlID0gZml4Q29udHJvbGxlZFZhbHVlKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFByb3BzLmRlZmF1bHRWYWx1ZSA9IGZpeENvbnRyb2xsZWRWYWx1ZShkZWZhdWx0VmFsdWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2xlYXZlIOS4jeaOpeaUtuWOn+eUn+eahCBkZWZhdWx0VmFsdWXvvIzlv4XpobvkvKDlhaUgdmFsdWUgcHJvcCDmnaXlrp7njrAgZGVmYXVsdFZhbHVlIOeahOS9nOeUqFxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ub3Npci9jbGVhdmUuanMvYmxvYi9tYXN0ZXIvZG9jL3JlYWN0anMtY29tcG9uZW50LXVzYWdlLm1kI2hvdy10by1wYXNzLWRlZmF1bHQtdmFsdWVcbiAgICAgKi9cbiAgICBjbGVhdmVJbnB1dFByb3BzLnZhbHVlID0gdmFsdWUgfHwgZGVmYXVsdFZhbHVlIHx8IFwiXCJcblxuICAgIGNvbnN0IGlucHV0ID1cbiAgICAgICFjbGVhdmVPcHRpb25zIHx8IE9iamVjdC5rZXlzKGNsZWF2ZU9wdGlvbnMpLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgPGlucHV0IHsuLi5pbnB1dFByb3BzfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPENsZWF2ZSBvcHRpb25zPXtjbGVhdmVPcHRpb25zfSB7Li4uY2xlYXZlSW5wdXRQcm9wc30gcmVmPXtjbGVhdmVSZWZ9IC8+XG4gICAgICApXG5cbiAgICBsZXQgbGVuZ3RoXG4gICAgaWYgKGxpbWl0KSB7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICAhcmlnaHRFbGVtZW50LFxuICAgICAgICBcIklucHV0XCIsXG4gICAgICAgIFwi5LiN5YWB6K645ZCM5pe25L2/55SoIHByb3AgYGxpbWl0YCDkuI4gcHJvcCBgcmlnaHRFbGVtZW50YFwiXG4gICAgICApXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgbGVuZ3RoID0gY291bnRIYW56aSA/IGdldEZvcm1hdFN0ckxlbmcodmFsdWUpIDogdmFsdWUubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIHZhbHVlICE9PSBudWxsLFxuICAgICAgICAgIFwiSW5wdXRcIixcbiAgICAgICAgICBcIuWmguaenOimgeS9v+eUqCBsaW1pdCBQcm9w77yM5b+F6aG75LuO5aSW6YOo5o6n5Yi2IHZhbHVl44CCXCJcbiAgICAgICAgKVxuICAgICAgICBsZW5ndGggPSAwXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb250ZW50SnVzdGlmeSkge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgdmFsdWUgIT09IG51bGwsXG4gICAgICAgIFwiSW5wdXRcIixcbiAgICAgICAgXCLlpoLmnpzkvb/nlKggY29udGVudEp1c2ZpdHkgUHJvcO+8jOW/hemhu+S7juWklumDqOaOp+WItiB2YWx1ZeOAglwiXG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYCR7cHJlZml4fS13cmFwcGVyYCxcbiAgICAgIGAke3ByZWZpeH0tJHtzaXplfWAsXG4gICAgICB7XG4gICAgICAgIFtgJHtwcmVmaXh9LSR7dGhlbWV9YF06IHRoZW1lLFxuICAgICAgICBbYCR7cHJlZml4fS1kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgICAgICAgW2Ake3ByZWZpeH0tbGltaXRlZGBdOiBsaW1pdCxcbiAgICAgICAgW2Ake3ByZWZpeH0tbGltaXRlZF9kaWdpdC1vdmVyLTJgXTpcbiAgICAgICAgICBsaW1pdCAmJiBsaW1pdC50b1N0cmluZygpLmxlbmd0aCA+IDIsXG4gICAgICAgIFtgJHtwcmVmaXh9LW5vcm1hbGBdOiBpbnRlbnQgPT09IFwibm9ybWFsXCIsXG4gICAgICAgIFtgJHtwcmVmaXh9LXByaW1hcnlgXTogaW50ZW50ID09PSBcInByaW1hcnlcIixcbiAgICAgICAgW2Ake3ByZWZpeH0tc3VjY2Vzc2BdOiBpbnRlbnQgPT09IFwic3VjY2Vzc1wiLFxuICAgICAgICBbYCR7cHJlZml4fS13YXJuaW5nYF06IGludGVudCA9PT0gXCJ3YXJuaW5nXCIsXG4gICAgICAgIFtgJHtwcmVmaXh9LWRhbmdlcmBdOlxuICAgICAgICAgIGludGVudCA9PT0gXCJkYW5nZXJcIiB8fCAobGVuZ3RoICYmIGxpbWl0ICYmIGxlbmd0aCA+IGxpbWl0KSxcbiAgICAgIH1cbiAgICApXG5cbiAgICBjb25zdCBsZWZ0VHlwZSA9XG4gICAgICBsZWZ0RWxlbWVudCAmJiBsZWZ0RWxlbWVudC50eXBlID8gbGVmdEVsZW1lbnQudHlwZS50eXBlIDogXCJcIlxuICAgIGNvbnN0IHJpZ2h0VHlwZSA9XG4gICAgICByaWdodEVsZW1lbnQgJiYgcmlnaHRFbGVtZW50LnR5cGUgPyByaWdodEVsZW1lbnQudHlwZS50eXBlIDogXCJcIlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXt3cmFwcGVyRWxlbWVudFJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAgeyEhbGVmdEVsZW1lbnQgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17bGVmdEVsZW1lbnRSZWZ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBdHRhY2hlZEVsZW1lbnRDbGljayhcImxlZnRcIil9XG4gICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1sZWZ0YCwge1xuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1sZWZ0X2J1dHRvbmBdOiBsZWZ0VHlwZSA9PT0gXCJCdXR0b25cIixcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tbGVmdF9pY29uYF06IGxlZnRUeXBlID09PSBcIkljb25cIixcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tbGVmdF9zZWxlY3RgXTogbGVmdFR5cGUgPT09IFwiU2VsZWN0XCIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGVmdEVsZW1lbnR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtpbnB1dH1cbiAgICAgICAgeyEhcmlnaHRFbGVtZW50ICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e3JpZ2h0RWxlbWVudFJlZn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUF0dGFjaGVkRWxlbWVudENsaWNrKFwicmlnaHRcIil9XG4gICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1yaWdodGAsIHtcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tcmlnaHRfYnV0dG9uYF06IHJpZ2h0VHlwZSA9PT0gXCJCdXR0b25cIixcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tcmlnaHRfaWNvbmBdOiByaWdodFR5cGUgPT09IFwiSWNvblwiLFxuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1yaWdodF9zZWxlY3RgXTogcmlnaHRUeXBlID09PSBcIlNlbGVjdFwiLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3JpZ2h0RWxlbWVudH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2xpbWl0ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1saW1pdGB9PlxuICAgICAgICAgICAgPHNwYW4+e2Ake2xlbmd0aH0vJHtsaW1pdH1gfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2NvbnRlbnRKdXN0aWZ5ICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tanVzdGlmeWB9XG4gICAgICAgICAgICByZWY9e2p1c3RpZnlFbGVtZW50UmVmfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IGxlZnRFbGVtZW50V2lkdGhcbiAgICAgICAgICAgICAgICA/IGAke2xlZnRFbGVtZW50V2lkdGh9cHhgXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogcmlnaHRFbGVtZW50V2lkdGhcbiAgICAgICAgICAgICAgICA/IGAke3JpZ2h0RWxlbWVudFdpZHRofXB4YFxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBtaW5XaWR0aDogc3R5bGU/Lm1pbldpZHRoLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Zml4Q29udHJvbGxlZFZhbHVlKHZhbHVlKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuKVxuXG5JbnB1dC5UZXh0YXJlYSA9IFRleHRhcmVhXG5cbklucHV0LmRpc3BsYXlOYW1lID0gXCJJbnB1dFwiXG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIGF1dG9Db21wbGV0ZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMub25lT2YoW1wib25cIiwgXCJvZmZcIl0pLFxuICAvKipcbiAgICogaW5wdXQg5qCH562+5Y6f55Sf5bGe5oCnIC0gYXV0b0ZvY3VzXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlrp7njrDmiYvmnLrlj7fjgIHml6XmnJ/jgIHmlbDlrZflj4roh6rlrprkuYnmoLzlvI/vvIzlj6/mn6XnnItb56S65L6LXShodHRwOi8vd3hhZC5kZXNpZ24vYWR1aS9jb21wb25lbnRzL2lucHV0KeOAglxuICAgKi9cbiAgY2xlYXZlT3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOWuveW6puaYr+WQpuS4juWGheWuueWuveW6puWvuem9kFxuICAgKi9cbiAgY29udGVudEp1c3RpZnk6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5piv5ZCm5oyJ54Wn5LiA5Liq5rGJ5a2X566XIDIg5a2X5pWw55qE5pa55byP6ZmQ5Yi26ZW/5bqmXG4gICAqL1xuICBjb3VudEhhbnppOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOm7mOiupOWAvCAtIOWGhemDqOmpseWKqFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDovpPlhaXmoYbnmoQgaWRcbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJub3JtYWxcIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOWJjee9ruWFg+e0oFxuICAgKi9cbiAgbGVmdEVsZW1lbnQ6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDpmZDliLbplb/luqZcbiAgICovXG4gIGxpbWl0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogaW5wdXQg5qCH562+5Y6f55Sf5bGe5oCnIC0gbmFtZVxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGJsdXIg5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlgLzmlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogZm9jdXMg5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICoga2V5ZG93biDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIGVudGVyIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvblByZXNzRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogcGxhY2Vob2xkZXJcbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogaW5wdXQg5qCH562+5Y6f55Sf5bGe5oCnIC0gcmVxdWlyZWRcbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWQjue9ruWFg+e0oFxuICAgKi9cbiAgcmlnaHRFbGVtZW50OiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog6ZmE5Yqg5qC35byPXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsaWdodFwiXSksXG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSB0eXBlXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5YC8IC0g5aSW6YOo5o6n5Yi2XG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBhdXRvQ29tcGxldGU6IFwib2ZmXCIsXG4gIGF1dG9Gb2N1czogZmFsc2UsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBjbGVhdmVPcHRpb25zOiB7fSxcbiAgY29udGVudEp1c3RpZnk6IGZhbHNlLFxuICBjb3VudEhhbnppOiB0cnVlLFxuICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgaWQ6IG51bGwsXG4gIGludGVudDogXCJub3JtYWxcIixcbiAgbGVmdEVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgbGltaXQ6IG51bGwsXG4gIG5hbWU6IG51bGwsXG4gIG9uQmx1cjogKCkgPT4ge30sXG4gIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgb25Gb2N1czogKCkgPT4ge30sXG4gIG9uS2V5RG93bjogKCkgPT4ge30sXG4gIG9uUHJlc3NFbnRlcjogKCkgPT4ge30sXG4gIHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpVwiLFxuICByZXF1aXJlZDogZmFsc2UsXG4gIHJpZ2h0RWxlbWVudDogdW5kZWZpbmVkLFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHN0eWxlOiB7fSxcbiAgdGhlbWU6IG51bGwsXG4gIHR5cGU6IG51bGwsXG4gIHZhbHVlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuIl19