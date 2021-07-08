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
      disabled = _ref.disabled,
      hoverOperations = _ref.hoverOperations,
      icon = _ref.icon,
      onIconClick = _ref.onIconClick,
      onUpload = _ref.onUpload,
      previewDisabled = _ref.previewDisabled,
      progress = _ref.progress,
      src = _ref.src,
      otherProps = _objectWithoutProperties(_ref, ["className", "disabled", "hoverOperations", "icon", "onIconClick", "onUpload", "previewDisabled", "progress", "src"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      previewing = _useState2[0],
      setPreviewing = _useState2[1];

  var uploadElementRef = (0, _react.useRef)(null);
  var scrollbarWidth = (0, _react.useMemo)(_getScrollBarSize["default"], []);
  var hasOperation = hoverOperations === null || hoverOperations === void 0 ? void 0 : hoverOperations.length;
  var classSet = (0, _classnames["default"])(className, "".concat(prefix), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-hasOperation"), hasOperation), _defineProperty(_classNames, "".concat(prefix, "-uploaded"), src), _defineProperty(_classNames, "".concat(prefix, "-progressing"), progress !== null), _defineProperty(_classNames, "".concat(prefix, "-noIcon"), icon === null), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disabled), _classNames));

  var handleClick = function handleClick() {
    if (!src && onUpload && !disabled) {
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
  disabled: _propTypes["default"].bool,
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
  disabled: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdXBsb2FkL0ltZy50c3giXSwibmFtZXMiOlsicHJlZml4IiwiSW1nIiwicmVmIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJob3Zlck9wZXJhdGlvbnMiLCJpY29uIiwib25JY29uQ2xpY2siLCJvblVwbG9hZCIsInByZXZpZXdEaXNhYmxlZCIsInByb2dyZXNzIiwic3JjIiwib3RoZXJQcm9wcyIsInByZXZpZXdpbmciLCJzZXRQcmV2aWV3aW5nIiwidXBsb2FkRWxlbWVudFJlZiIsInNjcm9sbGJhcldpZHRoIiwiZ2V0U2Nyb2xsQmFyU2l6ZSIsImhhc09wZXJhdGlvbiIsImxlbmd0aCIsImNsYXNzU2V0IiwiaGFuZGxlQ2xpY2siLCJyZXNldFNjcm9sbGJhclBhZGRpbmciLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwicGFkZGluZ1JpZ2h0Iiwic2V0U2Nyb2xsYmFyUGFkZGluZyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJib2R5SXNPdmVyZmxvd2luZyIsImNsaWVudFdpZHRoIiwidW5kZWZpbmVkIiwiaGFuZGxlQ2FuY2VsUHJldmlldyIsImhhbmRsZUtleURvd24iLCJrZXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlUHJldmlldyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGxvYWRFbGVtZW50IiwiY3VycmVudCIsIm1hcCIsImkiLCJ0ZXh0Iiwib3RoZXJzIiwiZSIsIndpZHRoIiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImFueSIsImZ1bmMiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQU9BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLGlCQUFmO0FBcURBLElBQU1DLEdBRUwsR0FB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RUFBRSxvQkFBTSxDQUFFLENBTkQ7QUFPakJDLEVBQUFBLGVBQWUsRUFBRSxLQVBBO0FBUWpCQyxFQUFBQSxRQUFRLEVBQUUsSUFSTztBQVNqQkMsRUFBQUEsR0FBRyxFQUFFO0FBVFksQ0FBbkI7ZUFZZVYsRyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xuaW1wb3J0IFJlYWN0LCB7XG4gIGZvcndhcmRSZWYsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZU1lbW8sXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBnZXRTY3JvbGxCYXJTaXplIGZyb20gXCJyYy11dGlsL2xpYi9nZXRTY3JvbGxCYXJTaXplXCJcbmltcG9ydCBJY29uLCB7IEljb25OYW1lcyB9IGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdXBsb2FkLWltZ1wiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUltZ1Byb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6byg5qCHIGhvdmVyIOaXtueahOaTjeS9nOaYvuekulxuICAgKi9cbiAgaG92ZXJPcGVyYXRpb25zPzoge1xuICAgIFtrZXk6IHN0cmluZ106IGFueVxuICAgIHRleHQ6IHN0cmluZ1xuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZFxuICB9W11cbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmjIflrprlj7PkuIrop5Llm77moIdcbiAgICovXG4gIGljb24/OiBJY29uTmFtZXMgfCBudWxsXG4gIC8qKlxuICAgKiDlj7PkuIrop5Llm77moIfngrnlh7vml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25JY29uQ2xpY2s/OiAoZTogUmVhY3QuTW91c2VFdmVudDxTVkdTVkdFbGVtZW50PikgPT4gdm9pZFxuICAvKipcbiAgICog6Kem5Y+R5LiK5LygXG4gICAqL1xuICBvblVwbG9hZD86ICgpID0+IHZvaWRcbiAgLyoqXG4gICAqIOemgeatoueCueWHu+WbvueJh+mihOiniFxuICAgKi9cbiAgcHJldmlld0Rpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog6L+b5bqm77yM5Lyg5YWlIG51bGwg5pe26KGo56S65LiN5pi+56S66L+b5bqm5p2hXG4gICAqL1xuICBwcm9ncmVzcz86IG51bWJlciB8IG51bGxcbiAgLyoqXG4gICAqIOS4iuS8oOaIkOWKn+WQjueahOWbvueJh+WcsOWdgFxuICAgKi9cbiAgc3JjPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUltZ1N0YXRlIHtcbiAgcHJldmlld2luZzogYm9vbGVhblxufVxuXG4vKipcbiAqIOaXi+i9rOWKoOi9veeUqOS6juWRiuefpeeUqOaIt+S/oeaBr+WGheWuueeahOWKoOi9veeKtuaAge+8jOmAmuW4uOaYr+WNs+aXtuOAgeefreaXtueahOOAglxuICovXG5jb25zdCBJbWc6IFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gIElJbWdQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55PlxuPiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGhvdmVyT3BlcmF0aW9ucyxcbiAgICAgIGljb24sXG4gICAgICBvbkljb25DbGljayxcbiAgICAgIG9uVXBsb2FkLFxuICAgICAgcHJldmlld0Rpc2FibGVkLFxuICAgICAgcHJvZ3Jlc3MsXG4gICAgICBzcmMsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSUltZ1Byb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBbcHJldmlld2luZywgc2V0UHJldmlld2luZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IHVwbG9hZEVsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHVzZU1lbW8oZ2V0U2Nyb2xsQmFyU2l6ZSwgW10pXG5cbiAgICBjb25zdCBoYXNPcGVyYXRpb24gPSBob3Zlck9wZXJhdGlvbnM/Lmxlbmd0aFxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fWAsIHtcbiAgICAgIFtgJHtwcmVmaXh9LWhhc09wZXJhdGlvbmBdOiBoYXNPcGVyYXRpb24sXG4gICAgICBbYCR7cHJlZml4fS11cGxvYWRlZGBdOiBzcmMsXG4gICAgICBbYCR7cHJlZml4fS1wcm9ncmVzc2luZ2BdOiBwcm9ncmVzcyAhPT0gbnVsbCxcbiAgICAgIFtgJHtwcmVmaXh9LW5vSWNvbmBdOiBpY29uID09PSBudWxsLFxuICAgICAgW2Ake3ByZWZpeH0tZGlzYWJsZWRgXTogZGlzYWJsZWQsXG4gICAgfSlcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKCFzcmMgJiYgb25VcGxvYWQgJiYgIWRpc2FibGVkKSB7XG4gICAgICAgIG9uVXBsb2FkKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXNldFNjcm9sbGJhclBhZGRpbmcgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJcIlxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0U2Nyb2xsYmFyUGFkZGluZyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgaW5uZXJXaWR0aCB9ID0gd2luZG93XG4gICAgICBjb25zdCBib2R5SXNPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCBpbm5lcldpZHRoXG4gICAgICBpZiAoXG4gICAgICAgIGJvZHlJc092ZXJmbG93aW5nICYmXG4gICAgICAgICFkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCAmJlxuICAgICAgICBzY3JvbGxiYXJXaWR0aCAhPT0gdW5kZWZpbmVkXG4gICAgICApIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtzY3JvbGxiYXJXaWR0aH1weGBcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsUHJldmlldyA9ICgpID0+IHtcbiAgICAgIHNldFByZXZpZXdpbmcoZmFsc2UpXG4gICAgICByZXNldFNjcm9sbGJhclBhZGRpbmcoKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoeyBrZXkgfTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBoYW5kbGVDYW5jZWxQcmV2aWV3KClcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUHJldmlldyA9ICgpID0+IHtcbiAgICAgIHNldFByZXZpZXdpbmcodHJ1ZSlcbiAgICAgIHNldFNjcm9sbGJhclBhZGRpbmcoKVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pXG4gICAgfVxuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICB1cGxvYWRFbGVtZW50OiB1cGxvYWRFbGVtZW50UmVmLmN1cnJlbnQsXG4gICAgICBoYW5kbGVQcmV2aWV3LFxuICAgICAgaGFuZGxlQ2FuY2VsUHJldmlldyxcbiAgICB9KSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJvbGU9XCJub25lXCIgY2xhc3NOYW1lPXtjbGFzc1NldH0gey4uLm90aGVyUHJvcHN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS11cGxvYWRlZC1pbm5lcmB9PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWZpbGVgfSBzcmM9e3NyY30gYWx0PVwiaW1nXCIgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY292ZXJgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXByZXZpZXdEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZVByZXZpZXcoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2hvdmVyT3BlcmF0aW9ucz8ubGVuZ3RoID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tb3BlcmF0aW9uc2B9PlxuICAgICAgICAgICAgICB7aG92ZXJPcGVyYXRpb25zLm1hcCgoeyB0ZXh0LCAuLi5vdGhlcnMgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tb3BlcmF0aW9ucy1pdGVtYH0gey4uLm90aGVyc30+XG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7aSAhPT0gaG92ZXJPcGVyYXRpb25zLmxlbmd0aCAtIDEgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2Ake3ByZWZpeH0tb3BlcmF0aW9ucy1kaXZpZGVyYH0gLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcmVtb3ZlYH0+XG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17aWNvbiB8fCBcImRlbGV0ZS1vdXRsaW5lZFwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAob25JY29uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgb25JY29uQ2xpY2soZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXVudXBsb2FkZWQtaW5uZXJgfT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdXBsb2FkLWVsZW1lbnRgfVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICByZWY9e3VwbG9hZEVsZW1lbnRSZWZ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb24gaWNvbj1cImFkZFwiIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pY29uYH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wcm9ncmVzc2B9PlxuICAgICAgICAgICAgPGkgc3R5bGU9e3sgd2lkdGg6IGAke3Byb2dyZXNzfSVgIH19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tcHJldmlld2AsIHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LXByZXZpZXctc2hvd2BdOiBwcmV2aWV3aW5nLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNhbmNlbFByZXZpZXd9XG4gICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcHJldmlldy1pbm5lcmB9PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBhbHQ9XCJpbWdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcHJldmlldy1maWxlYH1cbiAgICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEljb24gc2l6ZT17MzZ9IGljb249XCJjYW5jZWxcIiBjb2xvcj1cIiNmZmZcIiBpbnRlcmFjdGl2ZSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuKVxuXG5JbWcucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOm8oOaghyBob3ZlciDml7bnmoTmk43kvZzmmL7npLpcbiAgICovXG4gIGhvdmVyT3BlcmF0aW9uczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOaMh+WumuWPs+S4iuinkuWbvuagh1xuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWPs+S4iuinkuWbvuagh+eCueWHu+aXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkljb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDop6blj5HkuIrkvKBcbiAgICovXG4gIG9uVXBsb2FkOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOemgeatoueCueWHu+WbvueJh+mihOiniFxuICAgKi9cbiAgcHJldmlld0Rpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOi/m+W6pu+8jOS8oOWFpSBudWxsIOaXtuihqOekuuS4jeaYvuekuui/m+W6puadoVxuICAgKi9cbiAgcHJvZ3Jlc3M6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDkuIrkvKDmiJDlip/lkI7nmoTlm77niYflnLDlnYBcbiAgICovXG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuSW1nLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBcIlwiLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGhvdmVyT3BlcmF0aW9uczogdW5kZWZpbmVkLFxuICBpY29uOiBcImRlbGV0ZS1vdXRsaW5lZFwiLFxuICBvbkljb25DbGljazogKCkgPT4ge30sXG4gIG9uVXBsb2FkOiAoKSA9PiB7fSxcbiAgcHJldmlld0Rpc2FibGVkOiBmYWxzZSxcbiAgcHJvZ3Jlc3M6IG51bGwsXG4gIHNyYzogXCJcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1nXG4iXX0=