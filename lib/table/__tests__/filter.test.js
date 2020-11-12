"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var sinon = _interopRequireWildcard(require("sinon"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Column = _["default"].Column;
var filters = [{
  text: "朋友圈广告",
  value: "1"
}, {
  text: "公众号广告",
  value: "2"
}];

var FilterMounter = function FilterMounter() {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      filteredValue = _useState2[0],
      set = _useState2[1];

  return _react["default"].createElement(_["default"], {
    dataSource: [{
      filter: "filter"
    }]
  }, _react["default"].createElement(Column, {
    title: "\u7B5B\u9009",
    dataIndex: "filter",
    filters: filters,
    filteredValue: filteredValue,
    onFilter: function onFilter(argFilteredValue) {
      return set(argFilteredValue);
    }
  }));
};

describe("筛选功能", function () {
  beforeEach(function () {
    jest.useFakeTimers();
  });
  afterEach(function () {
    jest.useRealTimers();
  });
  it("onFilter 不能与 onSort 共用", function () {
    var stub = sinon.stub(console, "error");
    (0, _enzyme.render)(_react["default"].createElement(_["default"], null, _react["default"].createElement(_["default"].Column, {
      title: "title",
      onFilter: function onFilter() {},
      onSort: function onSort() {}
    })));
    expect(stub.calledOnce).toEqual(true);
    stub.restore();
  });
  it("是否正确渲染", function () {
    var onFilter = jest.fn();

    var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_["default"], {
      dataSource: [{
        filter: "filter"
      }]
    }, _react["default"].createElement(Column, {
      title: "\u7B5B\u9009",
      dataIndex: "filter",
      filters: filters,
      onFilter: onFilter
    })));

    expect(wrapper).toMatchSnapshot();
  });
  it("是否能够内部驱动", function () {
    var onFilter = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      dataSource: [{
        filter: "filter"
      }]
    }, _react["default"].createElement(Column, {
      title: "\u7B5B\u9009",
      dataIndex: "filter",
      filters: filters,
      onFilter: onFilter
    })));
    var th = wrapper.find("[role='columnheader']").at(0);
    th.simulate("click");
    var dropdownWrapper = (0, _enzyme.mount)(wrapper.find("Trigger").instance().getComponent());
    dropdownWrapper.find("label").at(1).simulate("click");
    expect(onFilter).toHaveBeenCalledWith(["1"]);
    dropdownWrapper.find("label").at(2).simulate("click");
    expect(onFilter).toHaveBeenCalledWith(["2"]);
    dropdownWrapper.find("label").at(0).simulate("click");
  });
  it("是否能够外部控制", function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(FilterMounter, null));
    var th = wrapper.find("[role='columnheader']").at(0);
    th.simulate("click");
    var dropdownWrapper = (0, _enzyme.mount)(wrapper.find("Trigger").instance().getComponent());
    dropdownWrapper.find("label").at(0).simulate("click");
    expect(wrapper.find(".adui-table-filter").at(0).props()["data-value"]).toEqual(["all"]);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvX190ZXN0c19fL2ZpbHRlci50ZXN0LnRzeCJdLCJuYW1lcyI6WyJDb2x1bW4iLCJUYWJsZSIsImZpbHRlcnMiLCJ0ZXh0IiwidmFsdWUiLCJGaWx0ZXJNb3VudGVyIiwiZmlsdGVyZWRWYWx1ZSIsInNldCIsImZpbHRlciIsImFyZ0ZpbHRlcmVkVmFsdWUiLCJkZXNjcmliZSIsImJlZm9yZUVhY2giLCJqZXN0IiwidXNlRmFrZVRpbWVycyIsImFmdGVyRWFjaCIsInVzZVJlYWxUaW1lcnMiLCJpdCIsInN0dWIiLCJzaW5vbiIsImNvbnNvbGUiLCJleHBlY3QiLCJjYWxsZWRPbmNlIiwidG9FcXVhbCIsInJlc3RvcmUiLCJvbkZpbHRlciIsImZuIiwid3JhcHBlciIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsInRvTWF0Y2hTbmFwc2hvdCIsInRoIiwiZmluZCIsImF0Iiwic2ltdWxhdGUiLCJkcm9wZG93bldyYXBwZXIiLCJpbnN0YW5jZSIsImdldENvbXBvbmVudCIsInRvSGF2ZUJlZW5DYWxsZWRXaXRoIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxNLEdBQVdDLFksQ0FBWEQsTTtBQUVSLElBQU1FLE9BQU8sR0FBRyxDQUNkO0FBQ0VDLEVBQUFBLElBQUksRUFBRSxPQURSO0FBRUVDLEVBQUFBLEtBQUssRUFBRTtBQUZULENBRGMsRUFLZDtBQUNFRCxFQUFBQSxJQUFJLEVBQUUsT0FEUjtBQUVFQyxFQUFBQSxLQUFLLEVBQUU7QUFGVCxDQUxjLENBQWhCOztBQVdBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBLGtCQUNHLHFCQUFjLElBQWQsQ0FESDtBQUFBO0FBQUEsTUFDbkJDLGFBRG1CO0FBQUEsTUFDSkMsR0FESTs7QUFHMUIsU0FDRSxnQ0FBQyxZQUFEO0FBQ0UsSUFBQSxVQUFVLEVB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dCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyByZW5kZXIsIG1vdW50IH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gXCJyZWFjdC10ZXN0LXJlbmRlcmVyXCJcbmltcG9ydCAqIGFzIHNpbm9uIGZyb20gXCJzaW5vblwiXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4uXCJcblxuY29uc3QgeyBDb2x1bW4gfSA9IFRhYmxlXG5cbmNvbnN0IGZpbHRlcnMgPSBbXG4gIHtcbiAgICB0ZXh0OiBcIuaci+WPi+WciOW5v+WRilwiLFxuICAgIHZhbHVlOiBcIjFcIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwi5YWs5LyX5Y+35bm/5ZGKXCIsXG4gICAgdmFsdWU6IFwiMlwiLFxuICB9LFxuXVxuXG5jb25zdCBGaWx0ZXJNb3VudGVyID0gKCkgPT4ge1xuICBjb25zdCBbZmlsdGVyZWRWYWx1ZSwgc2V0XSA9IHVzZVN0YXRlPGFueT4obnVsbClcblxuICByZXR1cm4gKFxuICAgIDxUYWJsZVxuICAgICAgZGF0YVNvdXJjZT17W1xuICAgICAgICB7XG4gICAgICAgICAgZmlsdGVyOiBcImZpbHRlclwiLFxuICAgICAgICB9LFxuICAgICAgXX1cbiAgICA+XG4gICAgICA8Q29sdW1uXG4gICAgICAgIHRpdGxlPVwi562b6YCJXCJcbiAgICAgICAgZGF0YUluZGV4PVwiZmlsdGVyXCJcbiAgICAgICAgZmlsdGVycz17ZmlsdGVyc31cbiAgICAgICAgZmlsdGVyZWRWYWx1ZT17ZmlsdGVyZWRWYWx1ZX1cbiAgICAgICAgb25GaWx0ZXI9e2FyZ0ZpbHRlcmVkVmFsdWUgPT4gc2V0KGFyZ0ZpbHRlcmVkVmFsdWUpfVxuICAgICAgLz5cbiAgICA8L1RhYmxlPlxuICApXG59XG5cbmRlc2NyaWJlKFwi562b6YCJ5Yqf6IO9XCIsICgpID0+IHtcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgamVzdC51c2VGYWtlVGltZXJzKClcbiAgfSlcblxuICBhZnRlckVhY2goKCkgPT4ge1xuICAgIGplc3QudXNlUmVhbFRpbWVycygpXG4gIH0pXG5cbiAgLy8gaXQoXCJvbkZpbHRlciBQcm9wIOaYr+WQpuiDvemqjOivgSBmdW5jdGlvblwiLCAoKSA9PiB7XG4gIC8vICAgY29uc3Qgc3R1YiA9IHNpbm9uLnN0dWIoY29uc29sZSwgJ2Vycm9yJylcbiAgLy8gICBjb25zdCB3cmFwcGVyID0gcmVuZGVyKFxuICAvLyAgICAgPFRhYmxlPlxuICAvLyAgICAgICA8VGFibGUuQ29sdW1uXG4gIC8vICAgICAgICAgdGl0bGU9XCJ0aXRsZVwiXG4gIC8vICAgICAgICAgb25GaWx0ZXI9XCJzdHJpbmdcIlxuICAvLyAgICAgICAvPlxuICAvLyAgICAgPC9UYWJsZT5cbiAgLy8gICApXG4gIC8vICAgZXhwZWN0KHN0dWIuY2FsbENvdW50KS50b0JlKDEpXG4gIC8vICAgKGNvbnNvbGUgYXMgSUNvbnNvbGUpLmVycm9yLnJlc3RvcmUoKVxuICAvLyB9KVxuXG4gIGl0KFwib25GaWx0ZXIg5LiN6IO95LiOIG9uU29ydCDlhbHnlKhcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHN0dWIgPSBzaW5vbi5zdHViKGNvbnNvbGUsIFwiZXJyb3JcIilcbiAgICByZW5kZXIoXG4gICAgICA8VGFibGU+XG4gICAgICAgIDxUYWJsZS5Db2x1bW4gdGl0bGU9XCJ0aXRsZVwiIG9uRmlsdGVyPXsoKSA9PiB7fX0gb25Tb3J0PXsoKSA9PiB7fX0gLz5cbiAgICAgIDwvVGFibGU+XG4gICAgKVxuICAgIGV4cGVjdChzdHViLmNhbGxlZE9uY2UpLnRvRXF1YWwodHJ1ZSlcbiAgICBzdHViLnJlc3RvcmUoKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm5q2j56Gu5riy5p+TXCIsICgpID0+IHtcbiAgICBjb25zdCBvbkZpbHRlciA9IGplc3QuZm4oKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPFRhYmxlXG4gICAgICAgIGRhdGFTb3VyY2U9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWx0ZXI6IFwiZmlsdGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIHRpdGxlPVwi562b6YCJXCJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJmaWx0ZXJcIlxuICAgICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgICAgb25GaWx0ZXI9e29uRmlsdGVyfVxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKbog73lpJ/lhoXpg6jpqbHliqhcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uRmlsdGVyID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFRhYmxlXG4gICAgICAgIGRhdGFTb3VyY2U9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWx0ZXI6IFwiZmlsdGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIHRpdGxlPVwi562b6YCJXCJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJmaWx0ZXJcIlxuICAgICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgICAgb25GaWx0ZXI9e29uRmlsdGVyfVxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gICAgY29uc3QgdGggPSB3cmFwcGVyLmZpbmQoXCJbcm9sZT0nY29sdW1uaGVhZGVyJ11cIikuYXQoMClcbiAgICB0aC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgY29uc3QgZHJvcGRvd25XcmFwcGVyID0gbW91bnQoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiVHJpZ2dlclwiKVxuICAgICAgICAuaW5zdGFuY2UoKVxuICAgICAgICAuZ2V0Q29tcG9uZW50KClcbiAgICApXG4gICAgZHJvcGRvd25XcmFwcGVyXG4gICAgICAuZmluZChcImxhYmVsXCIpXG4gICAgICAuYXQoMSlcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgLy8gZXhwZWN0KFxuICAgIC8vICAgd3JhcHBlclxuICAgIC8vICAgICAuZmluZChcIi5hZHVpLXRhYmxlLWZpbHRlclwiKVxuICAgIC8vICAgICAuYXQoMClcbiAgICAvLyAgICAgLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdXG4gICAgLy8gKS50b0VxdWFsKFtcIjFcIl0pXG4gICAgZXhwZWN0KG9uRmlsdGVyKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChbXCIxXCJdKVxuICAgIGRyb3Bkb3duV3JhcHBlclxuICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgLmF0KDIpXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIC8vIGV4cGVjdChcbiAgICAvLyAgIHdyYXBwZXJcbiAgICAvLyAgICAgLmZpbmQoXCIuYWR1aS10YWJsZS1maWx0ZXJcIilcbiAgICAvLyAgICAgLmF0KDApXG4gICAgLy8gICAgIC5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXVxuICAgIC8vICkudG9FcXVhbChbXCIyXCJdKVxuICAgIGV4cGVjdChvbkZpbHRlcikudG9IYXZlQmVlbkNhbGxlZFdpdGgoW1wiMlwiXSlcbiAgICAvKipcbiAgICAgKiDkuI3nn6XpgZPkuLrku4DkuYjov5vkuI3liLDov5nkuKrpgLvovpHph4zvvIzlr7zoh7QgVGFibGVGaWx0ZXIg55qEIFN0YXRlbWVudHMg5LiN6IO9IDEwMCVcbiAgICAgKiBpZiAoZmlsdGVyZWRWYWx1ZSA9PT0gXCJhbGxcIikge1xuICAgICAqICAgICAgb25GaWx0ZXIoW10pXG4gICAgICogfVxuICAgICAqL1xuICAgIGRyb3Bkb3duV3JhcHBlclxuICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIC8vIGplc3QucnVuQWxsVGltZXJzKClcbiAgfSlcblxuICBpdChcIuaYr+WQpuiDveWkn+WklumDqOaOp+WItlwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxGaWx0ZXJNb3VudGVyIC8+KVxuICAgIGNvbnN0IHRoID0gd3JhcHBlci5maW5kKFwiW3JvbGU9J2NvbHVtbmhlYWRlciddXCIpLmF0KDApXG4gICAgdGguc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGNvbnN0IGRyb3Bkb3duV3JhcHBlciA9IG1vdW50KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIlRyaWdnZXJcIilcbiAgICAgICAgLmluc3RhbmNlKClcbiAgICAgICAgLmdldENvbXBvbmVudCgpXG4gICAgKVxuICAgIGRyb3Bkb3duV3JhcHBlclxuICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS10YWJsZS1maWx0ZXJcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXVxuICAgICkudG9FcXVhbChbXCJhbGxcIl0pXG4gICAgLy8gZHJvcGRvd25XcmFwcGVyXG4gICAgLy8gICAuZmluZChcImxhYmVsXCIpXG4gICAgLy8gICAuYXQoMilcbiAgICAvLyAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgLy8gZXhwZWN0KFxuICAgIC8vICAgd3JhcHBlclxuICAgIC8vICAgICAuZmluZChcIi5hZHVpLXRhYmxlLWZpbHRlclwiKVxuICAgIC8vICAgICAuYXQoMClcbiAgICAvLyAgICAgLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdXG4gICAgLy8gKS50b0VxdWFsKFtcIjJcIl0pXG4gIH0pXG59KVxuIl19