function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import ColorPicker from "..";
import { act } from "react-dom/test-utils";

var ColorPickerMounter = function (_Component) {
  _inherits(ColorPickerMounter, _Component);

  var _super = _createSuper(ColorPickerMounter);

  function ColorPickerMounter() {
    var _this;

    _classCallCheck(this, ColorPickerMounter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      value: "#07C160"
    };
    return _this;
  }

  _createClass(ColorPickerMounter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      return React.createElement(ColorPicker, _extends({
        value: value,
        onChange: function onChange(val) {
          return _this2.setState({
            value: val
          });
        }
      }, this.props));
    }
  }]);

  return ColorPickerMounter;
}(Component);

describe("ColorPicker", function () {
  beforeAll(function () {
    jest.useFakeTimers();
  });
  afterAll(function () {
    jest.useRealTimers();
  });
  it("是否正确渲染", function () {
    var wrapper = TestRenderer.create(React.createElement(ColorPicker, {
      defaultValue: "#07C160"
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it("是否能处理小写值的情况", function () {
    var wrapper = mount(React.createElement(ColorPicker, {
      defaultValue: "#07c160"
    }));
    var value = wrapper.find(".adui-cp").at(0).props()["data-value"];
    var inputValue = wrapper.find("Input").at(0).props().value;
    expect(inputValue === "07C160" && value === "#07C160").toBe(true);
  });
  it("内部驱动", function () {
    var wrapper = mount(React.createElement(ColorPicker, {
      defaultValue: "#07C160"
    }));
    wrapper.find("button").simulate("click");
    wrapper.find(".adui-cp-standard i").at(0).simulate("click");
    var value = wrapper.find(".adui-cp").at(0).props()["data-value"];
    var inputValue = wrapper.find("Input").at(0).props().value;
    expect(inputValue === "FFFFFF" && value === "#FFFFFF").toBe(true);
    wrapper.find("input").at(0).simulate("change", {
      target: {
        value: "F0F0F0"
      }
    });
    var value1 = wrapper.find(".adui-cp").at(0).props()["data-value"];
    var inputValue1 = wrapper.find("Input").at(0).props().value;
    expect(inputValue1 === "F0F0F0" && value1 === "#F0F0F0").toBe(true);
  });
  it("外部控制", function () {
    var wrapper = mount(React.createElement(ColorPickerMounter, null));
    wrapper.find("button").simulate("click");
    act(function () {
      wrapper.find(".adui-cp-standard i").at(0).simulate("click");
      jest.runAllTimers();
      wrapper.update();
      var value = wrapper.find(".adui-cp").at(0).props()["data-value"];
      var inputValue = wrapper.find("Input").at(0).props().value;
      expect(inputValue === "FFFFFF" && value === "#FFFFFF" && wrapper.state().value === "#FFFFFF").toBe(true);
    });
    wrapper.find("input").at(0).simulate("change", {
      target: {
        value: "F0F0F0"
      }
    });
    var value1 = wrapper.find(".adui-cp").at(0).props()["data-value"];
    var inputValue1 = wrapper.find("Input").at(0).props().value;
    expect(inputValue1 === "F0F0F0" && value1 === "#F0F0F0" && wrapper.state().value === "#F0F0F0").toBe(true);
  });
  it("禁用态", function () {
    var wrapper = mount(React.createElement(ColorPicker, {
      defaultValue: "#07C160",
      disabled: true
    }));
    wrapper.find("button").simulate("click");
    expect(wrapper.find("Popover").props().visible).toBe(false);
  });
  it("popupResultVisible", function () {
    var wrapper0 = mount(React.createElement(ColorPicker, {
      defaultValue: "#07C160"
    }));
    var wrapper1 = mount(React.createElement(ColorPicker, {
      defaultValue: "#07C160",
      popupResultVisible: false
    }));
    wrapper0.find("button").simulate("click");
    wrapper1.find("button").simulate("click");
    expect(wrapper0.find("input")).toHaveLength(2);
    expect(wrapper1.find("input")).toHaveLength(1);
  });
  it("handlePrefixClick 验证", function () {
    var wrapper = mount(React.createElement(ColorPicker, {
      defaultValue: "#07C160"
    }));
    wrapper.find(".adui-cp-prefix").simulate("click");
    wrapper.find("button").simulate("click");
    jest.advanceTimersByTime(50);
    wrapper.find(".adui-cp-prefix").at(1).simulate("click");
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvY29sb3ItcGlja2VyL19fdGVzdHNfXy9pbmRleC50ZXN0LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIm1vdW50IiwiVGVzdFJlbmRlcmVyIiwiQ29sb3JQaWNrZXIiLCJhY3QiLCJDb2xvclBpY2tlck1vdW50ZXIiLCJzdGF0ZSIsInZhbHVlIiwidmFsIiwic2V0U3RhdGUiLCJwcm9wcyIsImRlc2NyaWJlIiwiYmVmb3JlQWxsIiwiamVzdCIsInVzZUZha2VUaW1lcnMiLCJhZnRlckFsbCIsInVzZVJlYWxUaW1lcnMiLCJpdCIsIndyYXBwZXIiLCJjcmVhdGUiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJmaW5kIiwiYXQiLCJpbnB1dFZhbHVlIiwidG9CZSIsInNpbXVsYXRlIiwidGFyZ2V0IiwidmFsdWUxIiwiaW5wdXRWYWx1ZTEiLCJydW5BbGxUaW1lcnMiLCJ1cGRhdGUiLCJ2aXNpYmxlIiwid3JhcHBlcjAiLCJ3cmFwcGVyMSIsInRvSGF2ZUxlbmd0aCIsImFkdmFuY2VUaW1lcnNCeVRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixRQUF0QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIscUJBQXpCO0FBRUEsT0FBT0MsV0FBUCxNQUF3QixJQUF4QjtBQUNBLFNBQVNDLEdBQVQsUUFBb0Isc0JBQXBCOztJQUVNQyxrQjs7Ozs7Ozs7Ozs7Ozs7O1VBQ0pDLEssR0FBUTtBQUNOQyxNQUFBQSxLQUFLLEVBQUU7QUFERCxLOzs7Ozs7NkJBSUM7QUFBQTs7QUFBQSxVQUNDQSxLQURELEdBQ1csS0FBS0QsS0FEaEIsQ0FDQ0MsS0FERDtBQUVQLGFBQ0Usb0JBQUMsV0FBRDtBQUNFLFFBQUEsS0FBSyxFQUFFQSxLQURUO0FBRUUsUUFBQSxRQUFRLEVBQUUsa0JB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QUFvQyxNQUFBLGtCQUFrQixFQUFFO0FBQXhELE1BRG9CLENBQXRCO0FBR0FnQyxJQUFBQSxRQUFRLENBQUNYLElBQVQsQ0FBYyxRQUFkLEVBQXdCSSxRQUF4QixDQUFpQyxPQUFqQztBQUNBUSxJQUFBQSxRQUFRLENBQUNaLElBQVQsQ0FBYyxRQUFkLEVBQXdCSSxRQUF4QixDQUFpQyxPQUFqQztBQUNBTixJQUFBQSxNQUFNLENBQUNhLFFBQVEsQ0FBQ1gsSUFBVCxDQUFjLE9BQWQsQ0FBRCxDQUFOLENBQStCYSxZQUEvQixDQUE0QyxDQUE1QztBQUNBZixJQUFBQSxNQUFNLENBQUNjLFFBQVEsQ0FBQ1osSUFBVCxDQUFjLE9BQWQsQ0FBRCxDQUFOLENBQStCYSxZQUEvQixDQUE0QyxDQUE1QztBQUNELEdBVEMsQ0FBRjtBQVdBbEIsRUFBQUEsRUFBRSxDQUFDLHNCQUFELEVBQXlCLFlBQU07QUFDL0IsUUFBTUMsT0FBTyxHQUFHakIsS0FBSyxDQUFDLG9CQUFDLFdBQUQ7QUFBYSxNQUFBLFlBQVksRUFBQztBQUExQixNQUFELENBQXJCO0FBQ0FpQixJQUFBQSxPQUFPLENBQUNJLElBQVIsQ0FBYSxpQkFBYixFQUFnQ0ksUUFBaEMsQ0FBeUMsT0FBekM7QUFDQVIsSUFBQUEsT0FBTyxDQUFDSSxJQUFSLENBQWEsUUFBYixFQUF1QkksUUFBdkIsQ0FBZ0MsT0FBaEM7QUFDQWIsSUFBQUEsSUFBSSxDQUFDdUIsbUJBQUwsQ0FBeUIsRUFBekI7QUFDQWxCLElBQUFBLE9BQU8sQ0FDSkksSUFESCxDQUNRLGlCQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dHLFFBSEgsQ0FHWSxPQUhaO0FBSUQsR0FUQyxDQUFGO0FBVUQsQ0FuSU8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IG1vdW50IH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gXCJyZWFjdC10ZXN0LXJlbmRlcmVyXCJcbi8vIGltcG9ydCB7IGFjdCB9IGZyb20gXCJyZWFjdC1kb20vdGVzdC11dGlsc1wiXG5pbXBvcnQgQ29sb3JQaWNrZXIgZnJvbSBcIi4uXCJcbmltcG9ydCB7IGFjdCB9IGZyb20gXCJyZWFjdC1kb20vdGVzdC11dGlsc1wiXG5cbmNsYXNzIENvbG9yUGlja2VyTW91bnRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiBcIiMwN0MxNjBcIixcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXt2YWwgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWwgfSl9XG4gICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZGVzY3JpYmUoXCJDb2xvclBpY2tlclwiLCAoKSA9PiB7XG4gIGJlZm9yZUFsbCgoKSA9PiB7XG4gICAgamVzdC51c2VGYWtlVGltZXJzKClcbiAgfSlcblxuICBhZnRlckFsbCgoKSA9PiB7XG4gICAgamVzdC51c2VSZWFsVGltZXJzKClcbiAgfSlcblxuICBpdChcIuaYr+WQpuato+ehrua4suafk1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IFRlc3RSZW5kZXJlci5jcmVhdGUoPENvbG9yUGlja2VyIGRlZmF1bHRWYWx1ZT1cIiMwN0MxNjBcIiAvPilcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIuaYr+WQpuiDveWkhOeQhuWwj+WGmeWAvOeahOaDheWGtVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxDb2xvclBpY2tlciBkZWZhdWx0VmFsdWU9XCIjMDdjMTYwXCIgLz4pXG4gICAgY29uc3QgdmFsdWUgPSB3cmFwcGVyXG4gICAgICAuZmluZChcIi5hZHVpLWNwXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXVxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB3cmFwcGVyXG4gICAgICAuZmluZChcIklucHV0XCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5wcm9wcygpLnZhbHVlXG4gICAgZXhwZWN0KGlucHV0VmFsdWUgPT09IFwiMDdDMTYwXCIgJiYgdmFsdWUgPT09IFwiIzA3QzE2MFwiKS50b0JlKHRydWUpXG4gIH0pXG5cbiAgaXQoXCLlhoXpg6jpqbHliqhcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8Q29sb3JQaWNrZXIgZGVmYXVsdFZhbHVlPVwiIzA3QzE2MFwiIC8+KVxuICAgIHdyYXBwZXIuZmluZChcImJ1dHRvblwiKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCIuYWR1aS1jcC1zdGFuZGFyZCBpXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgY29uc3QgdmFsdWUgPSB3cmFwcGVyXG4gICAgICAuZmluZChcIi5hZHVpLWNwXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXVxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB3cmFwcGVyXG4gICAgICAuZmluZChcIklucHV0XCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5wcm9wcygpLnZhbHVlXG4gICAgZXhwZWN0KGlucHV0VmFsdWUgPT09IFwiRkZGRkZGXCIgJiYgdmFsdWUgPT09IFwiI0ZGRkZGRlwiKS50b0JlKHRydWUpXG5cbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCJGMEYwRjBcIiB9IH0pXG5cbiAgICBjb25zdCB2YWx1ZTEgPSB3cmFwcGVyXG4gICAgICAuZmluZChcIi5hZHVpLWNwXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXVxuICAgIGNvbnN0IGlucHV0VmFsdWUxID0gd3JhcHBlclxuICAgICAgLmZpbmQoXCJJbnB1dFwiKVxuICAgICAgLmF0KDApXG4gICAgICAucHJvcHMoKS52YWx1ZVxuICAgIGV4cGVjdChpbnB1dFZhbHVlMSA9PT0gXCJGMEYwRjBcIiAmJiB2YWx1ZTEgPT09IFwiI0YwRjBGMFwiKS50b0JlKHRydWUpXG4gIH0pXG5cbiAgaXQoXCLlpJbpg6jmjqfliLZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8Q29sb3JQaWNrZXJNb3VudGVyIC8+KVxuXG4gICAgd3JhcHBlci5maW5kKFwiYnV0dG9uXCIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWNwLXN0YW5kYXJkIGlcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgICBjb25zdCB2YWx1ZSA9IHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1jcFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdXG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gd3JhcHBlclxuICAgICAgICAuZmluZChcIklucHV0XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS52YWx1ZVxuICAgICAgZXhwZWN0KFxuICAgICAgICBpbnB1dFZhbHVlID09PSBcIkZGRkZGRlwiICYmXG4gICAgICAgICAgdmFsdWUgPT09IFwiI0ZGRkZGRlwiICYmXG4gICAgICAgICAgd3JhcHBlci5zdGF0ZSgpLnZhbHVlID09PSBcIiNGRkZGRkZcIlxuICAgICAgKS50b0JlKHRydWUpXG4gICAgfSlcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCJGMEYwRjBcIiB9IH0pXG4gICAgY29uc3QgdmFsdWUxID0gd3JhcHBlclxuICAgICAgLmZpbmQoXCIuYWR1aS1jcFwiKVxuICAgICAgLmF0KDApXG4gICAgICAucHJvcHMoKVtcImRhdGEtdmFsdWVcIl1cbiAgICBjb25zdCBpbnB1dFZhbHVlMSA9IHdyYXBwZXJcbiAgICAgIC5maW5kKFwiSW5wdXRcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnByb3BzKCkudmFsdWVcbiAgICBleHBlY3QoXG4gICAgICBpbnB1dFZhbHVlMSA9PT0gXCJGMEYwRjBcIiAmJlxuICAgICAgICB2YWx1ZTEgPT09IFwiI0YwRjBGMFwiICYmXG4gICAgICAgIHdyYXBwZXIuc3RhdGUoKS52YWx1ZSA9PT0gXCIjRjBGMEYwXCJcbiAgICApLnRvQmUodHJ1ZSlcbiAgfSlcblxuICBpdChcIuemgeeUqOaAgVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxDb2xvclBpY2tlciBkZWZhdWx0VmFsdWU9XCIjMDdDMTYwXCIgZGlzYWJsZWQgLz4pXG4gICAgd3JhcHBlci5maW5kKFwiYnV0dG9uXCIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiUG9wb3ZlclwiKS5wcm9wcygpLnZpc2libGUpLnRvQmUoZmFsc2UpXG4gIH0pXG5cbiAgaXQoXCJwb3B1cFJlc3VsdFZpc2libGVcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIwID0gbW91bnQoPENvbG9yUGlja2VyIGRlZmF1bHRWYWx1ZT1cIiMwN0MxNjBcIiAvPilcbiAgICBjb25zdCB3cmFwcGVyMSA9IG1vdW50KFxuICAgICAgPENvbG9yUGlja2VyIGRlZmF1bHRWYWx1ZT1cIiMwN0MxNjBcIiBwb3B1cFJlc3VsdFZpc2libGU9e2ZhbHNlfSAvPlxuICAgIClcbiAgICB3cmFwcGVyMC5maW5kKFwiYnV0dG9uXCIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICB3cmFwcGVyMS5maW5kKFwiYnV0dG9uXCIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlcjAuZmluZChcImlucHV0XCIpKS50b0hhdmVMZW5ndGgoMilcbiAgICBleHBlY3Qod3JhcHBlcjEuZmluZChcImlucHV0XCIpKS50b0hhdmVMZW5ndGgoMSlcbiAgfSlcblxuICBpdChcImhhbmRsZVByZWZpeENsaWNrIOmqjOivgVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxDb2xvclBpY2tlciBkZWZhdWx0VmFsdWU9XCIjMDdDMTYwXCIgLz4pXG4gICAgd3JhcHBlci5maW5kKFwiLmFkdWktY3AtcHJlZml4XCIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICB3cmFwcGVyLmZpbmQoXCJidXR0b25cIikuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGplc3QuYWR2YW5jZVRpbWVyc0J5VGltZSg1MClcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIi5hZHVpLWNwLXByZWZpeFwiKVxuICAgICAgLmF0KDEpXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICB9KVxufSlcbiJdfQ==