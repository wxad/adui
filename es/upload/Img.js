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

import React, { forwardRef, useImperativeHandle, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import getScrollBarSize from "rc-util/lib/getScrollBarSize";
import Icon from "../icon";
import "./style";
var prefix = "adui-upload-img";
var Img = forwardRef(function (_ref, ref) {
  var _classNames;

  var className = _ref.className,
      icon = _ref.icon,
      onIconClick = _ref.onIconClick,
      onUpload = _ref.onUpload,
      progress = _ref.progress,
      src = _ref.src,
      otherProps = _objectWithoutProperties(_ref, ["className", "icon", "onIconClick", "onUpload", "progress", "src"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      previewing = _useState2[0],
      setPreviewing = _useState2[1];

  var uploadElementRef = useRef(null);
  var scrollbarWidth = useMemo(getScrollBarSize, []);
  var classSet = classNames(className, "".concat(prefix), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-uploaded"), src), _defineProperty(_classNames, "".concat(prefix, "-progressing"), progress !== null), _classNames));

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

  useImperativeHandle(ref, function () {
    return {
      uploadElement: uploadElementRef.current,
      handlePreview: handlePreview,
      handleCancelPreview: handleCancelPreview
    };
  });
  return React.createElement("div", _extends({
    role: "none",
    className: classSet
  }, otherProps), React.createElement("div", {
    className: "".concat(prefix, "-uploaded-inner")
  }, React.createElement("img", {
    className: "".concat(prefix, "-file"),
    src: src,
    alt: "img"
  }), React.createElement("div", {
    role: "none",
    className: "".concat(prefix, "-cover"),
    onClick: handlePreview
  }), React.createElement("div", {
    className: "".concat(prefix, "-remove")
  }, React.createElement(Icon, {
    icon: icon || "delete-outlined",
    onClick: onIconClick
  }))), React.createElement("div", {
    className: "".concat(prefix, "-unuploaded-inner")
  }, React.createElement("div", {
    role: "none",
    className: "".concat(prefix, "-upload-element"),
    onClick: handleClick,
    ref: uploadElementRef
  }, React.createElement(Icon, {
    icon: "add",
    className: "".concat(prefix, "-icon")
  })), React.createElement("div", {
    className: "".concat(prefix, "-progress")
  }, React.createElement("i", {
    style: {
      width: "".concat(progress, "%")
    }
  }))), React.createElement("div", {
    className: classNames("".concat(prefix, "-preview"), _defineProperty({}, "".concat(prefix, "-preview-show"), previewing)),
    onClick: handleCancelPreview,
    role: "none"
  }, React.createElement("div", {
    className: "".concat(prefix, "-preview-inner")
  }, React.createElement("img", {
    alt: "img",
    className: "".concat(prefix, "-preview-file"),
    src: src,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    role: "none"
  }), React.createElement(Icon, {
    size: 36,
    icon: "cancel",
    color: "#fff",
    interactive: true
  }))));
});
Img.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.any,
  onIconClick: PropTypes.func,
  onUpload: PropTypes.func,
  progress: PropTypes.number,
  src: PropTypes.string
};
Img.defaultProps = {
  className: "",
  icon: "delete-outlined",
  onIconClick: function onIconClick() {},
  onUpload: function onUpload() {},
  progress: null,
  src: ""
};
export default Img;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdXBsb2FkL0ltZy50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJmb3J3YXJkUmVmIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJnZXRTY3JvbGxCYXJTaXplIiwiSWNvbiIsInByZWZpeCIsIkltZyIsInJlZiIsImNsYXNzTmFtZSIsImljb24iLCJvbkljb25DbGljayIsIm9uVXBsb2FkIiwicHJvZ3Jlc3MiLCJzcmMiLCJvdGhlclByb3BzIiwicHJldmlld2luZyIsInNldFByZXZpZXdpbmciLCJ1cGxvYWRFbGVtZW50UmVmIiwic2Nyb2xsYmFyV2lkdGgiLCJjbGFzc1NldCIsImhhbmRsZUNsaWNrIiwicmVzZXRTY3JvbGxiYXJQYWRkaW5nIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBhZGRpbmdSaWdodCIsInNldFNjcm9sbGJhclBhZGRpbmciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYm9keUlzT3ZlcmZsb3dpbmciLCJjbGllbnRXaWR0aCIsInVuZGVmaW5lZCIsImhhbmRsZUNhbmNlbFByZXZpZXciLCJoYW5kbGVLZXlEb3duIiwia2V5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVByZXZpZXciLCJhZGRFdmVudExpc3RlbmVyIiwidXBsb2FkRWxlbWVudCIsImN1cnJlbnQiLCJ3aWR0aCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJmdW5jIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFDRUMsVUFERixFQUVFQyxtQkFGRixFQUdFQyxPQUhGLEVBSUVDLE1BSkYsRUFLRUMsUUFMRixRQU1PLE9BTlA7QUFPQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRC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QUFKLEdBQW1CO0FBQ2pCekMsRUFBQUEsU0FBUyxFQUFFLEVBRE07QUFFakJDLEVBQUFBLElBQUksRUFBRSxpQkFGVztBQUdqQkMsRUFBQUEsV0FBVyxFQUFFLHVCQUFNLENBQUUsQ0FISjtBQUlqQkMsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FKRDtBQUtqQkMsRUFBQUEsUUFBUSxFQUFFLElBTE87QUFNakJDLEVBQUFBLEdBQUcsRUFBRTtBQU5ZLENBQW5CO0FBU0EsZUFBZVAsR0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VNZW1vLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgZ2V0U2Nyb2xsQmFyU2l6ZSBmcm9tIFwicmMtdXRpbC9saWIvZ2V0U2Nyb2xsQmFyU2l6ZVwiXG5pbXBvcnQgSWNvbiwgeyBJY29uTmFtZXMgfSBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXVwbG9hZC1pbWdcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElJbWdQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaMh+WumuWPs+S4iuinkuWbvuagh1xuICAgKi9cbiAgaWNvbj86IEljb25OYW1lc1xuICAvKipcbiAgICog5Y+z5LiK6KeS5Zu+5qCH54K55Ye75pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uSWNvbkNsaWNrPzogKCkgPT4gdm9pZFxuICAvKipcbiAgICog6Kem5Y+R5LiK5LygXG4gICAqL1xuICBvblVwbG9hZD86ICgpID0+IHZvaWRcbiAgLyoqXG4gICAqIOi/m+W6pu+8jOS8oOWFpSBudWxsIOaXtuihqOekuuS4jeaYvuekuui/m+W6puadoVxuICAgKi9cbiAgcHJvZ3Jlc3M/OiBudW1iZXIgfCBudWxsXG4gIC8qKlxuICAgKiDkuIrkvKDmiJDlip/lkI7nmoTlm77niYflnLDlnYBcbiAgICovXG4gIHNyYz86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJbWdTdGF0ZSB7XG4gIHByZXZpZXdpbmc6IGJvb2xlYW5cbn1cblxuLyoqXG4gKiDml4vovazliqDovb3nlKjkuo7lkYrnn6XnlKjmiLfkv6Hmga/lhoXlrrnnmoTliqDovb3nirbmgIHvvIzpgJrluLjmmK/ljbPml7bjgIHnn63ml7bnmoTjgIJcbiAqL1xuY29uc3QgSW1nOiBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICBJSW1nUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT5cbj4gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaWNvbixcbiAgICAgIG9uSWNvbkNsaWNrLFxuICAgICAgb25VcGxvYWQsXG4gICAgICBwcm9ncmVzcyxcbiAgICAgIHNyYyxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJSW1nUHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IFtwcmV2aWV3aW5nLCBzZXRQcmV2aWV3aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgdXBsb2FkRWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcblxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdXNlTWVtbyhnZXRTY3JvbGxCYXJTaXplLCBbXSlcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH1gLCB7XG4gICAgICBbYCR7cHJlZml4fS11cGxvYWRlZGBdOiBzcmMsXG4gICAgICBbYCR7cHJlZml4fS1wcm9ncmVzc2luZ2BdOiBwcm9ncmVzcyAhPT0gbnVsbCxcbiAgICB9KVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoIXNyYyAmJiBvblVwbG9hZCkge1xuICAgICAgICBvblVwbG9hZCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRTY3JvbGxiYXJQYWRkaW5nID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIlxuICAgIH1cblxuICAgIGNvbnN0IHNldFNjcm9sbGJhclBhZGRpbmcgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGlubmVyV2lkdGggfSA9IHdpbmRvd1xuICAgICAgY29uc3QgYm9keUlzT3ZlcmZsb3dpbmcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgaW5uZXJXaWR0aFxuICAgICAgaWYgKFxuICAgICAgICBib2R5SXNPdmVyZmxvd2luZyAmJlxuICAgICAgICAhZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgJiZcbiAgICAgICAgc2Nyb2xsYmFyV2lkdGggIT09IHVuZGVmaW5lZFxuICAgICAgKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgICB9XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNhbmNlbFByZXZpZXcgPSAoKSA9PiB7XG4gICAgICBzZXRQcmV2aWV3aW5nKGZhbHNlKVxuICAgICAgcmVzZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKHsga2V5IH06IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgaGFuZGxlQ2FuY2VsUHJldmlldygpXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVByZXZpZXcgPSAoKSA9PiB7XG4gICAgICBzZXRQcmV2aWV3aW5nKHRydWUpXG4gICAgICBzZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKVxuICAgIH1cblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgdXBsb2FkRWxlbWVudDogdXBsb2FkRWxlbWVudFJlZi5jdXJyZW50LFxuICAgICAgaGFuZGxlUHJldmlldyxcbiAgICAgIGhhbmRsZUNhbmNlbFByZXZpZXcsXG4gICAgfSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByb2xlPVwibm9uZVwiIGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdXBsb2FkZWQtaW5uZXJgfT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YCR7cHJlZml4fS1maWxlYH0gc3JjPXtzcmN9IGFsdD1cImltZ1wiIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNvdmVyYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpZXd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1yZW1vdmVgfT5cbiAgICAgICAgICAgIDxJY29uIGljb249e2ljb24gfHwgXCJkZWxldGUtb3V0bGluZWRcIn0gb25DbGljaz17b25JY29uQ2xpY2t9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS11bnVwbG9hZGVkLWlubmVyYH0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXVwbG9hZC1lbGVtZW50YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgcmVmPXt1cGxvYWRFbGVtZW50UmVmfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJhZGRcIiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taWNvbmB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcHJvZ3Jlc3NgfT5cbiAgICAgICAgICAgIDxpIHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9ncmVzc30lYCB9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXByZXZpZXdgLCB7XG4gICAgICAgICAgICBbYCR7cHJlZml4fS1wcmV2aWV3LXNob3dgXTogcHJldmlld2luZyxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYW5jZWxQcmV2aWV3fVxuICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXByZXZpZXctaW5uZXJgfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgYWx0PVwiaW1nXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXByZXZpZXctZmlsZWB9XG4gICAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJY29uIHNpemU9ezM2fSBpY29uPVwiY2FuY2VsXCIgY29sb3I9XCIjZmZmXCIgaW50ZXJhY3RpdmUgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbilcblxuSW1nLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5oyH5a6a5Y+z5LiK6KeS5Zu+5qCHXG4gICAqL1xuICBpY29uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5Y+z5LiK6KeS5Zu+5qCH54K55Ye75pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uSWNvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOinpuWPkeS4iuS8oFxuICAgKi9cbiAgb25VcGxvYWQ6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6L+b5bqm77yM5Lyg5YWlIG51bGwg5pe26KGo56S65LiN5pi+56S66L+b5bqm5p2hXG4gICAqL1xuICBwcm9ncmVzczogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOS4iuS8oOaIkOWKn+WQjueahOWbvueJh+WcsOWdgFxuICAgKi9cbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5JbWcuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IFwiXCIsXG4gIGljb246IFwiZGVsZXRlLW91dGxpbmVkXCIsXG4gIG9uSWNvbkNsaWNrOiAoKSA9PiB7fSxcbiAgb25VcGxvYWQ6ICgpID0+IHt9LFxuICBwcm9ncmVzczogbnVsbCxcbiAgc3JjOiBcIlwiLFxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWdcbiJdfQ==