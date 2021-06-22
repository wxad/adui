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
  } else if (valueProp === "" && value !== "") {
    setH(0);
    setS(0);
    setB(0);
    setInputValue("");
    setValue("");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY29sb3ItcGlja2VyL0NvbG9yUGlja2VyLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcndhcmRSZWYiLCJ1c2VDb250ZXh0IiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJjb2xvcjJoc2IiLCJoc2IyaGV4IiwiQ29uZmlnQ29udGV4dCIsImdldENvbXB1dGVkU2l6ZSIsIkJ1dHRvbiIsIklucHV0IiwiUG9wb3ZlciIsIlNsaWRlciIsImlzTGVnYWxIZXhTdHJpbmciLCJhZGRIYXNoVGFnIiwicmVtb3ZlSGFzaFRhZyIsIlNUQU5EQVJEUyIsIlNUQU5EQVJEU19UUkFOU1BBUkVOVCIsIlRSQU5TUEFSRU5UX0JHIiwiQ29sb3JQaWNrZXJDb2xsYXBzZSIsInByZWZpeCIsIkNvbG9yUGlja2VyIiwicmVmIiwiY2xhc3NOYW1lIiwiZGVmYXVsdFZhbHVlIiwiZGlzYWJsZWQiLCJpbnB1dFZpc2libGUiLCJvbkNoYW5nZSIsIm9uRmluaXNoQ2hhbmdlIiwicG9wb3ZlclByb3BzIiwicG9wdXBSZXN1bHRWaXNpYmxlIiwicmVjZW50Q29sb3JzIiwic2l6ZVByb3AiLCJzaXplIiwidHJhbnNwYXJlbnRFbmFibGVkIiwidmFsdWVQcm9wIiwidmFsdWUiLCJvdGhlclByb3BzIiwicHJldlZhbHVlIiwiZ2V0SW5pdGlhbFN0YXRlIiwiaCIsInMiLCJiIiwiaW5wdXRWYWx1ZSIsInZhbHVlU3RhdGUiLCJnZXRTdGF0ZSIsInZhbCIsInRvVXBwZXJDYXNlIiwiaW5pdGlhbFN0YXRlIiwic2V0SCIsInNldFMiLCJzZXRCIiwic2V0SW5wdXRWYWx1ZSIsInNldFZhbHVlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJzdGFuZGFyZENvbGxhcHNlZCIsInNldFN0YW5kYXJkQ29sbGFwc2VkIiwiY3VzdG9tQ29sbGFwc2VkIiwic2V0Q3VzdG9tQ29sbGFwc2VkIiwiaW5wdXRSZWYiLCJwb3B1cElucHV0UmVmIiwidHJpZ2dlclJlZiIsInNpemVDb250ZXh0IiwicGFsZXR0ZVJlY3QiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3NTZXQiLCJjYWxsQ2hhbmdlIiwiaGFuZGxlUHJlZml4Q2xpY2siLCJjdXJyZW50IiwiaW5wdXQiLCJmb2N1cyIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJib29sIiwic2V0VGltZW91dCIsImhhbmRsZUlucHV0Qmx1ciIsInR5cGUiLCJoYW5kbGVJbnB1dEZvY3VzIiwidGFyZ2V0Iiwic2VsZWN0IiwiaGFuZGxlVmFsdWVDaGFuZ2UiLCJuZXdIIiwibmV3UyIsIm5ld0IiLCJoYW5kbGVJbnB1dENoYW5nZSIsImlucHV0VmFsIiwic3BsaXQiLCJqb2luIiwiaGFuZGxlQ3VzdG9tQ2hhbmdlIiwibmV3VmFsdWUiLCJoYW5kbGVQYWxldHRlTW91c2VNb3ZlIiwiZSIsInBhZ2VYIiwid2luZG93Iiwic2Nyb2xsWCIsInBhZ2VZIiwic2Nyb2xsWSIsIm5ld0NvbG9yIiwiaGFuZGxlUGFsZXR0ZU1vdXNlVXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlUGFsZXR0ZU1vdXNlRG93biIsImN1cnJlbnRUYXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29sbGFwc2VDaGFuZ2UiLCJyZW5kZXJJbnB1dCIsInVwcGVyY2FzZSIsInBvcHVwSW5wdXQiLCJ0cmlnZ2VyIiwiYmFja2dyb3VuZCIsImxlbmd0aCIsIlNldCIsInNsaWNlIiwibWFwIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYXJhbSIsIkFycmF5IiwiaXNBcnJheSIsImJhY2tncm91bmRJbWFnZSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsIm9iamVjdCIsImFycmF5Iiwib25lT2YiLCJkZWZhdWx0UHJv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QixRQUFsQixFQUE0QixPQUE1QixDQUFoQixDQXpDZ0I7QUE2Q3RCbkcsRUFBQUEsa0JBQWtCLEVBQUUvQixTQUFTLENBQUM2RSxJQTdDUjtBQWlEdEI1QyxFQUFBQSxLQUFLLEVBQUVqQyxTQUFTLENBQUM4SDtBQWpESyxDQUF4QjtBQW9EQTVHLFdBQVcsQ0FBQ2lILFlBQVosR0FBMkI7QUFDekIvRyxFQUFBQSxTQUFTLEVBQUVnSCxTQURjO0FBRXpCL0csRUFBQUEsWUFBWSxFQUFFLElBRlc7QUFHekJDLEVBQUFBLFFBQVEsRUFBRSxLQUhlO0FBSXpCQyxFQUFBQSxZQUFZLEVBQUUsSUFKVztBQUt6QkMsRUFBQUEsUUFBUSxFQUFFNEcsU0FMZTtBQU16QjNHLEVBQUFBLGNBQWMsRUFBRTJHLFNBTlM7QUFPekIxRyxFQUFBQSxZQUFZLEVBQUUsRUFQVztBQVF6QkMsRUFBQUEsa0JBQWtCLEVBQUUsSUFSSztBQVN6QkMsRUFBQUEsWUFBWSxFQUFFLEVBVFc7QUFVekJFLEVBQUFBLElBQUksRUFBRSxPQVZtQjtBQVd6QkMsRUFBQUEsa0JBQWtCLEVBQUUsS0FYSztBQVl6QkUsRUFBQUEsS0FBSyxFQUFFO0FBWmtCLENBQTNCO0FBZUEsZUFBZWYsV0FBZiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VDb250ZXh0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VNZW1vLFxuICB1c2VTdGF0ZSxcbiAgdXNlUmVmLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBjb2xvcjJoc2IsIGhzYjJoZXggfSBmcm9tIFwiLi4vX3V0aWwvY29sb3JcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b25cIlxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dFwiXG5pbXBvcnQgUG9wb3ZlciwgeyBJUG9wb3ZlclByb3BzIH0gZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi4vc2xpZGVyXCJcbmltcG9ydCB7XG4gIGlzTGVnYWxIZXhTdHJpbmcsXG4gIGFkZEhhc2hUYWcsXG4gIHJlbW92ZUhhc2hUYWcsXG4gIFNUQU5EQVJEUyxcbiAgU1RBTkRBUkRTX1RSQU5TUEFSRU5ULFxuICBUUkFOU1BBUkVOVF9CRyxcbn0gZnJvbSBcIi4vY29yZVwiXG5pbXBvcnQgQ29sb3JQaWNrZXJDb2xsYXBzZSBmcm9tIFwiLi9Db2xvclBpY2tlckNvbGxhcHNlXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktY3BcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElDb2xvclBpY2tlclByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6buY6K6k55qE5Yid5aeL5YC8IC0g5YaF6YOo6amx5YqoXG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBzdHJpbmcgfCBudWxsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog6L6T5YWl5qGG5piv5ZCm5pi+56S6XG4gICAqL1xuICBpbnB1dFZpc2libGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlgLzmlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICAvKipcbiAgICog5ZyoIHZpc2libGUg5Y+Y5Li6IGZhbHNl77yM5Lul5Y+KIElucHV0IGJsdXIg5pe26Kem5Y+R55qEIGhhbmRsZXLvvJtcbiAgICog6L+Z5LiqIGhhbmRsZXIg6Z2e5bi454m55q6K77yM5Li65LqG6YWN5ZCI54m55q6K55qEIHJlY2VudENvbG9ycyBQcm9wIOS9v+eUqO+8jOivt+WcqOi/meS4quS6i+S7tuinpuWPkeeahOaXtuWAmeiuvue9riByZWNlbnRDb2xvcnPjgIJcbiAgICovXG4gIG9uRmluaXNoQ2hhbmdlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgLyoqXG4gICAqIOS8oOWFpSBQb3BvdmVyIOeahCBwcm9wc1xuICAgKi9cbiAgcG9wb3ZlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICAvKipcbiAgICog5by55Ye65qGG5YaF55qE57uT5p6c5Yy65Z+f5piv5ZCm5pi+56S6XG4gICAqL1xuICBwb3B1cFJlc3VsdFZpc2libGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmnIDov5Hkvb/nlKjnmoTpopzoibLvvIzmraTlip/og73pnZ7luLjnibnmrorvvIzpnIDphY3lkIggb25GaW5pc2hDaGFuZ2Ug5L2/55SoXG4gICAqL1xuICByZWNlbnRDb2xvcnM/OiBzdHJpbmdbXVxuICAvKipcbiAgICog5bC65a+45aSn5bCPXG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDlvIDlkK/pgI/mmI7oibJcbiAgICovXG4gIHRyYW5zcGFyZW50RW5hYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWAvCAtIOWklumDqOaOp+WItlxuICAgKi9cbiAgdmFsdWU/OiBzdHJpbmcgfCBudWxsXG59XG5cbi8qKlxuICog6aKc6Imy6YCJ5oup5ZmoXG4gKi9cbmNvbnN0IENvbG9yUGlja2VyOiBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICBJQ29sb3JQaWNrZXJQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55PlxuPiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlucHV0VmlzaWJsZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgb25GaW5pc2hDaGFuZ2UsXG4gICAgICBwb3BvdmVyUHJvcHMsXG4gICAgICBwb3B1cFJlc3VsdFZpc2libGUsXG4gICAgICByZWNlbnRDb2xvcnMsXG4gICAgICBzaXplOiBzaXplUHJvcCxcbiAgICAgIHRyYW5zcGFyZW50RW5hYmxlZCxcbiAgICAgIHZhbHVlOiB2YWx1ZVByb3AsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSUNvbG9yUGlja2VyUHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGxldCBwcmV2VmFsdWUgPSBcIlwiXG5cbiAgICBjb25zdCBnZXRJbml0aWFsU3RhdGUgPSAoKSA9PiB7XG4gICAgICBsZXQgaCA9IDBcbiAgICAgIGxldCBzID0gMFxuICAgICAgbGV0IGIgPSAwXG4gICAgICBsZXQgaW5wdXRWYWx1ZSA9IFwiXCJcbiAgICAgIGxldCB2YWx1ZVN0YXRlID0gXCJcIlxuICAgICAgY29uc3QgZ2V0U3RhdGUgPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgO1toLCBzLCBiXSA9IGNvbG9yMmhzYih2YWwpXG4gICAgICAgIGlmICh2YWwgPT09IFwidHJhbnNwYXJlbnRcIikge1xuICAgICAgICAgIHZhbHVlU3RhdGUgPSB2YWxcbiAgICAgICAgICBpbnB1dFZhbHVlID0gXCJcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlU3RhdGUgPSB2YWwudG9VcHBlckNhc2UoKVxuICAgICAgICAgIGlucHV0VmFsdWUgPSByZW1vdmVIYXNoVGFnKHZhbC50b1VwcGVyQ2FzZSgpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHZhbHVlUHJvcCAmJlxuICAgICAgICAoaXNMZWdhbEhleFN0cmluZyhyZW1vdmVIYXNoVGFnKHZhbHVlUHJvcCkpIHx8XG4gICAgICAgICAgKHRyYW5zcGFyZW50RW5hYmxlZCAmJiB2YWx1ZVByb3AgPT09IFwidHJhbnNwYXJlbnRcIikpXG4gICAgICApIHtcbiAgICAgICAgZ2V0U3RhdGUodmFsdWVQcm9wKVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZGVmYXVsdFZhbHVlICYmXG4gICAgICAgIChpc0xlZ2FsSGV4U3RyaW5nKHJlbW92ZUhhc2hUYWcoZGVmYXVsdFZhbHVlKSkgfHxcbiAgICAgICAgICAodHJhbnNwYXJlbnRFbmFibGVkICYmIGRlZmF1bHRWYWx1ZSA9PT0gXCJ0cmFuc3BhcmVudFwiKSlcbiAgICAgICkge1xuICAgICAgICBnZXRTdGF0ZShkZWZhdWx0VmFsdWUpXG4gICAgICB9XG5cbiAgICAgIHByZXZWYWx1ZSA9IHZhbHVlU3RhdGVcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaCxcbiAgICAgICAgczogcyAqIDEwMCxcbiAgICAgICAgYjogYiAqIDEwMCxcbiAgICAgICAgaW5wdXRWYWx1ZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlU3RhdGUsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdXNlTWVtbyhnZXRJbml0aWFsU3RhdGUsIFtdKVxuXG4gICAgY29uc3QgW2gsIHNldEhdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlLmgpXG4gICAgY29uc3QgW3MsIHNldFNdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlLnMpXG4gICAgY29uc3QgW2IsIHNldEJdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlLmIpXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlLmlucHV0VmFsdWUpXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUudmFsdWUpXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3N0YW5kYXJkQ29sbGFwc2VkLCBzZXRTdGFuZGFyZENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbY3VzdG9tQ29sbGFwc2VkLCBzZXRDdXN0b21Db2xsYXBzZWRdID0gdXNlU3RhdGUodHJ1ZSlcblxuICAgIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICBpZiAoXG4gICAgICB2YWx1ZVByb3AgJiZcbiAgICAgIGlzTGVnYWxIZXhTdHJpbmcocmVtb3ZlSGFzaFRhZyh2YWx1ZVByb3ApKSAmJlxuICAgICAgdmFsdWVQcm9wLnRvVXBwZXJDYXNlKCkgIT09IHZhbHVlXG4gICAgKSB7XG4gICAgICBzZXRIKGNvbG9yMmhzYih2YWx1ZVByb3ApWzBdKVxuICAgICAgc2V0Uyhjb2xvcjJoc2IodmFsdWVQcm9wKVsxXSAqIDEwMClcbiAgICAgIHNldEIoY29sb3IyaHNiKHZhbHVlUHJvcClbMl0gKiAxMDApXG4gICAgICBzZXRJbnB1dFZhbHVlKHJlbW92ZUhhc2hUYWcodmFsdWVQcm9wLnRvVXBwZXJDYXNlKCkpKVxuICAgICAgc2V0VmFsdWUodmFsdWVQcm9wLnRvVXBwZXJDYXNlKCkpXG4gICAgfSBlbHNlIGlmICh2YWx1ZVByb3AgPT09IFwiXCIgJiYgdmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIHNldEgoMClcbiAgICAgIHNldFMoMClcbiAgICAgIHNldEIoMClcbiAgICAgIHNldElucHV0VmFsdWUoXCJcIilcbiAgICAgIHNldFZhbHVlKFwiXCIpXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRyYW5zcGFyZW50RW5hYmxlZCAmJlxuICAgICAgdmFsdWVQcm9wID09PSBcInRyYW5zcGFyZW50XCIgJiZcbiAgICAgIHZhbHVlICE9PSBcInRyYW5zcGFyZW50XCJcbiAgICApIHtcbiAgICAgIHNldEgoMClcbiAgICAgIHNldFMoMClcbiAgICAgIHNldEIoMClcbiAgICAgIHNldElucHV0VmFsdWUoXCJcIilcbiAgICAgIHNldFZhbHVlKFwidHJhbnNwYXJlbnRcIilcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG4gICAgY29uc3QgcG9wdXBJbnB1dFJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG4gICAgY29uc3QgdHJpZ2dlclJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG5cbiAgICBjb25zdCB7IHNpemU6IHNpemVDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG4gICAgY29uc3Qgc2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplUHJvcCwgc2l6ZUNvbnRleHQpXG5cbiAgICBsZXQgcGFsZXR0ZVJlY3Q6IE9taXQ8RE9NUmVjdCwgXCJ0b0pTT05cIj4gPSB7XG4gICAgICB0b3A6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIHdpZHRoOiAxNjAsXG4gICAgICBoZWlnaHQ6IDkwLFxuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH1gLCBgJHtwcmVmaXh9LSR7c2l6ZX1gKVxuXG4gICAgY29uc3QgY2FsbENoYW5nZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQcmVmaXhDbGljayA9ICgpID0+IHtcbiAgICAgIGlmICh2aXNpYmxlICYmIHBvcHVwSW5wdXRSZWYuY3VycmVudD8uaW5wdXQpIHtcbiAgICAgICAgcG9wdXBJbnB1dFJlZi5jdXJyZW50LmlucHV0LmZvY3VzKClcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXRSZWYuY3VycmVudD8uaW5wdXQpIHtcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5pbnB1dC5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVmlzaWJsZUNoYW5nZSA9IChib29sOiBib29sZWFuKSA9PiB7XG4gICAgICBzZXRWaXNpYmxlKGJvb2wpXG4gICAgICBpZiAoYm9vbCkge1xuICAgICAgICBwcmV2VmFsdWUgPSB2YWx1ZVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gcHJldlZhbHVlKSB7XG4gICAgICAgIHByZXZWYWx1ZSA9IHZhbHVlXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKG9uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgICAgICBvbkZpbmlzaENoYW5nZSh2YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dEJsdXIgPSAodHlwZT86IFwicG9wdXBcIikgPT4ge1xuICAgICAgaWYgKHRyYW5zcGFyZW50RW5hYmxlZCkge1xuICAgICAgICBpZiAoaW5wdXRWYWx1ZSAhPT0gXCJcIiAmJiB2YWx1ZSA9PT0gXCJ0cmFuc3BhcmVudFwiKSB7XG4gICAgICAgICAgc2V0SW5wdXRWYWx1ZShcIlwiKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFkZEhhc2hUYWcoaW5wdXRWYWx1ZSkgIT09IHZhbHVlKSB7XG4gICAgICAgIHNldElucHV0VmFsdWUocmVtb3ZlSGFzaFRhZyh2YWx1ZSkpXG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgIT09IHByZXZWYWx1ZSAmJiAhdHlwZSAmJiBvbkZpbmlzaENoYW5nZSkge1xuICAgICAgICBvbkZpbmlzaENoYW5nZSh2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dEZvY3VzID0gKHtcbiAgICAgIHRhcmdldCxcbiAgICB9OiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICB0YXJnZXQuc2VsZWN0KClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVWYWx1ZUNoYW5nZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICBpZiAodmFsLnRvVXBwZXJDYXNlKCkgPT09IFwiVFJBTlNQQVJFTlRcIikge1xuICAgICAgICAgIHNldElucHV0VmFsdWUoXCJcIilcbiAgICAgICAgICBzZXRWYWx1ZShcInRyYW5zcGFyZW50XCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgW25ld0gsIG5ld1MsIG5ld0JdID0gY29sb3IyaHNiKHZhbClcbiAgICAgICAgICBzZXRIKG5ld0gpXG4gICAgICAgICAgc2V0UyhuZXdTICogMTAwKVxuICAgICAgICAgIHNldEIobmV3QiAqIDEwMClcbiAgICAgICAgICBzZXRJbnB1dFZhbHVlKHJlbW92ZUhhc2hUYWcodmFsKSlcbiAgICAgICAgICBzZXRWYWx1ZSh2YWwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhbGxDaGFuZ2UodmFsID09PSBcIlRSQU5TUEFSRU5UXCIgPyBcInRyYW5zcGFyZW50XCIgOiB2YWwpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoe1xuICAgICAgdGFyZ2V0OiB7IHZhbHVlOiB2YWwgfSxcbiAgICB9OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3QgaW5wdXRWYWwgPSB2YWwuc3BsaXQoXCIjXCIpLmpvaW4oXCJcIilcbiAgICAgIHNldElucHV0VmFsdWUoaW5wdXRWYWwpXG4gICAgICBpZiAoaXNMZWdhbEhleFN0cmluZyhpbnB1dFZhbCkpIHtcbiAgICAgICAgaGFuZGxlVmFsdWVDaGFuZ2UoYWRkSGFzaFRhZyhpbnB1dFZhbCkpXG4gICAgICB9IGVsc2UgaWYgKHRyYW5zcGFyZW50RW5hYmxlZCAmJiBpbnB1dFZhbCA9PT0gXCJcIikge1xuICAgICAgICBoYW5kbGVWYWx1ZUNoYW5nZShcInRyYW5zcGFyZW50XCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ3VzdG9tQ2hhbmdlID0gKHR5cGU6IFwiaFwiIHwgXCJzXCIgfCBcImJcIiwgdmFsOiBudW1iZXIpID0+IHtcbiAgICAgIGxldCBuZXdWYWx1ZTogc3RyaW5nXG4gICAgICBpZiAodHlwZSA9PT0gXCJoXCIpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBoc2IyaGV4KHZhbCwgcyAvIDEwMCwgYiAvIDEwMClcbiAgICAgICAgc2V0SCh2YWwpXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwic1wiKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gaHNiMmhleChoLCB2YWwgLyAxMDAsIGIgLyAxMDApXG4gICAgICAgIHNldFModmFsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWUgPSBoc2IyaGV4KGgsIHMgLyAxMDAsIHZhbCAvIDEwMClcbiAgICAgICAgc2V0Qih2YWwpXG4gICAgICB9XG5cbiAgICAgIHNldElucHV0VmFsdWUocmVtb3ZlSGFzaFRhZyhuZXdWYWx1ZSkpXG4gICAgICBzZXRWYWx1ZShuZXdWYWx1ZSlcblxuICAgICAgY2FsbENoYW5nZShuZXdWYWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQYWxldHRlTW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0IH0gPSBwYWxldHRlUmVjdFxuXG4gICAgICBsZXQgbmV3UyA9IChlLnBhZ2VYIC0gbGVmdCAtIHdpbmRvdy5zY3JvbGxYKSAvIHdpZHRoXG4gICAgICBsZXQgbmV3QiA9IChlLnBhZ2VZIC0gdG9wIC0gd2luZG93LnNjcm9sbFkpIC8gaGVpZ2h0XG5cbiAgICAgIGlmIChuZXdTIDwgMCkge1xuICAgICAgICBuZXdTID0gMFxuICAgICAgfSBlbHNlIGlmIChuZXdTID4gMSkge1xuICAgICAgICBuZXdTID0gMVxuICAgICAgfVxuXG4gICAgICBpZiAobmV3QiA8IDApIHtcbiAgICAgICAgbmV3QiA9IDBcbiAgICAgIH0gZWxzZSBpZiAobmV3QiA+IDEpIHtcbiAgICAgICAgbmV3QiA9IDFcbiAgICAgIH1cblxuICAgICAgbmV3UyAqPSAxMDBcbiAgICAgIG5ld0IgPSAxMDAgLSBuZXdCICogMTAwXG5cbiAgICAgIGNvbnN0IG5ld0NvbG9yID0gaHNiMmhleChoLCBuZXdTIC8gMTAwLCBuZXdCIC8gMTAwKVxuXG4gICAgICBzZXRTKG5ld1MpXG4gICAgICBzZXRCKG5ld0IpXG4gICAgICBzZXRWYWx1ZShuZXdDb2xvcilcbiAgICAgIHNldElucHV0VmFsdWUocmVtb3ZlSGFzaFRhZyhuZXdDb2xvcikpXG5cbiAgICAgIGNhbGxDaGFuZ2UobmV3Q29sb3IpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGFsZXR0ZU1vdXNlVXAgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVQYWxldHRlTW91c2VNb3ZlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZVBhbGV0dGVNb3VzZVVwKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBhbGV0dGVNb3VzZURvd24gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IHsgY3VycmVudFRhcmdldCB9ID0gZVxuICAgICAgcGFsZXR0ZVJlY3QgPSBjdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBjb25zdCB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCB9ID0gcGFsZXR0ZVJlY3RcblxuICAgICAgY29uc3QgbmV3UyA9ICgoZS5wYWdlWCAtIGxlZnQgLSB3aW5kb3cuc2Nyb2xsWCkgLyB3aWR0aCkgKiAxMDBcbiAgICAgIGNvbnN0IG5ld0IgPSAxMDAgLSAoKGUucGFnZVkgLSB0b3AgLSB3aW5kb3cuc2Nyb2xsWSkgLyBoZWlnaHQpICogMTAwXG5cbiAgICAgIGNvbnN0IG5ld0NvbG9yID0gaHNiMmhleChoLCBuZXdTIC8gMTAwLCBuZXdCIC8gMTAwKVxuXG4gICAgICBzZXRTKG5ld1MpXG4gICAgICBzZXRCKG5ld0IpXG4gICAgICBzZXRWYWx1ZShuZXdDb2xvcilcbiAgICAgIHNldElucHV0VmFsdWUocmVtb3ZlSGFzaFRhZyhuZXdDb2xvcikpXG5cbiAgICAgIGNhbGxDaGFuZ2UobmV3Q29sb3IpXG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZVBhbGV0dGVNb3VzZU1vdmUpXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlUGFsZXR0ZU1vdXNlVXApXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ29sbGFwc2VDaGFuZ2UgPSAoXG4gICAgICBib29sOiBib29sZWFuLFxuICAgICAgdHlwZTogXCJzdGFuZGFyZFwiIHwgXCJjdXN0b21cIlxuICAgICkgPT4ge1xuICAgICAgaWYgKHR5cGUgPT09IFwic3RhbmRhcmRcIikge1xuICAgICAgICBzZXRTdGFuZGFyZENvbGxhcHNlZChib29sKVxuICAgICAgICBpZiAoIWJvb2wgJiYgIWN1c3RvbUNvbGxhcHNlZCkge1xuICAgICAgICAgIHNldEN1c3RvbUNvbGxhcHNlZCh0cnVlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY3VzdG9tXCIpIHtcbiAgICAgICAgc2V0Q3VzdG9tQ29sbGFwc2VkKGJvb2wpXG4gICAgICAgIGlmICghYm9vbCAmJiAhc3RhbmRhcmRDb2xsYXBzZWQpIHtcbiAgICAgICAgICBzZXRTdGFuZGFyZENvbGxhcHNlZCh0cnVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVySW5wdXQgPSAodHlwZT86IFwicG9wdXBcIikgPT4gKFxuICAgICAgPElucHV0XG4gICAgICAgIHJlZj17dHlwZSA/IHBvcHVwSW5wdXRSZWYgOiBpbnB1dFJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWlucHV0YH1cbiAgICAgICAgY2xlYXZlT3B0aW9ucz17eyB1cHBlcmNhc2U6IHRydWUgfX1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBsZWZ0RWxlbWVudD17XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJlZml4Q2xpY2t9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcHJlZml4YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAjXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgb25CbHVyPXsoKSA9PiBoYW5kbGVJbnB1dEJsdXIodHlwZSl9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgb25Gb2N1cz17aGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICBzaXplPXt0eXBlID8gXCJzbWFsbFwiIDogc2l6ZX1cbiAgICAgICAgdGhlbWU9e3R5cGUgJiYgXCJsaWdodFwifVxuICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgIC8+XG4gICAgKVxuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICBpbnB1dDogaW5wdXRSZWYuY3VycmVudCxcbiAgICAgIHBvcHVwSW5wdXQ6IHBvcHVwSW5wdXRSZWYuY3VycmVudCxcbiAgICAgIHRyaWdnZXI6IHRyaWdnZXJSZWYuY3VycmVudCxcbiAgICB9KSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgIGRhdGEtdmFsdWU9e3ZhbHVlfVxuICAgICAgICBkYXRhLWg9e2ggfHwgMH1cbiAgICAgICAgZGF0YS1zPXtzIHx8IDB9XG4gICAgICAgIGRhdGEtYj17YiB8fCAwfVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICBhbGlnbkVkZ2U9e2ZhbHNlfVxuICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbUxlZnRcIlxuICAgICAgICAgIHBvcHVwPXtcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcHVwYH0+XG4gICAgICAgICAgICAgIHtwb3B1cFJlc3VsdFZpc2libGUgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcHVwLXJlc3VsdGB9PlxuICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPT09IFwidHJhbnNwYXJlbnRcIiA/IFRSQU5TUEFSRU5UX0JHIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3JlbmRlcklucHV0KFwicG9wdXBcIil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtyZWNlbnRDb2xvcnMgJiYgISFyZWNlbnRDb2xvcnMubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJDb2xsYXBzZVxuICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbGxhcHNlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICBoZWFkZXI9XCLmnIDov5Hkvb/nlKhcIlxuICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXJlY2VudGB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtbLi4ubmV3IFNldChyZWNlbnRDb2xvcnMuc2xpY2UoMCwgNykpXS5tYXAoKGNvbG9yKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVZhbHVlQ2hhbmdlKGNvbG9yLnRvVXBwZXJDYXNlKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9PT0gXCJ0cmFuc3BhcmVudFwiID8gVFJBTlNQQVJFTlRfQkcgOiBjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgPENvbG9yUGlja2VyQ29sbGFwc2VcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ9e3N0YW5kYXJkQ29sbGFwc2VkfVxuICAgICAgICAgICAgICAgIG9uQ29sbGFwc2VDaGFuZ2U9eyhib29sKSA9PlxuICAgICAgICAgICAgICAgICAgaGFuZGxlQ29sbGFwc2VDaGFuZ2UoYm9vbCwgXCJzdGFuZGFyZFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWFkZXI9XCLmoIflh4boibLmnb9cIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc3RhbmRhcmRgfT5cbiAgICAgICAgICAgICAgICAgICAgeyh0cmFuc3BhcmVudEVuYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IFNUQU5EQVJEU19UUkFOU1BBUkVOVFxuICAgICAgICAgICAgICAgICAgICAgIDogU1RBTkRBUkRTXG4gICAgICAgICAgICAgICAgICAgICkubWFwKChjb2xvcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVmFsdWVDaGFuZ2UoY29sb3IpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPT09IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtwcmVmaXh9LXN0YW5kYXJkLWl0ZW1fc2VsZWN0ZWRgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID09PSBcIlRSQU5TUEFSRU5UXCIgPyBUUkFOU1BBUkVOVF9CRyA6IGNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENvbG9yUGlja2VyQ29sbGFwc2VcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ9e2N1c3RvbUNvbGxhcHNlZH1cbiAgICAgICAgICAgICAgICBvbkNvbGxhcHNlQ2hhbmdlPXsoYm9vbCkgPT5cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNvbGxhcHNlQ2hhbmdlKGJvb2wsIFwiY3VzdG9tXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIuiHquWumuS5iVwiXG4gICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jdXN0b21gfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1wYWxldHRlYH1cbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBgaHNsKCR7aH0sIDEwMCUsIDUwJSlgIH19XG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2hhbmRsZVBhbGV0dGVNb3VzZURvd259XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wYWxldHRlLXNgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBhbGV0dGUtYmB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbHVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBgY2FsYygke2J9JSAtIDdweClgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGBjYWxjKCR7c30lIC0gN3B4KWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNsaWRlci13cmFwcGVyYH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNsaWRlci1sYWJlbGB9Pkg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNsaWRlciAke3ByZWZpeH0tc2xpZGVyX2hgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWaXNpYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MzU5fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2h9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHBhcmFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbSAmJiAhQXJyYXkuaXNBcnJheShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDdXN0b21DaGFuZ2UoXCJoXCIsIHBhcmFtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1zbGlkZXItd3JhcHBlcmB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4fS1zbGlkZXItbGFiZWxgfT5TPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1zbGlkZXIgJHtwcmVmaXh9LXNsaWRlcl9zYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmlzaWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhwYXJhbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW0gJiYgIUFycmF5LmlzQXJyYXkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ3VzdG9tQ2hhbmdlKFwic1wiLCBwYXJhbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJhaWxTdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmYgMCUsIHRyYW5zcGFyZW50IDEwMCUpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgaHNsKCR7aH0sIDEwMCUsIDUwJSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2xpZGVyLXdyYXBwZXJgfT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2xpZGVyLWxhYmVsYH0+Qjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2xpZGVyICR7cHJlZml4fS1zbGlkZXJfYmB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZpc2libGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Yn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsocGFyYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtICYmICFBcnJheS5pc0FycmF5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUN1c3RvbUNoYW5nZShcImJcIiwgcGFyYW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICByYWlsU3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDAwIDAlLCB0cmFuc3BhcmVudCAxMDAlKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYGhzbCgke2h9LCAxMDAlLCA1MCUpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVmPXt0cmlnZ2VyUmVmfVxuICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiXG4gICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgICBvblZpc2libGVDaGFuZ2U9e2hhbmRsZVZpc2libGVDaGFuZ2V9XG4gICAgICAgICAgey4uLnBvcG92ZXJQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1waWNrZXJgfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhbHVlID09PSBcInRyYW5zcGFyZW50XCIgPyBUUkFOU1BBUkVOVF9CRyA6IHZhbHVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICB7aW5wdXRWaXNpYmxlICYmIHJlbmRlcklucHV0KCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbilcblxuQ29sb3JQaWNrZXIuZGlzcGxheU5hbWUgPSBcIkNvbG9yUGlja2VyXCJcblxuQ29sb3JQaWNrZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDpu5jorqTnmoTliJ3lp4vlgLwgLSDlhoXpg6jpqbHliqhcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6L6T5YWl5qGG5piv5ZCm5pi+56S6XG4gICAqL1xuICBpbnB1dFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5YC85pS55Y+Y5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOWcqCB2aXNpYmxlIOWPmOS4uiBmYWxzZe+8jOS7peWPiiBJbnB1dCBibHVyIOaXtuinpuWPkeeahCBoYW5kbGVy77ybXG4gICAqIOi/meS4qiBoYW5kbGVyIOmdnuW4uOeJueauiu+8jOS4uuS6humFjeWQiOeJueauiueahCByZWNlbnRDb2xvcnMgUHJvcCDkvb/nlKjvvIzor7flnKjov5nkuKrkuovku7bop6blj5HnmoTml7blgJnorr7nva4gcmVjZW50Q29sb3Jz44CCXG4gICAqL1xuICBvbkZpbmlzaENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDkvKDlhaUgUG9wb3ZlciDnmoQgcHJvcHNcbiAgICovXG4gIHBvcG92ZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOW8ueWHuuahhuWGheeahOe7k+aenOWMuuWfn+aYr+WQpuaYvuekulxuICAgKi9cbiAgcG9wdXBSZXN1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOacgOi/keS9v+eUqOeahOminOiJsu+8jOatpOWKn+iDvemdnuW4uOeJueauiu+8jOmcgOmFjeWQiCBvbkZpbmlzaENoYW5nZSDkvb/nlKhcbiAgICovXG4gIHJlY2VudENvbG9yczogUHJvcFR5cGVzLmFycmF5LFxuICAvKipcbiAgICog5bC65a+45aSn5bCPXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog5byA5ZCv6YCP5piO6ImyXG4gICAqL1xuICB0cmFuc3BhcmVudEVuYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5YC8IC0g5aSW6YOo5o6n5Yi2XG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuQ29sb3JQaWNrZXIuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGlucHV0VmlzaWJsZTogdHJ1ZSxcbiAgb25DaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25GaW5pc2hDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgcG9wb3ZlclByb3BzOiB7fSxcbiAgcG9wdXBSZXN1bHRWaXNpYmxlOiB0cnVlLFxuICByZWNlbnRDb2xvcnM6IFtdLFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHRyYW5zcGFyZW50RW5hYmxlZDogZmFsc2UsXG4gIHZhbHVlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xvclBpY2tlclxuIl19