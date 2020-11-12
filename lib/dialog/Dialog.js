"use strict";

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL0RpYWxvZy50c3giXSwibmFtZXMiOlsicHJlZml4IiwiRGlhbG9nIiwicHJvcHMiLCJjb250YWluZXIiLCJib2R5SXNPdmVyZmxvd2luZyIsInNjcm9sbGJhcldpZHRoIiwiZGlhbG9nIiwid3JhcHBlciIsInNhdmVEaWFsb2ciLCJub2RlIiwicmVzZXRTY3JvbGxiYXJQYWRkaW5nIiwiY2hhbmdlQm9keVN0eWxlIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBhZGRpbmdSaWdodCIsInNldFNjcm9sbGJhclBhZGRpbmciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJ1bmRlZmluZWQiLCJnZXRDYW5jZWxCdXR0b24iLCJjYW5jZWxQcm9wcyIsImNhbmNlbFRleHQiLCJzdGVwcyIsInR5cGUiLCJjdXJyZW50U3RlcCIsInN0YXRlIiwiZGVmYXVsdFRleHQiLCJnZW5lcmF0ZUJ1dHRvbiIsInRleHQiLCJoYW5kbGVDYW5jZWwiLCJsZW5ndGgiLCJnZXRDb25maXJtQnV0dG9uIiwiY29uZmlybVByb3BzIiwiY29uZmlybVRleHQiLCJoYW5kbGVDb25maXJtIiwiaGFuZGxlS2V5RG93biIsImUiLCJlc2NhcGVLZXlDbG9zYWJsZSIsImtleUNvZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNhbmNlbCIsInZpc2libGUiLCJzZXRTdGF0ZSIsIm9uU3RlcENhbmNlbCIsIm9uQ29uZmlybSIsIm9uU3RlcENvbmZpcm0iLCJvbkxlYXZlIiwiYWZ0ZXJDbG9zZSIsImRlc3Ryb3lBZnRlckNsb3NlIiwiZGlzcGxheSIsImhhc0V2ZXJPcGVuZWQiLCJnZXRDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVFbnRlciIsImZvY3VzIiwiZ2V0Q29tcG9uZW50Iiwib3B0aW9ucyIsImJvZHlTdHlsZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZm9vdGVyRWxlbWVudCIsImZvb3RlclN0eWxlIiwiaGVhZGVyQ29udGVudCIsImhlYWRlckVsZW1lbnQiLCJoZWFkZXJTdHlsZSIsIm1hc2tDbG9zYWJsZSIsInRpdGxlIiwib3RoZXJQcm9wcyIsInJlc3RQcm9wcyIsImNsYXNzU2V0IiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwibWFyZ2luIiwiekluZGV4IiwiaGFuZGxlQ2hpbGRyZW5Nb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsIl8iLCJ2aXNpYmxlUHJldiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZGVmYXVsdEN1cnJlbnRTdGVwIiwiZGVmYXVsdFZpc2libGUiLCJ2aXNpYmxlU3RhdGUiLCJjdXJyZW50U3RlcFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwib2JqZWN0IiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwiaW5mbyIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwiZGFuZ2VyIiwiY29uZmlybSIsImluZm9ybSIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm5ld1N0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLGFBQWY7O0lBbUlNQyxNOzs7OztBQThMSixrQkFBWUMsTUFBWixFQUFpQztBQUFBOztBQUFBOztBQUMvQiw4QkFBTUEsTUFBTjtBQUQrQixVQWhCMUJDLFNBZ0IwQjtBQUFBLFVBWDFCQyxpQkFXMEI7QUFBQSxVQU4xQkMsY0FNMEI7QUFBQSxVQUoxQkMsTUFJMEI7QUFBQSxVQUYxQkMsT0FFMEI7O0FBQUEsVUFjMUJDLFVBZDBCLEdBY2IsVUFBQ0MsSUFB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O0FBQzdCOEQsTUFBQUEsUUFBUSxDQUFDckQsYUFBVCxHQUF5QixJQUF6QjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT3FCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZK0IsUUFBWixFQUFzQnpFLE1BQXRCLEdBQStCLENBQS9CLEdBQW1DeUUsUUFBbkMsR0FBOEMsSUFBckQ7QUFDRCxDOztBQW1ZSCxxQ0FBU3pHLE1BQVQ7ZUFFZUEsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCB7IHBvbHlmaWxsIH0gZnJvbSBcInJlYWN0LWxpZmVjeWNsZXMtY29tcGF0XCJcbmltcG9ydCBnZXRTY3JvbGxCYXJTaXplIGZyb20gXCJyYy11dGlsL2xpYi9nZXRTY3JvbGxCYXJTaXplXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBBbmltYXRlIGZyb20gXCJyYy1hbmltYXRlXCJcbmltcG9ydCBvbWl0IGZyb20gXCIuLi9fdXRpbC9vbWl0XCJcbmltcG9ydCBQb3J0YWwgZnJvbSBcIi4uL3BvcnRhbFwiXG5pbXBvcnQgQnV0dG9uLCB7IElCdXR0b25Qcm9wcyB9IGZyb20gXCIuLi9idXR0b25cIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1kaWFsb2dcIlxuXG5pbnRlcmZhY2UgSVN0ZXBQcm9wcyB7XG4gIC8qKlxuICAgKiDlj5bmtojmjInpkq7nmoQgcHJvcHPvvIzlj4LogIMgQnV0dG9uIFByb3BzXG4gICAqL1xuICBjYW5jZWxQcm9wcz86IFBhcnRpYWw8SUJ1dHRvblByb3BzPlxuICAvKipcbiAgICog5Y+W5raI5oyJ6ZKu55qEIOaWh+Wtl1xuICAgKi9cbiAgY2FuY2VsVGV4dD86IHN0cmluZ1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog56Gu6K6k5oyJ6ZKu55qEIHByb3Bz77yM5Y+C6ICDIEJ1dHRvbiBQcm9wc1xuICAgKi9cbiAgY29uZmlybVByb3BzPzogUGFydGlhbDxJQnV0dG9uUHJvcHM+XG4gIC8qKlxuICAgKiDnoa7orqTmjInpkq7nmoQg5paH5a2XXG4gICAqL1xuICBjb25maXJtVGV4dD86IHN0cmluZ1xuICAvKipcbiAgICog54K55Ye75Y+W5raI5oyJ6ZKu44CB5Y+z5LiK6KeS5YWz6Zet5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2FuY2VsPzogKCgpID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog54K55Ye756Gu6K6k5oyJ6ZKu5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ29uZmlybT86ICgoKSA9PiB2b2lkKSB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGlhbG9nUHJvcHMgZXh0ZW5kcyBJU3RlcFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlhbPpl63lkI7vvIh0cmFuc2l0aW9uIOe7k+adn+WQju+8ieeahCBoYW5kbGVyXG4gICAqL1xuICBhZnRlckNsb3NlPzogKCgpID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog6K6+572uIGJvZHkg5qC35byPXG4gICAqL1xuICBib2R5U3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiBkaWFsb2cg5omT5byA5ZKM5YWz6Zet5pe26YO95Lya5pu05pS5IGRvY3VtZW50LmJvZHkuc3R5bGXjgILlj6/ku6Xku6XmraQgcHJvcCDmjqfliLbmmK/lkKbkv67mlLnjgILkvb/nlKjlnLrmma/lpoLvvJrmta7lsYLlhoXlvLnlh7ogZGlhbG9nXG4gICAqL1xuICBjaGFuZ2VCb2R5U3R5bGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI3vvIzms6jmhI8gRGlhbG9nIOaJgOacieeahOWxnuaAp+S8mumZhOWKoOWIsOWGhemDqOeahOWGheWuueWFg+e0oOS4iu+8jOiAjOS4jeaYr+WMheWQqyBtYXNrIOeahOacgOWkluWxguWFg+e0oFxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmjIflrprlvZPliY3nmoQgc3RlcO+8jOS7heWcqOS9v+eUqCBzdGVwcyBwcm9wIOaXtuacieS9nOeUqFxuICAgKi9cbiAgY3VycmVudFN0ZXA/OiBudWxsIHwgbnVtYmVyXG4gIC8qKlxuICAgKiDmjIflrprpu5jorqTnmoTotbflp4sgc3RlcO+8jOS7heWcqOS9v+eUqCBzdGVwcyBwcm9wIOaXtuacieS9nOeUqFxuICAgKi9cbiAgZGVmYXVsdEN1cnJlbnRTdGVwPzogbnVsbCB8IG51bWJlclxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya5piv5ZCm6buY6K6k5pi+56S6XG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZT86IG51bGwgfCBib29sZWFuXG4gIC8qKlxuICAgKiDmmK/lkKbmr4/mrKEgdmlzaWJsZTogZmFsc2Ug6YO96ZSA5q+BIGRvbVxuICAgKi9cbiAgZGVzdHJveUFmdGVyQ2xvc2U/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIEgRVNDIOWFs+mXrVxuICAgKi9cbiAgZXNjYXBlS2V5Q2xvc2FibGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlrozlhajoh6rlrprkuYkgZm9vdGVyIOeahOWGheWuue+8jOWmguaenOaDs+imgeaUueWPmCBmb290ZXIg54i257qn55qE5qC35byP77yM5L2/55SoIGZvb3RlclN0eWxlIFByb3BcbiAgICovXG4gIGZvb3RlckVsZW1lbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOiuvue9riBmb290ZXIg5qC35byPXG4gICAqL1xuICBmb290ZXJTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOaMh+WumuW8ueWHuuWxgueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R577yM57G75Ly85LqOIFRvb2x0aXAg55qEIGdldFBvcHVwQ29udGFpbmVyXG4gICAqL1xuICBnZXRDb250YWluZXI/OiAoKCkgPT4gSFRNTEVsZW1lbnQpIHwgbnVsbFxuICAvKipcbiAgICogaGVhZGVyIOagh+mimOS4i+eahOWGheWuuVxuICAgKi9cbiAgaGVhZGVyQ29udGVudD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog5a6M5YWo6Ieq5a6a5LmJIGhlYWRlciDnmoTlhoXlrrlcbiAgICovXG4gIGhlYWRlckVsZW1lbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOiuvue9riBoZWFkZXIg5qC35byPXG4gICAqL1xuICBoZWFkZXJTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOeCueWHuyBtYXNrIOaYr+WQpuinpuWPkSBjYW5jZWwg5LqL5Lu2XG4gICAqL1xuICBtYXNrQ2xvc2FibGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmjIflrprmraXpqqTvvIznlKjku6Xlv6vmjbfkuIrkuIDmraXjgIHkuIvkuIDmraXnmoTpnIDmsYLjgIJcbiAgICovXG4gIHN0ZXBzPzogQXJyYXk8SVN0ZXBQcm9wcz5cbiAgLyoqXG4gICAqIOmZhOWKoOagt+W8j++8jOazqOaEjyBEaWFsb2cg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAqL1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOWvueivneahhuagh+mimFxuICAgKi9cbiAgdGl0bGU/OiBudWxsIHwgUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiBjb25maXJtIOS4uuWPlua2iOOAgeehruiupOaMiemSru+8m2luZm9ybSDkuLrlj6rmnInnoa7orqTmjInpkq5cbiAgICovXG4gIHR5cGU/OiBcImNvbmZpcm1cIiB8IFwiaW5mb3JtXCJcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muaYr+WQpuaYvuekulxuICAgKi9cbiAgdmlzaWJsZT86IG51bGwgfCBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ1N0YXRlIHtcbiAgdmlzaWJsZT86IGJvb2xlYW5cbiAgY3VycmVudFN0ZXA6IG51bWJlclxuICBoYXNFdmVyT3BlbmVkPzogYm9vbGVhblxufVxuXG4vKipcbiAqIOWvueivneahhueUqOS6juWFqOWxgOaAp+eahOWPjemmiO+8jOmAmuW4uOWIhuS4uuKAnOehruiupOaTjeS9nOKAneS4juKAnOWRiuefpeS/oeaBr+KAneOAglxuICog56Gu6K6k5pON5L2c55So5LqO6K+i6Zeu55So5oi34oCc5pON5L2c5piv5ZCm57un57ut6L+b6KGM77yf4oCd77yM5aaC5aSn6YOo5YiG55qE5LqM5qyh56Gu6K6k5Y+N6aaI44CC5ZGK55+l5L+h5oGv5YiZ55So5LqO55+l5Lya55So5oi35p+Q5Liq5Y+K5pe25Y+N6aaI77yM5aaC5L+h5oGv5o+Q5Lqk5oiQ5Yqf44CB5aSx6LSl562J44CCXG4gKi9cbmNsYXNzIERpYWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJRGlhbG9nUHJvcHMsIElEaWFsb2dTdGF0ZT4ge1xuICBwdWJsaWMgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiDlhbPpl63lkI7vvIh0cmFuc2l0aW9uIOe7k+adn+WQju+8ieeahCBoYW5kbGVyXG4gICAgICovXG4gICAgYWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572uIGJvZHkg5qC35byPXG4gICAgICovXG4gICAgYm9keVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOWPlua2iOaMiemSrueahCBwcm9wc++8jOWPguiAgyBCdXR0b24gUHJvcHNcbiAgICAgKi9cbiAgICBjYW5jZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDlj5bmtojmjInpkq7nmoQg5paH5a2XXG4gICAgICovXG4gICAgY2FuY2VsVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICogZGlhbG9nIOaJk+W8gOWSjOWFs+mXreaXtumDveS8muabtOaUuSBkb2N1bWVudC5ib2R5LnN0eWxl44CC5Y+v5Lul5Lul5q2kIHByb3Ag5o6n5Yi25piv5ZCm5L+u5pS544CC5L2/55So5Zy65pmv5aaC77ya5rWu5bGC5YaF5by55Ye6IGRpYWxvZ1xuICAgICAqL1xuICAgIGNoYW5nZUJvZHlTdHlsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5a2Q6IqC54K5XG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOmZhOWKoOexu+WQje+8jOazqOaEjyBEaWFsb2cg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOehruiupOaMiemSrueahCBwcm9wc++8jOWPguiAgyBCdXR0b24gUHJvcHNcbiAgICAgKi9cbiAgICBjb25maXJtUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog56Gu6K6k5oyJ6ZKu55qEIOaWh+Wtl1xuICAgICAqL1xuICAgIGNvbmZpcm1UZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDmjIflrprlvZPliY3nmoQgc3RlcO+8jOS7heWcqOS9v+eUqCBzdGVwcyBwcm9wIOaXtuacieS9nOeUqFxuICAgICAqL1xuICAgIGN1cnJlbnRTdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOaMh+Wumum7mOiupOeahOi1t+WniyBzdGVw77yM5LuF5Zyo5L2/55SoIHN0ZXBzIHByb3Ag5pe25pyJ5L2c55SoXG4gICAgICovXG4gICAgZGVmYXVsdEN1cnJlbnRTdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOWGhemDqOmpseWKqO+8muaYr+WQpum7mOiupOaYvuekulxuICAgICAqL1xuICAgIGRlZmF1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmr4/mrKEgdmlzaWJsZTogZmFsc2Ug6YO96ZSA5q+BIGRvbVxuICAgICAqL1xuICAgIGRlc3Ryb3lBZnRlckNsb3NlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmlK/mjIEgRVNDIOWFs+mXrVxuICAgICAqL1xuICAgIGVzY2FwZUtleUNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlrozlhajoh6rlrprkuYkgZm9vdGVyIOeahOWGheWuue+8jOWmguaenOaDs+imgeaUueWPmCBmb290ZXIg54i257qn55qE5qC35byP77yM5L2/55SoIGZvb3RlclN0eWxlIFByb3BcbiAgICAgKi9cbiAgICBmb290ZXJFbGVtZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDorr7nva4gZm9vdGVyIOagt+W8j1xuICAgICAqL1xuICAgIGZvb3RlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOaMh+WumuW8ueWHuuWxgueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R577yM57G75Ly85LqOIFRvb2x0aXAg55qEIGdldFBvcHVwQ29udGFpbmVyXG4gICAgICovXG4gICAgZ2V0Q29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiBoZWFkZXIg5qCH6aKY5LiL55qE5YaF5a65XG4gICAgICovXG4gICAgaGVhZGVyQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog5a6M5YWo6Ieq5a6a5LmJIGhlYWRlciDnmoTlhoXlrrlcbiAgICAgKi9cbiAgICBoZWFkZXJFbGVtZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDorr7nva4gaGVhZGVyIOagt+W8j1xuICAgICAqL1xuICAgIGhlYWRlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOeCueWHuyBtYXNrIOaYr+WQpuinpuWPkSBjYW5jZWwg5LqL5Lu2XG4gICAgICovXG4gICAgbWFza0Nsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDngrnlh7vlj5bmtojmjInpkq7jgIHlj7PkuIrop5LlhbPpl63ml7bnmoQgaGFuZGxlclxuICAgICAqL1xuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDngrnlh7vnoa7orqTmjInpkq7ml7bnmoQgaGFuZGxlclxuICAgICAqL1xuICAgIG9uQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg5qC35byP77yM5rOo5oSPIERpYWxvZyDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICAgKi9cbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDlr7nor53moYbmoIfpophcbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICogY29uZmlybSDkuLrlj5bmtojjgIHnoa7orqTmjInpkq7vvJtpbmZvcm0g5Li65Y+q5pyJ56Gu6K6k5oyJ6ZKuXG4gICAgICovXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcImNvbmZpcm1cIiwgXCJpbmZvcm1cIl0pLFxuICAgIC8qKlxuICAgICAqIOWklumDqOaOp+WItu+8muaYr+WQpuaYvuekulxuICAgICAqL1xuICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IElEaWFsb2dQcm9wcyA9IHtcbiAgICBhZnRlckNsb3NlOiBudWxsLFxuICAgIGJvZHlTdHlsZToge30sXG4gICAgY2FuY2VsUHJvcHM6IHt9LFxuICAgIGNhbmNlbFRleHQ6IFwi5Y+W5raIXCIsXG4gICAgY2hhbmdlQm9keVN0eWxlOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAgIGNvbmZpcm1Qcm9wczoge30sXG4gICAgY29uZmlybVRleHQ6IFwi56Gu6K6kXCIsXG4gICAgY3VycmVudFN0ZXA6IG51bGwsXG4gICAgZGVmYXVsdEN1cnJlbnRTdGVwOiBudWxsLFxuICAgIGRlZmF1bHRWaXNpYmxlOiBudWxsLFxuICAgIGRlc3Ryb3lBZnRlckNsb3NlOiBmYWxzZSxcbiAgICBlc2NhcGVLZXlDbG9zYWJsZTogdHJ1ZSxcbiAgICBmb290ZXJFbGVtZW50OiB1bmRlZmluZWQsXG4gICAgZm9vdGVyU3R5bGU6IHt9LFxuICAgIGdldENvbnRhaW5lcjogbnVsbCxcbiAgICBoZWFkZXJDb250ZW50OiBudWxsLFxuICAgIGhlYWRlckVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICBoZWFkZXJTdHlsZToge30sXG4gICAgbWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgICBvbkNhbmNlbDogbnVsbCxcbiAgICBvbkNvbmZpcm06IG51bGwsXG4gICAgc3R5bGU6IHt9LFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHR5cGU6IFwiY29uZmlybVwiLFxuICAgIHZpc2libGU6IG51bGwsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluZm86IGFueVxuXG4gIHB1YmxpYyBzdGF0aWMgc3VjY2VzczogYW55XG5cbiAgcHVibGljIHN0YXRpYyB3YXJuaW5nOiBhbnlcblxuICBwdWJsaWMgc3RhdGljIGRhbmdlcjogYW55XG5cbiAgcHVibGljIHN0YXRpYyBjb25maXJtOiBhbnlcblxuICBwdWJsaWMgc3RhdGljIGluZm9ybTogYW55XG5cbiAgcHVibGljIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSAoXG4gICAgeyBjdXJyZW50U3RlcCwgdmlzaWJsZSB9OiBJRGlhbG9nUHJvcHMsXG4gICAgeyBoYXNFdmVyT3BlbmVkIH06IElEaWFsb2dTdGF0ZVxuICApID0+IHtcbiAgICBjb25zdCBuZXdTdGF0ZTogUGFydGlhbDxJRGlhbG9nU3RhdGU+ID0ge31cbiAgICBpZiAoY3VycmVudFN0ZXAgIT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlLmN1cnJlbnRTdGVwID0gY3VycmVudFN0ZXBcbiAgICB9XG4gICAgaWYgKHZpc2libGUgIT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlLnZpc2libGUgPSB2aXNpYmxlXG4gICAgICBpZiAoIWhhc0V2ZXJPcGVuZWQgJiYgdmlzaWJsZSkge1xuICAgICAgICBuZXdTdGF0ZS5oYXNFdmVyT3BlbmVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmtleXMobmV3U3RhdGUpLmxlbmd0aCA+IDAgPyBuZXdTdGF0ZSA6IG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiDkv53lrZjoioLngrnmjILovb3nmoTlr7nosaFcbiAgICovXG4gIHB1YmxpYyBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50IHwgbnVsbFxuXG4gIC8qKlxuICAgKiDkv53lrZjpobXpnaLmmK/lkKYgb3ZlcmZsb3dcbiAgICovXG4gIHB1YmxpYyBib2R5SXNPdmVyZmxvd2luZzogYm9vbGVhblxuXG4gIC8qKlxuICAgKiDkv53lrZjlvZPliY3mtY/op4jlmajnmoTmu5rliqjmnaHlrr3luqZcbiAgICovXG4gIHB1YmxpYyBzY3JvbGxiYXJXaWR0aDogbnVtYmVyXG5cbiAgcHVibGljIGRpYWxvZzogSFRNTERpdkVsZW1lbnRcblxuICBwdWJsaWMgd3JhcHBlcjogSFRNTERpdkVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSURpYWxvZ1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyBjdXJyZW50U3RlcCwgZGVmYXVsdEN1cnJlbnRTdGVwLCB2aXNpYmxlLCBkZWZhdWx0VmlzaWJsZSB9ID0gcHJvcHNcbiAgICBjb25zdCB2aXNpYmxlU3RhdGUgPSB2aXNpYmxlICE9PSBudWxsID8gISF2aXNpYmxlIDogISFkZWZhdWx0VmlzaWJsZVxuICAgIGNvbnN0IGN1cnJlbnRTdGVwU3RhdGUgPVxuICAgICAgY3VycmVudFN0ZXAgIT09IG51bGwgPyBjdXJyZW50U3RlcCA6IGRlZmF1bHRDdXJyZW50U3RlcFxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpc2libGU6IHZpc2libGVTdGF0ZSxcbiAgICAgIGN1cnJlbnRTdGVwOiBjdXJyZW50U3RlcFN0YXRlIHx8IDAsXG4gICAgICBoYXNFdmVyT3BlbmVkOiB2aXNpYmxlU3RhdGUsXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNhdmVEaWFsb2cgPSAobm9kZTogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmRpYWxvZyA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyByZXNldFNjcm9sbGJhclBhZGRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjaGFuZ2VCb2R5U3R5bGUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoY2hhbmdlQm9keVN0eWxlKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJcIlxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFNjcm9sbGJhclBhZGRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjaGFuZ2VCb2R5U3R5bGUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoY2hhbmdlQm9keVN0eWxlKSB7XG4gICAgICBjb25zdCB7IGlubmVyV2lkdGggfSA9IHdpbmRvd1xuICAgICAgdGhpcy5ib2R5SXNPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCBpbm5lcldpZHRoXG4gICAgICBpZiAodGhpcy5ib2R5SXNPdmVyZmxvd2luZyAmJiAhZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJXaWR0aCA9IGdldFNjcm9sbEJhclNpemUoKVxuICAgICAgICBpZiAodGhpcy5zY3JvbGxiYXJXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLnNjcm9sbGJhcldpZHRofXB4YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDYW5jZWxCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjYW5jZWxQcm9wcywgY2FuY2VsVGV4dCwgc3RlcHMsIHR5cGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGN1cnJlbnRTdGVwIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgZGVmYXVsdFRleHQgPSBjdXJyZW50U3RlcCA9PT0gMCA/IFwi5Y+W5raIXCIgOiBcIuS4iuS4gOatpVwiXG4gICAgY29uc3QgZ2VuZXJhdGVCdXR0b24gPSAocHJvcHM/OiBJQnV0dG9uUHJvcHMsIHRleHQgPSBkZWZhdWx0VGV4dCkgPT4gKFxuICAgICAgPEJ1dHRvbiBrZXk9XCJjYW5jZWxcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhbmNlbH0gey4uLnByb3BzfT5cbiAgICAgICAge3RleHR9XG4gICAgICA8L0J1dHRvbj5cbiAgICApXG5cbiAgICBpZiAoc3RlcHMgJiYgc3RlcHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBwcm9wcyA9IHN0ZXBzW2N1cnJlbnRTdGVwXS5jYW5jZWxQcm9wc1xuICAgICAgY29uc3QgdGV4dCA9IHN0ZXBzW2N1cnJlbnRTdGVwXS5jYW5jZWxUZXh0XG4gICAgICByZXR1cm4gZ2VuZXJhdGVCdXR0b24ocHJvcHMsIHRleHQpXG4gICAgfVxuICAgIGlmICh0eXBlID09PSBcImluZm9ybVwiKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gZ2VuZXJhdGVCdXR0b24oY2FuY2VsUHJvcHMsIGNhbmNlbFRleHQpXG4gIH1cblxuICBwdWJsaWMgZ2V0Q29uZmlybUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbmZpcm1Qcm9wcywgY29uZmlybVRleHQsIHN0ZXBzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBjdXJyZW50U3RlcCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gKHByb3BzPzogSUJ1dHRvblByb3BzLCB0ZXh0Pzogc3RyaW5nKSA9PiAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGtleT1cInByaW1hcnlcIlxuICAgICAgICBpbnRlbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDb25maXJtfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9CdXR0b24+XG4gICAgKVxuXG4gICAgaWYgKHN0ZXBzICYmIHN0ZXBzLmxlbmd0aCkge1xuICAgICAgY29uc3QgcHJvcHMgPSBzdGVwc1tjdXJyZW50U3RlcF0uY29uZmlybVByb3BzXG4gICAgICBjb25zdCB0ZXh0ID1cbiAgICAgICAgc3RlcHNbY3VycmVudFN0ZXBdLmNvbmZpcm1UZXh0IHx8XG4gICAgICAgIChjdXJyZW50U3RlcCA9PT0gc3RlcHMubGVuZ3RoIC0gMSA/IFwi5a6M5oiQXCIgOiBcIuS4i+S4gOatpVwiKVxuICAgICAgcmV0dXJuIGdlbmVyYXRlQnV0dG9uKHByb3BzLCB0ZXh0KVxuICAgIH1cbiAgICByZXR1cm4gZ2VuZXJhdGVCdXR0b24oY29uZmlybVByb3BzLCBjb25maXJtVGV4dCB8fCBcIuehruiupFwiKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgZXNjYXBlS2V5Q2xvc2FibGUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoZXNjYXBlS2V5Q2xvc2FibGUgJiYgZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdGhpcy5oYW5kbGVDYW5jZWwoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVDYW5jZWwgPSAodHlwZT86IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgb25DYW5jZWwsIHN0ZXBzLCB2aXNpYmxlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBjdXJyZW50U3RlcCB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICh0eXBlID09PSBcImNsb3NlXCIgfHwgIXN0ZXBzIHx8ICFzdGVwcy5sZW5ndGgpIHtcbiAgICAgIGlmICh2aXNpYmxlID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2FuY2VsKSB7XG4gICAgICAgIG9uQ2FuY2VsKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBvbkNhbmNlbDogb25TdGVwQ2FuY2VsIH0gPSBzdGVwc1tjdXJyZW50U3RlcF1cbiAgICAgIGlmIChvblN0ZXBDYW5jZWwpIHtcbiAgICAgICAgb25TdGVwQ2FuY2VsKClcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50U3RlcCA9PT0gMCkge1xuICAgICAgICBpZiAodmlzaWJsZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFN0ZXA6IGN1cnJlbnRTdGVwIC0gMSB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVDb25maXJtID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25Db25maXJtLCBzdGVwcywgdmlzaWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoc3RlcHMgJiYgc3RlcHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCB7IG9uQ29uZmlybTogb25TdGVwQ29uZmlybSB9ID0gc3RlcHNbY3VycmVudFN0ZXBdXG4gICAgICBpZiAob25TdGVwQ29uZmlybSkge1xuICAgICAgICBvblN0ZXBDb25maXJtKClcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50U3RlcCA9PT0gc3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBpZiAodmlzaWJsZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFN0ZXA6IGN1cnJlbnRTdGVwICsgMSB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmlzaWJsZSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNvbmZpcm0pIHtcbiAgICAgICAgb25Db25maXJtKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25MZWF2ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFmdGVyQ2xvc2UsIGRlc3Ryb3lBZnRlckNsb3NlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHRoaXMud3JhcHBlcikge1xuICAgICAgdGhpcy53cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH1cbiAgICB0aGlzLnJlc2V0U2Nyb2xsYmFyUGFkZGluZygpXG5cbiAgICBpZiAoYWZ0ZXJDbG9zZSkge1xuICAgICAgYWZ0ZXJDbG9zZSgpXG4gICAgfVxuXG4gICAgaWYgKGRlc3Ryb3lBZnRlckNsb3NlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaGFzRXZlck9wZW5lZDogZmFsc2UgfSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZ2V0Q29udGFpbmVyIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250YWluZXJcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICBpZiAoZ2V0Q29udGFpbmVyKSB7XG4gICAgICBnZXRDb250YWluZXIoKS5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIH1cbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlRW50ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBlc2NhcGVLZXlDbG9zYWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0aGlzLndyYXBwZXIpIHtcbiAgICAgIGlmIChlc2NhcGVLZXlDbG9zYWJsZSkge1xuICAgICAgICB0aGlzLndyYXBwZXIuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDb21wb25lbnQgPSAob3B0aW9ucz86IHsgdmlzaWJsZTogYm9vbGVhbiB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgYm9keVN0eWxlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBmb290ZXJFbGVtZW50LFxuICAgICAgZm9vdGVyU3R5bGUsXG4gICAgICBoZWFkZXJDb250ZW50LFxuICAgICAgaGVhZGVyRWxlbWVudCxcbiAgICAgIGhlYWRlclN0eWxlLFxuICAgICAgbWFza0Nsb3NhYmxlLFxuICAgICAgc3RlcHMsXG4gICAgICBzdHlsZSxcbiAgICAgIHRpdGxlLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCByZXN0UHJvcHMgPSBvbWl0KG90aGVyUHJvcHMsIFtcbiAgICAgIFwiYWZ0ZXJDbG9zZVwiLFxuICAgICAgXCJjYW5jZWxQcm9wc1wiLFxuICAgICAgXCJjYW5jZWxUZXh0XCIsXG4gICAgICBcImNoYW5nZUJvZHlTdHlsZVwiLFxuICAgICAgXCJjb25maXJtUHJvcHNcIixcbiAgICAgIFwiY29uZmlybVRleHRcIixcbiAgICAgIFwiY3VycmVudFN0ZXBcIixcbiAgICAgIFwiZGVmYXVsdEN1cnJlbnRTdGVwXCIsXG4gICAgICBcImRlZmF1bHRWaXNpYmxlXCIsXG4gICAgICBcImRlc3Ryb3lBZnRlckNsb3NlXCIsXG4gICAgICBcImVzY2FwZUtleUNsb3NhYmxlXCIsXG4gICAgICBcImdldENvbnRhaW5lclwiLFxuICAgICAgXCJvbkNhbmNlbFwiLFxuICAgICAgXCJvbkNvbmZpcm1cIixcbiAgICAgIFwidHlwZVwiLFxuICAgICAgXCJ2aXNpYmxlXCIsXG4gICAgXSlcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0taW5uZXJgKVxuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKG9wdGlvbnMgJiYgT2JqZWN0LmtleXMob3B0aW9ucykuaW5jbHVkZXMoXCJ2aXNpYmxlXCIpKSB7XG4gICAgICA7KHsgdmlzaWJsZSB9ID0gb3B0aW9ucylcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e3RoaXMuc2F2ZURpYWxvZ30+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0td3JhcHBlcmB9XG4gICAgICAgICAgcmVmPXt3cmFwcGVyID0+IHtcbiAgICAgICAgICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICAgICAgICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IHZpc2libGUgPyBcImZsZXhcIiA6IFwiXCIgfX1cbiAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgID5cbiAgICAgICAgICA8QW5pbWF0ZVxuICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9e2Ake3ByZWZpeH0tbWFza2B9XG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgdHJhbnNpdGlvbkFwcGVhclxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2aXNpYmxlICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1tYXNrYH1cbiAgICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKG1hc2tDbG9zYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNhbmNlbChcImNsb3NlXCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9BbmltYXRlPlxuICAgICAgICAgIHsvKipcbiAgICAgICAgICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzM0NTUzNDJcbiAgICAgICAgICAgKiAxLiDmnIDlpJblsYIgbWFyZ2luOiBhdXRvIOmdnuW4uOmHjeimgeOAglxuICAgICAgICAgICAqIERpYWxvZyDnmoTlrr3luqbmmK/oh6rpgILlupTnmoTvvIzlm6DmraTkvb/nlKjkuoYgZGlzcGxheTogZmxleCDlpITnkIblsYXkuK3vvIzov5nkvb/lvpflrZDlhYPntKDlhbfmnInljIXoo7nmgKfvvIzlm6DmraTlrr3luqbmiY3og73nlLHlhoXlrrnmiYDlhrPlrprvvJtcbiAgICAgICAgICAgKiBtYXJnaW46IGF1dG87IOaYr+S4uuS6huWujOWWhCBmbGV4Ym94IG92ZXJmbG93IOeahOagt+W8j+OAglxuICAgICAgICAgICAqIDIuIHpJbmRleDogMSDmmK/kuLrkuobopobnm5blnKggbWFzayDkuIrjgIJcbiAgICAgICAgICAgKi99XG4gICAgICAgICAgPEFuaW1hdGVcbiAgICAgICAgICAgIG9uQXBwZWFyPXt0aGlzLmhhbmRsZUVudGVyfVxuICAgICAgICAgICAgb25FbnRlcj17dGhpcy5oYW5kbGVFbnRlcn1cbiAgICAgICAgICAgIG9uTGVhdmU9e3RoaXMub25MZWF2ZX1cbiAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPXtwcmVmaXh9XG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgekluZGV4OiAxLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dmlzaWJsZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gc3R5bGU9e3N0eWxlfSB7Li4ucmVzdFByb3BzfT5cbiAgICAgICAgICAgICAgICB7aGVhZGVyRWxlbWVudCA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICA6IGhlYWRlckVsZW1lbnQgfHwgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWhlYWRlcmB9IHN0eWxlPXtoZWFkZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17MH0gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRpdGxlYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyQ29udGVudCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1oZWFkZXJDb250ZW50YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJDb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2xvc2VgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezI0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2FuY2VsKFwiY2xvc2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1ib2R5YH0gc3R5bGU9e2JvZHlTdHlsZX0+XG4gICAgICAgICAgICAgICAgICB7c3RlcHMgJiYgc3RlcHMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgID8gc3RlcHNbY3VycmVudFN0ZXBdLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIDogY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2Zvb3RlckVsZW1lbnQgPT09IG51bGwgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tZm9vdGVyYH0gc3R5bGU9e2Zvb3RlclN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAge2Zvb3RlckVsZW1lbnQgfHwgW1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2FuY2VsQnV0dG9uKCksXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb25maXJtQnV0dG9uKCksXG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9BbmltYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBkaWRtb3VudCDnlLEgcG9ydGFsIOeahCBvbkNoaWxkcmVuTW91bnTvvIzlm6DkuLogZGlkbW91bnQg5pe2IHdyYXBwZXIg5Y+v6IO95bm25LiN5ZyoIGRvbVxuICAgKi9cbiAgcHVibGljIGhhbmRsZUNoaWxkcmVuTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHZpc2libGUgJiYgdGhpcy53cmFwcGVyKSB7XG4gICAgICB0aGlzLnNldFNjcm9sbGJhclBhZGRpbmcoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUgPSAoXG4gICAgXzogSURpYWxvZ1Byb3BzLFxuICAgIHsgdmlzaWJsZTogdmlzaWJsZVByZXYgfTogSURpYWxvZ1N0YXRlXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICh2aXNpYmxlICE9PSB2aXNpYmxlUHJldiAmJiB2aXNpYmxlICYmIHRoaXMud3JhcHBlcikge1xuICAgICAgdGhpcy5zZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHZpc2libGUpIHtcbiAgICAgIHRoaXMucmVzZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaGFzRXZlck9wZW5lZCB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghaGFzRXZlck9wZW5lZCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgb25DaGlsZHJlbk1vdW50PXt0aGlzLmhhbmRsZUNoaWxkcmVuTW91bnR9PlxuICAgICAgICB7dGhpcy5nZXRDb21wb25lbnQoKX1cbiAgICAgIDwvUG9ydGFsPlxuICAgIClcbiAgfVxufVxuXG5wb2x5ZmlsbChEaWFsb2cpXG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZ1xuIl19