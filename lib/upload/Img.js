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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdXBsb2FkL0ltZy50c3giXSwibmFtZXMiOlsicHJlZml4IiwiSW1nIiwicmVmIiwiY2xhc3NOYW1lIiwiaWNvbiIsIm9uSWNvbkNsaWNrIiwib25VcGxvYWQiLCJwcm9ncmVzcyIsInNyYyIsIm90aGVyUHJvcHMiLCJwcmV2aWV3aW5nIiwic2V0UHJldmlld2luZyIsInVwbG9hZEVsZW1lbnRSZWYiLCJzY3JvbGxiYXJXaWR0aCIsImdldFNjcm9sbEJhclNpemUiLCJjbGFzc1NldCIsImhhbmRsZUNsaWNrIiwicmVzZXRTY3JvbGxiYXJQYWRkaW5nIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBhZGRpbmdSaWdodCIsInNldFNjcm9sbGJhclBhZGRpbmciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYm9keUlzT3ZlcmZsb3dpbmciLCJjbGllbnRXaWR0aCIsInVuZGVmaW5lZCIsImhhbmRsZUNhbmNlbFByZXZpZXciLCJoYW5kbGVLZXlEb3duIiwia2V5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVByZXZpZXciLCJhZGRFdmVudExpc3RlbmVyIiwidXBsb2FkRWxlbWVudCIsImN1cnJlbnQiLCJ3aWR0aCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJmdW5jIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxpQkFBZjtBQXFDQSxJQUFNQyxHQUVMLEdBQUcsdUJBQ0YsZ0JBVUVDLEdBVkYsRUFXSztBQUFBOztBQUFBLE1BVERDLFNBU0MsUUFUREEsU0FTQztBQUFBLE1BUkRDLElBUUMsUUFSREEsSUFRQztBQUFBLE1BUERDLFdBT0MsUUFQ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QUZYO0FBR0UsSUFBQSxHQUFHLEVBQUVRLEdBSFA7QUFJRSxJQUFBLE9BQU8sRUFBRSxpQkFBQzhCLENBQUQ7QUFBQSxhQUFPQSxDQUFDLENBQUNDLGVBQUYsRUFBUDtBQUFBLEtBSlg7QUFLRSxJQUFBLElBQUksRUFBQztBQUxQLElBREYsRUFRRSxnQ0FBQyxnQkFBRDtBQUFNLElBQUEsSUFBSSxFQUFFLEVBQVo7QUFBZ0IsSUFBQSxJQUFJLEVBQUMsUUFBckI7QUFBOEIsSUFBQSxLQUFLLEVBQUMsTUFBcEM7QUFBMkMsSUFBQSxXQUFXO0FBQXRELElBUkYsQ0FQRixDQXpCRixDQURGO0FBOENELENBdEhDLENBRko7QUEySEF0QyxHQUFHLENBQUN1QyxTQUFKLEdBQWdCO0FBSWRyQyxFQUFBQSxTQUFTLEVBQUVzQyxzQkFBVUMsTUFKUDtBQVFkdEMsRUFBQUEsSUFBSSxFQUFFcUMsc0JBQVVFLEdBUkY7QUFZZHRDLEVBQUFBLFdBQVcsRUFBRW9DLHNCQUFVRyxJQVpUO0FBZ0JkdEMsRUFBQUEsUUFBUSxFQUFFbUMsc0JBQVVHLElBaEJOO0FBb0JkckMsRUFBQUEsUUFBUSxFQUFFa0Msc0JBQVVJLE1BcEJOO0FBd0JkckMsRUFBQUEsR0FBRyxFQUFFaUMsc0JBQVVDO0FBeEJELENBQWhCO0FBMkJBekMsR0FBRyxDQUFDNkMsWUFBSixHQUFtQjtBQUNqQjNDLEVBQUFBLFNBQVMsRUFBRSxFQURNO0FBRWpCQyxFQUFBQSxJQUFJLEVBQUUsaUJBRlc7QUFHakJDLEVBQUFBLFdBQVcsRUFBRSx1QkFBTSxDQUFFLENBSEo7QUFJakJDLEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBSkQ7QUFLakJDLEVBQUFBLFFBQVEsRUFBRSxJQUxPO0FBTWpCQyxFQUFBQSxHQUFHLEVBQUU7QUFOWSxDQUFuQjtlQVNlUCxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIGZvcndhcmRSZWYsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZU1lbW8sXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBnZXRTY3JvbGxCYXJTaXplIGZyb20gXCJyYy11dGlsL2xpYi9nZXRTY3JvbGxCYXJTaXplXCJcbmltcG9ydCBJY29uLCB7IEljb25OYW1lcyB9IGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdXBsb2FkLWltZ1wiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUltZ1Byb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5oyH5a6a5Y+z5LiK6KeS5Zu+5qCHXG4gICAqL1xuICBpY29uPzogSWNvbk5hbWVzXG4gIC8qKlxuICAgKiDlj7PkuIrop5Llm77moIfngrnlh7vml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25JY29uQ2xpY2s/OiAoKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDop6blj5HkuIrkvKBcbiAgICovXG4gIG9uVXBsb2FkPzogKCkgPT4gdm9pZFxuICAvKipcbiAgICog6L+b5bqm77yM5Lyg5YWlIG51bGwg5pe26KGo56S65LiN5pi+56S66L+b5bqm5p2hXG4gICAqL1xuICBwcm9ncmVzcz86IG51bWJlciB8IG51bGxcbiAgLyoqXG4gICAqIOS4iuS8oOaIkOWKn+WQjueahOWbvueJh+WcsOWdgFxuICAgKi9cbiAgc3JjPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUltZ1N0YXRlIHtcbiAgcHJldmlld2luZzogYm9vbGVhblxufVxuXG4vKipcbiAqIOaXi+i9rOWKoOi9veeUqOS6juWRiuefpeeUqOaIt+S/oeaBr+WGheWuueeahOWKoOi9veeKtuaAge+8jOmAmuW4uOaYr+WNs+aXtuOAgeefreaXtueahOOAglxuICovXG5jb25zdCBJbWc6IFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gIElJbWdQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55PlxuPiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpY29uLFxuICAgICAgb25JY29uQ2xpY2ssXG4gICAgICBvblVwbG9hZCxcbiAgICAgIHByb2dyZXNzLFxuICAgICAgc3JjLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElJbWdQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgW3ByZXZpZXdpbmcsIHNldFByZXZpZXdpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCB1cGxvYWRFbGVtZW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB1c2VNZW1vKGdldFNjcm9sbEJhclNpemUsIFtdKVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fWAsIHtcbiAgICAgIFtgJHtwcmVmaXh9LXVwbG9hZGVkYF06IHNyYyxcbiAgICAgIFtgJHtwcmVmaXh9LXByb2dyZXNzaW5nYF06IHByb2dyZXNzICE9PSBudWxsLFxuICAgIH0pXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgIGlmICghc3JjICYmIG9uVXBsb2FkKSB7XG4gICAgICAgIG9uVXBsb2FkKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXNldFNjcm9sbGJhclBhZGRpbmcgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJcIlxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0U2Nyb2xsYmFyUGFkZGluZyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgaW5uZXJXaWR0aCB9ID0gd2luZG93XG4gICAgICBjb25zdCBib2R5SXNPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCBpbm5lcldpZHRoXG4gICAgICBpZiAoXG4gICAgICAgIGJvZHlJc092ZXJmbG93aW5nICYmXG4gICAgICAgICFkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCAmJlxuICAgICAgICBzY3JvbGxiYXJXaWR0aCAhPT0gdW5kZWZpbmVkXG4gICAgICApIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtzY3JvbGxiYXJXaWR0aH1weGBcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsUHJldmlldyA9ICgpID0+IHtcbiAgICAgIHNldFByZXZpZXdpbmcoZmFsc2UpXG4gICAgICByZXNldFNjcm9sbGJhclBhZGRpbmcoKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoeyBrZXkgfTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBoYW5kbGVDYW5jZWxQcmV2aWV3KClcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUHJldmlldyA9ICgpID0+IHtcbiAgICAgIHNldFByZXZpZXdpbmcodHJ1ZSlcbiAgICAgIHNldFNjcm9sbGJhclBhZGRpbmcoKVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pXG4gICAgfVxuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICB1cGxvYWRFbGVtZW50OiB1cGxvYWRFbGVtZW50UmVmLmN1cnJlbnQsXG4gICAgICBoYW5kbGVQcmV2aWV3LFxuICAgICAgaGFuZGxlQ2FuY2VsUHJldmlldyxcbiAgICB9KSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJvbGU9XCJub25lXCIgY2xhc3NOYW1lPXtjbGFzc1NldH0gey4uLm90aGVyUHJvcHN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS11cGxvYWRlZC1pbm5lcmB9PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWZpbGVgfSBzcmM9e3NyY30gYWx0PVwiaW1nXCIgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY292ZXJgfVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmlld31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXJlbW92ZWB9PlxuICAgICAgICAgICAgPEljb24gaWNvbj17aWNvbiB8fCBcImRlbGV0ZS1vdXRsaW5lZFwifSBvbkNsaWNrPXtvbkljb25DbGlja30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXVudXBsb2FkZWQtaW5uZXJgfT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdXBsb2FkLWVsZW1lbnRgfVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICByZWY9e3VwbG9hZEVsZW1lbnRSZWZ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb24gaWNvbj1cImFkZFwiIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pY29uYH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wcm9ncmVzc2B9PlxuICAgICAgICAgICAgPGkgc3R5bGU9e3sgd2lkdGg6IGAke3Byb2dyZXNzfSVgIH19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tcHJldmlld2AsIHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LXByZXZpZXctc2hvd2BdOiBwcmV2aWV3aW5nLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNhbmNlbFByZXZpZXd9XG4gICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcHJldmlldy1pbm5lcmB9PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBhbHQ9XCJpbWdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcHJldmlldy1maWxlYH1cbiAgICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEljb24gc2l6ZT17MzZ9IGljb249XCJjYW5jZWxcIiBjb2xvcj1cIiNmZmZcIiBpbnRlcmFjdGl2ZSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuKVxuXG5JbWcucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmjIflrprlj7PkuIrop5Llm77moIdcbiAgICovXG4gIGljb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlj7PkuIrop5Llm77moIfngrnlh7vml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25JY29uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6Kem5Y+R5LiK5LygXG4gICAqL1xuICBvblVwbG9hZDogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDov5vluqbvvIzkvKDlhaUgbnVsbCDml7booajnpLrkuI3mmL7npLrov5vluqbmnaFcbiAgICovXG4gIHByb2dyZXNzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog5LiK5Lyg5oiQ5Yqf5ZCO55qE5Zu+54mH5Zyw5Z2AXG4gICAqL1xuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbkltZy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogXCJcIixcbiAgaWNvbjogXCJkZWxldGUtb3V0bGluZWRcIixcbiAgb25JY29uQ2xpY2s6ICgpID0+IHt9LFxuICBvblVwbG9hZDogKCkgPT4ge30sXG4gIHByb2dyZXNzOiBudWxsLFxuICBzcmM6IFwiXCIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltZ1xuIl19