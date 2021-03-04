"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe("Card", function () {
  it("Card 是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(_["default"], null, React.createElement(_["default"].Header, {
      title: "title",
      subTitle: "title"
    }, "children"), "children"));

    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvY2FyZC9fX3Rlc3RzX18vY2FyZC50ZXN0LnRzeCJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0Iiwid3JhcHBlciIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBQSxRQUFRLENBQUMsTUFBRCxFQUFTLFlBQU07QUFDckJDLEVBQUFBLEVBQUUsQ0FBQyxhQUFELEVBQWdCLFlBQU07QUFDdEIsUUFBTUMsT0FBTyxHQUFHQyw4QkFBYUMsTUFBYixDQUNkLG9CQUFDLFlBQUQsUUFDRSxvQkFBQyxZQUFELENBQU0sTUFBTjtBQUNFLE1BQUEsS0FBSyxFQUFDLE9BRFI7QUFFRSxNQUFBLFFBQVEsRUFBQztBQUZYLGtCQURGLGFBRGMsQ0FBaEI7O0FBV0FDLElBQUFBLE1BQU0sQ0FBQ0gsT0FBRCxDQUFOLENBQWdCSSxlQUFoQjtBQUNELEdBYkMsQ0FBRjtBQWNELENBZk8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tICdyZWFjdC10ZXN0LXJlbmRlcmVyJ1xuaW1wb3J0IENhcmQgZnJvbSAnLi4nXG5cbmRlc2NyaWJlKFwiQ2FyZFwiLCAoKSA9PiB7XG4gIGl0KFwiQ2FyZCDmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPENhcmQ+XG4gICAgICAgIDxDYXJkLkhlYWRlclxuICAgICAgICAgIHRpdGxlPVwidGl0bGVcIlxuICAgICAgICAgIHN1YlRpdGxlPVwidGl0bGVcIlxuICAgICAgICA+XG4gICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgY2hpbGRyZW5cbiAgICAgIDwvQ2FyZD5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG59KVxuIl19