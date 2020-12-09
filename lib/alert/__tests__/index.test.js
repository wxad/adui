"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _async = _interopRequireDefault(require("async"));

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

var AlertMounter = function AlertMounter() {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  return _react["default"].createElement(_["default"], {
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
    var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_["default"], {
      text: "\u8FD9\u662F\u4E00\u6761\u63D0\u793A\u4FE1\u606F",
      title: "\u63D0\u9192\u6807\u9898"
    }));

    expect(wrapper).toMatchSnapshot();
  });
  it("展开内部驱动", function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
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
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(AlertMounter, null));
    expect(wrapper.text().includes("收起")).toBe(true);
    wrapper.find(".adui-alert-expand").simulate("click");
    expect(wrapper.text().includes("收起")).toBe(false);
  });
  it("验证关闭", function (done) {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      closable: true,
      text: "\u8FD9\u662F\u4E00\u6761\u63D0\u793A\u4FE1\u606F",
      title: "\u63D0\u9192\u6807\u9898"
    }));
    wrapper.find(".adui-alert-closeIcon").at(0).simulate("click");

    _async["default"].series([timeout(350), function (next) {
      expect(wrapper.text()).toBe("");
      next();
    }], done);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvYWxlcnQvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sIm5hbWVzIjpbIkFsZXJ0TW91bnRlciIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJib29sIiwidGltZW91dCIsIm1zIiwiZG9uZSIsInNldFRpbWVvdXQiLCJkZXNjcmliZSIsIml0Iiwid3JhcHBlciIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCIsInRleHQiLCJpbmNsdWRlcyIsInRvQmUiLCJmaW5kIiwic2ltdWxhdGUiLCJhdCIsImFzeW5jIiwic2VyaWVzIiwibmV4dCJdLCJtYXBwaW5ncyI6Ijs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQSxrQkFDTyxxQkFBUyxJQUFULENBRFA7QUFBQTtBQUFBLE1BQ2xCQyxRQURrQjtBQUFBLE1BQ1JDLFdBRFE7O0FBR3pCLFNBQ0UsZ0NBQUMsWUFBRDtBQUNFLElBQUEsUUFBUSxFQUFFRCxRQURaO0FBRUUsSUFBQSxhQUFhLEVBQUMsR0FGaEI7QUFHRSxJQUFBLGNBQWMsRUFBRSx3QkFBQUUsSUFBSTtBQUFBLGFBQUlELFdBQVcsQ0FBQ0MsSUFBRCxDQUFmO0FBQUEsS0FIdEI7QUFJRSxJQUFBLElBQUksRUFBQyxHQUpQO0FBS0UsSUFBQSxLQUFLLEVBQUM7QUFMUixJQURGO0FBU0QsQ0FaRDs7QUFjQSxTQUFTQyxPQUFULENBQWlCQyxFQUFqQixFQUE2QjtBQUMzQixTQUFPLFVBQUNDLElBQUQsRUFBc0I7QUFDM0JDLElBQUFBLFVBQVUsQ0FBQ0QsSUFBRCxFQUFPRCxFQUFQLENBQVY7QUFDRCxHQUZEO0FBR0Q7O0FBRURHLFFBQVEsQ0FBQyxPQUFELEVBQVUsWUFBTTtBQUN0QkMsRUFBQUEsRUFBRSxDQUFDLFFBQUQsRUFBVyxZQUFNO0FBQ2pCLFFBQU1DLE9BQU8sR0FBR0MsOEJBQWFDLE1BQWIsQ0FDZCxnQ0FBQyxZQUFEO0FBQU8sTUFBQSxJQUFJLEVBQUMsa0RBQVo7QUFBdUIsTUFBQSxLQUFLLEVBQUM7QUFBN0IsTUFEYyxDQUFoQjs7QUFHQUMsSUFBQUEsTUFBTSxDQUFDSCxPQUFELENBQU4sQ0FBZ0JJLGVBQWhCO0FBQ0QsR0FMQyxDQUFGO0FBT0FMLEVBQUFBLEVBQUUsQ0FBQyxRQUFELEVBQVcsWUFBTTtBQUNqQixRQUFNQyxPQUFPLEdBQUcsbUJBQ2QsZ0NBQUMsWUFBRDtBQUFPLE1BQUEsZUFBZSxNQUF0QjtBQUF1QixNQUFBLGFBQWEsRUFBQyxHQUFyQztBQUF5QyxNQUFBLElBQUksRUFBQyxHQUE5QztBQUFrRCxNQUFBLEtBQUssRUFBQztBQUF4RCxNQURjLENBQWhCO0FBR0FHLElBQUFBLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDSyxJQUFSLEdBQWVDLFFBQWYsQ0FBd0IsSUFBeEIsQ0FBRCxDQUFOLENBQXNDQyxJQUF0QyxDQUEyQyxJQUEzQztBQUNBUCxJQUFBQSxPQUFPLENBQUNRLElBQVIsQ0FBYSxvQkFBYixFQUFtQ0MsUUFBbkMsQ0FBNEMsT0FBNUM7QUFDQU4sSUFBQUEsTUFBTSxDQUFDSCxPQUFPLENBQUNLLElBQVIsR0FBZUMsUUFBZixDQUF3QixJQUF4QixDQUFELENBQU4sQ0FBc0NDLElBQXRDLENBQTJDLEtBQTNDO0FBQ0QsR0FQQyxDQUFGO0FBU0FSLEVBQUFBLEVBQUUsQ0FBQyxRQUFELEVBQVcsWUFBTTtBQUNqQixRQUFNQyxPQUFPLEdBQUcsbUJBQU0sZ0NBQUMsWUFBRCxPQUFOLENBQWhCO0FBQ0FHLElBQUFBLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDSyxJQUFSLEdBQWVDLFFBQWYsQ0FBd0IsSUFBeEIsQ0FBRCxDQUFOLENBQXNDQyxJQUF0QyxDQUEyQyxJQUEzQztBQUNBUCxJQUFBQSxPQUFPLENBQUNRLElBQVIsQ0FBYSxvQkFBYixFQUFtQ0MsUUFBbkMsQ0FBNEMsT0FBNUM7QUFDQU4sSUFBQUEsTUFBTSxDQUFDSCxPQUFPLENBQUNLLElBQVIsR0FBZUMsUUFBZixDQUF3QixJQUF4QixDQUFELENBQU4sQ0FBc0NDLElBQXRDLENBQTJDLEtBQTNDO0FBQ0QsR0FMQyxDQUFGO0FBT0FSLEVBQUFBLEVBQUUsQ0FBQyxNQUFELEVBQVMsVUFBQUgsSUFBSSxFQUFJO0FBQ2pCLFFBQU1JLE9BQU8sR0FBRyxtQkFDZCxnQ0FBQyxZQUFEO0FBQU8sTUFBQSxRQUFRLE1BQWY7QUFBZ0IsTUFBQSxJQUFJLEVBQUMsa0RBQXJCO0FBQWdDLE1BQUEsS0FBSyxFQUFDO0FBQXRDLE1BRGMsQ0FBaEI7QUFHQUEsSUFBQUEsT0FBTyxDQUNKUSxJQURILENBQ1EsdUJBRFIsRUFFR0UsRUFGSCxDQUVNLENBRk4sRUFHR0QsUUFISCxDQUdZLE9BSFo7O0FBSUFFLHNCQUFNQyxNQUFOLENBQ0UsQ0FDRWxCLE9BQU8sQ0FBQyxHQUFELENBRFQsRUFFRSxVQUFDbUIsSUFBRCxFQUFzQjtBQUNwQlYsTUFBQUEsTUFBTSxDQUFDSCxPQUFPLENBQUNLLElBQVIsRUFBRCxDQUFOLENBQXVCRSxJQUF2QixDQUE0QixFQUE1QjtBQUNBTSxNQUFBQSxJQUFJO0FBQ0wsS0FMSCxDQURGLEVBUUVqQixJQVJGO0FBVUQsR0FsQkMsQ0FBRjtBQW1CRCxDQTNDTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBtb3VudCB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tIFwicmVhY3QtdGVzdC1yZW5kZXJlclwiXG5pbXBvcnQgYXN5bmMgZnJvbSBcImFzeW5jXCJcbmltcG9ydCBBbGVydCBmcm9tIFwiLi5cIlxuXG5jb25zdCBBbGVydE1vdW50ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUodHJ1ZSlcblxuICByZXR1cm4gKFxuICAgIDxBbGVydFxuICAgICAgZXhwYW5kZWQ9e2V4cGFuZGVkfVxuICAgICAgZXhwYW5kQ29udGVudD1cIjFcIlxuICAgICAgb25FeHBhbmRDaGFuZ2U9e2Jvb2wgPT4gc2V0RXhwYW5kZWQoYm9vbCl9XG4gICAgICB0ZXh0PVwiMlwiXG4gICAgICB0aXRsZT1cIjNcIlxuICAgIC8+XG4gIClcbn1cblxuZnVuY3Rpb24gdGltZW91dChtczogbnVtYmVyKSB7XG4gIHJldHVybiAoZG9uZTogKCkgPT4gdm9pZCkgPT4ge1xuICAgIHNldFRpbWVvdXQoZG9uZSwgbXMpXG4gIH1cbn1cblxuZGVzY3JpYmUoXCJBbGVydFwiLCAoKSA9PiB7XG4gIGl0KFwi5piv5ZCm5q2j56Gu5riy5p+TXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcbiAgICAgIDxBbGVydCB0ZXh0PVwi6L+Z5piv5LiA5p2h5o+Q56S65L+h5oGvXCIgdGl0bGU9XCLmj5DphpLmoIfpophcIiAvPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIuWxleW8gOWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPEFsZXJ0IGRlZmF1bHRFeHBhbmRlZCBleHBhbmRDb250ZW50PVwiMVwiIHRleHQ9XCIyXCIgdGl0bGU9XCIzXCIgLz5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIudGV4dCgpLmluY2x1ZGVzKFwi5pS26LW3XCIpKS50b0JlKHRydWUpXG4gICAgd3JhcHBlci5maW5kKFwiLmFkdWktYWxlcnQtZXhwYW5kXCIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci50ZXh0KCkuaW5jbHVkZXMoXCLmlLbotbdcIikpLnRvQmUoZmFsc2UpXG4gIH0pXG5cbiAgaXQoXCLlsZXlvIDlpJbpg6jmjqfliLZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8QWxlcnRNb3VudGVyIC8+KVxuICAgIGV4cGVjdCh3cmFwcGVyLnRleHQoKS5pbmNsdWRlcyhcIuaUtui1t1wiKSkudG9CZSh0cnVlKVxuICAgIHdyYXBwZXIuZmluZChcIi5hZHVpLWFsZXJ0LWV4cGFuZFwiKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIudGV4dCgpLmluY2x1ZGVzKFwi5pS26LW3XCIpKS50b0JlKGZhbHNlKVxuICB9KVxuXG4gIGl0KFwi6aqM6K+B5YWz6ZetXCIsIGRvbmUgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxBbGVydCBjbG9zYWJsZSB0ZXh0PVwi6L+Z5piv5LiA5p2h5o+Q56S65L+h5oGvXCIgdGl0bGU9XCLmj5DphpLmoIfpophcIiAvPlxuICAgIClcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIi5hZHVpLWFsZXJ0LWNsb3NlSWNvblwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGFzeW5jLnNlcmllcyhcbiAgICAgIFtcbiAgICAgICAgdGltZW91dCgzNTApLFxuICAgICAgICAobmV4dDogKCkgPT4gdm9pZCkgPT4ge1xuICAgICAgICAgIGV4cGVjdCh3cmFwcGVyLnRleHQoKSkudG9CZShcIlwiKVxuICAgICAgICAgIG5leHQoKVxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGRvbmVcbiAgICApXG4gIH0pXG59KVxuIl19