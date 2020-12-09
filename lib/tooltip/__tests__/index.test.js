"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("react-dom/test-utils");

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TooltipMounter = function (_React$Component) {
  _inherits(TooltipMounter, _React$Component);

  var _super = _createSuper(TooltipMounter);

  function TooltipMounter() {
    var _this;

    _classCallCheck(this, TooltipMounter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.trigger = void 0;
    return _this;
  }

  _createClass(TooltipMounter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var placement = this.props.placement;
      return React.createElement(_["default"], {
        visible: true,
        placement: placement,
        mouseEnterDelay: 0,
        mouseLeaveDelay: 0,
        popup: "popup",
        ref: function ref(trigger) {
          _this2.trigger = trigger;
        }
      }, React.createElement("div", {
        id: "children",
        style: {
          padding: "100px"
        }
      }, "children"));
    }
  }]);

  return TooltipMounter;
}(React.Component);

describe("Tooltip", function () {
  beforeEach(function () {
    jest.useFakeTimers();
  });
  afterEach(function () {
    jest.useRealTimers();
  });
  it("Tooltip 是否正确渲染各位置样式", function () {
    var topLeft = (0, _enzyme.mount)(React.createElement(TooltipMounter, {
      placement: "topLeft"
    }));
    var bottomRight = (0, _enzyme.mount)(React.createElement(TooltipMounter, {
      placement: "bottomRight"
    }));
    var leftTop = (0, _enzyme.mount)(React.createElement(TooltipMounter, {
      placement: "leftTop"
    }));
    var rightBottom = (0, _enzyme.mount)(React.createElement(TooltipMounter, {
      placement: "rightBottom"
    }));
    var _topLeft$instance$tri = topLeft.instance().trigger.current.popupRef.current.popupRef.current.style,
        topLeftPaddingBottom = _topLeft$instance$tri.paddingBottom,
        topLeftTransformOrigin = _topLeft$instance$tri.transformOrigin;
    expect(topLeftPaddingBottom).toBe("8px");
    expect(topLeftTransformOrigin).toBe("18px 100%");
    var _bottomRight$instance = bottomRight.instance().trigger.current.popupRef.current.popupRef.current.style,
        bottomRightPaddingTop = _bottomRight$instance.paddingTop,
        bottomRightTransformOrigin = _bottomRight$instance.transformOrigin;
    expect(bottomRightPaddingTop).toBe("8px");
    expect(bottomRightTransformOrigin).toBe("calc(100% - 18px) -4px");
    var _leftTop$instance$tri = leftTop.instance().trigger.current.popupRef.current.popupRef.current.style,
        leftTopPaddingRight = _leftTop$instance$tri.paddingRight,
        leftTopTransformOrigin = _leftTop$instance$tri.transformOrigin;
    expect(leftTopPaddingRight).toBe("8px");
    expect(leftTopTransformOrigin).toBe("100% 10px");
    var _rightBottom$instance = rightBottom.instance().trigger.current.popupRef.current.popupRef.current.style,
        rightBottomPaddingLeft = _rightBottom$instance.paddingLeft,
        rightBottomTransformOrigin = _rightBottom$instance.transformOrigin;
    expect(rightBottomPaddingLeft).toBe("8px");
    expect(rightBottomTransformOrigin).toBe("0% calc(100% - 10px)");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdG9vbHRpcC9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwibmFtZXMiOlsiVG9vbHRpcE1vdW50ZXIiLCJ0cmlnZ2VyIiwicGxhY2VtZW50IiwicHJvcHMiLCJwYWRkaW5nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZXNjcmliZSIsImJlZm9yZUVhY2giLCJqZXN0IiwidXNlRmFrZVRpbWVycyIsImFmdGVyRWFjaCIsInVzZVJlYWxUaW1lcnMiLCJpdCIsInRvcExlZnQiLCJib3R0b21SaWdodCIsImxlZnRUb3AiLCJyaWdodEJvdHRvbSIsImluc3RhbmNlIiwiY3VycmVudCIsInBvcHVwUmVmIiwic3R5bGUiLCJ0b3BMZWZ0UGFkZGluZ0JvdHRvbSIsInBhZGRpbmdCb3R0b20iLCJ0b3BMZWZ0VHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtT3JpZ2luIiwiZXhwZWN0IiwidG9CZSIsImJvdHRvbVJpZ2h0UGFkZGluZ1RvcCIsInBhZGRpbmdUb3AiLCJib3R0b21SaWdodFRyYW5zZm9ybU9yaWdpbiIsImxlZnRUb3BQYWRkaW5nUmlnaHQiLCJwYWRkaW5nUmlnaHQiLCJsZWZ0VG9wVHJhbnNmb3JtT3JpZ2luIiwicmlnaHRCb3R0b21QYWRkaW5nTGVmdCIsInBhZGRpbmdMZWZ0IiwicmlnaHRCb3R0b21UcmFuc2Zvcm1PcmlnaW4iLCJ3cmFwcGVyIiwiY2hpbGQiLCJmaW5kIiwiYXQiLCJzaW11bGF0ZSIsInBvcHVwVmlzaWJsZSIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJmbiIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwieCIsInkiLCJ0b0pTT04iLCJkb2N1bWVudCIsImJvZHkiLCJpbm5lckhUTUwiLCJhdHRhY2hUbyIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsVG9wIiwicnVuQWxsVGltZXJzIiwidXBkYXRlIiwicG9wdXBQ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QUFDRCxLQVJEO0FBVUFyQyxJQUFBQSxNQUFNLENBQ0pXLE9BQU8sQ0FDSkUsSUFESCxDQUNRLFlBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR3JDLEtBSEgsR0FHVzZELGNBSlAsQ0FBTixDQUtFckMsSUFMRixDQUtPLEtBTFA7QUFNRCxHQWpDQyxDQUFGO0FBa0NELENBekRPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBUb29sdGlwIOaYr+WfuuS6jiBQb3BUcmlnZ2VyIOi/m+ihjOWwgeijheeahOOAglxuICog6Zmk6Z2e5LiOIFRvb2x0aXAg55u45YWz77yM5ZCm5YiZ5rWL6K+V55So5L6L6YO95bqU5ZyoIFBvcFRyaWdnZXIg5LiL44CCXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBhY3QgfSBmcm9tIFwicmVhY3QtZG9tL3Rlc3QtdXRpbHNcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBUb29sdGlwIGZyb20gXCIuLlwiXG5cbmNsYXNzIFRvb2x0aXBNb3VudGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueT4ge1xuICB0cmlnZ2VyOiBhbnlcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwbGFjZW1lbnQgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8VG9vbHRpcFxuICAgICAgICB2aXNpYmxlXG4gICAgICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezB9XG4gICAgICAgIG1vdXNlTGVhdmVEZWxheT17MH1cbiAgICAgICAgcG9wdXA9XCJwb3B1cFwiXG4gICAgICAgIHJlZj17dHJpZ2dlciA9PiB7XG4gICAgICAgICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlclxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGlkPVwiY2hpbGRyZW5cIiBzdHlsZT17eyBwYWRkaW5nOiBcIjEwMHB4XCIgfX0+XG4gICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKVxuICB9XG59XG5cbmRlc2NyaWJlKFwiVG9vbHRpcFwiLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGplc3QudXNlRmFrZVRpbWVycygpXG4gIH0pXG5cbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICBqZXN0LnVzZVJlYWxUaW1lcnMoKVxuICB9KVxuXG4gIGl0KFwiVG9vbHRpcCDmmK/lkKbmraPnoa7muLLmn5PlkITkvY3nva7moLflvI9cIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRvcExlZnQgPSBtb3VudCg8VG9vbHRpcE1vdW50ZXIgcGxhY2VtZW50PVwidG9wTGVmdFwiIC8+KVxuICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gbW91bnQoPFRvb2x0aXBNb3VudGVyIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCIgLz4pXG4gICAgY29uc3QgbGVmdFRvcCA9IG1vdW50KDxUb29sdGlwTW91bnRlciBwbGFjZW1lbnQ9XCJsZWZ0VG9wXCIgLz4pXG4gICAgY29uc3QgcmlnaHRCb3R0b20gPSBtb3VudCg8VG9vbHRpcE1vdW50ZXIgcGxhY2VtZW50PVwicmlnaHRCb3R0b21cIiAvPilcblxuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHBhZGRpbmdCb3R0b206IHRvcExlZnRQYWRkaW5nQm90dG9tLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IHRvcExlZnRUcmFuc2Zvcm1PcmlnaW4sXG4gICAgICB9LFxuICAgIH0gPSB0b3BMZWZ0Lmluc3RhbmNlKCkudHJpZ2dlci5jdXJyZW50LnBvcHVwUmVmLmN1cnJlbnQucG9wdXBSZWYuY3VycmVudFxuICAgIGV4cGVjdCh0b3BMZWZ0UGFkZGluZ0JvdHRvbSkudG9CZShcIjhweFwiKVxuICAgIGV4cGVjdCh0b3BMZWZ0VHJhbnNmb3JtT3JpZ2luKS50b0JlKFwiMThweCAxMDAlXCIpXG5cbiAgICBjb25zdCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBwYWRkaW5nVG9wOiBib3R0b21SaWdodFBhZGRpbmdUb3AsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogYm90dG9tUmlnaHRUcmFuc2Zvcm1PcmlnaW4sXG4gICAgICB9LFxuICAgIH0gPSBib3R0b21SaWdodC5pbnN0YW5jZSgpLnRyaWdnZXIuY3VycmVudC5wb3B1cFJlZi5jdXJyZW50LnBvcHVwUmVmLmN1cnJlbnRcbiAgICBleHBlY3QoYm90dG9tUmlnaHRQYWRkaW5nVG9wKS50b0JlKFwiOHB4XCIpXG4gICAgZXhwZWN0KGJvdHRvbVJpZ2h0VHJhbnNmb3JtT3JpZ2luKS50b0JlKFwiY2FsYygxMDAlIC0gMThweCkgLTRweFwiKVxuXG4gICAgY29uc3Qge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBsZWZ0VG9wUGFkZGluZ1JpZ2h0LFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IGxlZnRUb3BUcmFuc2Zvcm1PcmlnaW4sXG4gICAgICB9LFxuICAgIH0gPSBsZWZ0VG9wLmluc3RhbmNlKCkudHJpZ2dlci5jdXJyZW50LnBvcHVwUmVmLmN1cnJlbnQucG9wdXBSZWYuY3VycmVudFxuICAgIGV4cGVjdChsZWZ0VG9wUGFkZGluZ1JpZ2h0KS50b0JlKFwiOHB4XCIpXG4gICAgZXhwZWN0KGxlZnRUb3BUcmFuc2Zvcm1PcmlnaW4pLnRvQmUoXCIxMDAlIDEwcHhcIilcblxuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiByaWdodEJvdHRvbVBhZGRpbmdMZWZ0LFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IHJpZ2h0Qm90dG9tVHJhbnNmb3JtT3JpZ2luLFxuICAgICAgfSxcbiAgICB9ID0gcmlnaHRCb3R0b20uaW5zdGFuY2UoKS50cmlnZ2VyLmN1cnJlbnQucG9wdXBSZWYuY3VycmVudC5wb3B1cFJlZi5jdXJyZW50XG4gICAgZXhwZWN0KHJpZ2h0Qm90dG9tUGFkZGluZ0xlZnQpLnRvQmUoXCI4cHhcIilcbiAgICBleHBlY3QocmlnaHRCb3R0b21UcmFuc2Zvcm1PcmlnaW4pLnRvQmUoXCIwJSBjYWxjKDEwMCUgLSAxMHB4KVwiKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm6IO95YaF6YOo6amx5YqoXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8VG9vbHRpcFxuICAgICAgICBhbGlnbkVkZ2VcbiAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgbW91c2VFbnRlckRlbGF5PXswfVxuICAgICAgICBtb3VzZUxlYXZlRGVsYXk9ezB9XG4gICAgICAgIHBvcHVwPXs8ZGl2IGlkPVwicG9wdXBcIj5wb3B1cDwvZGl2Pn1cbiAgICAgID5cbiAgICAgICAgPGRpdiBpZD1cImNoaWxkcmVuXCI+Y2hpbGRyZW48L2Rpdj5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICApXG4gICAgY29uc3QgY2hpbGQgPSB3cmFwcGVyLmZpbmQoXCIjY2hpbGRyZW5cIikuYXQoMClcbiAgICBjaGlsZC5zaW11bGF0ZShcIm1vdXNlZW50ZXJcIilcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiVHJpZ2dlclwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKCkucG9wdXBWaXNpYmxlXG4gICAgKS50b0JlKHRydWUpXG4gICAgY2hpbGQuc2ltdWxhdGUoXCJtb3VzZWxlYXZlXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIlRyaWdnZXJcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnBvcHVwVmlzaWJsZVxuICAgICkudG9CZShmYWxzZSlcbiAgfSlcbn0pXG5cbmRlc2NyaWJlKFwiVG9vbHRpcCDmtYvor5UgaGFuZGxlUG9wdXBBbGlnbiAtIFRvcFwiLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGplc3QudXNlRmFrZVRpbWVycygpXG5cbiAgICAvKipcbiAgICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDAwMDY2NjNcbiAgICAgKiDpgJrov4cgbW9jayBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YO+8jOS5i+WQjui/kOihjOeahOaJgOaciSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCDpg73kvJrov5Tlm57ov5nlkIzkuIDkuKrlgLzjgIJcbiAgICAgKi9cbiAgICBFbGVtZW50LnByb3RvdHlwZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPSBqZXN0LmZuKCgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiAxMjAsXG4gICAgICAgIGhlaWdodDogMTIwLFxuICAgICAgICB0b3A6IC0xMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogLTEwLFxuICAgICAgICB0b0pTT046ICgpID0+IHt9LFxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKblpITnkIYgUG9wdXBBbGlnblwiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnPGRpdiBpZD1cIm1vdW50ZXJcIiAvPidcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8VG9vbHRpcFxuICAgICAgICB0ZXN0XG4gICAgICAgIHZpc2libGVcbiAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgbW91c2VFbnRlckRlbGF5PXswfVxuICAgICAgICBtb3VzZUxlYXZlRGVsYXk9ezB9XG4gICAgICAgIHBvcHVwPVwicG9wdXBcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGlkPVwiY2hpbGRyZW5cIj5jaGlsZHJlbjwvZGl2PlxuICAgICAgPC9Ub29sdGlwPixcbiAgICAgIHsgYXR0YWNoVG86IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW91bnRlclwiKSB9XG4gICAgKVxuICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuICAgIGNvbnN0IGNoaWxkID0gd3JhcHBlci5maW5kKFwiI2NoaWxkcmVuXCIpLmF0KDApXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIGNoaWxkLnNpbXVsYXRlKFwibW91c2VlbnRlclwiKVxuICAgICAgLy8gamVzdCBydW5BbGxUaW1lcnMg5piv5Li65LqG6Kem5Y+RIFRvb2x0aXAg5YaF55qEIHNldFRpbWVvdXQgMFxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgLy8g5b+F6aG75omn6KGMIHdyYXBwZXIudXBkYXRlIOWQpuWImeaLv+WIsOeahCBwcm9wIOi/mOaYr+aXp+eahFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2VuenltZWpzL2VuenltZSNyZWFjdC1ob29rcy1zdXBwb3J0XG4gICAgICAvLyDooYDnmoTmlZnorq1cbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICB9KVxuXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIlBvcFRyaWdnZXJcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnBvcHVwUGxhY2VtZW50XG4gICAgKS50b0JlKFwiYm90dG9tXCIpXG4gIH0pXG59KVxuXG5kZXNjcmliZShcIlRvb2x0aXAg5rWL6K+VIGhhbmRsZVBvcHVwQWxpZ24gLSBCb3R0b21cIiwgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBqZXN0LnVzZUZha2VUaW1lcnMoKVxuXG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQwMDA2NjYzXG4gICAgICog6YCa6L+HIG1vY2sgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGDvvIzkuYvlkI7ov5DooYznmoTmiYDmnIkgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGAg6YO95Lya6L+U5Zue6L+Z5ZCM5LiA5Liq5YC844CCXG4gICAgICovXG4gICAgRWxlbWVudC5wcm90b3R5cGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID0gamVzdC5mbigoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogMTIwLFxuICAgICAgICBoZWlnaHQ6IDEyMCxcbiAgICAgICAgdG9wOiAxMDAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAxMDAwLFxuICAgICAgICB0b0pTT046ICgpID0+IHt9LFxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKblpITnkIYgUG9wdXBBbGlnblwiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnPGRpdiBpZD1cIm1vdW50ZXJcIiAvPidcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8VG9vbHRpcFxuICAgICAgICB0ZXN0XG4gICAgICAgIHZpc2libGVcbiAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgbW91c2VFbnRlckRlbGF5PXswfVxuICAgICAgICBtb3VzZUxlYXZlRGVsYXk9ezB9XG4gICAgICAgIHBvcHVwPVwicG9wdXBcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGlkPVwiY2hpbGRyZW5cIj5jaGlsZHJlbjwvZGl2PlxuICAgICAgPC9Ub29sdGlwPixcbiAgICAgIHsgYXR0YWNoVG86IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW91bnRlclwiKSB9XG4gICAgKVxuICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuICAgIGNvbnN0IGNoaWxkID0gd3JhcHBlci5maW5kKFwiI2NoaWxkcmVuXCIpLmF0KDApXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIGNoaWxkLnNpbXVsYXRlKFwibW91c2VlbnRlclwiKVxuICAgICAgLy8gamVzdCBydW5BbGxUaW1lcnMg5piv5Li65LqG6Kem5Y+RIFRvb2x0aXAg5YaF55qEIHNldFRpbWVvdXQgMFxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgLy8g5b+F6aG75omn6KGMIHdyYXBwZXIudXBkYXRlIOWQpuWImeaLv+WIsOeahCBwcm9wIOi/mOaYr+aXp+eahFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2VuenltZWpzL2VuenltZSNyZWFjdC1ob29rcy1zdXBwb3J0XG4gICAgICAvLyDooYDnmoTmlZnorq1cbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICB9KVxuXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIlBvcFRyaWdnZXJcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnBvcHVwUGxhY2VtZW50XG4gICAgKS50b0JlKFwidG9wXCIpXG4gIH0pXG59KVxuIl19