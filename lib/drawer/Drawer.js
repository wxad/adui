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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL0RyYXdlci50c3giXSwibmFtZXMiOlsicHJlZml4Iiwic2Nyb2xsYmFyV2lkdGgiLCJib2R5SXNPdmVyZmxvd2luZyIsInNldFNjcm9sbGJhclBhZGRpbmciLCJib2R5U2Nyb2xsYWJsZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsInN0eWxlIiwicGFkZGluZ1JpZ2h0IiwidW5kZWZpbmVkIiwiY2xhc3NMaXN0IiwiYWRkIiwib3ZlcmZsb3ciLCJyZXNldFNjcm9sbGJhclBhZGRpbmciLCJyZW1vdmUiLCJEcmF3ZXIiLCJhZnRlckNsb3NlIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkZXN0cm95QWZ0ZXJDbG9zZSIsImVzY2FwZUtleUNsb3NhYmxlIiwiaGVhZGVyQ29udGVudCIsImhlYWRlckVsZW1lbnQiLCJoZWFkZXJTdHlsZSIsIm1hc2tDbG9zYWJsZSIsIm1hc2tWaXNpYmxlIiwib25DbG9zZSIsInBsYWNlbWVudCIsInNpemUiLCJ2aXNpYmxlIiwib3RoZXJQcm9wcyIsImhhc0V2ZXJPcGVuZWQiLCJzZXRIYXNFdmVyT3BlbmVkIiwid3JhcHBlclJlZiIsImN1cnJlbnQiLCJoYW5kbGVDaGlsZHJlbk1vdW50IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVLZXlEb3duIiwiZSIsImtleUNvZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVFbnRlciIsImZvY3VzIiwiaGFuZGxlTGVhdmUiLCJkaXNwbGF5IiwiY2xhc3NTZXQiLCJnZXRDb21wb25lbnQiLCJtYXJnaW4iLCJ6SW5kZXgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiYm9vbCIsIm5vZGUiLCJzdHJpbmciLCJvYmplY3QiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7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QUFPLEVBQUUsSUFaVztBQWFwQkMsRUFBQUEsU0FBUyxFQUFFLE9BYlM7QUFjcEJDLEVBQUFBLElBQUksRUFBRSxRQWRjO0FBZXBCQyxFQUFBQSxPQUFPLEVBQUU7QUFmVyxDQUF0QjtlQWtCZWQsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgQW5pbWF0ZSBmcm9tIFwicmMtYW5pbWF0ZVwiXG5pbXBvcnQgZ2V0U2Nyb2xsQmFyU2l6ZSBmcm9tIFwicmMtdXRpbC9saWIvZ2V0U2Nyb2xsQmFyU2l6ZVwiXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b25cIlxuaW1wb3J0IFBvcnRhbCBmcm9tIFwiLi4vcG9ydGFsXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktZHJhd2VyXCJcblxuY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBnZXRTY3JvbGxCYXJTaXplKClcbmxldCBib2R5SXNPdmVyZmxvd2luZyA9IGZhbHNlXG5cbmNvbnN0IHNldFNjcm9sbGJhclBhZGRpbmcgPSAoe1xuICBib2R5U2Nyb2xsYWJsZSxcbn06IHtcbiAgYm9keVNjcm9sbGFibGU/OiBib29sZWFuXG59KSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJXaWR0aCB9ID0gd2luZG93XG4gIGJvZHlJc092ZXJmbG93aW5nID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IGlubmVyV2lkdGhcbiAgaWYgKGJvZHlJc092ZXJmbG93aW5nICYmICFkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCkge1xuICAgIGlmIChzY3JvbGxiYXJXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cbiAgfVxuXG4gIGlmIChib2R5U2Nyb2xsYWJsZSkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImFkdWktc2Nyb2xsYmFyLWhpZGRlblwiKVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gIH1cbn1cblxuY29uc3QgcmVzZXRTY3JvbGxiYXJQYWRkaW5nID0gKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJhZHVpLXNjcm9sbGJhci1oaWRkZW5cIilcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURyYXdlclByb3BzIHtcbiAgLyoqXG4gICAqIOWFs+mXreWQju+8iHRyYW5zaXRpb24g57uT5p2f5ZCO77yJ55qEIGhhbmRsZXJcbiAgICovXG4gIGFmdGVyQ2xvc2U/OiAoKCkgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiB2aXNpYmxlIOaXtumhtemdouiDveWQpua7muWKqFxuICAgKi9cbiAgYm9keVNjcm9sbGFibGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI3vvIzms6jmhI8gRHJhd2VyIOaJgOacieeahOWxnuaAp+S8mumZhOWKoOWIsOWGhemDqOeahOWGheWuueWFg+e0oOS4iu+8jOiAjOS4jeaYr+WMheWQqyBtYXNrIOeahOacgOWkluWxguWFg+e0oFxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKbmr4/mrKEgdmlzaWJsZTogZmFsc2Ug6YO96ZSA5q+BIGRvbVxuICAgKi9cbiAgZGVzdHJveUFmdGVyQ2xvc2U/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIEgRVNDIOWFs+mXrVxuICAgKi9cbiAgZXNjYXBlS2V5Q2xvc2FibGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiBoZWFkZXIg5qCH6aKY5qCP5YaF6YOo55qE5YaF5a65XG4gICAqL1xuICBoZWFkZXJDb250ZW50PzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDlrozlhajoh6rlrprkuYkgaGVhZGVyIOeahOWGheWuuVxuICAgKi9cbiAgaGVhZGVyRWxlbWVudD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6K6+572uIGhlYWRlciDmoLflvI9cbiAgICovXG4gIGhlYWRlclN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog54K55Ye7IG1hc2sg5piv5ZCm6Kem5Y+RIGNhbmNlbCDkuovku7ZcbiAgICovXG4gIG1hc2tDbG9zYWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuiBtYXNrXG4gICAqL1xuICBtYXNrVmlzaWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWFs+mXreaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsb3NlPzogKCgpID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog5L2N572uXG4gICAqL1xuICBwbGFjZW1lbnQ/OiBcInRvcFwiIHwgXCJyaWdodFwiIHwgXCJib3R0b21cIiB8IFwibGVmdFwiXG4gIC8qKlxuICAgKiDlsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muaYr+WQpuaYvuekulxuICAgKi9cbiAgdmlzaWJsZT86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiDml4vovazliqDovb3nlKjkuo7lkYrnn6XnlKjmiLfkv6Hmga/lhoXlrrnnmoTliqDovb3nirbmgIHvvIzpgJrluLjmmK/ljbPml7bjgIHnn63ml7bnmoTjgIJcbiAqL1xuY29uc3QgRHJhd2VyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJRHJhd2VyUHJvcHM+ID0gKHtcbiAgYWZ0ZXJDbG9zZSxcbiAgYm9keVNjcm9sbGFibGUsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGRlc3Ryb3lBZnRlckNsb3NlLFxuICBlc2NhcGVLZXlDbG9zYWJsZSxcbiAgaGVhZGVyQ29udGVudCxcbiAgaGVhZGVyRWxlbWVudCxcbiAgaGVhZGVyU3R5bGUsXG4gIG1hc2tDbG9zYWJsZSxcbiAgbWFza1Zpc2libGUsXG4gIG9uQ2xvc2UsXG4gIHBsYWNlbWVudCxcbiAgc2l6ZSxcbiAgdmlzaWJsZSxcbiAgLi4ub3RoZXJQcm9wc1xufTogSURyYXdlclByb3BzKSA9PiB7XG4gIGNvbnN0IFtoYXNFdmVyT3BlbmVkLCBzZXRIYXNFdmVyT3BlbmVkXSA9IHVzZVN0YXRlKHZpc2libGUpXG4gIGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmlzaWJsZSAmJiB3cmFwcGVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIHNldFNjcm9sbGJhclBhZGRpbmcoeyBib2R5U2Nyb2xsYWJsZSB9KVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiByZXNldFNjcm9sbGJhclBhZGRpbmcsIFtdKVxuXG4gIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgaWYgKHZpc2libGUgJiYgIWhhc0V2ZXJPcGVuZWQpIHtcbiAgICBzZXRIYXNFdmVyT3BlbmVkKHRydWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGlsZHJlbk1vdW50ID0gKCkgPT4ge1xuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICBzZXRTY3JvbGxiYXJQYWRkaW5nKHsgYm9keVNjcm9sbGFibGUgfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBpZiAob25DbG9zZSkge1xuICAgICAgb25DbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGVzY2FwZUtleUNsb3NhYmxlICYmIGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGhhbmRsZUNsb3NlKClcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVFbnRlciA9ICgpID0+IHtcbiAgICBpZiAoZXNjYXBlS2V5Q2xvc2FibGUgJiYgd3JhcHBlclJlZi5jdXJyZW50KSB7XG4gICAgICB3cmFwcGVyUmVmLmN1cnJlbnQuZm9jdXMoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUxlYXZlID0gKCkgPT4ge1xuICAgIGlmICh3cmFwcGVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIHdyYXBwZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9XG4gICAgcmVzZXRTY3JvbGxiYXJQYWRkaW5nKClcblxuICAgIGlmIChhZnRlckNsb3NlKSB7XG4gICAgICBhZnRlckNsb3NlKClcbiAgICB9XG5cbiAgICBpZiAoZGVzdHJveUFmdGVyQ2xvc2UpIHtcbiAgICAgIHNldEhhc0V2ZXJPcGVuZWQoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICBgJHtwcmVmaXh9LSR7cGxhY2VtZW50fWAsXG4gICAgYCR7cHJlZml4fS0ke3NpemV9YCxcbiAgICBgJHtwcmVmaXh9LWlubmVyYFxuICApXG5cbiAgY29uc3QgZ2V0Q29tcG9uZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS13cmFwcGVyYH1cbiAgICAgICAgcmVmPXt3cmFwcGVyUmVmfVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiB2aXNpYmxlID8gXCJibG9ja1wiIDogXCJcIiB9fVxuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICA+XG4gICAgICAgIDxBbmltYXRlXG4gICAgICAgICAgdHJhbnNpdGlvbk5hbWU9e2Ake3ByZWZpeH0tbWFza2B9XG4gICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyXG4gICAgICAgID5cbiAgICAgICAgICB7dmlzaWJsZSAmJiBtYXNrVmlzaWJsZSAmJiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1tYXNrYH1cbiAgICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG1hc2tDbG9zYWJsZSkge1xuICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2UoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9BbmltYXRlPlxuICAgICAgICA8QW5pbWF0ZVxuICAgICAgICAgIG9uQXBwZWFyPXtoYW5kbGVFbnRlcn1cbiAgICAgICAgICBvbkVudGVyPXtoYW5kbGVFbnRlcn1cbiAgICAgICAgICBvbkxlYXZlPXtoYW5kbGVMZWF2ZX1cbiAgICAgICAgICB0cmFuc2l0aW9uTmFtZT17YCR7cHJlZml4fS0ke3BsYWNlbWVudH1gfVxuICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXG4gICAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyXG4gICAgICAgID5cbiAgICAgICAgICB7dmlzaWJsZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAgICAgICAge2hlYWRlckVsZW1lbnQgPT09IG51bGxcbiAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICA6IGhlYWRlckVsZW1lbnQgfHwgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1oZWFkZXJgfSBzdHlsZT17aGVhZGVyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0SWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0taGVhZGVyLWNsb3NlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsb3NlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2Ake3ByZWZpeH0taGVhZGVyLWRpdmlkZXJgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJDb250ZW50ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWhlYWRlci1jb250ZW50YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJDb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1ib2R5YH0+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9BbmltYXRlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgaWYgKCFoYXNFdmVyT3BlbmVkKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiA8UG9ydGFsIG9uQ2hpbGRyZW5Nb3VudD17aGFuZGxlQ2hpbGRyZW5Nb3VudH0+e2dldENvbXBvbmVudCgpfTwvUG9ydGFsPlxufVxuXG5EcmF3ZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5YWz6Zet5ZCO77yIdHJhbnNpdGlvbiDnu5PmnZ/lkI7vvInnmoQgaGFuZGxlclxuICAgKi9cbiAgYWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiB2aXNpYmxlIOaXtumhtemdouiDveWQpua7muWKqFxuICAgKi9cbiAgYm9keVNjcm9sbGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI3vvIzms6jmhI8gRGlhbG9nIOaJgOacieeahOWxnuaAp+S8mumZhOWKoOWIsOWGhemDqOeahOWGheWuueWFg+e0oOS4iu+8jOiAjOS4jeaYr+WMheWQqyBtYXNrIOeahOacgOWkluWxguWFg+e0oFxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm5q+P5qyhIHZpc2libGU6IGZhbHNlIOmDvemUgOavgSBkb21cbiAgICovXG4gIGRlc3Ryb3lBZnRlckNsb3NlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOaYr+WQpuaUr+aMgSBFU0Mg5YWz6ZetXG4gICAqL1xuICBlc2NhcGVLZXlDbG9zYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBoZWFkZXIg5qCH6aKY5qCP5YaF6YOo55qE5YaF5a65XG4gICAqL1xuICBoZWFkZXJDb250ZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOWujOWFqOiHquWumuS5iSBoZWFkZXIg55qE5YaF5a65XG4gICAqL1xuICBoZWFkZXJFbGVtZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOiuvue9riBoZWFkZXIg5qC35byPXG4gICAqL1xuICBoZWFkZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOeCueWHuyBtYXNrIOaYr+WQpuinpuWPkSBjYW5jZWwg5LqL5Lu2XG4gICAqL1xuICBtYXNrQ2xvc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5piv5ZCm5pi+56S6IG1hc2tcbiAgICovXG4gIG1hc2tWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWFs+mXreaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOS9jee9rlxuICAgKi9cbiAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1widG9wXCIsIFwicmlnaHRcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCJdKSxcbiAgLyoqXG4gICAqIOWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muaYr+WQpuaYvuekulxuICAgKi9cbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG59XG5cbkRyYXdlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFmdGVyQ2xvc2U6IG51bGwsXG4gIGJvZHlTY3JvbGxhYmxlOiB0cnVlLFxuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRlc3Ryb3lBZnRlckNsb3NlOiBmYWxzZSxcbiAgZXNjYXBlS2V5Q2xvc2FibGU6IHRydWUsXG4gIGhlYWRlckNvbnRlbnQ6IG51bGwsXG4gIGhlYWRlckVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgaGVhZGVyU3R5bGU6IHt9LFxuICBtYXNrQ2xvc2FibGU6IGZhbHNlLFxuICBtYXNrVmlzaWJsZTogZmFsc2UsXG4gIG9uQ2xvc2U6IG51bGwsXG4gIHBsYWNlbWVudDogXCJyaWdodFwiLFxuICBzaXplOiBcIm1lZGl1bVwiLFxuICB2aXNpYmxlOiBmYWxzZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyXG4iXX0=