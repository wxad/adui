"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _document;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var cannotCreatePortal = typeof ReactDOM.createPortal !== "function";

var maybeAddClass = function maybeAddClass(classList, className) {
  if (className != null && className !== "") {
    classList.add.apply(classList, _toConsumableArray(className.split(" ")));
  }
};

var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  var _super = _createSuper(Portal);

  function Portal() {
    var _this;

    _classCallCheck(this, Portal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      hasMounted: false
    };
    _this.portalElement = void 0;

    _this.shouldComponentUpdate = function (nextProps, nextState) {
      return !(0, _shallowequal["default"])(_this.props, nextProps) || !(0, _shallowequal["default"])(_this.state, nextState);
    };

    _this.componentDidMount = function () {
      var _this$props = _this.props,
          container = _this$props.container,
          onChildrenMount = _this$props.onChildrenMount;

      if (!container) {
        return;
      }

      _this.portalElement = _this.createContainerElement();
      container.appendChild(_this.portalElement);

      _this.setState({
        hasMounted: true
      }, onChildrenMount);

      if (cannotCreatePortal) {
        _this.unstableRenderNoPortal();
      }
    };

    _this.componentDidUpdate = function (_ref) {
      var prevClassName = _ref.className;
      var className = _this.props.className;

      if (_this.portalElement != null && prevClassName !== className) {
        if (prevClassName) {
          _this.portalElement.classList.remove(prevClassName);
        }

        maybeAddClass(_this.portalElement.classList, className);
      }

      if (cannotCreatePortal) {
        _this.unstableRenderNoPortal();
      }
    };

    return _this;
  }

  _createClass(Portal, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var hasMounted = this.state.hasMounted;

      if (cannotCreatePortal || typeof document === "undefined" || !hasMounted) {
        return null;
      }

      return ReactDOM.createPortal(children, this.portalElement);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.portalElement != null) {
        if (cannotCreatePortal) {
          ReactDOM.unmountComponentAtNode(this.portalElement);
        }

        this.portalElement.remove();
      }
    }
  }, {
    key: "createContainerElement",
    value: function createContainerElement() {
      var className = this.props.className;
      var container = document.createElement("div");
      container.classList.add("adui-portal");
      maybeAddClass(container.classList, className);
      return container;
    }
  }, {
    key: "unstableRenderNoPortal",
    value: function unstableRenderNoPortal() {
      var children = this.props.children;
      ReactDOM.unstable_renderSubtreeIntoContainer(this, React.createElement("div", null, children), this.portalElement);
    }
  }]);

  return Portal;
}(React.Component);

