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
        this.resizeObserver = new ResizeObserver(this.onResize);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcmVzaXplLW9ic2VydmVyL1Jlc2l6ZU9ic2VydmVyLnRzeCJdLCJuYW1lcyI6WyJzdXBwb3J0UmVmIiwibm9kZU9yQ29tcG9uZW50IiwidHlwZSIsIiQkdHlwZW9mIiwidG9TdHJpbmciLCJpbmNsdWRlcyIsInByb3RvdHlwZSIsInJlbmRlciIsIlJlYWN0UmVzaXplT2JzZXJ2ZXIiLCJyZXNpemVPYnNlcnZlciIsImNoaWxkTm9kZSIsImN1cnJlbnRFbGVtZW50Iiwic3RhdGUiLCJ3aWR0aCIsImhlaWdodCIsIm9uUmVzaXplIiwiZW50cmllcyIsInByb3BzIiwid2lkdGhTdGF0ZSIsImhlaWdodFN0YXRlIiwidGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiTWF0aCIsImZsb29yIiwiZml4ZWRXaWR0aCIsImZpeGVkSGVpZ2h0Iiwic2l6ZSIsInNldFN0YXRlIiwic2V0Q2hpbGROb2RlIiwibm9kZSIsIm9uQ29tcG9uZW50VXBkYXRlZCIsImRlc3Ryb3lPYnNlcnZlciIsImRpc2FibGVkIiwiZWxlbWVudCIsImVsZW1lbnRDaGFuZ2VkIiwiUmVzaXplT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImNoaWxkcmVuIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsIlJlYWN0IiwiaXNWYWxpZEVsZW1lbnQiLCJyZWYiLCJjbG9uZUVsZW1lbnQiLCJtYXAiLCJpbmRleCIsImtleSIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLGVBQUQsRUFBcUI7QUFBQTs7QUFDdEMsTUFDRSx5QkFBQUEsZUFBZSxDQUFDQyxJQUFoQix3RUFBc0JDLFFBQXRCLElBQ0FGLGVBQWUsQ0FBQ0MsSUFBaEIsQ0FBcUJDLFFB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R0FBTCxLQUFhLElBRmpDLEVBR0U7QUFDQSxpQkFBT2xCLElBQVA7QUFDRDs7QUFFRCxlQUFPWSxLQUFLLENBQUNHLFlBQU4sQ0FBbUJmLElBQW5CLEVBQXlCO0FBQzlCa0IsVUFBQUEsR0FBRyw4QkFBdUJELEtBQXZCO0FBRDJCLFNBQXpCLENBQVA7QUFHRCxPQVhELENBRko7QUFjRDs7OztFQTFIK0JMLEtBQUssQ0FBQ08sUzs7QUFBbEN4QyxtQixDQUlHeUMsVyxHQUFjLGdCO2VBeUhSekMsbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlc2l6ZU9ic2VydmVyIOS8muS7pSBjbGFzcyDnu4Tku7bnmoTlvaLlvI/lrZjlnKjvvIxcbiAqIOWboOS4uuWFtuS9v+eUqCBmaW5kRG9tTm9kZSh0aGlzKSDlrp7njrAgY2hpbGRyZW4g5Li6IGZjIOaXtuS4jeiDvee7mSByZWYg55qE5oOF5Ya1XG4gKiDlpoLmnpwgUmVzaXplT2JzZXJ2ZXIg5Lmf5pivIGZj77yM5bCx5rKh5pyJ5Yqe5rOV5Zyo5LiN5re75Yqg6aKd5aSW57uT5p6E55qE5oOF5Ya15LiL5ou/5YiwIGRvbSDkuoZcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGZpbmRET01Ob2RlIGZyb20gXCJyYy11dGlsL2xpYi9Eb20vZmluZERPTU5vZGVcIlxuaW1wb3J0IHRvQXJyYXkgZnJvbSBcInJjLXV0aWwvbGliL0NoaWxkcmVuL3RvQXJyYXlcIlxuaW1wb3J0IHdhcm5pbmcgZnJvbSBcIi4uL191dGlsL3dhcm5pbmdcIlxuaW1wb3J0IHsgY29tcG9zZVJlZiB9IGZyb20gXCJyYy11dGlsL2xpYi9yZWZcIlxuXG5pbnRlcmZhY2UgUmVzaXplT2JzZXJ2ZXJFbnRyeSB7XG4gIHJlYWRvbmx5IGJvcmRlckJveFNpemU6IFJlc2l6ZU9ic2VydmVyRW50cnlCb3hTaXplXG4gIHJlYWRvbmx5IGNvbnRlbnRCb3hTaXplOiBSZXNpemVPYnNlcnZlckVudHJ5Qm94U2l6ZVxuICByZWFkb25seSBjb250ZW50UmVjdDogRE9NUmVjdFJlYWRPbmx5XG4gIHJlYWRvbmx5IHRhcmdldDogRWxlbWVudFxufVxuaW50ZXJmYWNlIFJlc2l6ZU9ic2VydmVyRW50cnlCb3hTaXplIHtcbiAgYmxvY2tTaXplOiBudW1iZXJcbiAgaW5saW5lU2l6ZTogbnVtYmVyXG59XG5cbmNvbnN0IHN1cHBvcnRSZWYgPSAobm9kZU9yQ29tcG9uZW50KSA9PiB7XG4gIGlmIChcbiAgICBub2RlT3JDb21wb25lbnQudHlwZT8uJCR0eXBlb2YgJiZcbiAgICBub2RlT3JDb21wb25lbnQudHlwZS4kJHR5cGVvZi50b1N0cmluZygpLmluY2x1ZGVzKFwiZm9yd2FyZF9yZWZcIilcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBGdW5jdGlvbiBjb21wb25lbnQgbm9kZVxuICBpZiAoXG4gICAgbm9kZU9yQ29tcG9uZW50LnR5cGUgJiZcbiAgICBub2RlT3JDb21wb25lbnQudHlwZS5wcm90b3R5cGUgJiZcbiAgICAhbm9kZU9yQ29tcG9uZW50LnR5cGUucHJvdG90eXBlLnJlbmRlclxuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIENsYXNzIGNvbXBvbmVudFxuICBpZiAodHlwZW9mIG5vZGVPckNvbXBvbmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG5pbnRlcmZhY2UgUmVzaXplT2JzZXJ2ZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIG9uUmVzaXplPzogKHNpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSkgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgUmVzaXplT2JzZXJ2ZXJTdGF0ZSB7XG4gIGhlaWdodDogbnVtYmVyXG4gIHdpZHRoOiBudW1iZXJcbn1cblxudHlwZSBSZWZOb2RlID0gUmVhY3QuUmVhY3RJbnN0YW5jZSB8IEhUTUxFbGVtZW50IHwgbnVsbFxuXG5jbGFzcyBSZWFjdFJlc2l6ZU9ic2VydmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBSZXNpemVPYnNlcnZlclByb3BzLFxuICBSZXNpemVPYnNlcnZlclN0YXRlXG4+IHtcbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gXCJSZXNpemVPYnNlcnZlclwiXG5cbiAgcmVzaXplT2JzZXJ2ZXI6IFJlc2l6ZU9ic2VydmVyIHwgbnVsbCA9IG51bGxcblxuICBjaGlsZE5vZGU6IFJlZk5vZGUgPSBudWxsXG5cbiAgY3VycmVudEVsZW1lbnQ6IEVsZW1lbnQgfCBudWxsID0gbnVsbFxuXG4gIHN0YXRlID0ge1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMub25Db21wb25lbnRVcGRhdGVkKClcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLm9uQ29tcG9uZW50VXBkYXRlZCgpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRlc3Ryb3lPYnNlcnZlcigpXG4gIH1cblxuICBvbkNvbXBvbmVudFVwZGF0ZWQoKSB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgLy8gVW5yZWdpc3RlciBpZiBkaXNhYmxlZFxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5kZXN0cm95T2JzZXJ2ZXIoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IGZpbmRET01Ob2RlKHRoaXMuY2hpbGROb2RlIHx8IHRoaXMpIGFzIEVsZW1lbnRcbiAgICBjb25zdCBlbGVtZW50Q2hhbmdlZCA9IGVsZW1lbnQgIT09IHRoaXMuY3VycmVudEVsZW1lbnRcbiAgICBpZiAoZWxlbWVudENoYW5nZWQpIHtcbiAgICAgIHRoaXMuZGVzdHJveU9ic2VydmVyKClcbiAgICAgIHRoaXMuY3VycmVudEVsZW1lbnQgPSBlbGVtZW50XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnJlc2l6ZU9ic2VydmVyICYmIGVsZW1lbnQpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIodGhpcy5vblJlc2l6ZSlcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIG9uUmVzaXplID0gKGVudHJpZXM6IFJlc2l6ZU9ic2VydmVyRW50cnlbXSkgPT4ge1xuICAgIGNvbnN0IHsgb25SZXNpemUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHdpZHRoOiB3aWR0aFN0YXRlLCBoZWlnaHQ6IGhlaWdodFN0YXRlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZW50cmllc1swXVxuXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBbZml4ZWRXaWR0aCwgZml4ZWRIZWlnaHRdID0gW01hdGguZmxvb3Iod2lkdGgpLCBNYXRoLmZsb29yKGhlaWdodCldXG5cbiAgICBpZiAod2lkdGhTdGF0ZSAhPT0gZml4ZWRXaWR0aCB8fCBoZWlnaHRTdGF0ZSAhPT0gZml4ZWRIZWlnaHQpIHtcbiAgICAgIGNvbnN0IHNpemUgPSB7IHdpZHRoOiBmaXhlZFdpZHRoLCBoZWlnaHQ6IGZpeGVkSGVpZ2h0IH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShzaXplKVxuXG4gICAgICBpZiAob25SZXNpemUpIHtcbiAgICAgICAgb25SZXNpemUoc2l6ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRDaGlsZE5vZGUgPSAobm9kZTogUmVmTm9kZSkgPT4ge1xuICAgIHRoaXMuY2hpbGROb2RlID0gbm9kZVxuICB9XG5cbiAgZGVzdHJveU9ic2VydmVyKCkge1xuICAgIGlmICh0aGlzLnJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG51bGxcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0b0FycmF5KGNoaWxkcmVuKVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIFwiUmVzaXplT2JzZXJ2ZXJcIixcbiAgICAgICAgXCLmnInlpJrkuKogY2hpbGRyZW7vvIzlsIblj6rkvJrlnKjnrKzkuIDkuKrlhYPntKDkuIrnm5HlkKxcIlxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHdhcm5pbmcoZmFsc2UsIFwiUmVzaXplT2JzZXJ2ZXJcIiwgXCLmsqHmnIkgY2hpbGRyZW5cIilcblxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzWzBdXG5cbiAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGROb2RlKSAmJiBzdXBwb3J0UmVmKGNoaWxkTm9kZSkpIHtcbiAgICAgIGNvbnN0IHsgcmVmIH0gPSBjaGlsZE5vZGUgYXMgYW55XG5cbiAgICAgIGNoaWxkTm9kZXNbMF0gPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGROb2RlIGFzIGFueSwge1xuICAgICAgICByZWY6IGNvbXBvc2VSZWYocmVmLCB0aGlzLnNldENoaWxkTm9kZSksXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzLmxlbmd0aCA9PT0gMVxuICAgICAgPyBjaGlsZE5vZGVzWzBdXG4gICAgICA6IGNoaWxkTm9kZXMubWFwKChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFSZWFjdC5pc1ZhbGlkRWxlbWVudChub2RlKSB8fFxuICAgICAgICAgICAgKFwia2V5XCIgaW4gbm9kZSAmJiBub2RlLmtleSAhPT0gbnVsbClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChub2RlLCB7XG4gICAgICAgICAgICBrZXk6IGBhZHVpLW9ic2VydmVyLWtleS0ke2luZGV4fWAsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdFJlc2l6ZU9ic2VydmVyXG4iXX0=