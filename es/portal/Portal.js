function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _document;

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

import * as React from "react";
import * as ReactDOM from "react-dom";
import shallowEqual from "shallowequal";
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
      return !shallowEqual(_this.props, nextProps) || !shallowEqual(_this.state, nextState);
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

Portal.displayName = "aduiPortal";
Portal.defaultProps = {
  container: ((_document = document) === null || _document === void 0 ? void 0 : _document.body) || null
};
export { Portal as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcG9ydGFsL1BvcnRhbC50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsInNoYWxsb3dFcXVhbCIsImNhbm5vdENyZWF0ZVBvcnRhbCIsImNyZWF0ZVBvcnRhbCIsIm1heWJlQWRkQ2xhc3MiLCJjbGFzc0xpc3QiLCJjbGFzc05hbWUiLCJhZGQiLCJzcGxpdCIsIlBvcnRhbCIsInN0YXRlIiwiaGFzTW91bnRlZCIsInBvcnRhbEVsZW1lbnQiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJwcm9wcyIsImNvbXBvbmVudERpZE1vdW50IiwiY29udGFpbmVyIiwib25DaGlsZHJlbk1vdW50IiwiY3JlYXRlQ29udGFpbmVyRWxlbWVudCIsImFwcGVuZENoaWxkIiwic2V0U3RhdGUiLCJ1bnN0YWJsZVJlbmRlck5vUG9ydGFsIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldkNsYXNzTmFtZSIsInJlbW92ZSIsImNoaWxkcmVuIiwiZG9jdW1lbnQiLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwiY3JlYXRlRWxlbWVudCIsInVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyIiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJkZWZhdWx0UHJvcHMiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUtBLEtBQVosTUFBdUIsT0FBdkI7QUFDQSxPQUFPLEtBQUtDLFFBQVosTUFBMEIsV0FBMUI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGNBQXpCO0FBR0EsSUFBTUMsa0JBQWtCLEdBQUcsT0FBT0YsUUFBUSxDQUFDRyxZQUFoQixLQUFpQyxVQUE1RDs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFNBQUQsRUFBMEJDLFNBQTFCLEVBQWlEO0FBQ3JFLE1BQUlBLFNBQVMs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UyxRQUR1QixHQUNWLEtBQUtYLEtBREssQ0FDdkJXLFFBRHVCO0FBRS9CM0IsTUFBQUEsUUFBUSxDQUFDK0IsbUNBQVQsQ0FDRSxJQURGLEVBRUUsaUNBQU1KLFFBQU4sQ0FGRixFQUdFLEtBQUtmLGFBSFA7QUFLRDs7OztFQWhGaUNiLEtBQUssQ0FBQ2lDLFM7O0FBQXJCdkIsTSxDQUlMd0IsVztBQUpLeEIsTSxDQU1MeUIsWSxHQUE2QjtBQUN6Q2hCLEVBQUFBLFNBQVMsRUFBRSxjQUFBVSxRQUFRLFVBQVIsOENBQVVPLElBQVYsS0FBa0I7QUFEWSxDO1NBTnhCMUIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCJcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSBcInNoYWxsb3dlcXVhbFwiXG5cbi8qKiBEZXRlY3QgaWYgYFJlYWN0LmNyZWF0ZVBvcnRhbCgpYCBBUEkgbWV0aG9kIGRvZXMgbm90IGV4aXN0LiAqL1xuY29uc3QgY2Fubm90Q3JlYXRlUG9ydGFsID0gdHlwZW9mIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbCAhPT0gXCJmdW5jdGlvblwiXG5cbmNvbnN0IG1heWJlQWRkQ2xhc3MgPSAoY2xhc3NMaXN0OiBET01Ub2tlbkxpc3QsIGNsYXNzTmFtZT86IHN0cmluZykgPT4ge1xuICBpZiAoY2xhc3NOYW1lICE9IG51bGwgJiYgY2xhc3NOYW1lICE9PSBcIlwiKSB7XG4gICAgY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUuc3BsaXQoXCIgXCIpKVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvcnRhbFByb3BzIHtcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQje+8jOatpOexu+WQjeS8muWinuWKoOWIsOacgOWkluWxgueahOWMheWQq+Wdl+S4ilxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDlvZMgUG9ydGFsIOeahCBjaGlsZHJlbiDooqvliqDlhaXliLAgRE9NIOaXtueahOmSqeWtkFxuICAgKi9cbiAgb25DaGlsZHJlbk1vdW50PzogKCkgPT4gdm9pZFxuXG4gIC8qKlxuICAgKiBjaGlsZHJlbiBtb3VudGVkIHRvXG4gICAqIEBkZWZhdWx0IGRvY3VtZW50LmJvZHlcbiAgICovXG4gIGNvbnRhaW5lcj86IEhUTUxFbGVtZW50XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvcnRhbFN0YXRlIHtcbiAgaGFzTW91bnRlZDogYm9vbGVhblxufVxuXG4vKipcbiAqIFBvcnRhbCDlsIblrZDnu4Tku7bku47nu4Tku7blsYLnuqfvvIhjb21wb25lbnQgaGllcmFyY2h577yJ5Lit5YiG56a777yM5bm25re75Yqg5Yiw5oyH5a6a55qEIGNvbnRhaW5lciDkuK1cbiAqIOS9oOW6lOivpeeUqOS6jumCo+S6m+WPlyB6LWluZGV444CBb3ZlcmZsb3fjgIFwb3NpdGlvbjphYnNvbHV0ZSDnrYnnuqbmnZ/nmoTnu4Tku7bkuK1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9ydGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBJUG9ydGFsUHJvcHMsXG4gIElQb3J0YWxTdGF0ZVxuPiB7XG4gIHB1YmxpYyBzdGF0aWMgZGlzcGxheU5hbWUgPSBgYWR1aVBvcnRhbGBcblxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogSVBvcnRhbFByb3BzID0ge1xuICAgIGNvbnRhaW5lcjogZG9jdW1lbnQ/LmJvZHkgfHwgbnVsbCxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0ZTogSVBvcnRhbFN0YXRlID0geyBoYXNNb3VudGVkOiBmYWxzZSB9XG5cbiAgcHJpdmF0ZSBwb3J0YWxFbGVtZW50OiBIVE1MRWxlbWVudFxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaGFzTW91bnRlZCB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChjYW5ub3RDcmVhdGVQb3J0YWwgfHwgdHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiIHx8ICFoYXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoY2hpbGRyZW4sIHRoaXMucG9ydGFsRWxlbWVudClcbiAgfVxuXG4gIHB1YmxpYyBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAoXG4gICAgbmV4dFByb3BzOiBJUG9ydGFsUHJvcHMsXG4gICAgbmV4dFN0YXRlOiBJUG9ydGFsU3RhdGVcbiAgKSA9PlxuICAgICFzaGFsbG93RXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhc2hhbGxvd0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSlcblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIG9uQ2hpbGRyZW5Nb3VudCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5wb3J0YWxFbGVtZW50ID0gdGhpcy5jcmVhdGVDb250YWluZXJFbGVtZW50KClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5wb3J0YWxFbGVtZW50KVxuICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNNb3VudGVkOiB0cnVlIH0sIG9uQ2hpbGRyZW5Nb3VudClcbiAgICBpZiAoY2Fubm90Q3JlYXRlUG9ydGFsKSB7XG4gICAgICB0aGlzLnVuc3RhYmxlUmVuZGVyTm9Qb3J0YWwoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUgPSAoeyBjbGFzc05hbWU6IHByZXZDbGFzc05hbWUgfTogSVBvcnRhbFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodGhpcy5wb3J0YWxFbGVtZW50ICE9IG51bGwgJiYgcHJldkNsYXNzTmFtZSAhPT0gY2xhc3NOYW1lKSB7XG4gICAgICBpZiAocHJldkNsYXNzTmFtZSkge1xuICAgICAgICB0aGlzLnBvcnRhbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShwcmV2Q2xhc3NOYW1lKVxuICAgICAgfVxuICAgICAgbWF5YmVBZGRDbGFzcyh0aGlzLnBvcnRhbEVsZW1lbnQuY2xhc3NMaXN0LCBjbGFzc05hbWUpXG4gICAgfVxuICAgIGlmIChjYW5ub3RDcmVhdGVQb3J0YWwpIHtcbiAgICAgIHRoaXMudW5zdGFibGVSZW5kZXJOb1BvcnRhbCgpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnBvcnRhbEVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgaWYgKGNhbm5vdENyZWF0ZVBvcnRhbCkge1xuICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMucG9ydGFsRWxlbWVudClcbiAgICAgIH1cbiAgICAgIHRoaXMucG9ydGFsRWxlbWVudC5yZW1vdmUoKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ29udGFpbmVyRWxlbWVudCgpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFkdWktcG9ydGFsXCIpXG4gICAgbWF5YmVBZGRDbGFzcyhjb250YWluZXIuY2xhc3NMaXN0LCBjbGFzc05hbWUpXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgcHJpdmF0ZSB1bnN0YWJsZVJlbmRlck5vUG9ydGFsKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBSZWFjdERPTS51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcihcbiAgICAgIHRoaXMsXG4gICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj4sXG4gICAgICB0aGlzLnBvcnRhbEVsZW1lbnRcbiAgICApXG4gIH1cbn1cbiJdfQ==