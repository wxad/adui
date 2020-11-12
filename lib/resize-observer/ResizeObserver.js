"use strict";

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

var supportRef = function supportRef(nodeOrComponent) {
  var _nodeOrComponent$type;

  if (((_nodeOrComponent$type = nodeOrComponent.type) === null || _nodeOrComponent$type === void 0 ? void 0 : _nodeOrComponent$type.$$typeof) && nodeOrComponent.type.$$typeof.toString().includes("forward_ref")) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcmVzaXplLW9ic2VydmVyL1Jlc2l6ZU9ic2VydmVyLnRzeCJdLCJuYW1lcyI6WyJzdXBwb3J0UmVmIiwibm9kZU9yQ29tcG9uZW50IiwidHlwZSIsIiQkdHlwZW9mIiwidG9TdHJpbmciLCJpbmNsdWRlcyIsInByb3RvdHlwZSIsInJlbmRlciIsIlJlYWN0UmVzaXplT2JzZXJ2ZXIiLCJyZXNpemVPYnNlcnZlciIsImNoaWxkTm9kZSIsImN1cnJlbnRFbGVtZW50Iiwic3RhdGUiLCJ3aWR0aCIsImhlaWdodCIsIm9uUmVzaXplIiwiZW50cmllcyIsInByb3BzIiwid2lkdGhTdGF0ZSIsImhlaWdodFN0YXRlIiwidGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiTWF0aCIsImZsb29yIiwiZml4ZWRXaWR0aCIsImZpeGVkSGVpZ2h0Iiwic2l6ZSIsInNldFN0YXRlIiwic2V0Q2hpbGROb2RlIiwibm9kZSIsIm9uQ29tcG9uZW50VXBkYXRlZCIsImRlc3Ryb3lPYnNlcnZlciIsImRpc2FibGVkIiwiZWxlbWVudCIsImVsZW1lbnRDaGFuZ2VkIiwiUmVzaXplT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImNoaWxkcmVuIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsIlJlYWN0IiwiaXNWYWxpZEVsZW1lbnQiLCJyZWYiLCJjbG9uZUVsZW1lbnQiLCJtYXAiLCJpbmRleCIsImtleSIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsZUFBZSxFQUFJO0FBQUE7O0FBQ3BDLE1BQ0UsMEJBQUFBLGVBQWUsQ0FBQ0MsSUFBaEIsZ0ZBQXNCQyxRQUF0QixL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QyxTQUFTQSxJQUFULElBQWlCQSxJQUFJLENBQUNrQixHQUFMLEtBQWEsSUFGakMsRUFHRTtBQUNBLGlCQUFPbEIsSUFBUDtBQUNEOztBQUVELGVBQU9ZLEtBQUssQ0FBQ0csWUFBTixDQUFtQmYsSUFBbkIsRUFBeUI7QUFDOUJrQixVQUFBQSxHQUFHLDhCQUF1QkQsS0FBdkI7QUFEMkIsU0FBekIsQ0FBUDtBQUdELE9BWEQsQ0FGSjtBQWNEOzs7O0VBMUgrQkwsS0FBSyxDQUFDTyxTOztBQUFsQ3hDLG1CLENBSUd5QyxXLEdBQWMsZ0I7ZUF5SFJ6QyxtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVzaXplT2JzZXJ2ZXIg5Lya5LulIGNsYXNzIOe7hOS7tueahOW9ouW8j+WtmOWcqO+8jFxuICog5Zug5Li65YW25L2/55SoIGZpbmREb21Ob2RlKHRoaXMpIOWunueOsCBjaGlsZHJlbiDkuLogZmMg5pe25LiN6IO957uZIHJlZiDnmoTmg4XlhrVcbiAqIOWmguaenCBSZXNpemVPYnNlcnZlciDkuZ/mmK8gZmPvvIzlsLHmsqHmnInlip7ms5XlnKjkuI3mt7vliqDpop3lpJbnu5PmnoTnmoTmg4XlhrXkuIvmi7/liLAgZG9tIOS6hlxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgZmluZERPTU5vZGUgZnJvbSBcInJjLXV0aWwvbGliL0RvbS9maW5kRE9NTm9kZVwiXG5pbXBvcnQgdG9BcnJheSBmcm9tIFwicmMtdXRpbC9saWIvQ2hpbGRyZW4vdG9BcnJheVwiXG5pbXBvcnQgd2FybmluZyBmcm9tIFwiLi4vX3V0aWwvd2FybmluZ1wiXG5pbXBvcnQgeyBjb21wb3NlUmVmIH0gZnJvbSBcInJjLXV0aWwvbGliL3JlZlwiXG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSBcIi4vUmVzaXplT2JzZXJ2ZXJQb2x5ZmlsbFwiXG5cbmNvbnN0IHN1cHBvcnRSZWYgPSBub2RlT3JDb21wb25lbnQgPT4ge1xuICBpZiAoXG4gICAgbm9kZU9yQ29tcG9uZW50LnR5cGU/LiQkdHlwZW9mICYmXG4gICAgbm9kZU9yQ29tcG9uZW50LnR5cGUuJCR0eXBlb2YudG9TdHJpbmcoKS5pbmNsdWRlcyhcImZvcndhcmRfcmVmXCIpXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gRnVuY3Rpb24gY29tcG9uZW50IG5vZGVcbiAgaWYgKFxuICAgIG5vZGVPckNvbXBvbmVudC50eXBlICYmXG4gICAgbm9kZU9yQ29tcG9uZW50LnR5cGUucHJvdG90eXBlICYmXG4gICAgIW5vZGVPckNvbXBvbmVudC50eXBlLnByb3RvdHlwZS5yZW5kZXJcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBDbGFzcyBjb21wb25lbnRcbiAgaWYgKHR5cGVvZiBub2RlT3JDb21wb25lbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuaW50ZXJmYWNlIFJlc2l6ZU9ic2VydmVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBvblJlc2l6ZT86IChzaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIFJlc2l6ZU9ic2VydmVyU3RhdGUge1xuICBoZWlnaHQ6IG51bWJlclxuICB3aWR0aDogbnVtYmVyXG59XG5cbnR5cGUgUmVmTm9kZSA9IFJlYWN0LlJlYWN0SW5zdGFuY2UgfCBIVE1MRWxlbWVudCB8IG51bGxcblxuY2xhc3MgUmVhY3RSZXNpemVPYnNlcnZlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUmVzaXplT2JzZXJ2ZXJQcm9wcyxcbiAgUmVzaXplT2JzZXJ2ZXJTdGF0ZVxuPiB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9IFwiUmVzaXplT2JzZXJ2ZXJcIlxuXG4gIHJlc2l6ZU9ic2VydmVyOiBSZXNpemVPYnNlcnZlciB8IG51bGwgPSBudWxsXG5cbiAgY2hpbGROb2RlOiBSZWZOb2RlID0gbnVsbFxuXG4gIGN1cnJlbnRFbGVtZW50OiBFbGVtZW50IHwgbnVsbCA9IG51bGxcblxuICBzdGF0ZSA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQ29tcG9uZW50VXBkYXRlZCgpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5vbkNvbXBvbmVudFVwZGF0ZWQoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kZXN0cm95T2JzZXJ2ZXIoKVxuICB9XG5cbiAgb25Db21wb25lbnRVcGRhdGVkKCkge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHNcblxuICAgIC8vIFVucmVnaXN0ZXIgaWYgZGlzYWJsZWRcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGVzdHJveU9ic2VydmVyKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSBmaW5kRE9NTm9kZSh0aGlzLmNoaWxkTm9kZSB8fCB0aGlzKSBhcyBFbGVtZW50XG4gICAgY29uc3QgZWxlbWVudENoYW5nZWQgPSBlbGVtZW50ICE9PSB0aGlzLmN1cnJlbnRFbGVtZW50XG4gICAgaWYgKGVsZW1lbnRDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmRlc3Ryb3lPYnNlcnZlcigpXG4gICAgICB0aGlzLmN1cnJlbnRFbGVtZW50ID0gZWxlbWVudFxuICAgIH1cblxuICAgIGlmICghdGhpcy5yZXNpemVPYnNlcnZlciAmJiBlbGVtZW50KSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKHRoaXMub25SZXNpemUpXG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSA9IChlbnRyaWVzOiBSZXNpemVPYnNlcnZlckVudHJ5W10pID0+IHtcbiAgICBjb25zdCB7IG9uUmVzaXplIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB3aWR0aDogd2lkdGhTdGF0ZSwgaGVpZ2h0OiBoZWlnaHRTdGF0ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGVudHJpZXNbMF1cblxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgW2ZpeGVkV2lkdGgsIGZpeGVkSGVpZ2h0XSA9IFtNYXRoLmZsb29yKHdpZHRoKSwgTWF0aC5mbG9vcihoZWlnaHQpXVxuXG4gICAgaWYgKHdpZHRoU3RhdGUgIT09IGZpeGVkV2lkdGggfHwgaGVpZ2h0U3RhdGUgIT09IGZpeGVkSGVpZ2h0KSB7XG4gICAgICBjb25zdCBzaXplID0geyB3aWR0aDogZml4ZWRXaWR0aCwgaGVpZ2h0OiBmaXhlZEhlaWdodCB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoc2l6ZSlcblxuICAgICAgaWYgKG9uUmVzaXplKSB7XG4gICAgICAgIG9uUmVzaXplKHNpemUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0Q2hpbGROb2RlID0gKG5vZGU6IFJlZk5vZGUpID0+IHtcbiAgICB0aGlzLmNoaWxkTm9kZSA9IG5vZGVcbiAgfVxuXG4gIGRlc3Ryb3lPYnNlcnZlcigpIHtcbiAgICBpZiAodGhpcy5yZXNpemVPYnNlcnZlcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdG9BcnJheShjaGlsZHJlbilcblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBcIlJlc2l6ZU9ic2VydmVyXCIsXG4gICAgICAgIFwi5pyJ5aSa5LiqIGNoaWxkcmVu77yM5bCG5Y+q5Lya5Zyo56ys5LiA5Liq5YWD57Sg5LiK55uR5ZCsXCJcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3YXJuaW5nKGZhbHNlLCBcIlJlc2l6ZU9ic2VydmVyXCIsIFwi5rKh5pyJIGNoaWxkcmVuXCIpXG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROb2RlID0gY2hpbGROb2Rlc1swXVxuXG4gICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkTm9kZSkgJiYgc3VwcG9ydFJlZihjaGlsZE5vZGUpKSB7XG4gICAgICBjb25zdCB7IHJlZiB9ID0gY2hpbGROb2RlIGFzIGFueVxuXG4gICAgICBjaGlsZE5vZGVzWzBdID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkTm9kZSBhcyBhbnksIHtcbiAgICAgICAgcmVmOiBjb21wb3NlUmVmKHJlZiwgdGhpcy5zZXRDaGlsZE5vZGUpLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlcy5sZW5ndGggPT09IDFcbiAgICAgID8gY2hpbGROb2Rlc1swXVxuICAgICAgOiBjaGlsZE5vZGVzLm1hcCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhUmVhY3QuaXNWYWxpZEVsZW1lbnQobm9kZSkgfHxcbiAgICAgICAgICAgIChcImtleVwiIGluIG5vZGUgJiYgbm9kZS5rZXkgIT09IG51bGwpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQobm9kZSwge1xuICAgICAgICAgICAga2V5OiBgYWR1aS1vYnNlcnZlci1rZXktJHtpbmRleH1gLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RSZXNpemVPYnNlcnZlclxuIl19