"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Group = _["default"].Group;
describe("Radio", function () {
  it("Group 是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(Group, {
      size: "large"
    }, React.createElement(_["default"], null, "children0"), React.createElement(_["default"], null, "children1")));

    expect(wrapper).toMatchSnapshot();
  });
  it("Group 是否能内部驱动", function () {
    var onChange = jest.fn();
    var wrapper0 = (0, _enzyme.mount)(React.createElement(Group, {
      onChange: onChange
    }, React.createElement(_["default"], null, "children0"), React.createElement(_["default"], null, "children1")));
    var wrapper1 = (0, _enzyme.mount)(React.createElement(Group, {
      defaultValue: "children0",
      onChange: onChange
    }, React.createElement(_["default"], null, "children0"), React.createElement(_["default"], null, "children1")));
    wrapper0.find("label").at(0).simulate("click");
    expect(onChange).toHaveBeenCalledWith("children0");
    wrapper0.find("label").at(1).simulate("click");
    expect(onChange).toHaveBeenCalledWith("children1");
    expect(wrapper1.find("div").at(0).props()["data-value"]).toEqual("children0");
    wrapper1.find("label").at(1).simulate("click");
    expect(onChange).toHaveBeenCalledWith("children1");
  });
  it("Group 是否正确处理 value State", function () {
    var wrapper1 = (0, _enzyme.mount)(React.createElement(Group, {
      defaultValue: "children0"
    }, React.createElement(_["default"], {
      disabled: true
    }, "children0"), React.createElement(_["default"], {
      value: 27
    }, "children1"), React.createElement(_["default"], {
      checked: true,
      value: 3
    }, "children2")));
    expect(wrapper1.find("div").at(0).props()["data-value"]).toEqual("children0");
    wrapper1.find("label").at(2).simulate("click");
    expect(wrapper1.find("div").at(0).props()["data-value"]).toEqual(3);
    var wrapper2 = (0, _enzyme.mount)(React.createElement(Group, {
      defaultValue: 123,
      value: 27
    }, React.createElement(_["default"], {
      disabled: true,
      value: 123
    }, "children0"), React.createElement(_["default"], {
      value: 27
    }, "children1"), React.createElement(_["default"], {
      checked: true,
      value: 3
    }, "children2")));
    expect(wrapper2.find("div").at(0).props()["data-value"]).toEqual(27);
    wrapper2.find("label").at(2).simulate("click");
    expect(wrapper2.find("div").at(0).props()["data-value"]).toEqual(27);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcmFkaW8vX190ZXN0c19fL2dyb3VwLnRlc3QudHN4Il0sIm5hbWVzIjpbIkdyb3VwIiwiUmFkaW8iLCJkZXNjcmliZSIsIml0Iiwid3JhcHBlciIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCIsIm9uQ2hhbmdlIiwiamVzdCIsImZuIiwid3JhcHBlcjAiLCJ3cmFwcGVyMSIsImZpbmQiLCJhdCIsInNpbXVsYXRlIiwidG9IYXZlQmVlbkNhbGxlZFdpdGgiLCJwcm9wcyIsInRvRXF1YWwiLCJ3cmFwcGVyMiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztJQUVRQSxLLEdBQVVDLFksQ0FBVkQsSztBQUVSRSxRQUFRLENBQUMsT0FBRCxFQUFVLFlBQU07QUFDdEJDLEVBQUFBLEVBQUUsQ0FBQyxjQUFELEVBQWlCLFlBQU07QUFDdkIsUUFBTUMsT0FBTyxHQUFHQyw4QkFBYUMsTUFBYixDQUNkLG9CQUFDLEtBQUQ7QUFBTyxNQUFBLElBQUksRUFBQztBQUFaLE9BQ0Usb0JBQUMsWUFBRCxvQkFERixFQUVFLG9CQUFDLFlBQUQsb0JBRkYsQ0FEYyxDQUFoQjs7QUFNQUMsSUFBQUEsTUFBTSxDQUFDSCxPQUFELENBQU4sQ0FBZ0JJLGVBQWhCO0FBQ0QsR0FSQyxDQUFGO0FBVUFMLEVBQUFBLEVBQUUsQ0FBQyxlQUFELEVBQWtCLFlBQU07QUFDeEIsUUFBTU0sUUFBUSxHQUFHQyxJQUFJLENBQUNDLEVBQUwsRUFBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUcsbUJBQ2Ysb0JBQUMsS0FBRDtBQUFPLE1BQUEsUUFBUSxFQUFFSDtBQUFqQixPQUNFLG9CQUFDLFlBQUQsb0JBREYsRUFFRSxvQkFBQyxZQUFELG9CQUZGLENBRGUsQ0FBakI7QUFNQSxRQUFNSSxRQUFRLEdBQUcsbUJBQ2Ysb0JBQUMsS0FBRDtBQUFPLE1BQUEsWUFBWSxFQUFDLFdBQXBC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QyxPQUF0QztBQUNBVCxJQUFBQSxNQUFNLENBQUNhLFFBQVEsQ0FBQ04sSUFBVCxDQUFjLEtBQWQsRUFBcUJDLEVBQXJCLENBQXdCLENBQXhCLEVBQTJCRyxLQUEzQixHQUFtQyxZQUFuQyxDQUFELENBQU4sQ0FBeURDLE9BQXpELENBQWlFLEVBQWpFO0FBQ0QsR0FoQ0MsQ0FBRjtBQWlDRCxDQXRFTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IG1vdW50IH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gXCJyZWFjdC10ZXN0LXJlbmRlcmVyXCJcbmltcG9ydCBSYWRpbyBmcm9tIFwiLi5cIlxuXG5jb25zdCB7IEdyb3VwIH0gPSBSYWRpb1xuXG5kZXNjcmliZShcIlJhZGlvXCIsICgpID0+IHtcbiAgaXQoXCJHcm91cCDmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPEdyb3VwIHNpemU9XCJsYXJnZVwiPlxuICAgICAgICA8UmFkaW8+Y2hpbGRyZW4wPC9SYWRpbz5cbiAgICAgICAgPFJhZGlvPmNoaWxkcmVuMTwvUmFkaW8+XG4gICAgICA8L0dyb3VwPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIkdyb3VwIOaYr+WQpuiDveWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyMCA9IG1vdW50KFxuICAgICAgPEdyb3VwIG9uQ2hhbmdlPXtvbkNoYW5nZX0+XG4gICAgICAgIDxSYWRpbz5jaGlsZHJlbjA8L1JhZGlvPlxuICAgICAgICA8UmFkaW8+Y2hpbGRyZW4xPC9SYWRpbz5cbiAgICAgIDwvR3JvdXA+XG4gICAgKVxuICAgIGNvbnN0IHdyYXBwZXIxID0gbW91bnQoXG4gICAgICA8R3JvdXAgZGVmYXVsdFZhbHVlPVwiY2hpbGRyZW4wXCIgb25DaGFuZ2U9e29uQ2hhbmdlfT5cbiAgICAgICAgPFJhZGlvPmNoaWxkcmVuMDwvUmFkaW8+XG4gICAgICAgIDxSYWRpbz5jaGlsZHJlbjE8L1JhZGlvPlxuICAgICAgPC9Hcm91cD5cbiAgICApXG4gICAgd3JhcHBlcjAuZmluZChcImxhYmVsXCIpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFwiY2hpbGRyZW4wXCIpXG4gICAgd3JhcHBlcjAuZmluZChcImxhYmVsXCIpLmF0KDEpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFwiY2hpbGRyZW4xXCIpXG5cbiAgICBleHBlY3Qod3JhcHBlcjEuZmluZChcImRpdlwiKS5hdCgwKS5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXSkudG9FcXVhbChcbiAgICAgIFwiY2hpbGRyZW4wXCJcbiAgICApXG4gICAgd3JhcHBlcjEuZmluZChcImxhYmVsXCIpLmF0KDEpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFwiY2hpbGRyZW4xXCIpXG4gIH0pXG5cbiAgaXQoXCJHcm91cCDmmK/lkKbmraPnoa7lpITnkIYgdmFsdWUgU3RhdGVcIiwgKCkgPT4ge1xuICAgIC8vIOehruS/neS8mOWFiOWIpOaWrSBQcm9wIGRlZmF1bHRWYWx1Ze+8jOWmguaenOWtmOWcqOm7mOiupOWAvO+8jOWImSBHcm91cCDnirbmgIHkuLrmraTpu5jorqTlgLxcbiAgICBjb25zdCB3cmFwcGVyMSA9IG1vdW50KFxuICAgICAgPEdyb3VwIGRlZmF1bHRWYWx1ZT1cImNoaWxkcmVuMFwiPlxuICAgICAgICA8UmFkaW8gZGlzYWJsZWQ+Y2hpbGRyZW4wPC9SYWRpbz5cbiAgICAgICAgPFJhZGlvIHZhbHVlPXsyN30+Y2hpbGRyZW4xPC9SYWRpbz5cbiAgICAgICAgPFJhZGlvIGNoZWNrZWQgdmFsdWU9ezN9PlxuICAgICAgICAgIGNoaWxkcmVuMlxuICAgICAgICA8L1JhZGlvPlxuICAgICAgPC9Hcm91cD5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIxLmZpbmQoXCJkaXZcIikuYXQoMCkucHJvcHMoKVtcImRhdGEtdmFsdWVcIl0pLnRvRXF1YWwoXG4gICAgICBcImNoaWxkcmVuMFwiXG4gICAgKVxuICAgIHdyYXBwZXIxLmZpbmQoXCJsYWJlbFwiKS5hdCgyKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIxLmZpbmQoXCJkaXZcIikuYXQoMCkucHJvcHMoKVtcImRhdGEtdmFsdWVcIl0pLnRvRXF1YWwoMylcblxuICAgIC8vIOehruS/neacgOS8mOWFiOWIpOaWrSBQcm9wIHZhbHVl77yM5aaC5p6c5a2Y5ZyoIFByb3AgdmFsdWXvvIzliJkgR3JvdXAg5a6M5YWo5Lqk55Sx5aSW6YOo5o6n5Yi277yM5YaF6YOo54q25oCB5peg5pWI44CCXG4gICAgY29uc3Qgd3JhcHBlcjIgPSBtb3VudChcbiAgICAgIDxHcm91cCBkZWZhdWx0VmFsdWU9ezEyM30gdmFsdWU9ezI3fT5cbiAgICAgICAgPFJhZGlvIGRpc2FibGVkIHZhbHVlPXsxMjN9PlxuICAgICAgICAgIGNoaWxkcmVuMFxuICAgICAgICA8L1JhZGlvPlxuICAgICAgICA8UmFkaW8gdmFsdWU9ezI3fT5jaGlsZHJlbjE8L1JhZGlvPlxuICAgICAgICA8UmFkaW8gY2hlY2tlZCB2YWx1ZT17M30+XG4gICAgICAgICAgY2hpbGRyZW4yXG4gICAgICAgIDwvUmFkaW8+XG4gICAgICA8L0dyb3VwPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcjIuZmluZChcImRpdlwiKS5hdCgwKS5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXSkudG9FcXVhbCgyNylcbiAgICB3cmFwcGVyMi5maW5kKFwibGFiZWxcIikuYXQoMikuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyMi5maW5kKFwiZGl2XCIpLmF0KDApLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdKS50b0VxdWFsKDI3KVxuICB9KVxufSlcbiJdfQ==