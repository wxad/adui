"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe("Grid", function () {
  it("是否正确渲染", function () {
    var grid = React.createElement(_["default"], null);

    var wrapper = _reactTestRenderer["default"].create(React.createElement("div", null, grid, React.createElement(_["default"].Row, {
      gutter: 16
    }, React.createElement(_["default"].Col, {
      span: 4
    }), React.createElement(_["default"].Col, {
      span: 6
    }), React.createElement(_["default"].Col, {
      span: 2
    }))));

    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvZ3JpZC9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImdyaWQiLCJ3cmFwcGVyIiwiVGVzdFJlbmRlcmVyIiwiY3JlYXRlIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUFBLFFBQVEsQ0FBQyxNQUFELEVBQVMsWUFBTTtBQUNyQkMsRUFBQUEsRUFBRSxDQUFDLFFBQUQsRUFBVyxZQUFNO0FBRWpCLFFBQU1DLElBQUksR0FBRyxvQkFBQyxZQUFELE9BQWI7O0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyw4QkFBYUMsTUFBYixDQUNkLGlDQUNJSCxJQURKLEVBRUUsb0JBQUMsWUFBRCxDQUFNLEdBQU47QUFDRSxNQUFBLE1BQU0sRUFBRTtBQURWLE9BR0Usb0JBQUMsWUFBRCxDQUFNLEdBQU47QUFBVSxNQUFBLElBQUksRUFBRTtBQUFoQixNQUhGLEVBSUUsb0JBQUMsWUFBRCxDQUFNLEdBQU47QUFBVSxNQUFBLElBQUksRUFBRTtBQUFoQixNQUpGLEVBS0Usb0JBQUMsWUFBRCxDQUFNLEdBQU47QUFBVSxNQUFBLElBQUksRUFBRTtBQUFoQixNQUxGLENBRkYsQ0FEYyxDQUFoQjs7QUFZQUksSUFBQUEsTUFBTSxDQUFDSCxPQUFELENBQU4sQ0FBZ0JJLGVBQWhCO0FBQ0QsR0FoQkMsQ0FBRjtBQWlCRCxDQWxCTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gJ3JlYWN0LXRlc3QtcmVuZGVyZXInXG5pbXBvcnQgR3JpZCBmcm9tICcuLidcblxuZGVzY3JpYmUoXCJHcmlkXCIsICgpID0+IHtcbiAgaXQoXCLmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBncmlkID0gPEdyaWQgLz5cbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcbiAgICAgIDxkaXY+XG4gICAgICAgIHsgZ3JpZCB9XG4gICAgICAgIDxHcmlkLlJvd1xuICAgICAgICAgIGd1dHRlcj17MTZ9XG4gICAgICAgID5cbiAgICAgICAgICA8R3JpZC5Db2wgc3Bhbj17NH0gLz5cbiAgICAgICAgICA8R3JpZC5Db2wgc3Bhbj17Nn0gLz5cbiAgICAgICAgICA8R3JpZC5Db2wgc3Bhbj17Mn0gLz5cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcbn0pXG4iXX0=