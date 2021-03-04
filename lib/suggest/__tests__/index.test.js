"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Option = _["default"].Option;
describe("Suggest", function () {
  beforeEach(function () {
    jest.useFakeTimers();
  });
  afterEach(function () {
    jest.useRealTimers();
  });
  it("Suggest 是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(_["default"], {
      value: "1",
      onSearch: function onSearch() {}
    }, React.createElement(Option, {
      value: "1"
    }, "pengyouquan"), React.createElement(Option, {
      value: "2"
    }, "gongzhonghao")));

    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvc3VnZ2VzdC9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwibmFtZXMiOlsiT3B0aW9uIiwiU3VnZ2VzdCIsImRlc2NyaWJlIiwiYmVmb3JlRWFjaCIsImplc3QiLCJ1c2VGYWtlVGltZXJzIiwiYWZ0ZXJFYWNoIiwidXNlUmVhbFRpbWVycyIsIml0Iiwid3JhcHBlciIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztJQUVRQSxNLEdBQVdDLFksQ0FBWEQsTTtBQUVSRSxRQUFRLENBQUMsU0FBRCxFQUFZLFlBQU07QUFDeEJDLEVBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZDLElBQUFBLElBQUksQ0FBQ0MsYUFBTDtBQUNELEdBRlMsQ0FBVjtBQUlBQyxFQUFBQSxTQUFTLENBQUMsWUFBTTtBQUNkRixJQUFBQSxJQUFJLENBQUNHLGFBQUw7QUFDRCxHQUZRLENBQVQ7QUFJQUMsRUFBQUEsRUFBRSxDQUFDLGdCQUFELEVBQW1CLFlBQU07QUFDekIsUUFBTUMsT0FBTyxHQUFHQyw4QkFBYUMsTUFBYixDQUNkLG9CQUFDLFlBQUQ7QUFDRSxNQUFBLEtBQUssRUFBQyxHQURSO0FBRUUsTUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRTtBQUZwQixPQUlFLG9CQUFDLE1BQUQ7QUFBUSxNQUFBLEtBQUssRUFBQztBQUFkLHFCQUpGLEVBS0Usb0JBQUMsTUFBRDtBQUFRLE1BQUEsS0FBSyxFQUFDO0FBQWQsc0JBTEYsQ0FEYyxDQUFoQjs7QUFTQUMsSUFBQUEsTUFBTSxDQUFDSCxPQUFELENBQU4sQ0FBZ0JJLGVBQWhCO0FBQ0QsR0FYQyxDQUFGO0FBNkJELENBdENPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcidcbmltcG9ydCBTdWdnZXN0IGZyb20gJy4uJ1xuXG5jb25zdCB7IE9wdGlvbiB9ID0gU3VnZ2VzdFxuXG5kZXNjcmliZShcIlN1Z2dlc3RcIiwgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBqZXN0LnVzZUZha2VUaW1lcnMoKVxuICB9KVxuXG4gIGFmdGVyRWFjaCgoKSA9PiB7XG4gICAgamVzdC51c2VSZWFsVGltZXJzKClcbiAgfSlcblxuICBpdChcIlN1Z2dlc3Qg5piv5ZCm5q2j56Gu5riy5p+TXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcbiAgICAgIDxTdWdnZXN0XG4gICAgICAgIHZhbHVlPVwiMVwiXG4gICAgICAgIG9uU2VhcmNoPXsoKSA9PiB7fX1cbiAgICAgID5cbiAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjFcIj5wZW5neW91cXVhbjwvT3B0aW9uPlxuICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMlwiPmdvbmd6aG9uZ2hhbzwvT3B0aW9uPlxuICAgICAgPC9TdWdnZXN0PlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICAvLyBpdChcIlN1Z2dlc3Qg5pCc57Si5Yqf6IO9XCIsICgpID0+IHtcbiAgLy8gICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gIC8vICAgICA8U3VnZ2VzdFxuICAvLyAgICAgICBvblNlYXJjaD17dmFsID0+IHt9fVxuICAvLyAgICAgPlxuICAvLyAgICAgICA8T3B0aW9uIHZhbHVlPXsxfT5wZW5neW91cXVhbjwvT3B0aW9uPlxuICAvLyAgICAgICA8T3B0aW9uIHZhbHVlPXsyfT5nb25nemhvbmdoYW88L09wdGlvbj5cbiAgLy8gICAgIDwvU3VnZ2VzdD5cbiAgLy8gICApXG4gIC8vICAgY29uc3QgaW5wdXQgPSB3cmFwcGVyLmZpbmQoXCIuYWR1aS1zdWdnZXN0LXNlYXJjaF9fZmllbGRcIilcbiAgLy8gICBpbnB1dC5zaW11bGF0ZShcIm1vdXNlZG93blwiKVxuICAvLyAgIGlucHV0LnNpbXVsYXRlKFwibW91c2V1cFwiKVxuICAvLyAgIGlucHV0LnNpbXVsYXRlKFwia2V5ZG93blwiLCB7a2V5OiBcInpcIiwga2V5Q29kZTogOTAgfSlcbiAgLy8gICBpbnB1dC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCJ6XCIgfSB9KVxuICAvLyAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgLy8gfSlcbn0pXG4iXX0=