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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvX190ZXN0c19fL2ZpbHRlci50ZXN0LnRzeCJdLCJuYW1lcyI6WyJDb2x1bW4iLCJUYWJsZSIsImZpbHRlcnMiLCJ0ZXh0IiwidmFsdWUiLCJGaWx0ZXJNb3VudGVyIiwiZmlsdGVyZWRWYWx1ZSIsInNldCIsImZpbHRlciIsImFyZ0ZpbHRlcmVkVmFsdWUiLCJkZXNjcmliZSIsImJlZm9yZUVhY2giLCJqZXN0IiwidXNlRmFrZVRpbWVycyIsImFmdGVyRWFjaCIsInVzZVJlYWxUaW1lcnMiLCJpdCIsInN0dWIiLCJzaW5vbiIsImNvbnNvbGUiLCJleHBlY3QiLCJjYWxsZWRPbmNlIiwidG9FcXVhbCIsInJlc3RvcmUiLCJvbkZpbHRlciIsImZuIiwid3JhcHBlciIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsInRvTWF0Y2hTbmFwc2hvdCIsInRoIiwiZmluZCIsImF0Iiwic2ltdWxhdGUiLCJkcm9wZG93bldyYXBwZXIiLCJpbnN0YW5jZSIsImdldENvbXBvbmVudCIsInRvSGF2ZUJlZW5DYWxsZWRXaXRoIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsTSxHQUFXQyxZLENBQVhELE07QUFFUixJQUFNRSxPQUFPLEdBQUcsQ0FDZDtBQUNFQyxFQUFBQSxJQUFJLEVBQUUsT0FEUjtBQUVFQyxFQUFBQSxLQUFLLEVBQUU7QUFGVCxDQURjLEVBS2Q7QUFDRUQsRUFBQUEsSUFBSSxFQUFFLE9BRFI7QUFFRUMsRUFBQUEsS0FBSyxFQUFFO0FBRlQsQ0FMYyxDQUFoQjs7QUFXQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQSxrQkFDRyxxQkFBYyxJQUFkLENBREg7QUFBQTtBQUFBLE1BQ25CQyxhQURtQjtBQUFBLE1BQ0pDLEdBREk7O0FBRzFCLFNBQ0UsZ0NBQUMsWUFBRDtBQUNFLElBQUEsVUFB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bXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgcmVuZGVyLCBtb3VudCB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tIFwicmVhY3QtdGVzdC1yZW5kZXJlclwiXG5pbXBvcnQgKiBhcyBzaW5vbiBmcm9tIFwic2lub25cIlxuaW1wb3J0IFRhYmxlIGZyb20gXCIuLlwiXG5cbmNvbnN0IHsgQ29sdW1uIH0gPSBUYWJsZVxuXG5jb25zdCBmaWx0ZXJzID0gW1xuICB7XG4gICAgdGV4dDogXCLmnIvlj4vlnIjlub/lkYpcIixcbiAgICB2YWx1ZTogXCIxXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIuWFrOS8l+WPt+W5v+WRilwiLFxuICAgIHZhbHVlOiBcIjJcIixcbiAgfSxcbl1cblxuY29uc3QgRmlsdGVyTW91bnRlciA9ICgpID0+IHtcbiAgY29uc3QgW2ZpbHRlcmVkVmFsdWUsIHNldF0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpXG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVcbiAgICAgIGRhdGFTb3VyY2U9e1tcbiAgICAgICAge1xuICAgICAgICAgIGZpbHRlcjogXCJmaWx0ZXJcIixcbiAgICAgICAgfSxcbiAgICAgIF19XG4gICAgPlxuICAgICAgPENvbHVtblxuICAgICAgICB0aXRsZT1cIuetm+mAiVwiXG4gICAgICAgIGRhdGFJbmRleD1cImZpbHRlclwiXG4gICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgIGZpbHRlcmVkVmFsdWU9e2ZpbHRlcmVkVmFsdWV9XG4gICAgICAgIG9uRmlsdGVyPXthcmdGaWx0ZXJlZFZhbHVlID0+IHNldChhcmdGaWx0ZXJlZFZhbHVlKX1cbiAgICAgIC8+XG4gICAgPC9UYWJsZT5cbiAgKVxufVxuXG5kZXNjcmliZShcIuetm+mAieWKn+iDvVwiLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGplc3QudXNlRmFrZVRpbWVycygpXG4gIH0pXG5cbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICBqZXN0LnVzZVJlYWxUaW1lcnMoKVxuICB9KVxuXG4gIC8vIGl0KFwib25GaWx0ZXIgUHJvcCDmmK/lkKbog73pqozor4EgZnVuY3Rpb25cIiwgKCkgPT4ge1xuICAvLyAgIGNvbnN0IHN0dWIgPSBzaW5vbi5zdHViKGNvbnNvbGUsICdlcnJvcicpXG4gIC8vICAgY29uc3Qgd3JhcHBlciA9IHJlbmRlcihcbiAgLy8gICAgIDxUYWJsZT5cbiAgLy8gICAgICAgPFRhYmxlLkNvbHVtblxuICAvLyAgICAgICAgIHRpdGxlPVwidGl0bGVcIlxuICAvLyAgICAgICAgIG9uRmlsdGVyPVwic3RyaW5nXCJcbiAgLy8gICAgICAgLz5cbiAgLy8gICAgIDwvVGFibGU+XG4gIC8vICAgKVxuICAvLyAgIGV4cGVjdChzdHViLmNhbGxDb3VudCkudG9CZSgxKVxuICAvLyAgIChjb25zb2xlIGFzIElDb25zb2xlKS5lcnJvci5yZXN0b3JlKClcbiAgLy8gfSlcblxuICBpdChcIm9uRmlsdGVyIOS4jeiDveS4jiBvblNvcnQg5YWx55SoXCIsICgpID0+IHtcbiAgICBjb25zdCBzdHViID0gc2lub24uc3R1Yihjb25zb2xlLCBcImVycm9yXCIpXG4gICAgcmVuZGVyKFxuICAgICAgPFRhYmxlPlxuICAgICAgICA8VGFibGUuQ29sdW1uIHRpdGxlPVwidGl0bGVcIiBvbkZpbHRlcj17KCkgPT4ge319IG9uU29ydD17KCkgPT4ge319IC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgICBleHBlY3Qoc3R1Yi5jYWxsZWRPbmNlKS50b0VxdWFsKHRydWUpXG4gICAgc3R1Yi5yZXN0b3JlKClcbiAgfSlcblxuICBpdChcIuaYr+WQpuato+ehrua4suafk1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25GaWx0ZXIgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcbiAgICAgIDxUYWJsZVxuICAgICAgICBkYXRhU291cmNlPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmlsdGVyOiBcImZpbHRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICB0aXRsZT1cIuetm+mAiVwiXG4gICAgICAgICAgZGF0YUluZGV4PVwiZmlsdGVyXCJcbiAgICAgICAgICBmaWx0ZXJzPXtmaWx0ZXJzfVxuICAgICAgICAgIG9uRmlsdGVyPXtvbkZpbHRlcn1cbiAgICAgICAgLz5cbiAgICAgIDwvVGFibGU+XG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm6IO95aSf5YaF6YOo6amx5YqoXCIsICgpID0+IHtcbiAgICBjb25zdCBvbkZpbHRlciA9IGplc3QuZm4oKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxUYWJsZVxuICAgICAgICBkYXRhU291cmNlPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmlsdGVyOiBcImZpbHRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICB0aXRsZT1cIuetm+mAiVwiXG4gICAgICAgICAgZGF0YUluZGV4PVwiZmlsdGVyXCJcbiAgICAgICAgICBmaWx0ZXJzPXtmaWx0ZXJzfVxuICAgICAgICAgIG9uRmlsdGVyPXtvbkZpbHRlcn1cbiAgICAgICAgLz5cbiAgICAgIDwvVGFibGU+XG4gICAgKVxuICAgIGNvbnN0IHRoID0gd3JhcHBlci5maW5kKFwiW3JvbGU9J2NvbHVtbmhlYWRlciddXCIpLmF0KDApXG4gICAgdGguc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGNvbnN0IGRyb3Bkb3duV3JhcHBlciA9IG1vdW50KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIlRyaWdnZXJcIilcbiAgICAgICAgLmluc3RhbmNlKClcbiAgICAgICAgLmdldENvbXBvbmVudCgpXG4gICAgKVxuICAgIGRyb3Bkb3duV3JhcHBlclxuICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgLmF0KDEpXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIC8vIGV4cGVjdChcbiAgICAvLyAgIHdyYXBwZXJcbiAgICAvLyAgICAgLmZpbmQoXCIuYWR1aS10YWJsZS1maWx0ZXJcIilcbiAgICAvLyAgICAgLmF0KDApXG4gICAgLy8gICAgIC5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXVxuICAgIC8vICkudG9FcXVhbChbXCIxXCJdKVxuICAgIGV4cGVjdChvbkZpbHRlcikudG9IYXZlQmVlbkNhbGxlZFdpdGgoW1wiMVwiXSlcbiAgICBkcm9wZG93bldyYXBwZXJcbiAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgIC5hdCgyKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAvLyBleHBlY3QoXG4gICAgLy8gICB3cmFwcGVyXG4gICAgLy8gICAgIC5maW5kKFwiLmFkdWktdGFibGUtZmlsdGVyXCIpXG4gICAgLy8gICAgIC5hdCgwKVxuICAgIC8vICAgICAucHJvcHMoKVtcImRhdGEtdmFsdWVcIl1cbiAgICAvLyApLnRvRXF1YWwoW1wiMlwiXSlcbiAgICBleHBlY3Qob25GaWx0ZXIpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFtcIjJcIl0pXG4gICAgLyoqXG4gICAgICog5LiN55+l6YGT5Li65LuA5LmI6L+b5LiN5Yiw6L+Z5Liq6YC76L6R6YeM77yM5a+86Ie0IFRhYmxlRmlsdGVyIOeahCBTdGF0ZW1lbnRzIOS4jeiDvSAxMDAlXG4gICAgICogaWYgKGZpbHRlcmVkVmFsdWUgPT09IFwiYWxsXCIpIHtcbiAgICAgKiAgICAgIG9uRmlsdGVyKFtdKVxuICAgICAqIH1cbiAgICAgKi9cbiAgICBkcm9wZG93bldyYXBwZXJcbiAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAvLyBqZXN0LnJ1bkFsbFRpbWVycygpXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKbog73lpJ/lpJbpg6jmjqfliLZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8RmlsdGVyTW91bnRlciAvPilcbiAgICBjb25zdCB0aCA9IHdyYXBwZXIuZmluZChcIltyb2xlPSdjb2x1bW5oZWFkZXInXVwiKS5hdCgwKVxuICAgIHRoLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBjb25zdCBkcm9wZG93bldyYXBwZXIgPSBtb3VudChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJUcmlnZ2VyXCIpXG4gICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgIC5nZXRDb21wb25lbnQoKVxuICAgIClcbiAgICBkcm9wZG93bldyYXBwZXJcbiAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktdGFibGUtZmlsdGVyXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtdmFsdWVcIl1cbiAgICApLnRvRXF1YWwoW1wiYWxsXCJdKVxuICAgIC8vIGRyb3Bkb3duV3JhcHBlclxuICAgIC8vICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgIC8vICAgLmF0KDIpXG4gICAgLy8gICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIC8vIGV4cGVjdChcbiAgICAvLyAgIHdyYXBwZXJcbiAgICAvLyAgICAgLmZpbmQoXCIuYWR1aS10YWJsZS1maWx0ZXJcIilcbiAgICAvLyAgICAgLmF0KDApXG4gICAgLy8gICAgIC5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXVxuICAgIC8vICkudG9FcXVhbChbXCIyXCJdKVxuICB9KVxufSlcbiJdfQ==