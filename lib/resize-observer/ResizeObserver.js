"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _findDOMNode = _interopRequireDefault(require("rc-util/lib/Dom/findDOMNode"));

var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

var _warning = _interopRequireDefault(require("../_util/warning"));

var _ref3 = require("rc-util/lib/ref");

var _ResizeObserverPolyfill = _interopRequireDefault(require("./ResizeObserverPolyfill"));

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

var supportRef = function supportRef(nodeOrComponent) {
  var _nodeOrComponent$type;

  if ((_nodeOrComponent$type = nodeOrComponent.type) !== null && _nodeOrComponent$type !== void 0 && _nodeOrComponent$type.$$typeof && nodeOrComponent.type.$$typeof.toString().includes("forward_ref")) {
    return false;
  }

  if (nodeOrComponent.type && nodeOrComponent.type.prototype && !nodeOrComponent.type.prototype.render) {
    return false;
  }

  if (typeof nodeOrComponent === "function") {
    return false;
  }

  return true;
};

var ReactResizeObserver = function (_React$Component) {
  _inherits(ReactResizeObserver, _React$Component);

  var _super = _createSuper(ReactResizeObserver);

  function ReactResizeObserver() {
    var _this;

    _classCallCheck(this, ReactResizeObserver);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.resizeObserver = null;
    _this.childNode = null;
    _this.currentElement = null;
    _this.state = {
      width: 0,
      height: 0
    };

    _this.onResize = function (entries) {
      var onResize = _this.props.onResize;
      var _this$state = _this.state,
          widthState = _this$state.width,
          heightState = _this$state.height;
      var target = entries[0].target;

      var _target$getBoundingCl = target.getBoundingClientRect(),
          width = _target$getBoundingCl.width,
          height = _target$getBoundingCl.height;

      var _ref = [Math.floor(width), Math.floor(height)],
          fixedWidth = _ref[0],
          fixedHeight = _ref[1];

      if (widthState !== fixedWidth || heightState !== fixedHeight) {
        var _size = {
          width: fixedWidth,
          height: fixedHeight
        };

        _this.setState(_size);

        if (onResize) {
          onResize(_size);
        }
      }
    };

    _this.setChildNode = function (node) {
      _this.childNode = node;
    };

    return _this;
  }

  _createClass(ReactResizeObserver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onComponentUpdated();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.onComponentUpdated();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyObserver();
    }
  }, {
    key: "onComponentUpdated",
    value: function onComponentUpdated() {
      var disabled = this.props.disabled;

      if (disabled) {
        this.destroyObserver();
        return;
      }

      var element = (0, _findDOMNode["default"])(this.childNode || this);
      var elementChanged = element !== this.currentElement;

      if (elementChanged) {
        this.destroyObserver();
        this.currentElement = element;
      }

      if (!this.resizeObserver && element) {
        this.resizeObserver = new _ResizeObserverPolyfill["default"](this.onResize);
        this.resizeObserver.observe(element);
      }
    }
  }, {
    key: "destroyObserver",
    value: function destroyObserver() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var childNodes = (0, _toArray["default"])(children);

      if (childNodes.length > 1) {
        (0, _warning["default"])(false, "ResizeObserver", "有多个 children，将只会在第一个元素上监听");
      } else if (childNodes.length === 0) {
        (0, _warning["default"])(false, "ResizeObserver", "没有 children");
        return null;
      }

      var childNode = childNodes[0];

      if (React.isValidElement(childNode) && supportRef(childNode)) {
        var _ref2 = childNode,
            ref = _ref2.ref;
        childNodes[0] = React.cloneElement(childNode, {
          ref: (0, _ref3.composeRef)(ref, this.setChildNode)
        });
      }

      return childNodes.length === 1 ? childNodes[0] : childNodes.map(function (node, index) {
        if (!React.isValidElement(node) || "key" in node && node.key !== null) {
          return node;
        }

        return React.cloneElement(node, {
          key: "adui-observer-key-".concat(index)
        });
      });
    }
  }]);

  return ReactResizeObserver;
}(React.Component);

