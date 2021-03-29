"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _rcAnimate = _interopRequireDefault(require("rc-animate"));

var _getScrollBarSize = _interopRequireDefault(require("rc-util/lib/getScrollBarSize"));

var _button = _interopRequireDefault(require("../button"));

var _portal = _interopRequireDefault(require("../portal"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-drawer";
var scrollbarWidth = (0, _getScrollBarSize["default"])();
var bodyIsOverflowing = false;

var setScrollbarPadding = function setScrollbarPadding(_ref) {
  var bodyScrollable = _ref.bodyScrollable;
  var _window = window,
      innerWidth = _window.innerWidth;
  bodyIsOverflowing = document.body.clientWidth < innerWidth;

  if (bodyIsOverflowing && !document.body.style.paddingRight) {
    if (scrollbarWidth !== undefined) {
      document.body.style.paddingRight = "".concat(scrollbarWidth, "px");
    }
  }

  if (bodyScrollable) {
    document.body.classList.add("adui-scrollbar-hidden");
  } else {
    document.body.style.overflow = "hidden";
  }
};

var resetScrollbarPadding = function resetScrollbarPadding() {
  document.body.classList.remove("adui-scrollbar-hidden");
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
};

var Drawer = function Drawer(_ref2) {
  var afterClose = _ref2.afterClose,
      bodyScrollable = _ref2.bodyScrollable,
      children = _ref2.children,
      className = _ref2.className,
      destroyAfterClose = _ref2.destroyAfterClose,
      escapeKeyClosable = _ref2.escapeKeyClosable,
      headerContent = _ref2.headerContent,
      headerElement = _ref2.headerElement,
      headerStyle = _ref2.headerStyle,
      maskClosable = _ref2.maskClosable,
      maskVisible = _ref2.maskVisible,
      onClose = _ref2.onClose,
      placement = _ref2.placement,
      size = _ref2.size,
      visible = _ref2.visible,
      otherProps = _objectWithoutProperties(_ref2, ["afterClose", "bodyScrollable", "children", "className", "destroyAfterClose", "escapeKeyClosable", "headerContent", "headerElement", "headerStyle", "maskClosable", "maskVisible", "onClose", "placement", "size", "visible"]);

  var _useState = (0, _react.useState)(visible),
      _useState2 = _slicedToArray(_useState, 2),
      hasEverOpened = _useState2[0],
      setHasEverOpened = _useState2[1];

  var wrapperRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (visible && wrapperRef.current) {
      setScrollbarPadding({
        bodyScrollable: bodyScrollable
      });
    }
  }, [visible]);
  (0, _react.useEffect)(function () {
    return resetScrollbarPadding;
  }, []);

  if (visible && !hasEverOpened) {
    setHasEverOpened(true);
  }

  var handleChildrenMount = function handleChildrenMount() {
    if (visible) {
      setScrollbarPadding({
        bodyScrollable: bodyScrollable
      });
    }
  };

  var handleClose = function handleClose() {
    if (onClose) {
      onClose();
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (escapeKeyClosable && e.keyCode === 27) {
      e.stopPropagation();
      handleClose();
    }
  };

  var handleEnter = function handleEnter() {
    if (escapeKeyClosable && wrapperRef.current) {
      wrapperRef.current.focus();
    }
  };

  var handleLeave = function handleLeave() {
    if (wrapperRef.current) {
      wrapperRef.current.style.display = "none";
    }

    resetScrollbarPadding();

    if (afterClose) {
      afterClose();
    }

    if (destroyAfterClose) {
      setHasEverOpened(false);
    }
  };

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-").concat(placement), "".concat(prefix, "-").concat(size), "".concat(prefix, "-inner"));

  var getComponent = function getComponent() {
    return _react["default"].createElement("div", {
      className: "".concat(prefix, "-wrapper"),
      ref: wrapperRef,
      style: {
        display: visible ? "block" : ""
      },
      tabIndex: 0,
      role: "none",
      onKeyDown: handleKeyDown
    }, _react["default"].createElement(_rcAnimate["default"], {
      transitionName: "".concat(prefix, "-mask"),
      component: "div",
      transitionAppear: true
    }, visible && maskVisible && _react["default"].createElement("div", {
      className: "".concat(prefix, "-mask"),
      role: "none",
      onClick: function onClick() {
        if (maskClosable) {
          handleClose();
        }
      }
    })), _react["default"].createElement(_rcAnimate["default"], {
      onAppear: handleEnter,
      onEnter: handleEnter,
      onLeave: handleLeave,
      transitionName: "".concat(prefix, "-").concat(placement),
      component: "div",
      style: {
        margin: "auto",
        zIndex: 1
      },
      transitionAppear: true
    }, visible && _react["default"].createElement("div", _extends({
      className: classSet
    }, otherProps), headerElement === null ? null : headerElement || _react["default"].createElement("div", {
      className: "".concat(prefix, "-header"),
      style: headerStyle
    }, _react["default"].createElement(_button["default"], {
      theme: "light",
      size: "medium",
      leftIcon: "cancel",
      className: "".concat(prefix, "-header-close"),
      onClick: function onClick() {
        return handleClose();
      }
    }), _react["default"].createElement("i", {
      className: "".concat(prefix, "-header-divider")
    }), headerContent && _react["default"].createElement("div", {
      className: "".concat(prefix, "-header-content")
    }, headerContent)), _react["default"].createElement("div", {
      className: "".concat(prefix, "-body")
    }, children))));
  };

  if (!hasEverOpened) {
    return null;
  }

  return _react["default"].createElement(_portal["default"], {
    onChildrenMount: handleChildrenMount
  }, getComponent());
};

Drawer.propTypes = {
  afterClose: _propTypes["default"].func,
  bodyScrollable: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  destroyAfterClose: _propTypes["default"].bool,
  escapeKeyClosable: _propTypes["default"].bool,
  headerContent: _propTypes["default"].node,
  headerElement: _propTypes["default"].node,
  headerStyle: _propTypes["default"].object,
  maskClosable: _propTypes["default"].bool,
  maskVisible: _propTypes["default"].bool,
  onClose: _propTypes["default"].func,
  placement: _propTypes["default"].oneOf(["top", "right", "bottom", "left"]),
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  visible: _propTypes["default"].bool
};
Drawer.defaultProps = {
  afterClose: null,
  bodyScrollable: true,
  children: null,
  className: undefined,
  destroyAfterClose: false,
  escapeKeyClosable: true,
  headerContent: null,
  headerElement: undefined,
  headerStyle: {},
  maskClosable: false,
  maskVisible: false,
  onClose: null,
  placement: "right",
  size: "medium",
  visible: false
};
var _default = Drawer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL0RyYXdlci50c3giXSwibmFtZXMiOlsicHJlZml4Iiwic2Nyb2xsYmFyV2lkdGgiLCJib2R5SXNPdmVyZmxvd2luZyIsInNldFNjcm9sbGJhclBhZGRpbmciLCJib2R5U2Nyb2xsYWJsZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsInN0eWxlIiwicGFkZGluZ1JpZ2h0IiwidW5kZWZpbmVkIiwiY2xhc3NMaXN0IiwiYWRkIiwib3ZlcmZsb3ciLCJyZXNldFNjcm9sbGJhclBhZGRpbmciLCJyZW1vdmUiLCJEcmF3ZXIiLCJhZnRlckNsb3NlIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkZXN0cm95QWZ0ZXJDbG9zZSIsImVzY2FwZUtleUNsb3NhYmxlIiwiaGVhZGVyQ29udGVudCIsImhlYWRlckVsZW1lbnQiLCJoZWFkZXJTdHlsZSIsIm1hc2tDbG9zYWJsZSIsIm1hc2tWaXNpYmxlIiwib25DbG9zZSIsInBsYWNlbWVudCIsInNpemUiLCJ2aXNpYmxlIiwib3RoZXJQcm9wcyIsImhhc0V2ZXJPcGVuZWQiLCJzZXRIYXNFdmVyT3BlbmVkIiwid3JhcHBlclJlZiIsImN1cnJlbnQiLCJoYW5kbGVDaGlsZHJlbk1vdW50IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVLZXlEb3duIiwiZSIsImtleUNvZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVFbnRlciIsImZvY3VzIiwiaGFuZGxlTGVhdmUiLCJkaXNwbGF5IiwiY2xhc3NTZXQiLCJnZXRDb21wb25lbnQiLCJtYXJnaW4iLCJ6SW5kZXgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiYm9vbCIsIm5vZGUiLCJzdHJpbmciLCJvYmplY3QiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7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QUEsT0FBTyxFQUFFLElBWlc7QUFhcEJDLEVBQUFBLFNBQVMsRUFBRSxPQWJTO0FBY3BCQyxFQUFBQSxJQUFJLEVBQUUsUUFkYztBQWVwQkMsRUFBQUEsT0FBTyxFQUFFO0FBZlcsQ0FBdEI7ZUFrQmVkLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEFuaW1hdGUgZnJvbSBcInJjLWFuaW1hdGVcIlxuaW1wb3J0IGdldFNjcm9sbEJhclNpemUgZnJvbSBcInJjLXV0aWwvbGliL2dldFNjcm9sbEJhclNpemVcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uXCJcbmltcG9ydCBQb3J0YWwgZnJvbSBcIi4uL3BvcnRhbFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWRyYXdlclwiXG5cbmNvbnN0IHNjcm9sbGJhcldpZHRoID0gZ2V0U2Nyb2xsQmFyU2l6ZSgpXG5sZXQgYm9keUlzT3ZlcmZsb3dpbmcgPSBmYWxzZVxuXG5jb25zdCBzZXRTY3JvbGxiYXJQYWRkaW5nID0gKHtcbiAgYm9keVNjcm9sbGFibGUsXG59OiB7XG4gIGJvZHlTY3JvbGxhYmxlPzogYm9vbGVhblxufSkgPT4ge1xuICBjb25zdCB7IGlubmVyV2lkdGggfSA9IHdpbmRvd1xuICBib2R5SXNPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCBpbm5lcldpZHRoXG4gIGlmIChib2R5SXNPdmVyZmxvd2luZyAmJiAhZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQpIHtcbiAgICBpZiAoc2Nyb2xsYmFyV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtzY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG4gIH1cblxuICBpZiAoYm9keVNjcm9sbGFibGUpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJhZHVpLXNjcm9sbGJhci1oaWRkZW5cIilcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICB9XG59XG5cbmNvbnN0IHJlc2V0U2Nyb2xsYmFyUGFkZGluZyA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYWR1aS1zY3JvbGxiYXItaGlkZGVuXCIpXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEcmF3ZXJQcm9wcyB7XG4gIC8qKlxuICAgKiDlhbPpl63lkI7vvIh0cmFuc2l0aW9uIOe7k+adn+WQju+8ieeahCBoYW5kbGVyXG4gICAqL1xuICBhZnRlckNsb3NlPzogKCgpID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICogdmlzaWJsZSDml7bpobXpnaLog73lkKbmu5rliqhcbiAgICovXG4gIGJvZHlTY3JvbGxhYmxlPzogYm9vbGVhblxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCN77yM5rOo5oSPIERyYXdlciDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm5q+P5qyhIHZpc2libGU6IGZhbHNlIOmDvemUgOavgSBkb21cbiAgICovXG4gIGRlc3Ryb3lBZnRlckNsb3NlPzogYm9vbGVhblxuICAvKipcbiAgICog5piv5ZCm5pSv5oyBIEVTQyDlhbPpl61cbiAgICovXG4gIGVzY2FwZUtleUNsb3NhYmxlPzogYm9vbGVhblxuICAvKipcbiAgICogaGVhZGVyIOagh+mimOagj+WGhemDqOeahOWGheWuuVxuICAgKi9cbiAgaGVhZGVyQ29udGVudD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog5a6M5YWo6Ieq5a6a5LmJIGhlYWRlciDnmoTlhoXlrrlcbiAgICovXG4gIGhlYWRlckVsZW1lbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOiuvue9riBoZWFkZXIg5qC35byPXG4gICAqL1xuICBoZWFkZXJTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOeCueWHuyBtYXNrIOaYr+WQpuinpuWPkSBjYW5jZWwg5LqL5Lu2XG4gICAqL1xuICBtYXNrQ2xvc2FibGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLogbWFza1xuICAgKi9cbiAgbWFza1Zpc2libGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlhbPpl63ml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbG9zZT86ICgoKSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOS9jee9rlxuICAgKi9cbiAgcGxhY2VtZW50PzogXCJ0b3BcIiB8IFwicmlnaHRcIiB8IFwiYm90dG9tXCIgfCBcImxlZnRcIlxuICAvKipcbiAgICog5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKbmmL7npLpcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuXG59XG5cbi8qKlxuICog5peL6L2s5Yqg6L2955So5LqO5ZGK55+l55So5oi35L+h5oGv5YaF5a6555qE5Yqg6L2954q25oCB77yM6YCa5bi45piv5Y2z5pe244CB55+t5pe255qE44CCXG4gKi9cbmNvbnN0IERyYXdlcjogUmVhY3QuRkM8SURyYXdlclByb3BzPiA9ICh7XG4gIGFmdGVyQ2xvc2UsXG4gIGJvZHlTY3JvbGxhYmxlLFxuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBkZXN0cm95QWZ0ZXJDbG9zZSxcbiAgZXNjYXBlS2V5Q2xvc2FibGUsXG4gIGhlYWRlckNvbnRlbnQsXG4gIGhlYWRlckVsZW1lbnQsXG4gIGhlYWRlclN0eWxlLFxuICBtYXNrQ2xvc2FibGUsXG4gIG1hc2tWaXNpYmxlLFxuICBvbkNsb3NlLFxuICBwbGFjZW1lbnQsXG4gIHNpemUsXG4gIHZpc2libGUsXG4gIC4uLm90aGVyUHJvcHNcbn06IElEcmF3ZXJQcm9wcykgPT4ge1xuICBjb25zdCBbaGFzRXZlck9wZW5lZCwgc2V0SGFzRXZlck9wZW5lZF0gPSB1c2VTdGF0ZSh2aXNpYmxlKVxuICBjb25zdCB3cmFwcGVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc2libGUgJiYgd3JhcHBlclJlZi5jdXJyZW50KSB7XG4gICAgICBzZXRTY3JvbGxiYXJQYWRkaW5nKHsgYm9keVNjcm9sbGFibGUgfSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICB1c2VFZmZlY3QoKCkgPT4gcmVzZXRTY3JvbGxiYXJQYWRkaW5nLCBbXSlcblxuICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gIGlmICh2aXNpYmxlICYmICFoYXNFdmVyT3BlbmVkKSB7XG4gICAgc2V0SGFzRXZlck9wZW5lZCh0cnVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hpbGRyZW5Nb3VudCA9ICgpID0+IHtcbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgc2V0U2Nyb2xsYmFyUGFkZGluZyh7IGJvZHlTY3JvbGxhYmxlIH0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgIG9uQ2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChlc2NhcGVLZXlDbG9zYWJsZSAmJiBlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBoYW5kbGVDbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRW50ZXIgPSAoKSA9PiB7XG4gICAgaWYgKGVzY2FwZUtleUNsb3NhYmxlICYmIHdyYXBwZXJSZWYuY3VycmVudCkge1xuICAgICAgd3JhcHBlclJlZi5jdXJyZW50LmZvY3VzKClcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVMZWF2ZSA9ICgpID0+IHtcbiAgICBpZiAod3JhcHBlclJlZi5jdXJyZW50KSB7XG4gICAgICB3cmFwcGVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfVxuICAgIHJlc2V0U2Nyb2xsYmFyUGFkZGluZygpXG5cbiAgICBpZiAoYWZ0ZXJDbG9zZSkge1xuICAgICAgYWZ0ZXJDbG9zZSgpXG4gICAgfVxuXG4gICAgaWYgKGRlc3Ryb3lBZnRlckNsb3NlKSB7XG4gICAgICBzZXRIYXNFdmVyT3BlbmVkKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICBjbGFzc05hbWUsXG4gICAgYCR7cHJlZml4fS0ke3BsYWNlbWVudH1gLFxuICAgIGAke3ByZWZpeH0tJHtzaXplfWAsXG4gICAgYCR7cHJlZml4fS1pbm5lcmBcbiAgKVxuXG4gIGNvbnN0IGdldENvbXBvbmVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0td3JhcHBlcmB9XG4gICAgICAgIHJlZj17d3JhcHBlclJlZn1cbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogdmlzaWJsZSA/IFwiYmxvY2tcIiA6IFwiXCIgfX1cbiAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgPlxuICAgICAgICA8QW5pbWF0ZVxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lPXtgJHtwcmVmaXh9LW1hc2tgfVxuICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgdHJhbnNpdGlvbkFwcGVhclxuICAgICAgICA+XG4gICAgICAgICAge3Zpc2libGUgJiYgbWFza1Zpc2libGUgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbWFza2B9XG4gICAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtYXNrQ2xvc2FibGUpIHtcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQW5pbWF0ZT5cbiAgICAgICAgPEFuaW1hdGVcbiAgICAgICAgICBvbkFwcGVhcj17aGFuZGxlRW50ZXJ9XG4gICAgICAgICAgb25FbnRlcj17aGFuZGxlRW50ZXJ9XG4gICAgICAgICAgb25MZWF2ZT17aGFuZGxlTGVhdmV9XG4gICAgICAgICAgdHJhbnNpdGlvbk5hbWU9e2Ake3ByZWZpeH0tJHtwbGFjZW1lbnR9YH1cbiAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgICAgICAgekluZGV4OiAxLFxuICAgICAgICAgIH19XG4gICAgICAgICAgdHJhbnNpdGlvbkFwcGVhclxuICAgICAgICA+XG4gICAgICAgICAge3Zpc2libGUgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgICAgICAgIHtoZWFkZXJFbGVtZW50ID09PSBudWxsXG4gICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgOiBoZWFkZXJFbGVtZW50IHx8IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taGVhZGVyYH0gc3R5bGU9e2hlYWRlclN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEljb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWhlYWRlci1jbG9zZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbG9zZSgpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWhlYWRlci1kaXZpZGVyYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyQ29udGVudCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1oZWFkZXItY29udGVudGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyQ29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tYm9keWB9PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQW5pbWF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGlmICghaGFzRXZlck9wZW5lZCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gPFBvcnRhbCBvbkNoaWxkcmVuTW91bnQ9e2hhbmRsZUNoaWxkcmVuTW91bnR9PntnZXRDb21wb25lbnQoKX08L1BvcnRhbD5cbn1cblxuRHJhd2VyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOWFs+mXreWQju+8iHRyYW5zaXRpb24g57uT5p2f5ZCO77yJ55qEIGhhbmRsZXJcbiAgICovXG4gIGFmdGVyQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogdmlzaWJsZSDml7bpobXpnaLog73lkKbmu5rliqhcbiAgICovXG4gIGJvZHlTY3JvbGxhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCN77yM5rOo5oSPIERpYWxvZyDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuavj+asoSB2aXNpYmxlOiBmYWxzZSDpg73plIDmr4EgZG9tXG4gICAqL1xuICBkZXN0cm95QWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIEgRVNDIOWFs+mXrVxuICAgKi9cbiAgZXNjYXBlS2V5Q2xvc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogaGVhZGVyIOagh+mimOagj+WGhemDqOeahOWGheWuuVxuICAgKi9cbiAgaGVhZGVyQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDlrozlhajoh6rlrprkuYkgaGVhZGVyIOeahOWGheWuuVxuICAgKi9cbiAgaGVhZGVyRWxlbWVudDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDorr7nva4gaGVhZGVyIOagt+W8j1xuICAgKi9cbiAgaGVhZGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDngrnlh7sgbWFzayDmmK/lkKbop6blj5EgY2FuY2VsIOS6i+S7tlxuICAgKi9cbiAgbWFza0Nsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuiBtYXNrXG4gICAqL1xuICBtYXNrVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlhbPpl63ml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDkvY3nva5cbiAgICovXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiXSksXG4gIC8qKlxuICAgKiDlsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKbmmL7npLpcbiAgICovXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxufVxuXG5EcmF3ZXIuZGVmYXVsdFByb3BzID0ge1xuICBhZnRlckNsb3NlOiBudWxsLFxuICBib2R5U2Nyb2xsYWJsZTogdHJ1ZSxcbiAgY2hpbGRyZW46IG51bGwsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkZXN0cm95QWZ0ZXJDbG9zZTogZmFsc2UsXG4gIGVzY2FwZUtleUNsb3NhYmxlOiB0cnVlLFxuICBoZWFkZXJDb250ZW50OiBudWxsLFxuICBoZWFkZXJFbGVtZW50OiB1bmRlZmluZWQsXG4gIGhlYWRlclN0eWxlOiB7fSxcbiAgbWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgbWFza1Zpc2libGU6IGZhbHNlLFxuICBvbkNsb3NlOiBudWxsLFxuICBwbGFjZW1lbnQ6IFwicmlnaHRcIixcbiAgc2l6ZTogXCJtZWRpdW1cIixcbiAgdmlzaWJsZTogZmFsc2UsXG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdlclxuIl19