"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _color = require("../_util/color");

var _configProvider = require("../config-provider");

var _button = _interopRequireDefault(require("../button"));

var _input = _interopRequireDefault(require("../input"));

var _popover = _interopRequireDefault(require("../popover"));

var _slider = _interopRequireDefault(require("../slider"));

var _core = require("./core");

var _ColorPickerCollapse = _interopRequireDefault(require("./ColorPickerCollapse"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-cp";
var ColorPicker = (0, _react.forwardRef)(function (_ref, ref) {
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

      var _color2hsb = (0, _color.color2hsb)(val);

      var _color2hsb2 = _slicedToArray(_color2hsb, 3);

      h = _color2hsb2[0];
      s = _color2hsb2[1];
      b = _color2hsb2[2];

      if (val === "transparent") {
        valueState = val;
        inputValue = "";
      } else {
        valueState = val.toUpperCase();
        inputValue = (0, _core.removeHashTag)(val.toUpperCase());
      }
    };

    if (valueProp && ((0, _core.isLegalHexString)((0, _core.removeHashTag)(valueProp)) || transparentEnabled && valueProp === "transparent")) {
      getState(valueProp);
    } else if (defaultValue && ((0, _core.isLegalHexString)((0, _core.removeHashTag)(defaultValue)) || transparentEnabled && defaultValue === "transparent")) {
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

  var initialState = (0, _react.useMemo)(getInitialState, []);

  var _useState = (0, _react.useState)(initialState.h),
      _useState2 = _slicedToArray(_useState, 2),
      h = _useState2[0],
      setH = _useState2[1];

  var _useState3 = (0, _react.useState)(initialState.s),
      _useState4 = _slicedToArray(_useState3, 2),
      s = _useState4[0],
      setS = _useState4[1];

  var _useState5 = (0, _react.useState)(initialState.b),
      _useState6 = _slicedToArray(_useState5, 2),
      b = _useState6[0],
      setB = _useState6[1];

  var _useState7 = (0, _react.useState)(initialState.inputValue),
      _useState8 = _slicedToArray(_useState7, 2),
      inputValue = _useState8[0],
      setInputValue = _useState8[1];

  var _useState9 = (0, _react.useState)(initialState.value),
      _useState10 = _slicedToArray(_useState9, 2),
      value = _useState10[0],
      setValue = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      visible = _useState12[0],
      setVisible = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      standardCollapsed = _useState14[0],
      setStandardCollapsed = _useState14[1];

  var _useState15 = (0, _react.useState)(true),
      _useState16 = _slicedToArray(_useState15, 2),
      customCollapsed = _useState16[0],
      setCustomCollapsed = _useState16[1];

  if (valueProp && (0, _core.isLegalHexString)((0, _core.removeHashTag)(valueProp)) && valueProp.toUpperCase() !== value) {
    setH((0, _color.color2hsb)(valueProp)[0]);
    setS((0, _color.color2hsb)(valueProp)[1] * 100);
    setB((0, _color.color2hsb)(valueProp)[2] * 100);
    setInputValue((0, _core.removeHashTag)(valueProp.toUpperCase()));
    setValue(valueProp.toUpperCase());
  } else if (transparentEnabled && valueProp === "transparent" && value !== "transparent") {
    setH(0);
    setS(0);
    setB(0);
    setInputValue("");
    setValue("transparent");
  }

  var inputRef = (0, _react.useRef)(null);
  var popupInputRef = (0, _react.useRef)(null);
  var triggerRef = (0, _react.useRef)(null);

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeContext = _useContext.size;

  var size = (0, _configProvider.getComputedSize)(sizeProp, sizeContext);
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
  var classSet = (0, _classnames["default"])(className, "".concat(prefix), "".concat(prefix, "-").concat(size));

  var callChange = function callChange(val) {
    if (onChange) {
      onChange(val);
    }
  };

  var handlePrefixClick = function handlePrefixClick() {
    var _popupInputRef$curren, _inputRef$current;

    if (visible && ((_popupInputRef$curren = popupInputRef.current) === null || _popupInputRef$curren === void 0 ? void 0 : _popupInputRef$curren.input)) {
      popupInputRef.current.input.focus();
    } else if ((_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.input) {
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
    } else if ((0, _core.addHashTag)(inputValue) !== value) {
      setInputValue((0, _core.removeHashTag)(value));
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
        var _color2hsb3 = (0, _color.color2hsb)(val),
            _color2hsb4 = _slicedToArray(_color2hsb3, 3),
            newH = _color2hsb4[0],
            newS = _color2hsb4[1],
            newB = _color2hsb4[2];

        setH(newH);
        setS(newS * 100);
        setB(newB * 100);
        setInputValue((0, _core.removeHashTag)(val));
        setValue(val);
      }
    }

    callChange(val === "TRANSPARENT" ? "transparent" : val);
  };

  var handleInputChange = function handleInputChange(_ref3) {
    var val = _ref3.target.value;
    var inputVal = val.split("#").join("");
    setInputValue(inputVal);

    if ((0, _core.isLegalHexString)(inputVal)) {
      handleValueChange((0, _core.addHashTag)(inputVal));
    } else if (transparentEnabled && inputVal === "") {
      handleValueChange("transparent");
    }
  };

  var handleCustomChange = function handleCustomChange(type, val) {
    var newValue;

    if (type === "h") {
      newValue = (0, _color.hsb2hex)(val, s / 100, b / 100);
      setH(val);
    } else if (type === "s") {
      newValue = (0, _color.hsb2hex)(h, val / 100, b / 100);
      setS(val);
    } else {
      newValue = (0, _color.hsb2hex)(h, s / 100, val / 100);
      setB(val);
    }

    setInputValue((0, _core.removeHashTag)(newValue));
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
    var newColor = (0, _color.hsb2hex)(h, newS / 100, newB / 100);
    setS(newS);
    setB(newB);
    setValue(newColor);
    setInputValue((0, _core.removeHashTag)(newColor));
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
    var newColor = (0, _color.hsb2hex)(h, newS / 100, newB / 100);
    setS(newS);
    setB(newB);
    setValue(newColor);
    setInputValue((0, _core.removeHashTag)(newColor));
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
    return _react["default"].createElement(_input["default"], {
      ref: type ? popupInputRef : inputRef,
      className: "".concat(prefix, "-input"),
      cleaveOptions: {
        uppercase: true
      },
      disabled: disabled,
      leftElement: _react["default"].createElement("div", {
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

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      input: inputRef.current,
      popupInput: popupInputRef.current,
      trigger: triggerRef.current
    };
  });
  return _react["default"].createElement("div", _extends({
    className: classSet,
    "data-value": value,
    "data-h": h || 0,
    "data-s": s || 0,
    "data-b": b || 0
  }, otherProps), _react["default"].createElement(_popover["default"], _extends({
    alignEdge: false,
    placement: "bottomLeft",
    popup: _react["default"].createElement("div", {
      className: "".concat(prefix, "-popup")
    }, popupResultVisible && _react["default"].createElement("div", {
      className: "".concat(prefix, "-popup-result")
    }, _react["default"].createElement("i", {
      style: {
        background: value === "transparent" ? _core.TRANSPARENT_BG : value
      }
    }), renderInput("popup")), recentColors && !!recentColors.length && _react["default"].createElement(_ColorPickerCollapse["default"], {
      defaultCollapsed: false,
      header: "\u6700\u8FD1\u4F7F\u7528",
      content: _react["default"].createElement("div", {
        className: "".concat(prefix, "-recent")
      }, _toConsumableArray(new Set(recentColors.slice(0, 7))).map(function (color) {
        return _react["default"].createElement("i", {
          key: color,
          role: "none",
          onClick: function onClick() {
            return handleValueChange(color.toUpperCase());
          },
          style: {
            background: color === "transparent" ? _core.TRANSPARENT_BG : color
          }
        });
      }))
    }), _react["default"].createElement(_ColorPickerCollapse["default"], {
      collapsed: standardCollapsed,
      onCollapseChange: function onCollapseChange(bool) {
        return handleCollapseChange(bool, "standard");
      },
      header: "\u6807\u51C6\u8272\u677F",
      content: _react["default"].createElement("div", {
        className: "".concat(prefix, "-standard")
      }, (transparentEnabled ? _core.STANDARDS_TRANSPARENT : _core.STANDARDS).map(function (color) {
        return _react["default"].createElement("i", {
          key: color,
          role: "none",
          onClick: function onClick() {
            return handleValueChange(color);
          },
          className: color === value ? "".concat(prefix, "-standard-item_selected") : "",
          style: {
            background: color === "TRANSPARENT" ? _core.TRANSPARENT_BG : color
          }
        });
      }))
    }), _react["default"].createElement(_ColorPickerCollapse["default"], {
      collapsed: customCollapsed,
      onCollapseChange: function onCollapseChange(bool) {
        return handleCollapseChange(bool, "custom");
      },
      header: "\u81EA\u5B9A\u4E49",
      content: _react["default"].createElement("div", {
        className: "".concat(prefix, "-custom")
      }, _react["default"].createElement("div", {
        className: "".concat(prefix, "-palette"),
        role: "none",
        style: {
          backgroundColor: "hsl(".concat(h, ", 100%, 50%)")
        },
        onMouseDown: handlePaletteMouseDown
      }, _react["default"].createElement("div", {
        className: "".concat(prefix, "-palette-s")
      }), _react["default"].createElement("div", {
        className: "".concat(prefix, "-palette-b")
      }), value && _react["default"].createElement("i", {
        style: {
          bottom: "calc(".concat(b, "% - 7px)"),
          left: "calc(".concat(s, "% - 7px)"),
          backgroundColor: value
        }
      })), _react["default"].createElement("div", {
        className: "".concat(prefix, "-slider-wrapper")
      }, _react["default"].createElement("span", {
        className: "".concat(prefix, "-slider-label")
      }, "H"), _react["default"].createElement(_slider["default"], {
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
      })), _react["default"].createElement("div", {
        className: "".concat(prefix, "-slider-wrapper")
      }, _react["default"].createElement("span", {
        className: "".concat(prefix, "-slider-label")
      }, "S"), _react["default"].createElement(_slider["default"], {
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
      })), _react["default"].createElement("div", {
        className: "".concat(prefix, "-slider-wrapper")
      }, _react["default"].createElement("span", {
        className: "".concat(prefix, "-slider-label")
      }, "B"), _react["default"].createElement(_slider["default"], {
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
  }, popoverProps), _react["default"].createElement(_button["default"], {
    className: "".concat(prefix, "-picker"),
    disabled: disabled,
    size: size
  }, _react["default"].createElement("i", {
    style: {
      background: value === "transparent" ? _core.TRANSPARENT_BG : value
    }
  }))), inputVisible && renderInput());
});
ColorPicker.displayName = "ColorPicker";
ColorPicker.propTypes = {
  className: _propTypes["default"].string,
  defaultValue: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  inputVisible: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onFinishChange: _propTypes["default"].func,
  popoverProps: _propTypes["default"].object,
  popupResultVisible: _propTypes["default"].bool,
  recentColors: _propTypes["default"].array,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  transparentEnabled: _propTypes["default"].bool,
  value: _propTypes["default"].string
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
var _default = ColorPicker;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY29sb3ItcGlja2VyL0NvbG9yUGlja2VyLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJDb2xvclBpY2tlciIsInJlZiIsImNsYXNzTmFtZSIsImRlZmF1bHRWYWx1ZSIsImRpc2FibGVkIiwiaW5wdXRWaXNpYmxlIiwib25DaGFuZ2UiLCJvbkZpbmlzaENoYW5nZSIsInBvcG92ZXJQcm9wcyIsInBvcHVwUmVzdWx0VmlzaWJsZSIsInJlY2VudENvbG9ycyIsInNpemVQcm9wIiwic2l6ZSIsInRyYW5zcGFyZW50RW5hYmxlZCIsInZhbHVlUHJvcCIsInZhbHVlIiwib3RoZXJQcm9wcyIsInByZXZWYWx1ZSIsImdldEluaXRpYWxTdGF0ZSIsImgiLCJzIiwiYiIsImlucHV0VmFsdWUiLCJ2YWx1ZVN0YXRlIiwiZ2V0U3RhdGUiLCJ2YWwiLCJ0b1VwcGVyQ2FzZSIsImluaXRpYWxTdGF0ZSIsInNldEgiLCJzZXRTIiwic2V0QiIsInNldElucHV0VmFsdWUiLCJzZXRWYWx1ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic3RhbmRhcmRDb2xsYXBzZWQiLCJzZXRTdGFuZGFyZENvbGxhcHNlZCIsImN1c3RvbUNvbGxhcHNlZCIsInNldEN1c3RvbUNvbGxhcHNlZCIsImlucHV0UmVmIiwicG9wdXBJbnB1dFJlZiIsInRyaWdnZXJSZWYiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJwYWxldHRlUmVjdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc1NldCIsImNhbGxDaGFuZ2UiLCJoYW5kbGVQcmVmaXhDbGljayIsImN1cnJlbnQiLCJpbnB1dCIsImZvY3VzIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsImJvb2wiLCJzZXRUaW1lb3V0IiwiaGFuZGxlSW5wdXRCbHVyIiwidHlwZSIsImhhbmRsZUlucHV0Rm9jdXMiLCJ0YXJnZXQiLCJzZWxlY3QiLCJoYW5kbGVWYWx1ZUNoYW5nZSIsIm5ld0giLCJuZXdTIiwibmV3QiIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaW5wdXRWYWwiLCJzcGxpdCIsImpvaW4iLCJoYW5kbGVDdXN0b21DaGFuZ2UiLCJuZXdWYWx1ZSIsImhhbmRsZVBhbGV0dGVNb3VzZU1vdmUiLCJlIiwicGFnZVgiLCJ3aW5kb3ciLCJzY3JvbGxYIiwicGFnZVkiLCJzY3JvbGxZIiwibmV3Q29sb3IiLCJoYW5kbGVQYWxldHRlTW91c2VVcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVQYWxldHRlTW91c2VEb3duIiwiY3VycmVudFRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDb2xsYXBzZUNoYW5nZSIsInJlbmRlcklucHV0IiwidXBwZXJjYXNlIiwicG9wdXBJbnB1dCIsInRyaWdnZXIiLCJiYWNrZ3JvdW5kIiwiVFJBTlNQQVJFTlRfQkciLCJsZW5ndGgiLCJTZXQiLCJzbGljZSIsIm1hcCIsImNvbG9yIiwiU1RBTkRBUkRTX1RSQU5TUEFSRU5UIiwiU1RBTkRBUkRTIiwiYmFja2dyb3VuZENvbG9yIiwicGFyYW0iLCJBcnJheSIsImlzQXJyYXkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJvYmplY3QiLCJhcnJheSIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7QUFRQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFRQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQWY7QUEwREEsSUFBTUMsV0FDcUIsR0FBRyx1QkFDNUIsZ0JBZ0JFQyxHQWhCRixFQWlCSztBQUFBLE1BZkRDLFNBZUMsUUFmREEsU0FlQztBQUFB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ekJoSCxFQUFBQSxjQUFjLEVBQUVnSCxTQU5TO0FBT3pCL0csRUFBQUEsWUFBWSxFQUFFLEVBUFc7QUFRekJDLEVBQUFBLGtCQUFrQixFQUFFLElBUks7QUFTekJDLEVBQUFBLFlBQVksRUFBRSxFQVRXO0FBVXpCRSxFQUFBQSxJQUFJLEVBQUUsT0FWbUI7QUFXekJDLEVBQUFBLGtCQUFrQixFQUFFLEtBWEs7QUFZekJFLEVBQUFBLEtBQUssRUFBRTtBQVprQixDQUEzQjtlQWVlZixXIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IFJlYWN0LCB7XG4gIGZvcndhcmRSZWYsXG4gIHVzZUNvbnRleHQsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZU1lbW8sXG4gIHVzZVN0YXRlLFxuICB1c2VSZWYsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IGNvbG9yMmhzYiwgaHNiMmhleCB9IGZyb20gXCIuLi9fdXRpbC9jb2xvclwiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2J1dHRvblwiXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2lucHV0XCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuLi9zbGlkZXJcIlxuaW1wb3J0IHtcbiAgaXNMZWdhbEhleFN0cmluZyxcbiAgYWRkSGFzaFRhZyxcbiAgcmVtb3ZlSGFzaFRhZyxcbiAgU1RBTkRBUkRTLFxuICBTVEFOREFSRFNfVFJBTlNQQVJFTlQsXG4gIFRSQU5TUEFSRU5UX0JHLFxufSBmcm9tIFwiLi9jb3JlXCJcbmltcG9ydCBDb2xvclBpY2tlckNvbGxhcHNlIGZyb20gXCIuL0NvbG9yUGlja2VyQ29sbGFwc2VcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1jcFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbG9yUGlja2VyUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDpu5jorqTnmoTliJ3lp4vlgLwgLSDlhoXpg6jpqbHliqhcbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IHN0cmluZyB8IG51bGxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDovpPlhaXmoYbmmK/lkKbmmL7npLpcbiAgICovXG4gIGlucHV0VmlzaWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWAvOaUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDlnKggdmlzaWJsZSDlj5jkuLogZmFsc2XvvIzku6Xlj4ogSW5wdXQgYmx1ciDml7bop6blj5HnmoQgaGFuZGxlcu+8m1xuICAgKiDov5nkuKogaGFuZGxlciDpnZ7luLjnibnmrorvvIzkuLrkuobphY3lkIjnibnmrornmoQgcmVjZW50Q29sb3JzIFByb3Ag5L2/55So77yM6K+35Zyo6L+Z5Liq5LqL5Lu26Kem5Y+R55qE5pe25YCZ6K6+572uIHJlY2VudENvbG9yc+OAglxuICAgKi9cbiAgb25GaW5pc2hDaGFuZ2U/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICAvKipcbiAgICog5Lyg5YWlIFBvcG92ZXIg55qEIHByb3BzXG4gICAqL1xuICBwb3BvdmVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIC8qKlxuICAgKiDlvLnlh7rmoYblhoXnmoTnu5PmnpzljLrln5/mmK/lkKbmmL7npLpcbiAgICovXG4gIHBvcHVwUmVzdWx0VmlzaWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOacgOi/keS9v+eUqOeahOminOiJsu+8jOatpOWKn+iDvemdnuW4uOeJueauiu+8jOmcgOmFjeWQiCBvbkZpbmlzaENoYW5nZSDkvb/nlKhcbiAgICovXG4gIHJlY2VudENvbG9ycz86IHN0cmluZ1tdXG4gIC8qKlxuICAgKiDlsLrlr7jlpKflsI9cbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOW8gOWQr+mAj+aYjuiJslxuICAgKi9cbiAgdHJhbnNwYXJlbnRFbmFibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog5YC8IC0g5aSW6YOo5o6n5Yi2XG4gICAqL1xuICB2YWx1ZT86IHN0cmluZyB8IG51bGxcbn1cblxuLyoqXG4gKiDpopzoibLpgInmi6nlmahcbiAqL1xuY29uc3QgQ29sb3JQaWNrZXI6IFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8SUNvbG9yUGlja2VyUHJvcHMgJlxuICBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT4+ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaW5wdXRWaXNpYmxlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbkZpbmlzaENoYW5nZSxcbiAgICAgIHBvcG92ZXJQcm9wcyxcbiAgICAgIHBvcHVwUmVzdWx0VmlzaWJsZSxcbiAgICAgIHJlY2VudENvbG9ycyxcbiAgICAgIHNpemU6IHNpemVQcm9wLFxuICAgICAgdHJhbnNwYXJlbnRFbmFibGVkLFxuICAgICAgdmFsdWU6IHZhbHVlUHJvcCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJQ29sb3JQaWNrZXJQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgbGV0IHByZXZWYWx1ZSA9IFwiXCJcblxuICAgIGNvbnN0IGdldEluaXRpYWxTdGF0ZSA9ICgpID0+IHtcbiAgICAgIGxldCBoID0gMFxuICAgICAgbGV0IHMgPSAwXG4gICAgICBsZXQgYiA9IDBcbiAgICAgIGxldCBpbnB1dFZhbHVlID0gXCJcIlxuICAgICAgbGV0IHZhbHVlU3RhdGUgPSBcIlwiXG4gICAgICBjb25zdCBnZXRTdGF0ZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgICAgICA7W2gsIHMsIGJdID0gY29sb3IyaHNiKHZhbClcbiAgICAgICAgaWYgKHZhbCA9PT0gXCJ0cmFuc3BhcmVudFwiKSB7XG4gICAgICAgICAgdmFsdWVTdGF0ZSA9IHZhbFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBcIlwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWVTdGF0ZSA9IHZhbC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IHJlbW92ZUhhc2hUYWcodmFsLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgdmFsdWVQcm9wICYmXG4gICAgICAgIChpc0xlZ2FsSGV4U3RyaW5nKHJlbW92ZUhhc2hUYWcodmFsdWVQcm9wKSkgfHxcbiAgICAgICAgICAodHJhbnNwYXJlbnRFbmFibGVkICYmIHZhbHVlUHJvcCA9PT0gXCJ0cmFuc3BhcmVudFwiKSlcbiAgICAgICkge1xuICAgICAgICBnZXRTdGF0ZSh2YWx1ZVByb3ApXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkZWZhdWx0VmFsdWUgJiZcbiAgICAgICAgKGlzTGVnYWxIZXhTdHJpbmcocmVtb3ZlSGFzaFRhZyhkZWZhdWx0VmFsdWUpKSB8fFxuICAgICAgICAgICh0cmFuc3BhcmVudEVuYWJsZWQgJiYgZGVmYXVsdFZhbHVlID09PSBcInRyYW5zcGFyZW50XCIpKVxuICAgICAgKSB7XG4gICAgICAgIGdldFN0YXRlKGRlZmF1bHRWYWx1ZSlcbiAgICAgIH1cblxuICAgICAgcHJldlZhbHVlID0gdmFsdWVTdGF0ZVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBoLFxuICAgICAgICBzOiBzICogMTAwLFxuICAgICAgICBiOiBiICogMTAwLFxuICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICB2YWx1ZTogdmFsdWVTdGF0ZSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB1c2VNZW1vKGdldEluaXRpYWxTdGF0ZSwgW10pXG5cbiAgICBjb25zdCBbaCwgc2V0SF0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUuaClcbiAgICBjb25zdCBbcywgc2V0U10gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUucylcbiAgICBjb25zdCBbYiwgc2V0Ql0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUuYilcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUuaW5wdXRWYWx1ZSlcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZS52YWx1ZSlcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbc3RhbmRhcmRDb2xsYXBzZWQsIHNldFN0YW5kYXJkQ29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtjdXN0b21Db2xsYXBzZWQsIHNldEN1c3RvbUNvbGxhcHNlZF0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gICAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICAgIGlmIChcbiAgICAgIHZhbHVlUHJvcCAmJlxuICAgICAgaXNMZWdhbEhleFN0cmluZyhyZW1vdmVIYXNoVGFnKHZhbHVlUHJvcCkpICYmXG4gICAgICB2YWx1ZVByb3AudG9VcHBlckNhc2UoKSAhPT0gdmFsdWVcbiAgICApIHtcbiAgICAgIHNldEgoY29sb3IyaHNiKHZhbHVlUHJvcClbMF0pXG4gICAgICBzZXRTKGNvbG9yMmhzYih2YWx1ZVByb3ApWzFdICogMTAwKVxuICAgICAgc2V0Qihjb2xvcjJoc2IodmFsdWVQcm9wKVsyXSAqIDEwMClcbiAgICAgIHNldElucHV0VmFsdWUocmVtb3ZlSGFzaFRhZyh2YWx1ZVByb3AudG9VcHBlckNhc2UoKSkpXG4gICAgICBzZXRWYWx1ZSh2YWx1ZVByb3AudG9VcHBlckNhc2UoKSlcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdHJhbnNwYXJlbnRFbmFibGVkICYmXG4gICAgICB2YWx1ZVByb3AgPT09IFwidHJhbnNwYXJlbnRcIiAmJlxuICAgICAgdmFsdWUgIT09IFwidHJhbnNwYXJlbnRcIlxuICAgICkge1xuICAgICAgc2V0SCgwKVxuICAgICAgc2V0UygwKVxuICAgICAgc2V0QigwKVxuICAgICAgc2V0SW5wdXRWYWx1ZShcIlwiKVxuICAgICAgc2V0VmFsdWUoXCJ0cmFuc3BhcmVudFwiKVxuICAgIH1cblxuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPGFueT4obnVsbClcbiAgICBjb25zdCBwb3B1cElucHV0UmVmID0gdXNlUmVmPGFueT4obnVsbClcbiAgICBjb25zdCB0cmlnZ2VyUmVmID0gdXNlUmVmPGFueT4obnVsbClcblxuICAgIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcbiAgICBjb25zdCBzaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemVQcm9wLCBzaXplQ29udGV4dClcblxuICAgIGxldCBwYWxldHRlUmVjdDogT21pdDxET01SZWN0LCBcInRvSlNPTlwiPiA9IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgd2lkdGg6IDE2MCxcbiAgICAgIGhlaWdodDogOTAsXG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fWAsIGAke3ByZWZpeH0tJHtzaXplfWApXG5cbiAgICBjb25zdCBjYWxsQ2hhbmdlID0gKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UodmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVByZWZpeENsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHZpc2libGUgJiYgcG9wdXBJbnB1dFJlZi5jdXJyZW50Py5pbnB1dCkge1xuICAgICAgICBwb3B1cElucHV0UmVmLmN1cnJlbnQuaW5wdXQuZm9jdXMoKVxuICAgICAgfSBlbHNlIGlmIChpbnB1dFJlZi5jdXJyZW50Py5pbnB1dCkge1xuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmlucHV0LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVWaXNpYmxlQ2hhbmdlID0gKGJvb2w6IGJvb2xlYW4pID0+IHtcbiAgICAgIHNldFZpc2libGUoYm9vbClcbiAgICAgIGlmIChib29sKSB7XG4gICAgICAgIHByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBwcmV2VmFsdWUpIHtcbiAgICAgICAgcHJldlZhbHVlID0gdmFsdWVcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAob25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uRmluaXNoQ2hhbmdlKHZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Qmx1ciA9ICh0eXBlPzogXCJwb3B1cFwiKSA9PiB7XG4gICAgICBpZiAodHJhbnNwYXJlbnRFbmFibGVkKSB7XG4gICAgICAgIGlmIChpbnB1dFZhbHVlICE9PSBcIlwiICYmIHZhbHVlID09PSBcInRyYW5zcGFyZW50XCIpIHtcbiAgICAgICAgICBzZXRJbnB1dFZhbHVlKFwiXCIpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYWRkSGFzaFRhZyhpbnB1dFZhbHVlKSAhPT0gdmFsdWUpIHtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShyZW1vdmVIYXNoVGFnKHZhbHVlKSlcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZSAhPT0gcHJldlZhbHVlICYmICF0eXBlICYmIG9uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgIG9uRmluaXNoQ2hhbmdlKHZhbHVlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Rm9jdXMgPSAoe1xuICAgICAgdGFyZ2V0LFxuICAgIH06IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIHRhcmdldC5zZWxlY3QoKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVZhbHVlQ2hhbmdlID0gKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIGlmICh2YWwudG9VcHBlckNhc2UoKSA9PT0gXCJUUkFOU1BBUkVOVFwiKSB7XG4gICAgICAgICAgc2V0SW5wdXRWYWx1ZShcIlwiKVxuICAgICAgICAgIHNldFZhbHVlKFwidHJhbnNwYXJlbnRcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBbbmV3SCwgbmV3UywgbmV3Ql0gPSBjb2xvcjJoc2IodmFsKVxuICAgICAgICAgIHNldEgobmV3SClcbiAgICAgICAgICBzZXRTKG5ld1MgKiAxMDApXG4gICAgICAgICAgc2V0QihuZXdCICogMTAwKVxuICAgICAgICAgIHNldElucHV0VmFsdWUocmVtb3ZlSGFzaFRhZyh2YWwpKVxuICAgICAgICAgIHNldFZhbHVlKHZhbClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FsbENoYW5nZSh2YWwgPT09IFwiVFJBTlNQQVJFTlRcIiA/IFwidHJhbnNwYXJlbnRcIiA6IHZhbClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9ICh7XG4gICAgICB0YXJnZXQ6IHsgdmFsdWU6IHZhbCB9LFxuICAgIH06IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBjb25zdCBpbnB1dFZhbCA9IHZhbC5zcGxpdChcIiNcIikuam9pbihcIlwiKVxuICAgICAgc2V0SW5wdXRWYWx1ZShpbnB1dFZhbClcbiAgICAgIGlmIChpc0xlZ2FsSGV4U3RyaW5nKGlucHV0VmFsKSkge1xuICAgICAgICBoYW5kbGVWYWx1ZUNoYW5nZShhZGRIYXNoVGFnKGlucHV0VmFsKSlcbiAgICAgIH0gZWxzZSBpZiAodHJhbnNwYXJlbnRFbmFibGVkICYmIGlucHV0VmFsID09PSBcIlwiKSB7XG4gICAgICAgIGhhbmRsZVZhbHVlQ2hhbmdlKFwidHJhbnNwYXJlbnRcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDdXN0b21DaGFuZ2UgPSAodHlwZTogXCJoXCIgfCBcInNcIiB8IFwiYlwiLCB2YWw6IG51bWJlcikgPT4ge1xuICAgICAgbGV0IG5ld1ZhbHVlOiBzdHJpbmdcbiAgICAgIGlmICh0eXBlID09PSBcImhcIikge1xuICAgICAgICBuZXdWYWx1ZSA9IGhzYjJoZXgodmFsLCBzIC8gMTAwLCBiIC8gMTAwKVxuICAgICAgICBzZXRIKHZhbClcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJzXCIpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBoc2IyaGV4KGgsIHZhbCAvIDEwMCwgYiAvIDEwMClcbiAgICAgICAgc2V0Uyh2YWwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdWYWx1ZSA9IGhzYjJoZXgoaCwgcyAvIDEwMCwgdmFsIC8gMTAwKVxuICAgICAgICBzZXRCKHZhbClcbiAgICAgIH1cblxuICAgICAgc2V0SW5wdXRWYWx1ZShyZW1vdmVIYXNoVGFnKG5ld1ZhbHVlKSlcbiAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKVxuXG4gICAgICBjYWxsQ2hhbmdlKG5ld1ZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBhbGV0dGVNb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQgfSA9IHBhbGV0dGVSZWN0XG5cbiAgICAgIGxldCBuZXdTID0gKGUucGFnZVggLSBsZWZ0IC0gd2luZG93LnNjcm9sbFgpIC8gd2lkdGhcbiAgICAgIGxldCBuZXdCID0gKGUucGFnZVkgLSB0b3AgLSB3aW5kb3cuc2Nyb2xsWSkgLyBoZWlnaHRcblxuICAgICAgaWYgKG5ld1MgPCAwKSB7XG4gICAgICAgIG5ld1MgPSAwXG4gICAgICB9IGVsc2UgaWYgKG5ld1MgPiAxKSB7XG4gICAgICAgIG5ld1MgPSAxXG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdCIDwgMCkge1xuICAgICAgICBuZXdCID0gMFxuICAgICAgfSBlbHNlIGlmIChuZXdCID4gMSkge1xuICAgICAgICBuZXdCID0gMVxuICAgICAgfVxuXG4gICAgICBuZXdTICo9IDEwMFxuICAgICAgbmV3QiA9IDEwMCAtIG5ld0IgKiAxMDBcblxuICAgICAgY29uc3QgbmV3Q29sb3IgPSBoc2IyaGV4KGgsIG5ld1MgLyAxMDAsIG5ld0IgLyAxMDApXG5cbiAgICAgIHNldFMobmV3UylcbiAgICAgIHNldEIobmV3QilcbiAgICAgIHNldFZhbHVlKG5ld0NvbG9yKVxuICAgICAgc2V0SW5wdXRWYWx1ZShyZW1vdmVIYXNoVGFnKG5ld0NvbG9yKSlcblxuICAgICAgY2FsbENoYW5nZShuZXdDb2xvcilcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQYWxldHRlTW91c2VVcCA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZVBhbGV0dGVNb3VzZU1vdmUpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlUGFsZXR0ZU1vdXNlVXApXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGFsZXR0ZU1vdXNlRG93biA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0IH0gPSBlXG4gICAgICBwYWxldHRlUmVjdCA9IGN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGNvbnN0IHsgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0IH0gPSBwYWxldHRlUmVjdFxuXG4gICAgICBjb25zdCBuZXdTID0gKChlLnBhZ2VYIC0gbGVmdCAtIHdpbmRvdy5zY3JvbGxYKSAvIHdpZHRoKSAqIDEwMFxuICAgICAgY29uc3QgbmV3QiA9IDEwMCAtICgoZS5wYWdlWSAtIHRvcCAtIHdpbmRvdy5zY3JvbGxZKSAvIGhlaWdodCkgKiAxMDBcblxuICAgICAgY29uc3QgbmV3Q29sb3IgPSBoc2IyaGV4KGgsIG5ld1MgLyAxMDAsIG5ld0IgLyAxMDApXG5cbiAgICAgIHNldFMobmV3UylcbiAgICAgIHNldEIobmV3QilcbiAgICAgIHNldFZhbHVlKG5ld0NvbG9yKVxuICAgICAgc2V0SW5wdXRWYWx1ZShyZW1vdmVIYXNoVGFnKG5ld0NvbG9yKSlcblxuICAgICAgY2FsbENoYW5nZShuZXdDb2xvcilcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlUGFsZXR0ZU1vdXNlTW92ZSlcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVQYWxldHRlTW91c2VVcClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDb2xsYXBzZUNoYW5nZSA9IChcbiAgICAgIGJvb2w6IGJvb2xlYW4sXG4gICAgICB0eXBlOiBcInN0YW5kYXJkXCIgfCBcImN1c3RvbVwiXG4gICAgKSA9PiB7XG4gICAgICBpZiAodHlwZSA9PT0gXCJzdGFuZGFyZFwiKSB7XG4gICAgICAgIHNldFN0YW5kYXJkQ29sbGFwc2VkKGJvb2wpXG4gICAgICAgIGlmICghYm9vbCAmJiAhY3VzdG9tQ29sbGFwc2VkKSB7XG4gICAgICAgICAgc2V0Q3VzdG9tQ29sbGFwc2VkKHRydWUpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJjdXN0b21cIikge1xuICAgICAgICBzZXRDdXN0b21Db2xsYXBzZWQoYm9vbClcbiAgICAgICAgaWYgKCFib29sICYmICFzdGFuZGFyZENvbGxhcHNlZCkge1xuICAgICAgICAgIHNldFN0YW5kYXJkQ29sbGFwc2VkKHRydWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJJbnB1dCA9ICh0eXBlPzogXCJwb3B1cFwiKSA9PiAoXG4gICAgICA8SW5wdXRcbiAgICAgICAgcmVmPXt0eXBlID8gcG9wdXBJbnB1dFJlZiA6IGlucHV0UmVmfVxuICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW5wdXRgfVxuICAgICAgICBjbGVhdmVPcHRpb25zPXt7IHVwcGVyY2FzZTogdHJ1ZSB9fVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIGxlZnRFbGVtZW50PXtcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmVmaXhDbGlja31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1wcmVmaXhgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgICNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBvbkJsdXI9eygpID0+IGhhbmRsZUlucHV0Qmx1cih0eXBlKX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICBvbkZvY3VzPXtoYW5kbGVJbnB1dEZvY3VzfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXG4gICAgICAgIHNpemU9e3R5cGUgPyBcInNtYWxsXCIgOiBzaXplfVxuICAgICAgICB0aGVtZT17dHlwZSAmJiBcImxpZ2h0XCJ9XG4gICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgLz5cbiAgICApXG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICAgIGlucHV0OiBpbnB1dFJlZi5jdXJyZW50LFxuICAgICAgcG9wdXBJbnB1dDogcG9wdXBJbnB1dFJlZi5jdXJyZW50LFxuICAgICAgdHJpZ2dlcjogdHJpZ2dlclJlZi5jdXJyZW50LFxuICAgIH0pKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgZGF0YS12YWx1ZT17dmFsdWV9XG4gICAgICAgIGRhdGEtaD17aCB8fCAwfVxuICAgICAgICBkYXRhLXM9e3MgfHwgMH1cbiAgICAgICAgZGF0YS1iPXtiIHx8IDB9XG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgPlxuICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgIGFsaWduRWRnZT17ZmFsc2V9XG4gICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tTGVmdFwiXG4gICAgICAgICAgcG9wdXA9e1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcG9wdXBgfT5cbiAgICAgICAgICAgICAge3BvcHVwUmVzdWx0VmlzaWJsZSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcG9wdXAtcmVzdWx0YH0+XG4gICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9PT0gXCJ0cmFuc3BhcmVudFwiID8gVFJBTlNQQVJFTlRfQkcgOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7cmVuZGVySW5wdXQoXCJwb3B1cFwiKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge3JlY2VudENvbG9ycyAmJiAhIXJlY2VudENvbG9ycy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlckNvbGxhcHNlXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0Q29sbGFwc2VkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIuacgOi/keS9v+eUqFwiXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcmVjZW50YH0+XG4gICAgICAgICAgICAgICAgICAgICAge1suLi5uZXcgU2V0KHJlY2VudENvbG9ycy5zbGljZSgwLCA3KSldLm1hcChjb2xvciA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVZhbHVlQ2hhbmdlKGNvbG9yLnRvVXBwZXJDYXNlKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9PT0gXCJ0cmFuc3BhcmVudFwiID8gVFJBTlNQQVJFTlRfQkcgOiBjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgPENvbG9yUGlja2VyQ29sbGFwc2VcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ9e3N0YW5kYXJkQ29sbGFwc2VkfVxuICAgICAgICAgICAgICAgIG9uQ29sbGFwc2VDaGFuZ2U9e2Jvb2wgPT5cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNvbGxhcHNlQ2hhbmdlKGJvb2wsIFwic3RhbmRhcmRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGVhZGVyPVwi5qCH5YeG6Imy5p2/XCJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXN0YW5kYXJkYH0+XG4gICAgICAgICAgICAgICAgICAgIHsodHJhbnNwYXJlbnRFbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBTVEFOREFSRFNfVFJBTlNQQVJFTlRcbiAgICAgICAgICAgICAgICAgICAgICA6IFNUQU5EQVJEU1xuICAgICAgICAgICAgICAgICAgICApLm1hcChjb2xvciA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVWYWx1ZUNoYW5nZShjb2xvcil9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9PT0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke3ByZWZpeH0tc3RhbmRhcmQtaXRlbV9zZWxlY3RlZGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPT09IFwiVFJBTlNQQVJFTlRcIiA/IFRSQU5TUEFSRU5UX0JHIDogY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJDb2xsYXBzZVxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZD17Y3VzdG9tQ29sbGFwc2VkfVxuICAgICAgICAgICAgICAgIG9uQ29sbGFwc2VDaGFuZ2U9e2Jvb2wgPT4gaGFuZGxlQ29sbGFwc2VDaGFuZ2UoYm9vbCwgXCJjdXN0b21cIil9XG4gICAgICAgICAgICAgICAgaGVhZGVyPVwi6Ieq5a6a5LmJXCJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWN1c3RvbWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBhbGV0dGVgfVxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGBoc2woJHtofSwgMTAwJSwgNTAlKWAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17aGFuZGxlUGFsZXR0ZU1vdXNlRG93bn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBhbGV0dGUtc2B9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcGFsZXR0ZS1iYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IGBjYWxjKCR7Yn0lIC0gN3B4KWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYGNhbGMoJHtzfSUgLSA3cHgpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2xpZGVyLXdyYXBwZXJgfT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2xpZGVyLWxhYmVsYH0+SDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2xpZGVyICR7cHJlZml4fS1zbGlkZXJfaGB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZpc2libGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXszNTl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwYXJhbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbSAmJiAhQXJyYXkuaXNBcnJheShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDdXN0b21DaGFuZ2UoXCJoXCIsIHBhcmFtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1zbGlkZXItd3JhcHBlcmB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4fS1zbGlkZXItbGFiZWxgfT5TPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1zbGlkZXIgJHtwcmVmaXh9LXNsaWRlcl9zYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmlzaWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3BhcmFtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtICYmICFBcnJheS5pc0FycmF5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUN1c3RvbUNoYW5nZShcInNcIiwgcGFyYW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICByYWlsU3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZmIDAlLCB0cmFuc3BhcmVudCAxMDAlKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYGhzbCgke2h9LCAxMDAlLCA1MCUpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNsaWRlci13cmFwcGVyYH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNsaWRlci1sYWJlbGB9PkI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNsaWRlciAke3ByZWZpeH0tc2xpZGVyX2JgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWaXNpYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2J9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFyYW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW0gJiYgIUFycmF5LmlzQXJyYXkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ3VzdG9tQ2hhbmdlKFwiYlwiLCBwYXJhbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJhaWxTdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDAgMCUsIHRyYW5zcGFyZW50IDEwMCUpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgaHNsKCR7aH0sIDEwMCUsIDUwJSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgICByZWY9e3RyaWdnZXJSZWZ9XG4gICAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZT17aGFuZGxlVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgICB7Li4ucG9wb3ZlclByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBpY2tlcmB9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFsdWUgPT09IFwidHJhbnNwYXJlbnRcIiA/IFRSQU5TUEFSRU5UX0JHIDogdmFsdWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgIHtpbnB1dFZpc2libGUgJiYgcmVuZGVySW5wdXQoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuKVxuXG5Db2xvclBpY2tlci5kaXNwbGF5TmFtZSA9IFwiQ29sb3JQaWNrZXJcIlxuXG5Db2xvclBpY2tlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOm7mOiupOeahOWIneWni+WAvCAtIOWGhemDqOmpseWKqFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDovpPlhaXmoYbmmK/lkKbmmL7npLpcbiAgICovXG4gIGlucHV0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlgLzmlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5ZyoIHZpc2libGUg5Y+Y5Li6IGZhbHNl77yM5Lul5Y+KIElucHV0IGJsdXIg5pe26Kem5Y+R55qEIGhhbmRsZXLvvJtcbiAgICog6L+Z5LiqIGhhbmRsZXIg6Z2e5bi454m55q6K77yM5Li65LqG6YWN5ZCI54m55q6K55qEIHJlY2VudENvbG9ycyBQcm9wIOS9v+eUqO+8jOivt+WcqOi/meS4quS6i+S7tuinpuWPkeeahOaXtuWAmeiuvue9riByZWNlbnRDb2xvcnPjgIJcbiAgICovXG4gIG9uRmluaXNoQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOS8oOWFpSBQb3BvdmVyIOeahCBwcm9wc1xuICAgKi9cbiAgcG9wb3ZlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog5by55Ye65qGG5YaF55qE57uT5p6c5Yy65Z+f5piv5ZCm5pi+56S6XG4gICAqL1xuICBwb3B1cFJlc3VsdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5pyA6L+R5L2/55So55qE6aKc6Imy77yM5q2k5Yqf6IO96Z2e5bi454m55q6K77yM6ZyA6YWN5ZCIIG9uRmluaXNoQ2hhbmdlIOS9v+eUqFxuICAgKi9cbiAgcmVjZW50Q29sb3JzOiBQcm9wVHlwZXMuYXJyYXksXG4gIC8qKlxuICAgKiDlsLrlr7jlpKflsI9cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDlvIDlkK/pgI/mmI7oibJcbiAgICovXG4gIHRyYW5zcGFyZW50RW5hYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlgLwgLSDlpJbpg6jmjqfliLZcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5Db2xvclBpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgaW5wdXRWaXNpYmxlOiB0cnVlLFxuICBvbkNoYW5nZTogdW5kZWZpbmVkLFxuICBvbkZpbmlzaENoYW5nZTogdW5kZWZpbmVkLFxuICBwb3BvdmVyUHJvcHM6IHt9LFxuICBwb3B1cFJlc3VsdFZpc2libGU6IHRydWUsXG4gIHJlY2VudENvbG9yczogW10sXG4gIHNpemU6IFwic21hbGxcIixcbiAgdHJhbnNwYXJlbnRFbmFibGVkOiBmYWxzZSxcbiAgdmFsdWU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yUGlja2VyXG4iXX0=