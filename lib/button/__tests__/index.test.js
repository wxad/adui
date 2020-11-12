"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe("Button", function () {
  it("是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(_["default"], {
      leftIcon: "add",
      rightIcon: "tick"
    }, "\u6309\u94AE"));

    expect(wrapper).toMatchSnapshot();
  });
  it("是否支持 link button", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(_["default"], {
      target: "_blank",
      href: "https://ad.weixin.qq.com"
    }, "link button"));

    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL19fdGVzdHNfXy9pbmRleC50ZXN0LnRzeCJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0Iiwid3JhcHBlciIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBQSxRQUFRLENBQUMsUUFBRCxFQUFXLFlBQU07QUFDdkJDLEVBQUFBLEVBQUUsQ0FBQyxRQUFELEVBQVcsWUFBTTtBQUNqQixRQUFNQyxPQUFPLEdBQUdDLDhCQUFhQyxNQUFiLENBQ2Qsb0JBQUMsWUFBRDtBQUNFLE1BQUEsUUFBUSxFQUFDLEtBRFg7QUFFRSxNQUFBLFNBQVMsRUFBQztBQUZaLHNCQURjLENBQWhCOztBQVFBQyxJQUFBQSxNQUFNLENBQUNILE9BQUQsQ0FBTixDQUFnQkksZUFBaEI7QUFDRCxHQVZDLENBQUY7QUFZQUwsRUFBQUEsRUFBRSxDQUFDLGtCQUFELEVBQXFCLFlBQU07QUFDM0IsUUFBTUMsT0FBTyxHQUFHQyw4QkFBYUMsTUFBYixDQUNkLG9CQUFDLFlBQUQ7QUFDRSxNQUFBLE1BQU0sRUFBQyxRQURUO0FBRUUsTUFBQSxJQUFJLEVBQUM7QUFGUCxxQkFEYyxDQUFoQjs7QUFRQUMsSUFBQUEsTUFBTSxDQUFDSCxPQUFELENBQU4sQ0FBZ0JJLGVBQWhCO0FBQ0QsR0FWQyxDQUFGO0FBV0QsQ0F4Qk8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tICdyZWFjdC10ZXN0LXJlbmRlcmVyJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLidcblxuZGVzY3JpYmUoXCJCdXR0b25cIiwgKCkgPT4ge1xuICBpdChcIuaYr+WQpuato+ehrua4suafk1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IFRlc3RSZW5kZXJlci5jcmVhdGUoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGxlZnRJY29uPVwiYWRkXCJcbiAgICAgICAgcmlnaHRJY29uPVwidGlja1wiXG4gICAgICA+XG4gICAgICAgIOaMiemSrlxuICAgICAgPC9CdXR0b24+XG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm5pSv5oyBIGxpbmsgYnV0dG9uXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcbiAgICAgIDxCdXR0b25cbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vYWQud2VpeGluLnFxLmNvbVwiXG4gICAgICA+XG4gICAgICAgIGxpbmsgYnV0dG9uXG4gICAgICA8L0J1dHRvbj5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG59KVxuIl19