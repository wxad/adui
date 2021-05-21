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
import { act } from "react-dom/test-utils";
import keyCode from "rc-util/lib/KeyCode";
import ColorPicker from "..";

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
    Element.prototype.getBoundingClientRect = jest.fn(function () {
      return {
        width: 160,
        height: 90,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0,
        toJSON: function toJSON() {}
      };
    });
  });
  afterAll(function () {
    jest.useRealTimers();
  });
  it("其他事件验证", function () {
    var onFinishChange = jest.fn();
    var wrapper = mount(React.createElement(ColorPicker, {
      defaultValue: "#07C160",
      onFinishChange: onFinishChange,
      recentColors: ["#00BB9C"]
    }));
    var input = wrapper.find("input").at(0);
    input.simulate("change", {
      target: {
        value: "11"
      }
    });
    expect(wrapper.find("input").at(0).props().value).toBe("11");
    input.simulate("blur");
    expect(wrapper.find("input").at(0).props().value).toBe("07C160");
    input.simulate("change", {
      target: {
        value: "00BB9C"
      }
    });
    input.simulate("blur");
    expect(onFinishChange).toHaveBeenCalledWith("#00BB9C");
    wrapper.find("button").simulate("click");
    wrapper.find(".adui-cp-recent i").at(0).simulate("click");
    wrapper.find(".adui-cp-standard i").at(11).simulate("click");
    wrapper.find("button").simulate("click");
    jest.advanceTimersByTime(200);
    expect(onFinishChange).toHaveBeenCalledWith("#5BDEC8");
    wrapper.find("button").simulate("click");
    jest.advanceTimersByTime(350);
    var head0 = wrapper.find(".adui-cp-collapse-header").at(0);
    var head1 = wrapper.find(".adui-cp-collapse-header").at(1);
    var head2 = wrapper.find(".adui-cp-collapse-header").at(2);
    expect(wrapper.find(".adui-cp-collapse-content")).toHaveLength(2);
    head0.simulate("click");
    head2.simulate("click");
    head1.simulate("click");
    head2.simulate("click");
    wrapper.find("Slider").at(0).simulate("focus");
    wrapper.find("Slider").at(0).find(".adui-slider-handle").at(0).simulate("keyDown", {
      keyCode: keyCode.RIGHT
    });
    expect(wrapper.find(".adui-cp").at(0).props()["data-value"]).toBe("#5BDECA");
    wrapper.find("Slider").at(1).simulate("focus");
    wrapper.find("Slider").at(1).find(".adui-slider-handle").at(0).simulate("keyDown", {
      keyCode: keyCode.RIGHT
    });
    expect(wrapper.find(".adui-cp").at(0).props()["data-value"]).toBe("#59DECA");
    wrapper.find("Slider").at(2).simulate("focus");
    wrapper.find("Slider").at(2).find(".adui-slider-handle").at(0).simulate("keyDown", {
      keyCode: keyCode.RIGHT
    });
    expect(wrapper.find(".adui-cp").at(0).props()["data-value"]).toBe("#5AE0CC");
    var map = {};
    window.addEventListener = jest.fn(function (event, cb) {
      map[event] = cb;
    });
    var classWrapper = mount(React.createElement(ColorPickerMounter, null));
    classWrapper.find("button").simulate("click");
    jest.advanceTimersByTime(10);
    act(function () {
      classWrapper.find(".adui-cp-collapse-header").at(1).simulate("click");
      jest.runAllTimers();
      classWrapper.update();
    });
    act(function () {
      classWrapper.find(".adui-cp-palette").at(0).simulate("mouseDown");
      map.mousemove({});
      map.mousemove({
        pageX: 10000,
        pageY: 0
      });
      jest.runAllTimers();
      classWrapper.update();
      expect(classWrapper.find(".adui-cp").at(0).props()["data-s"]).toBe(100);
      map.mousemove({
        pageX: -10000,
        pageY: 0
      });
      jest.runAllTimers();
      classWrapper.update();
      expect(classWrapper.find(".adui-cp").at(0).props()["data-s"]).toBe(0);
      map.mousemove({
        pageY: 10000,
        pageX: 0
      });
      jest.runAllTimers();
      classWrapper.update();
      expect(classWrapper.find(".adui-cp").at(0).props()["data-b"]).toBe(0);
      map.mousemove({
        pageY: -10000,
        pageX: 0
      });
      jest.runAllTimers();
      classWrapper.update();
      expect(classWrapper.find(".adui-cp").at(0).props()["data-b"]).toBe(100);
      map.mouseup({});
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvY29sb3ItcGlja2VyL19fdGVzdHNfXy9ldmVudHMudGVzdC50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJtb3VudCIsImFjdCIsImtleUNvZGUiLCJDb2xvclBpY2tlciIsIkNvbG9yUGlja2VyTW91bnRlciIsInN0YXRlIiwidmFsdWUiLCJ2YWwiLCJzZXRTdGF0ZSIsInByb3BzIiwiZGVzY3JpYmUiLCJiZWZvcmVBbGwiLCJqZXN0IiwidXNlRmFrZVRpbWVycyIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJmbiIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwieCIsInkiLCJ0b0pTT04iLCJhZnRlckFsbCIsInVzZVJlYWxUaW1lcnMiLCJpdCIsIm9uRmluaXNoQ2hhbmdlIiwid3JhcHBlciIsImlucHV0IiwiZmluZCIsImF0Iiwic2ltdWxhdGUiLCJ0YXJnZXQiLCJleHBlY3QiLCJ0b0JlIiwidG9IYXZlQmVlbkNhbGxlZFdpdGgiLCJhZHZhbmNlVGltZXJzQnlUaW1lIiwiaGVhZDAiLCJoZWFkMSIsImhlYWQyIiwidG9IYXZlTGVuZ3RoIiwiUklHSFQiLCJtYXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjYiIsImNsYXNzV3JhcHBlciIsInJ1bkFsbFRpbWVycyIsInVwZGF0ZSIsIm1vdXNlbW92ZSIsInBhZ2VYIiwicGFnZVkiLCJtb3VzZXVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLFNBQVNDLEtBQVQsUUFBc0IsUUFBdEI7QUFDQSxTQUFTQyxHQUFULFFBQW9CLHNCQUFwQjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IscUJBQXBCO0FBQ0EsT0FBT0MsV0FBUCxNQUF3QixJQUF4Qjs7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Q0FBQ1EsU0FBSixDQUFjO0FBQUVFLFFBQUFBLEtBQUssRUFBRSxDQUFDLEtBQVY7QUFBaUJELFFBQUFBLEtBQUssRUFBRTtBQUF4QixPQUFkO0FBQ0EzQyxNQUFBQSxJQUFJLENBQUN3QyxZQUFMO0FBQ0FELE1BQUFBLFlBQVksQ0FBQ0UsTUFBYjtBQUNBaEIsTUFBQUEsTUFBTSxDQUNKYyxZQUFZLENBQ1RsQixJQURILENBQ1EsVUFEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHekIsS0FISCxHQUdXLFFBSFgsQ0FESSxDQUFOLENBS0U2QixJQUxGLENBS08sR0FMUDtBQU9BUSxNQUFBQSxHQUFHLENBQUNXLE9BQUosQ0FBWSxFQUFaO0FBQ0QsS0FuREUsQ0FBSDtBQW9ERCxHQXBMQyxDQUFGO0FBcUxELENBaE5PLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBtb3VudCB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IHsgYWN0IH0gZnJvbSBcInJlYWN0LWRvbS90ZXN0LXV0aWxzXCJcbmltcG9ydCBrZXlDb2RlIGZyb20gXCJyYy11dGlsL2xpYi9LZXlDb2RlXCJcbmltcG9ydCBDb2xvclBpY2tlciBmcm9tIFwiLi5cIlxuXG5jbGFzcyBDb2xvclBpY2tlck1vdW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogXCIjMDdDMTYwXCIsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17dmFsID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFsIH0pfVxuICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmRlc2NyaWJlKFwiQ29sb3JQaWNrZXJcIiwgKCkgPT4ge1xuICBiZWZvcmVBbGwoKCkgPT4ge1xuICAgIGplc3QudXNlRmFrZVRpbWVycygpXG5cbiAgICAvKipcbiAgICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDAwMDY2NjNcbiAgICAgKiDpgJrov4cgbW9jayBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YO+8jOS5i+WQjui/kOihjOeahOaJgOaciSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCDpg73kvJrov5Tlm57ov5nlkIzkuIDkuKrlgLzjgIJcbiAgICAgKi9cbiAgICBFbGVtZW50LnByb3RvdHlwZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPSBqZXN0LmZuKCgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiAxNjAsXG4gICAgICAgIGhlaWdodDogOTAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgdG9KU09OOiAoKSA9PiB7fSxcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGFmdGVyQWxsKCgpID0+IHtcbiAgICBqZXN0LnVzZVJlYWxUaW1lcnMoKVxuICB9KVxuXG4gIGl0KFwi5YW25LuW5LqL5Lu26aqM6K+BXCIsICgpID0+IHtcbiAgICBjb25zdCBvbkZpbmlzaENoYW5nZSA9IGplc3QuZm4oKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICBkZWZhdWx0VmFsdWU9XCIjMDdDMTYwXCJcbiAgICAgICAgb25GaW5pc2hDaGFuZ2U9e29uRmluaXNoQ2hhbmdlfVxuICAgICAgICByZWNlbnRDb2xvcnM9e1tcIiMwMEJCOUNcIl19XG4gICAgICAvPlxuICAgIClcbiAgICBjb25zdCBpbnB1dCA9IHdyYXBwZXIuZmluZChcImlucHV0XCIpLmF0KDApXG5cbiAgICAvLyDpqozor4EgaW5wdXQg5L+u5pS55Li66Z2e5rOV5YC85ZCO77yM5ZyoIGJsdXIg5pe25Lya6YeN572uXG4gICAgaW5wdXQuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMTFcIiB9IH0pXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS52YWx1ZVxuICAgICkudG9CZShcIjExXCIpXG4gICAgaW5wdXQuc2ltdWxhdGUoXCJibHVyXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS52YWx1ZVxuICAgICkudG9CZShcIjA3QzE2MFwiKVxuXG4gICAgaW5wdXQuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMDBCQjlDXCIgfSB9KVxuICAgIGlucHV0LnNpbXVsYXRlKFwiYmx1clwiKVxuICAgIGV4cGVjdChvbkZpbmlzaENoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoXCIjMDBCQjlDXCIpXG5cbiAgICB3cmFwcGVyLmZpbmQoXCJidXR0b25cIikuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiLmFkdWktY3AtcmVjZW50IGlcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIi5hZHVpLWNwLXN0YW5kYXJkIGlcIilcbiAgICAgIC5hdCgxMSlcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgd3JhcHBlci5maW5kKFwiYnV0dG9uXCIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAvLyDnrYnlvoUgMjAwbXNcbiAgICBqZXN0LmFkdmFuY2VUaW1lcnNCeVRpbWUoMjAwKVxuICAgIGV4cGVjdChvbkZpbmlzaENoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoXCIjNUJERUM4XCIpXG5cbiAgICAvLyDmtYvor5UgQ29sbGFwc2VcbiAgICB3cmFwcGVyLmZpbmQoXCJidXR0b25cIikuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIC8vIOetieW+hSAzNTBtc1xuICAgIGplc3QuYWR2YW5jZVRpbWVyc0J5VGltZSgzNTApXG4gICAgY29uc3QgaGVhZDAgPSB3cmFwcGVyLmZpbmQoXCIuYWR1aS1jcC1jb2xsYXBzZS1oZWFkZXJcIikuYXQoMClcbiAgICBjb25zdCBoZWFkMSA9IHdyYXBwZXIuZmluZChcIi5hZHVpLWNwLWNvbGxhcHNlLWhlYWRlclwiKS5hdCgxKVxuICAgIGNvbnN0IGhlYWQyID0gd3JhcHBlci5maW5kKFwiLmFkdWktY3AtY29sbGFwc2UtaGVhZGVyXCIpLmF0KDIpXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIi5hZHVpLWNwLWNvbGxhcHNlLWNvbnRlbnRcIikpLnRvSGF2ZUxlbmd0aCgyKVxuICAgIGhlYWQwLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBoZWFkMi5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgaGVhZDEuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGhlYWQyLnNpbXVsYXRlKFwiY2xpY2tcIilcblxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiU2xpZGVyXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImZvY3VzXCIpXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCJTbGlkZXJcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLmZpbmQoXCIuYWR1aS1zbGlkZXItaGFuZGxlXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImtleURvd25cIiwgeyBrZXlDb2RlOiBrZXlDb2RlLlJJR0hUIH0pXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWNwXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtdmFsdWVcIl1cbiAgICApLnRvQmUoXCIjNUJERUNBXCIpXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCJTbGlkZXJcIilcbiAgICAgIC5hdCgxKVxuICAgICAgLnNpbXVsYXRlKFwiZm9jdXNcIilcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIlNsaWRlclwiKVxuICAgICAgLmF0KDEpXG4gICAgICAuZmluZChcIi5hZHVpLXNsaWRlci1oYW5kbGVcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwia2V5RG93blwiLCB7IGtleUNvZGU6IGtleUNvZGUuUklHSFQgfSlcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktY3BcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXVxuICAgICkudG9CZShcIiM1OURFQ0FcIilcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIlNsaWRlclwiKVxuICAgICAgLmF0KDIpXG4gICAgICAuc2ltdWxhdGUoXCJmb2N1c1wiKVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiU2xpZGVyXCIpXG4gICAgICAuYXQoMilcbiAgICAgIC5maW5kKFwiLmFkdWktc2xpZGVyLWhhbmRsZVwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJrZXlEb3duXCIsIHsga2V5Q29kZToga2V5Q29kZS5SSUdIVCB9KVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1jcFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdXG4gICAgKS50b0JlKFwiIzVBRTBDQ1wiKVxuXG4gICAgY29uc3QgbWFwID0ge31cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgPSBqZXN0LmZuKChldmVudCwgY2IpID0+IHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG1hcFtldmVudF0gPSBjYlxuICAgIH0pXG5cbiAgICBjb25zdCBjbGFzc1dyYXBwZXIgPSBtb3VudCg8Q29sb3JQaWNrZXJNb3VudGVyIC8+KVxuXG4gICAgY2xhc3NXcmFwcGVyLmZpbmQoXCJidXR0b25cIikuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGplc3QuYWR2YW5jZVRpbWVyc0J5VGltZSgxMClcblxuICAgIGFjdCgoKSA9PiB7XG4gICAgICBjbGFzc1dyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1jcC1jb2xsYXBzZS1oZWFkZXJcIilcbiAgICAgICAgLmF0KDEpXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICBjbGFzc1dyYXBwZXIudXBkYXRlKClcbiAgICB9KVxuXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIGNsYXNzV3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWNwLXBhbGV0dGVcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5zaW11bGF0ZShcIm1vdXNlRG93blwiKVxuXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBtYXAubW91c2Vtb3ZlKHt9KVxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgbWFwLm1vdXNlbW92ZSh7IHBhZ2VYOiAxMDAwMCwgcGFnZVk6IDAgfSlcblxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgY2xhc3NXcmFwcGVyLnVwZGF0ZSgpXG4gICAgICBleHBlY3QoXG4gICAgICAgIGNsYXNzV3JhcHBlclxuICAgICAgICAgIC5maW5kKFwiLmFkdWktY3BcIilcbiAgICAgICAgICAuYXQoMClcbiAgICAgICAgICAucHJvcHMoKVtcImRhdGEtc1wiXVxuICAgICAgKS50b0JlKDEwMClcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG1hcC5tb3VzZW1vdmUoeyBwYWdlWDogLTEwMDAwLCBwYWdlWTogMCB9KVxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgY2xhc3NXcmFwcGVyLnVwZGF0ZSgpXG4gICAgICBleHBlY3QoXG4gICAgICAgIGNsYXNzV3JhcHBlclxuICAgICAgICAgIC5maW5kKFwiLmFkdWktY3BcIilcbiAgICAgICAgICAuYXQoMClcbiAgICAgICAgICAucHJvcHMoKVtcImRhdGEtc1wiXVxuICAgICAgKS50b0JlKDApXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBtYXAubW91c2Vtb3ZlKHsgcGFnZVk6IDEwMDAwLCBwYWdlWDogMCB9KVxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgY2xhc3NXcmFwcGVyLnVwZGF0ZSgpXG4gICAgICBleHBlY3QoXG4gICAgICAgIGNsYXNzV3JhcHBlclxuICAgICAgICAgIC5maW5kKFwiLmFkdWktY3BcIilcbiAgICAgICAgICAuYXQoMClcbiAgICAgICAgICAucHJvcHMoKVtcImRhdGEtYlwiXVxuICAgICAgKS50b0JlKDApXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBtYXAubW91c2Vtb3ZlKHsgcGFnZVk6IC0xMDAwMCwgcGFnZVg6IDAgfSlcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIGNsYXNzV3JhcHBlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KFxuICAgICAgICBjbGFzc1dyYXBwZXJcbiAgICAgICAgICAuZmluZChcIi5hZHVpLWNwXCIpXG4gICAgICAgICAgLmF0KDApXG4gICAgICAgICAgLnByb3BzKClbXCJkYXRhLWJcIl1cbiAgICAgICkudG9CZSgxMDApXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBtYXAubW91c2V1cCh7fSlcbiAgICB9KVxuICB9KVxufSlcbiJdfQ==