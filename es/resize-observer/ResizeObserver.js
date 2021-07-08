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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcmVzaXplLW9ic2VydmVyL1Jlc2l6ZU9ic2VydmVyLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsImZpbmRET01Ob2RlIiwidG9BcnJheSIsIndhcm5pbmciLCJjb21wb3NlUmVmIiwic3VwcG9ydFJlZiIsIm5vZGVPckNvbXBvbmVudCIsInR5cGUiLCIkJHR5cGVvZiIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJwcm90b3R5cGUiLCJyZW5kZXIiLCJSZWFjdFJlc2l6ZU9ic2VydmVyIiwicmVzaXplT2JzZXJ2ZXIiLCJjaGlsZE5vZGUiLCJjdXJyZW50RWxlbWVudCIsInN0YXRlIiwid2lkdGgiLCJoZWlnaHQiLCJvblJlc2l6ZSIsImVudHJpZXMiLCJwcm9wcyIsIndpZHRoU3RhdGUiLCJoZWlnaHRTdGF0ZSIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIk1hdGgiLCJmbG9vciIsImZpeGVkV2lkdGgiLCJmaXhlZEhlaWdodCIsInNpemUiLCJzZXRTdGF0ZSIsInNldENoaWxkTm9kZSIsIm5vZGUiLCJvbkNvbXBvbmVudFVwZGF0ZWQiLCJkZXN0cm95T2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImVsZW1lbnQiLCJlbGVtZW50Q2hhbmdlZCIsIlJlc2l6ZU9ic2VydmVyIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJjaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJpc1ZhbGlkRWxlbWVudCIsInJlZiIsImNsb25lRWxlbWVudCIsIm1hcCIsImluZGV4Iiwia2V5IiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEtBQUtBLEtBQVosTUFBdUIsT0FBdkI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLDZCQUF4QjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsOEJBQXBCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixrQkFBcEI7QUFDQSxTQUFTQyxV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O0FBRUQsYUFBT1csVUFBVSxDQUFDQyxNQUFYLEtBQXNCLENBQXRCLEdBQ0hELFVBQVUsQ0FBQyxDQUFELENBRFAsR0FFSEEsVUFBVSxDQUFDSyxHQUFYLENBQWUsVUFBQ2YsSUFBRCxFQUFPZ0IsS0FBUCxFQUFpQjtBQUM5QixZQUNFLENBQUNsRCxLQUFLLENBQUM4QyxjQUFOLENBQXFCWixJQUFyQixDQUFELElBQ0MsU0FBU0EsSUFBVCxJQUFpQkEsSUFBSSxDQUFDaUIsR0FBTCxLQUFhLElBRmpDLEVBR0U7QUFDQSxpQkFBT2pCLElBQVA7QUFDRDs7QUFFRCxlQUFPbEMsS0FBSyxDQUFDZ0QsWUFBTixDQUFtQmQsSUFBbkIsRUFBeUI7QUFDOUJpQixVQUFBQSxHQUFHLDhCQUF1QkQsS0FBdkI7QUFEMkIsU0FBekIsQ0FBUDtBQUdELE9BWEQsQ0FGSjtBQWNEOzs7O0VBMUgrQmxELEtBQUssQ0FBQ29ELFM7O0FBQWxDdkMsbUIsQ0FJR3dDLFcsR0FBYyxnQjtBQXlIdkIsZUFBZXhDLG1CQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXNpemVPYnNlcnZlciDkvJrku6UgY2xhc3Mg57uE5Lu255qE5b2i5byP5a2Y5Zyo77yMXG4gKiDlm6DkuLrlhbbkvb/nlKggZmluZERvbU5vZGUodGhpcykg5a6e546wIGNoaWxkcmVuIOS4uiBmYyDml7bkuI3og73nu5kgcmVmIOeahOaDheWGtVxuICog5aaC5p6cIFJlc2l6ZU9ic2VydmVyIOS5n+aYryBmY++8jOWwseayoeacieWKnuazleWcqOS4jea3u+WKoOmineWklue7k+aehOeahOaDheWGteS4i+aLv+WIsCBkb20g5LqGXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBmaW5kRE9NTm9kZSBmcm9tIFwicmMtdXRpbC9saWIvRG9tL2ZpbmRET01Ob2RlXCJcbmltcG9ydCB0b0FycmF5IGZyb20gXCJyYy11dGlsL2xpYi9DaGlsZHJlbi90b0FycmF5XCJcbmltcG9ydCB3YXJuaW5nIGZyb20gXCIuLi9fdXRpbC93YXJuaW5nXCJcbmltcG9ydCB7IGNvbXBvc2VSZWYgfSBmcm9tIFwicmMtdXRpbC9saWIvcmVmXCJcblxuaW50ZXJmYWNlIFJlc2l6ZU9ic2VydmVyRW50cnkge1xuICByZWFkb25seSBib3JkZXJCb3hTaXplOiBSZXNpemVPYnNlcnZlckVudHJ5Qm94U2l6ZVxuICByZWFkb25seSBjb250ZW50Qm94U2l6ZTogUmVzaXplT2JzZXJ2ZXJFbnRyeUJveFNpemVcbiAgcmVhZG9ubHkgY29udGVudFJlY3Q6IERPTVJlY3RSZWFkT25seVxuICByZWFkb25seSB0YXJnZXQ6IEVsZW1lbnRcbn1cbmludGVyZmFjZSBSZXNpemVPYnNlcnZlckVudHJ5Qm94U2l6ZSB7XG4gIGJsb2NrU2l6ZTogbnVtYmVyXG4gIGlubGluZVNpemU6IG51bWJlclxufVxuXG5jb25zdCBzdXBwb3J0UmVmID0gKG5vZGVPckNvbXBvbmVudCkgPT4ge1xuICBpZiAoXG4gICAgbm9kZU9yQ29tcG9uZW50LnR5cGU/LiQkdHlwZW9mICYmXG4gICAgbm9kZU9yQ29tcG9uZW50LnR5cGUuJCR0eXBlb2YudG9TdHJpbmcoKS5pbmNsdWRlcyhcImZvcndhcmRfcmVmXCIpXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gRnVuY3Rpb24gY29tcG9uZW50IG5vZGVcbiAgaWYgKFxuICAgIG5vZGVPckNvbXBvbmVudC50eXBlICYmXG4gICAgbm9kZU9yQ29tcG9uZW50LnR5cGUucHJvdG90eXBlICYmXG4gICAgIW5vZGVPckNvbXBvbmVudC50eXBlLnByb3RvdHlwZS5yZW5kZXJcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBDbGFzcyBjb21wb25lbnRcbiAgaWYgKHR5cGVvZiBub2RlT3JDb21wb25lbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuaW50ZXJmYWNlIFJlc2l6ZU9ic2VydmVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBvblJlc2l6ZT86IChzaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIFJlc2l6ZU9ic2VydmVyU3RhdGUge1xuICBoZWlnaHQ6IG51bWJlclxuICB3aWR0aDogbnVtYmVyXG59XG5cbnR5cGUgUmVmTm9kZSA9IFJlYWN0LlJlYWN0SW5zdGFuY2UgfCBIVE1MRWxlbWVudCB8IG51bGxcblxuY2xhc3MgUmVhY3RSZXNpemVPYnNlcnZlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUmVzaXplT2JzZXJ2ZXJQcm9wcyxcbiAgUmVzaXplT2JzZXJ2ZXJTdGF0ZVxuPiB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9IFwiUmVzaXplT2JzZXJ2ZXJcIlxuXG4gIHJlc2l6ZU9ic2VydmVyOiBSZXNpemVPYnNlcnZlciB8IG51bGwgPSBudWxsXG5cbiAgY2hpbGROb2RlOiBSZWZOb2RlID0gbnVsbFxuXG4gIGN1cnJlbnRFbGVtZW50OiBFbGVtZW50IHwgbnVsbCA9IG51bGxcblxuICBzdGF0ZSA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQ29tcG9uZW50VXBkYXRlZCgpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5vbkNvbXBvbmVudFVwZGF0ZWQoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kZXN0cm95T2JzZXJ2ZXIoKVxuICB9XG5cbiAgb25Db21wb25lbnRVcGRhdGVkKCkge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHNcblxuICAgIC8vIFVucmVnaXN0ZXIgaWYgZGlzYWJsZWRcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGVzdHJveU9ic2VydmVyKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSBmaW5kRE9NTm9kZSh0aGlzLmNoaWxkTm9kZSB8fCB0aGlzKSBhcyBFbGVtZW50XG4gICAgY29uc3QgZWxlbWVudENoYW5nZWQgPSBlbGVtZW50ICE9PSB0aGlzLmN1cnJlbnRFbGVtZW50XG4gICAgaWYgKGVsZW1lbnRDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmRlc3Ryb3lPYnNlcnZlcigpXG4gICAgICB0aGlzLmN1cnJlbnRFbGVtZW50ID0gZWxlbWVudFxuICAgIH1cblxuICAgIGlmICghdGhpcy5yZXNpemVPYnNlcnZlciAmJiBlbGVtZW50KSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKHRoaXMub25SZXNpemUpXG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSA9IChlbnRyaWVzOiBSZXNpemVPYnNlcnZlckVudHJ5W10pID0+IHtcbiAgICBjb25zdCB7IG9uUmVzaXplIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB3aWR0aDogd2lkdGhTdGF0ZSwgaGVpZ2h0OiBoZWlnaHRTdGF0ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGVudHJpZXNbMF1cblxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgW2ZpeGVkV2lkdGgsIGZpeGVkSGVpZ2h0XSA9IFtNYXRoLmZsb29yKHdpZHRoKSwgTWF0aC5mbG9vcihoZWlnaHQpXVxuXG4gICAgaWYgKHdpZHRoU3RhdGUgIT09IGZpeGVkV2lkdGggfHwgaGVpZ2h0U3RhdGUgIT09IGZpeGVkSGVpZ2h0KSB7XG4gICAgICBjb25zdCBzaXplID0geyB3aWR0aDogZml4ZWRXaWR0aCwgaGVpZ2h0OiBmaXhlZEhlaWdodCB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoc2l6ZSlcblxuICAgICAgaWYgKG9uUmVzaXplKSB7XG4gICAgICAgIG9uUmVzaXplKHNpemUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0Q2hpbGROb2RlID0gKG5vZGU6IFJlZk5vZGUpID0+IHtcbiAgICB0aGlzLmNoaWxkTm9kZSA9IG5vZGVcbiAgfVxuXG4gIGRlc3Ryb3lPYnNlcnZlcigpIHtcbiAgICBpZiAodGhpcy5yZXNpemVPYnNlcnZlcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdG9BcnJheShjaGlsZHJlbilcblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBcIlJlc2l6ZU9ic2VydmVyXCIsXG4gICAgICAgIFwi5pyJ5aSa5LiqIGNoaWxkcmVu77yM5bCG5Y+q5Lya5Zyo56ys5LiA5Liq5YWD57Sg5LiK55uR5ZCsXCJcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3YXJuaW5nKGZhbHNlLCBcIlJlc2l6ZU9ic2VydmVyXCIsIFwi5rKh5pyJIGNoaWxkcmVuXCIpXG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROb2RlID0gY2hpbGROb2Rlc1swXVxuXG4gICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkTm9kZSkgJiYgc3VwcG9ydFJlZihjaGlsZE5vZGUpKSB7XG4gICAgICBjb25zdCB7IHJlZiB9ID0gY2hpbGROb2RlIGFzIGFueVxuXG4gICAgICBjaGlsZE5vZGVzWzBdID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkTm9kZSBhcyBhbnksIHtcbiAgICAgICAgcmVmOiBjb21wb3NlUmVmKHJlZiwgdGhpcy5zZXRDaGlsZE5vZGUpLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlcy5sZW5ndGggPT09IDFcbiAgICAgID8gY2hpbGROb2Rlc1swXVxuICAgICAgOiBjaGlsZE5vZGVzLm1hcCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhUmVhY3QuaXNWYWxpZEVsZW1lbnQobm9kZSkgfHxcbiAgICAgICAgICAgIChcImtleVwiIGluIG5vZGUgJiYgbm9kZS5rZXkgIT09IG51bGwpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQobm9kZSwge1xuICAgICAgICAgICAga2V5OiBgYWR1aS1vYnNlcnZlci1rZXktJHtpbmRleH1gLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RSZXNpemVPYnNlcnZlclxuIl19