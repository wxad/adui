function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef, useContext, useImperativeHandle, useMemo, useState, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { color2hsb, hsb2hex } from "../_util/color";
import { ConfigContext, getComputedSize } from "../config-provider";
import Button from "../button";
import Input from "../input";
import Popover from "../popover";
import Slider from "../slider";
import { isLegalHexString, addHashTag, removeHashTag, STANDARDS, STANDARDS_TRANSPARENT, TRANSPARENT_BG } from "./core";
import ColorPickerCollapse from "./ColorPickerCollapse";
import "./style";
var prefix = "adui-cp";
var ColorPicker = forwardRef(function (_ref, ref) {
  var className = _ref.className,
      defaultValue = _ref.defaultValue,
      disabled = _ref.disabled,
      inputVisible = _ref.inputVisible,
      onChange = _ref.onChange,
      onFinishChange = _ref.onFinishChange,
      popoverProps = _ref.popoverProps,
      popupResultVisible = _ref.popupResultVisible,
      recentColors = _ref.recentColors,
      sizeProp = _ref.size,
      transparentEnabled = _ref.transparentEnabled,
      valueProp = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["className", "defaultValue", "disabled", "inputVisible", "onChange", "onFinishChange", "popoverProps", "popupResultVisible", "recentColors", "size", "transparentEnabled", "value"]);

  var prevValue = "";

  var getInitialState = function getInitialState() {
    var h = 0;
    var s = 0;
    var b = 0;
    var inputValue = "";
    var valueState = "";

    var getState = function getState(val) {
      ;

      var _color2hsb = color2hsb(val);

      var _color2hsb2 = _slicedToArray(_color2hsb, 3);

      h = _color2hsb2[0];
      s = _color2hsb2[1];
      b = _color2hsb2[2];

      if (val === "transparent") {
        valueState = val;
        inputValue = "";
      } else {
        valueState = val.toUpperCase();
        inputValue = removeHashTag(val.toUpperCase());
      }
    };

    if (valueProp && (isLegalHexString(removeHashTag(valueProp)) || transparentEnabled && valueProp === "transparent")) {
      getState(valueProp);
    } else if (defaultValue && (isLegalHexString(removeHashTag(defaultValue)) || transparentEnabled && defaultValue === "transparent")) {
      getState(defaultValue);
    }

    prevValue = valueState;
    return {
      h: h,
      s: s * 100,
      b: b * 100,
      inputValue: inputValue,
      value: valueState
    };
  };

  var initialState = useMemo(getInitialState, []);

  var _useState = useState(initialState.h),
      _useState2 = _slicedToArray(_useState, 2),
      h = _useState2[0],
      setH = _useState2[1];

  var _useState3 = useState(initialState.s),
      _useState4 = _slicedToArray(_useState3, 2),
      s = _useState4[0],
      setS = _useState4[1];

  var _useState5 = useState(initialState.b),
      _useState6 = _slicedToArray(_useState5, 2),
      b = _useState6[0],
      setB = _useState6[1];

  var _useState7 = useState(initialState.inputValue),
      _useState8 = _slicedToArray(_useState7, 2),
      inputValue = _useState8[0],
      setInputValue = _useState8[1];

  var _useState9 = useState(initialState.value),
      _useState10 = _slicedToArray(_useState9, 2),
      value = _useState10[0],
      setValue = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      visible = _useState12[0],
      setVisible = _useState12[1];

  var _useState13 = useState(false),
      _useState14 = _slicedToArray(_useState13, 2),
      standardCollapsed = _useState14[0],
      setStandardCollapsed = _useState14[1];

  var _useState15 = useState(true),
      _useState16 = _slicedToArray(_useState15, 2),
      customCollapsed = _useState16[0],
      setCustomCollapsed = _useState16[1];

  if (valueProp && isLegalHexString(removeHashTag(valueProp)) && valueProp.toUpperCase() !== value) {
    setH(color2hsb(valueProp)[0]);
    setS(color2hsb(valueProp)[1] * 100);
    setB(color2hsb(valueProp)[2] * 100);
    setInputValue(removeHashTag(valueProp.toUpperCase()));
    setValue(valueProp.toUpperCase());
  } else if (transparentEnabled && valueProp === "transparent" && value !== "transparent") {
    setH(0);
    setS(0);
    setB(0);
    setInputValue("");
    setValue("transparent");
  }

  var inputRef = useRef(null);
  var popupInputRef = useRef(null);
  var triggerRef = useRef(null);

  var _useContext = useContext(ConfigContext),
      sizeContext = _useContext.size;

  var size = getComputedSize(sizeProp, sizeContext);
  var paletteRect = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    x: 0,
    y: 0,
    width: 160,
    height: 90
  };
  var classSet = classNames(className, "".concat(prefix), "".concat(prefix, "-").concat(size));

  var callChange = function callChange(val) {
    if (onChange) {
      onChange(val);
    }
  };

  var handlePrefixClick = function handlePrefixClick() {
    var _popupInputRef$curren, _inputRef$current;

    if (visible && (_popupInputRef$curren = popupInputRef.current) !== null && _popupInputRef$curren !== void 0 && _popupInputRef$curren.input) {
      popupInputRef.current.input.focus();
    } else if ((_inputRef$current = inputRef.current) !== null && _inputRef$current !== void 0 && _inputRef$current.input) {
      inputRef.current.input.focus();
    }
  };

  var handleVisibleChange = function handleVisibleChange(bool) {
    setVisible(bool);

    if (bool) {
      prevValue = value;
    } else if (value !== prevValue) {
      prevValue = value;
      setTimeout(function () {
        if (onFinishChange) {
          onFinishChange(value);
        }
      }, 200);
    }
  };

  var handleInputBlur = function handleInputBlur(type) {
    if (transparentEnabled) {
      if (inputValue !== "" && value === "transparent") {
        setInputValue("");
      }
    } else if (addHashTag(inputValue) !== value) {
      setInputValue(removeHashTag(value));
    }

    if (value !== prevValue && !type && onFinishChange) {
      onFinishChange(value);
    }
  };

  var handleInputFocus = function handleInputFocus(_ref2) {
    var target = _ref2.target;
    target.select();
  };

  var handleValueChange = function handleValueChange(val) {
    if (valueProp === null) {
      if (val.toUpperCase() === "TRANSPARENT") {
        setInputValue("");
        setValue("transparent");
      } else {
        var _color2hsb3 = color2hsb(val),
            _color2hsb4 = _slicedToArray(_color2hsb3, 3),
            newH = _color2hsb4[0],
            newS = _color2hsb4[1],
            newB = _color2hsb4[2];

        setH(newH);
        setS(newS * 100);
        setB(newB * 100);
        setInputValue(removeHashTag(val));
        setValue(val);
      }
    }

    callChange(val === "TRANSPARENT" ? "transparent" : val);
  };

  var handleInputChange = function handleInputChange(_ref3) {
    var val = _ref3.target.value;
    var inputVal = val.split("#").join("");
    setInputValue(inputVal);

    if (isLegalHexString(inputVal)) {
      handleValueChange(addHashTag(inputVal));
    } else if (transparentEnabled && inputVal === "") {
      handleValueChange("transparent");
    }
  };

  var handleCustomChange = function handleCustomChange(type, val) {
    var newValue;

    if (type === "h") {
      newValue = hsb2hex(val, s / 100, b / 100);
      setH(val);
    } else if (type === "s") {
      newValue = hsb2hex(h, val / 100, b / 100);
      setS(val);
    } else {
      newValue = hsb2hex(h, s / 100, val / 100);
      setB(val);
    }

    setInputValue(removeHashTag(newValue));
    setValue(newValue);
    callChange(newValue);
  };

  var handlePaletteMouseMove = function handlePaletteMouseMove(e) {
    var _paletteRect = paletteRect,
        left = _paletteRect.left,
        top = _paletteRect.top,
        width = _paletteRect.width,
        height = _paletteRect.height;
    var newS = (e.pageX - left - window.scrollX) / width;
    var newB = (e.pageY - top - window.scrollY) / height;

    if (newS < 0) {
      newS = 0;
    } else if (newS > 1) {
      newS = 1;
    }

    if (newB < 0) {
      newB = 0;
    } else if (newB > 1) {
      newB = 1;
    }

    newS *= 100;
    newB = 100 - newB * 100;
    var newColor = hsb2hex(h, newS / 100, newB / 100);
    setS(newS);
    setB(newB);
    setValue(newColor);
    setInputValue(removeHashTag(newColor));
    callChange(newColor);
  };

  var handlePaletteMouseUp = function handlePaletteMouseUp() {
    window.removeEventListener("mousemove", handlePaletteMouseMove);
    window.removeEventListener("mouseup", handlePaletteMouseUp);
  };

  var handlePaletteMouseDown = function handlePaletteMouseDown(e) {
    var currentTarget = e.currentTarget;
    paletteRect = currentTarget.getBoundingClientRect();
    var _paletteRect2 = paletteRect,
        left = _paletteRect2.left,
        top = _paletteRect2.top,
        width = _paletteRect2.width,
        height = _paletteRect2.height;
    var newS = (e.pageX - left - window.scrollX) / width * 100;
    var newB = 100 - (e.pageY - top - window.scrollY) / height * 100;
    var newColor = hsb2hex(h, newS / 100, newB / 100);
    setS(newS);
    setB(newB);
    setValue(newColor);
    setInputValue(removeHashTag(newColor));
    callChange(newColor);
    window.addEventListener("mousemove", handlePaletteMouseMove);
    window.addEventListener("mouseup", handlePaletteMouseUp);
  };

  var handleCollapseChange = function handleCollapseChange(bool, type) {
    if (type === "standard") {
      setStandardCollapsed(bool);

      if (!bool && !customCollapsed) {
        setCustomCollapsed(true);
      }
    } else if (type === "custom") {
      setCustomCollapsed(bool);

      if (!bool && !standardCollapsed) {
        setStandardCollapsed(true);
      }
    }
  };

  var renderInput = function renderInput(type) {
    return React.createElement(Input, {
      ref: type ? popupInputRef : inputRef,
      className: "".concat(prefix, "-input"),
      cleaveOptions: {
        uppercase: true
      },
      disabled: disabled,
      leftElement: React.createElement("div", {
        role: "none",
        onClick: handlePrefixClick,
        className: "".concat(prefix, "-prefix")
      }, "#"),
      onBlur: function onBlur() {
        return handleInputBlur(type);
      },
      onChange: handleInputChange,
      onFocus: handleInputFocus,
      placeholder: "",
      size: type ? "small" : size,
      theme: type && "light",
      value: inputValue
    });
  };

  useImperativeHandle(ref, function () {
    return {
      input: inputRef.current,
      popupInput: popupInputRef.current,
      trigger: triggerRef.current
    };
  });
  return React.createElement("div", _extends({
    className: classSet,
    "data-value": value,
    "data-h": h || 0,
    "data-s": s || 0,
    "data-b": b || 0
  }, otherProps), React.createElement(Popover, _extends({
    alignEdge: false,
    placement: "bottomLeft",
    popup: React.createElement("div", {
      className: "".concat(prefix, "-popup")
    }, popupResultVisible && React.createElement("div", {
      className: "".concat(prefix, "-popup-result")
    }, React.createElement("i", {
      style: {
        background: value === "transparent" ? TRANSPARENT_BG : value
      }
    }), renderInput("popup")), recentColors && !!recentColors.length && React.createElement(ColorPickerCollapse, {
      defaultCollapsed: false,
      header: "\u6700\u8FD1\u4F7F\u7528",
      content: React.createElement("div", {
        className: "".concat(prefix, "-recent")
      }, _toConsumableArray(new Set(recentColors.slice(0, 7))).map(function (color) {
        return React.createElement("i", {
          key: color,
          role: "none",
          onClick: function onClick() {
            return handleValueChange(color.toUpperCase());
          },
          style: {
            background: color === "transparent" ? TRANSPARENT_BG : color
          }
        });
      }))
    }), React.createElement(ColorPickerCollapse, {
      collapsed: standardCollapsed,
      onCollapseChange: function onCollapseChange(bool) {
        return handleCollapseChange(bool, "standard");
      },
      header: "\u6807\u51C6\u8272\u677F",
      content: React.createElement("div", {
        className: "".concat(prefix, "-standard")
      }, (transparentEnabled ? STANDARDS_TRANSPARENT : STANDARDS).map(function (color) {
        return React.createElement("i", {
          key: color,
          role: "none",
          onClick: function onClick() {
            return handleValueChange(color);
          },
          className: color === value ? "".concat(prefix, "-standard-item_selected") : "",
          style: {
            background: color === "TRANSPARENT" ? TRANSPARENT_BG : color
          }
        });
      }))
    }), React.createElement(ColorPickerCollapse, {
      collapsed: customCollapsed,
      onCollapseChange: function onCollapseChange(bool) {
        return handleCollapseChange(bool, "custom");
      },
      header: "\u81EA\u5B9A\u4E49",
      content: React.createElement("div", {
        className: "".concat(prefix, "-custom")
      }, React.createElement("div", {
        className: "".concat(prefix, "-palette"),
        role: "none",
        style: {
          backgroundColor: "hsl(".concat(h, ", 100%, 50%)")
        },
        onMouseDown: handlePaletteMouseDown
      }, React.createElement("div", {
        className: "".concat(prefix, "-palette-s")
      }), React.createElement("div", {
        className: "".concat(prefix, "-palette-b")
      }), value && React.createElement("i", {
        style: {
          bottom: "calc(".concat(b, "% - 7px)"),
          left: "calc(".concat(s, "% - 7px)"),
          backgroundColor: value
        }
      })), React.createElement("div", {
        className: "".concat(prefix, "-slider-wrapper")
      }, React.createElement("span", {
        className: "".concat(prefix, "-slider-label")
      }, "H"), React.createElement(Slider, {
        className: "".concat(prefix, "-slider ").concat(prefix, "-slider_h"),
        inputVisible: false,
        min: 0,
        max: 359,
        value: h,
        onChange: function onChange(param) {
          if (param && !Array.isArray(param)) {
            handleCustomChange("h", param);
          }
        }
      })), React.createElement("div", {
        className: "".concat(prefix, "-slider-wrapper")
      }, React.createElement("span", {
        className: "".concat(prefix, "-slider-label")
      }, "S"), React.createElement(Slider, {
        className: "".concat(prefix, "-slider ").concat(prefix, "-slider_s"),
        inputVisible: false,
        min: 0,
        max: 100,
        value: s,
        onChange: function onChange(param) {
          if (param && !Array.isArray(param)) {
            handleCustomChange("s", param);
          }
        },
        railStyle: {
          backgroundImage: "linear-gradient(90deg, #fff 0%, transparent 100%)",
          backgroundColor: "hsl(".concat(h, ", 100%, 50%)")
        }
      })), React.createElement("div", {
        className: "".concat(prefix, "-slider-wrapper")
      }, React.createElement("span", {
        className: "".concat(prefix, "-slider-label")
      }, "B"), React.createElement(Slider, {
        className: "".concat(prefix, "-slider ").concat(prefix, "-slider_b"),
        inputVisible: false,
        min: 0,
        max: 100,
        value: b,
        onChange: function onChange(param) {
          if (param && !Array.isArray(param)) {
            handleCustomChange("b", param);
          }
        },
        railStyle: {
          backgroundImage: "linear-gradient(90deg, #000 0%, transparent 100%)",
          backgroundColor: "hsl(".concat(h, ", 100%, 50%)")
        }
      })))
    })),
    ref: triggerRef,
    trigger: "click",
    visible: visible,
    onVisibleChange: handleVisibleChange
  }, popoverProps), React.createElement(Button, {
    className: "".concat(prefix, "-picker"),
    disabled: disabled,
    size: size
  }, React.createElement("i", {
    style: {
      background: value === "transparent" ? TRANSPARENT_BG : value
    }
  }))), inputVisible && renderInput());
});
ColorPicker.displayName = "ColorPicker";
ColorPicker.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  inputVisible: PropTypes.bool,
  onChange: PropTypes.func,
  onFinishChange: PropTypes.func,
  popoverProps: PropTypes.object,
  popupResultVisible: PropTypes.bool,
  recentColors: PropTypes.array,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  transparentEnabled: PropTypes.bool,
  value: PropTypes.string
};
ColorPicker.defaultProps = {
  className: undefined,
  defaultValue: null,
  disabled: false,
  inputVisible: true,
  onChange: undefined,
  onFinishChange: undefined,
  popoverProps: {},
  popupResultVisible: true,
  recentColors: [],
  size: "small",
  transparentEnabled: false,
  value: null
};
export default ColorPicker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY29sb3ItcGlja2VyL0NvbG9yUGlja2VyLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcndhcmRSZWYiLCJ1c2VDb250ZXh0IiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJjb2xvcjJoc2IiLCJoc2IyaGV4IiwiQ29uZmlnQ29udGV4dCIsImdldENvbXB1dGVkU2l6ZSIsIkJ1dHRvbiIsIklucHV0IiwiUG9wb3ZlciIsIlNsaWRlciIsImlzTGVnYWxIZXhTdHJpbmciLCJhZGRIYXNoVGFnIiwicmVtb3ZlSGFzaFRhZyIsIlNUQU5EQVJEUyIsIlNUQU5EQVJEU19UUkFOU1BBUkVOVCIsIlRSQU5TUEFSRU5UX0JHIiwiQ29sb3JQaWNrZXJDb2xsYXBzZSIsInByZWZpeCIsIkNvbG9yUGlja2VyIiwicmVmIiwiY2xhc3NOYW1lIiwiZGVmYXVsdFZhbHVlIiwiZGlzYWJsZWQiLCJpbnB1dFZpc2libGUiLCJvbkNoYW5nZSIsIm9uRmluaXNoQ2hhbmdlIiwicG9wb3ZlclByb3BzIiwicG9wdXBSZXN1bHRWaXNpYmxlIiwicmVjZW50Q29sb3JzIiwic2l6ZVByb3AiLCJzaXplIiwidHJhbnNwYXJlbnRFbmFibGVkIiwidmFsdWVQcm9wIiwidmFsdWUiLCJvdGhlclByb3BzIiwicHJldlZhbHVlIiwiZ2V0SW5pdGlhbFN0YXRlIiwiaCIsInMiLCJiIiwiaW5wdXRWYWx1ZSIsInZhbHVlU3RhdGUiLCJnZXRTdGF0ZSIsInZhbCIsInRvVXBwZXJDYXNlIiwiaW5pdGlhbFN0YXRlIiwic2V0SCIsInNldFMiLCJzZXRCIiwic2V0SW5wdXRWYWx1ZSIsInNldFZhbHVlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJzdGFuZGFyZENvbGxhcHNlZCIsInNldFN0YW5kYXJkQ29sbGFwc2VkIiwiY3VzdG9tQ29sbGFwc2VkIiwic2V0Q3VzdG9tQ29sbGFwc2VkIiwiaW5wdXRSZWYiLCJwb3B1cElucHV0UmVmIiwidHJpZ2dlclJlZiIsInNpemVDb250ZXh0IiwicGFsZXR0ZVJlY3QiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3NTZXQiLCJjYWxsQ2hhbmdlIiwiaGFuZGxlUHJlZml4Q2xpY2siLCJjdXJyZW50IiwiaW5wdXQiLCJmb2N1cyIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJib29sIiwic2V0VGltZW91dCIsImhhbmRsZUlucHV0Qmx1ciIsInR5cGUiLCJoYW5kbGVJbnB1dEZvY3VzIiwidGFyZ2V0Iiwic2VsZWN0IiwiaGFuZGxlVmFsdWVDaGFuZ2UiLCJuZXdIIiwibmV3UyIsIm5ld0IiLCJoYW5kbGVJbnB1dENoYW5nZSIsImlucHV0VmFsIiwic3BsaXQiLCJqb2luIiwiaGFuZGxlQ3VzdG9tQ2hhbmdlIiwibmV3VmFsdWUiLCJoYW5kbGVQYWxldHRlTW91c2VNb3ZlIiwiZSIsInBhZ2VYIiwid2luZG93Iiwic2Nyb2xsWCIsInBhZ2VZIiwic2Nyb2xsWSIsIm5ld0NvbG9yIiwiaGFuZGxlUGFsZXR0ZU1vdXNlVXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlUGFsZXR0ZU1vdXNlRG93biIsImN1cnJlbnRUYXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29sbGFwc2VDaGFuZ2UiLCJyZW5kZXJJbnB1dCIsInVwcGVyY2FzZSIsInBvcHVwSW5wdXQiLCJ0cmlnZ2VyIiwiYmFja2dyb3VuZCIsImxlbmd0aCIsIlNldCIsInNsaWNlIiwibWFwIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYXJhbSIsIkFycmF5IiwiaXNBcnJheSIsImJhY2tncm91bmRJbWFnZSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsIm9iamVjdCIsImFycmF5Iiwib25lT2YiLCJkZWZhdWx0UHJv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QyxFQUFBQSxRQUFRLEVBQUUsS0FIZTtBQUl6QkMsRUFBQUEsWUFBWSxFQUFFLElBSlc7QUFLekJDLEVBQUFBLFFBQVEsRUFBRTRHLFNBTGU7QUFNekIzRyxFQUFBQSxjQUFjLEVBQUUyRyxTQU5TO0FBT3pCMUcsRUFBQUEsWUFBWSxFQUFFLEVBUFc7QUFRekJDLEVBQUFBLGtCQUFrQixFQUFFLElBUks7QUFTekJDLEVBQUFBLFlBQVksRUFBRSxFQVRXO0FBVXpCRSxFQUFBQSxJQUFJLEVBQUUsT0FWbUI7QUFXekJDLEVBQUFBLGtCQUFrQixFQUFFLEtBWEs7QUFZekJFLEVBQUFBLEtBQUssRUFBRTtBQVprQixDQUEzQjtBQWVBLGVBQWVmLFdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgUmVhY3QsIHtcbiAgZm9yd2FyZFJlZixcbiAgdXNlQ29udGV4dCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlTWVtbyxcbiAgdXNlU3RhdGUsXG4gIHVzZVJlZixcbn0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgY29sb3IyaHNiLCBoc2IyaGV4IH0gZnJvbSBcIi4uL191dGlsL2NvbG9yXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uXCJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRcIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBTbGlkZXIgZnJvbSBcIi4uL3NsaWRlclwiXG5pbXBvcnQge1xuICBpc0xlZ2FsSGV4U3RyaW5nLFxuICBhZGRIYXNoVGFnLFxuICByZW1vdmVIYXNoVGFnLFxuICBTVEFOREFSRFMsXG4gIFNUQU5EQVJEU19UUkFOU1BBUkVOVCxcbiAgVFJBTlNQQVJFTlRfQkcsXG59IGZyb20gXCIuL2NvcmVcIlxuaW1wb3J0IENvbG9yUGlja2VyQ29sbGFwc2UgZnJvbSBcIi4vQ29sb3JQaWNrZXJDb2xsYXBzZVwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNwXCJcblxuZXhwb3J0IGludGVyZmFjZSBJQ29sb3JQaWNrZXJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOm7mOiupOeahOWIneWni+WAvCAtIOWGhemDqOmpseWKqFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlPzogc3RyaW5nIHwgbnVsbFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOi+k+WFpeahhuaYr+WQpuaYvuekulxuICAgKi9cbiAgaW5wdXRWaXNpYmxlPzogYm9vbGVhblxuICAvKipcbiAgICog5YC85pS55Y+Y5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgLyoqXG4gICAqIOWcqCB2aXNpYmxlIOWPmOS4uiBmYWxzZe+8jOS7peWPiiBJbnB1dCBibHVyIOaXtuinpuWPkeeahCBoYW5kbGVy77ybXG4gICAqIOi/meS4qiBoYW5kbGVyIOmdnuW4uOeJueauiu+8jOS4uuS6humFjeWQiOeJueauiueahCByZWNlbnRDb2xvcnMgUHJvcCDkvb/nlKjvvIzor7flnKjov5nkuKrkuovku7bop6blj5HnmoTml7blgJnorr7nva4gcmVjZW50Q29sb3Jz44CCXG4gICAqL1xuICBvbkZpbmlzaENoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDkvKDlhaUgUG9wb3ZlciDnmoQgcHJvcHNcbiAgICovXG4gIHBvcG92ZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgLyoqXG4gICAqIOW8ueWHuuahhuWGheeahOe7k+aenOWMuuWfn+aYr+WQpuaYvuekulxuICAgKi9cbiAgcG9wdXBSZXN1bHRWaXNpYmxlPzogYm9vbGVhblxuICAvKipcbiAgICog5pyA6L+R5L2/55So55qE6aKc6Imy77yM5q2k5Yqf6IO96Z2e5bi454m55q6K77yM6ZyA6YWN5ZCIIG9uRmluaXNoQ2hhbmdlIOS9v+eUqFxuICAgKi9cbiAgcmVjZW50Q29sb3JzPzogc3RyaW5nW11cbiAgLyoqXG4gICAqIOWwuuWvuOWkp+Wwj1xuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog5byA5ZCv6YCP5piO6ImyXG4gICAqL1xuICB0cmFuc3BhcmVudEVuYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlgLwgLSDlpJbpg6jmjqfliLZcbiAgICovXG4gIHZhbHVlPzogc3RyaW5nIHwgbnVsbFxufVxuXG4vKipcbiAqIOminOiJsumAieaLqeWZqFxuICovXG5jb25zdCBDb2xvclBpY2tlcjogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgSUNvbG9yUGlja2VyUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT5cbj4gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpbnB1dFZpc2libGUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uRmluaXNoQ2hhbmdlLFxuICAgICAgcG9wb3ZlclByb3BzLFxuICAgICAgcG9wdXBSZXN1bHRWaXNpYmxlLFxuICAgICAgcmVjZW50Q29sb3JzLFxuICAgICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgICB0cmFuc3BhcmVudEVuYWJsZWQsXG4gICAgICB2YWx1ZTogdmFsdWVQcm9wLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElDb2xvclBpY2tlclByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBsZXQgcHJldlZhbHVlID0gXCJcIlxuXG4gICAgY29uc3QgZ2V0SW5pdGlhbFN0YXRlID0gKCkgPT4ge1xuICAgICAgbGV0IGggPSAwXG4gICAgICBsZXQgcyA9IDBcbiAgICAgIGxldCBiID0gMFxuICAgICAgbGV0IGlucHV0VmFsdWUgPSBcIlwiXG4gICAgICBsZXQgdmFsdWVTdGF0ZSA9IFwiXCJcbiAgICAgIGNvbnN0IGdldFN0YXRlID0gKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgICAgIDtbaCwgcywgYl0gPSBjb2xvcjJoc2IodmFsKVxuICAgICAgICBpZiAodmFsID09PSBcInRyYW5zcGFyZW50XCIpIHtcbiAgICAgICAgICB2YWx1ZVN0YXRlID0gdmFsXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IFwiXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZVN0YXRlID0gdmFsLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICBpbnB1dFZhbHVlID0gcmVtb3ZlSGFzaFRhZyh2YWwudG9VcHBlckNhc2UoKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICB2YWx1ZVByb3AgJiZcbiAgICAgICAgKGlzTGVnYWxIZXhTdHJpbmcocmVtb3ZlSGFzaFRhZyh2YWx1ZVByb3ApKSB8fFxuICAgICAgICAgICh0cmFuc3BhcmVudEVuYWJsZWQgJiYgdmFsdWVQcm9wID09PSBcInRyYW5zcGFyZW50XCIpKVxuICAgICAgKSB7XG4gICAgICAgIGdldFN0YXRlKHZhbHVlUHJvcClcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRlZmF1bHRWYWx1ZSAmJlxuICAgICAgICAoaXNMZWdhbEhleFN0cmluZyhyZW1vdmVIYXNoVGFnKGRlZmF1bHRWYWx1ZSkpIHx8XG4gICAgICAgICAgKHRyYW5zcGFyZW50RW5hYmxlZCAmJiBkZWZhdWx0VmFsdWUgPT09IFwidHJhbnNwYXJlbnRcIikpXG4gICAgICApIHtcbiAgICAgICAgZ2V0U3RhdGUoZGVmYXVsdFZhbHVlKVxuICAgICAgfVxuXG4gICAgICBwcmV2VmFsdWUgPSB2YWx1ZVN0YXRlXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGgsXG4gICAgICAgIHM6IHMgKiAxMDAsXG4gICAgICAgIGI6IGIgKiAxMDAsXG4gICAgICAgIGlucHV0VmFsdWUsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVN0YXRlLFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHVzZU1lbW8oZ2V0SW5pdGlhbFN0YXRlLCBbXSlcblxuICAgIGNvbnN0IFtoLCBzZXRIXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZS5oKVxuICAgIGNvbnN0IFtzLCBzZXRTXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZS5zKVxuICAgIGNvbnN0IFtiLCBzZXRCXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZS5iKVxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZS5pbnB1dFZhbHVlKVxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlLnZhbHVlKVxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtzdGFuZGFyZENvbGxhcHNlZCwgc2V0U3RhbmRhcmRDb2xsYXBzZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2N1c3RvbUNvbGxhcHNlZCwgc2V0Q3VzdG9tQ29sbGFwc2VkXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAgaWYgKFxuICAgICAgdmFsdWVQcm9wICYmXG4gICAgICBpc0xlZ2FsSGV4U3RyaW5nKHJlbW92ZUhhc2hUYWcodmFsdWVQcm9wKSkgJiZcbiAgICAgIHZhbHVlUHJvcC50b1VwcGVyQ2FzZSgpICE9PSB2YWx1ZVxuICAgICkge1xuICAgICAgc2V0SChjb2xvcjJoc2IodmFsdWVQcm9wKVswXSlcbiAgICAgIHNldFMoY29sb3IyaHNiKHZhbHVlUHJvcClbMV0gKiAxMDApXG4gICAgICBzZXRCKGNvbG9yMmhzYih2YWx1ZVByb3ApWzJdICogMTAwKVxuICAgICAgc2V0SW5wdXRWYWx1ZShyZW1vdmVIYXNoVGFnKHZhbHVlUHJvcC50b1VwcGVyQ2FzZSgpKSlcbiAgICAgIHNldFZhbHVlKHZhbHVlUHJvcC50b1VwcGVyQ2FzZSgpKVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0cmFuc3BhcmVudEVuYWJsZWQgJiZcbiAgICAgIHZhbHVlUHJvcCA9PT0gXCJ0cmFuc3BhcmVudFwiICYmXG4gICAgICB2YWx1ZSAhPT0gXCJ0cmFuc3BhcmVudFwiXG4gICAgKSB7XG4gICAgICBzZXRIKDApXG4gICAgICBzZXRTKDApXG4gICAgICBzZXRCKDApXG4gICAgICBzZXRJbnB1dFZhbHVlKFwiXCIpXG4gICAgICBzZXRWYWx1ZShcInRyYW5zcGFyZW50XCIpXG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuICAgIGNvbnN0IHBvcHVwSW5wdXRSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuICAgIGNvbnN0IHRyaWdnZXJSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuXG4gICAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuICAgIGNvbnN0IHNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZVByb3AsIHNpemVDb250ZXh0KVxuXG4gICAgbGV0IHBhbGV0dGVSZWN0OiBPbWl0PERPTVJlY3QsIFwidG9KU09OXCI+ID0ge1xuICAgICAgdG9wOiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICB3aWR0aDogMTYwLFxuICAgICAgaGVpZ2h0OiA5MCxcbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9YCwgYCR7cHJlZml4fS0ke3NpemV9YClcblxuICAgIGNvbnN0IGNhbGxDaGFuZ2UgPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZSh2YWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUHJlZml4Q2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAodmlzaWJsZSAmJiBwb3B1cElucHV0UmVmLmN1cnJlbnQ/LmlucHV0KSB7XG4gICAgICAgIHBvcHVwSW5wdXRSZWYuY3VycmVudC5pbnB1dC5mb2N1cygpXG4gICAgICB9IGVsc2UgaWYgKGlucHV0UmVmLmN1cnJlbnQ/LmlucHV0KSB7XG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuaW5wdXQuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVZpc2libGVDaGFuZ2UgPSAoYm9vbDogYm9vbGVhbikgPT4ge1xuICAgICAgc2V0VmlzaWJsZShib29sKVxuICAgICAgaWYgKGJvb2wpIHtcbiAgICAgICAgcHJldlZhbHVlID0gdmFsdWVcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IHByZXZWYWx1ZSkge1xuICAgICAgICBwcmV2VmFsdWUgPSB2YWx1ZVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChvbkZpbmlzaENoYW5nZSkge1xuICAgICAgICAgICAgb25GaW5pc2hDaGFuZ2UodmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9LCAyMDApXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRCbHVyID0gKHR5cGU/OiBcInBvcHVwXCIpID0+IHtcbiAgICAgIGlmICh0cmFuc3BhcmVudEVuYWJsZWQpIHtcbiAgICAgICAgaWYgKGlucHV0VmFsdWUgIT09IFwiXCIgJiYgdmFsdWUgPT09IFwidHJhbnNwYXJlbnRcIikge1xuICAgICAgICAgIHNldElucHV0VmFsdWUoXCJcIilcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhZGRIYXNoVGFnKGlucHV0VmFsdWUpICE9PSB2YWx1ZSkge1xuICAgICAgICBzZXRJbnB1dFZhbHVlKHJlbW92ZUhhc2hUYWcodmFsdWUpKVxuICAgICAgfVxuICAgICAgaWYgKHZhbHVlICE9PSBwcmV2VmFsdWUgJiYgIXR5cGUgJiYgb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgb25GaW5pc2hDaGFuZ2UodmFsdWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRGb2N1cyA9ICh7XG4gICAgICB0YXJnZXQsXG4gICAgfTogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgdGFyZ2V0LnNlbGVjdCgpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVmFsdWVDaGFuZ2UgPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHZhbC50b1VwcGVyQ2FzZSgpID09PSBcIlRSQU5TUEFSRU5UXCIpIHtcbiAgICAgICAgICBzZXRJbnB1dFZhbHVlKFwiXCIpXG4gICAgICAgICAgc2V0VmFsdWUoXCJ0cmFuc3BhcmVudFwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IFtuZXdILCBuZXdTLCBuZXdCXSA9IGNvbG9yMmhzYih2YWwpXG4gICAgICAgICAgc2V0SChuZXdIKVxuICAgICAgICAgIHNldFMobmV3UyAqIDEwMClcbiAgICAgICAgICBzZXRCKG5ld0IgKiAxMDApXG4gICAgICAgICAgc2V0SW5wdXRWYWx1ZShyZW1vdmVIYXNoVGFnKHZhbCkpXG4gICAgICAgICAgc2V0VmFsdWUodmFsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYWxsQ2hhbmdlKHZhbCA9PT0gXCJUUkFOU1BBUkVOVFwiID8gXCJ0cmFuc3BhcmVudFwiIDogdmFsKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKHtcbiAgICAgIHRhcmdldDogeyB2YWx1ZTogdmFsIH0sXG4gICAgfTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IGlucHV0VmFsID0gdmFsLnNwbGl0KFwiI1wiKS5qb2luKFwiXCIpXG4gICAgICBzZXRJbnB1dFZhbHVlKGlucHV0VmFsKVxuICAgICAgaWYgKGlzTGVnYWxIZXhTdHJpbmcoaW5wdXRWYWwpKSB7XG4gICAgICAgIGhhbmRsZVZhbHVlQ2hhbmdlKGFkZEhhc2hUYWcoaW5wdXRWYWwpKVxuICAgICAgfSBlbHNlIGlmICh0cmFuc3BhcmVudEVuYWJsZWQgJiYgaW5wdXRWYWwgPT09IFwiXCIpIHtcbiAgICAgICAgaGFuZGxlVmFsdWVDaGFuZ2UoXCJ0cmFuc3BhcmVudFwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUN1c3RvbUNoYW5nZSA9ICh0eXBlOiBcImhcIiB8IFwic1wiIHwgXCJiXCIsIHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICBsZXQgbmV3VmFsdWU6IHN0cmluZ1xuICAgICAgaWYgKHR5cGUgPT09IFwiaFwiKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gaHNiMmhleCh2YWwsIHMgLyAxMDAsIGIgLyAxMDApXG4gICAgICAgIHNldEgodmFsKVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInNcIikge1xuICAgICAgICBuZXdWYWx1ZSA9IGhzYjJoZXgoaCwgdmFsIC8gMTAwLCBiIC8gMTAwKVxuICAgICAgICBzZXRTKHZhbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gaHNiMmhleChoLCBzIC8gMTAwLCB2YWwgLyAxMDApXG4gICAgICAgIHNldEIodmFsKVxuICAgICAgfVxuXG4gICAgICBzZXRJbnB1dFZhbHVlKHJlbW92ZUhhc2hUYWcobmV3VmFsdWUpKVxuICAgICAgc2V0VmFsdWUobmV3VmFsdWUpXG5cbiAgICAgIGNhbGxDaGFuZ2UobmV3VmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGFsZXR0ZU1vdXNlTW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCB9ID0gcGFsZXR0ZVJlY3RcblxuICAgICAgbGV0IG5ld1MgPSAoZS5wYWdlWCAtIGxlZnQgLSB3aW5kb3cuc2Nyb2xsWCkgLyB3aWR0aFxuICAgICAgbGV0IG5ld0IgPSAoZS5wYWdlWSAtIHRvcCAtIHdpbmRvdy5zY3JvbGxZKSAvIGhlaWdodFxuXG4gICAgICBpZiAobmV3UyA8IDApIHtcbiAgICAgICAgbmV3UyA9IDBcbiAgICAgIH0gZWxzZSBpZiAobmV3UyA+IDEpIHtcbiAgICAgICAgbmV3UyA9IDFcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld0IgPCAwKSB7XG4gICAgICAgIG5ld0IgPSAwXG4gICAgICB9IGVsc2UgaWYgKG5ld0IgPiAxKSB7XG4gICAgICAgIG5ld0IgPSAxXG4gICAgICB9XG5cbiAgICAgIG5ld1MgKj0gMTAwXG4gICAgICBuZXdCID0gMTAwIC0gbmV3QiAqIDEwMFxuXG4gICAgICBjb25zdCBuZXdDb2xvciA9IGhzYjJoZXgoaCwgbmV3UyAvIDEwMCwgbmV3QiAvIDEwMClcblxuICAgICAgc2V0UyhuZXdTKVxuICAgICAgc2V0QihuZXdCKVxuICAgICAgc2V0VmFsdWUobmV3Q29sb3IpXG4gICAgICBzZXRJbnB1dFZhbHVlKHJlbW92ZUhhc2hUYWcobmV3Q29sb3IpKVxuXG4gICAgICBjYWxsQ2hhbmdlKG5ld0NvbG9yKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBhbGV0dGVNb3VzZVVwID0gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlUGFsZXR0ZU1vdXNlTW92ZSlcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVQYWxldHRlTW91c2VVcClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQYWxldHRlTW91c2VEb3duID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgICBjb25zdCB7IGN1cnJlbnRUYXJnZXQgfSA9IGVcbiAgICAgIHBhbGV0dGVSZWN0ID0gY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgY29uc3QgeyBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQgfSA9IHBhbGV0dGVSZWN0XG5cbiAgICAgIGNvbnN0IG5ld1MgPSAoKGUucGFnZVggLSBsZWZ0IC0gd2luZG93LnNjcm9sbFgpIC8gd2lkdGgpICogMTAwXG4gICAgICBjb25zdCBuZXdCID0gMTAwIC0gKChlLnBhZ2VZIC0gdG9wIC0gd2luZG93LnNjcm9sbFkpIC8gaGVpZ2h0KSAqIDEwMFxuXG4gICAgICBjb25zdCBuZXdDb2xvciA9IGhzYjJoZXgoaCwgbmV3UyAvIDEwMCwgbmV3QiAvIDEwMClcblxuICAgICAgc2V0UyhuZXdTKVxuICAgICAgc2V0QihuZXdCKVxuICAgICAgc2V0VmFsdWUobmV3Q29sb3IpXG4gICAgICBzZXRJbnB1dFZhbHVlKHJlbW92ZUhhc2hUYWcobmV3Q29sb3IpKVxuXG4gICAgICBjYWxsQ2hhbmdlKG5ld0NvbG9yKVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVQYWxldHRlTW91c2VNb3ZlKVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZVBhbGV0dGVNb3VzZVVwKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNvbGxhcHNlQ2hhbmdlID0gKFxuICAgICAgYm9vbDogYm9vbGVhbixcbiAgICAgIHR5cGU6IFwic3RhbmRhcmRcIiB8IFwiY3VzdG9tXCJcbiAgICApID0+IHtcbiAgICAgIGlmICh0eXBlID09PSBcInN0YW5kYXJkXCIpIHtcbiAgICAgICAgc2V0U3RhbmRhcmRDb2xsYXBzZWQoYm9vbClcbiAgICAgICAgaWYgKCFib29sICYmICFjdXN0b21Db2xsYXBzZWQpIHtcbiAgICAgICAgICBzZXRDdXN0b21Db2xsYXBzZWQodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcImN1c3RvbVwiKSB7XG4gICAgICAgIHNldEN1c3RvbUNvbGxhcHNlZChib29sKVxuICAgICAgICBpZiAoIWJvb2wgJiYgIXN0YW5kYXJkQ29sbGFwc2VkKSB7XG4gICAgICAgICAgc2V0U3RhbmRhcmRDb2xsYXBzZWQodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlcklucHV0ID0gKHR5cGU/OiBcInBvcHVwXCIpID0+IChcbiAgICAgIDxJbnB1dFxuICAgICAgICByZWY9e3R5cGUgPyBwb3B1cElucHV0UmVmIDogaW5wdXRSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbnB1dGB9XG4gICAgICAgIGNsZWF2ZU9wdGlvbnM9e3sgdXBwZXJjYXNlOiB0cnVlIH19XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgbGVmdEVsZW1lbnQ9e1xuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZWZpeENsaWNrfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXByZWZpeGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgI1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIG9uQmx1cj17KCkgPT4gaGFuZGxlSW5wdXRCbHVyKHR5cGUpfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgIG9uRm9jdXM9e2hhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgc2l6ZT17dHlwZSA/IFwic21hbGxcIiA6IHNpemV9XG4gICAgICAgIHRoZW1lPXt0eXBlICYmIFwibGlnaHRcIn1cbiAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAvPlxuICAgIClcblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgaW5wdXQ6IGlucHV0UmVmLmN1cnJlbnQsXG4gICAgICBwb3B1cElucHV0OiBwb3B1cElucHV0UmVmLmN1cnJlbnQsXG4gICAgICB0cmlnZ2VyOiB0cmlnZ2VyUmVmLmN1cnJlbnQsXG4gICAgfSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICBkYXRhLXZhbHVlPXt2YWx1ZX1cbiAgICAgICAgZGF0YS1oPXtoIHx8IDB9XG4gICAgICAgIGRhdGEtcz17cyB8fCAwfVxuICAgICAgICBkYXRhLWI9e2IgfHwgMH1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgYWxpZ25FZGdlPXtmYWxzZX1cbiAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21MZWZ0XCJcbiAgICAgICAgICBwb3B1cD17XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3B1cGB9PlxuICAgICAgICAgICAgICB7cG9wdXBSZXN1bHRWaXNpYmxlICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3B1cC1yZXN1bHRgfT5cbiAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID09PSBcInRyYW5zcGFyZW50XCIgPyBUUkFOU1BBUkVOVF9CRyA6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJJbnB1dChcInBvcHVwXCIpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7cmVjZW50Q29sb3JzICYmICEhcmVjZW50Q29sb3JzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgPENvbG9yUGlja2VyQ29sbGFwc2VcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb2xsYXBzZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgaGVhZGVyPVwi5pyA6L+R5L2/55SoXCJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1yZWNlbnRgfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Wy4uLm5ldyBTZXQocmVjZW50Q29sb3JzLnNsaWNlKDAsIDcpKV0ubWFwKChjb2xvcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVWYWx1ZUNoYW5nZShjb2xvci50b1VwcGVyQ2FzZSgpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPT09IFwidHJhbnNwYXJlbnRcIiA/IFRSQU5TUEFSRU5UX0JHIDogY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIDxDb2xvclBpY2tlckNvbGxhcHNlXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkPXtzdGFuZGFyZENvbGxhcHNlZH1cbiAgICAgICAgICAgICAgICBvbkNvbGxhcHNlQ2hhbmdlPXsoYm9vbCkgPT5cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNvbGxhcHNlQ2hhbmdlKGJvb2wsIFwic3RhbmRhcmRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGVhZGVyPVwi5qCH5YeG6Imy5p2/XCJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXN0YW5kYXJkYH0+XG4gICAgICAgICAgICAgICAgICAgIHsodHJhbnNwYXJlbnRFbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBTVEFOREFSRFNfVFJBTlNQQVJFTlRcbiAgICAgICAgICAgICAgICAgICAgICA6IFNUQU5EQVJEU1xuICAgICAgICAgICAgICAgICAgICApLm1hcCgoY29sb3IpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVZhbHVlQ2hhbmdlKGNvbG9yKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID09PSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7cHJlZml4fS1zdGFuZGFyZC1pdGVtX3NlbGVjdGVkYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9PT0gXCJUUkFOU1BBUkVOVFwiID8gVFJBTlNQQVJFTlRfQkcgOiBjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDb2xvclBpY2tlckNvbGxhcHNlXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkPXtjdXN0b21Db2xsYXBzZWR9XG4gICAgICAgICAgICAgICAgb25Db2xsYXBzZUNoYW5nZT17KGJvb2wpID0+XG4gICAgICAgICAgICAgICAgICBoYW5kbGVDb2xsYXBzZUNoYW5nZShib29sLCBcImN1c3RvbVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWFkZXI9XCLoh6rlrprkuYlcIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY3VzdG9tYH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcGFsZXR0ZWB9XG4gICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYGhzbCgke2h9LCAxMDAlLCA1MCUpYCB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXtoYW5kbGVQYWxldHRlTW91c2VEb3dufVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcGFsZXR0ZS1zYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wYWxldHRlLWJgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYGNhbGMoJHtifSUgLSA3cHgpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBgY2FsYygke3N9JSAtIDdweClgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1zbGlkZXItd3JhcHBlcmB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4fS1zbGlkZXItbGFiZWxgfT5IPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1zbGlkZXIgJHtwcmVmaXh9LXNsaWRlcl9oYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmlzaWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezM1OX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtofVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhwYXJhbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW0gJiYgIUFycmF5LmlzQXJyYXkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ3VzdG9tQ2hhbmdlKFwiaFwiLCBwYXJhbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2xpZGVyLXdyYXBwZXJgfT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2xpZGVyLWxhYmVsYH0+Uzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2xpZGVyICR7cHJlZml4fS1zbGlkZXJfc2B9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZpc2libGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsocGFyYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtICYmICFBcnJheS5pc0FycmF5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUN1c3RvbUNoYW5nZShcInNcIiwgcGFyYW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICByYWlsU3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZmIDAlLCB0cmFuc3BhcmVudCAxMDAlKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYGhzbCgke2h9LCAxMDAlLCA1MCUpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNsaWRlci13cmFwcGVyYH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNsaWRlci1sYWJlbGB9PkI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNsaWRlciAke3ByZWZpeH0tc2xpZGVyX2JgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWaXNpYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2J9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHBhcmFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbSAmJiAhQXJyYXkuaXNBcnJheShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDdXN0b21DaGFuZ2UoXCJiXCIsIHBhcmFtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgcmFpbFN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMCAwJSwgdHJhbnNwYXJlbnQgMTAwJSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGBoc2woJHtofSwgMTAwJSwgNTAlKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlZj17dHJpZ2dlclJlZn1cbiAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXtoYW5kbGVWaXNpYmxlQ2hhbmdlfVxuICAgICAgICAgIHsuLi5wb3BvdmVyUHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcGlja2VyYH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YWx1ZSA9PT0gXCJ0cmFuc3BhcmVudFwiID8gVFJBTlNQQVJFTlRfQkcgOiB2YWx1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAge2lucHV0VmlzaWJsZSAmJiByZW5kZXJJbnB1dCgpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4pXG5cbkNvbG9yUGlja2VyLmRpc3BsYXlOYW1lID0gXCJDb2xvclBpY2tlclwiXG5cbkNvbG9yUGlja2VyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6buY6K6k55qE5Yid5aeL5YC8IC0g5YaF6YOo6amx5YqoXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOi+k+WFpeahhuaYr+WQpuaYvuekulxuICAgKi9cbiAgaW5wdXRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWAvOaUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlnKggdmlzaWJsZSDlj5jkuLogZmFsc2XvvIzku6Xlj4ogSW5wdXQgYmx1ciDml7bop6blj5HnmoQgaGFuZGxlcu+8m1xuICAgKiDov5nkuKogaGFuZGxlciDpnZ7luLjnibnmrorvvIzkuLrkuobphY3lkIjnibnmrornmoQgcmVjZW50Q29sb3JzIFByb3Ag5L2/55So77yM6K+35Zyo6L+Z5Liq5LqL5Lu26Kem5Y+R55qE5pe25YCZ6K6+572uIHJlY2VudENvbG9yc+OAglxuICAgKi9cbiAgb25GaW5pc2hDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5Lyg5YWlIFBvcG92ZXIg55qEIHByb3BzXG4gICAqL1xuICBwb3BvdmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDlvLnlh7rmoYblhoXnmoTnu5PmnpzljLrln5/mmK/lkKbmmL7npLpcbiAgICovXG4gIHBvcHVwUmVzdWx0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmnIDov5Hkvb/nlKjnmoTpopzoibLvvIzmraTlip/og73pnZ7luLjnibnmrorvvIzpnIDphY3lkIggb25GaW5pc2hDaGFuZ2Ug5L2/55SoXG4gICAqL1xuICByZWNlbnRDb2xvcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgLyoqXG4gICAqIOWwuuWvuOWkp+Wwj1xuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOW8gOWQr+mAj+aYjuiJslxuICAgKi9cbiAgdHJhbnNwYXJlbnRFbmFibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWAvCAtIOWklumDqOaOp+WItlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbkNvbG9yUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBpbnB1dFZpc2libGU6IHRydWUsXG4gIG9uQ2hhbmdlOiB1bmRlZmluZWQsXG4gIG9uRmluaXNoQ2hhbmdlOiB1bmRlZmluZWQsXG4gIHBvcG92ZXJQcm9wczoge30sXG4gIHBvcHVwUmVzdWx0VmlzaWJsZTogdHJ1ZSxcbiAgcmVjZW50Q29sb3JzOiBbXSxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB0cmFuc3BhcmVudEVuYWJsZWQ6IGZhbHNlLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JQaWNrZXJcbiJdfQ==