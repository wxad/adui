"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _getScrollBarSize = _interopRequireDefault(require("rc-util/lib/getScrollBarSize"));

var _classnames = _interopRequireDefault(require("classnames"));

var _rcAnimate = _interopRequireDefault(require("rc-animate"));

var _omit = _interopRequireDefault(require("../_util/omit"));

var _portal = _interopRequireDefault(require("../portal"));

var _button = _interopRequireDefault(require("../button"));

var _icon = _interopRequireDefault(require("../icon"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
          _this.scrollbarWidth = (0, _getScrollBarSize["default"])();

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
        return React.createElement(_button["default"], _extends({
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
        return React.createElement(_button["default"], _extends({
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

      var restProps = (0, _omit["default"])(otherProps, ["afterClose", "cancelProps", "cancelText", "changeBodyStyle", "confirmProps", "confirmText", "currentStep", "defaultCurrentStep", "defaultVisible", "destroyAfterClose", "escapeKeyClosable", "getContainer", "onCancel", "onConfirm", "type", "visible"]);
      var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-inner"));
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
      }, React.createElement(_rcAnimate["default"], {
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
      })), React.createElement(_rcAnimate["default"], {
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
      }, headerContent)), React.createElement(_icon["default"], {
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

      return React.createElement(_portal["default"], {
        onChildrenMount: this.handleChildrenMount
      }, this.getComponent());
    }
  }]);

  return Dialog;
}(React.Component);

Dialog.propTypes = {
  afterClose: _propTypes["default"].func,
  bodyStyle: _propTypes["default"].object,
  cancelProps: _propTypes["default"].object,
  cancelText: _propTypes["default"].node,
  changeBodyStyle: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  confirmProps: _propTypes["default"].object,
  confirmText: _propTypes["default"].node,
  currentStep: _propTypes["default"].number,
  defaultCurrentStep: _propTypes["default"].number,
  defaultVisible: _propTypes["default"].bool,
  destroyAfterClose: _propTypes["default"].bool,
  escapeKeyClosable: _propTypes["default"].bool,
  footerElement: _propTypes["default"].node,
  footerStyle: _propTypes["default"].object,
  getContainer: _propTypes["default"].func,
  headerContent: _propTypes["default"].node,
  headerElement: _propTypes["default"].node,
  headerStyle: _propTypes["default"].object,
  maskClosable: _propTypes["default"].bool,
  onCancel: _propTypes["default"].func,
  onConfirm: _propTypes["default"].func,
  style: _propTypes["default"].object,
  title: _propTypes["default"].node,
  type: _propTypes["default"].oneOf(["confirm", "inform"]),
  visible: _propTypes["default"].bool
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

(0, _reactLifecyclesCompat.polyfill)(Dialog);
var _default = Dialog;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL0RpYWxvZy50c3giXSwibmFtZXMiOlsicHJlZml4IiwiRGlhbG9nIiwicHJvcHMiLCJjb250YWluZXIiLCJib2R5SXNPdmVyZmxvd2luZyIsInNjcm9sbGJhcldpZHRoIiwiZGlhbG9nIiwid3JhcHBlciIsInNhdmVEaWFsb2ciLCJub2RlIiwicmVzZXRTY3JvbGxiYXJQYWRkaW5nIiwiY2hhbmdlQm9keVN0eWxlIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBhZGRpbmdSaWdodCIsInNldFNjcm9sbGJhclBhZGRpbmciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJ1bmRlZmluZWQiLCJnZXRDYW5jZWxCdXR0b24iLCJjYW5jZWxQcm9wcyIsImNhbmNlbFRleHQiLCJzdGVwcyIsInR5cGUiLCJjdXJyZW50U3RlcCIsInN0YXRlIiwiZGVmYXVsdFRleHQiLCJnZW5lcmF0ZUJ1dHRvbiIsInRleHQiLCJoYW5kbGVDYW5jZWwiLCJsZW5ndGgiLCJnZXRDb25maXJtQnV0dG9uIiwiY29uZmlybVByb3BzIiwiY29uZmlybVRleHQiLCJoYW5kbGVDb25maXJtIiwiaGFuZGxlS2V5RG93biIsImUiLCJlc2NhcGVLZXlDbG9zYWJsZSIsImtleUNvZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNhbmNlbCIsInZpc2libGUiLCJzZXRTdGF0ZSIsIm9uU3RlcENhbmNlbCIsIm9uQ29uZmlybSIsIm9uU3RlcENvbmZpcm0iLCJvbkxlYXZlIiwiYWZ0ZXJDbG9zZSIsImRlc3Ryb3lBZnRlckNsb3NlIiwiZGlzcGxheSIsImhhc0V2ZXJPcGVuZWQiLCJnZXRDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVFbnRlciIsImZvY3VzIiwiZ2V0Q29tcG9uZW50Iiwib3B0aW9ucyIsImJvZHlTdHlsZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZm9vdGVyRWxlbWVudCIsImZvb3RlclN0eWxlIiwiaGVhZGVyQ29udGVudCIsImhlYWRlckVsZW1lbnQiLCJoZWFkZXJTdHlsZSIsIm1hc2tDbG9zYWJsZSIsInRpdGxlIiwib3RoZXJQcm9wcyIsInJlc3RQcm9wcyIsImNsYXNzU2V0IiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwibWFyZ2luIiwiekluZGV4IiwiaGFuZGxlQ2hpbGRyZW5Nb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsIl8iLCJ2aXNpYmxlUHJldiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZGVmYXVsdEN1cnJlbnRTdGVwIiwiZGVmYXVsdFZpc2libGUiLCJ2aXNpYmxlU3RhdGUiLCJjdXJyZW50U3RlcFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwib2JqZWN0IiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwiaW5mbyIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwiZGFuZ2VyIiwiY29uZmlybSIsImluZm9ybSIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm5ld1N0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxhQUFmOztJQW1JTUMsTTs7Ozs7QUE4TEosa0JBQVlDLE1BQVosRUFBaUM7QUFBQTs7QUFBQTs7QUFDL0IsOEJBQU1BLE1BQU47QUFEK0IsVUFoQjFCQyxTQWdCMEI7QUFBQSxVQVgxQkMsaUJBVzBCO0FBQUEsVUFOMUJDLGNBTTBCO0FBQUEsVUFKMUJDLE1BSTBCO0FBQUEsVUFGMUJDLE9BRTBCOztBQUFBLFVBYzFCQyxVQWQwQixHQWNiLFVBQUNDLElBQUQsRUFBMEI7QUFDNUMsWUFBS0gsTUFBTCxH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LGFBQVQsR0FBeUIsSUFBekI7QUFDRDtBQUNGOztBQUNELFNBQU9xQixNQUFNLENBQUNDLElBQVAsQ0FBWStCLFFBQVosRUFBc0J6RSxNQUF0QixHQUErQixDQUEvQixHQUFtQ3lFLFFBQW5DLEdBQThDLElBQXJEO0FBQ0QsQzs7QUFtWUgscUNBQVN6RyxNQUFUO2VBRWVBLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgeyBwb2x5ZmlsbCB9IGZyb20gXCJyZWFjdC1saWZlY3ljbGVzLWNvbXBhdFwiXG5pbXBvcnQgZ2V0U2Nyb2xsQmFyU2l6ZSBmcm9tIFwicmMtdXRpbC9saWIvZ2V0U2Nyb2xsQmFyU2l6ZVwiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgQW5pbWF0ZSBmcm9tIFwicmMtYW5pbWF0ZVwiXG5pbXBvcnQgb21pdCBmcm9tIFwiLi4vX3V0aWwvb21pdFwiXG5pbXBvcnQgUG9ydGFsIGZyb20gXCIuLi9wb3J0YWxcIlxuaW1wb3J0IEJ1dHRvbiwgeyBJQnV0dG9uUHJvcHMgfSBmcm9tIFwiLi4vYnV0dG9uXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktZGlhbG9nXCJcblxuaW50ZXJmYWNlIElTdGVwUHJvcHMge1xuICAvKipcbiAgICog5Y+W5raI5oyJ6ZKu55qEIHByb3Bz77yM5Y+C6ICDIEJ1dHRvbiBQcm9wc1xuICAgKi9cbiAgY2FuY2VsUHJvcHM/OiBQYXJ0aWFsPElCdXR0b25Qcm9wcz5cbiAgLyoqXG4gICAqIOWPlua2iOaMiemSrueahCDmloflrZdcbiAgICovXG4gIGNhbmNlbFRleHQ/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOehruiupOaMiemSrueahCBwcm9wc++8jOWPguiAgyBCdXR0b24gUHJvcHNcbiAgICovXG4gIGNvbmZpcm1Qcm9wcz86IFBhcnRpYWw8SUJ1dHRvblByb3BzPlxuICAvKipcbiAgICog56Gu6K6k5oyJ6ZKu55qEIOaWh+Wtl1xuICAgKi9cbiAgY29uZmlybVRleHQ/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOeCueWHu+WPlua2iOaMiemSruOAgeWPs+S4iuinkuWFs+mXreaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNhbmNlbD86ICgoKSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOeCueWHu+ehruiupOaMiemSruaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNvbmZpcm0/OiAoKCkgPT4gdm9pZCkgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ1Byb3BzIGV4dGVuZHMgSVN0ZXBQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5YWz6Zet5ZCO77yIdHJhbnNpdGlvbiDnu5PmnZ/lkI7vvInnmoQgaGFuZGxlclxuICAgKi9cbiAgYWZ0ZXJDbG9zZT86ICgoKSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOiuvue9riBib2R5IOagt+W8j1xuICAgKi9cbiAgYm9keVN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICogZGlhbG9nIOaJk+W8gOWSjOWFs+mXreaXtumDveS8muabtOaUuSBkb2N1bWVudC5ib2R5LnN0eWxl44CC5Y+v5Lul5Lul5q2kIHByb3Ag5o6n5Yi25piv5ZCm5L+u5pS544CC5L2/55So5Zy65pmv5aaC77ya5rWu5bGC5YaF5by55Ye6IGRpYWxvZ1xuICAgKi9cbiAgY2hhbmdlQm9keVN0eWxlPzogYm9vbGVhblxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCN77yM5rOo5oSPIERpYWxvZyDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5oyH5a6a5b2T5YmN55qEIHN0ZXDvvIzku4XlnKjkvb/nlKggc3RlcHMgcHJvcCDml7bmnInkvZznlKhcbiAgICovXG4gIGN1cnJlbnRTdGVwPzogbnVsbCB8IG51bWJlclxuICAvKipcbiAgICog5oyH5a6a6buY6K6k55qE6LW35aeLIHN0ZXDvvIzku4XlnKjkvb/nlKggc3RlcHMgcHJvcCDml7bmnInkvZznlKhcbiAgICovXG4gIGRlZmF1bHRDdXJyZW50U3RlcD86IG51bGwgfCBudW1iZXJcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8muaYr+WQpum7mOiupOaYvuekulxuICAgKi9cbiAgZGVmYXVsdFZpc2libGU/OiBudWxsIHwgYm9vbGVhblxuICAvKipcbiAgICog5piv5ZCm5q+P5qyhIHZpc2libGU6IGZhbHNlIOmDvemUgOavgSBkb21cbiAgICovXG4gIGRlc3Ryb3lBZnRlckNsb3NlPzogYm9vbGVhblxuICAvKipcbiAgICog5piv5ZCm5pSv5oyBIEVTQyDlhbPpl61cbiAgICovXG4gIGVzY2FwZUtleUNsb3NhYmxlPzogYm9vbGVhblxuICAvKipcbiAgICog5a6M5YWo6Ieq5a6a5LmJIGZvb3RlciDnmoTlhoXlrrnvvIzlpoLmnpzmg7PopoHmlLnlj5ggZm9vdGVyIOeItue6p+eahOagt+W8j++8jOS9v+eUqCBmb290ZXJTdHlsZSBQcm9wXG4gICAqL1xuICBmb290ZXJFbGVtZW50PzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDorr7nva4gZm9vdGVyIOagt+W8j1xuICAgKi9cbiAgZm9vdGVyU3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiDmjIflrprlvLnlh7rlsYLnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9kee+8jOexu+S8vOS6jiBUb29sdGlwIOeahCBnZXRQb3B1cENvbnRhaW5lclxuICAgKi9cbiAgZ2V0Q29udGFpbmVyPzogKCgpID0+IEhUTUxFbGVtZW50KSB8IG51bGxcbiAgLyoqXG4gICAqIGhlYWRlciDmoIfpopjkuIvnmoTlhoXlrrlcbiAgICovXG4gIGhlYWRlckNvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOWujOWFqOiHquWumuS5iSBoZWFkZXIg55qE5YaF5a65XG4gICAqL1xuICBoZWFkZXJFbGVtZW50PzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDorr7nva4gaGVhZGVyIOagt+W8j1xuICAgKi9cbiAgaGVhZGVyU3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiDngrnlh7sgbWFzayDmmK/lkKbop6blj5EgY2FuY2VsIOS6i+S7tlxuICAgKi9cbiAgbWFza0Nsb3NhYmxlPzogYm9vbGVhblxuICAvKipcbiAgICog5oyH5a6a5q2l6aqk77yM55So5Lul5b+r5o235LiK5LiA5q2l44CB5LiL5LiA5q2l55qE6ZyA5rGC44CCXG4gICAqL1xuICBzdGVwcz86IEFycmF5PElTdGVwUHJvcHM+XG4gIC8qKlxuICAgKiDpmYTliqDmoLflvI/vvIzms6jmhI8gRGlhbG9nIOaJgOacieeahOWxnuaAp+S8mumZhOWKoOWIsOWGhemDqOeahOWGheWuueWFg+e0oOS4iu+8jOiAjOS4jeaYr+WMheWQqyBtYXNrIOeahOacgOWkluWxguWFg+e0oFxuICAgKi9cbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiDlr7nor53moYbmoIfpophcbiAgICovXG4gIHRpdGxlPzogbnVsbCB8IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICogY29uZmlybSDkuLrlj5bmtojjgIHnoa7orqTmjInpkq7vvJtpbmZvcm0g5Li65Y+q5pyJ56Gu6K6k5oyJ6ZKuXG4gICAqL1xuICB0eXBlPzogXCJjb25maXJtXCIgfCBcImluZm9ybVwiXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKbmmL7npLpcbiAgICovXG4gIHZpc2libGU/OiBudWxsIHwgYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEaWFsb2dTdGF0ZSB7XG4gIHZpc2libGU/OiBib29sZWFuXG4gIGN1cnJlbnRTdGVwOiBudW1iZXJcbiAgaGFzRXZlck9wZW5lZD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiDlr7nor53moYbnlKjkuo7lhajlsYDmgKfnmoTlj43ppojvvIzpgJrluLjliIbkuLrigJznoa7orqTmk43kvZzigJ3kuI7igJzlkYrnn6Xkv6Hmga/igJ3jgIJcbiAqIOehruiupOaTjeS9nOeUqOS6juivoumXrueUqOaIt+KAnOaTjeS9nOaYr+WQpue7p+e7rei/m+ihjO+8n+KAne+8jOWmguWkp+mDqOWIhueahOS6jOasoeehruiupOWPjemmiOOAguWRiuefpeS/oeaBr+WImeeUqOS6juefpeS8mueUqOaIt+afkOS4quWPiuaXtuWPjemmiO+8jOWmguS/oeaBr+aPkOS6pOaIkOWKn+OAgeWksei0peetieOAglxuICovXG5jbGFzcyBEaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SURpYWxvZ1Byb3BzLCBJRGlhbG9nU3RhdGU+IHtcbiAgcHVibGljIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICog5YWz6Zet5ZCO77yIdHJhbnNpdGlvbiDnu5PmnZ/lkI7vvInnmoQgaGFuZGxlclxuICAgICAqL1xuICAgIGFmdGVyQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9riBib2R5IOagt+W8j1xuICAgICAqL1xuICAgIGJvZHlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDlj5bmtojmjInpkq7nmoQgcHJvcHPvvIzlj4LogIMgQnV0dG9uIFByb3BzXG4gICAgICovXG4gICAgY2FuY2VsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog5Y+W5raI5oyJ6ZKu55qEIOaWh+Wtl1xuICAgICAqL1xuICAgIGNhbmNlbFRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIGRpYWxvZyDmiZPlvIDlkozlhbPpl63ml7bpg73kvJrmm7TmlLkgZG9jdW1lbnQuYm9keS5zdHlsZeOAguWPr+S7peS7peatpCBwcm9wIOaOp+WItuaYr+WQpuS/ruaUueOAguS9v+eUqOWcuuaZr+Wmgu+8mua1ruWxguWGheW8ueWHuiBkaWFsb2dcbiAgICAgKi9cbiAgICBjaGFuZ2VCb2R5U3R5bGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWtkOiKgueCuVxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDpmYTliqDnsbvlkI3vvIzms6jmhI8gRGlhbG9nIOaJgOacieeahOWxnuaAp+S8mumZhOWKoOWIsOWGhemDqOeahOWGheWuueWFg+e0oOS4iu+8jOiAjOS4jeaYr+WMheWQqyBtYXNrIOeahOacgOWkluWxguWFg+e0oFxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDnoa7orqTmjInpkq7nmoQgcHJvcHPvvIzlj4LogIMgQnV0dG9uIFByb3BzXG4gICAgICovXG4gICAgY29uZmlybVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOehruiupOaMiemSrueahCDmloflrZdcbiAgICAgKi9cbiAgICBjb25maXJtVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog5oyH5a6a5b2T5YmN55qEIHN0ZXDvvIzku4XlnKjkvb/nlKggc3RlcHMgcHJvcCDml7bmnInkvZznlKhcbiAgICAgKi9cbiAgICBjdXJyZW50U3RlcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiDmjIflrprpu5jorqTnmoTotbflp4sgc3RlcO+8jOS7heWcqOS9v+eUqCBzdGVwcyBwcm9wIOaXtuacieS9nOeUqFxuICAgICAqL1xuICAgIGRlZmF1bHRDdXJyZW50U3RlcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiDlhoXpg6jpqbHliqjvvJrmmK/lkKbpu5jorqTmmL7npLpcbiAgICAgKi9cbiAgICBkZWZhdWx0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5piv5ZCm5q+P5qyhIHZpc2libGU6IGZhbHNlIOmDvemUgOavgSBkb21cbiAgICAgKi9cbiAgICBkZXN0cm95QWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5piv5ZCm5pSv5oyBIEVTQyDlhbPpl61cbiAgICAgKi9cbiAgICBlc2NhcGVLZXlDbG9zYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5a6M5YWo6Ieq5a6a5LmJIGZvb3RlciDnmoTlhoXlrrnvvIzlpoLmnpzmg7PopoHmlLnlj5ggZm9vdGVyIOeItue6p+eahOagt+W8j++8jOS9v+eUqCBmb290ZXJTdHlsZSBQcm9wXG4gICAgICovXG4gICAgZm9vdGVyRWxlbWVudDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog6K6+572uIGZvb3RlciDmoLflvI9cbiAgICAgKi9cbiAgICBmb290ZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDmjIflrprlvLnlh7rlsYLnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9kee+8jOexu+S8vOS6jiBUb29sdGlwIOeahCBnZXRQb3B1cENvbnRhaW5lclxuICAgICAqL1xuICAgIGdldENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogaGVhZGVyIOagh+mimOS4i+eahOWGheWuuVxuICAgICAqL1xuICAgIGhlYWRlckNvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOWujOWFqOiHquWumuS5iSBoZWFkZXIg55qE5YaF5a65XG4gICAgICovXG4gICAgaGVhZGVyRWxlbWVudDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog6K6+572uIGhlYWRlciDmoLflvI9cbiAgICAgKi9cbiAgICBoZWFkZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDngrnlh7sgbWFzayDmmK/lkKbop6blj5EgY2FuY2VsIOS6i+S7tlxuICAgICAqL1xuICAgIG1hc2tDbG9zYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog54K55Ye75Y+W5raI5oyJ6ZKu44CB5Y+z5LiK6KeS5YWz6Zet5pe255qEIGhhbmRsZXJcbiAgICAgKi9cbiAgICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog54K55Ye756Gu6K6k5oyJ6ZKu5pe255qEIGhhbmRsZXJcbiAgICAgKi9cbiAgICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOmZhOWKoOagt+W8j++8jOazqOaEjyBEaWFsb2cg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAgICovXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog5a+56K+d5qGG5qCH6aKYXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIGNvbmZpcm0g5Li65Y+W5raI44CB56Gu6K6k5oyJ6ZKu77ybaW5mb3JtIOS4uuWPquacieehruiupOaMiemSrlxuICAgICAqL1xuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJjb25maXJtXCIsIFwiaW5mb3JtXCJdKSxcbiAgICAvKipcbiAgICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKbmmL7npLpcbiAgICAgKi9cbiAgICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBJRGlhbG9nUHJvcHMgPSB7XG4gICAgYWZ0ZXJDbG9zZTogbnVsbCxcbiAgICBib2R5U3R5bGU6IHt9LFxuICAgIGNhbmNlbFByb3BzOiB7fSxcbiAgICBjYW5jZWxUZXh0OiBcIuWPlua2iFwiLFxuICAgIGNoYW5nZUJvZHlTdHlsZTogdHJ1ZSxcbiAgICBjaGlsZHJlbjogbnVsbCxcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBjb25maXJtUHJvcHM6IHt9LFxuICAgIGNvbmZpcm1UZXh0OiBcIuehruiupFwiLFxuICAgIGN1cnJlbnRTdGVwOiBudWxsLFxuICAgIGRlZmF1bHRDdXJyZW50U3RlcDogbnVsbCxcbiAgICBkZWZhdWx0VmlzaWJsZTogbnVsbCxcbiAgICBkZXN0cm95QWZ0ZXJDbG9zZTogZmFsc2UsXG4gICAgZXNjYXBlS2V5Q2xvc2FibGU6IHRydWUsXG4gICAgZm9vdGVyRWxlbWVudDogdW5kZWZpbmVkLFxuICAgIGZvb3RlclN0eWxlOiB7fSxcbiAgICBnZXRDb250YWluZXI6IG51bGwsXG4gICAgaGVhZGVyQ29udGVudDogbnVsbCxcbiAgICBoZWFkZXJFbGVtZW50OiB1bmRlZmluZWQsXG4gICAgaGVhZGVyU3R5bGU6IHt9LFxuICAgIG1hc2tDbG9zYWJsZTogZmFsc2UsXG4gICAgb25DYW5jZWw6IG51bGwsXG4gICAgb25Db25maXJtOiBudWxsLFxuICAgIHN0eWxlOiB7fSxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB0eXBlOiBcImNvbmZpcm1cIixcbiAgICB2aXNpYmxlOiBudWxsLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbmZvOiBhbnlcblxuICBwdWJsaWMgc3RhdGljIHN1Y2Nlc3M6IGFueVxuXG4gIHB1YmxpYyBzdGF0aWMgd2FybmluZzogYW55XG5cbiAgcHVibGljIHN0YXRpYyBkYW5nZXI6IGFueVxuXG4gIHB1YmxpYyBzdGF0aWMgY29uZmlybTogYW55XG5cbiAgcHVibGljIHN0YXRpYyBpbmZvcm06IGFueVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gKFxuICAgIHsgY3VycmVudFN0ZXAsIHZpc2libGUgfTogSURpYWxvZ1Byb3BzLFxuICAgIHsgaGFzRXZlck9wZW5lZCB9OiBJRGlhbG9nU3RhdGVcbiAgKSA9PiB7XG4gICAgY29uc3QgbmV3U3RhdGU6IFBhcnRpYWw8SURpYWxvZ1N0YXRlPiA9IHt9XG4gICAgaWYgKGN1cnJlbnRTdGVwICE9PSBudWxsKSB7XG4gICAgICBuZXdTdGF0ZS5jdXJyZW50U3RlcCA9IGN1cnJlbnRTdGVwXG4gICAgfVxuICAgIGlmICh2aXNpYmxlICE9PSBudWxsKSB7XG4gICAgICBuZXdTdGF0ZS52aXNpYmxlID0gdmlzaWJsZVxuICAgICAgaWYgKCFoYXNFdmVyT3BlbmVkICYmIHZpc2libGUpIHtcbiAgICAgICAgbmV3U3RhdGUuaGFzRXZlck9wZW5lZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld1N0YXRlKS5sZW5ndGggPiAwID8gbmV3U3RhdGUgOiBudWxsXG4gIH1cblxuICAvKipcbiAgICog5L+d5a2Y6IqC54K55oyC6L2955qE5a+56LGhXG4gICAqL1xuICBwdWJsaWMgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCB8IG51bGxcblxuICAvKipcbiAgICog5L+d5a2Y6aG16Z2i5piv5ZCmIG92ZXJmbG93XG4gICAqL1xuICBwdWJsaWMgYm9keUlzT3ZlcmZsb3dpbmc6IGJvb2xlYW5cblxuICAvKipcbiAgICog5L+d5a2Y5b2T5YmN5rWP6KeI5Zmo55qE5rua5Yqo5p2h5a695bqmXG4gICAqL1xuICBwdWJsaWMgc2Nyb2xsYmFyV2lkdGg6IG51bWJlclxuXG4gIHB1YmxpYyBkaWFsb2c6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIHdyYXBwZXI6IEhUTUxEaXZFbGVtZW50XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElEaWFsb2dQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAsIGRlZmF1bHRDdXJyZW50U3RlcCwgdmlzaWJsZSwgZGVmYXVsdFZpc2libGUgfSA9IHByb3BzXG4gICAgY29uc3QgdmlzaWJsZVN0YXRlID0gdmlzaWJsZSAhPT0gbnVsbCA/ICEhdmlzaWJsZSA6ICEhZGVmYXVsdFZpc2libGVcbiAgICBjb25zdCBjdXJyZW50U3RlcFN0YXRlID1cbiAgICAgIGN1cnJlbnRTdGVwICE9PSBudWxsID8gY3VycmVudFN0ZXAgOiBkZWZhdWx0Q3VycmVudFN0ZXBcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aXNpYmxlOiB2aXNpYmxlU3RhdGUsXG4gICAgICBjdXJyZW50U3RlcDogY3VycmVudFN0ZXBTdGF0ZSB8fCAwLFxuICAgICAgaGFzRXZlck9wZW5lZDogdmlzaWJsZVN0YXRlLFxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzYXZlRGlhbG9nID0gKG5vZGU6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5kaWFsb2cgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgcmVzZXRTY3JvbGxiYXJQYWRkaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2hhbmdlQm9keVN0eWxlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKGNoYW5nZUJvZHlTdHlsZSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIlxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRTY3JvbGxiYXJQYWRkaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2hhbmdlQm9keVN0eWxlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKGNoYW5nZUJvZHlTdHlsZSkge1xuICAgICAgY29uc3QgeyBpbm5lcldpZHRoIH0gPSB3aW5kb3dcbiAgICAgIHRoaXMuYm9keUlzT3ZlcmZsb3dpbmcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgaW5uZXJXaWR0aFxuICAgICAgaWYgKHRoaXMuYm9keUlzT3ZlcmZsb3dpbmcgJiYgIWRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGggPSBnZXRTY3JvbGxCYXJTaXplKClcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYmFyV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5zY3JvbGxiYXJXaWR0aH1weGBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2FuY2VsQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2FuY2VsUHJvcHMsIGNhbmNlbFRleHQsIHN0ZXBzLCB0eXBlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBjdXJyZW50U3RlcCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGRlZmF1bHRUZXh0ID0gY3VycmVudFN0ZXAgPT09IDAgPyBcIuWPlua2iFwiIDogXCLkuIrkuIDmraVcIlxuICAgIGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gKHByb3BzPzogSUJ1dHRvblByb3BzLCB0ZXh0ID0gZGVmYXVsdFRleHQpID0+IChcbiAgICAgIDxCdXR0b24ga2V5PVwiY2FuY2VsXCIgb25DbGljaz17dGhpcy5oYW5kbGVDYW5jZWx9IHsuLi5wcm9wc30+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9CdXR0b24+XG4gICAgKVxuXG4gICAgaWYgKHN0ZXBzICYmIHN0ZXBzLmxlbmd0aCkge1xuICAgICAgY29uc3QgcHJvcHMgPSBzdGVwc1tjdXJyZW50U3RlcF0uY2FuY2VsUHJvcHNcbiAgICAgIGNvbnN0IHRleHQgPSBzdGVwc1tjdXJyZW50U3RlcF0uY2FuY2VsVGV4dFxuICAgICAgcmV0dXJuIGdlbmVyYXRlQnV0dG9uKHByb3BzLCB0ZXh0KVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gXCJpbmZvcm1cIikge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIGdlbmVyYXRlQnV0dG9uKGNhbmNlbFByb3BzLCBjYW5jZWxUZXh0KVxuICB9XG5cbiAgcHVibGljIGdldENvbmZpcm1CdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb25maXJtUHJvcHMsIGNvbmZpcm1UZXh0LCBzdGVwcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IChwcm9wcz86IElCdXR0b25Qcm9wcywgdGV4dD86IHN0cmluZykgPT4gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBrZXk9XCJwcmltYXJ5XCJcbiAgICAgICAgaW50ZW50PVwicHJpbWFyeVwiXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ29uZmlybX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvQnV0dG9uPlxuICAgIClcblxuICAgIGlmIChzdGVwcyAmJiBzdGVwcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gc3RlcHNbY3VycmVudFN0ZXBdLmNvbmZpcm1Qcm9wc1xuICAgICAgY29uc3QgdGV4dCA9XG4gICAgICAgIHN0ZXBzW2N1cnJlbnRTdGVwXS5jb25maXJtVGV4dCB8fFxuICAgICAgICAoY3VycmVudFN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAtIDEgPyBcIuWujOaIkFwiIDogXCLkuIvkuIDmraVcIilcbiAgICAgIHJldHVybiBnZW5lcmF0ZUJ1dHRvbihwcm9wcywgdGV4dClcbiAgICB9XG4gICAgcmV0dXJuIGdlbmVyYXRlQnV0dG9uKGNvbmZpcm1Qcm9wcywgY29uZmlybVRleHQgfHwgXCLnoa7orqRcIilcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGVzY2FwZUtleUNsb3NhYmxlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKGVzY2FwZUtleUNsb3NhYmxlICYmIGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ2FuY2VsID0gKHR5cGU/OiBhbnkpID0+IHtcbiAgICBjb25zdCB7IG9uQ2FuY2VsLCBzdGVwcywgdmlzaWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAodHlwZSA9PT0gXCJjbG9zZVwiIHx8ICFzdGVwcyB8fCAhc3RlcHMubGVuZ3RoKSB7XG4gICAgICBpZiAodmlzaWJsZSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNhbmNlbCkge1xuICAgICAgICBvbkNhbmNlbCgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgb25DYW5jZWw6IG9uU3RlcENhbmNlbCB9ID0gc3RlcHNbY3VycmVudFN0ZXBdXG4gICAgICBpZiAob25TdGVwQ2FuY2VsKSB7XG4gICAgICAgIG9uU3RlcENhbmNlbCgpXG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFN0ZXAgPT09IDApIHtcbiAgICAgICAgaWYgKHZpc2libGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTdGVwOiBjdXJyZW50U3RlcCAtIDEgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ29uZmlybSA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ29uZmlybSwgc3RlcHMsIHZpc2libGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGN1cnJlbnRTdGVwIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHN0ZXBzICYmIHN0ZXBzLmxlbmd0aCkge1xuICAgICAgY29uc3QgeyBvbkNvbmZpcm06IG9uU3RlcENvbmZpcm0gfSA9IHN0ZXBzW2N1cnJlbnRTdGVwXVxuICAgICAgaWYgKG9uU3RlcENvbmZpcm0pIHtcbiAgICAgICAgb25TdGVwQ29uZmlybSgpXG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKHZpc2libGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTdGVwOiBjdXJyZW50U3RlcCArIDEgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZpc2libGUgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IGZhbHNlIH0pXG4gICAgICB9XG4gICAgICBpZiAob25Db25maXJtKSB7XG4gICAgICAgIG9uQ29uZmlybSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uTGVhdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhZnRlckNsb3NlLCBkZXN0cm95QWZ0ZXJDbG9zZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0aGlzLndyYXBwZXIpIHtcbiAgICAgIHRoaXMud3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9XG4gICAgdGhpcy5yZXNldFNjcm9sbGJhclBhZGRpbmcoKVxuXG4gICAgaWYgKGFmdGVyQ2xvc2UpIHtcbiAgICAgIGFmdGVyQ2xvc2UoKVxuICAgIH1cblxuICAgIGlmIChkZXN0cm95QWZ0ZXJDbG9zZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc0V2ZXJPcGVuZWQ6IGZhbHNlIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGdldENvbnRhaW5lciB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyXG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgaWYgKGdldENvbnRhaW5lcikge1xuICAgICAgZ2V0Q29udGFpbmVyKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgcHVibGljIGhhbmRsZUVudGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZXNjYXBlS2V5Q2xvc2FibGUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodGhpcy53cmFwcGVyKSB7XG4gICAgICBpZiAoZXNjYXBlS2V5Q2xvc2FibGUpIHtcbiAgICAgICAgdGhpcy53cmFwcGVyLmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29tcG9uZW50ID0gKG9wdGlvbnM/OiB7IHZpc2libGU6IGJvb2xlYW4gfSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGJvZHlTdHlsZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZm9vdGVyRWxlbWVudCxcbiAgICAgIGZvb3RlclN0eWxlLFxuICAgICAgaGVhZGVyQ29udGVudCxcbiAgICAgIGhlYWRlckVsZW1lbnQsXG4gICAgICBoZWFkZXJTdHlsZSxcbiAgICAgIG1hc2tDbG9zYWJsZSxcbiAgICAgIHN0ZXBzLFxuICAgICAgc3R5bGUsXG4gICAgICB0aXRsZSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVzdFByb3BzID0gb21pdChvdGhlclByb3BzLCBbXG4gICAgICBcImFmdGVyQ2xvc2VcIixcbiAgICAgIFwiY2FuY2VsUHJvcHNcIixcbiAgICAgIFwiY2FuY2VsVGV4dFwiLFxuICAgICAgXCJjaGFuZ2VCb2R5U3R5bGVcIixcbiAgICAgIFwiY29uZmlybVByb3BzXCIsXG4gICAgICBcImNvbmZpcm1UZXh0XCIsXG4gICAgICBcImN1cnJlbnRTdGVwXCIsXG4gICAgICBcImRlZmF1bHRDdXJyZW50U3RlcFwiLFxuICAgICAgXCJkZWZhdWx0VmlzaWJsZVwiLFxuICAgICAgXCJkZXN0cm95QWZ0ZXJDbG9zZVwiLFxuICAgICAgXCJlc2NhcGVLZXlDbG9zYWJsZVwiLFxuICAgICAgXCJnZXRDb250YWluZXJcIixcbiAgICAgIFwib25DYW5jZWxcIixcbiAgICAgIFwib25Db25maXJtXCIsXG4gICAgICBcInR5cGVcIixcbiAgICAgIFwidmlzaWJsZVwiLFxuICAgIF0pXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LWlubmVyYClcbiAgICBjb25zdCB7IGN1cnJlbnRTdGVwIH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IHsgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChvcHRpb25zICYmIE9iamVjdC5rZXlzKG9wdGlvbnMpLmluY2x1ZGVzKFwidmlzaWJsZVwiKSkge1xuICAgICAgOyh7IHZpc2libGUgfSA9IG9wdGlvbnMpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXt0aGlzLnNhdmVEaWFsb2d9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXdyYXBwZXJgfVxuICAgICAgICAgIHJlZj17d3JhcHBlciA9PiB7XG4gICAgICAgICAgICBpZiAod3JhcHBlcikge1xuICAgICAgICAgICAgICB0aGlzLndyYXBwZXIgPSB3cmFwcGVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiB2aXNpYmxlID8gXCJmbGV4XCIgOiBcIlwiIH19XG4gICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICA+XG4gICAgICAgICAgPEFuaW1hdGVcbiAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPXtgJHtwcmVmaXh9LW1hc2tgfVxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dmlzaWJsZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbWFza2B9XG4gICAgICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXNrQ2xvc2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDYW5jZWwoXCJjbG9zZVwiKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQW5pbWF0ZT5cbiAgICAgICAgICB7LyoqXG4gICAgICAgICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMzNDU1MzQyXG4gICAgICAgICAgICogMS4g5pyA5aSW5bGCIG1hcmdpbjogYXV0byDpnZ7luLjph43opoHjgIJcbiAgICAgICAgICAgKiBEaWFsb2cg55qE5a695bqm5piv6Ieq6YCC5bqU55qE77yM5Zug5q2k5L2/55So5LqGIGRpc3BsYXk6IGZsZXgg5aSE55CG5bGF5Lit77yM6L+Z5L2/5b6X5a2Q5YWD57Sg5YW35pyJ5YyF6KO55oCn77yM5Zug5q2k5a695bqm5omN6IO955Sx5YaF5a655omA5Yaz5a6a77ybXG4gICAgICAgICAgICogbWFyZ2luOiBhdXRvOyDmmK/kuLrkuoblrozlloQgZmxleGJveCBvdmVyZmxvdyDnmoTmoLflvI/jgIJcbiAgICAgICAgICAgKiAyLiB6SW5kZXg6IDEg5piv5Li65LqG6KaG55uW5ZyoIG1hc2sg5LiK44CCXG4gICAgICAgICAgICovfVxuICAgICAgICAgIDxBbmltYXRlXG4gICAgICAgICAgICBvbkFwcGVhcj17dGhpcy5oYW5kbGVFbnRlcn1cbiAgICAgICAgICAgIG9uRW50ZXI9e3RoaXMuaGFuZGxlRW50ZXJ9XG4gICAgICAgICAgICBvbkxlYXZlPXt0aGlzLm9uTGVhdmV9XG4gICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT17cHJlZml4fVxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXG4gICAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Zpc2libGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHN0eWxlPXtzdHlsZX0gey4uLnJlc3RQcm9wc30+XG4gICAgICAgICAgICAgICAge2hlYWRlckVsZW1lbnQgPT09IG51bGxcbiAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgOiBoZWFkZXJFbGVtZW50IHx8IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1oZWFkZXJgfSBzdHlsZT17aGVhZGVyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9ezB9IGNsYXNzTmFtZT17YCR7cHJlZml4fS10aXRsZWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlckNvbnRlbnQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taGVhZGVyQ29udGVudGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyQ29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNsb3NlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyNH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNhbmNlbChcImNsb3NlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPixcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tYm9keWB9IHN0eWxlPXtib2R5U3R5bGV9PlxuICAgICAgICAgICAgICAgICAge3N0ZXBzICYmIHN0ZXBzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICA/IHN0ZXBzW2N1cnJlbnRTdGVwXS5jaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICA6IGNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtmb290ZXJFbGVtZW50ID09PSBudWxsID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWZvb3RlcmB9IHN0eWxlPXtmb290ZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIHtmb290ZXJFbGVtZW50IHx8IFtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENhbmNlbEJ1dHRvbigpLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29uZmlybUJ1dHRvbigpLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQW5pbWF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvKipcbiAgICogZGlkbW91bnQg55SxIHBvcnRhbCDnmoQgb25DaGlsZHJlbk1vdW5077yM5Zug5Li6IGRpZG1vdW50IOaXtiB3cmFwcGVyIOWPr+iDveW5tuS4jeWcqCBkb21cbiAgICovXG4gIHB1YmxpYyBoYW5kbGVDaGlsZHJlbk1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICh2aXNpYmxlICYmIHRoaXMud3JhcHBlcikge1xuICAgICAgdGhpcy5zZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlID0gKFxuICAgIF86IElEaWFsb2dQcm9wcyxcbiAgICB7IHZpc2libGU6IHZpc2libGVQcmV2IH06IElEaWFsb2dTdGF0ZVxuICApID0+IHtcbiAgICBjb25zdCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAodmlzaWJsZSAhPT0gdmlzaWJsZVByZXYgJiYgdmlzaWJsZSAmJiB0aGlzLndyYXBwZXIpIHtcbiAgICAgIHRoaXMuc2V0U2Nyb2xsYmFyUGFkZGluZygpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsYmFyUGFkZGluZygpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhhc0V2ZXJPcGVuZWQgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoIWhhc0V2ZXJPcGVuZWQpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsIG9uQ2hpbGRyZW5Nb3VudD17dGhpcy5oYW5kbGVDaGlsZHJlbk1vdW50fT5cbiAgICAgICAge3RoaXMuZ2V0Q29tcG9uZW50KCl9XG4gICAgICA8L1BvcnRhbD5cbiAgICApXG4gIH1cbn1cblxucG9seWZpbGwoRGlhbG9nKVxuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2dcbiJdfQ==