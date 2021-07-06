"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _getScrollBarSize = _interopRequireDefault(require("rc-util/lib/getScrollBarSize"));

var _icon = _interopRequireDefault(require("../icon"));

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

var prefix = "adui-upload-img";
var Img = (0, _react.forwardRef)(function (_ref, ref) {
  var _classNames;

  var className = _ref.className,
      hoverOperations = _ref.hoverOperations,
      icon = _ref.icon,
      onIconClick = _ref.onIconClick,
      onUpload = _ref.onUpload,
      previewDisabled = _ref.previewDisabled,
      progress = _ref.progress,
      src = _ref.src,
      otherProps = _objectWithoutProperties(_ref, ["className", "hoverOperations", "icon", "onIconClick", "onUpload", "previewDisabled", "progress", "src"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      previewing = _useState2[0],
      setPreviewing = _useState2[1];

  var uploadElementRef = (0, _react.useRef)(null);
  var scrollbarWidth = (0, _react.useMemo)(_getScrollBarSize["default"], []);
  var hasOperation = hoverOperations === null || hoverOperations === void 0 ? void 0 : hoverOperations.length;
  var classSet = (0, _classnames["default"])(className, "".concat(prefix), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-hasOperation"), hasOperation), _defineProperty(_classNames, "".concat(prefix, "-uploaded"), src), _defineProperty(_classNames, "".concat(prefix, "-progressing"), progress !== null), _classNames));

  var handleClick = function handleClick() {
    if (!src && onUpload) {
      onUpload();
    }
  };

  var resetScrollbarPadding = function resetScrollbarPadding() {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  };

  var setScrollbarPadding = function setScrollbarPadding() {
    var _window = window,
        innerWidth = _window.innerWidth;
    var bodyIsOverflowing = document.body.clientWidth < innerWidth;

    if (bodyIsOverflowing && !document.body.style.paddingRight && scrollbarWidth !== undefined) {
      document.body.style.paddingRight = "".concat(scrollbarWidth, "px");
    }

    document.body.style.overflow = "hidden";
  };

  var handleCancelPreview = function handleCancelPreview() {
    setPreviewing(false);
    resetScrollbarPadding();
  };

  var handleKeyDown = function handleKeyDown(_ref2) {
    var key = _ref2.key;

    if (key === "Escape") {
      handleCancelPreview();
      window.removeEventListener("keydown", handleKeyDown);
    }
  };

  var handlePreview = function handlePreview() {
    setPreviewing(true);
    setScrollbarPadding();
    window.addEventListener("keydown", handleKeyDown);
  };

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      uploadElement: uploadElementRef.current,
      handlePreview: handlePreview,
      handleCancelPreview: handleCancelPreview
    };
  });
  return _react["default"].createElement("div", _extends({
    role: "none",
    className: classSet
  }, otherProps), _react["default"].createElement("div", {
    className: "".concat(prefix, "-uploaded-inner")
  }, _react["default"].createElement("img", {
    className: "".concat(prefix, "-file"),
    src: src,
    alt: "img"
  }), _react["default"].createElement("div", {
    role: "none",
    className: "".concat(prefix, "-cover"),
    onClick: function onClick() {
      if (!previewDisabled) {
        handlePreview();
      }
    }
  }), hoverOperations !== null && hoverOperations !== void 0 && hoverOperations.length ? _react["default"].createElement("div", {
    className: "".concat(prefix, "-operations")
  }, hoverOperations.map(function (_ref3, i) {
    var text = _ref3.text,
        others = _objectWithoutProperties(_ref3, ["text"]);

    return _react["default"].createElement(_react["default"].Fragment, {
      key: i
    }, _react["default"].createElement("div", _extends({
      className: "".concat(prefix, "-operations-item")
    }, others), text), i !== hoverOperations.length - 1 && _react["default"].createElement("i", {
      className: "".concat(prefix, "-operations-divider")
    }));
  })) : _react["default"].createElement("div", {
    className: "".concat(prefix, "-remove")
  }, _react["default"].createElement(_icon["default"], {
    icon: icon || "delete-outlined",
    onClick: function onClick(e) {
      if (onIconClick) {
        onIconClick(e);
      }
    }
  }))), _react["default"].createElement("div", {
    className: "".concat(prefix, "-unuploaded-inner")
  }, _react["default"].createElement("div", {
    role: "none",
    className: "".concat(prefix, "-upload-element"),
    onClick: handleClick,
    ref: uploadElementRef
  }, _react["default"].createElement(_icon["default"], {
    icon: "add",
    className: "".concat(prefix, "-icon")
  })), _react["default"].createElement("div", {
    className: "".concat(prefix, "-progress")
  }, _react["default"].createElement("i", {
    style: {
      width: "".concat(progress, "%")
    }
  }))), _react["default"].createElement("div", {
    className: (0, _classnames["default"])("".concat(prefix, "-preview"), _defineProperty({}, "".concat(prefix, "-preview-show"), previewing)),
    onClick: handleCancelPreview,
    role: "none"
  }, _react["default"].createElement("div", {
    className: "".concat(prefix, "-preview-inner")
  }, _react["default"].createElement("img", {
    alt: "img",
    className: "".concat(prefix, "-preview-file"),
    src: src,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    role: "none"
  }), _react["default"].createElement(_icon["default"], {
    size: 36,
    icon: "cancel",
    color: "#fff",
    interactive: true
  }))));
});
Img.propTypes = {
  className: _propTypes["default"].string,
  hoverOperations: _propTypes["default"].any,
  icon: _propTypes["default"].any,
  onIconClick: _propTypes["default"].func,
  onUpload: _propTypes["default"].func,
  previewDisabled: _propTypes["default"].bool,
  progress: _propTypes["default"].number,
  src: _propTypes["default"].string
};
Img.defaultProps = {
  className: "",
  hoverOperations: undefined,
  icon: "delete-outlined",
  onIconClick: function onIconClick() {},
  onUpload: function onUpload() {},
  previewDisabled: false,
  progress: null,
  src: ""
};
var _default = Img;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdXBsb2FkL0ltZy50c3giXSwibmFtZXMiOlsicHJlZml4IiwiSW1nIiwicmVmIiwiY2xhc3NOYW1lIiwiaG92ZXJPcGVyYXRpb25zIiwiaWNvbiIsIm9uSWNvbkNsaWNrIiwib25VcGxvYWQiLCJwcmV2aWV3RGlzYWJsZWQiLCJwcm9ncmVzcyIsInNyYyIsIm90aGVyUHJvcHMiLCJwcmV2aWV3aW5nIiwic2V0UHJldmlld2luZyIsInVwbG9hZEVsZW1lbnRSZWYiLCJzY3JvbGxiYXJXaWR0aCIsImdldFNjcm9sbEJhclNpemUiLCJoYXNPcGVyYXRpb24iLCJsZW5ndGgiLCJjbGFzc1NldCIsImhhbmRsZUNsaWNrIiwicmVzZXRTY3JvbGxiYXJQYWRkaW5nIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBhZGRpbmdSaWdodCIsInNldFNjcm9sbGJhclBhZGRpbmciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYm9keUlzT3ZlcmZsb3dpbmciLCJjbGllbnRXaWR0aCIsInVuZGVmaW5lZCIsImhhbmRsZUNhbmNlbFByZXZpZXciLCJoYW5kbGVLZXlEb3duIiwia2V5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVByZXZpZXciLCJhZGRFdmVudExpc3RlbmVyIiwidXBsb2FkRWxlbWVudCIsImN1cnJlbnQiLCJtYXAiLCJpIiwidGV4dCIsIm90aGVycyIsImUiLCJ3aWR0aCIsInN0b3BQcm9wYWdhdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFueSIsImZ1bmMiLCJib29sIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxpQkFBZjtBQWlEQSxJQUFNQyxHQUVMLEdBQUcsdUJBQ0YsZ0JB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Ki9cbmltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VNZW1vLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgZ2V0U2Nyb2xsQmFyU2l6ZSBmcm9tIFwicmMtdXRpbC9saWIvZ2V0U2Nyb2xsQmFyU2l6ZVwiXG5pbXBvcnQgSWNvbiwgeyBJY29uTmFtZXMgfSBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXVwbG9hZC1pbWdcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElJbWdQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOm8oOaghyBob3ZlciDml7bnmoTmk43kvZzmmL7npLpcbiAgICovXG4gIGhvdmVyT3BlcmF0aW9ucz86IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnlcbiAgICB0ZXh0OiBzdHJpbmdcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHZvaWRcbiAgfVtdXG4gIC8qKlxuICAgKiDmjIflrprlj7PkuIrop5Llm77moIdcbiAgICovXG4gIGljb24/OiBJY29uTmFtZXNcbiAgLyoqXG4gICAqIOWPs+S4iuinkuWbvuagh+eCueWHu+aXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkljb25DbGljaz86IChlOiBSZWFjdC5Nb3VzZUV2ZW50PFNWR1NWR0VsZW1lbnQ+KSA9PiB2b2lkXG4gIC8qKlxuICAgKiDop6blj5HkuIrkvKBcbiAgICovXG4gIG9uVXBsb2FkPzogKCkgPT4gdm9pZFxuICAvKipcbiAgICog56aB5q2i54K55Ye75Zu+54mH6aKE6KeIXG4gICAqL1xuICBwcmV2aWV3RGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDov5vluqbvvIzkvKDlhaUgbnVsbCDml7booajnpLrkuI3mmL7npLrov5vluqbmnaFcbiAgICovXG4gIHByb2dyZXNzPzogbnVtYmVyIHwgbnVsbFxuICAvKipcbiAgICog5LiK5Lyg5oiQ5Yqf5ZCO55qE5Zu+54mH5Zyw5Z2AXG4gICAqL1xuICBzcmM/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSW1nU3RhdGUge1xuICBwcmV2aWV3aW5nOiBib29sZWFuXG59XG5cbi8qKlxuICog5peL6L2s5Yqg6L2955So5LqO5ZGK55+l55So5oi35L+h5oGv5YaF5a6555qE5Yqg6L2954q25oCB77yM6YCa5bi45piv5Y2z5pe244CB55+t5pe255qE44CCXG4gKi9cbmNvbnN0IEltZzogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgSUltZ1Byb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+XG4+ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGhvdmVyT3BlcmF0aW9ucyxcbiAgICAgIGljb24sXG4gICAgICBvbkljb25DbGljayxcbiAgICAgIG9uVXBsb2FkLFxuICAgICAgcHJldmlld0Rpc2FibGVkLFxuICAgICAgcHJvZ3Jlc3MsXG4gICAgICBzcmMsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSUltZ1Byb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBbcHJldmlld2luZywgc2V0UHJldmlld2luZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IHVwbG9hZEVsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHVzZU1lbW8oZ2V0U2Nyb2xsQmFyU2l6ZSwgW10pXG5cbiAgICBjb25zdCBoYXNPcGVyYXRpb24gPSBob3Zlck9wZXJhdGlvbnM/Lmxlbmd0aFxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fWAsIHtcbiAgICAgIFtgJHtwcmVmaXh9LWhhc09wZXJhdGlvbmBdOiBoYXNPcGVyYXRpb24sXG4gICAgICBbYCR7cHJlZml4fS11cGxvYWRlZGBdOiBzcmMsXG4gICAgICBbYCR7cHJlZml4fS1wcm9ncmVzc2luZ2BdOiBwcm9ncmVzcyAhPT0gbnVsbCxcbiAgICB9KVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoIXNyYyAmJiBvblVwbG9hZCkge1xuICAgICAgICBvblVwbG9hZCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRTY3JvbGxiYXJQYWRkaW5nID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIlxuICAgIH1cblxuICAgIGNvbnN0IHNldFNjcm9sbGJhclBhZGRpbmcgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGlubmVyV2lkdGggfSA9IHdpbmRvd1xuICAgICAgY29uc3QgYm9keUlzT3ZlcmZsb3dpbmcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgaW5uZXJXaWR0aFxuICAgICAgaWYgKFxuICAgICAgICBib2R5SXNPdmVyZmxvd2luZyAmJlxuICAgICAgICAhZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgJiZcbiAgICAgICAgc2Nyb2xsYmFyV2lkdGggIT09IHVuZGVmaW5lZFxuICAgICAgKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgICB9XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNhbmNlbFByZXZpZXcgPSAoKSA9PiB7XG4gICAgICBzZXRQcmV2aWV3aW5nKGZhbHNlKVxuICAgICAgcmVzZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKHsga2V5IH06IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgaGFuZGxlQ2FuY2VsUHJldmlldygpXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVByZXZpZXcgPSAoKSA9PiB7XG4gICAgICBzZXRQcmV2aWV3aW5nKHRydWUpXG4gICAgICBzZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKVxuICAgIH1cblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgdXBsb2FkRWxlbWVudDogdXBsb2FkRWxlbWVudFJlZi5jdXJyZW50LFxuICAgICAgaGFuZGxlUHJldmlldyxcbiAgICAgIGhhbmRsZUNhbmNlbFByZXZpZXcsXG4gICAgfSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByb2xlPVwibm9uZVwiIGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdXBsb2FkZWQtaW5uZXJgfT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YCR7cHJlZml4fS1maWxlYH0gc3JjPXtzcmN9IGFsdD1cImltZ1wiIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNvdmVyYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFwcmV2aWV3RGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVQcmV2aWV3KClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtob3Zlck9wZXJhdGlvbnM/Lmxlbmd0aCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW9wZXJhdGlvbnNgfT5cbiAgICAgICAgICAgICAge2hvdmVyT3BlcmF0aW9ucy5tYXAoKHsgdGV4dCwgLi4ub3RoZXJzIH0sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW9wZXJhdGlvbnMtaXRlbWB9IHsuLi5vdGhlcnN9PlxuICAgICAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAge2kgIT09IGhvdmVyT3BlcmF0aW9ucy5sZW5ndGggLSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW9wZXJhdGlvbnMtZGl2aWRlcmB9IC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXJlbW92ZWB9PlxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIGljb249e2ljb24gfHwgXCJkZWxldGUtb3V0bGluZWRcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKG9uSWNvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uSWNvbkNsaWNrKGUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS11bnVwbG9hZGVkLWlubmVyYH0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXVwbG9hZC1lbGVtZW50YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgcmVmPXt1cGxvYWRFbGVtZW50UmVmfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJhZGRcIiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taWNvbmB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcHJvZ3Jlc3NgfT5cbiAgICAgICAgICAgIDxpIHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9ncmVzc30lYCB9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXByZXZpZXdgLCB7XG4gICAgICAgICAgICBbYCR7cHJlZml4fS1wcmV2aWV3LXNob3dgXTogcHJldmlld2luZyxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYW5jZWxQcmV2aWV3fVxuICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXByZXZpZXctaW5uZXJgfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgYWx0PVwiaW1nXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXByZXZpZXctZmlsZWB9XG4gICAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJY29uIHNpemU9ezM2fSBpY29uPVwiY2FuY2VsXCIgY29sb3I9XCIjZmZmXCIgaW50ZXJhY3RpdmUgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbilcblxuSW1nLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6byg5qCHIGhvdmVyIOaXtueahOaTjeS9nOaYvuekulxuICAgKi9cbiAgaG92ZXJPcGVyYXRpb25zOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5oyH5a6a5Y+z5LiK6KeS5Zu+5qCHXG4gICAqL1xuICBpY29uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5Y+z5LiK6KeS5Zu+5qCH54K55Ye75pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uSWNvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOinpuWPkeS4iuS8oFxuICAgKi9cbiAgb25VcGxvYWQ6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog56aB5q2i54K55Ye75Zu+54mH6aKE6KeIXG4gICAqL1xuICBwcmV2aWV3RGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6L+b5bqm77yM5Lyg5YWlIG51bGwg5pe26KGo56S65LiN5pi+56S66L+b5bqm5p2hXG4gICAqL1xuICBwcm9ncmVzczogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOS4iuS8oOaIkOWKn+WQjueahOWbvueJh+WcsOWdgFxuICAgKi9cbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5JbWcuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IFwiXCIsXG4gIGhvdmVyT3BlcmF0aW9uczogdW5kZWZpbmVkLFxuICBpY29uOiBcImRlbGV0ZS1vdXRsaW5lZFwiLFxuICBvbkljb25DbGljazogKCkgPT4ge30sXG4gIG9uVXBsb2FkOiAoKSA9PiB7fSxcbiAgcHJldmlld0Rpc2FibGVkOiBmYWxzZSxcbiAgcHJvZ3Jlc3M6IG51bGwsXG4gIHNyYzogXCJcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1nXG4iXX0=