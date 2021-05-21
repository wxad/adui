function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import * as React from "react";
import PropTypes from "prop-types";
import getScrollBarSize from "rc-util/lib/getScrollBarSize";
import classNames from "classnames";
import Animate from "rc-animate";
import omit from "../_util/omit";
import Portal from "../portal";
import Button from "../button";
import Icon from "../icon";
import "./style";
var prefix = "adui-dialog";

var Dialog = function (_React$Component) {
  _inherits(Dialog, _React$Component);

  var _super = _createSuper(Dialog);

  function Dialog(_props) {
    var _this;

    _classCallCheck(this, Dialog);

    _this = _super.call(this, _props);
    _this.container = void 0;
    _this.bodyIsOverflowing = void 0;
    _this.scrollbarWidth = void 0;
    _this.dialog = void 0;
    _this.wrapper = void 0;

    _this.saveDialog = function (node) {
      _this.dialog = node;
    };

    _this.resetScrollbarPadding = function () {
      var changeBodyStyle = _this.props.changeBodyStyle;

      if (changeBodyStyle) {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
    };

    _this.setScrollbarPadding = function () {
      var changeBodyStyle = _this.props.changeBodyStyle;

      if (changeBodyStyle) {
        var _window = window,
            innerWidth = _window.innerWidth;
        _this.bodyIsOverflowing = document.body.clientWidth < innerWidth;

        if (_this.bodyIsOverflowing && !document.body.style.paddingRight) {
          _this.scrollbarWidth = getScrollBarSize();

          if (_this.scrollbarWidth !== undefined) {
            document.body.style.paddingRight = "".concat(_this.scrollbarWidth, "px");
          }
        }

        document.body.style.overflow = "hidden";
      }
    };

    _this.getCancelButton = function () {
      var _this$props = _this.props,
          cancelProps = _this$props.cancelProps,
          cancelText = _this$props.cancelText,
          steps = _this$props.steps,
          type = _this$props.type;
      var currentStep = _this.state.currentStep;
      var defaultText = currentStep === 0 ? "取消" : "上一步";

      var generateButton = function generateButton(props) {
        var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultText;
        return React.createElement(Button, _extends({
          key: "cancel",
          onClick: _this.handleCancel
        }, props), text);
      };

      if (steps && steps.length) {
        var props = steps[currentStep].cancelProps;
        var text = steps[currentStep].cancelText;
        return generateButton(props, text);
      }

      if (type === "inform") {
        return null;
      }

      return generateButton(cancelProps, cancelText);
    };

    _this.getConfirmButton = function () {
      var _this$props2 = _this.props,
          confirmProps = _this$props2.confirmProps,
          confirmText = _this$props2.confirmText,
          steps = _this$props2.steps;
      var currentStep = _this.state.currentStep;

      var generateButton = function generateButton(props, text) {
        return React.createElement(Button, _extends({
          key: "primary",
          intent: "primary",
          onClick: _this.handleConfirm
        }, props), text);
      };

      if (steps && steps.length) {
        var props = steps[currentStep].confirmProps;
        var text = steps[currentStep].confirmText || (currentStep === steps.length - 1 ? "完成" : "下一步");
        return generateButton(props, text);
      }

      return generateButton(confirmProps, confirmText || "确认");
    };

    _this.handleKeyDown = function (e) {
      var escapeKeyClosable = _this.props.escapeKeyClosable;

      if (escapeKeyClosable && e.keyCode === 27) {
        e.stopPropagation();

        _this.handleCancel();
      }
    };

    _this.handleCancel = function (type) {
      var _this$props3 = _this.props,
          onCancel = _this$props3.onCancel,
          steps = _this$props3.steps,
          visible = _this$props3.visible;
      var currentStep = _this.state.currentStep;

      if (type === "close" || !steps || !steps.length) {
        if (visible === null) {
          _this.setState({
            visible: false
          });
        }

        if (onCancel) {
          onCancel();
        }
      } else {
        var onStepCancel = steps[currentStep].onCancel;

        if (onStepCancel) {
          onStepCancel();
        }

        if (currentStep === 0) {
          if (visible === null) {
            _this.setState({
              visible: false
            });
          }
        } else {
          _this.setState({
            currentStep: currentStep - 1
          });
        }
      }
    };

    _this.handleConfirm = function () {
      var _this$props4 = _this.props,
          onConfirm = _this$props4.onConfirm,
          steps = _this$props4.steps,
          visible = _this$props4.visible;
      var currentStep = _this.state.currentStep;

      if (steps && steps.length) {
        var onStepConfirm = steps[currentStep].onConfirm;

        if (onStepConfirm) {
          onStepConfirm();
        }

        if (currentStep === steps.length - 1) {
          if (visible === null) {
            _this.setState({
              visible: false
            });
          }
        } else {
          _this.setState({
            currentStep: currentStep + 1
          });
        }
      } else {
        if (visible === null) {
          _this.setState({
            visible: false
          });
        }

        if (onConfirm) {
          onConfirm();
        }
      }
    };

    _this.onLeave = function () {
      var _this$props5 = _this.props,
          afterClose = _this$props5.afterClose,
          destroyAfterClose = _this$props5.destroyAfterClose;

      if (_this.wrapper) {
        _this.wrapper.style.display = "none";
      }

      _this.resetScrollbarPadding();

      if (afterClose) {
        afterClose();
      }

      if (destroyAfterClose) {
        _this.setState({
          hasEverOpened: false
        });
      }
    };

    _this.getContainer = function () {
      var getContainer = _this.props.getContainer;

      if (_this.container) {
        return _this.container;
      }

      var container = document.createElement("div");
      _this.container = container;

      if (getContainer) {
        getContainer().appendChild(container);
      } else {
        document.body.appendChild(container);
      }

      return container;
    };

    _this.handleEnter = function () {
      var escapeKeyClosable = _this.props.escapeKeyClosable;

      if (_this.wrapper) {
        if (escapeKeyClosable) {
          _this.wrapper.focus();
        }
      }
    };

    _this.getComponent = function (options) {
      var _this$props6 = _this.props,
          bodyStyle = _this$props6.bodyStyle,
          children = _this$props6.children,
          className = _this$props6.className,
          footerElement = _this$props6.footerElement,
          footerStyle = _this$props6.footerStyle,
          headerContent = _this$props6.headerContent,
          headerElement = _this$props6.headerElement,
          headerStyle = _this$props6.headerStyle,
          maskClosable = _this$props6.maskClosable,
          steps = _this$props6.steps,
          style = _this$props6.style,
          title = _this$props6.title,
          zIndexProp = _this$props6.zIndex,
          otherProps = _objectWithoutProperties(_this$props6, ["bodyStyle", "children", "className", "footerElement", "footerStyle", "headerContent", "headerElement", "headerStyle", "maskClosable", "steps", "style", "title", "zIndex"]);

      var zIndex = zIndexProp;
      var restProps = omit(otherProps, ["afterClose", "cancelProps", "cancelText", "changeBodyStyle", "confirmProps", "confirmText", "currentStep", "defaultCurrentStep", "defaultVisible", "destroyAfterClose", "escapeKeyClosable", "getContainer", "onCancel", "onConfirm", "type", "visible"]);
      var classSet = classNames(className, "".concat(prefix, "-inner"));
      var currentStep = _this.state.currentStep;
      var visible = _this.state.visible;

      if (options && Object.keys(options).includes("visible")) {
        ;
        visible = options.visible;
      }

      return React.createElement("div", {
        ref: _this.saveDialog
      }, React.createElement("div", {
        className: "".concat(prefix, "-wrapper"),
        ref: function ref(wrapper) {
          if (wrapper) {
            _this.wrapper = wrapper;
          }
        },
        style: {
          display: visible ? "flex" : "",
          zIndex: zIndex
        },
        tabIndex: 0,
        role: "none",
        onKeyDown: _this.handleKeyDown
      }, React.createElement(Animate, {
        transitionName: "".concat(prefix, "-mask"),
        component: "div",
        transitionAppear: true
      }, visible && React.createElement("div", {
        className: "".concat(prefix, "-mask"),
        role: "none",
        onClick: function onClick() {
          if (maskClosable) {
            _this.handleCancel("close");
          }
        }
      })), React.createElement(Animate, {
        onAppear: _this.handleEnter,
        onEnter: _this.handleEnter,
        onLeave: _this.onLeave,
        transitionName: prefix,
        component: "div",
        style: {
          margin: "auto",
          zIndex: 1
        },
        transitionAppear: true
      }, visible && React.createElement("div", _extends({
        className: classSet,
        style: style
      }, restProps), headerElement === null ? null : headerElement || React.createElement("div", {
        className: "".concat(prefix, "-header"),
        style: headerStyle
      }, [React.createElement("div", {
        key: 0,
        className: "".concat(prefix, "-title")
      }, title), React.createElement("div", {
        key: 1
      }, headerContent && React.createElement("div", {
        className: "".concat(prefix, "-headerContent")
      }, headerContent)), React.createElement(Icon, {
        key: 2,
        className: "".concat(prefix, "-close"),
        size: 24,
        icon: "cancel",
        onClick: function onClick() {
          return _this.handleCancel("close");
        }
      })]), React.createElement("div", {
        className: "".concat(prefix, "-body"),
        style: bodyStyle
      }, steps && steps.length ? steps[currentStep].children : children), footerElement === null ? null : React.createElement("div", {
        className: "".concat(prefix, "-footer"),
        style: footerStyle
      }, footerElement || [_this.getCancelButton(), _this.getConfirmButton()])))));
    };

    _this.handleChildrenMount = function () {
      var visible = _this.state.visible;

      if (visible && _this.wrapper) {
        _this.setScrollbarPadding();
      }
    };

    _this.componentDidUpdate = function (_, _ref) {
      var visiblePrev = _ref.visible;
      var visible = _this.state.visible;

      if (visible !== visiblePrev && visible && _this.wrapper) {
        _this.setScrollbarPadding();
      }
    };

    _this.componentWillUnmount = function () {
      var visible = _this.state.visible;

      if (visible) {
        _this.resetScrollbarPadding();
      }
    };

    var _currentStep = _props.currentStep,
        defaultCurrentStep = _props.defaultCurrentStep,
        _visible = _props.visible,
        defaultVisible = _props.defaultVisible;
    var visibleState = _visible !== null ? !!_visible : !!defaultVisible;
    var currentStepState = _currentStep !== null ? _currentStep : defaultCurrentStep;
    _this.state = {
      visible: visibleState,
      currentStep: currentStepState || 0,
      hasEverOpened: visibleState
    };
    return _this;
  }

  _createClass(Dialog, [{
    key: "render",
    value: function render() {
      var hasEverOpened = this.state.hasEverOpened;

      if (!hasEverOpened) {
        return null;
      }

      return React.createElement(Portal, {
        onChildrenMount: this.handleChildrenMount
      }, this.getComponent());
    }
  }]);

  return Dialog;
}(React.Component);

Dialog.propTypes = {
  afterClose: PropTypes.func,
  bodyStyle: PropTypes.object,
  cancelProps: PropTypes.object,
  cancelText: PropTypes.node,
  changeBodyStyle: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  confirmProps: PropTypes.object,
  confirmText: PropTypes.node,
  currentStep: PropTypes.number,
  defaultCurrentStep: PropTypes.number,
  defaultVisible: PropTypes.bool,
  destroyAfterClose: PropTypes.bool,
  escapeKeyClosable: PropTypes.bool,
  footerElement: PropTypes.node,
  footerStyle: PropTypes.object,
  getContainer: PropTypes.func,
  headerContent: PropTypes.node,
  headerElement: PropTypes.node,
  headerStyle: PropTypes.object,
  maskClosable: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  style: PropTypes.object,
  title: PropTypes.node,
  type: PropTypes.oneOf(["confirm", "inform"]),
  visible: PropTypes.bool,
  zIndex: PropTypes.any
};
Dialog.defaultProps = {
  afterClose: null,
  bodyStyle: {},
  cancelProps: {},
  cancelText: "取消",
  changeBodyStyle: true,
  children: null,
  className: undefined,
  confirmProps: {},
  confirmText: "确认",
  currentStep: null,
  defaultCurrentStep: null,
  defaultVisible: null,
  destroyAfterClose: false,
  escapeKeyClosable: true,
  footerElement: undefined,
  footerStyle: {},
  getContainer: null,
  headerContent: null,
  headerElement: undefined,
  headerStyle: {},
  maskClosable: false,
  onCancel: null,
  onConfirm: null,
  style: {},
  title: null,
  type: "confirm",
  visible: null,
  zIndex: "var(--z-index-dialog)"
};
Dialog.info = void 0;
Dialog.success = void 0;
Dialog.warning = void 0;
Dialog.danger = void 0;
Dialog.confirm = void 0;
Dialog.inform = void 0;

Dialog.getDerivedStateFromProps = function (_ref2, _ref3) {
  var currentStep = _ref2.currentStep,
      visible = _ref2.visible;
  var hasEverOpened = _ref3.hasEverOpened;
  var newState = {};

  if (currentStep !== null) {
    newState.currentStep = currentStep;
  }

  if (visible !== null) {
    newState.visible = visible;

    if (!hasEverOpened && visible) {
      newState.hasEverOpened = true;
    }
  }

  return Object.keys(newState).length > 0 ? newState : null;
};

export default Dialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL0RpYWxvZy50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJnZXRTY3JvbGxCYXJTaXplIiwiY2xhc3NOYW1lcyIsIkFuaW1hdGUiLCJvbWl0IiwiUG9ydGFsIiwiQnV0dG9uIiwiSWNvbiIsInByZWZpeCIsIkRpYWxvZyIsInByb3BzIiwiY29udGFpbmVyIiwiYm9keUlzT3ZlcmZsb3dpbmciLCJzY3JvbGxiYXJXaWR0aCIsImRpYWxvZyIsIndyYXBwZXIiLCJzYXZlRGlhbG9nIiwibm9kZSIsInJlc2V0U2Nyb2xsYmFyUGFkZGluZyIsImNoYW5nZUJvZHlTdHlsZSIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJwYWRkaW5nUmlnaHQiLCJzZXRTY3JvbGxiYXJQYWRkaW5nIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwidW5kZWZpbmVkIiwiZ2V0Q2FuY2VsQnV0dG9uIiwiY2FuY2VsUHJvcHMiLCJjYW5jZWxUZXh0Iiwic3RlcHMiLCJ0eXBlIiwiY3VycmVudFN0ZXAiLCJzdGF0ZSIsImRlZmF1bHRUZXh0IiwiZ2VuZXJhdGVCdXR0b24iLCJ0ZXh0IiwiaGFuZGxlQ2FuY2VsIiwibGVuZ3RoIiwiZ2V0Q29uZmlybUJ1dHRvbiIsImNvbmZpcm1Qcm9wcyIsImNvbmZpcm1UZXh0IiwiaGFuZGxlQ29uZmlybSIsImhhbmRsZUtleURvd24iLCJlIiwiZXNjYXBlS2V5Q2xvc2FibGUiLCJrZXlDb2RlIiwic3RvcFByb3BhZ2F0aW9uIiwib25DYW5jZWwiLCJ2aXNpYmxlIiwic2V0U3RhdGUiLCJvblN0ZXBDYW5jZWwiLCJvbkNvbmZpcm0iLCJvblN0ZXBDb25maXJtIiwib25MZWF2ZSIsImFmdGVyQ2xvc2UiLCJkZXN0cm95QWZ0ZXJDbG9zZSIsImRpc3BsYXkiLCJoYXNFdmVyT3BlbmVkIiwiZ2V0Q29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiaGFuZGxlRW50ZXIiLCJmb2N1cyIsImdldENvbXBvbmVudCIsIm9wdGlvbnMiLCJib2R5U3R5bGUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImZvb3RlckVsZW1lbnQiLCJmb290ZXJTdHlsZSIsImhlYWRlckNvbnRlbnQiLCJoZWFkZXJFbGVtZW50IiwiaGVhZGVyU3R5bGUiLCJtYXNrQ2xvc2FibGUiLCJ0aXRsZSIsInpJbmRleFByb3AiLCJ6SW5kZXgiLCJvdGhlclByb3BzIiwicmVzdFByb3BzIiwiY2xhc3NTZXQiLCJPYmplY3QiLCJrZXlzIiwiaW5jbHVkZXMiLCJtYXJnaW4iLCJoYW5kbGVDaGlsZHJlbk1vdW50IiwiY29tcG9uZW50RGlkVXBkYXRlIiwiXyIsInZpc2libGVQcmV2IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkZWZhdWx0Q3VycmVudFN0ZXAiLCJkZWZhdWx0VmlzaWJsZSIsInZpc2libGVTdGF0ZSIsImN1cnJlbnRTdGVwU3RhdGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJmdW5jIiwib2JqZWN0IiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsIm9uZU9mIiwiYW55IiwiZGVmYXVsdFByb3BzIiwiaW5mbyIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwiZGFuZ2VyIiwiY29uZmlybSIsImluZm9ybSIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm5ld1N0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLQSxLQUFaLE1BQXVCLE9BQXZCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLDhCQUE3QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLFlBQXBCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixlQUFqQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7QUFDQSxPQUFPQyxNQUFQLE1BQXFDLFdBQXJDO0FB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QXpCa0M7QUEwQnpDNUMsRUFBQUEsSUFBSSxFQUFFLFNBMUJtQztBQTJCekNrQixFQUFBQSxPQUFPLEVBQUUsSUEzQmdDO0FBNEJ6QzRCLEVBQUFBLE1BQU0sRUFBRTtBQTVCaUMsQztBQXBIdkN2RSxNLENBbUpVa0csSTtBQW5KVmxHLE0sQ0FxSlVtRyxPO0FBckpWbkcsTSxDQXVKVW9HLE87QUF2SlZwRyxNLENBeUpVcUcsTTtBQXpKVnJHLE0sQ0EySlVzRyxPO0FBM0pWdEcsTSxDQTZKVXVHLE07O0FBN0pWdkcsTSxDQStKVXdHLHdCLEdBQTJCLHdCQUdwQztBQUFBLE1BRkQ5RSxXQUVDLFNBRkRBLFdBRUM7QUFBQSxNQUZZaUIsT0FFWixTQUZZQSxPQUVaO0FBQUEsTUFERFMsYUFDQyxTQUREQSxhQUNDO0FBQ0gsTUFBTXFELFFBQStCLEdBQUcsRUFBeEM7O0FBQ0EsTUFBSS9FLFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN4QitFLElBQUFBLFFBQVEsQ0FBQy9FLFdBQVQsR0FBdUJBLFdBQXZCO0FBQ0Q7O0FBQ0QsTUFBSWlCLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQjhELElBQUFBLFFBQVEsQ0FBQzlELE9BQVQsR0FBbUJBLE9BQW5COztBQUNBLFFBQUksQ0FBQ1MsYUFBRCxJQUFrQlQsT0FBdEIsRUFBK0I7QUFDN0I4RCxNQUFBQSxRQUFRLENBQUNyRCxhQUFULEdBQXlCLElBQXpCO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPdUIsTUFBTSxDQUFDQyxJQUFQLENBQVk2QixRQUFaLEVBQXNCekUsTUFBdEIsR0FBK0IsQ0FBL0IsR0FBbUN5RSxRQUFuQyxHQUE4QyxJQUFyRDtBQUNELEM7O0FBeVlILGVBQWV6RyxNQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGdldFNjcm9sbEJhclNpemUgZnJvbSBcInJjLXV0aWwvbGliL2dldFNjcm9sbEJhclNpemVcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEFuaW1hdGUgZnJvbSBcInJjLWFuaW1hdGVcIlxuaW1wb3J0IG9taXQgZnJvbSBcIi4uL191dGlsL29taXRcIlxuaW1wb3J0IFBvcnRhbCBmcm9tIFwiLi4vcG9ydGFsXCJcbmltcG9ydCBCdXR0b24sIHsgSUJ1dHRvblByb3BzIH0gZnJvbSBcIi4uL2J1dHRvblwiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWRpYWxvZ1wiXG5cbmludGVyZmFjZSBJU3RlcFByb3BzIHtcbiAgLyoqXG4gICAqIOWPlua2iOaMiemSrueahCBwcm9wc++8jOWPguiAgyBCdXR0b24gUHJvcHNcbiAgICovXG4gIGNhbmNlbFByb3BzPzogUGFydGlhbDxJQnV0dG9uUHJvcHM+XG4gIC8qKlxuICAgKiDlj5bmtojmjInpkq7nmoQg5paH5a2XXG4gICAqL1xuICBjYW5jZWxUZXh0Pzogc3RyaW5nXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDnoa7orqTmjInpkq7nmoQgcHJvcHPvvIzlj4LogIMgQnV0dG9uIFByb3BzXG4gICAqL1xuICBjb25maXJtUHJvcHM/OiBQYXJ0aWFsPElCdXR0b25Qcm9wcz5cbiAgLyoqXG4gICAqIOehruiupOaMiemSrueahCDmloflrZdcbiAgICovXG4gIGNvbmZpcm1UZXh0Pzogc3RyaW5nXG4gIC8qKlxuICAgKiDngrnlh7vlj5bmtojmjInpkq7jgIHlj7PkuIrop5LlhbPpl63ml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DYW5jZWw/OiAoKCkgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiDngrnlh7vnoa7orqTmjInpkq7ml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25Db25maXJtPzogKCgpID0+IHZvaWQpIHwgbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEaWFsb2dQcm9wcyBleHRlbmRzIElTdGVwUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWFs+mXreWQju+8iHRyYW5zaXRpb24g57uT5p2f5ZCO77yJ55qEIGhhbmRsZXJcbiAgICovXG4gIGFmdGVyQ2xvc2U/OiAoKCkgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiDorr7nva4gYm9keSDmoLflvI9cbiAgICovXG4gIGJvZHlTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIGRpYWxvZyDmiZPlvIDlkozlhbPpl63ml7bpg73kvJrmm7TmlLkgZG9jdW1lbnQuYm9keS5zdHlsZeOAguWPr+S7peS7peatpCBwcm9wIOaOp+WItuaYr+WQpuS/ruaUueOAguS9v+eUqOWcuuaZr+Wmgu+8mua1ruWxguWGheW8ueWHuiBkaWFsb2dcbiAgICovXG4gIGNoYW5nZUJvZHlTdHlsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQje+8jOazqOaEjyBEaWFsb2cg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaMh+WumuW9k+WJjeeahCBzdGVw77yM5LuF5Zyo5L2/55SoIHN0ZXBzIHByb3Ag5pe25pyJ5L2c55SoXG4gICAqL1xuICBjdXJyZW50U3RlcD86IG51bGwgfCBudW1iZXJcbiAgLyoqXG4gICAqIOaMh+Wumum7mOiupOeahOi1t+WniyBzdGVw77yM5LuF5Zyo5L2/55SoIHN0ZXBzIHByb3Ag5pe25pyJ5L2c55SoXG4gICAqL1xuICBkZWZhdWx0Q3VycmVudFN0ZXA/OiBudWxsIHwgbnVtYmVyXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrmmK/lkKbpu5jorqTmmL7npLpcbiAgICovXG4gIGRlZmF1bHRWaXNpYmxlPzogbnVsbCB8IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpuavj+asoSB2aXNpYmxlOiBmYWxzZSDpg73plIDmr4EgZG9tXG4gICAqL1xuICBkZXN0cm95QWZ0ZXJDbG9zZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpuaUr+aMgSBFU0Mg5YWz6ZetXG4gICAqL1xuICBlc2NhcGVLZXlDbG9zYWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWujOWFqOiHquWumuS5iSBmb290ZXIg55qE5YaF5a6577yM5aaC5p6c5oOz6KaB5pS55Y+YIGZvb3RlciDniLbnuqfnmoTmoLflvI/vvIzkvb/nlKggZm9vdGVyU3R5bGUgUHJvcFxuICAgKi9cbiAgZm9vdGVyRWxlbWVudD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6K6+572uIGZvb3RlciDmoLflvI9cbiAgICovXG4gIGZvb3RlclN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog5oyH5a6a5by55Ye65bGC55qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50LmJvZHnvvIznsbvkvLzkuo4gVG9vbHRpcCDnmoQgZ2V0UG9wdXBDb250YWluZXJcbiAgICovXG4gIGdldENvbnRhaW5lcj86ICgoKSA9PiBIVE1MRWxlbWVudCkgfCBudWxsXG4gIC8qKlxuICAgKiBoZWFkZXIg5qCH6aKY5LiL55qE5YaF5a65XG4gICAqL1xuICBoZWFkZXJDb250ZW50PzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDlrozlhajoh6rlrprkuYkgaGVhZGVyIOeahOWGheWuuVxuICAgKi9cbiAgaGVhZGVyRWxlbWVudD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6K6+572uIGhlYWRlciDmoLflvI9cbiAgICovXG4gIGhlYWRlclN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog54K55Ye7IG1hc2sg5piv5ZCm6Kem5Y+RIGNhbmNlbCDkuovku7ZcbiAgICovXG4gIG1hc2tDbG9zYWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaMh+WumuatpemqpO+8jOeUqOS7peW/q+aNt+S4iuS4gOatpeOAgeS4i+S4gOatpeeahOmcgOaxguOAglxuICAgKi9cbiAgc3RlcHM/OiBBcnJheTxJU3RlcFByb3BzPlxuICAvKipcbiAgICog6ZmE5Yqg5qC35byP77yM5rOo5oSPIERpYWxvZyDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICovXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog5a+56K+d5qGG5qCH6aKYXG4gICAqL1xuICB0aXRsZT86IG51bGwgfCBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIGNvbmZpcm0g5Li65Y+W5raI44CB56Gu6K6k5oyJ6ZKu77ybaW5mb3JtIOS4uuWPquacieehruiupOaMiemSrlxuICAgKi9cbiAgdHlwZT86IFwiY29uZmlybVwiIHwgXCJpbmZvcm1cIlxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5piv5ZCm5pi+56S6XG4gICAqL1xuICB2aXNpYmxlPzogbnVsbCB8IGJvb2xlYW5cbiAgLyoqXG4gICAqIOiuvue9riB6LWluZGV4IOWxgue6p++8jOm7mOiupOS4uiB2YXIoLS16LWluZGV4LWRpYWxvZylcbiAgICovXG4gIHpJbmRleD86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEaWFsb2dTdGF0ZSB7XG4gIHZpc2libGU/OiBib29sZWFuXG4gIGN1cnJlbnRTdGVwOiBudW1iZXJcbiAgaGFzRXZlck9wZW5lZD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiDlr7nor53moYbnlKjkuo7lhajlsYDmgKfnmoTlj43ppojvvIzpgJrluLjliIbkuLrigJznoa7orqTmk43kvZzigJ3kuI7igJzlkYrnn6Xkv6Hmga/igJ3jgIJcbiAqIOehruiupOaTjeS9nOeUqOS6juivoumXrueUqOaIt+KAnOaTjeS9nOaYr+WQpue7p+e7rei/m+ihjO+8n+KAne+8jOWmguWkp+mDqOWIhueahOS6jOasoeehruiupOWPjemmiOOAguWRiuefpeS/oeaBr+WImeeUqOS6juefpeS8mueUqOaIt+afkOS4quWPiuaXtuWPjemmiO+8jOWmguS/oeaBr+aPkOS6pOaIkOWKn+OAgeWksei0peetieOAglxuICovXG5jbGFzcyBEaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SURpYWxvZ1Byb3BzLCBJRGlhbG9nU3RhdGU+IHtcbiAgcHVibGljIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICog5YWz6Zet5ZCO77yIdHJhbnNpdGlvbiDnu5PmnZ/lkI7vvInnmoQgaGFuZGxlclxuICAgICAqL1xuICAgIGFmdGVyQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9riBib2R5IOagt+W8j1xuICAgICAqL1xuICAgIGJvZHlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDlj5bmtojmjInpkq7nmoQgcHJvcHPvvIzlj4LogIMgQnV0dG9uIFByb3BzXG4gICAgICovXG4gICAgY2FuY2VsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog5Y+W5raI5oyJ6ZKu55qEIOaWh+Wtl1xuICAgICAqL1xuICAgIGNhbmNlbFRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIGRpYWxvZyDmiZPlvIDlkozlhbPpl63ml7bpg73kvJrmm7TmlLkgZG9jdW1lbnQuYm9keS5zdHlsZeOAguWPr+S7peS7peatpCBwcm9wIOaOp+WItuaYr+WQpuS/ruaUueOAguS9v+eUqOWcuuaZr+Wmgu+8mua1ruWxguWGheW8ueWHuiBkaWFsb2dcbiAgICAgKi9cbiAgICBjaGFuZ2VCb2R5U3R5bGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWtkOiKgueCuVxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDpmYTliqDnsbvlkI3vvIzms6jmhI8gRGlhbG9nIOaJgOacieeahOWxnuaAp+S8mumZhOWKoOWIsOWGhemDqOeahOWGheWuueWFg+e0oOS4iu+8jOiAjOS4jeaYr+WMheWQqyBtYXNrIOeahOacgOWkluWxguWFg+e0oFxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDnoa7orqTmjInpkq7nmoQgcHJvcHPvvIzlj4LogIMgQnV0dG9uIFByb3BzXG4gICAgICovXG4gICAgY29uZmlybVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOehruiupOaMiemSrueahCDmloflrZdcbiAgICAgKi9cbiAgICBjb25maXJtVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog5oyH5a6a5b2T5YmN55qEIHN0ZXDvvIzku4XlnKjkvb/nlKggc3RlcHMgcHJvcCDml7bmnInkvZznlKhcbiAgICAgKi9cbiAgICBjdXJyZW50U3RlcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiDmjIflrprpu5jorqTnmoTotbflp4sgc3RlcO+8jOS7heWcqOS9v+eUqCBzdGVwcyBwcm9wIOaXtuacieS9nOeUqFxuICAgICAqL1xuICAgIGRlZmF1bHRDdXJyZW50U3RlcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiDlhoXpg6jpqbHliqjvvJrmmK/lkKbpu5jorqTmmL7npLpcbiAgICAgKi9cbiAgICBkZWZhdWx0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5piv5ZCm5q+P5qyhIHZpc2libGU6IGZhbHNlIOmDvemUgOavgSBkb21cbiAgICAgKi9cbiAgICBkZXN0cm95QWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5piv5ZCm5pSv5oyBIEVTQyDlhbPpl61cbiAgICAgKi9cbiAgICBlc2NhcGVLZXlDbG9zYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5a6M5YWo6Ieq5a6a5LmJIGZvb3RlciDnmoTlhoXlrrnvvIzlpoLmnpzmg7PopoHmlLnlj5ggZm9vdGVyIOeItue6p+eahOagt+W8j++8jOS9v+eUqCBmb290ZXJTdHlsZSBQcm9wXG4gICAgICovXG4gICAgZm9vdGVyRWxlbWVudDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog6K6+572uIGZvb3RlciDmoLflvI9cbiAgICAgKi9cbiAgICBmb290ZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDmjIflrprlvLnlh7rlsYLnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9kee+8jOexu+S8vOS6jiBUb29sdGlwIOeahCBnZXRQb3B1cENvbnRhaW5lclxuICAgICAqL1xuICAgIGdldENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogaGVhZGVyIOagh+mimOS4i+eahOWGheWuuVxuICAgICAqL1xuICAgIGhlYWRlckNvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOWujOWFqOiHquWumuS5iSBoZWFkZXIg55qE5YaF5a65XG4gICAgICovXG4gICAgaGVhZGVyRWxlbWVudDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog6K6+572uIGhlYWRlciDmoLflvI9cbiAgICAgKi9cbiAgICBoZWFkZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDngrnlh7sgbWFzayDmmK/lkKbop6blj5EgY2FuY2VsIOS6i+S7tlxuICAgICAqL1xuICAgIG1hc2tDbG9zYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog54K55Ye75Y+W5raI5oyJ6ZKu44CB5Y+z5LiK6KeS5YWz6Zet5pe255qEIGhhbmRsZXJcbiAgICAgKi9cbiAgICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog54K55Ye756Gu6K6k5oyJ6ZKu5pe255qEIGhhbmRsZXJcbiAgICAgKi9cbiAgICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOmZhOWKoOagt+W8j++8jOazqOaEjyBEaWFsb2cg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAgICovXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog5a+56K+d5qGG5qCH6aKYXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIGNvbmZpcm0g5Li65Y+W5raI44CB56Gu6K6k5oyJ6ZKu77ybaW5mb3JtIOS4uuWPquacieehruiupOaMiemSrlxuICAgICAqL1xuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJjb25maXJtXCIsIFwiaW5mb3JtXCJdKSxcbiAgICAvKipcbiAgICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKbmmL7npLpcbiAgICAgKi9cbiAgICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDorr7nva4gei1pbmRleCDlsYLnuqfvvIzpu5jorqTkuLogdmFyKC0tei1pbmRleC1kaWFsb2cpXG4gICAgICovXG4gICAgekluZGV4OiBQcm9wVHlwZXMuYW55LFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IElEaWFsb2dQcm9wcyA9IHtcbiAgICBhZnRlckNsb3NlOiBudWxsLFxuICAgIGJvZHlTdHlsZToge30sXG4gICAgY2FuY2VsUHJvcHM6IHt9LFxuICAgIGNhbmNlbFRleHQ6IFwi5Y+W5raIXCIsXG4gICAgY2hhbmdlQm9keVN0eWxlOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAgIGNvbmZpcm1Qcm9wczoge30sXG4gICAgY29uZmlybVRleHQ6IFwi56Gu6K6kXCIsXG4gICAgY3VycmVudFN0ZXA6IG51bGwsXG4gICAgZGVmYXVsdEN1cnJlbnRTdGVwOiBudWxsLFxuICAgIGRlZmF1bHRWaXNpYmxlOiBudWxsLFxuICAgIGRlc3Ryb3lBZnRlckNsb3NlOiBmYWxzZSxcbiAgICBlc2NhcGVLZXlDbG9zYWJsZTogdHJ1ZSxcbiAgICBmb290ZXJFbGVtZW50OiB1bmRlZmluZWQsXG4gICAgZm9vdGVyU3R5bGU6IHt9LFxuICAgIGdldENvbnRhaW5lcjogbnVsbCxcbiAgICBoZWFkZXJDb250ZW50OiBudWxsLFxuICAgIGhlYWRlckVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICBoZWFkZXJTdHlsZToge30sXG4gICAgbWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgICBvbkNhbmNlbDogbnVsbCxcbiAgICBvbkNvbmZpcm06IG51bGwsXG4gICAgc3R5bGU6IHt9LFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHR5cGU6IFwiY29uZmlybVwiLFxuICAgIHZpc2libGU6IG51bGwsXG4gICAgekluZGV4OiBcInZhcigtLXotaW5kZXgtZGlhbG9nKVwiLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbmZvOiBhbnlcblxuICBwdWJsaWMgc3RhdGljIHN1Y2Nlc3M6IGFueVxuXG4gIHB1YmxpYyBzdGF0aWMgd2FybmluZzogYW55XG5cbiAgcHVibGljIHN0YXRpYyBkYW5nZXI6IGFueVxuXG4gIHB1YmxpYyBzdGF0aWMgY29uZmlybTogYW55XG5cbiAgcHVibGljIHN0YXRpYyBpbmZvcm06IGFueVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gKFxuICAgIHsgY3VycmVudFN0ZXAsIHZpc2libGUgfTogSURpYWxvZ1Byb3BzLFxuICAgIHsgaGFzRXZlck9wZW5lZCB9OiBJRGlhbG9nU3RhdGVcbiAgKSA9PiB7XG4gICAgY29uc3QgbmV3U3RhdGU6IFBhcnRpYWw8SURpYWxvZ1N0YXRlPiA9IHt9XG4gICAgaWYgKGN1cnJlbnRTdGVwICE9PSBudWxsKSB7XG4gICAgICBuZXdTdGF0ZS5jdXJyZW50U3RlcCA9IGN1cnJlbnRTdGVwXG4gICAgfVxuICAgIGlmICh2aXNpYmxlICE9PSBudWxsKSB7XG4gICAgICBuZXdTdGF0ZS52aXNpYmxlID0gdmlzaWJsZVxuICAgICAgaWYgKCFoYXNFdmVyT3BlbmVkICYmIHZpc2libGUpIHtcbiAgICAgICAgbmV3U3RhdGUuaGFzRXZlck9wZW5lZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld1N0YXRlKS5sZW5ndGggPiAwID8gbmV3U3RhdGUgOiBudWxsXG4gIH1cblxuICAvKipcbiAgICog5L+d5a2Y6IqC54K55oyC6L2955qE5a+56LGhXG4gICAqL1xuICBwdWJsaWMgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCB8IG51bGxcblxuICAvKipcbiAgICog5L+d5a2Y6aG16Z2i5piv5ZCmIG92ZXJmbG93XG4gICAqL1xuICBwdWJsaWMgYm9keUlzT3ZlcmZsb3dpbmc6IGJvb2xlYW5cblxuICAvKipcbiAgICog5L+d5a2Y5b2T5YmN5rWP6KeI5Zmo55qE5rua5Yqo5p2h5a695bqmXG4gICAqL1xuICBwdWJsaWMgc2Nyb2xsYmFyV2lkdGg6IG51bWJlclxuXG4gIHB1YmxpYyBkaWFsb2c6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIHdyYXBwZXI6IEhUTUxEaXZFbGVtZW50XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElEaWFsb2dQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAsIGRlZmF1bHRDdXJyZW50U3RlcCwgdmlzaWJsZSwgZGVmYXVsdFZpc2libGUgfSA9IHByb3BzXG4gICAgY29uc3QgdmlzaWJsZVN0YXRlID0gdmlzaWJsZSAhPT0gbnVsbCA/ICEhdmlzaWJsZSA6ICEhZGVmYXVsdFZpc2libGVcbiAgICBjb25zdCBjdXJyZW50U3RlcFN0YXRlID1cbiAgICAgIGN1cnJlbnRTdGVwICE9PSBudWxsID8gY3VycmVudFN0ZXAgOiBkZWZhdWx0Q3VycmVudFN0ZXBcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aXNpYmxlOiB2aXNpYmxlU3RhdGUsXG4gICAgICBjdXJyZW50U3RlcDogY3VycmVudFN0ZXBTdGF0ZSB8fCAwLFxuICAgICAgaGFzRXZlck9wZW5lZDogdmlzaWJsZVN0YXRlLFxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzYXZlRGlhbG9nID0gKG5vZGU6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5kaWFsb2cgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgcmVzZXRTY3JvbGxiYXJQYWRkaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2hhbmdlQm9keVN0eWxlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKGNoYW5nZUJvZHlTdHlsZSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIlxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRTY3JvbGxiYXJQYWRkaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2hhbmdlQm9keVN0eWxlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKGNoYW5nZUJvZHlTdHlsZSkge1xuICAgICAgY29uc3QgeyBpbm5lcldpZHRoIH0gPSB3aW5kb3dcbiAgICAgIHRoaXMuYm9keUlzT3ZlcmZsb3dpbmcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgaW5uZXJXaWR0aFxuICAgICAgaWYgKHRoaXMuYm9keUlzT3ZlcmZsb3dpbmcgJiYgIWRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGggPSBnZXRTY3JvbGxCYXJTaXplKClcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYmFyV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5zY3JvbGxiYXJXaWR0aH1weGBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2FuY2VsQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2FuY2VsUHJvcHMsIGNhbmNlbFRleHQsIHN0ZXBzLCB0eXBlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBjdXJyZW50U3RlcCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGRlZmF1bHRUZXh0ID0gY3VycmVudFN0ZXAgPT09IDAgPyBcIuWPlua2iFwiIDogXCLkuIrkuIDmraVcIlxuICAgIGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gKHByb3BzPzogSUJ1dHRvblByb3BzLCB0ZXh0ID0gZGVmYXVsdFRleHQpID0+IChcbiAgICAgIDxCdXR0b24ga2V5PVwiY2FuY2VsXCIgb25DbGljaz17dGhpcy5oYW5kbGVDYW5jZWx9IHsuLi5wcm9wc30+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9CdXR0b24+XG4gICAgKVxuXG4gICAgaWYgKHN0ZXBzICYmIHN0ZXBzLmxlbmd0aCkge1xuICAgICAgY29uc3QgcHJvcHMgPSBzdGVwc1tjdXJyZW50U3RlcF0uY2FuY2VsUHJvcHNcbiAgICAgIGNvbnN0IHRleHQgPSBzdGVwc1tjdXJyZW50U3RlcF0uY2FuY2VsVGV4dFxuICAgICAgcmV0dXJuIGdlbmVyYXRlQnV0dG9uKHByb3BzLCB0ZXh0KVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gXCJpbmZvcm1cIikge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIGdlbmVyYXRlQnV0dG9uKGNhbmNlbFByb3BzLCBjYW5jZWxUZXh0KVxuICB9XG5cbiAgcHVibGljIGdldENvbmZpcm1CdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb25maXJtUHJvcHMsIGNvbmZpcm1UZXh0LCBzdGVwcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IChwcm9wcz86IElCdXR0b25Qcm9wcywgdGV4dD86IHN0cmluZykgPT4gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBrZXk9XCJwcmltYXJ5XCJcbiAgICAgICAgaW50ZW50PVwicHJpbWFyeVwiXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ29uZmlybX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvQnV0dG9uPlxuICAgIClcblxuICAgIGlmIChzdGVwcyAmJiBzdGVwcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gc3RlcHNbY3VycmVudFN0ZXBdLmNvbmZpcm1Qcm9wc1xuICAgICAgY29uc3QgdGV4dCA9XG4gICAgICAgIHN0ZXBzW2N1cnJlbnRTdGVwXS5jb25maXJtVGV4dCB8fFxuICAgICAgICAoY3VycmVudFN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAtIDEgPyBcIuWujOaIkFwiIDogXCLkuIvkuIDmraVcIilcbiAgICAgIHJldHVybiBnZW5lcmF0ZUJ1dHRvbihwcm9wcywgdGV4dClcbiAgICB9XG4gICAgcmV0dXJuIGdlbmVyYXRlQnV0dG9uKGNvbmZpcm1Qcm9wcywgY29uZmlybVRleHQgfHwgXCLnoa7orqRcIilcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGVzY2FwZUtleUNsb3NhYmxlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKGVzY2FwZUtleUNsb3NhYmxlICYmIGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ2FuY2VsID0gKHR5cGU/OiBhbnkpID0+IHtcbiAgICBjb25zdCB7IG9uQ2FuY2VsLCBzdGVwcywgdmlzaWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAodHlwZSA9PT0gXCJjbG9zZVwiIHx8ICFzdGVwcyB8fCAhc3RlcHMubGVuZ3RoKSB7XG4gICAgICBpZiAodmlzaWJsZSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNhbmNlbCkge1xuICAgICAgICBvbkNhbmNlbCgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgb25DYW5jZWw6IG9uU3RlcENhbmNlbCB9ID0gc3RlcHNbY3VycmVudFN0ZXBdXG4gICAgICBpZiAob25TdGVwQ2FuY2VsKSB7XG4gICAgICAgIG9uU3RlcENhbmNlbCgpXG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFN0ZXAgPT09IDApIHtcbiAgICAgICAgaWYgKHZpc2libGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTdGVwOiBjdXJyZW50U3RlcCAtIDEgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ29uZmlybSA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ29uZmlybSwgc3RlcHMsIHZpc2libGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGN1cnJlbnRTdGVwIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHN0ZXBzICYmIHN0ZXBzLmxlbmd0aCkge1xuICAgICAgY29uc3QgeyBvbkNvbmZpcm06IG9uU3RlcENvbmZpcm0gfSA9IHN0ZXBzW2N1cnJlbnRTdGVwXVxuICAgICAgaWYgKG9uU3RlcENvbmZpcm0pIHtcbiAgICAgICAgb25TdGVwQ29uZmlybSgpXG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKHZpc2libGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTdGVwOiBjdXJyZW50U3RlcCArIDEgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZpc2libGUgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IGZhbHNlIH0pXG4gICAgICB9XG4gICAgICBpZiAob25Db25maXJtKSB7XG4gICAgICAgIG9uQ29uZmlybSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uTGVhdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhZnRlckNsb3NlLCBkZXN0cm95QWZ0ZXJDbG9zZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0aGlzLndyYXBwZXIpIHtcbiAgICAgIHRoaXMud3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9XG4gICAgdGhpcy5yZXNldFNjcm9sbGJhclBhZGRpbmcoKVxuXG4gICAgaWYgKGFmdGVyQ2xvc2UpIHtcbiAgICAgIGFmdGVyQ2xvc2UoKVxuICAgIH1cblxuICAgIGlmIChkZXN0cm95QWZ0ZXJDbG9zZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc0V2ZXJPcGVuZWQ6IGZhbHNlIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGdldENvbnRhaW5lciB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyXG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgaWYgKGdldENvbnRhaW5lcikge1xuICAgICAgZ2V0Q29udGFpbmVyKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgcHVibGljIGhhbmRsZUVudGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZXNjYXBlS2V5Q2xvc2FibGUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodGhpcy53cmFwcGVyKSB7XG4gICAgICBpZiAoZXNjYXBlS2V5Q2xvc2FibGUpIHtcbiAgICAgICAgdGhpcy53cmFwcGVyLmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29tcG9uZW50ID0gKG9wdGlvbnM/OiB7IHZpc2libGU6IGJvb2xlYW4gfSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGJvZHlTdHlsZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZm9vdGVyRWxlbWVudCxcbiAgICAgIGZvb3RlclN0eWxlLFxuICAgICAgaGVhZGVyQ29udGVudCxcbiAgICAgIGhlYWRlckVsZW1lbnQsXG4gICAgICBoZWFkZXJTdHlsZSxcbiAgICAgIG1hc2tDbG9zYWJsZSxcbiAgICAgIHN0ZXBzLFxuICAgICAgc3R5bGUsXG4gICAgICB0aXRsZSxcbiAgICAgIHpJbmRleDogekluZGV4UHJvcCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgekluZGV4ID0gekluZGV4UHJvcCBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzW1wiekluZGV4XCJdXG5cbiAgICBjb25zdCByZXN0UHJvcHMgPSBvbWl0KG90aGVyUHJvcHMsIFtcbiAgICAgIFwiYWZ0ZXJDbG9zZVwiLFxuICAgICAgXCJjYW5jZWxQcm9wc1wiLFxuICAgICAgXCJjYW5jZWxUZXh0XCIsXG4gICAgICBcImNoYW5nZUJvZHlTdHlsZVwiLFxuICAgICAgXCJjb25maXJtUHJvcHNcIixcbiAgICAgIFwiY29uZmlybVRleHRcIixcbiAgICAgIFwiY3VycmVudFN0ZXBcIixcbiAgICAgIFwiZGVmYXVsdEN1cnJlbnRTdGVwXCIsXG4gICAgICBcImRlZmF1bHRWaXNpYmxlXCIsXG4gICAgICBcImRlc3Ryb3lBZnRlckNsb3NlXCIsXG4gICAgICBcImVzY2FwZUtleUNsb3NhYmxlXCIsXG4gICAgICBcImdldENvbnRhaW5lclwiLFxuICAgICAgXCJvbkNhbmNlbFwiLFxuICAgICAgXCJvbkNvbmZpcm1cIixcbiAgICAgIFwidHlwZVwiLFxuICAgICAgXCJ2aXNpYmxlXCIsXG4gICAgXSlcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0taW5uZXJgKVxuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKG9wdGlvbnMgJiYgT2JqZWN0LmtleXMob3B0aW9ucykuaW5jbHVkZXMoXCJ2aXNpYmxlXCIpKSB7XG4gICAgICA7KHsgdmlzaWJsZSB9ID0gb3B0aW9ucylcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e3RoaXMuc2F2ZURpYWxvZ30+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0td3JhcHBlcmB9XG4gICAgICAgICAgcmVmPXsod3JhcHBlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHdyYXBwZXIpIHtcbiAgICAgICAgICAgICAgdGhpcy53cmFwcGVyID0gd3JhcHBlclxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IHZpc2libGUgPyBcImZsZXhcIiA6IFwiXCIsXG4gICAgICAgICAgICB6SW5kZXgsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgID5cbiAgICAgICAgICA8QW5pbWF0ZVxuICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9e2Ake3ByZWZpeH0tbWFza2B9XG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgdHJhbnNpdGlvbkFwcGVhclxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2aXNpYmxlICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1tYXNrYH1cbiAgICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKG1hc2tDbG9zYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNhbmNlbChcImNsb3NlXCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9BbmltYXRlPlxuICAgICAgICAgIHsvKipcbiAgICAgICAgICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzM0NTUzNDJcbiAgICAgICAgICAgKiAxLiDmnIDlpJblsYIgbWFyZ2luOiBhdXRvIOmdnuW4uOmHjeimgeOAglxuICAgICAgICAgICAqIERpYWxvZyDnmoTlrr3luqbmmK/oh6rpgILlupTnmoTvvIzlm6DmraTkvb/nlKjkuoYgZGlzcGxheTogZmxleCDlpITnkIblsYXkuK3vvIzov5nkvb/lvpflrZDlhYPntKDlhbfmnInljIXoo7nmgKfvvIzlm6DmraTlrr3luqbmiY3og73nlLHlhoXlrrnmiYDlhrPlrprvvJtcbiAgICAgICAgICAgKiBtYXJnaW46IGF1dG87IOaYr+S4uuS6huWujOWWhCBmbGV4Ym94IG92ZXJmbG93IOeahOagt+W8j+OAglxuICAgICAgICAgICAqIDIuIHpJbmRleDogMSDmmK/kuLrkuobopobnm5blnKggbWFzayDkuIrjgIJcbiAgICAgICAgICAgKi99XG4gICAgICAgICAgPEFuaW1hdGVcbiAgICAgICAgICAgIG9uQXBwZWFyPXt0aGlzLmhhbmRsZUVudGVyfVxuICAgICAgICAgICAgb25FbnRlcj17dGhpcy5oYW5kbGVFbnRlcn1cbiAgICAgICAgICAgIG9uTGVhdmU9e3RoaXMub25MZWF2ZX1cbiAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPXtwcmVmaXh9XG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgekluZGV4OiAxLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dmlzaWJsZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gc3R5bGU9e3N0eWxlfSB7Li4ucmVzdFByb3BzfT5cbiAgICAgICAgICAgICAgICB7aGVhZGVyRWxlbWVudCA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICA6IGhlYWRlckVsZW1lbnQgfHwgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWhlYWRlcmB9IHN0eWxlPXtoZWFkZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17MH0gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRpdGxlYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyQ29udGVudCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1oZWFkZXJDb250ZW50YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJDb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2xvc2VgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezI0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2FuY2VsKFwiY2xvc2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1ib2R5YH0gc3R5bGU9e2JvZHlTdHlsZX0+XG4gICAgICAgICAgICAgICAgICB7c3RlcHMgJiYgc3RlcHMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgID8gc3RlcHNbY3VycmVudFN0ZXBdLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIDogY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2Zvb3RlckVsZW1lbnQgPT09IG51bGwgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tZm9vdGVyYH0gc3R5bGU9e2Zvb3RlclN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAge2Zvb3RlckVsZW1lbnQgfHwgW1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2FuY2VsQnV0dG9uKCksXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb25maXJtQnV0dG9uKCksXG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9BbmltYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBkaWRtb3VudCDnlLEgcG9ydGFsIOeahCBvbkNoaWxkcmVuTW91bnTvvIzlm6DkuLogZGlkbW91bnQg5pe2IHdyYXBwZXIg5Y+v6IO95bm25LiN5ZyoIGRvbVxuICAgKi9cbiAgcHVibGljIGhhbmRsZUNoaWxkcmVuTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHZpc2libGUgJiYgdGhpcy53cmFwcGVyKSB7XG4gICAgICB0aGlzLnNldFNjcm9sbGJhclBhZGRpbmcoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUgPSAoXG4gICAgXzogSURpYWxvZ1Byb3BzLFxuICAgIHsgdmlzaWJsZTogdmlzaWJsZVByZXYgfTogSURpYWxvZ1N0YXRlXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICh2aXNpYmxlICE9PSB2aXNpYmxlUHJldiAmJiB2aXNpYmxlICYmIHRoaXMud3JhcHBlcikge1xuICAgICAgdGhpcy5zZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHZpc2libGUpIHtcbiAgICAgIHRoaXMucmVzZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaGFzRXZlck9wZW5lZCB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghaGFzRXZlck9wZW5lZCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgb25DaGlsZHJlbk1vdW50PXt0aGlzLmhhbmRsZUNoaWxkcmVuTW91bnR9PlxuICAgICAgICB7dGhpcy5nZXRDb21wb25lbnQoKX1cbiAgICAgIDwvUG9ydGFsPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2dcbiJdfQ==