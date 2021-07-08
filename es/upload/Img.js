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
      disabled = _ref.disabled,
      hoverOperations = _ref.hoverOperations,
      icon = _ref.icon,
      onIconClick = _ref.onIconClick,
      onUpload = _ref.onUpload,
      previewDisabled = _ref.previewDisabled,
      progress = _ref.progress,
      src = _ref.src,
      otherProps = _objectWithoutProperties(_ref, ["className", "disabled", "hoverOperations", "icon", "onIconClick", "onUpload", "previewDisabled", "progress", "src"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      previewing = _useState2[0],
      setPreviewing = _useState2[1];

  var uploadElementRef = useRef(null);
  var scrollbarWidth = useMemo(getScrollBarSize, []);
  var hasOperation = hoverOperations === null || hoverOperations === void 0 ? void 0 : hoverOperations.length;
  var classSet = classNames(className, "".concat(prefix), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-hasOperation"), hasOperation), _defineProperty(_classNames, "".concat(prefix, "-uploaded"), src), _defineProperty(_classNames, "".concat(prefix, "-progressing"), progress !== null), _defineProperty(_classNames, "".concat(prefix, "-noIcon"), icon === null), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disabled), _classNames));

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
  }), hoverOperations !== null && hoverOperations !== void 0 && hoverOperations.length ? React.createElement("div", {
    className: "".concat(prefix, "-operations")
  }, hoverOperations.map(function (_ref3, i) {
    var text = _ref3.text,
        others = _objectWithoutProperties(_ref3, ["text"]);

    return React.createElement(React.Fragment, {
      key: i
    }, React.createElement("div", _extends({
      className: "".concat(prefix, "-operations-item")
    }, others), text), i !== hoverOperations.length - 1 && React.createElement("i", {
      className: "".concat(prefix, "-operations-divider")
    }));
  })) : React.createElement("div", {
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
  disabled: PropTypes.bool,
  hoverOperations: PropTypes.any,
  icon: PropTypes.any,
  onIconClick: PropTypes.func,
  onUpload: PropTypes.func,
  previewDisabled: PropTypes.bool,
  progress: PropTypes.number,
  src: PropTypes.string
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
export default Img;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdXBsb2FkL0ltZy50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJmb3J3YXJkUmVmIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJnZXRTY3JvbGxCYXJTaXplIiwiSWNvbiIsInByZWZpeCIsIkltZyIsInJlZiIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwiaG92ZXJPcGVyYXRpb25zIiwiaWNvbiIsIm9uSWNvbkNsaWNrIiwib25VcGxvYWQiLCJwcmV2aWV3RGlzYWJsZWQiLCJwcm9ncmVzcyIsInNyYyIsIm90aGVyUHJvcHMiLCJwcmV2aWV3aW5nIiwic2V0UHJldmlld2luZyIsInVwbG9hZEVsZW1lbnRSZWYiLCJzY3JvbGxiYXJXaWR0aCIsImhhc09wZXJhdGlvbiIsImxlbmd0aCIsImNsYXNzU2V0IiwiaGFuZGxlQ2xpY2siLCJyZXNldFNjcm9sbGJhclBhZGRpbmciLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwicGFkZGluZ1JpZ2h0Iiwic2V0U2Nyb2xsYmFyUGFkZGluZyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJib2R5SXNPdmVyZmxvd2luZyIsImNsaWVudFdpZHRoIiwidW5kZWZpbmVkIiwiaGFuZGxlQ2FuY2VsUHJldmlldyIsImhhbmRsZUtleURvd24iLCJrZXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlUHJldmlldyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGxvYWRFbGVtZW50IiwiY3VycmVudCIsIm1hcCIsImkiLCJ0ZXh0Iiwib3RoZXJzIiwiZSIsIndpZHRoIiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImFueSIsImZ1bmMiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Es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O0FBNEJkM0MsRUFBQUEsZUFBZSxFQUFFYixTQUFTLENBQUNzRCxJQTVCYjtBQWdDZHhDLEVBQUFBLFFBQVEsRUFBRWQsU0FBUyxDQUFDeUQsTUFoQ047QUFvQ2QxQyxFQUFBQSxHQUFHLEVBQUVmLFNBQVMsQ0FBQ3FEO0FBcENELENBQWhCO0FBdUNBaEQsR0FBRyxDQUFDcUQsWUFBSixHQUFtQjtBQUNqQm5ELEVBQUFBLFNBQVMsRUFBRSxFQURNO0FBRWpCQyxFQUFBQSxRQUFRLEVBQUUsS0FGTztBQUdqQkMsRUFBQUEsZUFBZSxFQUFFMkIsU0FIQTtBQUlqQjFCLEVBQUFBLElBQUksRUFBRSxpQkFKVztBQUtqQkMsRUFBQUEsV0FBVyxFQUFFLHVCQUFNLENBQUUsQ0FMSjtBQU1qQkMsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FORDtBQU9qQkMsRUFBQUEsZUFBZSxFQUFFLEtBUEE7QUFRakJDLEVBQUFBLFFBQVEsRUFBRSxJQVJPO0FBU2pCQyxFQUFBQSxHQUFHLEVBQUU7QUFUWSxDQUFuQjtBQVlBLGVBQWVWLEdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXkgKi9cbmltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VNZW1vLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgZ2V0U2Nyb2xsQmFyU2l6ZSBmcm9tIFwicmMtdXRpbC9saWIvZ2V0U2Nyb2xsQmFyU2l6ZVwiXG5pbXBvcnQgSWNvbiwgeyBJY29uTmFtZXMgfSBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXVwbG9hZC1pbWdcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElJbWdQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOm8oOaghyBob3ZlciDml7bnmoTmk43kvZzmmL7npLpcbiAgICovXG4gIGhvdmVyT3BlcmF0aW9ucz86IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnlcbiAgICB0ZXh0OiBzdHJpbmdcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHZvaWRcbiAgfVtdXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog5oyH5a6a5Y+z5LiK6KeS5Zu+5qCHXG4gICAqL1xuICBpY29uPzogSWNvbk5hbWVzIHwgbnVsbFxuICAvKipcbiAgICog5Y+z5LiK6KeS5Zu+5qCH54K55Ye75pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uSWNvbkNsaWNrPzogKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8U1ZHU1ZHRWxlbWVudD4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOinpuWPkeS4iuS8oFxuICAgKi9cbiAgb25VcGxvYWQ/OiAoKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDnpoHmraLngrnlh7vlm77niYfpooTop4hcbiAgICovXG4gIHByZXZpZXdEaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOi/m+W6pu+8jOS8oOWFpSBudWxsIOaXtuihqOekuuS4jeaYvuekuui/m+W6puadoVxuICAgKi9cbiAgcHJvZ3Jlc3M/OiBudW1iZXIgfCBudWxsXG4gIC8qKlxuICAgKiDkuIrkvKDmiJDlip/lkI7nmoTlm77niYflnLDlnYBcbiAgICovXG4gIHNyYz86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJbWdTdGF0ZSB7XG4gIHByZXZpZXdpbmc6IGJvb2xlYW5cbn1cblxuLyoqXG4gKiDml4vovazliqDovb3nlKjkuo7lkYrnn6XnlKjmiLfkv6Hmga/lhoXlrrnnmoTliqDovb3nirbmgIHvvIzpgJrluLjmmK/ljbPml7bjgIHnn63ml7bnmoTjgIJcbiAqL1xuY29uc3QgSW1nOiBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICBJSW1nUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT5cbj4gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBob3Zlck9wZXJhdGlvbnMsXG4gICAgICBpY29uLFxuICAgICAgb25JY29uQ2xpY2ssXG4gICAgICBvblVwbG9hZCxcbiAgICAgIHByZXZpZXdEaXNhYmxlZCxcbiAgICAgIHByb2dyZXNzLFxuICAgICAgc3JjLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElJbWdQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgW3ByZXZpZXdpbmcsIHNldFByZXZpZXdpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCB1cGxvYWRFbGVtZW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB1c2VNZW1vKGdldFNjcm9sbEJhclNpemUsIFtdKVxuXG4gICAgY29uc3QgaGFzT3BlcmF0aW9uID0gaG92ZXJPcGVyYXRpb25zPy5sZW5ndGhcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH1gLCB7XG4gICAgICBbYCR7cHJlZml4fS1oYXNPcGVyYXRpb25gXTogaGFzT3BlcmF0aW9uLFxuICAgICAgW2Ake3ByZWZpeH0tdXBsb2FkZWRgXTogc3JjLFxuICAgICAgW2Ake3ByZWZpeH0tcHJvZ3Jlc3NpbmdgXTogcHJvZ3Jlc3MgIT09IG51bGwsXG4gICAgICBbYCR7cHJlZml4fS1ub0ljb25gXTogaWNvbiA9PT0gbnVsbCxcbiAgICAgIFtgJHtwcmVmaXh9LWRpc2FibGVkYF06IGRpc2FibGVkLFxuICAgIH0pXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgIGlmICghc3JjICYmIG9uVXBsb2FkICYmICFkaXNhYmxlZCkge1xuICAgICAgICBvblVwbG9hZCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRTY3JvbGxiYXJQYWRkaW5nID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIlxuICAgIH1cblxuICAgIGNvbnN0IHNldFNjcm9sbGJhclBhZGRpbmcgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGlubmVyV2lkdGggfSA9IHdpbmRvd1xuICAgICAgY29uc3QgYm9keUlzT3ZlcmZsb3dpbmcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgaW5uZXJXaWR0aFxuICAgICAgaWYgKFxuICAgICAgICBib2R5SXNPdmVyZmxvd2luZyAmJlxuICAgICAgICAhZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgJiZcbiAgICAgICAgc2Nyb2xsYmFyV2lkdGggIT09IHVuZGVmaW5lZFxuICAgICAgKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgICB9XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNhbmNlbFByZXZpZXcgPSAoKSA9PiB7XG4gICAgICBzZXRQcmV2aWV3aW5nKGZhbHNlKVxuICAgICAgcmVzZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKHsga2V5IH06IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgaGFuZGxlQ2FuY2VsUHJldmlldygpXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVByZXZpZXcgPSAoKSA9PiB7XG4gICAgICBzZXRQcmV2aWV3aW5nKHRydWUpXG4gICAgICBzZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKVxuICAgIH1cblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgdXBsb2FkRWxlbWVudDogdXBsb2FkRWxlbWVudFJlZi5jdXJyZW50LFxuICAgICAgaGFuZGxlUHJldmlldyxcbiAgICAgIGhhbmRsZUNhbmNlbFByZXZpZXcsXG4gICAgfSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByb2xlPVwibm9uZVwiIGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdXBsb2FkZWQtaW5uZXJgfT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YCR7cHJlZml4fS1maWxlYH0gc3JjPXtzcmN9IGFsdD1cImltZ1wiIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNvdmVyYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFwcmV2aWV3RGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVQcmV2aWV3KClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtob3Zlck9wZXJhdGlvbnM/Lmxlbmd0aCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW9wZXJhdGlvbnNgfT5cbiAgICAgICAgICAgICAge2hvdmVyT3BlcmF0aW9ucy5tYXAoKHsgdGV4dCwgLi4ub3RoZXJzIH0sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW9wZXJhdGlvbnMtaXRlbWB9IHsuLi5vdGhlcnN9PlxuICAgICAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAge2kgIT09IGhvdmVyT3BlcmF0aW9ucy5sZW5ndGggLSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW9wZXJhdGlvbnMtZGl2aWRlcmB9IC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXJlbW92ZWB9PlxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIGljb249e2ljb24gfHwgXCJkZWxldGUtb3V0bGluZWRcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKG9uSWNvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uSWNvbkNsaWNrKGUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS11bnVwbG9hZGVkLWlubmVyYH0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXVwbG9hZC1lbGVtZW50YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgcmVmPXt1cGxvYWRFbGVtZW50UmVmfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJhZGRcIiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taWNvbmB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcHJvZ3Jlc3NgfT5cbiAgICAgICAgICAgIDxpIHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9ncmVzc30lYCB9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXByZXZpZXdgLCB7XG4gICAgICAgICAgICBbYCR7cHJlZml4fS1wcmV2aWV3LXNob3dgXTogcHJldmlld2luZyxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYW5jZWxQcmV2aWV3fVxuICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXByZXZpZXctaW5uZXJgfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgYWx0PVwiaW1nXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXByZXZpZXctZmlsZWB9XG4gICAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJY29uIHNpemU9ezM2fSBpY29uPVwiY2FuY2VsXCIgY29sb3I9XCIjZmZmXCIgaW50ZXJhY3RpdmUgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbilcblxuSW1nLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDpvKDmoIcgaG92ZXIg5pe255qE5pON5L2c5pi+56S6XG4gICAqL1xuICBob3Zlck9wZXJhdGlvbnM6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDmjIflrprlj7PkuIrop5Llm77moIdcbiAgICovXG4gIGljb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlj7PkuIrop5Llm77moIfngrnlh7vml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25JY29uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6Kem5Y+R5LiK5LygXG4gICAqL1xuICBvblVwbG9hZDogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDnpoHmraLngrnlh7vlm77niYfpooTop4hcbiAgICovXG4gIHByZXZpZXdEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDov5vluqbvvIzkvKDlhaUgbnVsbCDml7booajnpLrkuI3mmL7npLrov5vluqbmnaFcbiAgICovXG4gIHByb2dyZXNzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog5LiK5Lyg5oiQ5Yqf5ZCO55qE5Zu+54mH5Zyw5Z2AXG4gICAqL1xuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbkltZy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogXCJcIixcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBob3Zlck9wZXJhdGlvbnM6IHVuZGVmaW5lZCxcbiAgaWNvbjogXCJkZWxldGUtb3V0bGluZWRcIixcbiAgb25JY29uQ2xpY2s6ICgpID0+IHt9LFxuICBvblVwbG9hZDogKCkgPT4ge30sXG4gIHByZXZpZXdEaXNhYmxlZDogZmFsc2UsXG4gIHByb2dyZXNzOiBudWxsLFxuICBzcmM6IFwiXCIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltZ1xuIl19