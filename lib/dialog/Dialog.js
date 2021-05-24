"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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
          display: visible ? "flex" : "",
          zIndex: zIndex
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
        className: "".concat(prefix, "-header ").concat(headerClassName),
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

      return React.createElement(_portal["default"], {
        onChildrenMount: this.handleChildrenMount
      }, this.getComponent());
    }
  }]);

  return Dialog;
}(React.Component);

Dialog.propTypes = {
  afterClose: _propTypes["default"].func,
  bodyClassName: _propTypes["default"].string,
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
  footerClassName: _propTypes["default"].string,
  footerStyle: _propTypes["default"].object,
  getContainer: _propTypes["default"].func,
  headerContent: _propTypes["default"].node,
  headerElement: _propTypes["default"].node,
  headerClassName: _propTypes["default"].string,
  headerStyle: _propTypes["default"].object,
  maskClosable: _propTypes["default"].bool,
  onCancel: _propTypes["default"].func,
  onConfirm: _propTypes["default"].func,
  style: _propTypes["default"].object,
  title: _propTypes["default"].node,
  type: _propTypes["default"].oneOf(["confirm", "inform"]),
  visible: _propTypes["default"].bool,
  zIndex: _propTypes["default"].any
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

var _default = Dialog;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL0RpYWxvZy50c3giXSwibmFtZXMiOlsicHJlZml4IiwiRGlhbG9nIiwicHJvcHMiLCJjb250YWluZXIiLCJib2R5SXNPdmVyZmxvd2luZyIsInNjcm9sbGJhcldpZHRoIiwiZGlhbG9nIiwid3JhcHBlciIsInNhdmVEaWFsb2ciLCJub2RlIiwicmVzZXRTY3JvbGxiYXJQYWRkaW5nIiwiY2hhbmdlQm9keVN0eWxlIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBhZGRpbmdSaWdodCIsInNldFNjcm9sbGJhclBhZGRpbmciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJ1bmRlZmluZWQiLCJnZXRDYW5jZWxCdXR0b24iLCJjYW5jZWxQcm9wcyIsImNhbmNlbFRleHQiLCJzdGVwcyIsInR5cGUiLCJjdXJyZW50U3RlcCIsInN0YXRlIiwiZGVmYXVsdFRleHQiLCJnZW5lcmF0ZUJ1dHRvbiIsInRleHQiLCJoYW5kbGVDYW5jZWwiLCJsZW5ndGgiLCJnZXRDb25maXJtQnV0dG9uIiwiY29uZmlybVByb3BzIiwiY29uZmlybVRleHQiLCJoYW5kbGVDb25maXJtIiwiaGFuZGxlS2V5RG93biIsImUiLCJlc2NhcGVLZXlDbG9zYWJsZSIsImtleUNvZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNhbmNlbCIsInZpc2libGUiLCJzZXRTdGF0ZSIsIm9uU3RlcENhbmNlbCIsIm9uQ29uZmlybSIsIm9uU3RlcENvbmZpcm0iLCJvbkxlYXZlIiwiYWZ0ZXJDbG9zZSIsImRlc3Ryb3lBZnRlckNsb3NlIiwiZGlzcGxheSIsImhhc0V2ZXJPcGVuZWQiLCJnZXRDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVFbnRlciIsImZvY3VzIiwiZ2V0Q29tcG9uZW50Iiwib3B0aW9ucyIsImJvZHlDbGFzc05hbWUiLCJib2R5U3R5bGUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImZvb3RlckNsYXNzTmFtZSIsImZvb3RlckVsZW1lbnQiLCJmb290ZXJTdHlsZSIsImhlYWRlckNsYXNzTmFtZSIsImhlYWRlckNvbnRlbnQiLCJoZWFkZXJFbGVtZW50IiwiaGVhZGVyU3R5bGUiLCJtYXNrQ2xvc2FibGUiLCJ0aXRsZSIsInpJbmRleFByb3AiLCJ6SW5kZXgiLCJvdGhlclByb3BzIiwicmVzdFByb3BzIiwiY2xhc3NTZXQiLCJPYmplY3QiLCJrZXlzIiwiaW5jbHVkZXMiLCJtYXJnaW4iLCJoYW5kbGVDaGlsZHJlbk1vdW50IiwiY29tcG9uZW50RGlkVXBkYXRlIiwiXyIsInZpc2libGVQcmV2IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkZWZhdWx0Q3VycmVudFN0ZXAiLCJkZWZhdWx0VmlzaWJsZSIsInZpc2libGVTdGF0ZSIsImN1cnJlbnRTdGVwU3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJzdHJpbmciLCJvYmplY3QiLCJib29sIiwibnVtYmVyIiwib25lT2YiLCJhbnkiLCJkZWZhdWx0UHJvcHMiLCJpbmZvIiwic3VjY2VzcyIsIndhcm5pbmciLCJkYW5nZXIiLCJjb25maXJtIiwiaW5mb3JtIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwibmV3U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLGFBQWY7O0lBbUpNQyxNOzs7OztBQWtOSixrQkFBWUMsTUFBWixFQUFpQztBQUFBOztBQUFBOztBQUMvQiw4QkFBTUEsTUFBTjtBQUQrQixVQWhCMUJDLFNBZ0IwQjtBQUFBLFVBWDFCQyxpQkFXMEI7QUFBQSxVQU4xQkMsY0FNMEI7QUFBQSxVQUoxQkMsTUFJMEI7QUFBQSxVQUYxQkMs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RUFBQUEsSUFBSSxFQUFFLFNBN0JtQztBQThCekNrQixFQUFBQSxPQUFPLEVBQUUsSUE5QmdDO0FBK0J6QytCLEVBQUFBLE1BQU0sRUFBRTtBQS9CaUMsQztBQWhJdkMxRSxNLENBa0tVdUcsSTtBQWxLVnZHLE0sQ0FvS1V3RyxPO0FBcEtWeEcsTSxDQXNLVXlHLE87QUF0S1Z6RyxNLENBd0tVMEcsTTtBQXhLVjFHLE0sQ0EwS1UyRyxPO0FBMUtWM0csTSxDQTRLVTRHLE07O0FBNUtWNUcsTSxDQThLVTZHLHdCLEdBQTJCLHdCQUdwQztBQUFBLE1BRkRuRixXQUVDLFNBRkRBLFdBRUM7QUFBQSxNQUZZaUIsT0FFWixTQUZZQSxPQUVaO0FBQUEsTUFERFMsYUFDQyxTQUREQSxhQUNDO0FBQ0gsTUFBTTBELFFBQStCLEdBQUcsRUFBeEM7O0FBQ0EsTUFBSXBGLFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN4Qm9GLElBQUFBLFFBQVEsQ0FBQ3BGLFdBQVQsR0FBdUJBLFdBQXZCO0FBQ0Q7O0FBQ0QsTUFBSWlCLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQm1FLElBQUFBLFFBQVEsQ0FBQ25FLE9BQVQsR0FBbUJBLE9BQW5COztBQUNBLFFBQUksQ0FBQ1MsYUFBRCxJQUFrQlQsT0FBdEIsRUFBK0I7QUFDN0JtRSxNQUFBQSxRQUFRLENBQUMxRCxhQUFULEdBQXlCLElBQXpCO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPMEIsTUFBTSxDQUFDQyxJQUFQLENBQVkrQixRQUFaLEVBQXNCOUUsTUFBdEIsR0FBK0IsQ0FBL0IsR0FBbUM4RSxRQUFuQyxHQUE4QyxJQUFyRDtBQUNELEM7O2VBcVpZOUcsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBnZXRTY3JvbGxCYXJTaXplIGZyb20gXCJyYy11dGlsL2xpYi9nZXRTY3JvbGxCYXJTaXplXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBBbmltYXRlIGZyb20gXCJyYy1hbmltYXRlXCJcbmltcG9ydCBvbWl0IGZyb20gXCIuLi9fdXRpbC9vbWl0XCJcbmltcG9ydCBQb3J0YWwgZnJvbSBcIi4uL3BvcnRhbFwiXG5pbXBvcnQgQnV0dG9uLCB7IElCdXR0b25Qcm9wcyB9IGZyb20gXCIuLi9idXR0b25cIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1kaWFsb2dcIlxuXG5pbnRlcmZhY2UgSVN0ZXBQcm9wcyB7XG4gIC8qKlxuICAgKiDlj5bmtojmjInpkq7nmoQgcHJvcHPvvIzlj4LogIMgQnV0dG9uIFByb3BzXG4gICAqL1xuICBjYW5jZWxQcm9wcz86IFBhcnRpYWw8SUJ1dHRvblByb3BzPlxuICAvKipcbiAgICog5Y+W5raI5oyJ6ZKu55qEIOaWh+Wtl1xuICAgKi9cbiAgY2FuY2VsVGV4dD86IHN0cmluZ1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog56Gu6K6k5oyJ6ZKu55qEIHByb3Bz77yM5Y+C6ICDIEJ1dHRvbiBQcm9wc1xuICAgKi9cbiAgY29uZmlybVByb3BzPzogUGFydGlhbDxJQnV0dG9uUHJvcHM+XG4gIC8qKlxuICAgKiDnoa7orqTmjInpkq7nmoQg5paH5a2XXG4gICAqL1xuICBjb25maXJtVGV4dD86IHN0cmluZ1xuICAvKipcbiAgICog54K55Ye75Y+W5raI5oyJ6ZKu44CB5Y+z5LiK6KeS5YWz6Zet5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2FuY2VsPzogKCgpID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog54K55Ye756Gu6K6k5oyJ6ZKu5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ29uZmlybT86ICgoKSA9PiB2b2lkKSB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGlhbG9nUHJvcHMgZXh0ZW5kcyBJU3RlcFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlhbPpl63lkI7vvIh0cmFuc2l0aW9uIOe7k+adn+WQju+8ieeahCBoYW5kbGVyXG4gICAqL1xuICBhZnRlckNsb3NlPzogKCgpID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog6K6+572uIGJvZHkgY2xhc3NOYW1lXG4gICAqL1xuICBib2R5Q2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva4gYm9keSBzdHlsZVxuICAgKi9cbiAgYm9keVN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICogZGlhbG9nIOaJk+W8gOWSjOWFs+mXreaXtumDveS8muabtOaUuSBkb2N1bWVudC5ib2R5LnN0eWxl44CC5Y+v5Lul5Lul5q2kIHByb3Ag5o6n5Yi25piv5ZCm5L+u5pS544CC5L2/55So5Zy65pmv5aaC77ya5rWu5bGC5YaF5by55Ye6IGRpYWxvZ1xuICAgKi9cbiAgY2hhbmdlQm9keVN0eWxlPzogYm9vbGVhblxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCN77yM5rOo5oSPIERpYWxvZyDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5oyH5a6a5b2T5YmN55qEIHN0ZXDvvIzku4XlnKjkvb/nlKggc3RlcHMgcHJvcCDml7bmnInkvZznlKhcbiAgICovXG4gIGN1cnJlbnRTdGVwPzogbnVsbCB8IG51bWJlclxuICAvKipcbiAgICog5oyH5a6a6buY6K6k55qE6LW35aeLIHN0ZXDvvIzku4XlnKjkvb/nlKggc3RlcHMgcHJvcCDml7bmnInkvZznlKhcbiAgICovXG4gIGRlZmF1bHRDdXJyZW50U3RlcD86IG51bGwgfCBudW1iZXJcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8muaYr+WQpum7mOiupOaYvuekulxuICAgKi9cbiAgZGVmYXVsdFZpc2libGU/OiBudWxsIHwgYm9vbGVhblxuICAvKipcbiAgICog5piv5ZCm5q+P5qyhIHZpc2libGU6IGZhbHNlIOmDvemUgOavgSBkb21cbiAgICovXG4gIGRlc3Ryb3lBZnRlckNsb3NlPzogYm9vbGVhblxuICAvKipcbiAgICog5piv5ZCm5pSv5oyBIEVTQyDlhbPpl61cbiAgICovXG4gIGVzY2FwZUtleUNsb3NhYmxlPzogYm9vbGVhblxuICAvKipcbiAgICog5a6M5YWo6Ieq5a6a5LmJIGZvb3RlciDnmoTlhoXlrrnvvIzlpoLmnpzmg7PopoHmlLnlj5ggZm9vdGVyIOeItue6p+eahOagt+W8j++8jOS9v+eUqCBmb290ZXJTdHlsZSBQcm9wXG4gICAqL1xuICBmb290ZXJFbGVtZW50PzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDorr7nva4gZm9vdGVyIGNsYXNzTmFtZVxuICAgKi9cbiAgZm9vdGVyQ2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva4gZm9vdGVyIHN0eWxlXG4gICAqL1xuICBmb290ZXJTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOaMh+WumuW8ueWHuuWxgueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R577yM57G75Ly85LqOIFRvb2x0aXAg55qEIGdldFBvcHVwQ29udGFpbmVyXG4gICAqL1xuICBnZXRDb250YWluZXI/OiAoKCkgPT4gSFRNTEVsZW1lbnQpIHwgbnVsbFxuICAvKipcbiAgICogaGVhZGVyIOagh+mimOS4i+eahOWGheWuuVxuICAgKi9cbiAgaGVhZGVyQ29udGVudD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog5a6M5YWo6Ieq5a6a5LmJIGhlYWRlciDnmoTlhoXlrrlcbiAgICovXG4gIGhlYWRlckVsZW1lbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOiuvue9riBoZWFkZXIgY2xhc3NOYW1lXG4gICAqL1xuICBoZWFkZXJDbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9riBoZWFkZXIgc3R5bGVcbiAgICovXG4gIGhlYWRlclN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog54K55Ye7IG1hc2sg5piv5ZCm6Kem5Y+RIGNhbmNlbCDkuovku7ZcbiAgICovXG4gIG1hc2tDbG9zYWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaMh+WumuatpemqpO+8jOeUqOS7peW/q+aNt+S4iuS4gOatpeOAgeS4i+S4gOatpeeahOmcgOaxguOAglxuICAgKi9cbiAgc3RlcHM/OiBBcnJheTxJU3RlcFByb3BzPlxuICAvKipcbiAgICog6ZmE5Yqg5qC35byP77yM5rOo5oSPIERpYWxvZyDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICovXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog5a+56K+d5qGG5qCH6aKYXG4gICAqL1xuICB0aXRsZT86IG51bGwgfCBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIGNvbmZpcm0g5Li65Y+W5raI44CB56Gu6K6k5oyJ6ZKu77ybaW5mb3JtIOS4uuWPquacieehruiupOaMiemSrlxuICAgKi9cbiAgdHlwZT86IFwiY29uZmlybVwiIHwgXCJpbmZvcm1cIlxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5piv5ZCm5pi+56S6XG4gICAqL1xuICB2aXNpYmxlPzogbnVsbCB8IGJvb2xlYW5cbiAgLyoqXG4gICAqIOiuvue9riB6LWluZGV4IOWxgue6p++8jOm7mOiupOS4uiB2YXIoLS16LWluZGV4LWRpYWxvZylcbiAgICovXG4gIHpJbmRleD86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEaWFsb2dTdGF0ZSB7XG4gIHZpc2libGU/OiBib29sZWFuXG4gIGN1cnJlbnRTdGVwOiBudW1iZXJcbiAgaGFzRXZlck9wZW5lZD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiDlr7nor53moYbnlKjkuo7lhajlsYDmgKfnmoTlj43ppojvvIzpgJrluLjliIbkuLrigJznoa7orqTmk43kvZzigJ3kuI7igJzlkYrnn6Xkv6Hmga/igJ3jgIJcbiAqIOehruiupOaTjeS9nOeUqOS6juivoumXrueUqOaIt+KAnOaTjeS9nOaYr+WQpue7p+e7rei/m+ihjO+8n+KAne+8jOWmguWkp+mDqOWIhueahOS6jOasoeehruiupOWPjemmiOOAguWRiuefpeS/oeaBr+WImeeUqOS6juefpeS8mueUqOaIt+afkOS4quWPiuaXtuWPjemmiO+8jOWmguS/oeaBr+aPkOS6pOaIkOWKn+OAgeWksei0peetieOAglxuICovXG5jbGFzcyBEaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SURpYWxvZ1Byb3BzLCBJRGlhbG9nU3RhdGU+IHtcbiAgcHVibGljIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICog5YWz6Zet5ZCO77yIdHJhbnNpdGlvbiDnu5PmnZ/lkI7vvInnmoQgaGFuZGxlclxuICAgICAqL1xuICAgIGFmdGVyQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9riBib2R5IGNsYXNzTmFtZVxuICAgICAqL1xuICAgIGJvZHlDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog6K6+572uIGJvZHkgc3R5bGVcbiAgICAgKi9cbiAgICBib2R5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog5Y+W5raI5oyJ6ZKu55qEIHByb3Bz77yM5Y+C6ICDIEJ1dHRvbiBQcm9wc1xuICAgICAqL1xuICAgIGNhbmNlbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOWPlua2iOaMiemSrueahCDmloflrZdcbiAgICAgKi9cbiAgICBjYW5jZWxUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiBkaWFsb2cg5omT5byA5ZKM5YWz6Zet5pe26YO95Lya5pu05pS5IGRvY3VtZW50LmJvZHkuc3R5bGXjgILlj6/ku6Xku6XmraQgcHJvcCDmjqfliLbmmK/lkKbkv67mlLnjgILkvb/nlKjlnLrmma/lpoLvvJrmta7lsYLlhoXlvLnlh7ogZGlhbG9nXG4gICAgICovXG4gICAgY2hhbmdlQm9keVN0eWxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlrZDoioLngrlcbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg57G75ZCN77yM5rOo5oSPIERpYWxvZyDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog56Gu6K6k5oyJ6ZKu55qEIHByb3Bz77yM5Y+C6ICDIEJ1dHRvbiBQcm9wc1xuICAgICAqL1xuICAgIGNvbmZpcm1Qcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDnoa7orqTmjInpkq7nmoQg5paH5a2XXG4gICAgICovXG4gICAgY29uZmlybVRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOaMh+WumuW9k+WJjeeahCBzdGVw77yM5LuF5Zyo5L2/55SoIHN0ZXBzIHByb3Ag5pe25pyJ5L2c55SoXG4gICAgICovXG4gICAgY3VycmVudFN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICog5oyH5a6a6buY6K6k55qE6LW35aeLIHN0ZXDvvIzku4XlnKjkvb/nlKggc3RlcHMgcHJvcCDml7bmnInkvZznlKhcbiAgICAgKi9cbiAgICBkZWZhdWx0Q3VycmVudFN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICog5YaF6YOo6amx5Yqo77ya5piv5ZCm6buY6K6k5pi+56S6XG4gICAgICovXG4gICAgZGVmYXVsdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuavj+asoSB2aXNpYmxlOiBmYWxzZSDpg73plIDmr4EgZG9tXG4gICAgICovXG4gICAgZGVzdHJveUFmdGVyQ2xvc2U6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuaUr+aMgSBFU0Mg5YWz6ZetXG4gICAgICovXG4gICAgZXNjYXBlS2V5Q2xvc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWujOWFqOiHquWumuS5iSBmb290ZXIg55qE5YaF5a6577yM5aaC5p6c5oOz6KaB5pS55Y+YIGZvb3RlciDniLbnuqfnmoTmoLflvI/vvIzkvb/nlKggZm9vdGVyU3R5bGUgUHJvcFxuICAgICAqL1xuICAgIGZvb3RlckVsZW1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOiuvue9riBmb290ZXIgY2xhc3NOYW1lXG4gICAgICovXG4gICAgZm9vdGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOiuvue9riBmb290ZXIgc3R5bGVcbiAgICAgKi9cbiAgICBmb290ZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDmjIflrprlvLnlh7rlsYLnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9kee+8jOexu+S8vOS6jiBUb29sdGlwIOeahCBnZXRQb3B1cENvbnRhaW5lclxuICAgICAqL1xuICAgIGdldENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogaGVhZGVyIOagh+mimOS4i+eahOWGheWuuVxuICAgICAqL1xuICAgIGhlYWRlckNvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOWujOWFqOiHquWumuS5iSBoZWFkZXIg55qE5YaF5a65XG4gICAgICovXG4gICAgaGVhZGVyRWxlbWVudDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog6K6+572uIGhlYWRlciBjbGFzc05hbWVcbiAgICAgKi9cbiAgICBoZWFkZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog6K6+572uIGhlYWRlciBzdHlsZVxuICAgICAqL1xuICAgIGhlYWRlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOeCueWHuyBtYXNrIOaYr+WQpuinpuWPkSBjYW5jZWwg5LqL5Lu2XG4gICAgICovXG4gICAgbWFza0Nsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDngrnlh7vlj5bmtojmjInpkq7jgIHlj7PkuIrop5LlhbPpl63ml7bnmoQgaGFuZGxlclxuICAgICAqL1xuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDngrnlh7vnoa7orqTmjInpkq7ml7bnmoQgaGFuZGxlclxuICAgICAqL1xuICAgIG9uQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg5qC35byP77yM5rOo5oSPIERpYWxvZyDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICAgKi9cbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDlr7nor53moYbmoIfpophcbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICogY29uZmlybSDkuLrlj5bmtojjgIHnoa7orqTmjInpkq7vvJtpbmZvcm0g5Li65Y+q5pyJ56Gu6K6k5oyJ6ZKuXG4gICAgICovXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcImNvbmZpcm1cIiwgXCJpbmZvcm1cIl0pLFxuICAgIC8qKlxuICAgICAqIOWklumDqOaOp+WItu+8muaYr+WQpuaYvuekulxuICAgICAqL1xuICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOiuvue9riB6LWluZGV4IOWxgue6p++8jOm7mOiupOS4uiB2YXIoLS16LWluZGV4LWRpYWxvZylcbiAgICAgKi9cbiAgICB6SW5kZXg6IFByb3BUeXBlcy5hbnksXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogSURpYWxvZ1Byb3BzID0ge1xuICAgIGFmdGVyQ2xvc2U6IG51bGwsXG4gICAgYm9keUNsYXNzTmFtZTogXCJcIixcbiAgICBib2R5U3R5bGU6IHt9LFxuICAgIGNhbmNlbFByb3BzOiB7fSxcbiAgICBjYW5jZWxUZXh0OiBcIuWPlua2iFwiLFxuICAgIGNoYW5nZUJvZHlTdHlsZTogdHJ1ZSxcbiAgICBjaGlsZHJlbjogbnVsbCxcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBjb25maXJtUHJvcHM6IHt9LFxuICAgIGNvbmZpcm1UZXh0OiBcIuehruiupFwiLFxuICAgIGN1cnJlbnRTdGVwOiBudWxsLFxuICAgIGRlZmF1bHRDdXJyZW50U3RlcDogbnVsbCxcbiAgICBkZWZhdWx0VmlzaWJsZTogbnVsbCxcbiAgICBkZXN0cm95QWZ0ZXJDbG9zZTogZmFsc2UsXG4gICAgZXNjYXBlS2V5Q2xvc2FibGU6IHRydWUsXG4gICAgZm9vdGVyRWxlbWVudDogdW5kZWZpbmVkLFxuICAgIGZvb3RlckNsYXNzTmFtZTogXCJcIixcbiAgICBmb290ZXJTdHlsZToge30sXG4gICAgZ2V0Q29udGFpbmVyOiBudWxsLFxuICAgIGhlYWRlckNvbnRlbnQ6IG51bGwsXG4gICAgaGVhZGVyQ2xhc3NOYW1lOiBcIlwiLFxuICAgIGhlYWRlckVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICBoZWFkZXJTdHlsZToge30sXG4gICAgbWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgICBvbkNhbmNlbDogbnVsbCxcbiAgICBvbkNvbmZpcm06IG51bGwsXG4gICAgc3R5bGU6IHt9LFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHR5cGU6IFwiY29uZmlybVwiLFxuICAgIHZpc2libGU6IG51bGwsXG4gICAgekluZGV4OiBcInZhcigtLXotaW5kZXgtZGlhbG9nKVwiLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbmZvOiBhbnlcblxuICBwdWJsaWMgc3RhdGljIHN1Y2Nlc3M6IGFueVxuXG4gIHB1YmxpYyBzdGF0aWMgd2FybmluZzogYW55XG5cbiAgcHVibGljIHN0YXRpYyBkYW5nZXI6IGFueVxuXG4gIHB1YmxpYyBzdGF0aWMgY29uZmlybTogYW55XG5cbiAgcHVibGljIHN0YXRpYyBpbmZvcm06IGFueVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gKFxuICAgIHsgY3VycmVudFN0ZXAsIHZpc2libGUgfTogSURpYWxvZ1Byb3BzLFxuICAgIHsgaGFzRXZlck9wZW5lZCB9OiBJRGlhbG9nU3RhdGVcbiAgKSA9PiB7XG4gICAgY29uc3QgbmV3U3RhdGU6IFBhcnRpYWw8SURpYWxvZ1N0YXRlPiA9IHt9XG4gICAgaWYgKGN1cnJlbnRTdGVwICE9PSBudWxsKSB7XG4gICAgICBuZXdTdGF0ZS5jdXJyZW50U3RlcCA9IGN1cnJlbnRTdGVwXG4gICAgfVxuICAgIGlmICh2aXNpYmxlICE9PSBudWxsKSB7XG4gICAgICBuZXdTdGF0ZS52aXNpYmxlID0gdmlzaWJsZVxuICAgICAgaWYgKCFoYXNFdmVyT3BlbmVkICYmIHZpc2libGUpIHtcbiAgICAgICAgbmV3U3RhdGUuaGFzRXZlck9wZW5lZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld1N0YXRlKS5sZW5ndGggPiAwID8gbmV3U3RhdGUgOiBudWxsXG4gIH1cblxuICAvKipcbiAgICog5L+d5a2Y6IqC54K55oyC6L2955qE5a+56LGhXG4gICAqL1xuICBwdWJsaWMgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCB8IG51bGxcblxuICAvKipcbiAgICog5L+d5a2Y6aG16Z2i5piv5ZCmIG92ZXJmbG93XG4gICAqL1xuICBwdWJsaWMgYm9keUlzT3ZlcmZsb3dpbmc6IGJvb2xlYW5cblxuICAvKipcbiAgICog5L+d5a2Y5b2T5YmN5rWP6KeI5Zmo55qE5rua5Yqo5p2h5a695bqmXG4gICAqL1xuICBwdWJsaWMgc2Nyb2xsYmFyV2lkdGg6IG51bWJlclxuXG4gIHB1YmxpYyBkaWFsb2c6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIHdyYXBwZXI6IEhUTUxEaXZFbGVtZW50XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElEaWFsb2dQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAsIGRlZmF1bHRDdXJyZW50U3RlcCwgdmlzaWJsZSwgZGVmYXVsdFZpc2libGUgfSA9IHByb3BzXG4gICAgY29uc3QgdmlzaWJsZVN0YXRlID0gdmlzaWJsZSAhPT0gbnVsbCA/ICEhdmlzaWJsZSA6ICEhZGVmYXVsdFZpc2libGVcbiAgICBjb25zdCBjdXJyZW50U3RlcFN0YXRlID1cbiAgICAgIGN1cnJlbnRTdGVwICE9PSBudWxsID8gY3VycmVudFN0ZXAgOiBkZWZhdWx0Q3VycmVudFN0ZXBcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aXNpYmxlOiB2aXNpYmxlU3RhdGUsXG4gICAgICBjdXJyZW50U3RlcDogY3VycmVudFN0ZXBTdGF0ZSB8fCAwLFxuICAgICAgaGFzRXZlck9wZW5lZDogdmlzaWJsZVN0YXRlLFxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzYXZlRGlhbG9nID0gKG5vZGU6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5kaWFsb2cgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgcmVzZXRTY3JvbGxiYXJQYWRkaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2hhbmdlQm9keVN0eWxlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKGNoYW5nZUJvZHlTdHlsZSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIlxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRTY3JvbGxiYXJQYWRkaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2hhbmdlQm9keVN0eWxlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKGNoYW5nZUJvZHlTdHlsZSkge1xuICAgICAgY29uc3QgeyBpbm5lcldpZHRoIH0gPSB3aW5kb3dcbiAgICAgIHRoaXMuYm9keUlzT3ZlcmZsb3dpbmcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgaW5uZXJXaWR0aFxuICAgICAgaWYgKHRoaXMuYm9keUlzT3ZlcmZsb3dpbmcgJiYgIWRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGggPSBnZXRTY3JvbGxCYXJTaXplKClcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYmFyV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5zY3JvbGxiYXJXaWR0aH1weGBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2FuY2VsQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2FuY2VsUHJvcHMsIGNhbmNlbFRleHQsIHN0ZXBzLCB0eXBlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBjdXJyZW50U3RlcCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGRlZmF1bHRUZXh0ID0gY3VycmVudFN0ZXAgPT09IDAgPyBcIuWPlua2iFwiIDogXCLkuIrkuIDmraVcIlxuICAgIGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gKHByb3BzPzogSUJ1dHRvblByb3BzLCB0ZXh0ID0gZGVmYXVsdFRleHQpID0+IChcbiAgICAgIDxCdXR0b24ga2V5PVwiY2FuY2VsXCIgb25DbGljaz17dGhpcy5oYW5kbGVDYW5jZWx9IHsuLi5wcm9wc30+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9CdXR0b24+XG4gICAgKVxuXG4gICAgaWYgKHN0ZXBzICYmIHN0ZXBzLmxlbmd0aCkge1xuICAgICAgY29uc3QgcHJvcHMgPSBzdGVwc1tjdXJyZW50U3RlcF0uY2FuY2VsUHJvcHNcbiAgICAgIGNvbnN0IHRleHQgPSBzdGVwc1tjdXJyZW50U3RlcF0uY2FuY2VsVGV4dFxuICAgICAgcmV0dXJuIGdlbmVyYXRlQnV0dG9uKHByb3BzLCB0ZXh0KVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gXCJpbmZvcm1cIikge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIGdlbmVyYXRlQnV0dG9uKGNhbmNlbFByb3BzLCBjYW5jZWxUZXh0KVxuICB9XG5cbiAgcHVibGljIGdldENvbmZpcm1CdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb25maXJtUHJvcHMsIGNvbmZpcm1UZXh0LCBzdGVwcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IChwcm9wcz86IElCdXR0b25Qcm9wcywgdGV4dD86IHN0cmluZykgPT4gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBrZXk9XCJwcmltYXJ5XCJcbiAgICAgICAgaW50ZW50PVwicHJpbWFyeVwiXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ29uZmlybX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvQnV0dG9uPlxuICAgIClcblxuICAgIGlmIChzdGVwcyAmJiBzdGVwcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gc3RlcHNbY3VycmVudFN0ZXBdLmNvbmZpcm1Qcm9wc1xuICAgICAgY29uc3QgdGV4dCA9XG4gICAgICAgIHN0ZXBzW2N1cnJlbnRTdGVwXS5jb25maXJtVGV4dCB8fFxuICAgICAgICAoY3VycmVudFN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAtIDEgPyBcIuWujOaIkFwiIDogXCLkuIvkuIDmraVcIilcbiAgICAgIHJldHVybiBnZW5lcmF0ZUJ1dHRvbihwcm9wcywgdGV4dClcbiAgICB9XG4gICAgcmV0dXJuIGdlbmVyYXRlQnV0dG9uKGNvbmZpcm1Qcm9wcywgY29uZmlybVRleHQgfHwgXCLnoa7orqRcIilcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGVzY2FwZUtleUNsb3NhYmxlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKGVzY2FwZUtleUNsb3NhYmxlICYmIGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ2FuY2VsID0gKHR5cGU/OiBhbnkpID0+IHtcbiAgICBjb25zdCB7IG9uQ2FuY2VsLCBzdGVwcywgdmlzaWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAodHlwZSA9PT0gXCJjbG9zZVwiIHx8ICFzdGVwcyB8fCAhc3RlcHMubGVuZ3RoKSB7XG4gICAgICBpZiAodmlzaWJsZSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNhbmNlbCkge1xuICAgICAgICBvbkNhbmNlbCgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgb25DYW5jZWw6IG9uU3RlcENhbmNlbCB9ID0gc3RlcHNbY3VycmVudFN0ZXBdXG4gICAgICBpZiAob25TdGVwQ2FuY2VsKSB7XG4gICAgICAgIG9uU3RlcENhbmNlbCgpXG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFN0ZXAgPT09IDApIHtcbiAgICAgICAgaWYgKHZpc2libGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTdGVwOiBjdXJyZW50U3RlcCAtIDEgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ29uZmlybSA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ29uZmlybSwgc3RlcHMsIHZpc2libGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGN1cnJlbnRTdGVwIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHN0ZXBzICYmIHN0ZXBzLmxlbmd0aCkge1xuICAgICAgY29uc3QgeyBvbkNvbmZpcm06IG9uU3RlcENvbmZpcm0gfSA9IHN0ZXBzW2N1cnJlbnRTdGVwXVxuICAgICAgaWYgKG9uU3RlcENvbmZpcm0pIHtcbiAgICAgICAgb25TdGVwQ29uZmlybSgpXG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKHZpc2libGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTdGVwOiBjdXJyZW50U3RlcCArIDEgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZpc2libGUgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IGZhbHNlIH0pXG4gICAgICB9XG4gICAgICBpZiAob25Db25maXJtKSB7XG4gICAgICAgIG9uQ29uZmlybSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uTGVhdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhZnRlckNsb3NlLCBkZXN0cm95QWZ0ZXJDbG9zZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0aGlzLndyYXBwZXIpIHtcbiAgICAgIHRoaXMud3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9XG4gICAgdGhpcy5yZXNldFNjcm9sbGJhclBhZGRpbmcoKVxuXG4gICAgaWYgKGFmdGVyQ2xvc2UpIHtcbiAgICAgIGFmdGVyQ2xvc2UoKVxuICAgIH1cblxuICAgIGlmIChkZXN0cm95QWZ0ZXJDbG9zZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc0V2ZXJPcGVuZWQ6IGZhbHNlIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGdldENvbnRhaW5lciB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyXG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgaWYgKGdldENvbnRhaW5lcikge1xuICAgICAgZ2V0Q29udGFpbmVyKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgcHVibGljIGhhbmRsZUVudGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZXNjYXBlS2V5Q2xvc2FibGUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodGhpcy53cmFwcGVyKSB7XG4gICAgICBpZiAoZXNjYXBlS2V5Q2xvc2FibGUpIHtcbiAgICAgICAgdGhpcy53cmFwcGVyLmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29tcG9uZW50ID0gKG9wdGlvbnM/OiB7IHZpc2libGU6IGJvb2xlYW4gfSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGJvZHlDbGFzc05hbWUsXG4gICAgICBib2R5U3R5bGUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGZvb3RlckNsYXNzTmFtZSxcbiAgICAgIGZvb3RlckVsZW1lbnQsXG4gICAgICBmb290ZXJTdHlsZSxcbiAgICAgIGhlYWRlckNsYXNzTmFtZSxcbiAgICAgIGhlYWRlckNvbnRlbnQsXG4gICAgICBoZWFkZXJFbGVtZW50LFxuICAgICAgaGVhZGVyU3R5bGUsXG4gICAgICBtYXNrQ2xvc2FibGUsXG4gICAgICBzdGVwcyxcbiAgICAgIHN0eWxlLFxuICAgICAgdGl0bGUsXG4gICAgICB6SW5kZXg6IHpJbmRleFByb3AsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHpJbmRleCA9IHpJbmRleFByb3AgYXMgUmVhY3QuQ1NTUHJvcGVydGllc1tcInpJbmRleFwiXVxuXG4gICAgY29uc3QgcmVzdFByb3BzID0gb21pdChvdGhlclByb3BzLCBbXG4gICAgICBcImFmdGVyQ2xvc2VcIixcbiAgICAgIFwiY2FuY2VsUHJvcHNcIixcbiAgICAgIFwiY2FuY2VsVGV4dFwiLFxuICAgICAgXCJjaGFuZ2VCb2R5U3R5bGVcIixcbiAgICAgIFwiY29uZmlybVByb3BzXCIsXG4gICAgICBcImNvbmZpcm1UZXh0XCIsXG4gICAgICBcImN1cnJlbnRTdGVwXCIsXG4gICAgICBcImRlZmF1bHRDdXJyZW50U3RlcFwiLFxuICAgICAgXCJkZWZhdWx0VmlzaWJsZVwiLFxuICAgICAgXCJkZXN0cm95QWZ0ZXJDbG9zZVwiLFxuICAgICAgXCJlc2NhcGVLZXlDbG9zYWJsZVwiLFxuICAgICAgXCJnZXRDb250YWluZXJcIixcbiAgICAgIFwib25DYW5jZWxcIixcbiAgICAgIFwib25Db25maXJtXCIsXG4gICAgICBcInR5cGVcIixcbiAgICAgIFwidmlzaWJsZVwiLFxuICAgIF0pXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LWlubmVyYClcbiAgICBjb25zdCB7IGN1cnJlbnRTdGVwIH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IHsgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChvcHRpb25zICYmIE9iamVjdC5rZXlzKG9wdGlvbnMpLmluY2x1ZGVzKFwidmlzaWJsZVwiKSkge1xuICAgICAgOyh7IHZpc2libGUgfSA9IG9wdGlvbnMpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXt0aGlzLnNhdmVEaWFsb2d9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXdyYXBwZXJgfVxuICAgICAgICAgIHJlZj17KHdyYXBwZXIpID0+IHtcbiAgICAgICAgICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICAgICAgICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiB2aXNpYmxlID8gXCJmbGV4XCIgOiBcIlwiLFxuICAgICAgICAgICAgekluZGV4LFxuICAgICAgICAgIH19XG4gICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICA+XG4gICAgICAgICAgPEFuaW1hdGVcbiAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPXtgJHtwcmVmaXh9LW1hc2tgfVxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dmlzaWJsZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbWFza2B9XG4gICAgICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXNrQ2xvc2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDYW5jZWwoXCJjbG9zZVwiKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQW5pbWF0ZT5cbiAgICAgICAgICB7LyoqXG4gICAgICAgICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMzNDU1MzQyXG4gICAgICAgICAgICogMS4g5pyA5aSW5bGCIG1hcmdpbjogYXV0byDpnZ7luLjph43opoHjgIJcbiAgICAgICAgICAgKiBEaWFsb2cg55qE5a695bqm5piv6Ieq6YCC5bqU55qE77yM5Zug5q2k5L2/55So5LqGIGRpc3BsYXk6IGZsZXgg5aSE55CG5bGF5Lit77yM6L+Z5L2/5b6X5a2Q5YWD57Sg5YW35pyJ5YyF6KO55oCn77yM5Zug5q2k5a695bqm5omN6IO955Sx5YaF5a655omA5Yaz5a6a77ybXG4gICAgICAgICAgICogbWFyZ2luOiBhdXRvOyDmmK/kuLrkuoblrozlloQgZmxleGJveCBvdmVyZmxvdyDnmoTmoLflvI/jgIJcbiAgICAgICAgICAgKiAyLiB6SW5kZXg6IDEg5piv5Li65LqG6KaG55uW5ZyoIG1hc2sg5LiK44CCXG4gICAgICAgICAgICovfVxuICAgICAgICAgIDxBbmltYXRlXG4gICAgICAgICAgICBvbkFwcGVhcj17dGhpcy5oYW5kbGVFbnRlcn1cbiAgICAgICAgICAgIG9uRW50ZXI9e3RoaXMuaGFuZGxlRW50ZXJ9XG4gICAgICAgICAgICBvbkxlYXZlPXt0aGlzLm9uTGVhdmV9XG4gICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT17cHJlZml4fVxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXG4gICAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Zpc2libGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHN0eWxlPXtzdHlsZX0gey4uLnJlc3RQcm9wc30+XG4gICAgICAgICAgICAgICAge2hlYWRlckVsZW1lbnQgPT09IG51bGxcbiAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgOiBoZWFkZXJFbGVtZW50IHx8IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0taGVhZGVyICR7aGVhZGVyQ2xhc3NOYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17aGVhZGVyU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9ezB9IGNsYXNzTmFtZT17YCR7cHJlZml4fS10aXRsZWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlckNvbnRlbnQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taGVhZGVyQ29udGVudGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyQ29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNsb3NlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyNH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNhbmNlbChcImNsb3NlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPixcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWJvZHkgJHtib2R5Q2xhc3NOYW1lfWB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17Ym9keVN0eWxlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtzdGVwcyAmJiBzdGVwcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgPyBzdGVwc1tjdXJyZW50U3RlcF0uY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgOiBjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7Zm9vdGVyRWxlbWVudCA9PT0gbnVsbCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1mb290ZXIgJHtmb290ZXJDbGFzc05hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2Zvb3RlclN0eWxlfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Zm9vdGVyRWxlbWVudCB8fCBbXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDYW5jZWxCdXR0b24oKSxcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbmZpcm1CdXR0b24oKSxcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0FuaW1hdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIGRpZG1vdW50IOeUsSBwb3J0YWwg55qEIG9uQ2hpbGRyZW5Nb3VudO+8jOWboOS4uiBkaWRtb3VudCDml7Ygd3JhcHBlciDlj6/og73lubbkuI3lnKggZG9tXG4gICAqL1xuICBwdWJsaWMgaGFuZGxlQ2hpbGRyZW5Nb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAodmlzaWJsZSAmJiB0aGlzLndyYXBwZXIpIHtcbiAgICAgIHRoaXMuc2V0U2Nyb2xsYmFyUGFkZGluZygpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSA9IChcbiAgICBfOiBJRGlhbG9nUHJvcHMsXG4gICAgeyB2aXNpYmxlOiB2aXNpYmxlUHJldiB9OiBJRGlhbG9nU3RhdGVcbiAgKSA9PiB7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHZpc2libGUgIT09IHZpc2libGVQcmV2ICYmIHZpc2libGUgJiYgdGhpcy53cmFwcGVyKSB7XG4gICAgICB0aGlzLnNldFNjcm9sbGJhclBhZGRpbmcoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5yZXNldFNjcm9sbGJhclBhZGRpbmcoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoYXNFdmVyT3BlbmVkIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKCFoYXNFdmVyT3BlbmVkKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcnRhbCBvbkNoaWxkcmVuTW91bnQ9e3RoaXMuaGFuZGxlQ2hpbGRyZW5Nb3VudH0+XG4gICAgICAgIHt0aGlzLmdldENvbXBvbmVudCgpfVxuICAgICAgPC9Qb3J0YWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZ1xuIl19