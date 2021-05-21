function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import * as React from "react";
import findDOMNode from "rc-util/lib/Dom/findDOMNode";
import toArray from "rc-util/lib/Children/toArray";
import warning from "../_util/warning";
import { composeRef } from "rc-util/lib/ref";
import ResizeObserver from "./ResizeObserverPolyfill";

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

      var element = findDOMNode(this.childNode || this);
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
      var childNodes = toArray(children);

      if (childNodes.length > 1) {
        warning(false, "ResizeObserver", "有多个 children，将只会在第一个元素上监听");
      } else if (childNodes.length === 0) {
        warning(false, "ResizeObserver", "没有 children");
        return null;
      }

      var childNode = childNodes[0];

      if (React.isValidElement(childNode) && supportRef(childNode)) {
        var _ref2 = childNode,
            ref = _ref2.ref;
        childNodes[0] = React.cloneElement(childNode, {
          ref: composeRef(ref, this.setChildNode)
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
export default ReactResizeObserver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcmVzaXplLW9ic2VydmVyL1Jlc2l6ZU9ic2VydmVyLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsImZpbmRET01Ob2RlIiwidG9BcnJheSIsIndhcm5pbmciLCJjb21wb3NlUmVmIiwiUmVzaXplT2JzZXJ2ZXIiLCJzdXBwb3J0UmVmIiwibm9kZU9yQ29tcG9uZW50IiwidHlwZSIsIiQkdHlwZW9mIiwidG9TdHJpbmciLCJpbmNsdWRlcyIsInByb3RvdHlwZSIsInJlbmRlciIsIlJlYWN0UmVzaXplT2JzZXJ2ZXIiLCJyZXNpemVPYnNlcnZlciIsImNoaWxkTm9kZSIsImN1cnJlbnRFbGVtZW50Iiwic3RhdGUiLCJ3aWR0aCIsImhlaWdodCIsIm9uUmVzaXplIiwiZW50cmllcyIsInByb3BzIiwid2lkdGhTdGF0ZSIsImhlaWdodFN0YXRlIiwidGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiTWF0aCIsImZsb29yIiwiZml4ZWRXaWR0aCIsImZpeGVkSGVpZ2h0Iiwic2l6ZSIsInNldFN0YXRlIiwic2V0Q2hpbGROb2RlIiwibm9kZSIsIm9uQ29tcG9uZW50VXBkYXRlZCIsImRlc3Ryb3lPYnNlcnZlciIsImRpc2FibGVkIiwiZWxlbWVudCIsImVsZW1lbnRDaGFuZ2VkIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJjaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJpc1ZhbGlkRWxlbWVudCIsInJlZiIsImNsb25lRWxlbWVudCIsIm1hcCIsImluZGV4Iiwia2V5IiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEtBQUtBLEtBQVosTUFBdUIsT0FBdkI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLDZCQUF4QjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsOEJBQXBCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixrQkFBcEI7QUFDQSxTQUFTQyxV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WUFBWDtBQURvQyxTQUFyQyxDQUFoQjtBQUdEOztBQUVELGFBQU9VLFVBQVUsQ0FBQ0MsTUFBWCxLQUFzQixDQUF0QixHQUNIRCxVQUFVLENBQUMsQ0FBRCxDQURQLEdBRUhBLFVBQVUsQ0FBQ0ssR0FBWCxDQUFlLFVBQUNkLElBQUQsRUFBT2UsS0FBUCxFQUFpQjtBQUM5QixZQUNFLENBQUNsRCxLQUFLLENBQUM4QyxjQUFOLENBQXFCWCxJQUFyQixDQUFELElBQ0MsU0FBU0EsSUFBVCxJQUFpQkEsSUFBSSxDQUFDZ0IsR0FBTCxLQUFhLElBRmpDLEVBR0U7QUFDQSxpQkFBT2hCLElBQVA7QUFDRDs7QUFFRCxlQUFPbkMsS0FBSyxDQUFDZ0QsWUFBTixDQUFtQmIsSUFBbkIsRUFBeUI7QUFDOUJnQixVQUFBQSxHQUFHLDhCQUF1QkQsS0FBdkI7QUFEMkIsU0FBekIsQ0FBUDtBQUdELE9BWEQsQ0FGSjtBQWNEOzs7O0VBMUgrQmxELEtBQUssQ0FBQ29ELFM7O0FBQWxDdEMsbUIsQ0FJR3VDLFcsR0FBYyxnQjtBQXlIdkIsZUFBZXZDLG1CQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXNpemVPYnNlcnZlciDkvJrku6UgY2xhc3Mg57uE5Lu255qE5b2i5byP5a2Y5Zyo77yMXG4gKiDlm6DkuLrlhbbkvb/nlKggZmluZERvbU5vZGUodGhpcykg5a6e546wIGNoaWxkcmVuIOS4uiBmYyDml7bkuI3og73nu5kgcmVmIOeahOaDheWGtVxuICog5aaC5p6cIFJlc2l6ZU9ic2VydmVyIOS5n+aYryBmY++8jOWwseayoeacieWKnuazleWcqOS4jea3u+WKoOmineWklue7k+aehOeahOaDheWGteS4i+aLv+WIsCBkb20g5LqGXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBmaW5kRE9NTm9kZSBmcm9tIFwicmMtdXRpbC9saWIvRG9tL2ZpbmRET01Ob2RlXCJcbmltcG9ydCB0b0FycmF5IGZyb20gXCJyYy11dGlsL2xpYi9DaGlsZHJlbi90b0FycmF5XCJcbmltcG9ydCB3YXJuaW5nIGZyb20gXCIuLi9fdXRpbC93YXJuaW5nXCJcbmltcG9ydCB7IGNvbXBvc2VSZWYgfSBmcm9tIFwicmMtdXRpbC9saWIvcmVmXCJcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tIFwiLi9SZXNpemVPYnNlcnZlclBvbHlmaWxsXCJcblxuaW50ZXJmYWNlIFJlc2l6ZU9ic2VydmVyRW50cnkge1xuICByZWFkb25seSBib3JkZXJCb3hTaXplOiBSZXNpemVPYnNlcnZlckVudHJ5Qm94U2l6ZVxuICByZWFkb25seSBjb250ZW50Qm94U2l6ZTogUmVzaXplT2JzZXJ2ZXJFbnRyeUJveFNpemVcbiAgcmVhZG9ubHkgY29udGVudFJlY3Q6IERPTVJlY3RSZWFkT25seVxuICByZWFkb25seSB0YXJnZXQ6IEVsZW1lbnRcbn1cbmludGVyZmFjZSBSZXNpemVPYnNlcnZlckVudHJ5Qm94U2l6ZSB7XG4gIGJsb2NrU2l6ZTogbnVtYmVyXG4gIGlubGluZVNpemU6IG51bWJlclxufVxuXG5jb25zdCBzdXBwb3J0UmVmID0gKG5vZGVPckNvbXBvbmVudCkgPT4ge1xuICBpZiAoXG4gICAgbm9kZU9yQ29tcG9uZW50LnR5cGU/LiQkdHlwZW9mICYmXG4gICAgbm9kZU9yQ29tcG9uZW50LnR5cGUuJCR0eXBlb2YudG9TdHJpbmcoKS5pbmNsdWRlcyhcImZvcndhcmRfcmVmXCIpXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gRnVuY3Rpb24gY29tcG9uZW50IG5vZGVcbiAgaWYgKFxuICAgIG5vZGVPckNvbXBvbmVudC50eXBlICYmXG4gICAgbm9kZU9yQ29tcG9uZW50LnR5cGUucHJvdG90eXBlICYmXG4gICAgIW5vZGVPckNvbXBvbmVudC50eXBlLnByb3RvdHlwZS5yZW5kZXJcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBDbGFzcyBjb21wb25lbnRcbiAgaWYgKHR5cGVvZiBub2RlT3JDb21wb25lbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuaW50ZXJmYWNlIFJlc2l6ZU9ic2VydmVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBvblJlc2l6ZT86IChzaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIFJlc2l6ZU9ic2VydmVyU3RhdGUge1xuICBoZWlnaHQ6IG51bWJlclxuICB3aWR0aDogbnVtYmVyXG59XG5cbnR5cGUgUmVmTm9kZSA9IFJlYWN0LlJlYWN0SW5zdGFuY2UgfCBIVE1MRWxlbWVudCB8IG51bGxcblxuY2xhc3MgUmVhY3RSZXNpemVPYnNlcnZlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUmVzaXplT2JzZXJ2ZXJQcm9wcyxcbiAgUmVzaXplT2JzZXJ2ZXJTdGF0ZVxuPiB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9IFwiUmVzaXplT2JzZXJ2ZXJcIlxuXG4gIHJlc2l6ZU9ic2VydmVyOiBSZXNpemVPYnNlcnZlciB8IG51bGwgPSBudWxsXG5cbiAgY2hpbGROb2RlOiBSZWZOb2RlID0gbnVsbFxuXG4gIGN1cnJlbnRFbGVtZW50OiBFbGVtZW50IHwgbnVsbCA9IG51bGxcblxuICBzdGF0ZSA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQ29tcG9uZW50VXBkYXRlZCgpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5vbkNvbXBvbmVudFVwZGF0ZWQoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kZXN0cm95T2JzZXJ2ZXIoKVxuICB9XG5cbiAgb25Db21wb25lbnRVcGRhdGVkKCkge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHNcblxuICAgIC8vIFVucmVnaXN0ZXIgaWYgZGlzYWJsZWRcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGVzdHJveU9ic2VydmVyKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSBmaW5kRE9NTm9kZSh0aGlzLmNoaWxkTm9kZSB8fCB0aGlzKSBhcyBFbGVtZW50XG4gICAgY29uc3QgZWxlbWVudENoYW5nZWQgPSBlbGVtZW50ICE9PSB0aGlzLmN1cnJlbnRFbGVtZW50XG4gICAgaWYgKGVsZW1lbnRDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmRlc3Ryb3lPYnNlcnZlcigpXG4gICAgICB0aGlzLmN1cnJlbnRFbGVtZW50ID0gZWxlbWVudFxuICAgIH1cblxuICAgIGlmICghdGhpcy5yZXNpemVPYnNlcnZlciAmJiBlbGVtZW50KSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKHRoaXMub25SZXNpemUpXG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSA9IChlbnRyaWVzOiBSZXNpemVPYnNlcnZlckVudHJ5W10pID0+IHtcbiAgICBjb25zdCB7IG9uUmVzaXplIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB3aWR0aDogd2lkdGhTdGF0ZSwgaGVpZ2h0OiBoZWlnaHRTdGF0ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGVudHJpZXNbMF1cblxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgW2ZpeGVkV2lkdGgsIGZpeGVkSGVpZ2h0XSA9IFtNYXRoLmZsb29yKHdpZHRoKSwgTWF0aC5mbG9vcihoZWlnaHQpXVxuXG4gICAgaWYgKHdpZHRoU3RhdGUgIT09IGZpeGVkV2lkdGggfHwgaGVpZ2h0U3RhdGUgIT09IGZpeGVkSGVpZ2h0KSB7XG4gICAgICBjb25zdCBzaXplID0geyB3aWR0aDogZml4ZWRXaWR0aCwgaGVpZ2h0OiBmaXhlZEhlaWdodCB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoc2l6ZSlcblxuICAgICAgaWYgKG9uUmVzaXplKSB7XG4gICAgICAgIG9uUmVzaXplKHNpemUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0Q2hpbGROb2RlID0gKG5vZGU6IFJlZk5vZGUpID0+IHtcbiAgICB0aGlzLmNoaWxkTm9kZSA9IG5vZGVcbiAgfVxuXG4gIGRlc3Ryb3lPYnNlcnZlcigpIHtcbiAgICBpZiAodGhpcy5yZXNpemVPYnNlcnZlcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdG9BcnJheShjaGlsZHJlbilcblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBcIlJlc2l6ZU9ic2VydmVyXCIsXG4gICAgICAgIFwi5pyJ5aSa5LiqIGNoaWxkcmVu77yM5bCG5Y+q5Lya5Zyo56ys5LiA5Liq5YWD57Sg5LiK55uR5ZCsXCJcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3YXJuaW5nKGZhbHNlLCBcIlJlc2l6ZU9ic2VydmVyXCIsIFwi5rKh5pyJIGNoaWxkcmVuXCIpXG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROb2RlID0gY2hpbGROb2Rlc1swXVxuXG4gICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkTm9kZSkgJiYgc3VwcG9ydFJlZihjaGlsZE5vZGUpKSB7XG4gICAgICBjb25zdCB7IHJlZiB9ID0gY2hpbGROb2RlIGFzIGFueVxuXG4gICAgICBjaGlsZE5vZGVzWzBdID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkTm9kZSBhcyBhbnksIHtcbiAgICAgICAgcmVmOiBjb21wb3NlUmVmKHJlZiwgdGhpcy5zZXRDaGlsZE5vZGUpLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlcy5sZW5ndGggPT09IDFcbiAgICAgID8gY2hpbGROb2Rlc1swXVxuICAgICAgOiBjaGlsZE5vZGVzLm1hcCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhUmVhY3QuaXNWYWxpZEVsZW1lbnQobm9kZSkgfHxcbiAgICAgICAgICAgIChcImtleVwiIGluIG5vZGUgJiYgbm9kZS5rZXkgIT09IG51bGwpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQobm9kZSwge1xuICAgICAgICAgICAga2V5OiBgYWR1aS1vYnNlcnZlci1rZXktJHtpbmRleH1gLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RSZXNpemVPYnNlcnZlclxuIl19