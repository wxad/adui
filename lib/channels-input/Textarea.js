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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var noop = function noop() {};

var prefix = "adui-channels-input";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtaW5wdXQvVGV4dGFyZWEudHN4Il0sIm5hbWVzIjpbIm5vb3AiLCJwcmVmaXgiLCJUZXh0YXJlYSIsInJlZiIsImF1dG9Gb2N1cyIsImNsYXNzTmFtZSIsImNvdW50SGFuemkiLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsImlkIiwiaW50ZW50IiwibGltaXQiLCJuYW1lIiwib25CbHVyIiwib25DaGFuZ2UiLCJvbkZvY3VzIiwib25LZXlEb3duIiwib25QcmVzc0VudGVyIiwib25TY3JvbGwiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwicmVzaXplIiwic2l6ZVByb3AiLCJzaXplIiwidGhlbWUiLCJ0eXBlIiwidmFsdWUiLCJvdGhlclByb3BzIiwiZm9jdXNlZCIsInNldEZvY3VzZWQiLCJ0ZXh0YXJlYVJlZiIsIkNvbmZpZ0NvbnRleHQiLCJzaXplQ29udGV4dCIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWwiLCJ0YXJnZXQiLCJyZXBsYWNlIiwiaGFuZGxlS2V5RG93biIsImtleUNvZGUiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRm9jdXMiLCJmaXhDb250cm9sbGVkVmFsdWUiLCJnZXRGb3JtYXRTdHJMZW5nIiwic3RyIiwibGVuIiwibGVuZ3RoIiwicmVhbExlbmd0aCIsImNoYXJDb2RlIiwiaSIsImNoYXJDb2RlQXQiLCJNYXRoIiwiY2VpbCIsImlucHV0IiwiY3VycmVudCIsInRleHRhcmVhUHJvcHMiLCJzdHlsZSIsImNsYXNzU2V0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwibnVtYmVyIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUks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QyxzQkFBVUU7QUE5RkUsQ0FBckI7QUFpR0EzRCxRQUFRLENBQUMrRCxZQUFULEdBQXdCO0FBQ3RCN0QsRUFBQUEsU0FBUyxFQUFFLEtBRFc7QUFFdEJDLEVBQUFBLFNBQVMsRUFBRTZELFNBRlc7QUFHdEI1RCxFQUFBQSxVQUFVLEVBQUUsSUFIVTtBQUl0QkMsRUFBQUEsWUFBWSxFQUFFLElBSlE7QUFLdEJDLEVBQUFBLFFBQVEsRUFBRSxLQUxZO0FBTXRCQyxFQUFBQSxFQUFFLEVBQUUsSUFOa0I7QUFPdEJDLEVBQUFBLE1BQU0sRUFBRSxRQVBjO0FBUXRCQyxFQUFBQSxLQUFLLEVBQUUsSUFSZTtBQVN0QkMsRUFBQUEsSUFBSSxFQUFFLElBVGdCO0FBVXRCQyxFQUFBQSxNQUFNLEVBQUViLElBVmM7QUFXdEJjLEVBQUFBLFFBQVEsRUFBRWQsSUFYWTtBQVl0QmUsRUFBQUEsT0FBTyxFQUFFZixJQVphO0FBYXRCZ0IsRUFBQUEsU0FBUyxFQUFFaEIsSUFiVztBQWN0QmlCLEVBQUFBLFlBQVksRUFBRWpCLElBZFE7QUFldEJrQixFQUFBQSxRQUFRLEVBQUVsQixJQWZZO0FBZ0J0Qm1CLEVBQUFBLFdBQVcsRUFBRSxLQWhCUztBQWlCdEJDLEVBQUFBLFFBQVEsRUFBRSxLQWpCWTtBQWtCdEJDLEVBQUFBLE1BQU0sRUFBRSxNQWxCYztBQW1CdEJFLEVBQUFBLElBQUksRUFBRSxPQW5CZ0I7QUFvQnRCQyxFQUFBQSxLQUFLLEVBQUUsSUFwQmU7QUFxQnRCQyxFQUFBQSxJQUFJLEVBQUUsSUFyQmdCO0FBc0J0QkMsRUFBQUEsS0FBSyxFQUFFO0FBdEJlLENBQXhCO0FBeUJBeEIsUUFBUSxDQUFDaUUsV0FBVCxHQUF1QixVQUF2QjtlQUVlakUsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VDb250ZXh0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgd2FybmluZyBmcm9tIFwiLi4vX3V0aWwvd2FybmluZ1wiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNoYW5uZWxzLWlucHV0XCJcblxuZXhwb3J0IGludGVyZmFjZSBJVGV4dGFyZWFQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICogaW5wdXQg5qCH562+5Y6f55Sf5bGe5oCnIC0gYXV0b0ZvY3VzXG4gICAqL1xuICBhdXRvRm9jdXM/OiBib29sZWFuXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm5oyJ54Wn5LiA5Liq5rGJ5a2X566XIDIg5a2X5pWw55qE5pa55byP6ZmQ5Yi26ZW/5bqmXG4gICAqL1xuICBjb3VudEhhbnppPzogYm9vbGVhblxuICAvKipcbiAgICog6buY6K6k5YC8IC0g5YaF6YOo6amx5YqoXG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBzdHJpbmcgfCBudWxsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog6L6T5YWl5qGG55qEIGlkXG4gICAqL1xuICBpZD86IHN0cmluZyB8IG51bGxcbiAgLyoqXG4gICAqIOexu+Wei1xuICAgKi9cbiAgaW50ZW50PzogXCJub3JtYWxcIiB8IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCJcbiAgLyoqXG4gICAqIOmZkOWItumVv+W6plxuICAgKi9cbiAgbGltaXQ/OiBudW1iZXIgfCBudWxsXG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSBuYW1lXG4gICAqL1xuICBuYW1lPzogc3RyaW5nIHwgbnVsbFxuICAvKipcbiAgICogYmx1ciDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25CbHVyPzogKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOWAvOaUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PiwgdmFsdWU/OiBzdHJpbmcpID0+IHZvaWRcbiAgLyoqXG4gICAqIGZvY3VzIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkZvY3VzPzogKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHZvaWRcbiAgLyoqXG4gICAqIGtleWRvd24g5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uS2V5RG93bj86IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB2b2lkXG4gIC8qKlxuICAgKiBlbnRlciDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25QcmVzc0VudGVyPzogKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHZvaWRcbiAgLyoqXG4gICAqIHNjcm9sbCDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25TY3JvbGw/OiAoZTogUmVhY3QuVUlFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4gdm9pZFxuICAvKipcbiAgICogcGxhY2Vob2xkZXJcbiAgICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSByZXF1aXJlZFxuICAgKi9cbiAgcmVxdWlyZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIHosIPmlbTlpKflsI9cbiAgICovXG4gIHJlc2l6ZT86IFwibm9uZVwiIHwgXCJib3RoXCIgfCBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIlxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lPzogbnVsbCB8IFwibGlnaHRcIlxuICAvKipcbiAgICogaW5wdXQg5qCH562+5Y6f55Sf5bGe5oCnIC0gdHlwZVxuICAgKi9cbiAgdHlwZT86IHN0cmluZyB8IG51bGxcbiAgLyoqXG4gICAqIOWAvCAtIOWklumDqOaOp+WItlxuICAgKi9cbiAgdmFsdWU/OiBzdHJpbmcgfCBudWxsXG59XG5cbi8qKlxuICog6L6T5YWl5Yy65Z+f77yM55So5LqO5aSa6KGM57qv5paH5pys57yW6L6R44CCXG4gKi9cbmNvbnN0IFRleHRhcmVhOiBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICBJVGV4dGFyZWFQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55PlxuPiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBhdXRvRm9jdXMsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjb3VudEhhbnppLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpZCxcbiAgICAgIGludGVudCxcbiAgICAgIGxpbWl0LFxuICAgICAgbmFtZSxcbiAgICAgIG9uQmx1cixcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgb25Gb2N1cyxcbiAgICAgIG9uS2V5RG93bixcbiAgICAgIG9uUHJlc3NFbnRlcixcbiAgICAgIG9uU2Nyb2xsLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIHJlc2l6ZSxcbiAgICAgIHNpemU6IHNpemVQcm9wLFxuICAgICAgdGhlbWUsXG4gICAgICB0eXBlLFxuICAgICAgdmFsdWUsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSVRleHRhcmVhUHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IFtmb2N1c2VkLCBzZXRGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgdGV4dGFyZWFSZWYgPSB1c2VSZWY8SFRNTFRleHRBcmVhRWxlbWVudD4obnVsbClcblxuICAgIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcblxuICAgIGNvbnN0IHNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZVByb3AsIHNpemVDb250ZXh0KVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgICBpZiAoIWRpc2FibGVkICYmIG9uQ2hhbmdlKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRyb2wtcmVnZXgsIG1heC1sZW4gKi9cbiAgICAgICAgLy8gMDggQmFja3NwYWNlLCAwOSBUYWIsIDBCIOWeguebtOWItuihqOespiwgMEMg5o2i6aG1LCAwRCDlm57ovaYsIEEwIOS4jemXtOaWreepuuagvCxcbiAgICAgICAgLy8gMjAyOC8yMDI5IOWIhumalOespiwgRkVmZiDlrZfoioLpobrluo/moIforrDjgIJcbiAgICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWUucmVwbGFjZShcbiAgICAgICAgICAvXFx1MDAwOHxcXHUwMDA5fFxcdTAwMEJ8XFx1MDAwQ3xcXHUwMDBEfFxcdTAwQTB8XFx1MjAyOHxcXHUyMDI5fFxcdUZFRkYvZyxcbiAgICAgICAgICBcIlwiXG4gICAgICAgIClcbiAgICAgICAgb25DaGFuZ2UoZSwgdmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgb25QcmVzc0VudGVyKSB7XG4gICAgICAgIG9uUHJlc3NFbnRlcihlKVxuICAgICAgfVxuICAgICAgaWYgKG9uS2V5RG93bikge1xuICAgICAgICBvbktleURvd24oZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVCbHVyID0gKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcbiAgICAgIHNldEZvY3VzZWQoZmFsc2UpXG4gICAgICBpZiAob25CbHVyKSB7XG4gICAgICAgIG9uQmx1cihlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUZvY3VzID0gKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcbiAgICAgIHNldEZvY3VzZWQodHJ1ZSlcbiAgICAgIGlmIChvbkZvY3VzKSB7XG4gICAgICAgIG9uRm9jdXMoZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmaXhDb250cm9sbGVkVmFsdWUgPSAodmFsPzogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwidW5kZWZpbmVkXCIgfHwgdmFsID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBcIlwiXG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Rm9ybWF0U3RyTGVuZyA9IChzdHI6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgbGVuID0gc3RyLmxlbmd0aFxuICAgICAgbGV0IHJlYWxMZW5ndGggPSAwXG4gICAgICBsZXQgY2hhckNvZGUgPSAtMVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgICAgIGlmIChjaGFyQ29kZSA+PSAwICYmIGNoYXJDb2RlIDw9IDEyOCkge1xuICAgICAgICAgIHJlYWxMZW5ndGggKz0gMC41XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVhbExlbmd0aCArPSAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBNYXRoLmNlaWwocmVhbExlbmd0aClcbiAgICB9XG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICAgIGlucHV0OiB0ZXh0YXJlYVJlZj8uY3VycmVudCxcbiAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgIGhhbmRsZUtleURvd24sXG4gICAgICBoYW5kbGVCbHVyLFxuICAgICAgaGFuZGxlRm9jdXMsXG4gICAgfSkpXG5cbiAgICBjb25zdCB0ZXh0YXJlYVByb3BzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge1xuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgY2xhc3NOYW1lOiBgJHtwcmVmaXh9LWJhc2VgLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBvbkJsdXI6IGhhbmRsZUJsdXIsXG4gICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgb25Gb2N1czogaGFuZGxlRm9jdXMsXG4gICAgICBvbktleURvd246IGhhbmRsZUtleURvd24sXG4gICAgICBvblNjcm9sbCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcmVmOiB0ZXh0YXJlYVJlZixcbiAgICAgIHJlcXVpcmVkLFxuICAgICAgc3R5bGU6IHsgcmVzaXplIH0sXG4gICAgICB0eXBlLFxuICAgIH1cblxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGV4dGFyZWFQcm9wcy52YWx1ZSA9IGZpeENvbnRyb2xsZWRWYWx1ZSh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGV4dGFyZWFQcm9wcy5kZWZhdWx0VmFsdWUgPSBmaXhDb250cm9sbGVkVmFsdWUoZGVmYXVsdFZhbHVlKVxuICAgIH1cblxuICAgIGxldCBsZW5ndGhcbiAgICBpZiAobGltaXQpIHtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgIHJlc2l6ZSA9PT0gXCJub25lXCIsXG4gICAgICAgIFwiSW5wdXQuVGV4dGFyZWFcIixcbiAgICAgICAgXCLkuI3lhYHorrjlkIzml7bkvb/nlKggcHJvcCBgbGltaXRgIOS4jiBwcm9wIGByZXNpemVgXCJcbiAgICAgIClcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBsZW5ndGggPSBjb3VudEhhbnppID8gZ2V0Rm9ybWF0U3RyTGVuZyh2YWx1ZSkgOiB2YWx1ZS5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgdmFsdWUgIT09IG51bGwsXG4gICAgICAgICAgXCJJbnB1dC5UZXh0YXJlYVwiLFxuICAgICAgICAgIFwi5aaC5p6c6KaB6ZmQ5Yi25a2X5pWw77yM5b+F6aG75LuO5aSW6YOo5o6n5Yi2IHZhbHVl44CCXCJcbiAgICAgICAgKVxuICAgICAgICBsZW5ndGggPSAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYCR7cHJlZml4fS13cmFwcGVyYCxcbiAgICAgIGAke3ByZWZpeH0td3JhcHBlcl90ZXh0YXJlYWAsXG4gICAgICBgJHtwcmVmaXh9LSR7c2l6ZX1gLFxuICAgICAge1xuICAgICAgICBbYCR7cHJlZml4fS0ke3RoZW1lfWBdOiB0aGVtZSxcbiAgICAgICAgW2Ake3ByZWZpeH0tZGlzYWJsZWRgXTogZGlzYWJsZWQsXG4gICAgICAgIFtgJHtwcmVmaXh9LWxpbWl0ZWRgXTogISFsaW1pdCxcbiAgICAgICAgW2Ake3ByZWZpeH0tbm9ybWFsYF06IGludGVudCA9PT0gXCJub3JtYWxcIixcbiAgICAgICAgW2Ake3ByZWZpeH0tcHJpbWFyeWBdOiBpbnRlbnQgPT09IFwicHJpbWFyeVwiLFxuICAgICAgICBbYCR7cHJlZml4fS1zdWNjZXNzYF06IGludGVudCA9PT0gXCJzdWNjZXNzXCIsXG4gICAgICAgIFtgJHtwcmVmaXh9LXdhcm5pbmdgXTogaW50ZW50ID09PSBcIndhcm5pbmdcIixcbiAgICAgICAgW2Ake3ByZWZpeH0tZGFuZ2VyYF06XG4gICAgICAgICAgaW50ZW50ID09PSBcImRhbmdlclwiIHx8IChsZW5ndGggJiYgbGltaXQgJiYgbGVuZ3RoID4gbGltaXQpLFxuICAgICAgICBbYCR7cHJlZml4fS1mb2N1c2VkYF06IGZvY3VzZWQsXG4gICAgICB9XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gey4uLm90aGVyUHJvcHN9PlxuICAgICAgICA8dGV4dGFyZWEgey4uLnRleHRhcmVhUHJvcHN9IC8+XG4gICAgICAgIHshIWxpbWl0ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1saW1pdGB9PlxuICAgICAgICAgICAgPHNwYW4+e2Ake2xlbmd0aH0vJHtsaW1pdH1gfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuKVxuXG5UZXh0YXJlYS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSBhdXRvRm9jdXNcbiAgICovXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuaMieeFp+S4gOS4quaxieWtl+eulyAyIOWtl+aVsOeahOaWueW8j+mZkOWItumVv+W6plxuICAgKi9cbiAgY291bnRIYW56aTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDpu5jorqTlgLwgLSDlhoXpg6jpqbHliqhcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6L6T5YWl5qGG55qEIGlkXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOiuvue9ruexu+Wei1xuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwibm9ybWFsXCIsXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgXSksXG4gIC8qKlxuICAgKiDpmZDliLbplb/luqZcbiAgICovXG4gIGxpbWl0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogdGV4dGFyZWEg5qCH562+5Y6f55Sf5bGe5oCnIC0gbmFtZVxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGJsdXIg5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlgLzmlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogZm9jdXMg5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICoga2V5ZG93biDml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIGVudGVyIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvblByZXNzRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogc2Nyb2xsIOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvblNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBwbGFjZWhvbGRlclxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSByZXF1aXJlZFxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5piv5ZCm5pSv5oyB6LCD5pW05aSn5bCPXG4gICAqL1xuICByZXNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJub25lXCIsIFwiYm90aFwiLCBcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXSksXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGlnaHRcIl0pLFxuICAvKipcbiAgICogdGV4dGFyZWEg5qCH562+5Y6f55Sf5bGe5oCnIC0gdHlwZVxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOWAvCAtIOWklumDqOaOp+WItlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cblRleHRhcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGNvdW50SGFuemk6IHRydWUsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBpZDogbnVsbCxcbiAgaW50ZW50OiBcIm5vcm1hbFwiLFxuICBsaW1pdDogbnVsbCxcbiAgbmFtZTogbnVsbCxcbiAgb25CbHVyOiBub29wLFxuICBvbkNoYW5nZTogbm9vcCxcbiAgb25Gb2N1czogbm9vcCxcbiAgb25LZXlEb3duOiBub29wLFxuICBvblByZXNzRW50ZXI6IG5vb3AsXG4gIG9uU2Nyb2xsOiBub29wLFxuICBwbGFjZWhvbGRlcjogXCLor7fovpPlhaVcIixcbiAgcmVxdWlyZWQ6IGZhbHNlLFxuICByZXNpemU6IFwibm9uZVwiLFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHRoZW1lOiBudWxsLFxuICB0eXBlOiBudWxsLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuVGV4dGFyZWEuZGlzcGxheU5hbWUgPSBcIlRleHRhcmVhXCJcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFcbiJdfQ==