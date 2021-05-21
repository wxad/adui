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
import { render, mount } from "enzyme";
import PopTrigger from "..";

var TriggerMounter = function (_React$Component) {
  _inherits(TriggerMounter, _React$Component);

  var _super = _createSuper(TriggerMounter);

  function TriggerMounter() {
    var _this;

    _classCallCheck(this, TriggerMounter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      trigger: null
    };
    _this.trigger = void 0;

    _this.componentDidMount = function () {
      if (_this.trigger) {
        _this.setState({
          trigger: _this.trigger
        });
      }
    };

    return _this;
  }

  _createClass(TriggerMounter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(PopTrigger, {
        onPopupAlign: function onPopupAlign() {},
        onPopupVisibleChange: function onPopupVisibleChange() {},
        ref: function ref(node) {
          if (node) {
            _this2.trigger = node;
          }

          return null;
        },
        popup: "asd"
      }, "\u6309\u94AE");
    }
  }]);

  return TriggerMounter;
}(React.Component);

describe("PopTrigger", function () {
  it("是否正确渲染", function () {
    var wrapper0 = render(React.createElement(PopTrigger, {
      onPopupAlign: function onPopupAlign() {},
      onPopupVisibleChange: function onPopupVisibleChange() {},
      popup: "asd"
    }, "\u6309\u94AE"));
    expect(wrapper0).toMatchSnapshot();
  });
  it("是否能拿到 trigger", function () {
    var wrapper = mount(React.createElement(TriggerMounter, null));
    expect(_typeof(wrapper.instance().state.trigger)).toEqual("object");
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcG9wLXRyaWdnZXIvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwicmVuZGVyIiwibW91bnQiLCJQb3BUcmlnZ2VyIiwiVHJpZ2dlck1vdW50ZXIiLCJzdGF0ZSIsInRyaWdnZXIiLCJjb21wb25lbnREaWRNb3VudCIsInNldFN0YXRlIiwibm9kZSIsIkNvbXBvbmVudCIsImRlc2NyaWJlIiwiaXQiLCJ3cmFwcGVyMCIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCIsIndyYXBwZXIiLCJpbnN0YW5jZSIsInRvRXF1YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLEtBQUtBLEtBQVosTUFBdUIsT0FBdkI7QUFDQSxTQUFTQyxNQUFULEVBQWlCQyxLQUFqQixRQUE4QixRQUE5QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsSUFBdkI7O0lBRU1DLGM7Ozs7Ozs7Ozs7Ozs7OztVQUNKQyxLLEdBQVE7QUFDTkMsTUFBQUEsT0FBTyxFQUFFO0FBREgsSztVQUlBQSxPOztVQUVSQyxpQixHQUFvQixZQUFNO0FBQ3hCLFVBQUksTUFBS0QsT0FBVCxFQUFrQjtBQUNoQixjQUFLRSxRQUFMLENBQWM7QUFDWkYsVUFBQUEsT0FBTyxFQUFFLE1BQUtBO0FBREYsU0FBZDtBQUdEO0FBQ0YsSzs7Ozs7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0Usb0JBQUMsVUFBRDtBQUNFLFFBQUEsWUFBWSxFQUFFLHdCQUFNLENBQUUsQ0FEeEI7QUFFRSxRQUFBLG9CQUFvQixFQUFFLGdDQUFNLENBQUUsQ0FGaEM7QUFHRSxRQUFBLEdBQUcsRUFBRSxhQUFBRyxJQUFJLEVBQUk7QUFDWCxjQUFJQSxJQUFKLEVBQVU7QUFDUixZQUFBLE1BQUksQ0FBQ0gsT0FBTCxHQUFlRyxJQUFmO0FBQ0Q7O0FBQ0QsaUJBQU8sSUFBUDtBQUNELFNBUkg7QUFTRSxRQUFBLEtBQUssRUFBQztBQVRSLHdCQURGO0FBZUQ7Ozs7RUEvQjBCVCxLQUFLLENBQUNVLFM7O0FBa0NuQ0MsUUFBUSxDQUFDLFlBQUQsRUFBZSxZQUFNO0FBQzNCQyxFQUFBQSxFQUFFLENBQUMsUUFBRCxFQUFXLFlBQU07QUFDakIsUUFBTUMsUUFBUSxHQUFHWixNQUFNLENBQ3JCLG9CQUFDLFVBQUQ7QUFDRSxNQUFBLFlBQVksRUFBRSx3QkFBTSxDQUFFLENBRHhCO0FBRUUsTUFBQSxvQkFBb0IsRUFBRSxnQ0FBTSxDQUFFLENBRmhDO0FBR0UsTUFBQSxLQUFLLEVBQUM7QUFIUixzQkFEcUIsQ0FBdkI7QUFTQWEsSUFBQUEsTUFBTSxDQUFDRCxRQUFELENBQU4sQ0FBaUJFLGVBQWpCO0FBQ0QsR0FYQyxDQUFGO0FBYUFILEVBQUFBLEVBQUUsQ0FBQyxlQUFELEVBQWtCLFlBQU07QUFDeEIsUUFBTUksT0FBTyxHQUFHZCxLQUFLLENBQUMsb0JBQUMsY0FBRCxPQUFELENBQXJCO0FBQ0FZLElBQUFBLE1BQU0sU0FBUUUsT0FBTyxDQUFDQyxRQUFSLEdBQW1CWixLQUFuQixDQUF5QkMsT0FBakMsRUFBTixDQUFnRFksT0FBaEQsQ0FBd0QsUUFBeEQ7QUFDRCxHQUhDLENBQUY7QUFJRCxDQWxCTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyByZW5kZXIsIG1vdW50IH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgUG9wVHJpZ2dlciBmcm9tIFwiLi5cIlxuXG5jbGFzcyBUcmlnZ2VyTW91bnRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHRyaWdnZXI6IG51bGwsXG4gIH1cblxuICBwcml2YXRlIHRyaWdnZXI6IGFueVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnRyaWdnZXIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0cmlnZ2VyOiB0aGlzLnRyaWdnZXIsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcFRyaWdnZXJcbiAgICAgICAgb25Qb3B1cEFsaWduPXsoKSA9PiB7fX1cbiAgICAgICAgb25Qb3B1cFZpc2libGVDaGFuZ2U9eygpID0+IHt9fVxuICAgICAgICByZWY9e25vZGUgPT4ge1xuICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIgPSBub2RlXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH19XG4gICAgICAgIHBvcHVwPVwiYXNkXCJcbiAgICAgID5cbiAgICAgICAg5oyJ6ZKuXG4gICAgICA8L1BvcFRyaWdnZXI+XG4gICAgKVxuICB9XG59XG5cbmRlc2NyaWJlKFwiUG9wVHJpZ2dlclwiLCAoKSA9PiB7XG4gIGl0KFwi5piv5ZCm5q2j56Gu5riy5p+TXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyMCA9IHJlbmRlcihcbiAgICAgIDxQb3BUcmlnZ2VyXG4gICAgICAgIG9uUG9wdXBBbGlnbj17KCkgPT4ge319XG4gICAgICAgIG9uUG9wdXBWaXNpYmxlQ2hhbmdlPXsoKSA9PiB7fX1cbiAgICAgICAgcG9wdXA9XCJhc2RcIlxuICAgICAgPlxuICAgICAgICDmjInpkq5cbiAgICAgIDwvUG9wVHJpZ2dlcj5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIwKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm6IO95ou/5YiwIHRyaWdnZXJcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VHJpZ2dlck1vdW50ZXIgLz4pXG4gICAgZXhwZWN0KHR5cGVvZiB3cmFwcGVyLmluc3RhbmNlKCkuc3RhdGUudHJpZ2dlcikudG9FcXVhbChcIm9iamVjdFwiKVxuICB9KVxufSlcbiJdfQ==