ReactResizeObserver.displayName = "ResizeObserver";
var _default = ReactResizeObserver;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcmVzaXplLW9ic2VydmVyL1Jlc2l6ZU9ic2VydmVyLnRzeCJdLCJuYW1lcyI6WyJzdXBwb3J0UmVmIiwibm9kZU9yQ29tcG9uZW50IiwidHlwZSIsIiQkdHlwZW9mIiwidG9TdHJpbmciLCJpbmNsdWRlcyIsInByb3RvdHlwZSIsInJlbmRlciIsIlJlYWN0UmVzaXplT2JzZXJ2ZXIiLCJyZXNpemVPYnNlcnZlciIsImNoaWxkTm9kZSIsImN1cnJlbnRFbGVtZW50Iiwic3RhdGUiLCJ3aWR0aCIsImhlaWdodCIsIm9uUmVzaXplIiwiZW50cmllcyIsInByb3BzIiwid2lkdGhTdGF0ZSIsImhlaWdodFN0YXRlIiwidGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiTWF0aCIsImZsb29yIiwiZml4ZWRXaWR0aCIsImZpeGVkSGVpZ2h0Iiwic2l6ZSIsInNldFN0YXRlIiwic2V0Q2hpbGROb2RlIiwibm9kZSIsIm9uQ29tcG9uZW50VXBkYXRlZCIsImRlc3Ryb3lPYnNlcnZlciIsImRpc2FibGVkIiwiZWxlbWVudCIsImVsZW1lbnRDaGFuZ2VkIiwiUmVzaXplT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImNoaWxkcmVuIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsIlJlYWN0IiwiaXNWYWxpZEVsZW1lbnQiLCJyZWYiLCJjbG9uZUVsZW1lbnQiLCJtYXAiLCJpbmRleCIsImtleSIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLGVBQWUsRUFBSTtBQUFBOztBQUNwQyxNQUNFLHlCQUFBQSxlQUFlLENBQUNDLElBQWhCLHdFQUFzQkMsUUFBdEIsSUFDQUYsZUFBZSxDQUFDQyxJQUFoQixDQUFx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QUFDa0IsR0FBTCxLQUFhLElBRmpDLEVBR0U7QUFDQSxpQkFBT2xCLElBQVA7QUFDRDs7QUFFRCxlQUFPWSxLQUFLLENBQUNHLFlBQU4sQ0FBbUJmLElBQW5CLEVBQXlCO0FBQzlCa0IsVUFBQUEsR0FBRyw4QkFBdUJELEtBQXZCO0FBRDJCLFNBQXpCLENBQVA7QUFHRCxPQVhELENBRko7QUFjRDs7OztFQTFIK0JMLEtBQUssQ0FBQ08sUzs7QUFBbEN4QyxtQixDQUlHeUMsVyxHQUFjLGdCO2VBeUhSekMsbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlc2l6ZU9ic2VydmVyIOS8muS7pSBjbGFzcyDnu4Tku7bnmoTlvaLlvI/lrZjlnKjvvIxcbiAqIOWboOS4uuWFtuS9v+eUqCBmaW5kRG9tTm9kZSh0aGlzKSDlrp7njrAgY2hpbGRyZW4g5Li6IGZjIOaXtuS4jeiDvee7mSByZWYg55qE5oOF5Ya1XG4gKiDlpoLmnpwgUmVzaXplT2JzZXJ2ZXIg5Lmf5pivIGZj77yM5bCx5rKh5pyJ5Yqe5rOV5Zyo5LiN5re75Yqg6aKd5aSW57uT5p6E55qE5oOF5Ya15LiL5ou/5YiwIGRvbSDkuoZcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGZpbmRET01Ob2RlIGZyb20gXCJyYy11dGlsL2xpYi9Eb20vZmluZERPTU5vZGVcIlxuaW1wb3J0IHRvQXJyYXkgZnJvbSBcInJjLXV0aWwvbGliL0NoaWxkcmVuL3RvQXJyYXlcIlxuaW1wb3J0IHdhcm5pbmcgZnJvbSBcIi4uL191dGlsL3dhcm5pbmdcIlxuaW1wb3J0IHsgY29tcG9zZVJlZiB9IGZyb20gXCJyYy11dGlsL2xpYi9yZWZcIlxuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gXCIuL1Jlc2l6ZU9ic2VydmVyUG9seWZpbGxcIlxuXG5jb25zdCBzdXBwb3J0UmVmID0gbm9kZU9yQ29tcG9uZW50ID0+IHtcbiAgaWYgKFxuICAgIG5vZGVPckNvbXBvbmVudC50eXBlPy4kJHR5cGVvZiAmJlxuICAgIG5vZGVPckNvbXBvbmVudC50eXBlLiQkdHlwZW9mLnRvU3RyaW5nKCkuaW5jbHVkZXMoXCJmb3J3YXJkX3JlZlwiKVxuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIGNvbXBvbmVudCBub2RlXG4gIGlmIChcbiAgICBub2RlT3JDb21wb25lbnQudHlwZSAmJlxuICAgIG5vZGVPckNvbXBvbmVudC50eXBlLnByb3RvdHlwZSAmJlxuICAgICFub2RlT3JDb21wb25lbnQudHlwZS5wcm90b3R5cGUucmVuZGVyXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gQ2xhc3MgY29tcG9uZW50XG4gIGlmICh0eXBlb2Ygbm9kZU9yQ29tcG9uZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmludGVyZmFjZSBSZXNpemVPYnNlcnZlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgb25SZXNpemU/OiAoc2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9KSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBSZXNpemVPYnNlcnZlclN0YXRlIHtcbiAgaGVpZ2h0OiBudW1iZXJcbiAgd2lkdGg6IG51bWJlclxufVxuXG50eXBlIFJlZk5vZGUgPSBSZWFjdC5SZWFjdEluc3RhbmNlIHwgSFRNTEVsZW1lbnQgfCBudWxsXG5cbmNsYXNzIFJlYWN0UmVzaXplT2JzZXJ2ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFJlc2l6ZU9ic2VydmVyUHJvcHMsXG4gIFJlc2l6ZU9ic2VydmVyU3RhdGVcbj4ge1xuICBzdGF0aWMgZGlzcGxheU5hbWUgPSBcIlJlc2l6ZU9ic2VydmVyXCJcblxuICByZXNpemVPYnNlcnZlcjogUmVzaXplT2JzZXJ2ZXIgfCBudWxsID0gbnVsbFxuXG4gIGNoaWxkTm9kZTogUmVmTm9kZSA9IG51bGxcblxuICBjdXJyZW50RWxlbWVudDogRWxlbWVudCB8IG51bGwgPSBudWxsXG5cbiAgc3RhdGUgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbkNvbXBvbmVudFVwZGF0ZWQoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMub25Db21wb25lbnRVcGRhdGVkKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGVzdHJveU9ic2VydmVyKClcbiAgfVxuXG4gIG9uQ29tcG9uZW50VXBkYXRlZCgpIHtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzLnByb3BzXG5cbiAgICAvLyBVbnJlZ2lzdGVyIGlmIGRpc2FibGVkXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRlc3Ryb3lPYnNlcnZlcigpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZmluZERPTU5vZGUodGhpcy5jaGlsZE5vZGUgfHwgdGhpcykgYXMgRWxlbWVudFxuICAgIGNvbnN0IGVsZW1lbnRDaGFuZ2VkID0gZWxlbWVudCAhPT0gdGhpcy5jdXJyZW50RWxlbWVudFxuICAgIGlmIChlbGVtZW50Q2hhbmdlZCkge1xuICAgICAgdGhpcy5kZXN0cm95T2JzZXJ2ZXIoKVxuICAgICAgdGhpcy5jdXJyZW50RWxlbWVudCA9IGVsZW1lbnRcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucmVzaXplT2JzZXJ2ZXIgJiYgZWxlbWVudCkge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcih0aGlzLm9uUmVzaXplKVxuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgb25SZXNpemUgPSAoZW50cmllczogUmVzaXplT2JzZXJ2ZXJFbnRyeVtdKSA9PiB7XG4gICAgY29uc3QgeyBvblJlc2l6ZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgd2lkdGg6IHdpZHRoU3RhdGUsIGhlaWdodDogaGVpZ2h0U3RhdGUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlbnRyaWVzWzBdXG5cbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IFtmaXhlZFdpZHRoLCBmaXhlZEhlaWdodF0gPSBbTWF0aC5mbG9vcih3aWR0aCksIE1hdGguZmxvb3IoaGVpZ2h0KV1cblxuICAgIGlmICh3aWR0aFN0YXRlICE9PSBmaXhlZFdpZHRoIHx8IGhlaWdodFN0YXRlICE9PSBmaXhlZEhlaWdodCkge1xuICAgICAgY29uc3Qgc2l6ZSA9IHsgd2lkdGg6IGZpeGVkV2lkdGgsIGhlaWdodDogZml4ZWRIZWlnaHQgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHNpemUpXG5cbiAgICAgIGlmIChvblJlc2l6ZSkge1xuICAgICAgICBvblJlc2l6ZShzaXplKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldENoaWxkTm9kZSA9IChub2RlOiBSZWZOb2RlKSA9PiB7XG4gICAgdGhpcy5jaGlsZE5vZGUgPSBub2RlXG4gIH1cblxuICBkZXN0cm95T2JzZXJ2ZXIoKSB7XG4gICAgaWYgKHRoaXMucmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRvQXJyYXkoY2hpbGRyZW4pXG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgXCJSZXNpemVPYnNlcnZlclwiLFxuICAgICAgICBcIuacieWkmuS4qiBjaGlsZHJlbu+8jOWwhuWPquS8muWcqOesrOS4gOS4quWFg+e0oOS4iuebkeWQrFwiXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd2FybmluZyhmYWxzZSwgXCJSZXNpemVPYnNlcnZlclwiLCBcIuayoeaciSBjaGlsZHJlblwiKVxuXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbMF1cblxuICAgIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZE5vZGUpICYmIHN1cHBvcnRSZWYoY2hpbGROb2RlKSkge1xuICAgICAgY29uc3QgeyByZWYgfSA9IGNoaWxkTm9kZSBhcyBhbnlcblxuICAgICAgY2hpbGROb2Rlc1swXSA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZE5vZGUgYXMgYW55LCB7XG4gICAgICAgIHJlZjogY29tcG9zZVJlZihyZWYsIHRoaXMuc2V0Q2hpbGROb2RlKSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXMubGVuZ3RoID09PSAxXG4gICAgICA/IGNoaWxkTm9kZXNbMF1cbiAgICAgIDogY2hpbGROb2Rlcy5tYXAoKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIVJlYWN0LmlzVmFsaWRFbGVtZW50KG5vZGUpIHx8XG4gICAgICAgICAgICAoXCJrZXlcIiBpbiBub2RlICYmIG5vZGUua2V5ICE9PSBudWxsKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KG5vZGUsIHtcbiAgICAgICAgICAgIGtleTogYGFkdWktb2JzZXJ2ZXIta2V5LSR7aW5kZXh9YCxcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0UmVzaXplT2JzZXJ2ZXJcbiJdfQ==