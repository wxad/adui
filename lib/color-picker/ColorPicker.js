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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY29sb3ItcGlja2VyL0NvbG9yUGlja2VyLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJDb2xvclBpY2tlciIsInJlZiIsImNsYXNzTmFtZSIsImRlZmF1bHRWYWx1ZSIsImRpc2FibGVkIiwiaW5wdXRWaXNpYmxlIiwib25DaGFuZ2UiLCJvbkZpbmlzaENoYW5nZSIsInBvcG92ZXJQcm9wcyIsInBvcHVwUmVzdWx0VmlzaWJsZSIsInJlY2VudENvbG9ycyIsInNpemVQcm9wIiwic2l6ZSIsInRyYW5zcGFyZW50RW5hYmxlZCIsInZhbHVlUHJvcCIsInZhbHVlIiwib3RoZXJQcm9wcyIsInByZXZWYWx1ZSIsImdldEluaXRpYWxTdGF0ZSIsImgiLCJzIiwiYiIsImlucHV0VmFsdWUiLCJ2YWx1ZVN0YXRlIiwiZ2V0U3RhdGUiLCJ2YWwiLCJ0b1VwcGVyQ2FzZSIsImluaXRpYWxTdGF0ZSIsInNldEgiLCJzZXRTIiwic2V0QiIsInNldElucHV0VmFsdWUiLCJzZXRWYWx1ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic3RhbmRhcmRDb2xsYXBzZWQiLCJzZXRTdGFuZGFyZENvbGxhcHNlZCIsImN1c3RvbUNvbGxhcHNlZCIsInNldEN1c3RvbUNvbGxhcHNlZCIsImlucHV0UmVmIiwicG9wdXBJbnB1dFJlZiIsInRyaWdnZXJSZWYiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJwYWxldHRlUmVjdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc1NldCIsImNhbGxDaGFuZ2UiLCJoYW5kbGVQcmVmaXhDbGljayIsImN1cnJlbnQiLCJpbnB1dCIsImZvY3VzIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsImJvb2wiLCJzZXRUaW1lb3V0IiwiaGFuZGxlSW5wdXRCbHVyIiwidHlwZSIsImhhbmRsZUlucHV0Rm9jdXMiLCJ0YXJnZXQiLCJzZWxlY3QiLCJoYW5kbGVWYWx1ZUNoYW5nZSIsIm5ld0giLCJuZXdTIiwibmV3QiIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaW5wdXRWYWwiLCJzcGxpdCIsImpvaW4iLCJoYW5kbGVDdXN0b21DaGFuZ2UiLCJuZXdWYWx1ZSIsImhhbmRsZVBhbGV0dGVNb3VzZU1vdmUiLCJlIiwicGFnZVgiLCJ3aW5kb3ciLCJzY3JvbGxYIiwicGFnZVkiLCJzY3JvbGxZIiwibmV3Q29sb3IiLCJoYW5kbGVQYWxldHRlTW91c2VVcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVQYWxldHRlTW91c2VEb3duIiwiY3VycmVudFRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDb2xsYXBzZUNoYW5nZSIsInJlbmRlcklucHV0IiwidXBwZXJjYXNlIiwicG9wdXBJbnB1dCIsInRyaWdnZXIiLCJiYWNrZ3JvdW5kIiwiVFJBTlNQQVJFTlRfQkciLCJsZW5ndGgiLCJTZXQiLCJzbGljZSIsIm1hcCIsImNvbG9yIiwiU1RBTkRBUkRTX1RSQU5TUEFSRU5UIiwiU1RBTkRBUkRTIiwiYmFja2dyb3VuZENvbG9yIiwicGFyYW0iLCJBcnJheSIsImlzQXJyYXkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJvYmplY3QiLCJhcnJheSIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7QUFRQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFRQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFmO0FBMERBLElBQU1DLFdBQ3FCLEdBQUcsdUJBQzVCLGdCQWdCRUMsR0FoQkYsRUFpQks7QUFBQSxNQWZEQyxTQWVDLFFBZkRBLFNBZUM7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QmhILEVBQUFBLGNBQWMsRUFBRWdILFNBTlM7QUFPekIvRyxFQUFBQSxZQUFZLEVBQUUsRUFQVztBQVF6QkMsRUFBQUEsa0JBQWtCLEVBQUUsSUFSSztBQVN6QkMsRUFBQUEsWUFBWSxFQUFFLEVBVFc7QUFVekJFLEVBQUFBLElBQUksRUFBRSxPQVZtQjtBQVd6QkMsRUFBQUEsa0JBQWtCLEVBQUUsS0FYSztBQVl6QkUsRUFBQUEsS0FBSyxFQUFFO0FBWmtCLENBQTNCO2VBZWVmLFciLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgUmVhY3QsIHtcbiAgZm9yd2FyZFJlZixcbiAgdXNlQ29udGV4dCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlTWVtbyxcbiAgdXNlU3RhdGUsXG4gIHVzZVJlZixcbn0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgY29sb3IyaHNiLCBoc2IyaGV4IH0gZnJvbSBcIi4uL191dGlsL2NvbG9yXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uXCJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRcIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBTbGlkZXIgZnJvbSBcIi4uL3NsaWRlclwiXG5pbXBvcnQge1xuICBpc0xlZ2FsSGV4U3RyaW5nLFxuICBhZGRIYXNoVGFnLFxuICByZW1vdmVIYXNoVGFnLFxuICBTVEFOREFSRFMsXG4gIFNUQU5EQVJEU19UUkFOU1BBUkVOVCxcbiAgVFJBTlNQQVJFTlRfQkcsXG59IGZyb20gXCIuL2NvcmVcIlxuaW1wb3J0IENvbG9yUGlja2VyQ29sbGFwc2UgZnJvbSBcIi4vQ29sb3JQaWNrZXJDb2xsYXBzZVwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNwXCJcblxuZXhwb3J0IGludGVyZmFjZSBJQ29sb3JQaWNrZXJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOm7mOiupOeahOWIneWni+WAvCAtIOWGhemDqOmpseWKqFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlPzogc3RyaW5nIHwgbnVsbFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOi+k+WFpeahhuaYr+WQpuaYvuekulxuICAgKi9cbiAgaW5wdXRWaXNpYmxlPzogYm9vbGVhblxuICAvKipcbiAgICog5YC85pS55Y+Y5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgLyoqXG4gICAqIOWcqCB2aXNpYmxlIOWPmOS4uiBmYWxzZe+8jOS7peWPiiBJbnB1dCBibHVyIOaXtuinpuWPkeeahCBoYW5kbGVy77ybXG4gICAqIOi/meS4qiBoYW5kbGVyIOmdnuW4uOeJueauiu+8jOS4uuS6humFjeWQiOeJueauiueahCByZWNlbnRDb2xvcnMgUHJvcCDkvb/nlKjvvIzor7flnKjov5nkuKrkuovku7bop6blj5HnmoTml7blgJnorr7nva4gcmVjZW50Q29sb3Jz44CCXG4gICAqL1xuICBvbkZpbmlzaENoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDkvKDlhaUgUG9wb3ZlciDnmoQgcHJvcHNcbiAgICovXG4gIHBvcG92ZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgLyoqXG4gICAqIOW8ueWHuuahhuWGheeahOe7k+aenOWMuuWfn+aYr+WQpuaYvuekulxuICAgKi9cbiAgcG9wdXBSZXN1bHRWaXNpYmxlPzogYm9vbGVhblxuICAvKipcbiAgICog5pyA6L+R5L2/55So55qE6aKc6Imy77yM5q2k5Yqf6IO96Z2e5bi454m55q6K77yM6ZyA6YWN5ZCIIG9uRmluaXNoQ2hhbmdlIOS9v+eUqFxuICAgKi9cbiAgcmVjZW50Q29sb3JzPzogc3RyaW5nW11cbiAgLyoqXG4gICAqIOWwuuWvuOWkp+Wwj1xuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog5byA5ZCv6YCP5piO6ImyXG4gICAqL1xuICB0cmFuc3BhcmVudEVuYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlgLwgLSDlpJbpg6jmjqfliLZcbiAgICovXG4gIHZhbHVlPzogc3RyaW5nIHwgbnVsbFxufVxuXG4vKipcbiAqIOminOiJsumAieaLqeWZqFxuICovXG5jb25zdCBDb2xvclBpY2tlcjogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxJQ29sb3JQaWNrZXJQcm9wcyAmXG4gIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55Pj4gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpbnB1dFZpc2libGUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uRmluaXNoQ2hhbmdlLFxuICAgICAgcG9wb3ZlclByb3BzLFxuICAgICAgcG9wdXBSZXN1bHRWaXNpYmxlLFxuICAgICAgcmVjZW50Q29sb3JzLFxuICAgICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgICB0cmFuc3BhcmVudEVuYWJsZWQsXG4gICAgICB2YWx1ZTogdmFsdWVQcm9wLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElDb2xvclBpY2tlclByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBsZXQgcHJldlZhbHVlID0gXCJcIlxuXG4gICAgY29uc3QgZ2V0SW5pdGlhbFN0YXRlID0gKCkgPT4ge1xuICAgICAgbGV0IGggPSAwXG4gICAgICBsZXQgcyA9IDBcbiAgICAgIGxldCBiID0gMFxuICAgICAgbGV0IGlucHV0VmFsdWUgPSBcIlwiXG4gICAgICBsZXQgdmFsdWVTdGF0ZSA9IFwiXCJcbiAgICAgIGNvbnN0IGdldFN0YXRlID0gKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgICAgIDtbaCwgcywgYl0gPSBjb2xvcjJoc2IodmFsKVxuICAgICAgICBpZiAodmFsID09PSBcInRyYW5zcGFyZW50XCIpIHtcbiAgICAgICAgICB2YWx1ZVN0YXRlID0gdmFsXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IFwiXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZVN0YXRlID0gdmFsLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICBpbnB1dFZhbHVlID0gcmVtb3ZlSGFzaFRhZyh2YWwudG9VcHBlckNhc2UoKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICB2YWx1ZVByb3AgJiZcbiAgICAgICAgKGlzTGVnYWxIZXhTdHJpbmcocmVtb3ZlSGFzaFRhZyh2YWx1ZVByb3ApKSB8fFxuICAgICAgICAgICh0cmFuc3BhcmVudEVuYWJsZWQgJiYgdmFsdWVQcm9wID09PSBcInRyYW5zcGFyZW50XCIpKVxuICAgICAgKSB7XG4gICAgICAgIGdldFN0YXRlKHZhbHVlUHJvcClcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRlZmF1bHRWYWx1ZSAmJlxuICAgICAgICAoaXNMZWdhbEhleFN0cmluZyhyZW1vdmVIYXNoVGFnKGRlZmF1bHRWYWx1ZSkpIHx8XG4gICAgICAgICAgKHRyYW5zcGFyZW50RW5hYmxlZCAmJiBkZWZhdWx0VmFsdWUgPT09IFwidHJhbnNwYXJlbnRcIikpXG4gICAgICApIHtcbiAgICAgICAgZ2V0U3RhdGUoZGVmYXVsdFZhbHVlKVxuICAgICAgfVxuXG4gICAgICBwcmV2VmFsdWUgPSB2YWx1ZVN0YXRlXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGgsXG4gICAgICAgIHM6IHMgKiAxMDAsXG4gICAgICAgIGI6IGIgKiAxMDAsXG4gICAgICAgIGlucHV0VmFsdWUsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVN0YXRlLFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHVzZU1lbW8oZ2V0SW5pdGlhbFN0YXRlLCBbXSlcblxuICAgIGNvbnN0IFtoLCBzZXRIXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZS5oKVxuICAgIGNvbnN0IFtzLCBzZXRTXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZS5zKVxuICAgIGNvbnN0IFtiLCBzZXRCXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZS5iKVxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZS5pbnB1dFZhbHVlKVxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlLnZhbHVlKVxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtzdGFuZGFyZENvbGxhcHNlZCwgc2V0U3RhbmRhcmRDb2xsYXBzZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2N1c3RvbUNvbGxhcHNlZCwgc2V0Q3VzdG9tQ29sbGFwc2VkXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAgaWYgKFxuICAgICAgdmFsdWVQcm9wICYmXG4gICAgICBpc0xlZ2FsSGV4U3RyaW5nKHJlbW92ZUhhc2hUYWcodmFsdWVQcm9wKSkgJiZcbiAgICAgIHZhbHVlUHJvcC50b1VwcGVyQ2FzZSgpICE9PSB2YWx1ZVxuICAgICkge1xuICAgICAgc2V0SChjb2xvcjJoc2IodmFsdWVQcm9wKVswXSlcbiAgICAgIHNldFMoY29sb3IyaHNiKHZhbHVlUHJvcClbMV0gKiAxMDApXG4gICAgICBzZXRCKGNvbG9yMmhzYih2YWx1ZVByb3ApWzJdICogMTAwKVxuICAgICAgc2V0SW5wdXRWYWx1ZShyZW1vdmVIYXNoVGFnKHZhbHVlUHJvcC50b1VwcGVyQ2FzZSgpKSlcbiAgICAgIHNldFZhbHVlKHZhbHVlUHJvcC50b1VwcGVyQ2FzZSgpKVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0cmFuc3BhcmVudEVuYWJsZWQgJiZcbiAgICAgIHZhbHVlUHJvcCA9PT0gXCJ0cmFuc3BhcmVudFwiICYmXG4gICAgICB2YWx1ZSAhPT0gXCJ0cmFuc3BhcmVudFwiXG4gICAgKSB7XG4gICAgICBzZXRIKDApXG4gICAgICBzZXRTKDApXG4gICAgICBzZXRCKDApXG4gICAgICBzZXRJbnB1dFZhbHVlKFwiXCIpXG4gICAgICBzZXRWYWx1ZShcInRyYW5zcGFyZW50XCIpXG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuICAgIGNvbnN0IHBvcHVwSW5wdXRSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuICAgIGNvbnN0IHRyaWdnZXJSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuXG4gICAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuICAgIGNvbnN0IHNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZVByb3AsIHNpemVDb250ZXh0KVxuXG4gICAgbGV0IHBhbGV0dGVSZWN0OiBPbWl0PERPTVJlY3QsIFwidG9KU09OXCI+ID0ge1xuICAgICAgdG9wOiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICB3aWR0aDogMTYwLFxuICAgICAgaGVpZ2h0OiA5MCxcbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9YCwgYCR7cHJlZml4fS0ke3NpemV9YClcblxuICAgIGNvbnN0IGNhbGxDaGFuZ2UgPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZSh2YWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUHJlZml4Q2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAodmlzaWJsZSAmJiBwb3B1cElucHV0UmVmLmN1cnJlbnQ/LmlucHV0KSB7XG4gICAgICAgIHBvcHVwSW5wdXRSZWYuY3VycmVudC5pbnB1dC5mb2N1cygpXG4gICAgICB9IGVsc2UgaWYgKGlucHV0UmVmLmN1cnJlbnQ/LmlucHV0KSB7XG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuaW5wdXQuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVZpc2libGVDaGFuZ2UgPSAoYm9vbDogYm9vbGVhbikgPT4ge1xuICAgICAgc2V0VmlzaWJsZShib29sKVxuICAgICAgaWYgKGJvb2wpIHtcbiAgICAgICAgcHJldlZhbHVlID0gdmFsdWVcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IHByZXZWYWx1ZSkge1xuICAgICAgICBwcmV2VmFsdWUgPSB2YWx1ZVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChvbkZpbmlzaENoYW5nZSkge1xuICAgICAgICAgICAgb25GaW5pc2hDaGFuZ2UodmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9LCAyMDApXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRCbHVyID0gKHR5cGU/OiBcInBvcHVwXCIpID0+IHtcbiAgICAgIGlmICh0cmFuc3BhcmVudEVuYWJsZWQpIHtcbiAgICAgICAgaWYgKGlucHV0VmFsdWUgIT09IFwiXCIgJiYgdmFsdWUgPT09IFwidHJhbnNwYXJlbnRcIikge1xuICAgICAgICAgIHNldElucHV0VmFsdWUoXCJcIilcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhZGRIYXNoVGFnKGlucHV0VmFsdWUpICE9PSB2YWx1ZSkge1xuICAgICAgICBzZXRJbnB1dFZhbHVlKHJlbW92ZUhhc2hUYWcodmFsdWUpKVxuICAgICAgfVxuICAgICAgaWYgKHZhbHVlICE9PSBwcmV2VmFsdWUgJiYgIXR5cGUgJiYgb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgb25GaW5pc2hDaGFuZ2UodmFsdWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRGb2N1cyA9ICh7XG4gICAgICB0YXJnZXQsXG4gICAgfTogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgdGFyZ2V0LnNlbGVjdCgpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVmFsdWVDaGFuZ2UgPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHZhbC50b1VwcGVyQ2FzZSgpID09PSBcIlRSQU5TUEFSRU5UXCIpIHtcbiAgICAgICAgICBzZXRJbnB1dFZhbHVlKFwiXCIpXG4gICAgICAgICAgc2V0VmFsdWUoXCJ0cmFuc3BhcmVudFwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IFtuZXdILCBuZXdTLCBuZXdCXSA9IGNvbG9yMmhzYih2YWwpXG4gICAgICAgICAgc2V0SChuZXdIKVxuICAgICAgICAgIHNldFMobmV3UyAqIDEwMClcbiAgICAgICAgICBzZXRCKG5ld0IgKiAxMDApXG4gICAgICAgICAgc2V0SW5wdXRWYWx1ZShyZW1vdmVIYXNoVGFnKHZhbCkpXG4gICAgICAgICAgc2V0VmFsdWUodmFsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYWxsQ2hhbmdlKHZhbCA9PT0gXCJUUkFOU1BBUkVOVFwiID8gXCJ0cmFuc3BhcmVudFwiIDogdmFsKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKHtcbiAgICAgIHRhcmdldDogeyB2YWx1ZTogdmFsIH0sXG4gICAgfTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IGlucHV0VmFsID0gdmFsLnNwbGl0KFwiI1wiKS5qb2luKFwiXCIpXG4gICAgICBzZXRJbnB1dFZhbHVlKGlucHV0VmFsKVxuICAgICAgaWYgKGlzTGVnYWxIZXhTdHJpbmcoaW5wdXRWYWwpKSB7XG4gICAgICAgIGhhbmRsZVZhbHVlQ2hhbmdlKGFkZEhhc2hUYWcoaW5wdXRWYWwpKVxuICAgICAgfSBlbHNlIGlmICh0cmFuc3BhcmVudEVuYWJsZWQgJiYgaW5wdXRWYWwgPT09IFwiXCIpIHtcbiAgICAgICAgaGFuZGxlVmFsdWVDaGFuZ2UoXCJ0cmFuc3BhcmVudFwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUN1c3RvbUNoYW5nZSA9ICh0eXBlOiBcImhcIiB8IFwic1wiIHwgXCJiXCIsIHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICBsZXQgbmV3VmFsdWU6IHN0cmluZ1xuICAgICAgaWYgKHR5cGUgPT09IFwiaFwiKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gaHNiMmhleCh2YWwsIHMgLyAxMDAsIGIgLyAxMDApXG4gICAgICAgIHNldEgodmFsKVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInNcIikge1xuICAgICAgICBuZXdWYWx1ZSA9IGhzYjJoZXgoaCwgdmFsIC8gMTAwLCBiIC8gMTAwKVxuICAgICAgICBzZXRTKHZhbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gaHNiMmhleChoLCBzIC8gMTAwLCB2YWwgLyAxMDApXG4gICAgICAgIHNldEIodmFsKVxuICAgICAgfVxuXG4gICAgICBzZXRJbnB1dFZhbHVlKHJlbW92ZUhhc2hUYWcobmV3VmFsdWUpKVxuICAgICAgc2V0VmFsdWUobmV3VmFsdWUpXG5cbiAgICAgIGNhbGxDaGFuZ2UobmV3VmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGFsZXR0ZU1vdXNlTW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCB9ID0gcGFsZXR0ZVJlY3RcblxuICAgICAgbGV0IG5ld1MgPSAoZS5wYWdlWCAtIGxlZnQgLSB3aW5kb3cuc2Nyb2xsWCkgLyB3aWR0aFxuICAgICAgbGV0IG5ld0IgPSAoZS5wYWdlWSAtIHRvcCAtIHdpbmRvdy5zY3JvbGxZKSAvIGhlaWdodFxuXG4gICAgICBpZiAobmV3UyA8IDApIHtcbiAgICAgICAgbmV3UyA9IDBcbiAgICAgIH0gZWxzZSBpZiAobmV3UyA+IDEpIHtcbiAgICAgICAgbmV3UyA9IDFcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld0IgPCAwKSB7XG4gICAgICAgIG5ld0IgPSAwXG4gICAgICB9IGVsc2UgaWYgKG5ld0IgPiAxKSB7XG4gICAgICAgIG5ld0IgPSAxXG4gICAgICB9XG5cbiAgICAgIG5ld1MgKj0gMTAwXG4gICAgICBuZXdCID0gMTAwIC0gbmV3QiAqIDEwMFxuXG4gICAgICBjb25zdCBuZXdDb2xvciA9IGhzYjJoZXgoaCwgbmV3UyAvIDEwMCwgbmV3QiAvIDEwMClcblxuICAgICAgc2V0UyhuZXdTKVxuICAgICAgc2V0QihuZXdCKVxuICAgICAgc2V0VmFsdWUobmV3Q29sb3IpXG4gICAgICBzZXRJbnB1dFZhbHVlKHJlbW92ZUhhc2hUYWcobmV3Q29sb3IpKVxuXG4gICAgICBjYWxsQ2hhbmdlKG5ld0NvbG9yKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBhbGV0dGVNb3VzZVVwID0gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlUGFsZXR0ZU1vdXNlTW92ZSlcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVQYWxldHRlTW91c2VVcClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQYWxldHRlTW91c2VEb3duID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgICBjb25zdCB7IGN1cnJlbnRUYXJnZXQgfSA9IGVcbiAgICAgIHBhbGV0dGVSZWN0ID0gY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgY29uc3QgeyBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQgfSA9IHBhbGV0dGVSZWN0XG5cbiAgICAgIGNvbnN0IG5ld1MgPSAoKGUucGFnZVggLSBsZWZ0IC0gd2luZG93LnNjcm9sbFgpIC8gd2lkdGgpICogMTAwXG4gICAgICBjb25zdCBuZXdCID0gMTAwIC0gKChlLnBhZ2VZIC0gdG9wIC0gd2luZG93LnNjcm9sbFkpIC8gaGVpZ2h0KSAqIDEwMFxuXG4gICAgICBjb25zdCBuZXdDb2xvciA9IGhzYjJoZXgoaCwgbmV3UyAvIDEwMCwgbmV3QiAvIDEwMClcblxuICAgICAgc2V0UyhuZXdTKVxuICAgICAgc2V0QihuZXdCKVxuICAgICAgc2V0VmFsdWUobmV3Q29sb3IpXG4gICAgICBzZXRJbnB1dFZhbHVlKHJlbW92ZUhhc2hUYWcobmV3Q29sb3IpKVxuXG4gICAgICBjYWxsQ2hhbmdlKG5ld0NvbG9yKVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVQYWxldHRlTW91c2VNb3ZlKVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZVBhbGV0dGVNb3VzZVVwKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNvbGxhcHNlQ2hhbmdlID0gKFxuICAgICAgYm9vbDogYm9vbGVhbixcbiAgICAgIHR5cGU6IFwic3RhbmRhcmRcIiB8IFwiY3VzdG9tXCJcbiAgICApID0+IHtcbiAgICAgIGlmICh0eXBlID09PSBcInN0YW5kYXJkXCIpIHtcbiAgICAgICAgc2V0U3RhbmRhcmRDb2xsYXBzZWQoYm9vbClcbiAgICAgICAgaWYgKCFib29sICYmICFjdXN0b21Db2xsYXBzZWQpIHtcbiAgICAgICAgICBzZXRDdXN0b21Db2xsYXBzZWQodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcImN1c3RvbVwiKSB7XG4gICAgICAgIHNldEN1c3RvbUNvbGxhcHNlZChib29sKVxuICAgICAgICBpZiAoIWJvb2wgJiYgIXN0YW5kYXJkQ29sbGFwc2VkKSB7XG4gICAgICAgICAgc2V0U3RhbmRhcmRDb2xsYXBzZWQodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlcklucHV0ID0gKHR5cGU/OiBcInBvcHVwXCIpID0+IChcbiAgICAgIDxJbnB1dFxuICAgICAgICByZWY9e3R5cGUgPyBwb3B1cElucHV0UmVmIDogaW5wdXRSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbnB1dGB9XG4gICAgICAgIGNsZWF2ZU9wdGlvbnM9e3sgdXBwZXJjYXNlOiB0cnVlIH19XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgbGVmdEVsZW1lbnQ9e1xuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZWZpeENsaWNrfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXByZWZpeGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgI1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIG9uQmx1cj17KCkgPT4gaGFuZGxlSW5wdXRCbHVyKHR5cGUpfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgIG9uRm9jdXM9e2hhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgc2l6ZT17dHlwZSA/IFwic21hbGxcIiA6IHNpemV9XG4gICAgICAgIHRoZW1lPXt0eXBlICYmIFwibGlnaHRcIn1cbiAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAvPlxuICAgIClcblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgaW5wdXQ6IGlucHV0UmVmLmN1cnJlbnQsXG4gICAgICBwb3B1cElucHV0OiBwb3B1cElucHV0UmVmLmN1cnJlbnQsXG4gICAgICB0cmlnZ2VyOiB0cmlnZ2VyUmVmLmN1cnJlbnQsXG4gICAgfSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICBkYXRhLXZhbHVlPXt2YWx1ZX1cbiAgICAgICAgZGF0YS1oPXtoIHx8IDB9XG4gICAgICAgIGRhdGEtcz17cyB8fCAwfVxuICAgICAgICBkYXRhLWI9e2IgfHwgMH1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgYWxpZ25FZGdlPXtmYWxzZX1cbiAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21MZWZ0XCJcbiAgICAgICAgICBwb3B1cD17XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3B1cGB9PlxuICAgICAgICAgICAgICB7cG9wdXBSZXN1bHRWaXNpYmxlICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3B1cC1yZXN1bHRgfT5cbiAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID09PSBcInRyYW5zcGFyZW50XCIgPyBUUkFOU1BBUkVOVF9CRyA6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJJbnB1dChcInBvcHVwXCIpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7cmVjZW50Q29sb3JzICYmICEhcmVjZW50Q29sb3JzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgPENvbG9yUGlja2VyQ29sbGFwc2VcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb2xsYXBzZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgaGVhZGVyPVwi5pyA6L+R5L2/55SoXCJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1yZWNlbnRgfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Wy4uLm5ldyBTZXQocmVjZW50Q29sb3JzLnNsaWNlKDAsIDcpKV0ubWFwKGNvbG9yID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVmFsdWVDaGFuZ2UoY29sb3IudG9VcHBlckNhc2UoKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID09PSBcInRyYW5zcGFyZW50XCIgPyBUUkFOU1BBUkVOVF9CRyA6IGNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJDb2xsYXBzZVxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZD17c3RhbmRhcmRDb2xsYXBzZWR9XG4gICAgICAgICAgICAgICAgb25Db2xsYXBzZUNoYW5nZT17Ym9vbCA9PlxuICAgICAgICAgICAgICAgICAgaGFuZGxlQ29sbGFwc2VDaGFuZ2UoYm9vbCwgXCJzdGFuZGFyZFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWFkZXI9XCLmoIflh4boibLmnb9cIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc3RhbmRhcmRgfT5cbiAgICAgICAgICAgICAgICAgICAgeyh0cmFuc3BhcmVudEVuYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IFNUQU5EQVJEU19UUkFOU1BBUkVOVFxuICAgICAgICAgICAgICAgICAgICAgIDogU1RBTkRBUkRTXG4gICAgICAgICAgICAgICAgICAgICkubWFwKGNvbG9yID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVZhbHVlQ2hhbmdlKGNvbG9yKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID09PSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7cHJlZml4fS1zdGFuZGFyZC1pdGVtX3NlbGVjdGVkYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9PT0gXCJUUkFOU1BBUkVOVFwiID8gVFJBTlNQQVJFTlRfQkcgOiBjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDb2xvclBpY2tlckNvbGxhcHNlXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkPXtjdXN0b21Db2xsYXBzZWR9XG4gICAgICAgICAgICAgICAgb25Db2xsYXBzZUNoYW5nZT17Ym9vbCA9PiBoYW5kbGVDb2xsYXBzZUNoYW5nZShib29sLCBcImN1c3RvbVwiKX1cbiAgICAgICAgICAgICAgICBoZWFkZXI9XCLoh6rlrprkuYlcIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY3VzdG9tYH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcGFsZXR0ZWB9XG4gICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYGhzbCgke2h9LCAxMDAlLCA1MCUpYCB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXtoYW5kbGVQYWxldHRlTW91c2VEb3dufVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcGFsZXR0ZS1zYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wYWxldHRlLWJgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYGNhbGMoJHtifSUgLSA3cHgpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBgY2FsYygke3N9JSAtIDdweClgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1zbGlkZXItd3JhcHBlcmB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4fS1zbGlkZXItbGFiZWxgfT5IPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1zbGlkZXIgJHtwcmVmaXh9LXNsaWRlcl9oYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmlzaWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezM1OX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtofVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3BhcmFtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtICYmICFBcnJheS5pc0FycmF5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUN1c3RvbUNoYW5nZShcImhcIiwgcGFyYW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNsaWRlci13cmFwcGVyYH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNsaWRlci1sYWJlbGB9PlM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNsaWRlciAke3ByZWZpeH0tc2xpZGVyX3NgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWaXNpYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFyYW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW0gJiYgIUFycmF5LmlzQXJyYXkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ3VzdG9tQ2hhbmdlKFwic1wiLCBwYXJhbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJhaWxTdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmYgMCUsIHRyYW5zcGFyZW50IDEwMCUpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgaHNsKCR7aH0sIDEwMCUsIDUwJSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2xpZGVyLXdyYXBwZXJgfT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2xpZGVyLWxhYmVsYH0+Qjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2xpZGVyICR7cHJlZml4fS1zbGlkZXJfYmB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZpc2libGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Yn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwYXJhbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbSAmJiAhQXJyYXkuaXNBcnJheShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDdXN0b21DaGFuZ2UoXCJiXCIsIHBhcmFtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgcmFpbFN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMCAwJSwgdHJhbnNwYXJlbnQgMTAwJSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGBoc2woJHtofSwgMTAwJSwgNTAlKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlZj17dHJpZ2dlclJlZn1cbiAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXtoYW5kbGVWaXNpYmxlQ2hhbmdlfVxuICAgICAgICAgIHsuLi5wb3BvdmVyUHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcGlja2VyYH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YWx1ZSA9PT0gXCJ0cmFuc3BhcmVudFwiID8gVFJBTlNQQVJFTlRfQkcgOiB2YWx1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAge2lucHV0VmlzaWJsZSAmJiByZW5kZXJJbnB1dCgpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4pXG5cbkNvbG9yUGlja2VyLmRpc3BsYXlOYW1lID0gXCJDb2xvclBpY2tlclwiXG5cbkNvbG9yUGlja2VyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6buY6K6k55qE5Yid5aeL5YC8IC0g5YaF6YOo6amx5YqoXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOi+k+WFpeahhuaYr+WQpuaYvuekulxuICAgKi9cbiAgaW5wdXRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWAvOaUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlnKggdmlzaWJsZSDlj5jkuLogZmFsc2XvvIzku6Xlj4ogSW5wdXQgYmx1ciDml7bop6blj5HnmoQgaGFuZGxlcu+8m1xuICAgKiDov5nkuKogaGFuZGxlciDpnZ7luLjnibnmrorvvIzkuLrkuobphY3lkIjnibnmrornmoQgcmVjZW50Q29sb3JzIFByb3Ag5L2/55So77yM6K+35Zyo6L+Z5Liq5LqL5Lu26Kem5Y+R55qE5pe25YCZ6K6+572uIHJlY2VudENvbG9yc+OAglxuICAgKi9cbiAgb25GaW5pc2hDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5Lyg5YWlIFBvcG92ZXIg55qEIHByb3BzXG4gICAqL1xuICBwb3BvdmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDlvLnlh7rmoYblhoXnmoTnu5PmnpzljLrln5/mmK/lkKbmmL7npLpcbiAgICovXG4gIHBvcHVwUmVzdWx0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmnIDov5Hkvb/nlKjnmoTpopzoibLvvIzmraTlip/og73pnZ7luLjnibnmrorvvIzpnIDphY3lkIggb25GaW5pc2hDaGFuZ2Ug5L2/55SoXG4gICAqL1xuICByZWNlbnRDb2xvcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgLyoqXG4gICAqIOWwuuWvuOWkp+Wwj1xuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOW8gOWQr+mAj+aYjuiJslxuICAgKi9cbiAgdHJhbnNwYXJlbnRFbmFibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWAvCAtIOWklumDqOaOp+WItlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbkNvbG9yUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBpbnB1dFZpc2libGU6IHRydWUsXG4gIG9uQ2hhbmdlOiB1bmRlZmluZWQsXG4gIG9uRmluaXNoQ2hhbmdlOiB1bmRlZmluZWQsXG4gIHBvcG92ZXJQcm9wczoge30sXG4gIHBvcHVwUmVzdWx0VmlzaWJsZTogdHJ1ZSxcbiAgcmVjZW50Q29sb3JzOiBbXSxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB0cmFuc3BhcmVudEVuYWJsZWQ6IGZhbHNlLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JQaWNrZXJcbiJdfQ==