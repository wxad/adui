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
  visible: _propTypes["default"].bool,
  zIndex: _propTypes["default"].any
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

var _default = Dialog;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL0RpYWxvZy50c3giXSwibmFtZXMiOlsicHJlZml4IiwiRGlhbG9nIiwicHJvcHMiLCJjb250YWluZXIiLCJib2R5SXNPdmVyZmxvd2luZyIsInNjcm9sbGJhcldpZHRoIiwiZGlhbG9nIiwid3JhcHBlciIsInNhdmVEaWFsb2ciLCJub2RlIiwicmVzZXRTY3JvbGxiYXJQYWRkaW5nIiwiY2hhbmdlQm9keVN0eWxlIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBhZGRpbmdSaWdodCIsInNldFNjcm9sbGJhclBhZGRpbmciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJ1bmRlZmluZWQiLCJnZXRDYW5jZWxCdXR0b24iLCJjYW5jZWxQcm9wcyIsImNhbmNlbFRleHQiLCJzdGVwcyIsInR5cGUiLCJjdXJyZW50U3RlcCIsInN0YXRlIiwiZGVmYXVsdFRleHQiLCJnZW5lcmF0ZUJ1dHRvbiIsInRleHQiLCJoYW5kbGVDYW5jZWwiLCJsZW5ndGgiLCJnZXRDb25maXJtQnV0dG9uIiwiY29uZmlybVByb3BzIiwiY29uZmlybVRleHQiLCJoYW5kbGVDb25maXJtIiwiaGFuZGxlS2V5RG93biIsImUiLCJlc2NhcGVLZXlDbG9zYWJsZSIsImtleUNvZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNhbmNlbCIsInZpc2libGUiLCJzZXRTdGF0ZSIsIm9uU3RlcENhbmNlbCIsIm9uQ29uZmlybSIsIm9uU3RlcENvbmZpcm0iLCJvbkxlYXZlIiwiYWZ0ZXJDbG9zZSIsImRlc3Ryb3lBZnRlckNsb3NlIiwiZGlzcGxheSIsImhhc0V2ZXJPcGVuZWQiLCJnZXRDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVFbnRlciIsImZvY3VzIiwiZ2V0Q29tcG9uZW50Iiwib3B0aW9ucyIsImJvZHlTdHlsZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZm9vdGVyRWxlbWVudCIsImZvb3RlclN0eWxlIiwiaGVhZGVyQ29udGVudCIsImhlYWRlckVsZW1lbnQiLCJoZWFkZXJTdHlsZSIsIm1hc2tDbG9zYWJsZSIsInRpdGxlIiwiekluZGV4UHJvcCIsInpJbmRleCIsIm90aGVyUHJvcHMiLCJyZXN0UHJvcHMiLCJjbGFzc1NldCIsIk9iamVjdCIsImtleXMiLCJpbmNsdWRlcyIsIm1hcmdpbiIsImhhbmRsZUNoaWxkcmVuTW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJfIiwidmlzaWJsZVByZXYiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRlZmF1bHRDdXJyZW50U3RlcCIsImRlZmF1bHRWaXNpYmxlIiwidmlzaWJsZVN0YXRlIiwiY3VycmVudFN0ZXBTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsIm9iamVjdCIsImJvb2wiLCJzdHJpbmciLCJudW1iZXIiLCJvbmVPZiIsImFueSIsImRlZmF1bHRQcm9wcyIsImluZm8iLCJzdWNjZXNzIiwid2FybmluZyIsImRhbmdlciIsImNvbmZpcm0iLCJpbmZvcm0iLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXdTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsYUFBZjs7SUF1SU1DLE07Ozs7O0FBbU1KLGtCQUFZQyxNQUFaLEVBQWlDO0FBQUE7O0FBQUE7O0FBQy9CLDhCQUFNQSxNQUFOO0FBRCtCLFVBaEIxQkMsU0FnQjBCO0FBQUEsVUFYMUJDLGlCQVcwQjtBQUFBLFVBTjFCQyxjQU0wQjtBQUFBLFVBSjFCQyxNQUkwQjtBQUFBLFVBRjFCQyxPQUUwQjs7QUFBQSxVQWMxQkMsVUFkMEIsR0FjYixVQUFDQyxJQUFELEVBQTBCO0FBQzVDLFlBQUtILE1BQUwsR0FBY0csSUFBZDtBQUNELEtBaEJnQzs7QUFBQSxVQWtCMUJDLHFCQWxCMEIsR0FrQkYsWUFBTTtBQUFBLFVBQzNCQyxlQUQyQixHQUNQLE1BQUtULEtBREUsQ0FDM0JTLGVBRDJCOztBQUVuQyxVQUFJQSxlQUFKLEVBQXFCO0FBQ25CQyxRQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsUUFBcEIsR0FBK0IsRUFBL0I7QUFDQUgsUUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JFLFlBQXBCLEdBQW1DLEVBQW5DO0FBQ0Q7QUFDRixLQXhCZ0M7O0FBQUEsVUEwQjFCQyxtQkExQjBCLEdBMEJKLFlBQU07QUFBQSxVQUN6Qk4sZUFEeUIsR0FDTCxNQUFLVCxLQURBLENBQ3pCUyxlQUR5Qjs7QUFFakMsVUFBSUEsZUFBSixFQUFxQjtBQUFBLHNCQUNJTyxNQURKO0FBQUEsWUFDWEMsVUFEVyxXQUNYQSxVQURXO0FBRW5CLGNBQUtmLGlCQUFMLEdBQXlCUSxRQUFRLENBQUNDLElBQVQsQ0FBY08sV0FBZCxHQUE0QkQsVUFBckQ7O0FBQ0EsWUFBSSxNQUFLZixpQkFBTCxJQUEwQixDQUFDUSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkUsWUFBbkQsRUFBaUU7QUFDL0QsZ0JBQUtYLGNBQUwsR0FBc0IsbUNBQXRCOztBQUNBLGNBQUksTUFBS0EsY0FBTCxLQUF3QmdCLFNBQTVCLEVBQXVDO0FBQ3JDVCxZQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkUsWUFBcEIsYUFBc0MsTUFBS1gsY0FBM0M7QUFDRDtBQUNGOztBQUNETyxRQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsUUFBcEIsR0FBK0IsUUFBL0I7QUFDRDtBQUNGLEtBdkNnQzs7QUFBQSxVQXlDMUJPLGVBekMwQixHQXlDUixZQUFNO0FBQUEsd0JBQ29CLE1BQUtwQixLQUR6QjtBQUFBLFVBQ3JCcUIsV0FEcUIsZUFDckJBLFdBRHFCO0FBQUEsVUFDUkMsVUFEUSxlQUNSQSxVQURRO0FBQUEsVUFDSUMsS0FESixlQUNJQSxLQURKO0FBQUEsVUFDV0MsSUFEWCxlQUNXQSxJQURYO0FBQUEsVUFFckJDLFdBRnFCLEdBRUwsTUFBS0MsS0FGQSxDQUVyQkQsV0FGcUI7QUFHN0IsVUFBTUUsV0FBVyxHQUFHRixXQUFXLEtBQUssQ0FBaEIsR0FBb0IsSUFBcEIsR0FBMkIsS0FBL0M7O0FBQ0EsVUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDNUIsS0FBRDtBQUFBLFlBQXVCNkIsSUFBdkIsdUVBQThCRixXQUE5QjtBQUFBLGVBQ3JCLG9CQUFDLGtCQUFEO0FBQVEsVUFBQSxHQUFHLEVBQUMsUUFBWjtBQUFxQixVQUFBLE9BQU8sRUFBRSxNQUFLRztBQUFuQyxXQUFxRDlCLEtBQXJELEdBQ0c2QixJQURILENBRHFCO0FBQUEsT0FBdkI7O0FBTUEsVUFBSU4sS0FBSyxJQUFJQSxLQUFLLENBQUNRLE1BQW5CLEVBQTJCO0FBQ3pCLFlBQU0vQixLQUFLLEdBQUd1QixLQUFLLENBQUNFLFdBQUQsQ0FBTCxDQUFtQkosV0FBakM7QUFDQSxZQUFNUSxJQUFJLEdBQUdOLEtBQUssQ0FBQ0UsV0FBRCxDQUFMLENBQW1CSCxVQUFoQztBQUNBLGVBQU9NLGNBQWMsQ0FBQzVCLEtBQUQsRUFBUTZCLElBQVIsQ0FBckI7QUFDRDs7QUFDRCxVQUFJTCxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQixlQUFPLElBQVA7QUFDRDs7QUFDRCxhQUFPSSxjQUFjLENBQUNQLFdBQUQsRUFBY0MsVUFBZCxDQUFyQjtBQUNELEtBNURnQzs7QUFBQSxVQThEMUJVLGdCQTlEMEIsR0E4RFAsWUFBTTtBQUFBLHlCQUNlLE1BQUtoQyxLQURwQjtBQUFBLFVBQ3RCaUMsWUFEc0IsZ0JBQ3RCQSxZQURzQjtBQUFBLFVBQ1JDLFdBRFEsZ0JBQ1JBLFdBRFE7QUFBQSxVQUNLWCxLQURMLGdCQUNLQSxLQURMO0FBQUEsVUFFdEJFLFdBRnNCLEdBRU4sTUFBS0MsS0FGQyxDQUV0QkQsV0FGc0I7O0FBRzlCLFVBQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQzVCLEtBQUQsRUFBdUI2QixJQUF2QjtBQUFBLGVBQ3JCLG9CQUFDLGtCQUFEO0FBQ0UsVUFBQSxHQUFHLEVBQUMsU0FETjtBQUVFLFVBQUEsTUFBTSxFQUFDLFNBRlQ7QUFHRSxVQUFBLE9BQU8sRUFBRSxNQUFLTTtBQUhoQixXQUlNbkMsS0FKTixHQU1HNkIsSUFOSCxDQURxQjtBQUFBLE9BQXZCOztBQVdBLFVBQUlOLEtBQUssSUFBSUEsS0FBSyxDQUFDUSxNQUFuQixFQUEyQjtBQUN6QixZQUFNL0IsS0FBSyxHQUFHdUIsS0FBSyxDQUFDRSxXQUFELENBQUwsQ0FBbUJRLFlBQWpDO0FBQ0EsWUFBTUosSUFBSSxHQUNSTixLQUFLLENBQUNFLFdBQUQsQ0FBTCxDQUFtQlMsV0FBbkIsS0FDQ1QsV0FBVyxLQUFLRixLQUFLLENBQUNRLE1BQU4sR0FBZSxDQUEvQixHQUFtQyxJQUFuQyxHQUEwQyxLQUQzQyxDQURGO0FBR0EsZUFBT0gsY0FBYyxDQUFDNUIsS0FBRCxFQUFRNkIsSUFBUixDQUFyQjtBQUNEOztBQUNELGFBQU9ELGNBQWMsQ0FBQ0ssWUFBRCxFQUFlQyxXQUFXLElBQUksSUFBOUIsQ0FBckI7QUFDRCxLQXBGZ0M7O0FBQUEsVUFzRjFCRSxhQXRGMEIsR0FzRlYsVUFBQ0MsQ0FBRCxFQUE0QjtBQUFBLFVBQ3pDQyxpQkFEeUMsR0FDbkIsTUFBS3RDLEtBRGMsQ0FDekNzQyxpQkFEeUM7O0FBRWpELFVBQUlBLGlCQUFpQixJQUFJRCxDQUFDLENBQUNFLE9BQUYsS0FBYyxFQUF2QyxFQUEyQztBQUN6Q0YsUUFBQUEsQ0FBQyxDQUFDRyxlQUFGOztBQUNBLGNBQUtWLFlBQUw7QUFDRDtBQUNGLEtBNUZnQzs7QUFBQSxVQThGMUJBLFlBOUYwQixHQThGWCxVQUFDTixJQUFELEVBQWdCO0FBQUEseUJBQ0MsTUFBS3hCLEtBRE47QUFBQSxVQUM1QnlDLFFBRDRCLGdCQUM1QkEsUUFENEI7QUFBQSxVQUNsQmxCLEtBRGtCLGdCQUNsQkEsS0FEa0I7QUFBQSxVQUNYbUIsT0FEVyxnQkFDWEEsT0FEVztBQUFBLFVBRTVCakIsV0FGNEIsR0FFWixNQUFLQyxLQUZPLENBRTVCRCxXQUY0Qjs7QUFHcEMsVUFBSUQsSUFBSSxLQUFLLE9BQVQsSUFBb0IsQ0FBQ0QsS0FBckIsSUFBOEIsQ0FBQ0EsS0FBSyxDQUFDUSxNQUF6QyxFQUFpRDtBQUMvQyxZQUFJVyxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEIsZ0JBQUtDLFFBQUwsQ0FBYztBQUFFRCxZQUFBQSxPQUFPLEVBQUU7QUFBWCxXQUFkO0FBQ0Q7O0FBQ0QsWUFBSUQsUUFBSixFQUFjO0FBQ1pBLFVBQUFBLFFBQVE7QUFDVDtBQUNGLE9BUEQsTUFPTztBQUFBLFlBQ2FHLFlBRGIsR0FDOEJyQixLQUFLLENBQUNFLFdBQUQsQ0FEbkMsQ0FDR2dCLFFBREg7O0FBRUwsWUFBSUcsWUFBSixFQUFrQjtBQUNoQkEsVUFBQUEsWUFBWTtBQUNiOztBQUNELFlBQUluQixXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDckIsY0FBSWlCLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQixrQkFBS0MsUUFBTCxDQUFjO0FBQUVELGNBQUFBLE9BQU8sRUFBRTtBQUFYLGFBQWQ7QUFDRDtBQUNGLFNBSkQsTUFJTztBQUNMLGdCQUFLQyxRQUFMLENBQWM7QUFBRWxCLFlBQUFBLFdBQVcsRUFBRUEsV0FBVyxHQUFHO0FBQTdCLFdBQWQ7QUFDRDtBQUNGO0FBQ0YsS0FySGdDOztBQUFBLFVBdUgxQlUsYUF2SDBCLEdBdUhWLFlBQU07QUFBQSx5QkFDVyxNQUFLbkMsS0FEaEI7QUFBQSxVQUNuQjZDLFNBRG1CLGdCQUNuQkEsU0FEbUI7QUFBQSxVQUNSdEIsS0FEUSxnQkFDUkEsS0FEUTtBQUFBLFVBQ0RtQixPQURDLGdCQUNEQSxPQURDO0FBQUEsVUFFbkJqQixXQUZtQixHQUVILE1BQUtDLEtBRkYsQ0FFbkJELFdBRm1COztBQUczQixVQUFJRixLQUFLLElBQUlBLEtBQUssQ0FBQ1EsTUFBbkIsRUFBMkI7QUFBQSxZQUNOZSxhQURNLEdBQ1l2QixLQUFLLENBQUNFLFdBQUQsQ0FEakIsQ0FDakJvQixTQURpQjs7QUFFekIsWUFBSUMsYUFBSixFQUFtQjtBQUNqQkEsVUFBQUEsYUFBYTtBQUNkOztBQUNELFlBQUlyQixXQUFXLEtBQUtGLEtBQUssQ0FBQ1EsTUFBTixHQUFlLENBQW5DLEVBQXNDO0FBQ3BDLGNBQUlXLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQixrQkFBS0MsUUFBTCxDQUFjO0FBQUVELGNBQUFBLE9BQU8sRUFBRTtBQUFYLGFBQWQ7QUFDRDtBQUNGLFNBSkQsTUFJTztBQUNMLGdCQUFLQyxRQUFMLENBQWM7QUFBRWxCLFlBQUFBLFdBQVcsRUFBRUEsV0FBVyxHQUFHO0FBQTdCLFdBQWQ7QUFDRDtBQUNGLE9BWkQsTUFZTztBQUNMLFlBQUlpQixPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEIsZ0JBQUtDLFFBQUwsQ0FBYztBQUFFRCxZQUFBQSxPQUFPLEVBQUU7QUFBWCxXQUFkO0FBQ0Q7O0FBQ0QsWUFBSUcsU0FBSixFQUFlO0FBQ2JBLFVBQUFBLFNBQVM7QUFDVjtBQUNGO0FBQ0YsS0E5SWdDOztBQUFBLFVBZ0oxQkUsT0FoSjBCLEdBZ0poQixZQUFNO0FBQUEseUJBQ3FCLE1BQUsvQyxLQUQxQjtBQUFBLFVBQ2JnRCxVQURhLGdCQUNiQSxVQURhO0FBQUEsVUFDREMsaUJBREMsZ0JBQ0RBLGlCQURDOztBQUVyQixVQUFJLE1BQUs1QyxPQUFULEVBQWtCO0FBQ2hCLGNBQUtBLE9BQUwsQ0FBYU8sS0FBYixDQUFtQnNDLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0Q7O0FBQ0QsWUFBSzFDLHFCQUFMOztBQUVBLFVBQUl3QyxVQUFKLEVBQWdCO0FBQ2RBLFFBQUFBLFVBQVU7QUFDWDs7QUFFRCxVQUFJQyxpQkFBSixFQUF1QjtBQUNyQixjQUFLTixRQUFMLENBQWM7QUFBRVEsVUFBQUEsYUFBYSxFQUFFO0FBQWpCLFNBQWQ7QUFDRDtBQUNGLEtBOUpnQzs7QUFBQSxVQWdLMUJDLFlBaEswQixHQWdLWCxZQUFNO0FBQUEsVUFDbEJBLFlBRGtCLEdBQ0QsTUFBS3BELEtBREosQ0FDbEJvRCxZQURrQjs7QUFFMUIsVUFBSSxNQUFLbkQsU0FBVCxFQUFvQjtBQUNsQixlQUFPLE1BQUtBLFNBQVo7QUFDRDs7QUFFRCxVQUFNQSxTQUFTLEdBQUdTLFFBQVEsQ0FBQzJDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQSxZQUFLcEQsU0FBTCxHQUFpQkEsU0FBakI7O0FBQ0EsVUFBSW1ELFlBQUosRUFBa0I7QUFDaEJBLFFBQUFBLFlBQVksR0FBR0UsV0FBZixDQUEyQnJELFNBQTNCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xTLFFBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjMkMsV0FBZCxDQUEwQnJELFNBQTFCO0FBQ0Q7O0FBQ0QsYUFBT0EsU0FBUDtBQUNELEtBOUtnQzs7QUFBQSxVQWdMMUJzRCxXQWhMMEIsR0FnTFosWUFBTTtBQUFBLFVBQ2pCakIsaUJBRGlCLEdBQ0ssTUFBS3RDLEtBRFYsQ0FDakJzQyxpQkFEaUI7O0FBRXpCLFVBQUksTUFBS2pDLE9BQVQsRUFBa0I7QUFDaEIsWUFBSWlDLGlCQUFKLEVBQXVCO0FBQ3JCLGdCQUFLakMsT0FBTCxDQUFhbUQsS0FBYjtBQUNEO0FBQ0Y7QUFDRixLQXZMZ0M7O0FBQUEsVUF5TDFCQyxZQXpMMEIsR0F5TFgsVUFBQ0MsT0FBRCxFQUFvQztBQUFBLHlCQWdCcEQsTUFBSzFELEtBaEIrQztBQUFBLFVBRXREMkQsU0FGc0QsZ0JBRXREQSxTQUZzRDtBQUFBLFVBR3REQyxRQUhzRCxnQkFHdERBLFFBSHNEO0FBQUEsVUFJdERDLFNBSnNELGdCQUl0REEsU0FKc0Q7QUFBQSxVQUt0REMsYUFMc0QsZ0JBS3REQSxhQUxzRDtBQUFBLFVBTXREQyxXQU5zRCxnQkFNdERBLFdBTnNEO0FBQUEsVUFPdERDLGFBUHNELGdCQU90REEsYUFQc0Q7QUFBQSxVQVF0REMsYUFSc0QsZ0JBUXREQSxhQVJzRDtBQUFBLFVBU3REQyxXQVRzRCxnQkFTdERBLFdBVHNEO0FBQUEsVUFVdERDLFlBVnNELGdCQVV0REEsWUFWc0Q7QUFBQSxVQVd0RDVDLEtBWHNELGdCQVd0REEsS0FYc0Q7QUFBQSxVQVl0RFgsS0Fac0QsZ0JBWXREQSxLQVpzRDtBQUFBLFVBYXREd0QsS0Fic0QsZ0JBYXREQSxLQWJzRDtBQUFBLFVBYzlDQyxVQWQ4QyxnQkFjdERDLE1BZHNEO0FBQUEsVUFlbkRDLFVBZm1EOztBQWtCeEQsVUFBTUQsTUFBTSxHQUFHRCxVQUFmO0FBRUEsVUFBTUcsU0FBUyxHQUFHLHNCQUFLRCxVQUFMLEVBQWlCLENBQ2pDLFlBRGlDLEVBRWpDLGFBRmlDLEVBR2pDLFlBSGlDLEVBSWpDLGlCQUppQyxFQUtqQyxjQUxpQyxFQU1qQyxhQU5pQyxFQU9qQyxhQVBpQyxFQVFqQyxvQkFSaUMsRUFTakMsZ0JBVGlDLEVBVWpDLG1CQVZpQyxFQVdqQyxtQkFYaUMsRUFZakMsY0FaaUMsRUFhakMsVUFiaUMsRUFjakMsV0FkaUMsRUFlakMsTUFmaUMsRUFnQmpDLFNBaEJpQyxDQUFqQixDQUFsQjtBQW1CQSxVQUFNRSxRQUFRLEdBQUcsNEJBQVdaLFNBQVgsWUFBeUIvRCxNQUF6QixZQUFqQjtBQXZDd0QsVUF3Q2hEMkIsV0F4Q2dELEdBd0NoQyxNQUFLQyxLQXhDMkIsQ0F3Q2hERCxXQXhDZ0Q7QUFBQSxVQXlDbERpQixPQXpDa0QsR0F5Q3RDLE1BQUtoQixLQXpDaUMsQ0F5Q2xEZ0IsT0F6Q2tEOztBQTBDeEQsVUFBSWdCLE9BQU8sSUFBSWdCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZakIsT0FBWixFQUFxQmtCLFFBQXJCLENBQThCLFNBQTlCLENBQWYsRUFBeUQ7QUFDdkQ7QUFBSWxDLFFBQUFBLE9BRG1ELEdBQ3ZDZ0IsT0FEdUMsQ0FDbkRoQixPQURtRDtBQUV4RDs7QUFFRCxhQUNFO0FBQUssUUFBQSxHQUFHLEVBQUUsTUFBS3BDO0FBQWYsU0FDRTtBQUNFLFFBQUEsU0FBUyxZQUFLUixNQUFMLGFBRFg7QUFFRSxRQUFBLEdBQUcsRUFBRSxhQUFDTyxPQUFELEVBQWE7QUFDaEIsY0FBSUEsT0FBSixFQUFhO0FBQ1gsa0JBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEO0FBQ0YsU0FOSDtBQU9FLFFBQUEsS0FBSyxFQUFFO0FBQ0w2QyxVQUFBQSxPQUFPLEVBQUVSLE9BQU8sR0FBRyxNQUFILEdBQVksRUFEdkI7QUFFTDRCLFVBQUFBLE1BQU0sRUFBTkE7QUFGSyxTQVBUO0FBV0UsUUFBQSxRQUFRLEVBQUUsQ0FYWjtBQVlFLFFBQUEsSUFBSSxFQUFDLE1BWlA7QUFhRSxRQUFBLFNBQVMsRUFBRSxNQUFLbEM7QUFibEIsU0FlRSxvQkFBQyxxQkFBRDtBQUNFLFFBQUEsY0FBYyxZQUFLdEMsTUFBTCxVQURoQjtBQUVFLFFBQUEsU0FBUyxFQUFDLEtBRlo7QUFHRSxRQUFBLGdCQUFnQjtBQUhsQixTQUtHNEMsT0FBTyxJQUNOO0FBQ0UsUUFBQSxTQUFTLFlBQUs1QyxNQUFMLFVBRFg7QUFFRSxRQUFBLElBQUksRUFBQyxNQUZQO0FBR0UsUUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYixjQUFJcUUsWUFBSixFQUFrQjtBQUNoQixrQkFBS3JDLFlBQUwsQ0FBa0IsT0FBbEI7QUFDRDtBQUNGO0FBUEgsUUFOSixDQWZGLEVBdUNFLG9CQUFDLHFCQUFEO0FBQ0UsUUFBQSxRQUFRLEVBQUUsTUFBS3lCLFdBRGpCO0FBRUUsUUFBQSxPQUFPLEVBQUUsTUFBS0EsV0FGaEI7QUFHRSxRQUFBLE9BQU8sRUFBRSxNQUFLUixPQUhoQjtBQUlFLFFBQUEsY0FBYyxFQUFFakQsTUFKbEI7QUFLRSxRQUFBLFNBQVMsRUFBQyxLQUxaO0FBTUUsUUFBQSxLQUFLLEVBQUU7QUFDTCtFLFVBQUFBLE1BQU0sRUFBRSxNQURIO0FBRUxQLFVBQUFBLE1BQU0sRUFBRTtBQUZILFNBTlQ7QUFVRSxRQUFBLGdCQUFnQjtBQVZsQixTQVlHNUIsT0FBTyxJQUNOO0FBQUssUUFBQSxTQUFTLEVBQUUrQixRQUFoQjtBQUEwQixRQUFBLEtBQUssRUFBRTdEO0FBQWpDLFNBQTRDNEQsU0FBNUMsR0FDR1AsYUFBYSxLQUFLLElBQWxCLEdBQ0csSUFESCxHQUVHQSxhQUFhLElBQ1g7QUFBSyxRQUFBLFNBQVMsWUFBS25FLE1BQUwsWUFBZDtBQUFvQyxRQUFBLEtBQUssRUFBRW9FO0FBQTNDLFNBQ0csQ0FDQztBQUFLLFFBQUEsR0FBRyxFQUFFLENBQVY7QUFBYSxRQUFBLFNBQVMsWUFBS3BFLE1BQUw7QUFBdEIsU0FDR3NFLEtBREgsQ0FERCxFQUlDO0FBQUssUUFBQSxHQUFHLEVBQUU7QUFBVixTQUNHSixhQUFhLElBQ1o7QUFBSyxRQUFBLFNBQVMsWUFBS2xFLE1BQUw7QUFBZCxTQUNHa0UsYUFESCxDQUZKLENBSkQsRUFXQyxvQkFBQyxnQkFBRDtBQUNFLFFBQUEsR0FBRyxFQUFFLENBRFA7QUFFRSxRQUFBLFNBQVMsWUFBS2xFLE1BQUwsV0FGWDtBQUdFLFFBQUEsSUFBSSxFQUFFLEVBSFI7QUFJRSxRQUFBLElBQUksRUFBQyxRQUpQO0FBS0UsUUFBQSxPQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFLZ0MsWUFBTCxDQUFrQixPQUFsQixDQUFOO0FBQUE7QUFMWCxRQVhELENBREgsQ0FKUixFQTBCRTtBQUFLLFFBQUEsU0FBUyxZQUFLaEMsTUFBTCxVQUFkO0FBQWtDLFFBQUEsS0FBSyxFQUFFNkQ7QUFBekMsU0FDR3BDLEtBQUssSUFBSUEsS0FBSyxDQUFDUSxNQUFmLEdBQ0dSLEtBQUssQ0FBQ0UsV0FBRCxDQUFMLENBQW1CbUMsUUFEdEIsR0FFR0EsUUFITixDQTFCRixFQStCR0UsYUFBYSxLQUFLLElBQWxCLEdBQXlCLElBQXpCLEdBQ0M7QUFBSyxRQUFBLFNBQVMsWUFBS2hFLE1BQUwsWUFBZDtBQUFvQyxRQUFBLEtBQUssRUFBRWlFO0FBQTNDLFNBQ0dELGFBQWEsSUFBSSxDQUNoQixNQUFLMUMsZUFBTCxFQURnQixFQUVoQixNQUFLWSxnQkFBTCxFQUZnQixDQURwQixDQWhDSixDQWJKLENBdkNGLENBREYsQ0FERjtBQW1HRCxLQTFVZ0M7O0FBQUEsVUErVTFCOEMsbUJBL1UwQixHQStVSixZQUFNO0FBQUEsVUFDekJwQyxPQUR5QixHQUNiLE1BQUtoQixLQURRLENBQ3pCZ0IsT0FEeUI7O0FBRWpDLFVBQUlBLE9BQU8sSUFBSSxNQUFLckMsT0FBcEIsRUFBNkI7QUFDM0IsY0FBS1UsbUJBQUw7QUFDRDtBQUNGLEtBcFZnQzs7QUFBQSxVQXNWMUJnRSxrQkF0VjBCLEdBc1ZMLFVBQzFCQyxDQUQwQixRQUd2QjtBQUFBLFVBRFFDLFdBQ1IsUUFERHZDLE9BQ0M7QUFBQSxVQUNLQSxPQURMLEdBQ2lCLE1BQUtoQixLQUR0QixDQUNLZ0IsT0FETDs7QUFFSCxVQUFJQSxPQUFPLEtBQUt1QyxXQUFaLElBQTJCdkMsT0FBM0IsSUFBc0MsTUFBS3JDLE9BQS9DLEVBQXdEO0FBQ3RELGNBQUtVLG1CQUFMO0FBQ0Q7QUFDRixLQTlWZ0M7O0FBQUEsVUFnVzFCbUUsb0JBaFcwQixHQWdXSCxZQUFNO0FBQUEsVUFDMUJ4QyxPQUQwQixHQUNkLE1BQUtoQixLQURTLENBQzFCZ0IsT0FEMEI7O0FBRWxDLFVBQUlBLE9BQUosRUFBYTtBQUNYLGNBQUtsQyxxQkFBTDtBQUNEO0FBQ0YsS0FyV2dDOztBQUFBLFFBRXZCaUIsWUFGdUIsR0FFc0N6QixNQUZ0QyxDQUV2QnlCLFdBRnVCO0FBQUEsUUFFVjBELGtCQUZVLEdBRXNDbkYsTUFGdEMsQ0FFVm1GLGtCQUZVO0FBQUEsUUFFVXpDLFFBRlYsR0FFc0MxQyxNQUZ0QyxDQUVVMEMsT0FGVjtBQUFBLFFBRW1CMEMsY0FGbkIsR0FFc0NwRixNQUZ0QyxDQUVtQm9GLGNBRm5CO0FBRy9CLFFBQU1DLFlBQVksR0FBRzNDLFFBQU8sS0FBSyxJQUFaLEdBQW1CLENBQUMsQ0FBQ0EsUUFBckIsR0FBK0IsQ0FBQyxDQUFDMEMsY0FBdEQ7QUFDQSxRQUFNRSxnQkFBZ0IsR0FDcEI3RCxZQUFXLEtBQUssSUFBaEIsR0FBdUJBLFlBQXZCLEdBQXFDMEQsa0JBRHZDO0FBR0EsVUFBS3pELEtBQUwsR0FBYTtBQUNYZ0IsTUFBQUEsT0FBTyxFQUFFMkMsWUFERTtBQUVYNUQsTUFBQUEsV0FBVyxFQUFFNkQsZ0JBQWdCLElBQUksQ0FGdEI7QUFHWG5DLE1BQUFBLGFBQWEsRUFBRWtDO0FBSEosS0FBYjtBQVArQjtBQVloQzs7Ozs2QkEyVmU7QUFBQSxVQUNObEMsYUFETSxHQUNZLEtBQUt6QixLQURqQixDQUNOeUIsYUFETTs7QUFFZCxVQUFJLENBQUNBLGFBQUwsRUFBb0I7QUFDbEIsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsYUFDRSxvQkFBQyxrQkFBRDtBQUFRLFFBQUEsZUFBZSxFQUFFLEtBQUsyQjtBQUE5QixTQUNHLEtBQUtyQixZQUFMLEVBREgsQ0FERjtBQUtEOzs7O0VBcGpCa0I4QixLQUFLLENBQUNDLFM7O0FBQXJCekYsTSxDQUNVMEYsUyxHQUFZO0FBSXhCekMsRUFBQUEsVUFBVSxFQUFFMEMsc0JBQVVDLElBSkU7QUFReEJoQyxFQUFBQSxTQUFTLEVBQUUrQixzQkFBVUUsTUFSRztBQVl4QnZFLEVBQUFBLFdBQVcsRUFBRXFFLHNCQUFVRSxNQVpDO0FBZ0J4QnRFLEVBQUFBLFVBQVUsRUFBRW9FLHNCQUFVbkYsSUFoQkU7QUFvQnhCRSxFQUFBQSxlQUFlLEVBQUVpRixzQkFBVUcsSUFwQkg7QUF3QnhCakMsRUFBQUEsUUFBUSxFQUFFOEIsc0JBQVVuRixJQXhCSTtBQTRCeEJzRCxFQUFBQSxTQUFTLEVBQUU2QixzQkFBVUksTUE1Qkc7QUFnQ3hCN0QsRUFBQUEsWUFBWSxFQUFFeUQsc0JBQVVFLE1BaENBO0FBb0N4QjFELEVBQUFBLFdBQVcsRUFBRXdELHNCQUFVbkYsSUFwQ0M7QUF3Q3hCa0IsRUFBQUEsV0FBVyxFQUFFaUUsc0JBQVVLLE1BeENDO0FBNEN4QlosRUFBQUEsa0JBQWtCLEVBQUVPLHNCQUFVSyxNQTVDTjtBQWdEeEJYLEVBQUFBLGNBQWMsRUFBRU0sc0JBQVVHLElBaERGO0FBb0R4QjVDLEVBQUFBLGlCQUFpQixFQUFFeUMsc0JBQVVHLElBcERMO0FBd0R4QnZELEVBQUFBLGlCQUFpQixFQUFFb0Qsc0JBQVVHLElBeERMO0FBNER4Qi9CLEVBQUFBLGFBQWEsRUFBRTRCLHNCQUFVbkYsSUE1REQ7QUFnRXhCd0QsRUFBQUEsV0FBVyxFQUFFMkIsc0JBQVVFLE1BaEVDO0FBb0V4QnhDLEVBQUFBLFlBQVksRUFBRXNDLHNCQUFVQyxJQXBFQTtBQXdFeEIzQixFQUFBQSxhQUFhLEVBQUUwQixzQkFBVW5GLElBeEVEO0FBNEV4QjBELEVBQUFBLGFBQWEsRUFBRXlCLHNCQUFVbkYsSUE1RUQ7QUFnRnhCMkQsRUFBQUEsV0FBVyxFQUFFd0Isc0JBQVVFLE1BaEZDO0FBb0Z4QnpCLEVBQUFBLFlBQVksRUFBRXVCLHNCQUFVRyxJQXBGQTtBQXdGeEJwRCxFQUFBQSxRQUFRLEVBQUVpRCxzQkFBVUMsSUF4Rkk7QUE0RnhCOUMsRUFBQUEsU0FBUyxFQUFFNkMsc0JBQVVDLElBNUZHO0FBZ0d4Qi9FLEVBQUFBLEtBQUssRUFBRThFLHNCQUFVRSxNQWhHTztBQW9HeEJ4QixFQUFBQSxLQUFLLEVBQUVzQixzQkFBVW5GLElBcEdPO0FBd0d4QmlCLEVBQUFBLElBQUksRUFBRWtFLHNCQUFVTSxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLFFBQVosQ0FBaEIsQ0F4R2tCO0FBNEd4QnRELEVBQUFBLE9BQU8sRUFBRWdELHNCQUFVRyxJQTVHSztBQWdIeEJ2QixFQUFBQSxNQUFNLEVBQUVvQixzQkFBVU87QUFoSE0sQztBQUR0QmxHLE0sQ0FvSFVtRyxZLEdBQTZCO0FBQ3pDbEQsRUFBQUEsVUFBVSxFQUFFLElBRDZCO0FBRXpDVyxFQUFBQSxTQUFTLEVBQUUsRUFGOEI7QUFHekN0QyxFQUFBQSxXQUFXLEVBQUUsRUFINEI7QUFJekNDLEVBQUFBLFVBQVUsRUFBRSxJQUo2QjtBQUt6Q2IsRUFBQUEsZUFBZSxFQUFFLElBTHdCO0FBTXpDbUQsRUFBQUEsUUFBUSxFQUFFLElBTitCO0FBT3pDQyxFQUFBQSxTQUFTLEVBQUUxQyxTQVA4QjtBQVF6Q2MsRUFBQUEsWUFBWSxFQUFFLEVBUjJCO0FBU3pDQyxFQUFBQSxXQUFXLEVBQUUsSUFUNEI7QUFVekNULEVBQUFBLFdBQVcsRUFBRSxJQVY0QjtBQVd6QzBELEVBQUFBLGtCQUFrQixFQUFFLElBWHFCO0FBWXpDQyxFQUFBQSxjQUFjLEVBQUUsSUFaeUI7QUFhekNuQyxFQUFBQSxpQkFBaUIsRUFBRSxLQWJzQjtBQWN6Q1gsRUFBQUEsaUJBQWlCLEVBQUUsSUFkc0I7QUFlekN3QixFQUFBQSxhQUFhLEVBQUUzQyxTQWYwQjtBQWdCekM0QyxFQUFBQSxXQUFXLEVBQUUsRUFoQjRCO0FBaUJ6Q1gsRUFBQUEsWUFBWSxFQUFFLElBakIyQjtBQWtCekNZLEVBQUFBLGFBQWEsRUFBRSxJQWxCMEI7QUFtQnpDQyxFQUFBQSxhQUFhLEVBQUU5QyxTQW5CMEI7QUFvQnpDK0MsRUFBQUEsV0FBVyxFQUFFLEVBcEI0QjtBQXFCekNDLEVBQUFBLFlBQVksRUFBRSxLQXJCMkI7QUFzQnpDMUIsRUFBQUEsUUFBUSxFQUFFLElBdEIrQjtBQXVCekNJLEVBQUFBLFNBQVMsRUFBRSxJQXZCOEI7QUF3QnpDakMsRUFBQUEsS0FBSyxFQUFFLEVBeEJrQztBQXlCekN3RCxFQUFBQSxLQUFLLEVBQUUsSUF6QmtDO0FBMEJ6QzVDLEVBQUFBLElBQUksRUFBRSxTQTFCbUM7QUEyQnpDa0IsRUFBQUEsT0FBTyxFQUFFLElBM0JnQztBQTRCekM0QixFQUFBQSxNQUFNLEVBQUU7QUE1QmlDLEM7QUFwSHZDdkUsTSxDQW1KVW9HLEk7QUFuSlZwRyxNLENBcUpVcUcsTztBQXJKVnJHLE0sQ0F1SlVzRyxPO0FBdkpWdEcsTSxDQXlKVXVHLE07QUF6SlZ2RyxNLENBMkpVd0csTztBQTNKVnhHLE0sQ0E2SlV5RyxNOztBQTdKVnpHLE0sQ0ErSlUwRyx3QixHQUEyQix3QkFHcEM7QUFBQSxNQUZEaEYsV0FFQyxTQUZEQSxXQUVDO0FBQUEsTUFGWWlCLE9BRVosU0FGWUEsT0FFWjtBQUFBLE1BRERTLGFBQ0MsU0FEREEsYUFDQztBQUNILE1BQU11RCxRQUErQixHQUFHLEVBQXhDOztBQUNBLE1BQUlqRixXQUFXLEtBQUssSUFBcEIsRUFBMEI7QUFDeEJpRixJQUFBQSxRQUFRLENBQUNqRixXQUFULEdBQXVCQSxXQUF2QjtBQUNEOztBQUNELE1BQUlpQixPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEJnRSxJQUFBQSxRQUFRLENBQUNoRSxPQUFULEdBQW1CQSxPQUFuQjs7QUFDQSxRQUFJLENBQUNTLGFBQUQsSUFBa0JULE9BQXRCLEVBQStCO0FBQzdCZ0UsTUFBQUEsUUFBUSxDQUFDdkQsYUFBVCxHQUF5QixJQUF6QjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT3VCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZK0IsUUFBWixFQUFzQjNFLE1BQXRCLEdBQStCLENBQS9CLEdBQW1DMkUsUUFBbkMsR0FBOEMsSUFBckQ7QUFDRCxDOztlQXlZWTNHLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgZ2V0U2Nyb2xsQmFyU2l6ZSBmcm9tIFwicmMtdXRpbC9saWIvZ2V0U2Nyb2xsQmFyU2l6ZVwiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgQW5pbWF0ZSBmcm9tIFwicmMtYW5pbWF0ZVwiXG5pbXBvcnQgb21pdCBmcm9tIFwiLi4vX3V0aWwvb21pdFwiXG5pbXBvcnQgUG9ydGFsIGZyb20gXCIuLi9wb3J0YWxcIlxuaW1wb3J0IEJ1dHRvbiwgeyBJQnV0dG9uUHJvcHMgfSBmcm9tIFwiLi4vYnV0dG9uXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktZGlhbG9nXCJcblxuaW50ZXJmYWNlIElTdGVwUHJvcHMge1xuICAvKipcbiAgICog5Y+W5raI5oyJ6ZKu55qEIHByb3Bz77yM5Y+C6ICDIEJ1dHRvbiBQcm9wc1xuICAgKi9cbiAgY2FuY2VsUHJvcHM/OiBQYXJ0aWFsPElCdXR0b25Qcm9wcz5cbiAgLyoqXG4gICAqIOWPlua2iOaMiemSrueahCDmloflrZdcbiAgICovXG4gIGNhbmNlbFRleHQ/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOehruiupOaMiemSrueahCBwcm9wc++8jOWPguiAgyBCdXR0b24gUHJvcHNcbiAgICovXG4gIGNvbmZpcm1Qcm9wcz86IFBhcnRpYWw8SUJ1dHRvblByb3BzPlxuICAvKipcbiAgICog56Gu6K6k5oyJ6ZKu55qEIOaWh+Wtl1xuICAgKi9cbiAgY29uZmlybVRleHQ/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOeCueWHu+WPlua2iOaMiemSruOAgeWPs+S4iuinkuWFs+mXreaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNhbmNlbD86ICgoKSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOeCueWHu+ehruiupOaMiemSruaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNvbmZpcm0/OiAoKCkgPT4gdm9pZCkgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ1Byb3BzIGV4dGVuZHMgSVN0ZXBQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5YWz6Zet5ZCO77yIdHJhbnNpdGlvbiDnu5PmnZ/lkI7vvInnmoQgaGFuZGxlclxuICAgKi9cbiAgYWZ0ZXJDbG9zZT86ICgoKSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOiuvue9riBib2R5IOagt+W8j1xuICAgKi9cbiAgYm9keVN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICogZGlhbG9nIOaJk+W8gOWSjOWFs+mXreaXtumDveS8muabtOaUuSBkb2N1bWVudC5ib2R5LnN0eWxl44CC5Y+v5Lul5Lul5q2kIHByb3Ag5o6n5Yi25piv5ZCm5L+u5pS544CC5L2/55So5Zy65pmv5aaC77ya5rWu5bGC5YaF5by55Ye6IGRpYWxvZ1xuICAgKi9cbiAgY2hhbmdlQm9keVN0eWxlPzogYm9vbGVhblxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCN77yM5rOo5oSPIERpYWxvZyDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5oyH5a6a5b2T5YmN55qEIHN0ZXDvvIzku4XlnKjkvb/nlKggc3RlcHMgcHJvcCDml7bmnInkvZznlKhcbiAgICovXG4gIGN1cnJlbnRTdGVwPzogbnVsbCB8IG51bWJlclxuICAvKipcbiAgICog5oyH5a6a6buY6K6k55qE6LW35aeLIHN0ZXDvvIzku4XlnKjkvb/nlKggc3RlcHMgcHJvcCDml7bmnInkvZznlKhcbiAgICovXG4gIGRlZmF1bHRDdXJyZW50U3RlcD86IG51bGwgfCBudW1iZXJcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8muaYr+WQpum7mOiupOaYvuekulxuICAgKi9cbiAgZGVmYXVsdFZpc2libGU/OiBudWxsIHwgYm9vbGVhblxuICAvKipcbiAgICog5piv5ZCm5q+P5qyhIHZpc2libGU6IGZhbHNlIOmDvemUgOavgSBkb21cbiAgICovXG4gIGRlc3Ryb3lBZnRlckNsb3NlPzogYm9vbGVhblxuICAvKipcbiAgICog5piv5ZCm5pSv5oyBIEVTQyDlhbPpl61cbiAgICovXG4gIGVzY2FwZUtleUNsb3NhYmxlPzogYm9vbGVhblxuICAvKipcbiAgICog5a6M5YWo6Ieq5a6a5LmJIGZvb3RlciDnmoTlhoXlrrnvvIzlpoLmnpzmg7PopoHmlLnlj5ggZm9vdGVyIOeItue6p+eahOagt+W8j++8jOS9v+eUqCBmb290ZXJTdHlsZSBQcm9wXG4gICAqL1xuICBmb290ZXJFbGVtZW50PzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDorr7nva4gZm9vdGVyIOagt+W8j1xuICAgKi9cbiAgZm9vdGVyU3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiDmjIflrprlvLnlh7rlsYLnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9kee+8jOexu+S8vOS6jiBUb29sdGlwIOeahCBnZXRQb3B1cENvbnRhaW5lclxuICAgKi9cbiAgZ2V0Q29udGFpbmVyPzogKCgpID0+IEhUTUxFbGVtZW50KSB8IG51bGxcbiAgLyoqXG4gICAqIGhlYWRlciDmoIfpopjkuIvnmoTlhoXlrrlcbiAgICovXG4gIGhlYWRlckNvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOWujOWFqOiHquWumuS5iSBoZWFkZXIg55qE5YaF5a65XG4gICAqL1xuICBoZWFkZXJFbGVtZW50PzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDorr7nva4gaGVhZGVyIOagt+W8j1xuICAgKi9cbiAgaGVhZGVyU3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiDngrnlh7sgbWFzayDmmK/lkKbop6blj5EgY2FuY2VsIOS6i+S7tlxuICAgKi9cbiAgbWFza0Nsb3NhYmxlPzogYm9vbGVhblxuICAvKipcbiAgICog5oyH5a6a5q2l6aqk77yM55So5Lul5b+r5o235LiK5LiA5q2l44CB5LiL5LiA5q2l55qE6ZyA5rGC44CCXG4gICAqL1xuICBzdGVwcz86IEFycmF5PElTdGVwUHJvcHM+XG4gIC8qKlxuICAgKiDpmYTliqDmoLflvI/vvIzms6jmhI8gRGlhbG9nIOaJgOacieeahOWxnuaAp+S8mumZhOWKoOWIsOWGhemDqOeahOWGheWuueWFg+e0oOS4iu+8jOiAjOS4jeaYr+WMheWQqyBtYXNrIOeahOacgOWkluWxguWFg+e0oFxuICAgKi9cbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiDlr7nor53moYbmoIfpophcbiAgICovXG4gIHRpdGxlPzogbnVsbCB8IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICogY29uZmlybSDkuLrlj5bmtojjgIHnoa7orqTmjInpkq7vvJtpbmZvcm0g5Li65Y+q5pyJ56Gu6K6k5oyJ6ZKuXG4gICAqL1xuICB0eXBlPzogXCJjb25maXJtXCIgfCBcImluZm9ybVwiXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKbmmL7npLpcbiAgICovXG4gIHZpc2libGU/OiBudWxsIHwgYm9vbGVhblxuICAvKipcbiAgICog6K6+572uIHotaW5kZXgg5bGC57qn77yM6buY6K6k5Li6IHZhcigtLXotaW5kZXgtZGlhbG9nKVxuICAgKi9cbiAgekluZGV4PzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ1N0YXRlIHtcbiAgdmlzaWJsZT86IGJvb2xlYW5cbiAgY3VycmVudFN0ZXA6IG51bWJlclxuICBoYXNFdmVyT3BlbmVkPzogYm9vbGVhblxufVxuXG4vKipcbiAqIOWvueivneahhueUqOS6juWFqOWxgOaAp+eahOWPjemmiO+8jOmAmuW4uOWIhuS4uuKAnOehruiupOaTjeS9nOKAneS4juKAnOWRiuefpeS/oeaBr+KAneOAglxuICog56Gu6K6k5pON5L2c55So5LqO6K+i6Zeu55So5oi34oCc5pON5L2c5piv5ZCm57un57ut6L+b6KGM77yf4oCd77yM5aaC5aSn6YOo5YiG55qE5LqM5qyh56Gu6K6k5Y+N6aaI44CC5ZGK55+l5L+h5oGv5YiZ55So5LqO55+l5Lya55So5oi35p+Q5Liq5Y+K5pe25Y+N6aaI77yM5aaC5L+h5oGv5o+Q5Lqk5oiQ5Yqf44CB5aSx6LSl562J44CCXG4gKi9cbmNsYXNzIERpYWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJRGlhbG9nUHJvcHMsIElEaWFsb2dTdGF0ZT4ge1xuICBwdWJsaWMgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiDlhbPpl63lkI7vvIh0cmFuc2l0aW9uIOe7k+adn+WQju+8ieeahCBoYW5kbGVyXG4gICAgICovXG4gICAgYWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572uIGJvZHkg5qC35byPXG4gICAgICovXG4gICAgYm9keVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOWPlua2iOaMiemSrueahCBwcm9wc++8jOWPguiAgyBCdXR0b24gUHJvcHNcbiAgICAgKi9cbiAgICBjYW5jZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDlj5bmtojmjInpkq7nmoQg5paH5a2XXG4gICAgICovXG4gICAgY2FuY2VsVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICogZGlhbG9nIOaJk+W8gOWSjOWFs+mXreaXtumDveS8muabtOaUuSBkb2N1bWVudC5ib2R5LnN0eWxl44CC5Y+v5Lul5Lul5q2kIHByb3Ag5o6n5Yi25piv5ZCm5L+u5pS544CC5L2/55So5Zy65pmv5aaC77ya5rWu5bGC5YaF5by55Ye6IGRpYWxvZ1xuICAgICAqL1xuICAgIGNoYW5nZUJvZHlTdHlsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5a2Q6IqC54K5XG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOmZhOWKoOexu+WQje+8jOazqOaEjyBEaWFsb2cg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOehruiupOaMiemSrueahCBwcm9wc++8jOWPguiAgyBCdXR0b24gUHJvcHNcbiAgICAgKi9cbiAgICBjb25maXJtUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog56Gu6K6k5oyJ6ZKu55qEIOaWh+Wtl1xuICAgICAqL1xuICAgIGNvbmZpcm1UZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDmjIflrprlvZPliY3nmoQgc3RlcO+8jOS7heWcqOS9v+eUqCBzdGVwcyBwcm9wIOaXtuacieS9nOeUqFxuICAgICAqL1xuICAgIGN1cnJlbnRTdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOaMh+Wumum7mOiupOeahOi1t+WniyBzdGVw77yM5LuF5Zyo5L2/55SoIHN0ZXBzIHByb3Ag5pe25pyJ5L2c55SoXG4gICAgICovXG4gICAgZGVmYXVsdEN1cnJlbnRTdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOWGhemDqOmpseWKqO+8muaYr+WQpum7mOiupOaYvuekulxuICAgICAqL1xuICAgIGRlZmF1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmr4/mrKEgdmlzaWJsZTogZmFsc2Ug6YO96ZSA5q+BIGRvbVxuICAgICAqL1xuICAgIGRlc3Ryb3lBZnRlckNsb3NlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmlK/mjIEgRVNDIOWFs+mXrVxuICAgICAqL1xuICAgIGVzY2FwZUtleUNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlrozlhajoh6rlrprkuYkgZm9vdGVyIOeahOWGheWuue+8jOWmguaenOaDs+imgeaUueWPmCBmb290ZXIg54i257qn55qE5qC35byP77yM5L2/55SoIGZvb3RlclN0eWxlIFByb3BcbiAgICAgKi9cbiAgICBmb290ZXJFbGVtZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDorr7nva4gZm9vdGVyIOagt+W8j1xuICAgICAqL1xuICAgIGZvb3RlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOaMh+WumuW8ueWHuuWxgueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R577yM57G75Ly85LqOIFRvb2x0aXAg55qEIGdldFBvcHVwQ29udGFpbmVyXG4gICAgICovXG4gICAgZ2V0Q29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiBoZWFkZXIg5qCH6aKY5LiL55qE5YaF5a65XG4gICAgICovXG4gICAgaGVhZGVyQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog5a6M5YWo6Ieq5a6a5LmJIGhlYWRlciDnmoTlhoXlrrlcbiAgICAgKi9cbiAgICBoZWFkZXJFbGVtZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDorr7nva4gaGVhZGVyIOagt+W8j1xuICAgICAqL1xuICAgIGhlYWRlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOeCueWHuyBtYXNrIOaYr+WQpuinpuWPkSBjYW5jZWwg5LqL5Lu2XG4gICAgICovXG4gICAgbWFza0Nsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDngrnlh7vlj5bmtojmjInpkq7jgIHlj7PkuIrop5LlhbPpl63ml7bnmoQgaGFuZGxlclxuICAgICAqL1xuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDngrnlh7vnoa7orqTmjInpkq7ml7bnmoQgaGFuZGxlclxuICAgICAqL1xuICAgIG9uQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg5qC35byP77yM5rOo5oSPIERpYWxvZyDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICAgKi9cbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDlr7nor53moYbmoIfpophcbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICogY29uZmlybSDkuLrlj5bmtojjgIHnoa7orqTmjInpkq7vvJtpbmZvcm0g5Li65Y+q5pyJ56Gu6K6k5oyJ6ZKuXG4gICAgICovXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcImNvbmZpcm1cIiwgXCJpbmZvcm1cIl0pLFxuICAgIC8qKlxuICAgICAqIOWklumDqOaOp+WItu+8muaYr+WQpuaYvuekulxuICAgICAqL1xuICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOiuvue9riB6LWluZGV4IOWxgue6p++8jOm7mOiupOS4uiB2YXIoLS16LWluZGV4LWRpYWxvZylcbiAgICAgKi9cbiAgICB6SW5kZXg6IFByb3BUeXBlcy5hbnksXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogSURpYWxvZ1Byb3BzID0ge1xuICAgIGFmdGVyQ2xvc2U6IG51bGwsXG4gICAgYm9keVN0eWxlOiB7fSxcbiAgICBjYW5jZWxQcm9wczoge30sXG4gICAgY2FuY2VsVGV4dDogXCLlj5bmtohcIixcbiAgICBjaGFuZ2VCb2R5U3R5bGU6IHRydWUsXG4gICAgY2hpbGRyZW46IG51bGwsXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gICAgY29uZmlybVByb3BzOiB7fSxcbiAgICBjb25maXJtVGV4dDogXCLnoa7orqRcIixcbiAgICBjdXJyZW50U3RlcDogbnVsbCxcbiAgICBkZWZhdWx0Q3VycmVudFN0ZXA6IG51bGwsXG4gICAgZGVmYXVsdFZpc2libGU6IG51bGwsXG4gICAgZGVzdHJveUFmdGVyQ2xvc2U6IGZhbHNlLFxuICAgIGVzY2FwZUtleUNsb3NhYmxlOiB0cnVlLFxuICAgIGZvb3RlckVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICBmb290ZXJTdHlsZToge30sXG4gICAgZ2V0Q29udGFpbmVyOiBudWxsLFxuICAgIGhlYWRlckNvbnRlbnQ6IG51bGwsXG4gICAgaGVhZGVyRWxlbWVudDogdW5kZWZpbmVkLFxuICAgIGhlYWRlclN0eWxlOiB7fSxcbiAgICBtYXNrQ2xvc2FibGU6IGZhbHNlLFxuICAgIG9uQ2FuY2VsOiBudWxsLFxuICAgIG9uQ29uZmlybTogbnVsbCxcbiAgICBzdHlsZToge30sXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdHlwZTogXCJjb25maXJtXCIsXG4gICAgdmlzaWJsZTogbnVsbCxcbiAgICB6SW5kZXg6IFwidmFyKC0tei1pbmRleC1kaWFsb2cpXCIsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluZm86IGFueVxuXG4gIHB1YmxpYyBzdGF0aWMgc3VjY2VzczogYW55XG5cbiAgcHVibGljIHN0YXRpYyB3YXJuaW5nOiBhbnlcblxuICBwdWJsaWMgc3RhdGljIGRhbmdlcjogYW55XG5cbiAgcHVibGljIHN0YXRpYyBjb25maXJtOiBhbnlcblxuICBwdWJsaWMgc3RhdGljIGluZm9ybTogYW55XG5cbiAgcHVibGljIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSAoXG4gICAgeyBjdXJyZW50U3RlcCwgdmlzaWJsZSB9OiBJRGlhbG9nUHJvcHMsXG4gICAgeyBoYXNFdmVyT3BlbmVkIH06IElEaWFsb2dTdGF0ZVxuICApID0+IHtcbiAgICBjb25zdCBuZXdTdGF0ZTogUGFydGlhbDxJRGlhbG9nU3RhdGU+ID0ge31cbiAgICBpZiAoY3VycmVudFN0ZXAgIT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlLmN1cnJlbnRTdGVwID0gY3VycmVudFN0ZXBcbiAgICB9XG4gICAgaWYgKHZpc2libGUgIT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlLnZpc2libGUgPSB2aXNpYmxlXG4gICAgICBpZiAoIWhhc0V2ZXJPcGVuZWQgJiYgdmlzaWJsZSkge1xuICAgICAgICBuZXdTdGF0ZS5oYXNFdmVyT3BlbmVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmtleXMobmV3U3RhdGUpLmxlbmd0aCA+IDAgPyBuZXdTdGF0ZSA6IG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiDkv53lrZjoioLngrnmjILovb3nmoTlr7nosaFcbiAgICovXG4gIHB1YmxpYyBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50IHwgbnVsbFxuXG4gIC8qKlxuICAgKiDkv53lrZjpobXpnaLmmK/lkKYgb3ZlcmZsb3dcbiAgICovXG4gIHB1YmxpYyBib2R5SXNPdmVyZmxvd2luZzogYm9vbGVhblxuXG4gIC8qKlxuICAgKiDkv53lrZjlvZPliY3mtY/op4jlmajnmoTmu5rliqjmnaHlrr3luqZcbiAgICovXG4gIHB1YmxpYyBzY3JvbGxiYXJXaWR0aDogbnVtYmVyXG5cbiAgcHVibGljIGRpYWxvZzogSFRNTERpdkVsZW1lbnRcblxuICBwdWJsaWMgd3JhcHBlcjogSFRNTERpdkVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSURpYWxvZ1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyBjdXJyZW50U3RlcCwgZGVmYXVsdEN1cnJlbnRTdGVwLCB2aXNpYmxlLCBkZWZhdWx0VmlzaWJsZSB9ID0gcHJvcHNcbiAgICBjb25zdCB2aXNpYmxlU3RhdGUgPSB2aXNpYmxlICE9PSBudWxsID8gISF2aXNpYmxlIDogISFkZWZhdWx0VmlzaWJsZVxuICAgIGNvbnN0IGN1cnJlbnRTdGVwU3RhdGUgPVxuICAgICAgY3VycmVudFN0ZXAgIT09IG51bGwgPyBjdXJyZW50U3RlcCA6IGRlZmF1bHRDdXJyZW50U3RlcFxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpc2libGU6IHZpc2libGVTdGF0ZSxcbiAgICAgIGN1cnJlbnRTdGVwOiBjdXJyZW50U3RlcFN0YXRlIHx8IDAsXG4gICAgICBoYXNFdmVyT3BlbmVkOiB2aXNpYmxlU3RhdGUsXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNhdmVEaWFsb2cgPSAobm9kZTogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmRpYWxvZyA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyByZXNldFNjcm9sbGJhclBhZGRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjaGFuZ2VCb2R5U3R5bGUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoY2hhbmdlQm9keVN0eWxlKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJcIlxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFNjcm9sbGJhclBhZGRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjaGFuZ2VCb2R5U3R5bGUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoY2hhbmdlQm9keVN0eWxlKSB7XG4gICAgICBjb25zdCB7IGlubmVyV2lkdGggfSA9IHdpbmRvd1xuICAgICAgdGhpcy5ib2R5SXNPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCBpbm5lcldpZHRoXG4gICAgICBpZiAodGhpcy5ib2R5SXNPdmVyZmxvd2luZyAmJiAhZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJXaWR0aCA9IGdldFNjcm9sbEJhclNpemUoKVxuICAgICAgICBpZiAodGhpcy5zY3JvbGxiYXJXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLnNjcm9sbGJhcldpZHRofXB4YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDYW5jZWxCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjYW5jZWxQcm9wcywgY2FuY2VsVGV4dCwgc3RlcHMsIHR5cGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGN1cnJlbnRTdGVwIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgZGVmYXVsdFRleHQgPSBjdXJyZW50U3RlcCA9PT0gMCA/IFwi5Y+W5raIXCIgOiBcIuS4iuS4gOatpVwiXG4gICAgY29uc3QgZ2VuZXJhdGVCdXR0b24gPSAocHJvcHM/OiBJQnV0dG9uUHJvcHMsIHRleHQgPSBkZWZhdWx0VGV4dCkgPT4gKFxuICAgICAgPEJ1dHRvbiBrZXk9XCJjYW5jZWxcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhbmNlbH0gey4uLnByb3BzfT5cbiAgICAgICAge3RleHR9XG4gICAgICA8L0J1dHRvbj5cbiAgICApXG5cbiAgICBpZiAoc3RlcHMgJiYgc3RlcHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBwcm9wcyA9IHN0ZXBzW2N1cnJlbnRTdGVwXS5jYW5jZWxQcm9wc1xuICAgICAgY29uc3QgdGV4dCA9IHN0ZXBzW2N1cnJlbnRTdGVwXS5jYW5jZWxUZXh0XG4gICAgICByZXR1cm4gZ2VuZXJhdGVCdXR0b24ocHJvcHMsIHRleHQpXG4gICAgfVxuICAgIGlmICh0eXBlID09PSBcImluZm9ybVwiKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gZ2VuZXJhdGVCdXR0b24oY2FuY2VsUHJvcHMsIGNhbmNlbFRleHQpXG4gIH1cblxuICBwdWJsaWMgZ2V0Q29uZmlybUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbmZpcm1Qcm9wcywgY29uZmlybVRleHQsIHN0ZXBzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBjdXJyZW50U3RlcCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gKHByb3BzPzogSUJ1dHRvblByb3BzLCB0ZXh0Pzogc3RyaW5nKSA9PiAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGtleT1cInByaW1hcnlcIlxuICAgICAgICBpbnRlbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDb25maXJtfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9CdXR0b24+XG4gICAgKVxuXG4gICAgaWYgKHN0ZXBzICYmIHN0ZXBzLmxlbmd0aCkge1xuICAgICAgY29uc3QgcHJvcHMgPSBzdGVwc1tjdXJyZW50U3RlcF0uY29uZmlybVByb3BzXG4gICAgICBjb25zdCB0ZXh0ID1cbiAgICAgICAgc3RlcHNbY3VycmVudFN0ZXBdLmNvbmZpcm1UZXh0IHx8XG4gICAgICAgIChjdXJyZW50U3RlcCA9PT0gc3RlcHMubGVuZ3RoIC0gMSA/IFwi5a6M5oiQXCIgOiBcIuS4i+S4gOatpVwiKVxuICAgICAgcmV0dXJuIGdlbmVyYXRlQnV0dG9uKHByb3BzLCB0ZXh0KVxuICAgIH1cbiAgICByZXR1cm4gZ2VuZXJhdGVCdXR0b24oY29uZmlybVByb3BzLCBjb25maXJtVGV4dCB8fCBcIuehruiupFwiKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgZXNjYXBlS2V5Q2xvc2FibGUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoZXNjYXBlS2V5Q2xvc2FibGUgJiYgZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdGhpcy5oYW5kbGVDYW5jZWwoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVDYW5jZWwgPSAodHlwZT86IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgb25DYW5jZWwsIHN0ZXBzLCB2aXNpYmxlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBjdXJyZW50U3RlcCB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICh0eXBlID09PSBcImNsb3NlXCIgfHwgIXN0ZXBzIHx8ICFzdGVwcy5sZW5ndGgpIHtcbiAgICAgIGlmICh2aXNpYmxlID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2FuY2VsKSB7XG4gICAgICAgIG9uQ2FuY2VsKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBvbkNhbmNlbDogb25TdGVwQ2FuY2VsIH0gPSBzdGVwc1tjdXJyZW50U3RlcF1cbiAgICAgIGlmIChvblN0ZXBDYW5jZWwpIHtcbiAgICAgICAgb25TdGVwQ2FuY2VsKClcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50U3RlcCA9PT0gMCkge1xuICAgICAgICBpZiAodmlzaWJsZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFN0ZXA6IGN1cnJlbnRTdGVwIC0gMSB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVDb25maXJtID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25Db25maXJtLCBzdGVwcywgdmlzaWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoc3RlcHMgJiYgc3RlcHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCB7IG9uQ29uZmlybTogb25TdGVwQ29uZmlybSB9ID0gc3RlcHNbY3VycmVudFN0ZXBdXG4gICAgICBpZiAob25TdGVwQ29uZmlybSkge1xuICAgICAgICBvblN0ZXBDb25maXJtKClcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50U3RlcCA9PT0gc3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBpZiAodmlzaWJsZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFN0ZXA6IGN1cnJlbnRTdGVwICsgMSB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmlzaWJsZSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNvbmZpcm0pIHtcbiAgICAgICAgb25Db25maXJtKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25MZWF2ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFmdGVyQ2xvc2UsIGRlc3Ryb3lBZnRlckNsb3NlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHRoaXMud3JhcHBlcikge1xuICAgICAgdGhpcy53cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH1cbiAgICB0aGlzLnJlc2V0U2Nyb2xsYmFyUGFkZGluZygpXG5cbiAgICBpZiAoYWZ0ZXJDbG9zZSkge1xuICAgICAgYWZ0ZXJDbG9zZSgpXG4gICAgfVxuXG4gICAgaWYgKGRlc3Ryb3lBZnRlckNsb3NlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaGFzRXZlck9wZW5lZDogZmFsc2UgfSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZ2V0Q29udGFpbmVyIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250YWluZXJcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICBpZiAoZ2V0Q29udGFpbmVyKSB7XG4gICAgICBnZXRDb250YWluZXIoKS5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIH1cbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlRW50ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBlc2NhcGVLZXlDbG9zYWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0aGlzLndyYXBwZXIpIHtcbiAgICAgIGlmIChlc2NhcGVLZXlDbG9zYWJsZSkge1xuICAgICAgICB0aGlzLndyYXBwZXIuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDb21wb25lbnQgPSAob3B0aW9ucz86IHsgdmlzaWJsZTogYm9vbGVhbiB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgYm9keVN0eWxlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBmb290ZXJFbGVtZW50LFxuICAgICAgZm9vdGVyU3R5bGUsXG4gICAgICBoZWFkZXJDb250ZW50LFxuICAgICAgaGVhZGVyRWxlbWVudCxcbiAgICAgIGhlYWRlclN0eWxlLFxuICAgICAgbWFza0Nsb3NhYmxlLFxuICAgICAgc3RlcHMsXG4gICAgICBzdHlsZSxcbiAgICAgIHRpdGxlLFxuICAgICAgekluZGV4OiB6SW5kZXhQcm9wLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB6SW5kZXggPSB6SW5kZXhQcm9wIGFzIFJlYWN0LkNTU1Byb3BlcnRpZXNbXCJ6SW5kZXhcIl1cblxuICAgIGNvbnN0IHJlc3RQcm9wcyA9IG9taXQob3RoZXJQcm9wcywgW1xuICAgICAgXCJhZnRlckNsb3NlXCIsXG4gICAgICBcImNhbmNlbFByb3BzXCIsXG4gICAgICBcImNhbmNlbFRleHRcIixcbiAgICAgIFwiY2hhbmdlQm9keVN0eWxlXCIsXG4gICAgICBcImNvbmZpcm1Qcm9wc1wiLFxuICAgICAgXCJjb25maXJtVGV4dFwiLFxuICAgICAgXCJjdXJyZW50U3RlcFwiLFxuICAgICAgXCJkZWZhdWx0Q3VycmVudFN0ZXBcIixcbiAgICAgIFwiZGVmYXVsdFZpc2libGVcIixcbiAgICAgIFwiZGVzdHJveUFmdGVyQ2xvc2VcIixcbiAgICAgIFwiZXNjYXBlS2V5Q2xvc2FibGVcIixcbiAgICAgIFwiZ2V0Q29udGFpbmVyXCIsXG4gICAgICBcIm9uQ2FuY2VsXCIsXG4gICAgICBcIm9uQ29uZmlybVwiLFxuICAgICAgXCJ0eXBlXCIsXG4gICAgICBcInZpc2libGVcIixcbiAgICBdKVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS1pbm5lcmApXG4gICAgY29uc3QgeyBjdXJyZW50U3RlcCB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAob3B0aW9ucyAmJiBPYmplY3Qua2V5cyhvcHRpb25zKS5pbmNsdWRlcyhcInZpc2libGVcIikpIHtcbiAgICAgIDsoeyB2aXNpYmxlIH0gPSBvcHRpb25zKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17dGhpcy5zYXZlRGlhbG9nfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS13cmFwcGVyYH1cbiAgICAgICAgICByZWY9eyh3cmFwcGVyKSA9PiB7XG4gICAgICAgICAgICBpZiAod3JhcHBlcikge1xuICAgICAgICAgICAgICB0aGlzLndyYXBwZXIgPSB3cmFwcGVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogdmlzaWJsZSA/IFwiZmxleFwiIDogXCJcIixcbiAgICAgICAgICAgIHpJbmRleCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgPlxuICAgICAgICAgIDxBbmltYXRlXG4gICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT17YCR7cHJlZml4fS1tYXNrYH1cbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Zpc2libGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1hc2tgfVxuICAgICAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAobWFza0Nsb3NhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsKFwiY2xvc2VcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0FuaW1hdGU+XG4gICAgICAgICAgey8qKlxuICAgICAgICAgICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMzQ1NTM0MlxuICAgICAgICAgICAqIDEuIOacgOWkluWxgiBtYXJnaW46IGF1dG8g6Z2e5bi46YeN6KaB44CCXG4gICAgICAgICAgICogRGlhbG9nIOeahOWuveW6puaYr+iHqumAguW6lOeahO+8jOWboOatpOS9v+eUqOS6hiBkaXNwbGF5OiBmbGV4IOWkhOeQhuWxheS4re+8jOi/meS9v+W+l+WtkOWFg+e0oOWFt+acieWMheijueaAp++8jOWboOatpOWuveW6puaJjeiDveeUseWGheWuueaJgOWGs+Wumu+8m1xuICAgICAgICAgICAqIG1hcmdpbjogYXV0bzsg5piv5Li65LqG5a6M5ZaEIGZsZXhib3ggb3ZlcmZsb3cg55qE5qC35byP44CCXG4gICAgICAgICAgICogMi4gekluZGV4OiAxIOaYr+S4uuS6huimhuebluWcqCBtYXNrIOS4iuOAglxuICAgICAgICAgICAqL31cbiAgICAgICAgICA8QW5pbWF0ZVxuICAgICAgICAgICAgb25BcHBlYXI9e3RoaXMuaGFuZGxlRW50ZXJ9XG4gICAgICAgICAgICBvbkVudGVyPXt0aGlzLmhhbmRsZUVudGVyfVxuICAgICAgICAgICAgb25MZWF2ZT17dGhpcy5vbkxlYXZlfVxuICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9e3ByZWZpeH1cbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbkFwcGVhclxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2aXNpYmxlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSBzdHlsZT17c3R5bGV9IHsuLi5yZXN0UHJvcHN9PlxuICAgICAgICAgICAgICAgIHtoZWFkZXJFbGVtZW50ID09PSBudWxsXG4gICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgIDogaGVhZGVyRWxlbWVudCB8fCAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taGVhZGVyYH0gc3R5bGU9e2hlYWRlclN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXswfSBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdGl0bGVgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJDb250ZW50ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWhlYWRlckNvbnRlbnRgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlckNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1jbG9zZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDYW5jZWwoXCJjbG9zZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWJvZHlgfSBzdHlsZT17Ym9keVN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIHtzdGVwcyAmJiBzdGVwcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgPyBzdGVwc1tjdXJyZW50U3RlcF0uY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgOiBjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7Zm9vdGVyRWxlbWVudCA9PT0gbnVsbCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1mb290ZXJgfSBzdHlsZT17Zm9vdGVyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICB7Zm9vdGVyRWxlbWVudCB8fCBbXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDYW5jZWxCdXR0b24oKSxcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbmZpcm1CdXR0b24oKSxcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0FuaW1hdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIGRpZG1vdW50IOeUsSBwb3J0YWwg55qEIG9uQ2hpbGRyZW5Nb3VudO+8jOWboOS4uiBkaWRtb3VudCDml7Ygd3JhcHBlciDlj6/og73lubbkuI3lnKggZG9tXG4gICAqL1xuICBwdWJsaWMgaGFuZGxlQ2hpbGRyZW5Nb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAodmlzaWJsZSAmJiB0aGlzLndyYXBwZXIpIHtcbiAgICAgIHRoaXMuc2V0U2Nyb2xsYmFyUGFkZGluZygpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSA9IChcbiAgICBfOiBJRGlhbG9nUHJvcHMsXG4gICAgeyB2aXNpYmxlOiB2aXNpYmxlUHJldiB9OiBJRGlhbG9nU3RhdGVcbiAgKSA9PiB7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHZpc2libGUgIT09IHZpc2libGVQcmV2ICYmIHZpc2libGUgJiYgdGhpcy53cmFwcGVyKSB7XG4gICAgICB0aGlzLnNldFNjcm9sbGJhclBhZGRpbmcoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5yZXNldFNjcm9sbGJhclBhZGRpbmcoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoYXNFdmVyT3BlbmVkIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKCFoYXNFdmVyT3BlbmVkKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcnRhbCBvbkNoaWxkcmVuTW91bnQ9e3RoaXMuaGFuZGxlQ2hpbGRyZW5Nb3VudH0+XG4gICAgICAgIHt0aGlzLmdldENvbXBvbmVudCgpfVxuICAgICAgPC9Qb3J0YWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZ1xuIl19