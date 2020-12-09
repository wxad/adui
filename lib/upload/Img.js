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
      icon = _ref.icon,
      onIconClick = _ref.onIconClick,
      onUpload = _ref.onUpload,
      progress = _ref.progress,
      src = _ref.src,
      otherProps = _objectWithoutProperties(_ref, ["className", "icon", "onIconClick", "onUpload", "progress", "src"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      previewing = _useState2[0],
      setPreviewing = _useState2[1];

  var uploadElementRef = (0, _react.useRef)(null);
  var scrollbarWidth = (0, _react.useMemo)(_getScrollBarSize["default"], []);
  var classSet = (0, _classnames["default"])(className, "".concat(prefix), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-uploaded"), src), _defineProperty(_classNames, "".concat(prefix, "-progressing"), progress !== null), _classNames));

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
    onClick: handlePreview
  }), _react["default"].createElement("div", {
    className: "".concat(prefix, "-remove")
  }, _react["default"].createElement(_icon["default"], {
    icon: icon || "delete-outlined",
    onClick: onIconClick
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
  icon: _propTypes["default"].any,
  onIconClick: _propTypes["default"].func,
  onUpload: _propTypes["default"].func,
  progress: _propTypes["default"].number,
  src: _propTypes["default"].string
};
Img.defaultProps = {
  className: "",
  icon: "delete-outlined",
  onIconClick: function onIconClick() {},
  onUpload: function onUpload() {},
  progress: null,
  src: ""
};
var _default = Img;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdXBsb2FkL0ltZy50c3giXSwibmFtZXMiOlsicHJlZml4IiwiSW1nIiwicmVmIiwiY2xhc3NOYW1lIiwiaWNvbiIsIm9uSWNvbkNsaWNrIiwib25VcGxvYWQiLCJwcm9ncmVzcyIsInNyYyIsIm90aGVyUHJvcHMiLCJwcmV2aWV3aW5nIiwic2V0UHJldmlld2luZyIsInVwbG9hZEVsZW1lbnRSZWYiLCJzY3JvbGxiYXJXaWR0aCIsImdldFNjcm9sbEJhclNpemUiLCJjbGFzc1NldCIsImhhbmRsZUNsaWNrIiwicmVzZXRTY3JvbGxiYXJQYWRkaW5nIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBhZGRpbmdSaWdodCIsInNldFNjcm9sbGJhclBhZGRpbmciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYm9keUlzT3ZlcmZsb3dpbmciLCJjbGllbnRXaWR0aCIsInVuZGVmaW5lZCIsImhhbmRsZUNhbmNlbFByZXZpZXciLCJoYW5kbGVLZXlEb3duIiwia2V5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVByZXZpZXciLCJhZGRFdmVudExpc3RlbmVyIiwidXBsb2FkRWxlbWVudCIsImN1cnJlbnQiLCJ3aWR0aCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJmdW5jIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxpQkFBZjtBQXFDQSxJQUFNQyxHQUNxQixHQUFHLHVCQUM1QixnQkFVRUMsR0FWRixFQVdLO0FBQUE7O0FBQUEsTUFUREMsU0FTQyxRQVREQSxTQVNDO0FBQUEsTUFSREMsSUFRQyxRQVJEQSxJQVFDO0FBQUEsTUFQREMsV0FPQyxRQVBEQSxXQU9DO0FBQUEsTUFOREMsUUFNQyxRQU5EQSxRQU1DO0FBQUEsTUFMREMsUUFLQyxRQUxEQSxRQUtDO0FBQUEsTUFKREMsR0FJQyxRQUpEQSxHQUlDO0FBQUEsTUFIRUMsVUFHRjs7QUFBQSxrQkFDaUMscUJBQVMsS0FBVCxDQURqQztBQUFBO0FBQUEsTUFDSUMsVUFESjtBQUFBLE1BQ2dCQyxhQURoQjs7QUFHSCxNQUFNQyxnQkFBZ0IsR0FBRyxtQkFBdUIsSUFBdkIsQ0FBekI7QUFFQSxNQUFNQyxjQUFjLEdBQUcsb0JBQVFDLDRCQUFSLEVBQTBCLEVBQTFCLENBQXZCO0FBRUEsTUFBTUMsUUFBUSxHQUFHLDRCQUFXWixTQUFYLFlBQXlCSCxNQUF6Qiw2REFDWEEsTUFEVyxnQkFDU1EsR0FEVCwwQ0FFWFIsTUFGVyxtQkFFWU8sUUFBUSxLQUFLLElBRnpCLGdCQUFqQjs7QUFLQSxNQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQUksQ0FBQ1IsR0FBRCxJQUFRRixRQUFaLEVBQXNCO0FBQ3BCQSxNQUFBQSxRQUFRO0FBQ1Q7QUFDRixHQUpEOztBQU1BLE1BQU1XLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUNsQ0MsSUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFFBQXBCLEdBQStCLEVBQS9CO0FBQ0FILElBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CRSxZQUFwQixHQUFtQyxFQUFuQztBQUNELEdBSEQ7O0FBS0EsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQUEsa0JBQ1RDLE1BRFM7QUFBQSxRQUN4QkMsVUFEd0IsV0FDeEJBLFVBRHdCO0FBRWhDLFFBQU1DLGlCQUFpQixHQUFHUixRQUFRLENBQUNDLElBQVQsQ0FBY1EsV0FBZCxHQUE0QkYsVUFBdEQ7O0FBQ0EsUUFDRUMsaUJBQWlCLElBQ2pCLENBQUNSLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CRSxZQURyQixJQUVBVCxjQUFjLEtBQUtlLFNBSHJCLEVBSUU7QUFDQVYsTUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JFLFlBQXBCLGFBQXNDVCxjQUF0QztBQUNEOztBQUNESyxJQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsUUFBcEIsR0FBK0IsUUFBL0I7QUFDRCxHQVhEOztBQWFBLE1BQU1RLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNoQ2xCLElBQUFBLGFBQWEsQ0FBQyxLQUFELENBQWI7QUFDQU0sSUFBQUEscUJBQXFCO0FBQ3RCLEdBSEQ7O0FBS0EsTUFBTWEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixRQUE0QjtBQUFBLFFBQXpCQyxHQUF5QixTQUF6QkEsR0FBeUI7O0FBQ2hELFFBQUlBLEdBQUcsS0FBSyxRQUFaLEVBQXNCO0FBQ3BCRixNQUFBQSxtQkFBbUI7QUFDbkJMLE1BQUFBLE1BQU0sQ0FBQ1EsbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0NGLGFBQXRDO0FBQ0Q7QUFDRixHQUxEOztBQU9BLE1BQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQnRCLElBQUFBLGFBQWEsQ0FBQyxJQUFELENBQWI7QUFDQVksSUFBQUEsbUJBQW1CO0FBQ25CQyxJQUFBQSxNQUFNLENBQUNVLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DSixhQUFuQztBQUNELEdBSkQ7O0FBTUEsa0NBQW9CNUIsR0FBcEIsRUFBeUI7QUFBQSxXQUFPO0FBQzlCaUMsTUFBQUEsYUFBYSxFQUFFdkIsZ0JBQWdCLENBQUN3QixPQURGO0FBRTlCSCxNQUFBQSxhQUFhLEVBQWJBLGFBRjhCO0FBRzlCSixNQUFBQSxtQkFBbUIsRUFBbkJBO0FBSDhCLEtBQVA7QUFBQSxHQUF6QjtBQU1BLFNBQ0U7QUFBSyxJQUFBLElBQUksRUFBQyxNQUFWO0FBQWlCLElBQUEsU0FBUyxFQUFFZDtBQUE1QixLQUEwQ04sVUFBMUMsR0FDRTtBQUFLLElBQUEsU0FBUyxZQUFLVCxNQUFMO0FBQWQsS0FDRTtBQUFLLElBQUEsU0FBUyxZQUFLQSxNQUFMLFVBQWQ7QUFBa0MsSUFBQSxHQUFHLEVBQUVRLEdBQXZDO0FBQTRDLElBQUEsR0FBRyxFQUFDO0FBQWhELElBREYsRUFFRTtBQUNFLElBQUEsSUFBSSxFQUFDLE1BRFA7QUFFRSxJQUFBLFNBQVMsWUFBS1IsTUFBTCxXQUZYO0FBR0UsSUFBQSxPQUFPLEVBQUVpQztBQUhYLElBRkYsRUFPRTtBQUFLLElBQUEsU0FBUyxZQUFLakMsTUFBTDtBQUFkLEtBQ0UsZ0NBQUMsZ0JBQUQ7QUFBTSxJQUFBLElBQUksRUFBRUksSUFBSSxJQUFJLGlCQUFwQjtBQUF1QyxJQUFBLE9BQU8sRUFBRUM7QUFBaEQsSUFERixDQVBGLENBREYsRUFZRTtBQUFLLElBQUEsU0FBUyxZQUFLTCxNQUFMO0FBQWQsS0FDRTtBQUNFLElBQUEsSUFBSSxFQUFDLE1BRFA7QUFFRSxJQUFBLFNBQVMsWUFBS0EsTUFBTCxvQkFGWDtBQUdFLElBQUEsT0FBTyxFQUFFZ0IsV0FIWDtBQUlFLElBQUEsR0FBRyxFQUFFSjtBQUpQLEtBTUUsZ0NBQUMsZ0JBQUQ7QUFBTSxJQUFBLElBQUksRUFBQyxLQUFYO0FBQWlCLElBQUEsU0FBUyxZQUFLWixNQUFMO0FBQTFCLElBTkYsQ0FERixFQVNFO0FBQUssSUFBQSxTQUFTLFlBQUtBLE1BQUw7QUFBZCxLQUNFO0FBQUcsSUFBQSxLQUFLLEVBQUU7QUFBRXFDLE1BQUFBLEtBQUssWUFBSzlCLFFBQUw7QUFBUDtBQUFWLElBREYsQ0FURixDQVpGLEVBeUJFO0FBQ0UsSUFBQSxTQUFTLEVBQUUsc0NBQWNQLE1BQWQsNkNBQ0xBLE1BREssb0JBQ21CVSxVQURuQixFQURiO0FBSUUsSUFBQSxPQUFPLEVBQUVtQixtQkFKWDtBQUtFLElBQUEsSUFBSSxFQUFDO0FBTFAsS0FPRTtBQUFLLElBQUEsU0FBUyxZQUFLN0IsTUFBTDtBQUFkLEtBQ0U7QUFDRSxJQUFBLEdBQUcsRUFBQyxLQUROO0FBRUUsSUFBQSxTQUFTLFlBQUtBLE1BQUwsa0JBRlg7QUFHRSxJQUFBLEdBQUcsRUFBRVEsR0FIUDtBQUlFLElBQUEsT0FBTyxFQUFFLGlCQUFBOEIsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ0MsZUFBRixFQUFKO0FBQUEsS0FKWjtBQUtFLElBQUEsSUFBSSxFQUFDO0FBTFAsSUFERixFQVFFLGdDQUFDLGdCQUFEO0FBQU0sSUFBQSxJQUFJLEVBQUUsRUFBWjtBQUFnQixJQUFBLElBQUksRUFBQyxRQUFyQjtBQUE4QixJQUFBLEtBQUssRUFBQyxNQUFwQztBQUEyQyxJQUFBLFdBQVc7QUFBdEQsSUFSRixDQVBGLENBekJGLENBREY7QUE4Q0QsQ0F0SDJCLENBRDlCO0FBMEhBdEMsR0FBRyxDQUFDdUMsU0FBSixHQUFnQjtBQUlkckMsRUFBQUEsU0FBUyxFQUFFc0Msc0JBQVVDLE1BSlA7QUFRZHRDLEVBQUFBLElBQUksRUFBRXFDLHNCQUFVRSxHQVJGO0FBWWR0QyxFQUFBQSxXQUFXLEVBQUVvQyxzQkFBVUcsSUFaVDtBQWdCZHRDLEVBQUFBLFFBQVEsRUFBRW1DLHNCQUFVRyxJQWhCTjtBQW9CZHJDLEVBQUFBLFFBQVEsRUFBRWtDLHNCQUFVSSxNQXBCTjtBQXdCZHJDLEVBQUFBLEdBQUcsRUFBRWlDLHNCQUFVQztBQXhCRCxDQUFoQjtBQTJCQXpDLEdBQUcsQ0FBQzZDLFlBQUosR0FBbUI7QUFDakIzQyxFQUFBQSxTQUFTLEVBQUUsRUFETTtBQUVqQkMsRUFBQUEsSUFBSSxFQUFFLGlCQUZXO0FBR2pCQyxFQUFBQSxXQUFXLEVBQUUsdUJBQU0sQ0FBRSxDQUhKO0FBSWpCQyxFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQUpEO0FBS2pCQyxFQUFBQSxRQUFRLEVBQUUsSUFMTztBQU1qQkMsRUFBQUEsR0FBRyxFQUFFO0FBTlksQ0FBbkI7ZUFTZVAsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VNZW1vLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgZ2V0U2Nyb2xsQmFyU2l6ZSBmcm9tIFwicmMtdXRpbC9saWIvZ2V0U2Nyb2xsQmFyU2l6ZVwiXG5pbXBvcnQgSWNvbiwgeyBJY29uTmFtZXMgfSBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXVwbG9hZC1pbWdcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElJbWdQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaMh+WumuWPs+S4iuinkuWbvuagh1xuICAgKi9cbiAgaWNvbj86IEljb25OYW1lc1xuICAvKipcbiAgICog5Y+z5LiK6KeS5Zu+5qCH54K55Ye75pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uSWNvbkNsaWNrPzogKCkgPT4gdm9pZFxuICAvKipcbiAgICog6Kem5Y+R5LiK5LygXG4gICAqL1xuICBvblVwbG9hZD86ICgpID0+IHZvaWRcbiAgLyoqXG4gICAqIOi/m+W6pu+8jOS8oOWFpSBudWxsIOaXtuihqOekuuS4jeaYvuekuui/m+W6puadoVxuICAgKi9cbiAgcHJvZ3Jlc3M/OiBudW1iZXIgfCBudWxsXG4gIC8qKlxuICAgKiDkuIrkvKDmiJDlip/lkI7nmoTlm77niYflnLDlnYBcbiAgICovXG4gIHNyYz86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJbWdTdGF0ZSB7XG4gIHByZXZpZXdpbmc6IGJvb2xlYW5cbn1cblxuLyoqXG4gKiDml4vovazliqDovb3nlKjkuo7lkYrnn6XnlKjmiLfkv6Hmga/lhoXlrrnnmoTliqDovb3nirbmgIHvvIzpgJrluLjmmK/ljbPml7bjgIHnn63ml7bnmoTjgIJcbiAqL1xuY29uc3QgSW1nOiBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PElJbWdQcm9wcyAmXG4gIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55Pj4gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaWNvbixcbiAgICAgIG9uSWNvbkNsaWNrLFxuICAgICAgb25VcGxvYWQsXG4gICAgICBwcm9ncmVzcyxcbiAgICAgIHNyYyxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJSW1nUHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IFtwcmV2aWV3aW5nLCBzZXRQcmV2aWV3aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgdXBsb2FkRWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcblxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdXNlTWVtbyhnZXRTY3JvbGxCYXJTaXplLCBbXSlcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH1gLCB7XG4gICAgICBbYCR7cHJlZml4fS11cGxvYWRlZGBdOiBzcmMsXG4gICAgICBbYCR7cHJlZml4fS1wcm9ncmVzc2luZ2BdOiBwcm9ncmVzcyAhPT0gbnVsbCxcbiAgICB9KVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoIXNyYyAmJiBvblVwbG9hZCkge1xuICAgICAgICBvblVwbG9hZCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRTY3JvbGxiYXJQYWRkaW5nID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIlxuICAgIH1cblxuICAgIGNvbnN0IHNldFNjcm9sbGJhclBhZGRpbmcgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGlubmVyV2lkdGggfSA9IHdpbmRvd1xuICAgICAgY29uc3QgYm9keUlzT3ZlcmZsb3dpbmcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgaW5uZXJXaWR0aFxuICAgICAgaWYgKFxuICAgICAgICBib2R5SXNPdmVyZmxvd2luZyAmJlxuICAgICAgICAhZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgJiZcbiAgICAgICAgc2Nyb2xsYmFyV2lkdGggIT09IHVuZGVmaW5lZFxuICAgICAgKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgICB9XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNhbmNlbFByZXZpZXcgPSAoKSA9PiB7XG4gICAgICBzZXRQcmV2aWV3aW5nKGZhbHNlKVxuICAgICAgcmVzZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKHsga2V5IH06IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgaGFuZGxlQ2FuY2VsUHJldmlldygpXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVByZXZpZXcgPSAoKSA9PiB7XG4gICAgICBzZXRQcmV2aWV3aW5nKHRydWUpXG4gICAgICBzZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKVxuICAgIH1cblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgdXBsb2FkRWxlbWVudDogdXBsb2FkRWxlbWVudFJlZi5jdXJyZW50LFxuICAgICAgaGFuZGxlUHJldmlldyxcbiAgICAgIGhhbmRsZUNhbmNlbFByZXZpZXcsXG4gICAgfSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByb2xlPVwibm9uZVwiIGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdXBsb2FkZWQtaW5uZXJgfT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YCR7cHJlZml4fS1maWxlYH0gc3JjPXtzcmN9IGFsdD1cImltZ1wiIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNvdmVyYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpZXd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1yZW1vdmVgfT5cbiAgICAgICAgICAgIDxJY29uIGljb249e2ljb24gfHwgXCJkZWxldGUtb3V0bGluZWRcIn0gb25DbGljaz17b25JY29uQ2xpY2t9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS11bnVwbG9hZGVkLWlubmVyYH0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXVwbG9hZC1lbGVtZW50YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgcmVmPXt1cGxvYWRFbGVtZW50UmVmfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJhZGRcIiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taWNvbmB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcHJvZ3Jlc3NgfT5cbiAgICAgICAgICAgIDxpIHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9ncmVzc30lYCB9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXByZXZpZXdgLCB7XG4gICAgICAgICAgICBbYCR7cHJlZml4fS1wcmV2aWV3LXNob3dgXTogcHJldmlld2luZyxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYW5jZWxQcmV2aWV3fVxuICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXByZXZpZXctaW5uZXJgfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgYWx0PVwiaW1nXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXByZXZpZXctZmlsZWB9XG4gICAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SWNvbiBzaXplPXszNn0gaWNvbj1cImNhbmNlbFwiIGNvbG9yPVwiI2ZmZlwiIGludGVyYWN0aXZlIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4pXG5cbkltZy5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaMh+WumuWPs+S4iuinkuWbvuagh1xuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWPs+S4iuinkuWbvuagh+eCueWHu+aXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkljb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDop6blj5HkuIrkvKBcbiAgICovXG4gIG9uVXBsb2FkOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOi/m+W6pu+8jOS8oOWFpSBudWxsIOaXtuihqOekuuS4jeaYvuekuui/m+W6puadoVxuICAgKi9cbiAgcHJvZ3Jlc3M6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDkuIrkvKDmiJDlip/lkI7nmoTlm77niYflnLDlnYBcbiAgICovXG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuSW1nLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBcIlwiLFxuICBpY29uOiBcImRlbGV0ZS1vdXRsaW5lZFwiLFxuICBvbkljb25DbGljazogKCkgPT4ge30sXG4gIG9uVXBsb2FkOiAoKSA9PiB7fSxcbiAgcHJvZ3Jlc3M6IG51bGwsXG4gIHNyYzogXCJcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1nXG4iXX0=