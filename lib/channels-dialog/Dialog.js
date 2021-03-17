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

var _channelsButton = _interopRequireDefault(require("../channels-button"));

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
        return React.createElement(_channelsButton["default"], _extends({
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
        return React.createElement(_channelsButton["default"], _extends({
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

var _default = Dialog;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtZGlhbG9nL0RpYWxvZy50c3giXSwibmFtZXMiOlsicHJlZml4IiwiRGlhbG9nIiwicHJvcHMiLCJjb250YWluZXIiLCJib2R5SXNPdmVyZmxvd2luZyIsInNjcm9sbGJhcldpZHRoIiwiZGlhbG9nIiwid3JhcHBlciIsInNhdmVEaWFsb2ciLCJub2RlIiwicmVzZXRTY3JvbGxiYXJQYWRkaW5nIiwiY2hhbmdlQm9keVN0eWxlIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBhZGRpbmdSaWdodCIsInNldFNjcm9sbGJhclBhZGRpbmciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJ1bmRlZmluZWQiLCJnZXRDYW5jZWxCdXR0b24iLCJjYW5jZWxQcm9wcyIsImNhbmNlbFRleHQiLCJzdGVwcyIsInR5cGUiLCJjdXJyZW50U3RlcCIsInN0YXRlIiwiZGVmYXVsdFRleHQiLCJnZW5lcmF0ZUJ1dHRvbiIsInRleHQiLCJoYW5kbGVDYW5jZWwiLCJsZW5ndGgiLCJnZXRDb25maXJtQnV0dG9uIiwiY29uZmlybVByb3BzIiwiY29uZmlybVRleHQiLCJoYW5kbGVDb25maXJtIiwiaGFuZGxlS2V5RG93biIsImUiLCJlc2NhcGVLZXlDbG9zYWJsZSIsImtleUNvZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNhbmNlbCIsInZpc2libGUiLCJzZXRTdGF0ZSIsIm9uU3RlcENhbmNlbCIsIm9uQ29uZmlybSIsIm9uU3RlcENvbmZpcm0iLCJvbkxlYXZlIiwiYWZ0ZXJDbG9zZSIsImRlc3Ryb3lBZnRlckNsb3NlIiwiZGlzcGxheSIsImhhc0V2ZXJPcGVuZWQiLCJnZXRDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVFbnRlciIsImZvY3VzIiwiZ2V0Q29tcG9uZW50Iiwib3B0aW9ucyIsImJvZHlTdHlsZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZm9vdGVyRWxlbWVudCIsImZvb3RlclN0eWxlIiwiaGVhZGVyQ29udGVudCIsImhlYWRlckVsZW1lbnQiLCJoZWFkZXJTdHlsZSIsIm1hc2tDbG9zYWJsZSIsInRpdGxlIiwib3RoZXJQcm9wcyIsInJlc3RQcm9wcyIsImNsYXNzU2V0IiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwicG9zaXRpb24iLCJtYXJnaW4iLCJ6SW5kZXgiLCJ0b3AiLCJsZWZ0IiwiaGFuZGxlQ2hpbGRyZW5Nb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsIl8iLCJ2aXNpYmxlUHJldiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZGVmYXVsdEN1cnJlbnRTdGVwIiwiZGVmYXVsdFZpc2libGUiLCJ2aXNpYmxlU3RhdGUiLCJjdXJyZW50U3RlcFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwib2JqZWN0IiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwiaW5mbyIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwiZGFuZ2VyIiwiY29uZmlybSIsImluZm9ybSIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm5ld1N0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxzQkFBZjs7SUFtSU1DLE07Ozs7O0FBOExKLGtCQUFZQyxNQUFaLEVBQWlDO0FBQUE7O0FBQUE7O0FBQy9CLDhCQUFNQSxNQUFOO0FBRCtCLFVBaEIxQkMsU0FnQjBCO0FBQUEsVUFYMUJDLGlCQVcwQjtBQUFBLFVBTjFCQyxjQU0wQjtBQUFBLFVBSjFCQyxNQUkwQjtBQUFBLFVBRjFCQyxPQUUwQjs7QUFBQSxVQWMxQkMsVUFkMEIsR0FjYixVQUFDQyxJQUFELEVB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QUZZaUIsT0FFWixTQUZZQSxPQUVaO0FBQUEsTUFERFMsYUFDQyxTQUREQSxhQUNDO0FBQ0gsTUFBTXdELFFBQStCLEdBQUcsRUFBeEM7O0FBQ0EsTUFBSWxGLFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN4QmtGLElBQUFBLFFBQVEsQ0FBQ2xGLFdBQVQsR0FBdUJBLFdBQXZCO0FBQ0Q7O0FBQ0QsTUFBSWlCLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQmlFLElBQUFBLFFBQVEsQ0FBQ2pFLE9BQVQsR0FBbUJBLE9BQW5COztBQUNBLFFBQUksQ0FBQ1MsYUFBRCxJQUFrQlQsT0FBdEIsRUFBK0I7QUFDN0JpRSxNQUFBQSxRQUFRLENBQUN4RCxhQUFULEdBQXlCLElBQXpCO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPcUIsTUFBTSxDQUFDQyxJQUFQLENBQVlrQyxRQUFaLEVBQXNCNUUsTUFBdEIsR0FBK0IsQ0FBL0IsR0FBbUM0RSxRQUFuQyxHQUE4QyxJQUFyRDtBQUNELEM7O2VBZ1pZNUcsTSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBnZXRTY3JvbGxCYXJTaXplIGZyb20gXCJyYy11dGlsL2xpYi9nZXRTY3JvbGxCYXJTaXplXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBBbmltYXRlIGZyb20gXCJyYy1hbmltYXRlXCJcbmltcG9ydCBvbWl0IGZyb20gXCIuLi9fdXRpbC9vbWl0XCJcbmltcG9ydCBQb3J0YWwgZnJvbSBcIi4uL3BvcnRhbFwiXG5pbXBvcnQgQnV0dG9uLCB7IElCdXR0b25Qcm9wcyB9IGZyb20gXCIuLi9jaGFubmVscy1idXR0b25cIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1jaGFubmVscy1kaWFsb2dcIlxuXG5pbnRlcmZhY2UgSVN0ZXBQcm9wcyB7XG4gIC8qKlxuICAgKiDlj5bmtojmjInpkq7nmoQgcHJvcHPvvIzlj4LogIMgQnV0dG9uIFByb3BzXG4gICAqL1xuICBjYW5jZWxQcm9wcz86IFBhcnRpYWw8SUJ1dHRvblByb3BzPlxuICAvKipcbiAgICog5Y+W5raI5oyJ6ZKu55qEIOaWh+Wtl1xuICAgKi9cbiAgY2FuY2VsVGV4dD86IHN0cmluZ1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog56Gu6K6k5oyJ6ZKu55qEIHByb3Bz77yM5Y+C6ICDIEJ1dHRvbiBQcm9wc1xuICAgKi9cbiAgY29uZmlybVByb3BzPzogUGFydGlhbDxJQnV0dG9uUHJvcHM+XG4gIC8qKlxuICAgKiDnoa7orqTmjInpkq7nmoQg5paH5a2XXG4gICAqL1xuICBjb25maXJtVGV4dD86IHN0cmluZ1xuICAvKipcbiAgICog54K55Ye75Y+W5raI5oyJ6ZKu44CB5Y+z5LiK6KeS5YWz6Zet5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2FuY2VsPzogKCgpID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog54K55Ye756Gu6K6k5oyJ6ZKu5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ29uZmlybT86ICgoKSA9PiB2b2lkKSB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGlhbG9nUHJvcHMgZXh0ZW5kcyBJU3RlcFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlhbPpl63lkI7vvIh0cmFuc2l0aW9uIOe7k+adn+WQju+8ieeahCBoYW5kbGVyXG4gICAqL1xuICBhZnRlckNsb3NlPzogKCgpID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog6K6+572uIGJvZHkg5qC35byPXG4gICAqL1xuICBib2R5U3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiBkaWFsb2cg5omT5byA5ZKM5YWz6Zet5pe26YO95Lya5pu05pS5IGRvY3VtZW50LmJvZHkuc3R5bGXjgILlj6/ku6Xku6XmraQgcHJvcCDmjqfliLbmmK/lkKbkv67mlLnjgILkvb/nlKjlnLrmma/lpoLvvJrmta7lsYLlhoXlvLnlh7ogZGlhbG9nXG4gICAqL1xuICBjaGFuZ2VCb2R5U3R5bGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI3vvIzms6jmhI8gRGlhbG9nIOaJgOacieeahOWxnuaAp+S8mumZhOWKoOWIsOWGhemDqOeahOWGheWuueWFg+e0oOS4iu+8jOiAjOS4jeaYr+WMheWQqyBtYXNrIOeahOacgOWkluWxguWFg+e0oFxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmjIflrprlvZPliY3nmoQgc3RlcO+8jOS7heWcqOS9v+eUqCBzdGVwcyBwcm9wIOaXtuacieS9nOeUqFxuICAgKi9cbiAgY3VycmVudFN0ZXA/OiBudWxsIHwgbnVtYmVyXG4gIC8qKlxuICAgKiDmjIflrprpu5jorqTnmoTotbflp4sgc3RlcO+8jOS7heWcqOS9v+eUqCBzdGVwcyBwcm9wIOaXtuacieS9nOeUqFxuICAgKi9cbiAgZGVmYXVsdEN1cnJlbnRTdGVwPzogbnVsbCB8IG51bWJlclxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya5piv5ZCm6buY6K6k5pi+56S6XG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZT86IG51bGwgfCBib29sZWFuXG4gIC8qKlxuICAgKiDmmK/lkKbmr4/mrKEgdmlzaWJsZTogZmFsc2Ug6YO96ZSA5q+BIGRvbVxuICAgKi9cbiAgZGVzdHJveUFmdGVyQ2xvc2U/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIEgRVNDIOWFs+mXrVxuICAgKi9cbiAgZXNjYXBlS2V5Q2xvc2FibGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlrozlhajoh6rlrprkuYkgZm9vdGVyIOeahOWGheWuue+8jOWmguaenOaDs+imgeaUueWPmCBmb290ZXIg54i257qn55qE5qC35byP77yM5L2/55SoIGZvb3RlclN0eWxlIFByb3BcbiAgICovXG4gIGZvb3RlckVsZW1lbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOiuvue9riBmb290ZXIg5qC35byPXG4gICAqL1xuICBmb290ZXJTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOaMh+WumuW8ueWHuuWxgueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R577yM57G75Ly85LqOIFRvb2x0aXAg55qEIGdldFBvcHVwQ29udGFpbmVyXG4gICAqL1xuICBnZXRDb250YWluZXI/OiAoKCkgPT4gSFRNTEVsZW1lbnQpIHwgbnVsbFxuICAvKipcbiAgICogaGVhZGVyIOagh+mimOS4i+eahOWGheWuuVxuICAgKi9cbiAgaGVhZGVyQ29udGVudD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog5a6M5YWo6Ieq5a6a5LmJIGhlYWRlciDnmoTlhoXlrrlcbiAgICovXG4gIGhlYWRlckVsZW1lbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOiuvue9riBoZWFkZXIg5qC35byPXG4gICAqL1xuICBoZWFkZXJTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOeCueWHuyBtYXNrIOaYr+WQpuinpuWPkSBjYW5jZWwg5LqL5Lu2XG4gICAqL1xuICBtYXNrQ2xvc2FibGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmjIflrprmraXpqqTvvIznlKjku6Xlv6vmjbfkuIrkuIDmraXjgIHkuIvkuIDmraXnmoTpnIDmsYLjgIJcbiAgICovXG4gIHN0ZXBzPzogQXJyYXk8SVN0ZXBQcm9wcz5cbiAgLyoqXG4gICAqIOmZhOWKoOagt+W8j++8jOazqOaEjyBEaWFsb2cg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAqL1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOWvueivneahhuagh+mimFxuICAgKi9cbiAgdGl0bGU/OiBudWxsIHwgUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiBjb25maXJtIOS4uuWPlua2iOOAgeehruiupOaMiemSru+8m2luZm9ybSDkuLrlj6rmnInnoa7orqTmjInpkq5cbiAgICovXG4gIHR5cGU/OiBcImNvbmZpcm1cIiB8IFwiaW5mb3JtXCJcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muaYr+WQpuaYvuekulxuICAgKi9cbiAgdmlzaWJsZT86IG51bGwgfCBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ1N0YXRlIHtcbiAgdmlzaWJsZT86IGJvb2xlYW5cbiAgY3VycmVudFN0ZXA6IG51bWJlclxuICBoYXNFdmVyT3BlbmVkPzogYm9vbGVhblxufVxuXG4vKipcbiAqIOWvueivneahhueUqOS6juWFqOWxgOaAp+eahOWPjemmiO+8jOmAmuW4uOWIhuS4uuKAnOehruiupOaTjeS9nOKAneS4juKAnOWRiuefpeS/oeaBr+KAneOAglxuICog56Gu6K6k5pON5L2c55So5LqO6K+i6Zeu55So5oi34oCc5pON5L2c5piv5ZCm57un57ut6L+b6KGM77yf4oCd77yM5aaC5aSn6YOo5YiG55qE5LqM5qyh56Gu6K6k5Y+N6aaI44CC5ZGK55+l5L+h5oGv5YiZ55So5LqO55+l5Lya55So5oi35p+Q5Liq5Y+K5pe25Y+N6aaI77yM5aaC5L+h5oGv5o+Q5Lqk5oiQ5Yqf44CB5aSx6LSl562J44CCXG4gKi9cbmNsYXNzIERpYWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJRGlhbG9nUHJvcHMsIElEaWFsb2dTdGF0ZT4ge1xuICBwdWJsaWMgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiDlhbPpl63lkI7vvIh0cmFuc2l0aW9uIOe7k+adn+WQju+8ieeahCBoYW5kbGVyXG4gICAgICovXG4gICAgYWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572uIGJvZHkg5qC35byPXG4gICAgICovXG4gICAgYm9keVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOWPlua2iOaMiemSrueahCBwcm9wc++8jOWPguiAgyBCdXR0b24gUHJvcHNcbiAgICAgKi9cbiAgICBjYW5jZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDlj5bmtojmjInpkq7nmoQg5paH5a2XXG4gICAgICovXG4gICAgY2FuY2VsVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICogZGlhbG9nIOaJk+W8gOWSjOWFs+mXreaXtumDveS8muabtOaUuSBkb2N1bWVudC5ib2R5LnN0eWxl44CC5Y+v5Lul5Lul5q2kIHByb3Ag5o6n5Yi25piv5ZCm5L+u5pS544CC5L2/55So5Zy65pmv5aaC77ya5rWu5bGC5YaF5by55Ye6IGRpYWxvZ1xuICAgICAqL1xuICAgIGNoYW5nZUJvZHlTdHlsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5a2Q6IqC54K5XG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOmZhOWKoOexu+WQje+8jOazqOaEjyBEaWFsb2cg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOehruiupOaMiemSrueahCBwcm9wc++8jOWPguiAgyBCdXR0b24gUHJvcHNcbiAgICAgKi9cbiAgICBjb25maXJtUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog56Gu6K6k5oyJ6ZKu55qEIOaWh+Wtl1xuICAgICAqL1xuICAgIGNvbmZpcm1UZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDmjIflrprlvZPliY3nmoQgc3RlcO+8jOS7heWcqOS9v+eUqCBzdGVwcyBwcm9wIOaXtuacieS9nOeUqFxuICAgICAqL1xuICAgIGN1cnJlbnRTdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOaMh+Wumum7mOiupOeahOi1t+WniyBzdGVw77yM5LuF5Zyo5L2/55SoIHN0ZXBzIHByb3Ag5pe25pyJ5L2c55SoXG4gICAgICovXG4gICAgZGVmYXVsdEN1cnJlbnRTdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOWGhemDqOmpseWKqO+8muaYr+WQpum7mOiupOaYvuekulxuICAgICAqL1xuICAgIGRlZmF1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmr4/mrKEgdmlzaWJsZTogZmFsc2Ug6YO96ZSA5q+BIGRvbVxuICAgICAqL1xuICAgIGRlc3Ryb3lBZnRlckNsb3NlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmlK/mjIEgRVNDIOWFs+mXrVxuICAgICAqL1xuICAgIGVzY2FwZUtleUNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlrozlhajoh6rlrprkuYkgZm9vdGVyIOeahOWGheWuue+8jOWmguaenOaDs+imgeaUueWPmCBmb290ZXIg54i257qn55qE5qC35byP77yM5L2/55SoIGZvb3RlclN0eWxlIFByb3BcbiAgICAgKi9cbiAgICBmb290ZXJFbGVtZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDorr7nva4gZm9vdGVyIOagt+W8j1xuICAgICAqL1xuICAgIGZvb3RlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOaMh+WumuW8ueWHuuWxgueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R577yM57G75Ly85LqOIFRvb2x0aXAg55qEIGdldFBvcHVwQ29udGFpbmVyXG4gICAgICovXG4gICAgZ2V0Q29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiBoZWFkZXIg5qCH6aKY5LiL55qE5YaF5a65XG4gICAgICovXG4gICAgaGVhZGVyQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog5a6M5YWo6Ieq5a6a5LmJIGhlYWRlciDnmoTlhoXlrrlcbiAgICAgKi9cbiAgICBoZWFkZXJFbGVtZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDorr7nva4gaGVhZGVyIOagt+W8j1xuICAgICAqL1xuICAgIGhlYWRlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOeCueWHuyBtYXNrIOaYr+WQpuinpuWPkSBjYW5jZWwg5LqL5Lu2XG4gICAgICovXG4gICAgbWFza0Nsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDngrnlh7vlj5bmtojmjInpkq7jgIHlj7PkuIrop5LlhbPpl63ml7bnmoQgaGFuZGxlclxuICAgICAqL1xuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDngrnlh7vnoa7orqTmjInpkq7ml7bnmoQgaGFuZGxlclxuICAgICAqL1xuICAgIG9uQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg5qC35byP77yM5rOo5oSPIERpYWxvZyDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICAgKi9cbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDlr7nor53moYbmoIfpophcbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICogY29uZmlybSDkuLrlj5bmtojjgIHnoa7orqTmjInpkq7vvJtpbmZvcm0g5Li65Y+q5pyJ56Gu6K6k5oyJ6ZKuXG4gICAgICovXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcImNvbmZpcm1cIiwgXCJpbmZvcm1cIl0pLFxuICAgIC8qKlxuICAgICAqIOWklumDqOaOp+WItu+8muaYr+WQpuaYvuekulxuICAgICAqL1xuICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IElEaWFsb2dQcm9wcyA9IHtcbiAgICBhZnRlckNsb3NlOiBudWxsLFxuICAgIGJvZHlTdHlsZToge30sXG4gICAgY2FuY2VsUHJvcHM6IHt9LFxuICAgIGNhbmNlbFRleHQ6IFwi5Y+W5raIXCIsXG4gICAgY2hhbmdlQm9keVN0eWxlOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAgIGNvbmZpcm1Qcm9wczoge30sXG4gICAgY29uZmlybVRleHQ6IFwi56Gu6K6kXCIsXG4gICAgY3VycmVudFN0ZXA6IG51bGwsXG4gICAgZGVmYXVsdEN1cnJlbnRTdGVwOiBudWxsLFxuICAgIGRlZmF1bHRWaXNpYmxlOiBudWxsLFxuICAgIGRlc3Ryb3lBZnRlckNsb3NlOiBmYWxzZSxcbiAgICBlc2NhcGVLZXlDbG9zYWJsZTogdHJ1ZSxcbiAgICBmb290ZXJFbGVtZW50OiB1bmRlZmluZWQsXG4gICAgZm9vdGVyU3R5bGU6IHt9LFxuICAgIGdldENvbnRhaW5lcjogbnVsbCxcbiAgICBoZWFkZXJDb250ZW50OiBudWxsLFxuICAgIGhlYWRlckVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICBoZWFkZXJTdHlsZToge30sXG4gICAgbWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgICBvbkNhbmNlbDogbnVsbCxcbiAgICBvbkNvbmZpcm06IG51bGwsXG4gICAgc3R5bGU6IHt9LFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHR5cGU6IFwiY29uZmlybVwiLFxuICAgIHZpc2libGU6IG51bGwsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluZm86IGFueVxuXG4gIHB1YmxpYyBzdGF0aWMgc3VjY2VzczogYW55XG5cbiAgcHVibGljIHN0YXRpYyB3YXJuaW5nOiBhbnlcblxuICBwdWJsaWMgc3RhdGljIGRhbmdlcjogYW55XG5cbiAgcHVibGljIHN0YXRpYyBjb25maXJtOiBhbnlcblxuICBwdWJsaWMgc3RhdGljIGluZm9ybTogYW55XG5cbiAgcHVibGljIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSAoXG4gICAgeyBjdXJyZW50U3RlcCwgdmlzaWJsZSB9OiBJRGlhbG9nUHJvcHMsXG4gICAgeyBoYXNFdmVyT3BlbmVkIH06IElEaWFsb2dTdGF0ZVxuICApID0+IHtcbiAgICBjb25zdCBuZXdTdGF0ZTogUGFydGlhbDxJRGlhbG9nU3RhdGU+ID0ge31cbiAgICBpZiAoY3VycmVudFN0ZXAgIT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlLmN1cnJlbnRTdGVwID0gY3VycmVudFN0ZXBcbiAgICB9XG4gICAgaWYgKHZpc2libGUgIT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlLnZpc2libGUgPSB2aXNpYmxlXG4gICAgICBpZiAoIWhhc0V2ZXJPcGVuZWQgJiYgdmlzaWJsZSkge1xuICAgICAgICBuZXdTdGF0ZS5oYXNFdmVyT3BlbmVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmtleXMobmV3U3RhdGUpLmxlbmd0aCA+IDAgPyBuZXdTdGF0ZSA6IG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiDkv53lrZjoioLngrnmjILovb3nmoTlr7nosaFcbiAgICovXG4gIHB1YmxpYyBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50IHwgbnVsbFxuXG4gIC8qKlxuICAgKiDkv53lrZjpobXpnaLmmK/lkKYgb3ZlcmZsb3dcbiAgICovXG4gIHB1YmxpYyBib2R5SXNPdmVyZmxvd2luZzogYm9vbGVhblxuXG4gIC8qKlxuICAgKiDkv53lrZjlvZPliY3mtY/op4jlmajnmoTmu5rliqjmnaHlrr3luqZcbiAgICovXG4gIHB1YmxpYyBzY3JvbGxiYXJXaWR0aDogbnVtYmVyXG5cbiAgcHVibGljIGRpYWxvZzogSFRNTERpdkVsZW1lbnRcblxuICBwdWJsaWMgd3JhcHBlcjogSFRNTERpdkVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSURpYWxvZ1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyBjdXJyZW50U3RlcCwgZGVmYXVsdEN1cnJlbnRTdGVwLCB2aXNpYmxlLCBkZWZhdWx0VmlzaWJsZSB9ID0gcHJvcHNcbiAgICBjb25zdCB2aXNpYmxlU3RhdGUgPSB2aXNpYmxlICE9PSBudWxsID8gISF2aXNpYmxlIDogISFkZWZhdWx0VmlzaWJsZVxuICAgIGNvbnN0IGN1cnJlbnRTdGVwU3RhdGUgPVxuICAgICAgY3VycmVudFN0ZXAgIT09IG51bGwgPyBjdXJyZW50U3RlcCA6IGRlZmF1bHRDdXJyZW50U3RlcFxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpc2libGU6IHZpc2libGVTdGF0ZSxcbiAgICAgIGN1cnJlbnRTdGVwOiBjdXJyZW50U3RlcFN0YXRlIHx8IDAsXG4gICAgICBoYXNFdmVyT3BlbmVkOiB2aXNpYmxlU3RhdGUsXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNhdmVEaWFsb2cgPSAobm9kZTogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmRpYWxvZyA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyByZXNldFNjcm9sbGJhclBhZGRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjaGFuZ2VCb2R5U3R5bGUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoY2hhbmdlQm9keVN0eWxlKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJcIlxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFNjcm9sbGJhclBhZGRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjaGFuZ2VCb2R5U3R5bGUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoY2hhbmdlQm9keVN0eWxlKSB7XG4gICAgICBjb25zdCB7IGlubmVyV2lkdGggfSA9IHdpbmRvd1xuICAgICAgdGhpcy5ib2R5SXNPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCBpbm5lcldpZHRoXG4gICAgICBpZiAodGhpcy5ib2R5SXNPdmVyZmxvd2luZyAmJiAhZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJXaWR0aCA9IGdldFNjcm9sbEJhclNpemUoKVxuICAgICAgICBpZiAodGhpcy5zY3JvbGxiYXJXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLnNjcm9sbGJhcldpZHRofXB4YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDYW5jZWxCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjYW5jZWxQcm9wcywgY2FuY2VsVGV4dCwgc3RlcHMsIHR5cGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGN1cnJlbnRTdGVwIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgZGVmYXVsdFRleHQgPSBjdXJyZW50U3RlcCA9PT0gMCA/IFwi5Y+W5raIXCIgOiBcIuS4iuS4gOatpVwiXG4gICAgY29uc3QgZ2VuZXJhdGVCdXR0b24gPSAocHJvcHM/OiBJQnV0dG9uUHJvcHMsIHRleHQgPSBkZWZhdWx0VGV4dCkgPT4gKFxuICAgICAgPEJ1dHRvbiBrZXk9XCJjYW5jZWxcIiB0aGVtZT1cImxpZ2h0XCIgb25DbGljaz17dGhpcy5oYW5kbGVDYW5jZWx9IHsuLi5wcm9wc30+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9CdXR0b24+XG4gICAgKVxuXG4gICAgaWYgKHN0ZXBzICYmIHN0ZXBzLmxlbmd0aCkge1xuICAgICAgY29uc3QgcHJvcHMgPSBzdGVwc1tjdXJyZW50U3RlcF0uY2FuY2VsUHJvcHNcbiAgICAgIGNvbnN0IHRleHQgPSBzdGVwc1tjdXJyZW50U3RlcF0uY2FuY2VsVGV4dFxuICAgICAgcmV0dXJuIGdlbmVyYXRlQnV0dG9uKHByb3BzLCB0ZXh0KVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gXCJpbmZvcm1cIikge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIGdlbmVyYXRlQnV0dG9uKGNhbmNlbFByb3BzLCBjYW5jZWxUZXh0KVxuICB9XG5cbiAgcHVibGljIGdldENvbmZpcm1CdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb25maXJtUHJvcHMsIGNvbmZpcm1UZXh0LCBzdGVwcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IChwcm9wcz86IElCdXR0b25Qcm9wcywgdGV4dD86IHN0cmluZykgPT4gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBrZXk9XCJwcmltYXJ5XCJcbiAgICAgICAgaW50ZW50PVwicHJpbWFyeVwiXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ29uZmlybX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvQnV0dG9uPlxuICAgIClcblxuICAgIGlmIChzdGVwcyAmJiBzdGVwcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gc3RlcHNbY3VycmVudFN0ZXBdLmNvbmZpcm1Qcm9wc1xuICAgICAgY29uc3QgdGV4dCA9XG4gICAgICAgIHN0ZXBzW2N1cnJlbnRTdGVwXS5jb25maXJtVGV4dCB8fFxuICAgICAgICAoY3VycmVudFN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAtIDEgPyBcIuWujOaIkFwiIDogXCLkuIvkuIDmraVcIilcbiAgICAgIHJldHVybiBnZW5lcmF0ZUJ1dHRvbihwcm9wcywgdGV4dClcbiAgICB9XG4gICAgcmV0dXJuIGdlbmVyYXRlQnV0dG9uKGNvbmZpcm1Qcm9wcywgY29uZmlybVRleHQgfHwgXCLnoa7orqRcIilcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGVzY2FwZUtleUNsb3NhYmxlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKGVzY2FwZUtleUNsb3NhYmxlICYmIGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ2FuY2VsID0gKHR5cGU/OiBhbnkpID0+IHtcbiAgICBjb25zdCB7IG9uQ2FuY2VsLCBzdGVwcywgdmlzaWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAodHlwZSA9PT0gXCJjbG9zZVwiIHx8ICFzdGVwcyB8fCAhc3RlcHMubGVuZ3RoKSB7XG4gICAgICBpZiAodmlzaWJsZSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNhbmNlbCkge1xuICAgICAgICBvbkNhbmNlbCgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgb25DYW5jZWw6IG9uU3RlcENhbmNlbCB9ID0gc3RlcHNbY3VycmVudFN0ZXBdXG4gICAgICBpZiAob25TdGVwQ2FuY2VsKSB7XG4gICAgICAgIG9uU3RlcENhbmNlbCgpXG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFN0ZXAgPT09IDApIHtcbiAgICAgICAgaWYgKHZpc2libGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTdGVwOiBjdXJyZW50U3RlcCAtIDEgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ29uZmlybSA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ29uZmlybSwgc3RlcHMsIHZpc2libGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGN1cnJlbnRTdGVwIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHN0ZXBzICYmIHN0ZXBzLmxlbmd0aCkge1xuICAgICAgY29uc3QgeyBvbkNvbmZpcm06IG9uU3RlcENvbmZpcm0gfSA9IHN0ZXBzW2N1cnJlbnRTdGVwXVxuICAgICAgaWYgKG9uU3RlcENvbmZpcm0pIHtcbiAgICAgICAgb25TdGVwQ29uZmlybSgpXG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKHZpc2libGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTdGVwOiBjdXJyZW50U3RlcCArIDEgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZpc2libGUgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IGZhbHNlIH0pXG4gICAgICB9XG4gICAgICBpZiAob25Db25maXJtKSB7XG4gICAgICAgIG9uQ29uZmlybSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uTGVhdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhZnRlckNsb3NlLCBkZXN0cm95QWZ0ZXJDbG9zZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0aGlzLndyYXBwZXIpIHtcbiAgICAgIHRoaXMud3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9XG4gICAgdGhpcy5yZXNldFNjcm9sbGJhclBhZGRpbmcoKVxuXG4gICAgaWYgKGFmdGVyQ2xvc2UpIHtcbiAgICAgIGFmdGVyQ2xvc2UoKVxuICAgIH1cblxuICAgIGlmIChkZXN0cm95QWZ0ZXJDbG9zZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc0V2ZXJPcGVuZWQ6IGZhbHNlIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGdldENvbnRhaW5lciB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyXG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgaWYgKGdldENvbnRhaW5lcikge1xuICAgICAgZ2V0Q29udGFpbmVyKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgcHVibGljIGhhbmRsZUVudGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZXNjYXBlS2V5Q2xvc2FibGUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodGhpcy53cmFwcGVyKSB7XG4gICAgICBpZiAoZXNjYXBlS2V5Q2xvc2FibGUpIHtcbiAgICAgICAgdGhpcy53cmFwcGVyLmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29tcG9uZW50ID0gKG9wdGlvbnM/OiB7IHZpc2libGU6IGJvb2xlYW4gfSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGJvZHlTdHlsZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZm9vdGVyRWxlbWVudCxcbiAgICAgIGZvb3RlclN0eWxlLFxuICAgICAgaGVhZGVyQ29udGVudCxcbiAgICAgIGhlYWRlckVsZW1lbnQsXG4gICAgICBoZWFkZXJTdHlsZSxcbiAgICAgIG1hc2tDbG9zYWJsZSxcbiAgICAgIHN0ZXBzLFxuICAgICAgc3R5bGUsXG4gICAgICB0aXRsZSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVzdFByb3BzID0gb21pdChvdGhlclByb3BzLCBbXG4gICAgICBcImFmdGVyQ2xvc2VcIixcbiAgICAgIFwiY2FuY2VsUHJvcHNcIixcbiAgICAgIFwiY2FuY2VsVGV4dFwiLFxuICAgICAgXCJjaGFuZ2VCb2R5U3R5bGVcIixcbiAgICAgIFwiY29uZmlybVByb3BzXCIsXG4gICAgICBcImNvbmZpcm1UZXh0XCIsXG4gICAgICBcImN1cnJlbnRTdGVwXCIsXG4gICAgICBcImRlZmF1bHRDdXJyZW50U3RlcFwiLFxuICAgICAgXCJkZWZhdWx0VmlzaWJsZVwiLFxuICAgICAgXCJkZXN0cm95QWZ0ZXJDbG9zZVwiLFxuICAgICAgXCJlc2NhcGVLZXlDbG9zYWJsZVwiLFxuICAgICAgXCJnZXRDb250YWluZXJcIixcbiAgICAgIFwib25DYW5jZWxcIixcbiAgICAgIFwib25Db25maXJtXCIsXG4gICAgICBcInR5cGVcIixcbiAgICAgIFwidmlzaWJsZVwiLFxuICAgIF0pXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LWlubmVyYClcbiAgICBjb25zdCB7IGN1cnJlbnRTdGVwIH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IHsgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChvcHRpb25zICYmIE9iamVjdC5rZXlzKG9wdGlvbnMpLmluY2x1ZGVzKFwidmlzaWJsZVwiKSkge1xuICAgICAgOyh7IHZpc2libGUgfSA9IG9wdGlvbnMpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXt0aGlzLnNhdmVEaWFsb2d9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXdyYXBwZXJgfVxuICAgICAgICAgIHJlZj17KHdyYXBwZXIpID0+IHtcbiAgICAgICAgICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICAgICAgICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IHZpc2libGUgPyBcImZsZXhcIiA6IFwiXCIgfX1cbiAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgID5cbiAgICAgICAgICA8QW5pbWF0ZVxuICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9e2Ake3ByZWZpeH0tbWFza2B9XG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgdHJhbnNpdGlvbkFwcGVhclxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2aXNpYmxlICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1tYXNrYH1cbiAgICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKG1hc2tDbG9zYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNhbmNlbChcImNsb3NlXCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9BbmltYXRlPlxuICAgICAgICAgIHsvKipcbiAgICAgICAgICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzM0NTUzNDJcbiAgICAgICAgICAgKiAxLiDmnIDlpJblsYIgbWFyZ2luOiBhdXRvIOmdnuW4uOmHjeimgeOAglxuICAgICAgICAgICAqIERpYWxvZyDnmoTlrr3luqbmmK/oh6rpgILlupTnmoTvvIzlm6DmraTkvb/nlKjkuoYgZGlzcGxheTogZmxleCDlpITnkIblsYXkuK3vvIzov5nkvb/lvpflrZDlhYPntKDlhbfmnInljIXoo7nmgKfvvIzlm6DmraTlrr3luqbmiY3og73nlLHlhoXlrrnmiYDlhrPlrprvvJtcbiAgICAgICAgICAgKiBtYXJnaW46IGF1dG87IOaYr+S4uuS6huWujOWWhCBmbGV4Ym94IG92ZXJmbG93IOeahOagt+W8j+OAglxuICAgICAgICAgICAqIDIuIHpJbmRleDogMSDmmK/kuLrkuobopobnm5blnKggbWFzayDkuIrjgIJcbiAgICAgICAgICAgKi99XG4gICAgICAgICAgPEFuaW1hdGVcbiAgICAgICAgICAgIG9uQXBwZWFyPXt0aGlzLmhhbmRsZUVudGVyfVxuICAgICAgICAgICAgb25FbnRlcj17dGhpcy5oYW5kbGVFbnRlcn1cbiAgICAgICAgICAgIG9uTGVhdmU9e3RoaXMub25MZWF2ZX1cbiAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPXtwcmVmaXh9XG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgekluZGV4OiAxLFxuICAgICAgICAgICAgICB0b3A6IFwidmFyKC0tZGlhbG9nLW9mZnNldC15KVwiLFxuICAgICAgICAgICAgICBsZWZ0OiBcInZhcigtLWRpYWxvZy1vZmZzZXQteClcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Zpc2libGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHN0eWxlPXtzdHlsZX0gey4uLnJlc3RQcm9wc30+XG4gICAgICAgICAgICAgICAge2hlYWRlckVsZW1lbnQgPT09IG51bGxcbiAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgOiBoZWFkZXJFbGVtZW50IHx8IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1oZWFkZXJgfSBzdHlsZT17aGVhZGVyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9ezB9IGNsYXNzTmFtZT17YCR7cHJlZml4fS10aXRsZWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlckNvbnRlbnQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taGVhZGVyQ29udGVudGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyQ29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1jbG9zZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDYW5jZWwoXCJjbG9zZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIuMjUgMTAuNjkzMkw2LjA1NjgyIDQuNUw1IDUuNTU2ODJMMTEuMTkzMiAxMS43NUw1IDE3Ljk0MzJMNi4wNTY4MiAxOUwxMi4yNSAxMi44MDY4TDE4LjQ0MzIgMTlMMTkuNSAxNy45NDMyTDEzLjMwNjggMTEuNzVMMTkuNSA1LjU1NjgyTDE4LjQ0MzIgNC41TDEyLjI1IDEwLjY5MzJaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eT1cIjAuOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+LFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1ib2R5YH0gc3R5bGU9e2JvZHlTdHlsZX0+XG4gICAgICAgICAgICAgICAgICB7c3RlcHMgJiYgc3RlcHMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgID8gc3RlcHNbY3VycmVudFN0ZXBdLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIDogY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2Zvb3RlckVsZW1lbnQgPT09IG51bGwgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tZm9vdGVyYH0gc3R5bGU9e2Zvb3RlclN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAge2Zvb3RlckVsZW1lbnQgfHwgW1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2FuY2VsQnV0dG9uKCksXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb25maXJtQnV0dG9uKCksXG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9BbmltYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBkaWRtb3VudCDnlLEgcG9ydGFsIOeahCBvbkNoaWxkcmVuTW91bnTvvIzlm6DkuLogZGlkbW91bnQg5pe2IHdyYXBwZXIg5Y+v6IO95bm25LiN5ZyoIGRvbVxuICAgKi9cbiAgcHVibGljIGhhbmRsZUNoaWxkcmVuTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHZpc2libGUgJiYgdGhpcy53cmFwcGVyKSB7XG4gICAgICB0aGlzLnNldFNjcm9sbGJhclBhZGRpbmcoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUgPSAoXG4gICAgXzogSURpYWxvZ1Byb3BzLFxuICAgIHsgdmlzaWJsZTogdmlzaWJsZVByZXYgfTogSURpYWxvZ1N0YXRlXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICh2aXNpYmxlICE9PSB2aXNpYmxlUHJldiAmJiB2aXNpYmxlICYmIHRoaXMud3JhcHBlcikge1xuICAgICAgdGhpcy5zZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHZpc2libGUpIHtcbiAgICAgIHRoaXMucmVzZXRTY3JvbGxiYXJQYWRkaW5nKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaGFzRXZlck9wZW5lZCB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghaGFzRXZlck9wZW5lZCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgb25DaGlsZHJlbk1vdW50PXt0aGlzLmhhbmRsZUNoaWxkcmVuTW91bnR9PlxuICAgICAgICB7dGhpcy5nZXRDb21wb25lbnQoKX1cbiAgICAgIDwvUG9ydGFsPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2dcbiJdfQ==