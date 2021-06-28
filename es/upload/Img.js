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
      previewDisabled = _ref.previewDisabled,
      progress = _ref.progress,
      src = _ref.src,
      otherProps = _objectWithoutProperties(_ref, ["className", "icon", "onIconClick", "onUpload", "previewDisabled", "progress", "src"]);

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
    onClick: function onClick() {
      if (!previewDisabled) {
        handlePreview();
      }
    }
  }), React.createElement("div", {
    className: "".concat(prefix, "-remove")
  }, React.createElement(Icon, {
    icon: icon || "delete-outlined",
    onClick: function onClick(e) {
      if (onIconClick) {
        onIconClick(e);
      }
    }
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
  previewDisabled: PropTypes.bool,
  progress: PropTypes.number,
  src: PropTypes.string
};
Img.defaultProps = {
  className: "",
  icon: "delete-outlined",
  onIconClick: function onIconClick() {},
  onUpload: function onUpload() {},
  previewDisabled: false,
  progress: null,
  src: ""
};
export default Img;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdXBsb2FkL0ltZy50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJmb3J3YXJkUmVmIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJnZXRTY3JvbGxCYXJTaXplIiwiSWNvbiIsInByZWZpeCIsIkltZyIsInJlZiIsImNsYXNzTmFtZSIsImljb24iLCJvbkljb25DbGljayIsIm9uVXBsb2FkIiwicHJldmlld0Rpc2FibGVkIiwicHJvZ3Jlc3MiLCJzcmMiLCJvdGhlclByb3BzIiwicHJldmlld2luZyIsInNldFByZXZpZXdpbmciLCJ1cGxvYWRFbGVtZW50UmVmIiwic2Nyb2xsYmFyV2lkdGgiLCJjbGFzc1NldCIsImhhbmRsZUNsaWNrIiwicmVzZXRTY3JvbGxiYXJQYWRkaW5nIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBhZGRpbmdSaWdodCIsInNldFNjcm9sbGJhclBhZGRpbmciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYm9keUlzT3ZlcmZsb3dpbmciLCJjbGllbnRXaWR0aCIsInVuZGVmaW5lZCIsImhhbmRsZUNhbmNlbFByZXZpZXciLCJoYW5kbGVLZXlEb3duIiwia2V5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVByZXZpZXciLCJhZGRFdmVudExpc3RlbmVyIiwidXBsb2FkRWxlbWVudCIsImN1cnJlbnQiLCJlIiwid2lkdGgiLCJzdG9wUHJvcGFnYXRpb24iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJmdW5jIiwiYm9vbCIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQ0VDLFVBREYsRUFFRUMsbUJBRkYsRUFHRUMsT0FIRixFQUlFQyxNQUpGLEVBS0VDLFFBTEYsUUFNTyxPQU5QO0FB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RjtBQVlkckMsRUFBQUEsV0FBVyxFQUFFVCxTQUFTLENBQUMrQyxJQVpUO0FBZ0JkckMsRUFBQUEsUUFBUSxFQUFFVixTQUFTLENBQUMrQyxJQWhCTjtBQW9CZHBDLEVBQUFBLGVBQWUsRUFBRVgsU0FBUyxDQUFDZ0QsSUFwQmI7QUF3QmRwQyxFQUFBQSxRQUFRLEVBQUVaLFNBQVMsQ0FBQ2lELE1BeEJOO0FBNEJkcEMsRUFBQUEsR0FBRyxFQUFFYixTQUFTLENBQUM2QztBQTVCRCxDQUFoQjtBQStCQXhDLEdBQUcsQ0FBQzZDLFlBQUosR0FBbUI7QUFDakIzQyxFQUFBQSxTQUFTLEVBQUUsRUFETTtBQUVqQkMsRUFBQUEsSUFBSSxFQUFFLGlCQUZXO0FBR2pCQyxFQUFBQSxXQUFXLEVBQUUsdUJBQU0sQ0FBRSxDQUhKO0FBSWpCQyxFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQUpEO0FBS2pCQyxFQUFBQSxlQUFlLEVBQUUsS0FMQTtBQU1qQkMsRUFBQUEsUUFBUSxFQUFFLElBTk87QUFPakJDLEVBQUFBLEdBQUcsRUFBRTtBQVBZLENBQW5CO0FBVUEsZUFBZVIsR0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VNZW1vLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgZ2V0U2Nyb2xsQmFyU2l6ZSBmcm9tIFwicmMtdXRpbC9saWIvZ2V0U2Nyb2xsQmFyU2l6ZVwiXG5pbXBvcnQgSWNvbiwgeyBJY29uTmFtZXMgfSBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXVwbG9hZC1pbWdcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElJbWdQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaMh+WumuWPs+S4iuinkuWbvuagh1xuICAgKi9cbiAgaWNvbj86IEljb25OYW1lc1xuICAvKipcbiAgICog5Y+z5LiK6KeS5Zu+5qCH54K55Ye75pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uSWNvbkNsaWNrPzogKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8U1ZHU1ZHRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOinpuWPkeS4iuS8oFxuICAgKi9cbiAgb25VcGxvYWQ/OiAoKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDnpoHmraLngrnlh7vlm77niYfpooTop4hcbiAgICovXG4gIHByZXZpZXdEaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOi/m+W6pu+8jOS8oOWFpSBudWxsIOaXtuihqOekuuS4jeaYvuekuui/m+W6puadoVxuICAgKi9cbiAgcHJvZ3Jlc3M/OiBudW1iZXIgfCBudWxsXG4gIC8qKlxuICAgKiDkuIrkvKDmiJDlip/lkI7nmoTlm77niYflnLDlnYBcbiAgICovXG4gIHNyYz86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJbWdTdGF0ZSB7XG4gIHByZXZpZXdpbmc6IGJvb2xlYW5cbn1cblxuLyoqXG4gKiDml4vovazliqDovb3nlKjkuo7lkYrnn6XnlKjmiLfkv6Hmga/lhoXlrrnnmoTliqDovb3nirbmgIHvvIzpgJrluLjmmK/ljbPml7bjgIHnn63ml7bnmoTjgIJcbiAqL1xuY29uc3QgSW1nOiBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICBJSW1nUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT5cbj4gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaWNvbixcbiAgICAgIG9uSWNvbkNsaWNrLFxuICAgICAgb25VcGxvYWQsXG4gICAgICBwcmV2aWV3RGlzYWJsZWQsXG4gICAgICBwcm9ncmVzcyxcbiAgICAgIHNyYyxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJSW1nUHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IFtwcmV2aWV3aW5nLCBzZXRQcmV2aWV3aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgdXBsb2FkRWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcblxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdXNlTWVtbyhnZXRTY3JvbGxCYXJTaXplLCBbXSlcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH1gLCB7XG4gICAgICBbYCR7cHJlZml4fS11cGxvYWRlZGBdOiBzcmMsXG4gICAgICBbYCR7cHJlZml4fS1wcm9ncmVzc2luZ2BdOiBwcm9ncmVzcyAhPT0gbnVsbCxcbiAgICB9KVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoIXNyYyAmJiBvblVwbG9hZCkge1xuICAgICAgICBvblVwbG9hZCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRTY3JvbGxiYXJQYWRkaW5nID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIlxuICAgIH1cblxuICAgIGNvbnN0IHNldFNjcm9sbGJhclBhZGRpbmcgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGlubmVyV2lkdGggfSA9IHdpbmRvd1xuICAgICAgY29uc3QgYm9keUlzT3ZlcmZsb3dpbmcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgaW5uZXJXaWR0aFxuICAgICAgaWYgKFxuICAgICAgICBib2R5SXNPdmVyZmxvd2luZyAmJlxuICAgICAgICAhZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgJiZcbiAgICAgICAgc2Nyb2xsYmFyV2lkdGggIT09IHVuZGVmaW5lZFxuICAgICAgKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgICB9XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNhbmNlbFByZXZpZXcgPSAoKSA9PiB7XG4gICAgICBzZXRQcmV2aWV3aW5nKGZhbHNlKVxuICAgICAgcmVzZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKHsga2V5IH06IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgaGFuZGxlQ2FuY2VsUHJldmlldygpXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVByZXZpZXcgPSAoKSA9PiB7XG4gICAgICBzZXRQcmV2aWV3aW5nKHRydWUpXG4gICAgICBzZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKVxuICAgIH1cblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgdXBsb2FkRWxlbWVudDogdXBsb2FkRWxlbWVudFJlZi5jdXJyZW50LFxuICAgICAgaGFuZGxlUHJldmlldyxcbiAgICAgIGhhbmRsZUNhbmNlbFByZXZpZXcsXG4gICAgfSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByb2xlPVwibm9uZVwiIGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdXBsb2FkZWQtaW5uZXJgfT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YCR7cHJlZml4fS1maWxlYH0gc3JjPXtzcmN9IGFsdD1cImltZ1wiIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNvdmVyYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFwcmV2aWV3RGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVQcmV2aWV3KClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXJlbW92ZWB9PlxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgaWNvbj17aWNvbiB8fCBcImRlbGV0ZS1vdXRsaW5lZFwifVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvbkljb25DbGljaykge1xuICAgICAgICAgICAgICAgICAgb25JY29uQ2xpY2soZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdW51cGxvYWRlZC1pbm5lcmB9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS11cGxvYWQtZWxlbWVudGB9XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgIHJlZj17dXBsb2FkRWxlbWVudFJlZn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBpY29uPVwiYWRkXCIgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWljb25gfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXByb2dyZXNzYH0+XG4gICAgICAgICAgICA8aSBzdHlsZT17eyB3aWR0aDogYCR7cHJvZ3Jlc3N9JWAgfX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1wcmV2aWV3YCwge1xuICAgICAgICAgICAgW2Ake3ByZWZpeH0tcHJldmlldy1zaG93YF06IHByZXZpZXdpbmcsXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2FuY2VsUHJldmlld31cbiAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wcmV2aWV3LWlubmVyYH0+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGFsdD1cImltZ1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1wcmV2aWV3LWZpbGVgfVxuICAgICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SWNvbiBzaXplPXszNn0gaWNvbj1cImNhbmNlbFwiIGNvbG9yPVwiI2ZmZlwiIGludGVyYWN0aXZlIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4pXG5cbkltZy5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaMh+WumuWPs+S4iuinkuWbvuagh1xuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWPs+S4iuinkuWbvuagh+eCueWHu+aXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkljb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDop6blj5HkuIrkvKBcbiAgICovXG4gIG9uVXBsb2FkOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOemgeatoueCueWHu+WbvueJh+mihOiniFxuICAgKi9cbiAgcHJldmlld0Rpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOi/m+W6pu+8jOS8oOWFpSBudWxsIOaXtuihqOekuuS4jeaYvuekuui/m+W6puadoVxuICAgKi9cbiAgcHJvZ3Jlc3M6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDkuIrkvKDmiJDlip/lkI7nmoTlm77niYflnLDlnYBcbiAgICovXG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuSW1nLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBcIlwiLFxuICBpY29uOiBcImRlbGV0ZS1vdXRsaW5lZFwiLFxuICBvbkljb25DbGljazogKCkgPT4ge30sXG4gIG9uVXBsb2FkOiAoKSA9PiB7fSxcbiAgcHJldmlld0Rpc2FibGVkOiBmYWxzZSxcbiAgcHJvZ3Jlc3M6IG51bGwsXG4gIHNyYzogXCJcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1nXG4iXX0=