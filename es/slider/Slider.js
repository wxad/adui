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

import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import RcHandle from "rc-slider/lib/Handle";
import RcRange from "rc-slider/lib/Range";
import RcSlider from "rc-slider/lib/Slider";
import NumericInput from "../numeric-input";
import Tooltip from "../tooltip";
import "./style";

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

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      tooltipVisibleArray = _useState4[0],
      setTooltipVisibleArray = _useState4[1];

  var _useState5 = useState(function () {
    var val;

    if (valueProp !== null) {
      val = typeof valueProp === "string" ? Number(valueProp) : valueProp;
    } else if (defaultValue !== null) {
      val = typeof defaultValue === "string" ? Number(defaultValue) : defaultValue;
    }

    if (val === undefined) {
      return val;
    }

    return range ? val : Number(val);
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  if (valueProp !== null && valueProp !== undefined && (_typeof(valueProp) === "object" || !isNaN(valueProp)) && (typeof valueProp === "string" ? Number(valueProp) : valueProp) !== value) {
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

  var classSet = classNames(className, "".concat(prefix, "-wrapper"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-active"), active), _defineProperty(_classNames, "".concat(prefix, "-hasMarks"), marks && Object.keys(marks).length), _classNames));
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
      return React.createElement(Tooltip, {
        key: index,
        popup: tipFormatter(val),
        placement: tooltipProps && tooltipProps.placement || "top",
        visible: tooltipVisibleArray[index] || dragging
      }, React.createElement(RcHandle, _extends({
        value: val,
        onMouseEnter: function onMouseEnter() {
          return setTooltipVisible(index, true);
        },
        onMouseLeave: function onMouseLeave() {
          return setTooltipVisible(index, false);
        }
      }, restProps)));
    }

    return React.createElement(RcHandle, _extends({
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

  var slider = range ? React.createElement(RcRange, sliderProps) : React.createElement(RcSlider, sliderProps);
  return React.createElement("div", {
    className: classSet,
    style: style
  }, slider, inputVisible && !range && React.createElement(NumericInput, _extends({
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
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  inputVisible: PropTypes.bool,
  marks: PropTypes.any,
  max: PropTypes.number,
  min: PropTypes.number,
  onAfterChange: PropTypes.func,
  onBeforeChange: PropTypes.func,
  onChange: PropTypes.func,
  range: PropTypes.bool,
  step: PropTypes.number,
  style: PropTypes.object,
  tipFormatter: PropTypes.func,
  tooltipProps: PropTypes.object,
  value: PropTypes.any
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
export default Slider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc2xpZGVyL1NsaWRlci50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJSY0hhbmRsZSIsIlJjUmFuZ2UiLCJSY1NsaWRlciIsIk51bWVyaWNJbnB1dCIsIlRvb2x0aXAiLCJub29wIiwicHJlZml4IiwiU2xpZGVyIiwiY2xhc3NOYW1lIiwiZGVmYXVsdFZhbHVlIiwiaW5wdXRWaXNpYmxlIiwibWFya3MiLCJtYXgiLCJtaW4iLCJvbkFmdGVyQ2hhbmdlIiwib25CZWZvcmVDaGFuZ2UiLCJvbkNoYW5nZSIsInJhbmdlIiwic3RlcCIsInN0eWxlIiwidGlwRm9ybWF0dGVyIiwidG9vbHRpcFByb3BzIiwidmFsdWVQcm9wIiwidmFsdWUiLCJvdGhlclByb3BzIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwidG9vbHRpcFZpc2libGVBcnJheSIsInNldFRvb2x0aXBWaXNpYmxlQXJyYXkiLCJ2YWwiLCJOdW1iZXIiLCJ1bmRlZmluZWQiLCJzZXRWYWx1ZSIsImlzTmFOIiwidmFsdWVQcm9wc09iamVjdCIsIm51bWVyaWNJbnB1dFByb3BzT2JqZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwiY2xhc3NTZXQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwic3RlcFN0cmluZyIsInRvU3RyaW5nIiwicHJlY2lzaW9uIiwiaW5jbHVkZXMiLCJpbmRleE9mIiwic2V0VG9vbHRpcFZpc2libGUiLCJpbmRleCIsImJvb2wiLCJoYW5kbGVXaXRoVG9vbHRpcCIsImRyYWdnaW5nIiwicmVzdFByb3BzIiwicGxhY2VtZW50IiwiaGFuZGxlQmVmb3JlQ2hhbmdlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjdXJzb3IiLCJoYW5kbGVBZnRlckNoYW5nZSIsImNoZWNrVmFsdWVJc1ZhbGlkIiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWUiLCJzbGlkZXJQcm9wcyIsImhhbmRsZSIsImluZm8iLCJwcmVmaXhDbHMiLCJzbGlkZXIiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJudW1iZXIiLCJmdW5jIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFFBQWhCLFFBQWdDLE9BQWhDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLHNCQUFyQjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IscUJBQXBCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixzQkFBckI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGtCQUF6QjtBQUNBLE9BQU9DLE9BQVAsTUFBdUMsWUFBdkM7QUFDQSxPQUFPLFNBQVA7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUVBLElBQU1DLE1BQU0sR0FBRyxhQUFmOztBQW1HQSxJQUFNQyxNQUE4QixHQUFHLFNBQWpDQSxNQUFpQyxPQWlCbkI7QUFBQTs7QUFBQSxNQWhCbEJDLFNBZ0JrQixRQWhCbEJBLFNBZ0JrQjtBQUFBLE1BZmxCQyxZQWVrQixRQWZsQkEsWUFla0I7QUFBQSxNQWRsQkMsWUFja0IsUUFkbEJBLFlBY2tCO0FBQUEsTUFibEJDLEtBYWtCLFFBYmxCQSxLQWFrQjtBQUFBLE1BWmxCQyxHQVlrQixRQVpsQkEsR0FZa0I7QUFBQSxNQVhsQkMsR0FXa0IsUUFYbEJBLEdBV2tCO0FBQUEsTUFWbEJDLGFBVWtCLFFBVmxCQSxhQVVrQjtBQUFBLE1BVGxCQyxjQVNrQixRQVRsQkEsY0FTa0I7QUFBQSxNQVJsQkMsUUFRa0IsUUFSbEJBLFFBUWtCO0FBQUEsTUFQbEJDLEtBT2tCLFFBUGxCQSxLQU9rQjtBQUFBLE1BTmxCQyxJQU1rQixRQU5sQkEsSUFNa0I7QUFBQSxNQUxsQkMs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UyxDQUFDNkUsTUF4RFA7QUE0RGpCcEQsRUFBQUEsS0FBSyxFQUFFekIsU0FBUyxDQUFDMEU7QUE1REEsQ0FBbkI7QUErREFqRSxNQUFNLENBQUNxRSxZQUFQLEdBQXNCO0FBQ3BCcEUsRUFBQUEsU0FBUyxFQUFFdUIsU0FEUztBQUVwQnRCLEVBQUFBLFlBQVksRUFBRSxJQUZNO0FBR3BCQyxFQUFBQSxZQUFZLEVBQUUsSUFITTtBQUlwQkMsRUFBQUEsS0FBSyxFQUFFLEVBSmE7QUFLcEJDLEVBQUFBLEdBQUcsRUFBRSxHQUxlO0FBTXBCQyxFQUFBQSxHQUFHLEVBQUUsQ0FOZTtBQU9wQkMsRUFBQUEsYUFBYSxFQUFFVCxJQVBLO0FBUXBCVSxFQUFBQSxjQUFjLEVBQUVWLElBUkk7QUFTcEJXLEVBQUFBLFFBQVEsRUFBRVgsSUFUVTtBQVVwQlksRUFBQUEsS0FBSyxFQUFFLEtBVmE7QUFXcEJDLEVBQUFBLElBQUksRUFBRSxDQVhjO0FBWXBCQyxFQUFBQSxLQUFLLEVBQUUsRUFaYTtBQWFwQkMsRUFBQUEsWUFBWSxFQUFFLElBYk07QUFjcEJDLEVBQUFBLFlBQVksRUFBRSxFQWRNO0FBZXBCRSxFQUFBQSxLQUFLLEVBQUU7QUFmYSxDQUF0QjtBQWtCQSxlQUFlaEIsTUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBSY0hhbmRsZSBmcm9tIFwicmMtc2xpZGVyL2xpYi9IYW5kbGVcIlxuaW1wb3J0IFJjUmFuZ2UgZnJvbSBcInJjLXNsaWRlci9saWIvUmFuZ2VcIlxuaW1wb3J0IFJjU2xpZGVyIGZyb20gXCJyYy1zbGlkZXIvbGliL1NsaWRlclwiXG5pbXBvcnQgTnVtZXJpY0lucHV0IGZyb20gXCIuLi9udW1lcmljLWlucHV0XCJcbmltcG9ydCBUb29sdGlwLCB7IElUb29sdGlwUHJvcHMgfSBmcm9tIFwiLi4vdG9vbHRpcFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1zbGlkZXJcIlxuXG5pbnRlcmZhY2UgSUhhbmRsZUdlbmVyYXRvckluZm8ge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgZHJhZ2dpbmc6IGJvb2xlYW5cbiAgaW5kZXg6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmludGVyZmFjZSBJVmFsdWUge1xuICBkZWZhdWx0VmFsdWU/OiBTbGlkZXJWYWx1ZVxuICB2YWx1ZT86IFNsaWRlclZhbHVlXG59XG5cbmludGVyZmFjZSBJTnVtZXJpY0lucHV0VmFsdWUge1xuICBkZWZhdWx0VmFsdWU/OiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsXG4gIHZhbHVlPzogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTbGlkZXJNYXJrcyB7XG4gIFtrZXk6IG51bWJlcl06XG4gICAgfCBSZWFjdC5SZWFjdE5vZGVcbiAgICB8IHtcbiAgICAgICAgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgICAgICAgbGFiZWw6IFJlYWN0LlJlYWN0Tm9kZVxuICAgICAgfVxufVxuXG5leHBvcnQgdHlwZSBTbGlkZXJWYWx1ZSA9IG51bWJlciB8IFtudW1iZXIsIG51bWJlcl0gfCB1bmRlZmluZWQgfCBudWxsXG5cbmV4cG9ydCB0eXBlIENoYW5nZUhhbmRsZXIgPSAodmFsdWU6IFNsaWRlclZhbHVlKSA9PiB2b2lkXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNsaWRlclByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5Yid5aeL55qE6buY6K6k5YC8XG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBTbGlkZXJWYWx1ZVxuICAvKipcbiAgICog5piv5ZCm5pSv5oyB6L6T5YWl5qGG77yM5q2kIHByb3Ag5LiO5Y+M5ruR5Z2X5qih5byP5LqS5palXG4gICAqL1xuICBpbnB1dFZpc2libGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDliLvluqbmoIforrDvvIzkvovlpoLvvJp7MjU6IFwiMjUlXCIsIDUwOiBcIjUw4oSDXCJ9XG4gICAqL1xuICBtYXJrcz86IElTbGlkZXJNYXJrc1xuICAvKipcbiAgICog5pyA5aSn5YC8XG4gICAqL1xuICBtYXg/OiBudW1iZXJcbiAgLyoqXG4gICAqIOacgOWwj+WAvFxuICAgKi9cbiAgbWluPzogbnVtYmVyXG4gIC8qKlxuICAgKiDlnKggYG9ubW91c2V1cGAg5pe26Kem5Y+R55qEIGhhbmRsZXJcbiAgICovXG4gIG9uQWZ0ZXJDaGFuZ2U/OiBDaGFuZ2VIYW5kbGVyXG4gIC8qKlxuICAgKiDlnKggYG9ubW91c2Vkb3duYCDml7bop6blj5HnmoQgaGFuZGxlclxuICAgKi9cbiAgb25CZWZvcmVDaGFuZ2U/OiBDaGFuZ2VIYW5kbGVyXG4gIC8qKlxuICAgKiDlnKjlgLzlj5HnlJ/lj5jljJbml7bop6blj5HnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiBDaGFuZ2VIYW5kbGVyXG4gIC8qKlxuICAgKiDlj4zmu5HlnZfmqKHlvI9cbiAgICovXG4gIHJhbmdlPzogYm9vbGVhblxuICAvKipcbiAgICog5q2l6ZW/77yM5b+F6aG75aSn5LqOIDBcbiAgICovXG4gIHN0ZXA/OiBudW1iZXJcbiAgLyoqXG4gICAqIOmZhOWKoOagt+W8j1xuICAgKi9cbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiDlr7nkuo4gVG9vbHRpcCDlhoXlrrnov5vooYznvJbovpHvvIzlpoLvvJp0aXBGb3JtYXR0ZXI9e3ZhbHVlID0+IGAke3ZhbHVlfeWFg2B9XG4gICAqL1xuICB0aXBGb3JtYXR0ZXI/OiBudWxsIHwgKCh2YWx1ZTogbnVtYmVyKSA9PiBSZWFjdC5SZWFjdE5vZGUpXG4gIC8qKlxuICAgKiDlvIDlkK8gdGlwRm9ybWF0dGVyIOWQju+8jOWvueS6jiBUb29sdGlwIOeahCBwcm9wc1xuICAgKi9cbiAgdG9vbHRpcFByb3BzPzogSVRvb2x0aXBQcm9wc1xuICAvKipcbiAgICog6K6+572u5b2T5YmN55qE5YC8XG4gICAqL1xuICB2YWx1ZT86IFNsaWRlclZhbHVlXG59XG5cbi8qKlxuICog5ruR5Yqo5p2h55So5LqO5Lul5ouW5ou955qE5pa55byP77yM5pu05Lq65oCn5YyW5Zyw5a6M5oiQ6L6T5YWl5pWw5o2u44CB6YCJ5oup5pWw5o2u5Yy66Ze0562J55uu55qE44CCXG4gKi9cbmNvbnN0IFNsaWRlcjogUmVhY3QuRkM8SVNsaWRlclByb3BzPiA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgZGVmYXVsdFZhbHVlLFxuICBpbnB1dFZpc2libGUsXG4gIG1hcmtzLFxuICBtYXgsXG4gIG1pbixcbiAgb25BZnRlckNoYW5nZSxcbiAgb25CZWZvcmVDaGFuZ2UsXG4gIG9uQ2hhbmdlLFxuICByYW5nZSxcbiAgc3RlcCxcbiAgc3R5bGUsXG4gIHRpcEZvcm1hdHRlcixcbiAgdG9vbHRpcFByb3BzLFxuICB2YWx1ZTogdmFsdWVQcm9wLFxuICAuLi5vdGhlclByb3BzXG59OiBJU2xpZGVyUHJvcHMpID0+IHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdG9vbHRpcFZpc2libGVBcnJheSwgc2V0VG9vbHRpcFZpc2libGVBcnJheV0gPSB1c2VTdGF0ZTx7XG4gICAgW2luZGV4OiBudW1iZXJdOiBib29sZWFuXG4gIH0+KFtdKVxuICAvKipcbiAgICog5Yid5aeL5YyWIFNsaWRlciDnmoTlgLxcbiAgICogMS4g5LyY5YWI5Yik5patIFByb3AgdmFsdWXvvIzlpoLmnpzlrZjlnKggUHJvcCB2YWx1Ze+8jOWImSBTbGlkZXIg5a6M5YWo5Lqk55Sx5aSW6YOo5o6n5Yi277yM5YaF6YOo54q25oCB5peg5pWI77ybXG4gICAqIDIuIOWGjeWIpOaWrSBQcm9wIGRlZmF1bHRWYWx1Ze+8jOWmguaenOWtmOWcqOm7mOiupOWAvO+8jOWImSBTbGlkZXIg5YC85Li65q2k6buY6K6k5YC844CCXG4gICAqL1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFxuICAgICgpOiBTbGlkZXJWYWx1ZSA9PiB7XG4gICAgICBsZXQgdmFsXG4gICAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsKSB7XG4gICAgICAgIHZhbCA9IHR5cGVvZiB2YWx1ZVByb3AgPT09IFwic3RyaW5nXCIgPyBOdW1iZXIodmFsdWVQcm9wKSA6IHZhbHVlUHJvcFxuICAgICAgfSBlbHNlIGlmIChkZWZhdWx0VmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdmFsID1cbiAgICAgICAgICB0eXBlb2YgZGVmYXVsdFZhbHVlID09PSBcInN0cmluZ1wiID8gTnVtYmVyKGRlZmF1bHRWYWx1ZSkgOiBkZWZhdWx0VmFsdWVcbiAgICAgIH1cbiAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmFsXG4gICAgICB9XG4gICAgICByZXR1cm4gcmFuZ2UgPyB2YWwgOiBOdW1iZXIodmFsKVxuICAgIH1cbiAgKVxuXG4gIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgaWYgKFxuICAgIHZhbHVlUHJvcCAhPT0gbnVsbCAmJlxuICAgIHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmXG4gICAgKHR5cGVvZiB2YWx1ZVByb3AgPT09IFwib2JqZWN0XCIgfHwgIWlzTmFOKHZhbHVlUHJvcCkpICYmXG4gICAgKHR5cGVvZiB2YWx1ZVByb3AgPT09IFwic3RyaW5nXCIgPyBOdW1iZXIodmFsdWVQcm9wKSA6IHZhbHVlUHJvcCkgIT09IHZhbHVlXG4gICkge1xuICAgIHNldFZhbHVlKHJhbmdlID8gdmFsdWVQcm9wIDogTnVtYmVyKHZhbHVlUHJvcCkpXG4gIH1cblxuICBjb25zdCB2YWx1ZVByb3BzT2JqZWN0OiBJVmFsdWUgPSB7fVxuICBjb25zdCBudW1lcmljSW5wdXRQcm9wc09iamVjdDogSU51bWVyaWNJbnB1dFZhbHVlID0ge31cblxuICBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsKSB7XG4gICAgdmFsdWVQcm9wc09iamVjdC5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWVcbiAgfVxuICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICB2YWx1ZVByb3BzT2JqZWN0LnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIGlmIChkZWZhdWx0VmFsdWUgIT09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkoZGVmYXVsdFZhbHVlKSkge1xuICAgIG51bWVyaWNJbnB1dFByb3BzT2JqZWN0LmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZVxuICB9XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBudW1lcmljSW5wdXRQcm9wc09iamVjdC52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LXdyYXBwZXJgLCB7XG4gICAgW2Ake3ByZWZpeH0tYWN0aXZlYF06IGFjdGl2ZSxcbiAgICBbYCR7cHJlZml4fS1oYXNNYXJrc2BdOiBtYXJrcyAmJiBPYmplY3Qua2V5cyhtYXJrcykubGVuZ3RoLFxuICB9KVxuXG4gIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwID8gc3RlcC50b1N0cmluZygpIDogXCIxXCJcbiAgbGV0IHByZWNpc2lvbiA9IDBcbiAgaWYgKHN0ZXBTdHJpbmcuaW5jbHVkZXMoXCIuXCIpKSB7XG4gICAgcHJlY2lzaW9uID0gc3RlcFN0cmluZy5sZW5ndGggLSBzdGVwU3RyaW5nLmluZGV4T2YoXCIuXCIpIC0gMVxuICB9XG5cbiAgY29uc3Qgc2V0VG9vbHRpcFZpc2libGUgPSAoaW5kZXg6IG51bWJlciwgYm9vbDogYm9vbGVhbikgPT4ge1xuICAgIHNldFRvb2x0aXBWaXNpYmxlQXJyYXkoe1xuICAgICAgLi4udG9vbHRpcFZpc2libGVBcnJheSxcbiAgICAgIFtpbmRleF06IGJvb2wsXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVdpdGhUb29sdGlwID0gKHtcbiAgICBkcmFnZ2luZyxcbiAgICBpbmRleCxcbiAgICB2YWx1ZTogdmFsLFxuICAgIC4uLnJlc3RQcm9wc1xuICB9OiBJSGFuZGxlR2VuZXJhdG9ySW5mbykgPT4ge1xuICAgIGlmICh0aXBGb3JtYXR0ZXIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUb29sdGlwXG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBwb3B1cD17dGlwRm9ybWF0dGVyKHZhbCl9XG4gICAgICAgICAgcGxhY2VtZW50PXsodG9vbHRpcFByb3BzICYmIHRvb2x0aXBQcm9wcy5wbGFjZW1lbnQpIHx8IFwidG9wXCJ9XG4gICAgICAgICAgdmlzaWJsZT17dG9vbHRpcFZpc2libGVBcnJheVtpbmRleF0gfHwgZHJhZ2dpbmd9XG4gICAgICAgID5cbiAgICAgICAgICA8UmNIYW5kbGVcbiAgICAgICAgICAgIHZhbHVlPXt2YWx9XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFRvb2x0aXBWaXNpYmxlKGluZGV4LCB0cnVlKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0VG9vbHRpcFZpc2libGUoaW5kZXgsIGZhbHNlKX1cbiAgICAgICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiA8UmNIYW5kbGUga2V5PXtpbmRleH0gdmFsdWU9e3ZhbH0gey4uLnJlc3RQcm9wc30gLz5cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUJlZm9yZUNoYW5nZSA9ICh2YWw6IFNsaWRlclZhbHVlKSA9PiB7XG4gICAgc2V0QWN0aXZlKHRydWUpXG4gICAgLy8g5ouW5ou95byA5aeL77yM5q2k5pe25L+d6K+B6L+H56iL5Lit6byg5qCH56e75Yqo5Yiw5ZOq6YeM5omL5Yq/6YO95LiN5Y+YXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiXG4gICAgaWYgKG9uQmVmb3JlQ2hhbmdlKSB7XG4gICAgICBvbkJlZm9yZUNoYW5nZSh2YWwpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQWZ0ZXJDaGFuZ2UgPSAodmFsOiBTbGlkZXJWYWx1ZSkgPT4ge1xuICAgIHNldEFjdGl2ZShmYWxzZSlcbiAgICAvLyDmi5bmi73nu5PmnZ/vvIzmoLflvI/ph43nva5cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJcIlxuICAgIGlmIChvbkFmdGVyQ2hhbmdlKSB7XG4gICAgICBvbkFmdGVyQ2hhbmdlKHZhbClcbiAgICB9XG4gIH1cblxuICBjb25zdCBjaGVja1ZhbHVlSXNWYWxpZCA9ICh2YWw6IFNsaWRlclZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHZhbCAhPT0gdmFsdWUgJiZcbiAgICAgIHZhbCAhPT0gbnVsbCAmJlxuICAgICAgdmFsICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG1pbiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBtYXggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdmFsID49IG1pbiAmJlxuICAgICAgdmFsIDw9IG1heFxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWw6IFNsaWRlclZhbHVlKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSByYW5nZSA/IHZhbCA6IE51bWJlcih2YWwpXG4gICAgaWYgKHJhbmdlIHx8IGNoZWNrVmFsdWVJc1ZhbGlkKG5ld1ZhbHVlKSkge1xuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZShuZXdWYWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzbGlkZXJQcm9wcyA9IHtcbiAgICBoYW5kbGU6IChpbmZvOiBJSGFuZGxlR2VuZXJhdG9ySW5mbykgPT4gaGFuZGxlV2l0aFRvb2x0aXAoaW5mbyksXG4gICAgbWFya3MsXG4gICAgbWluLFxuICAgIG1heCxcbiAgICBvbkFmdGVyQ2hhbmdlOiBoYW5kbGVBZnRlckNoYW5nZSxcbiAgICBvbkJlZm9yZUNoYW5nZTogaGFuZGxlQmVmb3JlQ2hhbmdlLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgcHJlZml4Q2xzOiBwcmVmaXgsXG4gICAgc3RlcCxcbiAgICAuLi52YWx1ZVByb3BzT2JqZWN0LFxuICAgIC4uLm90aGVyUHJvcHMsXG4gIH1cblxuICBjb25zdCBzbGlkZXIgPSByYW5nZSA/IChcbiAgICA8UmNSYW5nZSB7Li4uc2xpZGVyUHJvcHN9IC8+XG4gICkgOiAoXG4gICAgPFJjU2xpZGVyIHsuLi5zbGlkZXJQcm9wc30gLz5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSBzdHlsZT17c3R5bGV9PlxuICAgICAge3NsaWRlcn1cbiAgICAgIHtpbnB1dFZpc2libGUgJiYgIXJhbmdlICYmIChcbiAgICAgICAgPE51bWVyaWNJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgICBwcmVjaXNpb249e3ByZWNpc2lvbn1cbiAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyAwIDogdmFsKVxuICAgICAgICAgIH19XG4gICAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxMnB4XCIsXG4gICAgICAgICAgICB3aWR0aDogXCI1NnB4XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMjJweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLm51bWVyaWNJbnB1dFByb3BzT2JqZWN0fVxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5TbGlkZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDliJ3lp4vnmoTpu5jorqTlgLxcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOaYr+WQpuaUr+aMgei+k+WFpeahhu+8jOatpCBwcm9wIOS4juWPjOa7keWdl+aooeW8j+S6kuaWpVxuICAgKi9cbiAgaW5wdXRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWIu+W6puagh+iusO+8jOS+i+Wmgu+8mnsyNTogXCIyNSVcIiwgNTA6IFwiNTDihINcIn1cbiAgICovXG4gIG1hcmtzOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5pyA5aSn5YC8XG4gICAqL1xuICBtYXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDmnIDlsI/lgLxcbiAgICovXG4gIG1pbjogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOWcqCBgb25tb3VzZXVwYCDml7bop6blj5HnmoQgaGFuZGxlclxuICAgKi9cbiAgb25BZnRlckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlnKggYG9ubW91c2Vkb3duYCDml7bop6blj5HnmoQgaGFuZGxlclxuICAgKi9cbiAgb25CZWZvcmVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5Zyo5YC85Y+R55Sf5Y+Y5YyW5pe26Kem5Y+R55qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOWPjOa7keWdl+aooeW8j1xuICAgKi9cbiAgcmFuZ2U6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5q2l6ZW/77yM5b+F6aG75aSn5LqOIDBcbiAgICovXG4gIHN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDpmYTliqDmoLflvI9cbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog5a+55LqOIFRvb2x0aXAg5YaF5a656L+b6KGM57yW6L6R77yM5aaC77yadGlwRm9ybWF0dGVyPXt2YWx1ZSA9PiBgJHt2YWx1ZX3lhYNgfVxuICAgKi9cbiAgdGlwRm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOW8gOWQryB0aXBGb3JtYXR0ZXIg5ZCO77yM5a+55LqOIFRvb2x0aXAg55qEIHByb3BzXG4gICAqL1xuICB0b29sdGlwUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDorr7nva7lvZPliY3nmoTlgLxcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxufVxuXG5TbGlkZXIuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICBpbnB1dFZpc2libGU6IHRydWUsXG4gIG1hcmtzOiB7fSxcbiAgbWF4OiAxMDAsXG4gIG1pbjogMCxcbiAgb25BZnRlckNoYW5nZTogbm9vcCxcbiAgb25CZWZvcmVDaGFuZ2U6IG5vb3AsXG4gIG9uQ2hhbmdlOiBub29wLFxuICByYW5nZTogZmFsc2UsXG4gIHN0ZXA6IDEsXG4gIHN0eWxlOiB7fSxcbiAgdGlwRm9ybWF0dGVyOiBudWxsLFxuICB0b29sdGlwUHJvcHM6IHt9LFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyXG4iXX0=