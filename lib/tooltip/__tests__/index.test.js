"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("react-dom/test-utils");

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe("Tooltip", function () {
  beforeEach(function () {
    jest.useFakeTimers();
  });
  afterEach(function () {
    jest.useRealTimers();
  });
  it("是否能内部驱动", function () {
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      alignEdge: true,
      placement: "top",
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0,
      popup: React.createElement("div", {
        id: "popup"
      }, "popup")
    }, React.createElement("div", {
      id: "children"
    }, "children")));
    var child = wrapper.find("#children").at(0);
    child.simulate("mouseenter");
    expect(wrapper.find("Trigger").at(0).props().popupVisible).toBe(true);
    child.simulate("mouseleave");
    expect(wrapper.find("Trigger").at(0).props().popupVisible).toBe(false);
  });
});
describe("Tooltip 测试 handlePopupAlign - Top", function () {
  beforeEach(function () {
    jest.useFakeTimers();
    Element.prototype.getBoundingClientRect = jest.fn(function () {
      return {
        width: 120,
        height: 120,
        top: -10,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: -10,
        toJSON: function toJSON() {}
      };
    });
  });
  it("是否处理 PopupAlign", function () {
    document.body.innerHTML = '<div id="mounter" />';
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      test: true,
      visible: true,
      placement: "top",
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0,
      popup: "popup"
    }, React.createElement("div", {
      id: "children"
    }, "children")), {
      attachTo: document.getElementById("mounter")
    });
    document.body.scrollTop = 0;
    var child = wrapper.find("#children").at(0);
    (0, _testUtils.act)(function () {
      child.simulate("mouseenter");
      jest.runAllTimers();
      wrapper.update();
    });
    expect(wrapper.find("PopTrigger").at(0).props().popupPlacement).toBe("bottom");
  });
});
describe("Tooltip 测试 handlePopupAlign - Bottom", function () {
  beforeEach(function () {
    jest.useFakeTimers();
    Element.prototype.getBoundingClientRect = jest.fn(function () {
      return {
        width: 120,
        height: 120,
        top: 1000,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 1000,
        toJSON: function toJSON() {}
      };
    });
  });
  it("是否处理 PopupAlign", function () {
    document.body.innerHTML = '<div id="mounter" />';
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      test: true,
      visible: true,
      placement: "bottom",
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0,
      popup: "popup"
    }, React.createElement("div", {
      id: "children"
    }, "children")), {
      attachTo: document.getElementById("mounter")
    });
    document.body.scrollTop = 0;
    var child = wrapper.find("#children").at(0);
    (0, _testUtils.act)(function () {
      child.simulate("mouseenter");
      jest.runAllTimers();
      wrapper.update();
    });
    expect(wrapper.find("PopTrigger").at(0).props().popupPlacement).toBe("top");
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdG9vbHRpcC9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJiZWZvcmVFYWNoIiwiamVzdCIsInVzZUZha2VUaW1lcnMiLCJhZnRlckVhY2giLCJ1c2VSZWFsVGltZXJzIiwiaXQiLCJ3cmFwcGVyIiwiY2hpbGQiLCJmaW5kIiwiYXQiLCJzaW11bGF0ZSIsImV4cGVjdCIsInByb3BzIiwicG9wdXBWaXNpYmxlIiwidG9CZSIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJmbiIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwieCIsInkiLCJ0b0pTT04iLCJkb2N1bWVudCIsImJvZHkiLCJpbm5lckhUTUwiLCJhdHRhY2hUbyIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsVG9wIiwicnVuQWxsVGltZXJzIiwidXBkYXRlIiwicG9wdXBQbGFjZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQUEsUUFBUSxDQUFDLFNBQUQsRUFBWSxZQUFNO0FBQ3hCQyxFQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmQyxJQUFBQSxJQUFJLENBQUNDLGFBQUw7QUFDRCxHQUZTLENBQVY7QUFJQUMsRUFBQUEsU0FBUyxDQUFDLFlBQU07QUFDZEYsSUFBQUEsSUFBSSxDQUFDRyxhQUFMO0FBQ0QsR0FGUSxDQUFUO0FBSUFDLEVBQUFBLEVBQUUsQ0FBQyxTQUFELEVBQVksWUFBTTtBQUNsQixRQUFNQyxPQUFPLEdBQUcsbUJBQ2Qsb0JBQUMsWUFBRDtBQUNFLE1BQUEsU0FBUyxNQURYO0FBRUUsTUFBQSxTQUFTLEVBQUMsS0FGWjtBQUdFLE1BQUEsZUFBZSxFQUFFLENBSG5CO0FBSUUsTUFBQSxlQUFlLEVBQUUsQ0FKbkI7QUFLRSxNQUFBLEtBQUssRUFBRTtBQUFLLFFBQUEsRUFB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QU8sQ0FBQ0UsSUFBUixDQUFhLFdBQWIsRUFBMEJDLEVBQTFCLENBQTZCLENBQTdCLENBQWQ7QUFDQSx3QkFBSSxZQUFNO0FBQ1JGLE1BQUFBLEtBQUssQ0FBQ0csUUFBTixDQUFlLFlBQWY7QUFFQVQsTUFBQUEsSUFBSSxDQUFDaUMsWUFBTDtBQUlBNUIsTUFBQUEsT0FBTyxDQUFDNkIsTUFBUjtBQUNELEtBUkQ7QUFVQXhCLElBQUFBLE1BQU0sQ0FDSkwsT0FBTyxDQUNKRSxJQURILENBQ1EsWUFEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHRyxLQUhILEdBR1d3QixjQUpQLENBQU4sQ0FLRXRCLElBTEYsQ0FLTyxLQUxQO0FBTUQsR0FqQ0MsQ0FBRjtBQWtDRCxDQXpETyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogVG9vbHRpcCDmmK/ln7rkuo4gUG9wVHJpZ2dlciDov5vooYzlsIHoo4XnmoTjgIJcbiAqIOmZpOmdnuS4jiBUb29sdGlwIOebuOWFs++8jOWQpuWImea1i+ivleeUqOS+i+mDveW6lOWcqCBQb3BUcmlnZ2VyIOS4i+OAglxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgYWN0IH0gZnJvbSBcInJlYWN0LWRvbS90ZXN0LXV0aWxzXCJcbmltcG9ydCB7IG1vdW50IH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgVG9vbHRpcCBmcm9tIFwiLi5cIlxuXG5kZXNjcmliZShcIlRvb2x0aXBcIiwgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBqZXN0LnVzZUZha2VUaW1lcnMoKVxuICB9KVxuXG4gIGFmdGVyRWFjaCgoKSA9PiB7XG4gICAgamVzdC51c2VSZWFsVGltZXJzKClcbiAgfSlcblxuICBpdChcIuaYr+WQpuiDveWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFRvb2x0aXBcbiAgICAgICAgYWxpZ25FZGdlXG4gICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgIG1vdXNlRW50ZXJEZWxheT17MH1cbiAgICAgICAgbW91c2VMZWF2ZURlbGF5PXswfVxuICAgICAgICBwb3B1cD17PGRpdiBpZD1cInBvcHVwXCI+cG9wdXA8L2Rpdj59XG4gICAgICA+XG4gICAgICAgIDxkaXYgaWQ9XCJjaGlsZHJlblwiPmNoaWxkcmVuPC9kaXY+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKVxuICAgIGNvbnN0IGNoaWxkID0gd3JhcHBlci5maW5kKFwiI2NoaWxkcmVuXCIpLmF0KDApXG4gICAgY2hpbGQuc2ltdWxhdGUoXCJtb3VzZWVudGVyXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIlRyaWdnZXJcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnBvcHVwVmlzaWJsZVxuICAgICkudG9CZSh0cnVlKVxuICAgIGNoaWxkLnNpbXVsYXRlKFwibW91c2VsZWF2ZVwiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJUcmlnZ2VyXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS5wb3B1cFZpc2libGVcbiAgICApLnRvQmUoZmFsc2UpXG4gIH0pXG59KVxuXG5kZXNjcmliZShcIlRvb2x0aXAg5rWL6K+VIGhhbmRsZVBvcHVwQWxpZ24gLSBUb3BcIiwgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBqZXN0LnVzZUZha2VUaW1lcnMoKVxuXG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQwMDA2NjYzXG4gICAgICog6YCa6L+HIG1vY2sgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGDvvIzkuYvlkI7ov5DooYznmoTmiYDmnIkgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGAg6YO95Lya6L+U5Zue6L+Z5ZCM5LiA5Liq5YC844CCXG4gICAgICovXG4gICAgRWxlbWVudC5wcm90b3R5cGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID0gamVzdC5mbigoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogMTIwLFxuICAgICAgICBoZWlnaHQ6IDEyMCxcbiAgICAgICAgdG9wOiAtMTAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IC0xMCxcbiAgICAgICAgdG9KU09OOiAoKSA9PiB7fSxcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm5aSE55CGIFBvcHVwQWxpZ25cIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJzxkaXYgaWQ9XCJtb3VudGVyXCIgLz4nXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFRvb2x0aXBcbiAgICAgICAgdGVzdFxuICAgICAgICB2aXNpYmxlXG4gICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgIG1vdXNlRW50ZXJEZWxheT17MH1cbiAgICAgICAgbW91c2VMZWF2ZURlbGF5PXswfVxuICAgICAgICBwb3B1cD1cInBvcHVwXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBpZD1cImNoaWxkcmVuXCI+Y2hpbGRyZW48L2Rpdj5cbiAgICAgIDwvVG9vbHRpcD4sXG4gICAgICB7IGF0dGFjaFRvOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vdW50ZXJcIikgfVxuICAgIClcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDBcbiAgICBjb25zdCBjaGlsZCA9IHdyYXBwZXIuZmluZChcIiNjaGlsZHJlblwiKS5hdCgwKVxuICAgIGFjdCgoKSA9PiB7XG4gICAgICBjaGlsZC5zaW11bGF0ZShcIm1vdXNlZW50ZXJcIilcbiAgICAgIC8vIGplc3QgcnVuQWxsVGltZXJzIOaYr+S4uuS6huinpuWPkSBUb29sdGlwIOWGheeahCBzZXRUaW1lb3V0IDBcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIC8vIOW/hemhu+aJp+ihjCB3cmFwcGVyLnVwZGF0ZSDlkKbliJnmi7/liLDnmoQgcHJvcCDov5jmmK/ml6fnmoRcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lbnp5bWVqcy9lbnp5bWUjcmVhY3QtaG9va3Mtc3VwcG9ydFxuICAgICAgLy8g6KGA55qE5pWZ6K6tXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgfSlcblxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJQb3BUcmlnZ2VyXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS5wb3B1cFBsYWNlbWVudFxuICAgICkudG9CZShcImJvdHRvbVwiKVxuICB9KVxufSlcblxuZGVzY3JpYmUoXCJUb29sdGlwIOa1i+ivlSBoYW5kbGVQb3B1cEFsaWduIC0gQm90dG9tXCIsICgpID0+IHtcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgamVzdC51c2VGYWtlVGltZXJzKClcblxuICAgIC8qKlxuICAgICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80MDAwNjY2M1xuICAgICAqIOmAmui/hyBtb2NrIGBnZXRCb3VuZGluZ0NsaWVudFJlY3Rg77yM5LmL5ZCO6L+Q6KGM55qE5omA5pyJIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIOmDveS8mui/lOWbnui/meWQjOS4gOS4quWAvOOAglxuICAgICAqL1xuICAgIEVsZW1lbnQucHJvdG90eXBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9IGplc3QuZm4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IDEyMCxcbiAgICAgICAgaGVpZ2h0OiAxMjAsXG4gICAgICAgIHRvcDogMTAwMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMTAwMCxcbiAgICAgICAgdG9KU09OOiAoKSA9PiB7fSxcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm5aSE55CGIFBvcHVwQWxpZ25cIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJzxkaXYgaWQ9XCJtb3VudGVyXCIgLz4nXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFRvb2x0aXBcbiAgICAgICAgdGVzdFxuICAgICAgICB2aXNpYmxlXG4gICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgIG1vdXNlRW50ZXJEZWxheT17MH1cbiAgICAgICAgbW91c2VMZWF2ZURlbGF5PXswfVxuICAgICAgICBwb3B1cD1cInBvcHVwXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBpZD1cImNoaWxkcmVuXCI+Y2hpbGRyZW48L2Rpdj5cbiAgICAgIDwvVG9vbHRpcD4sXG4gICAgICB7IGF0dGFjaFRvOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vdW50ZXJcIikgfVxuICAgIClcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDBcbiAgICBjb25zdCBjaGlsZCA9IHdyYXBwZXIuZmluZChcIiNjaGlsZHJlblwiKS5hdCgwKVxuICAgIGFjdCgoKSA9PiB7XG4gICAgICBjaGlsZC5zaW11bGF0ZShcIm1vdXNlZW50ZXJcIilcbiAgICAgIC8vIGplc3QgcnVuQWxsVGltZXJzIOaYr+S4uuS6huinpuWPkSBUb29sdGlwIOWGheeahCBzZXRUaW1lb3V0IDBcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIC8vIOW/hemhu+aJp+ihjCB3cmFwcGVyLnVwZGF0ZSDlkKbliJnmi7/liLDnmoQgcHJvcCDov5jmmK/ml6fnmoRcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lbnp5bWVqcy9lbnp5bWUjcmVhY3QtaG9va3Mtc3VwcG9ydFxuICAgICAgLy8g6KGA55qE5pWZ6K6tXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgfSlcblxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJQb3BUcmlnZ2VyXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS5wb3B1cFBsYWNlbWVudFxuICAgICkudG9CZShcInRvcFwiKVxuICB9KVxufSlcbiJdfQ==