exports["default"] = Portal;
Portal.displayName = "aduiPortal";
Portal.defaultProps = {
  container: ((_document = document) === null || _document === void 0 ? void 0 : _document.body) || null
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcG9ydGFsL1BvcnRhbC50c3giXSwibmFtZXMiOlsiY2Fubm90Q3JlYXRlUG9ydGFsIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJtYXliZUFkZENsYXNzIiwiY2xhc3NMaXN0IiwiY2xhc3NOYW1lIiwiYWRkIiwic3BsaXQiLCJQb3J0YWwiLCJzdGF0ZSIsImhhc01vdW50ZWQiLCJwb3J0YWxFbGVtZW50Iiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwicHJvcHMiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnRhaW5lciIsIm9uQ2hpbGRyZW5Nb3VudCIsImNyZWF0ZUNvbnRhaW5lckVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNldFN0YXRlIiwidW5zdGFibGVSZW5kZXJOb1BvcnRhbCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZDbGFzc05hbWUiLCJyZW1vdmUiLCJjaGlsZHJlbiIsImRvY3VtZW50IiwidW5tb3VudENvbXBvbmVudEF0Tm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJ1bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJkZWZhdWx0UHJvcHMiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQU1BLGtCQUFrQixHQUFHLE9BQU9DLFFBQVEsQ0FBQ0MsWUFBaEIsS0FBaUMsVUFBNUQ7O0FBRUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxTQUFELEVBQTBCQyxTQUExQixFQUFpRDtBQUNyRSxNQUFJQSxTQUFTLElBQUksSUFBYixJQUFxQkEsU0FBUyxLQUFLLEVBQXZDLEVBQTJDO0FBQ3pDRCxJQUFBQSxTQUFT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QixtQ0FBVCxDQUNFLElBREYsRUFFRSxpQ0FBTUosUUFBTixDQUZGLEVBR0UsS0FBS2YsYUFIUDtBQUtEOzs7O0VBaEZpQ29CLEtBQUssQ0FBQ0MsUzs7O0FBQXJCeEIsTSxDQUlMeUIsVztBQUpLekIsTSxDQU1MMEIsWSxHQUE2QjtBQUN6Q2pCLEVBQUFBLFNBQVMsRUFBRSxjQUFBVSxRQUFRLFVBQVIsOENBQVVRLElBQVYsS0FBa0I7QUFEWSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIlxuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tIFwic2hhbGxvd2VxdWFsXCJcblxuLyoqIERldGVjdCBpZiBgUmVhY3QuY3JlYXRlUG9ydGFsKClgIEFQSSBtZXRob2QgZG9lcyBub3QgZXhpc3QuICovXG5jb25zdCBjYW5ub3RDcmVhdGVQb3J0YWwgPSB0eXBlb2YgUmVhY3RET00uY3JlYXRlUG9ydGFsICE9PSBcImZ1bmN0aW9uXCJcblxuY29uc3QgbWF5YmVBZGRDbGFzcyA9IChjbGFzc0xpc3Q6IERPTVRva2VuTGlzdCwgY2xhc3NOYW1lPzogc3RyaW5nKSA9PiB7XG4gIGlmIChjbGFzc05hbWUgIT0gbnVsbCAmJiBjbGFzc05hbWUgIT09IFwiXCIpIHtcbiAgICBjbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZS5zcGxpdChcIiBcIikpXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUG9ydGFsUHJvcHMge1xuICAvKipcbiAgICog6ZmE5Yqg57G75ZCN77yM5q2k57G75ZCN5Lya5aKe5Yqg5Yiw5pyA5aSW5bGC55qE5YyF5ZCr5Z2X5LiKXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOW9kyBQb3J0YWwg55qEIGNoaWxkcmVuIOiiq+WKoOWFpeWIsCBET00g5pe255qE6ZKp5a2QXG4gICAqL1xuICBvbkNoaWxkcmVuTW91bnQ/OiAoKSA9PiB2b2lkXG5cbiAgLyoqXG4gICAqIGNoaWxkcmVuIG1vdW50ZWQgdG9cbiAgICogQGRlZmF1bHQgZG9jdW1lbnQuYm9keVxuICAgKi9cbiAgY29udGFpbmVyPzogSFRNTEVsZW1lbnRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUG9ydGFsU3RhdGUge1xuICBoYXNNb3VudGVkOiBib29sZWFuXG59XG5cbi8qKlxuICogUG9ydGFsIOWwhuWtkOe7hOS7tuS7jue7hOS7tuWxgue6p++8iGNvbXBvbmVudCBoaWVyYXJjaHnvvInkuK3liIbnprvvvIzlubbmt7vliqDliLDmjIflrprnmoQgY29udGFpbmVyIOS4rVxuICog5L2g5bqU6K+l55So5LqO6YKj5Lqb5Y+XIHotaW5kZXjjgIFvdmVyZmxvd+OAgXBvc2l0aW9uOmFic29sdXRlIOetiee6puadn+eahOe7hOS7tuS4rVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3J0YWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIElQb3J0YWxQcm9wcyxcbiAgSVBvcnRhbFN0YXRlXG4+IHtcbiAgcHVibGljIHN0YXRpYyBkaXNwbGF5TmFtZSA9IGBhZHVpUG9ydGFsYFxuXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBJUG9ydGFsUHJvcHMgPSB7XG4gICAgY29udGFpbmVyOiBkb2N1bWVudD8uYm9keSB8fCBudWxsLFxuICB9XG5cbiAgcHVibGljIHN0YXRlOiBJUG9ydGFsU3RhdGUgPSB7IGhhc01vdW50ZWQ6IGZhbHNlIH1cblxuICBwcml2YXRlIHBvcnRhbEVsZW1lbnQ6IEhUTUxFbGVtZW50XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBoYXNNb3VudGVkIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKGNhbm5vdENyZWF0ZVBvcnRhbCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIgfHwgIWhhc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgdGhpcy5wb3J0YWxFbGVtZW50KVxuICB9XG5cbiAgcHVibGljIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChcbiAgICBuZXh0UHJvcHM6IElQb3J0YWxQcm9wcyxcbiAgICBuZXh0U3RhdGU6IElQb3J0YWxTdGF0ZVxuICApID0+XG4gICAgIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgb25DaGlsZHJlbk1vdW50IH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnBvcnRhbEVsZW1lbnQgPSB0aGlzLmNyZWF0ZUNvbnRhaW5lckVsZW1lbnQoKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnBvcnRhbEVsZW1lbnQpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhhc01vdW50ZWQ6IHRydWUgfSwgb25DaGlsZHJlbk1vdW50KVxuICAgIGlmIChjYW5ub3RDcmVhdGVQb3J0YWwpIHtcbiAgICAgIHRoaXMudW5zdGFibGVSZW5kZXJOb1BvcnRhbCgpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSA9ICh7IGNsYXNzTmFtZTogcHJldkNsYXNzTmFtZSB9OiBJUG9ydGFsUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0aGlzLnBvcnRhbEVsZW1lbnQgIT0gbnVsbCAmJiBwcmV2Q2xhc3NOYW1lICE9PSBjbGFzc05hbWUpIHtcbiAgICAgIGlmIChwcmV2Q2xhc3NOYW1lKSB7XG4gICAgICAgIHRoaXMucG9ydGFsRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHByZXZDbGFzc05hbWUpXG4gICAgICB9XG4gICAgICBtYXliZUFkZENsYXNzKHRoaXMucG9ydGFsRWxlbWVudC5jbGFzc0xpc3QsIGNsYXNzTmFtZSlcbiAgICB9XG4gICAgaWYgKGNhbm5vdENyZWF0ZVBvcnRhbCkge1xuICAgICAgdGhpcy51bnN0YWJsZVJlbmRlck5vUG9ydGFsKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMucG9ydGFsRWxlbWVudCAhPSBudWxsKSB7XG4gICAgICBpZiAoY2Fubm90Q3JlYXRlUG9ydGFsKSB7XG4gICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5wb3J0YWxFbGVtZW50KVxuICAgICAgfVxuICAgICAgdGhpcy5wb3J0YWxFbGVtZW50LnJlbW92ZSgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDb250YWluZXJFbGVtZW50KCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWR1aS1wb3J0YWxcIilcbiAgICBtYXliZUFkZENsYXNzKGNvbnRhaW5lci5jbGFzc0xpc3QsIGNsYXNzTmFtZSlcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBwcml2YXRlIHVuc3RhYmxlUmVuZGVyTm9Qb3J0YWwoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIFJlYWN0RE9NLnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyKFxuICAgICAgdGhpcyxcbiAgICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PixcbiAgICAgIHRoaXMucG9ydGFsRWxlbWVudFxuICAgIClcbiAgfVxufVxuIl19