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

import React, { forwardRef, useContext, useImperativeHandle, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Cleave from "cleave.js/react";
import warning from "../_util/warning";
import { ConfigContext, getComputedSize } from "../config-provider";
import Textarea from "./Textarea";
import "./style";
var prefix = "adui-input";
var Input = forwardRef(function (_ref, ref) {
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

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      leftElementWidth = _useState2[0],
      setLeftElementWidth = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      rightElementWidth = _useState4[0],
      setRightElementWidth = _useState4[1];

  var inputRef = useRef(null);
  var wrapperElementRef = useRef(null);
  var leftElementRef = useRef(null);
  var rightElementRef = useRef(null);
  var justifyElementRef = useRef(null);
  var cleaveRef = useRef(null);
  var inputElement = (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) || (cleaveRef === null || cleaveRef === void 0 ? void 0 : (_cleaveRef$current = cleaveRef.current) === null || _cleaveRef$current === void 0 ? void 0 : _cleaveRef$current.element);

  var _useContext = useContext(ConfigContext),
      sizeContext = _useContext.size;

  var size = getComputedSize(sizeProp, sizeContext);

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

  useEffect(function () {
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
  useImperativeHandle(ref, function () {
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
  var input = !cleaveOptions || Object.keys(cleaveOptions).length === 0 ? React.createElement("input", inputProps) : React.createElement(Cleave, _extends({
    options: cleaveOptions
  }, cleaveInputProps, {
    ref: cleaveRef
  }));
  var length;

  if (limit) {
    warning(!rightElement, "Input", "不允许同时使用 prop `limit` 与 prop `rightElement`");

    if (value) {
      length = countHanzi ? getFormatStrLeng(value) : value.length;
    } else {
      warning(value !== null, "Input", "如果要使用 limit Prop，必须从外部控制 value。");
      length = 0;
    }
  }

  if (contentJustify) {
    warning(value !== null, "Input", "如果使用 contentJusfity Prop，必须从外部控制 value。");
  }

  var classSet = classNames(className, "".concat(prefix, "-wrapper"), "".concat(prefix, "-").concat(size), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-").concat(theme), theme), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefix, "-limited"), limit), _defineProperty(_classNames, "".concat(prefix, "-limited_digit-over-2"), limit && limit.toString().length > 2), _defineProperty(_classNames, "".concat(prefix, "-normal"), intent === "normal"), _defineProperty(_classNames, "".concat(prefix, "-primary"), intent === "primary"), _defineProperty(_classNames, "".concat(prefix, "-success"), intent === "success"), _defineProperty(_classNames, "".concat(prefix, "-warning"), intent === "warning"), _defineProperty(_classNames, "".concat(prefix, "-danger"), intent === "danger" || length && limit && length > limit), _classNames));
  var leftType = leftElement && leftElement.type ? leftElement.type.type : "";
  var rightType = rightElement && rightElement.type ? rightElement.type.type : "";
  return React.createElement("div", _extends({
    ref: wrapperElementRef,
    className: classSet,
    style: style
  }, otherProps), !!leftElement && React.createElement("div", {
    ref: leftElementRef,
    onClick: function onClick() {
      return handleAttachedElementClick("left");
    },
    role: "none",
    className: classNames("".concat(prefix, "-left"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "-left_button"), leftType === "Button"), _defineProperty(_classNames2, "".concat(prefix, "-left_icon"), leftType === "Icon"), _defineProperty(_classNames2, "".concat(prefix, "-left_select"), leftType === "Select"), _classNames2))
  }, leftElement), input, !!rightElement && React.createElement("div", {
    ref: rightElementRef,
    onClick: function onClick() {
      return handleAttachedElementClick("right");
    },
    role: "none",
    className: classNames("".concat(prefix, "-right"), (_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefix, "-right_button"), rightType === "Button"), _defineProperty(_classNames3, "".concat(prefix, "-right_icon"), rightType === "Icon"), _defineProperty(_classNames3, "".concat(prefix, "-right_select"), rightType === "Select"), _classNames3))
  }, rightElement), limit && React.createElement("div", {
    className: "".concat(prefix, "-limit")
  }, React.createElement("span", null, "".concat(length, "/").concat(limit))), contentJustify && React.createElement("div", {
    className: "".concat(prefix, "-justify"),
    ref: justifyElementRef,
    style: {
      paddingLeft: leftElementWidth ? "".concat(leftElementWidth, "px") : undefined,
      paddingRight: rightElementWidth ? "".concat(rightElementWidth, "px") : undefined,
      minWidth: style === null || style === void 0 ? void 0 : style.minWidth
    }
  }, fixControlledValue(value)));
});
Input.Textarea = Textarea;
Input.displayName = "Input";
Input.propTypes = {
  autoComplete: PropTypes.oneOf(["on", "off"]),
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  cleaveOptions: PropTypes.object,
  contentJustify: PropTypes.bool,
  countHanzi: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  intent: PropTypes.oneOf(["normal", "primary", "success", "warning", "danger"]),
  leftElement: PropTypes.any,
  limit: PropTypes.number,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onPressEnter: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rightElement: PropTypes.any,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  style: PropTypes.object,
  theme: PropTypes.oneOf([null, "light"]),
  type: PropTypes.string,
  value: PropTypes.string
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
export default Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvaW5wdXQvSW5wdXQudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiZm9yd2FyZFJlZiIsInVzZUNvbnRleHQiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiQ2xlYXZlIiwid2FybmluZyIsIkNvbmZpZ0NvbnRleHQiLCJnZXRDb21wdXRlZFNpemUiLCJUZXh0YXJlYSIsInByZWZpeCIsIklucHV0IiwicmVmIiwiYXV0b0NvbXBsZXRlIiwiYXV0b0ZvY3VzIiwiY2xhc3NOYW1lIiwiY2xlYXZlT3B0aW9ucyIsImNvbnRlbnRKdXN0aWZ5IiwiY291bnRIYW56aSIsImRlZmF1bHRWYWx1ZSIsImRpc2FibGVkIiwiaWQiLCJpbnRlbnQiLCJsZWZ0RWxlbWVudCIsImxpbWl0IiwibmFtZSIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwib25Gb2N1cyIsIm9uS2V5RG93biIsIm9uUHJlc3NFbnRlciIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJyaWdodEVsZW1lbnQiLCJzaXplUHJvcCIsInNpemUiLCJzdHlsZSIsInRoZW1lIiwidHlwZSIsInZhbHVlIiwib3RoZXJQcm9wcyIsImxlZnRFbGVtZW50V2lkdGgiLCJzZXRMZWZ0RWxlbWVudFdpZHRoIiwicmlnaHRFbGVtZW50V2lkdGgiLCJzZXRSaWdodEVsZW1lbnRXaWR0aCIsImlucHV0UmVmIiwid3JhcHBlckVsZW1lbnRSZWYiLCJsZWZ0RWxlbWVudFJlZiIsInJpZ2h0RWxlbWVudFJlZiIsImp1c3RpZnlFbGVtZW50UmVmIiwiY2xlYXZlUmVmIiwiaW5wdXRFbGVtZW50IiwiY3VycmVudCIsImVsZW1lbnQiLCJzaXplQ29udGV4dCIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWwiLCJ0YXJnZXQiLCJyZXBsYWNlIiwiaGFuZGxlS2V5RG93biIsImtleUNvZGUiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVBdHRhY2hlZEVsZW1lbnRDbGljayIsInBvc2l0aW9uIiwiZm9jdXMiLCJzZWxlY3QiLCJmaXhDb250cm9sbGVkVmFsdWUiLCJ1cGRhdGVFbGVtZW50c1dpZHRoIiwiY2xpZW50V2lkdGgiLCJNYXRoIiwiYWJzIiwic2Nyb2xsV2lkdGgiLCJjZWlsIiwid2lkdGgiLCJnZXRGb3JtYXRTdHJMZW5nIiwic3RyIiwibGVuIiwibGVuZ3RoIiwicmVhbExlbmd0aCIsImNoYXJDb2RlIiwiaSIsImNoYXJDb2RlQXQiLCJlbCIsImxhc3RJbnB1dFZhbHVlIiwic3RhdGUiLCJwcm9wZXJ0aWVzIiwicmVzdWx0IiwicmVhbFJlZiIsImNsZWF2ZSIsImlucHV0IiwiYmx1ciIsImlucHV0UHJvcHMiLCJwYWRkaW5nTGVmdCIsInVuZGVmaW5lZCIsInBhZGRpbmdSaWdodCIsImNsZWF2ZUlucHV0UHJvcHMiLCJPYmplY3QiLCJrZXlzIiwiY2xhc3NTZXQiLCJ0b1N0cmluZyIsImxlZnRUeXBlIiwicmlnaHRUeXBlIiwibWluV2lkdGgiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIm9uZU9mIiwiYm9vbCIsInN0cmluZyIsIm9iamVjdCIsImFueSIsIm51bWJlciIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFDRUMsVUFERixFQUVFQyxVQUZGLEVBR0VDLG1CQUhGLEVBSUVDLFNBSkYsRUFLRUMsTUFMRixFQU1FQyxRQU5GLFFBT08sT0FQUDtBQVFBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixpQkFBbkI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLGtCQUFwQjtBQUNBLFNBQVNDLGFBQVQsRUFBd0JDLGVBQXhCLFFBQStDLG9CQUEvQztBQUNBLE9BQU9DLFFBQVAsTUFBcUIsWUFBckI7QUFDQSxPQUFPLFNB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IHVzZUNvbnRleHQsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlUmVmLFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IENsZWF2ZSBmcm9tIFwiY2xlYXZlLmpzL3JlYWN0XCJcbmltcG9ydCB3YXJuaW5nIGZyb20gXCIuLi9fdXRpbC93YXJuaW5nXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuL1RleHRhcmVhXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktaW5wdXRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElJbnB1dFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSBhdXRvQ29tcGxldGVcbiAgICovXG4gIGF1dG9Db21wbGV0ZT86IFwib25cIiB8IFwib2ZmXCJcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIGF1dG9Gb2N1c1xuICAgKi9cbiAgYXV0b0ZvY3VzPzogYm9vbGVhblxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOWunueOsOaJi+acuuWPt+OAgeaXpeacn+OAgeaVsOWtl+WPiuiHquWumuS5ieagvOW8j++8jOWPr+afpeeci1vnpLrkvotdKGh0dHA6Ly93eGFkLmRlc2lnbi9hZHVpL2NvbXBvbmVudHMvaW5wdXQp44CCXG4gICAqL1xuICBjbGVhdmVPcHRpb25zPzogb2JqZWN0XG4gIC8qKlxuICAgKiDlrr3luqbmmK/lkKbkuI7lhoXlrrnlrr3luqblr7npvZBcbiAgICovXG4gIGNvbnRlbnRKdXN0aWZ5PzogYm9vbGVhblxuICAvKipcbiAgICog5piv5ZCm5oyJ54Wn5LiA5Liq5rGJ5a2X566XIDIg5a2X5pWw55qE5pa55byP6ZmQ5Yi26ZW/5bqmXG4gICAqL1xuICBjb3VudEhhbnppPzogYm9vbGVhblxuICAvKipcbiAgICog6buY6K6k5YC8IC0g5YaF6YOo6amx5YqoXG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBzdHJpbmcgfCBudWxsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog6L6T5YWl5qGG55qEIGlkXG4gICAqL1xuICBpZD86IHN0cmluZyB8IG51bGxcbiAgLyoqXG4gICAqIOexu+Wei1xuICAgKi9cbiAgaW50ZW50PzogXCJub3JtYWxcIiB8IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCJcbiAgLyoqXG4gICAqIOWJjee9ruWFg+e0oFxuICAgKi9cbiAgbGVmdEVsZW1lbnQ/OiBKU1guRWxlbWVudFxuICAvKipcbiAgICog6ZmQ5Yi26ZW/5bqmXG4gICAqL1xuICBsaW1pdD86IG51bWJlciB8IG51bGxcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIG5hbWVcbiAgICovXG4gIG5hbWU/OiBzdHJpbmcgfCBudWxsXG4gIC8qKlxuICAgKiBibHVyIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkJsdXI/OiAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZFxuICAvKipcbiAgICog5YC85pS55Y+Y5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCB2YWx1ZT86IHN0cmluZykgPT4gdm9pZFxuICAvKipcbiAgICogZm9jdXMg5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uRm9jdXM/OiAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZFxuICAvKipcbiAgICoga2V5ZG93biDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25LZXlEb3duPzogKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWRcbiAgLyoqXG4gICAqIGVudGVyIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvblByZXNzRW50ZXI/OiAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZFxuICAvKipcbiAgICogcGxhY2Vob2xkZXJcbiAgICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSByZXF1aXJlZFxuICAgKi9cbiAgcmVxdWlyZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlkI7nva7lhYPntKBcbiAgICovXG4gIHJpZ2h0RWxlbWVudD86IEpTWC5FbGVtZW50XG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOmZhOWKoOagt+W8j1xuICAgKi9cbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lPzogbnVsbCB8IFwibGlnaHRcIlxuICAvKipcbiAgICogaW5wdXQg5qCH562+5Y6f55Sf5bGe5oCnIC0gdHlwZVxuICAgKi9cbiAgdHlwZT86IHN0cmluZyB8IG51bGxcbiAgLyoqXG4gICAqIOWAvCAtIOWklumDqOaOp+WItlxuICAgKi9cbiAgdmFsdWU/OiBzdHJpbmcgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUlucHV0XG4gIGV4dGVuZHMgUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgICBJSW5wdXRQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55PlxuICA+IHtcbiAgVGV4dGFyZWE6IHR5cGVvZiBUZXh0YXJlYVxufVxuXG4vKipcbiAqIOi+k+WFpeahhueUqOS6juaWh+acrOi+k+WFpeeahOWMuuWfn++8jOWPr+e7k+WQiOWbvuagh+OAgeaMiemSruOAgemAieaLqeWZqOetiee7hOS7tuS9v+eUqOOAglxuICovXG4vLyBAdHMtaWdub3JlXG5jb25zdCBJbnB1dDogSUlucHV0ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGF1dG9Db21wbGV0ZSxcbiAgICAgIGF1dG9Gb2N1cyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNsZWF2ZU9wdGlvbnMsXG4gICAgICBjb250ZW50SnVzdGlmeSxcbiAgICAgIGNvdW50SGFuemksXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlkLFxuICAgICAgaW50ZW50LFxuICAgICAgbGVmdEVsZW1lbnQsXG4gICAgICBsaW1pdCxcbiAgICAgIG5hbWUsXG4gICAgICBvbkJsdXIsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uRm9jdXMsXG4gICAgICBvbktleURvd24sXG4gICAgICBvblByZXNzRW50ZXIsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHJlcXVpcmVkLFxuICAgICAgcmlnaHRFbGVtZW50LFxuICAgICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgICBzdHlsZSxcbiAgICAgIHRoZW1lLFxuICAgICAgdHlwZSxcbiAgICAgIHZhbHVlLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElJbnB1dFByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBbbGVmdEVsZW1lbnRXaWR0aCwgc2V0TGVmdEVsZW1lbnRXaWR0aF0gPSB1c2VTdGF0ZTxudWxsIHwgbnVtYmVyPihcbiAgICAgIG51bGxcbiAgICApXG4gICAgY29uc3QgW3JpZ2h0RWxlbWVudFdpZHRoLCBzZXRSaWdodEVsZW1lbnRXaWR0aF0gPSB1c2VTdGF0ZTxudWxsIHwgbnVtYmVyPihcbiAgICAgIG51bGxcbiAgICApXG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuICAgIGNvbnN0IHdyYXBwZXJFbGVtZW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuICAgIGNvbnN0IGxlZnRFbGVtZW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuICAgIGNvbnN0IHJpZ2h0RWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcbiAgICBjb25zdCBqdXN0aWZ5RWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcbiAgICBjb25zdCBjbGVhdmVSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuXG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gaW5wdXRSZWY/LmN1cnJlbnQgfHwgY2xlYXZlUmVmPy5jdXJyZW50Py5lbGVtZW50XG5cbiAgICBjb25zdCB7IHNpemU6IHNpemVDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG5cbiAgICBjb25zdCBzaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemVQcm9wLCBzaXplQ29udGV4dClcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgaWYgKCFkaXNhYmxlZCAmJiBvbkNoYW5nZSkge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb250cm9sLXJlZ2V4LCBtYXgtbGVuICovXG4gICAgICAgIC8vIDA4IEJhY2tzcGFjZSwgMDkgVGFiLCAwQSDmjaLooYznrKYsIDBCIOWeguebtOWItuihqOespiwgMEMg5o2i6aG1LCAwRCDlm57ovaYsIEEwIOS4jemXtOaWreepuuagvCxcbiAgICAgICAgLy8gMjAyOC8yMDI5IOWIhumalOespiwgRkVmZiDlrZfoioLpobrluo/moIforrDjgIJcbiAgICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWUucmVwbGFjZShcbiAgICAgICAgICAvXFx1MDAwOHxcXHUwMDA5fFxcdTAwMEF8XFx1MDAwQnxcXHUwMDBDfFxcdTAwMER8XFx1MDBBMHxcXHUyMDI4fFxcdTIwMjl8XFx1RkVGRi9nLFxuICAgICAgICAgIFwiXCJcbiAgICAgICAgKVxuICAgICAgICBvbkNoYW5nZShlLCB2YWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiBvblByZXNzRW50ZXIpIHtcbiAgICAgICAgb25QcmVzc0VudGVyKGUpXG4gICAgICB9XG4gICAgICBpZiAob25LZXlEb3duKSB7XG4gICAgICAgIG9uS2V5RG93bihlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUJsdXIgPSAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgaWYgKG9uQmx1cikge1xuICAgICAgICBvbkJsdXIoZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVGb2N1cyA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBpZiAob25Gb2N1cykge1xuICAgICAgICBvbkZvY3VzKGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQXR0YWNoZWRFbGVtZW50Q2xpY2sgPSAocG9zaXRpb246IFwibGVmdFwiIHwgXCJyaWdodFwiKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHBvc2l0aW9uID09PSBcImxlZnRcIiAmJlxuICAgICAgICBsZWZ0RWxlbWVudCAmJlxuICAgICAgICBsZWZ0RWxlbWVudC50eXBlICYmXG4gICAgICAgIGxlZnRFbGVtZW50LnR5cGUubmFtZSA9PT0gXCJJY29uXCJcbiAgICAgICkge1xuICAgICAgICBpbnB1dEVsZW1lbnQuZm9jdXMoKVxuICAgICAgICBpbnB1dEVsZW1lbnQuc2VsZWN0KClcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgcG9zaXRpb24gPT09IFwicmlnaHRcIiAmJlxuICAgICAgICByaWdodEVsZW1lbnQgJiZcbiAgICAgICAgcmlnaHRFbGVtZW50LnR5cGUgJiZcbiAgICAgICAgcmlnaHRFbGVtZW50LnR5cGUubmFtZSA9PT0gXCJJY29uXCJcbiAgICAgICkge1xuICAgICAgICBpbnB1dEVsZW1lbnQuZm9jdXMoKVxuICAgICAgICBpbnB1dEVsZW1lbnQuc2VsZWN0KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmaXhDb250cm9sbGVkVmFsdWUgPSAodmFsPzogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwidW5kZWZpbmVkXCIgfHwgdmFsID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBcIlwiXG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsXG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlRWxlbWVudHNXaWR0aCA9ICgpID0+IHtcbiAgICAgIC8qKlxuICAgICAgICog6L+Z5Liq5pa55rOV5Lya5ZyoIGRpZFVwZGF0ZSDlkowgZGlkTW91bnQg5pe25Y67IHNldFN0YXRlXG4gICAgICAgKiDkuIDlrpropoHpgb/lhY3pgKDmiJDlvqrnjq/jgIJcbiAgICAgICAqL1xuICAgICAgaWYgKGxlZnRFbGVtZW50UmVmPy5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IHsgY2xpZW50V2lkdGggfSA9IGxlZnRFbGVtZW50UmVmLmN1cnJlbnRcblxuICAgICAgICAvLyDpmLLmraLlvqrnjq9cbiAgICAgICAgaWYgKE1hdGguYWJzKGNsaWVudFdpZHRoIC0gKGxlZnRFbGVtZW50V2lkdGggfHwgMCkpID4gMikge1xuICAgICAgICAgIHNldExlZnRFbGVtZW50V2lkdGgoY2xpZW50V2lkdGgpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobGVmdEVsZW1lbnRXaWR0aCkge1xuICAgICAgICBzZXRMZWZ0RWxlbWVudFdpZHRoKG51bGwpXG4gICAgICB9XG5cbiAgICAgIGlmIChyaWdodEVsZW1lbnRSZWY/LmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCB9ID0gcmlnaHRFbGVtZW50UmVmLmN1cnJlbnRcblxuICAgICAgICAvLyDpmLLmraLlvqrnjq9cbiAgICAgICAgaWYgKE1hdGguYWJzKGNsaWVudFdpZHRoIC0gKHJpZ2h0RWxlbWVudFdpZHRoIHx8IDApKSA+IDIpIHtcbiAgICAgICAgICBzZXRSaWdodEVsZW1lbnRXaWR0aChjbGllbnRXaWR0aClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyaWdodEVsZW1lbnRXaWR0aCkge1xuICAgICAgICBzZXRSaWdodEVsZW1lbnRXaWR0aChudWxsKVxuICAgICAgfVxuXG4gICAgICBpZiAoanVzdGlmeUVsZW1lbnRSZWY/LmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgeyBzY3JvbGxXaWR0aCB9ID0ganVzdGlmeUVsZW1lbnRSZWYuY3VycmVudFxuICAgICAgICBpZiAoXG4gICAgICAgICAgd3JhcHBlckVsZW1lbnRSZWYuY3VycmVudCAmJlxuICAgICAgICAgIE1hdGguY2VpbChzY3JvbGxXaWR0aCkgIT09IHdyYXBwZXJFbGVtZW50UmVmLmN1cnJlbnQuY2xpZW50V2lkdGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgd3JhcHBlckVsZW1lbnRSZWYuY3VycmVudC5zdHlsZS53aWR0aCA9IGAke01hdGguY2VpbChzY3JvbGxXaWR0aCl9cHhgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRGb3JtYXRTdHJMZW5nID0gKHN0cjogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoXG4gICAgICBsZXQgcmVhbExlbmd0aCA9IDBcbiAgICAgIGxldCBjaGFyQ29kZSA9IC0xXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICAgICAgaWYgKGNoYXJDb2RlID49IDAgJiYgY2hhckNvZGUgPD0gMTI4KSB7XG4gICAgICAgICAgcmVhbExlbmd0aCArPSAwLjVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWFsTGVuZ3RoICs9IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIE1hdGguY2VpbChyZWFsTGVuZ3RoKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB1cGRhdGVFbGVtZW50c1dpZHRoKClcbiAgICAgIGlmIChjbGVhdmVSZWY/LmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgZWwgPSBjbGVhdmVSZWYuY3VycmVudC5lbGVtZW50XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDkv67lpI0gY2xlYXZlLjEuNC43IGJ1ZzpcbiAgICAgICAgICovXG4gICAgICAgIGlmIChjbGVhdmVSZWYuY3VycmVudC5sYXN0SW5wdXRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBjbGVhdmVSZWYuY3VycmVudC5sYXN0SW5wdXRWYWx1ZSA9IHZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsZWF2ZVJlZi5jdXJyZW50LnN0YXRlLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGNsZWF2ZVJlZi5jdXJyZW50LnN0YXRlLnZhbHVlID0gdmFsdWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xlYXZlUmVmLmN1cnJlbnQucHJvcGVydGllcy5yZXN1bHQgIT09IHZhbHVlKSB7XG4gICAgICAgICAgY2xlYXZlUmVmLmN1cnJlbnQucHJvcGVydGllcy5yZXN1bHQgPSB2YWx1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChlbCAmJiBlbC52YWx1ZSAhPT0gdmFsdWUgJiYgdmFsdWUpIHtcbiAgICAgICAgICBlbC52YWx1ZSA9IHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+IHtcbiAgICAgIGNvbnN0IHJlYWxSZWYgPSBpbnB1dFJlZj8uY3VycmVudCB8fCBjbGVhdmVSZWY/LmN1cnJlbnQ/LmVsZW1lbnRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNsZWF2ZTogY2xlYXZlUmVmPy5jdXJyZW50LFxuICAgICAgICBpbnB1dDogcmVhbFJlZixcbiAgICAgICAgbGVmdEVsZW1lbnQ6IGxlZnRFbGVtZW50UmVmPy5jdXJyZW50LFxuICAgICAgICByaWdodEVsZW1lbnQ6IHJpZ2h0RWxlbWVudFJlZj8uY3VycmVudCxcbiAgICAgICAgdXBkYXRlRWxlbWVudHNXaWR0aCxcbiAgICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgICBoYW5kbGVLZXlEb3duLFxuICAgICAgICBoYW5kbGVCbHVyLFxuICAgICAgICBoYW5kbGVGb2N1cyxcbiAgICAgICAgaGFuZGxlQXR0YWNoZWRFbGVtZW50Q2xpY2ssXG4gICAgICAgIGZvY3VzOiAoKSA9PiByZWFsUmVmLmZvY3VzKCksXG4gICAgICAgIGJsdXI6ICgpID0+IHJlYWxSZWYuYmx1cigpLFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnB1dFByb3BzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge1xuICAgICAgYXV0b0NvbXBsZXRlLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgY2xhc3NOYW1lOiBgJHtwcmVmaXh9LWJhc2VgLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBvbkJsdXI6IGhhbmRsZUJsdXIsXG4gICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgb25Gb2N1czogaGFuZGxlRm9jdXMsXG4gICAgICBvbktleURvd246IGhhbmRsZUtleURvd24sXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHJlZjogaW5wdXRSZWYsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiBsZWZ0RWxlbWVudFdpZHRoID8gYCR7bGVmdEVsZW1lbnRXaWR0aH1weGAgOiB1bmRlZmluZWQsXG4gICAgICAgIHBhZGRpbmdSaWdodDogcmlnaHRFbGVtZW50V2lkdGggPyBgJHtyaWdodEVsZW1lbnRXaWR0aH1weGAgOiB1bmRlZmluZWQsXG4gICAgICB9LFxuICAgICAgdHlwZSxcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhdmVJbnB1dFByb3BzID0geyAuLi5pbnB1dFByb3BzIH1cblxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgaW5wdXRQcm9wcy52YWx1ZSA9IGZpeENvbnRyb2xsZWRWYWx1ZSh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRQcm9wcy5kZWZhdWx0VmFsdWUgPSBmaXhDb250cm9sbGVkVmFsdWUoZGVmYXVsdFZhbHVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNsZWF2ZSDkuI3mjqXmlLbljp/nlJ/nmoQgZGVmYXVsdFZhbHVl77yM5b+F6aG75Lyg5YWlIHZhbHVlIHByb3Ag5p2l5a6e546wIGRlZmF1bHRWYWx1ZSDnmoTkvZznlKhcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vbm9zaXIvY2xlYXZlLmpzL2Jsb2IvbWFzdGVyL2RvYy9yZWFjdGpzLWNvbXBvbmVudC11c2FnZS5tZCNob3ctdG8tcGFzcy1kZWZhdWx0LXZhbHVlXG4gICAgICovXG4gICAgY2xlYXZlSW5wdXRQcm9wcy52YWx1ZSA9IHZhbHVlIHx8IGRlZmF1bHRWYWx1ZSB8fCBcIlwiXG5cbiAgICBjb25zdCBpbnB1dCA9XG4gICAgICAhY2xlYXZlT3B0aW9ucyB8fCBPYmplY3Qua2V5cyhjbGVhdmVPcHRpb25zKS5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgIDxpbnB1dCB7Li4uaW5wdXRQcm9wc30gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxDbGVhdmUgb3B0aW9ucz17Y2xlYXZlT3B0aW9uc30gey4uLmNsZWF2ZUlucHV0UHJvcHN9IHJlZj17Y2xlYXZlUmVmfSAvPlxuICAgICAgKVxuXG4gICAgbGV0IGxlbmd0aFxuICAgIGlmIChsaW1pdCkge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgIXJpZ2h0RWxlbWVudCxcbiAgICAgICAgXCJJbnB1dFwiLFxuICAgICAgICBcIuS4jeWFgeiuuOWQjOaXtuS9v+eUqCBwcm9wIGBsaW1pdGAg5LiOIHByb3AgYHJpZ2h0RWxlbWVudGBcIlxuICAgICAgKVxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGxlbmd0aCA9IGNvdW50SGFuemkgPyBnZXRGb3JtYXRTdHJMZW5nKHZhbHVlKSA6IHZhbHVlLmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybmluZyhcbiAgICAgICAgICB2YWx1ZSAhPT0gbnVsbCxcbiAgICAgICAgICBcIklucHV0XCIsXG4gICAgICAgICAgXCLlpoLmnpzopoHkvb/nlKggbGltaXQgUHJvcO+8jOW/hemhu+S7juWklumDqOaOp+WItiB2YWx1ZeOAglwiXG4gICAgICAgIClcbiAgICAgICAgbGVuZ3RoID0gMFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29udGVudEp1c3RpZnkpIHtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgIHZhbHVlICE9PSBudWxsLFxuICAgICAgICBcIklucHV0XCIsXG4gICAgICAgIFwi5aaC5p6c5L2/55SoIGNvbnRlbnRKdXNmaXR5IFByb3DvvIzlv4Xpobvku47lpJbpg6jmjqfliLYgdmFsdWXjgIJcIlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0td3JhcHBlcmAsXG4gICAgICBgJHtwcmVmaXh9LSR7c2l6ZX1gLFxuICAgICAge1xuICAgICAgICBbYCR7cHJlZml4fS0ke3RoZW1lfWBdOiB0aGVtZSxcbiAgICAgICAgW2Ake3ByZWZpeH0tZGlzYWJsZWRgXTogZGlzYWJsZWQsXG4gICAgICAgIFtgJHtwcmVmaXh9LWxpbWl0ZWRgXTogbGltaXQsXG4gICAgICAgIFtgJHtwcmVmaXh9LWxpbWl0ZWRfZGlnaXQtb3Zlci0yYF06XG4gICAgICAgICAgbGltaXQgJiYgbGltaXQudG9TdHJpbmcoKS5sZW5ndGggPiAyLFxuICAgICAgICBbYCR7cHJlZml4fS1ub3JtYWxgXTogaW50ZW50ID09PSBcIm5vcm1hbFwiLFxuICAgICAgICBbYCR7cHJlZml4fS1wcmltYXJ5YF06IGludGVudCA9PT0gXCJwcmltYXJ5XCIsXG4gICAgICAgIFtgJHtwcmVmaXh9LXN1Y2Nlc3NgXTogaW50ZW50ID09PSBcInN1Y2Nlc3NcIixcbiAgICAgICAgW2Ake3ByZWZpeH0td2FybmluZ2BdOiBpbnRlbnQgPT09IFwid2FybmluZ1wiLFxuICAgICAgICBbYCR7cHJlZml4fS1kYW5nZXJgXTpcbiAgICAgICAgICBpbnRlbnQgPT09IFwiZGFuZ2VyXCIgfHwgKGxlbmd0aCAmJiBsaW1pdCAmJiBsZW5ndGggPiBsaW1pdCksXG4gICAgICB9XG4gICAgKVxuXG4gICAgY29uc3QgbGVmdFR5cGUgPVxuICAgICAgbGVmdEVsZW1lbnQgJiYgbGVmdEVsZW1lbnQudHlwZSA/IGxlZnRFbGVtZW50LnR5cGUudHlwZSA6IFwiXCJcbiAgICBjb25zdCByaWdodFR5cGUgPVxuICAgICAgcmlnaHRFbGVtZW50ICYmIHJpZ2h0RWxlbWVudC50eXBlID8gcmlnaHRFbGVtZW50LnR5cGUudHlwZSA6IFwiXCJcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17d3JhcHBlckVsZW1lbnRSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIHshIWxlZnRFbGVtZW50ICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e2xlZnRFbGVtZW50UmVmfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQXR0YWNoZWRFbGVtZW50Q2xpY2soXCJsZWZ0XCIpfVxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tbGVmdGAsIHtcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tbGVmdF9idXR0b25gXTogbGVmdFR5cGUgPT09IFwiQnV0dG9uXCIsXG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LWxlZnRfaWNvbmBdOiBsZWZ0VHlwZSA9PT0gXCJJY29uXCIsXG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LWxlZnRfc2VsZWN0YF06IGxlZnRUeXBlID09PSBcIlNlbGVjdFwiLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xlZnRFbGVtZW50fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7aW5wdXR9XG4gICAgICAgIHshIXJpZ2h0RWxlbWVudCAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXtyaWdodEVsZW1lbnRSZWZ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBdHRhY2hlZEVsZW1lbnRDbGljayhcInJpZ2h0XCIpfVxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tcmlnaHRgLCB7XG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXJpZ2h0X2J1dHRvbmBdOiByaWdodFR5cGUgPT09IFwiQnV0dG9uXCIsXG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXJpZ2h0X2ljb25gXTogcmlnaHRUeXBlID09PSBcIkljb25cIixcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tcmlnaHRfc2VsZWN0YF06IHJpZ2h0VHlwZSA9PT0gXCJTZWxlY3RcIixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtyaWdodEVsZW1lbnR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtsaW1pdCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbGltaXRgfT5cbiAgICAgICAgICAgIDxzcGFuPntgJHtsZW5ndGh9LyR7bGltaXR9YH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtjb250ZW50SnVzdGlmeSAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWp1c3RpZnlgfVxuICAgICAgICAgICAgcmVmPXtqdXN0aWZ5RWxlbWVudFJlZn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBsZWZ0RWxlbWVudFdpZHRoXG4gICAgICAgICAgICAgICAgPyBgJHtsZWZ0RWxlbWVudFdpZHRofXB4YFxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHJpZ2h0RWxlbWVudFdpZHRoXG4gICAgICAgICAgICAgICAgPyBgJHtyaWdodEVsZW1lbnRXaWR0aH1weGBcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgbWluV2lkdGg6IHN0eWxlPy5taW5XaWR0aCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ZpeENvbnRyb2xsZWRWYWx1ZSh2YWx1ZSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbilcblxuSW5wdXQuVGV4dGFyZWEgPSBUZXh0YXJlYVxuXG5JbnB1dC5kaXNwbGF5TmFtZSA9IFwiSW5wdXRcIlxuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSBhdXRvQ29tcGxldGVcbiAgICovXG4gIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm9uXCIsIFwib2ZmXCJdKSxcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIGF1dG9Gb2N1c1xuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5a6e546w5omL5py65Y+344CB5pel5pyf44CB5pWw5a2X5Y+K6Ieq5a6a5LmJ5qC85byP77yM5Y+v5p+l55yLW+ekuuS+i10oaHR0cDovL3d4YWQuZGVzaWduL2FkdWkvY29tcG9uZW50cy9pbnB1dCnjgIJcbiAgICovXG4gIGNsZWF2ZU9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDlrr3luqbmmK/lkKbkuI7lhoXlrrnlrr3luqblr7npvZBcbiAgICovXG4gIGNvbnRlbnRKdXN0aWZ5OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOaYr+WQpuaMieeFp+S4gOS4quaxieWtl+eulyAyIOWtl+aVsOeahOaWueW8j+mZkOWItumVv+W6plxuICAgKi9cbiAgY291bnRIYW56aTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDpu5jorqTlgLwgLSDlhoXpg6jpqbHliqhcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6L6T5YWl5qGG55qEIGlkXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOexu+Wei1xuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwibm9ybWFsXCIsXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgXSksXG4gIC8qKlxuICAgKiDliY3nva7lhYPntKBcbiAgICovXG4gIGxlZnRFbGVtZW50OiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog6ZmQ5Yi26ZW/5bqmXG4gICAqL1xuICBsaW1pdDogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIG5hbWVcbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBibHVyIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5YC85pS55Y+Y5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIGZvY3VzIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIGtleWRvd24g5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBlbnRlciDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25QcmVzc0VudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIHBsYWNlaG9sZGVyXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIHJlcXVpcmVkXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlkI7nva7lhYPntKBcbiAgICovXG4gIHJpZ2h0RWxlbWVudDogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOmZhOWKoOagt+W8j1xuICAgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGlnaHRcIl0pLFxuICAvKipcbiAgICogaW5wdXQg5qCH562+5Y6f55Sf5bGe5oCnIC0gdHlwZVxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOWAvCAtIOWklumDqOaOp+WItlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgYXV0b0NvbXBsZXRlOiBcIm9mZlwiLFxuICBhdXRvRm9jdXM6IGZhbHNlLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgY2xlYXZlT3B0aW9uczoge30sXG4gIGNvbnRlbnRKdXN0aWZ5OiBmYWxzZSxcbiAgY291bnRIYW56aTogdHJ1ZSxcbiAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGlkOiBudWxsLFxuICBpbnRlbnQ6IFwibm9ybWFsXCIsXG4gIGxlZnRFbGVtZW50OiB1bmRlZmluZWQsXG4gIGxpbWl0OiBudWxsLFxuICBuYW1lOiBudWxsLFxuICBvbkJsdXI6ICgpID0+IHt9LFxuICBvbkNoYW5nZTogKCkgPT4ge30sXG4gIG9uRm9jdXM6ICgpID0+IHt9LFxuICBvbktleURvd246ICgpID0+IHt9LFxuICBvblByZXNzRW50ZXI6ICgpID0+IHt9LFxuICBwbGFjZWhvbGRlcjogXCLor7fovpPlhaVcIixcbiAgcmVxdWlyZWQ6IGZhbHNlLFxuICByaWdodEVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICBzdHlsZToge30sXG4gIHRoZW1lOiBudWxsLFxuICB0eXBlOiBudWxsLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRcbiJdfQ==