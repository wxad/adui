"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _document;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcG9ydGFsL1BvcnRhbC50c3giXSwibmFtZXMiOlsiY2Fubm90Q3JlYXRlUG9ydGFsIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJtYXliZUFkZENsYXNzIiwiY2xhc3NMaXN0IiwiY2xhc3NOYW1lIiwiYWRkIiwic3BsaXQiLCJQb3J0YWwiLCJzdGF0ZSIsImhhc01vdW50ZWQiLCJwb3J0YWxFbGVtZW50Iiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwicHJvcHMiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnRhaW5lciIsIm9uQ2hpbGRyZW5Nb3VudCIsImNyZWF0ZUNvbnRhaW5lckVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNldFN0YXRlIiwidW5zdGFibGVSZW5kZXJOb1BvcnRhbCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZDbGFzc05hbWUiLCJyZW1vdmUiLCJjaGlsZHJlbiIsImRvY3VtZW50IiwidW5tb3VudENvbXBvbmVudEF0Tm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJ1bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJkZWZhdWx0UHJvcHMiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEsa0JBQWtCLEdBQUcsT0FBT0MsUUFBUSxDQUFDQyxZQUFoQixLQUFpQyxVQUE1RDs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFNBQUQsRUFBMEJDLFNBQTFCLEVBQWlEO0FBQ3JFLE1BQUlBLFNBQVMsSUFBSSxJQUFiLElBQXFCQSxTQUFTLEtBQUssRUFBdkMsRUFBMkM7QUFDekNELElBQUFBLFNBQVMsQ0FBQ0UsR0FBVixPQUFBRixTQUFT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LGlDQUFNSixRQUFOLENBRkYsRUFHRSxLQUFLZixhQUhQO0FBS0Q7Ozs7RUFoRmlDb0IsS0FBSyxDQUFDQyxTOzs7QUFBckJ4QixNLENBSUx5QixXO0FBSkt6QixNLENBTUwwQixZLEdBQTZCO0FBQ3pDakIsRUFBQUEsU0FBUyxFQUFFLGNBQUFVLFFBQVEsVUFBUiw4Q0FBVVEsSUFBVixLQUFrQjtBQURZLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gXCJzaGFsbG93ZXF1YWxcIlxuXG4vKiogRGV0ZWN0IGlmIGBSZWFjdC5jcmVhdGVQb3J0YWwoKWAgQVBJIG1ldGhvZCBkb2VzIG5vdCBleGlzdC4gKi9cbmNvbnN0IGNhbm5vdENyZWF0ZVBvcnRhbCA9IHR5cGVvZiBSZWFjdERPTS5jcmVhdGVQb3J0YWwgIT09IFwiZnVuY3Rpb25cIlxuXG5jb25zdCBtYXliZUFkZENsYXNzID0gKGNsYXNzTGlzdDogRE9NVG9rZW5MaXN0LCBjbGFzc05hbWU/OiBzdHJpbmcpID0+IHtcbiAgaWYgKGNsYXNzTmFtZSAhPSBudWxsICYmIGNsYXNzTmFtZSAhPT0gXCJcIikge1xuICAgIGNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lLnNwbGl0KFwiIFwiKSlcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQb3J0YWxQcm9wcyB7XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI3vvIzmraTnsbvlkI3kvJrlop7liqDliLDmnIDlpJblsYLnmoTljIXlkKvlnZfkuIpcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5b2TIFBvcnRhbCDnmoQgY2hpbGRyZW4g6KKr5Yqg5YWl5YiwIERPTSDml7bnmoTpkqnlrZBcbiAgICovXG4gIG9uQ2hpbGRyZW5Nb3VudD86ICgpID0+IHZvaWRcblxuICAvKipcbiAgICogY2hpbGRyZW4gbW91bnRlZCB0b1xuICAgKiBAZGVmYXVsdCBkb2N1bWVudC5ib2R5XG4gICAqL1xuICBjb250YWluZXI/OiBIVE1MRWxlbWVudFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQb3J0YWxTdGF0ZSB7XG4gIGhhc01vdW50ZWQ6IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBQb3J0YWwg5bCG5a2Q57uE5Lu25LuO57uE5Lu25bGC57qn77yIY29tcG9uZW50IGhpZXJhcmNoee+8ieS4reWIhuemu++8jOW5tua3u+WKoOWIsOaMh+WumueahCBjb250YWluZXIg5LitXG4gKiDkvaDlupTor6XnlKjkuo7pgqPkupvlj5cgei1pbmRleOOAgW92ZXJmbG9344CBcG9zaXRpb246YWJzb2x1dGUg562J57qm5p2f55qE57uE5Lu25LitXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcnRhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgSVBvcnRhbFByb3BzLFxuICBJUG9ydGFsU3RhdGVcbj4ge1xuICBwdWJsaWMgc3RhdGljIGRpc3BsYXlOYW1lID0gYGFkdWlQb3J0YWxgXG5cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IElQb3J0YWxQcm9wcyA9IHtcbiAgICBjb250YWluZXI6IGRvY3VtZW50Py5ib2R5IHx8IG51bGwsXG4gIH1cblxuICBwdWJsaWMgc3RhdGU6IElQb3J0YWxTdGF0ZSA9IHsgaGFzTW91bnRlZDogZmFsc2UgfVxuXG4gIHByaXZhdGUgcG9ydGFsRWxlbWVudDogSFRNTEVsZW1lbnRcblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhhc01vdW50ZWQgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoY2Fubm90Q3JlYXRlUG9ydGFsIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhaGFzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKGNoaWxkcmVuLCB0aGlzLnBvcnRhbEVsZW1lbnQpXG4gIH1cblxuICBwdWJsaWMgc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKFxuICAgIG5leHRQcm9wczogSVBvcnRhbFByb3BzLFxuICAgIG5leHRTdGF0ZTogSVBvcnRhbFN0YXRlXG4gICkgPT5cbiAgICAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpXG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBvbkNoaWxkcmVuTW91bnQgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMucG9ydGFsRWxlbWVudCA9IHRoaXMuY3JlYXRlQ29udGFpbmVyRWxlbWVudCgpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucG9ydGFsRWxlbWVudClcbiAgICB0aGlzLnNldFN0YXRlKHsgaGFzTW91bnRlZDogdHJ1ZSB9LCBvbkNoaWxkcmVuTW91bnQpXG4gICAgaWYgKGNhbm5vdENyZWF0ZVBvcnRhbCkge1xuICAgICAgdGhpcy51bnN0YWJsZVJlbmRlck5vUG9ydGFsKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlID0gKHsgY2xhc3NOYW1lOiBwcmV2Q2xhc3NOYW1lIH06IElQb3J0YWxQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHRoaXMucG9ydGFsRWxlbWVudCAhPSBudWxsICYmIHByZXZDbGFzc05hbWUgIT09IGNsYXNzTmFtZSkge1xuICAgICAgaWYgKHByZXZDbGFzc05hbWUpIHtcbiAgICAgICAgdGhpcy5wb3J0YWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUocHJldkNsYXNzTmFtZSlcbiAgICAgIH1cbiAgICAgIG1heWJlQWRkQ2xhc3ModGhpcy5wb3J0YWxFbGVtZW50LmNsYXNzTGlzdCwgY2xhc3NOYW1lKVxuICAgIH1cbiAgICBpZiAoY2Fubm90Q3JlYXRlUG9ydGFsKSB7XG4gICAgICB0aGlzLnVuc3RhYmxlUmVuZGVyTm9Qb3J0YWwoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5wb3J0YWxFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgIGlmIChjYW5ub3RDcmVhdGVQb3J0YWwpIHtcbiAgICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLnBvcnRhbEVsZW1lbnQpXG4gICAgICB9XG4gICAgICB0aGlzLnBvcnRhbEVsZW1lbnQucmVtb3ZlKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNvbnRhaW5lckVsZW1lbnQoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhZHVpLXBvcnRhbFwiKVxuICAgIG1heWJlQWRkQ2xhc3MoY29udGFpbmVyLmNsYXNzTGlzdCwgY2xhc3NOYW1lKVxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIHByaXZhdGUgdW5zdGFibGVSZW5kZXJOb1BvcnRhbCgpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgUmVhY3RET00udW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIoXG4gICAgICB0aGlzLFxuICAgICAgPGRpdj57Y2hpbGRyZW59PC9kaXY+LFxuICAgICAgdGhpcy5wb3J0YWxFbGVtZW50XG4gICAgKVxuICB9XG59XG4iXX0=