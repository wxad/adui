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
import Button from "../channels-button";
import "./style";
var prefix = "adui-channels-dialog";

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
          theme: "light",
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
          otherProps = _objectWithoutProperties(_this$props6, ["bodyStyle", "children", "className", "footerElement", "footerStyle", "headerContent", "headerElement", "headerStyle", "maskClosable", "steps", "style", "title"]);

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
          display: visible ? "flex" : ""
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
          position: "relative",
          margin: "auto",
          zIndex: 1,
          top: "var(--dialog-offset-y)",
          left: "var(--dialog-offset-x)"
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
      }, headerContent)), React.createElement("svg", {
        key: 2,
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        className: "".concat(prefix, "-close"),
        onClick: function onClick() {
          return _this.handleCancel("close");
        }
      }, React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.25 10.6932L6.05682 4.5L5 5.55682L11.1932 11.75L5 17.9432L6.05682 19L12.25 12.8068L18.4432 19L19.5 17.9432L13.3068 11.75L19.5 5.55682L18.4432 4.5L12.25 10.6932Z",
        fill: "black",
        fillOpacity: "0.9"
      }))]), React.createElement("div", {
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
  visible: PropTypes.bool
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
  visible: null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtZGlhbG9nL0RpYWxvZy50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJnZXRTY3JvbGxCYXJTaXplIiwiY2xhc3NOYW1lcyIsIkFuaW1hdGUiLCJvbWl0IiwiUG9ydGFsIiwiQnV0dG9uIiwicHJlZml4IiwiRGlhbG9nIiwicHJvcHMiLCJjb250YWluZXIiLCJib2R5SXNPdmVyZmxvd2luZyIsInNjcm9sbGJhcldpZHRoIiwiZGlhbG9nIiwid3JhcHBlciIsInNhdmVEaWFsb2ciLCJub2RlIiwicmVzZXRTY3JvbGxiYXJQYWRkaW5nIiwiY2hhbmdlQm9keVN0eWxlIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBhZGRpbmdSaWdodCIsInNldFNjcm9sbGJhclBhZGRpbmciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJ1bmRlZmluZWQiLCJnZXRDYW5jZWxCdXR0b24iLCJjYW5jZWxQcm9wcyIsImNhbmNlbFRleHQiLCJzdGVwcyIsInR5cGUiLCJjdXJyZW50U3RlcCIsInN0YXRlIiwiZGVmYXVsdFRleHQiLCJnZW5lcmF0ZUJ1dHRvbiIsInRleHQiLCJoYW5kbGVDYW5jZWwiLCJsZW5ndGgiLCJnZXRDb25maXJtQnV0dG9uIiwiY29uZmlybVByb3BzIiwiY29uZmlybVRleHQiLCJoYW5kbGVDb25maXJtIiwiaGFuZGxlS2V5RG93biIsImUiLCJlc2NhcGVLZXlDbG9zYWJsZSIsImtleUNvZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNhbmNlbCIsInZpc2libGUiLCJzZXRTdGF0ZSIsIm9uU3RlcENhbmNlbCIsIm9uQ29uZmlybSIsIm9uU3RlcENvbmZpcm0iLCJvbkxlYXZlIiwiYWZ0ZXJDbG9zZSIsImRlc3Ryb3lBZnRlckNsb3NlIiwiZGlzcGxheSIsImhhc0V2ZXJPcGVuZWQiLCJnZXRDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVFbnRlciIsImZvY3VzIiwiZ2V0Q29tcG9uZW50Iiwib3B0aW9ucyIsImJvZHlTdHlsZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZm9vdGVyRWxlbWVudCIsImZvb3RlclN0eWxlIiwiaGVhZGVyQ29udGVudCIsImhlYWRlckVsZW1lbnQiLCJoZWFkZXJTdHlsZSIsIm1hc2tDbG9zYWJsZSIsInRpdGxlIiwib3RoZXJQcm9wcyIsInJlc3RQcm9wcyIsImNsYXNzU2V0IiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwicG9zaXRpb24iLCJtYXJnaW4iLCJ6SW5kZXgiLCJ0b3AiLCJsZWZ0IiwiaGFuZGxlQ2hpbGRyZW5Nb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsIl8iLCJ2aXNpYmxlUHJldiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZGVmYXVsdEN1cnJlbnRTdGVwIiwiZGVmYXVsdFZpc2libGUiLCJ2aXNpYmxlU3RhdGUiLCJjdXJyZW50U3RlcFN0YXRlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiZnVuYyIsIm9iamVjdCIsImJvb2wiLCJzdHJpbmciLCJudW1iZXIiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyIsImluZm8iLCJzdWNjZXNzIiwid2FybmluZyIsImRhbmdlciIsImNvbmZpcm0iLCJpbmZvcm0iLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXdTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2Qiw4QkFBN0I7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixZQUFwQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsZUFBakI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFdBQW5CO0FBQ0EsT0FBT0MsTUFBUCxNQUFxQyxv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ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGdldFNjcm9sbEJhclNpemUgZnJvbSBcInJjLXV0aWwvbGliL2dldFNjcm9sbEJhclNpemVcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEFuaW1hdGUgZnJvbSBcInJjLWFuaW1hdGVcIlxuaW1wb3J0IG9taXQgZnJvbSBcIi4uL191dGlsL29taXRcIlxuaW1wb3J0IFBvcnRhbCBmcm9tIFwiLi4vcG9ydGFsXCJcbmltcG9ydCBCdXR0b24sIHsgSUJ1dHRvblByb3BzIH0gZnJvbSBcIi4uL2NoYW5uZWxzLWJ1dHRvblwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNoYW5uZWxzLWRpYWxvZ1wiXG5cbmludGVyZmFjZSBJU3RlcFByb3BzIHtcbiAgLyoqXG4gICAqIOWPlua2iOaMiemSrueahCBwcm9wc++8jOWPguiAgyBCdXR0b24gUHJvcHNcbiAgICovXG4gIGNhbmNlbFByb3BzPzogUGFydGlhbDxJQnV0dG9uUHJvcHM+XG4gIC8qKlxuICAgKiDlj5bmtojmjInpkq7nmoQg5paH5a2XXG4gICAqL1xuICBjYW5jZWxUZXh0Pzogc3RyaW5nXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDnoa7orqTmjInpkq7nmoQgcHJvcHPvvIzlj4LogIMgQnV0dG9uIFByb3BzXG4gICAqL1xuICBjb25maXJtUHJvcHM/OiBQYXJ0aWFsPElCdXR0b25Qcm9wcz5cbiAgLyoqXG4gICAqIOehruiupOaMiemSrueahCDmloflrZdcbiAgICovXG4gIGNvbmZpcm1UZXh0Pzogc3RyaW5nXG4gIC8qKlxuICAgKiDngrnlh7vlj5bmtojmjInpkq7jgIHlj7PkuIrop5LlhbPpl63ml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DYW5jZWw/OiAoKCkgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiDngrnlh7vnoa7orqTmjInpkq7ml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25Db25maXJtPzogKCgpID0+IHZvaWQpIHwgbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEaWFsb2dQcm9wcyBleHRlbmRzIElTdGVwUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWFs+mXreWQju+8iHRyYW5zaXRpb24g57uT5p2f5ZCO77yJ55qEIGhhbmRsZXJcbiAgICovXG4gIGFmdGVyQ2xvc2U/OiAoKCkgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiDorr7nva4gYm9keSDmoLflvI9cbiAgICovXG4gIGJvZHlTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIGRpYWxvZyDmiZPlvIDlkozlhbPpl63ml7bpg73kvJrmm7TmlLkgZG9jdW1lbnQuYm9keS5zdHlsZeOAguWPr+S7peS7peatpCBwcm9wIOaOp+WItuaYr+WQpuS/ruaUueOAguS9v+eUqOWcuuaZr+Wmgu+8mua1ruWxguWGheW8ueWHuiBkaWFsb2dcbiAgICovXG4gIGNoYW5nZUJvZHlTdHlsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQje+8jOazqOaEjyBEaWFsb2cg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaMh+WumuW9k+WJjeeahCBzdGVw77yM5LuF5Zyo5L2/55SoIHN0ZXBzIHByb3Ag5pe25pyJ5L2c55SoXG4gICAqL1xuICBjdXJyZW50U3RlcD86IG51bGwgfCBudW1iZXJcbiAgLyoqXG4gICAqIOaMh+Wumum7mOiupOeahOi1t+WniyBzdGVw77yM5LuF5Zyo5L2/55SoIHN0ZXBzIHByb3Ag5pe25pyJ5L2c55SoXG4gICAqL1xuICBkZWZhdWx0Q3VycmVudFN0ZXA/OiBudWxsIHwgbnVtYmVyXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrmmK/lkKbpu5jorqTmmL7npLpcbiAgICovXG4gIGRlZmF1bHRWaXNpYmxlPzogbnVsbCB8IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpuavj+asoSB2aXNpYmxlOiBmYWxzZSDpg73plIDmr4EgZG9tXG4gICAqL1xuICBkZXN0cm95QWZ0ZXJDbG9zZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpuaUr+aMgSBFU0Mg5YWz6ZetXG4gICAqL1xuICBlc2NhcGVLZXlDbG9zYWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWujOWFqOiHquWumuS5iSBmb290ZXIg55qE5YaF5a6577yM5aaC5p6c5oOz6KaB5pS55Y+YIGZvb3RlciDniLbnuqfnmoTmoLflvI/vvIzkvb/nlKggZm9vdGVyU3R5bGUgUHJvcFxuICAgKi9cbiAgZm9vdGVyRWxlbWVudD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6K6+572uIGZvb3RlciDmoLflvI9cbiAgICovXG4gIGZvb3RlclN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog5oyH5a6a5by55Ye65bGC55qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50LmJvZHnvvIznsbvkvLzkuo4gVG9vbHRpcCDnmoQgZ2V0UG9wdXBDb250YWluZXJcbiAgICovXG4gIGdldENvbnRhaW5lcj86ICgoKSA9PiBIVE1MRWxlbWVudCkgfCBudWxsXG4gIC8qKlxuICAgKiBoZWFkZXIg5qCH6aKY5LiL55qE5YaF5a65XG4gICAqL1xuICBoZWFkZXJDb250ZW50PzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDlrozlhajoh6rlrprkuYkgaGVhZGVyIOeahOWGheWuuVxuICAgKi9cbiAgaGVhZGVyRWxlbWVudD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6K6+572uIGhlYWRlciDmoLflvI9cbiAgICovXG4gIGhlYWRlclN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog54K55Ye7IG1hc2sg5piv5ZCm6Kem5Y+RIGNhbmNlbCDkuovku7ZcbiAgICovXG4gIG1hc2tDbG9zYWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaMh+WumuatpemqpO+8jOeUqOS7peW/q+aNt+S4iuS4gOatpeOAgeS4i+S4gOatpeeahOmcgOaxguOAglxuICAgKi9cbiAgc3RlcHM/OiBBcnJheTxJU3RlcFByb3BzPlxuICAvKipcbiAgICog6ZmE5Yqg5qC35byP77yM5rOo5oSPIERpYWxvZyDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICovXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog5a+56K+d5qGG5qCH6aKYXG4gICAqL1xuICB0aXRsZT86IG51bGwgfCBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIGNvbmZpcm0g5Li65Y+W5raI44CB56Gu6K6k5oyJ6ZKu77ybaW5mb3JtIOS4uuWPquacieehruiupOaMiemSrlxuICAgKi9cbiAgdHlwZT86IFwiY29uZmlybVwiIHwgXCJpbmZvcm1cIlxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5piv5ZCm5pi+56S6XG4gICAqL1xuICB2aXNpYmxlPzogbnVsbCB8IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGlhbG9nU3RhdGUge1xuICB2aXNpYmxlPzogYm9vbGVhblxuICBjdXJyZW50U3RlcDogbnVtYmVyXG4gIGhhc0V2ZXJPcGVuZWQ/OiBib29sZWFuXG59XG5cbi8qKlxuICog5a+56K+d5qGG55So5LqO5YWo5bGA5oCn55qE5Y+N6aaI77yM6YCa5bi45YiG5Li64oCc56Gu6K6k5pON5L2c4oCd5LiO4oCc5ZGK55+l5L+h5oGv4oCd44CCXG4gKiDnoa7orqTmk43kvZznlKjkuo7or6Lpl67nlKjmiLfigJzmk43kvZzmmK/lkKbnu6fnu63ov5vooYzvvJ/igJ3vvIzlpoLlpKfpg6jliIbnmoTkuozmrKHnoa7orqTlj43ppojjgILlkYrnn6Xkv6Hmga/liJnnlKjkuo7nn6XkvJrnlKjmiLfmn5DkuKrlj4rml7blj43ppojvvIzlpoLkv6Hmga/mj5DkuqTmiJDlip/jgIHlpLHotKXnrYnjgIJcbiAqL1xuY2xhc3MgRGlhbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElEaWFsb2dQcm9wcywgSURpYWxvZ1N0YXRlPiB7XG4gIHB1YmxpYyBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIOWFs+mXreWQju+8iHRyYW5zaXRpb24g57uT5p2f5ZCO77yJ55qEIGhhbmRsZXJcbiAgICAgKi9cbiAgICBhZnRlckNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva4gYm9keSDmoLflvI9cbiAgICAgKi9cbiAgICBib2R5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog5Y+W5raI5oyJ6ZKu55qEIHByb3Bz77yM5Y+C6ICDIEJ1dHRvbiBQcm9wc1xuICAgICAqL1xuICAgIGNhbmNlbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOWPlua2iOaMiemSrueahCDmloflrZdcbiAgICAgKi9cbiAgICBjYW5jZWxUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiBkaWFsb2cg5omT5byA5ZKM5YWz6Zet5pe26YO95Lya5pu05pS5IGRvY3VtZW50LmJvZHkuc3R5bGXjgILlj6/ku6Xku6XmraQgcHJvcCDmjqfliLbmmK/lkKbkv67mlLnjgILkvb/nlKjlnLrmma/lpoLvvJrmta7lsYLlhoXlvLnlh7ogZGlhbG9nXG4gICAgICovXG4gICAgY2hhbmdlQm9keVN0eWxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlrZDoioLngrlcbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg57G75ZCN77yM5rOo5oSPIERpYWxvZyDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog56Gu6K6k5oyJ6ZKu55qEIHByb3Bz77yM5Y+C6ICDIEJ1dHRvbiBQcm9wc1xuICAgICAqL1xuICAgIGNvbmZpcm1Qcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDnoa7orqTmjInpkq7nmoQg5paH5a2XXG4gICAgICovXG4gICAgY29uZmlybVRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOaMh+WumuW9k+WJjeeahCBzdGVw77yM5LuF5Zyo5L2/55SoIHN0ZXBzIHByb3Ag5pe25pyJ5L2c55SoXG4gICAgICovXG4gICAgY3VycmVudFN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICog5oyH5a6a6buY6K6k55qE6LW35aeLIHN0ZXDvvIzku4XlnKjkvb/nlKggc3RlcHMgcHJvcCDml7bmnInkvZznlKhcbiAgICAgKi9cbiAgICBkZWZhdWx0Q3VycmVudFN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICog5YaF6YOo6amx5Yqo77ya5piv5ZCm6buY6K6k5pi+56S6XG4gICAgICovXG4gICAgZGVmYXVsdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuavj+asoSB2aXNpYmxlOiBmYWxzZSDpg73plIDmr4EgZG9tXG4gICAgICovXG4gICAgZGVzdHJveUFmdGVyQ2xvc2U6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuaUr+aMgSBFU0Mg5YWz6ZetXG4gICAgICovXG4gICAgZXNjYXBlS2V5Q2xvc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWujOWFqOiHquWumuS5iSBmb290ZXIg55qE5YaF5a6577yM5aaC5p6c5oOz6KaB5pS55Y+YIGZvb3RlciDniLbnuqfnmoTmoLflvI/vvIzkvb/nlKggZm9vdGVyU3R5bGUgUHJvcFxuICAgICAqL1xuICAgIGZvb3RlckVsZW1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOiuvue9riBmb290ZXIg5qC35byPXG4gICAgICovXG4gICAgZm9vdGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog5oyH5a6a5by55Ye65bGC55qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50LmJvZHnvvIznsbvkvLzkuo4gVG9vbHRpcCDnmoQgZ2V0UG9wdXBDb250YWluZXJcbiAgICAgKi9cbiAgICBnZXRDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIGhlYWRlciDmoIfpopjkuIvnmoTlhoXlrrlcbiAgICAgKi9cbiAgICBoZWFkZXJDb250ZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDlrozlhajoh6rlrprkuYkgaGVhZGVyIOeahOWGheWuuVxuICAgICAqL1xuICAgIGhlYWRlckVsZW1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOiuvue9riBoZWFkZXIg5qC35byPXG4gICAgICovXG4gICAgaGVhZGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog54K55Ye7IG1hc2sg5piv5ZCm6Kem5Y+RIGNhbmNlbCDkuovku7ZcbiAgICAgKi9cbiAgICBtYXNrQ2xvc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOeCueWHu+WPlua2iOaMiemSruOAgeWPs+S4iuinkuWFs+mXreaXtueahCBoYW5kbGVyXG4gICAgICovXG4gICAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOeCueWHu+ehruiupOaMiemSruaXtueahCBoYW5kbGVyXG4gICAgICovXG4gICAgb25Db25maXJtOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDpmYTliqDmoLflvI/vvIzms6jmhI8gRGlhbG9nIOaJgOacieeahOWxnuaAp+S8mumZhOWKoOWIsOWGhemDqOeahOWGheWuueWFg+e0oOS4iu+8jOiAjOS4jeaYr+WMheWQqyBtYXNrIOeahOacgOWkluWxguWFg+e0oFxuICAgICAqL1xuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOWvueivneahhuagh+mimFxuICAgICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiBjb25maXJtIOS4uuWPlua2iOOAgeehruiupOaMiemSru+8m2luZm9ybSDkuLrlj6rmnInnoa7orqTmjInpkq5cbiAgICAgKi9cbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoW1wiY29uZmlybVwiLCBcImluZm9ybVwiXSksXG4gICAgLyoqXG4gICAgICog5aSW6YOo5o6n5Yi277ya5piv5ZCm5pi+56S6XG4gICAgICovXG4gICAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogSURpYWxvZ1Byb3BzID0ge1xuICAgIGFmdGVyQ2xvc2U6IG51bGwsXG4gICAgYm9keVN0eWxlOiB7fSxcbiAgICBjYW5jZWxQcm9wczoge30sXG4gICAgY2FuY2VsVGV4dDogXCLlj5bmtohcIixcbiAgICBjaGFuZ2VCb2R5U3R5bGU6IHRydWUsXG4gICAgY2hpbGRyZW46IG51bGwsXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gICAgY29uZmlybVByb3BzOiB7fSxcbiAgICBjb25maXJtVGV4dDogXCLnoa7orqRcIixcbiAgICBjdXJyZW50U3RlcDogbnVsbCxcbiAgICBkZWZhdWx0Q3VycmVudFN0ZXA6IG51bGwsXG4gICAgZGVmYXVsdFZpc2libGU6IG51bGwsXG4gICAgZGVzdHJveUFmdGVyQ2xvc2U6IGZhbHNlLFxuICAgIGVzY2FwZUtleUNsb3NhYmxlOiB0cnVlLFxuICAgIGZvb3RlckVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICBmb290ZXJTdHlsZToge30sXG4gICAgZ2V0Q29udGFpbmVyOiBudWxsLFxuICAgIGhlYWRlckNvbnRlbnQ6IG51bGwsXG4gICAgaGVhZGVyRWxlbWVudDogdW5kZWZpbmVkLFxuICAgIGhlYWRlclN0eWxlOiB7fSxcbiAgICBtYXNrQ2xvc2FibGU6IGZhbHNlLFxuICAgIG9uQ2FuY2VsOiBudWxsLFxuICAgIG9uQ29uZmlybTogbnVsbCxcbiAgICBzdHlsZToge30sXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdHlwZTogXCJjb25maXJtXCIsXG4gICAgdmlzaWJsZTogbnVsbCxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5mbzogYW55XG5cbiAgcHVibGljIHN0YXRpYyBzdWNjZXNzOiBhbnlcblxuICBwdWJsaWMgc3RhdGljIHdhcm5pbmc6IGFueVxuXG4gIHB1YmxpYyBzdGF0aWMgZGFuZ2VyOiBhbnlcblxuICBwdWJsaWMgc3RhdGljIGNvbmZpcm06IGFueVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5mb3JtOiBhbnlcblxuICBwdWJsaWMgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IChcbiAgICB7IGN1cnJlbnRTdGVwLCB2aXNpYmxlIH06IElEaWFsb2dQcm9wcyxcbiAgICB7IGhhc0V2ZXJPcGVuZWQgfTogSURpYWxvZ1N0YXRlXG4gICkgPT4ge1xuICAgIGNvbnN0IG5ld1N0YXRlOiBQYXJ0aWFsPElEaWFsb2dTdGF0ZT4gPSB7fVxuICAgIGlmIChjdXJyZW50U3RlcCAhPT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGUuY3VycmVudFN0ZXAgPSBjdXJyZW50U3RlcFxuICAgIH1cbiAgICBpZiAodmlzaWJsZSAhPT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGUudmlzaWJsZSA9IHZpc2libGVcbiAgICAgIGlmICghaGFzRXZlck9wZW5lZCAmJiB2aXNpYmxlKSB7XG4gICAgICAgIG5ld1N0YXRlLmhhc0V2ZXJPcGVuZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhuZXdTdGF0ZSkubGVuZ3RoID4gMCA/IG5ld1N0YXRlIDogbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIOS/neWtmOiKgueCueaMgui9veeahOWvueixoVxuICAgKi9cbiAgcHVibGljIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgfCBudWxsXG5cbiAgLyoqXG4gICAqIOS/neWtmOmhtemdouaYr+WQpiBvdmVyZmxvd1xuICAgKi9cbiAgcHVibGljIGJvZHlJc092ZXJmbG93aW5nOiBib29sZWFuXG5cbiAgLyoqXG4gICAqIOS/neWtmOW9k+WJjea1j+iniOWZqOeahOa7muWKqOadoeWuveW6plxuICAgKi9cbiAgcHVibGljIHNjcm9sbGJhcldpZHRoOiBudW1iZXJcblxuICBwdWJsaWMgZGlhbG9nOiBIVE1MRGl2RWxlbWVudFxuXG4gIHB1YmxpYyB3cmFwcGVyOiBIVE1MRGl2RWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJRGlhbG9nUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCB7IGN1cnJlbnRTdGVwLCBkZWZhdWx0Q3VycmVudFN0ZXAsIHZpc2libGUsIGRlZmF1bHRWaXNpYmxlIH0gPSBwcm9wc1xuICAgIGNvbnN0IHZpc2libGVTdGF0ZSA9IHZpc2libGUgIT09IG51bGwgPyAhIXZpc2libGUgOiAhIWRlZmF1bHRWaXNpYmxlXG4gICAgY29uc3QgY3VycmVudFN0ZXBTdGF0ZSA9XG4gICAgICBjdXJyZW50U3RlcCAhPT0gbnVsbCA/IGN1cnJlbnRTdGVwIDogZGVmYXVsdEN1cnJlbnRTdGVwXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlzaWJsZTogdmlzaWJsZVN0YXRlLFxuICAgICAgY3VycmVudFN0ZXA6IGN1cnJlbnRTdGVwU3RhdGUgfHwgMCxcbiAgICAgIGhhc0V2ZXJPcGVuZWQ6IHZpc2libGVTdGF0ZSxcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2F2ZURpYWxvZyA9IChub2RlOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIHRoaXMuZGlhbG9nID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHJlc2V0U2Nyb2xsYmFyUGFkZGluZyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNoYW5nZUJvZHlTdHlsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChjaGFuZ2VCb2R5U3R5bGUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCJcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0U2Nyb2xsYmFyUGFkZGluZyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNoYW5nZUJvZHlTdHlsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChjaGFuZ2VCb2R5U3R5bGUpIHtcbiAgICAgIGNvbnN0IHsgaW5uZXJXaWR0aCB9ID0gd2luZG93XG4gICAgICB0aGlzLmJvZHlJc092ZXJmbG93aW5nID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IGlubmVyV2lkdGhcbiAgICAgIGlmICh0aGlzLmJvZHlJc092ZXJmbG93aW5nICYmICFkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCkge1xuICAgICAgICB0aGlzLnNjcm9sbGJhcldpZHRoID0gZ2V0U2Nyb2xsQmFyU2l6ZSgpXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbGJhcldpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMuc2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldENhbmNlbEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNhbmNlbFByb3BzLCBjYW5jZWxUZXh0LCBzdGVwcywgdHlwZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBkZWZhdWx0VGV4dCA9IGN1cnJlbnRTdGVwID09PSAwID8gXCLlj5bmtohcIiA6IFwi5LiK5LiA5q2lXCJcbiAgICBjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IChwcm9wcz86IElCdXR0b25Qcm9wcywgdGV4dCA9IGRlZmF1bHRUZXh0KSA9PiAoXG4gICAgICA8QnV0dG9uIGtleT1cImNhbmNlbFwiIHRoZW1lPVwibGlnaHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhbmNlbH0gey4uLnByb3BzfT5cbiAgICAgICAge3RleHR9XG4gICAgICA8L0J1dHRvbj5cbiAgICApXG5cbiAgICBpZiAoc3RlcHMgJiYgc3RlcHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBwcm9wcyA9IHN0ZXBzW2N1cnJlbnRTdGVwXS5jYW5jZWxQcm9wc1xuICAgICAgY29uc3QgdGV4dCA9IHN0ZXBzW2N1cnJlbnRTdGVwXS5jYW5jZWxUZXh0XG4gICAgICByZXR1cm4gZ2VuZXJhdGVCdXR0b24ocHJvcHMsIHRleHQpXG4gICAgfVxuICAgIGlmICh0eXBlID09PSBcImluZm9ybVwiKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gZ2VuZXJhdGVCdXR0b24oY2FuY2VsUHJvcHMsIGNhbmNlbFRleHQpXG4gIH1cblxuICBwdWJsaWMgZ2V0Q29uZmlybUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbmZpcm1Qcm9wcywgY29uZmlybVRleHQsIHN0ZXBzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBjdXJyZW50U3RlcCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gKHByb3BzPzogSUJ1dHRvblByb3BzLCB0ZXh0Pzogc3RyaW5nKSA9PiAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGtleT1cInByaW1hcnlcIlxuICAgICAgICBpbnRlbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDb25maXJtfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9CdXR0b24+XG4gICAgKVxuXG4gICAgaWYgKHN0ZXBzICYmIHN0ZXBzLmxlbmd0aCkge1xuICAgICAgY29uc3QgcHJvcHMgPSBzdGVwc1tjdXJyZW50U3RlcF0uY29uZmlybVByb3BzXG4gICAgICBjb25zdCB0ZXh0ID1cbiAgICAgICAgc3RlcHNbY3VycmVudFN0ZXBdLmNvbmZpcm1UZXh0IHx8XG4gICAgICAgIChjdXJyZW50U3RlcCA9PT0gc3RlcHMubGVuZ3RoIC0gMSA/IFwi5a6M5oiQXCIgOiBcIuS4i+S4gOatpVwiKVxuICAgICAgcmV0dXJuIGdlbmVyYXRlQnV0dG9uKHByb3BzLCB0ZXh0KVxuICAgIH1cbiAgICByZXR1cm4gZ2VuZXJhdGVCdXR0b24oY29uZmlybVByb3BzLCBjb25maXJtVGV4dCB8fCBcIuehruiupFwiKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgZXNjYXBlS2V5Q2xvc2FibGUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoZXNjYXBlS2V5Q2xvc2FibGUgJiYgZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdGhpcy5oYW5kbGVDYW5jZWwoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVDYW5jZWwgPSAodHlwZT86IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgb25DYW5jZWwsIHN0ZXBzLCB2aXNpYmxlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBjdXJyZW50U3RlcCB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICh0eXBlID09PSBcImNsb3NlXCIgfHwgIXN0ZXBzIHx8ICFzdGVwcy5sZW5ndGgpIHtcbiAgICAgIGlmICh2aXNpYmxlID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2FuY2VsKSB7XG4gICAgICAgIG9uQ2FuY2VsKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBvbkNhbmNlbDogb25TdGVwQ2FuY2VsIH0gPSBzdGVwc1tjdXJyZW50U3RlcF1cbiAgICAgIGlmIChvblN0ZXBDYW5jZWwpIHtcbiAgICAgICAgb25TdGVwQ2FuY2VsKClcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50U3RlcCA9PT0gMCkge1xuICAgICAgICBpZiAodmlzaWJsZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFN0ZXA6IGN1cnJlbnRTdGVwIC0gMSB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVDb25maXJtID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25Db25maXJtLCBzdGVwcywgdmlzaWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoc3RlcHMgJiYgc3RlcHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCB7IG9uQ29uZmlybTogb25TdGVwQ29uZmlybSB9ID0gc3RlcHNbY3VycmVudFN0ZXBdXG4gICAgICBpZiAob25TdGVwQ29uZmlybSkge1xuICAgICAgICBvblN0ZXBDb25maXJtKClcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50U3RlcCA9PT0gc3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBpZiAodmlzaWJsZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFN0ZXA6IGN1cnJlbnRTdGVwICsgMSB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmlzaWJsZSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNvbmZpcm0pIHtcbiAgICAgICAgb25Db25maXJtKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25MZWF2ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFmdGVyQ2xvc2UsIGRlc3Ryb3lBZnRlckNsb3NlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHRoaXMud3JhcHBlcikge1xuICAgICAgdGhpcy53cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH1cbiAgICB0aGlzLnJlc2V0U2Nyb2xsYmFyUGFkZGluZygpXG5cbiAgICBpZiAoYWZ0ZXJDbG9zZSkge1xuICAgICAgYWZ0ZXJDbG9zZSgpXG4gICAgfVxuXG4gICAgaWYgKGRlc3Ryb3lBZnRlckNsb3NlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaGFzRXZlck9wZW5lZDogZmFsc2UgfSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZ2V0Q29udGFpbmVyIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250YWluZXJcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICBpZiAoZ2V0Q29udGFpbmVyKSB7XG4gICAgICBnZXRDb250YWluZXIoKS5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIH1cbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlRW50ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBlc2NhcGVLZXlDbG9zYWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0aGlzLndyYXBwZXIpIHtcbiAgICAgIGlmIChlc2NhcGVLZXlDbG9zYWJsZSkge1xuICAgICAgICB0aGlzLndyYXBwZXIuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDb21wb25lbnQgPSAob3B0aW9ucz86IHsgdmlzaWJsZTogYm9vbGVhbiB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgYm9keVN0eWxlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBmb290ZXJFbGVtZW50LFxuICAgICAgZm9vdGVyU3R5bGUsXG4gICAgICBoZWFkZXJDb250ZW50LFxuICAgICAgaGVhZGVyRWxlbWVudCxcbiAgICAgIGhlYWRlclN0eWxlLFxuICAgICAgbWFza0Nsb3NhYmxlLFxuICAgICAgc3RlcHMsXG4gICAgICBzdHlsZSxcbiAgICAgIHRpdGxlLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCByZXN0UHJvcHMgPSBvbWl0KG90aGVyUHJvcHMsIFtcbiAgICAgIFwiYWZ0ZXJDbG9zZVwiLFxuICAgICAgXCJjYW5jZWxQcm9wc1wiLFxuICAgICAgXCJjYW5jZWxUZXh0XCIsXG4gICAgICBcImNoYW5nZUJvZHlTdHlsZVwiLFxuICAgICAgXCJjb25maXJtUHJvcHNcIixcbiAgICAgIFwiY29uZmlybVRleHRcIixcbiAgICAgIFwiY3VycmVudFN0ZXBcIixcbiAgICAgIFwiZGVmYXVsdEN1cnJlbnRTdGVwXCIsXG4gICAgICBcImRlZmF1bHRWaXNpYmxlXCIsXG4gICAgICBcImRlc3Ryb3lBZnRlckNsb3NlXCIsXG4gICAgICBcImVzY2FwZUtleUNsb3NhYmxlXCIsXG4gICAgICBcImdldENvbnRhaW5lclwiLFxuICAgICAgXCJvbkNhbmNlbFwiLFxuICAgICAgXCJvbkNvbmZpcm1cIixcbiAgICAgIFwidHlwZVwiLFxuICAgICAgXCJ2aXNpYmxlXCIsXG4gICAgXSlcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0taW5uZXJgKVxuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKG9wdGlvbnMgJiYgT2JqZWN0LmtleXMob3B0aW9ucykuaW5jbHVkZXMoXCJ2aXNpYmxlXCIpKSB7XG4gICAgICA7KHsgdmlzaWJsZSB9ID0gb3B0aW9ucylcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e3RoaXMuc2F2ZURpYWxvZ30+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0td3JhcHBlcmB9XG4gICAgICAgICAgcmVmPXsod3JhcHBlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHdyYXBwZXIpIHtcbiAgICAgICAgICAgICAgdGhpcy53cmFwcGVyID0gd3JhcHBlclxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogdmlzaWJsZSA/IFwiZmxleFwiIDogXCJcIiB9fVxuICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgPlxuICAgICAgICAgIDxBbmltYXRlXG4gICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT17YCR7cHJlZml4fS1tYXNrYH1cbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Zpc2libGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1hc2tgfVxuICAgICAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAobWFza0Nsb3NhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsKFwiY2xvc2VcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0FuaW1hdGU+XG4gICAgICAgICAgey8qKlxuICAgICAgICAgICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMzQ1NTM0MlxuICAgICAgICAgICAqIDEuIOacgOWkluWxgiBtYXJnaW46IGF1dG8g6Z2e5bi46YeN6KaB44CCXG4gICAgICAgICAgICogRGlhbG9nIOeahOWuveW6puaYr+iHqumAguW6lOeahO+8jOWboOatpOS9v+eUqOS6hiBkaXNwbGF5OiBmbGV4IOWkhOeQhuWxheS4re+8jOi/meS9v+W+l+WtkOWFg+e0oOWFt+acieWMheijueaAp++8jOWboOatpOWuveW6puaJjeiDveeUseWGheWuueaJgOWGs+Wumu+8m1xuICAgICAgICAgICAqIG1hcmdpbjogYXV0bzsg5piv5Li65LqG5a6M5ZaEIGZsZXhib3ggb3ZlcmZsb3cg55qE5qC35byP44CCXG4gICAgICAgICAgICogMi4gekluZGV4OiAxIOaYr+S4uuS6huimhuebluWcqCBtYXNrIOS4iuOAglxuICAgICAgICAgICAqL31cbiAgICAgICAgICA8QW5pbWF0ZVxuICAgICAgICAgICAgb25BcHBlYXI9e3RoaXMuaGFuZGxlRW50ZXJ9XG4gICAgICAgICAgICBvbkVudGVyPXt0aGlzLmhhbmRsZUVudGVyfVxuICAgICAgICAgICAgb25MZWF2ZT17dGhpcy5vbkxlYXZlfVxuICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9e3ByZWZpeH1cbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgICAgIHRvcDogXCJ2YXIoLS1kaWFsb2ctb2Zmc2V0LXkpXCIsXG4gICAgICAgICAgICAgIGxlZnQ6IFwidmFyKC0tZGlhbG9nLW9mZnNldC14KVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dmlzaWJsZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gc3R5bGU9e3N0eWxlfSB7Li4ucmVzdFByb3BzfT5cbiAgICAgICAgICAgICAgICB7aGVhZGVyRWxlbWVudCA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICA6IGhlYWRlckVsZW1lbnQgfHwgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWhlYWRlcmB9IHN0eWxlPXtoZWFkZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17MH0gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRpdGxlYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyQ29udGVudCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1oZWFkZXJDb250ZW50YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJDb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNsb3NlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNhbmNlbChcImNsb3NlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMi4yNSAxMC42OTMyTDYuMDU2ODIgNC41TDUgNS41NTY4MkwxMS4xOTMyIDExLjc1TDUgMTcuOTQzMkw2LjA1NjgyIDE5TDEyLjI1IDEyLjgwNjhMMTguNDQzMiAxOUwxOS41IDE3Ljk0MzJMMTMuMzA2OCAxMS43NUwxOS41IDUuNTU2ODJMMTguNDQzMiA0LjVMMTIuMjUgMTAuNjkzMlpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5PVwiMC45XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4sXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWJvZHlgfSBzdHlsZT17Ym9keVN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIHtzdGVwcyAmJiBzdGVwcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgPyBzdGVwc1tjdXJyZW50U3RlcF0uY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgOiBjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7Zm9vdGVyRWxlbWVudCA9PT0gbnVsbCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1mb290ZXJgfSBzdHlsZT17Zm9vdGVyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICB7Zm9vdGVyRWxlbWVudCB8fCBbXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDYW5jZWxCdXR0b24oKSxcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbmZpcm1CdXR0b24oKSxcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0FuaW1hdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIGRpZG1vdW50IOeUsSBwb3J0YWwg55qEIG9uQ2hpbGRyZW5Nb3VudO+8jOWboOS4uiBkaWRtb3VudCDml7Ygd3JhcHBlciDlj6/og73lubbkuI3lnKggZG9tXG4gICAqL1xuICBwdWJsaWMgaGFuZGxlQ2hpbGRyZW5Nb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAodmlzaWJsZSAmJiB0aGlzLndyYXBwZXIpIHtcbiAgICAgIHRoaXMuc2V0U2Nyb2xsYmFyUGFkZGluZygpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSA9IChcbiAgICBfOiBJRGlhbG9nUHJvcHMsXG4gICAgeyB2aXNpYmxlOiB2aXNpYmxlUHJldiB9OiBJRGlhbG9nU3RhdGVcbiAgKSA9PiB7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHZpc2libGUgIT09IHZpc2libGVQcmV2ICYmIHZpc2libGUgJiYgdGhpcy53cmFwcGVyKSB7XG4gICAgICB0aGlzLnNldFNjcm9sbGJhclBhZGRpbmcoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5yZXNldFNjcm9sbGJhclBhZGRpbmcoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoYXNFdmVyT3BlbmVkIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKCFoYXNFdmVyT3BlbmVkKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcnRhbCBvbkNoaWxkcmVuTW91bnQ9e3RoaXMuaGFuZGxlQ2hpbGRyZW5Nb3VudH0+XG4gICAgICAgIHt0aGlzLmdldENvbXBvbmVudCgpfVxuICAgICAgPC9Qb3J0YWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZ1xuIl19