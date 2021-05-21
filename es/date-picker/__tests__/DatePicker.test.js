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
import DatePicker from "..";
import { convertDateToString } from "../core";
import { act } from "react-dom/test-utils";

var DatePickerMounter = function (_Component) {
  _inherits(DatePickerMounter, _Component);

  var _super = _createSuper(DatePickerMounter);

  function DatePickerMounter() {
    var _this;

    _classCallCheck(this, DatePickerMounter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      component: null,
      value: new Date(),
      visible: true
    };
    return _this;
  }

  _createClass(DatePickerMounter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          value = _this$state.value,
          visible = _this$state.visible;
      return React.createElement(DatePicker, _extends({
        shortcuts: [{
          label: "祖国生日",
          value: new Date("2020-10-01")
        }],
        ref: function ref(component) {
          if (!_this2.state.component) {
            _this2.setState({
              component: component
            });
          }
        },
        closeOnSelect: true,
        value: value,
        visible: visible,
        onChange: function onChange(val) {
          return _this2.setState({
            value: val
          });
        },
        onVisibleChange: function onVisibleChange(bool) {
          return _this2.setState({
            visible: bool
          });
        }
      }, this.props));
    }
  }]);

  return DatePickerMounter;
}(Component);

describe("DatePicker", function () {
  beforeAll(function () {
    jest.useFakeTimers();
  });
  afterAll(function () {
    jest.useRealTimers();
  });
  it("是否正确渲染", function () {
    var wrapper = TestRenderer.create(React.createElement(DatePicker, null));
    expect(wrapper).toMatchSnapshot();
  });
  it("内部驱动", function () {
    var val = new Date();
    var wrapper = mount(React.createElement(DatePicker, {
      defaultValue: val,
      defaultVisible: false,
      closeOnSelect: true
    }));
    expect(wrapper.find("input").at(0).props().value).toBe(convertDateToString(val));
    wrapper.find("input").simulate("focus");
    expect(wrapper.find("Popover").at(0).props().visible).toBe(true);
    wrapper.find("input").simulate("change", {
      target: {
        value: ""
      }
    });
    expect(wrapper.find("input").props().value).toBe("");
    wrapper.find("input").simulate("change", {
      target: {
        value: "2020-02-22"
      }
    });
    expect(wrapper.find("input").props().value).toBe("2020-02-22");
    act(function () {
      wrapper.find("input").simulate("keydown", {
        key: "enter",
        keyCode: 13
      });
      jest.runAllTimers();
      wrapper.update();
      expect(wrapper.find("Popover").at(0).props().visible).toBe(false);
    });
    act(function () {
      wrapper.find(".adui-date-day").at(14).simulate("click");
      var expectedVal = convertDateToString(new Date(wrapper.find(".adui-date-day").at(14).props()["aria-label"]));
      jest.advanceTimersByTime(350);
      wrapper.update();
      expect(wrapper.find("input").at(0).props().value).toBe(expectedVal);
      expect(wrapper.find("Popover").at(0).props().visible).toBe(false);
    });
  });
  it("外部控制", function () {
    var val = new Date();
    var wrapper = mount(React.createElement(DatePicker, {
      value: new Date(),
      visible: true,
      closeOnSelect: true
    }));
    expect(wrapper.find("input").at(0).props().value).toBe(convertDateToString(val));
    expect(wrapper.find("Popover").at(0).props().visible).toBe(true);
    act(function () {
      wrapper.find(".adui-date-day").at(14).simulate("click");
      jest.advanceTimersByTime(350);
      wrapper.update();
      expect(wrapper.find("input").at(0).props().value).toBe(convertDateToString(val));
    });
    act(function () {
      wrapper.find(".adui-date-day").at(15).simulate("click");
      jest.advanceTimersByTime(350);
      wrapper.update();
      expect(wrapper.find("input").at(0).props().value).toBe(convertDateToString(val));
      expect(wrapper.find("Popover").at(0).props().visible).toBe(true);
    });
    var mounter = mount(React.createElement(DatePickerMounter, null));
    var today = convertDateToString(new Date());
    mounter.find("input").simulate("change", {
      target: {
        value: "2020-02-22"
      }
    });
    expect(convertDateToString(mounter.state().value)).toBe("2020-02-22");
    mounter.find("input").simulate("change", {
      target: {
        value: "2020-02-31"
      }
    });
    expect(convertDateToString(mounter.state().value)).toBe("2020-02-22");
    mounter.find("input").simulate("change", {
      target: {
        value: ""
      }
    });
    expect(convertDateToString(mounter.state().value)).toBe("");
    expect(mounter.find("Popover").at(0).props().visible).toBe(true);
    act(function () {
      mounter.find(".adui-date-day").at(15).simulate("click");
      jest.runAllTimers();
      mounter.update();
      expect(mounter.find("Popover").at(0).props().visible).toBe(false);
    });
  });
  it("DayPicker 操作", function () {
    var today = new Date();
    var wrapper = mount(React.createElement(DatePickerMounter, null));
    wrapper.find("button").at(0).simulate("click");
    act(function () {
      wrapper.find(".adui-date-day").at(15).simulate("click");
      jest.runAllTimers();
      wrapper.update();

      if (today.getFullYear() > wrapper.state().value.getFullYear()) {
        expect(today.getMonth() - wrapper.state().value.getMonth()).toBe(-11);
      } else {
        expect(today.getMonth() - wrapper.state().value.getMonth()).toBe(1);
      }
    });
    act(function () {
      wrapper.find(".adui-date-shortcut").at(0).simulate("click");
      jest.runAllTimers();
      wrapper.update();
      expect(convertDateToString(wrapper.state().value)).toBe("2020-10-01");
    });
    var wrapperForCoverage0 = mount(React.createElement(DatePickerMounter, {
      disabled: true
    }));
    wrapperForCoverage0.state().component.handleVisibleChange(false);
    jest.runAllTimers();
  });
  it("DayPicker 年月切换", function () {
    var wrapper = mount(React.createElement(DatePickerMounter, null));
    act(function () {
      wrapper.find("select").at(0).simulate("change", {
        target: {
          value: "2018"
        }
      });
      wrapper.find("select").at(1).simulate("change", {
        target: {
          value: "1"
        }
      });
      jest.runAllTimers();
      wrapper.update();
      wrapper.find(".adui-date-day").at(14).simulate("click");
      jest.runAllTimers();
      wrapper.update();
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvX190ZXN0c19fL0RhdGVQaWNrZXIudGVzdC50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJtb3VudCIsIlRlc3RSZW5kZXJlciIsIkRhdGVQaWNrZXIiLCJjb252ZXJ0RGF0ZVRvU3RyaW5nIiwiYWN0IiwiRGF0ZVBpY2tlck1vdW50ZXIiLCJzdGF0ZSIsImNvbXBvbmVudCIsInZhbHVlIiwiRGF0ZSIsInZpc2libGUiLCJsYWJlbCIsInNldFN0YXRlIiwidmFsIiwiYm9vbCIsInByb3BzIiwiZGVzY3JpYmUiLCJiZWZvcmVBbGwiLCJqZXN0IiwidXNlRmFrZVRpbWVycyIsImFmdGVyQWxsIiwidXNlUmVhbFRpbWVycyIsIml0Iiwid3JhcHBlciIsImNyZWF0ZSIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCIsImZpbmQiLCJhdCIsInRvQmUiLCJzaW11bGF0ZSIsInRhcmdldCIsImtleSIsImtleUNvZGUiLCJydW5BbGxUaW1lcnMiLCJ1cGRhdGUiLCJleHBlY3RlZFZhbCIsImFkdmFuY2VUaW1lcnNCeVRpbWUiLCJtb3VudGVyIiwidG9kYXkiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwid3JhcHBlckZvckNvdmVyYWdlMCIsImhhbmRsZVZpc2libGVDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixRQUF0QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIscUJBQXpCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixJQUF2QjtBQUNBLFNBQVNDLG1CQUFULFFBQW9DLFNBQXBDO0FBQ0EsU0FBU0MsR0FBVCxRQUFvQixzQkFBcEI7O0lBRU1DLGlCOzs7Ozs7Ozs7Ozs7Ozs7VUFDSkMsSyxHQUFRO0FBQ05DLE1BQUFBLFNBQVMsRUFBRSxJQURMO0FB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WSxRQUhaLEVBR3NCO0FBQUVDLFFBQUFBLE1BQU0sRUFBRTtBQUFFdkIsVUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBVixPQUh0QjtBQUlBVSxNQUFBQSxJQUFJLENBQUNnQixZQUFMO0FBQ0FYLE1BQUFBLE9BQU8sQ0FBQ1ksTUFBUjtBQUNBWixNQUFBQSxPQUFPLENBQ0pJLElBREgsQ0FDUSxnQkFEUixFQUVHQyxFQUZILENBRU0sRUFGTixFQUdHRSxRQUhILENBR1ksT0FIWjtBQUlBWixNQUFBQSxJQUFJLENBQUNnQixZQUFMO0FBQ0FYLE1BQUFBLE9BQU8sQ0FBQ1ksTUFBUjtBQUNELEtBakJFLENBQUg7QUFrQkQsR0FwQkMsQ0FBRjtBQXFCRCxDQWhQTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IG1vdW50IH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gXCJyZWFjdC10ZXN0LXJlbmRlcmVyXCJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCIuLlwiXG5pbXBvcnQgeyBjb252ZXJ0RGF0ZVRvU3RyaW5nIH0gZnJvbSBcIi4uL2NvcmVcIlxuaW1wb3J0IHsgYWN0IH0gZnJvbSBcInJlYWN0LWRvbS90ZXN0LXV0aWxzXCJcblxuY2xhc3MgRGF0ZVBpY2tlck1vdW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgdmFsdWU6IG5ldyBEYXRlKCksXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlLCB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgIHNob3J0Y3V0cz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcIuelluWbveeUn+aXpVwiLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKFwiMjAyMC0xMC0wMVwiKSxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICByZWY9e2NvbXBvbmVudCA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBvbmVudCB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgY2xvc2VPblNlbGVjdFxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgIG9uQ2hhbmdlPXt2YWwgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWwgfSl9XG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZT17Ym9vbCA9PiB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogYm9vbCB9KX1cbiAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5kZXNjcmliZShcIkRhdGVQaWNrZXJcIiwgKCkgPT4ge1xuICBiZWZvcmVBbGwoKCkgPT4ge1xuICAgIGplc3QudXNlRmFrZVRpbWVycygpXG4gIH0pXG5cbiAgYWZ0ZXJBbGwoKCkgPT4ge1xuICAgIGplc3QudXNlUmVhbFRpbWVycygpXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKDxEYXRlUGlja2VyIC8+KVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxuXG4gIGl0KFwi5YaF6YOo6amx5YqoXCIsICgpID0+IHtcbiAgICBjb25zdCB2YWwgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPERhdGVQaWNrZXIgZGVmYXVsdFZhbHVlPXt2YWx9IGRlZmF1bHRWaXNpYmxlPXtmYWxzZX0gY2xvc2VPblNlbGVjdCAvPlxuICAgIClcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnZhbHVlXG4gICAgKS50b0JlKGNvbnZlcnREYXRlVG9TdHJpbmcodmFsKSlcblxuICAgIHdyYXBwZXIuZmluZChcImlucHV0XCIpLnNpbXVsYXRlKFwiZm9jdXNcIilcblxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJQb3BvdmVyXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS52aXNpYmxlXG4gICAgKS50b0JlKHRydWUpXG5cbiAgICB3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCJcIiB9IH0pXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcImlucHV0XCIpLnByb3BzKCkudmFsdWUpLnRvQmUoXCJcIilcblxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgIC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIyMDIwLTAyLTIyXCIgfSB9KVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5wcm9wcygpLnZhbHVlKS50b0JlKFwiMjAyMC0wMi0yMlwiKVxuXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIHdyYXBwZXIuZmluZChcImlucHV0XCIpLnNpbXVsYXRlKFwia2V5ZG93blwiLCB7IGtleTogXCJlbnRlclwiLCBrZXlDb2RlOiAxMyB9KVxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KFxuICAgICAgICB3cmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCJQb3BvdmVyXCIpXG4gICAgICAgICAgLmF0KDApXG4gICAgICAgICAgLnByb3BzKCkudmlzaWJsZVxuICAgICAgKS50b0JlKGZhbHNlKVxuICAgIH0pXG5cbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgIC5hdCgxNClcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIGNvbnN0IGV4cGVjdGVkVmFsID0gY29udmVydERhdGVUb1N0cmluZyhcbiAgICAgICAgbmV3IERhdGUoXG4gICAgICAgICAgd3JhcHBlclxuICAgICAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAgICAgLmF0KDE0KVxuICAgICAgICAgICAgLnByb3BzKClbXCJhcmlhLWxhYmVsXCJdXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIC8vIOetieW+hSAzNTBtc1xuICAgICAgamVzdC5hZHZhbmNlVGltZXJzQnlUaW1lKDM1MClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAgIGV4cGVjdChcbiAgICAgICAgd3JhcHBlclxuICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgICAgICAuYXQoMClcbiAgICAgICAgICAucHJvcHMoKS52YWx1ZVxuICAgICAgKS50b0JlKGV4cGVjdGVkVmFsKVxuICAgICAgZXhwZWN0KFxuICAgICAgICB3cmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCJQb3BvdmVyXCIpXG4gICAgICAgICAgLmF0KDApXG4gICAgICAgICAgLnByb3BzKCkudmlzaWJsZVxuICAgICAgKS50b0JlKGZhbHNlKVxuICAgIH0pXG4gIH0pXG5cbiAgaXQoXCLlpJbpg6jmjqfliLZcIiwgKCkgPT4ge1xuICAgIC8qKlxuICAgICAqIOS7peS4i+mDveaYr+mqjOivgeWklumDqOaOp+WItuaXtuWGhemDqOeahOWkseaViFxuICAgICAqL1xuICAgIGNvbnN0IHZhbCA9IG5ldyBEYXRlKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8RGF0ZVBpY2tlciB2YWx1ZT17bmV3IERhdGUoKX0gdmlzaWJsZSBjbG9zZU9uU2VsZWN0IC8+XG4gICAgKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKCkudmFsdWVcbiAgICApLnRvQmUoY29udmVydERhdGVUb1N0cmluZyh2YWwpKVxuXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIlBvcG92ZXJcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnZpc2libGVcbiAgICApLnRvQmUodHJ1ZSlcblxuICAgIGFjdCgoKSA9PiB7XG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgICAgLmF0KDE0KVxuICAgICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgICAgLy8g562J5b6FIDM1MG1zXG4gICAgICBqZXN0LmFkdmFuY2VUaW1lcnNCeVRpbWUoMzUwKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KFxuICAgICAgICB3cmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgICAgIC5hdCgwKVxuICAgICAgICAgIC5wcm9wcygpLnZhbHVlXG4gICAgICApLnRvQmUoY29udmVydERhdGVUb1N0cmluZyh2YWwpKVxuICAgIH0pXG5cbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgIC5hdCgxNSlcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIC8vIOetieW+hSAzNTBtc1xuICAgICAgamVzdC5hZHZhbmNlVGltZXJzQnlUaW1lKDM1MClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAgIGV4cGVjdChcbiAgICAgICAgd3JhcHBlclxuICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgICAgICAuYXQoMClcbiAgICAgICAgICAucHJvcHMoKS52YWx1ZVxuICAgICAgKS50b0JlKGNvbnZlcnREYXRlVG9TdHJpbmcodmFsKSlcbiAgICAgIGV4cGVjdChcbiAgICAgICAgd3JhcHBlclxuICAgICAgICAgIC5maW5kKFwiUG9wb3ZlclwiKVxuICAgICAgICAgIC5hdCgwKVxuICAgICAgICAgIC5wcm9wcygpLnZpc2libGVcbiAgICAgICkudG9CZSh0cnVlKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiDku6XkuIvmmK/pqozor4HlpJbpg6jmjqfliLbml7YgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIOeahOacieaViFxuICAgICAqL1xuICAgIGNvbnN0IG1vdW50ZXIgPSBtb3VudCg8RGF0ZVBpY2tlck1vdW50ZXIgLz4pXG4gICAgY29uc3QgdG9kYXkgPSBjb252ZXJ0RGF0ZVRvU3RyaW5nKG5ldyBEYXRlKCkpXG4gICAgbW91bnRlclxuICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjIwMjAtMDItMjJcIiB9IH0pXG4gICAgZXhwZWN0KGNvbnZlcnREYXRlVG9TdHJpbmcobW91bnRlci5zdGF0ZSgpLnZhbHVlKSkudG9CZShcIjIwMjAtMDItMjJcIilcbiAgICBtb3VudGVyXG4gICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMjAyMC0wMi0zMVwiIH0gfSlcbiAgICBleHBlY3QoY29udmVydERhdGVUb1N0cmluZyhtb3VudGVyLnN0YXRlKCkudmFsdWUpKS50b0JlKFwiMjAyMC0wMi0yMlwiKVxuICAgIG1vdW50ZXIuZmluZChcImlucHV0XCIpLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIlwiIH0gfSlcbiAgICBleHBlY3QoY29udmVydERhdGVUb1N0cmluZyhtb3VudGVyLnN0YXRlKCkudmFsdWUpKS50b0JlKFwiXCIpXG4gICAgZXhwZWN0KFxuICAgICAgbW91bnRlclxuICAgICAgICAuZmluZChcIlBvcG92ZXJcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnZpc2libGVcbiAgICApLnRvQmUodHJ1ZSlcbiAgICBhY3QoKCkgPT4ge1xuICAgICAgbW91bnRlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgIC5hdCgxNSlcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIG1vdW50ZXIudXBkYXRlKClcbiAgICAgIGV4cGVjdChcbiAgICAgICAgbW91bnRlclxuICAgICAgICAgIC5maW5kKFwiUG9wb3ZlclwiKVxuICAgICAgICAgIC5hdCgwKVxuICAgICAgICAgIC5wcm9wcygpLnZpc2libGVcbiAgICAgICkudG9CZShmYWxzZSlcbiAgICB9KVxuICB9KVxuXG4gIGl0KFwiRGF5UGlja2VyIOaTjeS9nFwiLCAoKSA9PiB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxEYXRlUGlja2VyTW91bnRlciAvPilcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcImJ1dHRvblwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGFjdCgoKSA9PiB7XG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgICAgLmF0KDE1KVxuICAgICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgaWYgKHRvZGF5LmdldEZ1bGxZZWFyKCkgPiB3cmFwcGVyLnN0YXRlKCkudmFsdWUuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICBleHBlY3QodG9kYXkuZ2V0TW9udGgoKSAtIHdyYXBwZXIuc3RhdGUoKS52YWx1ZS5nZXRNb250aCgpKS50b0JlKC0xMSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV4cGVjdCh0b2RheS5nZXRNb250aCgpIC0gd3JhcHBlci5zdGF0ZSgpLnZhbHVlLmdldE1vbnRoKCkpLnRvQmUoMSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLXNob3J0Y3V0XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KGNvbnZlcnREYXRlVG9TdHJpbmcod3JhcHBlci5zdGF0ZSgpLnZhbHVlKSkudG9CZShcIjIwMjAtMTAtMDFcIilcbiAgICB9KVxuXG4gICAgY29uc3Qgd3JhcHBlckZvckNvdmVyYWdlMCA9IG1vdW50KDxEYXRlUGlja2VyTW91bnRlciBkaXNhYmxlZCAvPilcbiAgICB3cmFwcGVyRm9yQ292ZXJhZ2UwLnN0YXRlKCkuY29tcG9uZW50LmhhbmRsZVZpc2libGVDaGFuZ2UoZmFsc2UpXG4gICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICB9KVxuXG4gIGl0KFwiRGF5UGlja2VyIOW5tOaciOWIh+aNolwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxEYXRlUGlja2VyTW91bnRlciAvPilcbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcInNlbGVjdFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjIwMThcIiB9IH0pXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwic2VsZWN0XCIpXG4gICAgICAgIC5hdCgxKVxuICAgICAgICAuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMVwiIH0gfSlcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAuYXQoMTQpXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgfSlcbiAgfSlcbn0pXG4iXX0=