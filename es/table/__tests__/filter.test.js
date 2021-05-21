function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from "react";
import { render, mount } from "enzyme";
import TestRenderer from "react-test-renderer";
import * as sinon from "sinon";
import Table from "..";
var Column = Table.Column;
var filters = [{
  text: "朋友圈广告",
  value: "1"
}, {
  text: "公众号广告",
  value: "2"
}];

var FilterMounter = function FilterMounter() {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      filteredValue = _useState2[0],
      set = _useState2[1];

  return React.createElement(Table, {
    dataSource: [{
      filter: "filter"
    }]
  }, React.createElement(Column, {
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
    render(React.createElement(Table, null, React.createElement(Table.Column, {
      title: "title",
      onFilter: function onFilter() {},
      onSort: function onSort() {}
    })));
    expect(stub.calledOnce).toEqual(true);
    stub.restore();
  });
  it("是否正确渲染", function () {
    var onFilter = jest.fn();
    var wrapper = TestRenderer.create(React.createElement(Table, {
      dataSource: [{
        filter: "filter"
      }]
    }, React.createElement(Column, {
      title: "\u7B5B\u9009",
      dataIndex: "filter",
      filters: filters,
      onFilter: onFilter
    })));
    expect(wrapper).toMatchSnapshot();
  });
  it("是否能够内部驱动", function () {
    var onFilter = jest.fn();
    var wrapper = mount(React.createElement(Table, {
      dataSource: [{
        filter: "filter"
      }]
    }, React.createElement(Column, {
      title: "\u7B5B\u9009",
      dataIndex: "filter",
      filters: filters,
      onFilter: onFilter
    })));
    var th = wrapper.find("[role='columnheader']").at(0);
    th.simulate("click");
    var dropdownWrapper = mount(wrapper.find("Trigger").instance().getComponent());
    dropdownWrapper.find("label").at(1).simulate("click");
    expect(onFilter).toHaveBeenCalledWith(["1"]);
    dropdownWrapper.find("label").at(2).simulate("click");
    expect(onFilter).toHaveBeenCalledWith(["2"]);
    dropdownWrapper.find("label").at(0).simulate("click");
  });
  it("是否能够外部控制", function () {
    var wrapper = mount(React.createElement(FilterMounter, null));
    var th = wrapper.find("[role='columnheader']").at(0);
    th.simulate("click");
    var dropdownWrapper = mount(wrapper.find("Trigger").instance().getComponent());
    dropdownWrapper.find("label").at(0).simulate("click");
    expect(wrapper.find(".adui-table-filter").at(0).props()["data-value"]).toEqual(["all"]);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvX190ZXN0c19fL2ZpbHRlci50ZXN0LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwicmVuZGVyIiwibW91bnQiLCJUZXN0UmVuZGVyZXIiLCJzaW5vbiIsIlRhYmxlIiwiQ29sdW1uIiwiZmlsdGVycyIsInRleHQiLCJ2YWx1ZSIsIkZpbHRlck1vdW50ZXIiLCJmaWx0ZXJlZFZhbHVlIiwic2V0IiwiZmlsdGVyIiwiYXJnRmlsdGVyZWRWYWx1ZSIsImRlc2NyaWJlIiwiYmVmb3JlRWFjaCIsImplc3QiLCJ1c2VGYWtlVGltZXJzIiwiYWZ0ZXJFYWNoIiwidXNlUmVhbFRpbWVycyIsIml0Iiwic3R1YiIsImNvbnNvbGUiLCJleHBlY3QiLCJjYWxsZWRPbmNlIiwidG9FcXVhbCIsInJlc3RvcmUiLCJvbkZpbHRlciIsImZuIiwid3JhcHBlciIsImNyZWF0ZSIsInRvTWF0Y2hTbmFwc2hvdCIsInRoIiwiZmluZCIsImF0Iiwic2ltdWxhdGUiLCJkcm9wZG93bldyYXBwZXIiLCJpbnN0YW5jZSIsImdldENvbXBvbmVudCIsInRvSGF2ZUJlZW5DYWxsZWRXaXRoIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFFBQWhCLFFBQWdDLE9BQWhDO0FBQ0EsU0FBU0MsTUFBVCxFQUFpQkMsS0FBakIsUUFBOEIsUUFBOUI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLHFCQUF6QjtBQUNBLE9BQU8sS0FBS0MsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsSUFBbEI7SUFFUUMsTSxHQUFXRCxLLENBQVhDLE07QUFFUixJQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUNFQyxFQUFBQSxJQUFJLEVBQUUsT0FEUjtBQUVFQyxFQUFBQSxLQUFLLEVBQUU7QUFGVCxDQURjLEVBS2Q7QUFDRUQsRUFBQUEsSUFBSSxFQUFFLE9BRFI7QUFFRUMsRUFBQUEs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QUZILENBRU0sQ0FGTixFQUdHQyxRQUhILENBR1ksT0FIWjtBQUlBWixJQUFBQSxNQUFNLENBQ0pNLE9BQU8sQ0FDSkksSUFESCxDQUNRLG9CQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dNLEtBSEgsR0FHVyxZQUhYLENBREksQ0FBTixDQUtFZixPQUxGLENBS1UsQ0FBQyxLQUFELENBTFY7QUFnQkQsR0E5QkMsQ0FBRjtBQStCRCxDQW5KTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHJlbmRlciwgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSBcInJlYWN0LXRlc3QtcmVuZGVyZXJcIlxuaW1wb3J0ICogYXMgc2lub24gZnJvbSBcInNpbm9uXCJcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi5cIlxuXG5jb25zdCB7IENvbHVtbiB9ID0gVGFibGVcblxuY29uc3QgZmlsdGVycyA9IFtcbiAge1xuICAgIHRleHQ6IFwi5pyL5Y+L5ZyI5bm/5ZGKXCIsXG4gICAgdmFsdWU6IFwiMVwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCLlhazkvJflj7flub/lkYpcIixcbiAgICB2YWx1ZTogXCIyXCIsXG4gIH0sXG5dXG5cbmNvbnN0IEZpbHRlck1vdW50ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtmaWx0ZXJlZFZhbHVlLCBzZXRdID0gdXNlU3RhdGU8YW55PihudWxsKVxuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlXG4gICAgICBkYXRhU291cmNlPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWx0ZXI6IFwiZmlsdGVyXCIsXG4gICAgICAgIH0sXG4gICAgICBdfVxuICAgID5cbiAgICAgIDxDb2x1bW5cbiAgICAgICAgdGl0bGU9XCLnrZvpgIlcIlxuICAgICAgICBkYXRhSW5kZXg9XCJmaWx0ZXJcIlxuICAgICAgICBmaWx0ZXJzPXtmaWx0ZXJzfVxuICAgICAgICBmaWx0ZXJlZFZhbHVlPXtmaWx0ZXJlZFZhbHVlfVxuICAgICAgICBvbkZpbHRlcj17YXJnRmlsdGVyZWRWYWx1ZSA9PiBzZXQoYXJnRmlsdGVyZWRWYWx1ZSl9XG4gICAgICAvPlxuICAgIDwvVGFibGU+XG4gIClcbn1cblxuZGVzY3JpYmUoXCLnrZvpgInlip/og71cIiwgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBqZXN0LnVzZUZha2VUaW1lcnMoKVxuICB9KVxuXG4gIGFmdGVyRWFjaCgoKSA9PiB7XG4gICAgamVzdC51c2VSZWFsVGltZXJzKClcbiAgfSlcblxuICAvLyBpdChcIm9uRmlsdGVyIFByb3Ag5piv5ZCm6IO96aqM6K+BIGZ1bmN0aW9uXCIsICgpID0+IHtcbiAgLy8gICBjb25zdCBzdHViID0gc2lub24uc3R1Yihjb25zb2xlLCAnZXJyb3InKVxuICAvLyAgIGNvbnN0IHdyYXBwZXIgPSByZW5kZXIoXG4gIC8vICAgICA8VGFibGU+XG4gIC8vICAgICAgIDxUYWJsZS5Db2x1bW5cbiAgLy8gICAgICAgICB0aXRsZT1cInRpdGxlXCJcbiAgLy8gICAgICAgICBvbkZpbHRlcj1cInN0cmluZ1wiXG4gIC8vICAgICAgIC8+XG4gIC8vICAgICA8L1RhYmxlPlxuICAvLyAgIClcbiAgLy8gICBleHBlY3Qoc3R1Yi5jYWxsQ291bnQpLnRvQmUoMSlcbiAgLy8gICAoY29uc29sZSBhcyBJQ29uc29sZSkuZXJyb3IucmVzdG9yZSgpXG4gIC8vIH0pXG5cbiAgaXQoXCJvbkZpbHRlciDkuI3og73kuI4gb25Tb3J0IOWFseeUqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgc3R1YiA9IHNpbm9uLnN0dWIoY29uc29sZSwgXCJlcnJvclwiKVxuICAgIHJlbmRlcihcbiAgICAgIDxUYWJsZT5cbiAgICAgICAgPFRhYmxlLkNvbHVtbiB0aXRsZT1cInRpdGxlXCIgb25GaWx0ZXI9eygpID0+IHt9fSBvblNvcnQ9eygpID0+IHt9fSAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gICAgZXhwZWN0KHN0dWIuY2FsbGVkT25jZSkudG9FcXVhbCh0cnVlKVxuICAgIHN0dWIucmVzdG9yZSgpXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uRmlsdGVyID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IFRlc3RSZW5kZXJlci5jcmVhdGUoXG4gICAgICA8VGFibGVcbiAgICAgICAgZGF0YVNvdXJjZT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpbHRlcjogXCJmaWx0ZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgdGl0bGU9XCLnrZvpgIlcIlxuICAgICAgICAgIGRhdGFJbmRleD1cImZpbHRlclwiXG4gICAgICAgICAgZmlsdGVycz17ZmlsdGVyc31cbiAgICAgICAgICBvbkZpbHRlcj17b25GaWx0ZXJ9XG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIuaYr+WQpuiDveWkn+WGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25GaWx0ZXIgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8VGFibGVcbiAgICAgICAgZGF0YVNvdXJjZT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpbHRlcjogXCJmaWx0ZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgdGl0bGU9XCLnrZvpgIlcIlxuICAgICAgICAgIGRhdGFJbmRleD1cImZpbHRlclwiXG4gICAgICAgICAgZmlsdGVycz17ZmlsdGVyc31cbiAgICAgICAgICBvbkZpbHRlcj17b25GaWx0ZXJ9XG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgICBjb25zdCB0aCA9IHdyYXBwZXIuZmluZChcIltyb2xlPSdjb2x1bW5oZWFkZXInXVwiKS5hdCgwKVxuICAgIHRoLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBjb25zdCBkcm9wZG93bldyYXBwZXIgPSBtb3VudChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJUcmlnZ2VyXCIpXG4gICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgIC5nZXRDb21wb25lbnQoKVxuICAgIClcbiAgICBkcm9wZG93bldyYXBwZXJcbiAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgIC5hdCgxKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAvLyBleHBlY3QoXG4gICAgLy8gICB3cmFwcGVyXG4gICAgLy8gICAgIC5maW5kKFwiLmFkdWktdGFibGUtZmlsdGVyXCIpXG4gICAgLy8gICAgIC5hdCgwKVxuICAgIC8vICAgICAucHJvcHMoKVtcImRhdGEtdmFsdWVcIl1cbiAgICAvLyApLnRvRXF1YWwoW1wiMVwiXSlcbiAgICBleHBlY3Qob25GaWx0ZXIpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFtcIjFcIl0pXG4gICAgZHJvcGRvd25XcmFwcGVyXG4gICAgICAuZmluZChcImxhYmVsXCIpXG4gICAgICAuYXQoMilcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgLy8gZXhwZWN0KFxuICAgIC8vICAgd3JhcHBlclxuICAgIC8vICAgICAuZmluZChcIi5hZHVpLXRhYmxlLWZpbHRlclwiKVxuICAgIC8vICAgICAuYXQoMClcbiAgICAvLyAgICAgLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdXG4gICAgLy8gKS50b0VxdWFsKFtcIjJcIl0pXG4gICAgZXhwZWN0KG9uRmlsdGVyKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChbXCIyXCJdKVxuICAgIC8qKlxuICAgICAqIOS4jeefpemBk+S4uuS7gOS5iOi/m+S4jeWIsOi/meS4qumAu+i+kemHjO+8jOWvvOiHtCBUYWJsZUZpbHRlciDnmoQgU3RhdGVtZW50cyDkuI3og70gMTAwJVxuICAgICAqIGlmIChmaWx0ZXJlZFZhbHVlID09PSBcImFsbFwiKSB7XG4gICAgICogICAgICBvbkZpbHRlcihbXSlcbiAgICAgKiB9XG4gICAgICovXG4gICAgZHJvcGRvd25XcmFwcGVyXG4gICAgICAuZmluZChcImxhYmVsXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgLy8gamVzdC5ydW5BbGxUaW1lcnMoKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm6IO95aSf5aSW6YOo5o6n5Yi2XCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEZpbHRlck1vdW50ZXIgLz4pXG4gICAgY29uc3QgdGggPSB3cmFwcGVyLmZpbmQoXCJbcm9sZT0nY29sdW1uaGVhZGVyJ11cIikuYXQoMClcbiAgICB0aC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgY29uc3QgZHJvcGRvd25XcmFwcGVyID0gbW91bnQoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiVHJpZ2dlclwiKVxuICAgICAgICAuaW5zdGFuY2UoKVxuICAgICAgICAuZ2V0Q29tcG9uZW50KClcbiAgICApXG4gICAgZHJvcGRvd25XcmFwcGVyXG4gICAgICAuZmluZChcImxhYmVsXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLXRhYmxlLWZpbHRlclwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdXG4gICAgKS50b0VxdWFsKFtcImFsbFwiXSlcbiAgICAvLyBkcm9wZG93bldyYXBwZXJcbiAgICAvLyAgIC5maW5kKFwibGFiZWxcIilcbiAgICAvLyAgIC5hdCgyKVxuICAgIC8vICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAvLyBleHBlY3QoXG4gICAgLy8gICB3cmFwcGVyXG4gICAgLy8gICAgIC5maW5kKFwiLmFkdWktdGFibGUtZmlsdGVyXCIpXG4gICAgLy8gICAgIC5hdCgwKVxuICAgIC8vICAgICAucHJvcHMoKVtcImRhdGEtdmFsdWVcIl1cbiAgICAvLyApLnRvRXF1YWwoW1wiMlwiXSlcbiAgfSlcbn0pXG4iXX0=