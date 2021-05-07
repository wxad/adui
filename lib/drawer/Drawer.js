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
      zIndexProp = _ref2.zIndex,
      otherProps = _objectWithoutProperties(_ref2, ["afterClose", "bodyScrollable", "children", "className", "destroyAfterClose", "escapeKeyClosable", "headerContent", "headerElement", "headerStyle", "maskClosable", "maskVisible", "onClose", "placement", "size", "visible", "zIndex"]);

  var zIndex = zIndexProp;

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
        display: visible ? "block" : "",
        zIndex: zIndex
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
  visible: _propTypes["default"].bool,
  zIndex: _propTypes["default"].any
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
  visible: false,
  zIndex: "var(--z-index-dialog)"
};
var _default = Drawer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL0RyYXdlci50c3giXSwibmFtZXMiOlsicHJlZml4Iiwic2Nyb2xsYmFyV2lkdGgiLCJib2R5SXNPdmVyZmxvd2luZyIsInNldFNjcm9sbGJhclBhZGRpbmciLCJib2R5U2Nyb2xsYWJsZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsInN0eWxlIiwicGFkZGluZ1JpZ2h0IiwidW5kZWZpbmVkIiwiY2xhc3NMaXN0IiwiYWRkIiwib3ZlcmZsb3ciLCJyZXNldFNjcm9sbGJhclBhZGRpbmciLCJyZW1vdmUiLCJEcmF3ZXIiLCJhZnRlckNsb3NlIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkZXN0cm95QWZ0ZXJDbG9zZSIsImVzY2FwZUtleUNsb3NhYmxlIiwiaGVhZGVyQ29udGVudCIsImhlYWRlckVsZW1lbnQiLCJoZWFkZXJTdHlsZSIsIm1hc2tDbG9zYWJsZSIsIm1hc2tWaXNpYmxlIiwib25DbG9zZSIsInBsYWNlbWVudCIsInNpemUiLCJ2aXNpYmxlIiwiekluZGV4UHJvcCIsInpJbmRleCIsIm90aGVyUHJvcHMiLCJoYXNFdmVyT3BlbmVkIiwic2V0SGFzRXZlck9wZW5lZCIsIndyYXBwZXJSZWYiLCJjdXJyZW50IiwiaGFuZGxlQ2hpbGRyZW5Nb3VudCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXlDb2RlIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlRW50ZXIiLCJmb2N1cyIsImhhbmRsZUxlYXZlIiwiZGlzcGxheSIsImNsYXNzU2V0IiwiZ2V0Q29tcG9uZW50IiwibWFyZ2luIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImJvb2wiLCJub2RlIiwic3RyaW5nIiwib2JqZWN0Iiwib25lT2YiLCJhbnkiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNB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O0FBT3BCQyxFQUFBQSxhQUFhLEVBQUUsSUFQSztBQVFwQkMsRUFBQUEsYUFBYSxFQUFFYixTQVJLO0FBU3BCYyxFQUFBQSxXQUFXLEVBQUUsRUFUTztBQVVwQkMsRUFBQUEsWUFBWSxFQUFFLEtBVk07QUFXcEJDLEVBQUFBLFdBQVcsRUFBRSxLQVhPO0FBWXBCQyxFQUFBQSxPQUFPLEVBQUUsSUFaVztBQWFwQkMsRUFBQUEsU0FBUyxFQUFFLE9BYlM7QUFjcEJDLEVBQUFBLElBQUksRUFBRSxRQWRjO0FBZXBCQyxFQUFBQSxPQUFPLEVBQUUsS0FmVztBQWdCcEJFLEVBQUFBLE1BQU0sRUFBRTtBQWhCWSxDQUF0QjtlQW1CZWhCLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEFuaW1hdGUgZnJvbSBcInJjLWFuaW1hdGVcIlxuaW1wb3J0IGdldFNjcm9sbEJhclNpemUgZnJvbSBcInJjLXV0aWwvbGliL2dldFNjcm9sbEJhclNpemVcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uXCJcbmltcG9ydCBQb3J0YWwgZnJvbSBcIi4uL3BvcnRhbFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWRyYXdlclwiXG5cbmNvbnN0IHNjcm9sbGJhcldpZHRoID0gZ2V0U2Nyb2xsQmFyU2l6ZSgpXG5sZXQgYm9keUlzT3ZlcmZsb3dpbmcgPSBmYWxzZVxuXG5jb25zdCBzZXRTY3JvbGxiYXJQYWRkaW5nID0gKHtcbiAgYm9keVNjcm9sbGFibGUsXG59OiB7XG4gIGJvZHlTY3JvbGxhYmxlPzogYm9vbGVhblxufSkgPT4ge1xuICBjb25zdCB7IGlubmVyV2lkdGggfSA9IHdpbmRvd1xuICBib2R5SXNPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCBpbm5lcldpZHRoXG4gIGlmIChib2R5SXNPdmVyZmxvd2luZyAmJiAhZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQpIHtcbiAgICBpZiAoc2Nyb2xsYmFyV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtzY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG4gIH1cblxuICBpZiAoYm9keVNjcm9sbGFibGUpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJhZHVpLXNjcm9sbGJhci1oaWRkZW5cIilcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICB9XG59XG5cbmNvbnN0IHJlc2V0U2Nyb2xsYmFyUGFkZGluZyA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYWR1aS1zY3JvbGxiYXItaGlkZGVuXCIpXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEcmF3ZXJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5YWz6Zet5ZCO77yIdHJhbnNpdGlvbiDnu5PmnZ/lkI7vvInnmoQgaGFuZGxlclxuICAgKi9cbiAgYWZ0ZXJDbG9zZT86ICgoKSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIHZpc2libGUg5pe26aG16Z2i6IO95ZCm5rua5YqoXG4gICAqL1xuICBib2R5U2Nyb2xsYWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQje+8jOazqOaEjyBEcmF3ZXIg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuavj+asoSB2aXNpYmxlOiBmYWxzZSDpg73plIDmr4EgZG9tXG4gICAqL1xuICBkZXN0cm95QWZ0ZXJDbG9zZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpuaUr+aMgSBFU0Mg5YWz6ZetXG4gICAqL1xuICBlc2NhcGVLZXlDbG9zYWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIGhlYWRlciDmoIfpopjmoI/lhoXpg6jnmoTlhoXlrrlcbiAgICovXG4gIGhlYWRlckNvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOWujOWFqOiHquWumuS5iSBoZWFkZXIg55qE5YaF5a65XG4gICAqL1xuICBoZWFkZXJFbGVtZW50PzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDorr7nva4gaGVhZGVyIOagt+W8j1xuICAgKi9cbiAgaGVhZGVyU3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiDngrnlh7sgbWFzayDmmK/lkKbop6blj5EgY2FuY2VsIOS6i+S7tlxuICAgKi9cbiAgbWFza0Nsb3NhYmxlPzogYm9vbGVhblxuICAvKipcbiAgICog5piv5ZCm5pi+56S6IG1hc2tcbiAgICovXG4gIG1hc2tWaXNpYmxlPzogYm9vbGVhblxuICAvKipcbiAgICog5YWz6Zet5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xvc2U/OiAoKCkgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiDkvY3nva5cbiAgICovXG4gIHBsYWNlbWVudD86IFwidG9wXCIgfCBcInJpZ2h0XCIgfCBcImJvdHRvbVwiIHwgXCJsZWZ0XCJcbiAgLyoqXG4gICAqIOWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5piv5ZCm5pi+56S6XG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhblxuICAvKipcbiAgICog6K6+572uIHotaW5kZXgg5bGC57qn77yM6buY6K6k5Li6IHZhcigtLXotaW5kZXgtZGlhbG9nKVxuICAgKi9cbiAgekluZGV4PzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbi8qKlxuICog5peL6L2s5Yqg6L2955So5LqO5ZGK55+l55So5oi35L+h5oGv5YaF5a6555qE5Yqg6L2954q25oCB77yM6YCa5bi45piv5Y2z5pe244CB55+t5pe255qE44CCXG4gKi9cbmNvbnN0IERyYXdlcjogUmVhY3QuRkM8SURyYXdlclByb3BzPiA9ICh7XG4gIGFmdGVyQ2xvc2UsXG4gIGJvZHlTY3JvbGxhYmxlLFxuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBkZXN0cm95QWZ0ZXJDbG9zZSxcbiAgZXNjYXBlS2V5Q2xvc2FibGUsXG4gIGhlYWRlckNvbnRlbnQsXG4gIGhlYWRlckVsZW1lbnQsXG4gIGhlYWRlclN0eWxlLFxuICBtYXNrQ2xvc2FibGUsXG4gIG1hc2tWaXNpYmxlLFxuICBvbkNsb3NlLFxuICBwbGFjZW1lbnQsXG4gIHNpemUsXG4gIHZpc2libGUsXG4gIHpJbmRleDogekluZGV4UHJvcCxcbiAgLi4ub3RoZXJQcm9wc1xufTogSURyYXdlclByb3BzKSA9PiB7XG4gIGNvbnN0IHpJbmRleCA9IHpJbmRleFByb3AgYXMgUmVhY3QuQ1NTUHJvcGVydGllc1tcInpJbmRleFwiXVxuICBjb25zdCBbaGFzRXZlck9wZW5lZCwgc2V0SGFzRXZlck9wZW5lZF0gPSB1c2VTdGF0ZSh2aXNpYmxlKVxuICBjb25zdCB3cmFwcGVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc2libGUgJiYgd3JhcHBlclJlZi5jdXJyZW50KSB7XG4gICAgICBzZXRTY3JvbGxiYXJQYWRkaW5nKHsgYm9keVNjcm9sbGFibGUgfSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICB1c2VFZmZlY3QoKCkgPT4gcmVzZXRTY3JvbGxiYXJQYWRkaW5nLCBbXSlcblxuICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gIGlmICh2aXNpYmxlICYmICFoYXNFdmVyT3BlbmVkKSB7XG4gICAgc2V0SGFzRXZlck9wZW5lZCh0cnVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hpbGRyZW5Nb3VudCA9ICgpID0+IHtcbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgc2V0U2Nyb2xsYmFyUGFkZGluZyh7IGJvZHlTY3JvbGxhYmxlIH0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgIG9uQ2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChlc2NhcGVLZXlDbG9zYWJsZSAmJiBlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBoYW5kbGVDbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRW50ZXIgPSAoKSA9PiB7XG4gICAgaWYgKGVzY2FwZUtleUNsb3NhYmxlICYmIHdyYXBwZXJSZWYuY3VycmVudCkge1xuICAgICAgd3JhcHBlclJlZi5jdXJyZW50LmZvY3VzKClcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVMZWF2ZSA9ICgpID0+IHtcbiAgICBpZiAod3JhcHBlclJlZi5jdXJyZW50KSB7XG4gICAgICB3cmFwcGVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfVxuICAgIHJlc2V0U2Nyb2xsYmFyUGFkZGluZygpXG5cbiAgICBpZiAoYWZ0ZXJDbG9zZSkge1xuICAgICAgYWZ0ZXJDbG9zZSgpXG4gICAgfVxuXG4gICAgaWYgKGRlc3Ryb3lBZnRlckNsb3NlKSB7XG4gICAgICBzZXRIYXNFdmVyT3BlbmVkKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICBjbGFzc05hbWUsXG4gICAgYCR7cHJlZml4fS0ke3BsYWNlbWVudH1gLFxuICAgIGAke3ByZWZpeH0tJHtzaXplfWAsXG4gICAgYCR7cHJlZml4fS1pbm5lcmBcbiAgKVxuXG4gIGNvbnN0IGdldENvbXBvbmVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0td3JhcHBlcmB9XG4gICAgICAgIHJlZj17d3JhcHBlclJlZn1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiB2aXNpYmxlID8gXCJibG9ja1wiIDogXCJcIixcbiAgICAgICAgICB6SW5kZXgsXG4gICAgICAgIH19XG4gICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgID5cbiAgICAgICAgPEFuaW1hdGVcbiAgICAgICAgICB0cmFuc2l0aW9uTmFtZT17YCR7cHJlZml4fS1tYXNrYH1cbiAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXJcbiAgICAgICAgPlxuICAgICAgICAgIHt2aXNpYmxlICYmIG1hc2tWaXNpYmxlICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1hc2tgfVxuICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobWFza0Nsb3NhYmxlKSB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0FuaW1hdGU+XG4gICAgICAgIDxBbmltYXRlXG4gICAgICAgICAgb25BcHBlYXI9e2hhbmRsZUVudGVyfVxuICAgICAgICAgIG9uRW50ZXI9e2hhbmRsZUVudGVyfVxuICAgICAgICAgIG9uTGVhdmU9e2hhbmRsZUxlYXZlfVxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lPXtgJHtwcmVmaXh9LSR7cGxhY2VtZW50fWB9XG4gICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXJcbiAgICAgICAgPlxuICAgICAgICAgIHt2aXNpYmxlICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gey4uLm90aGVyUHJvcHN9PlxuICAgICAgICAgICAgICB7aGVhZGVyRWxlbWVudCA9PT0gbnVsbFxuICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgIDogaGVhZGVyRWxlbWVudCB8fCAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWhlYWRlcmB9IHN0eWxlPXtoZWFkZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRJY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1oZWFkZXItY2xvc2VgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xvc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YCR7cHJlZml4fS1oZWFkZXItZGl2aWRlcmB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAge2hlYWRlckNvbnRlbnQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taGVhZGVyLWNvbnRlbnRgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlckNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWJvZHlgfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0FuaW1hdGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBpZiAoIWhhc0V2ZXJPcGVuZWQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIDxQb3J0YWwgb25DaGlsZHJlbk1vdW50PXtoYW5kbGVDaGlsZHJlbk1vdW50fT57Z2V0Q29tcG9uZW50KCl9PC9Qb3J0YWw+XG59XG5cbkRyYXdlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlhbPpl63lkI7vvIh0cmFuc2l0aW9uIOe7k+adn+WQju+8ieeahCBoYW5kbGVyXG4gICAqL1xuICBhZnRlckNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIHZpc2libGUg5pe26aG16Z2i6IO95ZCm5rua5YqoXG4gICAqL1xuICBib2R5U2Nyb2xsYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQje+8jOazqOaEjyBEaWFsb2cg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKbmr4/mrKEgdmlzaWJsZTogZmFsc2Ug6YO96ZSA5q+BIGRvbVxuICAgKi9cbiAgZGVzdHJveUFmdGVyQ2xvc2U6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5piv5ZCm5pSv5oyBIEVTQyDlhbPpl61cbiAgICovXG4gIGVzY2FwZUtleUNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIGhlYWRlciDmoIfpopjmoI/lhoXpg6jnmoTlhoXlrrlcbiAgICovXG4gIGhlYWRlckNvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog5a6M5YWo6Ieq5a6a5LmJIGhlYWRlciDnmoTlhoXlrrlcbiAgICovXG4gIGhlYWRlckVsZW1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6K6+572uIGhlYWRlciDmoLflvI9cbiAgICovXG4gIGhlYWRlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog54K55Ye7IG1hc2sg5piv5ZCm6Kem5Y+RIGNhbmNlbCDkuovku7ZcbiAgICovXG4gIG1hc2tDbG9zYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLogbWFza1xuICAgKi9cbiAgbWFza1Zpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5YWz6Zet5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5L2N572uXG4gICAqL1xuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pLFxuICAvKipcbiAgICog5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5piv5ZCm5pi+56S6XG4gICAqL1xuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOiuvue9riB6LWluZGV4IOWxgue6p++8jOm7mOiupOS4uiB2YXIoLS16LWluZGV4LWRpYWxvZylcbiAgICovXG4gIHpJbmRleDogUHJvcFR5cGVzLmFueSxcbn1cblxuRHJhd2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWZ0ZXJDbG9zZTogbnVsbCxcbiAgYm9keVNjcm9sbGFibGU6IHRydWUsXG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGVzdHJveUFmdGVyQ2xvc2U6IGZhbHNlLFxuICBlc2NhcGVLZXlDbG9zYWJsZTogdHJ1ZSxcbiAgaGVhZGVyQ29udGVudDogbnVsbCxcbiAgaGVhZGVyRWxlbWVudDogdW5kZWZpbmVkLFxuICBoZWFkZXJTdHlsZToge30sXG4gIG1hc2tDbG9zYWJsZTogZmFsc2UsXG4gIG1hc2tWaXNpYmxlOiBmYWxzZSxcbiAgb25DbG9zZTogbnVsbCxcbiAgcGxhY2VtZW50OiBcInJpZ2h0XCIsXG4gIHNpemU6IFwibWVkaXVtXCIsXG4gIHZpc2libGU6IGZhbHNlLFxuICB6SW5kZXg6IFwidmFyKC0tei1pbmRleC1kaWFsb2cpXCIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdlclxuIl19