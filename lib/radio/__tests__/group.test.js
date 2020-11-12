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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcmFkaW8vX190ZXN0c19fL2dyb3VwLnRlc3QudHN4Il0sIm5hbWVzIjpbIkdyb3VwIiwiUmFkaW8iLCJkZXNjcmliZSIsIml0Iiwid3JhcHBlciIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCIsIm9uQ2hhbmdlIiwiamVzdCIsImZuIiwid3JhcHBlcjAiLCJ3cmFwcGVyMSIsImZpbmQiLCJhdCIsInNpbXVsYXRlIiwidG9IYXZlQmVlbkNhbGxlZFdpdGgiLCJwcm9wcyIsInRvRXF1YWwiLCJ3cmFwcGVyMiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztJQUVRQSxLLEdBQVVDLFksQ0FBVkQsSztBQUVSRSxRQUFRLENBQUMsT0FBRCxFQUFVLFlBQU07QUFDdEJDLEVBQUFBLEVBQUUsQ0FBQyxjQUFELEVBQWlCLFlBQU07QUFDdkIsUUFBTUMsT0FBTyxHQUFHQyw4QkFBYUMsTUFBYixDQUNkLG9CQUFDLEtBQUQ7QUFBTyxNQUFBLElBQUksRUFBQztBQUFaLE9BQ0Usb0JBQUMsWUFBRCxvQkFERixFQUVFLG9CQUFDLFlBQUQsb0JBRkYsQ0FEYyxDQUFoQjs7QUFNQUMsSUFBQUEsTUFBTSxDQUFDSCxPQUFELENBQU4sQ0FBZ0JJLGVBQWhCO0FBQ0QsR0FSQyxDQUFGO0FBVUFMLEVBQUFBLEVBQUUsQ0FBQyxlQUFELEVBQWtCLFlBQU07QUFDeEIsUUFBTU0sUUFBUSxHQUFHQyxJQUFJLENBQUNDLEVBQUwsRUFBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUcsbUJBQ2Ysb0JBQUMsS0FBRDtBQUFPLE1BQUEsUUFBUSxFQUFFSDtBQUFqQixPQUNFLG9CQUFDLFlBQUQsb0JBREYsRUFFRSxvQkFBQyxZQUFELG9CQUZGLENBRGUsQ0FBakI7QUFNQSxRQUFNSSxRQUFRLEdBQUcsbUJBQ2Ysb0JBQUMsS0FBRDtBQUFPLE1BQUEsWUFBWSxFQUFDLFdBQXBC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S0FISCxHQUdXLFlBSFgsQ0FESSxDQUFOLENBS0VDLE9BTEYsQ0FLVSxFQUxWO0FBTUQsR0F4REMsQ0FBRjtBQXlERCxDQTFHTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IG1vdW50IH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gXCJyZWFjdC10ZXN0LXJlbmRlcmVyXCJcbmltcG9ydCBSYWRpbyBmcm9tIFwiLi5cIlxuXG5jb25zdCB7IEdyb3VwIH0gPSBSYWRpb1xuXG5kZXNjcmliZShcIlJhZGlvXCIsICgpID0+IHtcbiAgaXQoXCJHcm91cCDmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPEdyb3VwIHNpemU9XCJsYXJnZVwiPlxuICAgICAgICA8UmFkaW8+Y2hpbGRyZW4wPC9SYWRpbz5cbiAgICAgICAgPFJhZGlvPmNoaWxkcmVuMTwvUmFkaW8+XG4gICAgICA8L0dyb3VwPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIkdyb3VwIOaYr+WQpuiDveWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyMCA9IG1vdW50KFxuICAgICAgPEdyb3VwIG9uQ2hhbmdlPXtvbkNoYW5nZX0+XG4gICAgICAgIDxSYWRpbz5jaGlsZHJlbjA8L1JhZGlvPlxuICAgICAgICA8UmFkaW8+Y2hpbGRyZW4xPC9SYWRpbz5cbiAgICAgIDwvR3JvdXA+XG4gICAgKVxuICAgIGNvbnN0IHdyYXBwZXIxID0gbW91bnQoXG4gICAgICA8R3JvdXAgZGVmYXVsdFZhbHVlPVwiY2hpbGRyZW4wXCIgb25DaGFuZ2U9e29uQ2hhbmdlfT5cbiAgICAgICAgPFJhZGlvPmNoaWxkcmVuMDwvUmFkaW8+XG4gICAgICAgIDxSYWRpbz5jaGlsZHJlbjE8L1JhZGlvPlxuICAgICAgPC9Hcm91cD5cbiAgICApXG4gICAgd3JhcHBlcjBcbiAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFwiY2hpbGRyZW4wXCIpXG4gICAgd3JhcHBlcjBcbiAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgIC5hdCgxKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFwiY2hpbGRyZW4xXCIpXG5cbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMVxuICAgICAgICAuZmluZChcImRpdlwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdXG4gICAgKS50b0VxdWFsKFwiY2hpbGRyZW4wXCIpXG4gICAgd3JhcHBlcjFcbiAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgIC5hdCgxKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFwiY2hpbGRyZW4xXCIpXG4gIH0pXG5cbiAgaXQoXCJHcm91cCDmmK/lkKbmraPnoa7lpITnkIYgdmFsdWUgU3RhdGVcIiwgKCkgPT4ge1xuICAgIC8vIOehruS/neS8mOWFiOWIpOaWrSBQcm9wIGRlZmF1bHRWYWx1Ze+8jOWmguaenOWtmOWcqOm7mOiupOWAvO+8jOWImSBHcm91cCDnirbmgIHkuLrmraTpu5jorqTlgLxcbiAgICBjb25zdCB3cmFwcGVyMSA9IG1vdW50KFxuICAgICAgPEdyb3VwIGRlZmF1bHRWYWx1ZT1cImNoaWxkcmVuMFwiPlxuICAgICAgICA8UmFkaW8gZGlzYWJsZWQ+Y2hpbGRyZW4wPC9SYWRpbz5cbiAgICAgICAgPFJhZGlvIHZhbHVlPXsyN30+Y2hpbGRyZW4xPC9SYWRpbz5cbiAgICAgICAgPFJhZGlvIGNoZWNrZWQgdmFsdWU9ezN9PlxuICAgICAgICAgIGNoaWxkcmVuMlxuICAgICAgICA8L1JhZGlvPlxuICAgICAgPC9Hcm91cD5cbiAgICApXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlcjFcbiAgICAgICAgLmZpbmQoXCJkaXZcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXVxuICAgICkudG9FcXVhbChcImNoaWxkcmVuMFwiKVxuICAgIHdyYXBwZXIxXG4gICAgICAuZmluZChcImxhYmVsXCIpXG4gICAgICAuYXQoMilcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlcjFcbiAgICAgICAgLmZpbmQoXCJkaXZcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXVxuICAgICkudG9FcXVhbCgzKVxuXG4gICAgLy8g56Gu5L+d5pyA5LyY5YWI5Yik5patIFByb3AgdmFsdWXvvIzlpoLmnpzlrZjlnKggUHJvcCB2YWx1Ze+8jOWImSBHcm91cCDlrozlhajkuqTnlLHlpJbpg6jmjqfliLbvvIzlhoXpg6jnirbmgIHml6DmlYjjgIJcbiAgICBjb25zdCB3cmFwcGVyMiA9IG1vdW50KFxuICAgICAgPEdyb3VwIGRlZmF1bHRWYWx1ZT17MTIzfSB2YWx1ZT17Mjd9PlxuICAgICAgICA8UmFkaW8gZGlzYWJsZWQgdmFsdWU9ezEyM30+XG4gICAgICAgICAgY2hpbGRyZW4wXG4gICAgICAgIDwvUmFkaW8+XG4gICAgICAgIDxSYWRpbyB2YWx1ZT17Mjd9PmNoaWxkcmVuMTwvUmFkaW8+XG4gICAgICAgIDxSYWRpbyBjaGVja2VkIHZhbHVlPXszfT5cbiAgICAgICAgICBjaGlsZHJlbjJcbiAgICAgICAgPC9SYWRpbz5cbiAgICAgIDwvR3JvdXA+XG4gICAgKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIyXG4gICAgICAgIC5maW5kKFwiZGl2XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtdmFsdWVcIl1cbiAgICApLnRvRXF1YWwoMjcpXG4gICAgd3JhcHBlcjJcbiAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgIC5hdCgyKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMlxuICAgICAgICAuZmluZChcImRpdlwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdXG4gICAgKS50b0VxdWFsKDI3KVxuICB9KVxufSlcbiJdfQ==