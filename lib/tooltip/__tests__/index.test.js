"use strict";

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("react-dom/test-utils");

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdG9vbHRpcC9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwibmFtZXMiOlsiVG9vbHRpcE1vdW50ZXIiLCJ0cmlnZ2VyIiwicGxhY2VtZW50IiwicHJvcHMiLCJwYWRkaW5nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZXNjcmliZSIsImJlZm9yZUVhY2giLCJqZXN0IiwidXNlRmFrZVRpbWVycyIsImFmdGVyRWFjaCIsInVzZVJlYWxUaW1lcnMiLCJpdCIsInRvcExlZnQiLCJib3R0b21SaWdodCIsImxlZnRUb3AiLCJyaWdodEJvdHRvbSIsImluc3RhbmNlIiwiY3VycmVudCIsInBvcHVwUmVmIiwic3R5bGUiLCJ0b3BMZWZ0UGFkZGluZ0JvdHRvbSIsInBhZGRpbmdCb3R0b20iLCJ0b3BMZWZ0VHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtT3JpZ2luIiwiZXhwZWN0IiwidG9CZSIsImJvdHRvbVJpZ2h0UGFkZGluZ1RvcCIsInBhZGRpbmdUb3AiLCJib3R0b21SaWdodFRyYW5zZm9ybU9yaWdpbiIsImxlZnRUb3BQYWRkaW5nUmlnaHQiLCJwYWRkaW5nUmlnaHQiLCJsZWZ0VG9wVHJhbnNmb3JtT3JpZ2luIiwicmlnaHRCb3R0b21QYWRkaW5nTGVmdCIsInBhZGRpbmdMZWZ0IiwicmlnaHRCb3R0b21UcmFuc2Zvcm1PcmlnaW4iLCJ3cmFwcGVyIiwiY2hpbGQiLCJmaW5kIiwiYXQiLCJzaW11bGF0ZSIsInBvcHVwVmlzaWJsZSIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJmbiIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwieCIsInkiLCJ0b0pTT04iLCJkb2N1bWVudCIsImJvZHkiLCJpbm5lckhUTUwiLCJhdHRhY2hUbyIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsVG9wIiwicnVuQWxsVGltZXJzIiwidXBkYXRlIiwicG9wdXBQ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ekIsTUFBQUEsT0FBTyxDQUFDMEIsTUFBUjtBQUNELEtBUkQ7QUFVQXJDLElBQUFBLE1BQU0sQ0FDSlcsT0FBTyxDQUNKRSxJQURILENBQ1EsWUFEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHckMsS0FISCxHQUdXNkQsY0FKUCxDQUFOLENBS0VyQyxJQUxGLENBS08sS0FMUDtBQU1ELEdBakNDLENBQUY7QUFrQ0QsQ0F6RE8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiAqIFRvb2x0aXAg5piv5Z+65LqOIFBvcFRyaWdnZXIg6L+b6KGM5bCB6KOF55qE44CCXG4gKiDpmaTpnZ7kuI4gVG9vbHRpcCDnm7jlhbPvvIzlkKbliJnmtYvor5XnlKjkvovpg73lupTlnKggUG9wVHJpZ2dlciDkuIvjgIJcbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGFjdCB9IGZyb20gXCJyZWFjdC1kb20vdGVzdC11dGlsc1wiXG5pbXBvcnQgeyBtb3VudCB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIi4uXCJcblxuY2xhc3MgVG9vbHRpcE1vdW50ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55PiB7XG4gIHRyaWdnZXI6IGFueVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBsYWNlbWVudCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sdGlwXG4gICAgICAgIHZpc2libGVcbiAgICAgICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgICAgIG1vdXNlRW50ZXJEZWxheT17MH1cbiAgICAgICAgbW91c2VMZWF2ZURlbGF5PXswfVxuICAgICAgICBwb3B1cD1cInBvcHVwXCJcbiAgICAgICAgcmVmPXt0cmlnZ2VyID0+IHtcbiAgICAgICAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgaWQ9XCJjaGlsZHJlblwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTAwcHhcIiB9fT5cbiAgICAgICAgICBjaGlsZHJlblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICApXG4gIH1cbn1cblxuZGVzY3JpYmUoXCJUb29sdGlwXCIsICgpID0+IHtcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgamVzdC51c2VGYWtlVGltZXJzKClcbiAgfSlcblxuICBhZnRlckVhY2goKCkgPT4ge1xuICAgIGplc3QudXNlUmVhbFRpbWVycygpXG4gIH0pXG5cbiAgaXQoXCJUb29sdGlwIOaYr+WQpuato+ehrua4suafk+WQhOS9jee9ruagt+W8j1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdG9wTGVmdCA9IG1vdW50KDxUb29sdGlwTW91bnRlciBwbGFjZW1lbnQ9XCJ0b3BMZWZ0XCIgLz4pXG4gICAgY29uc3QgYm90dG9tUmlnaHQgPSBtb3VudCg8VG9vbHRpcE1vdW50ZXIgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIiAvPilcbiAgICBjb25zdCBsZWZ0VG9wID0gbW91bnQoPFRvb2x0aXBNb3VudGVyIHBsYWNlbWVudD1cImxlZnRUb3BcIiAvPilcbiAgICBjb25zdCByaWdodEJvdHRvbSA9IG1vdW50KDxUb29sdGlwTW91bnRlciBwbGFjZW1lbnQ9XCJyaWdodEJvdHRvbVwiIC8+KVxuXG4gICAgY29uc3Qge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogdG9wTGVmdFBhZGRpbmdCb3R0b20sXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogdG9wTGVmdFRyYW5zZm9ybU9yaWdpbixcbiAgICAgIH0sXG4gICAgfSA9IHRvcExlZnQuaW5zdGFuY2UoKS50cmlnZ2VyLmN1cnJlbnQucG9wdXBSZWYuY3VycmVudC5wb3B1cFJlZi5jdXJyZW50XG4gICAgZXhwZWN0KHRvcExlZnRQYWRkaW5nQm90dG9tKS50b0JlKFwiOHB4XCIpXG4gICAgZXhwZWN0KHRvcExlZnRUcmFuc2Zvcm1PcmlnaW4pLnRvQmUoXCIxOHB4IDEwMCVcIilcblxuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IGJvdHRvbVJpZ2h0UGFkZGluZ1RvcCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBib3R0b21SaWdodFRyYW5zZm9ybU9yaWdpbixcbiAgICAgIH0sXG4gICAgfSA9IGJvdHRvbVJpZ2h0Lmluc3RhbmNlKCkudHJpZ2dlci5jdXJyZW50LnBvcHVwUmVmLmN1cnJlbnQucG9wdXBSZWYuY3VycmVudFxuICAgIGV4cGVjdChib3R0b21SaWdodFBhZGRpbmdUb3ApLnRvQmUoXCI4cHhcIilcbiAgICBleHBlY3QoYm90dG9tUmlnaHRUcmFuc2Zvcm1PcmlnaW4pLnRvQmUoXCJjYWxjKDEwMCUgLSAxOHB4KSAtNHB4XCIpXG5cbiAgICBjb25zdCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6IGxlZnRUb3BQYWRkaW5nUmlnaHQsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogbGVmdFRvcFRyYW5zZm9ybU9yaWdpbixcbiAgICAgIH0sXG4gICAgfSA9IGxlZnRUb3AuaW5zdGFuY2UoKS50cmlnZ2VyLmN1cnJlbnQucG9wdXBSZWYuY3VycmVudC5wb3B1cFJlZi5jdXJyZW50XG4gICAgZXhwZWN0KGxlZnRUb3BQYWRkaW5nUmlnaHQpLnRvQmUoXCI4cHhcIilcbiAgICBleHBlY3QobGVmdFRvcFRyYW5zZm9ybU9yaWdpbikudG9CZShcIjEwMCUgMTBweFwiKVxuXG4gICAgY29uc3Qge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHJpZ2h0Qm90dG9tUGFkZGluZ0xlZnQsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogcmlnaHRCb3R0b21UcmFuc2Zvcm1PcmlnaW4sXG4gICAgICB9LFxuICAgIH0gPSByaWdodEJvdHRvbS5pbnN0YW5jZSgpLnRyaWdnZXIuY3VycmVudC5wb3B1cFJlZi5jdXJyZW50LnBvcHVwUmVmLmN1cnJlbnRcbiAgICBleHBlY3QocmlnaHRCb3R0b21QYWRkaW5nTGVmdCkudG9CZShcIjhweFwiKVxuICAgIGV4cGVjdChyaWdodEJvdHRvbVRyYW5zZm9ybU9yaWdpbikudG9CZShcIjAlIGNhbGMoMTAwJSAtIDEwcHgpXCIpXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKbog73lhoXpg6jpqbHliqhcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxUb29sdGlwXG4gICAgICAgIGFsaWduRWRnZVxuICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezB9XG4gICAgICAgIG1vdXNlTGVhdmVEZWxheT17MH1cbiAgICAgICAgcG9wdXA9ezxkaXYgaWQ9XCJwb3B1cFwiPnBvcHVwPC9kaXY+fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGlkPVwiY2hpbGRyZW5cIj5jaGlsZHJlbjwvZGl2PlxuICAgICAgPC9Ub29sdGlwPlxuICAgIClcbiAgICBjb25zdCBjaGlsZCA9IHdyYXBwZXIuZmluZChcIiNjaGlsZHJlblwiKS5hdCgwKVxuICAgIGNoaWxkLnNpbXVsYXRlKFwibW91c2VlbnRlclwiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJUcmlnZ2VyXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS5wb3B1cFZpc2libGVcbiAgICApLnRvQmUodHJ1ZSlcbiAgICBjaGlsZC5zaW11bGF0ZShcIm1vdXNlbGVhdmVcIilcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiVHJpZ2dlclwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKCkucG9wdXBWaXNpYmxlXG4gICAgKS50b0JlKGZhbHNlKVxuICB9KVxufSlcblxuZGVzY3JpYmUoXCJUb29sdGlwIOa1i+ivlSBoYW5kbGVQb3B1cEFsaWduIC0gVG9wXCIsICgpID0+IHtcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgamVzdC51c2VGYWtlVGltZXJzKClcblxuICAgIC8qKlxuICAgICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80MDAwNjY2M1xuICAgICAqIOmAmui/hyBtb2NrIGBnZXRCb3VuZGluZ0NsaWVudFJlY3Rg77yM5LmL5ZCO6L+Q6KGM55qE5omA5pyJIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIOmDveS8mui/lOWbnui/meWQjOS4gOS4quWAvOOAglxuICAgICAqL1xuICAgIEVsZW1lbnQucHJvdG90eXBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9IGplc3QuZm4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IDEyMCxcbiAgICAgICAgaGVpZ2h0OiAxMjAsXG4gICAgICAgIHRvcDogLTEwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAtMTAsXG4gICAgICAgIHRvSlNPTjogKCkgPT4ge30sXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBpdChcIuaYr+WQpuWkhOeQhiBQb3B1cEFsaWduXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICc8ZGl2IGlkPVwibW91bnRlclwiIC8+J1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxUb29sdGlwXG4gICAgICAgIHRlc3RcbiAgICAgICAgdmlzaWJsZVxuICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezB9XG4gICAgICAgIG1vdXNlTGVhdmVEZWxheT17MH1cbiAgICAgICAgcG9wdXA9XCJwb3B1cFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgaWQ9XCJjaGlsZHJlblwiPmNoaWxkcmVuPC9kaXY+XG4gICAgICA8L1Rvb2x0aXA+LFxuICAgICAgeyBhdHRhY2hUbzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3VudGVyXCIpIH1cbiAgICApXG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG4gICAgY29uc3QgY2hpbGQgPSB3cmFwcGVyLmZpbmQoXCIjY2hpbGRyZW5cIikuYXQoMClcbiAgICBhY3QoKCkgPT4ge1xuICAgICAgY2hpbGQuc2ltdWxhdGUoXCJtb3VzZWVudGVyXCIpXG4gICAgICAvLyBqZXN0IHJ1bkFsbFRpbWVycyDmmK/kuLrkuobop6blj5EgVG9vbHRpcCDlhoXnmoQgc2V0VGltZW91dCAwXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICAvLyDlv4XpobvmiafooYwgd3JhcHBlci51cGRhdGUg5ZCm5YiZ5ou/5Yiw55qEIHByb3Ag6L+Y5piv5pen55qEXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZW56eW1lanMvZW56eW1lI3JlYWN0LWhvb2tzLXN1cHBvcnRcbiAgICAgIC8vIOihgOeahOaVmeiurVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgIH0pXG5cbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiUG9wVHJpZ2dlclwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKCkucG9wdXBQbGFjZW1lbnRcbiAgICApLnRvQmUoXCJib3R0b21cIilcbiAgfSlcbn0pXG5cbmRlc2NyaWJlKFwiVG9vbHRpcCDmtYvor5UgaGFuZGxlUG9wdXBBbGlnbiAtIEJvdHRvbVwiLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGplc3QudXNlRmFrZVRpbWVycygpXG5cbiAgICAvKipcbiAgICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDAwMDY2NjNcbiAgICAgKiDpgJrov4cgbW9jayBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YO+8jOS5i+WQjui/kOihjOeahOaJgOaciSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCDpg73kvJrov5Tlm57ov5nlkIzkuIDkuKrlgLzjgIJcbiAgICAgKi9cbiAgICBFbGVtZW50LnByb3RvdHlwZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPSBqZXN0LmZuKCgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiAxMjAsXG4gICAgICAgIGhlaWdodDogMTIwLFxuICAgICAgICB0b3A6IDEwMDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDEwMDAsXG4gICAgICAgIHRvSlNPTjogKCkgPT4ge30sXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBpdChcIuaYr+WQpuWkhOeQhiBQb3B1cEFsaWduXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICc8ZGl2IGlkPVwibW91bnRlclwiIC8+J1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxUb29sdGlwXG4gICAgICAgIHRlc3RcbiAgICAgICAgdmlzaWJsZVxuICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezB9XG4gICAgICAgIG1vdXNlTGVhdmVEZWxheT17MH1cbiAgICAgICAgcG9wdXA9XCJwb3B1cFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgaWQ9XCJjaGlsZHJlblwiPmNoaWxkcmVuPC9kaXY+XG4gICAgICA8L1Rvb2x0aXA+LFxuICAgICAgeyBhdHRhY2hUbzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3VudGVyXCIpIH1cbiAgICApXG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG4gICAgY29uc3QgY2hpbGQgPSB3cmFwcGVyLmZpbmQoXCIjY2hpbGRyZW5cIikuYXQoMClcbiAgICBhY3QoKCkgPT4ge1xuICAgICAgY2hpbGQuc2ltdWxhdGUoXCJtb3VzZWVudGVyXCIpXG4gICAgICAvLyBqZXN0IHJ1bkFsbFRpbWVycyDmmK/kuLrkuobop6blj5EgVG9vbHRpcCDlhoXnmoQgc2V0VGltZW91dCAwXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICAvLyDlv4XpobvmiafooYwgd3JhcHBlci51cGRhdGUg5ZCm5YiZ5ou/5Yiw55qEIHByb3Ag6L+Y5piv5pen55qEXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZW56eW1lanMvZW56eW1lI3JlYWN0LWhvb2tzLXN1cHBvcnRcbiAgICAgIC8vIOihgOeahOaVmeiurVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgIH0pXG5cbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiUG9wVHJpZ2dlclwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKCkucG9wdXBQbGFjZW1lbnRcbiAgICApLnRvQmUoXCJ0b3BcIilcbiAgfSlcbn0pXG4iXX0=