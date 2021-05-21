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

import React, { forwardRef, useContext, useImperativeHandle, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import warning from "../_util/warning";
import { ConfigContext, getComputedSize } from "../config-provider";
import "./style";

var noop = function noop() {};

var prefix = "adui-input";
var Textarea = forwardRef(function (_ref, ref) {
  var _classNames;

  var autoFocus = _ref.autoFocus,
      className = _ref.className,
      countHanzi = _ref.countHanzi,
      defaultValue = _ref.defaultValue,
      disabled = _ref.disabled,
      id = _ref.id,
      intent = _ref.intent,
      limit = _ref.limit,
      name = _ref.name,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onKeyDown = _ref.onKeyDown,
      onPressEnter = _ref.onPressEnter,
      onScroll = _ref.onScroll,
      placeholder = _ref.placeholder,
      required = _ref.required,
      resize = _ref.resize,
      sizeProp = _ref.size,
      theme = _ref.theme,
      type = _ref.type,
      value = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["autoFocus", "className", "countHanzi", "defaultValue", "disabled", "id", "intent", "limit", "name", "onBlur", "onChange", "onFocus", "onKeyDown", "onPressEnter", "onScroll", "placeholder", "required", "resize", "size", "theme", "type", "value"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  var textareaRef = useRef(null);

  var _useContext = useContext(ConfigContext),
      sizeContext = _useContext.size;

  var size = getComputedSize(sizeProp, sizeContext);

  var handleChange = function handleChange(e) {
    if (!disabled && onChange) {
      var val = e.target.value.replace(/\u0008|\u0009|\u000B|\u000C|\u000D|\u00A0|\u2028|\u2029|\uFEFF/g, "");
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
    setFocused(false);

    if (onBlur) {
      onBlur(e);
    }
  };

  var handleFocus = function handleFocus(e) {
    setFocused(true);

    if (onFocus) {
      onFocus(e);
    }
  };

  var fixControlledValue = function fixControlledValue(val) {
    if (typeof val === "undefined" || val === null) {
      return "";
    }

    return val;
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

  useImperativeHandle(ref, function () {
    return {
      input: textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current,
      handleChange: handleChange,
      handleKeyDown: handleKeyDown,
      handleBlur: handleBlur,
      handleFocus: handleFocus
    };
  });
  var textareaProps = {
    autoFocus: autoFocus,
    className: "".concat(prefix, "-base"),
    disabled: disabled,
    id: id,
    name: name,
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onScroll: onScroll,
    placeholder: placeholder,
    ref: textareaRef,
    required: required,
    style: {
      resize: resize
    },
    type: type
  };

  if (value !== null) {
    textareaProps.value = fixControlledValue(value);
  } else {
    textareaProps.defaultValue = fixControlledValue(defaultValue);
  }

  var length;

  if (limit) {
    warning(resize === "none", "Input.Textarea", "不允许同时使用 prop `limit` 与 prop `resize`");

    if (value) {
      length = countHanzi ? getFormatStrLeng(value) : value.length;
    } else {
      warning(value !== null, "Input.Textarea", "如果要限制字数，必须从外部控制 value。");
      length = 0;
    }
  }

  var classSet = classNames(className, "".concat(prefix, "-wrapper"), "".concat(prefix, "-wrapper_textarea"), "".concat(prefix, "-").concat(size), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-").concat(theme), theme), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefix, "-limited"), !!limit), _defineProperty(_classNames, "".concat(prefix, "-normal"), intent === "normal"), _defineProperty(_classNames, "".concat(prefix, "-primary"), intent === "primary"), _defineProperty(_classNames, "".concat(prefix, "-success"), intent === "success"), _defineProperty(_classNames, "".concat(prefix, "-warning"), intent === "warning"), _defineProperty(_classNames, "".concat(prefix, "-danger"), intent === "danger" || length && limit && length > limit), _defineProperty(_classNames, "".concat(prefix, "-focused"), focused), _classNames));
  return React.createElement("div", _extends({
    className: classSet
  }, otherProps), React.createElement("textarea", textareaProps), !!limit && React.createElement("div", {
    className: "".concat(prefix, "-limit")
  }, React.createElement("span", null, "".concat(length, "/").concat(limit))));
});
Textarea.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  countHanzi: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  intent: PropTypes.oneOf(["normal", "primary", "success", "warning", "danger"]),
  limit: PropTypes.number,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onPressEnter: PropTypes.func,
  onScroll: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  resize: PropTypes.oneOf(["none", "both", "horizontal", "vertical"]),
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  theme: PropTypes.oneOf([null, "light"]),
  type: PropTypes.string,
  value: PropTypes.string
};
Textarea.defaultProps = {
  autoFocus: false,
  className: undefined,
  countHanzi: true,
  defaultValue: null,
  disabled: false,
  id: null,
  intent: "normal",
  limit: null,
  name: null,
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  onKeyDown: noop,
  onPressEnter: noop,
  onScroll: noop,
  placeholder: "请输入",
  required: false,
  resize: "none",
  size: "small",
  theme: null,
  type: null,
  value: null
};
Textarea.displayName = "Textarea";
export default Textarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvaW5wdXQvVGV4dGFyZWEudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiZm9yd2FyZFJlZiIsInVzZUNvbnRleHQiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwidXNlUmVmIiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwid2FybmluZyIsIkNvbmZpZ0NvbnRleHQiLCJnZXRDb21wdXRlZFNpemUiLCJub29wIiwicHJlZml4IiwiVGV4dGFyZWEiLCJyZWYiLCJhdXRvRm9jdXMiLCJjbGFzc05hbWUiLCJjb3VudEhhbnppIiwiZGVmYXVsdFZhbHVlIiwiZGlzYWJsZWQiLCJpZCIsImludGVudCIsImxpbWl0IiwibmFtZSIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwib25Gb2N1cyIsIm9uS2V5RG93biIsIm9uUHJlc3NFbnRlciIsIm9uU2Nyb2xsIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInJlc2l6ZSIsInNpemVQcm9wIiwic2l6ZSIsInRoZW1lIiwidHlwZSIsInZhbHVlIiwib3RoZXJQcm9wcyIsImZvY3VzZWQiLCJzZXRGb2N1c2VkIiwidGV4dGFyZWFSZWYiLCJzaXplQ29udGV4dCIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWwiLCJ0YXJnZXQiLCJyZXBsYWNlIiwiaGFuZGxlS2V5RG93biIsImtleUNvZGUiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRm9jdXMiLCJmaXhDb250cm9sbGVkVmFsdWUiLCJnZXRGb3JtYXRTdHJMZW5nIiwic3RyIiwibGVuIiwibGVuZ3RoIiwicmVhbExlbmd0aCIsImNoYXJDb2RlIiwiaSIsImNoYXJDb2RlQXQiLCJNYXRoIiwiY2VpbCIsImlucHV0IiwiY3VycmVudCIsInRleHRhcmVhUHJvcHMiLCJzdHlsZSIsImNsYXNzU2V0IiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwibnVtYmVyIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsImRpc3Bs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UyxFQUFFaEIsSUFiVztBQWN0QmlCLEVBQUFBLFlBQVksRUFBRWpCLElBZFE7QUFldEJrQixFQUFBQSxRQUFRLEVBQUVsQixJQWZZO0FBZ0J0Qm1CLEVBQUFBLFdBQVcsRUFBRSxLQWhCUztBQWlCdEJDLEVBQUFBLFFBQVEsRUFBRSxLQWpCWTtBQWtCdEJDLEVBQUFBLE1BQU0sRUFBRSxNQWxCYztBQW1CdEJFLEVBQUFBLElBQUksRUFBRSxPQW5CZ0I7QUFvQnRCQyxFQUFBQSxLQUFLLEVBQUUsSUFwQmU7QUFxQnRCQyxFQUFBQSxJQUFJLEVBQUUsSUFyQmdCO0FBc0J0QkMsRUFBQUEsS0FBSyxFQUFFO0FBdEJlLENBQXhCO0FBeUJBeEIsUUFBUSxDQUFDK0QsV0FBVCxHQUF1QixVQUF2QjtBQUVBLGVBQWUvRCxRQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIGZvcndhcmRSZWYsXG4gIHVzZUNvbnRleHQsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB3YXJuaW5nIGZyb20gXCIuLi9fdXRpbC93YXJuaW5nXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktaW5wdXRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElUZXh0YXJlYVByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSBhdXRvRm9jdXNcbiAgICovXG4gIGF1dG9Gb2N1cz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKbmjInnhafkuIDkuKrmsYnlrZfnrpcgMiDlrZfmlbDnmoTmlrnlvI/pmZDliLbplb/luqZcbiAgICovXG4gIGNvdW50SGFuemk/OiBib29sZWFuXG4gIC8qKlxuICAgKiDpu5jorqTlgLwgLSDlhoXpg6jpqbHliqhcbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IHN0cmluZyB8IG51bGxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDovpPlhaXmoYbnmoQgaWRcbiAgICovXG4gIGlkPzogc3RyaW5nIHwgbnVsbFxuICAvKipcbiAgICog57G75Z6LXG4gICAqL1xuICBpbnRlbnQ/OiBcIm5vcm1hbFwiIHwgXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiIHwgXCJkYW5nZXJcIlxuICAvKipcbiAgICog6ZmQ5Yi26ZW/5bqmXG4gICAqL1xuICBsaW1pdD86IG51bWJlciB8IG51bGxcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIG5hbWVcbiAgICovXG4gIG5hbWU/OiBzdHJpbmcgfCBudWxsXG4gIC8qKlxuICAgKiBibHVyIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkJsdXI/OiAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4gdm9pZFxuICAvKipcbiAgICog5YC85pS55Y+Y5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+LCB2YWx1ZT86IHN0cmluZykgPT4gdm9pZFxuICAvKipcbiAgICogZm9jdXMg5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uRm9jdXM/OiAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4gdm9pZFxuICAvKipcbiAgICoga2V5ZG93biDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25LZXlEb3duPzogKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHZvaWRcbiAgLyoqXG4gICAqIGVudGVyIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvblByZXNzRW50ZXI/OiAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4gdm9pZFxuICAvKipcbiAgICogc2Nyb2xsIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvblNjcm9sbD86IChlOiBSZWFjdC5VSUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB2b2lkXG4gIC8qKlxuICAgKiBwbGFjZWhvbGRlclxuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIHJlcXVpcmVkXG4gICAqL1xuICByZXF1aXJlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpuaUr+aMgeiwg+aVtOWkp+Wwj1xuICAgKi9cbiAgcmVzaXplPzogXCJub25lXCIgfCBcImJvdGhcIiB8IFwiaG9yaXpvbnRhbFwiIHwgXCJ2ZXJ0aWNhbFwiXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU/OiBudWxsIHwgXCJsaWdodFwiXG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSB0eXBlXG4gICAqL1xuICB0eXBlPzogc3RyaW5nIHwgbnVsbFxuICAvKipcbiAgICog5YC8IC0g5aSW6YOo5o6n5Yi2XG4gICAqL1xuICB2YWx1ZT86IHN0cmluZyB8IG51bGxcbn1cblxuLyoqXG4gKiDovpPlhaXljLrln5/vvIznlKjkuo7lpJrooYznuq/mlofmnKznvJbovpHjgIJcbiAqL1xuY29uc3QgVGV4dGFyZWE6IFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gIElUZXh0YXJlYVByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+XG4+ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGF1dG9Gb2N1cyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNvdW50SGFuemksXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlkLFxuICAgICAgaW50ZW50LFxuICAgICAgbGltaXQsXG4gICAgICBuYW1lLFxuICAgICAgb25CbHVyLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbkZvY3VzLFxuICAgICAgb25LZXlEb3duLFxuICAgICAgb25QcmVzc0VudGVyLFxuICAgICAgb25TY3JvbGwsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHJlcXVpcmVkLFxuICAgICAgcmVzaXplLFxuICAgICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgICB0aGVtZSxcbiAgICAgIHR5cGUsXG4gICAgICB2YWx1ZSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJVGV4dGFyZWFQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgW2ZvY3VzZWQsIHNldEZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCB0ZXh0YXJlYVJlZiA9IHVzZVJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PihudWxsKVxuXG4gICAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuXG4gICAgY29uc3Qgc2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplUHJvcCwgc2l6ZUNvbnRleHQpXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcbiAgICAgIGlmICghZGlzYWJsZWQgJiYgb25DaGFuZ2UpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29udHJvbC1yZWdleCwgbWF4LWxlbiAqL1xuICAgICAgICAvLyAwOCBCYWNrc3BhY2UsIDA5IFRhYiwgMEIg5Z6C55u05Yi26KGo56ymLCAwQyDmjaLpobUsIDBEIOWbnui9piwgQTAg5LiN6Ze05pat56m65qC8LFxuICAgICAgICAvLyAyMDI4LzIwMjkg5YiG6ZqU56ymLCBGRWZmIOWtl+iKgumhuuW6j+agh+iusOOAglxuICAgICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKFxuICAgICAgICAgIC9cXHUwMDA4fFxcdTAwMDl8XFx1MDAwQnxcXHUwMDBDfFxcdTAwMER8XFx1MDBBMHxcXHUyMDI4fFxcdTIwMjl8XFx1RkVGRi9nLFxuICAgICAgICAgIFwiXCJcbiAgICAgICAgKVxuICAgICAgICBvbkNoYW5nZShlLCB2YWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiBvblByZXNzRW50ZXIpIHtcbiAgICAgICAgb25QcmVzc0VudGVyKGUpXG4gICAgICB9XG4gICAgICBpZiAob25LZXlEb3duKSB7XG4gICAgICAgIG9uS2V5RG93bihlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUJsdXIgPSAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgICAgc2V0Rm9jdXNlZChmYWxzZSlcbiAgICAgIGlmIChvbkJsdXIpIHtcbiAgICAgICAgb25CbHVyKGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRm9jdXMgPSAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgICAgc2V0Rm9jdXNlZCh0cnVlKVxuICAgICAgaWYgKG9uRm9jdXMpIHtcbiAgICAgICAgb25Gb2N1cyhlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZpeENvbnRyb2xsZWRWYWx1ZSA9ICh2YWw/OiBzdHJpbmcgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB2YWwgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWxcbiAgICB9XG5cbiAgICBjb25zdCBnZXRGb3JtYXRTdHJMZW5nID0gKHN0cjogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoXG4gICAgICBsZXQgcmVhbExlbmd0aCA9IDBcbiAgICAgIGxldCBjaGFyQ29kZSA9IC0xXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICAgICAgaWYgKGNoYXJDb2RlID49IDAgJiYgY2hhckNvZGUgPD0gMTI4KSB7XG4gICAgICAgICAgcmVhbExlbmd0aCArPSAwLjVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWFsTGVuZ3RoICs9IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIE1hdGguY2VpbChyZWFsTGVuZ3RoKVxuICAgIH1cblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgaW5wdXQ6IHRleHRhcmVhUmVmPy5jdXJyZW50LFxuICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgaGFuZGxlS2V5RG93bixcbiAgICAgIGhhbmRsZUJsdXIsXG4gICAgICBoYW5kbGVGb2N1cyxcbiAgICB9KSlcblxuICAgIGNvbnN0IHRleHRhcmVhUHJvcHM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICBhdXRvRm9jdXMsXG4gICAgICBjbGFzc05hbWU6IGAke3ByZWZpeH0tYmFzZWAsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIG9uQmx1cjogaGFuZGxlQmx1cixcbiAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICBvbkZvY3VzOiBoYW5kbGVGb2N1cyxcbiAgICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICAgIG9uU2Nyb2xsLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICByZWY6IHRleHRhcmVhUmVmLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBzdHlsZTogeyByZXNpemUgfSxcbiAgICAgIHR5cGUsXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0ZXh0YXJlYVByb3BzLnZhbHVlID0gZml4Q29udHJvbGxlZFZhbHVlKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0YXJlYVByb3BzLmRlZmF1bHRWYWx1ZSA9IGZpeENvbnRyb2xsZWRWYWx1ZShkZWZhdWx0VmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IGxlbmd0aFxuICAgIGlmIChsaW1pdCkge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgcmVzaXplID09PSBcIm5vbmVcIixcbiAgICAgICAgXCJJbnB1dC5UZXh0YXJlYVwiLFxuICAgICAgICBcIuS4jeWFgeiuuOWQjOaXtuS9v+eUqCBwcm9wIGBsaW1pdGAg5LiOIHByb3AgYHJlc2l6ZWBcIlxuICAgICAgKVxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGxlbmd0aCA9IGNvdW50SGFuemkgPyBnZXRGb3JtYXRTdHJMZW5nKHZhbHVlKSA6IHZhbHVlLmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybmluZyhcbiAgICAgICAgICB2YWx1ZSAhPT0gbnVsbCxcbiAgICAgICAgICBcIklucHV0LlRleHRhcmVhXCIsXG4gICAgICAgICAgXCLlpoLmnpzopoHpmZDliLblrZfmlbDvvIzlv4Xpobvku47lpJbpg6jmjqfliLYgdmFsdWXjgIJcIlxuICAgICAgICApXG4gICAgICAgIGxlbmd0aCA9IDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LXdyYXBwZXJgLFxuICAgICAgYCR7cHJlZml4fS13cmFwcGVyX3RleHRhcmVhYCxcbiAgICAgIGAke3ByZWZpeH0tJHtzaXplfWAsXG4gICAgICB7XG4gICAgICAgIFtgJHtwcmVmaXh9LSR7dGhlbWV9YF06IHRoZW1lLFxuICAgICAgICBbYCR7cHJlZml4fS1kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgICAgICAgW2Ake3ByZWZpeH0tbGltaXRlZGBdOiAhIWxpbWl0LFxuICAgICAgICBbYCR7cHJlZml4fS1ub3JtYWxgXTogaW50ZW50ID09PSBcIm5vcm1hbFwiLFxuICAgICAgICBbYCR7cHJlZml4fS1wcmltYXJ5YF06IGludGVudCA9PT0gXCJwcmltYXJ5XCIsXG4gICAgICAgIFtgJHtwcmVmaXh9LXN1Y2Nlc3NgXTogaW50ZW50ID09PSBcInN1Y2Nlc3NcIixcbiAgICAgICAgW2Ake3ByZWZpeH0td2FybmluZ2BdOiBpbnRlbnQgPT09IFwid2FybmluZ1wiLFxuICAgICAgICBbYCR7cHJlZml4fS1kYW5nZXJgXTpcbiAgICAgICAgICBpbnRlbnQgPT09IFwiZGFuZ2VyXCIgfHwgKGxlbmd0aCAmJiBsaW1pdCAmJiBsZW5ndGggPiBsaW1pdCksXG4gICAgICAgIFtgJHtwcmVmaXh9LWZvY3VzZWRgXTogZm9jdXNlZCxcbiAgICAgIH1cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgIDx0ZXh0YXJlYSB7Li4udGV4dGFyZWFQcm9wc30gLz5cbiAgICAgICAgeyEhbGltaXQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWxpbWl0YH0+XG4gICAgICAgICAgICA8c3Bhbj57YCR7bGVuZ3RofS8ke2xpbWl0fWB9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4pXG5cblRleHRhcmVhLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIGF1dG9Gb2N1c1xuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm5oyJ54Wn5LiA5Liq5rGJ5a2X566XIDIg5a2X5pWw55qE5pa55byP6ZmQ5Yi26ZW/5bqmXG4gICAqL1xuICBjb3VudEhhbnppOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOm7mOiupOWAvCAtIOWGhemDqOmpseWKqFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDovpPlhaXmoYbnmoQgaWRcbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6K6+572u57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJub3JtYWxcIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOmZkOWItumVv+W6plxuICAgKi9cbiAgbGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiB0ZXh0YXJlYSDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSBuYW1lXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogYmx1ciDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOWAvOaUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBmb2N1cyDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBrZXlkb3duIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogZW50ZXIg5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uUHJlc3NFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBzY3JvbGwg5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uU2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIHBsYWNlaG9sZGVyXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIHJlcXVpcmVkXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIHosIPmlbTlpKflsI9cbiAgICovXG4gIHJlc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm5vbmVcIiwgXCJib3RoXCIsIFwiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCJdKSxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsaWdodFwiXSksXG4gIC8qKlxuICAgKiB0ZXh0YXJlYSDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSB0eXBlXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5YC8IC0g5aSW6YOo5o6n5Yi2XG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuVGV4dGFyZWEuZGVmYXVsdFByb3BzID0ge1xuICBhdXRvRm9jdXM6IGZhbHNlLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgY291bnRIYW56aTogdHJ1ZSxcbiAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGlkOiBudWxsLFxuICBpbnRlbnQ6IFwibm9ybWFsXCIsXG4gIGxpbWl0OiBudWxsLFxuICBuYW1lOiBudWxsLFxuICBvbkJsdXI6IG5vb3AsXG4gIG9uQ2hhbmdlOiBub29wLFxuICBvbkZvY3VzOiBub29wLFxuICBvbktleURvd246IG5vb3AsXG4gIG9uUHJlc3NFbnRlcjogbm9vcCxcbiAgb25TY3JvbGw6IG5vb3AsXG4gIHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpVwiLFxuICByZXF1aXJlZDogZmFsc2UsXG4gIHJlc2l6ZTogXCJub25lXCIsXG4gIHNpemU6IFwic21hbGxcIixcbiAgdGhlbWU6IG51bGwsXG4gIHR5cGU6IG51bGwsXG4gIHZhbHVlOiBudWxsLFxufVxuXG5UZXh0YXJlYS5kaXNwbGF5TmFtZSA9IFwiVGV4dGFyZWFcIlxuXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYVxuIl19