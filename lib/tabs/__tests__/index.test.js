"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("react-dom/test-utils");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Tab = _["default"].Tab;
describe("Tabs", function () {
  beforeAll(function () {
    jest.useFakeTimers();
  });
  afterAll(function () {
    jest.useRealTimers();
  });
  it("验证快照", function () {
    var wrapper0 = _reactTestRenderer["default"].create(React.createElement(_["default"], {
      gutter: 10
    }, React.createElement(Tab, {
      title: "1",
      value: "1"
    })));

    var wrapper1 = _reactTestRenderer["default"].create(React.createElement(_["default"], null, "string"));

    expect(wrapper0).toMatchSnapshot();
    expect(wrapper1).toMatchSnapshot();
  });
  it("验证 setIndicatorStyle 快照", function () {
    var wrapper0 = (0, _enzyme.mount)(React.createElement(_["default"], {
      value: "2"
    }, React.createElement(Tab, {
      title: "1",
      value: "1"
    }), React.createElement(Tab, {
      title: "2",
      value: "2"
    })));
    var wrapper1 = (0, _enzyme.mount)(React.createElement(_["default"], null, React.createElement(Tab, {
      title: "1",
      value: "1"
    }), React.createElement(Tab, {
      title: "2",
      value: "2"
    })));
    (0, _testUtils.act)(function () {
      jest.advanceTimersByTime(0);
    });
    expect(wrapper0).toMatchSnapshot();
    expect(wrapper1).toMatchSnapshot();
  });
  it("是否能够内部驱动", function () {
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      defaultValue: "1"
    }, React.createElement(Tab, {
      title: "1",
      value: "1"
    }), React.createElement(Tab, {
      title: "2",
      value: "2"
    })));
    expect(wrapper.find("div").at(0).props()["data-value"]).toEqual("1");
    wrapper.find("[role='tab']").at(1).simulate("click");
    expect(wrapper.find("div").at(0).props()["data-value"]).toEqual("2");
  });
  it("是否能受外部控制", function () {
    var wrapper0 = (0, _enzyme.mount)(React.createElement(_["default"], {
      value: "1"
    }, React.createElement(Tab, {
      title: "1",
      value: "1"
    }), React.createElement(Tab, {
      title: "2",
      value: "2"
    })));
    expect(wrapper0.find("div").at(0).props()["data-value"]).toEqual("1");
    wrapper0.find("[role='tab']").at(1).simulate("click");
    expect(wrapper0.find("div").at(0).props()["data-value"]).toEqual("1");
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFicy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwibmFtZXMiOlsiVGFiIiwiVGFicyIsImRlc2NyaWJlIiwiYmVmb3JlQWxsIiwiamVzdCIsInVzZUZha2VUaW1lcnMiLCJhZnRlckFsbCIsInVzZVJlYWxUaW1lcnMiLCJpdCIsIndyYXBwZXIwIiwiVGVzdFJlbmRlcmVyIiwiY3JlYXRlIiwid3JhcHBlcjEiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJhZHZhbmNlVGltZXJzQnlUaW1lIiwid3JhcHBlciIsImZpbmQiLCJhdCIsInByb3BzIiwidG9FcXVhbCIsInNpbXVsYXRlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBRVFBLEcsR0FBUUMsWSxDQUFSRCxHO0FBRVJFLFFBQVEsQ0FBQyxNQUFELEVBQVMsWUFBTTtBQUNyQkMsRUFBQUEsU0FBUyxDQUFDLFlBQU07QUFDZEMsSUFBQUEsSUFBSSxDQUFDQyxhQUFMO0FBQ0QsR0FGUSxDQUFUO0FBSUFDLEVBQUFBLFFBQVEsQ0FBQyxZQUFNO0FBQ2JGLElBQUFBLElBQUksQ0FBQ0csYUFBTDtBQUNELEdBRk8sQ0FBUjtBQUlBQyxFQUFBQSxFQUFFLENBQUMsTUFBRCxFQUFTLFlBQU07QUFDZixRQUFNQyxRQUFRLEdBQUdDLDhCQUFhQyxNQUFiLENBQ2Ysb0JBQUMsWUFBRDtBQUFNLE1BQUEsTUFBTSxFQUFFO0FBQWQsT0FDRSxvQkFBQyxHQUFEO0FBQUssTUFBQSxLQUFLLEVBQUMsR0FBWDtBQUFlLE1BQUEsS0FBSyxFQUFDO0FBQXJCLE1BREYsQ0FEZSxDQUFqQjs7QUFLQSxRQUFNQyxRQUFRLEdBQUdGLDhCQUFhQyxNQUFiLENBQW9CLG9CQUFDLFlBQUQsaUJBQXBCLENBQWpCOztBQUNBRSxJQUFBQSxNQUFNLENBQUNKLFFBQUQsQ0FBTixDQUFpQkssZUFBakI7QUFDQUQsSUFBQUEsTUFBTSxDQUFD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QUhILEdBR1csWUFIWCxDQURJLENBQU4sQ0FLRUMsT0FMRixDQUtVLEdBTFY7QUFNRCxHQXZCQyxDQUFGO0FBd0JELENBMUZPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgYWN0IH0gZnJvbSBcInJlYWN0LWRvbS90ZXN0LXV0aWxzXCJcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSBcInJlYWN0LXRlc3QtcmVuZGVyZXJcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBUYWJzIGZyb20gXCIuLlwiXG5cbmNvbnN0IHsgVGFiIH0gPSBUYWJzXG5cbmRlc2NyaWJlKFwiVGFic1wiLCAoKSA9PiB7XG4gIGJlZm9yZUFsbCgoKSA9PiB7XG4gICAgamVzdC51c2VGYWtlVGltZXJzKClcbiAgfSlcblxuICBhZnRlckFsbCgoKSA9PiB7XG4gICAgamVzdC51c2VSZWFsVGltZXJzKClcbiAgfSlcblxuICBpdChcIumqjOivgeW/q+eFp1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlcjAgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPFRhYnMgZ3V0dGVyPXsxMH0+XG4gICAgICAgIDxUYWIgdGl0bGU9XCIxXCIgdmFsdWU9XCIxXCIgLz5cbiAgICAgIDwvVGFicz5cbiAgICApXG4gICAgY29uc3Qgd3JhcHBlcjEgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKDxUYWJzPnN0cmluZzwvVGFicz4pXG4gICAgZXhwZWN0KHdyYXBwZXIwKS50b01hdGNoU25hcHNob3QoKVxuICAgIGV4cGVjdCh3cmFwcGVyMSkudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIumqjOivgSBzZXRJbmRpY2F0b3JTdHlsZSDlv6vnhadcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIwID0gbW91bnQoXG4gICAgICA8VGFicyB2YWx1ZT1cIjJcIj5cbiAgICAgICAgPFRhYiB0aXRsZT1cIjFcIiB2YWx1ZT1cIjFcIiAvPlxuICAgICAgICA8VGFiIHRpdGxlPVwiMlwiIHZhbHVlPVwiMlwiIC8+XG4gICAgICA8L1RhYnM+XG4gICAgKVxuICAgIGNvbnN0IHdyYXBwZXIxID0gbW91bnQoXG4gICAgICA8VGFicz5cbiAgICAgICAgPFRhYiB0aXRsZT1cIjFcIiB2YWx1ZT1cIjFcIiAvPlxuICAgICAgICA8VGFiIHRpdGxlPVwiMlwiIHZhbHVlPVwiMlwiIC8+XG4gICAgICA8L1RhYnM+XG4gICAgKVxuICAgIGFjdCgoKSA9PiB7XG4gICAgICAvLyDnrYnlvoUgMG1z77yM6L+Z5qC35omN6IO96Kem5Y+RIHNldEluZGljYXRvclN0eWxlIOaWueazlVxuICAgICAgamVzdC5hZHZhbmNlVGltZXJzQnlUaW1lKDApXG4gICAgfSlcbiAgICBleHBlY3Qod3JhcHBlcjApLnRvTWF0Y2hTbmFwc2hvdCgpXG4gICAgZXhwZWN0KHdyYXBwZXIxKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm6IO95aSf5YaF6YOo6amx5YqoXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8VGFicyBkZWZhdWx0VmFsdWU9XCIxXCI+XG4gICAgICAgIDxUYWIgdGl0bGU9XCIxXCIgdmFsdWU9XCIxXCIgLz5cbiAgICAgICAgPFRhYiB0aXRsZT1cIjJcIiB2YWx1ZT1cIjJcIiAvPlxuICAgICAgPC9UYWJzPlxuICAgIClcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiZGl2XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtdmFsdWVcIl1cbiAgICApLnRvRXF1YWwoXCIxXCIpXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCJbcm9sZT0ndGFiJ11cIilcbiAgICAgIC5hdCgxKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiZGl2XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtdmFsdWVcIl1cbiAgICApLnRvRXF1YWwoXCIyXCIpXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKbog73lj5flpJbpg6jmjqfliLZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIwID0gbW91bnQoXG4gICAgICA8VGFicyB2YWx1ZT1cIjFcIj5cbiAgICAgICAgPFRhYiB0aXRsZT1cIjFcIiB2YWx1ZT1cIjFcIiAvPlxuICAgICAgICA8VGFiIHRpdGxlPVwiMlwiIHZhbHVlPVwiMlwiIC8+XG4gICAgICA8L1RhYnM+XG4gICAgKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIwXG4gICAgICAgIC5maW5kKFwiZGl2XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtdmFsdWVcIl1cbiAgICApLnRvRXF1YWwoXCIxXCIpXG4gICAgd3JhcHBlcjBcbiAgICAgIC5maW5kKFwiW3JvbGU9J3RhYiddXCIpXG4gICAgICAuYXQoMSlcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlcjBcbiAgICAgICAgLmZpbmQoXCJkaXZcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXVxuICAgICkudG9FcXVhbChcIjFcIilcbiAgfSlcbn0pXG4iXX0=