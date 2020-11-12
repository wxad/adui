"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _warning = _interopRequireDefault(require("../_util/warning"));

var _configProvider = require("../config-provider");

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var noop = function noop() {};

var prefix = "adui-input";
var Textarea = (0, _react.forwardRef)(function (_ref, ref) {
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

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  var textareaRef = (0, _react.useRef)(null);

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeContext = _useContext.size;

  var size = (0, _configProvider.getComputedSize)(sizeProp, sizeContext);

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

  (0, _react.useImperativeHandle)(ref, function () {
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
    (0, _warning["default"])(resize === "none", "Input.Textarea", "不允许同时使用 prop `limit` 与 prop `resize`");

    if (value) {
      length = countHanzi ? getFormatStrLeng(value) : value.length;
    } else {
      (0, _warning["default"])(value !== null, "Input.Textarea", "如果要限制字数，必须从外部控制 value。");
      length = 0;
    }
  }

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-wrapper"), "".concat(prefix, "-wrapper_textarea"), "".concat(prefix, "-").concat(size), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-").concat(theme), theme), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefix, "-limited"), !!limit), _defineProperty(_classNames, "".concat(prefix, "-normal"), intent === "normal"), _defineProperty(_classNames, "".concat(prefix, "-primary"), intent === "primary"), _defineProperty(_classNames, "".concat(prefix, "-success"), intent === "success"), _defineProperty(_classNames, "".concat(prefix, "-warning"), intent === "warning"), _defineProperty(_classNames, "".concat(prefix, "-danger"), intent === "danger" || length && limit && length > limit), _defineProperty(_classNames, "".concat(prefix, "-focused"), focused), _classNames));
  return _react["default"].createElement("div", _extends({
    className: classSet
  }, otherProps), _react["default"].createElement("textarea", textareaProps), !!limit && _react["default"].createElement("div", {
    className: "".concat(prefix, "-limit")
  }, _react["default"].createElement("span", null, "".concat(length, "/").concat(limit))));
});
Textarea.propTypes = {
  autoFocus: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  countHanzi: _propTypes["default"].bool,
  defaultValue: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  id: _propTypes["default"].string,
  intent: _propTypes["default"].oneOf(["normal", "primary", "success", "warning", "danger"]),
  limit: _propTypes["default"].number,
  name: _propTypes["default"].string,
  onBlur: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onPressEnter: _propTypes["default"].func,
  onScroll: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  resize: _propTypes["default"].oneOf(["none", "both", "horizontal", "vertical"]),
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  theme: _propTypes["default"].oneOf([null, "light"]),
  type: _propTypes["default"].string,
  value: _propTypes["default"].string
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
var _default = Textarea;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvaW5wdXQvVGV4dGFyZWEudHN4Il0sIm5hbWVzIjpbIm5vb3AiLCJwcmVmaXgiLCJUZXh0YXJlYSIsInJlZiIsImF1dG9Gb2N1cyIsImNsYXNzTmFtZSIsImNvdW50SGFuemkiLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsImlkIiwiaW50ZW50IiwibGltaXQiLCJuYW1lIiwib25CbHVyIiwib25DaGFuZ2UiLCJvbkZvY3VzIiwib25LZXlEb3duIiwib25QcmVzc0VudGVyIiwib25TY3JvbGwiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwicmVzaXplIiwic2l6ZVByb3AiLCJzaXplIiwidGhlbWUiLCJ0eXBlIiwidmFsdWUiLCJvdGhlclByb3BzIiwiZm9jdXNlZCIsInNldEZvY3VzZWQiLCJ0ZXh0YXJlYVJlZiIsIkNvbmZpZ0NvbnRleHQiLCJzaXplQ29udGV4dCIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWwiLCJ0YXJnZXQiLCJyZXBsYWNlIiwiaGFuZGxlS2V5RG93biIsImtleUNvZGUiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRm9jdXMiLCJmaXhDb250cm9sbGVkVmFsdWUiLCJnZXRGb3JtYXRTdHJMZW5nIiwic3RyIiwibGVuIiwibGVuZ3RoIiwicmVhbExlbmd0aCIsImNoYXJDb2RlIiwiaSIsImNoYXJDb2RlQXQiLCJNYXRoIiwiY2VpbCIsImlucHV0IiwiY3VycmVudCIsInRleHRhcmVhUHJvcHMiLCJzdHlsZSIsImNsYXNzU2V0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwibnVtYmVyIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElB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QTlGRSxDQUFyQjtBQWlHQTNELFFBQVEsQ0FBQytELFlBQVQsR0FBd0I7QUFDdEI3RCxFQUFBQSxTQUFTLEVBQUUsS0FEVztBQUV0QkMsRUFBQUEsU0FBUyxFQUFFNkQsU0FGVztBQUd0QjVELEVBQUFBLFVBQVUsRUFBRSxJQUhVO0FBSXRCQyxFQUFBQSxZQUFZLEVBQUUsSUFKUTtBQUt0QkMsRUFBQUEsUUFBUSxFQUFFLEtBTFk7QUFNdEJDLEVBQUFBLEVBQUUsRUFBRSxJQU5rQjtBQU90QkMsRUFBQUEsTUFBTSxFQUFFLFFBUGM7QUFRdEJDLEVBQUFBLEtBQUssRUFBRSxJQVJlO0FBU3RCQyxFQUFBQSxJQUFJLEVBQUUsSUFUZ0I7QUFVdEJDLEVBQUFBLE1BQU0sRUFBRWIsSUFWYztBQVd0QmMsRUFBQUEsUUFBUSxFQUFFZCxJQVhZO0FBWXRCZSxFQUFBQSxPQUFPLEVBQUVmLElBWmE7QUFhdEJnQixFQUFBQSxTQUFTLEVBQUVoQixJQWJXO0FBY3RCaUIsRUFBQUEsWUFBWSxFQUFFakIsSUFkUTtBQWV0QmtCLEVBQUFBLFFBQVEsRUFBRWxCLElBZlk7QUFnQnRCbUIsRUFBQUEsV0FBVyxFQUFFLEtBaEJTO0FBaUJ0QkMsRUFBQUEsUUFBUSxFQUFFLEtBakJZO0FBa0J0QkMsRUFBQUEsTUFBTSxFQUFFLE1BbEJjO0FBbUJ0QkUsRUFBQUEsSUFBSSxFQUFFLE9BbkJnQjtBQW9CdEJDLEVBQUFBLEtBQUssRUFBRSxJQXBCZTtBQXFCdEJDLEVBQUFBLElBQUksRUFBRSxJQXJCZ0I7QUFzQnRCQyxFQUFBQSxLQUFLLEVBQUU7QUF0QmUsQ0FBeEI7QUF5QkF4QixRQUFRLENBQUNpRSxXQUFULEdBQXVCLFVBQXZCO2VBRWVqRSxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIGZvcndhcmRSZWYsXG4gIHVzZUNvbnRleHQsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB3YXJuaW5nIGZyb20gXCIuLi9fdXRpbC93YXJuaW5nXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktaW5wdXRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElUZXh0YXJlYVByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSBhdXRvRm9jdXNcbiAgICovXG4gIGF1dG9Gb2N1cz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKbmjInnhafkuIDkuKrmsYnlrZfnrpcgMiDlrZfmlbDnmoTmlrnlvI/pmZDliLbplb/luqZcbiAgICovXG4gIGNvdW50SGFuemk/OiBib29sZWFuXG4gIC8qKlxuICAgKiDpu5jorqTlgLwgLSDlhoXpg6jpqbHliqhcbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IHN0cmluZyB8IG51bGxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDovpPlhaXmoYbnmoQgaWRcbiAgICovXG4gIGlkPzogc3RyaW5nIHwgbnVsbFxuICAvKipcbiAgICog57G75Z6LXG4gICAqL1xuICBpbnRlbnQ/OiBcIm5vcm1hbFwiIHwgXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiIHwgXCJkYW5nZXJcIlxuICAvKipcbiAgICog6ZmQ5Yi26ZW/5bqmXG4gICAqL1xuICBsaW1pdD86IG51bWJlciB8IG51bGxcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIG5hbWVcbiAgICovXG4gIG5hbWU/OiBzdHJpbmcgfCBudWxsXG4gIC8qKlxuICAgKiBibHVyIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkJsdXI/OiAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4gdm9pZFxuICAvKipcbiAgICog5YC85pS55Y+Y5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+LCB2YWx1ZT86IHN0cmluZykgPT4gdm9pZFxuICAvKipcbiAgICogZm9jdXMg5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uRm9jdXM/OiAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4gdm9pZFxuICAvKipcbiAgICoga2V5ZG93biDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25LZXlEb3duPzogKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHZvaWRcbiAgLyoqXG4gICAqIGVudGVyIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvblByZXNzRW50ZXI/OiAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4gdm9pZFxuICAvKipcbiAgICogc2Nyb2xsIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvblNjcm9sbD86IChlOiBSZWFjdC5VSUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB2b2lkXG4gIC8qKlxuICAgKiBwbGFjZWhvbGRlclxuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIHJlcXVpcmVkXG4gICAqL1xuICByZXF1aXJlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpuaUr+aMgeiwg+aVtOWkp+Wwj1xuICAgKi9cbiAgcmVzaXplPzogXCJub25lXCIgfCBcImJvdGhcIiB8IFwiaG9yaXpvbnRhbFwiIHwgXCJ2ZXJ0aWNhbFwiXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU/OiBudWxsIHwgXCJsaWdodFwiXG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSB0eXBlXG4gICAqL1xuICB0eXBlPzogc3RyaW5nIHwgbnVsbFxuICAvKipcbiAgICog5YC8IC0g5aSW6YOo5o6n5Yi2XG4gICAqL1xuICB2YWx1ZT86IHN0cmluZyB8IG51bGxcbn1cblxuLyoqXG4gKiDovpPlhaXljLrln5/vvIznlKjkuo7lpJrooYznuq/mlofmnKznvJbovpHjgIJcbiAqL1xuY29uc3QgVGV4dGFyZWE6IFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8SVRleHRhcmVhUHJvcHMgJlxuICBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT4+ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGF1dG9Gb2N1cyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNvdW50SGFuemksXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlkLFxuICAgICAgaW50ZW50LFxuICAgICAgbGltaXQsXG4gICAgICBuYW1lLFxuICAgICAgb25CbHVyLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbkZvY3VzLFxuICAgICAgb25LZXlEb3duLFxuICAgICAgb25QcmVzc0VudGVyLFxuICAgICAgb25TY3JvbGwsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHJlcXVpcmVkLFxuICAgICAgcmVzaXplLFxuICAgICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgICB0aGVtZSxcbiAgICAgIHR5cGUsXG4gICAgICB2YWx1ZSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJVGV4dGFyZWFQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgW2ZvY3VzZWQsIHNldEZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCB0ZXh0YXJlYVJlZiA9IHVzZVJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PihudWxsKVxuXG4gICAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuXG4gICAgY29uc3Qgc2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplUHJvcCwgc2l6ZUNvbnRleHQpXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcbiAgICAgIGlmICghZGlzYWJsZWQgJiYgb25DaGFuZ2UpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29udHJvbC1yZWdleCwgbWF4LWxlbiAqL1xuICAgICAgICAvLyAwOCBCYWNrc3BhY2UsIDA5IFRhYiwgMEIg5Z6C55u05Yi26KGo56ymLCAwQyDmjaLpobUsIDBEIOWbnui9piwgQTAg5LiN6Ze05pat56m65qC8LFxuICAgICAgICAvLyAyMDI4LzIwMjkg5YiG6ZqU56ymLCBGRWZmIOWtl+iKgumhuuW6j+agh+iusOOAglxuICAgICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKFxuICAgICAgICAgIC9cXHUwMDA4fFxcdTAwMDl8XFx1MDAwQnxcXHUwMDBDfFxcdTAwMER8XFx1MDBBMHxcXHUyMDI4fFxcdTIwMjl8XFx1RkVGRi9nLFxuICAgICAgICAgIFwiXCJcbiAgICAgICAgKVxuICAgICAgICBvbkNoYW5nZShlLCB2YWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiBvblByZXNzRW50ZXIpIHtcbiAgICAgICAgb25QcmVzc0VudGVyKGUpXG4gICAgICB9XG4gICAgICBpZiAob25LZXlEb3duKSB7XG4gICAgICAgIG9uS2V5RG93bihlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUJsdXIgPSAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgICAgc2V0Rm9jdXNlZChmYWxzZSlcbiAgICAgIGlmIChvbkJsdXIpIHtcbiAgICAgICAgb25CbHVyKGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRm9jdXMgPSAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgICAgc2V0Rm9jdXNlZCh0cnVlKVxuICAgICAgaWYgKG9uRm9jdXMpIHtcbiAgICAgICAgb25Gb2N1cyhlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZpeENvbnRyb2xsZWRWYWx1ZSA9ICh2YWw/OiBzdHJpbmcgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB2YWwgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWxcbiAgICB9XG5cbiAgICBjb25zdCBnZXRGb3JtYXRTdHJMZW5nID0gKHN0cjogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoXG4gICAgICBsZXQgcmVhbExlbmd0aCA9IDBcbiAgICAgIGxldCBjaGFyQ29kZSA9IC0xXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICAgICAgaWYgKGNoYXJDb2RlID49IDAgJiYgY2hhckNvZGUgPD0gMTI4KSB7XG4gICAgICAgICAgcmVhbExlbmd0aCArPSAwLjVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWFsTGVuZ3RoICs9IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIE1hdGguY2VpbChyZWFsTGVuZ3RoKVxuICAgIH1cblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgaW5wdXQ6IHRleHRhcmVhUmVmPy5jdXJyZW50LFxuICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgaGFuZGxlS2V5RG93bixcbiAgICAgIGhhbmRsZUJsdXIsXG4gICAgICBoYW5kbGVGb2N1cyxcbiAgICB9KSlcblxuICAgIGNvbnN0IHRleHRhcmVhUHJvcHM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICBhdXRvRm9jdXMsXG4gICAgICBjbGFzc05hbWU6IGAke3ByZWZpeH0tYmFzZWAsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIG9uQmx1cjogaGFuZGxlQmx1cixcbiAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICBvbkZvY3VzOiBoYW5kbGVGb2N1cyxcbiAgICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICAgIG9uU2Nyb2xsLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICByZWY6IHRleHRhcmVhUmVmLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBzdHlsZTogeyByZXNpemUgfSxcbiAgICAgIHR5cGUsXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0ZXh0YXJlYVByb3BzLnZhbHVlID0gZml4Q29udHJvbGxlZFZhbHVlKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0YXJlYVByb3BzLmRlZmF1bHRWYWx1ZSA9IGZpeENvbnRyb2xsZWRWYWx1ZShkZWZhdWx0VmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IGxlbmd0aFxuICAgIGlmIChsaW1pdCkge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgcmVzaXplID09PSBcIm5vbmVcIixcbiAgICAgICAgXCJJbnB1dC5UZXh0YXJlYVwiLFxuICAgICAgICBcIuS4jeWFgeiuuOWQjOaXtuS9v+eUqCBwcm9wIGBsaW1pdGAg5LiOIHByb3AgYHJlc2l6ZWBcIlxuICAgICAgKVxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGxlbmd0aCA9IGNvdW50SGFuemkgPyBnZXRGb3JtYXRTdHJMZW5nKHZhbHVlKSA6IHZhbHVlLmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybmluZyhcbiAgICAgICAgICB2YWx1ZSAhPT0gbnVsbCxcbiAgICAgICAgICBcIklucHV0LlRleHRhcmVhXCIsXG4gICAgICAgICAgXCLlpoLmnpzopoHpmZDliLblrZfmlbDvvIzlv4Xpobvku47lpJbpg6jmjqfliLYgdmFsdWXjgIJcIlxuICAgICAgICApXG4gICAgICAgIGxlbmd0aCA9IDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LXdyYXBwZXJgLFxuICAgICAgYCR7cHJlZml4fS13cmFwcGVyX3RleHRhcmVhYCxcbiAgICAgIGAke3ByZWZpeH0tJHtzaXplfWAsXG4gICAgICB7XG4gICAgICAgIFtgJHtwcmVmaXh9LSR7dGhlbWV9YF06IHRoZW1lLFxuICAgICAgICBbYCR7cHJlZml4fS1kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgICAgICAgW2Ake3ByZWZpeH0tbGltaXRlZGBdOiAhIWxpbWl0LFxuICAgICAgICBbYCR7cHJlZml4fS1ub3JtYWxgXTogaW50ZW50ID09PSBcIm5vcm1hbFwiLFxuICAgICAgICBbYCR7cHJlZml4fS1wcmltYXJ5YF06IGludGVudCA9PT0gXCJwcmltYXJ5XCIsXG4gICAgICAgIFtgJHtwcmVmaXh9LXN1Y2Nlc3NgXTogaW50ZW50ID09PSBcInN1Y2Nlc3NcIixcbiAgICAgICAgW2Ake3ByZWZpeH0td2FybmluZ2BdOiBpbnRlbnQgPT09IFwid2FybmluZ1wiLFxuICAgICAgICBbYCR7cHJlZml4fS1kYW5nZXJgXTpcbiAgICAgICAgICBpbnRlbnQgPT09IFwiZGFuZ2VyXCIgfHwgKGxlbmd0aCAmJiBsaW1pdCAmJiBsZW5ndGggPiBsaW1pdCksXG4gICAgICAgIFtgJHtwcmVmaXh9LWZvY3VzZWRgXTogZm9jdXNlZCxcbiAgICAgIH1cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgIDx0ZXh0YXJlYSB7Li4udGV4dGFyZWFQcm9wc30gLz5cbiAgICAgICAgeyEhbGltaXQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWxpbWl0YH0+XG4gICAgICAgICAgICA8c3Bhbj57YCR7bGVuZ3RofS8ke2xpbWl0fWB9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4pXG5cblRleHRhcmVhLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIGF1dG9Gb2N1c1xuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm5oyJ54Wn5LiA5Liq5rGJ5a2X566XIDIg5a2X5pWw55qE5pa55byP6ZmQ5Yi26ZW/5bqmXG4gICAqL1xuICBjb3VudEhhbnppOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOm7mOiupOWAvCAtIOWGhemDqOmpseWKqFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDovpPlhaXmoYbnmoQgaWRcbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6K6+572u57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJub3JtYWxcIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOmZkOWItumVv+W6plxuICAgKi9cbiAgbGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiB0ZXh0YXJlYSDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSBuYW1lXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogYmx1ciDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOWAvOaUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBmb2N1cyDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBrZXlkb3duIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogZW50ZXIg5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uUHJlc3NFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBzY3JvbGwg5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uU2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIHBsYWNlaG9sZGVyXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIHJlcXVpcmVkXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIHosIPmlbTlpKflsI9cbiAgICovXG4gIHJlc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm5vbmVcIiwgXCJib3RoXCIsIFwiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCJdKSxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsaWdodFwiXSksXG4gIC8qKlxuICAgKiB0ZXh0YXJlYSDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSB0eXBlXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5YC8IC0g5aSW6YOo5o6n5Yi2XG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuVGV4dGFyZWEuZGVmYXVsdFByb3BzID0ge1xuICBhdXRvRm9jdXM6IGZhbHNlLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgY291bnRIYW56aTogdHJ1ZSxcbiAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGlkOiBudWxsLFxuICBpbnRlbnQ6IFwibm9ybWFsXCIsXG4gIGxpbWl0OiBudWxsLFxuICBuYW1lOiBudWxsLFxuICBvbkJsdXI6IG5vb3AsXG4gIG9uQ2hhbmdlOiBub29wLFxuICBvbkZvY3VzOiBub29wLFxuICBvbktleURvd246IG5vb3AsXG4gIG9uUHJlc3NFbnRlcjogbm9vcCxcbiAgb25TY3JvbGw6IG5vb3AsXG4gIHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpVwiLFxuICByZXF1aXJlZDogZmFsc2UsXG4gIHJlc2l6ZTogXCJub25lXCIsXG4gIHNpemU6IFwic21hbGxcIixcbiAgdGhlbWU6IG51bGwsXG4gIHR5cGU6IG51bGwsXG4gIHZhbHVlOiBudWxsLFxufVxuXG5UZXh0YXJlYS5kaXNwbGF5TmFtZSA9IFwiVGV4dGFyZWFcIlxuXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYVxuIl19