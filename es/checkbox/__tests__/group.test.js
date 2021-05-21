function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from "react";
import TestRenderer from "react-test-renderer";
import { mount } from "enzyme";
import Checkbox from "..";
var Group = Checkbox.Group;

var GroupMounter = function GroupMounter() {
  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return React.createElement(Group, {
    value: value,
    onChange: setValue
  }, React.createElement(Checkbox, null, "children0"), React.createElement(Checkbox, null, "children1"));
};

describe("Checkbox", function () {
  it("Group 是否正确渲染", function () {
    var wrapper = TestRenderer.create(React.createElement(Group, null, React.createElement(Checkbox, null, "children0"), React.createElement(Checkbox, null, "children1")));
    expect(wrapper).toMatchSnapshot();
  });
  it("Group 是否能内部驱动", function () {
    var onChange = jest.fn();
    var wrapper0 = mount(React.createElement(Group, {
      onChange: onChange
    }, React.createElement(Checkbox, null, "children0"), React.createElement(Checkbox, null, "children1")));
    var wrapper1 = mount(React.createElement(Group, {
      defaultValue: ["children0"],
      onChange: onChange
    }, React.createElement(Checkbox, null, "children0"), React.createElement(Checkbox, null, "children1")));
    wrapper0.find("label").at(0).simulate("click");
    expect(onChange).toHaveBeenCalledWith(["children0"]);
    wrapper0.find("label").at(1).simulate("click");
    expect(onChange).toHaveBeenCalledWith(["children0", "children1"]);
    wrapper1.find("label").at(0).simulate("click");
    expect(onChange).toHaveBeenCalledWith([]);
    wrapper1.find("label").at(1).simulate("click");
    expect(onChange).toHaveBeenCalledWith(["children1"]);
  });
  it("Group 是否能外部控制", function () {
    var wrapper = mount(React.createElement(GroupMounter, null));
    wrapper.find("label").at(0).simulate("click");
    expect(wrapper.find("div").at(0).props()["data-value"]).toEqual(["children0"]);
  });
  it("Group 是否正确处理 value State", function () {
    var wrapper1 = mount(React.createElement(Group, {
      defaultValue: ["children0"]
    }, React.createElement(Checkbox, {
      disabled: true
    }, "children0"), React.createElement(Checkbox, {
      value: 27
    }, "children1"), React.createElement(Checkbox, {
      checked: true
    }, "children2"), React.createElement(Checkbox, {
      checked: true,
      value: 3
    }, "children3")));
    expect(wrapper1.find("div").at(0).props()["data-value"]).toEqual(["children0"]);
    wrapper1.find("label").at(3).simulate("click");
    expect(wrapper1.find("div").at(0).props()["data-value"]).toEqual(["children0", 3]);
    var wrapper2 = mount(React.createElement(Group, {
      defaultValue: [123],
      value: [27]
    }, React.createElement(Checkbox, {
      disabled: true,
      value: 123
    }, "children0"), React.createElement(Checkbox, {
      value: 27
    }, "children1"), React.createElement(Checkbox, {
      checked: true
    }, "children2"), React.createElement(Checkbox, {
      checked: true,
      value: 3
    }, "children3")));
    expect(wrapper2.find("div").at(0).props()["data-value"]).toEqual([27]);
    wrapper2.find("label").at(3).simulate("click");
    expect(wrapper2.find("div").at(0).props()["data-value"]).toEqual([27]);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvX190ZXN0c19fL2dyb3VwLnRlc3QudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiVGVzdFJlbmRlcmVyIiwibW91bnQiLCJDaGVja2JveCIsIkdyb3VwIiwiR3JvdXBNb3VudGVyIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGVzY3JpYmUiLCJpdCIsIndyYXBwZXIiLCJjcmVhdGUiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJvbkNoYW5nZSIsImplc3QiLCJmbiIsIndyYXBwZXIwIiwid3JhcHBlcjEiLCJmaW5kIiwiYXQiLCJzaW11bGF0ZSIsInRvSGF2ZUJlZW5DYWxsZWRXaXRoIiwicHJvcHMiLCJ0b0VxdWFsIiwid3JhcHBlcjIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIscUJBQXpCO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixRQUF0QjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsSUFBckI7SUFFUUMsSyxHQUFVRCxRLENBQVZDLEs7O0FBRVIsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBLHdCQUNDTCxLQUFLLENBQUNNLFFBQU4sQ0FBZSxFQUFmLENBREQ7QUFBQTtBQUFBLE1BQ2xCQyxLQURrQjtBQUFBLE1BQ1hDLFFBRFc7O0FBRXpCLFNBQ0Usb0JBQUMsS0FBRDtBQUFPLElBQUEsS0FBSyxFQUFFRCxLQUFkO0FBQXFCLElBQUEsUUFBUSxFQUFFQztBQUEvQixLQUNFLG9CQUFDLFFBQUQsb0JBREYsRUFFRSxvQkFBQyxRQUFELG9CQUZGLENBREY7QUFNRCxDQVJEOztBQVVBQyxRQUFRLENBQUMsVUFBRCxFQUFhLFlBQU07QUFDekJDLEVBQUFBLEVBQUUsQ0FBQyxjQUFELEVBQWlCLFlBQU07QUFDdkIsUUFBTUMsT0FBTyxHQUFHVixZQUFZLENBQUNXLE1BQWIs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LE9BQXpELENBQWlFLENBQUMsRUFBRCxDQUFqRTtBQUNBQyxJQUFBQSxRQUFRLENBQUNOLElBQVQsQ0FBYyxPQUFkLEVBQXVCQyxFQUF2QixDQUEwQixDQUExQixFQUE2QkMsUUFBN0IsQ0FBc0MsT0FBdEM7QUFDQVQsSUFBQUEsTUFBTSxDQUFDYSxRQUFRLENBQUNOLElBQVQsQ0FBYyxLQUFkLEVBQXFCQyxFQUFyQixDQUF3QixDQUF4QixFQUEyQkcsS0FBM0IsR0FBbUMsWUFBbkMsQ0FBRCxDQUFOLENBQXlEQyxPQUF6RCxDQUFpRSxDQUFDLEVBQUQsQ0FBakU7QUFDRCxHQXJDQyxDQUFGO0FBc0NELENBbEZPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tIFwicmVhY3QtdGVzdC1yZW5kZXJlclwiXG5pbXBvcnQgeyBtb3VudCB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuLlwiXG5cbmNvbnN0IHsgR3JvdXAgfSA9IENoZWNrYm94XG5cbmNvbnN0IEdyb3VwTW91bnRlciA9ICgpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShbXSlcbiAgcmV0dXJuIChcbiAgICA8R3JvdXAgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17c2V0VmFsdWV9PlxuICAgICAgPENoZWNrYm94PmNoaWxkcmVuMDwvQ2hlY2tib3g+XG4gICAgICA8Q2hlY2tib3g+Y2hpbGRyZW4xPC9DaGVja2JveD5cbiAgICA8L0dyb3VwPlxuICApXG59XG5cbmRlc2NyaWJlKFwiQ2hlY2tib3hcIiwgKCkgPT4ge1xuICBpdChcIkdyb3VwIOaYr+WQpuato+ehrua4suafk1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IFRlc3RSZW5kZXJlci5jcmVhdGUoXG4gICAgICA8R3JvdXA+XG4gICAgICAgIDxDaGVja2JveD5jaGlsZHJlbjA8L0NoZWNrYm94PlxuICAgICAgICA8Q2hlY2tib3g+Y2hpbGRyZW4xPC9DaGVja2JveD5cbiAgICAgIDwvR3JvdXA+XG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxuXG4gIGl0KFwiR3JvdXAg5piv5ZCm6IO95YaF6YOo6amx5YqoXCIsICgpID0+IHtcbiAgICBjb25zdCBvbkNoYW5nZSA9IGplc3QuZm4oKVxuICAgIGNvbnN0IHdyYXBwZXIwID0gbW91bnQoXG4gICAgICA8R3JvdXAgb25DaGFuZ2U9e29uQ2hhbmdlfT5cbiAgICAgICAgPENoZWNrYm94PmNoaWxkcmVuMDwvQ2hlY2tib3g+XG4gICAgICAgIDxDaGVja2JveD5jaGlsZHJlbjE8L0NoZWNrYm94PlxuICAgICAgPC9Hcm91cD5cbiAgICApXG4gICAgY29uc3Qgd3JhcHBlcjEgPSBtb3VudChcbiAgICAgIDxHcm91cCBkZWZhdWx0VmFsdWU9e1tcImNoaWxkcmVuMFwiXX0gb25DaGFuZ2U9e29uQ2hhbmdlfT5cbiAgICAgICAgPENoZWNrYm94PmNoaWxkcmVuMDwvQ2hlY2tib3g+XG4gICAgICAgIDxDaGVja2JveD5jaGlsZHJlbjE8L0NoZWNrYm94PlxuICAgICAgPC9Hcm91cD5cbiAgICApXG4gICAgd3JhcHBlcjAuZmluZChcImxhYmVsXCIpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFtcImNoaWxkcmVuMFwiXSlcbiAgICB3cmFwcGVyMC5maW5kKFwibGFiZWxcIikuYXQoMSkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvbkNoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoW1wiY2hpbGRyZW4wXCIsIFwiY2hpbGRyZW4xXCJdKVxuXG4gICAgd3JhcHBlcjEuZmluZChcImxhYmVsXCIpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFtdKVxuICAgIHdyYXBwZXIxLmZpbmQoXCJsYWJlbFwiKS5hdCgxKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChbXCJjaGlsZHJlbjFcIl0pXG4gIH0pXG5cbiAgaXQoXCJHcm91cCDmmK/lkKbog73lpJbpg6jmjqfliLZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8R3JvdXBNb3VudGVyIC8+KVxuICAgIHdyYXBwZXIuZmluZChcImxhYmVsXCIpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiZGl2XCIpLmF0KDApLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdKS50b0VxdWFsKFtcbiAgICAgIFwiY2hpbGRyZW4wXCIsXG4gICAgXSlcbiAgfSlcblxuICBpdChcIkdyb3VwIOaYr+WQpuato+ehruWkhOeQhiB2YWx1ZSBTdGF0ZVwiLCAoKSA9PiB7XG4gICAgLy8g56Gu5L+d5LyY5YWI5Yik5patIFByb3AgZGVmYXVsdFZhbHVl77yM5aaC5p6c5a2Y5Zyo6buY6K6k5YC877yM5YiZIEdyb3VwIOeKtuaAgeS4uuatpOm7mOiupOWAvFxuICAgIGNvbnN0IHdyYXBwZXIxID0gbW91bnQoXG4gICAgICA8R3JvdXAgZGVmYXVsdFZhbHVlPXtbXCJjaGlsZHJlbjBcIl19PlxuICAgICAgICA8Q2hlY2tib3ggZGlzYWJsZWQ+Y2hpbGRyZW4wPC9DaGVja2JveD5cbiAgICAgICAgPENoZWNrYm94IHZhbHVlPXsyN30+Y2hpbGRyZW4xPC9DaGVja2JveD5cbiAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ+Y2hpbGRyZW4yPC9DaGVja2JveD5cbiAgICAgICAgPENoZWNrYm94IGNoZWNrZWQgdmFsdWU9ezN9PlxuICAgICAgICAgIGNoaWxkcmVuM1xuICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgPC9Hcm91cD5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIxLmZpbmQoXCJkaXZcIikuYXQoMCkucHJvcHMoKVtcImRhdGEtdmFsdWVcIl0pLnRvRXF1YWwoW1xuICAgICAgXCJjaGlsZHJlbjBcIixcbiAgICBdKVxuICAgIHdyYXBwZXIxLmZpbmQoXCJsYWJlbFwiKS5hdCgzKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIxLmZpbmQoXCJkaXZcIikuYXQoMCkucHJvcHMoKVtcImRhdGEtdmFsdWVcIl0pLnRvRXF1YWwoW1xuICAgICAgXCJjaGlsZHJlbjBcIixcbiAgICAgIDMsXG4gICAgXSlcblxuICAgIC8vIOehruS/neacgOS8mOWFiOWIpOaWrSBQcm9wIHZhbHVl77yM5aaC5p6c5a2Y5ZyoIFByb3AgdmFsdWXvvIzliJkgR3JvdXAg5a6M5YWo5Lqk55Sx5aSW6YOo5o6n5Yi277yM5YaF6YOo54q25oCB5peg5pWI44CCXG4gICAgY29uc3Qgd3JhcHBlcjIgPSBtb3VudChcbiAgICAgIDxHcm91cCBkZWZhdWx0VmFsdWU9e1sxMjNdfSB2YWx1ZT17WzI3XX0+XG4gICAgICAgIDxDaGVja2JveCBkaXNhYmxlZCB2YWx1ZT17MTIzfT5cbiAgICAgICAgICBjaGlsZHJlbjBcbiAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgPENoZWNrYm94IHZhbHVlPXsyN30+Y2hpbGRyZW4xPC9DaGVja2JveD5cbiAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ+Y2hpbGRyZW4yPC9DaGVja2JveD5cbiAgICAgICAgPENoZWNrYm94IGNoZWNrZWQgdmFsdWU9ezN9PlxuICAgICAgICAgIGNoaWxkcmVuM1xuICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgPC9Hcm91cD5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIyLmZpbmQoXCJkaXZcIikuYXQoMCkucHJvcHMoKVtcImRhdGEtdmFsdWVcIl0pLnRvRXF1YWwoWzI3XSlcbiAgICB3cmFwcGVyMi5maW5kKFwibGFiZWxcIikuYXQoMykuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyMi5maW5kKFwiZGl2XCIpLmF0KDApLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdKS50b0VxdWFsKFsyN10pXG4gIH0pXG59KVxuIl19