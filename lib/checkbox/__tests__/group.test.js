"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Group = _["default"].Group;
describe("Checkbox", function () {
  it("Group 是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(Group, null, React.createElement(_["default"], null, "children0"), React.createElement(_["default"], null, "children1")));

    expect(wrapper).toMatchSnapshot();
  });
  it("Group 是否能内部驱动", function () {
    var onChange = jest.fn();
    var wrapper0 = (0, _enzyme.mount)(React.createElement(Group, {
      onChange: onChange
    }, React.createElement(_["default"], null, "children0"), React.createElement(_["default"], null, "children1")));
    var wrapper1 = (0, _enzyme.mount)(React.createElement(Group, {
      defaultValue: ["children0"],
      onChange: onChange
    }, React.createElement(_["default"], null, "children0"), React.createElement(_["default"], null, "children1")));
    wrapper0.find("label").at(0).simulate("click");
    expect(onChange).toHaveBeenCalledWith(["children0"]);
    wrapper0.find("label").at(1).simulate("click");
    expect(onChange).toHaveBeenCalledWith(["children0", "children1"]);
    wrapper1.find("label").at(0).simulate("click");
    expect(onChange).toHaveBeenCalledWith([]);
    wrapper1.find("label").at(1).simulate("click");
    expect(onChange).toHaveBeenCalledWith(["children1"]);
  });
  it("Group 是否正确处理 value State", function () {
    var wrapper1 = (0, _enzyme.mount)(React.createElement(Group, {
      defaultValue: ["children0"]
    }, React.createElement(_["default"], {
      disabled: true
    }, "children0"), React.createElement(_["default"], {
      value: 27
    }, "children1"), React.createElement(_["default"], {
      checked: true
    }, "children2"), React.createElement(_["default"], {
      checked: true,
      value: 3
    }, "children3")));
    expect(wrapper1.find("div").at(0).props()["data-value"]).toEqual(["children0"]);
    wrapper1.find("label").at(3).simulate("click");
    expect(wrapper1.find("div").at(0).props()["data-value"]).toEqual(["children0", 3]);
    var wrapper2 = (0, _enzyme.mount)(React.createElement(Group, {
      defaultValue: [123],
      value: [27]
    }, React.createElement(_["default"], {
      disabled: true,
      value: 123
    }, "children0"), React.createElement(_["default"], {
      value: 27
    }, "children1"), React.createElement(_["default"], {
      checked: true
    }, "children2"), React.createElement(_["default"], {
      checked: true,
      value: 3
    }, "children3")));
    expect(wrapper2.find("div").at(0).props()["data-value"]).toEqual([27]);
    wrapper2.find("label").at(3).simulate("click");
    expect(wrapper2.find("div").at(0).props()["data-value"]).toEqual([27]);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvX190ZXN0c19fL2dyb3VwLnRlc3QudHN4Il0sIm5hbWVzIjpbIkdyb3VwIiwiQ2hlY2tib3giLCJkZXNjcmliZSIsIml0Iiwid3JhcHBlciIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCIsIm9uQ2hhbmdlIiwiamVzdCIsImZuIiwid3JhcHBlcjAiLCJ3cmFwcGVyMSIsImZpbmQiLCJhdCIsInNpbXVsYXRlIiwidG9IYXZlQmVlbkNhbGxlZFdpdGgiLCJwcm9wcyIsInRvRXF1YWwiLCJ3cmFwcGVyMiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztJQUVRQSxLLEdBQVVDLFksQ0FBVkQsSztBQUVSRSxRQUFRLENBQUMsVUFBRCxFQUFhLFlBQU07QUFDekJDLEVBQUFBLEVBQUUsQ0FBQyxjQUFELEVBQWlCLFlBQU07QUFDdkIsUUFBTUMsT0FBTyxHQUFHQyw4QkFBYUMsTUFBYixDQUNkLG9CQUFDLEtBQUQsUUFDRSxvQkFBQyxZQUFELG9CQURGLEVBRUUsb0JBQUMsWUFBRCxvQkFGRixDQURjLENBQWhCOztBQU1BQyxJQUFBQSxNQUFNLENBQUNILE9BQUQsQ0FBTixDQUFnQkksZUFBaEI7QUFDRCxHQVJDLENBQUY7QUFVQUwsRUFBQUEsRUFBRSxDQUFDLGVBQUQsRUFBa0IsWUFBTTtBQUN4QixRQUFNTSxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsRUFBTCxFQUFqQjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxtQkFDZixvQkFBQyxLQUFEO0FBQU8sTUFBQSxRQUFRLEVBQUVIO0FBQWpCLE9BQ0Usb0JBQUMsWUFBRCxvQkFERixFQUVFLG9CQUFDLFlBQUQsb0JBRkYsQ0FEZSxDQUFqQjtBQU1BLFFBQU1JLFFBQVEsR0FBRyxtQkFDZixvQkFBQyxLQUFEO0FBQU8sTUFBQSxZQUFZLEVBQUUsQ0FBQyxXQUFELENBQXJCO0FBQW9DLE1B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S0FISCxHQUdXLFlBSFgsQ0FESSxDQUFOLENBS0VDLE9BTEYsQ0FLVSxDQUFDLEVBQUQsQ0FMVjtBQU1BQyxJQUFBQSxRQUFRLENBQ0xOLElBREgsQ0FDUSxPQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dDLFFBSEgsQ0FHWSxPQUhaO0FBSUFULElBQUFBLE1BQU0sQ0FDSmEsUUFBUSxDQUNMTixJQURILENBQ1EsS0FEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHRyxLQUhILEdBR1csWUFIWCxDQURJLENBQU4sQ0FLRUMsT0FMRixDQUtVLENBQUMsRUFBRCxDQUxWO0FBTUQsR0ExREMsQ0FBRjtBQTJERCxDQTNHTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSBcInJlYWN0LXRlc3QtcmVuZGVyZXJcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi5cIlxuXG5jb25zdCB7IEdyb3VwIH0gPSBDaGVja2JveFxuXG5kZXNjcmliZShcIkNoZWNrYm94XCIsICgpID0+IHtcbiAgaXQoXCJHcm91cCDmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPEdyb3VwPlxuICAgICAgICA8Q2hlY2tib3g+Y2hpbGRyZW4wPC9DaGVja2JveD5cbiAgICAgICAgPENoZWNrYm94PmNoaWxkcmVuMTwvQ2hlY2tib3g+XG4gICAgICA8L0dyb3VwPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIkdyb3VwIOaYr+WQpuiDveWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyMCA9IG1vdW50KFxuICAgICAgPEdyb3VwIG9uQ2hhbmdlPXtvbkNoYW5nZX0+XG4gICAgICAgIDxDaGVja2JveD5jaGlsZHJlbjA8L0NoZWNrYm94PlxuICAgICAgICA8Q2hlY2tib3g+Y2hpbGRyZW4xPC9DaGVja2JveD5cbiAgICAgIDwvR3JvdXA+XG4gICAgKVxuICAgIGNvbnN0IHdyYXBwZXIxID0gbW91bnQoXG4gICAgICA8R3JvdXAgZGVmYXVsdFZhbHVlPXtbXCJjaGlsZHJlbjBcIl19IG9uQ2hhbmdlPXtvbkNoYW5nZX0+XG4gICAgICAgIDxDaGVja2JveD5jaGlsZHJlbjA8L0NoZWNrYm94PlxuICAgICAgICA8Q2hlY2tib3g+Y2hpbGRyZW4xPC9DaGVja2JveD5cbiAgICAgIDwvR3JvdXA+XG4gICAgKVxuICAgIHdyYXBwZXIwXG4gICAgICAuZmluZChcImxhYmVsXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChbXCJjaGlsZHJlbjBcIl0pXG4gICAgd3JhcHBlcjBcbiAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgIC5hdCgxKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFtcImNoaWxkcmVuMFwiLCBcImNoaWxkcmVuMVwiXSlcblxuICAgIHdyYXBwZXIxXG4gICAgICAuZmluZChcImxhYmVsXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChbXSlcbiAgICB3cmFwcGVyMVxuICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgLmF0KDEpXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvbkNoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoW1wiY2hpbGRyZW4xXCJdKVxuICB9KVxuXG4gIGl0KFwiR3JvdXAg5piv5ZCm5q2j56Gu5aSE55CGIHZhbHVlIFN0YXRlXCIsICgpID0+IHtcbiAgICAvLyDnoa7kv53kvJjlhYjliKTmlq0gUHJvcCBkZWZhdWx0VmFsdWXvvIzlpoLmnpzlrZjlnKjpu5jorqTlgLzvvIzliJkgR3JvdXAg54q25oCB5Li65q2k6buY6K6k5YC8XG4gICAgY29uc3Qgd3JhcHBlcjEgPSBtb3VudChcbiAgICAgIDxHcm91cCBkZWZhdWx0VmFsdWU9e1tcImNoaWxkcmVuMFwiXX0+XG4gICAgICAgIDxDaGVja2JveCBkaXNhYmxlZD5jaGlsZHJlbjA8L0NoZWNrYm94PlxuICAgICAgICA8Q2hlY2tib3ggdmFsdWU9ezI3fT5jaGlsZHJlbjE8L0NoZWNrYm94PlxuICAgICAgICA8Q2hlY2tib3ggY2hlY2tlZD5jaGlsZHJlbjI8L0NoZWNrYm94PlxuICAgICAgICA8Q2hlY2tib3ggY2hlY2tlZCB2YWx1ZT17M30+XG4gICAgICAgICAgY2hpbGRyZW4zXG4gICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICA8L0dyb3VwPlxuICAgIClcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMVxuICAgICAgICAuZmluZChcImRpdlwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdXG4gICAgKS50b0VxdWFsKFtcImNoaWxkcmVuMFwiXSlcbiAgICB3cmFwcGVyMVxuICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgLmF0KDMpXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIxXG4gICAgICAgIC5maW5kKFwiZGl2XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtdmFsdWVcIl1cbiAgICApLnRvRXF1YWwoW1wiY2hpbGRyZW4wXCIsIDNdKVxuXG4gICAgLy8g56Gu5L+d5pyA5LyY5YWI5Yik5patIFByb3AgdmFsdWXvvIzlpoLmnpzlrZjlnKggUHJvcCB2YWx1Ze+8jOWImSBHcm91cCDlrozlhajkuqTnlLHlpJbpg6jmjqfliLbvvIzlhoXpg6jnirbmgIHml6DmlYjjgIJcbiAgICBjb25zdCB3cmFwcGVyMiA9IG1vdW50KFxuICAgICAgPEdyb3VwIGRlZmF1bHRWYWx1ZT17WzEyM119IHZhbHVlPXtbMjddfT5cbiAgICAgICAgPENoZWNrYm94IGRpc2FibGVkIHZhbHVlPXsxMjN9PlxuICAgICAgICAgIGNoaWxkcmVuMFxuICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICA8Q2hlY2tib3ggdmFsdWU9ezI3fT5jaGlsZHJlbjE8L0NoZWNrYm94PlxuICAgICAgICA8Q2hlY2tib3ggY2hlY2tlZD5jaGlsZHJlbjI8L0NoZWNrYm94PlxuICAgICAgICA8Q2hlY2tib3ggY2hlY2tlZCB2YWx1ZT17M30+XG4gICAgICAgICAgY2hpbGRyZW4zXG4gICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICA8L0dyb3VwPlxuICAgIClcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMlxuICAgICAgICAuZmluZChcImRpdlwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdXG4gICAgKS50b0VxdWFsKFsyN10pXG4gICAgd3JhcHBlcjJcbiAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgIC5hdCgzKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMlxuICAgICAgICAuZmluZChcImRpdlwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdXG4gICAgKS50b0VxdWFsKFsyN10pXG4gIH0pXG59KVxuIl19