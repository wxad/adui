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

import React, { Component } from "react";
import { mount } from "enzyme";
import TestRenderer from "react-test-renderer";
import Slider from "..";

var SliderMounter = function (_Component) {
  _inherits(SliderMounter, _Component);

  var _super = _createSuper(SliderMounter);

  function SliderMounter() {
    var _this;

    _classCallCheck(this, SliderMounter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      value: 30
    };
    return _this;
  }

  _createClass(SliderMounter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      return React.createElement(Slider, {
        value: value,
        onChange: function onChange(param) {
          return _this2.setState({
            value: param
          });
        }
      });
    }
  }]);

  return SliderMounter;
}(Component);

describe("Slider", function () {
  it("Slider 是否正确渲染", function () {
    var wrapper = TestRenderer.create(React.createElement(Slider, null));
    expect(wrapper).toMatchSnapshot();
  });
  it("Slider 是否能内部驱动", function () {
    var onChange = jest.fn();
    var wrapper = mount(React.createElement(Slider, {
      min: 0,
      max: 100,
      defaultValue: 30,
      onChange: onChange
    }));
    expect(wrapper.find(".adui-slider-handle").at(1).prop("aria-valuenow")).toBe(30);
    wrapper.find("input").simulate("change", {
      target: {
        value: "50"
      }
    });
    expect(wrapper.find(".adui-slider-handle").at(1).prop("aria-valuenow")).toBe(50);
  });
  it("Slider 是否能受外部控制", function () {
    var onChange = jest.fn();
    var wrapper0 = mount(React.createElement(Slider, {
      min: 0,
      max: 100,
      value: 30,
      step: 0.1,
      onChange: onChange
    }));
    var wrapper1 = mount(React.createElement(SliderMounter, null));
    wrapper0.find("input").simulate("change", {
      target: {
        value: "50"
      }
    });
    expect(wrapper0.find(".adui-slider-handle").at(1).prop("aria-valuenow")).toBe(30);
    wrapper1.find("input").simulate("change", {
      target: {
        value: "50"
      }
    });
    expect(wrapper1.find(".adui-slider-handle").at(1).prop("aria-valuenow")).toBe(50);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvc2xpZGVyL19fdGVzdHNfXy9pbmRleC50ZXN0LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIm1vdW50IiwiVGVzdFJlbmRlcmVyIiwiU2xpZGVyIiwiU2xpZGVyTW91bnRlciIsInN0YXRlIiwidmFsdWUiLCJwYXJhbSIsInNldFN0YXRlIiwiZGVzY3JpYmUiLCJpdCIsIndyYXBwZXIiLCJjcmVhdGUiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJvbkNoYW5nZSIsImplc3QiLCJmbiIsImZpbmQiLCJhdCIsInByb3AiLCJ0b0JlIiwic2ltdWxhdGUiLCJ0YXJnZXQiLCJ3cmFwcGVyMCIsIndyYXBwZXIxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxTQUFTQyxLQUFULFFBQXNCLFFBQXRCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixxQkFBekI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLElBQW5COztJQUVNQyxhOzs7Ozs7Ozs7Ozs7Ozs7VUFDSkMsSyxHQUFRO0FBQ05DLE1BQUFBLEtBQUssRUFBRTtBQURELEs7Ozs7Ozs2QkFJQztBQUFBOztBQUFBLFVBQ0NBLEtBREQsR0FDVyxLQUFLRCxLQURoQixDQUNDQyxLQUREO0FBRVAsYUFDRSxvQkFBQyxNQUFEO0FBQ0UsUUFBQSxLQUFLLEVBQUVBLEtBRFQ7QUFFRSxRQUFBLFFBQVEsRUFBRSxrQkFBQUMsS0FBSztBQUFBLGlCQUFJLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVGLFlBQUFBLEtBQUssRUFBRUM7QUFBVCxXQUFkLENBQUo7QUFBQTtBQUZqQixRQURGO0FBTUQ7Ozs7RUFieUJQLFM7O0FBZ0I1QlMsUUFBUSxDQUFDLFFBQUQsRUFBVyxZQUFNO0FBQ3ZCQyxFQUFBQSxFQUFFLENBQUMsZUFBRCxFQUFrQixZQUFNO0FBQ3hCLFFBQU1DLE9BQU8sR0FBR1QsWUFBWSxDQUFDVSxNQUFiLENBQW9CLG9CQUFDLE1BQUQsT0FBcEIsQ0FBaEI7QUFDQUMsSUFBQUEsTUFBTSxDQUFDRixPQUFELENBQU4sQ0FBZ0JHLGVBQWhCO0FBQ0QsR0FIQyxDQUFGO0FBS0FKLEVBQUFBLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixZQUFNO0FBQ3pCLFFBQU1LLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxFQUFMLEVBQWpCO0FBQ0EsUUFBTU4sT0FBTyxHQUFHVixLQUFLLENBQ25CLG9CQUFDLE1BQUQ7QUFBUSxNQUFBLEdBQUcsRUFBRSxDQUFiO0FBQWdCLE1BQUEsR0FBRyxFQUFFLEdBQXJCO0FBQTBCLE1BQUEsWUFBWSxFQUFFLEVBQXhDO0FBQTRDLE1BQUEsUUFBUSxFQUFFYztBQUF0RCxNQURtQixDQUFyQjtBQUtBRixJQUFBQSxNQUFNLENBQ0pGLE9BQU8sQ0FDSk8sSUFESCxDQUNRLHFCQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dDLElBSEgsQ0FHUSxlQUhSLENBREksQ0FBTixDQUtFQyxJQUxGLENBS08sRUFMUDtBQU1BVixJQUFBQSxPQUFPLENBQUNPLElBQVIsQ0FBYSxPQUFiLEVBQXNCSSxRQUF0QixDQUErQixRQUEvQixFQUF5QztBQUFFQyxNQUFBQSxNQUFNLEVBQUU7QUFBRWpCLFFBQUFBLEtBQUssRUFBRTtBQUFUO0FBQVYsS0FBekM7QUFDQU8sSUFBQUEsTUFBTSxDQUNKRixPQUFPLENBQ0pPLElBREgsQ0FDUSxxQkFEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHQyxJQUhILENBR1EsZUFIUixDQURJLENBQU4sQ0FLRUMsSUFMRixDQUtPLEVBTFA7QUFNRCxHQXBCQyxDQUFGO0FBc0JBWCxFQUFBQSxFQUFFLENBQUMsaUJBQUQsRUFBb0IsWUFBTTtBQUMxQixRQUFNSyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsRUFBTCxFQUFqQjtBQUNBLFFBQU1PLFFBQVEsR0FBR3ZCLEtBQUssQ0FDcEIsb0JBQUMsTUFBRDtBQUFRLE1BQUEsR0FBRyxFQUFFLENBQWI7QUFBZ0IsTUFBQSxHQUFHLEVBQUUsR0FBckI7QUFBMEIsTUFBQSxLQUFLLEVBQUUsRUFBakM7QUFBcUMsTUFBQSxJQUFJLEVBQUUsR0FBM0M7QUFBZ0QsTUFBQSxRQUFRLEVBQUVjO0FBQTFELE1BRG9CLENBQXRCO0FBR0EsUUFBTVUsUUFBUSxHQUFHeEIsS0FBSyxDQUFDLG9CQUFDLGFBQUQsT0FBRCxDQUF0QjtBQUVBdUIsSUFBQUEsUUFBUSxDQUFDTixJQUFULENBQWMsT0FBZCxFQUF1QkksUUFBdkIsQ0FBZ0MsUUFBaEMsRUFBMEM7QUFBRUMsTUFBQUEsTUFBTSxFQUFFO0FBQUVqQixRQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFWLEtBQTFDO0FBQ0FPLElBQUFBLE1BQU0sQ0FDSlcsUUFBUSxDQUNMTixJQURILENBQ1EscUJBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0MsSUFISCxDQUdRLGVBSFIsQ0FESSxDQUFOLENBS0VDLElBTEYsQ0FLTyxFQUxQO0FBTUFJLElBQUFBLFFBQVEsQ0FBQ1AsSUFBVCxDQUFjLE9BQWQsRUFBdUJJLFFBQXZCLENBQWdDLFFBQWhDLEVBQTBDO0FBQUVDLE1BQUFBLE1BQU0sRUFBRTtBQUFFakIsUUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBVixLQUExQztBQUNBTyxJQUFBQSxNQUFNLENBQ0pZLFFBQVEsQ0FDTFAsSUFESCxDQUNRLHFCQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dDLElBSEgsQ0FHUSxlQUhSLENBREksQ0FBTixDQUtFQyxJQUxGLENBS08sRUFMUDtBQU1ELEdBckJDLENBQUY7QUFzQkQsQ0FsRE8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSBcInJlYWN0LXRlc3QtcmVuZGVyZXJcIlxuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi5cIlxuXG5jbGFzcyBTbGlkZXJNb3VudGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdmFsdWU6IDMwLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPFNsaWRlclxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtwYXJhbSA9PiB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHBhcmFtIH0pfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZGVzY3JpYmUoXCJTbGlkZXJcIiwgKCkgPT4ge1xuICBpdChcIlNsaWRlciDmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKDxTbGlkZXIgLz4pXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG5cbiAgaXQoXCJTbGlkZXIg5piv5ZCm6IO95YaF6YOo6amx5YqoXCIsICgpID0+IHtcbiAgICBjb25zdCBvbkNoYW5nZSA9IGplc3QuZm4oKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxTbGlkZXIgbWluPXswfSBtYXg9ezEwMH0gZGVmYXVsdFZhbHVlPXszMH0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgIClcbiAgICAvLyB3cmFwcGVyLmluc3RhbmNlKCkuaGFuZGxlQmVmb3JlQ2hhbmdlKClcbiAgICAvLyB3cmFwcGVyLmluc3RhbmNlKCkuaGFuZGxlQWZ0ZXJDaGFuZ2UoKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1zbGlkZXItaGFuZGxlXCIpXG4gICAgICAgIC5hdCgxKVxuICAgICAgICAucHJvcChcImFyaWEtdmFsdWVub3dcIilcbiAgICApLnRvQmUoMzApXG4gICAgd3JhcHBlci5maW5kKFwiaW5wdXRcIikuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiNTBcIiB9IH0pXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLXNsaWRlci1oYW5kbGVcIilcbiAgICAgICAgLmF0KDEpXG4gICAgICAgIC5wcm9wKFwiYXJpYS12YWx1ZW5vd1wiKVxuICAgICkudG9CZSg1MClcbiAgfSlcblxuICBpdChcIlNsaWRlciDmmK/lkKbog73lj5flpJbpg6jmjqfliLZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uQ2hhbmdlID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlcjAgPSBtb3VudChcbiAgICAgIDxTbGlkZXIgbWluPXswfSBtYXg9ezEwMH0gdmFsdWU9ezMwfSBzdGVwPXswLjF9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICApXG4gICAgY29uc3Qgd3JhcHBlcjEgPSBtb3VudCg8U2xpZGVyTW91bnRlciAvPilcblxuICAgIHdyYXBwZXIwLmZpbmQoXCJpbnB1dFwiKS5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCI1MFwiIH0gfSlcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMFxuICAgICAgICAuZmluZChcIi5hZHVpLXNsaWRlci1oYW5kbGVcIilcbiAgICAgICAgLmF0KDEpXG4gICAgICAgIC5wcm9wKFwiYXJpYS12YWx1ZW5vd1wiKVxuICAgICkudG9CZSgzMClcbiAgICB3cmFwcGVyMS5maW5kKFwiaW5wdXRcIikuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiNTBcIiB9IH0pXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlcjFcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1zbGlkZXItaGFuZGxlXCIpXG4gICAgICAgIC5hdCgxKVxuICAgICAgICAucHJvcChcImFyaWEtdmFsdWVub3dcIilcbiAgICApLnRvQmUoNTApXG4gIH0pXG59KVxuIl19