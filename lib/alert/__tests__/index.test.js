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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvYWxlcnQvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sIm5hbWVzIjpbIkFsZXJ0TW91bnRlciIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJib29sIiwidGltZW91dCIsIm1zIiwiZG9uZSIsInNldFRpbWVvdXQiLCJkZXNjcmliZSIsIml0Iiwid3JhcHBlciIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCIsInRleHQiLCJpbmNsdWRlcyIsInRvQmUiLCJmaW5kIiwic2ltdWxhdGUiLCJhdCIsImFzeW5jIiwic2VyaWVzIiwibmV4dCJdLCJtYXBwaW5ncyI6Ijs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBLGtCQUNPLHFCQUFTLElBQVQsQ0FEUDtBQUFBO0FBQUEsTUFDbEJDLFFBRGtCO0FBQUEsTUFDUkMsV0FEUTs7QUFHekIsU0FDRSxnQ0FBQyxZQUFEO0FBQ0UsSUFBQSxRQUFRLEVBQUVELFFBRFo7QUFFRSxJQUFBLGFBQWEsRUFBQyxHQUZoQjtBQUdFLElBQUEsY0FBYyxFQUFFLHdCQUFBRSxJQUFJO0FBQUEsYUFBSUQsV0FBVyxDQUFDQyxJQUFELENBQWY7QUFBQSxLQUh0QjtBQUlFLElBQUEsSUFBSSxFQUFDLEdBSlA7QUFLRSxJQUFBLEtBQUssRUFBQztBQUxSLElBREY7QUFTRCxDQVpEOztBQWNBLFNBQVNDLE9BQVQsQ0FBaUJDLEVBQWpCLEVBQTZCO0FBQzNCLFNBQU8sVUFBQ0MsSUFBRCxFQUFzQjtBQUMzQkMsSUFBQUEsVUFBVSxDQUFDRCxJQUFELEVBQU9ELEVBQVAsQ0FBVjtBQUNELEdBRkQ7QUFHRDs7QUFFREcsUUFBUSxDQUFDLE9BQUQsRUFBVSxZQUFNO0FBQ3RCQyxFQUFBQSxFQUFFLENBQUMsUUFBRCxFQUFXLFlBQU07QUFDakIsUUFBTUMsT0FBTyxHQUFHQyw4QkFBYUMsTUFBYixDQUNkLGdDQUFDLFlBQUQ7QUFBTyxNQUFBLElBQUksRUFBQyxrREFBWjtBQUF1QixNQUFBLEtBQUssRUFBQztBQUE3QixNQURjLENBQWhCOztBQUdBQyxJQUFBQSxNQUFNLENBQUNILE9BQUQsQ0FBTixDQUFnQkksZUFBaEI7QUFDRCxHQUxDLENBQUY7QUFPQUwsRUFBQUEsRUFBRSxDQUFDLFFBQUQsRUFBVyxZQUFNO0FBQ2pCLFFBQU1DLE9BQU8sR0FBRyxtQkFDZCxnQ0FBQyxZQUFEO0FBQU8sTUFBQSxlQUFlLE1BQXRCO0FBQXVCLE1BQUEsYUFBYSxFQUFDLEdBQXJDO0FBQXlDLE1BQUEsSUFBSSxFQUFDLEdBQTlDO0FBQWtELE1BQUEsS0FBSyxFQUFDO0FBQXhELE1BRGMsQ0FBaEI7QUFHQUcsSUFBQUEsTUFBTSxDQUFDSCxPQUFPLENBQUNLLElBQVIsR0FBZUMsUUFBZixDQUF3QixJQUF4QixDQUFELENBQU4sQ0FBc0NDLElBQXRDLENBQTJDLElBQTNDO0FBQ0FQLElBQUFBLE9BQU8sQ0FBQ1EsSUFBUixDQUFhLG9CQUFiLEVBQW1DQyxRQUFuQyxDQUE0QyxPQUE1QztBQUNBTixJQUFBQSxNQUFNLENBQUNILE9BQU8sQ0FBQ0ssSUFBUixHQUFlQyxRQUFmLENBQXdCLElBQXhCLENBQUQsQ0FBTixDQUFzQ0MsSUFBdEMsQ0FBMkMsS0FBM0M7QUFDRCxHQVBDLENBQUY7QUFTQVIsRUFBQUEsRUFBRSxDQUFDLFFBQUQsRUFBVyxZQUFNO0FBQ2pCLFFBQU1DLE9BQU8sR0FBRyxtQkFBTSxnQ0FBQyxZQUFELE9BQU4sQ0FBaEI7QUFDQUcsSUFBQUEsTUFBTSxDQUFDSCxPQUFPLENBQUNLLElBQVIsR0FBZUMsUUFBZixDQUF3QixJQUF4QixDQUFELENBQU4sQ0FBc0NDLElBQXRDLENBQTJDLElBQTNDO0FBQ0FQLElBQUFBLE9BQU8sQ0FBQ1EsSUFBUixDQUFhLG9CQUFiLEVBQW1DQyxRQUFuQyxDQUE0QyxPQUE1QztBQUNBTixJQUFBQSxNQUFNLENBQUNILE9BQU8sQ0FBQ0ssSUFBUixHQUFlQyxRQUFmLENBQXdCLElBQXhCLENBQUQsQ0FBTixDQUFzQ0MsSUFBdEMsQ0FBMkMsS0FBM0M7QUFDRCxHQUxDLENBQUY7QUFPQVIsRUFBQUEsRUFBRSxDQUFDLE1BQUQsRUFBUyxVQUFBSCxJQUFJLEVBQUk7QUFDakIsUUFBTUksT0FBTyxHQUFHLG1CQUNkLGdDQUFDLFlBQUQ7QUFBTyxNQUFBLFFBQVEsTUFBZjtBQUFnQixNQUFBLElBQUksRUFBQyxrREFBckI7QUFBZ0MsTUFBQSxLQUFLLEVBQUM7QUFBdEMsTUFEYyxDQUFoQjtBQUdBQSxJQUFBQSxPQUFPLENBQ0pRLElBREgsQ0FDUSx1QkFEUixFQUVHRSxFQUZILENBRU0sQ0FGTixFQUdHRCxRQUhILENBR1ksT0FIWjs7QUFJQUUsc0JBQU1DLE1BQU4sQ0FDRSxDQUNFbEIsT0FBTyxDQUFDLEdBQUQsQ0FEVCxFQUVFLFVBQUNtQixJQUFELEVBQXNCO0FBQ3BCVixNQUFBQSxNQUFNLENBQUNILE9BQU8sQ0FBQ0ssSUFBUixFQUFELENBQU4sQ0FBdUJFLElBQXZCLENBQTRCLEVBQTVCO0FBQ0FNLE1BQUFBLElBQUk7QUFDTCxLQUxILENBREYsRUFRRWpCLElBUkY7QUFVRCxHQWxCQyxDQUFGO0FBbUJELENBM0NPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IG1vdW50IH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gXCJyZWFjdC10ZXN0LXJlbmRlcmVyXCJcbmltcG9ydCBhc3luYyBmcm9tIFwiYXN5bmNcIlxuaW1wb3J0IEFsZXJ0IGZyb20gXCIuLlwiXG5cbmNvbnN0IEFsZXJ0TW91bnRlciA9ICgpID0+IHtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgPEFsZXJ0XG4gICAgICBleHBhbmRlZD17ZXhwYW5kZWR9XG4gICAgICBleHBhbmRDb250ZW50PVwiMVwiXG4gICAgICBvbkV4cGFuZENoYW5nZT17Ym9vbCA9PiBzZXRFeHBhbmRlZChib29sKX1cbiAgICAgIHRleHQ9XCIyXCJcbiAgICAgIHRpdGxlPVwiM1wiXG4gICAgLz5cbiAgKVxufVxuXG5mdW5jdGlvbiB0aW1lb3V0KG1zOiBudW1iZXIpIHtcbiAgcmV0dXJuIChkb25lOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgc2V0VGltZW91dChkb25lLCBtcylcbiAgfVxufVxuXG5kZXNjcmliZShcIkFsZXJ0XCIsICgpID0+IHtcbiAgaXQoXCLmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPEFsZXJ0IHRleHQ9XCLov5nmmK/kuIDmnaHmj5DnpLrkv6Hmga9cIiB0aXRsZT1cIuaPkOmGkuagh+mimFwiIC8+XG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxuXG4gIGl0KFwi5bGV5byA5YaF6YOo6amx5YqoXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8QWxlcnQgZGVmYXVsdEV4cGFuZGVkIGV4cGFuZENvbnRlbnQ9XCIxXCIgdGV4dD1cIjJcIiB0aXRsZT1cIjNcIiAvPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlci50ZXh0KCkuaW5jbHVkZXMoXCLmlLbotbdcIikpLnRvQmUodHJ1ZSlcbiAgICB3cmFwcGVyLmZpbmQoXCIuYWR1aS1hbGVydC1leHBhbmRcIikuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLnRleHQoKS5pbmNsdWRlcyhcIuaUtui1t1wiKSkudG9CZShmYWxzZSlcbiAgfSlcblxuICBpdChcIuWxleW8gOWklumDqOaOp+WItlwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxBbGVydE1vdW50ZXIgLz4pXG4gICAgZXhwZWN0KHdyYXBwZXIudGV4dCgpLmluY2x1ZGVzKFwi5pS26LW3XCIpKS50b0JlKHRydWUpXG4gICAgd3JhcHBlci5maW5kKFwiLmFkdWktYWxlcnQtZXhwYW5kXCIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci50ZXh0KCkuaW5jbHVkZXMoXCLmlLbotbdcIikpLnRvQmUoZmFsc2UpXG4gIH0pXG5cbiAgaXQoXCLpqozor4HlhbPpl61cIiwgZG9uZSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPEFsZXJ0IGNsb3NhYmxlIHRleHQ9XCLov5nmmK/kuIDmnaHmj5DnpLrkv6Hmga9cIiB0aXRsZT1cIuaPkOmGkuagh+mimFwiIC8+XG4gICAgKVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiLmFkdWktYWxlcnQtY2xvc2VJY29uXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgYXN5bmMuc2VyaWVzKFxuICAgICAgW1xuICAgICAgICB0aW1lb3V0KDM1MCksXG4gICAgICAgIChuZXh0OiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgICAgICAgZXhwZWN0KHdyYXBwZXIudGV4dCgpKS50b0JlKFwiXCIpXG4gICAgICAgICAgbmV4dCgpXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgZG9uZVxuICAgIClcbiAgfSlcbn0pXG4iXX0=