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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
    setTooltipVisibleArray(_objectSpread(_objectSpread({}, tooltipVisibleArray), {}, _defineProperty({}, index, bool)));
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

  var sliderProps = _objectSpread(_objectSpread({
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
  }, valuePropsObject), otherProps);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc2xpZGVyL1NsaWRlci50c3giXSwibmFtZXMiOlsibm9vcCIsInByZWZpeCIsIlNsaWRlciIsImNsYXNzTmFtZSIsImRlZmF1bHRWYWx1ZSIsImlucHV0VmlzaWJsZSIsIm1hcmtzIiwibWF4IiwibWluIiwib25BZnRlckNoYW5nZSIsIm9uQmVmb3JlQ2hhbmdlIiwib25DaGFuZ2UiLCJyYW5nZSIsInN0ZXAiLCJzdHlsZSIsInRpcEZvcm1hdHRlciIsInRvb2x0aXBQcm9wcyIsInZhbHVlUHJvcCIsInZhbHVlIiwib3RoZXJQcm9wcyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInRvb2x0aXBWaXNpYmxlQXJyYXkiLCJzZXRUb29sdGlwVmlzaWJsZUFycmF5IiwidmFsIiwidW5kZWZpbmVkIiwiTnVtYmVyIiwic2V0VmFsdWUiLCJpc05hTiIsInZhbHVlUHJvcHNPYmplY3QiLCJudW1lcmljSW5wdXRQcm9wc09iamVjdCIsIkFycmF5IiwiaXNBcnJheSIsImNsYXNzU2V0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInN0ZXBTdHJpbmciLCJ0b1N0cmluZyIsInByZWNpc2lvbiIsImluY2x1ZGVzIiwiaW5kZXhPZiIsInNldFRvb2x0aXBWaXNpYmxlIiwiaW5kZXgiLCJib29sIiwiaGFuZGxlV2l0aFRvb2x0aXAiLCJkcmFnZ2luZyIsInJlc3RQcm9wcyIsInBsYWNlbWVudCIsImhhbmRsZUJlZm9yZUNoYW5nZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY3Vyc29yIiwiaGFuZGxlQWZ0ZXJDaGFuZ2UiLCJjaGVja1ZhbHVlSXNWYWxpZCIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlIiwic2xpZGVyUHJvcHMiLCJoYW5kbGUiLCJpbmZvIiwicHJlZml4Q2xzIiwic2xpZGVyIiwibWFyZ2luTGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwibnVtYmVy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IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBSY0hhbmRsZSBmcm9tIFwicmMtc2xpZGVyL2xpYi9IYW5kbGVcIlxuaW1wb3J0IFJjUmFuZ2UgZnJvbSBcInJjLXNsaWRlci9saWIvUmFuZ2VcIlxuaW1wb3J0IFJjU2xpZGVyIGZyb20gXCJyYy1zbGlkZXIvbGliL1NsaWRlclwiXG5pbXBvcnQgTnVtZXJpY0lucHV0IGZyb20gXCIuLi9udW1lcmljLWlucHV0XCJcbmltcG9ydCBUb29sdGlwLCB7IElUb29sdGlwUHJvcHMgfSBmcm9tIFwiLi4vdG9vbHRpcFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1zbGlkZXJcIlxuXG5pbnRlcmZhY2UgSUhhbmRsZUdlbmVyYXRvckluZm8ge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgZHJhZ2dpbmc6IGJvb2xlYW5cbiAgaW5kZXg6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmludGVyZmFjZSBJVmFsdWUge1xuICBkZWZhdWx0VmFsdWU/OiBTbGlkZXJWYWx1ZVxuICB2YWx1ZT86IFNsaWRlclZhbHVlXG59XG5cbmludGVyZmFjZSBJTnVtZXJpY0lucHV0VmFsdWUge1xuICBkZWZhdWx0VmFsdWU/OiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsXG4gIHZhbHVlPzogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTbGlkZXJNYXJrcyB7XG4gIFtrZXk6IG51bWJlcl06XG4gICAgfCBSZWFjdC5SZWFjdE5vZGVcbiAgICB8IHtcbiAgICAgICAgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgICAgICAgbGFiZWw6IFJlYWN0LlJlYWN0Tm9kZVxuICAgICAgfVxufVxuXG5leHBvcnQgdHlwZSBTbGlkZXJWYWx1ZSA9IG51bWJlciB8IFtudW1iZXIsIG51bWJlcl0gfCB1bmRlZmluZWQgfCBudWxsXG5cbmV4cG9ydCB0eXBlIENoYW5nZUhhbmRsZXIgPSAodmFsdWU6IFNsaWRlclZhbHVlKSA9PiB2b2lkXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNsaWRlclByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5Yid5aeL55qE6buY6K6k5YC8XG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBTbGlkZXJWYWx1ZVxuICAvKipcbiAgICog5piv5ZCm5pSv5oyB6L6T5YWl5qGG77yM5q2kIHByb3Ag5LiO5Y+M5ruR5Z2X5qih5byP5LqS5palXG4gICAqL1xuICBpbnB1dFZpc2libGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDliLvluqbmoIforrDvvIzkvovlpoLvvJp7MjU6IFwiMjUlXCIsIDUwOiBcIjUw4oSDXCJ9XG4gICAqL1xuICBtYXJrcz86IElTbGlkZXJNYXJrc1xuICAvKipcbiAgICog5pyA5aSn5YC8XG4gICAqL1xuICBtYXg/OiBudW1iZXJcbiAgLyoqXG4gICAqIOacgOWwj+WAvFxuICAgKi9cbiAgbWluPzogbnVtYmVyXG4gIC8qKlxuICAgKiDlnKggYG9ubW91c2V1cGAg5pe26Kem5Y+R55qEIGhhbmRsZXJcbiAgICovXG4gIG9uQWZ0ZXJDaGFuZ2U/OiBDaGFuZ2VIYW5kbGVyXG4gIC8qKlxuICAgKiDlnKggYG9ubW91c2Vkb3duYCDml7bop6blj5HnmoQgaGFuZGxlclxuICAgKi9cbiAgb25CZWZvcmVDaGFuZ2U/OiBDaGFuZ2VIYW5kbGVyXG4gIC8qKlxuICAgKiDlnKjlgLzlj5HnlJ/lj5jljJbml7bop6blj5HnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiBDaGFuZ2VIYW5kbGVyXG4gIC8qKlxuICAgKiDlj4zmu5HlnZfmqKHlvI9cbiAgICovXG4gIHJhbmdlPzogYm9vbGVhblxuICAvKipcbiAgICog5q2l6ZW/77yM5b+F6aG75aSn5LqOIDBcbiAgICovXG4gIHN0ZXA/OiBudW1iZXJcbiAgLyoqXG4gICAqIOmZhOWKoOagt+W8j1xuICAgKi9cbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiDlr7nkuo4gVG9vbHRpcCDlhoXlrrnov5vooYznvJbovpHvvIzlpoLvvJp0aXBGb3JtYXR0ZXI9e3ZhbHVlID0+IGAke3ZhbHVlfeWFg2B9XG4gICAqL1xuICB0aXBGb3JtYXR0ZXI/OiBudWxsIHwgKCh2YWx1ZTogbnVtYmVyKSA9PiBSZWFjdC5SZWFjdE5vZGUpXG4gIC8qKlxuICAgKiDlvIDlkK8gdGlwRm9ybWF0dGVyIOWQju+8jOWvueS6jiBUb29sdGlwIOeahCBwcm9wc1xuICAgKi9cbiAgdG9vbHRpcFByb3BzPzogSVRvb2x0aXBQcm9wc1xuICAvKipcbiAgICog6K6+572u5b2T5YmN55qE5YC8XG4gICAqL1xuICB2YWx1ZT86IFNsaWRlclZhbHVlXG59XG5cbi8qKlxuICog5ruR5Yqo5p2h55So5LqO5Lul5ouW5ou955qE5pa55byP77yM5pu05Lq65oCn5YyW5Zyw5a6M5oiQ6L6T5YWl5pWw5o2u44CB6YCJ5oup5pWw5o2u5Yy66Ze0562J55uu55qE44CCXG4gKi9cbmNvbnN0IFNsaWRlcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SVNsaWRlclByb3BzPiA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgZGVmYXVsdFZhbHVlLFxuICBpbnB1dFZpc2libGUsXG4gIG1hcmtzLFxuICBtYXgsXG4gIG1pbixcbiAgb25BZnRlckNoYW5nZSxcbiAgb25CZWZvcmVDaGFuZ2UsXG4gIG9uQ2hhbmdlLFxuICByYW5nZSxcbiAgc3RlcCxcbiAgc3R5bGUsXG4gIHRpcEZvcm1hdHRlcixcbiAgdG9vbHRpcFByb3BzLFxuICB2YWx1ZTogdmFsdWVQcm9wLFxuICAuLi5vdGhlclByb3BzXG59OiBJU2xpZGVyUHJvcHMpID0+IHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdG9vbHRpcFZpc2libGVBcnJheSwgc2V0VG9vbHRpcFZpc2libGVBcnJheV0gPSB1c2VTdGF0ZTx7XG4gICAgW2luZGV4OiBudW1iZXJdOiBib29sZWFuXG4gIH0+KFtdKVxuICAvKipcbiAgICog5Yid5aeL5YyWIFNsaWRlciDnmoTlgLxcbiAgICogMS4g5LyY5YWI5Yik5patIFByb3AgdmFsdWXvvIzlpoLmnpzlrZjlnKggUHJvcCB2YWx1Ze+8jOWImSBTbGlkZXIg5a6M5YWo5Lqk55Sx5aSW6YOo5o6n5Yi277yM5YaF6YOo54q25oCB5peg5pWI77ybXG4gICAqIDIuIOWGjeWIpOaWrSBQcm9wIGRlZmF1bHRWYWx1Ze+8jOWmguaenOWtmOWcqOm7mOiupOWAvO+8jOWImSBTbGlkZXIg5YC85Li65q2k6buY6K6k5YC844CCXG4gICAqL1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFxuICAgICgpOiBTbGlkZXJWYWx1ZSA9PiB7XG4gICAgICBsZXQgdmFsXG4gICAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsKSB7XG4gICAgICAgIHZhbCA9IHZhbHVlUHJvcFxuICAgICAgfSBlbHNlIGlmIChkZWZhdWx0VmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdmFsID0gZGVmYXVsdFZhbHVlXG4gICAgICB9XG4gICAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgfVxuICAgICAgcmV0dXJuIHJhbmdlID8gdmFsIDogTnVtYmVyKHZhbClcbiAgICB9XG4gIClcblxuICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gIGlmIChcbiAgICB2YWx1ZVByb3AgIT09IG51bGwgJiZcbiAgICB2YWx1ZVByb3AgIT09IHVuZGVmaW5lZCAmJlxuICAgICh0eXBlb2YgdmFsdWVQcm9wID09PSBcIm9iamVjdFwiIHx8ICFpc05hTih2YWx1ZVByb3ApKSAmJlxuICAgIHZhbHVlUHJvcCAhPT0gdmFsdWVcbiAgKSB7XG4gICAgc2V0VmFsdWUocmFuZ2UgPyB2YWx1ZVByb3AgOiBOdW1iZXIodmFsdWVQcm9wKSlcbiAgfVxuXG4gIGNvbnN0IHZhbHVlUHJvcHNPYmplY3Q6IElWYWx1ZSA9IHt9XG4gIGNvbnN0IG51bWVyaWNJbnB1dFByb3BzT2JqZWN0OiBJTnVtZXJpY0lucHV0VmFsdWUgPSB7fVxuXG4gIGlmIChkZWZhdWx0VmFsdWUgIT09IG51bGwpIHtcbiAgICB2YWx1ZVByb3BzT2JqZWN0LmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZVxuICB9XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgIHZhbHVlUHJvcHNPYmplY3QudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheShkZWZhdWx0VmFsdWUpKSB7XG4gICAgbnVtZXJpY0lucHV0UHJvcHNPYmplY3QuZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlXG4gIH1cbiAgaWYgKHZhbHVlICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIG51bWVyaWNJbnB1dFByb3BzT2JqZWN0LnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0td3JhcHBlcmAsIHtcbiAgICBbYCR7cHJlZml4fS1hY3RpdmVgXTogYWN0aXZlLFxuICAgIFtgJHtwcmVmaXh9LWhhc01hcmtzYF06IG1hcmtzICYmIE9iamVjdC5rZXlzKG1hcmtzKS5sZW5ndGgsXG4gIH0pXG5cbiAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAgPyBzdGVwLnRvU3RyaW5nKCkgOiBcIjFcIlxuICBsZXQgcHJlY2lzaW9uID0gMFxuICBpZiAoc3RlcFN0cmluZy5pbmNsdWRlcyhcIi5cIikpIHtcbiAgICBwcmVjaXNpb24gPSBzdGVwU3RyaW5nLmxlbmd0aCAtIHN0ZXBTdHJpbmcuaW5kZXhPZihcIi5cIikgLSAxXG4gIH1cblxuICBjb25zdCBzZXRUb29sdGlwVmlzaWJsZSA9IChpbmRleDogbnVtYmVyLCBib29sOiBib29sZWFuKSA9PiB7XG4gICAgc2V0VG9vbHRpcFZpc2libGVBcnJheSh7XG4gICAgICAuLi50b29sdGlwVmlzaWJsZUFycmF5LFxuICAgICAgW2luZGV4XTogYm9vbCxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlV2l0aFRvb2x0aXAgPSAoe1xuICAgIGRyYWdnaW5nLFxuICAgIGluZGV4LFxuICAgIHZhbHVlOiB2YWwsXG4gICAgLi4ucmVzdFByb3BzXG4gIH06IElIYW5kbGVHZW5lcmF0b3JJbmZvKSA9PiB7XG4gICAgaWYgKHRpcEZvcm1hdHRlcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIHBvcHVwPXt0aXBGb3JtYXR0ZXIodmFsKX1cbiAgICAgICAgICBwbGFjZW1lbnQ9eyh0b29sdGlwUHJvcHMgJiYgdG9vbHRpcFByb3BzLnBsYWNlbWVudCkgfHwgXCJ0b3BcIn1cbiAgICAgICAgICB2aXNpYmxlPXt0b29sdGlwVmlzaWJsZUFycmF5W2luZGV4XSB8fCBkcmFnZ2luZ31cbiAgICAgICAgPlxuICAgICAgICAgIDxSY0hhbmRsZVxuICAgICAgICAgICAgdmFsdWU9e3ZhbH1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0VG9vbHRpcFZpc2libGUoaW5kZXgsIHRydWUpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRUb29sdGlwVmlzaWJsZShpbmRleCwgZmFsc2UpfVxuICAgICAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIDxSY0hhbmRsZSBrZXk9e2luZGV4fSB2YWx1ZT17dmFsfSB7Li4ucmVzdFByb3BzfSAvPlxuICB9XG5cbiAgY29uc3QgaGFuZGxlQmVmb3JlQ2hhbmdlID0gKHZhbDogU2xpZGVyVmFsdWUpID0+IHtcbiAgICBzZXRBY3RpdmUodHJ1ZSlcbiAgICAvLyDmi5bmi73lvIDlp4vvvIzmraTml7bkv53or4Hov4fnqIvkuK3pvKDmoIfnp7vliqjliLDlk6rph4zmiYvlir/pg73kuI3lj5hcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCJcbiAgICBpZiAob25CZWZvcmVDaGFuZ2UpIHtcbiAgICAgIG9uQmVmb3JlQ2hhbmdlKHZhbClcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVBZnRlckNoYW5nZSA9ICh2YWw6IFNsaWRlclZhbHVlKSA9PiB7XG4gICAgc2V0QWN0aXZlKGZhbHNlKVxuICAgIC8vIOaLluaLvee7k+adn++8jOagt+W8j+mHjee9rlxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcIlwiXG4gICAgaWYgKG9uQWZ0ZXJDaGFuZ2UpIHtcbiAgICAgIG9uQWZ0ZXJDaGFuZ2UodmFsKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNoZWNrVmFsdWVJc1ZhbGlkID0gKHZhbDogU2xpZGVyVmFsdWUpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgdmFsICE9PSB2YWx1ZSAmJlxuICAgICAgdmFsICE9PSBudWxsICYmXG4gICAgICB2YWwgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgbWluICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG1heCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB2YWwgPj0gbWluICYmXG4gICAgICB2YWwgPD0gbWF4XG4gICAgKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbDogU2xpZGVyVmFsdWUpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHJhbmdlID8gdmFsIDogTnVtYmVyKHZhbClcbiAgICBpZiAocmFuZ2UgfHwgY2hlY2tWYWx1ZUlzVmFsaWQobmV3VmFsdWUpKSB7XG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKG5ld1ZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNsaWRlclByb3BzID0ge1xuICAgIGhhbmRsZTogKGluZm86IElIYW5kbGVHZW5lcmF0b3JJbmZvKSA9PiBoYW5kbGVXaXRoVG9vbHRpcChpbmZvKSxcbiAgICBtYXJrcyxcbiAgICBtaW4sXG4gICAgbWF4LFxuICAgIG9uQWZ0ZXJDaGFuZ2U6IGhhbmRsZUFmdGVyQ2hhbmdlLFxuICAgIG9uQmVmb3JlQ2hhbmdlOiBoYW5kbGVCZWZvcmVDaGFuZ2UsXG4gICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICBwcmVmaXhDbHM6IHByZWZpeCxcbiAgICBzdGVwLFxuICAgIC4uLnZhbHVlUHJvcHNPYmplY3QsXG4gICAgLi4ub3RoZXJQcm9wcyxcbiAgfVxuXG4gIGNvbnN0IHNsaWRlciA9IHJhbmdlID8gKFxuICAgIDxSY1JhbmdlIHsuLi5zbGlkZXJQcm9wc30gLz5cbiAgKSA6IChcbiAgICA8UmNTbGlkZXIgey4uLnNsaWRlclByb3BzfSAvPlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7c2xpZGVyfVxuICAgICAge2lucHV0VmlzaWJsZSAmJiAhcmFuZ2UgJiYgKFxuICAgICAgICA8TnVtZXJpY0lucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICAgIHByZWNpc2lvbj17cHJlY2lzaW9ufVxuICAgICAgICAgIG9uQ2hhbmdlPXt2YWwgPT4ge1xuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyAwIDogdmFsKVxuICAgICAgICAgIH19XG4gICAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxMnB4XCIsXG4gICAgICAgICAgICB3aWR0aDogXCI1NnB4XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMjJweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLm51bWVyaWNJbnB1dFByb3BzT2JqZWN0fVxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5TbGlkZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDliJ3lp4vnmoTpu5jorqTlgLxcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOaYr+WQpuaUr+aMgei+k+WFpeahhu+8jOatpCBwcm9wIOS4juWPjOa7keWdl+aooeW8j+S6kuaWpVxuICAgKi9cbiAgaW5wdXRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWIu+W6puagh+iusO+8jOS+i+Wmgu+8mnsyNTogXCIyNSVcIiwgNTA6IFwiNTDihINcIn1cbiAgICovXG4gIG1hcmtzOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5pyA5aSn5YC8XG4gICAqL1xuICBtYXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDmnIDlsI/lgLxcbiAgICovXG4gIG1pbjogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOWcqCBgb25tb3VzZXVwYCDml7bop6blj5HnmoQgaGFuZGxlclxuICAgKi9cbiAgb25BZnRlckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlnKggYG9ubW91c2Vkb3duYCDml7bop6blj5HnmoQgaGFuZGxlclxuICAgKi9cbiAgb25CZWZvcmVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5Zyo5YC85Y+R55Sf5Y+Y5YyW5pe26Kem5Y+R55qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOWPjOa7keWdl+aooeW8j1xuICAgKi9cbiAgcmFuZ2U6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5q2l6ZW/77yM5b+F6aG75aSn5LqOIDBcbiAgICovXG4gIHN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDpmYTliqDmoLflvI9cbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog5a+55LqOIFRvb2x0aXAg5YaF5a656L+b6KGM57yW6L6R77yM5aaC77yadGlwRm9ybWF0dGVyPXt2YWx1ZSA9PiBgJHt2YWx1ZX3lhYNgfVxuICAgKi9cbiAgdGlwRm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOW8gOWQryB0aXBGb3JtYXR0ZXIg5ZCO77yM5a+55LqOIFRvb2x0aXAg55qEIHByb3BzXG4gICAqL1xuICB0b29sdGlwUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDorr7nva7lvZPliY3nmoTlgLxcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxufVxuXG5TbGlkZXIuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICBpbnB1dFZpc2libGU6IHRydWUsXG4gIG1hcmtzOiB7fSxcbiAgbWF4OiAxMDAsXG4gIG1pbjogMCxcbiAgb25BZnRlckNoYW5nZTogbm9vcCxcbiAgb25CZWZvcmVDaGFuZ2U6IG5vb3AsXG4gIG9uQ2hhbmdlOiBub29wLFxuICByYW5nZTogZmFsc2UsXG4gIHN0ZXA6IDEsXG4gIHN0eWxlOiB7fSxcbiAgdGlwRm9ybWF0dGVyOiBudWxsLFxuICB0b29sdGlwUHJvcHM6IHt9LFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyXG4iXX0=