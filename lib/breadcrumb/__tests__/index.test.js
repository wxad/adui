"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe("Breadcrumb", function () {
  it("是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(_["default"], null, React.createElement(_["default"].Item, {
      href: "https://ad.weixin.qq.com"
    }, "\u9875\u9762\u4E00"), React.createElement(_["default"].Item, null, "\u9875\u9762\u4E8C"), React.createElement(_["default"].Item, null, "\u9875\u9762\u4E09")));

    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsIndyYXBwZXIiLCJUZXN0UmVuZGVyZXIiLCJjcmVhdGUiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQUEsUUFBUSxDQUFDLFlBQUQsRUFBZSxZQUFNO0FBQzNCQyxFQUFBQSxFQUFFLENBQUMsUUFBRCxFQUFXLFlBQU07QUFDakIsUUFBTUMsT0FBTyxHQUFHQyw4QkFBYUMsTUFBYixDQUNkLG9CQUFDLFlBQUQsUUFDRSxvQkFBQyxZQUFELENBQVksSUFBWjtBQUFpQixNQUFBLElBQUksRUFBQztBQUF0Qiw0QkFERixFQUVFLG9CQUFDLFlBQUQsQ0FBWSxJQUFaLDZCQUZGLEVBR0Usb0JBQUMsWUFBRCxDQUFZLElBQVosNkJBSEYsQ0FEYyxDQUFoQjs7QUFPQUMsSUFBQUEsTUFBTSxDQUFDSCxPQUFELENBQU4sQ0FBZ0JJLGVBQWhCO0FBQ0QsR0FUQyxDQUFGO0FBVUQsQ0FYTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gJ3JlYWN0LXRlc3QtcmVuZGVyZXInXG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tICcuLidcblxuZGVzY3JpYmUoXCJCcmVhZGNydW1iXCIsICgpID0+IHtcbiAgaXQoXCLmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPEJyZWFkY3J1bWI+XG4gICAgICAgIDxCcmVhZGNydW1iLkl0ZW0gaHJlZj1cImh0dHBzOi8vYWQud2VpeGluLnFxLmNvbVwiPumhtemdouS4gDwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPumhtemdouS6jDwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPumhtemdouS4iTwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgPC9CcmVhZGNydW1iPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcbn0pXG4iXX0=