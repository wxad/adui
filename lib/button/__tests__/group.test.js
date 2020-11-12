"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe("Button.Group", function () {
  it("是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(_["default"].Group, {
      size: "large"
    }, React.createElement(_["default"], null, "\u6309\u94AE\u4E00"), React.createElement(_["default"], null, "\u6309\u94AE\u4E8C")));

    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL19fdGVzdHNfXy9ncm91cC50ZXN0LnRzeCJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0Iiwid3JhcHBlciIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBQSxRQUFRLENBQUMsY0FBRCxFQUFpQixZQUFNO0FBQzdCQyxFQUFBQSxFQUFFLENBQUMsUUFBRCxFQUFXLFlBQU07QUFDakIsUUFBTUMsT0FBTyxHQUFHQyw4QkFBYUMsTUFBYixDQUNkLG9CQUFDLFlBQUQsQ0FBUSxLQUFSO0FBQ0UsTUFBQSxJQUFJLEVBQUM7QUFEUCxPQUdFLG9CQUFDLFlBQUQsNkJBSEYsRUFJRSxvQkFBQyxZQUFELDZCQUpGLENBRGMsQ0FBaEI7O0FBUUFDLElBQUFBLE1BQU0sQ0FBQ0gsT0FBRCxDQUFOLENBQWdCSSxlQUFoQjtBQUNELEdBVkMsQ0FBRjtBQVdELENBWk8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tICdyZWFjdC10ZXN0LXJlbmRlcmVyJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLidcblxuZGVzY3JpYmUoXCJCdXR0b24uR3JvdXBcIiwgKCkgPT4ge1xuICBpdChcIuaYr+WQpuato+ehrua4suafk1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IFRlc3RSZW5kZXJlci5jcmVhdGUoXG4gICAgICA8QnV0dG9uLkdyb3VwXG4gICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICA+XG4gICAgICAgIDxCdXR0b24+5oyJ6ZKu5LiAPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24+5oyJ6ZKu5LqMPC9CdXR0b24+XG4gICAgICA8L0J1dHRvbi5Hcm91cD5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG59KVxuIl19