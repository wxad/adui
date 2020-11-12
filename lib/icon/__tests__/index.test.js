"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe("Icon", function () {
  it("是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(_["default"], {
      size: 20,
      icon: "add",
      color: "#00bb9c"
    }));

    expect(wrapper).toMatchSnapshot();
  });
  it("是否正确回调 onClick", function () {
    var onClick = jest.fn();
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      icon: "delete",
      onClick: onClick
    }));
    wrapper.find("svg").at(0).simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvaWNvbi9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsIndyYXBwZXIiLCJUZXN0UmVuZGVyZXIiLCJjcmVhdGUiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJvbkNsaWNrIiwiamVzdCIsImZuIiwiZmluZCIsImF0Iiwic2ltdWxhdGUiLCJ0b0hhdmVCZWVuQ2FsbGVkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUFBLFFBQVEsQ0FBQyxNQUFELEVBQVMsWUFBTTtBQUNyQkMsRUFBQUEsRUFBRSxDQUFDLFFBQUQsRUFBVyxZQUFNO0FBQ2pCLFFBQU1DLE9BQU8sR0FBR0MsOEJBQWFDLE1BQWIsQ0FDZCxvQkFBQyxZQUFEO0FBQU0sTUFBQSxJQUFJLEVBQUUsRUFBWjtBQUFnQixNQUFBLElBQUksRUFBQyxLQUFyQjtBQUEyQixNQUFBLEtBQUssRUFBQztBQUFqQyxNQURjLENBQWhCOztBQUdBQyxJQUFBQSxNQUFNLENBQUNILE9BQUQsQ0FBTixDQUFnQkksZUFBaEI7QUFDRCxHQUxDLENBQUY7QUFPQUwsRUFBQUEsRUFBRSxDQUFDLGdCQUFELEVBQW1CLFlBQU07QUFDekIsUUFBTU0sT0FBTyxHQUFHQyxJQUFJLENBQUNDLEVBQUwsRUFBaEI7QUFDQSxRQUFNUCxPQUFPLEdBQUcsbUJBQ2Qsb0JBQUMsWUFBRDtBQUFNLE1BQUEsSUFBSSxFQUFDLFFBQVg7QUFBb0IsTUFBQSxPQUFPLEVBQUVLO0FBQTdCLE1BRGMsQ0FBaEI7QUFHQUwsSUFBQUEsT0FBTyxDQUFDUSxJQUFSLENBQWEsS0FBYixFQUFvQkMsRUFBcEIsQ0FBdUIsQ0FBdkIsRUFBMEJDLFFBQTFCLENBQW1DLE9BQW5DO0FBQ0FQLElBQUFBLE1BQU0sQ0FBQ0UsT0FBRCxDQUFOLENBQWdCTSxnQkFBaEI7QUFDRCxHQVBDLENBQUY7QUFRRCxDQWhCTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSdcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcidcbmltcG9ydCBJY29uIGZyb20gJy4uJ1xuXG5kZXNjcmliZShcIkljb25cIiwgKCkgPT4ge1xuICBpdChcIuaYr+WQpuato+ehrua4suafk1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IFRlc3RSZW5kZXJlci5jcmVhdGUoXG4gICAgICA8SWNvbiBzaXplPXsyMH0gaWNvbj1cImFkZFwiIGNvbG9yPVwiIzAwYmI5Y1wiIC8+XG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm5q2j56Gu5Zue6LCDIG9uQ2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uQ2xpY2sgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8SWNvbiBpY29uPVwiZGVsZXRlXCIgb25DbGljaz17b25DbGlja30gLz5cbiAgICApXG4gICAgd3JhcHBlci5maW5kKFwic3ZnXCIpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DbGljaykudG9IYXZlQmVlbkNhbGxlZCgpXG4gIH0pXG59KVxuIl19