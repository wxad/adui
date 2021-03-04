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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY29sb3ItcGlja2VyL0NvbG9yUGlja2VyLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJDb2xvclBpY2tlciIsInJlZiIsImNsYXNzTmFtZSIsImRlZmF1bHRWYWx1ZSIsImRpc2FibGVkIiwiaW5wdXRWaXNpYmxlIiwib25DaGFuZ2UiLCJvbkZpbmlzaENoYW5nZSIsInBvcG92ZXJQcm9wcyIsInBvcHVwUmVzdWx0VmlzaWJsZSIsInJlY2VudENvbG9ycyIsInNpemVQcm9wIiwic2l6ZSIsInRyYW5zcGFyZW50RW5hYmxlZCIsInZhbHVlUHJvcCIsInZhbHVlIiwib3RoZXJQcm9wcyIsInByZXZWYWx1ZSIsImdldEluaXRpYWxTdGF0ZSIsImgiLCJzIiwiYiIsImlucHV0VmFsdWUiLCJ2YWx1ZVN0YXRlIiwiZ2V0U3RhdGUiLCJ2YWwiLCJ0b1VwcGVyQ2FzZSIsImluaXRpYWxTdGF0ZSIsInNldEgiLCJzZXRTIiwic2V0QiIsInNldElucHV0VmFsdWUiLCJzZXRWYWx1ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic3RhbmRhcmRDb2xsYXBzZWQiLCJzZXRTdGFuZGFyZENvbGxhcHNlZCIsImN1c3RvbUNvbGxhcHNlZCIsInNldEN1c3RvbUNvbGxhcHNlZCIsImlucHV0UmVmIiwicG9wdXBJbnB1dFJlZiIsInRyaWdnZXJSZWYiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJwYWxldHRlUmVjdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc1NldCIsImNhbGxDaGFuZ2UiLCJoYW5kbGVQcmVmaXhDbGljayIsImN1cnJlbnQiLCJpbnB1dCIsImZvY3VzIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsImJvb2wiLCJzZXRUaW1lb3V0IiwiaGFuZGxlSW5wdXRCbHVyIiwidHlwZSIsImhhbmRsZUlucHV0Rm9jdXMiLCJ0YXJnZXQiLCJzZWxlY3QiLCJoYW5kbGVWYWx1ZUNoYW5nZSIsIm5ld0giLCJuZXdTIiwibmV3QiIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaW5wdXRWYWwiLCJzcGxpdCIsImpvaW4iLCJoYW5kbGVDdXN0b21DaGFuZ2UiLCJuZXdWYWx1ZSIsImhhbmRsZVBhbGV0dGVNb3VzZU1vdmUiLCJlIiwicGFnZVgiLCJ3aW5kb3ciLCJzY3JvbGxYIiwicGFnZVkiLCJzY3JvbGxZIiwibmV3Q29sb3IiLCJoYW5kbGVQYWxldHRlTW91c2VVcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVQYWxldHRlTW91c2VEb3duIiwiY3VycmVudFRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDb2xsYXBzZUNoYW5nZSIsInJlbmRlcklucHV0IiwidXBwZXJjYXNlIiwicG9wdXBJbnB1dCIsInRyaWdnZXIiLCJiYWNrZ3JvdW5kIiwiVFJBTlNQQVJFTlRfQkciLCJsZW5ndGgiLCJTZXQiLCJzbGljZSIsIm1hcCIsImNvbG9yIiwiU1RBTkRBUkRTX1RSQU5TUEFSRU5UIiwiU1RBTkRBUkRTIiwiYmFja2dyb3VuZENvbG9yIiwicGFyYW0iLCJBcnJheSIsImlzQXJyYXkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJvYmplY3QiLCJhcnJheSIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7QUFRQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFRQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFmO0FBMERBLElBQU1DLFdBRUwsR0FBRyx1QkFDRixnQkFnQkVDLEdBaEJGLEVBaUJLO0FBQUEsTUFmREMsU0FlQyxRQWZEQSxTQWVDO0FBQUEsTUFkREMsWUFjQyxRQWREQSxZQWNDO0FBQUEsTUFiREMsUUFhQyxRQWJEQSxRQWFDO0FBQUEsTUFaREMsWUFZQyxRQVpEQSxZQVlDO0FBQUEsTUFYREMsUUFXQyxRQVhEQSxRQVdDO0FBQUEsTUFWREMsY0FVQyxRQVZEQSxjQVVDO0FBQUEsTUFUREMsWUFTQyxRQVREQSxZQVNDO0FBQUEsTUFSREMsa0JBUUMsUUFSREEsa0JBUUM7QUFBQSxNQVBEQyxZQU9DLFFBUERBLFlBT0M7QUFBQSxNQU5LQyxRQU1MLFFBTkRDLElBTUM7QUFBQSxNQUxEQyxrQkFLQyxRQUxEQSxrQkFLQztBQUFBLE1BSk1DLFNBSU4sUUFKREMsS0FJQztBQUFBLE1BSEVDLFVBR0Y7O0FBQ0gsTUFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUVBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixRQUFJQyxDQUFDLEdBQUcsQ0FBUjtBQUNBLFFBQUlDLENBQUMsR0FBRyxDQUFSO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFDQSxRQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQSxRQUFJQyxVQUFVLEdBQUcsRUFBakI7O0FBQ0EsUUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsR0FBRCxFQUFpQjtBQUNoQzs7QUFEZ0MsdUJBQ25CLHNCQUFVQSxHQUFWLENBRG1COztBQUFBOztBQUM5Qk4sTUFBQUEsQ0FEOEI7QUFDM0JDLE1BQUFBLENBRDJCO0FBQ3hCQyxNQUFBQSxDQUR3Qjs7QUFFaEMsVUFBSUksR0FBRyxLQUFLLGFBQVosRUFBMkI7QUFDekJGLFFBQUFBLFVBQVUsR0FBR0UsR0FBYjtBQUNBSCxRQUFBQSxVQUFVLEdBQUcsRUFBYjtBQUNELE9BSEQsTUFHTztBQUNMQyxRQUFBQSxVQUFVLEdBQUdFLEdBQUcsQ0FBQ0MsV0FBSixFQUFiO0FBQ0FKLFFBQUFBLFVBQVUsR0FBRyx5QkFBY0csR0FBRyxDQUFDQyxXQUFKLEVBQWQsQ0FBYjtBQUNEO0FBQ0YsS0FURDs7QUFVQSxRQUNFWixTQUFTLEtBQ1IsNEJBQWlCLHlCQUFjQSxTQUFkLENBQWpCLEtBQ0VELGtCQUFrQixJQUFJQyxTQUFTLEtBQUssYUFGOUIsQ0FEWCxFQUlFO0FBQ0FVLE1BQUFBLFFBQVEsQ0FBQ1YsU0FBRCxDQUFSO0FBQ0QsS0FORCxNQU1PLElBQ0xYLFlBQVksS0FDWCw0QkFBaUIseUJBQWNBLFlBQWQsQ0FBakIsS0FDRVUsa0JBQWtCLElBQUlWLFlBQVksS0FBSyxhQUY5QixDQURQLEVBSUw7QUFDQXFCLE1BQUFBLFFBQVEsQ0FBQ3JCLFlBQUQsQ0FBUjtBQUNEOztBQUVEYyxJQUFBQSxTQUFTLEdBQUdNLFVBQVo7QUFFQSxXQUFPO0FBQ0xKLE1BQUFBLENBQUMsRUFBREEsQ0FESztBQUVMQyxNQUFBQSxDQUFDLEVBQUVBLENBQUMsR0FBRyxHQUZGO0FBR0xDLE1BQUFBLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEdBSEY7QUFJTEMsTUFBQUEsVUFBVSxFQUFWQSxVQUpLO0FBS0xQLE1BQUFBLEtBQUssRUFBRVE7QUFMRixLQUFQO0FBT0QsR0F2Q0Q7O0FBeUNBLE1BQU1JLFlBQVksR0FBRyxvQkFBUVQsZUFBUixFQUF5QixFQUF6QixDQUFyQjs7QUE1Q0csa0JBOENlLHFCQUFTUyxZQUFZLENBQUNSLENBQXRCLENBOUNmO0FBQUE7QUFBQSxNQThDSUEsQ0E5Q0o7QUFBQSxNQThDT1MsSUE5Q1A7O0FBQUEsbUJBK0NlLHFCQUFTRCxZQUFZLENBQUNQLENBQXRCLENBL0NmO0FBQUE7QUFBQSxNQStDSUEsQ0EvQ0o7QUFBQSxNQStDT1MsSUEvQ1A7O0FBQUEsbUJBZ0RlLHFCQUFTRixZQUFZLENBQUNOLENBQXRCLENBaERmO0FBQUE7QUFBQSxNQWdESUEsQ0FoREo7QUFBQSxNQWdET1MsSUFoRFA7O0FBQUEsbUJBaURpQyxxQkFBU0gsWUFBWSxDQUFDTCxVQUF0QixDQWpEakM7QUFBQTtBQUFBLE1BaURJQSxVQWpESjtBQUFBLE1BaURnQlMsYUFqRGhCOztBQUFBLG1CQWtEdUIscUJBQVNKLFlBQVksQ0FBQ1osS0FBdEIsQ0FsRHZCO0FBQUE7QUFBQSxNQWtESUEsS0FsREo7QUFBQSxNQWtEV2lCLFFBbERYOztBQUFBLG9CQW1EMkIscUJBQVMsS0FBVCxDQW5EM0I7QUFBQTtBQUFBLE1BbURJQyxPQW5ESjtBQUFBLE1BbURhQyxVQW5EYjs7QUFBQSxvQkFvRCtDLHFCQUFTLEtBQVQsQ0FwRC9DO0FBQUE7QUFBQSxNQW9ESUMsaUJBcERKO0FBQUEsTUFvRHVCQyxvQkFwRHZCOztBQUFBLG9CQXFEMkMscUJBQVMsSUFBVCxDQXJEM0M7QUFBQTtBQUFBLE1BcURJQyxlQXJESjtBQUFBLE1BcURxQkMsa0JBckRyQjs7QUF3REgsTUFDRXhCLFNBQVMsSUFDVCw0QkFBaUIseUJBQWNBLFNBQWQsQ0FBakIsQ0FEQSxJQUVBQSxTQUFTLENBQUNZLFdBQVYsT0FBNEJYLEtBSDlCLEVBSUU7QUFDQWEsSUFBQUEsSUFBSSxDQUFDLHNCQUFVZCxTQUFWLEVBQXFCLENBQXJCLENBQUQsQ0FBSjtBQUNBZSxJQUFBQSxJQUFJLENBQUMsc0JBQVVmLFNBQVYsRUFBcUIsQ0FBckIsSUFBMEIsR0FBM0IsQ0FBSjtBQUNBZ0IsSUFBQUEsSUFBSSxDQUFDLHNCQUFVaEIsU0FBVixFQUFxQixDQUFyQixJQUEwQixHQUEzQixDQUFKO0FBQ0FpQixJQUFBQSxhQUFhLENBQUMseUJBQWNqQixTQUFTLENBQUNZLFdBQVYsRUFBZCxDQUFELENBQWI7QUFDQU0sSUFBQUEsUUFBUSxDQUFDbEIsU0FBUyxDQUFDWSxXQUFWLEVBQUQsQ0FBUjtBQUNELEdBVkQsTUFVTyxJQUNMYixrQkFBa0IsSUFDbEJDLFNBQVMsS0FBSyxhQURkLElBRUFDLEtBQUssS0FBSyxhQUhMLEVBSUw7QUFDQWEsSUFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSjtBQUNBQyxJQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKO0FBQ0FDLElBQUFBLElBQUksQ0FBQyxDQUFELENBQUo7QUFDQUMsSUFBQUEsYUFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNBQyxJQUFBQSxRQUFRLENBQUMsYUFBRCxDQUFSO0FBQ0Q7O0FBRUQsTUFBTU8sUUFBUSxHQUFHLG1CQUFZLElBQVosQ0FBakI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsbUJBQVksSUFBWixDQUF0QjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxtQkFBWSxJQUFaLENBQW5COztBQWhGRyxvQkFrRjJCLHVCQUFXQyw2QkFBWCxDQWxGM0I7QUFBQSxNQWtGV0MsV0FsRlgsZUFrRksvQixJQWxGTDs7QUFtRkgsTUFBTUEsSUFBSSxHQUFHLHFDQUFnQkQsUUFBaEIsRUFBMEJnQyxXQUExQixDQUFiO0FBRUEsTUFBSUMsV0FBb0MsR0FBRztBQUN6Q0MsSUFBQUEsR0FBRyxFQUFFLENBRG9DO0FBRXpDQyxJQUFBQSxLQUFLLEVBQUUsQ0FGa0M7QUFHekNDLElBQUFBLE1BQU0sRUFBRSxDQUhpQztBQUl6Q0MsSUFBQUEsSUFBSSxFQUFFLENBSm1DO0FBS3pDQyxJQUFBQSxDQUFDLEVBQUUsQ0FMc0M7QUFNekNDLElBQUFBLENBQUMsRUFBRSxDQU5zQztBQU96Q0MsSUFBQUEsS0FBSyxFQUFFLEdBUGtDO0FBUXpDQyxJQUFBQSxNQUFNLEVBQUU7QUFSaUMsR0FBM0M7QUFXQSxNQUFNQyxRQUFRLEdBQUcsNEJBQVduRCxTQUFYLFlBQXlCSCxNQUF6QixhQUFzQ0EsTUFBdEMsY0FBZ0RhLElBQWhELEVBQWpCOztBQUVBLE1BQU0wQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDN0IsR0FBRCxFQUFpQjtBQUNsQyxRQUFJbkIsUUFBSixFQUFjO0FBQ1pBLE1BQUFBLFFBQVEsQ0FBQ21CLEdBQUQsQ0FBUjtBQUNEO0FBQ0YsR0FKRDs7QUFNQSxNQUFNOEIsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQUE7O0FBQzlCLFFBQUl0QixPQUFPLDZCQUFJTyxhQUFhLENBQUNnQixPQUFsQixrREFBSSxzQkFBdUJDLEtBQXRDLEVBQTZDO0FBQzNDakIsTUFBQUEsYUFBYSxDQUFDZ0IsT0FBZCxDQUFzQkMsS0FBdEIsQ0FBNEJDLEtBQTVCO0FBQ0QsS0FGRCxNQUVPLHlCQUFJbkIsUUFBUSxDQUFDaUIsT0FBYiw4Q0FBSSxrQkFBa0JDLEtBQXRCLEVBQTZCO0FBQ2xDbEIsTUFBQUEsUUFBUSxDQUFDaUIsT0FBVCxDQUFpQkMsS0FBakIsQ0FBdUJDLEtBQXZCO0FBQ0Q7QUFDRixHQU5EOztBQVFBLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsSUFBRCxFQUFtQjtBQUM3QzFCLElBQUFBLFVBQVUsQ0FBQzBCLElBQUQsQ0FBVjs7QUFDQSxRQUFJQSxJQUFKLEVBQVU7QUFDUjNDLE1BQUFBLFNBQVMsR0FBR0YsS0FBWjtBQUNELEtBRkQsTUFFTyxJQUFJQSxLQUFLLEtBQUtFLFNBQWQsRUFBeUI7QUFDOUJBLE1BQUFBLFNBQVMsR0FBR0YsS0FBWjtBQUVBOEMsTUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZixZQUFJdEQsY0FBSixFQUFvQjtBQUNsQkEsVUFBQUEsY0FBYyxDQUFDUSxLQUFELENBQWQ7QUFDRDtBQUNGLE9BSlMsRUFJUCxHQUpPLENBQVY7QUFLRDtBQUNGLEdBYkQ7O0FBZUEsTUFBTStDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsSUFBRCxFQUFvQjtBQUMxQyxRQUFJbEQsa0JBQUosRUFBd0I7QUFDdEIsVUFBSVMsVUFBVSxLQUFLLEVBQWYsSUFBcUJQLEtBQUssS0FBSyxhQUFuQyxFQUFrRDtBQUNoRGdCLFFBQUFBLGFBQWEsQ0FBQyxFQUFELENBQWI7QUFDRDtBQUNGLEtBSkQsTUFJTyxJQUFJLHNCQUFXVCxVQUFYLE1BQTJCUCxLQUEvQixFQUFzQztBQUMzQ2dCLE1BQUFBLGFBQWEsQ0FBQyx5QkFBY2hCLEtBQWQsQ0FBRCxDQUFiO0FBQ0Q7O0FBQ0QsUUFBSUEsS0FBSyxLQUFLRSxTQUFWLElBQXVCLENBQUM4QyxJQUF4QixJQUFnQ3hELGNBQXBDLEVBQW9EO0FBQ2xEQSxNQUFBQSxjQUFjLENBQUNRLEtBQUQsQ0FBZDtBQUNEO0FBQ0YsR0FYRDs7QUFhQSxNQUFNaUQsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixRQUVpQjtBQUFBLFFBRHhDQyxNQUN3QyxTQUR4Q0EsTUFDd0M7QUFDeENBLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUDtBQUNELEdBSkQ7O0FBTUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDMUMsR0FBRCxFQUFpQjtBQUN6QyxRQUFJWCxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEIsVUFBSVcsR0FBRyxDQUFDQyxXQUFKLE9BQXNCLGFBQTFCLEVBQXlDO0FBQ3ZDSyxRQUFBQSxhQUFhLENBQUMsRUFBRCxDQUFiO0FBQ0FDLFFBQUFBLFFBQVEsQ0FBQyxhQUFELENBQVI7QUFDRCxPQUhELE1BR087QUFBQSwwQkFDc0Isc0JBQVVQLEdBQVYsQ0FEdEI7QUFBQTtBQUFBLFlBQ0UyQyxJQURGO0FBQUEsWUFDUUMsSUFEUjtBQUFBLFlBQ2NDLElBRGQ7O0FBRUwxQyxRQUFBQSxJQUFJLENBQUN3QyxJQUFELENBQUo7QUFDQXZDLFFBQUFBLElBQUksQ0FBQ3dDLElBQUksR0FBRyxHQUFSLENBQUo7QUFDQXZDLFFBQUFBLElBQUksQ0FBQ3dDLElBQUksR0FBRyxHQUFSLENBQUo7QUFDQXZDLFFBQUFBLGFBQWEsQ0FBQyx5QkFBY04sR0FBZCxDQUFELENBQWI7QUFDQU8sUUFBQUEsUUFBUSxDQUFDUCxHQUFELENBQVI7QUFDRDtBQUNGOztBQUNENkIsSUFBQUEsVUFBVSxDQUFDN0IsR0FBRyxLQUFLLGFBQVIsR0FBd0IsYUFBeEIsR0FBd0NBLEdBQXpDLENBQVY7QUFDRCxHQWZEOztBQWlCQSxNQUFNOEMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixRQUVpQjtBQUFBLFFBRHhCOUMsR0FDd0IsU0FEekN3QyxNQUN5QyxDQUQvQmxELEtBQytCO0FBQ3pDLFFBQU15RCxRQUFRLEdBQUcvQyxHQUFHLENBQUNnRCxLQUFKLENBQVUsR0FBVixFQUFlQyxJQUFmLENBQW9CLEVBQXBCLENBQWpCO0FBQ0EzQyxJQUFBQSxhQUFhLENBQUN5QyxRQUFELENBQWI7O0FBQ0EsUUFBSSw0QkFBaUJBLFFBQWpCLENBQUosRUFBZ0M7QUFDOUJMLE1BQUFBLGlCQUFpQixDQUFDLHNCQUFXSyxRQUFYLENBQUQsQ0FBakI7QUFDRCxLQUZELE1BRU8sSUFBSTNELGtCQUFrQixJQUFJMkQsUUFBUSxLQUFLLEVBQXZDLEVBQTJDO0FBQ2hETCxNQUFBQSxpQkFBaUIsQ0FBQyxhQUFELENBQWpCO0FBQ0Q7QUFDRixHQVZEOztBQVlBLE1BQU1RLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ1osSUFBRCxFQUF3QnRDLEdBQXhCLEVBQXdDO0FBQ2pFLFFBQUltRCxRQUFKOztBQUNBLFFBQUliLElBQUksS0FBSyxHQUFiLEVBQWtCO0FBQ2hCYSxNQUFBQSxRQUFRLEdBQUcsb0JBQVFuRCxHQUFSLEVBQWFMLENBQUMsR0FBRyxHQUFqQixFQUFzQkMsQ0FBQyxHQUFHLEdBQTFCLENBQVg7QUFDQU8sTUFBQUEsSUFBSSxDQUFDSCxHQUFELENBQUo7QUFDRCxLQUhELE1BR08sSUFBSXNDLElBQUksS0FBSyxHQUFiLEVBQWtCO0FBQ3ZCYSxNQUFBQSxRQUFRLEdBQUcsb0JBQVF6RCxDQUFSLEVBQVdNLEdBQUcsR0FBRyxHQUFqQixFQUFzQkosQ0FBQyxHQUFHLEdBQTFCLENBQVg7QUFDQVEsTUFBQUEsSUFBSSxDQUFDSixHQUFELENBQUo7QUFDRCxLQUhNLE1BR0E7QUFDTG1ELE1BQUFBLFFBQVEsR0FBRyxvQkFBUXpELENBQVIsRUFBV0MsQ0FBQyxHQUFHLEdBQWYsRUFBb0JLLEdBQUcsR0FBRyxHQUExQixDQUFYO0FBQ0FLLE1BQUFBLElBQUksQ0FBQ0wsR0FBRCxDQUFKO0FBQ0Q7O0FBRURNLElBQUFBLGFBQWEsQ0FBQyx5QkFBYzZDLFFBQWQsQ0FBRCxDQUFiO0FBQ0E1QyxJQUFBQSxRQUFRLENBQUM0QyxRQUFELENBQVI7QUFFQXRCLElBQUFBLFVBQVUsQ0FBQ3NCLFFBQUQsQ0FBVjtBQUNELEdBakJEOztBQW1CQSxNQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNDLENBQUQsRUFBbUI7QUFBQSx1QkFDWGxDLFdBRFc7QUFBQSxRQUN4Q0ksSUFEd0MsZ0JBQ3hDQSxJQUR3QztBQUFBLFFBQ2xDSCxHQURrQyxnQkFDbENBLEdBRGtDO0FBQUEsUUFDN0JNLEtBRDZCLGdCQUM3QkEsS0FENkI7QUFBQSxRQUN0QkMsTUFEc0IsZ0JBQ3RCQSxNQURzQjtBQUdoRCxRQUFJaUIsSUFBSSxHQUFHLENBQUNTLENBQUMsQ0FBQ0MsS0FBRixHQUFVL0IsSUFBVixHQUFpQmdDLE1BQU0sQ0FBQ0MsT0FBekIsSUFBb0M5QixLQUEvQztBQUNBLFFBQUltQixJQUFJLEdBQUcsQ0FBQ1EsQ0FBQyxDQUFDSSxLQUFGLEdBQVVyQyxHQUFWLEdBQWdCbUMsTUFBTSxDQUFDRyxPQUF4QixJQUFtQy9CLE1BQTlDOztBQUVBLFFBQUlpQixJQUFJLEdBQUcsQ0FBWCxFQUFjO0FBQ1pBLE1BQUFBLElBQUksR0FBRyxDQUFQO0FBQ0QsS0FGRCxNQUVPLElBQUlBLElBQUksR0FBRyxDQUFYLEVBQWM7QUFDbkJBLE1BQUFBLElBQUksR0FBRyxDQUFQO0FBQ0Q7O0FBRUQsUUFBSUMsSUFBSSxHQUFHLENBQVgsRUFBYztBQUNaQSxNQUFBQSxJQUFJLEdBQUcsQ0FBUDtBQUNELEtBRkQsTUFFTyxJQUFJQSxJQUFJLEdBQUcsQ0FBWCxFQUFjO0FBQ25CQSxNQUFBQSxJQUFJLEdBQUcsQ0FBUDtBQUNEOztBQUVERCxJQUFBQSxJQUFJLElBQUksR0FBUjtBQUNBQyxJQUFBQSxJQUFJLEdBQUcsTUFBTUEsSUFBSSxHQUFHLEdBQXBCO0FBRUEsUUFBTWMsUUFBUSxHQUFHLG9CQUFRakUsQ0FBUixFQUFXa0QsSUFBSSxHQUFHLEdBQWxCLEVBQXVCQyxJQUFJLEdBQUcsR0FBOUIsQ0FBakI7QUFFQXpDLElBQUFBLElBQUksQ0FBQ3dDLElBQUQsQ0FBSjtBQUNBdkMsSUFBQUEsSUFBSSxDQUFDd0MsSUFBRCxDQUFKO0FBQ0F0QyxJQUFBQSxRQUFRLENBQUNvRCxRQUFELENBQVI7QUFDQXJELElBQUFBLGFBQWEsQ0FBQyx5QkFBY3FELFFBQWQsQ0FBRCxDQUFiO0FBRUE5QixJQUFBQSxVQUFVLENBQUM4QixRQUFELENBQVY7QUFDRCxHQTdCRDs7QUErQkEsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQ2pDTCxJQUFBQSxNQUFNLENBQUNNLG1CQUFQLENBQTJCLFdBQTNCLEVBQXdDVCxzQkFBeEM7QUFDQUcsSUFBQUEsTUFBTSxDQUFDTSxtQkFBUCxDQUEyQixTQUEzQixFQUFzQ0Qsb0JBQXRDO0FBQ0QsR0FIRDs7QUFLQSxNQUFNRSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNULENBQUQsRUFBeUM7QUFBQSxRQUM5RFUsYUFEOEQsR0FDNUNWLENBRDRDLENBQzlEVSxhQUQ4RDtBQUV0RTVDLElBQUFBLFdBQVcsR0FBRzRDLGFBQWEsQ0FBQ0MscUJBQWQsRUFBZDtBQUZzRSx3QkFHakM3QyxXQUhpQztBQUFBLFFBRzlESSxJQUg4RCxpQkFHOURBLElBSDhEO0FBQUEsUUFHeERILEdBSHdELGlCQUd4REEsR0FId0Q7QUFBQSxRQUduRE0sS0FIbUQsaUJBR25EQSxLQUhtRDtBQUFBLFFBRzVDQyxNQUg0QyxpQkFHNUNBLE1BSDRDO0FBS3RFLFFBQU1pQixJQUFJLEdBQUksQ0FBQ1MsQ0FBQyxDQUFDQyxLQUFGLEdBQVUvQixJQUFWLEdBQWlCZ0MsTUFBTSxDQUFDQyxPQUF6QixJQUFvQzlCLEtBQXJDLEdBQThDLEdBQTNEO0FBQ0EsUUFBTW1CLElBQUksR0FBRyxNQUFPLENBQUNRLENBQUMsQ0FBQ0ksS0FBRixHQUFVckMsR0FBVixHQUFnQm1DLE1BQU0sQ0FBQ0csT0FBeEIsSUFBbUMvQixNQUFwQyxHQUE4QyxHQUFqRTtBQUVBLFFBQU1nQyxRQUFRLEdBQUcsb0JBQVFqRSxDQUFSLEVBQVdrRCxJQUFJLEdBQUcsR0FBbEIsRUFBdUJDLElBQUksR0FBRyxHQUE5QixDQUFqQjtBQUVBekMsSUFBQUEsSUFBSSxDQUFDd0MsSUFBRCxDQUFKO0FBQ0F2QyxJQUFBQSxJQUFJLENBQUN3QyxJQUFELENBQUo7QUFDQXRDLElBQUFBLFFBQVEsQ0FBQ29ELFFBQUQsQ0FBUjtBQUNBckQsSUFBQUEsYUFBYSxDQUFDLHlCQUFjcUQsUUFBZCxDQUFELENBQWI7QUFFQTlCLElBQUFBLFVBQVUsQ0FBQzhCLFFBQUQsQ0FBVjtBQUVBSixJQUFBQSxNQUFNLENBQUNVLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDYixzQkFBckM7QUFDQUcsSUFBQUEsTUFBTSxDQUFDVSxnQkFBUCxDQUF3QixTQUF4QixFQUFtQ0wsb0JBQW5DO0FBQ0QsR0FuQkQ7O0FBcUJBLE1BQU1NLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FDM0IvQixJQUQyQixFQUUzQkcsSUFGMkIsRUFHeEI7QUFDSCxRQUFJQSxJQUFJLEtBQUssVUFBYixFQUF5QjtBQUN2QjNCLE1BQUFBLG9CQUFvQixDQUFDd0IsSUFBRCxDQUFwQjs7QUFDQSxVQUFJLENBQUNBLElBQUQsSUFBUyxDQUFDdkIsZUFBZCxFQUErQjtBQUM3QkMsUUFBQUEsa0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNEO0FBQ0YsS0FMRCxNQUtPLElBQUl5QixJQUFJLEtBQUssUUFBYixFQUF1QjtBQUM1QnpCLE1BQUFBLGtCQUFrQixDQUFDc0IsSUFBRCxDQUFsQjs7QUFDQSxVQUFJLENBQUNBLElBQUQsSUFBUyxDQUFDekIsaUJBQWQsRUFBaUM7QUFDL0JDLFFBQUFBLG9CQUFvQixDQUFDLElBQUQsQ0FBcEI7QUFDRDtBQUNGO0FBQ0YsR0FmRDs7QUFpQkEsTUFBTXdELFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUM3QixJQUFEO0FBQUEsV0FDbEIsZ0NBQUMsaUJBQUQ7QUFDRSxNQUFBLEdBQUcsRUFBRUEsSUFBSSxHQUFHdkIsYUFBSCxHQUFtQkQsUUFEOUI7QUFFRSxNQUFBLFNBQVMsWUFBS3hDLE1BQUwsV0FGWDtBQUdFLE1BQUEsYUFBYSxFQUFFO0FBQUU4RixRQUFBQSxTQUFTLEVBQUU7QUFBYixPQUhqQjtBQUlFLE1BQUEsUUFBUSxFQUFFekYsUUFKWjtBQUtFLE1BQUEsV0FBVyxFQUNUO0FBQ0UsUUFBQSxJQUFJLEVBQUMsTUFEUDtBQUVFLFFBQUEsT0FBTyxFQUFFbUQsaUJBRlg7QUFHRSxRQUFBLFNBQVMsWUFBS3hELE1BQUw7QUFIWCxhQU5KO0FBY0UsTUFBQSxNQUFNLEVBQUU7QUFBQSxlQUFNK0QsZUFBZSxDQUFDQyxJQUFELENBQXJCO0FBQUEsT0FkVjtBQWVFLE1BQUEsUUFBUSxFQUFFUSxpQkFmWjtBQWdCRSxNQUFBLE9BQU8sRUFBRVAsZ0JBaEJYO0FBaUJFLE1BQUEsV0FBVyxFQUFDLEVBakJkO0FBa0JFLE1BQUEsSUFBSSxFQUFFRCxJQUFJLEdBQUcsT0FBSCxHQUFhbkQsSUFsQnpCO0FBbUJFLE1BQUEsS0FBSyxFQUFFbUQsSUFBSSxJQUFJLE9BbkJqQjtBQW9CRSxNQUFBLEtBQUssRUFBRXpDO0FBcEJULE1BRGtCO0FBQUEsR0FBcEI7O0FBeUJBLGtDQUFvQnJCLEdBQXBCLEVBQXlCO0FBQUEsV0FBTztBQUM5QndELE1BQUFBLEtBQUssRUFBRWxCLFFBQVEsQ0FBQ2lCLE9BRGM7QUFFOUJzQyxNQUFBQSxVQUFVLEVBQUV0RCxhQUFhLENBQUNnQixPQUZJO0FBRzlCdUMsTUFBQUEsT0FBTyxFQUFFdEQsVUFBVSxDQUFDZTtBQUhVLEtBQVA7QUFBQSxHQUF6QjtBQU1BLFNBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBRUgsUUFEYjtBQUVFLGtCQUFZdEMsS0FGZDtBQUdFLGNBQVFJLENBQUMsSUFBSSxDQUhmO0FBSUUsY0FBUUMsQ0FBQyxJQUFJLENBSmY7QUFLRSxjQUFRQyxDQUFDLElBQUk7QUFMZixLQU1NTCxVQU5OLEdBUUUsZ0NBQUMsbUJBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBRSxLQURiO0FBRUUsSUFBQSxTQUFTLEVBQUMsWUFGWjtBQUdFLElBQUEsS0FBSyxFQUNIO0FBQUssTUFBQSxTQUFTLFlBQUtqQixNQUFMO0FBQWQsT0FDR1Usa0JBQWtCLElBQ2pCO0FBQUssTUFBQSxTQUFTLFlBQUtWLE1BQUw7QUFBZCxPQUNFO0FBQ0UsTUFBQSxLQUFLLEVBQUU7QUFDTGlHLFFBQUFBLFVBQVUsRUFDUmpGLEtBQUssS0FBSyxhQUFWLEdBQTBCa0Ysb0JBQTFCLEdBQTJDbEY7QUFGeEM7QUFEVCxNQURGLEVBT0c2RSxXQUFXLENBQUMsT0FBRCxDQVBkLENBRkosRUFZR2xGLFlBQVksSUFBSSxDQUFDLENBQUNBLFlBQVksQ0FBQ3dGLE1BQS9CLElBQ0MsZ0NBQUMsK0JBQUQ7QUFDRSxNQUFBLGdCQUFnQixFQUFFLEtBRHBCO0FBRUUsTUFBQSxNQUFNLEVBQUMsMEJBRlQ7QUFHRSxNQUFBLE9BQU8sRUFDTDtBQUFLLFFBQUEsU0FBUyxZQUFLbkcsTUFBTDtBQUFkLFNBQ0csbUJBQUksSUFBSW9HLEdBQUosQ0FBUXpGLFlBQVksQ0FBQzBGLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FBUixDQUFKLEVBQXVDQyxHQUF2QyxDQUEyQyxVQUFDQyxLQUFEO0FBQUEsZUFDMUM7QUFDRSxVQUFBLEdBQUcsRUFBRUEsS0FEUDtBQUVFLFVBQUEsSUFBSSxFQUFDLE1BRlA7QUFHRSxVQUFBLE9BQU8sRUFBRTtBQUFBLG1CQUFNbkMsaUJBQWlCLENBQUNtQyxLQUFLLENBQUM1RSxXQUFOLEVBQUQsQ0FBdkI7QUFBQSxXQUhYO0FBSUUsVUFBQSxLQUFLLEVBQUU7QUFDTHNFLFlBQUFBLFVBQVUsRUFDUk0sS0FBSyxLQUFLLGFBQVYsR0FBMEJMLG9CQUExQixHQUEyQ0s7QUFGeEM7QUFKVCxVQUQwQztBQUFBLE9BQTNDLENBREg7QUFKSixNQWJKLEVBa0NFLGdDQUFDLCtCQUFEO0FBQ0UsTUFBQSxTQUFTLEVBQUVuRSxpQkFEYjtBQUVFLE1BQUEsZ0JBQWdCLEVBQUUsMEJBQUN5QixJQUFEO0FBQUEsZUFDaEIrQixvQkFBb0IsQ0FBQy9CLElBQUQsRUFBTyxVQUFQLENBREo7QUFBQSxPQUZwQjtBQUtFLE1BQUEsTUFBTSxFQUFDLDBCQUxUO0FBTUUsTUFBQSxPQUFPLEVBQ0w7QUFBSyxRQUFBLFNBQVMsWUFBSzdELE1BQUw7QUFBZCxTQUNHLENBQUNjLGtCQUFrQixHQUNoQjBGLDJCQURnQixHQUVoQkMsZUFGSCxFQUdDSCxHQUhELENBR0ssVUFBQ0MsS0FBRDtBQUFBLGVBQ0o7QUFDRSxVQUFBLEdBQUcsRUFBRUEsS0FEUDtBQUVFLFVBQUEsSUFBSSxFQUFDLE1BRlA7QUFHRSxVQUFBLE9BQU8sRUFBRTtBQUFBLG1CQUFNbkMsaUJBQWlCLENBQUNtQyxLQUFELENBQXZCO0FBQUEsV0FIWDtBQUlFLFVBQUEsU0FBUyxFQUNQQSxLQUFLLEtBQUt2RixLQUFWLGFBQ09oQixNQURQLCtCQUVJLEVBUFI7QUFTRSxVQUFBLEtBQUssRUFBRTtBQUNMaUcsWUFBQUEsVUFBVSxFQUNSTSxLQUFLLEtBQUssYUFBVixHQUEwQkwsb0JBQTFCLEdBQTJDSztBQUZ4QztBQVRULFVBREk7QUFBQSxPQUhMLENBREg7QUFQSixNQWxDRixFQWdFRSxnQ0FBQywrQkFBRDtBQUNFLE1BQUEsU0FBUyxFQUFFakUsZUFEYjtBQUVFLE1BQUEsZ0JBQWdCLEVBQUUsMEJBQUN1QixJQUFEO0FBQUEsZUFDaEIrQixvQkFBb0IsQ0FBQy9CLElBQUQsRUFBTyxRQUFQLENBREo7QUFBQSxPQUZwQjtBQUtFLE1BQUEsTUFBTSxFQUFDLG9CQUxUO0FBTUUsTUFBQSxPQUFPLEVBQ0w7QUFBSyxRQUFBLFNBQVMsWUFBSzdELE1BQUw7QUFBZCxTQUNFO0FBQ0UsUUFBQSxTQUFTLFlBQUtBLE1BQUwsYUFEWDtBQUVFLFFBQUEsSUFBSSxFQUFDLE1BRlA7QUFHRSxRQUFBLEtBQUssRUFBRTtBQUFFMEcsVUFBQUEsZUFBZSxnQkFBU3RGLENBQVQ7QUFBakIsU0FIVDtBQUlFLFFBQUEsV0FBVyxFQUFFb0U7QUFKZixTQU1FO0FBQUssUUFBQSxTQUFTLFlBQUt4RixNQUFMO0FBQWQsUUFORixFQU9FO0FBQUssUUFBQSxTQUFTLFlBQUtBLE1BQUw7QUFBZCxRQVBGLEVBUUdnQixLQUFLLElBQ0o7QUFDRSxRQUFBLEtBQUssRUFBRTtBQUNMZ0MsVUFBQUEsTUFBTSxpQkFBVTFCLENBQVYsYUFERDtBQUVMMkIsVUFBQUEsSUFBSSxpQkFBVTVCLENBQVYsYUFGQztBQUdMcUYsVUFBQUEsZUFBZSxFQUFFMUY7QUFIWjtBQURULFFBVEosQ0FERixFQW1CRTtBQUFLLFFBQUEsU0FBUyxZQUFLaEIsTUFBTDtBQUFkLFNBQ0U7QUFBTSxRQUFBLFNBQVMsWUFBS0EsTUFBTDtBQUFmLGFBREYsRUFFRSxnQ0FBQyxrQkFBRDtBQUNFLFFBQUEsU0FBUyxZQUFLQSxNQUFMLHFCQUFzQkEsTUFBdEIsY0FEWDtBQUVFLFFBQUEsWUFBWSxFQUFFLEtBRmhCO0FBR0UsUUFBQSxHQUFHLEVBQUUsQ0FIUDtBQUlFLFFBQUEsR0FBRyxFQUFFLEdBSlA7QUFLRSxRQUFBLEtBQUssRUFBRW9CLENBTFQ7QUFNRSxRQUFBLFFBQVEsRUFBRSxrQkFBQ3VGLEtBQUQsRUFBVztBQUNuQixjQUFJQSxLQUFLLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFOLENBQWNGLEtBQWQsQ0FBZCxFQUFvQztBQUNsQy9CLFlBQUFBLGtCQUFrQixDQUFDLEdBQUQsRUFBTStCLEtBQU4sQ0FBbEI7QUFDRDtBQUNGO0FBVkgsUUFGRixDQW5CRixFQWtDRTtBQUFLLFFBQUEsU0FBUyxZQUFLM0csTUFBTDtBQUFkLFNBQ0U7QUFBTSxRQUFBLFNBQVMsWUFBS0EsTUFBTDtBQUFmLGFBREYsRUFFRSxnQ0FBQyxrQkFBRDtBQUNFLFFBQUEsU0FBUyxZQUFLQSxNQUFMLHFCQUFzQkEsTUFBdEIsY0FEWDtBQUVFLFFBQUEsWUFBWSxFQUFFLEtBRmhCO0FBR0UsUUFBQSxHQUFHLEVBQUUsQ0FIUDtBQUlFLFFBQUEsR0FBRyxFQUFFLEdBSlA7QUFLRSxRQUFBLEtBQUssRUFBRXFCLENBTFQ7QUFNRSxRQUFBLFFBQVEsRUFBRSxrQkFBQ3NGLEtBQUQsRUFBVztBQUNuQixjQUFJQSxLQUFLLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFOLENBQWNGLEtBQWQsQ0FBZCxFQUFvQztBQUNsQy9CLFlBQUFBLGtCQUFrQixDQUFDLEdBQUQsRUFBTStCLEtBQU4sQ0FBbEI7QUFDRDtBQUNGLFNBVkg7QUFXRSxRQUFBLFNBQVMsRUFBRTtBQUNURyxVQUFBQSxlQUFlLHFEQUROO0FBRVRKLFVBQUFBLGVBQWUsZ0JBQVN0RixDQUFUO0FBRk47QUFYYixRQUZGLENBbENGLEVBcURFO0FBQUssUUFBQSxTQUFTLFlBQUtwQixNQUFMO0FBQWQsU0FDRTtBQUFNLFFBQUEsU0FBUyxZQUFLQSxNQUFMO0FBQWYsYUFERixFQUVFLGdDQUFDLGtCQUFEO0FBQ0UsUUFBQSxTQUFTLFlBQUtBLE1BQUwscUJBQXNCQSxNQUF0QixjQURYO0FBRUUsUUFBQSxZQUFZLEVBQUUsS0FGaEI7QUFHRSxRQUFBLEdBQUcsRUFBRSxDQUhQO0FBSUUsUUFBQSxHQUFHLEVBQUUsR0FKUDtBQUtFLFFBQUEsS0FBSyxFQUFFc0IsQ0FMVDtBQU1FLFFBQUEsUUFBUSxFQUFFLGtCQUFDcUYsS0FBRCxFQUFXO0FBQ25CLGNBQUlBLEtBQUssSUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsS0FBZCxDQUFkLEVBQW9DO0FBQ2xDL0IsWUFBQUEsa0JBQWtCLENBQUMsR0FBRCxFQUFNK0IsS0FBTixDQUFsQjtBQUNEO0FBQ0YsU0FWSDtBQVdFLFFBQUEsU0FBUyxFQUFFO0FBQ1RHLFVBQUFBLGVBQWUscURBRE47QUFFVEosVUFBQUEsZUFBZSxnQkFBU3RGLENBQVQ7QUFGTjtBQVhiLFFBRkYsQ0FyREY7QUFQSixNQWhFRixDQUpKO0FBd0pFLElBQUEsR0FBRyxFQUFFc0IsVUF4SlA7QUF5SkUsSUFBQSxPQUFPLEVBQUMsT0F6SlY7QUEwSkUsSUFBQSxPQUFPLEVBQUVSLE9BMUpYO0FBMkpFLElBQUEsZUFBZSxFQUFFMEI7QUEzSm5CLEtBNEpNbkQsWUE1Sk4sR0E4SkUsZ0NBQUMsa0JBQUQ7QUFDRSxJQUFBLFNBQVMsWUFBS1QsTUFBTCxZQURYO0FBRUUsSUFBQSxRQUFRLEVBQUVLLFFBRlo7QUFHRSxJQUFBLElBQUksRUFBRVE7QUFIUixLQUtFO0FBQ0UsSUFBQSxLQUFLLEVBQUU7QUFDTG9GLE1BQUFBLFVBQVUsRUFBRWpGLEtBQUssS0FBSyxhQUFWLEdBQTBCa0Ysb0JBQTFCLEdBQTJDbEY7QUFEbEQ7QUFEVCxJQUxGLENBOUpGLENBUkYsRUFrTEdWLFlBQVksSUFBSXVGLFdBQVcsRUFsTDlCLENBREY7QUFzTEQsQ0FuZkMsQ0FGSjtBQXdmQTVGLFdBQVcsQ0FBQzhHLFdBQVosR0FBMEIsYUFBMUI7QUFFQTlHLFdBQVcsQ0FBQytHLFNBQVosR0FBd0I7QUFJdEI3RyxFQUFBQSxTQUFTLEVBQUU4RyxzQkFBVUMsTUFKQztBQVF0QjlHLEVBQUFBLFlBQVksRUFBRTZHLHNCQUFVQyxNQVJGO0FBWXRCN0csRUFBQUEsUUFBUSxFQUFFNEcsc0JBQVVwRCxJQVpFO0FBZ0J0QnZELEVBQUFBLFlBQVksRUFBRTJHLHNCQUFVcEQsSUFoQkY7QUFvQnRCdEQsRUFBQUEsUUFBUSxFQUFFMEcsc0JBQVVFLElBcEJFO0FBeUJ0QjNHLEVBQUFBLGNBQWMsRUFBRXlHLHNCQUFVRSxJQXpCSjtBQTZCdEIxRyxFQUFBQSxZQUFZLEVBQUV3RyxzQkFBVUcsTUE3QkY7QUFpQ3RCMUcsRUFBQUEsa0JBQWtCLEVBQUV1RyxzQkFBVXBELElBakNSO0FBcUN0QmxELEVBQUFBLFlBQVksRUFBRXNHLHNCQUFVSSxLQXJDRjtBQXlDdEJ4RyxFQUFBQSxJQUFJLEVBQUVvRyxzQkFBVUssS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLENBQWhCLENBekNnQjtBQTZDdEJ4RyxFQUFBQSxrQkFBa0IsRUFBRW1HLHNCQUFVcEQsSUE3Q1I7QUFpRHRCN0MsRUFBQUEsS0FBSyxFQUFFaUcsc0JBQVVDO0FBakRLLENBQXhCO0FBb0RBakgsV0FBVyxDQUFDc0gsWUFBWixHQUEyQjtBQUN6QnBILEVBQUFBLFNBQVMsRUFBRXFILFNBRGM7QUFFekJwSCxFQUFBQSxZQUFZLEVBQUUsSUFGVztBQUd6QkMsRUFBQUEsUUFBUSxFQUFFLEtBSGU7QUFJekJDLEVBQUFBLFlBQVksRUFBRSxJQUpXO0FBS3pCQyxFQUFBQSxRQUFRLEVBQUVpSCxTQUxlO0FBTXpCaEgsRUFBQUEsY0FBYyxFQUFFZ0gsU0FOUztBQU96Qi9HLEVBQUFBLFlBQVksRUFBRSxFQVBXO0FBUXpCQyxFQUFBQSxrQkFBa0IsRUFBRSxJQVJLO0FBU3pCQyxFQUFBQSxZQUFZLEVBQUUsRUFUVztBQVV6QkUsRUFBQUEsSUFBSSxFQUFFLE9BVm1CO0FBV3pCQyxFQUFBQSxrQkFBa0IsRUFBRSxLQVhLO0FBWXpCRSxFQUFBQSxLQUFLLEVBQUU7QUFaa0IsQ0FBM0I7ZUFlZWYsVyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VDb250ZXh0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VNZW1vLFxuICB1c2VTdGF0ZSxcbiAgdXNlUmVmLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBjb2xvcjJoc2IsIGhzYjJoZXggfSBmcm9tIFwiLi4vX3V0aWwvY29sb3JcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b25cIlxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dFwiXG5pbXBvcnQgUG9wb3ZlciwgeyBJUG9wb3ZlclByb3BzIH0gZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi4vc2xpZGVyXCJcbmltcG9ydCB7XG4gIGlzTGVnYWxIZXhTdHJpbmcsXG4gIGFkZEhhc2hUYWcsXG4gIHJlbW92ZUhhc2hUYWcsXG4gIFNUQU5EQVJEUyxcbiAgU1RBTkRBUkRTX1RSQU5TUEFSRU5ULFxuICBUUkFOU1BBUkVOVF9CRyxcbn0gZnJvbSBcIi4vY29yZVwiXG5pbXBvcnQgQ29sb3JQaWNrZXJDb2xsYXBzZSBmcm9tIFwiLi9Db2xvclBpY2tlckNvbGxhcHNlXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktY3BcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElDb2xvclBpY2tlclByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6buY6K6k55qE5Yid5aeL5YC8IC0g5YaF6YOo6amx5YqoXG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBzdHJpbmcgfCBudWxsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog6L6T5YWl5qGG5piv5ZCm5pi+56S6XG4gICAqL1xuICBpbnB1dFZpc2libGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlgLzmlLnlj5jml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICAvKipcbiAgICog5ZyoIHZpc2libGUg5Y+Y5Li6IGZhbHNl77yM5Lul5Y+KIElucHV0IGJsdXIg5pe26Kem5Y+R55qEIGhhbmRsZXLvvJtcbiAgICog6L+Z5LiqIGhhbmRsZXIg6Z2e5bi454m55q6K77yM5Li65LqG6YWN5ZCI54m55q6K55qEIHJlY2VudENvbG9ycyBQcm9wIOS9v+eUqO+8jOivt+WcqOi/meS4quS6i+S7tuinpuWPkeeahOaXtuWAmeiuvue9riByZWNlbnRDb2xvcnPjgIJcbiAgICovXG4gIG9uRmluaXNoQ2hhbmdlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgLyoqXG4gICAqIOS8oOWFpSBQb3BvdmVyIOeahCBwcm9wc1xuICAgKi9cbiAgcG9wb3ZlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICAvKipcbiAgICog5by55Ye65qGG5YaF55qE57uT5p6c5Yy65Z+f5piv5ZCm5pi+56S6XG4gICAqL1xuICBwb3B1cFJlc3VsdFZpc2libGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmnIDov5Hkvb/nlKjnmoTpopzoibLvvIzmraTlip/og73pnZ7luLjnibnmrorvvIzpnIDphY3lkIggb25GaW5pc2hDaGFuZ2Ug5L2/55SoXG4gICAqL1xuICByZWNlbnRDb2xvcnM/OiBzdHJpbmdbXVxuICAvKipcbiAgICog5bC65a+45aSn5bCPXG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDlvIDlkK/pgI/mmI7oibJcbiAgICovXG4gIHRyYW5zcGFyZW50RW5hYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWAvCAtIOWklumDqOaOp+WItlxuICAgKi9cbiAgdmFsdWU/OiBzdHJpbmcgfCBudWxsXG59XG5cbi8qKlxuICog6aKc6Imy6YCJ5oup5ZmoXG4gKi9cbmNvbnN0IENvbG9yUGlja2VyOiBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICBJQ29sb3JQaWNrZXJQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55PlxuPiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlucHV0VmlzaWJsZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgb25GaW5pc2hDaGFuZ2UsXG4gICAgICBwb3BvdmVyUHJvcHMsXG4gICAgICBwb3B1cFJlc3VsdFZpc2libGUsXG4gICAgICByZWNlbnRDb2xvcnMsXG4gICAgICBzaXplOiBzaXplUHJvcCxcbiAgICAgIHRyYW5zcGFyZW50RW5hYmxlZCxcbiAgICAgIHZhbHVlOiB2YWx1ZVByb3AsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSUNvbG9yUGlja2VyUHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGxldCBwcmV2VmFsdWUgPSBcIlwiXG5cbiAgICBjb25zdCBnZXRJbml0aWFsU3RhdGUgPSAoKSA9PiB7XG4gICAgICBsZXQgaCA9IDBcbiAgICAgIGxldCBzID0gMFxuICAgICAgbGV0IGIgPSAwXG4gICAgICBsZXQgaW5wdXRWYWx1ZSA9IFwiXCJcbiAgICAgIGxldCB2YWx1ZVN0YXRlID0gXCJcIlxuICAgICAgY29uc3QgZ2V0U3RhdGUgPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgO1toLCBzLCBiXSA9IGNvbG9yMmhzYih2YWwpXG4gICAgICAgIGlmICh2YWwgPT09IFwidHJhbnNwYXJlbnRcIikge1xuICAgICAgICAgIHZhbHVlU3RhdGUgPSB2YWxcbiAgICAgICAgICBpbnB1dFZhbHVlID0gXCJcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlU3RhdGUgPSB2YWwudG9VcHBlckNhc2UoKVxuICAgICAgICAgIGlucHV0VmFsdWUgPSByZW1vdmVIYXNoVGFnKHZhbC50b1VwcGVyQ2FzZSgpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHZhbHVlUHJvcCAmJlxuICAgICAgICAoaXNMZWdhbEhleFN0cmluZyhyZW1vdmVIYXNoVGFnKHZhbHVlUHJvcCkpIHx8XG4gICAgICAgICAgKHRyYW5zcGFyZW50RW5hYmxlZCAmJiB2YWx1ZVByb3AgPT09IFwidHJhbnNwYXJlbnRcIikpXG4gICAgICApIHtcbiAgICAgICAgZ2V0U3RhdGUodmFsdWVQcm9wKVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZGVmYXVsdFZhbHVlICYmXG4gICAgICAgIChpc0xlZ2FsSGV4U3RyaW5nKHJlbW92ZUhhc2hUYWcoZGVmYXVsdFZhbHVlKSkgfHxcbiAgICAgICAgICAodHJhbnNwYXJlbnRFbmFibGVkICYmIGRlZmF1bHRWYWx1ZSA9PT0gXCJ0cmFuc3BhcmVudFwiKSlcbiAgICAgICkge1xuICAgICAgICBnZXRTdGF0ZShkZWZhdWx0VmFsdWUpXG4gICAgICB9XG5cbiAgICAgIHByZXZWYWx1ZSA9IHZhbHVlU3RhdGVcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaCxcbiAgICAgICAgczogcyAqIDEwMCxcbiAgICAgICAgYjogYiAqIDEwMCxcbiAgICAgICAgaW5wdXRWYWx1ZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlU3RhdGUsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdXNlTWVtbyhnZXRJbml0aWFsU3RhdGUsIFtdKVxuXG4gICAgY29uc3QgW2gsIHNldEhdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlLmgpXG4gICAgY29uc3QgW3MsIHNldFNdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlLnMpXG4gICAgY29uc3QgW2IsIHNldEJdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlLmIpXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlLmlucHV0VmFsdWUpXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUudmFsdWUpXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3N0YW5kYXJkQ29sbGFwc2VkLCBzZXRTdGFuZGFyZENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbY3VzdG9tQ29sbGFwc2VkLCBzZXRDdXN0b21Db2xsYXBzZWRdID0gdXNlU3RhdGUodHJ1ZSlcblxuICAgIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICBpZiAoXG4gICAgICB2YWx1ZVByb3AgJiZcbiAgICAgIGlzTGVnYWxIZXhTdHJpbmcocmVtb3ZlSGFzaFRhZyh2YWx1ZVByb3ApKSAmJlxuICAgICAgdmFsdWVQcm9wLnRvVXBwZXJDYXNlKCkgIT09IHZhbHVlXG4gICAgKSB7XG4gICAgICBzZXRIKGNvbG9yMmhzYih2YWx1ZVByb3ApWzBdKVxuICAgICAgc2V0Uyhjb2xvcjJoc2IodmFsdWVQcm9wKVsxXSAqIDEwMClcbiAgICAgIHNldEIoY29sb3IyaHNiKHZhbHVlUHJvcClbMl0gKiAxMDApXG4gICAgICBzZXRJbnB1dFZhbHVlKHJlbW92ZUhhc2hUYWcodmFsdWVQcm9wLnRvVXBwZXJDYXNlKCkpKVxuICAgICAgc2V0VmFsdWUodmFsdWVQcm9wLnRvVXBwZXJDYXNlKCkpXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRyYW5zcGFyZW50RW5hYmxlZCAmJlxuICAgICAgdmFsdWVQcm9wID09PSBcInRyYW5zcGFyZW50XCIgJiZcbiAgICAgIHZhbHVlICE9PSBcInRyYW5zcGFyZW50XCJcbiAgICApIHtcbiAgICAgIHNldEgoMClcbiAgICAgIHNldFMoMClcbiAgICAgIHNldEIoMClcbiAgICAgIHNldElucHV0VmFsdWUoXCJcIilcbiAgICAgIHNldFZhbHVlKFwidHJhbnNwYXJlbnRcIilcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG4gICAgY29uc3QgcG9wdXBJbnB1dFJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG4gICAgY29uc3QgdHJpZ2dlclJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG5cbiAgICBjb25zdCB7IHNpemU6IHNpemVDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG4gICAgY29uc3Qgc2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplUHJvcCwgc2l6ZUNvbnRleHQpXG5cbiAgICBsZXQgcGFsZXR0ZVJlY3Q6IE9taXQ8RE9NUmVjdCwgXCJ0b0pTT05cIj4gPSB7XG4gICAgICB0b3A6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIHdpZHRoOiAxNjAsXG4gICAgICBoZWlnaHQ6IDkwLFxuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH1gLCBgJHtwcmVmaXh9LSR7c2l6ZX1gKVxuXG4gICAgY29uc3QgY2FsbENoYW5nZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQcmVmaXhDbGljayA9ICgpID0+IHtcbiAgICAgIGlmICh2aXNpYmxlICYmIHBvcHVwSW5wdXRSZWYuY3VycmVudD8uaW5wdXQpIHtcbiAgICAgICAgcG9wdXBJbnB1dFJlZi5jdXJyZW50LmlucHV0LmZvY3VzKClcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXRSZWYuY3VycmVudD8uaW5wdXQpIHtcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5pbnB1dC5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVmlzaWJsZUNoYW5nZSA9IChib29sOiBib29sZWFuKSA9PiB7XG4gICAgICBzZXRWaXNpYmxlKGJvb2wpXG4gICAgICBpZiAoYm9vbCkge1xuICAgICAgICBwcmV2VmFsdWUgPSB2YWx1ZVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gcHJldlZhbHVlKSB7XG4gICAgICAgIHByZXZWYWx1ZSA9IHZhbHVlXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKG9uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgICAgICBvbkZpbmlzaENoYW5nZSh2YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dEJsdXIgPSAodHlwZT86IFwicG9wdXBcIikgPT4ge1xuICAgICAgaWYgKHRyYW5zcGFyZW50RW5hYmxlZCkge1xuICAgICAgICBpZiAoaW5wdXRWYWx1ZSAhPT0gXCJcIiAmJiB2YWx1ZSA9PT0gXCJ0cmFuc3BhcmVudFwiKSB7XG4gICAgICAgICAgc2V0SW5wdXRWYWx1ZShcIlwiKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFkZEhhc2hUYWcoaW5wdXRWYWx1ZSkgIT09IHZhbHVlKSB7XG4gICAgICAgIHNldElucHV0VmFsdWUocmVtb3ZlSGFzaFRhZyh2YWx1ZSkpXG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgIT09IHByZXZWYWx1ZSAmJiAhdHlwZSAmJiBvbkZpbmlzaENoYW5nZSkge1xuICAgICAgICBvbkZpbmlzaENoYW5nZSh2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dEZvY3VzID0gKHtcbiAgICAgIHRhcmdldCxcbiAgICB9OiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICB0YXJnZXQuc2VsZWN0KClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVWYWx1ZUNoYW5nZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICBpZiAodmFsLnRvVXBwZXJDYXNlKCkgPT09IFwiVFJBTlNQQVJFTlRcIikge1xuICAgICAgICAgIHNldElucHV0VmFsdWUoXCJcIilcbiAgICAgICAgICBzZXRWYWx1ZShcInRyYW5zcGFyZW50XCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgW25ld0gsIG5ld1MsIG5ld0JdID0gY29sb3IyaHNiKHZhbClcbiAgICAgICAgICBzZXRIKG5ld0gpXG4gICAgICAgICAgc2V0UyhuZXdTICogMTAwKVxuICAgICAgICAgIHNldEIobmV3QiAqIDEwMClcbiAgICAgICAgICBzZXRJbnB1dFZhbHVlKHJlbW92ZUhhc2hUYWcodmFsKSlcbiAgICAgICAgICBzZXRWYWx1ZSh2YWwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhbGxDaGFuZ2UodmFsID09PSBcIlRSQU5TUEFSRU5UXCIgPyBcInRyYW5zcGFyZW50XCIgOiB2YWwpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoe1xuICAgICAgdGFyZ2V0OiB7IHZhbHVlOiB2YWwgfSxcbiAgICB9OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3QgaW5wdXRWYWwgPSB2YWwuc3BsaXQoXCIjXCIpLmpvaW4oXCJcIilcbiAgICAgIHNldElucHV0VmFsdWUoaW5wdXRWYWwpXG4gICAgICBpZiAoaXNMZWdhbEhleFN0cmluZyhpbnB1dFZhbCkpIHtcbiAgICAgICAgaGFuZGxlVmFsdWVDaGFuZ2UoYWRkSGFzaFRhZyhpbnB1dFZhbCkpXG4gICAgICB9IGVsc2UgaWYgKHRyYW5zcGFyZW50RW5hYmxlZCAmJiBpbnB1dFZhbCA9PT0gXCJcIikge1xuICAgICAgICBoYW5kbGVWYWx1ZUNoYW5nZShcInRyYW5zcGFyZW50XCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ3VzdG9tQ2hhbmdlID0gKHR5cGU6IFwiaFwiIHwgXCJzXCIgfCBcImJcIiwgdmFsOiBudW1iZXIpID0+IHtcbiAgICAgIGxldCBuZXdWYWx1ZTogc3RyaW5nXG4gICAgICBpZiAodHlwZSA9PT0gXCJoXCIpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBoc2IyaGV4KHZhbCwgcyAvIDEwMCwgYiAvIDEwMClcbiAgICAgICAgc2V0SCh2YWwpXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwic1wiKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gaHNiMmhleChoLCB2YWwgLyAxMDAsIGIgLyAxMDApXG4gICAgICAgIHNldFModmFsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWUgPSBoc2IyaGV4KGgsIHMgLyAxMDAsIHZhbCAvIDEwMClcbiAgICAgICAgc2V0Qih2YWwpXG4gICAgICB9XG5cbiAgICAgIHNldElucHV0VmFsdWUocmVtb3ZlSGFzaFRhZyhuZXdWYWx1ZSkpXG4gICAgICBzZXRWYWx1ZShuZXdWYWx1ZSlcblxuICAgICAgY2FsbENoYW5nZShuZXdWYWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQYWxldHRlTW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0IH0gPSBwYWxldHRlUmVjdFxuXG4gICAgICBsZXQgbmV3UyA9IChlLnBhZ2VYIC0gbGVmdCAtIHdpbmRvdy5zY3JvbGxYKSAvIHdpZHRoXG4gICAgICBsZXQgbmV3QiA9IChlLnBhZ2VZIC0gdG9wIC0gd2luZG93LnNjcm9sbFkpIC8gaGVpZ2h0XG5cbiAgICAgIGlmIChuZXdTIDwgMCkge1xuICAgICAgICBuZXdTID0gMFxuICAgICAgfSBlbHNlIGlmIChuZXdTID4gMSkge1xuICAgICAgICBuZXdTID0gMVxuICAgICAgfVxuXG4gICAgICBpZiAobmV3QiA8IDApIHtcbiAgICAgICAgbmV3QiA9IDBcbiAgICAgIH0gZWxzZSBpZiAobmV3QiA+IDEpIHtcbiAgICAgICAgbmV3QiA9IDFcbiAgICAgIH1cblxuICAgICAgbmV3UyAqPSAxMDBcbiAgICAgIG5ld0IgPSAxMDAgLSBuZXdCICogMTAwXG5cbiAgICAgIGNvbnN0IG5ld0NvbG9yID0gaHNiMmhleChoLCBuZXdTIC8gMTAwLCBuZXdCIC8gMTAwKVxuXG4gICAgICBzZXRTKG5ld1MpXG4gICAgICBzZXRCKG5ld0IpXG4gICAgICBzZXRWYWx1ZShuZXdDb2xvcilcbiAgICAgIHNldElucHV0VmFsdWUocmVtb3ZlSGFzaFRhZyhuZXdDb2xvcikpXG5cbiAgICAgIGNhbGxDaGFuZ2UobmV3Q29sb3IpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGFsZXR0ZU1vdXNlVXAgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVQYWxldHRlTW91c2VNb3ZlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZVBhbGV0dGVNb3VzZVVwKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBhbGV0dGVNb3VzZURvd24gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IHsgY3VycmVudFRhcmdldCB9ID0gZVxuICAgICAgcGFsZXR0ZVJlY3QgPSBjdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBjb25zdCB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCB9ID0gcGFsZXR0ZVJlY3RcblxuICAgICAgY29uc3QgbmV3UyA9ICgoZS5wYWdlWCAtIGxlZnQgLSB3aW5kb3cuc2Nyb2xsWCkgLyB3aWR0aCkgKiAxMDBcbiAgICAgIGNvbnN0IG5ld0IgPSAxMDAgLSAoKGUucGFnZVkgLSB0b3AgLSB3aW5kb3cuc2Nyb2xsWSkgLyBoZWlnaHQpICogMTAwXG5cbiAgICAgIGNvbnN0IG5ld0NvbG9yID0gaHNiMmhleChoLCBuZXdTIC8gMTAwLCBuZXdCIC8gMTAwKVxuXG4gICAgICBzZXRTKG5ld1MpXG4gICAgICBzZXRCKG5ld0IpXG4gICAgICBzZXRWYWx1ZShuZXdDb2xvcilcbiAgICAgIHNldElucHV0VmFsdWUocmVtb3ZlSGFzaFRhZyhuZXdDb2xvcikpXG5cbiAgICAgIGNhbGxDaGFuZ2UobmV3Q29sb3IpXG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZVBhbGV0dGVNb3VzZU1vdmUpXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlUGFsZXR0ZU1vdXNlVXApXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ29sbGFwc2VDaGFuZ2UgPSAoXG4gICAgICBib29sOiBib29sZWFuLFxuICAgICAgdHlwZTogXCJzdGFuZGFyZFwiIHwgXCJjdXN0b21cIlxuICAgICkgPT4ge1xuICAgICAgaWYgKHR5cGUgPT09IFwic3RhbmRhcmRcIikge1xuICAgICAgICBzZXRTdGFuZGFyZENvbGxhcHNlZChib29sKVxuICAgICAgICBpZiAoIWJvb2wgJiYgIWN1c3RvbUNvbGxhcHNlZCkge1xuICAgICAgICAgIHNldEN1c3RvbUNvbGxhcHNlZCh0cnVlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY3VzdG9tXCIpIHtcbiAgICAgICAgc2V0Q3VzdG9tQ29sbGFwc2VkKGJvb2wpXG4gICAgICAgIGlmICghYm9vbCAmJiAhc3RhbmRhcmRDb2xsYXBzZWQpIHtcbiAgICAgICAgICBzZXRTdGFuZGFyZENvbGxhcHNlZCh0cnVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVySW5wdXQgPSAodHlwZT86IFwicG9wdXBcIikgPT4gKFxuICAgICAgPElucHV0XG4gICAgICAgIHJlZj17dHlwZSA/IHBvcHVwSW5wdXRSZWYgOiBpbnB1dFJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWlucHV0YH1cbiAgICAgICAgY2xlYXZlT3B0aW9ucz17eyB1cHBlcmNhc2U6IHRydWUgfX1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBsZWZ0RWxlbWVudD17XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJlZml4Q2xpY2t9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcHJlZml4YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAjXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgb25CbHVyPXsoKSA9PiBoYW5kbGVJbnB1dEJsdXIodHlwZSl9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgb25Gb2N1cz17aGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICBzaXplPXt0eXBlID8gXCJzbWFsbFwiIDogc2l6ZX1cbiAgICAgICAgdGhlbWU9e3R5cGUgJiYgXCJsaWdodFwifVxuICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgIC8+XG4gICAgKVxuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICBpbnB1dDogaW5wdXRSZWYuY3VycmVudCxcbiAgICAgIHBvcHVwSW5wdXQ6IHBvcHVwSW5wdXRSZWYuY3VycmVudCxcbiAgICAgIHRyaWdnZXI6IHRyaWdnZXJSZWYuY3VycmVudCxcbiAgICB9KSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgIGRhdGEtdmFsdWU9e3ZhbHVlfVxuICAgICAgICBkYXRhLWg9e2ggfHwgMH1cbiAgICAgICAgZGF0YS1zPXtzIHx8IDB9XG4gICAgICAgIGRhdGEtYj17YiB8fCAwfVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICBhbGlnbkVkZ2U9e2ZhbHNlfVxuICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbUxlZnRcIlxuICAgICAgICAgIHBvcHVwPXtcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcHVwYH0+XG4gICAgICAgICAgICAgIHtwb3B1cFJlc3VsdFZpc2libGUgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcHVwLXJlc3VsdGB9PlxuICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPT09IFwidHJhbnNwYXJlbnRcIiA/IFRSQU5TUEFSRU5UX0JHIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3JlbmRlcklucHV0KFwicG9wdXBcIil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtyZWNlbnRDb2xvcnMgJiYgISFyZWNlbnRDb2xvcnMubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJDb2xsYXBzZVxuICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbGxhcHNlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICBoZWFkZXI9XCLmnIDov5Hkvb/nlKhcIlxuICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXJlY2VudGB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtbLi4ubmV3IFNldChyZWNlbnRDb2xvcnMuc2xpY2UoMCwgNykpXS5tYXAoKGNvbG9yKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVZhbHVlQ2hhbmdlKGNvbG9yLnRvVXBwZXJDYXNlKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9PT0gXCJ0cmFuc3BhcmVudFwiID8gVFJBTlNQQVJFTlRfQkcgOiBjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgPENvbG9yUGlja2VyQ29sbGFwc2VcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ9e3N0YW5kYXJkQ29sbGFwc2VkfVxuICAgICAgICAgICAgICAgIG9uQ29sbGFwc2VDaGFuZ2U9eyhib29sKSA9PlxuICAgICAgICAgICAgICAgICAgaGFuZGxlQ29sbGFwc2VDaGFuZ2UoYm9vbCwgXCJzdGFuZGFyZFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWFkZXI9XCLmoIflh4boibLmnb9cIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc3RhbmRhcmRgfT5cbiAgICAgICAgICAgICAgICAgICAgeyh0cmFuc3BhcmVudEVuYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IFNUQU5EQVJEU19UUkFOU1BBUkVOVFxuICAgICAgICAgICAgICAgICAgICAgIDogU1RBTkRBUkRTXG4gICAgICAgICAgICAgICAgICAgICkubWFwKChjb2xvcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVmFsdWVDaGFuZ2UoY29sb3IpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPT09IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtwcmVmaXh9LXN0YW5kYXJkLWl0ZW1fc2VsZWN0ZWRgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID09PSBcIlRSQU5TUEFSRU5UXCIgPyBUUkFOU1BBUkVOVF9CRyA6IGNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENvbG9yUGlja2VyQ29sbGFwc2VcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ9e2N1c3RvbUNvbGxhcHNlZH1cbiAgICAgICAgICAgICAgICBvbkNvbGxhcHNlQ2hhbmdlPXsoYm9vbCkgPT5cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNvbGxhcHNlQ2hhbmdlKGJvb2wsIFwiY3VzdG9tXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIuiHquWumuS5iVwiXG4gICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jdXN0b21gfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1wYWxldHRlYH1cbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBgaHNsKCR7aH0sIDEwMCUsIDUwJSlgIH19XG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2hhbmRsZVBhbGV0dGVNb3VzZURvd259XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wYWxldHRlLXNgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBhbGV0dGUtYmB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbHVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBgY2FsYygke2J9JSAtIDdweClgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGBjYWxjKCR7c30lIC0gN3B4KWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNsaWRlci13cmFwcGVyYH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNsaWRlci1sYWJlbGB9Pkg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNsaWRlciAke3ByZWZpeH0tc2xpZGVyX2hgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWaXNpYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MzU5fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2h9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHBhcmFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbSAmJiAhQXJyYXkuaXNBcnJheShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDdXN0b21DaGFuZ2UoXCJoXCIsIHBhcmFtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1zbGlkZXItd3JhcHBlcmB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4fS1zbGlkZXItbGFiZWxgfT5TPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1zbGlkZXIgJHtwcmVmaXh9LXNsaWRlcl9zYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmlzaWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhwYXJhbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW0gJiYgIUFycmF5LmlzQXJyYXkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ3VzdG9tQ2hhbmdlKFwic1wiLCBwYXJhbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJhaWxTdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmYgMCUsIHRyYW5zcGFyZW50IDEwMCUpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgaHNsKCR7aH0sIDEwMCUsIDUwJSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2xpZGVyLXdyYXBwZXJgfT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2xpZGVyLWxhYmVsYH0+Qjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2xpZGVyICR7cHJlZml4fS1zbGlkZXJfYmB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZpc2libGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Yn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsocGFyYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtICYmICFBcnJheS5pc0FycmF5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUN1c3RvbUNoYW5nZShcImJcIiwgcGFyYW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICByYWlsU3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDAwIDAlLCB0cmFuc3BhcmVudCAxMDAlKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYGhzbCgke2h9LCAxMDAlLCA1MCUpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVmPXt0cmlnZ2VyUmVmfVxuICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiXG4gICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgICBvblZpc2libGVDaGFuZ2U9e2hhbmRsZVZpc2libGVDaGFuZ2V9XG4gICAgICAgICAgey4uLnBvcG92ZXJQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1waWNrZXJgfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhbHVlID09PSBcInRyYW5zcGFyZW50XCIgPyBUUkFOU1BBUkVOVF9CRyA6IHZhbHVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICB7aW5wdXRWaXNpYmxlICYmIHJlbmRlcklucHV0KCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbilcblxuQ29sb3JQaWNrZXIuZGlzcGxheU5hbWUgPSBcIkNvbG9yUGlja2VyXCJcblxuQ29sb3JQaWNrZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDpu5jorqTnmoTliJ3lp4vlgLwgLSDlhoXpg6jpqbHliqhcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6L6T5YWl5qGG5piv5ZCm5pi+56S6XG4gICAqL1xuICBpbnB1dFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5YC85pS55Y+Y5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOWcqCB2aXNpYmxlIOWPmOS4uiBmYWxzZe+8jOS7peWPiiBJbnB1dCBibHVyIOaXtuinpuWPkeeahCBoYW5kbGVy77ybXG4gICAqIOi/meS4qiBoYW5kbGVyIOmdnuW4uOeJueauiu+8jOS4uuS6humFjeWQiOeJueauiueahCByZWNlbnRDb2xvcnMgUHJvcCDkvb/nlKjvvIzor7flnKjov5nkuKrkuovku7bop6blj5HnmoTml7blgJnorr7nva4gcmVjZW50Q29sb3Jz44CCXG4gICAqL1xuICBvbkZpbmlzaENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDkvKDlhaUgUG9wb3ZlciDnmoQgcHJvcHNcbiAgICovXG4gIHBvcG92ZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOW8ueWHuuahhuWGheeahOe7k+aenOWMuuWfn+aYr+WQpuaYvuekulxuICAgKi9cbiAgcG9wdXBSZXN1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOacgOi/keS9v+eUqOeahOminOiJsu+8jOatpOWKn+iDvemdnuW4uOeJueauiu+8jOmcgOmFjeWQiCBvbkZpbmlzaENoYW5nZSDkvb/nlKhcbiAgICovXG4gIHJlY2VudENvbG9yczogUHJvcFR5cGVzLmFycmF5LFxuICAvKipcbiAgICog5bC65a+45aSn5bCPXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog5byA5ZCv6YCP5piO6ImyXG4gICAqL1xuICB0cmFuc3BhcmVudEVuYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5YC8IC0g5aSW6YOo5o6n5Yi2XG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuQ29sb3JQaWNrZXIuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGlucHV0VmlzaWJsZTogdHJ1ZSxcbiAgb25DaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25GaW5pc2hDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgcG9wb3ZlclByb3BzOiB7fSxcbiAgcG9wdXBSZXN1bHRWaXNpYmxlOiB0cnVlLFxuICByZWNlbnRDb2xvcnM6IFtdLFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHRyYW5zcGFyZW50RW5hYmxlZDogZmFsc2UsXG4gIHZhbHVlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xvclBpY2tlclxuIl19