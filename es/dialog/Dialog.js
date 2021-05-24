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
          bodyClassName = _this$props6.bodyClassName,
          bodyStyle = _this$props6.bodyStyle,
          children = _this$props6.children,
          className = _this$props6.className,
          footerClassName = _this$props6.footerClassName,
          footerElement = _this$props6.footerElement,
          footerStyle = _this$props6.footerStyle,
          headerClassName = _this$props6.headerClassName,
          headerContent = _this$props6.headerContent,
          headerElement = _this$props6.headerElement,
          headerStyle = _this$props6.headerStyle,
          maskClosable = _this$props6.maskClosable,
          steps = _this$props6.steps,
          style = _this$props6.style,
          title = _this$props6.title,
          zIndexProp = _this$props6.zIndex,
          otherProps = _objectWithoutProperties(_this$props6, ["bodyClassName", "bodyStyle", "children", "className", "footerClassName", "footerElement", "footerStyle", "headerClassName", "headerContent", "headerElement", "headerStyle", "maskClosable", "steps", "style", "title", "zIndex"]);

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
        className: "".concat(prefix, "-header ").concat(headerClassName),
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
        className: "".concat(prefix, "-body ").concat(bodyClassName),
        style: bodyStyle
      }, steps && steps.length ? steps[currentStep].children : children), footerElement === null ? null : React.createElement("div", {
        className: "".concat(prefix, "-footer ").concat(footerClassName),
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
  bodyClassName: PropTypes.string,
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
  footerClassName: PropTypes.string,
  footerStyle: PropTypes.object,
  getContainer: PropTypes.func,
  headerContent: PropTypes.node,
  headerElement: PropTypes.node,
  headerClassName: PropTypes.string,
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
  bodyClassName: "",
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
  footerClassName: "",
  footerStyle: {},
  getContainer: null,
  headerContent: null,
  headerClassName: "",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL0RpYWxvZy50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJnZXRTY3JvbGxCYXJTaXplIiwiY2xhc3NOYW1lcyIsIkFuaW1hdGUiLCJvbWl0IiwiUG9ydGFsIiwiQnV0dG9uIiwiSWNvbiIsInByZWZpeCIsIkRpYWxvZyIsInByb3BzIiwiY29udGFpbmVyIiwiYm9keUlzT3ZlcmZsb3dpbmciLCJzY3JvbGxiYXJXaWR0aCIsImRpYWxvZyIsIndyYXBwZXIiLCJzYXZlRGlhbG9nIiwibm9kZSIsInJlc2V0U2Nyb2xsYmFyUGFkZGluZyIsImNoYW5nZUJvZHlTdHlsZSIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJwYWRkaW5nUmlnaHQiLCJzZXRTY3JvbGxiYXJQYWRkaW5nIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwidW5kZWZpbmVkIiwiZ2V0Q2FuY2VsQnV0dG9uIiwiY2FuY2VsUHJvcHMiLCJjYW5jZWxUZXh0Iiwic3RlcHMiLCJ0eXBlIiwiY3VycmVudFN0ZXAiLCJzdGF0ZSIsImRlZmF1bHRUZXh0IiwiZ2VuZXJhdGVCdXR0b24iLCJ0ZXh0IiwiaGFuZGxlQ2FuY2VsIiwibGVuZ3RoIiwiZ2V0Q29uZmlybUJ1dHRvbiIsImNvbmZpcm1Qcm9wcyIsImNvbmZpcm1UZXh0IiwiaGFuZGxlQ29uZmlybSIsImhhbmRsZUtleURvd24iLCJlIiwiZXNjYXBlS2V5Q2xvc2FibGUiLCJrZXlDb2RlIiwic3RvcFByb3BhZ2F0aW9uIiwib25DYW5jZWwiLCJ2aXNpYmxlIiwic2V0U3RhdGUiLCJvblN0ZXBDYW5jZWwiLCJvbkNvbmZpcm0iLCJvblN0ZXBDb25maXJtIiwib25MZWF2ZSIsImFmdGVyQ2xvc2UiLCJkZXN0cm95QWZ0ZXJDbG9zZSIsImRpc3BsYXkiLCJoYXNFdmVyT3BlbmVkIiwiZ2V0Q29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiaGFuZGxlRW50ZXIiLCJmb2N1cyIsImdldENvbXBvbmVudCIsIm9wdGlvbnMiLCJib2R5Q2xhc3NOYW1lIiwiYm9keVN0eWxlIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJmb290ZXJDbGFzc05hbWUiLCJmb290ZXJFbGVtZW50IiwiZm9vdGVyU3R5bGUiLCJoZWFkZXJDbGFzc05hbWUiLCJoZWFkZXJDb250ZW50IiwiaGVhZGVyRWxlbWVudCIsImhlYWRlclN0eWxlIiwibWFza0Nsb3NhYmxlIiwidGl0bGUiLCJ6SW5kZXhQcm9wIiwiekluZGV4Iiwib3RoZXJQcm9wcyIsInJlc3RQcm9wcyIsImNsYXNzU2V0IiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwibWFyZ2luIiwiaGFuZGxlQ2hpbGRyZW5Nb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsIl8iLCJ2aXNpYmxlUHJldiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZGVmYXVsdEN1cnJlbnRTdGVwIiwiZGVmYXVsdFZpc2libGUiLCJ2aXNpYmxlU3RhdGUiLCJjdXJyZW50U3RlcFN0YXRlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiZnVuYyIsInN0cmluZyIsIm9iamVjdCIsImJvb2wiLCJudW1iZXIiLCJvbmVPZiIsImFueSIsImRlZmF1bHRQcm9wcyIsImluZm8iLCJzdWNjZXNzIiwid2FybmluZyIsImRhbmdlciIsImNvbmZpcm0iLCJpbmZvcm0iLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXdTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2Qiw4QkFBN0I7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixZQUFwQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsZUFBakI7QUFDQSxP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LElBQWhCLEVBQXNCO0FBQ3BCaUUsSUFBQUEsUUFBUSxDQUFDakUsT0FBVCxHQUFtQkEsT0FBbkI7O0FBQ0EsUUFBSSxDQUFDUyxhQUFELElBQWtCVCxPQUF0QixFQUErQjtBQUM3QmlFLE1BQUFBLFFBQVEsQ0FBQ3hELGFBQVQsR0FBeUIsSUFBekI7QUFDRDtBQUNGOztBQUNELFNBQU8wQixNQUFNLENBQUNDLElBQVAsQ0FBWTZCLFFBQVosRUFBc0I1RSxNQUF0QixHQUErQixDQUEvQixHQUFtQzRFLFFBQW5DLEdBQThDLElBQXJEO0FBQ0QsQzs7QUFxWkgsZUFBZTVHLE1BQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgZ2V0U2Nyb2xsQmFyU2l6ZSBmcm9tIFwicmMtdXRpbC9saWIvZ2V0U2Nyb2xsQmFyU2l6ZVwiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgQW5pbWF0ZSBmcm9tIFwicmMtYW5pbWF0ZVwiXG5pbXBvcnQgb21pdCBmcm9tIFwiLi4vX3V0aWwvb21pdFwiXG5pbXBvcnQgUG9ydGFsIGZyb20gXCIuLi9wb3J0YWxcIlxuaW1wb3J0IEJ1dHRvbiwgeyBJQnV0dG9uUHJvcHMgfSBmcm9tIFwiLi4vYnV0dG9uXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktZGlhbG9nXCJcblxuaW50ZXJmYWNlIElTdGVwUHJvcHMge1xuICAvKipcbiAgICog5Y+W5raI5oyJ6ZKu55qEIHByb3Bz77yM5Y+C6ICDIEJ1dHRvbiBQcm9wc1xuICAgKi9cbiAgY2FuY2VsUHJvcHM/OiBQYXJ0aWFsPElCdXR0b25Qcm9wcz5cbiAgLyoqXG4gICAqIOWPlua2iOaMiemSrueahCDmloflrZdcbiAgICovXG4gIGNhbmNlbFRleHQ/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOehruiupOaMiemSrueahCBwcm9wc++8jOWPguiAgyBCdXR0b24gUHJvcHNcbiAgICovXG4gIGNvbmZpcm1Qcm9wcz86IFBhcnRpYWw8SUJ1dHRvblByb3BzPlxuICAvKipcbiAgICog56Gu6K6k5oyJ6ZKu55qEIOaWh+Wtl1xuICAgKi9cbiAgY29uZmlybVRleHQ/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOeCueWHu+WPlua2iOaMiemSruOAgeWPs+S4iuinkuWFs+mXreaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNhbmNlbD86ICgoKSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOeCueWHu+ehruiupOaMiemSruaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNvbmZpcm0/OiAoKCkgPT4gdm9pZCkgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ1Byb3BzIGV4dGVuZHMgSVN0ZXBQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5YWz6Zet5ZCO77yIdHJhbnNpdGlvbiDnu5PmnZ/lkI7vvInnmoQgaGFuZGxlclxuICAgKi9cbiAgYWZ0ZXJDbG9zZT86ICgoKSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOiuvue9riBib2R5IGNsYXNzTmFtZVxuICAgKi9cbiAgYm9keUNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6K6+572uIGJvZHkgc3R5bGVcbiAgICovXG4gIGJvZHlTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIGRpYWxvZyDmiZPlvIDlkozlhbPpl63ml7bpg73kvJrmm7TmlLkgZG9jdW1lbnQuYm9keS5zdHlsZeOAguWPr+S7peS7peatpCBwcm9wIOaOp+WItuaYr+WQpuS/ruaUueOAguS9v+eUqOWcuuaZr+Wmgu+8mua1ruWxguWGheW8ueWHuiBkaWFsb2dcbiAgICovXG4gIGNoYW5nZUJvZHlTdHlsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQje+8jOazqOaEjyBEaWFsb2cg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaMh+WumuW9k+WJjeeahCBzdGVw77yM5LuF5Zyo5L2/55SoIHN0ZXBzIHByb3Ag5pe25pyJ5L2c55SoXG4gICAqL1xuICBjdXJyZW50U3RlcD86IG51bGwgfCBudW1iZXJcbiAgLyoqXG4gICAqIOaMh+Wumum7mOiupOeahOi1t+WniyBzdGVw77yM5LuF5Zyo5L2/55SoIHN0ZXBzIHByb3Ag5pe25pyJ5L2c55SoXG4gICAqL1xuICBkZWZhdWx0Q3VycmVudFN0ZXA/OiBudWxsIHwgbnVtYmVyXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrmmK/lkKbpu5jorqTmmL7npLpcbiAgICovXG4gIGRlZmF1bHRWaXNpYmxlPzogbnVsbCB8IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpuavj+asoSB2aXNpYmxlOiBmYWxzZSDpg73plIDmr4EgZG9tXG4gICAqL1xuICBkZXN0cm95QWZ0ZXJDbG9zZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpuaUr+aMgSBFU0Mg5YWz6ZetXG4gICAqL1xuICBlc2NhcGVLZXlDbG9zYWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWujOWFqOiHquWumuS5iSBmb290ZXIg55qE5YaF5a6577yM5aaC5p6c5oOz6KaB5pS55Y+YIGZvb3RlciDniLbnuqfnmoTmoLflvI/vvIzkvb/nlKggZm9vdGVyU3R5bGUgUHJvcFxuICAgKi9cbiAgZm9vdGVyRWxlbWVudD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6K6+572uIGZvb3RlciBjbGFzc05hbWVcbiAgICovXG4gIGZvb3RlckNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6K6+572uIGZvb3RlciBzdHlsZVxuICAgKi9cbiAgZm9vdGVyU3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiDmjIflrprlvLnlh7rlsYLnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9kee+8jOexu+S8vOS6jiBUb29sdGlwIOeahCBnZXRQb3B1cENvbnRhaW5lclxuICAgKi9cbiAgZ2V0Q29udGFpbmVyPzogKCgpID0+IEhUTUxFbGVtZW50KSB8IG51bGxcbiAgLyoqXG4gICAqIGhlYWRlciDmoIfpopjkuIvnmoTlhoXlrrlcbiAgICovXG4gIGhlYWRlckNvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOWujOWFqOiHquWumuS5iSBoZWFkZXIg55qE5YaF5a65XG4gICAqL1xuICBoZWFkZXJFbGVtZW50PzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDorr7nva4gaGVhZGVyIGNsYXNzTmFtZVxuICAgKi9cbiAgaGVhZGVyQ2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva4gaGVhZGVyIHN0eWxlXG4gICAqL1xuICBoZWFkZXJTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOeCueWHuyBtYXNrIOaYr+WQpuinpuWPkSBjYW5jZWwg5LqL5Lu2XG4gICAqL1xuICBtYXNrQ2xvc2FibGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmjIflrprmraXpqqTvvIznlKjku6Xlv6vmjbfkuIrkuIDmraXjgIHkuIvkuIDmraXnmoTpnIDmsYLjgIJcbiAgICovXG4gIHN0ZXBzPzogQXJyYXk8SVN0ZXBQcm9wcz5cbiAgLyoqXG4gICAqIOmZhOWKoOagt+W8j++8jOazqOaEjyBEaWFsb2cg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAqL1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOWvueivneahhuagh+mimFxuICAgKi9cbiAgdGl0bGU/OiBudWxsIHwgUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiBjb25maXJtIOS4uuWPlua2iOOAgeehruiupOaMiemSru+8m2luZm9ybSDkuLrlj6rmnInnoa7orqTmjInpkq5cbiAgICovXG4gIHR5cGU/OiBcImNvbmZpcm1cIiB8IFwiaW5mb3JtXCJcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muaYr+WQpuaYvuekulxuICAgKi9cbiAgdmlzaWJsZT86IG51bGwgfCBib29sZWFuXG4gIC8qKlxuICAgKiDorr7nva4gei1pbmRleCDlsYLnuqfvvIzpu5jorqTkuLogdmFyKC0tei1pbmRleC1kaWFsb2cpXG4gICAqL1xuICB6SW5kZXg/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGlhbG9nU3RhdGUge1xuICB2aXNpYmxlPzogYm9vbGVhblxuICBjdXJyZW50U3RlcDogbnVtYmVyXG4gIGhhc0V2ZXJPcGVuZWQ/OiBib29sZWFuXG59XG5cbi8qKlxuICog5a+56K+d5qGG55So5LqO5YWo5bGA5oCn55qE5Y+N6aaI77yM6YCa5bi45YiG5Li64oCc56Gu6K6k5pON5L2c4oCd5LiO4oCc5ZGK55+l5L+h5oGv4oCd44CCXG4gKiDnoa7orqTmk43kvZznlKjkuo7or6Lpl67nlKjmiLfigJzmk43kvZzmmK/lkKbnu6fnu63ov5vooYzvvJ/igJ3vvIzlpoLlpKfpg6jliIbnmoTkuozmrKHnoa7orqTlj43ppojjgILlkYrnn6Xkv6Hmga/liJnnlKjkuo7nn6XkvJrnlKjmiLfmn5DkuKrlj4rml7blj43ppojvvIzlpoLkv6Hmga/mj5DkuqTmiJDlip/jgIHlpLHotKXnrYnjgIJcbiAqL1xuY2xhc3MgRGlhbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElEaWFsb2dQcm9wcywgSURpYWxvZ1N0YXRlPiB7XG4gIHB1YmxpYyBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIOWFs+mXreWQju+8iHRyYW5zaXRpb24g57uT5p2f5ZCO77yJ55qEIGhhbmRsZXJcbiAgICAgKi9cbiAgICBhZnRlckNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva4gYm9keSBjbGFzc05hbWVcbiAgICAgKi9cbiAgICBib2R5Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOiuvue9riBib2R5IHN0eWxlXG4gICAgICovXG4gICAgYm9keVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOWPlua2iOaMiemSrueahCBwcm9wc++8jOWPguiAgyBCdXR0b24gUHJvcHNcbiAgICAgKi9cbiAgICBjYW5jZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDlj5bmtojmjInpkq7nmoQg5paH5a2XXG4gICAgICovXG4gICAgY2FuY2VsVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICogZGlhbG9nIOaJk+W8gOWSjOWFs+mXreaXtumDveS8muabtOaUuSBkb2N1bWVudC5ib2R5LnN0eWxl44CC5Y+v5Lul5Lul5q2kIHByb3Ag5o6n5Yi25piv5ZCm5L+u5pS544CC5L2/55So5Zy65pmv5aaC77ya5rWu5bGC5YaF5by55Ye6IGRpYWxvZ1xuICAgICAqL1xuICAgIGNoYW5nZUJvZHlTdHlsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5a2Q6IqC54K5XG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOmZhOWKoOexu+WQje+8jOazqOaEjyBEaWFsb2cg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOehruiupOaMiemSrueahCBwcm9wc++8jOWPguiAgyBCdXR0b24gUHJvcHNcbiAgICAgKi9cbiAgICBjb25maXJtUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog56Gu6K6k5oyJ6ZKu55qEIOaWh+Wtl1xuICAgICAqL1xuICAgIGNvbmZpcm1UZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDmjIflrprlvZPliY3nmoQgc3RlcO+8jOS7heWcqOS9v+eUqCBzdGVwcyBwcm9wIOaXtuacieS9nOeUqFxuICAgICAqL1xuICAgIGN1cnJlbnRTdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOaMh+Wumum7mOiupOeahOi1t+WniyBzdGVw77yM5LuF5Zyo5L2/55SoIHN0ZXBzIHByb3Ag5pe25pyJ5L2c55SoXG4gICAgICovXG4gICAgZGVmYXVsdEN1cnJlbnRTdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOWGhemDqOmpseWKqO+8muaYr+WQpum7mOiupOaYvuekulxuICAgICAqL1xuICAgIGRlZmF1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmr4/mrKEgdmlzaWJsZTogZmFsc2Ug6YO96ZSA5q+BIGRvbVxuICAgICAqL1xuICAgIGRlc3Ryb3lBZnRlckNsb3NlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmlK/mjIEgRVNDIOWFs+mXrVxuICAgICAqL1xuICAgIGVzY2FwZUtleUNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlrozlhajoh6rlrprkuYkgZm9vdGVyIOeahOWGheWuue+8jOWmguaenOaDs+imgeaUueWPmCBmb290ZXIg54i257qn55qE5qC35byP77yM5L2/55SoIGZvb3RlclN0eWxlIFByb3BcbiAgICAgKi9cbiAgICBmb290ZXJFbGVtZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDorr7nva4gZm9vdGVyIGNsYXNzTmFtZVxuICAgICAqL1xuICAgIGZvb3RlckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDorr7nva4gZm9vdGVyIHN0eWxlXG4gICAgICovXG4gICAgZm9vdGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog5oyH5a6a5by55Ye65bGC55qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50LmJvZHnvvIznsbvkvLzkuo4gVG9vbHRpcCDnmoQgZ2V0UG9wdXBDb250YWluZXJcbiAgICAgKi9cbiAgICBnZXRDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIGhlYWRlciDmoIfpopjkuIvnmoTlhoXlrrlcbiAgICAgKi9cbiAgICBoZWFkZXJDb250ZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDlrozlhajoh6rlrprkuYkgaGVhZGVyIOeahOWGheWuuVxuICAgICAqL1xuICAgIGhlYWRlckVsZW1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOiuvue9riBoZWFkZXIgY2xhc3NOYW1lXG4gICAgICovXG4gICAgaGVhZGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOiuvue9riBoZWFkZXIgc3R5bGVcbiAgICAgKi9cbiAgICBoZWFkZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDngrnlh7sgbWFzayDmmK/lkKbop6blj5EgY2FuY2VsIOS6i+S7tlxuICAgICAqL1xuICAgIG1hc2tDbG9zYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog54K55Ye75Y+W5raI5oyJ6ZKu44CB5Y+z5LiK6KeS5YWz6Zet5pe255qEIGhhbmRsZXJcbiAgICAgKi9cbiAgICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog54K55Ye756Gu6K6k5oyJ6ZKu5pe255qEIGhhbmRsZXJcbiAgICAgKi9cbiAgICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOmZhOWKoOagt+W8j++8jOazqOaEjyBEaWFsb2cg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAgICovXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog5a+56K+d5qGG5qCH6aKYXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIGNvbmZpcm0g5Li65Y+W5raI44CB56Gu6K6k5oyJ6ZKu77ybaW5mb3JtIOS4uuWPquacieehruiupOaMiemSrlxuICAgICAqL1xuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJjb25maXJtXCIsIFwiaW5mb3JtXCJdKSxcbiAgICAvKipcbiAgICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKbmmL7npLpcbiAgICAgKi9cbiAgICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDorr7nva4gei1pbmRleCDlsYLnuqfvvIzpu5jorqTkuLogdmFyKC0tei1pbmRleC1kaWFsb2cpXG4gICAgICovXG4gICAgekluZGV4OiBQcm9wVHlwZXMuYW55LFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IElEaWFsb2dQcm9wcyA9IHtcbiAgICBhZnRlckNsb3NlOiBudWxsLFxuICAgIGJvZHlDbGFzc05hbWU6IFwiXCIsXG4gICAgYm9keVN0eWxlOiB7fSxcbiAgICBjYW5jZWxQcm9wczoge30sXG4gICAgY2FuY2VsVGV4dDogXCLlj5bmtohcIixcbiAgICBjaGFuZ2VCb2R5U3R5bGU6IHRydWUsXG4gICAgY2hpbGRyZW46IG51bGwsXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gICAgY29uZmlybVByb3BzOiB7fSxcbiAgICBjb25maXJtVGV4dDogXCLnoa7orqRcIixcbiAgICBjdXJyZW50U3RlcDogbnVsbCxcbiAgICBkZWZhdWx0Q3VycmVudFN0ZXA6IG51bGwsXG4gICAgZGVmYXVsdFZpc2libGU6IG51bGwsXG4gICAgZGVzdHJveUFmdGVyQ2xvc2U6IGZhbHNlLFxuICAgIGVzY2FwZUtleUNsb3NhYmxlOiB0cnVlLFxuICAgIGZvb3RlckVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICBmb290ZXJDbGFzc05hbWU6IFwiXCIsXG4gICAgZm9vdGVyU3R5bGU6IHt9LFxuICAgIGdldENvbnRhaW5lcjogbnVsbCxcbiAgICBoZWFkZXJDb250ZW50OiBudWxsLFxuICAgIGhlYWRlckNsYXNzTmFtZTogXCJcIixcbiAgICBoZWFkZXJFbGVtZW50OiB1bmRlZmluZWQsXG4gICAgaGVhZGVyU3R5bGU6IHt9LFxuICAgIG1hc2tDbG9zYWJsZTogZmFsc2UsXG4gICAgb25DYW5jZWw6IG51bGwsXG4gICAgb25Db25maXJtOiBudWxsLFxuICAgIHN0eWxlOiB7fSxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB0eXBlOiBcImNvbmZpcm1cIixcbiAgICB2aXNpYmxlOiBudWxsLFxuICAgIHpJbmRleDogXCJ2YXIoLS16LWluZGV4LWRpYWxvZylcIixcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5mbzogYW55XG5cbiAgcHVibGljIHN0YXRpYyBzdWNjZXNzOiBhbnlcblxuICBwdWJsaWMgc3RhdGljIHdhcm5pbmc6IGFueVxuXG4gIHB1YmxpYyBzdGF0aWMgZGFuZ2VyOiBhbnlcblxuICBwdWJsaWMgc3RhdGljIGNvbmZpcm06IGFueVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5mb3JtOiBhbnlcblxuICBwdWJsaWMgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IChcbiAgICB7IGN1cnJlbnRTdGVwLCB2aXNpYmxlIH06IElEaWFsb2dQcm9wcyxcbiAgICB7IGhhc0V2ZXJPcGVuZWQgfTogSURpYWxvZ1N0YXRlXG4gICkgPT4ge1xuICAgIGNvbnN0IG5ld1N0YXRlOiBQYXJ0aWFsPElEaWFsb2dTdGF0ZT4gPSB7fVxuICAgIGlmIChjdXJyZW50U3RlcCAhPT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGUuY3VycmVudFN0ZXAgPSBjdXJyZW50U3RlcFxuICAgIH1cbiAgICBpZiAodmlzaWJsZSAhPT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGUudmlzaWJsZSA9IHZpc2libGVcbiAgICAgIGlmICghaGFzRXZlck9wZW5lZCAmJiB2aXNpYmxlKSB7XG4gICAgICAgIG5ld1N0YXRlLmhhc0V2ZXJPcGVuZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhuZXdTdGF0ZSkubGVuZ3RoID4gMCA/IG5ld1N0YXRlIDogbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIOS/neWtmOiKgueCueaMgui9veeahOWvueixoVxuICAgKi9cbiAgcHVibGljIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgfCBudWxsXG5cbiAgLyoqXG4gICAqIOS/neWtmOmhtemdouaYr+WQpiBvdmVyZmxvd1xuICAgKi9cbiAgcHVibGljIGJvZHlJc092ZXJmbG93aW5nOiBib29sZWFuXG5cbiAgLyoqXG4gICAqIOS/neWtmOW9k+WJjea1j+iniOWZqOeahOa7muWKqOadoeWuveW6plxuICAgKi9cbiAgcHVibGljIHNjcm9sbGJhcldpZHRoOiBudW1iZXJcblxuICBwdWJsaWMgZGlhbG9nOiBIVE1MRGl2RWxlbWVudFxuXG4gIHB1YmxpYyB3cmFwcGVyOiBIVE1MRGl2RWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJRGlhbG9nUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCB7IGN1cnJlbnRTdGVwLCBkZWZhdWx0Q3VycmVudFN0ZXAsIHZpc2libGUsIGRlZmF1bHRWaXNpYmxlIH0gPSBwcm9wc1xuICAgIGNvbnN0IHZpc2libGVTdGF0ZSA9IHZpc2libGUgIT09IG51bGwgPyAhIXZpc2libGUgOiAhIWRlZmF1bHRWaXNpYmxlXG4gICAgY29uc3QgY3VycmVudFN0ZXBTdGF0ZSA9XG4gICAgICBjdXJyZW50U3RlcCAhPT0gbnVsbCA/IGN1cnJlbnRTdGVwIDogZGVmYXVsdEN1cnJlbnRTdGVwXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlzaWJsZTogdmlzaWJsZVN0YXRlLFxuICAgICAgY3VycmVudFN0ZXA6IGN1cnJlbnRTdGVwU3RhdGUgfHwgMCxcbiAgICAgIGhhc0V2ZXJPcGVuZWQ6IHZpc2libGVTdGF0ZSxcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2F2ZURpYWxvZyA9IChub2RlOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIHRoaXMuZGlhbG9nID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHJlc2V0U2Nyb2xsYmFyUGFkZGluZyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNoYW5nZUJvZHlTdHlsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChjaGFuZ2VCb2R5U3R5bGUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCJcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0U2Nyb2xsYmFyUGFkZGluZyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNoYW5nZUJvZHlTdHlsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChjaGFuZ2VCb2R5U3R5bGUpIHtcbiAgICAgIGNvbnN0IHsgaW5uZXJXaWR0aCB9ID0gd2luZG93XG4gICAgICB0aGlzLmJvZHlJc092ZXJmbG93aW5nID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IGlubmVyV2lkdGhcbiAgICAgIGlmICh0aGlzLmJvZHlJc092ZXJmbG93aW5nICYmICFkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCkge1xuICAgICAgICB0aGlzLnNjcm9sbGJhcldpZHRoID0gZ2V0U2Nyb2xsQmFyU2l6ZSgpXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbGJhcldpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMuc2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldENhbmNlbEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNhbmNlbFByb3BzLCBjYW5jZWxUZXh0LCBzdGVwcywgdHlwZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBkZWZhdWx0VGV4dCA9IGN1cnJlbnRTdGVwID09PSAwID8gXCLlj5bmtohcIiA6IFwi5LiK5LiA5q2lXCJcbiAgICBjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IChwcm9wcz86IElCdXR0b25Qcm9wcywgdGV4dCA9IGRlZmF1bHRUZXh0KSA9PiAoXG4gICAgICA8QnV0dG9uIGtleT1cImNhbmNlbFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2FuY2VsfSB7Li4ucHJvcHN9PlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvQnV0dG9uPlxuICAgIClcblxuICAgIGlmIChzdGVwcyAmJiBzdGVwcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gc3RlcHNbY3VycmVudFN0ZXBdLmNhbmNlbFByb3BzXG4gICAgICBjb25zdCB0ZXh0ID0gc3RlcHNbY3VycmVudFN0ZXBdLmNhbmNlbFRleHRcbiAgICAgIHJldHVybiBnZW5lcmF0ZUJ1dHRvbihwcm9wcywgdGV4dClcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IFwiaW5mb3JtXCIpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBnZW5lcmF0ZUJ1dHRvbihjYW5jZWxQcm9wcywgY2FuY2VsVGV4dClcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25maXJtQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY29uZmlybVByb3BzLCBjb25maXJtVGV4dCwgc3RlcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGN1cnJlbnRTdGVwIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgZ2VuZXJhdGVCdXR0b24gPSAocHJvcHM/OiBJQnV0dG9uUHJvcHMsIHRleHQ/OiBzdHJpbmcpID0+IChcbiAgICAgIDxCdXR0b25cbiAgICAgICAga2V5PVwicHJpbWFyeVwiXG4gICAgICAgIGludGVudD1cInByaW1hcnlcIlxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvbmZpcm19XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L0J1dHRvbj5cbiAgICApXG5cbiAgICBpZiAoc3RlcHMgJiYgc3RlcHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBwcm9wcyA9IHN0ZXBzW2N1cnJlbnRTdGVwXS5jb25maXJtUHJvcHNcbiAgICAgIGNvbnN0IHRleHQgPVxuICAgICAgICBzdGVwc1tjdXJyZW50U3RlcF0uY29uZmlybVRleHQgfHxcbiAgICAgICAgKGN1cnJlbnRTdGVwID09PSBzdGVwcy5sZW5ndGggLSAxID8gXCLlrozmiJBcIiA6IFwi5LiL5LiA5q2lXCIpXG4gICAgICByZXR1cm4gZ2VuZXJhdGVCdXR0b24ocHJvcHMsIHRleHQpXG4gICAgfVxuICAgIHJldHVybiBnZW5lcmF0ZUJ1dHRvbihjb25maXJtUHJvcHMsIGNvbmZpcm1UZXh0IHx8IFwi56Gu6K6kXCIpXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBlc2NhcGVLZXlDbG9zYWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChlc2NhcGVLZXlDbG9zYWJsZSAmJiBlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0aGlzLmhhbmRsZUNhbmNlbCgpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUNhbmNlbCA9ICh0eXBlPzogYW55KSA9PiB7XG4gICAgY29uc3QgeyBvbkNhbmNlbCwgc3RlcHMsIHZpc2libGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGN1cnJlbnRTdGVwIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHR5cGUgPT09IFwiY2xvc2VcIiB8fCAhc3RlcHMgfHwgIXN0ZXBzLmxlbmd0aCkge1xuICAgICAgaWYgKHZpc2libGUgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IGZhbHNlIH0pXG4gICAgICB9XG4gICAgICBpZiAob25DYW5jZWwpIHtcbiAgICAgICAgb25DYW5jZWwoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IG9uQ2FuY2VsOiBvblN0ZXBDYW5jZWwgfSA9IHN0ZXBzW2N1cnJlbnRTdGVwXVxuICAgICAgaWYgKG9uU3RlcENhbmNlbCkge1xuICAgICAgICBvblN0ZXBDYW5jZWwoKVxuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRTdGVwID09PSAwKSB7XG4gICAgICAgIGlmICh2aXNpYmxlID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IGZhbHNlIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50U3RlcDogY3VycmVudFN0ZXAgLSAxIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUNvbmZpcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkNvbmZpcm0sIHN0ZXBzLCB2aXNpYmxlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBjdXJyZW50U3RlcCB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChzdGVwcyAmJiBzdGVwcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHsgb25Db25maXJtOiBvblN0ZXBDb25maXJtIH0gPSBzdGVwc1tjdXJyZW50U3RlcF1cbiAgICAgIGlmIChvblN0ZXBDb25maXJtKSB7XG4gICAgICAgIG9uU3RlcENvbmZpcm0oKVxuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRTdGVwID09PSBzdGVwcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmICh2aXNpYmxlID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IGZhbHNlIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50U3RlcDogY3VycmVudFN0ZXAgKyAxIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2aXNpYmxlID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgICAgfVxuICAgICAgaWYgKG9uQ29uZmlybSkge1xuICAgICAgICBvbkNvbmZpcm0oKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkxlYXZlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYWZ0ZXJDbG9zZSwgZGVzdHJveUFmdGVyQ2xvc2UgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodGhpcy53cmFwcGVyKSB7XG4gICAgICB0aGlzLndyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfVxuICAgIHRoaXMucmVzZXRTY3JvbGxiYXJQYWRkaW5nKClcblxuICAgIGlmIChhZnRlckNsb3NlKSB7XG4gICAgICBhZnRlckNsb3NlKClcbiAgICB9XG5cbiAgICBpZiAoZGVzdHJveUFmdGVyQ2xvc2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNFdmVyT3BlbmVkOiBmYWxzZSB9KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBnZXRDb250YWluZXIgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lclxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICAgIGlmIChnZXRDb250YWluZXIpIHtcbiAgICAgIGdldENvbnRhaW5lcigpLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgfVxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVFbnRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGVzY2FwZUtleUNsb3NhYmxlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHRoaXMud3JhcHBlcikge1xuICAgICAgaWYgKGVzY2FwZUtleUNsb3NhYmxlKSB7XG4gICAgICAgIHRoaXMud3JhcHBlci5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldENvbXBvbmVudCA9IChvcHRpb25zPzogeyB2aXNpYmxlOiBib29sZWFuIH0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBib2R5Q2xhc3NOYW1lLFxuICAgICAgYm9keVN0eWxlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBmb290ZXJDbGFzc05hbWUsXG4gICAgICBmb290ZXJFbGVtZW50LFxuICAgICAgZm9vdGVyU3R5bGUsXG4gICAgICBoZWFkZXJDbGFzc05hbWUsXG4gICAgICBoZWFkZXJDb250ZW50LFxuICAgICAgaGVhZGVyRWxlbWVudCxcbiAgICAgIGhlYWRlclN0eWxlLFxuICAgICAgbWFza0Nsb3NhYmxlLFxuICAgICAgc3RlcHMsXG4gICAgICBzdHlsZSxcbiAgICAgIHRpdGxlLFxuICAgICAgekluZGV4OiB6SW5kZXhQcm9wLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB6SW5kZXggPSB6SW5kZXhQcm9wIGFzIFJlYWN0LkNTU1Byb3BlcnRpZXNbXCJ6SW5kZXhcIl1cblxuICAgIGNvbnN0IHJlc3RQcm9wcyA9IG9taXQob3RoZXJQcm9wcywgW1xuICAgICAgXCJhZnRlckNsb3NlXCIsXG4gICAgICBcImNhbmNlbFByb3BzXCIsXG4gICAgICBcImNhbmNlbFRleHRcIixcbiAgICAgIFwiY2hhbmdlQm9keVN0eWxlXCIsXG4gICAgICBcImNvbmZpcm1Qcm9wc1wiLFxuICAgICAgXCJjb25maXJtVGV4dFwiLFxuICAgICAgXCJjdXJyZW50U3RlcFwiLFxuICAgICAgXCJkZWZhdWx0Q3VycmVudFN0ZXBcIixcbiAgICAgIFwiZGVmYXVsdFZpc2libGVcIixcbiAgICAgIFwiZGVzdHJveUFmdGVyQ2xvc2VcIixcbiAgICAgIFwiZXNjYXBlS2V5Q2xvc2FibGVcIixcbiAgICAgIFwiZ2V0Q29udGFpbmVyXCIsXG4gICAgICBcIm9uQ2FuY2VsXCIsXG4gICAgICBcIm9uQ29uZmlybVwiLFxuICAgICAgXCJ0eXBlXCIsXG4gICAgICBcInZpc2libGVcIixcbiAgICBdKVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS1pbm5lcmApXG4gICAgY29uc3QgeyBjdXJyZW50U3RlcCB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAob3B0aW9ucyAmJiBPYmplY3Qua2V5cyhvcHRpb25zKS5pbmNsdWRlcyhcInZpc2libGVcIikpIHtcbiAgICAgIDsoeyB2aXNpYmxlIH0gPSBvcHRpb25zKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17dGhpcy5zYXZlRGlhbG9nfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS13cmFwcGVyYH1cbiAgICAgICAgICByZWY9eyh3cmFwcGVyKSA9PiB7XG4gICAgICAgICAgICBpZiAod3JhcHBlcikge1xuICAgICAgICAgICAgICB0aGlzLndyYXBwZXIgPSB3cmFwcGVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogdmlzaWJsZSA/IFwiZmxleFwiIDogXCJcIixcbiAgICAgICAgICAgIHpJbmRleCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgPlxuICAgICAgICAgIDxBbmltYXRlXG4gICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT17YCR7cHJlZml4fS1tYXNrYH1cbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Zpc2libGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1hc2tgfVxuICAgICAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAobWFza0Nsb3NhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsKFwiY2xvc2VcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0FuaW1hdGU+XG4gICAgICAgICAgey8qKlxuICAgICAgICAgICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMzQ1NTM0MlxuICAgICAgICAgICAqIDEuIOacgOWkluWxgiBtYXJnaW46IGF1dG8g6Z2e5bi46YeN6KaB44CCXG4gICAgICAgICAgICogRGlhbG9nIOeahOWuveW6puaYr+iHqumAguW6lOeahO+8jOWboOatpOS9v+eUqOS6hiBkaXNwbGF5OiBmbGV4IOWkhOeQhuWxheS4re+8jOi/meS9v+W+l+WtkOWFg+e0oOWFt+acieWMheijueaAp++8jOWboOatpOWuveW6puaJjeiDveeUseWGheWuueaJgOWGs+Wumu+8m1xuICAgICAgICAgICAqIG1hcmdpbjogYXV0bzsg5piv5Li65LqG5a6M5ZaEIGZsZXhib3ggb3ZlcmZsb3cg55qE5qC35byP44CCXG4gICAgICAgICAgICogMi4gekluZGV4OiAxIOaYr+S4uuS6huimhuebluWcqCBtYXNrIOS4iuOAglxuICAgICAgICAgICAqL31cbiAgICAgICAgICA8QW5pbWF0ZVxuICAgICAgICAgICAgb25BcHBlYXI9e3RoaXMuaGFuZGxlRW50ZXJ9XG4gICAgICAgICAgICBvbkVudGVyPXt0aGlzLmhhbmRsZUVudGVyfVxuICAgICAgICAgICAgb25MZWF2ZT17dGhpcy5vbkxlYXZlfVxuICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9e3ByZWZpeH1cbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbkFwcGVhclxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2aXNpYmxlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSBzdHlsZT17c3R5bGV9IHsuLi5yZXN0UHJvcHN9PlxuICAgICAgICAgICAgICAgIHtoZWFkZXJFbGVtZW50ID09PSBudWxsXG4gICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgIDogaGVhZGVyRWxlbWVudCB8fCAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWhlYWRlciAke2hlYWRlckNsYXNzTmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2hlYWRlclN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXswfSBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdGl0bGVgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJDb250ZW50ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWhlYWRlckNvbnRlbnRgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlckNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1jbG9zZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDYW5jZWwoXCJjbG9zZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1ib2R5ICR7Ym9keUNsYXNzTmFtZX1gfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e2JvZHlTdHlsZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7c3RlcHMgJiYgc3RlcHMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgID8gc3RlcHNbY3VycmVudFN0ZXBdLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIDogY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2Zvb3RlckVsZW1lbnQgPT09IG51bGwgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tZm9vdGVyICR7Zm9vdGVyQ2xhc3NOYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtmb290ZXJTdHlsZX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2Zvb3RlckVsZW1lbnQgfHwgW1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2FuY2VsQnV0dG9uKCksXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb25maXJtQnV0dG9uKCksXG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9BbmltYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBkaWRtb3VudCDnlLEgcG9ydGFsIOeahCBvbkNoaWxkcmVuTW91bnTvvIzlm6DkuLogZGlkbW91bnQg5pe2IHdyYXBwZXIg5Y+v6IO95bm25LiN5ZyoIGRvbVxuICAgKi9cbiAgcHVibGljIGhhbmRsZUNoaWxkcmVuTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHZpc2libGUgJiYgdGhpcy53cmFwcGVyKSB7XG4gICAgICB0aGlzLnNldFNjcm9sbGJhclBhZGRpbmcoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUgPSAoXG4gICAgXzogSURpYWxvZ1Byb3BzLFxuICAgIHsgdmlzaWJsZTogdmlzaWJsZVByZXYgfTogSURpYWxvZ1N0YXRlXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICh2aXNpYmxlICE9PSB2aXNpYmxlUHJldiAmJiB2aXNpYmxlICYmIHRoaXMud3JhcHBlcikge1xuICAgICAgdGhpcy5zZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHZpc2libGUpIHtcbiAgICAgIHRoaXMucmVzZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaGFzRXZlck9wZW5lZCB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghaGFzRXZlck9wZW5lZCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgb25DaGlsZHJlbk1vdW50PXt0aGlzLmhhbmRsZUNoaWxkcmVuTW91bnR9PlxuICAgICAgICB7dGhpcy5nZXRDb21wb25lbnQoKX1cbiAgICAgIDwvUG9ydGFsPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2dcbiJdfQ==