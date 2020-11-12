"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Handle = _interopRequireDefault(require("rc-slider/lib/Handle"));

var _Range = _interopRequireDefault(require("rc-slider/lib/Range"));

var _Slider = _interopRequireDefault(require("rc-slider/lib/Slider"));

var _numericInput = _interopRequireDefault(require("../numeric-input"));

var _tooltip = _interopRequireDefault(require("../tooltip"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var noop = function noop() {};

var prefix = "adui-slider";

var Slider = function Slider(_ref) {
  var _classNames;

  var className = _ref.className,
      defaultValue = _ref.defaultValue,
      inputVisible = _ref.inputVisible,
      marks = _ref.marks,
      max = _ref.max,
      min = _ref.min,
      onAfterChange = _ref.onAfterChange,
      onBeforeChange = _ref.onBeforeChange,
      onChange = _ref.onChange,
      range = _ref.range,
      step = _ref.step,
      style = _ref.style,
      tipFormatter = _ref.tipFormatter,
      tooltipProps = _ref.tooltipProps,
      valueProp = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["className", "defaultValue", "inputVisible", "marks", "max", "min", "onAfterChange", "onBeforeChange", "onChange", "range", "step", "style", "tipFormatter", "tooltipProps", "value"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      tooltipVisibleArray = _useState4[0],
      setTooltipVisibleArray = _useState4[1];

  var _useState5 = (0, _react.useState)(function () {
    var val;

    if (valueProp !== null) {
      val = valueProp;
    } else if (defaultValue !== null) {
      val = defaultValue;
    }

    if (val === undefined) {
      return val;
    }

    return range ? val : Number(val);
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  if (valueProp !== null && valueProp !== undefined && (_typeof(valueProp) === "object" || !isNaN(valueProp)) && valueProp !== value) {
    setValue(range ? valueProp : Number(valueProp));
  }

  var valuePropsObject = {};
  var numericInputPropsObject = {};

  if (defaultValue !== null) {
    valuePropsObject.defaultValue = defaultValue;
  }

  if (value !== null) {
    valuePropsObject.value = value;
  }

  if (defaultValue !== null && !Array.isArray(defaultValue)) {
    numericInputPropsObject.defaultValue = defaultValue;
  }

  if (value !== null && !Array.isArray(value)) {
    numericInputPropsObject.value = value;
  }

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-wrapper"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-active"), active), _defineProperty(_classNames, "".concat(prefix, "-hasMarks"), marks && Object.keys(marks).length), _classNames));
  var stepString = step ? step.toString() : "1";
  var precision = 0;

  if (stepString.includes(".")) {
    precision = stepString.length - stepString.indexOf(".") - 1;
  }

  var setTooltipVisible = function setTooltipVisible(index, bool) {
    setTooltipVisibleArray(_objectSpread({}, tooltipVisibleArray, _defineProperty({}, index, bool)));
  };

  var handleWithTooltip = function handleWithTooltip(_ref2) {
    var dragging = _ref2.dragging,
        index = _ref2.index,
        val = _ref2.value,
        restProps = _objectWithoutProperties(_ref2, ["dragging", "index", "value"]);

    if (tipFormatter) {
      return _react["default"].createElement(_tooltip["default"], {
        key: index,
        popup: tipFormatter(val),
        placement: tooltipProps && tooltipProps.placement || "top",
        visible: tooltipVisibleArray[index] || dragging
      }, _react["default"].createElement(_Handle["default"], _extends({
        value: val,
        onMouseEnter: function onMouseEnter() {
          return setTooltipVisible(index, true);
        },
        onMouseLeave: function onMouseLeave() {
          return setTooltipVisible(index, false);
        }
      }, restProps)));
    }

    return _react["default"].createElement(_Handle["default"], _extends({
      key: index,
      value: val
    }, restProps));
  };

  var handleBeforeChange = function handleBeforeChange(val) {
    setActive(true);
    document.documentElement.style.cursor = "pointer";

    if (onBeforeChange) {
      onBeforeChange(val);
    }
  };

  var handleAfterChange = function handleAfterChange(val) {
    setActive(false);
    document.documentElement.style.cursor = "";

    if (onAfterChange) {
      onAfterChange(val);
    }
  };

  var checkValueIsValid = function checkValueIsValid(val) {
    return val !== value && val !== null && val !== undefined && min !== undefined && max !== undefined && val >= min && val <= max;
  };

  var handleChange = function handleChange(val) {
    var newValue = range ? val : Number(val);

    if (range || checkValueIsValid(newValue)) {
      if (valueProp === null) {
        setValue(newValue);
      }

      if (onChange) {
        onChange(newValue);
      }
    }
  };

  var sliderProps = _objectSpread({
    handle: function handle(info) {
      return handleWithTooltip(info);
    },
    marks: marks,
    min: min,
    max: max,
    onAfterChange: handleAfterChange,
    onBeforeChange: handleBeforeChange,
    onChange: handleChange,
    prefixCls: prefix,
    step: step
  }, valuePropsObject, {}, otherProps);

  var slider = range ? _react["default"].createElement(_Range["default"], sliderProps) : _react["default"].createElement(_Slider["default"], sliderProps);
  return _react["default"].createElement("div", {
    className: classSet,
    style: style
  }, slider, inputVisible && !range && _react["default"].createElement(_numericInput["default"], _extends({
    placeholder: "",
    precision: precision,
    onChange: function onChange(val) {
      handleChange(typeof val === "string" ? 0 : val);
    },
    step: step,
    style: {
      marginLeft: "12px",
      width: "56px",
      height: "22px"
    }
  }, numericInputPropsObject, otherProps)));
};

Slider.propTypes = {
  className: _propTypes["default"].string,
  defaultValue: _propTypes["default"].any,
  inputVisible: _propTypes["default"].bool,
  marks: _propTypes["default"].any,
  max: _propTypes["default"].number,
  min: _propTypes["default"].number,
  onAfterChange: _propTypes["default"].func,
  onBeforeChange: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  range: _propTypes["default"].bool,
  step: _propTypes["default"].number,
  style: _propTypes["default"].object,
  tipFormatter: _propTypes["default"].func,
  tooltipProps: _propTypes["default"].object,
  value: _propTypes["default"].any
};
Slider.defaultProps = {
  className: undefined,
  defaultValue: null,
  inputVisible: true,
  marks: {},
  max: 100,
  min: 0,
  onAfterChange: noop,
  onBeforeChange: noop,
  onChange: noop,
  range: false,
  step: 1,
  style: {},
  tipFormatter: null,
  tooltipProps: {},
  value: null
};
var _default = Slider;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc2xpZGVyL1NsaWRlci50c3giXSwibmFtZXMiOlsibm9vcCIsInByZWZpeCIsIlNsaWRlciIsImNsYXNzTmFtZSIsImRlZmF1bHRWYWx1ZSIsImlucHV0VmlzaWJsZSIsIm1hcmtzIiwibWF4IiwibWluIiwib25BZnRlckNoYW5nZSIsIm9uQmVmb3JlQ2hhbmdlIiwib25DaGFuZ2UiLCJyYW5nZSIsInN0ZXAiLCJzdHlsZSIsInRpcEZvcm1hdHRlciIsInRvb2x0aXBQcm9wcyIsInZhbHVlUHJvcCIsInZhbHVlIiwib3RoZXJQcm9wcyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInRvb2x0aXBWaXNpYmxlQXJyYXkiLCJzZXRUb29sdGlwVmlzaWJsZUFycmF5IiwidmFsIiwidW5kZWZpbmVkIiwiTnVtYmVyIiwic2V0VmFsdWUiLCJpc05hTiIsInZhbHVlUHJvcHNPYmplY3QiLCJudW1lcmljSW5wdXRQcm9wc09iamVjdCIsIkFycmF5IiwiaXNBcnJheSIsImNsYXNzU2V0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInN0ZXBTdHJpbmciLCJ0b1N0cmluZyIsInByZWNpc2lvbiIsImluY2x1ZGVzIiwiaW5kZXhPZiIsInNldFRvb2x0aXBWaXNpYmxlIiwiaW5kZXgiLCJib29sIiwiaGFuZGxlV2l0aFRvb2x0aXAiLCJkcmFnZ2luZyIsInJlc3RQcm9wcyIsInBsYWNlbWVudCIsImhhbmRsZUJlZm9yZUNoYW5nZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY3Vyc29yIiwiaGFuZGxlQWZ0ZXJDaGFuZ2UiLCJjaGVja1ZhbHVlSXNWYWxpZCIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlIiwic2xpZGVyUHJvcHMiLCJoYW5kbGUiLCJpbmZvIiwicHJlZml4Q2xzIiwic2xpZGVyIiwibWFyZ2luTGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwibnVtYmVy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aW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IFJjSGFuZGxlIGZyb20gXCJyYy1zbGlkZXIvbGliL0hhbmRsZVwiXG5pbXBvcnQgUmNSYW5nZSBmcm9tIFwicmMtc2xpZGVyL2xpYi9SYW5nZVwiXG5pbXBvcnQgUmNTbGlkZXIgZnJvbSBcInJjLXNsaWRlci9saWIvU2xpZGVyXCJcbmltcG9ydCBOdW1lcmljSW5wdXQgZnJvbSBcIi4uL251bWVyaWMtaW5wdXRcIlxuaW1wb3J0IFRvb2x0aXAsIHsgSVRvb2x0aXBQcm9wcyB9IGZyb20gXCIuLi90b29sdGlwXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXNsaWRlclwiXG5cbmludGVyZmFjZSBJSGFuZGxlR2VuZXJhdG9ySW5mbyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBkcmFnZ2luZzogYm9vbGVhblxuICBpbmRleDogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIElWYWx1ZSB7XG4gIGRlZmF1bHRWYWx1ZT86IFNsaWRlclZhbHVlXG4gIHZhbHVlPzogU2xpZGVyVmFsdWVcbn1cblxuaW50ZXJmYWNlIElOdW1lcmljSW5wdXRWYWx1ZSB7XG4gIGRlZmF1bHRWYWx1ZT86IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGxcbiAgdmFsdWU/OiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNsaWRlck1hcmtzIHtcbiAgW2tleTogbnVtYmVyXTpcbiAgICB8IFJlYWN0LlJlYWN0Tm9kZVxuICAgIHwge1xuICAgICAgICBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAgICAgICBsYWJlbDogUmVhY3QuUmVhY3ROb2RlXG4gICAgICB9XG59XG5cbmV4cG9ydCB0eXBlIFNsaWRlclZhbHVlID0gbnVtYmVyIHwgW251bWJlciwgbnVtYmVyXSB8IHVuZGVmaW5lZCB8IG51bGxcblxuZXhwb3J0IHR5cGUgQ2hhbmdlSGFuZGxlciA9ICh2YWx1ZTogU2xpZGVyVmFsdWUpID0+IHZvaWRcblxuZXhwb3J0IGludGVyZmFjZSBJU2xpZGVyUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDliJ3lp4vnmoTpu5jorqTlgLxcbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IFNsaWRlclZhbHVlXG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIHovpPlhaXmoYbvvIzmraQgcHJvcCDkuI7lj4zmu5HlnZfmqKHlvI/kupLmlqVcbiAgICovXG4gIGlucHV0VmlzaWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWIu+W6puagh+iusO+8jOS+i+Wmgu+8mnsyNTogXCIyNSVcIiwgNTA6IFwiNTDihINcIn1cbiAgICovXG4gIG1hcmtzPzogSVNsaWRlck1hcmtzXG4gIC8qKlxuICAgKiDmnIDlpKflgLxcbiAgICovXG4gIG1heD86IG51bWJlclxuICAvKipcbiAgICog5pyA5bCP5YC8XG4gICAqL1xuICBtaW4/OiBudW1iZXJcbiAgLyoqXG4gICAqIOWcqCBgb25tb3VzZXVwYCDml7bop6blj5HnmoQgaGFuZGxlclxuICAgKi9cbiAgb25BZnRlckNoYW5nZT86IENoYW5nZUhhbmRsZXJcbiAgLyoqXG4gICAqIOWcqCBgb25tb3VzZWRvd25gIOaXtuinpuWPkeeahCBoYW5kbGVyXG4gICAqL1xuICBvbkJlZm9yZUNoYW5nZT86IENoYW5nZUhhbmRsZXJcbiAgLyoqXG4gICAqIOWcqOWAvOWPkeeUn+WPmOWMluaXtuinpuWPkeeahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86IENoYW5nZUhhbmRsZXJcbiAgLyoqXG4gICAqIOWPjOa7keWdl+aooeW8j1xuICAgKi9cbiAgcmFuZ2U/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmraXplb/vvIzlv4XpobvlpKfkuo4gMFxuICAgKi9cbiAgc3RlcD86IG51bWJlclxuICAvKipcbiAgICog6ZmE5Yqg5qC35byPXG4gICAqL1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOWvueS6jiBUb29sdGlwIOWGheWuuei/m+ihjOe8lui+ke+8jOWmgu+8mnRpcEZvcm1hdHRlcj17dmFsdWUgPT4gYCR7dmFsdWV95YWDYH1cbiAgICovXG4gIHRpcEZvcm1hdHRlcj86IG51bGwgfCAoKHZhbHVlOiBudW1iZXIpID0+IFJlYWN0LlJlYWN0Tm9kZSlcbiAgLyoqXG4gICAqIOW8gOWQryB0aXBGb3JtYXR0ZXIg5ZCO77yM5a+55LqOIFRvb2x0aXAg55qEIHByb3BzXG4gICAqL1xuICB0b29sdGlwUHJvcHM/OiBJVG9vbHRpcFByb3BzXG4gIC8qKlxuICAgKiDorr7nva7lvZPliY3nmoTlgLxcbiAgICovXG4gIHZhbHVlPzogU2xpZGVyVmFsdWVcbn1cblxuLyoqXG4gKiDmu5HliqjmnaHnlKjkuo7ku6Xmi5bmi73nmoTmlrnlvI/vvIzmm7TkurrmgKfljJblnLDlrozmiJDovpPlhaXmlbDmja7jgIHpgInmi6nmlbDmja7ljLrpl7TnrYnnm67nmoTjgIJcbiAqL1xuY29uc3QgU2xpZGVyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJU2xpZGVyUHJvcHM+ID0gKHtcbiAgY2xhc3NOYW1lLFxuICBkZWZhdWx0VmFsdWUsXG4gIGlucHV0VmlzaWJsZSxcbiAgbWFya3MsXG4gIG1heCxcbiAgbWluLFxuICBvbkFmdGVyQ2hhbmdlLFxuICBvbkJlZm9yZUNoYW5nZSxcbiAgb25DaGFuZ2UsXG4gIHJhbmdlLFxuICBzdGVwLFxuICBzdHlsZSxcbiAgdGlwRm9ybWF0dGVyLFxuICB0b29sdGlwUHJvcHMsXG4gIHZhbHVlOiB2YWx1ZVByb3AsXG4gIC4uLm90aGVyUHJvcHNcbn06IElTbGlkZXJQcm9wcykgPT4ge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFt0b29sdGlwVmlzaWJsZUFycmF5LCBzZXRUb29sdGlwVmlzaWJsZUFycmF5XSA9IHVzZVN0YXRlPHtcbiAgICBbaW5kZXg6IG51bWJlcl06IGJvb2xlYW5cbiAgfT4oW10pXG4gIC8qKlxuICAgKiDliJ3lp4vljJYgU2xpZGVyIOeahOWAvFxuICAgKiAxLiDkvJjlhYjliKTmlq0gUHJvcCB2YWx1Ze+8jOWmguaenOWtmOWcqCBQcm9wIHZhbHVl77yM5YiZIFNsaWRlciDlrozlhajkuqTnlLHlpJbpg6jmjqfliLbvvIzlhoXpg6jnirbmgIHml6DmlYjvvJtcbiAgICogMi4g5YaN5Yik5patIFByb3AgZGVmYXVsdFZhbHVl77yM5aaC5p6c5a2Y5Zyo6buY6K6k5YC877yM5YiZIFNsaWRlciDlgLzkuLrmraTpu5jorqTlgLzjgIJcbiAgICovXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXG4gICAgKCk6IFNsaWRlclZhbHVlID0+IHtcbiAgICAgIGxldCB2YWxcbiAgICAgIGlmICh2YWx1ZVByb3AgIT09IG51bGwpIHtcbiAgICAgICAgdmFsID0gdmFsdWVQcm9wXG4gICAgICB9IGVsc2UgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB2YWwgPSBkZWZhdWx0VmFsdWVcbiAgICAgIH1cbiAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmFsXG4gICAgICB9XG4gICAgICByZXR1cm4gcmFuZ2UgPyB2YWwgOiBOdW1iZXIodmFsKVxuICAgIH1cbiAgKVxuXG4gIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgaWYgKFxuICAgIHZhbHVlUHJvcCAhPT0gbnVsbCAmJlxuICAgIHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmXG4gICAgKHR5cGVvZiB2YWx1ZVByb3AgPT09IFwib2JqZWN0XCIgfHwgIWlzTmFOKHZhbHVlUHJvcCkpICYmXG4gICAgdmFsdWVQcm9wICE9PSB2YWx1ZVxuICApIHtcbiAgICBzZXRWYWx1ZShyYW5nZSA/IHZhbHVlUHJvcCA6IE51bWJlcih2YWx1ZVByb3ApKVxuICB9XG5cbiAgY29uc3QgdmFsdWVQcm9wc09iamVjdDogSVZhbHVlID0ge31cbiAgY29uc3QgbnVtZXJpY0lucHV0UHJvcHNPYmplY3Q6IElOdW1lcmljSW5wdXRWYWx1ZSA9IHt9XG5cbiAgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gbnVsbCkge1xuICAgIHZhbHVlUHJvcHNPYmplY3QuZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlXG4gIH1cbiAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgdmFsdWVQcm9wc09iamVjdC52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KGRlZmF1bHRWYWx1ZSkpIHtcbiAgICBudW1lcmljSW5wdXRQcm9wc09iamVjdC5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWVcbiAgfVxuICBpZiAodmFsdWUgIT09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgbnVtZXJpY0lucHV0UHJvcHNPYmplY3QudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS13cmFwcGVyYCwge1xuICAgIFtgJHtwcmVmaXh9LWFjdGl2ZWBdOiBhY3RpdmUsXG4gICAgW2Ake3ByZWZpeH0taGFzTWFya3NgXTogbWFya3MgJiYgT2JqZWN0LmtleXMobWFya3MpLmxlbmd0aCxcbiAgfSlcblxuICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcCA/IHN0ZXAudG9TdHJpbmcoKSA6IFwiMVwiXG4gIGxldCBwcmVjaXNpb24gPSAwXG4gIGlmIChzdGVwU3RyaW5nLmluY2x1ZGVzKFwiLlwiKSkge1xuICAgIHByZWNpc2lvbiA9IHN0ZXBTdHJpbmcubGVuZ3RoIC0gc3RlcFN0cmluZy5pbmRleE9mKFwiLlwiKSAtIDFcbiAgfVxuXG4gIGNvbnN0IHNldFRvb2x0aXBWaXNpYmxlID0gKGluZGV4OiBudW1iZXIsIGJvb2w6IGJvb2xlYW4pID0+IHtcbiAgICBzZXRUb29sdGlwVmlzaWJsZUFycmF5KHtcbiAgICAgIC4uLnRvb2x0aXBWaXNpYmxlQXJyYXksXG4gICAgICBbaW5kZXhdOiBib29sLFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVXaXRoVG9vbHRpcCA9ICh7XG4gICAgZHJhZ2dpbmcsXG4gICAgaW5kZXgsXG4gICAgdmFsdWU6IHZhbCxcbiAgICAuLi5yZXN0UHJvcHNcbiAgfTogSUhhbmRsZUdlbmVyYXRvckluZm8pID0+IHtcbiAgICBpZiAodGlwRm9ybWF0dGVyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgcG9wdXA9e3RpcEZvcm1hdHRlcih2YWwpfVxuICAgICAgICAgIHBsYWNlbWVudD17KHRvb2x0aXBQcm9wcyAmJiB0b29sdGlwUHJvcHMucGxhY2VtZW50KSB8fCBcInRvcFwifVxuICAgICAgICAgIHZpc2libGU9e3Rvb2x0aXBWaXNpYmxlQXJyYXlbaW5kZXhdIHx8IGRyYWdnaW5nfVxuICAgICAgICA+XG4gICAgICAgICAgPFJjSGFuZGxlXG4gICAgICAgICAgICB2YWx1ZT17dmFsfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRUb29sdGlwVmlzaWJsZShpbmRleCwgdHJ1ZSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFRvb2x0aXBWaXNpYmxlKGluZGV4LCBmYWxzZSl9XG4gICAgICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gPFJjSGFuZGxlIGtleT17aW5kZXh9IHZhbHVlPXt2YWx9IHsuLi5yZXN0UHJvcHN9IC8+XG4gIH1cblxuICBjb25zdCBoYW5kbGVCZWZvcmVDaGFuZ2UgPSAodmFsOiBTbGlkZXJWYWx1ZSkgPT4ge1xuICAgIHNldEFjdGl2ZSh0cnVlKVxuICAgIC8vIOaLluaLveW8gOWni++8jOatpOaXtuS/neivgei/h+eoi+S4rem8oOagh+enu+WKqOWIsOWTqumHjOaJi+WKv+mDveS4jeWPmFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIlxuICAgIGlmIChvbkJlZm9yZUNoYW5nZSkge1xuICAgICAgb25CZWZvcmVDaGFuZ2UodmFsKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFmdGVyQ2hhbmdlID0gKHZhbDogU2xpZGVyVmFsdWUpID0+IHtcbiAgICBzZXRBY3RpdmUoZmFsc2UpXG4gICAgLy8g5ouW5ou957uT5p2f77yM5qC35byP6YeN572uXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwiXCJcbiAgICBpZiAob25BZnRlckNoYW5nZSkge1xuICAgICAgb25BZnRlckNoYW5nZSh2YWwpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hlY2tWYWx1ZUlzVmFsaWQgPSAodmFsOiBTbGlkZXJWYWx1ZSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICB2YWwgIT09IHZhbHVlICYmXG4gICAgICB2YWwgIT09IG51bGwgJiZcbiAgICAgIHZhbCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBtaW4gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgbWF4ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHZhbCA+PSBtaW4gJiZcbiAgICAgIHZhbCA8PSBtYXhcbiAgICApXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsOiBTbGlkZXJWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gcmFuZ2UgPyB2YWwgOiBOdW1iZXIodmFsKVxuICAgIGlmIChyYW5nZSB8fCBjaGVja1ZhbHVlSXNWYWxpZChuZXdWYWx1ZSkpIHtcbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpXG4gICAgICB9XG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UobmV3VmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2xpZGVyUHJvcHMgPSB7XG4gICAgaGFuZGxlOiAoaW5mbzogSUhhbmRsZUdlbmVyYXRvckluZm8pID0+IGhhbmRsZVdpdGhUb29sdGlwKGluZm8pLFxuICAgIG1hcmtzLFxuICAgIG1pbixcbiAgICBtYXgsXG4gICAgb25BZnRlckNoYW5nZTogaGFuZGxlQWZ0ZXJDaGFuZ2UsXG4gICAgb25CZWZvcmVDaGFuZ2U6IGhhbmRsZUJlZm9yZUNoYW5nZSxcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgIHByZWZpeENsczogcHJlZml4LFxuICAgIHN0ZXAsXG4gICAgLi4udmFsdWVQcm9wc09iamVjdCxcbiAgICAuLi5vdGhlclByb3BzLFxuICB9XG5cbiAgY29uc3Qgc2xpZGVyID0gcmFuZ2UgPyAoXG4gICAgPFJjUmFuZ2Ugey4uLnNsaWRlclByb3BzfSAvPlxuICApIDogKFxuICAgIDxSY1NsaWRlciB7Li4uc2xpZGVyUHJvcHN9IC8+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtzbGlkZXJ9XG4gICAgICB7aW5wdXRWaXNpYmxlICYmICFyYW5nZSAmJiAoXG4gICAgICAgIDxOdW1lcmljSW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXG4gICAgICAgICAgcHJlY2lzaW9uPXtwcmVjaXNpb259XG4gICAgICAgICAgb25DaGFuZ2U9e3ZhbCA9PiB7XG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2UodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IDAgOiB2YWwpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBzdGVwPXtzdGVwfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjEycHhcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjU2cHhcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIyMnB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ubnVtZXJpY0lucHV0UHJvcHNPYmplY3R9XG4gICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cblNsaWRlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOWIneWni+eahOm7mOiupOWAvFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5piv5ZCm5pSv5oyB6L6T5YWl5qGG77yM5q2kIHByb3Ag5LiO5Y+M5ruR5Z2X5qih5byP5LqS5palXG4gICAqL1xuICBpbnB1dFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5Yi75bqm5qCH6K6w77yM5L6L5aaC77yaezI1OiBcIjI1JVwiLCA1MDogXCI1MOKEg1wifVxuICAgKi9cbiAgbWFya3M6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDmnIDlpKflgLxcbiAgICovXG4gIG1heDogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOacgOWwj+WAvFxuICAgKi9cbiAgbWluOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog5ZyoIGBvbm1vdXNldXBgIOaXtuinpuWPkeeahCBoYW5kbGVyXG4gICAqL1xuICBvbkFmdGVyQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOWcqCBgb25tb3VzZWRvd25gIOaXtuinpuWPkeeahCBoYW5kbGVyXG4gICAqL1xuICBvbkJlZm9yZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlnKjlgLzlj5HnlJ/lj5jljJbml7bop6blj5HnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5Y+M5ruR5Z2X5qih5byPXG4gICAqL1xuICByYW5nZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmraXplb/vvIzlv4XpobvlpKfkuo4gMFxuICAgKi9cbiAgc3RlcDogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOmZhOWKoOagt+W8j1xuICAgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDlr7nkuo4gVG9vbHRpcCDlhoXlrrnov5vooYznvJbovpHvvIzlpoLvvJp0aXBGb3JtYXR0ZXI9e3ZhbHVlID0+IGAke3ZhbHVlfeWFg2B9XG4gICAqL1xuICB0aXBGb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5byA5ZCvIHRpcEZvcm1hdHRlciDlkI7vvIzlr7nkuo4gVG9vbHRpcCDnmoQgcHJvcHNcbiAgICovXG4gIHRvb2x0aXBQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOiuvue9ruW9k+WJjeeahOWAvFxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG59XG5cblNsaWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gIGlucHV0VmlzaWJsZTogdHJ1ZSxcbiAgbWFya3M6IHt9LFxuICBtYXg6IDEwMCxcbiAgbWluOiAwLFxuICBvbkFmdGVyQ2hhbmdlOiBub29wLFxuICBvbkJlZm9yZUNoYW5nZTogbm9vcCxcbiAgb25DaGFuZ2U6IG5vb3AsXG4gIHJhbmdlOiBmYWxzZSxcbiAgc3RlcDogMSxcbiAgc3R5bGU6IHt9LFxuICB0aXBGb3JtYXR0ZXI6IG51bGwsXG4gIHRvb2x0aXBQcm9wczoge30sXG4gIHZhbHVlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJcbiJdfQ==