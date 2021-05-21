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
import TestRenderer from "react-test-renderer";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";
import TimePicker from "..";

var TimePickerTest = function (_React$Component) {
  _inherits(TimePickerTest, _React$Component);

  var _super = _createSuper(TimePickerTest);

  function TimePickerTest() {
    var _this;

    _classCallCheck(this, TimePickerTest);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      value: "09:00"
    };
    return _this;
  }

  _createClass(TimePickerTest, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      return React.createElement("div", null, React.createElement(TimePicker, {
        closeOnSelect: true,
        value: value,
        onChange: function onChange(val) {
          return _this2.setState({
            value: val
          });
        },
        minTime: "08:40",
        maxTime: "09:20",
        ref: function ref(node) {
          if (node) {
            _this2.picker = node;
          }

          return null;
        }
      }));
    }
  }]);

  return TimePickerTest;
}(React.Component);

function timeout(ms) {
  return function (done) {
    setTimeout(done, ms);
  };
}

describe("TimePicker", function () {
  beforeAll(function () {
    jest.useFakeTimers();
  });
  afterAll(function () {
    jest.useRealTimers();
  });
  it("是否正确渲染", function () {
    var wrapper = TestRenderer.create(React.createElement(TimePicker, null));
    expect(wrapper).toMatchSnapshot();
  });
  it("各种情况快照核对", function () {
    var wrapper0 = TestRenderer.create(React.createElement(TimePicker, {
      size: "mini",
      theme: "light",
      onlyHour: true,
      disabled: true
    }));
    expect(wrapper0).toMatchSnapshot();
  });
  it("输入事件", function () {
    var wrapper = mount(React.createElement(TimePicker, null));
    var input = wrapper.find("input");
    input.simulate("focus");
    expect(wrapper.find("Popover").props().visible).toEqual(true);
    input.simulate("change", {
      target: {
        value: " "
      }
    });
    input.simulate("change", {
      target: {
        value: "16:07"
      }
    });
    expect(wrapper.find("Input").props().value).toEqual("16:07");
    input.simulate("keydown", {
      keyCode: 13
    });
    expect(wrapper.find("Popover").props().visible).toEqual(false);
  });
  it("点击事件", function () {
    var wrapper = mount(React.createElement(TimePickerTest, null));
    expect(wrapper.find("Popover").props().visible).toEqual(false);
    wrapper.find("input").simulate("focus");
    expect(wrapper.find("Popover").props().visible).toEqual(true);
    act(function () {
      wrapper.find(".adui-time-item").at(0).simulate("click");
      jest.advanceTimersByTime(50);
      wrapper.update();
      expect(wrapper.find("Input").props().value).toEqual("08:40");
      wrapper.find(".adui-time-item").at(42).simulate("click");
      wrapper.update();
      jest.advanceTimersByTime(50);
      expect(wrapper.find("Input").props().value).toEqual("08:40");
      wrapper.find("input").simulate("change", {
        target: {
          value: "07:40"
        }
      });
      wrapper.find("input").simulate("change", {
        target: {
          value: "08:4"
        }
      });
      wrapper.update();
      expect(wrapper.find("Input").props().value).toEqual("08:40");
    });
  });
  it("内部驱动", function () {
    var wrapper = mount(React.createElement(TimePicker, {
      defaultValue: "09:20"
    }));
    var input = wrapper.find("input");
    input.simulate("focus");
    expect(wrapper.find("Popover").props().visible).toEqual(true);
    wrapper.find(".adui-time-item").at(0).simulate("click");
    expect(wrapper.find("Input").props().value).toEqual("00:20");
  });
  it("外部控制", function () {
    var wrapper = mount(React.createElement(TimePicker, {
      value: "09:00",
      onlyHour: true
    }));
    var input = wrapper.find("input");
    input.simulate("focus");
    expect(wrapper.find("Popover").props().visible).toEqual(true);
    wrapper.find(".adui-time-item").at(0).simulate("click");
    expect(wrapper.find("Input").props().value).toEqual("09:00");
  });
  it("测试禁用", function () {
    var wrapper = mount(React.createElement(TimePicker, {
      disabled: true
    }));
    var input = wrapper.find("input");
    input.simulate("click");
    expect(wrapper.find("Popover").props().visible).toEqual(false);
  });
  it("测试最大时间和最小时间", function () {
    var wrapper = mount(React.createElement(TimePicker, {
      minTime: "09:00",
      maxTime: "09:20",
      defaultValue: "09:10"
    }));
    var input = wrapper.find("input");
    input.simulate("change", {
      target: {
        value: "09:30"
      }
    });
    input.simulate("focus");
    expect(wrapper.find("Popover").props().visible).toEqual(true);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGltZS1waWNrZXIvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiVGVzdFJlbmRlcmVyIiwiYWN0IiwibW91bnQiLCJUaW1lUGlja2VyIiwiVGltZVBpY2tlclRlc3QiLCJzdGF0ZSIsInZhbHVlIiwidmFsIiwic2V0U3RhdGUiLCJub2RlIiwicGlja2VyIiwiQ29tcG9uZW50IiwidGltZW91dCIsIm1zIiwiZG9uZSIsInNldFRpbWVvdXQiLCJkZXNjcmliZSIsImJlZm9yZUFsbCIsImplc3QiLCJ1c2VGYWtlVGltZXJzIiwiYWZ0ZXJBbGwiLCJ1c2VSZWFsVGltZXJzIiwiaXQiLCJ3cmFwcGVyIiwiY3JlYXRlIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90Iiwid3JhcHBlcjAiLCJpbnB1dCIsImZpbmQiLCJzaW11bGF0ZSIsInByb3BzIiwidmlzaWJsZSIsInRvRXF1YWwiLCJ0YXJnZXQiLCJrZXlDb2RlIiwiYXQiLCJhZHZhbmNlVGltZXJzQnlUaW1lIiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxLQUFLQSxLQUFaLE1BQXVCLE9BQXZCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixxQkFBekI7QUFDQSxTQUFTQyxHQUFULFFBQW9CLHNCQUFwQjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsUUFBdEI7QUFFQSxPQUFPQyxVQUFQLE1BQXVCLElBQXZCOztJQUVNQyxjOzs7Ozs7Ozs7Ozs7Ozs7VUFDSkMsSyxHQUFRO0FBQ05DLE1BQUFBLEtBQUssRUFBRTtBQURELEs7Ozs7Ozs2QkFJQztBQUFBOztBQUFBLFVBQ0NBLEtBREQsR0FDVyxLQUFLRCxLQURoQixDQUNDQyxLQUREO0FBRVAsYUFDRSxpQ0FDRSxvQkFBQyxVQUFEO0FBQ0UsUUFBQSxhQUFhLE1BRGY7QUFFRSxRQUFBLEtBQUssRUFBRUEsS0FGVDtBQUdFLFFBQUEsUUFBUSxFQUFF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QUF3QkUsS0FBeEIsR0FBZ0NDLE9BQWpDLENBQU4sQ0FBZ0RDLE9BQWhELENBQXdELEtBQXhEO0FBQ0QsR0FMQyxDQUFGO0FBT0FYLEVBQUFBLEVBQUUsQ0FBQyxhQUFELEVBQWdCLFlBQU07QUFDdEIsUUFBTUMsT0FBTyxHQUFHckIsS0FBSyxDQUNuQixvQkFBQyxVQUFEO0FBQVksTUFBQSxPQUFPLEVBQUMsT0FBcEI7QUFBNEIsTUFBQSxPQUFPLEVBQUMsT0FBcEM7QUFBNEMsTUFBQSxZQUFZLEVBQUM7QUFBekQsTUFEbUIsQ0FBckI7QUFHQSxRQUFNMEIsS0FBSyxHQUFHTCxPQUFPLENBQUNNLElBQVIsQ0FBYSxPQUFiLENBQWQ7QUFDQUQsSUFBQUEsS0FBSyxDQUFDRSxRQUFOLENBQWUsUUFBZixFQUF5QjtBQUFFSSxNQUFBQSxNQUFNLEVBQUU7QUFBRTVCLFFBQUFBLEtBQUssRUFBRTtBQUFUO0FBQVYsS0FBekI7QUFDQXNCLElBQUFBLEtBQUssQ0FBQ0UsUUFBTixDQUFlLE9BQWY7QUFDQUwsSUFBQUEsTUFBTSxDQUFDRixPQUFPLENBQUNNLElBQVIsQ0FBYSxTQUFiLEVBQXdCRSxLQUF4QixHQUFnQ0MsT0FBakMsQ0FBTixDQUFnREMsT0FBaEQsQ0FBd0QsSUFBeEQ7QUFDRCxHQVJDLENBQUY7QUFTRCxDQXRJTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gXCJyZWFjdC10ZXN0LXJlbmRlcmVyXCJcbmltcG9ydCB7IGFjdCB9IGZyb20gXCJyZWFjdC1kb20vdGVzdC11dGlsc1wiXG5pbXBvcnQgeyBtb3VudCB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IGFzeW5jIGZyb20gXCJhc3luY1wiXG5pbXBvcnQgVGltZVBpY2tlciBmcm9tIFwiLi5cIlxuXG5jbGFzcyBUaW1lUGlja2VyVGVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiBcIjA5OjAwXCIsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8VGltZVBpY2tlclxuICAgICAgICAgIGNsb3NlT25TZWxlY3RcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3ZhbCA9PiB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbCB9KX1cbiAgICAgICAgICBtaW5UaW1lPVwiMDg6NDBcIlxuICAgICAgICAgIG1heFRpbWU9XCIwOToyMFwiXG4gICAgICAgICAgcmVmPXtub2RlID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgIHRoaXMucGlja2VyID0gbm9kZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVvdXQobXM6IG51bWJlcikge1xuICByZXR1cm4gKGRvbmU6ICgpID0+IHZvaWQpID0+IHtcbiAgICBzZXRUaW1lb3V0KGRvbmUsIG1zKVxuICB9XG59XG5cbmRlc2NyaWJlKFwiVGltZVBpY2tlclwiLCAoKSA9PiB7XG4gIGJlZm9yZUFsbCgoKSA9PiB7XG4gICAgamVzdC51c2VGYWtlVGltZXJzKClcbiAgfSlcblxuICBhZnRlckFsbCgoKSA9PiB7XG4gICAgamVzdC51c2VSZWFsVGltZXJzKClcbiAgfSlcblxuICBpdChcIuaYr+WQpuato+ehrua4suafk1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IFRlc3RSZW5kZXJlci5jcmVhdGUoPFRpbWVQaWNrZXIgLz4pXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG5cbiAgaXQoXCLlkITnp43mg4XlhrXlv6vnhafmoLjlr7lcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIwID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcbiAgICAgIDxUaW1lUGlja2VyIHNpemU9XCJtaW5pXCIgdGhlbWU9XCJsaWdodFwiIG9ubHlIb3VyIGRpc2FibGVkIC8+XG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyMCkudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIui+k+WFpeS6i+S7tlwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUaW1lUGlja2VyIC8+KVxuICAgIGNvbnN0IGlucHV0ID0gd3JhcHBlci5maW5kKFwiaW5wdXRcIilcbiAgICBpbnB1dC5zaW11bGF0ZShcImZvY3VzXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIlBvcG92ZXJcIikucHJvcHMoKS52aXNpYmxlKS50b0VxdWFsKHRydWUpXG4gICAgaW5wdXQuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiIFwiIH0gfSlcbiAgICBpbnB1dC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIxNjowN1wiIH0gfSlcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiSW5wdXRcIikucHJvcHMoKS52YWx1ZSkudG9FcXVhbChcIjE2OjA3XCIpXG4gICAgaW5wdXQuc2ltdWxhdGUoXCJrZXlkb3duXCIsIHsga2V5Q29kZTogMTMgfSlcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiUG9wb3ZlclwiKS5wcm9wcygpLnZpc2libGUpLnRvRXF1YWwoZmFsc2UpXG4gIH0pXG5cbiAgaXQoXCLngrnlh7vkuovku7ZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VGltZVBpY2tlclRlc3QgLz4pXG5cbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiUG9wb3ZlclwiKS5wcm9wcygpLnZpc2libGUpLnRvRXF1YWwoZmFsc2UpXG5cbiAgICB3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5zaW11bGF0ZShcImZvY3VzXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIlBvcG92ZXJcIikucHJvcHMoKS52aXNpYmxlKS50b0VxdWFsKHRydWUpXG5cbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLXRpbWUtaXRlbVwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIGplc3QuYWR2YW5jZVRpbWVyc0J5VGltZSg1MClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJJbnB1dFwiKS5wcm9wcygpLnZhbHVlKS50b0VxdWFsKFwiMDg6NDBcIilcblxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLXRpbWUtaXRlbVwiKVxuICAgICAgICAuYXQoNDIpXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgICBqZXN0LmFkdmFuY2VUaW1lcnNCeVRpbWUoNTApXG4gICAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiSW5wdXRcIikucHJvcHMoKS52YWx1ZSkudG9FcXVhbChcIjA4OjQwXCIpXG5cbiAgICAgIHdyYXBwZXIuZmluZChcImlucHV0XCIpLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjA3OjQwXCIgfSB9KVxuICAgICAgd3JhcHBlci5maW5kKFwiaW5wdXRcIikuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMDg6NFwiIH0gfSlcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJJbnB1dFwiKS5wcm9wcygpLnZhbHVlKS50b0VxdWFsKFwiMDg6NDBcIilcbiAgICB9KVxuXG4gICAgLy8gYWN0KCgpID0+IHtcbiAgICAvLyAgIHdyYXBwZXJcbiAgICAvLyAgICAgLmZpbmQoXCIuYWR1aS10aW1lLWl0ZW1cIilcbiAgICAvLyAgICAgLmF0KDEpXG4gICAgLy8gICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgLy8gICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgLy8gICBqZXN0LmFkdmFuY2VUaW1lcnNCeVRpbWUoMzUwKVxuICAgIC8vICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIklucHV0XCIpLnByb3BzKCkudmFsdWUpLnRvRXF1YWwoXCIwOToyMFwiKVxuICAgIC8vICAgZG9uZSgpXG4gICAgLy8gfSlcblxuICAgIC8vIGFjdCgoKSA9PiB7XG4gICAgLy8gICB3cmFwcGVyXG4gICAgLy8gICAgIC5maW5kKFwiLmFkdWktdGltZS1pdGVtXCIpXG4gICAgLy8gICAgIC5hdCgxKVxuICAgIC8vICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIC8vICAgd3JhcHBlci51cGRhdGUoKVxuICAgIC8vICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIklucHV0XCIpLnByb3BzKCkudmFsdWUpLnRvRXF1YWwoXCIwOToyMFwiKVxuICAgIC8vIH0pXG5cbiAgICAvLyBhY3QoKCkgPT4ge1xuICAgIC8vICAgd3JhcHBlclxuICAgIC8vICAgICAuZmluZChcIi5hZHVpLXRpbWUtaXRlbVwiKVxuICAgIC8vICAgICAuYXQoMClcbiAgICAvLyAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAvLyAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAvLyAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJJbnB1dFwiKS5wcm9wcygpLnZhbHVlKS50b0VxdWFsKFwiMDg6NDBcIilcbiAgICAvLyB9KVxuICB9KVxuXG4gIGl0KFwi5YaF6YOo6amx5YqoXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRpbWVQaWNrZXIgZGVmYXVsdFZhbHVlPVwiMDk6MjBcIiAvPilcbiAgICBjb25zdCBpbnB1dCA9IHdyYXBwZXIuZmluZChcImlucHV0XCIpXG4gICAgaW5wdXQuc2ltdWxhdGUoXCJmb2N1c1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJQb3BvdmVyXCIpLnByb3BzKCkudmlzaWJsZSkudG9FcXVhbCh0cnVlKVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiLmFkdWktdGltZS1pdGVtXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIklucHV0XCIpLnByb3BzKCkudmFsdWUpLnRvRXF1YWwoXCIwMDoyMFwiKVxuICB9KVxuXG4gIGl0KFwi5aSW6YOo5o6n5Yi2XCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRpbWVQaWNrZXIgdmFsdWU9XCIwOTowMFwiIG9ubHlIb3VyIC8+KVxuICAgIGNvbnN0IGlucHV0ID0gd3JhcHBlci5maW5kKFwiaW5wdXRcIilcbiAgICBpbnB1dC5zaW11bGF0ZShcImZvY3VzXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIlBvcG92ZXJcIikucHJvcHMoKS52aXNpYmxlKS50b0VxdWFsKHRydWUpXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCIuYWR1aS10aW1lLWl0ZW1cIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiSW5wdXRcIikucHJvcHMoKS52YWx1ZSkudG9FcXVhbChcIjA5OjAwXCIpXG4gIH0pXG5cbiAgaXQoXCLmtYvor5XnpoHnlKhcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VGltZVBpY2tlciBkaXNhYmxlZCAvPilcbiAgICBjb25zdCBpbnB1dCA9IHdyYXBwZXIuZmluZChcImlucHV0XCIpXG4gICAgaW5wdXQuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJQb3BvdmVyXCIpLnByb3BzKCkudmlzaWJsZSkudG9FcXVhbChmYWxzZSlcbiAgfSlcblxuICBpdChcIua1i+ivleacgOWkp+aXtumXtOWSjOacgOWwj+aXtumXtFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFRpbWVQaWNrZXIgbWluVGltZT1cIjA5OjAwXCIgbWF4VGltZT1cIjA5OjIwXCIgZGVmYXVsdFZhbHVlPVwiMDk6MTBcIiAvPlxuICAgIClcbiAgICBjb25zdCBpbnB1dCA9IHdyYXBwZXIuZmluZChcImlucHV0XCIpXG4gICAgaW5wdXQuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMDk6MzBcIiB9IH0pXG4gICAgaW5wdXQuc2ltdWxhdGUoXCJmb2N1c1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJQb3BvdmVyXCIpLnByb3BzKCkudmlzaWJsZSkudG9FcXVhbCh0cnVlKVxuICB9KVxufSlcbiJdfQ==