function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Animate from "rc-animate";
import getScrollBarSize from "rc-util/lib/getScrollBarSize";
import Button from "../button";
import Portal from "../portal";
import "./style";
var prefix = "adui-drawer";
var scrollbarWidth = getScrollBarSize();
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

  var _useState = useState(visible),
      _useState2 = _slicedToArray(_useState, 2),
      hasEverOpened = _useState2[0],
      setHasEverOpened = _useState2[1];

  var wrapperRef = useRef(null);
  useEffect(function () {
    if (visible && wrapperRef.current) {
      setScrollbarPadding({
        bodyScrollable: bodyScrollable
      });
    }
  }, [visible]);
  useEffect(function () {
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

  var classSet = classNames(className, "".concat(prefix, "-").concat(placement), "".concat(prefix, "-").concat(size), "".concat(prefix, "-inner"));

  var getComponent = function getComponent() {
    return React.createElement("div", {
      className: "".concat(prefix, "-wrapper"),
      ref: wrapperRef,
      style: {
        display: visible ? "block" : "",
        zIndex: zIndex
      },
      tabIndex: 0,
      role: "none",
      onKeyDown: handleKeyDown
    }, React.createElement(Animate, {
      transitionName: "".concat(prefix, "-mask"),
      component: "div",
      transitionAppear: true
    }, visible && maskVisible && React.createElement("div", {
      className: "".concat(prefix, "-mask"),
      role: "none",
      onClick: function onClick() {
        if (maskClosable) {
          handleClose();
        }
      }
    })), React.createElement(Animate, {
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
    }, visible && React.createElement("div", _extends({
      className: classSet
    }, otherProps), headerElement === null ? null : headerElement || React.createElement("div", {
      className: "".concat(prefix, "-header"),
      style: headerStyle
    }, React.createElement(Button, {
      theme: "light",
      size: "medium",
      leftIcon: "cancel",
      className: "".concat(prefix, "-header-close"),
      onClick: function onClick() {
        return handleClose();
      }
    }), React.createElement("i", {
      className: "".concat(prefix, "-header-divider")
    }), headerContent && React.createElement("div", {
      className: "".concat(prefix, "-header-content")
    }, headerContent)), React.createElement("div", {
      className: "".concat(prefix, "-body")
    }, children))));
  };

  if (!hasEverOpened) {
    return null;
  }

  return React.createElement(Portal, {
    onChildrenMount: handleChildrenMount
  }, getComponent());
};

Drawer.propTypes = {
  afterClose: PropTypes.func,
  bodyScrollable: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  destroyAfterClose: PropTypes.bool,
  escapeKeyClosable: PropTypes.bool,
  headerContent: PropTypes.node,
  headerElement: PropTypes.node,
  headerStyle: PropTypes.object,
  maskClosable: PropTypes.bool,
  maskVisible: PropTypes.bool,
  onClose: PropTypes.func,
  placement: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  visible: PropTypes.bool,
  zIndex: PropTypes.any
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
export default Drawer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL0RyYXdlci50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJBbmltYXRlIiwiZ2V0U2Nyb2xsQmFyU2l6ZSIsIkJ1dHRvbiIsIlBvcnRhbCIsInByZWZpeCIsInNjcm9sbGJhcldpZHRoIiwiYm9keUlzT3ZlcmZsb3dpbmciLCJzZXRTY3JvbGxiYXJQYWRkaW5nIiwiYm9keVNjcm9sbGFibGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJzdHlsZSIsInBhZGRpbmdSaWdodCIsInVuZGVmaW5lZCIsImNsYXNzTGlzdCIsImFkZCIsIm92ZXJmbG93IiwicmVzZXRTY3JvbGxiYXJQYWRkaW5nIiwicmVtb3ZlIiwiRHJhd2VyIiwiYWZ0ZXJDbG9zZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGVzdHJveUFmdGVyQ2xvc2UiLCJlc2NhcGVLZXlDbG9zYWJsZSIsImhlYWRlckNvbnRlbnQiLCJoZWFkZXJFbGVtZW50IiwiaGVhZGVyU3R5bGUiLCJtYXNrQ2xvc2FibGUiLCJtYXNrVmlzaWJsZSIsIm9uQ2xvc2UiLCJwbGFjZW1lbnQiLCJzaXplIiwidmlzaWJsZSIsInpJbmRleFByb3AiLCJ6SW5kZXgiLCJvdGhlclByb3BzIiwiaGFzRXZlck9wZW5lZCIsInNldEhhc0V2ZXJPcGVuZWQiLCJ3cmFwcGVyUmVmIiwiY3VycmVudCIsImhhbmRsZUNoaWxkcmVuTW91bnQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUtleURvd24iLCJlIiwia2V5Q29kZSIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUVudGVyIiwiZm9jdXMiLCJoYW5kbGVMZWF2ZSIsImRpc3BsYXkiLCJjbGFzc1NldCIsImdldENvbXBvbmVudCIsIm1hcmdpbiIsInByb3BUeXBlcyIsImZ1bmMiLCJib29s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LEVBQTJCLE1BQTNCLENBQWhCLENBcERNO0FBd0RqQjVCLEVBQUFBLElBQUksRUFBRXJDLFNBQVMsQ0FBQ2lFLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixDQUFoQixDQXhEVztBQTREakIzQixFQUFBQSxPQUFPLEVBQUV0QyxTQUFTLENBQUM2RCxJQTVERjtBQWdFakJyQixFQUFBQSxNQUFNLEVBQUV4QyxTQUFTLENBQUNrRTtBQWhFRCxDQUFuQjtBQW1FQTFDLE1BQU0sQ0FBQzJDLFlBQVAsR0FBc0I7QUFDcEIxQyxFQUFBQSxVQUFVLEVBQUUsSUFEUTtBQUVwQmYsRUFBQUEsY0FBYyxFQUFFLElBRkk7QUFHcEJnQixFQUFBQSxRQUFRLEVBQUUsSUFIVTtBQUlwQkMsRUFBQUEsU0FBUyxFQUFFVCxTQUpTO0FBS3BCVSxFQUFBQSxpQkFBaUIsRUFBRSxLQUxDO0FBTXBCQyxFQUFBQSxpQkFBaUIsRUFBRSxJQU5DO0FBT3BCQyxFQUFBQSxhQUFhLEVBQUUsSUFQSztBQVFwQkMsRUFBQUEsYUFBYSxFQUFFYixTQVJLO0FBU3BCYyxFQUFBQSxXQUFXLEVBQUUsRUFUTztBQVVwQkMsRUFBQUEsWUFBWSxFQUFFLEtBVk07QUFXcEJDLEVBQUFBLFdBQVcsRUFBRSxLQVhPO0FBWXBCQyxFQUFBQSxPQUFPLEVBQUUsSUFaVztBQWFwQkMsRUFBQUEsU0FBUyxFQUFFLE9BYlM7QUFjcEJDLEVBQUFBLElBQUksRUFBRSxRQWRjO0FBZXBCQyxFQUFBQSxPQUFPLEVBQUUsS0FmVztBQWdCcEJFLEVBQUFBLE1BQU0sRUFBRTtBQWhCWSxDQUF0QjtBQW1CQSxlQUFlaEIsTUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgQW5pbWF0ZSBmcm9tIFwicmMtYW5pbWF0ZVwiXG5pbXBvcnQgZ2V0U2Nyb2xsQmFyU2l6ZSBmcm9tIFwicmMtdXRpbC9saWIvZ2V0U2Nyb2xsQmFyU2l6ZVwiXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b25cIlxuaW1wb3J0IFBvcnRhbCBmcm9tIFwiLi4vcG9ydGFsXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktZHJhd2VyXCJcblxuY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBnZXRTY3JvbGxCYXJTaXplKClcbmxldCBib2R5SXNPdmVyZmxvd2luZyA9IGZhbHNlXG5cbmNvbnN0IHNldFNjcm9sbGJhclBhZGRpbmcgPSAoe1xuICBib2R5U2Nyb2xsYWJsZSxcbn06IHtcbiAgYm9keVNjcm9sbGFibGU/OiBib29sZWFuXG59KSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJXaWR0aCB9ID0gd2luZG93XG4gIGJvZHlJc092ZXJmbG93aW5nID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IGlubmVyV2lkdGhcbiAgaWYgKGJvZHlJc092ZXJmbG93aW5nICYmICFkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCkge1xuICAgIGlmIChzY3JvbGxiYXJXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cbiAgfVxuXG4gIGlmIChib2R5U2Nyb2xsYWJsZSkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImFkdWktc2Nyb2xsYmFyLWhpZGRlblwiKVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gIH1cbn1cblxuY29uc3QgcmVzZXRTY3JvbGxiYXJQYWRkaW5nID0gKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJhZHVpLXNjcm9sbGJhci1oaWRkZW5cIilcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURyYXdlclByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlhbPpl63lkI7vvIh0cmFuc2l0aW9uIOe7k+adn+WQju+8ieeahCBoYW5kbGVyXG4gICAqL1xuICBhZnRlckNsb3NlPzogKCgpID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICogdmlzaWJsZSDml7bpobXpnaLog73lkKbmu5rliqhcbiAgICovXG4gIGJvZHlTY3JvbGxhYmxlPzogYm9vbGVhblxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCN77yM5rOo5oSPIERyYXdlciDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm5q+P5qyhIHZpc2libGU6IGZhbHNlIOmDvemUgOavgSBkb21cbiAgICovXG4gIGRlc3Ryb3lBZnRlckNsb3NlPzogYm9vbGVhblxuICAvKipcbiAgICog5piv5ZCm5pSv5oyBIEVTQyDlhbPpl61cbiAgICovXG4gIGVzY2FwZUtleUNsb3NhYmxlPzogYm9vbGVhblxuICAvKipcbiAgICogaGVhZGVyIOagh+mimOagj+WGhemDqOeahOWGheWuuVxuICAgKi9cbiAgaGVhZGVyQ29udGVudD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog5a6M5YWo6Ieq5a6a5LmJIGhlYWRlciDnmoTlhoXlrrlcbiAgICovXG4gIGhlYWRlckVsZW1lbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOiuvue9riBoZWFkZXIg5qC35byPXG4gICAqL1xuICBoZWFkZXJTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOeCueWHuyBtYXNrIOaYr+WQpuinpuWPkSBjYW5jZWwg5LqL5Lu2XG4gICAqL1xuICBtYXNrQ2xvc2FibGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLogbWFza1xuICAgKi9cbiAgbWFza1Zpc2libGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlhbPpl63ml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbG9zZT86ICgoKSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOS9jee9rlxuICAgKi9cbiAgcGxhY2VtZW50PzogXCJ0b3BcIiB8IFwicmlnaHRcIiB8IFwiYm90dG9tXCIgfCBcImxlZnRcIlxuICAvKipcbiAgICog5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKbmmL7npLpcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDorr7nva4gei1pbmRleCDlsYLnuqfvvIzpu5jorqTkuLogdmFyKC0tei1pbmRleC1kaWFsb2cpXG4gICAqL1xuICB6SW5kZXg/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuLyoqXG4gKiDml4vovazliqDovb3nlKjkuo7lkYrnn6XnlKjmiLfkv6Hmga/lhoXlrrnnmoTliqDovb3nirbmgIHvvIzpgJrluLjmmK/ljbPml7bjgIHnn63ml7bnmoTjgIJcbiAqL1xuY29uc3QgRHJhd2VyOiBSZWFjdC5GQzxJRHJhd2VyUHJvcHM+ID0gKHtcbiAgYWZ0ZXJDbG9zZSxcbiAgYm9keVNjcm9sbGFibGUsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGRlc3Ryb3lBZnRlckNsb3NlLFxuICBlc2NhcGVLZXlDbG9zYWJsZSxcbiAgaGVhZGVyQ29udGVudCxcbiAgaGVhZGVyRWxlbWVudCxcbiAgaGVhZGVyU3R5bGUsXG4gIG1hc2tDbG9zYWJsZSxcbiAgbWFza1Zpc2libGUsXG4gIG9uQ2xvc2UsXG4gIHBsYWNlbWVudCxcbiAgc2l6ZSxcbiAgdmlzaWJsZSxcbiAgekluZGV4OiB6SW5kZXhQcm9wLFxuICAuLi5vdGhlclByb3BzXG59OiBJRHJhd2VyUHJvcHMpID0+IHtcbiAgY29uc3QgekluZGV4ID0gekluZGV4UHJvcCBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzW1wiekluZGV4XCJdXG4gIGNvbnN0IFtoYXNFdmVyT3BlbmVkLCBzZXRIYXNFdmVyT3BlbmVkXSA9IHVzZVN0YXRlKHZpc2libGUpXG4gIGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmlzaWJsZSAmJiB3cmFwcGVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIHNldFNjcm9sbGJhclBhZGRpbmcoeyBib2R5U2Nyb2xsYWJsZSB9KVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiByZXNldFNjcm9sbGJhclBhZGRpbmcsIFtdKVxuXG4gIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgaWYgKHZpc2libGUgJiYgIWhhc0V2ZXJPcGVuZWQpIHtcbiAgICBzZXRIYXNFdmVyT3BlbmVkKHRydWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGlsZHJlbk1vdW50ID0gKCkgPT4ge1xuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICBzZXRTY3JvbGxiYXJQYWRkaW5nKHsgYm9keVNjcm9sbGFibGUgfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBpZiAob25DbG9zZSkge1xuICAgICAgb25DbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGVzY2FwZUtleUNsb3NhYmxlICYmIGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGhhbmRsZUNsb3NlKClcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVFbnRlciA9ICgpID0+IHtcbiAgICBpZiAoZXNjYXBlS2V5Q2xvc2FibGUgJiYgd3JhcHBlclJlZi5jdXJyZW50KSB7XG4gICAgICB3cmFwcGVyUmVmLmN1cnJlbnQuZm9jdXMoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUxlYXZlID0gKCkgPT4ge1xuICAgIGlmICh3cmFwcGVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIHdyYXBwZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9XG4gICAgcmVzZXRTY3JvbGxiYXJQYWRkaW5nKClcblxuICAgIGlmIChhZnRlckNsb3NlKSB7XG4gICAgICBhZnRlckNsb3NlKClcbiAgICB9XG5cbiAgICBpZiAoZGVzdHJveUFmdGVyQ2xvc2UpIHtcbiAgICAgIHNldEhhc0V2ZXJPcGVuZWQoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICBgJHtwcmVmaXh9LSR7cGxhY2VtZW50fWAsXG4gICAgYCR7cHJlZml4fS0ke3NpemV9YCxcbiAgICBgJHtwcmVmaXh9LWlubmVyYFxuICApXG5cbiAgY29uc3QgZ2V0Q29tcG9uZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS13cmFwcGVyYH1cbiAgICAgICAgcmVmPXt3cmFwcGVyUmVmfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IHZpc2libGUgPyBcImJsb2NrXCIgOiBcIlwiLFxuICAgICAgICAgIHpJbmRleCxcbiAgICAgICAgfX1cbiAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgPlxuICAgICAgICA8QW5pbWF0ZVxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lPXtgJHtwcmVmaXh9LW1hc2tgfVxuICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgdHJhbnNpdGlvbkFwcGVhclxuICAgICAgICA+XG4gICAgICAgICAge3Zpc2libGUgJiYgbWFza1Zpc2libGUgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbWFza2B9XG4gICAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtYXNrQ2xvc2FibGUpIHtcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQW5pbWF0ZT5cbiAgICAgICAgPEFuaW1hdGVcbiAgICAgICAgICBvbkFwcGVhcj17aGFuZGxlRW50ZXJ9XG4gICAgICAgICAgb25FbnRlcj17aGFuZGxlRW50ZXJ9XG4gICAgICAgICAgb25MZWF2ZT17aGFuZGxlTGVhdmV9XG4gICAgICAgICAgdHJhbnNpdGlvbk5hbWU9e2Ake3ByZWZpeH0tJHtwbGFjZW1lbnR9YH1cbiAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgICAgICAgekluZGV4OiAxLFxuICAgICAgICAgIH19XG4gICAgICAgICAgdHJhbnNpdGlvbkFwcGVhclxuICAgICAgICA+XG4gICAgICAgICAge3Zpc2libGUgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgICAgICAgIHtoZWFkZXJFbGVtZW50ID09PSBudWxsXG4gICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgOiBoZWFkZXJFbGVtZW50IHx8IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taGVhZGVyYH0gc3R5bGU9e2hlYWRlclN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEljb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWhlYWRlci1jbG9zZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbG9zZSgpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWhlYWRlci1kaXZpZGVyYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyQ29udGVudCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1oZWFkZXItY29udGVudGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyQ29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tYm9keWB9PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQW5pbWF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGlmICghaGFzRXZlck9wZW5lZCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gPFBvcnRhbCBvbkNoaWxkcmVuTW91bnQ9e2hhbmRsZUNoaWxkcmVuTW91bnR9PntnZXRDb21wb25lbnQoKX08L1BvcnRhbD5cbn1cblxuRHJhd2VyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOWFs+mXreWQju+8iHRyYW5zaXRpb24g57uT5p2f5ZCO77yJ55qEIGhhbmRsZXJcbiAgICovXG4gIGFmdGVyQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogdmlzaWJsZSDml7bpobXpnaLog73lkKbmu5rliqhcbiAgICovXG4gIGJvZHlTY3JvbGxhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCN77yM5rOo5oSPIERpYWxvZyDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuavj+asoSB2aXNpYmxlOiBmYWxzZSDpg73plIDmr4EgZG9tXG4gICAqL1xuICBkZXN0cm95QWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIEgRVNDIOWFs+mXrVxuICAgKi9cbiAgZXNjYXBlS2V5Q2xvc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogaGVhZGVyIOagh+mimOagj+WGhemDqOeahOWGheWuuVxuICAgKi9cbiAgaGVhZGVyQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDlrozlhajoh6rlrprkuYkgaGVhZGVyIOeahOWGheWuuVxuICAgKi9cbiAgaGVhZGVyRWxlbWVudDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDorr7nva4gaGVhZGVyIOagt+W8j1xuICAgKi9cbiAgaGVhZGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDngrnlh7sgbWFzayDmmK/lkKbop6blj5EgY2FuY2VsIOS6i+S7tlxuICAgKi9cbiAgbWFza0Nsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuiBtYXNrXG4gICAqL1xuICBtYXNrVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlhbPpl63ml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDkvY3nva5cbiAgICovXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiXSksXG4gIC8qKlxuICAgKiDlsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKbmmL7npLpcbiAgICovXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6K6+572uIHotaW5kZXgg5bGC57qn77yM6buY6K6k5Li6IHZhcigtLXotaW5kZXgtZGlhbG9nKVxuICAgKi9cbiAgekluZGV4OiBQcm9wVHlwZXMuYW55LFxufVxuXG5EcmF3ZXIuZGVmYXVsdFByb3BzID0ge1xuICBhZnRlckNsb3NlOiBudWxsLFxuICBib2R5U2Nyb2xsYWJsZTogdHJ1ZSxcbiAgY2hpbGRyZW46IG51bGwsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkZXN0cm95QWZ0ZXJDbG9zZTogZmFsc2UsXG4gIGVzY2FwZUtleUNsb3NhYmxlOiB0cnVlLFxuICBoZWFkZXJDb250ZW50OiBudWxsLFxuICBoZWFkZXJFbGVtZW50OiB1bmRlZmluZWQsXG4gIGhlYWRlclN0eWxlOiB7fSxcbiAgbWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgbWFza1Zpc2libGU6IGZhbHNlLFxuICBvbkNsb3NlOiBudWxsLFxuICBwbGFjZW1lbnQ6IFwicmlnaHRcIixcbiAgc2l6ZTogXCJtZWRpdW1cIixcbiAgdmlzaWJsZTogZmFsc2UsXG4gIHpJbmRleDogXCJ2YXIoLS16LWluZGV4LWRpYWxvZylcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyXG4iXX0=