"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe("Form", function () {
  it("是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(_["default"], null, React.createElement(_["default"].Item, {
      label: "\u540D\u79F0",
      labelHelper: "\u540D\u79F0",
      labelAlign: "left"
    }, "dondondong", React.createElement(_["default"].Tip, null, "\u8FD9\u8868\u793A\u540D\u79F0")), React.createElement(_["default"].Item, {
      label: "\u6027\u522B",
      labelAlign: "right"
    }, "\u7537"), React.createElement(_["default"].Item, {
      label: "\u804C\u4E1A",
      labelAlign: "center"
    }, "\u8BBE\u8BA1\u5E08")));

    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvZm9ybS9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsIndyYXBwZXIiLCJUZXN0UmVuZGVyZXIiLCJjcmVhdGUiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQUEsUUFBUSxDQUFDLE1BQUQsRUFBUyxZQUFNO0FBQ3JCQyxFQUFBQSxFQUFFLENBQUMsUUFBRCxFQUFXLFlBQU07QUFDakIsUUFBTUMsT0FBTyxHQUFHQyw4QkFBYUMsTUFBYixDQUNkLG9CQUFDLFlBQUQsUUFDRSxvQkFBQyxZQUFELENBQU0sSUFBTjtBQUFXLE1BQUEsS0FBSyxFQUFDLGNBQWpCO0FBQXNCLE1BQUEsV0FBVyxFQUFDLGNBQWxDO0FBQXVDLE1BQUEsVUFBVSxFQUFDO0FBQWxELHFCQUVFLG9CQUFDLFlBQUQsQ0FBTSxHQUFOLHlDQUZGLENBREYsRUFLRSxvQkFBQyxZQUFELENBQU0sSUFBTjtBQUFXLE1BQUEsS0FBSyxFQUFDLGNBQWpCO0FBQXNCLE1BQUEsVUFBVSxFQUFDO0FBQWpDLGdCQUxGLEVBTUUsb0JBQUMsWUFBRCxDQUFNLElBQU47QUFBVyxNQUFBLEtBQUssRUFBQyxjQUFqQjtBQUFzQixNQUFBLFVBQVUsRUFBQztBQUFqQyw0QkFORixDQURjLENBQWhCOztBQVVBQyxJQUFBQSxNQUFNLENBQUNILE9BQUQsQ0FBTixDQUFnQkksZUFBaEI7QUFDRCxHQVpDLENBQUY7QUFhRCxDQWRPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcidcbmltcG9ydCBGb3JtIGZyb20gJy4uJ1xuXG5kZXNjcmliZShcIkZvcm1cIiwgKCkgPT4ge1xuICBpdChcIuaYr+WQpuato+ehrua4suafk1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IFRlc3RSZW5kZXJlci5jcmVhdGUoXG4gICAgICA8Rm9ybT5cbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIuWQjeensFwiIGxhYmVsSGVscGVyPVwi5ZCN56ewXCIgbGFiZWxBbGlnbj1cImxlZnRcIj5cbiAgICAgICAgICBkb25kb25kb25nXG4gICAgICAgICAgPEZvcm0uVGlwPui/meihqOekuuWQjeensDwvRm9ybS5UaXA+XG4gICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwi5oCn5YirXCIgbGFiZWxBbGlnbj1cInJpZ2h0XCI+55S3PC9Gb3JtLkl0ZW0+XG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCLogYzkuJpcIiBsYWJlbEFsaWduPVwiY2VudGVyXCI+6K6+6K6h5biIPC9Gb3JtLkl0ZW0+XG4gICAgICA8L0Zvcm0+XG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxufSlcbiJdfQ==