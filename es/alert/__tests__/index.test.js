function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from "react";
import { mount } from "enzyme";
import TestRenderer from "react-test-renderer";
import async from "async";
import Alert from "..";

var AlertMounter = function AlertMounter() {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  return React.createElement(Alert, {
    expanded: expanded,
    expandContent: "1",
    onExpandChange: function onExpandChange(bool) {
      return setExpanded(bool);
    },
    text: "2",
    title: "3"
  });
};

function timeout(ms) {
  return function (done) {
    setTimeout(done, ms);
  };
}

describe("Alert", function () {
  it("是否正确渲染", function () {
    var wrapper = TestRenderer.create(React.createElement(Alert, {
      text: "\u8FD9\u662F\u4E00\u6761\u63D0\u793A\u4FE1\u606F",
      title: "\u63D0\u9192\u6807\u9898"
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it("展开内部驱动", function () {
    var wrapper = mount(React.createElement(Alert, {
      defaultExpanded: true,
      expandContent: "1",
      text: "2",
      title: "3"
    }));
    expect(wrapper.text().includes("收起")).toBe(true);
    wrapper.find(".adui-alert-expand").simulate("click");
    expect(wrapper.text().includes("收起")).toBe(false);
  });
  it("展开外部控制", function () {
    var wrapper = mount(React.createElement(AlertMounter, null));
    expect(wrapper.text().includes("收起")).toBe(true);
    wrapper.find(".adui-alert-expand").simulate("click");
    expect(wrapper.text().includes("收起")).toBe(false);
  });
  it("验证关闭", function (done) {
    var wrapper = mount(React.createElement(Alert, {
      closable: true,
      text: "\u8FD9\u662F\u4E00\u6761\u63D0\u793A\u4FE1\u606F",
      title: "\u63D0\u9192\u6807\u9898"
    }));
    wrapper.find(".adui-alert-closeIcon").at(0).simulate("click");
    async.series([timeout(350), function (next) {
      expect(wrapper.text()).toBe("");
      next();
    }], done);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvYWxlcnQvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3VudCIsIlRlc3RSZW5kZXJlciIsImFzeW5jIiwiQWxlcnQiLCJBbGVydE1vdW50ZXIiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiYm9vbCIsInRpbWVvdXQiLCJtcyIsImRvbmUiLCJzZXRUaW1lb3V0IiwiZGVzY3JpYmUiLCJpdCIsIndyYXBwZXIiLCJjcmVhdGUiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJ0ZXh0IiwiaW5jbHVkZXMiLCJ0b0JlIiwiZmluZCIsInNpbXVsYXRlIiwiYXQiLCJzZXJpZXMiLCJuZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxLQUFQLElBQWdCQyxRQUFoQixRQUFnQyxPQUFoQztBQUNBLFNBQVNDLEtBQVQsUUFBc0IsUUFBdEI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLHFCQUF6QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLElBQWxCOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQSxrQkFDT0wsUUFBUSxDQUFDLElBQUQsQ0FEZjtBQUFBO0FBQUEsTUFDbEJNLFFBRGtCO0FBQUEsTUFDUkMsV0FEUTs7QUFHekIsU0FDRSxvQkFBQyxLQUFEO0FBQ0UsSUFBQSxRQUFRLEVBQUVELFFBRFo7QUFFRSxJQUFBLGFBQWEsRUFBQyxHQUZoQjtBQUdFLElBQUEsY0FBYyxFQUFFLHdCQUFBRSxJQUFJO0FBQUEsYUFBSUQsV0FBVyxDQUFDQyxJQUFELENBQWY7QUFBQSxLQUh0QjtBQUlFLElBQUEsSUFBSSxFQUFDLEdBSlA7QUFLRSxJQUFBLEtBQUssRUFBQztBQUxSLElBREY7QUFTRCxDQVpEOztBQWNBLFNBQVNDLE9BQVQsQ0FBaUJDLEVBQWpCLEVBQTZCO0FBQzNCLFNBQU8sVUFBQ0MsSUFBRCxFQUFzQjtBQUMzQkMsSUFBQUEsVUFBVSxDQUFDRCxJQUFELEVBQU9ELEVBQVAsQ0FBVjtBQUNELEdBRkQ7QUFHRDs7QUFFREcsUUFBUSxDQUFDLE9BQUQsRUFBVSxZQUFNO0FBQ3RCQyxFQUFBQSxFQUFFLENBQUMsUUFBRCxFQUFXLFlBQU07QUFDakIsUUFBTUMsT0FBTyxHQUFHYixZQUFZLENBQUNjLE1BQWIsQ0FDZCxvQkFBQyxLQUFEO0FBQU8sTUFBQSxJQUFJLEVBQUMsa0RBQVo7QUFBdUIsTUFBQSxLQUFLLEVBQUM7QUFBN0IsTUFEYyxDQUFoQjtBQUdBQyxJQUFBQSxNQUFNLENBQUNGLE9BQUQsQ0FBTixDQUFnQkcsZUFBaEI7QUFDRCxHQUxDLENBQUY7QUFPQUosRUFBQUEsRUFBRSxDQUFDLFFBQUQsRUFBVyxZQUFNO0FBQ2pCLFFBQU1DLE9BQU8sR0FBR2QsS0FBSyxDQUNuQixvQkFBQyxLQUFEO0FBQU8sTUFBQSxlQUFlLE1BQXRCO0FBQXVCLE1BQUEsYUFBYSxFQUFDLEdBQXJDO0FBQXlDLE1BQUEsSUFBSSxFQUFDLEdBQTlDO0FBQWtELE1BQUEsS0FBSyxFQUFDO0FBQXhELE1BRG1CLENBQXJCO0FBR0FnQixJQUFBQSxNQUFNLENBQUNGLE9BQU8sQ0FBQ0ksSUFBUixHQUFlQyxRQUFmLENBQXdCLElBQXhCLENBQUQsQ0FBTixDQUFzQ0MsSUFBdEMsQ0FBMkMsSUFBM0M7QUFDQU4sSUFBQUEsT0FBTyxDQUFDTyxJQUFSLENBQWEsb0JBQWIsRUFBbUNDLFFBQW5DLENBQTRDLE9BQTVDO0FBQ0FOLElBQUFBLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDSSxJQUFSLEdBQWVDLFFBQWYsQ0FBd0IsSUFBeEIsQ0FBRCxDQUFOLENBQXNDQyxJQUF0QyxDQUEyQyxLQUEzQztBQUNELEdBUEMsQ0FBRjtBQVNBUCxFQUFBQSxFQUFFLENBQUMsUUFBRCxFQUFXLFlBQU07QUFDakIsUUFBTUMsT0FBTyxHQUFHZCxLQUFLLENBQUMsb0JBQUMsWUFBRCxPQUFELENBQXJCO0FBQ0FnQixJQUFBQSxNQUFNLENBQUNGLE9BQU8sQ0FBQ0ksSUFBUixHQUFlQyxRQUFmLENBQXdCLElBQXhCLENBQUQsQ0FBTixDQUFzQ0MsSUFBdEMsQ0FBMkMsSUFBM0M7QUFDQU4sSUFBQUEsT0FBTyxDQUFDTyxJQUFSLENBQWEsb0JBQWIsRUFBbUNDLFFBQW5DLENBQTRDLE9BQTVDO0FBQ0FOLElBQUFBLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDSSxJQUFSLEdBQWVDLFFBQWYsQ0FBd0IsSUFBeEIsQ0FBRCxDQUFOLENBQXNDQyxJQUF0QyxDQUEyQyxLQUEzQztBQUNELEdBTEMsQ0FBRjtBQU9BUCxFQUFBQSxFQUFFLENBQUMsTUFBRCxFQUFTLFVBQUFILElBQUksRUFBSTtBQUNqQixRQUFNSSxPQUFPLEdBQUdkLEtBQUssQ0FDbkIsb0JBQUMsS0FBRDtBQUFPLE1BQUEsUUFBUSxNQUFmO0FBQWdCLE1BQUEsSUFBSSxFQUFDLGtEQUFyQjtBQUFnQyxNQUFBLEtBQUssRUFBQztBQUF0QyxNQURtQixDQUFyQjtBQUdBYyxJQUFBQSxPQUFPLENBQ0pPLElBREgsQ0FDUSx1QkFEUixFQUVHRSxFQUZILENBRU0sQ0FGTixFQUdHRCxRQUhILENBR1ksT0FIWjtBQUlBcEIsSUFBQUEsS0FBSyxDQUFDc0IsTUFBTixDQUNFLENBQ0VoQixPQUFPLENBQUMsR0FBRCxDQURULEVBRUUsVUFBQ2lCLElBQUQsRUFBc0I7QUFDcEJULE1BQUFBLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDSSxJQUFSLEVBQUQsQ0FBTixDQUF1QkUsSUFBdkIsQ0FBNEIsRUFBNUI7QUFDQUssTUFBQUEsSUFBSTtBQUNMLEtBTEgsQ0FERixFQVFFZixJQVJGO0FBVUQsR0FsQkMsQ0FBRjtBQW1CRCxDQTNDTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBtb3VudCB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tIFwicmVhY3QtdGVzdC1yZW5kZXJlclwiXG5pbXBvcnQgYXN5bmMgZnJvbSBcImFzeW5jXCJcbmltcG9ydCBBbGVydCBmcm9tIFwiLi5cIlxuXG5jb25zdCBBbGVydE1vdW50ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUodHJ1ZSlcblxuICByZXR1cm4gKFxuICAgIDxBbGVydFxuICAgICAgZXhwYW5kZWQ9e2V4cGFuZGVkfVxuICAgICAgZXhwYW5kQ29udGVudD1cIjFcIlxuICAgICAgb25FeHBhbmRDaGFuZ2U9e2Jvb2wgPT4gc2V0RXhwYW5kZWQoYm9vbCl9XG4gICAgICB0ZXh0PVwiMlwiXG4gICAgICB0aXRsZT1cIjNcIlxuICAgIC8+XG4gIClcbn1cblxuZnVuY3Rpb24gdGltZW91dChtczogbnVtYmVyKSB7XG4gIHJldHVybiAoZG9uZTogKCkgPT4gdm9pZCkgPT4ge1xuICAgIHNldFRpbWVvdXQoZG9uZSwgbXMpXG4gIH1cbn1cblxuZGVzY3JpYmUoXCJBbGVydFwiLCAoKSA9PiB7XG4gIGl0KFwi5piv5ZCm5q2j56Gu5riy5p+TXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcbiAgICAgIDxBbGVydCB0ZXh0PVwi6L+Z5piv5LiA5p2h5o+Q56S65L+h5oGvXCIgdGl0bGU9XCLmj5DphpLmoIfpophcIiAvPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIuWxleW8gOWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPEFsZXJ0IGRlZmF1bHRFeHBhbmRlZCBleHBhbmRDb250ZW50PVwiMVwiIHRleHQ9XCIyXCIgdGl0bGU9XCIzXCIgLz5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIudGV4dCgpLmluY2x1ZGVzKFwi5pS26LW3XCIpKS50b0JlKHRydWUpXG4gICAgd3JhcHBlci5maW5kKFwiLmFkdWktYWxlcnQtZXhwYW5kXCIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci50ZXh0KCkuaW5jbHVkZXMoXCLmlLbotbdcIikpLnRvQmUoZmFsc2UpXG4gIH0pXG5cbiAgaXQoXCLlsZXlvIDlpJbpg6jmjqfliLZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QWxlcnRNb3VudGVyIC8+KVxuICAgIGV4cGVjdCh3cmFwcGVyLnRleHQoKS5pbmNsdWRlcyhcIuaUtui1t1wiKSkudG9CZSh0cnVlKVxuICAgIHdyYXBwZXIuZmluZChcIi5hZHVpLWFsZXJ0LWV4cGFuZFwiKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIudGV4dCgpLmluY2x1ZGVzKFwi5pS26LW3XCIpKS50b0JlKGZhbHNlKVxuICB9KVxuXG4gIGl0KFwi6aqM6K+B5YWz6ZetXCIsIGRvbmUgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxBbGVydCBjbG9zYWJsZSB0ZXh0PVwi6L+Z5piv5LiA5p2h5o+Q56S65L+h5oGvXCIgdGl0bGU9XCLmj5DphpLmoIfpophcIiAvPlxuICAgIClcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIi5hZHVpLWFsZXJ0LWNsb3NlSWNvblwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGFzeW5jLnNlcmllcyhcbiAgICAgIFtcbiAgICAgICAgdGltZW91dCgzNTApLFxuICAgICAgICAobmV4dDogKCkgPT4gdm9pZCkgPT4ge1xuICAgICAgICAgIGV4cGVjdCh3cmFwcGVyLnRleHQoKSkudG9CZShcIlwiKVxuICAgICAgICAgIG5leHQoKVxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGRvbmVcbiAgICApXG4gIH0pXG59KVxuIl19